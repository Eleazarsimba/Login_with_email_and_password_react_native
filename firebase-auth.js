import * as firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAuNd3kiMhrLIo_xkdGOCv6vGvUrCx18PU",
    authDomain: "elentify1.firebaseapp.com",
    projectId: "elentify1",
    storageBucket: "elentify1.appspot.com",
    messagingSenderId: "1014691015070",
    appId: "1:1014691015070:web:9a8943851876547499ce8f",
    measurementId: "G-RP9Q1MP7PG"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

const auth = firebase.auth()
const store = firebase.firestore()
export { auth, store };
