!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=t.parcelRequired76b;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequired76b=o);var r,i=o("bpxeT"),s=o("2TvXO"),c=o("jcFG7"),l=o("b7ONl"),d=o("6yrqd"),u=(r=e(i)(e(s).mark((function t(){var n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d.dataMovies.fetchType="home",d.dataMovies.page=1,d.dataMovies.query=null,e.next=5,(0,l.fetchTheMovieDBList)(d.dataMovies.page,d.dataMovies.query);case 5:n=e.sent,d.dataMovies.page=n.page,d.dataMovies.totalPages=n.total_pages,n.total_pages>0&&(0,c.pagination)(),p(),(0,c.loadPage)();case 11:case"end":return e.stop()}}),t)}))),function(){return r.apply(this,arguments)}),p=function(){var t=e(i)(e(s).mark((function t(){var n,a,o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=document.getElementsByClassName("gallery"),console.log(n[0]),e.next=4,(0,l.fetchTheMovieDBList)(1,"avatar");case 4:a=e.sent,console.log(a),o=a.data.map((function(e){return e})),console.log(o),o.forEach((function(e){var t='\n          <li>\n              <figure class="card">\n                  <div class="thumb" data-id="'.concat(e.id,'">\n                  <img class="img" src="https://www.themoviedb.org/t/p/w500').concat(e.poster_path,'" />\n                  </div>\n                  <figcaption>\n                  <h3 class="title">').concat(e.title,'</h3>\n                  <div class="details-wrapper">\n                      <p class="details" data-film_id="').concat(e.id,'">\n                  </div>\n                  </figcaption>\n              </figure>\n              </li>\n          ');n[0].insertAdjacentHTML("beforeend",t)}));case 9:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();u()}();
//# sourceMappingURL=index.cc805d8d.js.map