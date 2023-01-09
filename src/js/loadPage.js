import { dataMovies } from './global';
import { pagination } from './pagination';
import { createMovies } from './gallery';
import { addLoaderSpinner } from './loaderSpinner';
import { fetchTheMovieDBList, fetchTheMovieDBMovieIdList } from './apiFetch';
import {
  fetchWatchedFilmsPerPage,
  fetchQueueFilmsPerPage,
} from './fireBaseFunctions';
import { newURLSearchParams } from './urlSearchParams';

// <========> Load new gallery with changes <========>
//
// how use it?
//
// import { dataMovies } from './global'
// import { loadPage } from './loadPage'
// // change dataMovies parameters
// dataMovies.page = nr_of_page;
// dataMovies.fetchType = "home" or "wathced" or "queue";
// dataMovies.query = searching_text_for_movies;
// // call function to load new gallery
// loadPage();
//

export const loadPage = async (changePage = false) => {
  addLoaderSpinner();
  let { page, fetchType, query } = dataMovies;
  let movies = {};

  let id = {};

  switch (fetchType) {
    case 'home':
      movies = await fetchTheMovieDBList(page, query);

      break;
    case 'watched':
      //movies = await fetchTheMovieDBList(page, query)
      console.log(
        `3) check user id \r\n uid: ${window.userUid} \r\n page: ${page}`
      );
      id = await fetchWatchedFilmsPerPage(window.userUid, page);
      movies = await fetchTheMovieDBMovieIdList(
        id.filmsOnPage,
        page,
        id.total_pages,
        id.amountOfWatchedFilms
      );
      // change to // movies = await for fireBase API watched ======================================================================
      break;
    case 'queue':
      // add // movies = await for fireBase API queue ==============================================================================
      id = await fetchQueueFilmsPerPage(window.userUid, page);
      movies = await fetchTheMovieDBMovieIdList(
        id.filmsOnPage,
        page,
        id.total_pages,
        id.amountOfWatchedFilms
      );
      break;
    default:
      break;
  }
  if (movies.total_pages === 0) {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = "<div><p>Sorry, we can't find movies...</p></div>";
    return;
  }
  dataMovies.totalPages = movies.total_pages;
  if (page === dataMovies.page) {
    newURLSearchParams();
    pagination();
    createMovies(movies);
    if (changePage) {
      document.querySelector('.gallery').scrollIntoView(true);
    }
    console.log(`${fetchType}:`, movies);
  }
};
