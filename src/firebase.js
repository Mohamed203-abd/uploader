import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCeOymW84M8G8MgofFouFLR5x6yz_w3Dt4",
  authDomain: "settawsetteen.firebaseapp.com",
  projectId: "settawsetteen",
  storageBucket: "settawsetteen.firebasestorage.app",
  messagingSenderId: "494471179137",
  appId: "1:494471179137:web:d52be1d0bc788b67a8d680"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);      // 🔹 Auth
export const storage = getStorage(app); // 🔹 Storage
export const db = getFirestore(app);    // 🔹 Firestore
