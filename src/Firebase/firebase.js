import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBThXEF3ANcqNM5vDK0xxxIXxgjaQbppkg",
  authDomain: "ecommerce-ss-e9951.firebaseapp.com",
  projectId: "ecommerce-ss-e9951",
  storageBucket: "ecommerce-ss-e9951.appspot.com",
  messagingSenderId: "18486729765",
  appId: "1:18486729765:web:77144cca55bd990af573cc",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
