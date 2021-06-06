import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADl_XDtTrTqOtgfuqMLWE8j8hviV2N2N8",
  authDomain: "signal-clone-rn-5962b.firebaseapp.com",
  projectId: "signal-clone-rn-5962b",
  storageBucket: "signal-clone-rn-5962b.appspot.com",
  messagingSenderId: "819172028034",
  appId: "1:819172028034:web:2a056d4d7ab361fd0e0e9b",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
