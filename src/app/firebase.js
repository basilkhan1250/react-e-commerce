// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  // ✅ add this
import { getAuth } from "firebase/auth";             // ✅ add this
import { getAnalytics } from "firebase/analytics";   // optional

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeLvCW8MR1PA5e1_dZsieHiwDUhWqNBLg",
  authDomain: "e-commerce-f7e66.firebaseapp.com",
  projectId: "e-commerce-f7e66",
  storageBucket: "e-commerce-f7e66.firebasestorage.app", // ⚠️ should be `.appspot.com` usually
  messagingSenderId: "1006749326325",
  appId: "1:1006749326325:web:d314b22e6e490748319ebc",
  measurementId: "G-9XYGY18NEH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (optional)
const analytics = getAnalytics(app);

// ✅ Initialize services
export const db = getFirestore(app);
export const auth = getAuth(app);
