import { pagination, loadPage } from "./pagination";
import { fetchTheMovieDBList } from './api'
import { dataMovies } from "./global";
import { loaderSpinner } from './loaderSpinner';
import { createMovies } from './gallery'

const startPage = async () => {
    dataMovies.fetchType = "watched";
    dataMovies.page = 1;
    dataMovies.query = null;
    loaderSpinner.classList.add('loader');
    // yours listeners no using start movies variable in function

    // 
    const movies = await fetchTheMovieDBList(dataMovies.page)
    dataMovies.page = movies.page;
    dataMovies.totalPages = movies.total_pages;
    pagination();
  loaderSpinner.classList.remove('loader');
    // function to creating gallery
    createMovies(movies)
    //
    loadPage();
    // yours listeners using start movies variable in function

    //
};

startPage();

