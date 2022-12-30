import { pagination, loadPage } from "./pagination";
import { fetchTheMovieDBList } from './api'

export const dataMovies = {
    page: 1,
    totalPages: 1,
    query: "",
};

const startPage = async () => {
    // yours listeners no using start movies variable in function

    // 
    const movies = await fetchTheMovieDBList(1);
    dataMovies.page = movies.page;
    dataMovies.totalPages = movies.total_pages;
    pagination({
        pageNr: dataMovies.page,
        lastPage: dataMovies.totalPages,
    });
    // function to creating gallery
    createMovies(movies);
    //
    loadPage({
        fetchType: "home",
        query: dataMovies.query,
    });
    // yours listeners using start movies variable in function

    //
};
import { createMovies } from './gallery'
startPage();

