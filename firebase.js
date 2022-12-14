import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdUbAXu5pQqk67-ULiUD1aFEYt1aFgKQM",
  authDomain: "rn-igclone-c290e.firebaseapp.com",
  projectId: "rn-igclone-c290e",
  storageBucket: "rn-igclone-c290e.appspot.com",
  messagingSenderId: "728453030255",
  appId: "1:728453030255:web:e050e8054f37327e4f489a",
  measurementId: "G-556CRR959J",
};

firebase.initializeApp(firebaseConfig);
const db = getFirestore(firebase);
export default { firebase, db };
