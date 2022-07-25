// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBqlz13bOimTv8VaLZ0o53RkmoGmkVrRac",
  authDomain: "farmweb-fe430.firebaseapp.com",
  projectId: "farmweb-fe430",
  storageBucket: "farmweb-fe430.appspot.com",
  messagingSenderId: "1063333568707",
  appId: "1:1063333568707:web:595c626a0a95fa20d18276",
  measurementId: "G-C31ETYV28G"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db
