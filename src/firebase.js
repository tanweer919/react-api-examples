import firebase from "firebase";
import "firebase/auth"
import "firebase/firestore"
var firebaseConfig = {
  apiKey: "AIzaSyDcWabGWI1fJuQ6qqzMz43yXz2cpywne0M",
  authDomain: "react-api-example-e80d4.firebaseapp.com",
  databaseURL: "https://react-api-example-e80d4.firebaseio.com",
  projectId: "react-api-example-e80d4",
  storageBucket: "react-api-example-e80d4.appspot.com",
  messagingSenderId: "485838063896",
  appId: "1:485838063896:web:ce225a2575f9a1c33c766d",
  measurementId: "G-R0X8XWDXKS",
};
firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth();
export const firestore = firebase.firestore();
