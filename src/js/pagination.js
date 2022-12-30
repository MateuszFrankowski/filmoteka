import { fetchTheMovieDBList, fetchTheMovieDBMovie } from './api'
import { dataMovies } from './global';

// <========> HOW USE PAGINATION <========>
//
// <===> Use pagination in start <===>
// import { dataMovies } from './global';
// dataMovies.page = number; // if you want change it
// dataMovies.totalPages = number; // if you want change it
// pagination();
// // only create a page buttons
//
// <===> Listener for buttons <===>
// import { dataMovies } from './global';
// dataMovies.fetchType = string; // if you want change it
// dataMovies.query = string; // if you want change it
// loadPage()
// // eventListener to load movies when click a button
// // dataMovies.fetchType -> to choose: "home", "watched", "queue"
// // dataMovies.query -> searching text movie from index.js input (in library.html not usable)

export const pagination = () => {
  const paginationList = document.querySelector('#pages');
  const markup = markupPages();
  const markupList = createMarkupList(markup);
  paginationList.innerHTML = markupList;
};

const markupPages = () => {
  const { page, totalPages } = dataMovies;
  let markup = [];
  
  if (page < 5) {
    for (let i = 1; i < 10; i++) {
      markup.push(i)
    }
  } else if (page > totalPages - 4) {
    for (let i = totalPages - 8; i < totalPages + 1; i++) {
      markup.push(i)
    }
  } else {
    for (let i = -4; i < 5; i++) {
      markup.push(page + i);
    }
  }
  const markupFilter = markup.filter(
    page => page > 0 && page <= totalPages
  );
  
  markupFilter[0] = 1;
  if (totalPages > 1) {
    markupFilter[markupFilter.length - 1] = totalPages;
  }
  if (!!markupFilter[1] && markupFilter[1] !== 2) {
    markupFilter[1] = '...';
  }
  if (markupFilter[markupFilter.length - 2] !== totalPages - 1) {
    markupFilter[markupFilter.length - 2] = '...';
  }

  return markupFilter;
};

const createMarkupList = (markup) => {
  const { page, totalPages } = dataMovies;
  let markupList = [];
  if (page > 1) {
    markupList.push(
      `<li><button class="pages__btn pages__rim" type="button" data-page="before">&#x3c;</button></li>`
    );
  } else if (totalPages > 1) {
    markupList.push(`<li><p class="pages__btn pages__rim pages__rim--disabled">
          &#x3c;
        </p></li>`);
  }
  markup.forEach(pageNr => {
    let classLi = '';
    let classPage = '';
    if (page < 3) {
      if (pageNr > 5) { 
        classLi = ' pages--none';
      };
    } else if (page > totalPages - 2) {
      if (pageNr < totalPages - 4) { 
        classLi = ' pages--none';
      };
    } else if (pageNr < page - 2 || pageNr > page + 2) {
      classLi = ' pages--none';
    }
    if (pageNr === page) {
      classPage = ' pages__active';
    }
    if (!isNaN(pageNr)) {
      markupList.push(
        `<li class="${classLi}"><button class="pages__btn${classPage}" type="button" data-page="${pageNr}">${pageNr}</button></li>`
      );
    }
    if (isNaN(pageNr)) {
      markupList.push(
        `<li class="pages--none"><p class="pages__item">...</p></li>`
      );
    }
  });
  if (page < totalPages) {
    markupList.push(
      `<li><button class="pages__btn pages__rim" type="button" data-page="after">
          &#x3e;
        </button></li>`
    );
  } else if (totalPages > 1) {
    markupList.push(`<li><p class="pages__btn pages__rim pages__rim--disabled">
          &#x3e;
        </p></li>`);
  }
  return markupList.join('\r\n');
};

///////////////////////////////////////

const buttonListener = (e) => {
  if (e.target.type !== "button") {
    return
  }
  let { page } = dataMovies;
  const btn = e.target
  const newPage = btn.dataset.page
  if (Number(newPage) === page) {
    return
  }
  if (!isNaN(newPage)) {
    dataMovies.page = Number(newPage)
  } else if (newPage==="after") {
    dataMovies.page = page + 1
  } else if (newPage === "before") {
    dataMovies.page = page - 1
  }

  changePage();
}

const changePage = async () => {
  let {page, fetchType,query} = dataMovies
  let movies={}
  switch (fetchType) {
    case "home":
        movies = await fetchTheMovieDBList(page, query);
      break;
    case "watched":
        movies = await fetchTheMovieDBList(page, query);
        // change to // movies = await for fireBase API watched ======================================================================
      break;
    case "queue":
        // add // movies = await for fireBase API queue ==============================================================================
      break;
    default:
      break;
  }
  if (movies.total_pages === 0) {
    return
  } 
  if (page === dataMovies.page) {
    pagination();
    // Function to insert movies to gallery ==========================================================================================
    console.log(`${fetchType}:`, movies)
  }
}

export const loadPage = () => {
  const pages = document.querySelector(".pages__list")
  pages.addEventListener("click", e => buttonListener(e),0);
}