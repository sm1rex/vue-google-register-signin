// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBKqWYK3pMOPwURa_-zXvY8XsDLKggtyWE",
    authDomain: "sign-in-vue.firebaseapp.com",
    projectId: "sign-in-vue",
    storageBucket: "sign-in-vue.appspot.com",
    messagingSenderId: "348820253721",
    appId: "1:348820253721:web:cf8dd582750d7a6b2fce88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

export { app, auth }