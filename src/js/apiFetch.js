import axios from 'axios';
import { dataMovies } from './global';

// <========> IMPORT AXIOS FETCH <========>
// import { fetchTheMovieDBList, fetchTheMovieDBMovie } from 'path/to/api'

// <========> LIST OF MOVIES <========>
// function fetchTheMovieDBList(pageNr, optional searchQuery)
//
// pageNr   -> must be numeric
// searchQuery   -> serch text in movies list
//
// result: {
//   status:   -> true - list exist / false - no movies
//   page:   -> nr of page,
//   total_pages:   -> count of total pages,
//   total_results:   -> count of total movies,
//   data: [   -> array of movies
//     {
//       id   -> movie id (add to movie li in html to read with eventListener),
//       title   -> title of movie,
//       poster_path   -> src to movie poster image,
//       genre_ids   -> ids of genres (not usable),
//       genres   -> array of genres,
//       release_year   -> year of movie release,
//       vote_average   -> users vote value,
//     },
//     ...
//   ]
// }

// <========> DESCRIPTION OF MOVIE <========>
//
// function fetchTheMovieDBMovie(idMovie)
//
// idMovie   -> movie id (from <li> in html)
//
// result: {
//   id   -> movie id (add to movie li in html to read with eventListener),
//   title   -> title of movie,
//   original_title   -> original title of movie,
//   poster_path   -> src to movie poster image,
//   vote_average   -> users vote value,
//   vote_count   -> count of votes,
//   popularity   ->
//   overview   ->
//   genres: [   -> array of genres,
//     {
//       id   -> id of genre (not usable),
//       name   -> name of genre,
//     },
//     ...
//   ],
// }

// <========> LIST OF MOVIES BY IDS <========>
//
// function fetchTheMovieDBMovieIdList(idMovies, page, total_pages, total_results)
//
// idMovies   -> array of ids movies
// page   -> nr of page
// total_pages   -> count of total pages
// total_results   -> information about total movies from watched / queue
//
// result: {
//   page:   -> nr of page,
//   total_pages:   -> count of total pages,
//   total_results:   -> count of total movies,
//   data: [
//     {
//       id   -> movie id (add to movie li in html to read with eventListener),
//       title   -> title of movie,
//       poster_path   -> src to movie poster image,
//       genres   -> array of genres,
//       release_year   -> year of movie release,
//       vote_average   -> users vote value,
//     },
//     ...
//   ],
// }

// <========> HOW USE FETCH FUNCTION <========>
// Don't use result outside the function or return result,
// because function return only "Promise" info.
//
// <===> This is correct <===>
// const func = async () => {
//   const result = await fetchTheMovieDBList(2);
//   console.log(result) // > List of movies <
//   ... <!-- use result -->
// };
//
// <===> This is false <===>
// const func = async () => {
//   const result = await fetchTheMovieDBList(2);
//   return result;
// };
// const test = func();
// console.log(test); // 'Promise {<pending>}'

const THEMOVIEDB_KEY = 'c8f343487431a47156d389fa5ccb000e';
const THEMOVIEDB_URL = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = THEMOVIEDB_URL;
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

const fetchTheMovieDB = async (urlSearch, parameters) => {
  const response = await axios
    .get(urlSearch, {
      params: {
        api_key: THEMOVIEDB_KEY,
        language: 'en-US',
        ...parameters,
      },
      cancelToken: source.token,
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      alert(error);
    });
  return response;
};

const fetchGenresNames = async () => {
  const urlSearch = '/genre/movie/list';
  const params = {};
  const response = await fetchTheMovieDB(urlSearch, params);
  return response.data.genres;
};

export const fetchTheMovieDBList = async (pageNr, searchQuery) => {
  if (pageNr !== dataMovies.page) {
    source.cancel();
  }
  if (isNaN(pageNr)) {
    return alert('fetchTheMovieDBTrending(page) -> page must be number');
  }
  let urlSearch = '';
  let params = {};
  if (!searchQuery) {
    urlSearch = '/trending/movie/day';
    params = {
      page: pageNr,
    };
  } else {
    urlSearch = '/search/movie';
    params = {
      query: searchQuery,
      page: pageNr,
      include_adult: 'false',
    };
  }
  const response = await fetchTheMovieDB(urlSearch, params);
  const page = response.data.page;
  let total_pages = response.data.total_pages;
  let total_results = response.data.total_results;
  if (total_pages > 500) {
    total_pages = 500;
    total_results = 500 * 20;
  }
  const genres = await fetchGenresNames();
  let movies = {
    page,
    total_pages,
    total_results,
    data: [],
  };
  response.data.results.forEach(result => {
    movies.data.push({
      id: result.id,
      poster_path: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      genre_ids: result.genre_ids,
      genres: [],
      release_year: `${new Date(result.release_date).getFullYear()}`,
      vote_average: result.vote_average,
      title: result.title,
    });
  });
  movies.data.forEach(movie =>
    movie.genre_ids.forEach(id => {
      const newGenre = genres.filter(genre => genre.id === id);
      movie.genres.push(newGenre[0].name);
    })
  );
  return movies;
};

export const fetchTheMovieDBMovie = async idMovie => {
  const urlSearch = `/movie/${idMovie}`;
  const params = {};
  const response = await fetchTheMovieDB(urlSearch, params);
  const {
    id,
    title,
    original_title,
    poster_path,
    vote_average,
    vote_count,
    popularity,
    genres,
    overview,
  } = response.data;
  const movie = {
    id,
    title,
    original_title,
    poster_path: `https://image.tmdb.org/t/p/w500${poster_path}`,
    vote_average,
    vote_count,
    popularity,
    genres,
    overview,
  };
  let genresName = [];
  movie.genres.forEach(genre => genresName.push(genre.name));
  movie.genres = genresName;
  return movie;
};

export const fetchTheMovieDBMovieIdList = async (
  idMovies,
  page,
  total_pages,
  total_results
) => {
  const movies = {
    page,
    total_pages,
    total_results,
    data: [],
  };
  const params = {};
  for (let i = 0; i < idMovies.length; i++) {
    const urlSearch = `/movie/${idMovies[i]}`;
    const response = await fetchTheMovieDB(urlSearch, params);
    const { id, title, poster_path, vote_average, genres, release_date } =
      response.data;
    const movie = {
      id,
      title,
      poster_path: `https://image.tmdb.org/t/p/w500${poster_path}`,
      vote_average,
      genres: genres.map(genre => genre.name),
      release_year: `${new Date(release_date).getFullYear()}`,
    };
    movies.data.push(movie);
  }
  return movies;
};
