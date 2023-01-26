// // Import the functions you need from the SDKs you need

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { onSnapshot } from 'firebase/firestore';
import {
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { db, auth } from './global';
import { doc } from 'firebase/firestore';
import { loadPage } from './loadPage';

//
const libraryNotAvailable = event => {
  event.preventDefault();
  Notify.info('You need to log in to use this feature.', {
    position: 'left-top',
  });
};

export const loginHandling = async () => {
  const myLibrary = document.getElementById('libraryBtn');
  const signInIcon = document.querySelector('svg.icon-login');
  const signOutIcon = document.querySelector('svg.icon-logout');
  const signInGoogle = document.querySelector('a.btn-google');
  const signInFacebook = document.querySelector('a.btn-face');
  const registerByEmail = document.querySelector('.btn.register');
  const loginByEmail = document.querySelector('.btn.signIn');
  const userDetails = document.querySelector(
    'p.home-header__greeting, p.library-header__greeting'
  );

  const createAccount = event => {
    Notify.failure('elo');
    event.preventDefault();
    if (event.target.classList.contains('svg.icon-login') !== true) return;

    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Notify.failure(errorMessage);
        // ..
      });
  };

  const emailLogin = event => {
    event.preventDefault();
    if (event.target.classList.contains('svg.icon-login') !== true) return;

    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Notify.failure(errorMessage);
      });
  };
  registerByEmail.addEventListener('submit', createAccount);
  loginByEmail.addEventListener('submit', emailLogin);
  const providerGoogle = new GoogleAuthProvider();
  const providerFacebook = new FacebookAuthProvider();
  window.userSigned = false;
  window.userUid = '';

  /// Sign in event handlers
  signInGoogle.onclick = () =>
    signInWithPopup(auth, providerGoogle)
      .then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch(error => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        Notify.failure(errorMessage + 'for email: ' + email);
        // ...
      });
  signInFacebook.onclick = () =>
    signInWithPopup(auth, providerFacebook)
      .then(result => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        // ...
      })
      .catch(error => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        Notify.failure(errorMessage + 'for email: ' + email);
        // ...
      });
  signOut(auth)
    .then(() => {
      window.userSigned = false;
    })
    .catch(error => {
      // An error happened.
    });

  // console.log('2a) before function to add uid');
  let unsubscribe;
  auth.onAuthStateChanged(user => {
    // console.log('2b) add uid');
    if (user) {
      // signed in
      signInIcon.classList.add('hidden');
      signOutIcon.classList.remove('hidden');
      userDetails.innerHTML = `Hello ${user.displayName}!`;
      myLibrary.classList.remove('no-active-btn');
      myLibrary.style = 'pointer-events: click';
      window.userUid = true;
      myLibrary.removeEventListener('click', libraryNotAvailable);
      window.userSigned = true;
      window.userUid = user.uid;
      unsubscribe = onSnapshot(doc(db, 'films', user.uid.toString()), doc => {
        // console.log('Current data: ', doc.data());
      });
    } else {
      // not signed in
      signInIcon.classList.remove('hidden');
      signOutIcon.classList.add('hidden');
      userDetails.innerHTML = '';
      myLibrary.classList.add('no-active-btn');
      window.userUid = false;
      myLibrary.addEventListener('click', libraryNotAvailable);

      if (window.location.href.search('index.html') === -1) {
        console.log(window.location.href);
        window.location.href = 'index.html';
      }
      unsubscribe && unsubscribe();
    }
  });
  // console.log('2c) after function to add uid');
  ///// Firestore /////

  await getUserStatus()
    .then(user => user)
    .catch(nouser => nouser);
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
