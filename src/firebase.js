import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD_VrwsoUUCe0iVHe3ASMPjW3pVgW5iDBI",
    authDomain: "react-instagram-clone-56d8a.firebaseapp.com",
    databaseURL: "https://react-instagram-clone-56d8a.firebaseio.com",
    projectId: "react-instagram-clone-56d8a",
    storageBucket: "react-instagram-clone-56d8a.appspot.com",
    messagingSenderId: "650085023754",
    appId: "1:650085023754:web:434bd4a185b4fa915a9ff3",
    measurementId: "G-JK0CLMSRHV"
  });

  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  
export { db, auth, storage };

