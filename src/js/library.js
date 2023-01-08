import { loadPage } from './loadPage';
import { changePage } from './pagination';
import { dataMovies } from './global';
import { clickGallery } from './gallery';

const startPage = async () => {
  dataMovies.fetchType = 'watched';
  dataMovies.page = 1;
  dataMovies.query = null;

  loadPage();
  clickGallery();
  changePage();
};

startPage();
