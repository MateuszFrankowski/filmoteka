// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// // import { firebase } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAueRO-9rLbY-tP-PLu41y09SRjp5P2-ro',
  authDomain: 'filmoteka-24db4.firebaseapp.com',
  projectId: 'filmoteka-24db4',
  storageBucket: 'filmoteka-24db4.appspot.com',
  messagingSenderId: '683163081136',
  appId: '1:683163081136:web:6d5abe4c2dc4cdde999e75',
  measurementId: 'G-8CWBNRF3VK',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const userDetails = document.getElementById('userDetails');

const provider = new firebase.auth.GoogleAuthProvider();

/// Sign in event handlers

signInBtn.onclick = () => auth.signInWithPopup(provider);

signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged(user => {
  if (user) {
    // signed in
    whenSignedIn.hidden = false;
    whenSignedOut.hidden = true;
    userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3> <p>User ID: ${user.uid}</p>`;
  } else {
    // not signed in
    whenSignedIn.hidden = true;
    whenSignedOut.hidden = false;
    userDetails.innerHTML = '';
  }
});

///// Firestore /////

const db = firebase.firestore();

const createThing = document.getElementById('createThing');
const thingsList = document.getElementById('thingsList');

let thingsRef;
let unsubscribe;

auth.onAuthStateChanged(user => {
  if (user) {
    // Database Reference
    thingsRef = db.collection('things');

    createThing.onclick = () => {
      const { serverTimestamp } = firebase.firestore.FieldValue;

      thingsRef.add({
        uid: user.uid,
        name: faker.commerce.productName(),
        createdAt: serverTimestamp(),
      });
    };

    // Query
    unsubscribe = thingsRef
      .where('uid', '==', user.uid)
      .orderBy('createdAt') // Requires a query
      .onSnapshot(querySnapshot => {
        // Map results to an array of li elements

        const items = querySnapshot.docs.map(doc => {
          return `<li>${doc.data().name}</li>`;
        });

        thingsList.innerHTML = items.join('');
      });
  } else {
    // Unsubscribe when the user signs out
    unsubscribe && unsubscribe();
  }
});
