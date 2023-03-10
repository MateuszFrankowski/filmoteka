import { modalMovieInfo } from './filmDescription';
import { dataMovies } from './global';
import { updateUserWatchedData } from './fireBaseFunctions'
import { updateUserQueueData } from './fireBaseFunctions'
import { loadPage } from './loadPage';

export const createMovies = async movies => {
  const galleryContainer = document.getElementsByClassName('gallery');
  let i = 0;
  const markup = movies.data.map(data => {
    i += 1;
    return liElement(data, i);
  });

  galleryContainer[0].classList.add('grid');
  galleryContainer[0].innerHTML = markup.join('');
};

export const liElement = (data, movieNr) => {
  return `<li  data-film_id="${data.id}" data-film_nr="${movieNr}">
            <figure class="card">
              <div class="thumb" data-id="${data.id}">
                <img class="img" src="${data.poster_path}" />
              </div>
              <figcaption>
                <h3 class="title">${data.title}</h3>
                <div class="details-wrapper">
                  <p>${data.genres.join(', ')}</p>|
                  <p>${data.release_year}</p>
                  <div class="rating rating--visible">${roundTo1Comma(
                    data.vote_average
                  )}</div>
                </div>
              </figcaption>
              ${dataMovies.fetchType !== 'home' 
              ? `<button class="delete-cross">
              <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="m8 8 14 14M8 22 22 8" stroke-width="2"/></svg>
              </button>`
              : ``}
            </figure>
          </li>
        `;
};

export const roundTo1Comma = num => {
  let roundNum;
  if (!isNaN(num)) {
    roundNum = Math.round(num * 10) / 10;
    if (roundNum === Math.round(roundNum)) {
      roundNum = roundNum + '.0';
    }
  } else {
    roundNum = num;
  }
  return roundNum;
};

export const clickGallery = () => {
  document.querySelector('.gallery').addEventListener('click', async e => {
    if (e.target === e.currentTarget) {
      return;
    }
    const movieId = goToLiElement(e.target).dataset.film_id;
    const movieNr = goToLiElement(e.target).dataset.film_nr;
    if (e.target.closest('button.delete-cross') !== null) {
      if (dataMovies.fetchType === 'watched') {
        await updateUserWatchedData(window.userUid, parseFloat(movieId), false);
      } else {
        await updateUserQueueData(window.userUid, parseFloat(movieId), false);
      }
      loadPage();
      return;
    }
    modalMovieInfo(movieId, movieNr);
  });

  const goToLiElement = targetELement => {
    if (targetELement.tagName !== 'LI') {
      return goToLiElement(targetELement.parentElement);
    }
    return targetELement;
  };
};
