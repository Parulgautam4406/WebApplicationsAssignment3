import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Replace with your Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAHC4giqw_J32kwhkgYlEjeoICPKZ6TD0I',
  authDomain: 'numeric-oarlock-358919.firebaseapp.com',
  projectId: 'numeric-oarlock-358919',
  storageBucket: 'numeric-oarlock-358919.appspot.com',
  messagingSenderId: '515309793206',
  appId: '1:515309793206:web:fe38c3ca10ad65148fdb17',
  measurementId: 'G-MHG7VJ9R6J',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
