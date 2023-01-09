export const addLoaderFilmSpinner = () => {
  const film = document.querySelector('.backdrop');
  const loaderSpinner = document.createElement('div');
  loaderSpinner.classList.add('loader');
  film.innerHTML = loaderSpinner.outerHTML;
  // gallery.before(loaderSpinner);
};
