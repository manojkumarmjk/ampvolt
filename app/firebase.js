// firebase.js
import firebase from 'firebase/app';
import 'firebase/database'; // Import specific services you need

const firebaseConfig = {
    apiKey: "AIzaSyD2YU8inGfwm_0pPYjzPIJYxf5EDkmNrtw",
    authDomain: "amp-volt.firebaseapp.com",
    projectId: "amp-volt",
    storageBucket: "amp-volt.appspot.com",
    messagingSenderId: "393524591166",
    appId: "1:393524591166:web:02ea5b803a8c9928096f6f",
    measurementId: "G-350GN2KKNQ"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
