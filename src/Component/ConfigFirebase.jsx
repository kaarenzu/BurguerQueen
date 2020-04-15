import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'



// Llave de firebase para poder acceder a la base de datos que tenemos en ella 
const firebaseConfig = {
  apiKey: "AIzaSyDRBVO79R3WeVe0MdeGHn6tVQ4ycmLOKTQ",
  authDomain: "myburgerqueen-8f820.firebaseapp.com",
  databaseURL: "https://myburgerqueen-8f820.firebaseio.com",
  projectId: "myburgerqueen-8f820",
  storageBucket: "myburgerqueen-8f820.appspot.com",
  messagingSenderId: "601456150986",
  appId: "1:601456150986:web:a29a406b7ab231e148a733",
  measurementId: "G-BNYFXVFD1J"
};

firebase.initializeApp(firebaseConfig);

 let db= firebase.firestore(); // Conectamos firebase con firestore
  export {db, firebase}