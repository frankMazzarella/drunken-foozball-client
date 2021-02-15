const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp({
  apiKey: 'AIzaSyBtZ2BzkrmBtzbUcnzd5tJbyxqgN7Dm5oI',
  authDomain: 'drunken-foozball.firebaseapp.com',
  databaseURL: 'https://drunken-foozball.firebaseio.com',
  projectId: 'drunken-foozball',
  storageBucket: 'drunken-foozball.appspot.com',
  messagingSenderId: '1075087541523',
  appId: '1:1075087541523:web:e649cddf862664bb7946e6',
});

// TODO: this datastructure is a fucking tragedy

exports.goalieOneGoal = functions.https.onRequest((request, response) => {
  const scoreboard = admin.database().ref('scoreboard');
  scoreboard.child('goalie_one/goals').set(admin.database.ServerValue.increment(1));
  scoreboard.child('goalie_two/goals_allowed').set(admin.database.ServerValue.increment(1));
  response.sendStatus(200);
});

exports.goalieOneOwnGoal = functions.https.onRequest((request, response) => {
  const scoreboard = admin.database().ref('scoreboard');
  scoreboard.child('goalie_one/own_goals').set(admin.database.ServerValue.increment(1));
  scoreboard.child('goalie_one/goals_allowed').set(admin.database.ServerValue.increment(1));
  response.sendStatus(200);
});

exports.strikerOneGoal = functions.https.onRequest((request, response) => {
  const scoreboard = admin.database().ref('scoreboard');
  scoreboard.child('striker_one/goals').set(admin.database.ServerValue.increment(1));
  scoreboard.child('goalie_two/goals_allowed').set(admin.database.ServerValue.increment(1));
  response.sendStatus(200);
});

exports.strikerOneOwnGoal = functions.https.onRequest((request, response) => {
  const scoreboard = admin.database().ref('scoreboard');
  scoreboard.child('striker_one/own_goals').set(admin.database.ServerValue.increment(1));
  scoreboard.child('goalie_one/goals_allowed').set(admin.database.ServerValue.increment(1));
  response.sendStatus(200);
});

exports.goalieTwoGoal = functions.https.onRequest((request, response) => {
  const scoreboard = admin.database().ref('scoreboard');
  scoreboard.child('goalie_two/goals').set(admin.database.ServerValue.increment(1));
  scoreboard.child('goalie_one/goals_allowed').set(admin.database.ServerValue.increment(1));
  response.sendStatus(200);
});

exports.goalieTwoOwnGoal = functions.https.onRequest((request, response) => {
  const scoreboard = admin.database().ref('scoreboard');
  scoreboard.child('goalie_two/own_goals').set(admin.database.ServerValue.increment(1));
  scoreboard.child('goalie_two/goals_allowed').set(admin.database.ServerValue.increment(1));
  response.sendStatus(200);
});

exports.strikerTwoGoal = functions.https.onRequest((request, response) => {
  const scoreboard = admin.database().ref('scoreboard');
  scoreboard.child('striker_two/goals').set(admin.database.ServerValue.increment(1));
  scoreboard.child('goalie_one/goals_allowed').set(admin.database.ServerValue.increment(1));
  response.sendStatus(200);
});

exports.strikerTwoOwnGoal = functions.https.onRequest((request, response) => {
  const scoreboard = admin.database().ref('scoreboard');
  scoreboard.child('striker_two/own_goals').set(admin.database.ServerValue.increment(1));
  scoreboard.child('goalie_two/goals_allowed').set(admin.database.ServerValue.increment(1));
  response.sendStatus(200);
});

exports.resetGame = functions.https.onRequest((request, response) => {
  const scoreboard = admin.database().ref('scoreboard');
  scoreboard.child('goalie_one/goals').set(0);
  scoreboard.child('goalie_one/goals_allowed').set(0);
  scoreboard.child('goalie_one/own_goals').set(0);
  scoreboard.child('striker_one/goals').set(0);
  scoreboard.child('striker_one/own_goals').set(0);
  scoreboard.child('goalie_two/goals').set(0);
  scoreboard.child('goalie_two/goals_allowed').set(0);
  scoreboard.child('goalie_two/own_goals').set(0);
  scoreboard.child('striker_two/goals').set(0);
  scoreboard.child('striker_two/own_goals').set(0);
  response.sendStatus(200);
});
