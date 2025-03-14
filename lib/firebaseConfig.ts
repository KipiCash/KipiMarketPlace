// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDw0Q-gHNjXfojXhPQZYiyI1EpzZRFnJkQ",
  authDomain: "kipi-landing.firebaseapp.com",
  projectId: "kipi-landing",
  storageBucket: "kipi-landing.firebasestorage.app",
  messagingSenderId: "833035803060",
  appId: "1:833035803060:web:e43ae9acda09d8a8c6fae1",
  measurementId: "G-ZTHGVDWKZ1"
};



// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtiene la instancia de Firestore
const db = getFirestore(app);

export { db, addDoc, collection };