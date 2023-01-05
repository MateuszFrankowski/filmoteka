import { dataMovies } from "./global";

export const newURLSearchParams = async () => {
    let urlAdress = await new URL(window.location);
    let searchParams = await new URLSearchParams(urlAdress.search);
    const { page, query, fetchType } = dataMovies;
    console.log(page, fetchType)
    for (const key of searchParams.keys()) {
        searchParams.delete(key)
    }
    console.log("delete:",!!urlAdress.search.toString())
    switch (fetchType) {
        case "home":
            searchParams.set("page", page);
            if (!!query) { searchParams.set("query", query); };
            break;
        case "watched":
        case "queue":
            searchParams.set("page", page);
            // add searchParams.set("movies_per_page", dataMovies.moviesPerPage);
            searchParams.set("type", fetchType);
            break;
        default:
            return;
            break;
    }
    console.log("new:", searchParams.toString());
    urlAdress.search = await searchParams;
    if (urlAdress.href === window.location.href) { return };
    window.location = await urlAdress.href;
}