// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE_WdOt_IA_LkyfEQ8gkrCp5LHSJ4m3k0",
  authDomain: "ecommerce-r-f91db.firebaseapp.com",
  projectId: "ecommerce-r-f91db",
  storageBucket: "ecommerce-r-f91db.firebasestorage.app",
  messagingSenderId: "183571382702",
  appId: "1:183571382702:web:2eb5ffd0cd0a68b0db083f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);