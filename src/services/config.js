import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDfc3NLxQ1-JihCknivrmLGaeVUPwr-csc",
    authDomain: "casademusica-9bdd4.firebaseapp.com",
    projectId: "casademusica-9bdd4",
    storageBucket: "casademusica-9bdd4.appspot.com",
    messagingSenderId: "571483152256",
    appId: "1:571483152256:web:bc4e3a7d1478b0a9cb6b65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);