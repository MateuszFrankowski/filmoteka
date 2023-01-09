import { fetchTheMovieDBMovie } from './apiFetch';
import {
  updateUserWatchedData,
  updateUserQueueData,
  deleteUserData,
  fetchUserDataFromFirestore,
} from './fireBaseFunctions';
import { roundTo1Comma } from './gallery';
let addToWatchBtn;
let addToQueueBtn;
let movie;
const modal = document.querySelector('[data-modal]');
const watchedHandler = event => {
  if (event.target.classList.contains('modal__watched-btn') !== true) return;
  if (event.target.innerText === 'ADD TO WATCHED') {
    event.target.classList.add('active-btn');
    addToQueueBtn.classList.remove('active-btn');
    updateUserWatchedData(window.userUid, movie.id, true);
    event.target.innerText = 'REMOVE FROM WATCHED';
    addToQueueBtn.innerText = 'ADD TO QUEUE';
  } else {
    event.target.classList.remove('active-btn');
    updateUserWatchedData(window.userUid, movie.id, false);
    event.target.innerText = 'ADD TO WATCHED';
    addToQueueBtn.innerText = 'ADD TO QUEUE';
  }
};
const queueHandler = event => {
  console.log('hello', event.target.classList.contains('modal__queue-btn'));
  if (event.target.classList.contains('modal__queue-btn') !== true) return;
  if (event.target.innerText === 'ADD TO QUEUE') {
    addToWatchBtn.classList.remove('active-btn');
    event.target.classList.add('active-btn');
    updateUserQueueData(window.userUid, movie.id, true);
    event.target.innerText = 'REMOVE FROM QUEUE';
    addToWatchBtn.innerText = 'ADD TO WATCHED';
  } else {
    event.target.classList.remove('active-btn');
    updateUserQueueData(window.userUid, movie.id, false);
    event.target.innerText = 'ADD TO QUEUE';
    addToWatchBtn.innerText = 'ADD TO WATCHED';
  }
};
const checkIfFilmInBase = (films, id) => {
  const inWatched =
    films.filmsWatched.indexOf(parseInt(id)) == -1
      ? 'ADD TO WATCHED'
      : 'REMOVE FROM WATCHED';
  const inQueue =
    films.filmsCollection.indexOf(parseInt(id)) == -1
      ? 'ADD TO QUEUE'
      : 'REMOVE FROM QUEUE';
  return { filmWatched: inWatched, filmInQueue: inQueue };
};
function showModal() {
  modal.classList.toggle('is-hidden');
  // if (modal.classList.contains('is-hidden')) {
  //   addToQueueBtn.removeEventListener('click', event => {
  //     'click', queueHandler(event);
  //   });
  //   addToWatchBtn.removeEventListenera('click', event => {
  //     watchedHandler(event);
  //   });
  // }
}
export const modalMovieInfo = async movieId => {
  showModal();
  movie = await fetchTheMovieDBMovie(movieId);
  const firebaseFilms = await fetchUserDataFromFirestore(window.userUid);
  let isSigned = false;
  let btnInnerText = {};
  if (window.userSigned) {
    const { filmWatched, filmInQueue } = checkIfFilmInBase(
      firebaseFilms,
      movieId
    ); // do Mateusza -> jeżeli nie ma filmu zwróć "add to watched" i "add to queue" w filmWatched i filmInQueue

    isSigned = true;
    btnInnerText = {
      filmWatched,
      filmInQueue,
      class: '',
      isDisabled: '',
    };
  } else {
    btnInnerText = {
      filmWatched: 'Add to watched',
      filmInQueue: 'Add to queue',
      class: 'no-active-btn',
      isDisabled: 'disabled',
    };
  }
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
        <p class="modal__data"><span class="modal__vote">${roundTo1Comma(
          movie.vote_average
        )}</span><span class="modal__info"> / </span>${movie.vote_count}</p>
    </li>
    <li class="modal__items">
        <p class="modal__info">Popularity</p>
        <p class="modal__data">${roundTo1Comma(movie.popularity)}</p>
    </li>
    <li class="modal__items">
        <p class="modal__info">Original Title</p>
        <p class="modal__data modal__data-original-title">${
          movie.original_title
        }</p>
   </li>
    <li class="modal__items">
        <p class="modal__info">Genre</p>
        <p class="modal__data">${movie.genres.join(', ')}</p>
    </li>
</ul>
<div>
    <p class="modal__about">ABOUT</p>
    <p class="modal__more">${movie.overview}</p>
    </div>
<div class="modal__add-btns">
<button class="modal__watched-btn ${btnInnerText.class}" ${
    btnInnerText.isDisabled
  }>${btnInnerText.filmWatched}</button>
<button class="modal__queue-btn ${btnInnerText.class}" ${
    btnInnerText.isDisabled
  }>${btnInnerText.filmInQueue}</button>
</div>
</div>
</div>`;
  modal.innerHTML = markup;
  const closeModalBtn = document.querySelector('[data-modal-close]');
  closeModalBtn.addEventListener('click', showModal);
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') modal.classList.add('is-hidden');
  });
  if (isSigned) {
    addToWatchBtn = document.querySelector('.modal__watched-btn');
    addToQueueBtn = document.querySelector('.modal__queue-btn');
    addToWatchBtn.addEventListener('click', watchedHandler);
    addToQueueBtn.addEventListener('click', queueHandler);
  }
  if(addToWatchBtn.innerText === 'REMOVE FROM WATCHED') {
    addToWatchBtn.classList.add('active-btn');
  }
  if(addToQueueBtn.innerText === 'REMOVE FROM QUEUE') {
    addToQueueBtn.classList.add('active-btn');
  }
}

