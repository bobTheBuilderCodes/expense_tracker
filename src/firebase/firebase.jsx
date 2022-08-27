import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyA7-_eICz_etNFjDPtpAzHalQnpTkDUWZg",
//   authDomain: "expense-tracker-9aa1d.firebaseapp.com",
//   projectId: "expense-tracker-9aa1d",
//   storageBucket: "expense-tracker-9aa1d.appspot.com",
//   messagingSenderId: "958287915366",
//   appId: "1:958287915366:web:a4c1b6e89196e89c6440a7",
// };

const firebaseConfig = {
  apiKey: "AIzaSyD945KWhERevN4WECBqEuTeRDxGeB74wWM",
  authDomain: "xpense-tracker-dfd1c.firebaseapp.com",
  projectId: "xpense-tracker-dfd1c",
  storageBucket: "xpense-tracker-dfd1c.appspot.com",
  messagingSenderId: "850810499431",
  appId: "1:850810499431:web:7fbbc81c3633dc3315ffc2",
  measurementId: "G-K0VMZZ4RN6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
