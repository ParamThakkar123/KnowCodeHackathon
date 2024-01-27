// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import dotenv from 'dotenv'
dotenv.config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "healthhub2-4ec30.firebaseapp.com",
  projectId: "healthhub2-4ec30",
  storageBucket: "healthhub2-4ec30.appspot.com",
  messagingSenderId: "542554296102",
  appId: "1:542554296102:web:4102e4a68894f3f0973be7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);