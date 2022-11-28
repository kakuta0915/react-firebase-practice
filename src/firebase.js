import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDXoQVrAeMVmVXpRgjP9otJeylnqdixmrI",
    authDomain: "react-firebase-practice-1d28b.firebaseapp.com",
    projectId: "react-firebase-practice-1d28b",
    storageBucket: "react-firebase-practice-1d28b.appspot.com",
    messagingSenderId: "427109498919",
    appId: "1:427109498919:web:feaf31b90eb7ed78ac0e02"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
