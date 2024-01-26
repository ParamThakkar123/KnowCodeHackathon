// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "healthhub-74017.firebaseapp.com",
  projectId: "healthhub-74017",
  storageBucket: "healthhub-74017.appspot.com",
  messagingSenderId: "943338295505",
  appId: "1:943338295505:web:34fac8200ec8fdab0175f0",
  measurementId: "G-HC01X2M55X"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)