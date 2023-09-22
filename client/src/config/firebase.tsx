// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChTJC5ubyCfsglmhHopdXJ4NYqYB1TEZM",
  authDomain: "spotify-5a4d8.firebaseapp.com",
  projectId: "spotify-5a4d8",
  storageBucket: "spotify-5a4d8.appspot.com",
  messagingSenderId: "310288182647",
  appId: "1:310288182647:web:faac3c39cdb4e3f3780572",
  measurementId: "G-8P79D6GFJ0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
