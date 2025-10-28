// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBeLvCW8MR1PA5e1_dZsieHiwDUhWqNBLg",
    authDomain: "e-commerce-f7e66.firebaseapp.com",
    projectId: "e-commerce-f7e66",
    storageBucket: "e-commerce-f7e66.firebasestorage.app",
    messagingSenderId: "1006749326325",
    appId: "1:1006749326325:web:d314b22e6e490748319ebc",
    measurementId: "G-9XYGY18NEH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);