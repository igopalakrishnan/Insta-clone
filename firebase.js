import firebase from 'firebase';
import 'firebase/firestore';
//import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyA0Z6tZQj4Xzy0Id81AS_0VX0QO0qc9Tj0",
    authDomain: "insta-clone-3ccfe.firebaseapp.com",
    projectId: "insta-clone-3ccfe",
    storageBucket: "insta-clone-3ccfe.appspot.com",
    messagingSenderId: "342962158214",
    appId: "1:342962158214:web:9ff1423c358db645afef07"
};


!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = firebase.firestore()

export  { firebase, db }