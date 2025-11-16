import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBmwnN3cgkQpzB4qMzU5wmFC6hWbYKD0IE",
  authDomain: "monitoreo-tanques-f6178.firebaseapp.com",
  databaseURL: "https://monitoreo-tanques-f6178-default-rtdb.firebaseio.com",
  projectId: "monitoreo-tanques-f6178",
  storageBucket: "monitoreo-tanques-f6178.firebasestorage.app",
  messagingSenderId: "126824508982",
  appId: "1:126824508982:web:ad33c5726ebe5c24d83297"
};

const app = initializeApp(firebaseConfig);

// Exporta la base de datos para usarla donde la necesites
export const db = getDatabase(app);
