// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string | undefined,
  authDomain: "newwordle-appworks-school.firebaseapp.com",
  projectId: "newwordle-appworks-school",
  storageBucket: "newwordle-appworks-school.appspot.com",
  messagingSenderId: "95084663410",
  appId: "1:95084663410:web:7ef2bbe5618e8eb00de8eb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
