import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBuqU-6_pwK9bhMDIRJttnwm1vm6VND6II",
  authDomain:"davs-chatapp.firebaseapp.com",
  projectId: "davs-chatapp",
  storageBucket: "davs-chatapp.appspot.com",
  messagingSenderId: "327259695079",
  appId: "1:327259695079:web:2a2d43a3a158940786bf42",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);