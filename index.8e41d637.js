var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},t={},o=e.parcelRequired76b;null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return a[e]=i,o.call(i.exports,i,i.exports),i.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,a){t[e]=a},e.parcelRequired76b=o);var i=o("2nhTy"),n=o("7rYDH"),s=o("x2zem");const l=async()=>{const e=document.getElementsByClassName("gallery");console.log(e[0]);const a=await(0,n.fetchTheMovieDBList)(1,"avatar");console.log(a);const t=a.data.map((e=>e));console.log(t),t.forEach((a=>{const t=`\n          <li>\n              <figure class="card">\n                  <div class="thumb" data-id="${a.id}">\n                  <img class="img" src="https://www.themoviedb.org/t/p/w500${a.poster_path}" />\n                  </div>\n                  <figcaption>\n                  <h3 class="title">${a.title}</h3>\n                  <div class="details-wrapper">\n                      <p class="details" data-film_id="${a.id}">\n                  </div>\n                  </figcaption>\n              </figure>\n              </li>\n          `;e[0].insertAdjacentHTML("beforeend",t)}))};(async()=>{s.dataMovies.fetchType="home",s.dataMovies.page=1,s.dataMovies.query=null;const e=await(0,n.fetchTheMovieDBList)(s.dataMovies.page,s.dataMovies.query);s.dataMovies.page=e.page,s.dataMovies.totalPages=e.total_pages,e.total_pages>0&&(0,i.pagination)(),l(),(0,i.loadPage)()})();
//# sourceMappingURL=index.8e41d637.js.map