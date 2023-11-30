import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "casa-de-musica-8a83c.firebaseapp.com",
    projectId: "casa-de-musica-8a83c",
    storageBucket: "casa-de-musica-8a83c.appspot.com",
    messagingSenderId: "385729329861",
    appId: "1:385729329861:web:c1cfc2bc95aefec688ceac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);