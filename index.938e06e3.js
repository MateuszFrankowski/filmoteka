var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequired76b;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,i.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired76b=i);var r=i("x2zem"),o=i("2nhTy"),a=i("fXyif"),u=i("cpBoX"),f=i("aFV0K"),c={},s=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,p=/^0o[0-7]+$/i,v=parseInt,g="object"==typeof e&&e&&e.Object===Object&&e,y="object"==typeof self&&self&&self.Object===Object&&self,m=g||y||Function("return this")(),b=Object.prototype.toString,h=Math.max,T=Math.min,j=function(){return m.Date.now()};function w(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function x(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==b.call(e)}(e))return NaN;if(w(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=w(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(s,"");var n=d.test(e);return n||p.test(e)?v(e.slice(2),n?2:8):l.test(e)?NaN:+e}c=function(e,t,n){var i,r,o,a,u,f,c=0,s=!1,l=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=i,o=r;return i=r=void 0,c=t,a=e.apply(o,n)}function v(e){return c=e,u=setTimeout(y,t),s?p(e):a}function g(e){var n=e-f;return void 0===f||n>=t||n<0||l&&e-c>=o}function y(){var e=j();if(g(e))return m(e);u=setTimeout(y,function(e){var n=t-(e-f);return l?T(n,o-(e-c)):n}(e))}function m(e){return u=void 0,d&&i?p(e):(i=r=void 0,a)}function b(){var e=j(),n=g(e);if(i=arguments,r=this,f=e,n){if(void 0===u)return v(f);if(l)return u=setTimeout(y,t),p(f)}return void 0===u&&(u=setTimeout(y,t)),a}return t=x(t)||0,w(n)&&(s=!!n.leading,o=(l="maxWait"in n)?h(x(n.maxWait)||0,t):o,d="trailing"in n?!!n.trailing:d),b.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=f=r=u=void 0},b.flush=function(){return void 0===u?a:m(j())},b};const $=document.querySelector("ul.gallery"),M=document.querySelector("input.home-header__searchbar");M.addEventListener("input",c((()=>{(async()=>{(0,u.addLoaderSpinner)(),r.dataMovies.page=1,r.dataMovies.fetchType="home",r.dataMovies.query=M.value;const e=await(0,a.fetchTheMovieDBList)(r.dataMovies.page,M.value);r.dataMovies.totalPages=e.total_pages;const t=e.data.map((e=>`<li data-film_id="${e.id}">\n            <figure class="card">\n                <div class="thumb" data-id="${e.id}">\n                    <img class="img" src="${e.poster_path}">\n                </div>\n                <figcaption>\n                    <h3 class="title">${e.title}</h3>\n                    <div class="details-wrapper">\n                        <p>${e.genres.join(", ")}</p>\n                        <p>${e.release_year}</p>\n                        <div class="rating rating--visible">${(0,f.roundTo1Comma)(e.vote_average)}</div>\n                    </div>\n                </figcaption>\n            </figure>\n        </li>`));(0,o.pagination)(),$.classList.add("grid"),$.innerHTML=t.join("")})()}),500,{leading:!1,trailing:!0}));
//# sourceMappingURL=index.938e06e3.js.map
