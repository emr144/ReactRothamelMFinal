import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "ferreteria-firebase-9e7ad.firebaseapp.com",
  projectId: "ferreteria-firebase-9e7ad",
  storageBucket: "ferreteria-firebase-9e7ad.appspot.com",
  messagingSenderId: "147746489276",
  appId: "1:147746489276:web:a006222dae833dca50e1b9"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };