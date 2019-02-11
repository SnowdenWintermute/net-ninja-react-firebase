import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBLkS-gUqzQ-a3ZzHFxqQv-WlViWjYRRwI",
  authDomain: "net-ninja-mario-plan-3a3eb.firebaseapp.com",
  databaseURL: "https://net-ninja-mario-plan-3a3eb.firebaseio.com",
  projectId: "net-ninja-mario-plan-3a3eb",
  storageBucket: "net-ninja-mario-plan-3a3eb.appspot.com",
  messagingSenderId: "759229450484"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
