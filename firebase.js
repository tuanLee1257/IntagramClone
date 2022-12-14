// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// import {getAnalytics} from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdUbAXu5pQqk67-ULiUD1aFEYt1aFgKQM",
  authDomain: "rn-igclone-c290e.firebaseapp.com",
  projectId: "rn-igclone-c290e",
  storageBucket: "rn-igclone-c290e.appspot.com",
  messagingSenderId: "728453030255",
  appId: "1:728453030255:web:e050e8054f37327e4f489a",
  measurementId: "G-556CRR959J",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
// const analytics = getAnalytics(app);
