import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAIzbAcCxSifEwYv5tntJPAyxSrvUN5ALs",
  authDomain: "science3-c85d4.firebaseapp.com",
  projectId: "science3-c85d4",
  storageBucket: "science3-c85d4.appspot.com",
  messagingSenderId: "188042430",
  appId: "1:188042430:web:55e8db4b564055cb9a62ef",
  measurementId: "G-Y2XSXP84FE",
});

var db = firebaseApp.firestore();

export { db };
