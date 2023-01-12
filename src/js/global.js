import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

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

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const dataMovies = {
  page: 1,
  totalPages: 1,
  moviesPerPage: 20,
  query: '',
  queryReplace:'push',
  fetchType: '',
  moviesPerPage: 6,
};
