import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2E3kllz8RZRfAAsaqP7WuLvE84ZsEQvA",
  authDomain: "books-ae998.firebaseapp.com",
  projectId: "books-ae998",
  storageBucket: "books-ae998.appspot.com",
  messagingSenderId: "303186963610",
  appId: "1:303186963610:web:18114ccec8b55ac0cfc323",
  measurementId: "G-X9TJYM4D2Q",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Firebase Auth persistence set to LOCAL");
  })
  .catch((error) => {
    console.error("Auth persistence error:", error);
  });

export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
