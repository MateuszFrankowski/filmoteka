import { dataMovies } from './global';
import { pagination } from './pagination.js';
import { fetchTheMovieDBList } from './apiFetch';
import { add_params } from './pagination';

const debounce = require('lodash.debounce');
const moviesGallery = document.querySelector('ul.gallery');
const movieInput = document.querySelector('input.home-header__searchbar');

const renderGallery = async () => {
  dataMovies.page = 1;
  dataMovies.fetchType = 'home';
  dataMovies.query = movieInput.value;
  add_params('movie', movieInput.value);
  const result = await fetchTheMovieDBList(dataMovies.page, movieInput.value);
  dataMovies.totalPages = result.total_pages;
  const markupArr = result.data.map(element => {
    return `<li data-film_id="${element.id}">
            <figure class="card">
                <div class="thumb" data-id="${element.id}">
                    <img class="img" src="${element.poster_path}">
                </div>
                <figcaption>
                    <h3 class="title">${element.title}</h3>
                    <div class="details-wrapper">
                        <p>${element.genres.join(', ')}</p>
                        <p>${element.release_year}</p>
                        <div class="rating rating--visible">${
                          element.vote_average
                        }</div>
                    </div>
                </figcaption>
            </figure>
        </li>`;
  });
  pagination();
  moviesGallery.innerHTML = markupArr.join('');
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
