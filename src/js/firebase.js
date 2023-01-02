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
  startAt,
  limit,
  startAfter,
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
const myLibrary = document.getElementById('libraryBtn');

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const userDetails = document.getElementById('userDetails');

const provider = new GoogleAuthProvider();
export let userSigned = false;
export let userUid = '';
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
    userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3>`;
    myLibrary.hidden = false;
    userSigned = true;
  } else {
    // not signed in
    whenSignedIn.hidden = true;
    whenSignedOut.hidden = false;
    userDetails.innerHTML = '';
    myLibrary.hidden = true;
    userSigned = false;

    if (window.location.href.search('index.html') === -1) {
      console.log(window.location.href);
      window.location.href = 'index.html';
    }
  }
});

///// Firestore /////

let filmsRef;
let unsubscribe;
let filmName;
let filmID;

auth.onAuthStateChanged(async user => {
  if (user) {
    // Database Reference
    filmsRef = collection(db, 'films');
    userUid = user.uid;
    //testy
    let data = await fetchUserDataFromFirestore(userUid);
    console.log('moje filmy', data);
    await addUserDataToFirestore(userUid, 'Avatar 2', 12055, false);
    let data2 = await fetchUserDataFromFirestore(userUid);
    console.log('moje filmy po dodaniu filmu Avatar 2', data2);
    let data3 = await fetchUserFilmData(userUid, 12055);
    console.log('sprawdzenie  danych filmu Avatar 2', data3);
    await updateUserFilmData(userUid, 12055, true);
    let data4 = await fetchUserFilmData(userUid, 12055);
    console.log('zmiana danych filmu Avatar 2 -> obejrzano film', data4);
    await deleteUserFilmData(userUid, 12055);
    let data5 = await fetchUserFilmData(userUid, 12055);
    console.log('usunięcie filmu Avatar 2', data5);
    let data6 = await fetchUserDataFromFirestore(userUid);
    console.log('moje filmy po usunięciu filmu Avatar 2', data6);
    //
    const q = query(
      collection(db, 'films'),
      where('uid', '==', userUid),
      orderBy('createdAt')
    );
    unsubscribe = onSnapshot(q, querySnapshot => {
      const films = [];
      querySnapshot.forEach(doc => {
        films.push(doc.data().filmID);
      });
      console.log(
        'Current films for user, real-time update: ',
        films.join(', ')
      );
    });
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
export const fetchPaginatedDataFromFirestore = async (
  userId,
  pageNr,
  pageAmount
) => {
  //in test state
  const q = query(
    collection(db, 'films'),
    where('uid', '==', userId),
    orderBy('createdAt'),
    startAfter(pageAmount * (pageNr - 1)),
    limit(pageAmount)
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
  // checking if the film is already in DB
  const q = query(
    collection(db, 'films'),
    where('uid', '==', userId),
    where('filmID', '==', movieId)
  );
  const querySnapshot = await getDocs(q);

  let userFilm = [];
  querySnapshot.forEach(doc => {
    userFilm.push({
      filmID: doc.data().filmID,
      watched: doc.data().watched,
      documentID: doc.id,
    });
  });
  console.log('sprawdzam czy dokument istnieje', userFilm, userFilm.length);
  if (userFilm.length != 0) {
    console.log('coo');
    throw new Error('Data for the film already exist in DB!');
  }

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
