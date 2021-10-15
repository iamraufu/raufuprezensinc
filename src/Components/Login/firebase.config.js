// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYw855FrjRX5cjCVpiD7vLX0IOL77BUZ0",
  authDomain: "raufuprezens-ef892.firebaseapp.com",
  projectId: "raufuprezens-ef892",
  storageBucket: "raufuprezens-ef892.appspot.com",
  messagingSenderId: "745271923648",
  appId: "1:745271923648:web:6a0c85c16c9bb33510ae25",
  measurementId: "G-V3TBDX66S7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);