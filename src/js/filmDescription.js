import { fetchTheMovieDBMovie } from './apiFetch';
import {
  updateUserWatchedData,
  updateUserQueueData,
  deleteUserData,
  fetchUserDataFromFirestore,
} from './fireBaseFunctions';
import { roundTo1Comma } from './gallery';
import { dataMovies } from './global';
import { addLoaderFilmSpinner } from './loaderSpinnerFilmDetail';
import { loadPage } from './loadPage';
let addToWatchBtn;
let addToQueueBtn;
let movie;
let oldQueueFilmStatus;
let oldWatchFilmStatus;
let newQueueFilmStatus;
let newWatchFilmStatus;
const modal = document.querySelector('[data-modal]');
const checkUpdateStatus = () => {
  // console.log(
  //   'oldQueueFilmStatus,',
  //   oldQueueFilmStatus,
  //   'newQueueFilmStatus ,',
  //   newQueueFilmStatus,
  //   'oldWatchFilmStatus,',
  //   oldWatchFilmStatus,
  //   '   newWatchFilmStatus,',
  //   newWatchFilmStatus
  // );

  modal.removeEventListener('click', modalClickListener);
  document.removeEventListener('keydown', modalEscapeListener);

  // if (
  //   (oldQueueFilmStatus !== newQueueFilmStatus ||
  //     oldWatchFilmStatus !== newWatchFilmStatus) &&
  //   dataMovies.fetchType !== 'home'
  // ) {
  //   // console.log('przeładowanie');
  //   loadPage();
  // }

  if (oldQueueFilmStatus !== newQueueFilmStatus && dataMovies.fetchType === "queue") {
    loadPage();
  }

  if (oldWatchFilmStatus !== newWatchFilmStatus && dataMovies.fetchType === "watched") {
    loadPage();
  }
};
const watchedHandler = event => {
  if (event.target.classList.contains('modal__watched-btn') !== true) return;
  if (event.target.classList.contains('active-btn') != true) {
    event.target.classList.add('active-btn');
    addToQueueBtn.classList.remove('active-btn');
    updateUserWatchedData(window.userUid, movie.id, true);
    event.target.innerText = 'REMOVE FROM WATCHED';
    addToQueueBtn.innerText = 'ADD TO QUEUE';
    newWatchFilmStatus = true;
    newQueueFilmStatus = false;
  } else {
    event.target.classList.remove('active-btn');
    updateUserWatchedData(window.userUid, movie.id, false);
    event.target.innerText = 'ADD TO WATCHED';
    addToQueueBtn.innerText = 'ADD TO QUEUE';
    newWatchFilmStatus = false;
  }
};
const queueHandler = event => {
  // console.log('hello', event.target.classList.contains('modal__queue-btn'));
  if (event.target.classList.contains('modal__queue-btn') !== true) return;
  if (event.target.classList.contains('active-btn') != true) {
    addToWatchBtn.classList.remove('active-btn');
    event.target.classList.add('active-btn');
    updateUserQueueData(window.userUid, movie.id, true);
    event.target.innerText = 'REMOVE FROM QUEUE';
    addToWatchBtn.innerText = 'ADD TO WATCHED';
    newQueueFilmStatus = true;
    newWatchFilmStatus = false;
  } else {
    event.target.classList.remove('active-btn');
    updateUserQueueData(window.userUid, movie.id, false);
    event.target.innerText = 'ADD TO QUEUE';
    addToWatchBtn.innerText = 'ADD TO WATCHED';
    newQueueFilmStatus = false;
  }
};
const checkIfFilmInBase = (films, id) => {
  let inWatched;
  let inQueue;
  let classQueue = '';
  let classWatched = '';
  if (films.filmsWatched.indexOf(parseInt(id)) == -1) {
    inWatched = 'ADD TO WATCHED';
    oldWatchFilmStatus = false;
    newWatchFilmStatus = false;
  } else {
    inWatched = 'REMOVE FROM WATCHED';
    classWatched = 'active-btn';
    oldWatchFilmStatus = true;
    newWatchFilmStatus = true;
  }

  if (films.filmsCollection.indexOf(parseInt(id)) == -1) {
    inQueue = 'ADD TO QUEUE';
    oldQueueFilmStatus = false;
    newQueueFilmStatus = false;
  } else {
    inQueue = 'REMOVE FROM QUEUE';
    classQueue = 'active-btn';
    oldQueueFilmStatus = true;
    newQueueFilmStatus = true;
  }
  return {
    filmWatched: inWatched,
    filmInQueue: inQueue,
    watchedClass: classWatched,
    queueClass: classQueue,
  };
};
let signedIn = false;
function showModal() {
  modal.classList.toggle('is-hidden');
  if (modal.classList.contains('is-hidden') && signedIn) {
    addToQueueBtn.removeEventListener('click', queueHandler, true);
    addToWatchBtn.removeEventListener('click', watchedHandler, true);
    // console.log('checks status wywołanie');
    checkUpdateStatus();
  }
}
export const modalMovieInfo = async (movieId, movieNr) => {
  showModal(false);
  addLoaderFilmSpinner();
  movie = await fetchTheMovieDBMovie(movieId);
  const firebaseFilms = await fetchUserDataFromFirestore(window.userUid);
  let isSigned = false;
  let btnInnerText = {};
  if (window.userSigned) {
    const { filmWatched, filmInQueue, watchedClass, queueClass } =
      checkIfFilmInBase(firebaseFilms, movieId);
    isSigned = true;
    signedIn = true;
    btnInnerText = {
      filmWatched,
      filmInQueue,
      class: '',
      classQueue: queueClass,
      classWatched: watchedClass,
      isDisabled: '',
    };
  } else {
    btnInnerText = {
      filmWatched: 'Add to watched',
      filmInQueue: 'Add to queue',
      class: 'no-active-btn',
      isDisabled: 'disabled',
      classQueue: '',
      classWatched: '',
    };
  }
  const classLeft = movieNr > 1 ? 'modal__change-movie--active' : '';
  const classRight = movieNr < dataMovies.moviesPerPage ? 'modal__change-movie--active' : '';
  const markup = `
    <div class="modal" data-movie_nr="${movieNr}">
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
            <p class="modal__data modal__data-original-title">${movie.original_title
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
          <button class="modal__watched-btn ${btnInnerText.class}${btnInnerText.classWatched
  }" ${btnInnerText.isDisabled}>${btnInnerText.filmWatched}</button>
          <button class="modal__queue-btn ${btnInnerText.class}${btnInnerText.classQueue
  }" ${btnInnerText.isDisabled}>${btnInnerText.filmInQueue}</button>
        </div>
      </div>
      <div class="modal__change-movie modal__change-movie--left ${classLeft}" data-move="left">&#x3c;</div>
      <div class="modal__change-movie modal__change-movie--right ${classRight}" data-move="right">&#x3e;</div>
    </div>`;
  modal.innerHTML = markup; 
  const closeModalBtn = document.querySelector('[data-modal-close]');
  closeModalBtn.addEventListener('click', showModal);
  document.addEventListener('keydown', modalEscapeListener);
  modal.addEventListener('click', modalClickListener);
  
  const leftMovieBtn = document.querySelector('.modal__change-movie--left');
  const rightMovieBtn = document.querySelector('.modal__change-movie--right');
  leftMovieBtn.addEventListener('click', changeInnerModal)
  rightMovieBtn.addEventListener('click', changeInnerModal)

  if (isSigned) {
    addToWatchBtn = document.querySelector('.modal__watched-btn');
    addToQueueBtn = document.querySelector('.modal__queue-btn');
    addToWatchBtn.addEventListener('click', watchedHandler, true);
    addToQueueBtn.addEventListener('click', queueHandler, true);
  }
};

const modalClickListener = event => {
  if (event.target === event.currentTarget) {
    modal.classList.add('is-hidden');
    // console.log('checks status wywołanie');
    checkUpdateStatus();
  }
};

const modalEscapeListener = event => {
  if (event.key === 'Escape') {
    modal.classList.add('is-hidden');
    // console.log('checks status wywołanie');
    checkUpdateStatus();
  }
};

const changeInnerModal = async (e) => {
  let movieNumber = document.querySelector('[data-movie_nr]').dataset.movie_nr;
  let move = 0;
  if (e.target.dataset.move === "right") { move += 1 };
  if (e.target.dataset.move === "left") { move -= 1 };
  movieNumber =Number(movieNumber)+ Number(move);
  if (movieNumber < 1 || movieNumber > dataMovies.moviesPerPage) {
    return
  };
  const galleryMovie = document.querySelector(`[data-film_nr="${movieNumber}"]`);
  const movieId = galleryMovie.dataset.film_id;
  showModal(false);
  modalMovieInfo(movieId, movieNumber);
}