!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=n.parcelRequired76b;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){a[e]=n},n.parcelRequired76b=r);var i=r("bpxeT"),o=r("2TvXO"),c=r("6yrqd"),d=r("jcFG7"),l=r("b7ONl"),s=document.querySelector("ul.gallery"),u=document.querySelector("input.home-header__searchbar");c.dataMovies.page=1,c.dataMovies.fetchType="home",c.dataMovies.query=u.value,(0,d.loadPage)();var f,p=(f=e(i)(e(o).mark((function n(){var t,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.fetchTheMovieDBList)(c.dataMovies.page,u.value);case 2:t=e.sent,a=t.data.map((function(e){return'<li>\n            <figure class="card">\n                <div class="thumb" data-id="'.concat(e.id,'">\n                    <img class="img" src="').concat(e.poster_path,'">\n                </div>\n                <figcaption>\n                    <h3 class="title">').concat(e.title,'</h3>\n                    <div class="details-wrapper">\n                        <p class="details" data-film_id="').concat(e.id,'">').concat(e.genres).concat(e.vote_average,"</p>\n                    </div>\n                </figcaption>\n            </figure>\n        </li>")})),s.innerHTML=a.join("");case 5:case"end":return e.stop()}}),n)}))),function(){return f.apply(this,arguments)});u.addEventListener("input",(function(){p()}))}();
//# sourceMappingURL=index.b6ca7673.js.map
