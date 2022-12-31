// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCOHmIH19t0-6R2K3PQB0XwN9OmRPKEFmA",
    authDomain: "erp-frontend-f9329.firebaseapp.com",
    projectId: "erp-frontend-f9329",
    storageBucket: "erp-frontend-f9329.appspot.com",
    messagingSenderId: "1093226849204",
    appId: "1:1093226849204:web:10a2c41724d90b0c9cc8e1",
    measurementId: "G-FLG1SM4V80"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);