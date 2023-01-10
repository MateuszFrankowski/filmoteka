import { moviesPerPageInLibrary } from './fireBaseFunctions';
import { dataMovies } from './global';
import { loadPage } from './loadPage';
// import { off } from 'process';

export const pagination = () => {
  const paginationList = document.querySelector('#pages');
  const markup = markupPages();
  const markupList = createMarkupList(markup);
  paginationList.innerHTML = markupList;
  // const test = await fetchWatchedFilmsPerPage(window.userUid, 1);
  // console.log(test);
};

const markupPages = () => {
  const { page, totalPages } = dataMovies;
  let markup = [];

  if (page < 5) {
    for (let i = 1; i < 10; i++) {
      markup.push(i);
    }
  } else if (page > totalPages - 4) {
    for (let i = totalPages - 8; i < totalPages + 1; i++) {
      markup.push(i);
    }
  } else {
    for (let i = -4; i < 5; i++) {
      markup.push(page + i);
    }
  }
  const markupFilter = markup.filter(page => page > 0 && page <= totalPages);

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

const createMarkupList = markup => {
  const { page, totalPages } = dataMovies;
  let markupList = [];
  if (page > 1) {
    markupList.push(
      `<li><button class="pages__btn pages__rim" type="button" data-page="before">&#x3c;</button></li>`
    );
  } else if (totalPages > 1) {
    markupList.push(
      `<li><p class="pages__btn pages__rim pages__rim--disabled">&#x3c;</p></li>`
    );
  }
  markup.forEach(pageNr => {
    let classLi = '';
    let classPage = '';
    if (page < 3) {
      if (pageNr > 5) {
        classLi = ' pages--none';
      }
    } else if (page > totalPages - 2) {
      if (pageNr < totalPages - 4) {
        classLi = ' pages--none';
      }
    } else if (pageNr < page - 2 || pageNr > page + 2) {
      classLi = ' pages--none';
    }
    if (Number(pageNr) === Number(page)) {
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
      `<li><button class="pages__btn pages__rim" type="button" data-page="after">&#x3e;</button></li>`
    );
  } else if (totalPages > 1) {
    markupList.push(`<li><p class="pages__btn pages__rim pages__rim--disabled">
          &#x3e;
        </p></li>`);
  }
  return markupList.join('\r\n');
};

///////////////////////////////////////

export const changePage = () => {
  const pages = document.querySelector('.pages__list');
  pages.addEventListener('click', e => pageButtonListener(e));
};

const pageButtonListener = e => {
  if (e.target.type !== 'button') {
    return;
  }
  let { page } = dataMovies;
  const btn = e.target;
  const newPage = btn.dataset.page;
  if (Number(newPage) === page) {
    return;
  }

  if (!isNaN(newPage)) {
    dataMovies.page = Number(newPage);
  } else if (newPage === 'after') {
    dataMovies.page = Number(page) + 1;
  } else if (newPage === 'before') {
    dataMovies.page = Number(page) - 1;
  }

  loadPage(true);
};

export const mediaListener = () => {
  window
    .matchMedia('(min-width: 768px)')
    .addEventListener('change', async e => {
      const { page } = dataMovies;
      const { phone, tablet } = moviesPerPageInLibrary;
      if (e.matches) {
        dataMovies.moviesPerPage = tablet;
        dataMovies.page = calculatePageWithMedia(page, phone, tablet);
      } else {
        dataMovies.moviesPerPage = phone;
        dataMovies.page = calculatePageWithMedia(page, tablet, phone);
      }
      await loadPage();
    });
  window
    .matchMedia('(min-width: 1200px)')
    .addEventListener('change', async e => {
      const { page } = dataMovies;
      const { tablet, laptop } = moviesPerPageInLibrary;
      if (e.matches) {
        dataMovies.moviesPerPage = laptop;
        dataMovies.page = calculatePageWithMedia(page, tablet, laptop);
      } else {
        dataMovies.moviesPerPage = tablet;
        dataMovies.page = calculatePageWithMedia(page, laptop, tablet);
      }
      await loadPage();
    });
};
// oldPage, oldPerPage, newPerPage;
const calculatePageWithMedia = (oldPage, oldPerPage, newPerPage) => {
  const firstMovieNr = (oldPage - 1) * oldPerPage + 1;
  return Math.ceil(firstMovieNr / newPerPage);
};
