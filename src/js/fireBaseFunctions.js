import {
  updateDoc,
  getDoc,
  getDocs,
  setDoc,
  deleteDoc,
  Timestamp,
} from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { db } from './global';

const moviesPerPageInLibrary = {
  phone: 4,
  tablet: 8,
  laptop: 9,
};
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
    await updateUserQueueData(userId, 1, false);
    let userFilms = {
      amountOfFilms: 0,
      amountOfWatchedFilms: 0,
      filmsCollection: [],
      filmsWatched: [],
    };
    return userFilms;
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

  const updateDocument = await deleteDoc(doc(db, 'films', userId.toString()));
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

export const fetchQueueFilmsPerPage = async (userId, pageNr) => {
  let { amountOfFilms, amountOfWatchedFilms, filmsCollection, filmsWatched } =
    await fetchUserDataFromFirestore(userId);
  console.log(
    amountOfFilms,
    amountOfWatchedFilms,
    filmsCollection,
    filmsWatched
  );

  const filmsPerPage = checkMediaQueries();

  const numberofPages = Math.ceil(amountOfFilms / filmsPerPage);
  const startIndex = filmsPerPage * (pageNr - 1);
  const endIndex =
    startIndex + filmsPerPage > amountOfFilms + 1
      ? amountOfFilms + 1
      : startIndex + filmsPerPage;
  const filmsOnPage = filmsCollection.slice(startIndex, endIndex);
  console.log(startIndex, endIndex);

  return { filmsOnPage, total_pages: numberofPages, amountOfFilms };
};
export const fetchWatchedFilmsPerPage = async (userId, pageNr) => {
  console.log('check ids', userId, pageNr);
  let { amountOfFilms, amountOfWatchedFilms, filmsCollection, filmsWatched } =
    await fetchUserDataFromFirestore(userId);
  const filmsPerPage = checkMediaQueries();

  const numberofPages = Math.ceil(amountOfWatchedFilms / filmsPerPage);
  const startIndex = filmsPerPage * (pageNr - 1);
  const endIndex =
    startIndex + filmsPerPage > amountOfWatchedFilms + 1
      ? amountOfWatchedFilms + 1
      : startIndex + filmsPerPage;
  const filmsOnPage = filmsWatched.slice(startIndex, endIndex);
  console.log(startIndex, endIndex);

  return { filmsOnPage, total_pages: numberofPages, amountOfWatchedFilms };
};
