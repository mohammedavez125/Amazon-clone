// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDiDGl5XW9tddTmG8J__nI54bKReujYTb4",
  authDomain: "clone-5f1c6.firebaseapp.com",
  projectId: "clone-5f1c6",
  storageBucket: "clone-5f1c6.appspot.com",
  messagingSenderId: "158087261595",
  appId: "1:158087261595:web:dfe1569c735c6b6570453e",
  measurementId: "G-HMBN7X4SXW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
