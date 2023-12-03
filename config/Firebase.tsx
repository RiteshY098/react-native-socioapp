import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/auth";
require('firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyD27EHQuNkdUNVn8Su9EHPz-aIOodWSsOA",
  authDomain: "insta-clone-app-e1093.firebaseapp.com",
  projectId: "insta-clone-app-e1093",
  storageBucket: "insta-clone-app-e1093.appspot.com",
  messagingSenderId: "222843265304",
  appId: "1:222843265304:web:29f0c4242e7c8673ee3e6d",
  measurementId: "G-9WCDV1H26Q"
};
  // Initialize Firebase

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export default db;