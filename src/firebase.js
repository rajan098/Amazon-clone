import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAKdh66VFWU_w3lJvBelS1DljOclq1W9XQ",
  authDomain: "clon.firebaseapp.com",
  databaseURL: "https://amazon-clon-default-rtdb.firebaseio.com",
  projectId: "amazon-clon",
  storageBucket: "amazon-clon.appspot.com",
  messagingSenderId: "794331309560",
  appId: "1:794331309560:web:48081e626d8bdeffd7620d"
};


// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};