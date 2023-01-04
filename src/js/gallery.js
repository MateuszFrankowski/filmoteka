import { fetchTheMovieDBList } from './api'
// import { dataMovies } from "./home";

// dataMovies = {
//        page: 1, // nr of actual page
//        totalPages: 20, // nr of total pages
//        query: "", // searching text in home
//      };

    //  await fetchTheMovieDBList(1, "avatar"); 

// const movies = async () => {
//     const movies = await fetchTheMovieDBList(2);
//     console.log(movies) //list of movies
//     ... <!-- use result -->
// }
//gallery
export const createMovies = async (movies) => {
    const galleryContainer = document.getElementsByClassName('gallery');
    console.log(galleryContainer[0]);
    console.log(movies);
    const markup = movies.data.map (data => 
      `<li  data-film_id="${data.id}">
              <figure class="card">
                  <div class="thumb" data-id="${data.id}">
                  <img class="img" src="https://www.themoviedb.org/t/p/w500${data.poster_path}" />
                  </div>
                  <figcaption>
                  <h3 class="title">${data.title}</h3>
                  <div class="details-wrapper">
                  <p>${data.genres.join(" ")}</p>
                  <p>${data.release_year}</p>
                  <div class="rating rating--visible">${roundTo1Comma(data.vote_average)}</div>
                  </div>
                  </figcaption>
              </figure>
        </li>
          `);
  
  galleryContainer[0].innerHTML = markup;
};
//-------------- Function rounding rating to 1 place after comma--------------//
// export function roundingMethodToFirstPlace(value) {
//     let roundingValue = Number(Math.round(value + 'e+1') + 'e-1');
//   return roundingValue
//   };
//-----------------------------------------------
// const moviesArray = movies.data.map(movie => {
//   return movie.title;
// });
// console.log(fetchTheMovieDB);
//   const markup = `
// <li>
//   <figure class="card">
//     <div class="thumb" data-id="${data.id}">
//       <img class="img" src="https://www.themoviedb.org/t/p/w500${
//         data.poster_path
//       }" />
//     </div>
//     <figcaption>
//       <h3 class="title">${data.title}</h3>
//       <div class="details-wrapper">
//         <p class="details" data-film_id="${data.id}">${data.genres.join(
//     ', '
//   )} &#124; ${data.release_year}</p>
//         <div class="rating rating--visible">${roundTo1Comma(
//           data.vote_average
//         )}</div>
//       </div>
//     </figcaption>
//   </figure>
// </li>
// `;
//   libraryGrid.insertAdjacentHTML('beforeend', markup);

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