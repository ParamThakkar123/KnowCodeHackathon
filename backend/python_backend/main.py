from langchain.document_loaders import UnstructuredPDFLoader
import google.generativeai as genai
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.vectorstores import Chroma
from langchain.chains.question_answering import load_qa_chain
from langchain import PromptTemplate
import warnings
from dotenv import load_dotenv
import os
from flask import Flask,request
import requests
import json
from torchvision import transforms
import torch
import shutil
from PIL import Image
from flask_cors import CORS, cross_origin

 
app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'

warnings.filterwarnings("ignore")
load_dotenv()

classes=['Actinic keratoses and intraepithelial carcinomae', 'basal cell carcinoma', 'benign keratosis-like lesions', 'dermatofibroma', 'melanoma', 'melanocytic nevi', 'pyogenic granulomas and hemorrhage']

transform = transforms.Compose([
                    transforms.Resize((224,224)),
                    transforms.ToTensor(),
                    transforms.Normalize((0.4914, 0.4822, 0.4465), (0.2023, 0.1994, 0.2010)),
                    ])


model=torch.load(r'./skin_model.pth',map_location=torch.device('cpu'))

def load_model():  
  api_key=os.getenv("GOOGLE_API_KEY")
  genai.configure(api_key=api_key)
  model = ChatGoogleGenerativeAI(model="gemini-pro",
                             temperature=0.3)
  
  return model

def download_pdf_from_cloudinary(cloudinary_url, local_filename="temp.pdf"):
    try:
        # Make an HTTP GET request to the Cloudinary URL
        response = requests.get(cloudinary_url, stream=True)

        # Check if the request was successful (HTTP status code 200)
        if response.status_code == 200:
            # Open a local file in binary write mode and write the response content
            with open(local_filename, 'wb') as local_file:
                for chunk in response.iter_content(chunk_size=128):
                    local_file.write(chunk)
            print(f"PDF downloaded successfully as {local_filename}")
            return True
        else:
            print(f"Failed to download PDF. HTTP Status Code: {response.status_code}")
            return False

    except Exception as e:
        print(f"Error downloading PDF: {str(e)}")
        return False


def load_embeddings():
  embeddings = GoogleGenerativeAIEmbeddings(model = "models/embedding-001")

  return embeddings

pdf_model=load_model()
embeddings=load_embeddings()

def handle_pdf():
  loader = UnstructuredPDFLoader("temp.pdf")
  pages=loader.load_and_split()
  print(pages[0].page_content)
  text_splitter = RecursiveCharacterTextSplitter(chunk_size=10000, chunk_overlap=1000)
  context = "\n\n".join(str(p.page_content) for p in pages)
  texts = text_splitter.split_text(context)

  return texts

def main(query):
  texts=handle_pdf()
  vector_store = Chroma.from_texts(texts, embeddings).as_retriever()
  prompt_template = """
    Please answer the question in as much detail as possible based on the provided context.
    If the answer is not available in the provided context,
  kindly respond with "undefined"
  Ensure to include all relevant details. Please avoid providing incorrect answers.
  \n\n
    Context:\n {context}?\n
    Question: \n{question}\n

    Answer:
  """

  prompt = PromptTemplate(template = prompt_template, input_variables = ["context", "question"])

  chain = load_qa_chain(pdf_model, chain_type="stuff", prompt=prompt)

  docs = vector_store.get_relevant_documents(query)
  response = chain(
      {"input_documents":docs, "question": query}
      , return_only_outputs=True)
  
  print(response)
  
  return response

@app.route('/')
@cross_origin()
def home():
    return "Welcome"

@app.route('/answer',methods=['POST'])
@cross_origin()
def answer():
  model=genai.GenerativeModel('gemini-pro')
  query=request.get_json()['query']
  response = model.generate_content(query)
  return json.dumps({"message":response.text})

@app.route('/predict',methods=['POST'])
@cross_origin()
def predict_image():
    try:
        url=request.get_json()['img_url']
        res=requests.get(url,stream=True)
        if res.status_code==200:
            with open('temp.jpg','wb') as f:
                shutil.copyfileobj(res.raw,f)
        else:
            return json.dumps({"error":"Invalid URL"})
        
        img=Image.open(r'./temp.jpg').convert('RGB')
        input_tensor = transform(img)
        input_tensor=input_tensor.unsqueeze(0)

        model.eval()
        outputs = model(input_tensor)
        _, predicted = torch.max(outputs.data, 1)

        return json.dumps({"result":classes[predicted[0]]})
    except Exception as e:
        return json.dumps({"error":str(e)})
    
@app.route('/download_pdf',methods=['POST'])
@cross_origin()
def download_pdf():
   try:
      url=request.get_json()['pdf_url']
      download_pdf_from_cloudinary(url)
      # message= main(url)
      success = download_pdf_from_cloudinary(url)

      if success:
        return json.dumps({"result": 1})
      else:
        return json.dumps({"result": 0})

   except Exception as e:
        return json.dumps({"error":str(e)})
   
@app.route('/pdf_answer',methods=['POST'])
@cross_origin()
def get_pdf_answer():
   try:
      query=request.get_json()['query']
      response=main(query)
      return json.dumps({"message":response})

   except Exception as e:
        return json.dumps({"error":str(e)})
   
if __name__=='__main__':
  app.run(port=5000,debug=True)