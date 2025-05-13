
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAydC35vtnk4hEeK4eweRdXi2HbrLQBqD8",
  authDomain: "ferreteria-firebase-9e7ad.firebaseapp.com",
  projectId: "ferreteria-firebase-9e7ad",
  storageBucket: "ferreteria-firebase-9e7ad.firebasestorage.app",
  messagingSenderId: "147746489276",
  appId: "1:147746489276:web:a006222dae833dca50e1b9",
  measurementId: "G-X6QNZQ9ZWE"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseApp =() => {   
  initializeApp(firebaseConfig)
}