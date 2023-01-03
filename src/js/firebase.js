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
    await updateUserFilmData(userUid, 16, false);
    await updateUserFilmData(userUid, 12, false);
    await updateUserFilmData(userUid, 14, false);
    let data2 = await fetchUserDataFromFirestore(userUid);
    console.log('moje filmy po dodaniu trzech filmów', data2);
    await updateUserFilmData(userUid, 12, true);
    let data3 = await fetchUserDataFromFirestore(userUid);
    console.log('dodanie filmu 12 do obejrzenych', data3);
    await updateUserFilmData(userUid, 12, false);
    let data4 = await fetchUserDataFromFirestore(userUid);
    console.log('usunięcie filmu 12 z obejrzenych', data4);
    await deleteUserFilmData(userUid, 12);
    let data5 = await fetchUserDataFromFirestore(userUid);
    console.log('usunięcie filmu 12', data5);
    await deleteUserData(userUid);
    //
    // const q = query(
    //   collection(db, 'films'),
    //   where('uid', '==', userUid),
    //   orderBy('createdAt')
    // );
    // unsubscribe = onSnapshot(q, querySnapshot => {
    //   const films = [];
    //   querySnapshot.forEach(doc => {
    //     films.push(doc.data().filmID);
    //   });
    //   console.log(
    //     'Current films for user, real-time update: ',
    //     films.join(', ')
    //   );
    // });
  } else {
    // Unsubscribe when the user signs out
    unsubscribe && unsubscribe();
  }
});

export const fetchUserDataFromFirestore = async userId => {
  //reading all stored user's movies user
  const q = doc(db, 'films', userId.toString());
  const docSnap = await getDoc(q);
  if (docSnap.exists()) {
    let userFilms = {
      amountOfFilms: docSnap.data().amountOfFilms,
      amountOfWatchedFilms: docSnap.data().amountOfWatchedFilms,
      filmsCollection: docSnap.data().filmsCollection,
      filmsWatched: docSnap.data().filmsWatched,
    };

    return userFilms;
  } else {
    // doc.data() will be undefined in this case
    return console.log('No such document!');
  }
};
export const updateUserFilmData = async (
  userId,
  movieId,
  watchStaus = false
) => {
  const docRef = doc(db, 'films', userId.toString());
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    let { amountOfFilms, amountOfWatchedFilms, filmsCollection, filmsWatched } =
      await fetchUserDataFromFirestore(userId);
    console.log(
      amountOfFilms,
      amountOfWatchedFilms,
      filmsCollection,
      filmsWatched
    );
    if (filmsCollection.indexOf(movieId) == -1) {
      filmsCollection.push(movieId);
      amountOfFilms++;
    }
    if (filmsWatched.indexOf(movieId) == -1 && watchStaus == true) {
      filmsWatched.push(movieId);
      amountOfWatchedFilms++;
    }
    if (filmsWatched.indexOf(movieId) != -1 && watchStaus == false) {
      filmsWatched.splice(filmsWatched.indexOf(movieId), 1);
      amountOfWatchedFilms--;
    }
    const updateWatchStatus = await updateDoc(docRef, {
      amountOfFilms: amountOfFilms,
      amountOfWatchedFilms: amountOfWatchedFilms,
      filmsCollection: filmsCollection,
      filmsWatched: filmsWatched,
    });
  } else {
    try {
      const docRef = await setDoc(doc(db, 'films', userId.toString()), {
        createdAt: Timestamp.fromDate(new Date('December 10, 1815')),
        uid: userId,
        filmsCollection: [movieId],
        filmsWatched: watchStaus == true ? [movieId] : [],
        amountOfFilms: 1,
        amountOfWatchedFilms: watchStaus == true ? 1 : 0,
      });
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }
};
export const deleteUserFilmData = async (userId, movieId) => {
  // delete film from user collection

  let { amountOfFilms, amountOfWatchedFilms, filmsCollection, filmsWatched } =
    await fetchUserDataFromFirestore(userId);
  const docRef = doc(db, 'films', userId.toString());
  const docSnap = await getDoc(docRef);
  console.log(
    amountOfFilms,
    amountOfWatchedFilms,
    filmsCollection,
    filmsWatched
  );
  if (filmsCollection.indexOf(movieId) != -1) {
    filmsCollection.splice(filmsCollection.indexOf(movieId), 1);
    amountOfFilms--;
  }
  if (filmsWatched.indexOf(movieId) != -1) {
    filmsWatched.splice(filmsWatched.indexOf(movieId), 1);
    amountOfWatchedFilms--;
  }
  const updateDocument = await updateDoc(doc(db, 'films', userId.toString()), {
    amountOfFilms: amountOfFilms,
    amountOfWatchedFilms: amountOfWatchedFilms,
    filmsCollection: filmsCollection,
    filmsWatched: filmsWatched,
  });
};

export const deleteUserData = async userId => {
  // delete all user data

  const updateDocument = await updateDoc(doc(db, 'films', userId.toString()), {
    amountOfFilms: 0,
    amountOfWatchedFilms: 0,
    filmsCollection: [],
    filmsWatched: [],
  });
};
