import { fetchTheMovieDBList } from './api'

//gallery
export const createMovies = async (movies) => {
    const galleryContainer = document.getElementsByClassName('gallery');
    console.log(galleryContainer[0]);
    console.log(movies);
    const markup = movies.data.map (data => 
      `<li  data-film_id="${data.id}">
              <figure class="card">
                  <div class="thumb" data-id="${data.id}">
                  <img class="img" src="${ data.poster_path }" />
                  </div>
                  <figcaption>
                  <h3 class="title">${data.title}</h3>
                  <div class="details-wrapper">
                  <p>${data.genres.join(", ")} |
                  ${data.release_year}</p>
                  <div class="rating rating--visible">${roundTo1Comma(data.vote_average)}</div>
                  </div>
                  </figcaption>
              </figure>
        </li>
          `);
  
  galleryContainer[0].innerHTML = markup.join('');
};

const roundTo1Comma = (num) => {
let roundNum = Math.round(num * 10) / 10
if (roundNum === Math.round(roundNum)) {
roundNum = roundNum + ".0"
}
return roundNum
}

export const clickGallery = () => {
    document.querySelector(".gallery").addEventListener("click", (e) => {
      if (e.target === e.currentTarget) {
        return
      }
      const movieId = goToLiElement(e.target).dataset.film_id
      console.log(movieId);
      // function to open modal with movie id
    })
  
    const goToLiElement = (targetELement) => {
    if (targetELement.tagName !== "LI") {
      return goToLiElement(targetELement.parentElement)
    }
    return targetELement
  }
  }