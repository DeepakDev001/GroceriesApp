// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'; // Import Firestore
const firebaseConfig = {
    apiKey: "AIzaSyDfzEXXJvWArYfzxSehoWFDFlo-7Hw5dFw",
    authDomain: "grocery-001-18ed7.firebaseapp.com",
    projectId: "grocery-001-18ed7",
    storageBucket: "grocery-001-18ed7.appspot.com",
    messagingSenderId: "389358257534",
    appId: "1:389358257534:web:12be1f8ceaad6eaaa39f2f"
};

const app = initializeApp(firebaseConfig);
const authentication = getAuth(app)
const database = getFirestore(); // Add Firestore instance export
export { authentication, database }