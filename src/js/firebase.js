// // Import the functions you need from the SDKs you need

import { onSnapshot } from 'firebase/firestore';
import { signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';
import { db, auth, doc } from './global';

//
const loginHandling = () => {
  const whenSignedIn = document.getElementById('whenSignedIn');
  const whenSignedOut = document.getElementById('whenSignedOut');
  const myLibrary = document.getElementById('libraryBtn');

  const signInBtn = document.getElementById('signInBtn');
  const signOutBtn = document.getElementById('signOutBtn');
  const signInIcon = document.querySelector('svg.icon-login');
  const signOutIcon = document.querySelector('svg.icon-logout');

  const userDetails = document.getElementById('userDetails');

  const provider = new GoogleAuthProvider();
  window.userSigned = false;
  window.userUid = '';

  /// Sign in event handlers

  signInBtn.onclick = () => signInWithPopup(auth, provider);
  signInIcon.onclick = () => signInWithPopup(auth, provider);

  signOutBtn.onclick = () =>
    signOut(auth)
      .then(() => {
        window.userSigned = false;
      })
      .catch(error => {
        // An error happened.
      });
  signOutIcon.onclick = () =>
    signOut(auth)
      .then(() => {
        window.userSigned = false;
      })
      .catch(error => {
        // An error happened.
      });

  auth.onAuthStateChanged(user => {
    if (user) {
      // signed in
      signInIcon.classList.add('hidden');
      signOutIcon.classList.remove('hidden');
      whenSignedIn.classList.remove('hidden');
      whenSignedOut.classList.add('hidden');
      userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3>`;
      myLibrary.classList.remove('hidden');
      window.userUid = true;
    } else {
      // not signed in
      signInIcon.classList.remove('hidden');
      signOutIcon.classList.add('hidden');
      whenSignedIn.classList.add('hidden');
      whenSignedOut.classList.remove('hidden');
      userDetails.innerHTML = '';
      myLibrary.classList.add('hidden');
      window.userUid = false;

      if (window.location.href.search('index.html') === -1) {
        console.log(window.location.href);
        window.location.href = 'index.html';
      }
    }
  });
  ///// Firestore /////

  let unsubscribe;

  auth.onAuthStateChanged(async user => {
    if (user) {
      // Database Reference

      window.userSigned = true;
      window.userUid = user.uid;

      unsubscribe = onSnapshot(doc(db, 'films', user.uid.toString()), doc => {
        console.log('Current data: ', doc.data());
      });
    } else {
      // Unsubscribe when the user signs out
      unsubscribe && unsubscribe();
    }
  });
};
loginHandling();
