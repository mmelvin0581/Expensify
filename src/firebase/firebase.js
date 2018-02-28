import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAjtSnURyAvAZuvYBJBOs_4x4dBBE9xotk",
  authDomain: "expensify-0581.firebaseapp.com",
  databaseURL: "https://expensify-0581.firebaseio.com",
  projectId: "expensify-0581",
  storageBucket: "expensify-0581.appspot.com",
  messagingSenderId: "905639604755"
};

firebase.initializeApp(config);

firebase.database().ref().set({
  name: 'Michael Melvin'
});