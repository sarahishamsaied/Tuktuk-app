import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDl2rAy0DaBZO8SC8Y1hDrwuV-b5Sa1moY",
  authDomain: "cab-app-45df9.firebaseapp.com",
  projectId: "cab-app-45df9",
  storageBucket: "cab-app-45df9.appspot.com",
  messagingSenderId: "364331089889",
  appId: "1:364331089889:web:f61fd3fa7d50f843f2dca0",
  measurementId: "G-JF7FYZKGZN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
export { app, provider, auth };
