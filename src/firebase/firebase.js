import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyA4s257LOkcp9QEqKZWpByqwbfCvwnu4iY",
    authDomain: "tornillos-a875d.firebaseapp.com",
    projectId: "tornillos-a875d",
    storageBucket: "tornillos-a875d.appspot.com",
    messagingSenderId: "353891088662",
    appId: "1:353891088662:web:6406e369f43cd8a9f47837"
};

const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore(app);
