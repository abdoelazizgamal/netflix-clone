// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw2HOxKEEJJL3tUIo-EzOCh9jvuh5DPHo",
  authDomain: "netflix-clone-b87e9.firebaseapp.com",
  projectId: "netflix-clone-b87e9",
  storageBucket: "netflix-clone-b87e9.appspot.com",
  messagingSenderId: "1072894978758",
  appId: "1:1072894978758:web:d220852dd543da4f5905c7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
