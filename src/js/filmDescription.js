import { fetchTheMovieDBMovie } from './api'


 const modal = document.querySelector("[data-modal]");
 const openModalBtn = document.querySelector("[data-modal-open]");
 const closeModalBtn= document.querySelector("[data-modal-close]");

 openModalBtn.addEventListener("click", showModal);
 closeModalBtn.addEventListener("click", showModal);

 function showModal() {
  modal.classList.remove('is-hidden')
 }

const modalMovieInfo = async () => {
   const movie = await fetchTheMovieDBMovie(76600);
   const moviesArray = movie.data.map(movie => {
    return movie;
  });
  console.log(moviesArray);
  moviesArray.forEach(() => {
    const markup = `<img class="modal__poster" src="${movie.poster_path}"
    alt="poster image of ${movie.title}" />
    <h2 class="modal__title">${title}</h2> `;
    modal.innerHTML = markup;
  })}; 

  modalMovieInfo()


