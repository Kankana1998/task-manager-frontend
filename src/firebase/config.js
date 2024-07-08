import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCY4Xn7R-4XMsp20JdahkdLM_p0JUNvjZA",
    authDomain: "task-manager-f9c4a.firebaseapp.com",
    projectId: "task-manager-f9c4a",
    storageBucket: "task-manager-f9c4a.appspot.com",
    messagingSenderId: "962711711569",
    appId: "1:962711711569:web:887996effc5f2735486d70",
    measurementId: "G-P7SYE1HYVK"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, app };
