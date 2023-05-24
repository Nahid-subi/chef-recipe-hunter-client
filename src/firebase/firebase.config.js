// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2ZyzOvm-sGTgcbmxL3-gmtAcokM4jP2c",
  authDomain: "chinese-recipes-6bb93.firebaseapp.com",
  projectId: "chinese-recipes-6bb93",
  storageBucket: "chinese-recipes-6bb93.appspot.com",
  messagingSenderId: "340445990220",
  appId: "1:340445990220:web:38431e59b362560181d3e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)