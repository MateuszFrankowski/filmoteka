// // Import the functions you need from the SDKs you need

import { onSnapshot } from 'firebase/firestore';
import { signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';
import { db, auth } from './global';
import { doc } from 'firebase/firestore';
import { loadPage } from './loadPage';

//
export const loginHandling = async () => {
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

  console.log('2a) before function to add uid');

  auth.onAuthStateChanged(user => {
    console.log('2b) add uid');
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
  console.log('2c) after function to add uid');
  ///// Firestore /////

  let unsubscribe;

  auth.onAuthStateChanged(user => {
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

  await getUserStatus()
    .then(result => console.log(result))
    .catch(error => console.log(error));
};
// loginHandling();

const getUserStatus = async store => {
  return new Promise(function (resolve, reject) {
    auth.onAuthStateChanged(user => {
      if (user) {
        resolve(user.uid);
      } else {
        reject(Error('It broke'));
      }
    });
  });
};
