// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // <-- 1. Tambahkan import ini

const firebaseConfig = {
  apiKey: "AIzaSyA792i_-ktN0KLo9hfVMfKVDCUiMN56zKk",
  authDomain: "undanganpernikahan-f7361.firebaseapp.com",
  projectId: "undanganpernikahan-f7361",
  storageBucket: "undanganpernikahan-f7361.firebasestorage.app",
  messagingSenderId: "1084952748199",
  appId: "1:1084952748199:web:eea1f471ac1bb1dafabb82",
  measurementId: "G-7LL3E621T6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 2. Inisialisasi dan export db
export const db = getFirestore(app);