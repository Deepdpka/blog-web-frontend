// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9djnWRTKBYdbNzDxsUlBtapAe7z3p8pQ",
  authDomain: "blog-website-88a4d.firebaseapp.com",
  projectId: "blog-website-88a4d",
  storageBucket: "blog-website-88a4d.appspot.com",
  messagingSenderId: "555469110716",
  appId: "1:555469110716:web:1bd41ef6712ab87ac6bfb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

const auth = getAuth(app);

export const authWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("Logged in:", user);
    return user;
  } catch (error) {
    console.error("Google login failed:", error.message);
    alert("Google login failed: " + error.message);
    return null;
  }
};
