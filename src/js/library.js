import { loadPage } from './loadPage';
import { changePage, mediaListener } from './pagination';
import { dataMovies } from './global';
import { clickGallery } from './gallery';
import { loginHandling } from './firebase';

const startPage = async () => {
  await loginHandling();
  dataMovies.fetchType = 'watched';
  dataMovies.page = 1;
  dataMovies.query = null;

  await loadPage();
  mediaListener();
  clickGallery();
  changePage();
};

startPage();
