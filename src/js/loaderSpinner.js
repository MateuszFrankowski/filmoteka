export const loaderSpinner = () => {
  const gallery = document.querySelector('.gallery');
  const loaderSpinnerElement = document.createElement('div');
  loaderSpinnerElement.classList.add('loader');
  gallery.innerHTML = loaderSpinner;
  // gallery.before(loaderSpinner);
};
