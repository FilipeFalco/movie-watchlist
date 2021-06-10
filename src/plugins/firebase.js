import Vue from 'vue';
import firebase from 'firebase';
import store from '../store';

var firebaseConfig = {
    apiKey: "AIzaSyDAsnUd-WE8awyxFizUTEifOQDOphr4JSc",
    authDomain: "filme-wachlist.firebaseapp.com",
    projectId: "filme-wachlist",
    storageBucket: "filme-wachlist.appspot.com",
    messagingSenderId: "654812751577",
    appId: "1:654812751577:web:5f707918df9ecd4bc380c8",
    measurementId: "G-YK16QKWVSP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
    store.dispatch("addUser", { name: user.displayName, email: user.email });
  });

Vue.prototype.$firebase = firebase;

export default firebase;