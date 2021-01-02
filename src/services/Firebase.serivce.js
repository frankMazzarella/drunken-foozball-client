import firebase from 'firebase/app';
import 'firebase/database';

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
}
