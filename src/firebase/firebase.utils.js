import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD6RSv8wc6tVMMLs0XRXd4hcXhcCyq2eH0",
    authDomain: "crwn-db-bcfe3.firebaseapp.com",
    projectId: "crwn-db-bcfe3",
    storageBucket: "crwn-db-bcfe3.appspot.com",
    messagingSenderId: "509015836432",
    appId: "1:509015836432:web:3f2a0aae4616bdaa5d4795"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

