import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7-_eICz_etNFjDPtpAzHalQnpTkDUWZg",
  authDomain: "expense-tracker-9aa1d.firebaseapp.com",
  projectId: "expense-tracker-9aa1d",
  storageBucket: "expense-tracker-9aa1d.appspot.com",
  messagingSenderId: "958287915366",
  appId: "1:958287915366:web:a4c1b6e89196e89c6440a7",
};

// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const db = app.firestore();
// export default app;
// export { db };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = app.firestore();

export default db;
