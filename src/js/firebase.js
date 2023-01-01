// // Import the functions you need from the SDKs you need
import {
  onSnapshot,
  collection,
  addDoc,
  orderBy,
  updateDoc,
  doc,
  where,
  query,
  getDoc,
  getDocs,
  setDoc,
  getFirestore,
  deleteDoc,
  updateDoc,
  deleteField,
  Timestamp,
  updateDoc,
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from 'firebase/auth';

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
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const auth = firebase.auth();
const db = getFirestore(app);
//
const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const userDetails = document.getElementById('userDetails');

const provider = new GoogleAuthProvider();

/// Sign in event handlers

signInBtn.onclick = () => signInWithPopup(auth, provider);

signOutBtn.onclick = () =>
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch(error => {
      // An error happened.
    });

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

let filmsRef;
let unsubscribe;
let filmName;
let filmID;
let userUid;

auth.onAuthStateChanged(async user => {
  if (user) {
    // Database Reference
    filmsRef = collection(db, 'films');
    userUid = user.uid;
    //testy
    const data = await fetchUserDataFromFirestore(userUid);
    console.log('moje filmy', data);
    addUserDataToFirestore(userUid, 'dodaje film', 129, false);
    const data2 = await fetchUserFilmData(userUid, 707);
    console.log('mój film', data2);
    updateUserFilmData(userUid, 987, true);

    deleteUserFilmData(userUid, 129);
    //

    // Query
    // (unsubscribe = filmsRef), where('uid', '==', user.uid);
    // orderBy('createdAt'); // Requires a query
    // onSnapshot(querySnapshot => {
    //   // Map results

    //   const items = querySnapshot.docs.map(doc => {
    //     return { filmID: doc.data().filmID, watched: doc.data().watched };
    //   });

    //   console.log(items);
    // });
    // film remove
  } else {
    // Unsubscribe when the user signs out
    unsubscribe && unsubscribe();
  }
});

export const fetchUserDataFromFirestore = async userId => {
  //reading all stored user's movies user
  const q = query(
    collection(db, 'films'),
    where('uid', '==', userId),
    orderBy('createdAt')
  );
  const querySnapshot = await getDocs(q);
  let userFilms = [];
  querySnapshot.forEach(doc => {
    // doc.data() is never undefined for query doc snapshots
    userFilms.push({
      filmID: doc.data().filmID,
      watched: doc.data().watched,
    });
  });
  return userFilms;
};
export const addUserDataToFirestore = async (
  userId,
  name,
  movieId,
  watch = false
) => {
  // adding new film to user film base movie
  try {
    const docRef = await addDoc(collection(db, 'films'), {
      createdAt: Timestamp.fromDate(new Date('December 10, 1815')),
      uid: userId,
      filmName: name,
      filmID: movieId,
      watched: watch,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};
export const fetchUserFilmData = async (userId, movieId) => {
  // read user data for specific film

  const q = query(
    collection(db, 'films'),
    where('uid', '==', userId),
    where('filmID', '==', movieId)
  );
  const querySnapshot = await getDocs(q);
  let userFilm = [];
  querySnapshot.forEach(doc => {
    // doc.data() is never undefined for query doc snapshots
    userFilm.push({
      filmID: doc.data().filmID,
      watched: doc.data().watched,
    });
  });
  if (userFilm.length == 0) return false;
  return { ...userFilm };
};
export const updateUserFilmData = async (
  userId,
  movieId,
  watchStaus = false
) => {
  // change user's data for specyfic movie

  const q = query(
    collection(db, 'films'),
    where('uid', '==', userId),
    where('filmID', '==', movieId)
  );
  const querySnapshot = await getDocs(q);
  let userFilm = [];
  querySnapshot.forEach(doc => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id);
    userFilm.push({
      filmID: doc.data().filmID,
      watched: doc.data().watched,
      documentID: doc.id,
    });
  });
  if (userFilm.length == 0) return false;
  console.log(userFilm[0]);
  const docRef = doc(db, 'films', { ...userFilm[0] }.documentID);
  const updateWatchStatus = await updateDoc(docRef, {
    watched: watchStaus,
  });
};
export const deleteUserFilmData = async (userId, movieId) => {
  // delete film from user collection

  const q = query(
    collection(db, 'films'),
    where('uid', '==', userId),
    where('filmID', '==', movieId)
  );
  const querySnapshot = await getDocs(q);
  let userFilm = [];
  querySnapshot.forEach(doc => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id);
    userFilm.push({
      filmID: doc.data().filmID,
      watched: doc.data().watched,
      documentID: doc.id,
    });
  });
  if (userFilm.length == 0) return false;
  console.log(userFilm[0]);
  const docRef = doc(db, 'films', { ...userFilm[0] }.documentID);
  const deleteMovie = await deleteDoc(docRef);
  console.log('Document deleted with ID:', { ...userFilm[0] }.documentID);
  return true;
};
