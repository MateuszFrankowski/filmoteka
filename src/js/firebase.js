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
import { userHandling } from './login';
import { db, auth } from './global';
import { doc } from 'firebase/firestore';
import { loadPage } from './loadPage';

const libraryNotAvailable = event => {
  event.preventDefault();
  Notify.info('You need to log in to use this feature.', {
    position: 'left-top',
  });
};

export const loginHandling = async () => {
  function showModal() {
    const loginModal = document.querySelector('[data-modal-login]');
    const loginWindowBtn = document.querySelector('.modal-login__loginBtn');
    loginWindowBtn.classList.add('actual-page');
    loginModal.classList.remove('is-hidden');
  }

  const myLibrary = document.getElementById('libraryBtn');
  const signInIcon = document.querySelector('svg.icon-login');
  const signOutIcon = document.querySelector('svg.icon-logout');
  const signInGoogle = document.querySelector('a.btn-google');
  const signInFacebook = document.querySelector('a.btn-face');
  const registerByEmail = document.querySelector('.form-register');
  const loginByEmail = document.querySelector('.form-login');
  const userDetails = document.querySelector(
    'p.home-header__greeting, p.library-header__greeting'
  );
  const emailRegisterInput = document.querySelector(
    'input[name="emailRegister"]'
  );
  const passwordRegisterInput = document.querySelector(
    'input[name="passwordRegister"]'
  );
  const emailLoginInput = document.querySelector('input[name="emailLogin"]');
  const passwordLoginInput = document.querySelector(
    'input[name="passwordLogin"]'
  );
  signInIcon.onclick = () => {
    showModal();
    userHandling();
  };
  const createAccount = event => {
    event.preventDefault();
    const email = emailRegisterInput.value;
    const password = passwordRegisterInput.value;

    if (event.target.classList.contains('form-register') !== true) return;

    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        Notify.failure(errorMessage);
        // ..
      });
  };

  const emailLogin = event => {
    event.preventDefault();
    const email = emailLoginInput.value;
    const password = passwordLoginInput.value;
    if (event.target.classList.contains('form-login') !== true) return;

    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
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
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        Notify.failure(errorMessage + 'for email: ' + email);
        // ...
      });
  signInFacebook.onclick = () =>
    signInWithPopup(auth, providerFacebook)
      .then(result => {
        const user = result.user;
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = FacebookAuthProvider.credentialFromError(error);
        Notify.failure(errorMessage + 'for email: ' + email);
        // ...
      });
  signOutIcon.onclick = () =>
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
      userHandling(true);
      const greetings = !!user.displayName ? user.displayName : user.email;
      signInIcon.classList.add('hidden');
      signOutIcon.classList.remove('hidden');
      userDetails.innerHTML = `Hello ${greetings}!`;
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

export const getUserStatus = async store => {
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
