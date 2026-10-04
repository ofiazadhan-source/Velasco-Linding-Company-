// LINDING COOP V2 - CASINO-PLUS-GAME Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBnAiat7Y8YvBp4WVsSGmRdDMKCJYzkCiw",
  authDomain: "casino-plus-game.firebaseapp.com",
  projectId: "casino-plus-game",
  storageBucket: "casino-plus-game.firebasestorage.app",
  messagingSenderId: "293210899446",
  appId: "1:293210899446:web:a0e56e65c46972c6a0fdd7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
