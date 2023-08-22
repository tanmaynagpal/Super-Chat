import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4IW2BXLWjEdm-ckZNVt83LP1K54k_X20",
  authDomain: "chat-b32e9.firebaseapp.com",
  projectId: "chat-b32e9",
  storageBucket: "chat-b32e9.appspot.com",
  messagingSenderId: "606034544331",
  appId: "1:606034544331:web:7cd29d5b8329f070903d4e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
