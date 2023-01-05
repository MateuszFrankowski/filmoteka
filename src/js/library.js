import { pagination, loadPage } from "./pagination";
import { fetchTheMovieDBList } from './api'
import { dataMovies } from "./global";
import { addLoaderSpinner } from './loaderSpinner';
import { createMovies } from './gallery'

const startPage = async () => {
    dataMovies.fetchType = "watched";
    dataMovies.page = 1;
    dataMovies.query = null;
   // loaderSpinner.classList.add('loader');
  addLoaderSpinner();
    // yours listeners no using start movies variable in function

    // 
    const movies = await fetchTheMovieDBList(dataMovies.page)
    dataMovies.page = movies.page;
    dataMovies.totalPages = movies.total_pages;
    pagination();
  //  loaderSpinner.classList.remove('loader');
  addLoaderSpinner();
    // function to creating gallery
    createMovies(movies)
    //
    loadPage();
    // yours listeners using start movies variable in function

    //
};

startPage();

