import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/auth";
require('firebase/firestore')

const firebaseConfig = {

};
  // Initialize Firebase

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export default db;
