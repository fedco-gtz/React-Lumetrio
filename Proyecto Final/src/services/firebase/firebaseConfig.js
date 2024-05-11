import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAQRHkKK3wZ_33pV_NjABRFqQu34YqUAso",
  authDomain: "funko-3fced.firebaseapp.com",
  projectId: "funko-3fced",
  storageBucket: "funko-3fced.appspot.com",
  messagingSenderId: "938776616531",
  appId: "1:938776616531:web:5c3e2fd38e1e1ad50f70a6"
};

export const app = initializeApp(firebaseConfig);