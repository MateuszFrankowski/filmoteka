!function(){function e(e){return e&&e.__esModule?e.default:e}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=a.parcelRequired76b;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var a=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,a){o[e]=a},a.parcelRequired76b=n);var r,i=n("bpxeT"),l=n("2TvXO"),d=n("jcFG7"),s=n("b7ONl"),u=n("6yrqd"),p=n("gvgly"),f=n("8S4BJ"),c=(f=n("8S4BJ"),r=e(i)(e(l).mark((function a(){var t;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u.dataMovies.fetchType="home",u.dataMovies.page=1,u.dataMovies.query=null,(0,p.addLoaderSpinner)(),e.next=6,(0,s.fetchTheMovieDBList)(u.dataMovies.page,u.dataMovies.query);case 6:t=e.sent,u.dataMovies.page=1,console.log(t.page),u.dataMovies.totalPages=t.total_pages,t.total_pages>0&&(0,d.pagination)(),(0,f.createMovies)(t),(0,f.clickGallery)(),(0,d.loadPage)();case 14:case"end":return e.stop()}}),a)}))),function(){return r.apply(this,arguments)});c()}();
//# sourceMappingURL=index.ccf02534.js.map
