import { initializeApp } from "firebase/app";
//import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9DGC8qO7ikML0KtJ4iKZEYBwJPyaBCkw",
  authDomain: "pet-shop-firebase.firebaseapp.com",
  projectId: "pet-shop-firebase",
  storageBucket: "pet-shop-firebase.appspot.com",
  messagingSenderId: "78641369596",
  appId: "1:78641369596:web:43639f5608cfa57b7ca279"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
//export const FIREBASE_AUTH = getAuth(FIREBASE_APP)