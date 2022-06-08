import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDBffUflGr1ZvGaw_pKrivKRjsAS7bXEF8",
    authDomain: "twitter-clone-51277.firebaseapp.com",
    projectId: "twitter-clone-51277",
    storageBucket: "twitter-clone-51277.appspot.com",
    messagingSenderId: "196743723591",
    appId: "1:196743723591:web:7c06787d2cbc0176980f62",
    measurementId: "G-JGMM9G3JZE"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;