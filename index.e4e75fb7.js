var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},o={},t=e.parcelRequired76b;null==t&&((t=function(e){if(e in a)return a[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return a[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,a){o[e]=a},e.parcelRequired76b=t);var i=t("2nhTy"),r=t("7rYDH"),n=t("x2zem"),d=t("cpBoX"),l=t("aFV0K");(async()=>{n.dataMovies.fetchType="home",n.dataMovies.page=1,n.dataMovies.query=null,d.loaderSpinner.classList.add("loader");const e=await(0,r.fetchTheMovieDBList)(n.dataMovies.page,n.dataMovies.query);n.dataMovies.page=e.page,n.dataMovies.totalPages=e.total_pages,e.total_pages>0&&(0,i.pagination)(),d.loaderSpinner.classList.remove("loader"),(0,l.createMovies)(e),(0,i.loadPage)()})();
//# sourceMappingURL=index.e4e75fb7.js.map
