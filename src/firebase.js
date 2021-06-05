import firebase from "firebase";
import "firebase/storage";

export const app = firebase.initializeApp({
  apiKey: "AIzaSyDU5gAuyqfG9u5odECxhRiY3A7CNd5nDQk",
  authDomain: "fir-d7fb6.firebaseapp.com",
  projectId: "fir-d7fb6",
  storageBucket: "fir-d7fb6.appspot.com",
  messagingSenderId: "760424095184",
  appId: "1:760424095184:web:03cf278be4357b84676dd5",
  measurementId: "G-HL5W8RFHMZ",
});
const db = app.firestore();
let provider = new firebase.auth.GoogleAuthProvider();
const auth = app.auth();
export { provider, auth };
export default db;
