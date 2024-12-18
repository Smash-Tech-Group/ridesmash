import { initializeApp } from "firebase/app";
// import { initializeApp } from 'firebase-admin/app';
// import { initializeAuth, getReactNativePersistence  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAuth } from "firebase/auth";


export const firebaseApp = initializeApp({
  // enter your firebase project details
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""



});

// export const auth = getAuth(firebaseApp)

export const db = getFirestore(firebaseApp);

export const storage = getStorage(firebaseApp);