import { loadPage } from './loadPage';
import { changePage, mediaListener } from './pagination';
import { dataMovies } from './global';
import { clickGallery } from './gallery';
import { loginHandling } from './firebase';
import { changeUrlWithBrowser, checkStartUrl } from './urlSearchParams';
import { btnListenerForWatchedQueue } from './buttonsFetch';

const startPage = async () => {
  await loginHandling();
  checkStartUrl();
  changeUrlWithBrowser();

  btnListenerForWatchedQueue();
  await loadPage();
  mediaListener();
  clickGallery();
  changePage();
};

startPage();
