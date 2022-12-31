import { fetchTheMovieDBList } from './api';
import { dataMovies } from './home';

dataMovies = {
  page: 1, // nr of actual page
  totalPages: 20, // nr of total pages
  query: '', // searching text in home
};

await fetchTheMovieDBList(1, 'avatar');

// const movies = async () => {
//     const movies = await fetchTheMovieDBList(2);
//     console.log(movies) //list of movies
//     ... <!-- use result -->
// }
const moviesArray = movies.data.map(movie => {
  return movie.title;
});
console.log(fetchTheMovieDB);
const markup = `
<li>
  <figure class="card">
    <div class="thumb" data-id="${data.id}">
      <img class="img" src="https://www.themoviedb.org/t/p/w500${
        data.poster_path
      }" />
    </div>
    <figcaption>
      <h3 class="title">${data.title}</h3>
      <div class="details-wrapper">
        <p class="details" data-film_id="${data.id}">${genresArray.join(
  ', '
)} &#124; ${yearWithDate.getFullYear()}</p>
        <div class="rating rating--visible">${roundingMethodToFirstPlace(
          data.vote_average
        )}</div>
      </div>
    </figcaption>
  </figure>
</li>
`;
libraryGrid.insertAdjacentHTML('beforeend', markup);

// LOADER SPINNER TO ADD
// const loaderSpinner = document.createElement('span');
// loaderSpinner.className = 'loader';
