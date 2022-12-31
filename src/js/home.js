import { pagination, loadPage } from './pagination';
import { fetchTheMovieDBList } from './api';
import { dataMovies } from './global';

const startPage = async () => {
  dataMovies.fetchType = 'home';
  dataMovies.page = 1;
  dataMovies.query = null;
  // yours listeners no using start movies variable in function

  //
  const movies = await fetchTheMovieDBList(dataMovies.page, dataMovies.query);
  dataMovies.page = movies.page;
  dataMovies.totalPages = movies.total_pages;
  if (movies.total_pages > 0) {
    pagination({
      pageNr: dataMovies.page,
      lastPage: dataMovies.totalPages,
    });
  }
  // function to creating gallery
  createMovies();
  //

  loadPage({
    fetchType: dataMovies.fetchType,
    query: dataMovies.query,
  });
  // yours listeners using start movies variable in function

  //
};
//test gallery
const createMovies = async () => {
  const galleryContainer = document.getElementsByClassName('gallery');
  console.log(galleryContainer[0]);
  const movies = await fetchTheMovieDBList(1, 'avatar');
  console.log(movies);
  const moviesArray = movies.data.map(movie => {
    return movie;
  });
  console.log(moviesArray);
  moviesArray.forEach(data => {
    const markup = `
          <li>
              <figure class="card">
                  <div class="thumb" data-id="${data.id}">
                  <img class="img" src="https://www.themoviedb.org/t/p/w500${data.poster_path}" />
                  </div>
                  <figcaption>
                  <h3 class="title">${data.title}</h3>
                  <div class="details-wrapper">
                      <p class="details" data-film_id="${data.id}">
                  </div>
                  </figcaption>
              </figure>
              </li>
          `;
    galleryContainer[0].insertAdjacentHTML('beforeend', markup);
  });
};
//
startPage();

// LOADER SPINNER TO ADD
// const loaderSpinner = document.createElement('span');
// loaderSpinner.className = 'loader';
