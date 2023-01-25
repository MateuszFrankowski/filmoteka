import { dataMovies } from './global';
import { addLoaderSpinner } from './loaderSpinner';
import { loadPage } from './loadPage';

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
