import { dataMovies } from "./global";
import { loadPage } from "./loadPage";

export const newURLSearchParams = async (pushReplace = "push") => {
    let urlAdress = await new URL(window.location);
    const oldUrlAdress = urlAdress.toString()
    let searchParams = await new URLSearchParams(urlAdress.search);
    const { page, query, fetchType } = dataMovies;
    for (const key of searchParams.keys()) {
        searchParams.delete(key);
    }
    switch (fetchType) {
        case "home":
            if (!!query) { await searchParams.set("query", query); };
            await searchParams.set("page", page);
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
    urlAdress.search = await searchParams;
    console.log("history state", window.history)
    if (urlAdress.toString() === window.location.toString()) { return };
    if (pushReplace = "push") {
        window.history.pushState({ "html": urlAdress.toString(), "pageTitle": document.title }, "", urlAdress);
    }
    if (pushReplace = "replace") {
        console.log("replace")
        window.history.replaceState({ "html": urlAdress.toString(), "pageTitle": document.title }, "", urlAdress);
    }
}

export const checkStartUrl = async () => {
    console.log("check search:", window.location.search.toString())
    if (!!window.location.search.toString()) {
        console.log("dataMovies from url")
        changeDataMoviesFromUrl();
    } else {
        console.log("add dataMovies")
        dataMovies.page = 1;
        dataMovies.query = null;
        await newURLSearchParams("replace");
    }
}

export const changeDataMoviesFromUrl = async () => {
    let urlAdress = await new URL(window.location);
    let searchParams = await new URLSearchParams(urlAdress.search);
    const page = searchParams.get("page");
    const query = searchParams.get("query");
    dataMovies.page = page;
    dataMovies.query = query;
}

export const changeUrlWithBrowser = () => {
  window.addEventListener('popstate', e => backNextUrl(e))
}

const backNextUrl = async e => {
    console.log("url:", window.location.toString())
    console.log("history", window.history)
    await checkStartUrl();
    console.log("url2:", window.location.toString())
    await changeDataMoviesFromUrl();
    // e.defaultPrevented = true;
    await loadPage();
}

