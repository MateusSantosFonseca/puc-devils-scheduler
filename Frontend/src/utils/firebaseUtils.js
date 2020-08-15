import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDvd3aMR7XaZXqsXht1FGm0DqnwPBaZ9OE",
    authDomain: "minas-devils-scheduler.firebaseapp.com",
    databaseURL: "https://minas-devils-scheduler.firebaseio.com",
    projectId: "minas-devils-scheduler",
    storageBucket: "minas-devils-scheduler.appspot.com",
    messagingSenderId: "1096361552917",
    appId: "1:1096361552917:web:fb4f4c12122b666af2321c",
    measurementId: "G-Z41RGC3NVD"
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();