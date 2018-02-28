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

const database = firebase.database();

database.ref().set({
  name: 'Michael Melvin',
  age: 31,
  isSingle: false,
  location: {
    city: 'Statesboro',
    country: 'United States'
  }
});

// database.ref().set('This is my data.');

database.ref('age').set(32);
database.ref('location/city').set('Tampa');
database.ref('attributes').set({
  height: 74,
  weight: 165
});