import { dataMovies } from "./global";
import { loadPage } from "./loadPage";

export const newURLSearchParams = (pushReplace = "push") => {
    let urlAdress = new URL(window.location);
    const oldUrlAdress = urlAdress.toString()
    let searchParams = new URLSearchParams(urlAdress.search);
    const { page, query, fetchType } = dataMovies;
    for (const key of searchParams.keys()) {
        searchParams.delete(key);
    }
    switch (fetchType) {
        case "home":
            if (!!query) { searchParams.set("query", query); };
            searchParams.set("page", page);
            break;
        case "watched":
        case "queue":
            searchParams.set("page", page);
            // add searchParams.set("movies", dataMovies.moviesPerPage);
            searchParams.set("type", fetchType);
            break;
        default:
            return;
            break;
    }
    searchParams.sort();
    urlAdress.search = searchParams;
    if (urlAdress.toString() === window.location.toString()) { return };
    if (pushReplace === "push") {
        window.history.pushState({ "html": urlAdress.toString(), "pageTitle": document.title }, "", urlAdress);
    }
    if (pushReplace === "replace") {
        window.history.replaceState({ "html": urlAdress.toString(), "pageTitle": document.title }, "", urlAdress);
    }
}

export const checkStartUrl = async () => {
    if (!!window.location.search.toString()) {
        changeDataMoviesFromUrl();
    } else {
        dataMovies.page = 1;
        dataMovies.query = null;
        newURLSearchParams("replace");
    }
}

export const changeDataMoviesFromUrl = () => {
    let urlAdress =  new URL(window.location);
    let searchParams =  new URLSearchParams(urlAdress.search);
    const page = searchParams.get("page");
    const query = searchParams.get("query");
    dataMovies.page = page;
    dataMovies.query = query;
}

export const changeUrlWithBrowser = () => {
  window.addEventListener('popstate', e => backNextUrl(e))
}

const backNextUrl = async e => {
    checkStartUrl();
    changeDataMoviesFromUrl();
    // e.defaultPrevented = true;
    await loadPage();
}

