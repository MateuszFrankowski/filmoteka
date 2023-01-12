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
  let reloadPage = false;

  switch (fetchType) {
    case 'home':
      movies = await fetchTheMovieDBList(page, query);

      break;
    case 'watched':
      id = await fetchWatchedFilmsPerPage(window.userUid, page);
      if (id.page !== page) {
        reloadPage = true;
      }
      movies = await fetchTheMovieDBMovieIdList(
        id.filmsOnPage,
        id.page,
        id.total_pages,
        id.amountOfWatchedFilms
      );
      break;
    case 'queue':
      id = await fetchQueueFilmsPerPage(window.userUid, page);
      if (id.page !== page) {
        reloadPage = true;
      }
      movies = await fetchTheMovieDBMovieIdList(
        id.filmsOnPage,
        id.page,
        id.total_pages,
        id.amountOfWatchedFilms
      );
      break;
    default:
      break;
  }
  if (movies.total_pages === 0) {
    const gallery = document.querySelector('.gallery');
    if (
      dataMovies.fetchType === 'watched' ||
      dataMovies.fetchType === 'queue'
    ) {
      gallery.innerHTML = `<div><p class="pages__no-movies">No movies added to '${
        fetchType.charAt(0).toUpperCase() + fetchType.slice(1)
      }' yet.</p></div>`;
    } else if (!!dataMovies.query) {
      gallery.innerHTML = `<div><p class="pages__no-movies">Searching '${query}' have not result with movies.</p></div>`;
    } else {
      gallery.innerHTML = `<div><p class="pages__no-movies">Search result no successful. Enter the correct movie name and search again.</p></div>`;
    }
    newURLSearchParams(dataMovies.queryReplace);
    dataMovies.page = 0;
    const paginationList = document.querySelector('#pages');
    paginationList.innerHTML = '';
    return;
  }
  dataMovies.totalPages = movies.total_pages;
  if (page === dataMovies.page) {
    if (reloadPage) {
      page = id.page;
      dataMovies.page = page;
    }
    newURLSearchParams(dataMovies.queryReplace);
    pagination();
    createMovies(movies);
    if (changePage) {
      document.querySelector('.gallery').scrollIntoView(true);
    }
  }
};
