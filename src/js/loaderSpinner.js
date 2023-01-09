export const addLoaderSpinner = () => {
  const gallery = document.querySelector('.gallery');
  const loaderSpinner = document.createElement('div');
  gallery.classList.remove('grid');
  loaderSpinner.classList.add('loader');
  gallery.innerHTML = loaderSpinner.outerHTML;
  // gallery.before(loaderSpinner);
};
