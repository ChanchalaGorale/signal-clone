//import { app as myapp } from "firebase/app";
import "firebase/firestore";
import { auth as myauth } from "firebase/auth";
import { initializeApp } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBPCPcHeSXdC92q4Cs2cMJV3j_Hkqczxoo",
  authDomain: "signalclone-e3712.firebaseapp.com",
  projectId: "signalclone-e3712",
  storageBucket: "signalclone-e3712.appspot.com",
  messagingSenderId: "500826658338",
  appId: "1:500826658338:web:cd1cfd74657edd879c9c7b",
};

let app = initializeApp(firebaseConfig);

const db = app.firestore();

const auth = myauth();

export { db, auth };
