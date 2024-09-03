import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBeFEsyJsTQoXDFOmiwFV97nTYNtnn6pSw",
  authDomain: "authprojecterp.firebaseapp.com",
  projectId: "authprojecterp",
  storageBucket: "authprojecterp.appspot.com",
  messagingSenderId: "851426911107",
  appId: "1:851426911107:web:8fa693a779447056d80cb6",
  measurementId: "G-E485BP7XW4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
