import { dataMovies } from './global';
import { loadPage } from './loadPage';
import { changePage } from './pagination';
import { clickGallery } from './gallery';
// import {
//   fetchUserDataFromFirestore,
//   addUserDataToFirestore,
//   fetchUserFilmData,
//   updateUserFilmData,
//   deleteUserFilmData,
//   userSigned,
// } from './firebase';

const startPage = async () => {
  dataMovies.fetchType = 'home';
  // dataMovies.page = Number(location.hash.substr(5));
  dataMovies.page = 1;
  dataMovies.query = null;

  loadPage();
  clickGallery();
  changePage();
  // if (performance.navigation.type == 2) {
  //   location.reload(true);
  // }
};

startPage();
// console.log(2);
// window.addEventListener('pageshow', function (event) {
//   var historyTraversal =
//     event.persisted ||
//     (typeof window.performance != 'undefined' &&
//       window.performance.navigation.type === 2);
//   if (historyTraversal) {
//     // Handle page restore.
//     window.location.reload();
//     window.location.reload();
//   }
// });
// window.addEventListener('locationchange', function () {
//   // console.log('location changed!');
//   window.location.reload();
// });
