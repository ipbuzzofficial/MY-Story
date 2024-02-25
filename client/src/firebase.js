// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "my-story-8ed17.firebaseapp.com",
  projectId: "my-story-8ed17",
  storageBucket: "my-story-8ed17.appspot.com",
  messagingSenderId: "367964366783",
  appId: "1:367964366783:web:a57cf674803d80021ca30a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

