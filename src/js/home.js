import { pagination, loadPage } from './pagination';
import { fetchTheMovieDBList } from './apiFetch';
import { dataMovies } from './global';
import { addLoaderSpinner } from './loaderSpinner';
import { createMovies } from './gallery';
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
  addLoaderSpinner();
  // yours listeners no using start movies variable in function

  //
  const movies = await fetchTheMovieDBList(dataMovies.page, dataMovies.query);
  // dataMovies.page = Number(location.hash.substr(5));
  dataMovies.page = 1;
  console.log(movies.page);
  dataMovies.totalPages = movies.total_pages;
  if (movies.total_pages > 0) {
    pagination();
  }
  // function to creating gallery
  createMovies(movies);
  clickGallery();
  //

  loadPage();
  // yours listeners using start movies variable in function
  //
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
