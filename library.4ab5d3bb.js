!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},a=e.parcelRequired76b;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in o){var a=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired76b=a);var n=a("6yrqd"),i=a("jcFG7"),c=document.querySelector("button.watched"),s=document.querySelector("button.queue");c.addEventListener("click",(function(e){e.target.classList.contains("active-button")||(c.classList.toggle("active-button"),s.classList.toggle("active-button"),n.dataMovies.page=1,n.dataMovies.fetchType="watched",(0,i.loadPage)())})),s.addEventListener("click",(function(e){e.target.classList.contains("active-button")||(c.classList.toggle("active-button"),s.classList.toggle("active-button"),n.dataMovies.page=1,n.dataMovies.fetchType="queue",(0,i.loadPage)())}))}();
//# sourceMappingURL=library.4ab5d3bb.js.map