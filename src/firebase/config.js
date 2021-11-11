import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAVbCD3lt-AJcoRdCRKfxeUZOpl85-MMNw",
    authDomain: "live-chatroom-68711.firebaseapp.com",
    projectId: "live-chatroom-68711",
    storageBucket: "live-chatroom-68711.appspot.com",
    messagingSenderId: "727652119064",
    appId: "1:727652119064:web:0874503d7fd29cc7fc496d"
};

// init firebase 
firebase.initializeApp(firebaseConfig)
// init firestore
const projectFirestore = firebase.firestore()

const projectAuth = firebase.auth()

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectAuth , projectFirestore ,timestamp}