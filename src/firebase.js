import firebase from 'firebase';

const firebaseConfig ={
    apiKey: "AIzaSyC9RIatqeymaT8JT4-kXRcG6L9iTHmLN_I",
    authDomain: "nozama-7f83c.firebaseapp.com",
    projectId: "nozama-7f83c",
    storageBucket: "nozama-7f83c.appspot.com",
    messagingSenderId: "1032076363421",
    appId: "1:1032076363421:web:03765bb27ed9aeec16f674"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export{db, auth};
