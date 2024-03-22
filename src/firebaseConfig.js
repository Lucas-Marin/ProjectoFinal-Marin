// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATWQyCsAOHaM9cTTS9rFJlwfqOh7NmcVE",
  authDomain: "backend-e-commerce-89108.firebaseapp.com",
  projectId: "backend-e-commerce-89108",
  storageBucket: "backend-e-commerce-89108.appspot.com",
  messagingSenderId: "552352538977",
  appId: "1:552352538977:web:5342a366c6d6d2beff6520"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)