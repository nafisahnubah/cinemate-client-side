// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8nwUsIlOEZmdFWznclL__iePd3xp4XtA",
  authDomain: "cinemate-ef377.firebaseapp.com",
  projectId: "cinemate-ef377",
  storageBucket: "cinemate-ef377.firebasestorage.app",
  messagingSenderId: "813475206432",
  appId: "1:813475206432:web:27343e17368d493c3cf345"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);