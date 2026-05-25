import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyByu1dj3TpUMiZfFC5mVMg05c6Nn8KIgwc",
  authDomain: "qualified-host-4fbwx.firebaseapp.com",
  projectId: "qualified-host-4fbwx",
  storageBucket: "qualified-host-4fbwx.firebasestorage.app",
  messagingSenderId: "978283473239",
  appId: "1:978283473239:web:e6ffe22a9a8c3290527612"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db, collection, getDocs };
