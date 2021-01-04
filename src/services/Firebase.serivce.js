import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

export default class FirebaseService {
  static init() {
    firebase.initializeApp({
      apiKey: "AIzaSyBtZ2BzkrmBtzbUcnzd5tJbyxqgN7Dm5oI",
      authDomain: "drunken-foozball.firebaseapp.com",
      databaseURL: "https://drunken-foozball.firebaseio.com",
      projectId: "drunken-foozball",
      storageBucket: "drunken-foozball.appspot.com",
      messagingSenderId: "1075087541523",
      appId: "1:1075087541523:web:e649cddf862664bb7946e6"
    });
  }

  static getDatabaseRef(path) {
    return firebase.database().ref().child(path);
  }

  static login(email, password) {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => resolve(user))
        .catch((error) => reject(error));
    });
  }

  static subscribeToAuthChanges(callback) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        callback(true);
      } else {
        callback(false);
      }
    });
  }

  static signOut() {
    return new Promise((resolve, reject) => {
      firebase.auth().signOut()
        .then(() => resolve())
        .catch((error) => reject(error));
    })
  }
}
