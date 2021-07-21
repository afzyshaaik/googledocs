import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCdQmm9OBsOJ8Zl2g4OdzA2dedW4GtJfBI",
    authDomain: "docs-1699f.firebaseapp.com",
    projectId: "docs-1699f",
    storageBucket: "docs-1699f.appspot.com",
    messagingSenderId: "365954908887",
    appId: "1:365954908887:web:6497f6e711e46e660a2692"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();


  const db = app.firestore();

  export {db};