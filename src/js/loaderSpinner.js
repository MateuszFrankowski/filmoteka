export const addLoaderSpinner = () => {
  const gallery = document.querySelector('.gallery');
  gallery.classList.remove('grid');
  const loaderSpinner = document.createElement('div');
  loaderSpinner.classList.add('loader');
  gallery.innerHTML = loaderSpinner.outerHTML;
  // gallery.before(loaderSpinner);
};
