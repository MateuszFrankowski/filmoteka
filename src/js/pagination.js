export const pagination = (pageNr, countOfPages) => {
  const paginationList = document.querySelector('#pagination');
  const markup = markupPages(pageNr, countOfPages);
  const markupList = createMarkupList(markup, pageNr, countOfPages);
  paginationList.innerHTML = markupList;
};

const markupPages = (pageNr, countOfPages) => {
  let markup = [];

  for (let i = -4; i < 5; i++) {
    markup.push(pageNr + i);
  }
  const markupFilter = markup.filter(
    page => +page > 0 && +page <= countOfPages
  );
  markupFilter[0] = 1;
  markupFilter[markupFilter.length - 1] = countOfPages;
  if (markupFilter[1] !== 2) {
    markupFilter[1] = '...';
  }
  if (markupFilter[markupFilter.length - 2] !== countOfPages - 1) {
    markupFilter[markupFilter.length - 2] = '...';
  }

  return markupFilter;
};

const createMarkupList = (markup, pageNr, countOfPages) => {
  let markupList = [];
  if (pageNr > 1) {
    markupList.push(
      `<li id="pag-left"><button class="pagination__btn pagination__rim" type="button">
          &#x3c;
        </button></li>`
    );
  } else {
    markupList.push(`<li><p class="pagination__btn pagination__rim pagination__rim--disabled">
          &#x3c;
        </p></li>`);
  }
  markup.forEach(page => {
    let classLi = '';
    let classPage = '';
    if (page < pageNr - 2 || page > pageNr + 2) {
      classLi = ' pagination--none';
    }
    if (page === pageNr) {
      classPage = ' pagination__page';
    }
    if (!isNaN(page)) {
      markupList.push(
        `<li id="pag-${page}" class="${classLi}"><button class="pagination__btn${classPage}" type="button">${page}</button></li>`
      );
    }
    if (isNaN(page)) {
      markupList.push(
        `<li class="pagination--none"><p class="pagination__item">...</p></li>`
      );
    }
  });
  if (pageNr < countOfPages) {
    markupList.push(
      `<li id="pag-right"><button class="pagination__btn pagination__rim" type="button">
          &#x3e;
        </button></li>`
    );
  } else {
    markupList.push(`<li><p class="pagination__btn pagination__rim pagination__rim--disabled">
          &#x3e;
        </p></li>`);
  }
  return markupList.join('\r\n');
};

const test = pagination(7, 13);
test;
