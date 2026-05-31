import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAhqiUUdstrVNRI48d4YQtlr1FV4mrFDU3Y",
  authDomain: "busbase-ticketer.firebaseapp.com",
  projectId: "busbase-ticketer",
  storageBucket: "busbase-ticketer.firebasestorage.app",
  messagingSenderId: "454975655107",
  appId: "1:454975655107:web:b4e3cc3f97b68d07ec6676"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
