import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfbIhFKQddtr3XjrhymrDOl8xNPIAMCbM",
  authDomain: "smartdev-3bf4c.firebaseapp.com",
  databaseURL: "https://smartdev-3bf4c.firebaseio.com",
  projectId: "smartdev-3bf4c",
  storageBucket: "smartdev-3bf4c.appspot.com",
  messagingSenderId: "493638833037",
  appId: "1:493638833037:web:5ca9a37890d0e561d4a3c4",
  measurementId: "G-VCSD1HZERS",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
