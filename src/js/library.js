import { pagination, loadPage } from "./pagination";
import { fetchTheMovieDBList } from './api'
import { dataMovies } from "./global";

const startPage = async () => {
    dataMovies.fetchType = "watched";
    dataMovies.page = 1;
    // yours listeners no using start movies variable in function

    // 
    const movies = await fetchTheMovieDBList(1)
    dataMovies.page = movies.page;
    dataMovies.totalPages = movies.total_pages;
    pagination();
    // function to creating gallery

    //
    loadPage();
    // yours listeners using start movies variable in function

    //
};

startPage();

