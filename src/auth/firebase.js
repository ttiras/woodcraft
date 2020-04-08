import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const config = {
  apiKey: "AIzaSyDMKiYJcnqEVWG1owHixKjoUMBz7KnNaRk",
  authDomain: "woodcraft-auth-41aa7.firebaseapp.com",
  databaseURL: "https://woodcraft-auth-41aa7.firebaseio.com",
  projectId: "woodcraft-auth-41aa7",
  storageBucket: "woodcraft-auth-41aa7.appspot.com",
  messagingSenderId: "2398689776",
  appId: "1:2398689776:web:267e88bdb959328f94a535",
  measurementId: "G-0XDJKMWQG5"
};

const fire = app.initializeApp(config);

export default fire;