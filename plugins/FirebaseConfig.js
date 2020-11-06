import firebase from 'firebase/app'
import 'firebase/firestore'
// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
    var firebaseConfig = {
        apiKey: "AIzaSyDpZIK72HtIVorDG8tRio4TqGlxVtWQUgc",
        authDomain: "labdb369.firebaseapp.com",
        databaseURL: "https://labdb369.firebaseio.com",
        projectId: "labdb369",
        storageBucket: "labdb369.appspot.com",
        messagingSenderId: "977119364065",
        appId: "1:977119364065:web:259cf5f8a7d2f8744c48a0"
      };
    firebase.initializeApp(firebaseConfig)
}
export const db = firebase.firestore()