// // Import the functions you need from the SDKs you need

import { onSnapshot } from 'firebase/firestore';
import { signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';
import { db, auth, doc } from './global';

//
const loginHandling = () => {
  const myLibrary = document.getElementById('libraryBtn');

  const signInIcon = document.querySelector('svg.icon-login');
  const signOutIcon = document.querySelector('svg.icon-logout');
  const userDetails = document.querySelector('p.home-header__greeting, p.library-header__greeting')

  const provider = new GoogleAuthProvider();
  window.userSigned = false;
  window.userUid = '';

  /// Sign in event handlers

  signInIcon.onclick = () => signInWithPopup(auth, provider);

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
      userDetails.innerHTML = `Hello ${user.displayName}!`;
      myLibrary.classList.remove('hidden');
      window.userUid = true;
    } else {
      // not signed in
      signInIcon.classList.remove('hidden');
      signOutIcon.classList.add('hidden');
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
