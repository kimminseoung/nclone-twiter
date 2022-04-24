import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";


const firebaseConfig = {
  apiKey:process.env.REACT_APP_API_KEY ,
  authDomain:process.env.REACT_APP_AuthDomain,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket:process.env.storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId,
  measurementId:process.env.REACT_APP_measurementId
};

export default firebase.initializeApp(firebaseConfig);
export const authService = firebase.auth();
export const firebaseInstance = firebase;