import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRVBZlxyJOPWz2qidzuW3wHnUKTw11XVg",
  authDomain: "netflix-7dfba.firebaseapp.com",
  projectId: "netflix-7dfba",
  storageBucket: "netflix-7dfba.appspot.com",
  messagingSenderId: "929273315649",
  appId: "1:929273315649:web:bfc8b20ac8f1bd0f7961c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);
export {auth};
export default db;