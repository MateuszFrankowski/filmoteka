import { fetchTheMovieDBMovie } from './api';
import {
  updateUserWatchedData,
  updateUserQueueData,
  deleteUserData,
  fetchUserDataFromFirestore,
} from './fireBaseFunctions';
let addToWatchBtn;
let addToQueueBtn;
let movie;
const modal = document.querySelector('[data-modal]');
const watchedHandler = event => {
  if (event.target.classList.contains('modal__watched-btn') !== true) return;
  if (event.target.innerText === 'ADD TO WATCHED') {
    updateUserWatchedData(window.userUid, movie.id, true);
    event.target.innerText = 'REMOVE FROM WATCHED';
  } else {
    updateUserWatchedData(window.userUid, movie.id, false);
    event.target.innerText = 'ADD TO WATCHED';
    addToQueueBtn.innerText = 'REMOVE FROM QUEUE';
  }
};
const queueHandler = event => {
  console.log('hello', event.target.classList.contains('modal__queue-btn'));
  if (event.target.classList.contains('modal__queue-btn') !== true) return;
  if (event.target.innerText === 'ADD TO QUEUE') {
    updateUserQueueData(window.userUid, movie.id, true);
    event.target.innerText = 'REMOVE FROM QUEUE';
    addToWatchBtn.innerText = 'ADD TO WATCHED';
  } else {
    updateUserQueueData(window.userUid, movie.id, false);
    event.target.innerText = 'ADD TO QUEUE';
  }
};

const checkIfFilmInBase = (films, id) => {
  console.log('filmy', films, id, films.filmsCollection.indexOf(id));
  console.log(films.filmsCollection[0], id.toString(), typeof id);
  const inQueue =
    films.filmsCollection.indexOf(parseInt(id)) != -1
      ? 'ADD TO WATCHED'
      : 'REMOVE FROM WATCHED';
  const inWatched =
    films.filmsWatched.indexOf(parseInt(id)) != -1
      ? 'ADD TO QUEUE'
      : 'REMOVE FROM QUEUE';
  return { filmWatched: inQueue, filmInQueue: inWatched };
};
function showModal() {
  modal.classList.toggle('is-hidden');
  //   if (modal.classList.contains('is-hidden')) {
  //     addToQueueBtn.removeEventListener(
  //       'click',
  //       updateUserWatchedData(window.userUid, movie.movieId, true)
  //     );
  //     addToWatchBtn.removeEventListener('click', () => {
  //       // if (btn.innerText === 'ADD TO WATCHED') {
  //       //   updateUserQueueData(window.userUid, movie.movieId, false);
  //       // } else {
  //       //   btn.innerText = 'REMOVE FROM WATCHED';
  //       updateUserQueueData(window.userUid, movie.movieId, true);
  //       // }
  //     });
  //   }
}

export const modalMovieInfo = async movieId => {
  showModal();
  movie = await fetchTheMovieDBMovie(movieId);

  const firebaseFilms = await fetchUserDataFromFirestore(window.userUid);
  if (window.userSigned) {
    const { filmWatched, filmInQueue } = checkIfFilmInBase(
      firebaseFilms,
      movieId
    );

    const markup = `
<div class="modal">
<button class="modal__close-btn" data-modal-close>
<svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m8 8 14 14M8 22 22 8" stroke="#000" stroke-width="2"/></svg>
</button>
<img class="modal__poster" src="${movie.poster_path}"
    alt="poster image of ${movie.title}" />
    <div class="modal__description">
    <h2 class="modal__title">${movie.title}</h2> 
    <ul class="modal__list">
    <li class="modal__items">
        <p class="modal__info">Vote / Votes</p>
        <p class="modal__data"><span class="modal__vote">${movie.vote_average}</span><span class="modal__info">/</span>${movie.vote_count}</p>
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
<div>
    <p class="modal__about">ABOUT</p>
    <p class="modal__more">${movie.overview}</p>
    </div>
<div class="modal__add-btns">
<button class="modal__watched-btn">${filmWatched}</button>
<button class="modal__queue-btn">${filmInQueue}</button>
</div>
</div>
</div>`;

    modal.innerHTML = markup;
    addToWatchBtn = document.querySelector('.modal__watched-btn');
    addToQueueBtn = document.querySelector('.modal__queue-btn');
    addToWatchBtn.addEventListener('click', event => {
      watchedHandler(event);
    });
    addToQueueBtn.addEventListener('click', event => {
      queueHandler(event);
    });
    const closeModalBtn = document.querySelector('[data-modal-close]');
    closeModalBtn.addEventListener('click', showModal);
  } else {
    const markup = `
<div class="modal">
<button class="modal__close-btn" data-modal-close>
<svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m8 8 14 14M8 22 22 8" stroke="#000" stroke-width="2"/></svg>
</button>
<img class="modal__poster" src="${movie.poster_path}"
    alt="poster image of ${movie.title}" />
    <div class="modal__description">
    <h2 class="modal__title">${movie.title}</h2> 
    <ul class="modal__list">
    <li class="modal__items">
        <p class="modal__info">Vote / Votes</p>
        <p class="modal__data"><span class="modal__vote">${movie.vote_average}</span><span class="modal__info">/</span>${movie.vote_count}</p>
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
<div>
    <p class="modal__about">ABOUT</p>
    <p class="modal__more">${movie.overview}</p>
    </div>
<div class="modal__add-btns">
<button class="modal__watched-btn">'ADD TO WATCHED'</button>
<button class="modal__queue-btn">'ADD TO QUEUE'</button>
</div>
</div>
</div>`;

    modal.innerHTML = markup;

    const closeModalBtn = document.querySelector('[data-modal-close]');
    closeModalBtn.addEventListener('click', showModal);
  }
  //deleteUserData(window.userUid);
};
