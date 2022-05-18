import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAfZagZ66T2DGgmxJAVhD5mDQFiFZmQpBc",
    authDomain: "t-movie-f4d96.firebaseapp.com",
    projectId: "t-movie-f4d96",
    storageBucket: "t-movie-f4d96.appspot.com",
    messagingSenderId: "255212834469",
    appId: "1:255212834469:web:117a0ee457bca53abcc74c",
    measurementId: "G-3Z13WX8E15"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage()
export {auth,provider,storage} ;
export default db