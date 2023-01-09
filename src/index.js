// import { fetchTheMovieDBList, fetchTheMovieDBMovie } from './js/api';
import './sass/main.scss';
import { footerModalFunction } from './js/footerModal';

footerModalFunction();

import { dataMovies } from './js/global';

// export const newURLSearchParams = () => {
//   const url = new URL(document.URL);
//   let urlAdress = new URL(window.location);
//   let searchParams = new URLSearchParams(url.search);
//   const { page, query, fetchType } = dataMovies;
//   console.log(page, fetchType);
//   for (const key of searchParams.keys()) {
//     searchParams.delete(key);
//   }
//   console.log('delete:', !!urlAdress.search.toString());
//   switch (fetchType) {
//     case 'home':
//       searchParams.set('page', page);
//       if (!!query) {
//         searchParams.set('query', query);
//       }
//       break;
//     case 'watched':
//     case 'queue':
//       searchParams.set('page', page);
//       // add searchParams.set("movies_per_page", dataMovies.moviesPerPage);
//       searchParams.set('type', fetchType);
//       break;
//     default:
//       return;
//       break;
//   }
//   console.log('new:', searchParams.toString());
//   urlAdress.search = searchParams;
//   if (urlAdress.href === window.location.href) {
//     return;
//   }
//   window.location = urlAdress.href;
// };
// newURLSearchParams();
// url.hash = `page${dataMovies.page}`;
// let newUrl = url.href;
// document.location.href = newUrl;
// const url = new URL(window.location);
// const searchParams = new URLSearchParams(url.search);
// console.log(url.href);
// const add_params = {
//   page: dataMovies.page,
//   //   d: new String(2),
//   //   e: false.toString(),
// };

// const new_params = new URLSearchParams([
//   //   ...Array.from(url.searchParams.entries()), // [["a","hello"],["b","world"]]
//   ...Object.entries(add_params), // [["c","a"],["d","2"],["e","false"]]
// ]).toString();
// console.log(new_params);
// // a=hello&b=world&c=a&d=2&e=false

// const new_url = new URL(`${url.origin}${url.pathname}?${new_params}`);

// console.log(new_url.href);
// // https://example.com/?a=hello&b=world&c=a&d=2&e=false

// // Here it is as a function that accepts (URL, Record<string, string>)
// const addSearchParams = (url, params = {}) =>
//   new URL(
//     `${url.origin}${url.pathname}?${new URLSearchParams([
//       ...Array.from(url.searchParams.entries()),
//       ...Object.entries(params),
//     ])}`
//   );
