import { fetchTheMovieDBList, fetchTheMovieDBMovie } from './api'
import { dataMovies } from './home';

// <========> HOW USE PAGINATION <========>
//
// <===> Use pagination in start <===>
// pagination({
//   pageNr: number,
//   lastPage: number,
// });
// // only create a page buttons
// // pageNr -> page which you load from API (dataMovies.page)
// // lastPage -> number of max pages from API (dataMovies.totalPages)
//
// <===> Listener for buttons <===>
// loadPage({
//   fetchType: string,
//   query: string,
// })
// // eventListener to load movies when click a button
// // fetchType -> to choose: "home", "library-watched", "library-queue"
// // query -> searching text movie from index.js input (in library.html not usable)

export const pagination = ({ pageNr, lastPage }) => {
  const paginationList = document.querySelector('#pages');
  const markup = markupPages(pageNr, lastPage);
  const markupList = createMarkupList(markup, pageNr, lastPage);
  paginationList.innerHTML = markupList;
};

const markupPages = (pageNr, lastPage) => {
  let markup = [];
  
  for (let i =  -4; i < 5; i++) {
    markup.push(pageNr + i);
  }

  const markupFilter = markup.filter(
    page => page > 0 && page <= lastPage
  );
  markupFilter[0] = 1;
  markupFilter[markupFilter.length - 1] = lastPage;
  if (markupFilter[1] !== 2) {
    markupFilter[1] = '...';
  }
  if (markupFilter[markupFilter.length - 2] !== lastPage - 1) {
    markupFilter[markupFilter.length - 2] = '...';
  }

  return markupFilter;
};

const createMarkupList = (markup, pageNr, lastPage) => {
  let markupList = [];
  if (pageNr > 1) {
    markupList.push(
      `<li><button class="pages__btn pages__rim" type="button" data-page="before">&#x3c;</button></li>`
    );
  } else {
    markupList.push(`<li><p class="pages__btn pages__rim pages__rim--disabled">
          &#x3c;
        </p></li>`);
  }
  markup.forEach(page => {
    let classLi = '';
    let classPage = '';
    if (page < pageNr - 2 || page > pageNr + 2) {
      classLi = ' pages--none';
    }
    if (page === pageNr) {
      classPage = ' pages__active';
    }
    if (!isNaN(page)) {
      markupList.push(
        `<li class="${classLi}"><button class="pages__btn${classPage}" type="button" data-page="${page}">${page}</button></li>`
      );
    }
    if (isNaN(page)) {
      markupList.push(
        `<li class="pages--none"><p class="pages__item">...</p></li>`
      );
    }
  });
  if (pageNr < lastPage) {
    markupList.push(
      `<li><button class="pages__btn pages__rim" type="button" data-page="after">
          &#x3e;
        </button></li>`
    );
  } else {
    markupList.push(`<li><p class="pages__btn pages__rim pages__rim--disabled">
          &#x3e;
        </p></li>`);
  }
  return markupList.join('\r\n');
};

///////////////////////////////////////

const buttonListener = (e, fetchType, query) => {
  if (e.target.type !== "button") {
    return
  }
  const { page } = dataMovies;
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

  const movie = changePage(dataMovies.page, fetchType, query)
}

const changePage = async (pageNr, fetchType, query) => {
  let movies={}
  switch (fetchType) {
    case "home":
        movies = await fetchTheMovieDBList(pageNr, query);
      break;
    case "libary-watched":
        // movies = await for fireBase API =========================================================================================
      break;
    case "libary-queue":
        // movies = await for fireBase API =========================================================================================
      break;
    default:
      break;
  }
  if (movies.total_pages === 0) {
    return
  }
  pagination({
    pageNr,
    lastPage: dataMovies.totalPages
  });
  console.log(movies)
  // Function to insert movies to gallery ==========================================================================================
}

export const loadPage = ({ fetchType, query }) => {
  const pages = document.querySelector(".pages__list")
  pages.addEventListener("click", e => buttonListener(e, fetchType, query));
}