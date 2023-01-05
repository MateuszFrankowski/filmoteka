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
const moviesPerPageInLibrary = {
  phone: 4,
  tablet: 8,
  laptop: 9,
};
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
    await updateUserQueueData(userUid, 16, true);
    await updateUserQueueData(userUid, 12, true);
    await updateUserQueueData(userUid, 14, true);
    let data2 = await fetchUserDataFromFirestore(userUid);
    console.log('moje filmy po dodaniu trzech filmów do kolejki', data2);
    await updateUserWatchedData(userUid, 12, true);
    let data3 = await fetchUserDataFromFirestore(userUid);
    console.log('dodanie filmu 12 do obejrzenych', data3);
    const test1 = await fetchQueueFilmsPerPage(userUid, 1, filmsPerPage);
    const test2 = await fetchWatchedFilmsPerPage(userUid, 1, filmsPerPage);
    console.log(test1);
    console.log(test2);

    // await updateUserWatchedData(userUid, 12, false);
    // let data4 = await fetchUserDataFromFirestore(userUid);
    // console.log('usunięcie filmu 12 z obejrzenych', data4);
    // await updateUserQueueData(userUid, 12, false);
    // let data5 = await fetchUserDataFromFirestore(userUid);
    // console.log('usunięcie filmu 12', data5);
    // await deleteUserData(userUid);
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
export const updateUserQueueData = async (
  userId,
  movieId,
  addToQueue = true //false ->remove from Queue
) => {
  const docRef = doc(db, 'films', userId.toString());
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    let { amountOfFilms, amountOfWatchedFilms, filmsCollection, filmsWatched } =
      await fetchUserDataFromFirestore(userId);

    if (filmsCollection.indexOf(movieId) == -1 && addToQueue == true) {
      filmsCollection.push(movieId);
      amountOfFilms++;
      if (filmsWatched.indexOf(movieId) != -1) {
        filmsWatched.splice(filmsWatched.indexOf(movieId), 1);
        amountOfWatchedFilms--;
      }
    }
    if (filmsCollection.indexOf(movieId) != -1 && addToQueue == false) {
      filmsCollection.splice(filmsCollection.indexOf(movieId), 1);
      amountOfFilms--;
    }

    const updateWatchStatus = await updateDoc(docRef, {
      uid: userId,
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
        filmsCollection: addToQueue == true ? [movieId] : [],
        filmsWatched: [],
        amountOfFilms: addToQueue == true ? 1 : 0,
        amountOfWatchedFilms: 0,
      });
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }
};
export const updateUserWatchedData = async (
  userId,
  movieId,
  addToWatch = true //false ->remove from Queue
) => {
  const docRef = doc(db, 'films', userId.toString());
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    let { amountOfFilms, amountOfWatchedFilms, filmsCollection, filmsWatched } =
      await fetchUserDataFromFirestore(userId);

    if (filmsWatched.indexOf(movieId) == -1 && addToWatch == true) {
      filmsWatched.push(movieId);
      amountOfWatchedFilms++;
      if (filmsCollection.indexOf(movieId) != -1) {
        filmsCollection.splice(filmsCollection.indexOf(movieId), 1);
        amountOfFilms--;
      }
    }
    if (filmsWatched.indexOf(movieId) != -1 && addToWatch == false) {
      filmsWatched.splice(filmsWatched.indexOf(movieId), 1);
      amountOfWatchedFilms--;
    }

    const updateWatchStatus = await updateDoc(docRef, {
      uid: userId,
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
        filmsCollection: [],
        filmsWatched: watchStaus == true ? [movieId] : [],
        amountOfFilms: 0,
        amountOfWatchedFilms: watchStaus == true ? 1 : 0,
      });
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }
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
const checkMediaQueries = () => {
  if (window.matchMedia('(min-width: 1024px)')) {
    return moviesPerPageInLibrary.laptop;
  }
  if (window.matchMedia('(min-width: 768px)')) {
    // If media query matches
    return moviesPerPageInLibrary.laptop;
  }
  return moviesPerPageInLibrary.phone;
};
const filmsPerPage = checkMediaQueries();
const fetchQueueFilmsPerPage = async (userId, pageNr, filmsPerPage) => {
  let { amountOfFilms, amountOfWatchedFilms, filmsCollection, filmsWatched } =
    await fetchUserDataFromFirestore(userId);
  console.log(
    amountOfFilms,
    amountOfWatchedFilms,
    filmsCollection,
    filmsWatched
  );
  const numberofPages = Math.ceil(amountOfFilms / filmsPerPage);
  const startIndex = filmsPerPage * (pageNr - 1);
  const endIndex =
    startIndex + filmsPerPage > amountOfFilms + 1
      ? amountOfFilms + 1
      : startIndex + filmsPerPage;
  const filmsOnPage = filmsCollection.slice(startIndex, endIndex);
  console.log(startIndex, endIndex);
  return { filmsOnPage, numberofPages, amountOfFilms };
};
const fetchWatchedFilmsPerPage = async (userId, pageNr, filmsPerPage) => {
  let { amountOfFilms, amountOfWatchedFilms, filmsCollection, filmsWatched } =
    await fetchUserDataFromFirestore(userId);
  const numberofPages = Math.ceil(amountOfWatchedFilms / filmsPerPage);
  const startIndex = filmsPerPage * (pageNr - 1);
  const endIndex =
    startIndex + filmsPerPage > amountOfWatchedFilms + 1
      ? amountOfWatchedFilms + 1
      : startIndex + filmsPerPage;
  const filmsOnPage = filmsWatched.slice(startIndex, endIndex);
  console.log(startIndex, endIndex);
  return { filmsOnPage, numberofPages, amountOfWatchedFilms };
};

//fetchTheMovieDBMovieIdList(idMovies, page, total_pages, total_results);
