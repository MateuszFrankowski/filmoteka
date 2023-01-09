import { dataMovies } from './global';
import { pagination } from './pagination.js';
import { fetchTheMovieDBList } from './apiFetch';
import { addLoaderSpinner } from './loaderSpinner';
import { newURLSearchParams } from './urlSearchParams';
import { loadPage } from './loadPage';

const debounce = require('lodash.debounce');
const moviesGallery = document.querySelector('ul.gallery');
const movieInput = document.querySelector('input.home-header__searchbar');

const renderGallery = async () => {
  addLoaderSpinner();
  dataMovies.page = 1;
  dataMovies.fetchType = 'home';
  dataMovies.query = movieInput.value;
  loadPage();
  // const result = await fetchTheMovieDBList(dataMovies.page, movieInput.value);
  // dataMovies.totalPages = result.total_pages;
  // const markupArr = result.data.map(element => {
  //   return `<li data-film_id="${element.id}">
  //           <figure class="card">
  //               <div class="thumb" data-id="${element.id}">
  //                   <img class="img" src="${element.poster_path}">
  //               </div>
  //               <figcaption>
  //                   <h3 class="title">${element.title}</h3>
  //                   <div class="details-wrapper">
  //                       <p>${element.genres.join(', ')}</p>
  //                       <p>${element.release_year}</p>
  //                       <div class="rating rating--visible">${
  //                         element.vote_average
  //                       }</div>
  //                   </div>
  //               </figcaption>
  //           </figure>
  //       </li>`;
  // });
  // newURLSearchParams();
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
