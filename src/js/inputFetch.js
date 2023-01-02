import { dataMovies } from './global';
import { loadPage } from './pagination.js';
import { fetchTheMovieDBList } from './api.js';

const moviesGallery = document.querySelector('ul.gallery');
const movieInput = document.querySelector('input.home-header__searchbar');

dataMovies.page = 1;
dataMovies.fetchType = 'home';
dataMovies.query = movieInput.value;
loadPage();

const renderGallery = async () => {
    const result = await fetchTheMovieDBList(dataMovies.page, movieInput.value);
    const markupArr = result.data.map(element => {
        return `<li>
            <figure class="card">
                <div class="thumb" data-id="${element.id}">
                    <img class="img" src="${element.poster_path}">
                </div>
                <figcaption>
                    <h3 class="title">${element.title}</h3>
                    <div class="details-wrapper">
                        <p class="details" data-film_id="${element.id}">${element.genres}${element.vote_average}</p>
                    </div>
                </figcaption>
            </figure>
        </li>`
    })
    moviesGallery.innerHTML = markupArr.join('');
};

movieInput.addEventListener('input', () => {
    renderGallery();
})
