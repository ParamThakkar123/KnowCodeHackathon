import lens from "./lens.png";
import loadingGif from "./loading.gif";
import { useState, useEffect } from "react";
import axios from 'axios';
import "./Chatbot.css";

function App() {
  const [prompt, updatePrompt] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState(undefined);
  const [file, setFile]=useState(null);
  const [pdf,setPDF]=useState(null);
  const [pdfUrl, setPDFUrl]=useState(null);
  // const [success,setSuccess]=useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log(selectedFile);
    setFile(selectedFile);
  };
  const handlePDFFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log(selectedFile);
    setPDF(selectedFile);
  };

  const uploadPDFFileToCloudinary=async()=>{
    if (!pdf) {
      console.error('No file selected.');
      return;
    }
 
    const formData = new FormData();
    formData.append('file', pdf);
    formData.append('upload_preset', 'hfcakj4l'); 
    formData.append('resource_type', 'raw'); 

    try{
        const response = await axios.post(
          'https://api.cloudinary.com/v1_1/dralpqhoq/raw/upload',
          formData
        );

        if(response.data.secure_url)
        {
          console.log('File uploaded to Cloudinary:', response.data.secure_url);
          setPDFUrl(response.data.secure_url);
        }
    }catch(error)
    {
      console.log('Error uploading file to cloudinary', error);
    }

  }
  const uploadFileToCloudinary = async () => {
    if (!file) {
      console.error('No file selected.');
      return;
    }
 
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'hfcakj4l'); 
    formData.append('resource_type', 'image'); 
 
    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dralpqhoq/image/upload',
        formData
      );
 
      if (response.data.secure_url) {
        console.log('File uploaded to Cloudinary:', response.data.secure_url);
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({"img_url": response.data.secure_url }),
        };
        const res = await fetch("http://localhost:5000/predict",requestOptions);
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
    
        const { result } = await res.json();
        console.log(`result: ${result}`);

        const options = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({"query": `I am suffering from ${result}. Suggest treatment and preventive measures` }),
        };
    
        const modelResult = await fetch("http://localhost:5000/answer", options);
        console.log(`status: ${modelResult.ok}`);

        if (!modelResult.ok) {
          throw new Error("Something went wrong");
        }
    
        const { message } = await modelResult.json();
        console.log(`message: ${message}`)
        setAnswer(message);
        
      } else {
        console.error('Cloudinary upload failed.');
      }
    } catch (error) {
      console.error('Error uploading file to Cloudinary:', error);
    }
  };



  const sendPrompt = async (event) => {
    if (event.key !== "Enter") {
      return;
    }
    try {
      setLoading(true);

      if(pdfUrl)
      {
          const PDFOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({"pdf_url": pdfUrl }),
          };
          const response = await fetch("http://localhost:5000/download_pdf", PDFOptions);
  
          if (!response.ok) {
            throw new Error("Something went wrong");
          }
      
          const { result } = await response.json();
          if(result==1)
          {
            // setSuccess(true);
            console.log("DONE")
            const requestOptions = {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({"query": prompt }),
            };
        
            const res = await fetch("http://localhost:5000/pdf_answer", requestOptions);
            console.log(`status: ${res.ok}`)
        
            if (!res.ok) {
              throw new Error("Something went wrong");
            }
        
            const { message } = await res.json();
            console.log(`message: ${message.output_text}`)
            setAnswer(message.output_text);
          }

      }
      else
      {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({"query": prompt }),
        };
    
        const res = await fetch("http://localhost:5000/answer", requestOptions);
        console.log(`status: ${res.ok}`)
    
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
    
        const { message } = await res.json();
        console.log(`message: ${message}`)
        setAnswer(message);
      }
    } catch (err) {
      console.error(err, "err");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    if (prompt != null && prompt.trim() === "") {
      setAnswer(undefined);
    }
  }, [prompt]);
  return (
    <>
    <div className="app">
      <div className="app-container">
        <div className="spotlight__wrapper">
          <input
            type="text"
            className="spotlight__input"
            placeholder="Ask me anything..."
            onChange={(e) => updatePrompt(e.target.value)}
            onKeyDown={(e) => sendPrompt(e)}
            disabled={loading}
            style={{
              backgroundImage: loading ? `url(${loadingGif})` : `url(${lens})`,
            }}
          />
          <div>
            <h2>Upload an image</h2>
            <input type="file" accept=".png, .jpg" onChange={handleFileChange} />
            <button onClick={uploadFileToCloudinary}>Upload</button>
          </div>
          <div>
            <h2>Upload a PDF file</h2>
            <input type="file" accept=".pdf" onChange={handlePDFFileChange} />
            <button onClick={uploadPDFFileToCloudinary}>Upload</button>
          </div>
            <div className="spotlight__answer">{answer && <p>{answer}</p>}</div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;