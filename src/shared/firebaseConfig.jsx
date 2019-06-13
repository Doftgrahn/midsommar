import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const firebaseConfig = {
    apiKey: "AIzaSyCx0EM8D3_Z-98Kj-nJGtRDz8NoTrd7Qc0",
    authDomain: "midsommar-40da9.firebaseapp.com",
    databaseURL: "https://midsommar-40da9.firebaseio.com",
    projectId: "midsommar-40da9",
    storageBucket: "midsommar-40da9.appspot.com",
    messagingSenderId: "396795917306",
    appId: "1:396795917306:web:efe63a5c4fb51d4e"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export const provider = new firebase.auth.FacebookAuthProvider();
