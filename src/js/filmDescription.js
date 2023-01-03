import { fetchTheMovieDBMovie } from './api'


 const modal = document.querySelector("[data-modal]");
 

 function showModal() {
  modal.classList.toggle('is-hidden')
 }

const modalMovieInfo = async (movieId) => {
   const movie = await fetchTheMovieDBMovie(76600);

const markup = `
<button class="modal__close-btn" data-modal-close>
<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m8 8 14 14M8 22 22 8" stroke="#000" stroke-width="2"/></svg>
</button>
<img class="modal__poster" src="${movie.poster_path}"
    alt="poster image of ${movie.title}" />
    <h2 class="modal__title">${movie.title}</h2> 
    <ul class="modal__list">
    <li class="modal__items">
        <p class="modal__info">Vote / Votes</p>
        <p class="modal__data"><span class="modal__vote">${movie.vote_average}</span><span class="modal__info">/</span><span>${movie.vote_count}</span></p>
    </li>
    <li class="modal__items">
        <p class="modal__info">Popularity</p>  
        <p class="modal__data">${movie.popularity}</p>
    </li>
    <li class="modal__items">
        <p class="modal__info">Original Title</p>
        <p class="modal__data">${movie.original_title}</p>
   </li>
    <li class="modal__items">
        <p class="modal__info">Genre</p>
        <p class="modal__data">${movie.genres}</p>
    </li>
</ul>
<div class="modal__description">
    <p class="modal__about">ABOUT</p>
    <p class="modal__more">${movie.overview}</p>
</div>
<div class="modal__add-btns">
<button class="modal__watched-btn">add to watched</button>
<button class="modal__queue-btn">add to queue</button>
</div>`;
    modal.innerHTML = markup;
}

const closeModalBtn= document.querySelector("[data-modal-close]");

closeModalBtn.addEventListener("click", showModal);