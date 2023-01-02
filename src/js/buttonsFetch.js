import { dataMovies } from './global';
import { loadPage } from './pagination.js'

const watchedBtn = document.querySelector('button.watched');
const queueBtn = document.querySelector('button.queue');

watchedBtn.addEventListener('click', (event) => {
    if (!event.target.classList.contains('active-button')) {
        watchedBtn.classList.toggle('active-button');
        queueBtn.classList.toggle('active-button');
        dataMovies.page = 1;
        dataMovies.fetchType = 'watched';
        loadPage();
    }
    return;
});

queueBtn.addEventListener('click', (event) => {
    if (!event.target.classList.contains('active-button')) {
        watchedBtn.classList.toggle('active-button');
        queueBtn.classList.toggle('active-button');
        dataMovies.page = 1;
        dataMovies.fetchType = 'queue';
        loadPage();
    }
    return;
});