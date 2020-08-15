var firebase = require("firebase");
require("dotenv/config");

var firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId
};

const getDatabase = (() => {
  firebase.initializeApp(firebaseConfig);
  return firebase.database();
})

module.exports = getDatabase;