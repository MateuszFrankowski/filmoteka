export const addLoaderSpinner = () => {
  const gallery = document.querySelector('.gallery');
  const loaderSpinner = document.createElement('div');
  loaderSpinner.classList.add('loader');
  gallery.innerHTML = loaderSpinner;
  // gallery.before(loaderSpinner);
};
