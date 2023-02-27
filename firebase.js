import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBi_X8a1Dlanm-TsSd8NmjKqqTAya7qmyA",
    authDomain: "uber-auth-6a317.firebaseapp.com",
    projectId: "uber-auth-6a317",
    storageBucket: "uber-auth-6a317.appspot.com",
    messagingSenderId: "836805719438",
    appId: "1:836805719438:web:8767279baec57f5b0fe0df"
  };

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };