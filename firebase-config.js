// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDUAt7FBQhRAFRlFGu_uBAYjIhJNM5qWmg",
  authDomain: "eventsports-3ae58.firebaseapp.com",
  projectId: "eventsports-3ae58",
  storageBucket: "eventsports-3ae58.firebasestorage.app",
  messagingSenderId: "1093400102504",
  appId: "1:1093400102504:web:325b25231cc4c334c25ddd"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };