import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5FNoD-QxbtQOKzzeMsxbhQqxbqj2RqfE",
  authDomain: "olx-clone-e3d56.firebaseapp.com",
  projectId: "olx-clone-e3d56",
  storageBucket: "olx-clone-e3d56.appspot.com",
  messagingSenderId: "1088087509370",
  appId: "1:1088087509370:web:3fb692e44a1d2f91ca2ec3",
  measurementId: "G-G5W8QRJR70"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, analytics, db ,auth };
