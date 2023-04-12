// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKf761UShAPBg39h5pa2Hn-B_9kzaRPHs",
    authDomain: "ecommerce-56017.firebaseapp.com",
    projectId: "ecommerce-56017",
    storageBucket: "ecommerce-56017.appspot.com",
    messagingSenderId: "196809088435",
    appId: "1:196809088435:web:498939b3ababfcd474ffc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;