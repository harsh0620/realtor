// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqx0XXirY7_xXYy8QRXDukeVYoGXb6ZOY",
  authDomain: "realtor-fdd2b.firebaseapp.com",
  projectId: "realtor-fdd2b",
  storageBucket: "realtor-fdd2b.appspot.com",
  messagingSenderId: "163329212658",
  appId: "1:163329212658:web:c28d6a07ef61c2c413506b",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
