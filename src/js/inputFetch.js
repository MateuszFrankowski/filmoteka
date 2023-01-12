import { dataMovies } from './global';
import { pagination } from './pagination.js';
import { fetchTheMovieDBList } from './apiFetch';
import { addLoaderSpinner } from './loaderSpinner';
import { newURLSearchParams } from './urlSearchParams';
import { loadPage } from './loadPage';
import { liElement, roundTo1Comma } from './gallery';

const debounce = require('lodash.debounce');
const moviesGallery = document.querySelector('ul.gallery');
const movieInput = document.querySelector('input.home-header__searchbar');

const renderGallery = async () => {
  addLoaderSpinner();
  dataMovies.page = 1;
  dataMovies.fetchType = 'home';
  dataMovies.query = movieInput.value;
  if (!dataMovies.query) {
    dataMovies.queryReplace = 'push';
  }
  console.log(dataMovies.queryReplace);
  await loadPage();
  if (!!dataMovies.query) {
    dataMovies.queryReplace = 'replace';
  }
  // const result = await fetchTheMovieDBList(dataMovies.page, movieInput.value);
  // dataMovies.totalPages = result.total_pages;
  // let i = 0;
  // const markupArr = result.data.map(data => {
  //   i += 1;
  //   return liElement(data, i);
  // });
  // newURLSearchParams(dataMovies.queryReplace);
  // dataMovies.queryReplace = "replace";
  // pagination();
  // moviesGallery.classList.add('grid');
  // moviesGallery.innerHTML = markupArr.join('');
};

movieInput.addEventListener(
  'input',
  debounce(
    () => {
      renderGallery();
    },
    500,
    {
      leading: false,
      trailing: true,
    }
  )
);
