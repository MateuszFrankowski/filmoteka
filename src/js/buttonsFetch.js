import { dataMovies } from './global';
import { loadPage } from './loadPage';

export const btnListenerForWatchedQueue = () => {
  const watchedBtn = document.querySelector('button.watched');
  const queueBtn = document.querySelector('button.queue');

  watchedBtn.addEventListener('click', event => {
    if (!event.target.classList.contains('active-button')) {
      watchedBtn.classList.add('active-button');
      queueBtn.classList.remove('active-button');
      dataMovies.page = 1;
      dataMovies.fetchType = 'watched';
      loadPage();
    }
    return;
  });

  queueBtn.addEventListener('click', event => {
    if (!event.target.classList.contains('active-button')) {
      watchedBtn.classList.remove('active-button');
      queueBtn.classList.add('active-button');
      dataMovies.page = 1;
      dataMovies.fetchType = 'queue';
      loadPage();
    }
    return;
  });
};

export const startButtons = () => {
  const watchedBtn = document.querySelector('button.watched');
  const queueBtn = document.querySelector('button.queue');

  if (dataMovies.fetchType === 'watched') {
    watchedBtn.classList.add('active-button');
    queueBtn.classList.remove('active-button');
  }
  if (dataMovies.fetchType === 'queue') {
    watchedBtn.classList.remove('active-button');
    queueBtn.classList.add('active-button');
  }
};
