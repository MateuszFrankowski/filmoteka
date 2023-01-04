!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired76b;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired76b=i),i.register("bpxeT",(function(e,t){"use strict";function n(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(i,a){var o=e.apply(t,r);function s(e){n(o,i,a,s,u,"next",e)}function u(e){n(o,i,a,s,u,"throw",e)}s(void 0)}))}}})),i.register("2TvXO",(function(e,t){var n=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var i=t&&t.prototype instanceof y?t:y,a=Object.create(i.prototype),o=new C(r||[]);return a._invoke=function(e,t,n){var r=h;return function(i,a){if(r===d)throw new Error("Generator is already running");if(r===v){if("throw"===i)throw a;return N()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=I(o,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var u=l(e,t,n);if("normal"===u.type){if(r=n.done?v:f,u.arg===p)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=v,n.method="throw",n.arg=u.arg)}}}(e,n,o),a}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var h="suspendedStart",f="suspendedYield",d="executing",v="completed",p={};function y(){}function m(){}function g(){}var k={};u(k,a,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(A([])));b&&b!==n&&r.call(b,a)&&(k=b);var x=g.prototype=y.prototype=Object.create(k);function T(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function n(i,a,o,s){var u=l(e[i],e,a);if("throw"!==u.type){var c=u.arg,h=c.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,o,s)}),(function(e){n("throw",e,o,s)})):t.resolve(h).then((function(e){c.value=e,o(c)}),(function(e){return n("throw",e,o,s)}))}s(u.arg)}var i;this._invoke=function(e,r){function a(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(a,a):a()}}function I(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,I(e,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,p;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,p):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function A(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:N}}function N(){return{value:t,done:!0}}return m.prototype=g,u(x,"constructor",g),u(g,"constructor",m),m.displayName=u(g,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,s,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},T(E.prototype),u(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var o=new E(c(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},T(x),u(x,s,"Generator"),u(x,a,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=A,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var u=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;S(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:A(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),p}},e}(e.exports);try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}})),i.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),i.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return o.apply(null,arguments)};var n,r=(n=i("gD1JV"))&&n.__esModule?n:{default:n};function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,n){return(o=a()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return n&&r.default(a,n.prototype),a}).apply(null,arguments)}})),i.register("gD1JV",(function(e,t){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n(e,t)}})),i.register("a2hTj",(function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t&&n(e.prototype,t);r&&n(e,r);return e}})),i.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=i("fVNic"))&&n.__esModule?n:{default:n}})),i.register("fVNic",(function(e,t){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n(e)}})),i.register("eYQtU",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r.default(e,t)};var n,r=(n=i("gD1JV"))&&n.__esModule?n:{default:n}})),i.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==r.default(t)&&"function"!=typeof t?n.default(e):t};var n=a(i("ds8z5")),r=a(i("l5bVx"));function a(e){return e&&e.__esModule?e:{default:e}}})),i.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),i.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),i.register("1t1Wn",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n.default(e)||r.default(e,t)||o.default(e,t)||a.default()};var n=s(i("8slrw")),r=s(i("7AJDX")),a=s(i("ifqQW")),o=s(i("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),i.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),i.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),i.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),i.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=i("8NIkP"))&&n.__esModule?n:{default:n}})),i.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),i.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n.default(e)||r.default(e)||o.default(e)||a.default()};var n=s(i("kMC0W")),r=s(i("7AJDX")),a=s(i("8CtQK")),o=s(i("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),i.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=i("8NIkP"))&&n.__esModule?n:{default:n}})),i.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),i.register("2MbLg",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){var t=n.default();return function(){var n,i=r.default(e);if(t){var o=r.default(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return a.default(this,n)}};var n=o(i("aTHs7")),r=o(i("fVNic")),a=o(i("jmhxu"));function o(e){return e&&e.__esModule?e:{default:e}}})),i.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),i.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),i.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),i.register("dDDEV",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r.default(e,t,n[t])}))}return e};var n,r=(n=i("hKHmD"))&&n.__esModule?n:{default:n}}));var a=i("bpxeT"),o=i("2TvXO"),s=(a=i("bpxeT"),i("8MBJY")),u=i("ge8co"),c=i("a2hTj"),l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e,t,n){return d(e,t,n)};var h,f=(h=i("2mz0K"))&&h.__esModule?h:{default:h};function d(e,t,n){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=f.default(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n||e):i.value}})(e,t,n)}var v=i("fVNic"),p=i("eYQtU"),y=i("jmhxu"),m=i("1t1Wn"),g=i("8nrFW"),k=i("l5bVx"),w=i("2MbLg"),b=(o=i("2TvXO"),a=i("bpxeT"),s=i("8MBJY"),c=i("a2hTj"),i("hKHmD")),x=(g=i("8nrFW"),o=i("2TvXO"),a=i("bpxeT"),s=i("8MBJY"),c=i("a2hTj"),m=i("1t1Wn"),g=i("8nrFW"),o=i("2TvXO"),i("ds8z5")),T=(s=i("8MBJY"),c=i("a2hTj"),p=i("eYQtU"),m=i("1t1Wn"),g=i("8nrFW"),{});Object.defineProperty(T,"__esModule",{value:!0}),T.default=function(e){return A(e)};var E=C(i("ge8co")),I=C(i("cZGw3")),_=C(i("fVNic")),S=C(i("gD1JV"));function C(e){return e&&e.__esModule?e:{default:e}}function A(e){var t="function"==typeof Map?new Map:void 0;return A=function(e){if(null===e||!I.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return E.default(e,arguments,_.default(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),S.default(n,e)},A(e)}w=i("2MbLg");var N,O,D,R=N={};function L(){throw new Error("setTimeout has not been defined")}function P(){throw new Error("clearTimeout has not been defined")}function M(e){if(O===setTimeout)return setTimeout(e,0);if((O===L||!O)&&setTimeout)return O=setTimeout,setTimeout(e,0);try{return O(e,0)}catch(t){try{return O.call(null,e,0)}catch(t){return O.call(this,e,0)}}}!function(){try{O="function"==typeof setTimeout?setTimeout:L}catch(e){O=L}try{D="function"==typeof clearTimeout?clearTimeout:P}catch(e){D=P}}();var F,U=[],V=!1,j=-1;function B(){V&&F&&(V=!1,F.length?U=F.concat(U):j=-1,U.length&&q())}function q(){if(!V){var e=M(B);V=!0;for(var t=U.length;t;){for(F=U,U=[];++j<t;)F&&F[j].run();j=-1,t=U.length}F=null,V=!1,function(e){if(D===clearTimeout)return clearTimeout(e);if((D===P||!D)&&clearTimeout)return D=clearTimeout,clearTimeout(e);try{D(e)}catch(t){try{return D.call(null,e)}catch(t){return D.call(this,e)}}}(e)}}function K(e,t){this.fun=e,this.array=t}function H(){}R.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];U.push(new K(e,t)),1!==U.length||V||M(q)},K.prototype.run=function(){this.fun.apply(null,this.array)},R.title="browser",R.browser=!0,R.env={},R.argv=[],R.version="",R.versions={},R.on=H,R.addListener=H,R.once=H,R.off=H,R.removeListener=H,R.removeAllListeners=H,R.emit=H,R.prependListener=H,R.prependOnceListener=H,R.listeners=function(e){return[]},R.binding=function(e){throw new Error("process.binding is not supported")},R.cwd=function(){return"/"},R.chdir=function(e){throw new Error("process.chdir is not supported")},R.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var W=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},z={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,h=(3&a)<<4|s>>4,f=(15&s)<<2|c>>6,d=63&c;u||(d=64,o||(f=64)),r.push(n[l],n[h],n[f],n[d])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(W(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var a=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw Error();var c=a<<2|o>>4;if(r.push(c),64!==s){var l=o<<4&240|s>>2;if(r.push(l),64!==u){var h=s<<6&192|u;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},G=function(e){return function(e){var t=W(e);return z.encodeByteArray(t,!0)}(e).replace(/\./g,"")},Q=function(e){try{return z.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function X(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function J(){try{return"object"==typeof indexedDB}catch(e){return!1}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Y=function(){return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},$=function(){try{return Y()||function(){if(void 0!==N&&void 0!==N.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&Q(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},Z=function(e){var t,n;return null===(n=null===(t=$())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},ee=function(e){var t=Z(e);if(t){var n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error("Invalid host ".concat(t," with no separate hostname and port!"));var r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]}},te=function(){var e;return null===(e=$())||void 0===e?void 0:e.config},ne=function(e){var t;return null===(t=$())||void 0===t?void 0:t["_".concat(e)]},re=function(){"use strict";function t(){var n=this;e(s)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))}return e(c)(t,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ie(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var a=Object.assign({iss:"https://securetoken.google.com/".concat(n),aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[G(JSON.stringify({alg:"none",type:"JWT"})),G(JSON.stringify(a)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(t,i,a){var o;return e(s)(this,r),(o=n.call(this,i)).code=t,o.customData=a,o.name="FirebaseError",Object.setPrototypeOf(e(x)(o),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(e(x)(o),oe.prototype.create),o}return r}(e(T)(Error)),oe=function(){"use strict";function t(n,r,i){e(s)(this,t),this.service=n,this.serviceName=r,this.errors=i}return e(c)(t,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?se(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new ae(a,u,i);return c}}]),t}();function se(e,t){return e.replace(ue,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var ue=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function le(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],h=t[c];if(he(l)&&he(h)){if(!le(l,h))return!1}else if(l!==h)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var f=!0,d=!1,v=void 0;try{for(var p,y=r[Symbol.iterator]();!(f=(p=y.next()).done);f=!0){var m=p.value;if(!n.includes(m))return!1}}catch(e){d=!0,v=e}finally{try{f||null==y.return||y.return()}finally{if(d)throw v}}return!0}function he(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fe(t){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=function(t,r){var i=e(m)(r.value,2),a=i[0],o=i[1];Array.isArray(o)?o.forEach((function(e){n.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):n.push(encodeURIComponent(a)+"="+encodeURIComponent(o))},u=Object.entries(t)[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return n.length?"&"+n.join("&"):""}function de(t){var n={};return t.replace(/^\?/,"").split("&").forEach((function(t){if(t){var r=e(m)(t.split("="),2),i=r[0],a=r[1];n[decodeURIComponent(i)]=decodeURIComponent(a)}})),n}function ve(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe=function(){"use strict";function t(n,r){var i=this;e(s)(this,t),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){n(i)})).catch((function(e){i.error(e)}))}return e(c)(t,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=ye),void 0===r.error&&(r.error=ye),void 0===r.complete&&(r.complete=ye);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),t}();function ye(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function me(e){return e&&e._delegate?e._delegate:e}var ge=function(){"use strict";function t(n,r,i){e(s)(this,t),this.name=n,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e(c)(t,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),t}(),ke="[DEFAULT]",we=function(){"use strict";function t(n,r){e(s)(this,t),this.name=n,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e(c)(t,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new re;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:ke})}catch(e){}var n=!0,r=!1,i=void 0;try{for(var a,o=this.instancesDeferred.entries()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=e(m)(a.value,2),u=s[0],c=s[1],l=this.normalizeInstanceIdentifier(u);try{var h=this.getOrInitializeService({instanceIdentifier:l});c.resolve(h)}catch(e){}}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Array.from(t.instances.values()),n.next=3,Promise.all(e(g)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(e(g)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return n.stop()}}),n)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.options,r=void 0===n?{}:n,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:r}),o=!0,s=!1,u=void 0;try{for(var c,l=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var h=e(m)(c.value,2),f=h[0],d=h[1],v=this.normalizeInstanceIdentifier(f);i===v&&d.resolve(a)}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return a}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var a=this.instances.get(r);return a&&e(a,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,a=this.instances.get(n);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===ke?void 0:t),options:i}),this.instances.set(n,a),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(a,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke;return this.component?this.component.multipleInstances?e:ke:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be,xe,Te=function(){"use strict";function t(n){e(s)(this,t),this.name=n,this.providers=new Map}return e(c)(t,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new we(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),t}(),Ee=(s=i("8MBJY"),c=i("a2hTj"),b=i("hKHmD"),g=i("8nrFW"),[]);(xe=be||(be={}))[xe.DEBUG=0]="DEBUG",xe[xe.VERBOSE=1]="VERBOSE",xe[xe.INFO=2]="INFO",xe[xe.WARN=3]="WARN",xe[xe.ERROR=4]="ERROR",xe[xe.SILENT=5]="SILENT";var Ie,_e={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},Se=be.INFO,Ce=(Ie={},e(b)(Ie,be.DEBUG,"log"),e(b)(Ie,be.VERBOSE,"log"),e(b)(Ie,be.INFO,"info"),e(b)(Ie,be.WARN,"warn"),e(b)(Ie,be.ERROR,"error"),Ie),Ae=function(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];var o;if(!(n<t.logLevel)){var s=(new Date).toISOString(),u=Ce[n];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(n,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(t.name,":")].concat(e(g)(i)))}},Ne=function(){"use strict";function t(n){e(s)(this,t),this.name=n,this._logLevel=Se,this._logHandler=Ae,this._userLogHandler=null,Ee.push(this)}return e(c)(t,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in be))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?_e[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,be.DEBUG].concat(e(g)(n))),this._logHandler.apply(this,[this,be.DEBUG].concat(e(g)(n)))}},{key:"log",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,be.VERBOSE].concat(e(g)(n))),this._logHandler.apply(this,[this,be.VERBOSE].concat(e(g)(n)))}},{key:"info",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,be.INFO].concat(e(g)(n))),this._logHandler.apply(this,[this,be.INFO].concat(e(g)(n)))}},{key:"warn",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,be.WARN].concat(e(g)(n))),this._logHandler.apply(this,[this,be.WARN].concat(e(g)(n)))}},{key:"error",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,be.ERROR].concat(e(g)(n))),this._logHandler.apply(this,[this,be.ERROR].concat(e(g)(n)))}}]),t}();a=i("bpxeT");var Oe,De,Re=i("dDDEV");g=i("8nrFW"),o=i("2TvXO"),g=i("8nrFW");var Le=new WeakMap,Pe=new WeakMap,Me=new WeakMap,Fe=new WeakMap,Ue=new WeakMap;var Ve={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Pe.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Me.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qe(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function je(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(De||(De=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.apply(Ke(this),n),qe(Le.get(this))}:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return qe(t.apply(Ke(this),n))}:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var o,s=(o=t).call.apply(o,[Ke(this),n].concat(e(g)(i)));return Me.set(s,n.sort?n.sort():[n]),qe(s)}}function Be(e){return"function"==typeof e?je(e):(e instanceof IDBTransaction&&function(e){if(!Pe.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),r()},a=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));Pe.set(e,t)}}(e),t=e,(Oe||(Oe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,Ve):e);var t}function qe(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(qe(t.result)),r()},a=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&Le.set(e,t)})).catch((function(){})),Ue.set(n,t),n;var t,n;if(Fe.has(e))return Fe.get(e);var r=Be(e);return r!==e&&(Fe.set(e,r),Ue.set(r,e)),r}var Ke=function(e){return Ue.get(e)};function He(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,a=n.blocking,o=n.terminated,s=indexedDB.open(e,t),u=qe(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(qe(s.result),e.oldVersion,e.newVersion,qe(s.transaction))})),r&&s.addEventListener("blocked",(function(){return r()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(){return a()}))})).catch((function(){})),u}var We=["get","getKey","getAll","getAllKeys","count"],ze=["put","add","delete","clear"],Ge=new Map;function Qe(t,n){if(t instanceof IDBDatabase&&!(n in t)&&"string"==typeof n){if(Ge.get(n))return Ge.get(n);var r=n.replace(/FromIndex$/,""),i=n!==r,s=ze.includes(r);if(r in(i?IDBIndex:IDBObjectStore).prototype&&(s||We.includes(r))){var u,c=(u=e(a)(e(o).mark((function t(n){var a,u,c,l,h,f,d=arguments;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(a=d.length,u=new Array(a>1?a-1:0),c=1;c<a;c++)u[c-1]=d[c];return h=this.transaction(n,s?"readwrite":"readonly"),f=h.store,i&&(f=f.index(u.shift())),t.next=7,Promise.all([(l=f)[r].apply(l,e(g)(u)),s&&h.done]);case 7:return t.abrupt("return",t.sent[0]);case 8:case"end":return t.stop()}}),t,this)}))),function(e){return u.apply(this,arguments)});return Ge.set(n,c),c}}}Ve=function(t){return e(Re)({},t,{get:function(e,n,r){return Qe(e,n)||t.get(e,n,r)},has:function(e,n){return!!Qe(e,n)||t.has(e,n)}})}(Ve);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Xe=function(){"use strict";function t(n){e(s)(this,t),this.container=n}return e(c)(t,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),t}();var Je,Ye,$e="@firebase/app",Ze="0.9.0",et=new Ne("@firebase/app"),tt="[DEFAULT]",nt=(Je={},e(b)(Je,$e,"fire-core"),e(b)(Je,"@firebase/app-compat","fire-core-compat"),e(b)(Je,"@firebase/analytics","fire-analytics"),e(b)(Je,"@firebase/analytics-compat","fire-analytics-compat"),e(b)(Je,"@firebase/app-check","fire-app-check"),e(b)(Je,"@firebase/app-check-compat","fire-app-check-compat"),e(b)(Je,"@firebase/auth","fire-auth"),e(b)(Je,"@firebase/auth-compat","fire-auth-compat"),e(b)(Je,"@firebase/database","fire-rtdb"),e(b)(Je,"@firebase/database-compat","fire-rtdb-compat"),e(b)(Je,"@firebase/functions","fire-fn"),e(b)(Je,"@firebase/functions-compat","fire-fn-compat"),e(b)(Je,"@firebase/installations","fire-iid"),e(b)(Je,"@firebase/installations-compat","fire-iid-compat"),e(b)(Je,"@firebase/messaging","fire-fcm"),e(b)(Je,"@firebase/messaging-compat","fire-fcm-compat"),e(b)(Je,"@firebase/performance","fire-perf"),e(b)(Je,"@firebase/performance-compat","fire-perf-compat"),e(b)(Je,"@firebase/remote-config","fire-rc"),e(b)(Je,"@firebase/remote-config-compat","fire-rc-compat"),e(b)(Je,"@firebase/storage","fire-gcs"),e(b)(Je,"@firebase/storage-compat","fire-gcs-compat"),e(b)(Je,"@firebase/firestore","fire-fst"),e(b)(Je,"@firebase/firestore-compat","fire-fst-compat"),e(b)(Je,"fire-js","fire-js"),e(b)(Je,"firebase","fire-js-all"),Je),rt=new Map,it=new Map;function at(e,t){try{e.container.addComponent(t)}catch(n){et.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function ot(e){var t=e.name;if(it.has(t))return et.debug("There were multiple attempts to register component ".concat(t,".")),!1;it.set(t,e);var n=!0,r=!1,i=void 0;try{for(var a,o=rt.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){at(a.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}function st(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ut=(Ye={},e(b)(Ye,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),e(b)(Ye,"bad-app-name","Illegal App name: '{$appName}"),e(b)(Ye,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),e(b)(Ye,"app-deleted","Firebase App named '{$appName}' already deleted"),e(b)(Ye,"no-options","Need to provide options, when not being deployed to hosting via source."),e(b)(Ye,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),e(b)(Ye,"invalid-log-argument","First argument to `onLog` must be null or a function."),e(b)(Ye,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),e(b)(Ye,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),e(b)(Ye,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),e(b)(Ye,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),Ye),ct=new oe("app","Firebase",ut),lt=function(){"use strict";function t(n,r,i){var a=this;e(s)(this,t),this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ge("app",(function(){return a}),"PUBLIC"))}return e(c)(t,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw ct.create("app-deleted",{appName:this._name})}}]),t}(),ht="9.15.0";function ft(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!=typeof t){var r=t;t={name:r}}var i=Object.assign({name:tt,automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!=typeof a||!a)throw ct.create("bad-app-name",{appName:String(a)});if(n||(n=te()),!n)throw ct.create("no-options");var o=rt.get(a);if(o){if(le(n,o.options)&&le(i,o.config))return o;throw ct.create("duplicate-app",{appName:a})}var s=new Te(a),u=!0,c=!1,l=void 0;try{for(var h,f=it.values()[Symbol.iterator]();!(u=(h=f.next()).done);u=!0){var d=h.value;s.addComponent(d)}}catch(e){c=!0,l=e}finally{try{u||null==f.return||f.return()}finally{if(c)throw l}}var v=new lt(n,i,s);return rt.set(a,v),v}function dt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=rt.get(e);if(!t&&e===tt)return ft();if(!t)throw ct.create("no-app",{appName:e});return t}function vt(e,t,n){var r,i=null!==(r=nt[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void et.warn(s.join(" "))}ot(new ge("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var pt="firebase-heartbeat-store",yt=null;function mt(){return yt||(yt=He("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(pt)}}).catch((function(e){throw ct.create("idb-open",{originalErrorMessage:e.message})}))),yt}function gt(e){return kt.apply(this,arguments)}function kt(){return(kt=e(a)(e(o).mark((function t(n){var r,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,mt();case 3:return r=e.sent,e.abrupt("return",r.transaction(pt).objectStore(pt).get(xt(n)));case 7:e.prev=7,e.t0=e.catch(0),e.t0 instanceof ae?et.warn(e.t0.message):(i=ct.create("idb-get",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),et.warn(i.message));case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function wt(e,t){return bt.apply(this,arguments)}function bt(){return(bt=e(a)(e(o).mark((function t(n,r){var i,a,s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,mt();case 3:return i=e.sent,a=i.transaction(pt,"readwrite"),s=a.objectStore(pt),e.next=8,s.put(r,xt(n));case 8:return e.abrupt("return",a.done);case 11:e.prev=11,e.t0=e.catch(0),e.t0 instanceof ae?et.warn(e.t0.message):(u=ct.create("idb-set",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),et.warn(u.message));case 14:case"end":return e.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}function xt(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tt=function(){"use strict";function t(n){var r=this;e(s)(this,t),this.container=n,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new St(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return e(c)(t,[{key:"triggerHeartbeat",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r,i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.container.getProvider("platform-logger").getImmediate(),i=r.getPlatformInfoString(),a=Et(),null!==t._heartbeatsCache){e.next=7;break}return e.next=6,t._heartbeatsCachePromise;case 6:t._heartbeatsCache=e.sent;case 7:if(t._heartbeatsCache.lastSentHeartbeatDate!==a&&!t._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){e.next=11;break}return e.abrupt("return");case 11:t._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return t._heartbeatsCache.heartbeats=t._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),e.abrupt("return",t._storage.overwrite(t._heartbeatsCache));case 14:case"end":return e.stop()}}),n)})))()}},{key:"getHeartbeatsHeader",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r,i,a,s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t._heartbeatsCache){e.next=3;break}return e.next=3,t._heartbeatsCachePromise;case 3:if(null!==t._heartbeatsCache&&0!==t._heartbeatsCache.heartbeats.length){e.next=5;break}return e.abrupt("return","");case 5:if(r=Et(),i=It(t._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,s=i.unsentEntries,u=G(JSON.stringify({version:2,heartbeats:a})),t._heartbeatsCache.lastSentHeartbeatDate=r,!(s.length>0)){e.next=15;break}return t._heartbeatsCache.heartbeats=s,e.next=13,t._storage.overwrite(t._heartbeatsCache);case 13:e.next=16;break;case 15:t._heartbeatsCache.heartbeats=[],t._storage.overwrite(t._heartbeatsCache);case 16:return e.abrupt("return",u);case 17:case"end":return e.stop()}}),n)})))()}}]),t}();function Et(){return(new Date).toISOString().substring(0,10)}function It(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(e,i){var a=i.value,o=n.find((function(e){return e.agent===a.agent}));if(o){if(o.dates.push(a.date),Ct(n)>t)return o.dates.pop(),"break"}else if(n.push({agent:a.agent,dates:[a.date]}),Ct(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:n,unsentEntries:r}}var _t,St=function(){"use strict";function t(n){e(s)(this,t),this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return e(c)(t,[{key:"runIndexedDBEnvironmentCheck",value:function(){return e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(J()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),t)})))()}},{key:"read",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return",{heartbeats:[]});case 7:return e.next=9,gt(t.app);case 9:return r=e.sent,e.abrupt("return",r||{heartbeats:[]});case 11:case"end":return e.stop()}}),n)})))()}},{key:"overwrite",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n._canUseIndexedDBPromise;case 3:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,n.read();case 10:return a=e.sent,e.abrupt("return",wt(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:t.heartbeats}));case 12:case"end":return e.stop()}}),r)})))()}},{key:"add",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,a;return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,n._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,n.read();case 10:return a=r.sent,r.abrupt("return",wt(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e(g)(a.heartbeats).concat(e(g)(t.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),t}();function Ct(e){return G(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_t="",ot(new ge("platform-logger",(function(e){return new Xe(e)}),"PRIVATE")),ot(new ge("heartbeat",(function(e){return new Tt(e)}),"PRIVATE")),vt($e,Ze,_t),vt($e,Ze,"esm2017"),vt("fire-js","");s=i("8MBJY"),c=i("a2hTj"),v=i("fVNic"),p=i("eYQtU"),m=i("1t1Wn"),k=i("l5bVx"),w=i("2MbLg");var At,Nt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},Ot={},Dt=Dt||{},Rt=Nt||self;function Lt(){}function Pt(t){var n=void 0===t?"undefined":e(k)(t);return"array"==(n="object"!=n?n:t?Array.isArray(t)?"array":n:"null")||"object"==n&&"number"==typeof t.length}function Mt(t){var n=void 0===t?"undefined":e(k)(t);return"object"==n&&null!=t||"function"==n}var Ft="closure_uid_"+(1e9*Math.random()>>>0),Ut=0;function Vt(e,t,n){return e.call.apply(e.bind,arguments)}function jt(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function Bt(e,t,n){return(Bt=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Vt:jt).apply(null,arguments)}function qt(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function Kt(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,r){for(var i=Array(arguments.length-2),a=2;a<arguments.length;a++)i[a-2]=arguments[a];return t.prototype[n].apply(e,i)}}function Ht(){this.s=this.s,this.o=this.o}Ht.prototype.s=!1,Ht.prototype.na=function(){var e;!this.s&&(this.s=!0,this.M(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,Ft)&&e[Ft]||(e[Ft]=++Ut))},Ht.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var Wt=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(var n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function zt(e){var t=e.length;if(0<t){for(var n=Array(t),r=0;r<t;r++)n[r]=e[r];return n}return[]}function Gt(e,t){for(var n=1;n<arguments.length;n++){var r=arguments[n];if(Pt(r)){var i=e.length||0,a=r.length||0;e.length=i+a;for(var o=0;o<a;o++)e[i+o]=r[o]}else e.push(r)}}function Qt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Qt.prototype.h=function(){this.defaultPrevented=!0};var Xt=function(){if(!Rt.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{Rt.addEventListener("test",Lt,t),Rt.removeEventListener("test",Lt,t)}catch(e){}return e}();function Jt(e){return/^[\s\xa0]*$/.test(e)}var Yt=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function $t(e,t){return e<t?-1:e>t?1:0}function Zt(){var e=Rt.navigator;return e&&(e=e.userAgent)?e:""}function en(e){return-1!=Zt().indexOf(e)}function tn(e){return tn[" "](e),e}tn[" "]=Lt;var nn,rn,an=en("Opera"),on=en("Trident")||en("MSIE"),sn=en("Edge"),un=sn||on,cn=en("Gecko")&&!(-1!=Zt().toLowerCase().indexOf("webkit")&&!en("Edge"))&&!(en("Trident")||en("MSIE"))&&!en("Edge"),ln=-1!=Zt().toLowerCase().indexOf("webkit")&&!en("Edge");function hn(){var e=Rt.document;return e?e.documentMode:void 0}e:{var fn="",dn=(rn=Zt(),cn?/rv:([^\);]+)(\)|;)/.exec(rn):sn?/Edge\/([\d\.]+)/.exec(rn):on?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(rn):ln?/WebKit\/(\S+)/.exec(rn):an?/(?:Version)[ \/]?(\S+)/.exec(rn):void 0);if(dn&&(fn=dn?dn[1]:""),on){var vn=hn();if(null!=vn&&vn>parseFloat(fn)){nn=String(vn);break e}}nn=fn}var pn,yn={};function mn(){return function(e){var t=yn;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){for(var e=0,t=Yt(String(nn)).split("."),n=Yt("9").split("."),r=Math.max(t.length,n.length),i=0;0==e&&i<r;i++){var a=t[i]||"",o=n[i]||"";do{if(a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==a[0].length&&0==o[0].length)break;e=$t(0==a[1].length?0:parseInt(a[1],10),0==o[1].length?0:parseInt(o[1],10))||$t(0==a[2].length,0==o[2].length)||$t(a[2],o[2]),a=a[3],o=o[3]}while(0==e)}return 0<=e}))}if(Rt.document&&on){var gn=hn();pn=gn||(parseInt(nn,10)||void 0)}else pn=void 0;var kn=pn;function wn(e,t){if(Qt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(cn){e:{try{tn(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:bn[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&wn.X.h.call(this)}}Kt(wn,Qt);var bn={2:"touch",3:"pen",4:"mouse"};wn.prototype.h=function(){wn.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var xn="closure_listenable_"+(1e6*Math.random()|0),Tn=0;function En(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++Tn,this.ba=this.ea=!1}function In(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function _n(e,t,n){for(var r in e)t.call(n,e[r],r,e)}function Sn(e){var t={};for(var n in e)t[n]=e[n];return t}var Cn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function An(e,t){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])e[n]=r[n];for(var a=0;a<Cn.length;a++)n=Cn[a],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Nn(e){this.src=e,this.g={},this.h=0}function On(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],a=Wt(i,t);(r=0<=a)&&Array.prototype.splice.call(i,a,1),r&&(In(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Dn(e,t,n,r){for(var i=0;i<e.length;++i){var a=e[i];if(!a.ba&&a.listener==t&&a.capture==!!n&&a.ha==r)return i}return-1}Nn.prototype.add=function(e,t,n,r,i){var a=e.toString();(e=this.g[a])||(e=this.g[a]=[],this.h++);var o=Dn(e,t,r,i);return-1<o?(t=e[o],n||(t.ea=!1)):((t=new En(t,this.src,a,!!r,i)).ea=n,e.push(t)),t};var Rn="closure_lm_"+(1e6*Math.random()|0),Ln={};function Pn(e,t,n,r,i){if(r&&r.once)return Fn(e,t,n,r,i);if(Array.isArray(t)){for(var a=0;a<t.length;a++)Pn(e,t[a],n,r,i);return null}return n=Hn(n),e&&e[xn]?e.N(t,n,Mt(r)?!!r.capture:!!r,i):Mn(e,t,n,!1,r,i)}function Mn(e,t,n,r,i,a){if(!t)throw Error("Invalid event type");var o=Mt(i)?!!i.capture:!!i,s=qn(e);if(s||(e[Rn]=s=new Nn(e)),(n=s.add(t,n,r,o,a)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}var t=Bn;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Xt||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(jn(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function Fn(e,t,n,r,i){if(Array.isArray(t)){for(var a=0;a<t.length;a++)Fn(e,t[a],n,r,i);return null}return n=Hn(n),e&&e[xn]?e.O(t,n,Mt(r)?!!r.capture:!!r,i):Mn(e,t,n,!0,r,i)}function Un(e,t,n,r,i){if(Array.isArray(t))for(var a=0;a<t.length;a++)Un(e,t[a],n,r,i);else r=Mt(r)?!!r.capture:!!r,n=Hn(n),e&&e[xn]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=Dn(a=e.g[t],n,r,i))&&(In(a[n]),Array.prototype.splice.call(a,n,1),0==a.length&&(delete e.g[t],e.h--)))):e&&(e=qn(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Dn(t,n,r,i)),(n=-1<e?t[e]:null)&&Vn(n))}function Vn(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[xn])On(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(jn(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=qn(t))?(On(n,e),0==n.h&&(n.src=null,t[Rn]=null)):In(e)}}}function jn(e){return e in Ln?Ln[e]:Ln[e]="on"+e}function Bn(e,t){if(e.ba)e=!0;else{t=new wn(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&Vn(e),e=n.call(r,t)}return e}function qn(e){return(e=e[Rn])instanceof Nn?e:null}var Kn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hn(e){return"function"==typeof e?e:(e[Kn]||(e[Kn]=function(t){return e.handleEvent(t)}),e[Kn])}function Wn(){Ht.call(this),this.i=new Nn(this),this.P=this,this.I=null}function zn(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new Qt(t,e);else if(t instanceof Qt)t.target=t.target||e;else{var i=t;An(t=new Qt(r,e),i)}if(i=!0,n)for(var a=n.length-1;0<=a;a--){var o=t.g=n[a];i=Gn(o,r,!0,t)&&i}if(i=Gn(o=t.g=e,r,!0,t)&&i,i=Gn(o,r,!1,t)&&i,n)for(a=0;a<n.length;a++)i=Gn(o=t.g=n[a],r,!1,t)&&i}function Gn(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,a=0;a<t.length;++a){var o=t[a];if(o&&!o.ba&&o.capture==n){var s=o.listener,u=o.ha||o.src;o.ea&&On(e.i,o),i=!1!==s.call(u,r)&&i}}return i&&!r.defaultPrevented}Kt(Wn,Ht),Wn.prototype[xn]=!0,Wn.prototype.removeEventListener=function(e,t,n,r){Un(this,e,t,n,r)},Wn.prototype.M=function(){if(Wn.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)In(n[r]);delete t.g[e],t.h--}}this.I=null},Wn.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Wn.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Qn=Rt.JSON.stringify;function Xn(){var e=rr,t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Jn,Yn=function(){"use strict";function t(){e(s)(this,t),this.h=this.g=null}return e(c)(t,[{key:"add",value:function(e,t){var n=$n.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}]),t}(),$n=new(function(){"use strict";function t(n,r){e(s)(this,t),this.i=n,this.j=r,this.h=0,this.g=null}return e(c)(t,[{key:"get",value:function(){var e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}]),t}())((function(){return new Zn}),(function(e){return e.reset()})),Zn=function(){"use strict";function t(){e(s)(this,t),this.next=this.g=this.h=null}return e(c)(t,[{key:"set",value:function(e,t){this.h=e,this.g=t,this.next=null}},{key:"reset",value:function(){this.next=this.g=this.h=null}}]),t}();function er(e){Rt.setTimeout((function(){throw e}),0)}function tr(e,t){Jn||function(){var e=Rt.Promise.resolve(void 0);Jn=function(){e.then(ir)}}(),nr||(Jn(),nr=!0),rr.add(e,t)}var nr=!1,rr=new Yn;function ir(){for(var e;e=Xn();){try{e.h.call(e.g)}catch(e){er(e)}var t=$n;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}nr=!1}function ar(e,t){Wn.call(this),this.h=e||1,this.g=t||Rt,this.j=Bt(this.lb,this),this.l=Date.now()}function or(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function sr(e,t,n){if("function"==typeof e)n&&(e=Bt(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=Bt(e.handleEvent,e)}return 2147483647<Number(t)?-1:Rt.setTimeout(e,t||0)}function ur(e){e.g=sr((function(){e.g=null,e.i&&(e.i=!1,ur(e))}),e.j);var t=e.h;e.h=null,e.m.apply(null,t)}Kt(ar,Wn),(At=ar.prototype).ca=!1,At.R=null,At.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),zn(this,"tick"),this.ca&&(or(this),this.start()))}},At.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},At.M=function(){ar.X.M.call(this),or(this),delete this.g};var cr=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(t,i){var a;return e(s)(this,r),(a=n.call(this)).m=t,a.j=i,a.h=null,a.i=!1,a.g=null,a}return e(c)(r,[{key:"l",value:function(e){this.h=arguments,this.g?this.i=!0:ur(this)}},{key:"M",value:function(){e(l)(e(v)(r.prototype),"M",this).call(this),this.g&&(Rt.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}]),r}(Ht);function lr(e){Ht.call(this),this.h=e,this.g={}}Kt(lr,Ht);var hr=[];function fr(e,t,n,r){Array.isArray(n)||(n&&(hr[0]=n.toString()),n=hr);for(var i=0;i<n.length;i++){var a=Pn(t,n[i],r||e.handleEvent,!1,e.h||e);if(!a)break;e.g[a.key]=a}}function dr(e){_n(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Vn(e)}),e),e.g={}}function vr(){this.g=!0}function pr(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var a=i[0];if("noop"!=a&&"stop"!=a&&"close"!=a)for(var o=1;o<i.length;o++)i[o]=""}}}return Qn(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}lr.prototype.M=function(){lr.X.M.call(this),dr(this)},lr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},vr.prototype.Aa=function(){this.g=!1},vr.prototype.info=function(){};var yr={},mr=null;function gr(){return mr=mr||new Wn}function kr(e){Qt.call(this,yr.Pa,e)}function wr(e){var t=gr();zn(t,new kr(t))}function br(e,t){Qt.call(this,yr.STAT_EVENT,e),this.stat=t}function xr(e){var t=gr();zn(t,new br(t,e))}function Tr(e,t){Qt.call(this,yr.Qa,e),this.size=t}function Er(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return Rt.setTimeout((function(){e()}),t)}yr.Pa="serverreachability",Kt(kr,Qt),yr.STAT_EVENT="statevent",Kt(br,Qt),yr.Qa="timingevent",Kt(Tr,Qt);var Ir={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},_r={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Sr(){}function Cr(e){return e.h||(e.h=e.i())}function Ar(){}Sr.prototype.h=null;var Nr,Or={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Dr(){Qt.call(this,"d")}function Rr(){Qt.call(this,"c")}function Lr(){}function Pr(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new lr(this),this.O=Fr,e=un?125:void 0,this.T=new ar(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Mr}function Mr(){this.i=null,this.g="",this.h=!1}Kt(Dr,Qt),Kt(Rr,Qt),Kt(Lr,Sr),Lr.prototype.g=function(){return new XMLHttpRequest},Lr.prototype.i=function(){return{}},Nr=new Lr;var Fr=45e3,Ur={},Vr={};function jr(e,t,n){e.K=1,e.v=ai(ei(t)),e.s=n,e.P=!0,Br(e,null)}function Br(e,t){e.F=Date.now(),Wr(e),e.A=ei(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),gi(n.i,"t",r),e.C=0,n=e.l.H,e.h=new Mr,e.g=ga(e.l,n?t:null,!e.s),0<e.N&&(e.L=new cr(Bt(e.La,e,e.g),e.N)),fr(e.S,e.g,"readystatechange",e.ib),t=e.H?Sn(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),wr(),function(e,t,n,r,i,a){e.info((function(){if(e.g)if(a)for(var o="",s=a.split("&"),u=0;u<s.length;u++){var c=s[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+c+"&":o+(l+"=redacted&")}}else o=null;else o=a;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.U,e.s)}function qr(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function Kr(e,t,n){for(var r,i=!0;!e.I&&e.C<n.length;){if((r=Hr(e,n))==Vr){4==t&&(e.o=4,xr(14),i=!1),pr(e.j,e.m,null,"[Incomplete Response]");break}if(r==Ur){e.o=4,xr(15),pr(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}pr(e.j,e.m,r,null),Jr(e,r)}qr(e)&&r!=Vr&&r!=Ur&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,xr(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),la(t),t.K=!0,xr(11))):(pr(e.j,e.m,n,"[Invalid Chunked Response]"),Xr(e),Qr(e))}function Hr(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Vr:(n=Number(t.substring(n,r)),isNaN(n)?Ur:(r+=1)+n>t.length?Vr:(t=t.substr(r,n),e.C=r+n,t))}function Wr(e){e.V=Date.now()+e.O,zr(e,e.O)}function zr(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Er(Bt(e.gb,e),t)}function Gr(e){e.B&&(Rt.clearTimeout(e.B),e.B=null)}function Qr(e){0==e.l.G||e.I||da(e.l,e)}function Xr(e){Gr(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,or(e.T),dr(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Jr(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||Ii(n.h,e)))if(!e.J&&Ii(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(a){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;fa(n),na(n)}ca(n),xr(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=Er(Bt(n.cb,n),6e3));if(1>=Ei(n.h)&&n.ja){try{n.ja()}catch(a){}n.ja=void 0}}else pa(n,11)}else if((e.J||n.g==e)&&fa(n),!Jt(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){var a=i[t];if(n.T=a[0],a=a[1],2==n.G)if("c"==a[0]){n.I=a[1],n.ka=a[2];var o=a[3];null!=o&&(n.ma=o,n.j.info("VER="+n.ma));var s=a[4];null!=s&&(n.Ca=s,n.j.info("SVER="+n.Ca));var u=a[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;var c=e.g;if(c){var l=c.g?c.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(l){var h=r.h;h.g||-1==l.indexOf("spdy")&&-1==l.indexOf("quic")&&-1==l.indexOf("h2")||(h.j=h.l,h.g=new Set,h.h&&(_i(h,h.h),h.h=null))}if(r.D){var f=c.g?c.g.getResponseHeader("X-HTTP-Session-Id"):null;f&&(r.za=f,ii(r.F,r.D,f))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms"));var d=e;if((r=n).sa=ma(r,r.H?r.ka:null,r.V),d.J){Si(r.h,d);var v=d,p=r.J;p&&v.setTimeout(p),v.B&&(Gr(v),Wr(v)),r.g=d}else ua(r);0<n.i.length&&ia(n)}else"stop"!=a[0]&&"close"!=a[0]||pa(n,7);else 3==n.G&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?pa(n,7):ta(n):"noop"!=a[0]&&n.l&&n.l.wa(a),n.A=0)}wr()}catch(a){}}function Yr(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(Pt(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(Pt(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}for(var r in t=[],n=0,e)t[n++]=r;return t}}}(e),r=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(Pt(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,a=0;a<i;a++)t.call(void 0,r[a],n&&n[a],e)}(At=Pr.prototype).setTimeout=function(e){this.O=e},At.ib=function(e){e=e.target;var t=this.L;t&&3==Xi(e)?t.l():this.La(e)},At.La=function(e){try{if(e==this.g)e:{var t=Xi(this.g),n=this.g.Ea();this.g.aa();if(!(3>t)&&(3!=t||un||this.g&&(this.h.h||this.g.fa()||Ji(this.g)))){this.I||4!=t||7==n||wr(),Gr(this);var r=this.g.aa();this.Y=r;t:if(qr(this)){var i=Ji(this.g);e="";var a=i.length,o=4==Xi(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Xr(this),Qr(this);var s="";break t}this.h.i=new Rt.TextDecoder}for(n=0;n<a;n++)this.h.h=!0,e+=this.h.i.decode(i[n],{stream:o&&n==a-1});i.splice(0,a),this.h.g+=e,this.C=0,s=this.h.g}else s=this.g.fa();if(this.i=200==r,function(e,t,n,r,i,a,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+a+" "+o}))}(this.j,this.u,this.A,this.m,this.U,t,r),this.i){if(this.Z&&!this.J){t:{if(this.g){var u,c=this.g;if((u=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Jt(u)){var l=u;break t}}l=null}if(!(r=l)){this.i=!1,this.o=3,xr(12),Xr(this),Qr(this);break e}pr(this.j,this.m,r,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Jr(this,r)}this.P?(Kr(this,t,s),un&&this.i&&3==t&&(fr(this.S,this.T,"tick",this.hb),this.T.start())):(pr(this.j,this.m,s,null),Jr(this,s)),4==t&&Xr(this),this.i&&!this.I&&(4==t?da(this.l,this):(this.i=!1,Wr(this)))}else 400==r&&0<s.indexOf("Unknown SID")?(this.o=3,xr(12)):(this.o=0,xr(13)),Xr(this),Qr(this)}}}catch(t){}},At.hb=function(){if(this.g){var e=Xi(this.g),t=this.g.fa();this.C<t.length&&(Gr(this),Kr(this,e,t),this.i&&4!=e&&Wr(this))}},At.cancel=function(){this.I=!0,Xr(this)},At.gb=function(){this.B=null;var e=Date.now();0<=e-this.V?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(wr(),xr(17)),Xr(this),this.o=2,Qr(this)):zr(this,this.V-e)};var $r=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zr(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Zr){this.h=void 0!==t?t:e.h,ti(this,e.j),this.s=e.s,this.g=e.g,ni(this,e.m),this.l=e.l,t=e.i;var n=new vi;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),ri(this,n),this.o=e.o}else e&&(n=String(e).match($r))?(this.h=!!t,ti(this,n[1]||"",!0),this.s=oi(n[2]||""),this.g=oi(n[3]||"",!0),ni(this,n[4]),this.l=oi(n[5]||"",!0),ri(this,n[6]||"",!0),this.o=oi(n[7]||"")):(this.h=!!t,this.i=new vi(null,this.h))}function ei(e){return new Zr(e)}function ti(e,t,n){e.j=n?oi(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ni(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function ri(e,t,n){t instanceof vi?(e.i=t,function(e,t){t&&!e.j&&(pi(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(yi(this,t),gi(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=si(t,fi)),e.i=new vi(t,e.h))}function ii(e,t,n){e.i.set(t,n)}function ai(e){return ii(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function oi(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function si(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,ui),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ui(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Zr.prototype.toString=function(){var e=[],t=this.j;t&&e.push(si(t,ci,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(si(t,ci,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(si(n,"/"==n.charAt(0)?hi:li,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",si(n,di)),e.join("")};var ci=/[#\/\?@]/g,li=/[#\?:]/g,hi=/[#\?]/g,fi=/[#\?@]/g,di=/#/g;function vi(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function pi(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var a=e[n].substring(0,r);i=e[n].substring(r+1)}else a=e[n];t(a,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function yi(e,t){pi(e),t=ki(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function mi(e,t){return pi(e),t=ki(e,t),e.g.has(t)}function gi(e,t,n){yi(e,t),0<n.length&&(e.i=null,e.g.set(ki(e,t),zt(n)),e.h+=n.length)}function ki(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(At=vi.prototype).add=function(e,t){pi(this),this.i=null,e=ki(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},At.forEach=function(e,t){pi(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},At.oa=function(){pi(this);for(var e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[],r=0;r<t.length;r++)for(var i=e[r],a=0;a<i.length;a++)n.push(t[r]);return n},At.W=function(e){pi(this);var t=[];if("string"==typeof e)mi(this,e)&&(t=t.concat(this.g.get(ki(this,e))));else{e=Array.from(this.g.values());for(var n=0;n<e.length;n++)t=t.concat(e[n])}return t},At.set=function(e,t){return pi(this),this.i=null,mi(this,e=ki(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},At.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},At.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=Array.from(this.g.keys()),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r)),a=this.W(r);for(r=0;r<a.length;r++){var o=i;""!==a[r]&&(o+="="+encodeURIComponent(String(a[r]))),e.push(o)}}return this.i=e.join("&")};var wi=function t(n,r){"use strict";e(s)(this,t),this.h=n,this.g=r};function bi(e){this.l=e||xi,Rt.PerformanceNavigationTiming?e=0<(e=Rt.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(Rt.g&&Rt.g.Ga&&Rt.g.Ga()&&Rt.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var xi=10;function Ti(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Ei(e){return e.h?1:e.g?e.g.size:0}function Ii(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function _i(e,t){e.g?e.g.add(t):e.h=t}function Si(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Ci(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){var t=e.i,n=!0,r=!1,i=void 0;try{for(var a,o=e.g.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;t=t.concat(s.D)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return t}return zt(e.i)}function Ai(){}function Ni(){this.g=new Ai}function Oi(e,t,n){var r=n||"";try{Yr(e,(function(e,n){var i=e;Mt(e)&&(i=Qn(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function Di(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function Ri(e){this.l=e.ac||null,this.j=e.jb||!1}function Li(e,t){Wn.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Pi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}bi.prototype.cancel=function(){if(this.i=Ci(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){var e=!0,t=!1,n=void 0;try{for(var r,i=this.g.values()[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){r.value.cancel()}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}this.g.clear()}},Ai.prototype.stringify=function(e){return Rt.JSON.stringify(e,void 0)},Ai.prototype.parse=function(e){return Rt.JSON.parse(e,void 0)},Kt(Ri,Sr),Ri.prototype.g=function(){return new Li(this.l,this.j)},Ri.prototype.i=function(e){return function(){return e}}({}),Kt(Li,Wn);var Pi=0;function Mi(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function Fi(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ui(e)}function Ui(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(At=Li.prototype).open=function(e,t){if(this.readyState!=Pi)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ui(this)},At.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;var t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||Rt).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},At.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((function(){})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Fi(this)),this.readyState=Pi},At.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ui(this)),this.g&&(this.readyState=3,Ui(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==Rt.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Mi(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},At.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Fi(this):Ui(this),3==this.readyState&&Mi(this)}},At.Va=function(e){this.g&&(this.response=this.responseText=e,Fi(this))},At.Ua=function(e){this.g&&(this.response=e,Fi(this))},At.ga=function(){this.g&&Fi(this)},At.setRequestHeader=function(e,t){this.v.append(e,t)},At.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},At.getAllResponseHeaders=function(){if(!this.h)return"";for(var e=[],t=this.h.entries(),n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Li.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Vi=Rt.JSON.parse;function ji(e){Wn.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Bi,this.K=this.L=!1}Kt(ji,Wn);var Bi="",qi=/^https?$/i,Ki=["POST","PUT"];function Hi(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Wi(e),Gi(e)}function Wi(e){e.D||(e.D=!0,zn(e,"complete"),zn(e,"error"))}function zi(e){if(e.h&&void 0!==Dt&&(!e.C[1]||4!=Xi(e)||2!=e.aa()))if(e.v&&4==Xi(e))sr(e.Ha,0,e);else if(zn(e,"readystatechange"),4==Xi(e)){e.h=!1;try{var t,n=e.aa();e:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break e;default:r=!1}if(!(t=r)){var i;if(i=0===n){var a=String(e.H).match($r)[1]||null;if(!a&&Rt.self&&Rt.self.location){var o=Rt.self.location.protocol;a=o.substr(0,o.length-1)}i=!qi.test(a?a.toLowerCase():"")}t=i}if(t)zn(e,"complete"),zn(e,"success");else{e.m=6;try{var s=2<Xi(e)?e.g.statusText:""}catch(e){s=""}e.j=s+" ["+e.aa()+"]",Wi(e)}}finally{Gi(e)}}}function Gi(e,t){if(e.g){Qi(e);var n=e.g,r=e.C[0]?Lt:null;e.g=null,e.C=null,t||zn(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function Qi(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(Rt.clearTimeout(e.A),e.A=null)}function Xi(e){return e.g?e.g.readyState:0}function Ji(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Bi:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Yi(e){var t="";return _n(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function $i(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Yi(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):ii(e,t,n))}function Zi(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function ea(e){this.Ca=0,this.i=[],this.j=new vr,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Zi("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Zi("baseRetryDelayMs",5e3,e),this.bb=Zi("retryDelaySeedMs",1e4,e),this.$a=Zi("forwardChannelMaxRetries",2,e),this.ta=Zi("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new bi(e&&e.concurrentRequestLimit),this.Fa=new Ni,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function ta(e){if(ra(e),3==e.G){var t=e.U++,n=ei(e.F);ii(n,"SID",e.I),ii(n,"RID",t),ii(n,"TYPE","terminate"),oa(e,n),(t=new Pr(e,e.j,t,void 0)).K=2,t.v=ai(ei(n)),n=!1,Rt.navigator&&Rt.navigator.sendBeacon&&(n=Rt.navigator.sendBeacon(t.v.toString(),"")),!n&&Rt.Image&&((new Image).src=t.v,n=!0),n||(t.g=ga(t.l,null),t.g.da(t.v)),t.F=Date.now(),Wr(t)}ya(e)}function na(e){e.g&&(la(e),e.g.cancel(),e.g=null)}function ra(e){na(e),e.u&&(Rt.clearTimeout(e.u),e.u=null),fa(e),e.h.cancel(),e.m&&("number"==typeof e.m&&Rt.clearTimeout(e.m),e.m=null)}function ia(e){Ti(e.h)||e.m||(e.m=!0,tr(e.Ja,e),e.C=0)}function aa(e,t){var n;n=t?t.m:e.U++;var r=ei(e.F);ii(r,"SID",e.I),ii(r,"RID",n),ii(r,"AID",e.T),oa(e,r),e.o&&e.s&&$i(r,e.o,e.s),n=new Pr(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=sa(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),_i(e.h,n),jr(n,r,t)}function oa(e,t){e.ia&&_n(e.ia,(function(e,n){ii(t,n,e)})),e.l&&Yr({},(function(e,n){ii(t,n,e)}))}function sa(e,t,n){n=Math.min(e.i.length,n);var r=e.l?Bt(e.l.Ra,e.l,e):null;e:for(var i=e.i,a=-1;;){var o=["count="+n];-1==a?0<n?(a=i[0].h,o.push("ofs="+a)):a=0:o.push("ofs="+a);for(var s=!0,u=0;u<n;u++){var c=i[u].h,l=i[u].g;if(0>(c-=a))a=Math.max(0,i[u].h-100),s=!1;else try{Oi(l,o,"req"+c+"_")}catch(e){r&&r(l)}}if(s){r=o.join("&");break e}}return e=e.i.splice(0,n),t.D=e,r}function ua(e){e.g||e.u||(e.Z=1,tr(e.Ia,e),e.A=0)}function ca(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=Er(Bt(e.Ia,e),va(e,e.A)),e.A++,!0)}function la(e){null!=e.B&&(Rt.clearTimeout(e.B),e.B=null)}function ha(e){e.g=new Pr(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=ei(e.sa);ii(t,"RID","rpc"),ii(t,"SID",e.I),ii(t,"CI",e.L?"0":"1"),ii(t,"AID",e.T),ii(t,"TYPE","xmlhttp"),oa(e,t),e.o&&e.s&&$i(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=ai(ei(t)),n.s=null,n.P=!0,Br(n,e)}function fa(e){null!=e.v&&(Rt.clearTimeout(e.v),e.v=null)}function da(e,t){var n=null;if(e.g==t){fa(e),la(e),e.g=null;var r=2}else{if(!Ii(e.h,t))return;n=t.D,Si(e.h,t),r=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;zn(r=gr(),new Tr(r,n)),ia(e)}else ua(e);else if(3==(i=t.o)||0==i&&0<e.pa||!(1==r&&function(e,t){return!(Ei(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.C>=(e.Za?0:e.$a)||(e.m=Er(Bt(e.Ja,e,t),va(e,e.C)),e.C++,0)))}(e,t)||2==r&&ca(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:pa(e,5);break;case 4:pa(e,10);break;case 3:pa(e,6);break;default:pa(e,2)}}function va(e,t){var n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function pa(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=Bt(e.kb,e);n||(n=new Zr("//www.google.com/images/cleardot.gif"),Rt.location&&"http"==Rt.location.protocol||ti(n,"https"),ai(n)),function(e,t){var n=new vr;if(Rt.Image){var r=new Image;r.onload=qt(Di,n,r,"TestLoadImage: loaded",!0,t),r.onerror=qt(Di,n,r,"TestLoadImage: error",!1,t),r.onabort=qt(Di,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=qt(Di,n,r,"TestLoadImage: timeout",!1,t),Rt.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else xr(2);e.G=0,e.l&&e.l.va(t),ya(e),ra(e)}function ya(e){if(e.G=0,e.la=[],e.l){var t=Ci(e.h);0==t.length&&0==e.i.length||(Gt(e.la,t),Gt(e.la,e.i),e.h.i.length=0,zt(e.i),e.i.length=0),e.l.ua()}}function ma(e,t,n){var r=n instanceof Zr?ei(n):new Zr(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),ni(r,r.m);else{var i=Rt.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var a=new Zr(null,void 0);r&&ti(a,r),t&&(a.g=t),i&&ni(a,i),n&&(a.l=n),r=a}return n=e.D,t=e.za,n&&t&&ii(r,n,t),ii(r,"VER",e.ma),oa(e,r),r}function ga(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Da&&!e.ra?new ji(new Ri({jb:!0})):new ji(e.ra)).Ka(e.H),t}function ka(){}function wa(){if(on&&!(10<=Number(kn)))throw Error("Environmental error: no available transport.")}function ba(e,t){Wn.call(this),this.g=new ea(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!Jt(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Jt(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Ea(this)}function xa(e){Dr.call(this);var t=e.__sm__;if(t){e:{for(var n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Ta(){Rr.call(this),this.status=1}function Ea(e){this.g=e}(At=ji.prototype).Ka=function(e){this.L=e},At.da=function(t,n,r,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);n=n?n.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Nr.g(),this.C=this.u?Cr(this.u):Cr(Nr),this.g.onreadystatechange=Bt(this.Ha,this);try{this.F=!0,this.g.open(n,String(t),!0),this.F=!1}catch(e){return void Hi(this,e)}if(t=r||"",r=new Map(this.headers),i){var a=!0,o=!1,s=void 0;if(Object.getPrototypeOf(i)===Object.prototype)for(var u in i)r.set(u,i[u]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));try{for(var c,l=i.keys()[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var h=c.value;r.set(h,i.get(h))}}catch(e){o=!0,s=e}finally{try{a||null==l.return||l.return()}finally{if(o)throw s}}}}i=Array.from(r.keys()).find((function(e){return"content-type"==e.toLowerCase()})),u=Rt.FormData&&t instanceof Rt.FormData,!(0<=Wt(Ki,n))||i||u||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");var f=!0,d=!1,v=void 0;try{for(var p,y=r[Symbol.iterator]();!(f=(p=y.next()).done);f=!0){var g=e(m)(p.value,2),k=g[0],w=g[1];this.g.setRequestHeader(k,w)}}catch(e){d=!0,v=e}finally{try{f||null==y.return||y.return()}finally{if(d)throw v}}this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Qi(this),0<this.B&&((this.K=function(e){return on&&mn()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Bt(this.qa,this)):this.A=sr(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(e){Hi(this,e)}},At.qa=function(){void 0!==Dt&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,zn(this,"timeout"),this.abort(8))},At.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,zn(this,"complete"),zn(this,"abort"),Gi(this))},At.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Gi(this,!0)),ji.X.M.call(this)},At.Ha=function(){this.s||(this.F||this.v||this.l?zi(this):this.fb())},At.fb=function(){zi(this)},At.aa=function(){try{return 2<Xi(this)?this.g.status:-1}catch(e){return-1}},At.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},At.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Vi(t)}},At.Ea=function(){return this.m},At.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(At=ea.prototype).ma=8,At.G=1,At.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;var t=new Pr(this,this.j,e,void 0),n=this.s;if(this.S&&(n?An(n=Sn(n),this.S):n=this.S),null!==this.o||this.N||(t.H=n,n=null),this.O)e:{for(var r=0,i=0;i<this.i.length;i++){var a=this.i[i];if(void 0===(a="__data__"in a.g&&"string"==typeof(a=a.g.__data__)?a.length:void 0))break;if(4096<(r+=a)){r=i;break e}if(4096===r||i===this.i.length-1){r=i+1;break e}}r=1e3}else r=1e3;r=sa(this,t,r),ii(i=ei(this.F),"RID",e),ii(i,"CVER",22),this.D&&ii(i,"X-HTTP-Session-Id",this.D),oa(this,i),n&&(this.N?r="headers="+encodeURIComponent(String(Yi(n)))+"&"+r:this.o&&$i(i,this.o,n)),_i(this.h,t),this.Ya&&ii(i,"TYPE","init"),this.O?(ii(i,"$req",r),ii(i,"SID","null"),t.Z=!0,jr(t,i,null)):jr(t,i,r),this.G=2}}else 3==this.G&&(e?aa(this,e):0==this.i.length||Ti(this.h)||aa(this))},At.Ia=function(){if(this.u=null,ha(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Er(Bt(this.eb,this),e)}},At.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,xr(10),na(this),ha(this))},At.cb=function(){null!=this.v&&(this.v=null,na(this),ca(this),xr(19))},At.kb=function(e){e?(this.j.info("Successfully pinged google.com"),xr(2)):(this.j.info("Failed to ping google.com"),xr(1))},(At=ka.prototype).xa=function(){},At.wa=function(){},At.va=function(){},At.ua=function(){},At.Ra=function(){},wa.prototype.g=function(e,t){return new ba(e,t)},Kt(ba,Wn),ba.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;xr(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=ma(e,null,e.V),ia(e)},ba.prototype.close=function(){ta(this.g)},ba.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=Qn(e),e=n);t.i.push(new wi(t.ab++,e)),3==t.G&&ia(t)},ba.prototype.M=function(){this.g.l=null,delete this.j,ta(this.g),delete this.g,ba.X.M.call(this)},Kt(xa,Dr),Kt(Ta,Rr),Kt(Ea,ka),Ea.prototype.xa=function(){zn(this.g,"a")},Ea.prototype.wa=function(e){zn(this.g,new xa(e))},Ea.prototype.va=function(e){zn(this.g,new Ta)},Ea.prototype.ua=function(){zn(this.g,"b")},wa.prototype.createWebChannel=wa.prototype.g,ba.prototype.send=ba.prototype.u,ba.prototype.open=ba.prototype.m,ba.prototype.close=ba.prototype.close,Ir.NO_ERROR=0,Ir.TIMEOUT=8,Ir.HTTP_ERROR=6,_r.COMPLETE="complete",Ar.EventType=Or,Or.OPEN="a",Or.CLOSE="b",Or.ERROR="c",Or.MESSAGE="d",Wn.prototype.listen=Wn.prototype.N,ji.prototype.listenOnce=ji.prototype.O,ji.prototype.getLastError=ji.prototype.Oa,ji.prototype.getLastErrorCode=ji.prototype.Ea,ji.prototype.getStatus=ji.prototype.aa,ji.prototype.getResponseJson=ji.prototype.Sa,ji.prototype.getResponseText=ji.prototype.fa,ji.prototype.send=ji.prototype.da,ji.prototype.setWithCredentials=ji.prototype.Ka;var Ia=Ot.createWebChannelTransport=function(){return new wa},_a=Ot.getStatEventTarget=function(){return gr()},Sa=Ot.ErrorCode=Ir,Ca=Ot.EventType=_r,Aa=Ot.Event=yr,Na=Ot.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Oa=Ot.FetchXmlHttpFactory=Ri,Da=Ot.WebChannel=Ar,Ra=Ot.XhrIo=ji,La="@firebase/firestore",Pa=function(){"use strict";function t(n){e(s)(this,t),this.uid=n}return e(c)(t,[{key:"isAuthenticated",value:function(){return null!=this.uid}},{key:"toKey",value:function(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}},{key:"isEqual",value:function(e){return e.uid===this.uid}}]),t}();Pa.UNAUTHENTICATED=new Pa(null),Pa.GOOGLE_CREDENTIALS=new Pa("google-credentials-uid"),Pa.FIRST_PARTY=new Pa("first-party-uid"),Pa.MOCK_USER=new Pa("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ma="9.15.0",Fa=new Ne("@firebase/firestore");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(){return Fa.logLevel}function Va(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(Fa.logLevel<=be.DEBUG){var a,o=r.map(qa);(a=Fa).debug.apply(a,["Firestore (".concat(Ma,"): ").concat(t)].concat(e(g)(o)))}}function ja(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(Fa.logLevel<=be.ERROR){var a,o=r.map(qa);(a=Fa).error.apply(a,["Firestore (".concat(Ma,"): ").concat(t)].concat(e(g)(o)))}}function Ba(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(Fa.logLevel<=be.WARN){var a,o=r.map(qa);(a=Fa).warn.apply(a,["Firestore (".concat(Ma,"): ").concat(t)].concat(e(g)(o)))}}function qa(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Unexpected state",t="FIRESTORE (".concat(Ma,") INTERNAL ASSERTION FAILED: ")+e;throw ja(t),new Error(t)}function Ha(e,t){e||Ka()}function Wa(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var za={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},Ga=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(t,i){var a;return e(s)(this,r),(a=n.call(this,t,i)).code=t,a.message=i,a.toString=function(){return"".concat(a.name,": [code=").concat(a.code,"]: ").concat(a.message)},e(y)(a)}return r}(ae),Qa=function t(){"use strict";var n=this;e(s)(this,t),this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))},Xa=function t(n,r){"use strict";e(s)(this,t),this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer ".concat(n))},Ja=function(){"use strict";function t(){e(s)(this,t)}return e(c)(t,[{key:"getToken",value:function(){return Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(Pa.UNAUTHENTICATED)}))}},{key:"shutdown",value:function(){}}]),t}(),Ya=function(){"use strict";function t(n){e(s)(this,t),this.token=n,this.changeListener=null}return e(c)(t,[{key:"getToken",value:function(){return Promise.resolve(this.token)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){var n=this;this.changeListener=t,e.enqueueRetryable((function(){return t(n.token.user)}))}},{key:"shutdown",value:function(){this.changeListener=null}}]),t}(),$a=function(){"use strict";function t(n){e(s)(this,t),this.t=n,this.currentUser=Pa.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}return e(c)(t,[{key:"start",value:function(t,n){var r=this,i=this.i,s=function(e){return r.i!==i?(i=r.i,n(e)):Promise.resolve()},u=new Qa;this.o=function(){var e=r;r.i++,r.currentUser=r.u(),u.resolve(),u=new Qa,t.enqueueRetryable((function(){return s(e.currentUser)}))};var c=function(){var n=u,i=r;t.enqueueRetryable(e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.promise;case 2:return e.next=4,s(i.currentUser);case 4:case"end":return e.stop()}}),t)}))))},l=function(e){Va("FirebaseAuthCredentialsProvider","Auth detected"),r.auth=e,r.auth.addAuthTokenListener(r.o),c()};this.t.onInit((function(e){return l(e)})),setTimeout((function(){if(!r.auth){var e=r.t.getImmediate({optional:!0});e?l(e):(Va("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Qa)}}),0),c()}},{key:"getToken",value:function(){var e=this,t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((function(n){return e.i!==t?(Va("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),e.getToken()):n?(Ha("string"==typeof n.accessToken),new Xa(n.accessToken,e.currentUser)):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){this.forceRefresh=!0}},{key:"shutdown",value:function(){this.auth&&this.auth.removeAuthTokenListener(this.o)}},{key:"u",value:function(){var e=this.auth&&this.auth.getUid();return Ha(null===e||"string"==typeof e),new Pa(e)}}]),t}(),Za=function(){"use strict";function t(n,r,i,a){e(s)(this,t),this.h=n,this.l=r,this.m=i,this.g=a,this.type="FirstParty",this.user=Pa.FIRST_PARTY,this.p=new Map}return e(c)(t,[{key:"I",value:function(){return this.g?this.g():(Ha(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}},{key:"headers",get:function(){this.p.set("X-Goog-AuthUser",this.l);var e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}]),t}(),eo=function(){"use strict";function t(n,r,i,a){e(s)(this,t),this.h=n,this.l=r,this.m=i,this.g=a}return e(c)(t,[{key:"getToken",value:function(){return Promise.resolve(new Za(this.h,this.l,this.m,this.g))}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(Pa.FIRST_PARTY)}))}},{key:"shutdown",value:function(){}},{key:"invalidateToken",value:function(){}}]),t}(),to=function t(n){"use strict";e(s)(this,t),this.value=n,this.type="AppCheck",this.headers=new Map,n&&n.length>0&&this.headers.set("x-firebase-appcheck",this.value)},no=function(){"use strict";function t(n){e(s)(this,t),this.T=n,this.forceRefresh=!1,this.appCheck=null,this.A=null}return e(c)(t,[{key:"start",value:function(e,t){var n=this;this.o=function(r){e.enqueueRetryable((function(){return function(e){null!=e.error&&Va("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: ".concat(e.error.message));var r=e.token!==n.A;return n.A=e.token,Va("FirebaseAppCheckTokenProvider","Received ".concat(r?"new":"existing"," token.")),r?t(e.token):Promise.resolve()}(r)}))};var r=function(e){Va("FirebaseAppCheckTokenProvider","AppCheck detected"),n.appCheck=e,n.appCheck.addTokenListener(n.o)};this.T.onInit((function(e){return r(e)})),setTimeout((function(){if(!n.appCheck){var e=n.T.getImmediate({optional:!0});e?r(e):Va("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}},{key:"getToken",value:function(){var e=this,t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((function(t){return t?(Ha("string"==typeof t.token),e.A=t.token,new to(t.token)):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){this.forceRefresh=!0}},{key:"shutdown",value:function(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ro(e){var t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(var r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var io=function(){"use strict";function t(){e(s)(this,t)}return e(c)(t,null,[{key:"R",value:function(){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";n.length<20;)for(var r=ro(40),i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length));return n}}]),t}();function ao(e,t){return e<t?-1:e>t?1:0}function oo(e,t,n){return e.length===t.length&&e.every((function(e,r){return n(e,t[r])}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var so=function(){"use strict";function t(n,r){if(e(s)(this,t),this.seconds=n,this.nanoseconds=r,r<0)throw new Ga(za.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(r>=1e9)throw new Ga(za.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(n<-62135596800)throw new Ga(za.INVALID_ARGUMENT,"Timestamp seconds out of range: "+n);if(n>=253402300800)throw new Ga(za.INVALID_ARGUMENT,"Timestamp seconds out of range: "+n)}return e(c)(t,[{key:"toDate",value:function(){return new Date(this.toMillis())}},{key:"toMillis",value:function(){return 1e3*this.seconds+this.nanoseconds/1e6}},{key:"_compareTo",value:function(e){return this.seconds===e.seconds?ao(this.nanoseconds,e.nanoseconds):ao(this.seconds,e.seconds)}},{key:"isEqual",value:function(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}},{key:"toString",value:function(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}},{key:"toJSON",value:function(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}},{key:"valueOf",value:function(){var e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}],[{key:"now",value:function(){return t.fromMillis(Date.now())}},{key:"fromDate",value:function(e){return t.fromMillis(e.getTime())}},{key:"fromMillis",value:function(e){var n=Math.floor(e/1e3);return new t(n,Math.floor(1e6*(e-1e3*n)))}}]),t}(),uo=function(){"use strict";function t(n){e(s)(this,t),this.timestamp=n}return e(c)(t,[{key:"compareTo",value:function(e){return this.timestamp._compareTo(e.timestamp)}},{key:"isEqual",value:function(e){return this.timestamp.isEqual(e.timestamp)}},{key:"toMicroseconds",value:function(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}},{key:"toString",value:function(){return"SnapshotVersion("+this.timestamp.toString()+")"}},{key:"toTimestamp",value:function(){return this.timestamp}}],[{key:"fromTimestamp",value:function(e){return new t(e)}},{key:"min",value:function(){return new t(new so(0,0))}},{key:"max",value:function(){return new t(new so(253402300799,999999999))}}]),t}(),co=function(){"use strict";function t(n,r,i){e(s)(this,t),void 0===r?r=0:r>n.length&&Ka(),void 0===i?i=n.length-r:i>n.length-r&&Ka(),this.segments=n,this.offset=r,this.len=i}return e(c)(t,[{key:"length",get:function(){return this.len}},{key:"isEqual",value:function(e){return 0===t.comparator(this,e)}},{key:"child",value:function(e){var n=this.segments.slice(this.offset,this.limit());return e instanceof t?e.forEach((function(e){n.push(e)})):n.push(e),this.construct(n)}},{key:"limit",value:function(){return this.offset+this.length}},{key:"popFirst",value:function(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}},{key:"popLast",value:function(){return this.construct(this.segments,this.offset,this.length-1)}},{key:"firstSegment",value:function(){return this.segments[this.offset]}},{key:"lastSegment",value:function(){return this.get(this.length-1)}},{key:"get",value:function(e){return this.segments[this.offset+e]}},{key:"isEmpty",value:function(){return 0===this.length}},{key:"isPrefixOf",value:function(e){if(e.length<this.length)return!1;for(var t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}},{key:"isImmediateParentOf",value:function(e){if(this.length+1!==e.length)return!1;for(var t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}},{key:"forEach",value:function(e){for(var t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}},{key:"toArray",value:function(){return this.segments.slice(this.offset,this.limit())}}],[{key:"comparator",value:function(e,t){for(var n=Math.min(e.length,t.length),r=0;r<n;r++){var i=e.get(r),a=t.get(r);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}]),t}(),lo=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(){return e(s)(this,r),n.apply(this,arguments)}return e(c)(r,[{key:"construct",value:function(e,t,n){return new r(e,t,n)}},{key:"canonicalString",value:function(){return this.toArray().join("/")}},{key:"toString",value:function(){return this.canonicalString()}}],[{key:"fromString",value:function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];var a=[],o=!0,s=!1,u=void 0;try{for(var c,l=n[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var h,f=c.value;if(f.indexOf("//")>=0)throw new Ga(za.INVALID_ARGUMENT,"Invalid segment (".concat(f,"). Paths must not contain // in them."));(h=a).push.apply(h,e(g)(f.split("/").filter((function(e){return e.length>0}))))}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return new r(a)}},{key:"emptyPath",value:function(){return new r([])}}]),r}(co),ho=/^[_a-zA-Z][_a-zA-Z0-9]*$/,fo=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(){return e(s)(this,r),n.apply(this,arguments)}return e(c)(r,[{key:"construct",value:function(e,t,n){return new r(e,t,n)}},{key:"canonicalString",value:function(){return this.toArray().map((function(e){return e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),r.isValidIdentifier(e)||(e="`"+e+"`"),e})).join(".")}},{key:"toString",value:function(){return this.canonicalString()}},{key:"isKeyField",value:function(){return 1===this.length&&"__name__"===this.get(0)}}],[{key:"isValidIdentifier",value:function(e){return ho.test(e)}},{key:"keyField",value:function(){return new r(["__name__"])}},{key:"fromServerFormat",value:function(e){for(var t=[],n="",i=0,a=function(){if(0===n.length)throw new Ga(za.INVALID_ARGUMENT,"Invalid field path (".concat(e,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"));t.push(n),n=""},o=!1;i<e.length;){var s=e[i];if("\\"===s){if(i+1===e.length)throw new Ga(za.INVALID_ARGUMENT,"Path has trailing escape character: "+e);var u=e[i+1];if("\\"!==u&&"."!==u&&"`"!==u)throw new Ga(za.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,i+=2}else"`"===s?(o=!o,i++):"."!==s||o?(n+=s,i++):(a(),i++)}if(a(),o)throw new Ga(za.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new r(t)}},{key:"emptyPath",value:function(){return new r([])}}]),r}(co),vo=function(){"use strict";function t(n){e(s)(this,t),this.path=n}return e(c)(t,[{key:"collectionGroup",get:function(){return this.path.popLast().lastSegment()}},{key:"hasCollectionId",value:function(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}},{key:"getCollectionGroup",value:function(){return this.path.get(this.path.length-2)}},{key:"getCollectionPath",value:function(){return this.path.popLast()}},{key:"isEqual",value:function(e){return null!==e&&0===lo.comparator(this.path,e.path)}},{key:"toString",value:function(){return this.path.toString()}}],[{key:"fromPath",value:function(e){return new t(lo.fromString(e))}},{key:"fromName",value:function(e){return new t(lo.fromString(e).popFirst(5))}},{key:"empty",value:function(){return new t(lo.emptyPath())}},{key:"comparator",value:function(e,t){return lo.comparator(e.path,t.path)}},{key:"isDocumentKey",value:function(e){return e.length%2==0}},{key:"fromSegments",value:function(e){return new t(new lo(e.slice()))}}]),t}(),po=function t(n,r,i,a){"use strict";e(s)(this,t),this.indexId=n,this.collectionGroup=r,this.fields=i,this.indexState=a};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */po.UNKNOWN_ID=-1;function yo(e,t){var n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=uo.fromTimestamp(1e9===r?new so(n+1,0):new so(n,r));return new go(i,vo.empty(),t)}function mo(e){return new go(e.readTime,e.key,-1)}var go=function(){"use strict";function t(n,r,i){e(s)(this,t),this.readTime=n,this.documentKey=r,this.largestBatchId=i}return e(c)(t,null,[{key:"min",value:function(){return new t(uo.min(),vo.empty(),-1)}},{key:"max",value:function(){return new t(uo.max(),vo.empty(),-1)}}]),t}();function ko(e,t){var n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=vo.comparator(e.documentKey,t.documentKey))?n:ao(e.largestBatchId,t.largestBatchId)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wo="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",bo=function(){"use strict";function t(){e(s)(this,t),this.onCommittedListeners=[]}return e(c)(t,[{key:"addOnCommittedListener",value:function(e){this.onCommittedListeners.push(e)}},{key:"raiseOnCommittedEvent",value:function(){this.onCommittedListeners.forEach((function(e){return e()}))}}]),t}();function xo(e){return To.apply(this,arguments)}function To(){return(To=
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.code===za.FAILED_PRECONDITION&&n.message===wo){e.next=2;break}throw n;case 2:Va("LocalStore","Unexpectedly lost primary lease");case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Eo=function(){"use strict";function t(n){var r=this;e(s)(this,t),this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,n((function(e){r.isDone=!0,r.result=e,r.nextCallback&&r.nextCallback(e)}),(function(e){r.isDone=!0,r.error=e,r.catchCallback&&r.catchCallback(e)}))}return e(c)(t,[{key:"catch",value:function(e){return this.next(void 0,e)}},{key:"next",value:function(e,n){var r=this;return this.callbackAttached&&Ka(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new t((function(t,i){var a=r;r.nextCallback=function(n){a.wrapSuccess(e,n).next(t,i)},r.catchCallback=function(e){a.wrapFailure(n,e).next(t,i)}}))}},{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){e.next(t,n)}))}},{key:"wrapUserFunction",value:function(e){try{var n=e();return n instanceof t?n:t.resolve(n)}catch(e){return t.reject(e)}}},{key:"wrapSuccess",value:function(e,n){return e?this.wrapUserFunction((function(){return e(n)})):t.resolve(n)}},{key:"wrapFailure",value:function(e,n){return e?this.wrapUserFunction((function(){return e(n)})):t.reject(n)}}],[{key:"resolve",value:function(e){return new t((function(t,n){t(e)}))}},{key:"reject",value:function(e){return new t((function(t,n){n(e)}))}},{key:"waitFor",value:function(e){return new t((function(t,n){var r=0,i=0,a=!1;e.forEach((function(e){++r,e.next((function(){++i,a&&i===r&&t()}),(function(e){return n(e)}))})),a=!0,i===r&&t()}))}},{key:"or",value:function(e){var n=t.resolve(!1),r=!0,i=!1,a=void 0;try{for(var o,s=function(e,r){var i=r.value;n=n.next((function(e){return e?t.resolve(e):i()}))},u=e[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return n}},{key:"forEach",value:function(e,t){var n=this,r=[];return e.forEach((function(e,i){r.push(t.call(n,e,i))})),this.waitFor(r)}},{key:"mapArray",value:function(e,n){return new t((function(t,r){for(var i=function(i){var u=i;n(e[u]).next((function(e){o[u]=e,++s===a&&t(o)}),(function(e){return r(e)}))},a=e.length,o=new Array(a),s=0,u=0;u<a;u++)i(u)}))}},{key:"doWhile",value:function(e,n){return new t((function(t,r){var i=function(){!0===e()?n().next((function(){i()}),r):t()};i()}))}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(e){return"IndexedDbTransactionError"===e.name}var _o=function(){"use strict";function t(n,r){var i=this;e(s)(this,t),this.previousValue=n,r&&(r.sequenceNumberHandler=function(e){return i.ut(e)},this.ct=function(e){return r.writeSequenceNumber(e)})}return e(c)(t,[{key:"ut",value:function(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}},{key:"next",value:function(){var e=++this.previousValue;return this.ct&&this.ct(e),e}}]),t}();_o.at=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var So=function t(n,r,i,a,o,u,c,l){"use strict";e(s)(this,t),this.databaseId=n,this.appId=r,this.persistenceKey=i,this.host=a,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.useFetchStreams=l},Co=function(){"use strict";function t(n,r){e(s)(this,t),this.projectId=n,this.database=r||"(default)"}return e(c)(t,[{key:"isDefaultDatabase",get:function(){return"(default)"===this.database}},{key:"isEqual",value:function(e){return e instanceof t&&e.projectId===this.projectId&&e.database===this.database}}],[{key:"empty",value:function(){return new t("","")}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ao(e){var t=0;for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function No(e,t){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Oo(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(e){return null==e}function Ro(e){return 0===e&&1/e==-1/0}function Lo(e){return"number"==typeof e&&Number.isInteger(e)&&!Ro(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Po=Symbol.iterator,Mo=function(){"use strict";function t(n){e(s)(this,t),this.binaryString=n}return e(c)(t,[{key:Po,value:function(){var e=this,t=0;return{next:function(){return t<e.binaryString.length?{value:e.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}}},{key:"toBase64",value:function(){var e;return e=this.binaryString,btoa(e)}},{key:"toUint8Array",value:function(){return function(e){for(var t=new Uint8Array(e.length),n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}},{key:"approximateByteSize",value:function(){return 2*this.binaryString.length}},{key:"compareTo",value:function(e){return ao(this.binaryString,e.binaryString)}},{key:"isEqual",value:function(e){return this.binaryString===e.binaryString}}],[{key:"fromBase64String",value:function(e){return new t(atob(e))}},{key:"fromUint8Array",value:function(e){return new t(function(e){for(var t="",n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mo.EMPTY_BYTE_STRING=new Mo("");var Fo=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Uo(e){if(Ha(!!e),"string"==typeof e){var t=0,n=Fo.exec(e);if(Ha(!!n),n[1]){var r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}var i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:Vo(e.seconds),nanos:Vo(e.nanos)}}function Vo(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function jo(e){return"string"==typeof e?Mo.fromBase64String(e):Mo.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function qo(e){var t=e.mapValue.fields.__previous_value__;return Bo(t)?qo(t):t}function Ko(e){var t=Uo(e.mapValue.fields.__local_write_time__.timestampValue);return new so(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ho={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Wo(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Bo(e)?4:is(e)?9007199254740991:10:Ka()}function zo(e,t){if(e===t)return!0;var n,r=Wo(e);if(r!==Wo(t))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ko(e).isEqual(Ko(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;var n=Uo(e.timestampValue),r=Uo(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return n=t,jo(e.bytesValue).isEqual(jo(n.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Vo(e.geoPointValue.latitude)===Vo(t.geoPointValue.latitude)&&Vo(e.geoPointValue.longitude)===Vo(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Vo(e.integerValue)===Vo(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){var n=Vo(e.doubleValue),r=Vo(t.doubleValue);return n===r?Ro(n)===Ro(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return oo(e.arrayValue.values||[],t.arrayValue.values||[],zo);case 10:return function(e,t){var n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Ao(n)!==Ao(r))return!1;for(var i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!zo(n[i],r[i])))return!1;return!0}(e,t);default:return Ka()}}function Go(e,t){return void 0!==(e.values||[]).find((function(e){return zo(e,t)}))}function Qo(e,t){if(e===t)return 0;var n,r,i,a,o=Wo(e),s=Wo(t);if(o!==s)return ao(o,s);switch(o){case 0:case 9007199254740991:return 0;case 1:return ao(e.booleanValue,t.booleanValue);case 2:return r=t,i=Vo((n=e).integerValue||n.doubleValue),a=Vo(r.integerValue||r.doubleValue),i<a?-1:i>a?1:i===a?0:isNaN(i)?isNaN(a)?0:-1:1;case 3:return Xo(e.timestampValue,t.timestampValue);case 4:return Xo(Ko(e),Ko(t));case 5:return ao(e.stringValue,t.stringValue);case 6:return function(e,t){var n=jo(e),r=jo(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){for(var n=e.split("/"),r=t.split("/"),i=0;i<n.length&&i<r.length;i++){var a=ao(n[i],r[i]);if(0!==a)return a}return ao(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){var n=ao(Vo(e.latitude),Vo(t.latitude));return 0!==n?n:ao(Vo(e.longitude),Vo(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){for(var n=e.values||[],r=t.values||[],i=0;i<n.length&&i<r.length;++i){var a=Qo(n[i],r[i]);if(a)return a}return ao(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Ho.mapValue&&t===Ho.mapValue)return 0;if(e===Ho.mapValue)return 1;if(t===Ho.mapValue)return-1;var n=e.fields||{},r=Object.keys(n),i=t.fields||{},a=Object.keys(i);r.sort(),a.sort();for(var o=0;o<r.length&&o<a.length;++o){var s=ao(r[o],a[o]);if(0!==s)return s;var u=Qo(n[r[o]],i[a[o]]);if(0!==u)return u}return ao(r.length,a.length)}(e.mapValue,t.mapValue);default:throw Ka()}}function Xo(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return ao(e,t);var n=Uo(e),r=Uo(t),i=ao(n.seconds,r.seconds);return 0!==i?i:ao(n.nanos,r.nanos)}function Jo(e){return Yo(e)}function Yo(e){var t,n,r,i;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?(r=e.timestampValue,i=Uo(r),"time(".concat(i.seconds,",").concat(i.nanos,")")):"stringValue"in e?e.stringValue:"bytesValue"in e?jo(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,vo.fromName(n).toString()):"geoPointValue"in e?"geo(".concat((t=e.geoPointValue).latitude,",").concat(t.longitude,")"):"arrayValue"in e?function(e){var t="[",n=!0,r=!0,i=!1,a=void 0;try{for(var o,s=(e.values||[])[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;n?n=!1:t+=",",t+=Yo(u)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return t+"]"}(e.arrayValue):"mapValue"in e?function(e){var t=Object.keys(e.fields||{}).sort(),n="{",r=!0,i=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;r?r=!1:n+=",",n+="".concat(c,":").concat(Yo(e.fields[c]))}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return n+"}"}(e.mapValue):Ka()}function $o(e){return!!e&&"integerValue"in e}function Zo(e){return!!e&&"arrayValue"in e}function es(e){return!!e&&"nullValue"in e}function ts(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ns(e){return!!e&&"mapValue"in e}function rs(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){var t={mapValue:{fields:{}}};return No(e.mapValue.fields,(function(e,n){return t.mapValue.fields[e]=rs(n)})),t}if(e.arrayValue){for(var n={arrayValue:{values:[]}},r=0;r<(e.arrayValue.values||[]).length;++r)n.arrayValue.values[r]=rs(e.arrayValue.values[r]);return n}return Object.assign({},e)}function is(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var as=function t(n,r){"use strict";e(s)(this,t),this.position=n,this.inclusive=r};function os(e,t,n){for(var r=0,i=0;i<e.position.length;i++){var a=t[i],o=e.position[i];if(r=a.field.isKeyField()?vo.comparator(vo.fromName(o.referenceValue),n.key):Qo(o,n.data.field(a.field)),"desc"===a.dir&&(r*=-1),0!==r)break}return r}function ss(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(var n=0;n<e.position.length;n++)if(!zo(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var us=function t(){"use strict";e(s)(this,t)},cs=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(t,i,a){var o;return e(s)(this,r),(o=n.call(this)).field=t,o.op=i,o.value=a,e(y)(o)}return e(c)(r,[{key:"matches",value:function(e){var t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Qo(t,this.value)):null!==t&&Wo(this.value)===Wo(t)&&this.matchesComparison(Qo(t,this.value))}},{key:"matchesComparison",value:function(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Ka()}}},{key:"isInequality",value:function(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}},{key:"getFlattenedFilters",value:function(){return[this]}},{key:"getFilters",value:function(){return[this]}},{key:"getFirstInequalityField",value:function(){return this.isInequality()?this.field:null}}],[{key:"create",value:function(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new ms(e,t,n):"array-contains"===t?new bs(e,n):"in"===t?new xs(e,n):"not-in"===t?new Ts(e,n):"array-contains-any"===t?new Es(e,n):new r(e,t,n)}},{key:"createKeyFieldInFilter",value:function(e,t,n){return"in"===t?new gs(e,n):new ks(e,n)}}]),r}(us),ls=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(t,i){var a;return e(s)(this,r),(a=n.call(this)).filters=t,a.op=i,a.ht=null,e(y)(a)}return e(c)(r,[{key:"matches",value:function(e){return hs(this)?void 0===this.filters.find((function(t){return!t.matches(e)})):void 0!==this.filters.find((function(t){return t.matches(e)}))}},{key:"getFlattenedFilters",value:function(){return null!==this.ht||(this.ht=this.filters.reduce((function(e,t){return e.concat(t.getFlattenedFilters())}),[])),this.ht}},{key:"getFilters",value:function(){return Object.assign([],this.filters)}},{key:"getFirstInequalityField",value:function(){var e=this.lt((function(e){return e.isInequality()}));return null!==e?e.field:null}},{key:"lt",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=this.getFlattenedFilters()[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;if(e(o))return o}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return null}}],[{key:"create",value:function(e,t){return new r(e,t)}}]),r}(us);function hs(e){return"and"===e.op}function fs(e){return ds(e)&&hs(e)}function ds(e){var t=!0,n=!1,r=void 0;try{for(var i,a=e.filters[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){if(i.value instanceof ls)return!1}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return!0}function vs(e){if(e instanceof cs)return e.field.canonicalString()+e.op.toString()+Jo(e.value);var t=e.filters.map((function(e){return vs(e)})).join(",");return"".concat(e.op,"(").concat(t,")")}function ps(e,t){return e instanceof cs?(n=e,(r=t)instanceof cs&&n.op===r.op&&n.field.isEqual(r.field)&&zo(n.value,r.value)):e instanceof ls?function(e,t){return t instanceof ls&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((function(e,n,r){return e&&ps(n,t.filters[r])}),!0)}(e,t):void Ka();var n,r}function ys(e){return e instanceof cs?"".concat((t=e).field.canonicalString()," ").concat(t.op," ").concat(Jo(t.value)):e instanceof ls?function(e){return e.op.toString()+" {"+e.getFilters().map(ys).join(" ,")+"}"}(e):"Filter";var t}var ms=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(t,i,a){var o;return e(s)(this,r),(o=n.call(this,t,i,a)).key=vo.fromName(a.referenceValue),e(y)(o)}return e(c)(r,[{key:"matches",value:function(e){var t=vo.comparator(e.key,this.key);return this.matchesComparison(t)}}]),r}(cs),gs=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(t,i){var a;return e(s)(this,r),(a=n.call(this,t,"in",i)).keys=ws("in",i),e(y)(a)}return e(c)(r,[{key:"matches",value:function(e){return this.keys.some((function(t){return t.isEqual(e.key)}))}}]),r}(cs),ks=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(t,i){var a;return e(s)(this,r),(a=n.call(this,t,"not-in",i)).keys=ws("not-in",i),e(y)(a)}return e(c)(r,[{key:"matches",value:function(e){return!this.keys.some((function(t){return t.isEqual(e.key)}))}}]),r}(cs);function ws(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((function(e){return vo.fromName(e.referenceValue)}))}var bs=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(t,i){return e(s)(this,r),n.call(this,t,"array-contains",i)}return e(c)(r,[{key:"matches",value:function(e){var t=e.data.field(this.field);return Zo(t)&&Go(t.arrayValue,this.value)}}]),r}(cs),xs=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(t,i){return e(s)(this,r),n.call(this,t,"in",i)}return e(c)(r,[{key:"matches",value:function(e){var t=e.data.field(this.field);return null!==t&&Go(this.value.arrayValue,t)}}]),r}(cs),Ts=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(t,i){return e(s)(this,r),n.call(this,t,"not-in",i)}return e(c)(r,[{key:"matches",value:function(e){if(Go(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;var t=e.data.field(this.field);return null!==t&&!Go(this.value.arrayValue,t)}}]),r}(cs),Es=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(t,i){return e(s)(this,r),n.call(this,t,"array-contains-any",i)}return e(c)(r,[{key:"matches",value:function(e){var t=this,n=e.data.field(this.field);return!(!Zo(n)||!n.arrayValue.values)&&n.arrayValue.values.some((function(e){return Go(t.value.arrayValue,e)}))}}]),r}(cs),Is=function t(n){"use strict";var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";e(s)(this,t),this.field=n,this.dir=r};function _s(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ss=function(){"use strict";function t(n,r){e(s)(this,t),this.comparator=n,this.root=r||As.EMPTY}return e(c)(t,[{key:"insert",value:function(e,n){return new t(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,As.BLACK,null,null))}},{key:"remove",value:function(e){return new t(this.comparator,this.root.remove(e,this.comparator).copy(null,null,As.BLACK,null,null))}},{key:"get",value:function(e){for(var t=this.root;!t.isEmpty();){var n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}},{key:"indexOf",value:function(e){for(var t=0,n=this.root;!n.isEmpty();){var r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}},{key:"isEmpty",value:function(){return this.root.isEmpty()}},{key:"size",get:function(){return this.root.size}},{key:"minKey",value:function(){return this.root.minKey()}},{key:"maxKey",value:function(){return this.root.maxKey()}},{key:"inorderTraversal",value:function(e){return this.root.inorderTraversal(e)}},{key:"forEach",value:function(e){this.inorderTraversal((function(t,n){return e(t,n),!1}))}},{key:"toString",value:function(){var e=[];return this.inorderTraversal((function(t,n){return e.push("".concat(t,":").concat(n)),!1})),"{".concat(e.join(", "),"}")}},{key:"reverseTraversal",value:function(e){return this.root.reverseTraversal(e)}},{key:"getIterator",value:function(){return new Cs(this.root,null,this.comparator,!1)}},{key:"getIteratorFrom",value:function(e){return new Cs(this.root,e,this.comparator,!1)}},{key:"getReverseIterator",value:function(){return new Cs(this.root,null,this.comparator,!0)}},{key:"getReverseIteratorFrom",value:function(e){return new Cs(this.root,e,this.comparator,!0)}}]),t}(),Cs=function(){"use strict";function t(n,r,i,a){e(s)(this,t),this.isReverse=a,this.nodeStack=[];for(var o=1;!n.isEmpty();)if(o=r?i(n.key,r):1,r&&a&&(o*=-1),o<0)n=this.isReverse?n.left:n.right;else{if(0===o){this.nodeStack.push(n);break}this.nodeStack.push(n),n=this.isReverse?n.right:n.left}}return e(c)(t,[{key:"getNext",value:function(){var e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}},{key:"hasNext",value:function(){return this.nodeStack.length>0}},{key:"peek",value:function(){if(0===this.nodeStack.length)return null;var e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}]),t}(),As=function(){"use strict";function t(n,r,i,a,o){e(s)(this,t),this.key=n,this.value=r,this.color=null!=i?i:t.RED,this.left=null!=a?a:t.EMPTY,this.right=null!=o?o:t.EMPTY,this.size=this.left.size+1+this.right.size}return e(c)(t,[{key:"copy",value:function(e,n,r,i,a){return new t(null!=e?e:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=a?a:this.right)}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}},{key:"min",value:function(){return this.left.isEmpty()?this:this.left.min()}},{key:"minKey",value:function(){return this.min().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(e,t,n){var r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}},{key:"removeMin",value:function(){if(this.left.isEmpty())return t.EMPTY;var e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}},{key:"remove",value:function(e,n){var r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===n(e,i.key)){if(i.right.isEmpty())return t.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}},{key:"isRed",value:function(){return this.color}},{key:"fixUp",value:function(){var e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}},{key:"moveRedLeft",value:function(){var e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}},{key:"moveRedRight",value:function(){var e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}},{key:"rotateLeft",value:function(){var e=this.copy(null,null,t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}},{key:"rotateRight",value:function(){var e=this.copy(null,null,t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}},{key:"colorFlip",value:function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}},{key:"checkMaxDepth",value:function(){var e=this.check();return Math.pow(2,e)<=this.size+1}},{key:"check",value:function(){if(this.isRed()&&this.left.isRed())throw Ka();if(this.right.isRed())throw Ka();var e=this.left.check();if(e!==this.right.check())throw Ka();return e+(this.isRed()?0:1)}}]),t}();As.EMPTY=null,As.RED=!0,As.BLACK=!1,As.EMPTY=new(function(){"use strict";function t(){e(s)(this,t),this.size=0}return e(c)(t,[{key:"key",get:function(){throw Ka()}},{key:"value",get:function(){throw Ka()}},{key:"color",get:function(){throw Ka()}},{key:"left",get:function(){throw Ka()}},{key:"right",get:function(){throw Ka()}},{key:"copy",value:function(e,t,n,r,i){return this}},{key:"insert",value:function(e,t,n){return new As(e,t)}},{key:"remove",value:function(e,t){return this}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(e){return!1}},{key:"reverseTraversal",value:function(e){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"isRed",value:function(){return!1}},{key:"checkMaxDepth",value:function(){return!0}},{key:"check",value:function(){return 0}}]),t}());
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ns=function(){"use strict";function t(n){e(s)(this,t),this.comparator=n,this.data=new Ss(this.comparator)}return e(c)(t,[{key:"has",value:function(e){return null!==this.data.get(e)}},{key:"first",value:function(){return this.data.minKey()}},{key:"last",value:function(){return this.data.maxKey()}},{key:"size",get:function(){return this.data.size}},{key:"indexOf",value:function(e){return this.data.indexOf(e)}},{key:"forEach",value:function(e){this.data.inorderTraversal((function(t,n){return e(t),!1}))}},{key:"forEachInRange",value:function(e,t){for(var n=this.data.getIteratorFrom(e[0]);n.hasNext();){var r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}},{key:"forEachWhile",value:function(e,t){var n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}},{key:"firstAfterOrEqual",value:function(e){var t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}},{key:"getIterator",value:function(){return new Os(this.data.getIterator())}},{key:"getIteratorFrom",value:function(e){return new Os(this.data.getIteratorFrom(e))}},{key:"add",value:function(e){return this.copy(this.data.remove(e).insert(e,!0))}},{key:"delete",value:function(e){return this.has(e)?this.copy(this.data.remove(e)):this}},{key:"isEmpty",value:function(){return this.data.isEmpty()}},{key:"unionWith",value:function(e){var t=this;return t.size<e.size&&(t=e,e=this),e.forEach((function(e){t=t.add(e)})),t}},{key:"isEqual",value:function(e){if(!(e instanceof t))return!1;if(this.size!==e.size)return!1;for(var n=this.data.getIterator(),r=e.data.getIterator();n.hasNext();){var i=n.getNext().key,a=r.getNext().key;if(0!==this.comparator(i,a))return!1}return!0}},{key:"toArray",value:function(){var e=[];return this.forEach((function(t){e.push(t)})),e}},{key:"toString",value:function(){var e=[];return this.forEach((function(t){return e.push(t)})),"SortedSet("+e.toString()+")"}},{key:"copy",value:function(e){var n=new t(this.comparator);return n.data=e,n}}]),t}(),Os=function(){"use strict";function t(n){e(s)(this,t),this.iter=n}return e(c)(t,[{key:"getNext",value:function(){return this.iter.getNext().key}},{key:"hasNext",value:function(){return this.iter.hasNext()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ds=function(){"use strict";function t(n){e(s)(this,t),this.fields=n,n.sort(fo.comparator)}return e(c)(t,[{key:"unionWith",value:function(e){var n=new Ns(fo.comparator),r=!0,i=!1,a=void 0;try{for(var o,s=this.fields[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;n=n.add(u)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}var c=!0,l=!1,h=void 0;try{for(var f,d=e[Symbol.iterator]();!(c=(f=d.next()).done);c=!0){var v=f.value;n=n.add(v)}}catch(e){l=!0,h=e}finally{try{c||null==d.return||d.return()}finally{if(l)throw h}}return new t(n.toArray())}},{key:"covers",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=this.fields[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){if(i.value.isPrefixOf(e))return!0}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return!1}},{key:"isEqual",value:function(e){return oo(this.fields,e.fields,(function(e,t){return e.isEqual(t)}))}}],[{key:"empty",value:function(){return new t([])}}]),t}(),Rs=function(){"use strict";function t(n){e(s)(this,t),this.value=n}return e(c)(t,[{key:"field",value:function(e){if(e.isEmpty())return this.value;for(var t=this.value,n=0;n<e.length-1;++n)if(!ns(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}},{key:"set",value:function(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=rs(t)}},{key:"setAll",value:function(e){var t=this,n=fo.emptyPath(),r={},i=[];e.forEach((function(e,a){if(!n.isImmediateParentOf(a)){var o=t.getFieldsMap(n);t.applyChanges(o,r,i),r={},i=[],n=a.popLast()}e?r[a.lastSegment()]=rs(e):i.push(a.lastSegment())}));var a=this.getFieldsMap(n);this.applyChanges(a,r,i)}},{key:"delete",value:function(e){var t=this.field(e.popLast());ns(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}},{key:"isEqual",value:function(e){return zo(this.value,e.value)}},{key:"getFieldsMap",value:function(e){var t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(var n=0;n<e.length;++n){var r=t.mapValue.fields[e.get(n)];ns(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}},{key:"applyChanges",value:function(e,t,n){No(t,(function(t,n){return e[t]=n}));var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;delete e[u]}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"clone",value:function(){return new t(rs(this.value))}}],[{key:"empty",value:function(){return new t({mapValue:{}})}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(e){var t=[];return No(e.fields,(function(e,n){var r=new fo([e]);if(ns(n)){var i=Ls(n.mapValue).fields,a=!0,o=!1,s=void 0;if(0===i.length)t.push(r);else try{for(var u,c=i[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;t.push(r.child(l))}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}}else t.push(r)})),new Ds(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}var Ps=function(){"use strict";function t(n,r,i,a,o,u,c){e(s)(this,t),this.key=n,this.documentType=r,this.version=i,this.readTime=a,this.createTime=o,this.data=u,this.documentState=c}return e(c)(t,[{key:"convertToFoundDocument",value:function(e,t){return!this.createTime.isEqual(uo.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}},{key:"convertToNoDocument",value:function(e){return this.version=e,this.documentType=2,this.data=Rs.empty(),this.documentState=0,this}},{key:"convertToUnknownDocument",value:function(e){return this.version=e,this.documentType=3,this.data=Rs.empty(),this.documentState=2,this}},{key:"setHasCommittedMutations",value:function(){return this.documentState=2,this}},{key:"setHasLocalMutations",value:function(){return this.documentState=1,this.version=uo.min(),this}},{key:"setReadTime",value:function(e){return this.readTime=e,this}},{key:"hasLocalMutations",get:function(){return 1===this.documentState}},{key:"hasCommittedMutations",get:function(){return 2===this.documentState}},{key:"hasPendingWrites",get:function(){return this.hasLocalMutations||this.hasCommittedMutations}},{key:"isValidDocument",value:function(){return 0!==this.documentType}},{key:"isFoundDocument",value:function(){return 1===this.documentType}},{key:"isNoDocument",value:function(){return 2===this.documentType}},{key:"isUnknownDocument",value:function(){return 3===this.documentType}},{key:"isEqual",value:function(e){return e instanceof t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}},{key:"mutableCopy",value:function(){return new t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}},{key:"toString",value:function(){return"Document(".concat(this.key,", ").concat(this.version,", ").concat(JSON.stringify(this.data.value),", {createTime: ").concat(this.createTime,"}), {documentType: ").concat(this.documentType,"}), {documentState: ").concat(this.documentState,"})")}}],[{key:"newInvalidDocument",value:function(e){return new t(e,0,uo.min(),uo.min(),uo.min(),Rs.empty(),0)}},{key:"newFoundDocument",value:function(e,n,r,i){return new t(e,1,n,uo.min(),r,i,0)}},{key:"newNoDocument",value:function(e,n){return new t(e,2,n,uo.min(),uo.min(),Rs.empty(),0)}},{key:"newUnknownDocument",value:function(e,n){return new t(e,3,n,uo.min(),uo.min(),Rs.empty(),2)}}]),t}(),Ms=function t(n){"use strict";var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;e(s)(this,t),this.path=n,this.collectionGroup=r,this.orderBy=i,this.filters=a,this.limit=o,this.startAt=u,this.endAt=c,this.ft=null};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;return new Ms(e,t,n,r,i,a,o)}function Us(e){var t=Wa(e);if(null===t.ft){var n=t.path.canonicalString();null!==t.collectionGroup&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map((function(e){return vs(e)})).join(","),n+="|ob:",n+=t.orderBy.map((function(e){return(t=e).field.canonicalString()+t.dir;var t})).join(","),Do(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((function(e){return Jo(e)})).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((function(e){return Jo(e)})).join(",")),t.ft=n}return t.ft}function Vs(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(var n=0;n<e.orderBy.length;n++)if(!_s(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(var r=0;r<e.filters.length;r++)if(!ps(e.filters[r],t.filters[r]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ss(e.startAt,t.startAt)&&ss(e.endAt,t.endAt)}function js(e){return vo.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Bs=function t(n){"use strict";var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"F",c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null;e(s)(this,t),this.path=n,this.collectionGroup=r,this.explicitOrderBy=i,this.filters=a,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt};function qs(e,t,n,r,i,a,o,s){return new Bs(e,t,n,r,i,a,o,s)}function Ks(e){return new Bs(e)}function Hs(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Ws(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function zs(e){var t=!0,n=!1,r=void 0;try{for(var i,a=e.filters[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value.getFirstInequalityField();if(null!==o)return o}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return null}function Gs(e){return null!==e.collectionGroup}function Qs(e){var t=Wa(e);if(null===t.dt){t.dt=[];var n=zs(t),r=Ws(t);if(null!==n&&null===r)n.isKeyField()||t.dt.push(new Is(n)),t.dt.push(new Is(fo.keyField(),"asc"));else{var i=!1,a=!0,o=!1,s=void 0;try{for(var u,c=t.explicitOrderBy[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;t.dt.push(l),l.field.isKeyField()&&(i=!0)}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}if(!i){var h=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new Is(fo.keyField(),h))}}}return t.dt}function Xs(e){var t=Wa(e);if(!t._t)if("F"===t.limitType)t._t=Fs(t.path,t.collectionGroup,Qs(t),t.filters,t.limit,t.startAt,t.endAt);else{var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=Qs(t)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value,c="desc"===u.dir?"asc":"desc";n.push(new Is(u.field,c))}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}var l=t.endAt?new as(t.endAt.position,t.endAt.inclusive):null,h=t.startAt?new as(t.startAt.position,t.startAt.inclusive):null;t._t=Fs(t.path,t.collectionGroup,n,t.filters,t.limit,l,h)}return t._t}function Js(e,t,n){return new Bs(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ys(e,t){return Vs(Xs(e),Xs(t))&&e.limitType===t.limitType}function $s(e){return"".concat(Us(Xs(e)),"|lt:").concat(e.limitType)}function Zs(e){return"Query(target=".concat((t=Xs(e),n=t.path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=", filters: [".concat(t.filters.map((function(e){return ys(e)})).join(", "),"]")),Do(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=", orderBy: [".concat(t.orderBy.map((function(e){return"".concat((t=e).field.canonicalString()," (").concat(t.dir,")");var t})).join(", "),"]")),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((function(e){return Jo(e)})).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((function(e){return Jo(e)})).join(",")),"Target(".concat(n,")")),"; limitType=").concat(e.limitType,")");var t,n}function eu(e,t){return t.isFoundDocument()&&(i=e,o=(a=t).key.path,null!==i.collectionGroup?a.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):vo.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o))&&function(e,t){var n=!0,r=!1,i=void 0;try{for(var a,o=Qs(e)[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(!s.field.isKeyField()&&null===t.data.field(s.field))return!1}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}(e,t)&&function(e,t){var n=!0,r=!1,i=void 0;try{for(var a,o=e.filters[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){if(!a.value.matches(t))return!1}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){var r=os(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,Qs(n),r)||n.endAt&&!function(e,t,n){var r=os(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,Qs(n),r)));var n,r,i,a,o}function tu(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function nu(e){return function(t,n){var r=!1,i=!0,a=!1,o=void 0;try{for(var s,u=Qs(e)[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value,l=ru(c,t,n);if(0!==l)return l;r=r||c.field.isKeyField()}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return 0}}function ru(e,t,n){var r,i,a,o,s=e.field.isKeyField()?vo.comparator(t.key,n.key):(r=e.field,i=n,a=t.data.field(r),o=i.data.field(r),null!==a&&null!==o?Qo(a,o):Ka());switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return Ka()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ro(t)?"-0":t}}function au(e){return{integerValue:""+e}}function ou(e,t){return Lo(t)?au(t):iu(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var su=function t(){"use strict";e(s)(this,t),this._=void 0};function uu(e,t,n){return e instanceof hu?(i=t,a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:(r=n).seconds,nanos:r.nanoseconds}}}},i&&(a.fields.__previous_value__=i),{mapValue:a}):e instanceof fu?du(e,t):e instanceof vu?pu(e,t):function(e,t){var n=lu(e,t),r=mu(n)+mu(e.gt);return $o(n)&&$o(e.gt)?au(r):iu(e.yt,r)}(e,t);var r,i,a}function cu(e,t,n){return e instanceof fu?du(e,t):e instanceof vu?pu(e,t):n}function lu(e,t){var n,r;return e instanceof yu?$o(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null}var hu=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(){return e(s)(this,r),n.apply(this,arguments)}return r}(su),fu=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(t){var i;return e(s)(this,r),(i=n.call(this)).elements=t,e(y)(i)}return r}(su);function du(e,t){var n=gu(t),r=!0,i=!1,a=void 0;try{for(var o,s=function(e,t){var r=t.value;n.some((function(e){return zo(e,r)}))||n.push(r)},u=e.elements[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return{arrayValue:{values:n}}}var vu=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(t){var i;return e(s)(this,r),(i=n.call(this)).elements=t,e(y)(i)}return r}(su);function pu(e,t){var n=gu(t),r=!0,i=!1,a=void 0;try{for(var o,s=function(e,t){var r=t.value;n=n.filter((function(e){return!zo(e,r)}))},u=e.elements[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return{arrayValue:{values:n}}}var yu=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(t,i){var a;return e(s)(this,r),(a=n.call(this)).yt=t,a.gt=i,e(y)(a)}return r}(su);function mu(e){return Vo(e.integerValue||e.doubleValue)}function gu(e){return Zo(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ku=function t(n,r){"use strict";e(s)(this,t),this.version=n,this.transformResults=r},wu=function(){"use strict";function t(n,r){e(s)(this,t),this.updateTime=n,this.exists=r}return e(c)(t,[{key:"isNone",get:function(){return void 0===this.updateTime&&void 0===this.exists}},{key:"isEqual",value:function(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}],[{key:"none",value:function(){return new t}},{key:"exists",value:function(e){return new t(void 0,e)}},{key:"updateTime",value:function(e){return new t(e)}}]),t}();function bu(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}var xu=function t(){"use strict";e(s)(this,t)};function Tu(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Pu(e.key,wu.none()):new Cu(e.key,e.data,wu.none());var n=e.data,r=Rs.empty(),i=new Ns(fo.comparator),a=!0,o=!1,s=void 0;try{for(var u,c=t.fields[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;if(!i.has(l)){var h=n.field(l);null===h&&l.length>1&&(l=l.popLast(),h=n.field(l)),null===h?r.delete(l):r.set(l,h),i=i.add(l)}}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}return new Au(e.key,r,new Ds(i.toArray()),wu.none())}function Eu(e,t,n){var r,i,a,o,s;e instanceof Cu?(i=t,a=n,o=(r=e).value.clone(),s=Ou(r.fieldTransforms,i,a.transformResults),o.setAll(s),i.convertToFoundDocument(a.version,o).setHasCommittedMutations()):e instanceof Au?function(e,t,n){if(bu(e.precondition,t)){var r=Ou(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Nu(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}else t.convertToUnknownDocument(n.version)}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Iu(e,t,n,r){return e instanceof Cu?function(e,t,n,r){if(!bu(e.precondition,t))return n;var i=e.value.clone(),a=Du(e.fieldTransforms,r,t);return i.setAll(a),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof Au?function(e,t,n,r){if(!bu(e.precondition,t))return n;var i=Du(e.fieldTransforms,r,t),a=t.data;return a.setAll(Nu(e)),a.setAll(i),t.convertToFoundDocument(t.version,a).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((function(e){return e.field})))}(e,t,n,r):(i=t,a=n,bu(e.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):a);var i,a}function _u(e,t){var n=null,r=!0,i=!1,a=void 0;try{for(var o,s=e.fieldTransforms[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value,c=t.data.field(u.field),l=lu(u.transform,c||null);null!=l&&(null===n&&(n=Rs.empty()),n.set(u.field,l))}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n||null}function Su(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&oo(n,r,(function(e,t){return function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof fu&&r instanceof fu||n instanceof vu&&r instanceof vu?oo(n.elements,r.elements,zo):n instanceof yu&&r instanceof yu?zo(n.gt,r.gt):n instanceof hu&&r instanceof hu);var n,r}(e,t)}))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask));var n,r}var Cu=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(t,i,a){var o,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return e(s)(this,r),(o=n.call(this)).key=t,o.value=i,o.precondition=a,o.fieldTransforms=u,o.type=0,e(y)(o)}return e(c)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(xu),Au=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(t,i,a,o){var u,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];return e(s)(this,r),(u=n.call(this)).key=t,u.data=i,u.fieldMask=a,u.precondition=o,u.fieldTransforms=c,u.type=1,e(y)(u)}return e(c)(r,[{key:"getFieldMask",value:function(){return this.fieldMask}}]),r}(xu);function Nu(e){var t=new Map;return e.fieldMask.fields.forEach((function(n){if(!n.isEmpty()){var r=e.data.field(n);t.set(n,r)}})),t}function Ou(e,t,n){var r=new Map;Ha(e.length===n.length);for(var i=0;i<n.length;i++){var a=e[i],o=a.transform,s=t.data.field(a.field);r.set(a.field,cu(o,s,n[i]))}return r}function Du(e,t,n){var r=new Map,i=!0,a=!1,o=void 0;try{for(var s,u=e[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value,l=c.transform,h=n.data.field(c.field);r.set(c.field,uu(l,h,t))}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return r}var Ru,Lu,Pu=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(t,i){var a;return e(s)(this,r),(a=n.call(this)).key=t,a.precondition=i,a.type=2,a.fieldTransforms=[],e(y)(a)}return e(c)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(xu),Mu=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(t,i){var a;return e(s)(this,r),(a=n.call(this)).key=t,a.precondition=i,a.type=3,a.fieldTransforms=[],e(y)(a)}return e(c)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(xu),Fu=function t(n){"use strict";e(s)(this,t),this.count=n};function Uu(e){switch(e){default:return Ka();case za.CANCELLED:case za.UNKNOWN:case za.DEADLINE_EXCEEDED:case za.RESOURCE_EXHAUSTED:case za.INTERNAL:case za.UNAVAILABLE:case za.UNAUTHENTICATED:return!1;case za.INVALID_ARGUMENT:case za.NOT_FOUND:case za.ALREADY_EXISTS:case za.PERMISSION_DENIED:case za.FAILED_PRECONDITION:case za.ABORTED:case za.OUT_OF_RANGE:case za.UNIMPLEMENTED:case za.DATA_LOSS:return!0}}function Vu(e){if(void 0===e)return ja("GRPC error has no .code"),za.UNKNOWN;switch(e){case Ru.OK:return za.OK;case Ru.CANCELLED:return za.CANCELLED;case Ru.UNKNOWN:return za.UNKNOWN;case Ru.DEADLINE_EXCEEDED:return za.DEADLINE_EXCEEDED;case Ru.RESOURCE_EXHAUSTED:return za.RESOURCE_EXHAUSTED;case Ru.INTERNAL:return za.INTERNAL;case Ru.UNAVAILABLE:return za.UNAVAILABLE;case Ru.UNAUTHENTICATED:return za.UNAUTHENTICATED;case Ru.INVALID_ARGUMENT:return za.INVALID_ARGUMENT;case Ru.NOT_FOUND:return za.NOT_FOUND;case Ru.ALREADY_EXISTS:return za.ALREADY_EXISTS;case Ru.PERMISSION_DENIED:return za.PERMISSION_DENIED;case Ru.FAILED_PRECONDITION:return za.FAILED_PRECONDITION;case Ru.ABORTED:return za.ABORTED;case Ru.OUT_OF_RANGE:return za.OUT_OF_RANGE;case Ru.UNIMPLEMENTED:return za.UNIMPLEMENTED;case Ru.DATA_LOSS:return za.DATA_LOSS;default:return Ka()}}(Lu=Ru||(Ru={}))[Lu.OK=0]="OK",Lu[Lu.CANCELLED=1]="CANCELLED",Lu[Lu.UNKNOWN=2]="UNKNOWN",Lu[Lu.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Lu[Lu.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Lu[Lu.NOT_FOUND=5]="NOT_FOUND",Lu[Lu.ALREADY_EXISTS=6]="ALREADY_EXISTS",Lu[Lu.PERMISSION_DENIED=7]="PERMISSION_DENIED",Lu[Lu.UNAUTHENTICATED=16]="UNAUTHENTICATED",Lu[Lu.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Lu[Lu.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Lu[Lu.ABORTED=10]="ABORTED",Lu[Lu.OUT_OF_RANGE=11]="OUT_OF_RANGE",Lu[Lu.UNIMPLEMENTED=12]="UNIMPLEMENTED",Lu[Lu.INTERNAL=13]="INTERNAL",Lu[Lu.UNAVAILABLE=14]="UNAVAILABLE",Lu[Lu.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ju=function(){"use strict";function t(n,r){e(s)(this,t),this.mapKeyFn=n,this.equalsFn=r,this.inner={},this.innerSize=0}return e(c)(t,[{key:"get",value:function(t){var n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){var i=!0,a=!1,o=void 0;try{for(var s,u=r[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=e(m)(s.value,2),l=c[0],h=c[1];if(this.equalsFn(l,t))return h}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}}}},{key:"has",value:function(e){return void 0!==this.get(e)}},{key:"set",value:function(e,t){var n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(var i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}},{key:"delete",value:function(e){var t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(var r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}},{key:"forEach",value:function(t){No(this.inner,(function(n,r){var i=!0,a=!1,o=void 0;try{for(var s,u=r[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=e(m)(s.value,2),l=c[0],h=c[1];t(l,h)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}}))}},{key:"isEmpty",value:function(){return Oo(this.inner)}},{key:"size",value:function(){return this.innerSize}}]),t}(),Bu=new Ss(vo.comparator);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(){return Bu}var Ku=new Ss(vo.comparator);function Hu(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=Ku,i=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;r=r.insert(c.key,c)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return r}function Wu(e){var t=Ku;return e.forEach((function(e,n){return t=t.insert(e,n.overlayedDocument)})),t}function zu(){return Qu()}function Gu(){return Qu()}function Qu(){return new ju((function(e){return e.toString()}),(function(e,t){return e.isEqual(t)}))}var Xu=new Ss(vo.comparator),Ju=new Ns(vo.comparator);function Yu(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=Ju,i=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;r=r.add(c)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return r}var $u=new Ns(ao);function Zu(){return $u}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ec=function(){"use strict";function t(n,r,i,a,o){e(s)(this,t),this.snapshotVersion=n,this.targetChanges=r,this.targetMismatches=i,this.documentUpdates=a,this.resolvedLimboDocuments=o}return e(c)(t,null,[{key:"createSynthesizedRemoteEventForCurrentChange",value:function(e,n,r){var i=new Map;return i.set(e,tc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new t(uo.min(),i,Zu(),qu(),Yu())}}]),t}(),tc=function(){"use strict";function t(n,r,i,a,o){e(s)(this,t),this.resumeToken=n,this.current=r,this.addedDocuments=i,this.modifiedDocuments=a,this.removedDocuments=o}return e(c)(t,null,[{key:"createSynthesizedTargetChangeForCurrentChange",value:function(e,n,r){return new t(r,n,Yu(),Yu(),Yu())}}]),t}(),nc=function t(n,r,i,a){"use strict";e(s)(this,t),this.It=n,this.removedTargetIds=r,this.key=i,this.Tt=a},rc=function t(n,r){"use strict";e(s)(this,t),this.targetId=n,this.Et=r},ic=function t(n,r){"use strict";var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Mo.EMPTY_BYTE_STRING,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;e(s)(this,t),this.state=n,this.targetIds=r,this.resumeToken=i,this.cause=a},ac=function(){"use strict";function t(){e(s)(this,t),this.At=0,this.Rt=uc(),this.bt=Mo.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}return e(c)(t,[{key:"current",get:function(){return this.Pt}},{key:"resumeToken",get:function(){return this.bt}},{key:"Vt",get:function(){return 0!==this.At}},{key:"St",get:function(){return this.vt}},{key:"Dt",value:function(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}},{key:"Ct",value:function(){var e=Yu(),t=Yu(),n=Yu();return this.Rt.forEach((function(r,i){switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Ka()}})),new tc(this.bt,this.Pt,e,t,n)}},{key:"xt",value:function(){this.vt=!1,this.Rt=uc()}},{key:"Nt",value:function(e,t){this.vt=!0,this.Rt=this.Rt.insert(e,t)}},{key:"kt",value:function(e){this.vt=!0,this.Rt=this.Rt.remove(e)}},{key:"Ot",value:function(){this.At+=1}},{key:"Mt",value:function(){this.At-=1}},{key:"Ft",value:function(){this.vt=!0,this.Pt=!0}}]),t}(),oc=function(){"use strict";function t(n){e(s)(this,t),this.$t=n,this.Bt=new Map,this.Lt=qu(),this.qt=sc(),this.Ut=new Ns(ao)}return e(c)(t,[{key:"Kt",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=e.It[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;e.Tt&&e.Tt.isFoundDocument()?this.Gt(o,e.Tt):this.Qt(o,e.key,e.Tt)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}var s=!0,u=!1,c=void 0;try{for(var l,h=e.removedTargetIds[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var f=l.value;this.Qt(f,e.key,e.Tt)}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}}},{key:"jt",value:function(e){var t=this;this.forEachTarget(e,(function(n){var r=t.Wt(n);switch(e.state){case 0:t.zt(n)&&r.Dt(e.resumeToken);break;case 1:r.Mt(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.Mt(),r.Vt||t.removeTarget(n);break;case 3:t.zt(n)&&(r.Ft(),r.Dt(e.resumeToken));break;case 4:t.zt(n)&&(t.Ht(n),r.Dt(e.resumeToken));break;default:Ka()}}))}},{key:"forEachTarget",value:function(e,t){var n=this;e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach((function(e,r){n.zt(r)&&t(r)}))}},{key:"Jt",value:function(e){var t=e.targetId,n=e.Et.count,r=this.Yt(t);if(r){var i=r.target;if(js(i))if(0===n){var a=new vo(i.path);this.Qt(t,a,Ps.newNoDocument(a,uo.min()))}else Ha(1===n);else this.Xt(t)!==n&&(this.Ht(t),this.Ut=this.Ut.add(t))}}},{key:"Zt",value:function(e){var t=this,n=new Map;this.Bt.forEach((function(r,i){var a=t.Yt(i);if(a){if(r.current&&js(a.target)){var o=new vo(a.target.path);null!==t.Lt.get(o)||t.te(i,o)||t.Qt(i,o,Ps.newNoDocument(o,e))}r.St&&(n.set(i,r.Ct()),r.xt())}}));var r=Yu();this.qt.forEach((function(e,n){var i=t,a=!0;n.forEachWhile((function(e){var t=i.Yt(e);return!t||2===t.purpose||(a=!1,!1)})),a&&(r=r.add(e))})),this.Lt.forEach((function(t,n){return n.setReadTime(e)}));var i=new ec(e,n,this.Ut,this.Lt,r);return this.Lt=qu(),this.qt=sc(),this.Ut=new Ns(ao),i}},{key:"Gt",value:function(e,t){if(this.zt(e)){var n=this.te(e,t.key)?2:0;this.Wt(e).Nt(t.key,n),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}}},{key:"Qt",value:function(e,t,n){if(this.zt(e)){var r=this.Wt(e);this.te(e,t)?r.Nt(t,1):r.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),n&&(this.Lt=this.Lt.insert(t,n))}}},{key:"removeTarget",value:function(e){this.Bt.delete(e)}},{key:"Xt",value:function(e){var t=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}},{key:"Ot",value:function(e){this.Wt(e).Ot()}},{key:"Wt",value:function(e){var t=this.Bt.get(e);return t||(t=new ac,this.Bt.set(e,t)),t}},{key:"ee",value:function(e){var t=this.qt.get(e);return t||(t=new Ns(ao),this.qt=this.qt.insert(e,t)),t}},{key:"zt",value:function(e){var t=null!==this.Yt(e);return t||Va("WatchChangeAggregator","Detected inactive target",e),t}},{key:"Yt",value:function(e){var t=this.Bt.get(e);return t&&t.Vt?null:this.$t.ne(e)}},{key:"Ht",value:function(e){var t=this;this.Bt.set(e,new ac),this.$t.getRemoteKeysForTarget(e).forEach((function(n){t.Qt(e,n,null)}))}},{key:"te",value:function(e,t){return this.$t.getRemoteKeysForTarget(e).has(t)}}]),t}();function sc(){return new Ss(vo.comparator)}function uc(){return new Ss(vo.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cc={asc:"ASCENDING",desc:"DESCENDING"},lc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},hc={and:"AND",or:"OR"},fc=function t(n,r){"use strict";e(s)(this,t),this.databaseId=n,this.wt=r};function dc(e,t){return e.wt?"".concat(new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z",""),".").concat(("000000000"+t.nanoseconds).slice(-9),"Z"):{seconds:""+t.seconds,nanos:t.nanoseconds}}function vc(e,t){return e.wt?t.toBase64():t.toUint8Array()}function pc(e,t){return dc(e,t.toTimestamp())}function yc(e){return Ha(!!e),uo.fromTimestamp((t=Uo(e),new so(t.seconds,t.nanos)));var t}function mc(e,t){return(n=e,new lo(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function gc(e){var t=lo.fromString(e);return Ha(Mc(t)),t}function kc(e,t){return mc(e.databaseId,t.path)}function wc(e,t){var n=gc(t);if(n.get(1)!==e.databaseId.projectId)throw new Ga(za.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Ga(za.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new vo(Ec(n))}function bc(e,t){return mc(e.databaseId,t)}function xc(e){var t=gc(e);return 4===t.length?lo.emptyPath():Ec(t)}function Tc(e){return new lo(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Ec(e){return Ha(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Ic(e,t,n){return{name:kc(e,t),fields:n.value.mapValue.fields}}function _c(e,t){var n,r,i;if(t instanceof Cu)n={update:Ic(e,t.key,t.value)};else if(t instanceof Pu)n={delete:kc(e,t.key)};else if(t instanceof Au)n={update:Ic(e,t.key,t.data),updateMask:(r=t.fieldMask,i=[],r.fields.forEach((function(e){return i.push(e.canonicalString())})),{fieldPaths:i})};else{if(!(t instanceof Mu))return Ka();n={verify:kc(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((function(e){return function(e,t){var n=t.transform;if(n instanceof hu)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof fu)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof vu)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof yu)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw Ka()}(0,e)}))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:pc(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Ka()}(e,t.precondition)),n}function Sc(e,t){return{documents:[bc(e,t.path)]}}function Cc(e,t){var n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=bc(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=bc(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);var i=function(e){if(0!==e.length)return Pc(ls.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);var a=function(e){if(0!==e.length)return e.map((function(e){return{field:Rc((t=e).field),direction:Oc(t.dir)};var t}))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);var o,s,u,c=(o=e,s=t.limit,o.wt||Do(s)?s:{value:s});return null!==c&&(n.structuredQuery.limit=c),t.startAt&&(n.structuredQuery.startAt={before:(u=t.startAt).inclusive,values:u.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Ac(e){var t=xc(e.parent),n=e.structuredQuery,r=n.from?n.from.length:0,i=null;if(r>0){Ha(1===r);var a=n.from[0];a.allDescendants?i=a.collectionId:t=t.child(a.collectionId)}var o,s,u=[];n.where&&(o=n.where,u=(s=Nc(o))instanceof ls&&fs(s)?s.getFilters():[s]);var c=[];n.orderBy&&(c=n.orderBy.map((function(e){return new Is(Lc((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));var l=null;n.limit&&(l=function(e){var t;return Do(t="object"==typeof e?e.value:e)?null:t}(n.limit));var h=null;n.startAt&&(h=function(e){var t=!!e.before,n=e.values||[];return new as(n,t)}(n.startAt));var f=null;return n.endAt&&(f=function(e){var t=!e.before,n=e.values||[];return new as(n,t)}(n.endAt)),qs(t,i,c,u,l,"F",h,f)}function Nc(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":var t=Lc(e.unaryFilter.field);return cs.create(t,"==",{doubleValue:NaN});case"IS_NULL":var n=Lc(e.unaryFilter.field);return cs.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":var r=Lc(e.unaryFilter.field);return cs.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":var i=Lc(e.unaryFilter.field);return cs.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Ka()}}(e):void 0!==e.fieldFilter?(n=e,cs.create(Lc(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ka()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==e.compositeFilter?(t=e,ls.create(t.compositeFilter.filters.map((function(e){return Nc(e)})),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Ka()}}(t.compositeFilter.op))):Ka();var t,n}function Oc(e){return cc[e]}function Dc(e){return lc[e]}function Rc(e){return{fieldPath:e.canonicalString()}}function Lc(e){return fo.fromServerFormat(e.fieldPath)}function Pc(e){return e instanceof cs?function(e){if("=="===e.op){if(ts(e.value))return{unaryFilter:{field:Rc(e.field),op:"IS_NAN"}};if(es(e.value))return{unaryFilter:{field:Rc(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ts(e.value))return{unaryFilter:{field:Rc(e.field),op:"IS_NOT_NAN"}};if(es(e.value))return{unaryFilter:{field:Rc(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Rc(e.field),op:Dc(e.op),value:e.value}}}(e):e instanceof ls?(r=(t=e).getFilters().map((function(e){return Pc(e)})),1===r.length?r[0]:{compositeFilter:{op:(n=t.op,hc[n]),filters:r}}):Ka();var t,n,r}function Mc(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fc=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Uc=(e(g)(Fc).concat(["documentOverlays"]),["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"]),Vc=Uc;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */e(g)(Vc).concat(["indexConfiguration","indexState","indexEntries"]);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var jc=function(){"use strict";function t(n,r,i,a){e(s)(this,t),this.batchId=n,this.localWriteTime=r,this.baseMutations=i,this.mutations=a}return e(c)(t,[{key:"applyToRemoteDocument",value:function(e,t){for(var n=t.mutationResults,r=0;r<this.mutations.length;r++){var i=this.mutations[r];i.key.isEqual(e.key)&&Eu(i,e,n[r])}}},{key:"applyToLocalView",value:function(e,t){var n=!0,r=!1,i=void 0;try{for(var a,o=this.baseMutations[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;s.key.isEqual(e.key)&&(t=Iu(s,e,t,this.localWriteTime))}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}var u=!0,c=!1,l=void 0;try{for(var h,f=this.mutations[Symbol.iterator]();!(u=(h=f.next()).done);u=!0){var d=h.value;d.key.isEqual(e.key)&&(t=Iu(d,e,t,this.localWriteTime))}}catch(e){c=!0,l=e}finally{try{u||null==f.return||f.return()}finally{if(c)throw l}}return t}},{key:"applyToLocalDocumentSet",value:function(e,t){var n=this,r=Gu();return this.mutations.forEach((function(i){var a=e.get(i.key),o=a.overlayedDocument,s=n.applyToLocalView(o,a.mutatedFields),u=Tu(o,s=t.has(i.key)?null:s);null!==u&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(uo.min())})),r}},{key:"keys",value:function(){return this.mutations.reduce((function(e,t){return e.add(t.key)}),Yu())}},{key:"isEqual",value:function(e){return this.batchId===e.batchId&&oo(this.mutations,e.mutations,(function(e,t){return Su(e,t)}))&&oo(this.baseMutations,e.baseMutations,(function(e,t){return Su(e,t)}))}}]),t}(),Bc=function(){"use strict";function t(n,r,i,a){e(s)(this,t),this.batch=n,this.commitVersion=r,this.mutationResults=i,this.docVersions=a}return e(c)(t,null,[{key:"from",value:function(e,n,r){Ha(e.mutations.length===r.length);for(var i=Xu,a=e.mutations,o=0;o<a.length;o++)i=i.insert(a[o].key,r[o].version);return new t(e,n,r,i)}}]),t}(),qc=function(){"use strict";function t(n,r){e(s)(this,t),this.largestBatchId=n,this.mutation=r}return e(c)(t,[{key:"getKey",value:function(){return this.mutation.key}},{key:"isEqual",value:function(e){return null!==e&&this.mutation===e.mutation}},{key:"toString",value:function(){return"Overlay{\n      largestBatchId: ".concat(this.largestBatchId,",\n      mutation: ").concat(this.mutation.toString(),"\n    }")}}]),t}(),Kc=function(){"use strict";function t(n,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:uo.min(),u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:uo.min(),c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:Mo.EMPTY_BYTE_STRING;e(s)(this,t),this.target=n,this.targetId=r,this.purpose=i,this.sequenceNumber=a,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=c}return e(c)(t,[{key:"withSequenceNumber",value:function(e){return new t(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}},{key:"withResumeToken",value:function(e,n){return new t(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}},{key:"withLastLimboFreeSnapshotVersion",value:function(e){return new t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}]),t}(),Hc=function t(n){"use strict";e(s)(this,t),this.ie=n};function Wc(e){var t=Ac({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Js(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zc=function(){"use strict";function t(){e(s)(this,t)}return e(c)(t,[{key:"ue",value:function(e,t){this.ce(e,t),t.ae()}},{key:"ce",value:function(e,t){if("nullValue"in e)this.he(t,5);else if("booleanValue"in e)this.he(t,10),t.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(t,15),t.le(Vo(e.integerValue));else if("doubleValue"in e){var n=Vo(e.doubleValue);isNaN(n)?this.he(t,13):(this.he(t,15),Ro(n)?t.le(0):t.le(n))}else if("timestampValue"in e){var r=e.timestampValue;this.he(t,20),"string"==typeof r?t.fe(r):(t.fe("".concat(r.seconds||"")),t.le(r.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,t),this._e(t);else if("bytesValue"in e)this.he(t,30),t.we(jo(e.bytesValue)),this._e(t);else if("referenceValue"in e)this.me(e.referenceValue,t);else if("geoPointValue"in e){var i=e.geoPointValue;this.he(t,45),t.le(i.latitude||0),t.le(i.longitude||0)}else"mapValue"in e?is(e)?this.he(t,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,t),this._e(t)):"arrayValue"in e?(this.ye(e.arrayValue,t),this._e(t)):Ka()}},{key:"de",value:function(e,t){this.he(t,25),this.pe(e,t)}},{key:"pe",value:function(e,t){t.fe(e)}},{key:"ge",value:function(e,t){var n=e.fields||{};this.he(t,55);var r=!0,i=!1,a=void 0;try{for(var o,s=Object.keys(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;this.de(u,t),this.ce(n[u],t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"ye",value:function(e,t){var n=e.values||[];this.he(t,50);var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;this.ce(u,t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"me",value:function(e,t){var n=this;this.he(t,37),vo.fromName(e).path.forEach((function(e){n.he(t,60),n.pe(e,t)}))}},{key:"he",value:function(e,t){e.le(t)}},{key:"_e",value:function(e){e.le(2)}}]),t}();zc.Ie=new zc;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Gc=function(){"use strict";function t(){e(s)(this,t),this.Je=new Qc}return e(c)(t,[{key:"addToCollectionParentIndex",value:function(e,t){return this.Je.add(t),Eo.resolve()}},{key:"getCollectionParents",value:function(e,t){return Eo.resolve(this.Je.getEntries(t))}},{key:"addFieldIndex",value:function(e,t){return Eo.resolve()}},{key:"deleteFieldIndex",value:function(e,t){return Eo.resolve()}},{key:"getDocumentsMatchingTarget",value:function(e,t){return Eo.resolve(null)}},{key:"getIndexType",value:function(e,t){return Eo.resolve(0)}},{key:"getFieldIndexes",value:function(e,t){return Eo.resolve([])}},{key:"getNextCollectionGroupToUpdate",value:function(e){return Eo.resolve(null)}},{key:"getMinOffset",value:function(e,t){return Eo.resolve(go.min())}},{key:"getMinOffsetFromCollectionGroup",value:function(e,t){return Eo.resolve(go.min())}},{key:"updateCollectionGroup",value:function(e,t,n){return Eo.resolve()}},{key:"updateIndexEntries",value:function(e,t){return Eo.resolve()}}]),t}(),Qc=function(){"use strict";function t(){e(s)(this,t),this.index={}}return e(c)(t,[{key:"add",value:function(e){var t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Ns(lo.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}},{key:"has",value:function(e){var t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}},{key:"getEntries",value:function(e){return(this.index[e]||new Ns(lo.comparator)).toArray()}}]),t}();new Uint8Array(0);
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Xc=function(){"use strict";function t(n,r,i){e(s)(this,t),this.cacheSizeCollectionThreshold=n,this.percentileToCollect=r,this.maximumSequenceNumbersToCollect=i}return e(c)(t,null,[{key:"withCacheSize",value:function(e){return new t(e,t.DEFAULT_COLLECTION_PERCENTILE,t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xc.DEFAULT_COLLECTION_PERCENTILE=10,Xc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xc.DEFAULT=new Xc(41943040,Xc.DEFAULT_COLLECTION_PERCENTILE,Xc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xc.DISABLED=new Xc(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Jc=function(){"use strict";function t(n){e(s)(this,t),this.bn=n}return e(c)(t,[{key:"next",value:function(){return this.bn+=2,this.bn}}],[{key:"Pn",value:function(){return new t(0)}},{key:"vn",value:function(){return new t(-1)}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Yc=function(){"use strict";function t(){e(s)(this,t),this.changes=new ju((function(e){return e.toString()}),(function(e,t){return e.isEqual(t)})),this.changesApplied=!1}return e(c)(t,[{key:"addEntry",value:function(e){this.assertNotApplied(),this.changes.set(e.key,e)}},{key:"removeEntry",value:function(e,t){this.assertNotApplied(),this.changes.set(e,Ps.newInvalidDocument(e).setReadTime(t))}},{key:"getEntry",value:function(e,t){this.assertNotApplied();var n=this.changes.get(t);return void 0!==n?Eo.resolve(n):this.getFromCache(e,t)}},{key:"getEntries",value:function(e,t){return this.getAllFromCache(e,t)}},{key:"apply",value:function(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}},{key:"assertNotApplied",value:function(){}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var $c=function t(n,r){"use strict";e(s)(this,t),this.overlayedDocument=n,this.mutatedFields=r},Zc=function(){"use strict";function t(n,r,i,a){e(s)(this,t),this.remoteDocumentCache=n,this.mutationQueue=r,this.documentOverlayCache=i,this.indexManager=a}return e(c)(t,[{key:"getDocument",value:function(e,t){var n=this,r=null;return this.documentOverlayCache.getOverlay(e,t).next((function(i){return r=i,n.remoteDocumentCache.getEntry(e,t)})).next((function(e){return null!==r&&Iu(r.mutation,e,Ds.empty(),so.now()),e}))}},{key:"getDocuments",value:function(e,t){var n=this;return this.remoteDocumentCache.getEntries(e,t).next((function(t){return n.getLocalViewOfDocuments(e,t,Yu()).next((function(){return t}))}))}},{key:"getLocalViewOfDocuments",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Yu(),r=this,i=zu();return this.populateOverlays(e,i,t).next((function(){return r.computeViews(e,t,i,n).next((function(e){var t=Hu();return e.forEach((function(e,n){t=t.insert(e,n.overlayedDocument)})),t}))}))}},{key:"getOverlayedDocuments",value:function(e,t){var n=this,r=zu();return this.populateOverlays(e,r,t).next((function(){return n.computeViews(e,t,r,Yu())}))}},{key:"populateOverlays",value:function(e,t,n){var r=[];return n.forEach((function(e){t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((function(e){e.forEach((function(e,n){t.set(e,n)}))}))}},{key:"computeViews",value:function(e,t,n,r){var i=qu(),a=Qu(),o=Qu();return t.forEach((function(e,t){var o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof Au)?i=i.insert(t.key,t):void 0!==o&&(a.set(t.key,o.mutation.getFieldMask()),Iu(o.mutation,t,o.mutation.getFieldMask(),so.now()))})),this.recalculateAndSaveOverlays(e,i).next((function(e){return e.forEach((function(e,t){return a.set(e,t)})),t.forEach((function(e,t){var n;return o.set(e,new $c(t,null!==(n=a.get(e))&&void 0!==n?n:null))})),o}))}},{key:"recalculateAndSaveOverlays",value:function(e,t){var n=this,r=Qu(),i=new Ss((function(e,t){return e-t})),a=Yu();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((function(e){var n=!0,a=!1,o=void 0;try{for(var s,u=function(e,n){var a=n.value;a.keys().forEach((function(e){var n=t.get(e);if(null!==n){var o=r.get(e)||Ds.empty();o=a.applyToLocalView(n,o),r.set(e,o);var s=(i.get(a.batchId)||Yu()).add(e);i=i.insert(a.batchId,s)}}))},c=e[Symbol.iterator]();!(n=(s=c.next()).done);n=!0)u(0,s)}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}})).next((function(){for(var o=[],s=i.getReverseIterator();s.hasNext();){var u=s.getNext(),c=u.key,l=u.value,h=Gu();l.forEach((function(e){if(!a.has(e)){var n=Tu(t.get(e),r.get(e));null!==n&&h.set(e,n),a=a.add(e)}})),o.push(n.documentOverlayCache.saveOverlays(e,c,h))}return Eo.waitFor(o)})).next((function(){return r}))}},{key:"recalculateAndSaveOverlaysForDocumentKeys",value:function(e,t){var n=this;return this.remoteDocumentCache.getEntries(e,t).next((function(t){return n.recalculateAndSaveOverlays(e,t)}))}},{key:"getDocumentsMatchingQuery",value:function(e,t,n){return r=t,vo.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):Gs(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n);var r}},{key:"getNextDocuments",value:function(e,t,n,r){var i=this;return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((function(a){var o=i,s=r-a.size>0?i.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-a.size):Eo.resolve(zu()),u=-1,c=a;return s.next((function(t){return Eo.forEach(t,(function(t,n){return u<n.largestBatchId&&(u=n.largestBatchId),a.get(t)?Eo.resolve():o.remoteDocumentCache.getEntry(e,t).next((function(e){c=c.insert(t,e)}))})).next((function(){return o.populateOverlays(e,t,a)})).next((function(){return o.computeViews(e,c,t,Yu())})).next((function(e){return{batchId:u,changes:Wu(e)}}))}))}))}},{key:"getDocumentsMatchingDocumentQuery",value:function(e,t){return this.getDocument(e,new vo(t)).next((function(e){var t=Hu();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}},{key:"getDocumentsMatchingCollectionGroupQuery",value:function(e,t,n){var r=this,i=t.collectionGroup,a=Hu();return this.indexManager.getCollectionParents(e,i).next((function(o){return Eo.forEach(o,(function(o){var s,u,c=(s=t,u=o.child(i),new Bs(u,null,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt));return r.getDocumentsMatchingCollectionQuery(e,c,n).next((function(e){e.forEach((function(e,t){a=a.insert(e,t)}))}))})).next((function(){return a}))}))}},{key:"getDocumentsMatchingCollectionQuery",value:function(e,t,n){var r,i=this;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next((function(a){return r=a,i.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId)})).next((function(e){e.forEach((function(e,t){var n=t.getKey();null===r.get(n)&&(r=r.insert(n,Ps.newInvalidDocument(n)))}));var n=Hu();return r.forEach((function(r,i){var a=e.get(r);void 0!==a&&Iu(a.mutation,i,Ds.empty(),so.now()),eu(t,i)&&(n=n.insert(r,i))})),n}))}}]),t}(),el=function(){"use strict";function t(n){e(s)(this,t),this.yt=n,this.Zn=new Map,this.ts=new Map}return e(c)(t,[{key:"getBundleMetadata",value:function(e,t){return Eo.resolve(this.Zn.get(t))}},{key:"saveBundleMetadata",value:function(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:yc(n.createTime)}),Eo.resolve()}},{key:"getNamedQuery",value:function(e,t){return Eo.resolve(this.ts.get(t))}},{key:"saveNamedQuery",value:function(e,t){return this.ts.set(t.name,{name:(n=t).name,query:Wc(n.bundledQuery),readTime:yc(n.readTime)}),Eo.resolve();var n}}]),t}(),tl=function(){"use strict";function t(){e(s)(this,t),this.overlays=new Ss(vo.comparator),this.es=new Map}return e(c)(t,[{key:"getOverlay",value:function(e,t){return Eo.resolve(this.overlays.get(t))}},{key:"getOverlays",value:function(e,t){var n=this,r=zu();return Eo.forEach(t,(function(t){return n.getOverlay(e,t).next((function(e){null!==e&&r.set(t,e)}))})).next((function(){return r}))}},{key:"saveOverlays",value:function(e,t,n){var r=this;return n.forEach((function(n,i){r.oe(e,t,i)})),Eo.resolve()}},{key:"removeOverlaysForBatchId",value:function(e,t,n){var r=this,i=this.es.get(n);return void 0!==i&&(i.forEach((function(e){return r.overlays=r.overlays.remove(e)})),this.es.delete(n)),Eo.resolve()}},{key:"getOverlaysForCollection",value:function(e,t,n){for(var r=zu(),i=t.length+1,a=new vo(t.child("")),o=this.overlays.getIteratorFrom(a);o.hasNext();){var s=o.getNext().value,u=s.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&s.largestBatchId>n&&r.set(s.getKey(),s)}return Eo.resolve(r)}},{key:"getOverlaysForCollectionGroup",value:function(e,t,n,r){for(var i=new Ss((function(e,t){return e-t})),a=this.overlays.getIterator();a.hasNext();){var o=a.getNext().value;if(o.getKey().getCollectionGroup()===t&&o.largestBatchId>n){var s=i.get(o.largestBatchId);null===s&&(s=zu(),i=i.insert(o.largestBatchId,s)),s.set(o.getKey(),o)}}for(var u=zu(),c=i.getIterator();c.hasNext()&&(c.getNext().value.forEach((function(e,t){return u.set(e,t)})),!(u.size()>=r)););return Eo.resolve(u)}},{key:"oe",value:function(e,t,n){var r=this.overlays.get(n.key);if(null!==r){var i=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,i)}this.overlays=this.overlays.insert(n.key,new qc(t,n));var a=this.es.get(t);void 0===a&&(a=Yu(),this.es.set(t,a)),this.es.set(t,a.add(n.key))}}]),t}(),nl=function(){"use strict";function t(){e(s)(this,t),this.ns=new Ns(rl.ss),this.rs=new Ns(rl.os)}return e(c)(t,[{key:"isEmpty",value:function(){return this.ns.isEmpty()}},{key:"addReference",value:function(e,t){var n=new rl(e,t);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}},{key:"us",value:function(e,t){var n=this;e.forEach((function(e){return n.addReference(e,t)}))}},{key:"removeReference",value:function(e,t){this.cs(new rl(e,t))}},{key:"hs",value:function(e,t){var n=this;e.forEach((function(e){return n.removeReference(e,t)}))}},{key:"ls",value:function(e){var t=this,n=new vo(new lo([])),r=new rl(n,e),i=new rl(n,e+1),a=[];return this.rs.forEachInRange([r,i],(function(e){t.cs(e),a.push(e.key)})),a}},{key:"fs",value:function(){var e=this;this.ns.forEach((function(t){return e.cs(t)}))}},{key:"cs",value:function(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}},{key:"ds",value:function(e){var t=new vo(new lo([])),n=new rl(t,e),r=new rl(t,e+1),i=Yu();return this.rs.forEachInRange([n,r],(function(e){i=i.add(e.key)})),i}},{key:"containsKey",value:function(e){var t=new rl(e,0),n=this.ns.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}]),t}(),rl=function(){"use strict";function t(n,r){e(s)(this,t),this.key=n,this._s=r}return e(c)(t,null,[{key:"ss",value:function(e,t){return vo.comparator(e.key,t.key)||ao(e._s,t._s)}},{key:"os",value:function(e,t){return ao(e._s,t._s)||vo.comparator(e.key,t.key)}}]),t}(),il=function(){"use strict";function t(n,r){e(s)(this,t),this.indexManager=n,this.referenceDelegate=r,this.mutationQueue=[],this.ws=1,this.gs=new Ns(rl.ss)}return e(c)(t,[{key:"checkEmpty",value:function(e){return Eo.resolve(0===this.mutationQueue.length)}},{key:"addMutationBatch",value:function(e,t,n,r){var i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];var a=new jc(i,t,n,r);this.mutationQueue.push(a);var o=!0,s=!1,u=void 0;try{for(var c,l=r[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var h=c.value;this.gs=this.gs.add(new rl(h.key,i)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast())}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return Eo.resolve(a)}},{key:"lookupMutationBatch",value:function(e,t){return Eo.resolve(this.ys(t))}},{key:"getNextMutationBatchAfterBatchId",value:function(e,t){var n=t+1,r=this.ps(n),i=r<0?0:r;return Eo.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}},{key:"getHighestUnacknowledgedBatchId",value:function(){return Eo.resolve(0===this.mutationQueue.length?-1:this.ws-1)}},{key:"getAllMutationBatches",value:function(e){return Eo.resolve(this.mutationQueue.slice())}},{key:"getAllMutationBatchesAffectingDocumentKey",value:function(e,t){var n=this,r=new rl(t,0),i=new rl(t,Number.POSITIVE_INFINITY),a=[];return this.gs.forEachInRange([r,i],(function(e){var t=n.ys(e._s);a.push(t)})),Eo.resolve(a)}},{key:"getAllMutationBatchesAffectingDocumentKeys",value:function(e,t){var n=this,r=new Ns(ao);return t.forEach((function(e){var t=new rl(e,0),i=new rl(e,Number.POSITIVE_INFINITY);n.gs.forEachInRange([t,i],(function(e){r=r.add(e._s)}))})),Eo.resolve(this.Is(r))}},{key:"getAllMutationBatchesAffectingQuery",value:function(e,t){var n=t.path,r=n.length+1,i=n;vo.isDocumentKey(i)||(i=i.child(""));var a=new rl(new vo(i),0),o=new Ns(ao);return this.gs.forEachWhile((function(e){var t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e._s)),!0)}),a),Eo.resolve(this.Is(o))}},{key:"Is",value:function(e){var t=this,n=[];return e.forEach((function(e){var r=t.ys(e);null!==r&&n.push(r)})),n}},{key:"removeMutationBatch",value:function(e,t){var n=this;Ha(0===this.Ts(t.batchId,"removed")),this.mutationQueue.shift();var r=this.gs;return Eo.forEach(t.mutations,(function(i){var a=new rl(i.key,t.batchId);return r=r.delete(a),n.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((function(){n.gs=r}))}},{key:"An",value:function(e){}},{key:"containsKey",value:function(e,t){var n=new rl(t,0),r=this.gs.firstAfterOrEqual(n);return Eo.resolve(t.isEqual(r&&r.key))}},{key:"performConsistencyCheck",value:function(e){return this.mutationQueue.length,Eo.resolve()}},{key:"Ts",value:function(e,t){return this.ps(e)}},{key:"ps",value:function(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}},{key:"ys",value:function(e){var t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}]),t}(),al=function(){"use strict";function t(n){e(s)(this,t),this.Es=n,this.docs=new Ss(vo.comparator),this.size=0}return e(c)(t,[{key:"setIndexManager",value:function(e){this.indexManager=e}},{key:"addEntry",value:function(e,t){var n=t.key,r=this.docs.get(n),i=r?r.size:0,a=this.Es(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}},{key:"removeEntry",value:function(e){var t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}},{key:"getEntry",value:function(e,t){var n=this.docs.get(t);return Eo.resolve(n?n.document.mutableCopy():Ps.newInvalidDocument(t))}},{key:"getEntries",value:function(e,t){var n=this,r=qu();return t.forEach((function(e){var t=n.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():Ps.newInvalidDocument(e))})),Eo.resolve(r)}},{key:"getAllFromCollection",value:function(e,t,n){for(var r=qu(),i=new vo(t.child("")),a=this.docs.getIteratorFrom(i);a.hasNext();){var o=a.getNext(),s=o.key,u=o.value.document;if(!t.isPrefixOf(s.path))break;s.path.length>t.length+1||ko(mo(u),n)<=0||(r=r.insert(u.key,u.mutableCopy()))}return Eo.resolve(r)}},{key:"getAllFromCollectionGroup",value:function(e,t,n,r){Ka()}},{key:"As",value:function(e,t){return Eo.forEach(this.docs,(function(e){return t(e)}))}},{key:"newChangeBuffer",value:function(e){return new ol(this)}},{key:"getSize",value:function(e){return Eo.resolve(this.size)}}]),t}(),ol=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(t){var i;return e(s)(this,r),(i=n.call(this)).Yn=t,e(y)(i)}return e(c)(r,[{key:"applyChanges",value:function(e){var t=this,n=[];return this.changes.forEach((function(r,i){i.isValidDocument()?n.push(t.Yn.addEntry(e,i)):t.Yn.removeEntry(r)})),Eo.waitFor(n)}},{key:"getFromCache",value:function(e,t){return this.Yn.getEntry(e,t)}},{key:"getAllFromCache",value:function(e,t){return this.Yn.getEntries(e,t)}}]),r}(Yc),sl=function(){"use strict";function t(n){e(s)(this,t),this.persistence=n,this.Rs=new ju((function(e){return Us(e)}),Vs),this.lastRemoteSnapshotVersion=uo.min(),this.highestTargetId=0,this.bs=0,this.Ps=new nl,this.targetCount=0,this.vs=Jc.Pn()}return e(c)(t,[{key:"forEachTarget",value:function(e,t){return this.Rs.forEach((function(e,n){return t(n)})),Eo.resolve()}},{key:"getLastRemoteSnapshotVersion",value:function(e){return Eo.resolve(this.lastRemoteSnapshotVersion)}},{key:"getHighestSequenceNumber",value:function(e){return Eo.resolve(this.bs)}},{key:"allocateTargetId",value:function(e){return this.highestTargetId=this.vs.next(),Eo.resolve(this.highestTargetId)}},{key:"setTargetsMetadata",value:function(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),Eo.resolve()}},{key:"Dn",value:function(e){this.Rs.set(e.target,e);var t=e.targetId;t>this.highestTargetId&&(this.vs=new Jc(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}},{key:"addTargetData",value:function(e,t){return this.Dn(t),this.targetCount+=1,Eo.resolve()}},{key:"updateTargetData",value:function(e,t){return this.Dn(t),Eo.resolve()}},{key:"removeTargetData",value:function(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,Eo.resolve()}},{key:"removeTargets",value:function(e,t,n){var r=this,i=0,a=[];return this.Rs.forEach((function(o,s){s.sequenceNumber<=t&&null===n.get(s.targetId)&&(r.Rs.delete(o),a.push(r.removeMatchingKeysForTargetId(e,s.targetId)),i++)})),Eo.waitFor(a).next((function(){return i}))}},{key:"getTargetCount",value:function(e){return Eo.resolve(this.targetCount)}},{key:"getTargetData",value:function(e,t){var n=this.Rs.get(t)||null;return Eo.resolve(n)}},{key:"addMatchingKeys",value:function(e,t,n){return this.Ps.us(t,n),Eo.resolve()}},{key:"removeMatchingKeys",value:function(e,t,n){this.Ps.hs(t,n);var r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((function(t){i.push(r.markPotentiallyOrphaned(e,t))})),Eo.waitFor(i)}},{key:"removeMatchingKeysForTargetId",value:function(e,t){return this.Ps.ls(t),Eo.resolve()}},{key:"getMatchingKeysForTargetId",value:function(e,t){var n=this.Ps.ds(t);return Eo.resolve(n)}},{key:"containsKey",value:function(e,t){return Eo.resolve(this.Ps.containsKey(t))}}]),t}(),ul=function(){"use strict";function t(n,r){var i=this;e(s)(this,t),this.Vs={},this.overlays={},this.Ss=new _o(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=n(this),this.Cs=new sl(this),this.indexManager=new Gc,this.remoteDocumentCache=new al((function(e){return i.referenceDelegate.xs(e)})),this.yt=new Hc(r),this.Ns=new el(this.yt)}return e(c)(t,[{key:"start",value:function(){return Promise.resolve()}},{key:"shutdown",value:function(){return this.Ds=!1,Promise.resolve()}},{key:"started",get:function(){return this.Ds}},{key:"setDatabaseDeletedListener",value:function(){}},{key:"setNetworkEnabled",value:function(){}},{key:"getIndexManager",value:function(e){return this.indexManager}},{key:"getDocumentOverlayCache",value:function(e){var t=this.overlays[e.toKey()];return t||(t=new tl,this.overlays[e.toKey()]=t),t}},{key:"getMutationQueue",value:function(e,t){var n=this.Vs[e.toKey()];return n||(n=new il(t,this.referenceDelegate),this.Vs[e.toKey()]=n),n}},{key:"getTargetCache",value:function(){return this.Cs}},{key:"getRemoteDocumentCache",value:function(){return this.remoteDocumentCache}},{key:"getBundleCache",value:function(){return this.Ns}},{key:"runTransaction",value:function(e,t,n){var r=this;Va("MemoryPersistence","Starting transaction:",e);var i=new cl(this.Ss.next());return this.referenceDelegate.ks(),n(i).next((function(e){return r.referenceDelegate.Os(i).next((function(){return e}))})).toPromise().then((function(e){return i.raiseOnCommittedEvent(),e}))}},{key:"Ms",value:function(e,t){return Eo.or(Object.values(this.Vs).map((function(n){return function(){return n.containsKey(e,t)}})))}}]),t}(),cl=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(t){var i;return e(s)(this,r),(i=n.call(this)).currentSequenceNumber=t,e(y)(i)}return r}(bo),ll=function(){"use strict";function t(n){e(s)(this,t),this.persistence=n,this.Fs=new nl,this.$s=null}return e(c)(t,[{key:"Ls",get:function(){if(this.$s)return this.$s;throw Ka()}},{key:"addReference",value:function(e,t,n){return this.Fs.addReference(n,t),this.Ls.delete(n.toString()),Eo.resolve()}},{key:"removeReference",value:function(e,t,n){return this.Fs.removeReference(n,t),this.Ls.add(n.toString()),Eo.resolve()}},{key:"markPotentiallyOrphaned",value:function(e,t){return this.Ls.add(t.toString()),Eo.resolve()}},{key:"removeTarget",value:function(e,t){var n=this;this.Fs.ls(t.targetId).forEach((function(e){return n.Ls.add(e.toString())}));var r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((function(e){var t=n;e.forEach((function(e){return t.Ls.add(e.toString())}))})).next((function(){return r.removeTargetData(e,t)}))}},{key:"ks",value:function(){this.$s=new Set}},{key:"Os",value:function(e){var t=this,n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Eo.forEach(this.Ls,(function(r){var i=vo.fromPath(r);return t.qs(e,i).next((function(e){e||n.removeEntry(i,uo.min())}))})).next((function(){return t.$s=null,n.apply(e)}))}},{key:"updateLimboDocument",value:function(e,t){var n=this;return this.qs(e,t).next((function(e){e?n.Ls.delete(t.toString()):n.Ls.add(t.toString())}))}},{key:"xs",value:function(e){return 0}},{key:"qs",value:function(e,t){var n=this;return Eo.or([function(){return Eo.resolve(n.Fs.containsKey(t))},function(){return n.persistence.getTargetCache().containsKey(e,t)},function(){return n.persistence.Ms(e,t)}])}}],[{key:"Bs",value:function(e){return new t(e)}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var hl=function(){"use strict";function t(n,r,i,a){e(s)(this,t),this.targetId=n,this.fromCache=r,this.Si=i,this.Di=a}return e(c)(t,null,[{key:"Ci",value:function(e,n){var r=Yu(),i=Yu(),a=!0,o=!1,s=void 0;try{for(var u,c=n.docChanges[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;switch(l.type){case 0:r=r.add(l.doc.key);break;case 1:i=i.add(l.doc.key)}}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}return new t(e,n.fromCache,r,i)}}]),t}(),fl=function(){"use strict";function t(){e(s)(this,t),this.xi=!1}return e(c)(t,[{key:"initialize",value:function(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}},{key:"getDocumentsMatchingQuery",value:function(e,t,n,r){var i=this;return this.ki(e,t).next((function(a){return a||i.Oi(e,t,r,n)})).next((function(n){return n||i.Mi(e,t)}))}},{key:"ki",value:function(t,n){var r=this;if(Hs(n))return Eo.resolve(null);var i=Xs(n);return this.indexManager.getIndexType(t,i).next((function(a){return 0===a?null:(null!==n.limit&&1===a&&(n=Js(n,null,"F"),i=Xs(n)),r.indexManager.getDocumentsMatchingTarget(t,i).next((function(a){var o=r,s=Yu.apply(void 0,e(g)(a));return r.Ni.getDocuments(t,s).next((function(e){return o.indexManager.getMinOffset(t,i).next((function(r){var i=o.Fi(n,e);return o.$i(n,i,s,r.readTime)?o.ki(t,Js(n,null,"F")):o.Bi(t,i,n,r)}))}))})))}))}},{key:"Oi",value:function(e,t,n,r){var i=this;return Hs(t)||r.isEqual(uo.min())?this.Mi(e,t):this.Ni.getDocuments(e,n).next((function(a){var o=i.Fi(t,a);return i.$i(t,o,n,r)?i.Mi(e,t):(Ua()<=be.DEBUG&&Va("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Zs(t)),i.Bi(e,o,t,yo(r,-1)))}))}},{key:"Fi",value:function(e,t){var n=new Ns(nu(e));return t.forEach((function(t,r){eu(e,r)&&(n=n.add(r))})),n}},{key:"$i",value:function(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;var i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}},{key:"Mi",value:function(e,t){return Ua()<=be.DEBUG&&Va("QueryEngine","Using full collection scan to execute query:",Zs(t)),this.Ni.getDocumentsMatchingQuery(e,t,go.min())}},{key:"Bi",value:function(e,t,n,r){return this.Ni.getDocumentsMatchingQuery(e,n,r).next((function(e){return t.forEach((function(t){e=e.insert(t.key,t)})),e}))}}]),t}(),dl=function(){"use strict";function t(n,r,i,a){e(s)(this,t),this.persistence=n,this.Li=r,this.yt=a,this.qi=new Ss(ao),this.Ui=new ju((function(e){return Us(e)}),Vs),this.Ki=new Map,this.Gi=n.getRemoteDocumentCache(),this.Cs=n.getTargetCache(),this.Ns=n.getBundleCache(),this.Qi(i)}return e(c)(t,[{key:"Qi",value:function(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Zc(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}},{key:"collectGarbage",value:function(e){var t=this;return this.persistence.runTransaction("Collect garbage","readwrite-primary",(function(n){return e.collect(n,t.qi)}))}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(e,t,n,r){return new dl(e,t,n,r)}function pl(e,t){return yl.apply(this,arguments)}function yl(){return(yl=e(a)(e(o).mark((function t(n,r){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Wa(n),e.next=3,i.persistence.runTransaction("Handle user change","readonly",(function(e){var t;return i.mutationQueue.getAllMutationBatches(e).next((function(n){return t=n,i.Qi(r),i.mutationQueue.getAllMutationBatches(e)})).next((function(n){var r=[],a=[],o=Yu(),s=!0,u=!1,c=void 0;try{for(var l,h=t[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var f=l.value;r.push(f.batchId);var d=!0,v=!1,p=void 0;try{for(var y,m=f.mutations[Symbol.iterator]();!(d=(y=m.next()).done);d=!0){var g=y.value;o=o.add(g.key)}}catch(e){v=!0,p=e}finally{try{d||null==m.return||m.return()}finally{if(v)throw p}}}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}var k=!0,w=!1,b=void 0;try{for(var x,T=n[Symbol.iterator]();!(k=(x=T.next()).done);k=!0){var E=x.value;a.push(E.batchId);var I=!0,_=!1,S=void 0;try{for(var C,A=E.mutations[Symbol.iterator]();!(I=(C=A.next()).done);I=!0){var N=C.value;o=o.add(N.key)}}catch(e){_=!0,S=e}finally{try{I||null==A.return||A.return()}finally{if(_)throw S}}}}catch(e){w=!0,b=e}finally{try{k||null==T.return||T.return()}finally{if(w)throw b}}return i.localDocuments.getDocuments(e,o).next((function(e){return{ji:e,removedBatchIds:r,addedBatchIds:a}}))}))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ml(e,t){var n=Wa(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(function(e){var r,i,a,o,s,u,c,l=t.batch.keys(),h=n.Gi.newChangeBuffer({trackRemovals:!0});return(r=n,i=e,a=t,o=h,s=a.batch,u=s.keys(),c=Eo.resolve(),u.forEach((function(e){c=c.next((function(){return o.getEntry(i,e)})).next((function(t){var n=a.docVersions.get(e);Ha(null!==n),t.version.compareTo(n)<0&&(s.applyToRemoteDocument(t,a),t.isValidDocument()&&(t.setReadTime(a.commitVersion),o.addEntry(t)))}))})),c.next((function(){return r.mutationQueue.removeMutationBatch(i,s)}))).next((function(){return h.apply(e)})).next((function(){return n.mutationQueue.performConsistencyCheck(e)})).next((function(){return n.documentOverlayCache.removeOverlaysForBatchId(e,l,t.batch.batchId)})).next((function(){return n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){for(var t=Yu(),n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))})).next((function(){return n.localDocuments.getDocuments(e,l)}))}))}function gl(e){var t=Wa(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(function(e){return t.Cs.getLastRemoteSnapshotVersion(e)}))}function kl(e,t){var n=Wa(e),r=t.snapshotVersion,i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(function(e){var a=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;var o=[];t.targetChanges.forEach((function(a,s){var u=i.get(s);if(u){o.push(n.Cs.removeMatchingKeys(e,a.removedDocuments,s).next((function(){return n.Cs.addMatchingKeys(e,a.addedDocuments,s)})));var c,l,h,f=u.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(s)?f=f.withResumeToken(Mo.EMPTY_BYTE_STRING,uo.min()).withLastLimboFreeSnapshotVersion(uo.min()):a.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(a.resumeToken,r)),i=i.insert(s,f),l=f,h=a,(0===(c=u).resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-c.snapshotVersion.toMicroseconds()>=3e8||h.addedDocuments.size+h.modifiedDocuments.size+h.removedDocuments.size>0)&&o.push(n.Cs.updateTargetData(e,f))}}));var s=qu(),u=Yu();if(t.documentUpdates.forEach((function(r){t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(wl(e,a,t.documentUpdates).next((function(e){s=e.Wi,u=e.zi}))),!r.isEqual(uo.min())){var c=n.Cs.getLastRemoteSnapshotVersion(e).next((function(t){return n.Cs.setTargetsMetadata(e,e.currentSequenceNumber,r)}));o.push(c)}return Eo.waitFor(o).next((function(){return a.apply(e)})).next((function(){return n.localDocuments.getLocalViewOfDocuments(e,s,u)})).next((function(){return s}))})).then((function(e){return n.qi=i,e}))}function wl(e,t,n){var r=Yu(),i=Yu();return n.forEach((function(e){return r=r.add(e)})),t.getEntries(e,r).next((function(e){var r=qu();return n.forEach((function(n,a){var o=e.get(n);a.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),a.isNoDocument()&&a.version.isEqual(uo.min())?(t.removeEntry(n,a.readTime),r=r.insert(n,a)):!o.isValidDocument()||a.version.compareTo(o.version)>0||0===a.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(a),r=r.insert(n,a)):Va("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",a.version)})),{Wi:r,zi:i}}))}function bl(e,t){var n=Wa(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(function(e){return void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)}))}function xl(e,t){var n=Wa(e);return n.persistence.runTransaction("Allocate target","readwrite",(function(e){var r;return n.Cs.getTargetData(e,t).next((function(i){return i?(r=i,Eo.resolve(r)):n.Cs.allocateTargetId(e).next((function(i){return r=new Kc(t,i,0,e.currentSequenceNumber),n.Cs.addTargetData(e,r).next((function(){return r}))}))}))})).then((function(e){var r=n.qi.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(e.targetId,e),n.Ui.set(t,e.targetId)),e}))}function Tl(e,t,n){return El.apply(this,arguments)}function El(){return(El=e(a)(e(o).mark((function t(n,r,i){var a,s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=Wa(n),s=a.qi.get(r),u=i?"readwrite":"readwrite-primary",e.prev=1,e.t0=i,e.t0){e.next=6;break}return e.next=6,a.persistence.runTransaction("Release target",u,(function(e){return a.persistence.referenceDelegate.removeTarget(e,s)}));case 6:e.next=13;break;case 8:if(e.prev=8,e.t1=e.catch(1),Io(e.t1)){e.next=12;break}throw e.t1;case 12:Va("LocalStore","Failed to update sequence numbers for target ".concat(r,": ").concat(e.t1));case 13:a.qi=a.qi.remove(r),a.Ui.delete(s.target);case 14:case"end":return e.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function Il(e,t,n){var r=Wa(e),i=uo.min(),a=Yu();return r.persistence.runTransaction("Execute query","readonly",(function(e){return(o=r,s=e,u=Xs(t),c=Wa(o),l=c.Ui.get(u),void 0!==l?Eo.resolve(c.qi.get(l)):c.Cs.getTargetData(s,u)).next((function(t){if(t)return i=t.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(e,t.targetId).next((function(e){a=e}))})).next((function(){return r.Li.getDocumentsMatchingQuery(e,t,n?i:uo.min(),n?a:Yu())})).next((function(e){return _l(r,tu(t),e),{documents:e,Hi:a}}));var o,s,u,c,l}))}function _l(e,t,n){var r=e.Ki.get(t)||uo.min();n.forEach((function(e,t){t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Ki.set(t,r)}var Sl=function(){"use strict";function t(){e(s)(this,t),this.activeTargetIds=Zu()}return e(c)(t,[{key:"er",value:function(e){this.activeTargetIds=this.activeTargetIds.add(e)}},{key:"nr",value:function(e){this.activeTargetIds=this.activeTargetIds.delete(e)}},{key:"tr",value:function(){var e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}]),t}(),Cl=function(){"use strict";function t(){e(s)(this,t),this.Lr=new Sl,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}return e(c)(t,[{key:"addPendingMutation",value:function(e){}},{key:"updateMutationState",value:function(e,t,n){}},{key:"addLocalQueryTarget",value:function(e){return this.Lr.er(e),this.qr[e]||"not-current"}},{key:"updateQueryState",value:function(e,t,n){this.qr[e]=t}},{key:"removeLocalQueryTarget",value:function(e){this.Lr.nr(e)}},{key:"isLocalQueryTarget",value:function(e){return this.Lr.activeTargetIds.has(e)}},{key:"clearQueryState",value:function(e){delete this.qr[e]}},{key:"getAllActiveQueryTargets",value:function(){return this.Lr.activeTargetIds}},{key:"isActiveQueryTarget",value:function(e){return this.Lr.activeTargetIds.has(e)}},{key:"start",value:function(){return this.Lr=new Sl,Promise.resolve()}},{key:"handleUserChange",value:function(e,t,n){}},{key:"setOnlineState",value:function(e){}},{key:"shutdown",value:function(){}},{key:"writeSequenceNumber",value:function(e){}},{key:"notifyBundleLoaded",value:function(e){}}]),t}(),Al=function(){"use strict";function t(){e(s)(this,t)}return e(c)(t,[{key:"Ur",value:function(e){}},{key:"shutdown",value:function(){}}]),t}(),Nl=function(){"use strict";function t(){var n=this;e(s)(this,t),this.Kr=function(){return n.Gr()},this.Qr=function(){return n.jr()},this.Wr=[],this.zr()}return e(c)(t,[{key:"Ur",value:function(e){this.Wr.push(e)}},{key:"shutdown",value:function(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}},{key:"zr",value:function(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}},{key:"Gr",value:function(){Va("ConnectivityMonitor","Network connectivity changed: AVAILABLE");var e=!0,t=!1,n=void 0;try{for(var r,i=this.Wr[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){(0,r.value)(0)}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}}},{key:"jr",value:function(){Va("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");var e=!0,t=!1,n=void 0;try{for(var r,i=this.Wr[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){(0,r.value)(1)}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}}}],[{key:"C",value:function(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}]),t}(),Ol={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"},Dl=function(){"use strict";function t(n){e(s)(this,t),this.Hr=n.Hr,this.Jr=n.Jr}return e(c)(t,[{key:"Yr",value:function(e){this.Xr=e}},{key:"Zr",value:function(e){this.eo=e}},{key:"onMessage",value:function(e){this.no=e}},{key:"close",value:function(){this.Jr()}},{key:"send",value:function(e){this.Hr(e)}},{key:"so",value:function(){this.Xr()}},{key:"io",value:function(e){this.eo(e)}},{key:"ro",value:function(e){this.no(e)}}]),t}(),Rl=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(t){var i;return e(s)(this,r),(i=n.call(this,t)).forceLongPolling=t.forceLongPolling,i.autoDetectLongPolling=t.autoDetectLongPolling,i.useFetchStreams=t.useFetchStreams,e(y)(i)}return e(c)(r,[{key:"fo",value:function(e,t,n,r){return new Promise((function(i,a){var o=new Ra;o.setWithCredentials(!0),o.listenOnce(Ca.COMPLETE,(function(){try{switch(o.getLastErrorCode()){case Sa.NO_ERROR:var t=o.getResponseJson();Va("Connection","XHR received:",JSON.stringify(t)),i(t);break;case Sa.TIMEOUT:Va("Connection",'RPC "'+e+'" timed out'),a(new Ga(za.DEADLINE_EXCEEDED,"Request time out"));break;case Sa.HTTP_ERROR:var n=o.getStatus();if(Va("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){var r=o.getResponseJson();Array.isArray(r)&&(r=r[0]);var s=null==r?void 0:r.error;if(s&&s.status&&s.message){var u=(c=s.status,l=c.toLowerCase().replace(/_/g,"-"),Object.values(za).indexOf(l)>=0?l:za.UNKNOWN);a(new Ga(u,s.message))}else a(new Ga(za.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new Ga(za.UNAVAILABLE,"Connection failed."));break;default:Ka()}}finally{Va("Connection",'RPC "'+e+'" completed.')}var c,l}));var s=JSON.stringify(r);o.send(t,"POST",s,n,15)}))}},{key:"wo",value:function(e,t,n){var r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Ia(),a=_a(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:"projects/".concat(this.databaseId.projectId,"/databases/").concat(this.databaseId.database)},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Oa({})),this.lo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;var s=r.join("");Va("Connection","Creating WebChannel: "+s,o);var u=i.createWebChannel(s,o),c=!1,l=!1,h=new Dl({Hr:function(e){l?Va("Connection","Not sending because WebChannel is closed:",e):(c||(Va("Connection","Opening WebChannel transport."),u.open(),c=!0),Va("Connection","WebChannel sending:",e),u.send(e))},Jr:function(){return u.close()}}),f=function(e,t,n){e.listen(t,(function(e){try{n(e)}catch(e){setTimeout((function(){throw e}),0)}}))};return f(u,Da.EventType.OPEN,(function(){l||Va("Connection","WebChannel transport opened.")})),f(u,Da.EventType.CLOSE,(function(){l||(l=!0,Va("Connection","WebChannel transport closed"),h.io())})),f(u,Da.EventType.ERROR,(function(e){l||(l=!0,Ba("Connection","WebChannel transport errored:",e),h.io(new Ga(za.UNAVAILABLE,"The operation could not be completed")))})),f(u,Da.EventType.MESSAGE,(function(e){var t;if(!l){var n=e.data[0];Ha(!!n);var r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){Va("Connection","WebChannel received error:",i);var a=i.status,o=function(e){var t=Ru[e];if(void 0!==t)return Vu(t)}(a),s=i.message;void 0===o&&(o=za.INTERNAL,s="Unknown error status: "+a+" with message "+i.message),l=!0,h.io(new Ga(o,s)),u.close()}else Va("Connection","WebChannel received:",n),h.ro(n)}})),f(a,Aa.STAT_EVENT,(function(e){e.stat===Na.PROXY?Va("Connection","Detected buffering proxy"):e.stat===Na.NOPROXY&&Va("Connection","Detected no buffering proxy")})),setTimeout((function(){h.so()}),0),h}}]),r}(function(){"use strict";function t(n){e(s)(this,t),this.databaseInfo=n,this.databaseId=n.databaseId;var r=n.ssl?"https":"http";this.oo=r+"://"+n.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}return e(c)(t,[{key:"co",get:function(){return!1}},{key:"ao",value:function(e,t,n,r,i){var a=this.ho(e,t);Va("RestConnection","Sending: ",a,n);var o={};return this.lo(o,r,i),this.fo(e,a,o,n).then((function(e){return Va("RestConnection","Received: ",e),e}),(function(t){throw Ba("RestConnection","".concat(e," failed with error: "),t,"url: ",a,"request:",n),t}))}},{key:"_o",value:function(e,t,n,r,i,a){return this.ao(e,t,n,r,i)}},{key:"lo",value:function(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ma,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((function(t,n){return e[n]=t})),n&&n.headers.forEach((function(t,n){return e[n]=t}))}},{key:"ho",value:function(e,t){var n=Ol[e];return"".concat(this.oo,"/v1/").concat(t,":").concat(n)}}]),t}());function Ll(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(e){return new fc(e,!0)}var Ml=function(){"use strict";function t(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1.5,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:6e4;e(s)(this,t),this.Hs=n,this.timerId=r,this.mo=i,this.yo=a,this.po=o,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}return e(c)(t,[{key:"reset",value:function(){this.Io=0}},{key:"Ao",value:function(){this.Io=this.po}},{key:"Ro",value:function(e){var t=this;this.cancel();var n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&Va("ExponentialBackoff","Backing off for ".concat(i," ms (base delay: ").concat(this.Io," ms, delay with jitter: ").concat(n," ms, last attempt: ").concat(r," ms ago)")),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,(function(){return t.Eo=Date.now(),e()})),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}},{key:"Po",value:function(){null!==this.To&&(this.To.skipDelay(),this.To=null)}},{key:"cancel",value:function(){null!==this.To&&(this.To.cancel(),this.To=null)}},{key:"bo",value:function(){return(Math.random()-.5)*this.Io}}]),t}(),Fl=function(){"use strict";function t(n,r,i,a,o,u,c,l){e(s)(this,t),this.Hs=n,this.vo=i,this.Vo=a,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Ml(n,r)}return e(c)(t,[{key:"No",value:function(){return 1===this.state||5===this.state||this.ko()}},{key:"ko",value:function(){return 2===this.state||3===this.state}},{key:"start",value:function(){4!==this.state?this.auth():this.Oo()}},{key:"stop",value:function(){var t=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=t.No(),!e.t0){e.next=4;break}return e.next=4,t.close(0);case 4:case"end":return e.stop()}}),n)})))()}},{key:"Mo",value:function(){this.state=0,this.xo.reset()}},{key:"Fo",value:function(){var e=this;this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,(function(){return e.$o()})))}},{key:"Bo",value:function(e){this.Lo(),this.stream.send(e)}},{key:"$o",value:function(){var t=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.ko()){e.next=2;break}return e.abrupt("return",t.close(0));case 2:case"end":return e.stop()}}),n)})))()}},{key:"Lo",value:function(){this.Do&&(this.Do.cancel(),this.Do=null)}},{key:"qo",value:function(){this.Co&&(this.Co.cancel(),this.Co=null)}},{key:"close",value:function(t,n){var r=this;return e(a)(e(o).mark((function i(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.Lo(),r.qo(),r.xo.cancel(),r.So++,4!==t?r.xo.reset():n&&n.code===za.RESOURCE_EXHAUSTED?(ja(n.toString()),ja("Using maximum backoff delay to prevent overloading the backend."),r.xo.Ao()):n&&n.code===za.UNAUTHENTICATED&&3!==r.state&&(r.authCredentialsProvider.invalidateToken(),r.appCheckCredentialsProvider.invalidateToken()),null!==r.stream&&(r.Uo(),r.stream.close(),r.stream=null),r.state=t,e.next=9,r.listener.Zr(n);case 9:case"end":return e.stop()}}),i)})))()}},{key:"Uo",value:function(){}},{key:"auth",value:function(){var t=this;this.state=1;var n=this.Ko(this.So),r=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((function(n){var i=e(m)(n,2),a=i[0],o=i[1];t.So===r&&t.Go(a,o)}),(function(e){var r=t;n((function(){var t=new Ga(za.UNKNOWN,"Fetching auth token failed: "+e.message);return r.Qo(t)}))}))}},{key:"Go",value:function(e,t){var n=this,r=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr((function(){var e=n;r((function(){return e.state=2,e.Co=e.Hs.enqueueAfterDelay(e.Vo,1e4,(function(){return e.ko()&&(e.state=3),Promise.resolve()})),e.listener.Yr()}))})),this.stream.Zr((function(e){var t=n;r((function(){return t.Qo(e)}))})),this.stream.onMessage((function(e){var t=n;r((function(){return t.onMessage(e)}))}))}},{key:"Oo",value:function(){var t=this;this.state=5,this.xo.Ro(e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.state=0,t.start();case 1:case"end":return e.stop()}}),n)}))))}},{key:"Qo",value:function(e){return Va("PersistentStream","close with error: ".concat(e)),this.stream=null,this.close(4,e)}},{key:"Ko",value:function(e){var t=this;return function(n){var r=t;t.Hs.enqueueAndForget((function(){return r.So===e?n():(Va("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())}))}}}]),t}(),Ul=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(t,i,a,o,u,c){var l;return e(s)(this,r),(l=n.call(this,t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",i,a,o,c)).yt=u,e(y)(l)}return e(c)(r,[{key:"jo",value:function(e,t){return this.connection.wo("Listen",e,t)}},{key:"onMessage",value:function(e){this.xo.reset();var t=function(e,t){var n,r;if("targetChange"in t){t.targetChange;var i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:Ka(),a=t.targetChange.targetIds||[],o=function(e,t){return e.wt?(Ha(void 0===t||"string"==typeof t),Mo.fromBase64String(t||"")):(Ha(void 0===t||t instanceof Uint8Array),Mo.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),s=t.targetChange.cause,u=s&&function(e){var t=void 0===e.code?za.UNKNOWN:Vu(e.code);return new Ga(t,e.message||"")}(s);n=new ic(i,a,o,u||null)}else if("documentChange"in t){t.documentChange;var c=t.documentChange;c.document,c.document.name,c.document.updateTime;var l=wc(e,c.document.name),h=yc(c.document.updateTime),f=c.document.createTime?yc(c.document.createTime):uo.min(),d=new Rs({mapValue:{fields:c.document.fields}}),v=Ps.newFoundDocument(l,h,f,d),p=c.targetIds||[],y=c.removedTargetIds||[];n=new nc(p,y,v.key,v)}else if("documentDelete"in t){t.documentDelete;var m=t.documentDelete;m.document;var g=wc(e,m.document),k=m.readTime?yc(m.readTime):uo.min(),w=Ps.newNoDocument(g,k),b=m.removedTargetIds||[];n=new nc([],b,w.key,w)}else if("documentRemove"in t){t.documentRemove;var x=t.documentRemove;x.document;var T=wc(e,x.document),E=x.removedTargetIds||[];n=new nc([],E,T,null)}else{if(!("filter"in t))return Ka();t.filter;var I=t.filter;I.targetId;var _=I.count||0,S=new Fu(_),C=I.targetId;n=new rc(C,S)}return n}(this.yt,e),n=function(e){if(!("targetChange"in e))return uo.min();var t=e.targetChange;return t.targetIds&&t.targetIds.length?uo.min():t.readTime?yc(t.readTime):uo.min()}(e);return this.listener.Wo(t,n)}},{key:"zo",value:function(e){var t,n,r,i,a={};a.database=Tc(this.yt),a.addTarget=(t=this.yt,i=(n=e).target,(r=js(i)?{documents:Sc(t,i)}:{query:Cc(t,i)}).targetId=n.targetId,n.resumeToken.approximateByteSize()>0?r.resumeToken=vc(t,n.resumeToken):n.snapshotVersion.compareTo(uo.min())>0&&(r.readTime=dc(t,n.snapshotVersion.toTimestamp())),r);var o=function(e,t){var n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Ka()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.yt,e);o&&(a.labels=o),this.Bo(a)}},{key:"Ho",value:function(e){var t={};t.database=Tc(this.yt),t.removeTarget=e,this.Bo(t)}}]),r}(Fl),Vl=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(t,i,a,o,u,c){var l;return e(s)(this,r),(l=n.call(this,t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",i,a,o,c)).yt=u,l.Jo=!1,e(y)(l)}return e(c)(r,[{key:"Yo",get:function(){return this.Jo}},{key:"start",value:function(){this.Jo=!1,this.lastStreamToken=void 0,e(l)(e(v)(r.prototype),"start",this).call(this)}},{key:"Uo",value:function(){this.Jo&&this.Xo([])}},{key:"jo",value:function(e,t){return this.connection.wo("Write",e,t)}},{key:"onMessage",value:function(e){if(Ha(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();var t=(r=e.writeResults,i=e.commitTime,r&&r.length>0?(Ha(void 0!==i),r.map((function(e){return n=i,(r=(t=e).updateTime?yc(t.updateTime):yc(n)).isEqual(uo.min())&&(r=yc(n)),new ku(r,t.transformResults||[]);var t,n,r}))):[]),n=yc(e.commitTime);return this.listener.Zo(n,t)}var r,i;return Ha(!e.writeResults||0===e.writeResults.length),this.Jo=!0,this.listener.tu()}},{key:"eu",value:function(){var e={};e.database=Tc(this.yt),this.Bo(e)}},{key:"Xo",value:function(e){var t=this,n={streamToken:this.lastStreamToken,writes:e.map((function(e){return _c(t.yt,e)}))};this.Bo(n)}}]),r}(Fl),jl=function(t){"use strict";e(p)(r,(function t(){e(s)(this,t)}));var n=e(w)(r);function r(t,i,a,o){var u;return e(s)(this,r),(u=n.call(this)).authCredentials=t,u.appCheckCredentials=i,u.connection=a,u.yt=o,u.nu=!1,e(y)(u)}return e(c)(r,[{key:"su",value:function(){if(this.nu)throw new Ga(za.FAILED_PRECONDITION,"The client has already been terminated.")}},{key:"ao",value:function(t,n,r){var i=this;return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((function(a){var o=e(m)(a,2),s=o[0],u=o[1];return i.connection.ao(t,n,r,s,u)})).catch((function(e){throw"FirebaseError"===e.name?(e.code===za.UNAUTHENTICATED&&(i.authCredentials.invalidateToken(),i.appCheckCredentials.invalidateToken()),e):new Ga(za.UNKNOWN,e.toString())}))}},{key:"_o",value:function(t,n,r,i){var a=this;return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((function(o){var s=e(m)(o,2),u=s[0],c=s[1];return a.connection._o(t,n,r,u,c,i)})).catch((function(e){throw"FirebaseError"===e.name?(e.code===za.UNAUTHENTICATED&&(a.authCredentials.invalidateToken(),a.appCheckCredentials.invalidateToken()),e):new Ga(za.UNKNOWN,e.toString())}))}},{key:"terminate",value:function(){this.nu=!0}}]),r}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bl=function(){"use strict";function t(n,r){e(s)(this,t),this.asyncQueue=n,this.onlineStateHandler=r,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}return e(c)(t,[{key:"uu",value:function(){var e=this;0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(function(){return e.ru=null,e.au("Backend didn't respond within 10 seconds."),e.cu("Offline"),Promise.resolve()})))}},{key:"hu",value:function(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au("Connection failed 1 times. Most recent error: ".concat(e.toString())),this.cu("Offline")))}},{key:"set",value:function(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}},{key:"cu",value:function(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}},{key:"au",value:function(e){var t="Could not reach Cloud Firestore backend. ".concat(e,"\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.");this.ou?(ja(t),this.ou=!1):Va("OnlineStateTracker",t)}},{key:"lu",value:function(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}]),t}(),ql=function t(n,r,i,u,c){"use strict";var l=this;e(s)(this,t),this.localStore=n,this.datastore=r,this.asyncQueue=i,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=c,this.mu.Ur((function(t){var n=l;i.enqueueAndForget(e(a)(e(o).mark((function t(){return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=Zl(n),!t.t0){t.next=5;break}return Va("RemoteStore","Restarting streams for network reachability change."),t.next=5,function(){var t=e(a)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=Wa(n))._u.add(4),e.next=4,Wl(r);case 4:return r.gu.set("Unknown"),r._u.delete(4),e.next=8,Kl(r);case 8:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()(n);case 5:case"end":return t.stop()}}),t)}))))})),this.gu=new Bl(i,u)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(e){return Hl.apply(this,arguments)}function Hl(){return(Hl=e(a)(e(o).mark((function t(n){var r,i,a,s,u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=!0,i=!1,a=void 0,!Zl(n)){e.next=25;break}e.prev=2,s=n.wu[Symbol.iterator]();case 4:if(r=(u=s.next()).done){e.next=11;break}return c=u.value,e.next=8,c(!0);case 8:r=!0,e.next=4;break;case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),i=!0,a=e.t0;case 17:e.prev=17,e.prev=18,r||null==s.return||s.return();case 20:if(e.prev=20,!i){e.next=23;break}throw a;case 23:return e.finish(20);case 24:return e.finish(17);case 25:case"end":return e.stop()}}),t,null,[[2,13,17,25],[18,,20,24]])})))).apply(this,arguments)}function Wl(e){return zl.apply(this,arguments)}function zl(){return(zl=e(a)(e(o).mark((function t(n){var r,i,a,s,u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=!0,i=!1,a=void 0,e.prev=1,s=n.wu[Symbol.iterator]();case 3:if(r=(u=s.next()).done){e.next=10;break}return c=u.value,e.next=7,c(!1);case 7:r=!0,e.next=3;break;case 10:e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),i=!0,a=e.t0;case 16:e.prev=16,e.prev=17,r||null==s.return||s.return();case 19:if(e.prev=19,!i){e.next=22;break}throw a;case 22:return e.finish(19);case 23:return e.finish(16);case 24:case"end":return e.stop()}}),t,null,[[1,12,16,24],[17,,19,23]])})))).apply(this,arguments)}function Gl(e,t){var n=Wa(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),$l(n)?Yl(n):Ch(n).ko()&&Xl(n,t))}function Ql(e,t){var n=Wa(e),r=Ch(n);n.du.delete(t),r.ko()&&Jl(n,t),0===n.du.size&&(r.ko()?r.Fo():Zl(n)&&n.gu.set("Unknown"))}function Xl(e,t){e.yu.Ot(t.targetId),Ch(e).zo(t)}function Jl(e,t){e.yu.Ot(t),Ch(e).Ho(t)}function Yl(e){e.yu=new oc({getRemoteKeysForTarget:function(t){return e.remoteSyncer.getRemoteKeysForTarget(t)},ne:function(t){return e.du.get(t)||null}}),Ch(e).start(),e.gu.uu()}function $l(e){return Zl(e)&&!Ch(e).No()&&e.du.size>0}function Zl(e){return 0===Wa(e)._u.size}function eh(e){e.yu=void 0}function th(e){return nh.apply(this,arguments)}function nh(){return(nh=e(a)(e(o).mark((function t(n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.du.forEach((function(e,t){Xl(n,e)}));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function rh(e,t){return ih.apply(this,arguments)}function ih(){return(ih=e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:eh(n),$l(n)?(n.gu.hu(r),Yl(n)):n.gu.set("Unknown");case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ah(e,t,n){return oh.apply(this,arguments)}function oh(){return oh=e(a)(e(o).mark((function t(n,r,i){var s;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.gu.set("Online"),!(r instanceof ic&&2===r.state&&r.cause)){t.next=13;break}return t.prev=1,t.next=4,function(){var t=e(a)(e(o).mark((function t(n,r){var i,a,s,u,c,l,h;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=r.cause,a=!0,s=!1,u=void 0,e.prev=2,c=r.targetIds[Symbol.iterator]();case 4:if(a=(l=c.next()).done){e.next=15;break}if(h=l.value,e.t0=n.du.has(h),!e.t0){e.next=12;break}return e.next=10,n.remoteSyncer.rejectListen(h,i);case 10:n.du.delete(h),n.yu.removeTarget(h);case 12:a=!0,e.next=4;break;case 15:e.next=21;break;case 17:e.prev=17,e.t1=e.catch(2),s=!0,u=e.t1;case 21:e.prev=21,e.prev=22,a||null==c.return||c.return();case 24:if(e.prev=24,!s){e.next=27;break}throw u;case 27:return e.finish(24);case 28:return e.finish(21);case 29:case"end":return e.stop()}}),t,null,[[2,17,21,29],[22,,24,28]])})));return function(e,n){return t.apply(this,arguments)}}()(n,r);case 4:t.next=11;break;case 6:return t.prev=6,t.t0=t.catch(1),Va("RemoteStore","Failed to remove targets %s: %s ",r.targetIds.join(","),t.t0),t.next=11,sh(n,t.t0);case 11:case 22:t.next=29;break;case 13:if(r instanceof nc?n.yu.Kt(r):r instanceof rc?n.yu.Jt(r):n.yu.jt(r),i.isEqual(uo.min())){t.next=29;break}return t.prev=14,t.next=17,gl(n.localStore);case 17:if(s=t.sent,t.t1=i.compareTo(s)>=0,!t.t1){t.next=22;break}return t.next=22,function(e,t){var n=e.yu.Zt(t);return n.targetChanges.forEach((function(n,r){if(n.resumeToken.approximateByteSize()>0){var i=e.du.get(r);i&&e.du.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((function(t){var n=e.du.get(t);if(n){e.du.set(t,n.withResumeToken(Mo.EMPTY_BYTE_STRING,n.snapshotVersion)),Jl(e,t);var r=new Kc(n.target,t,1,n.sequenceNumber);Xl(e,r)}})),e.remoteSyncer.applyRemoteEvent(n)}(n,i);case 24:return t.prev=24,t.t2=t.catch(14),Va("RemoteStore","Failed to raise snapshot:",t.t2),t.next=29,sh(n,t.t2);case 29:case"end":return t.stop()}}),t,null,[[1,6],[14,24]])}))),oh.apply(this,arguments)}function sh(e,t,n){return uh.apply(this,arguments)}function uh(){return(uh=e(a)(e(o).mark((function t(n,r,i){return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Io(r)){t.next=2;break}throw r;case 2:return n._u.add(1),t.next=5,Wl(n);case 5:n.gu.set("Offline"),i||(i=function(){return gl(n.localStore)}),n.asyncQueue.enqueueRetryable(e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Va("RemoteStore","Retrying IndexedDB access"),e.next=3,i();case 3:return n._u.delete(1),e.next=6,Kl(n);case 6:case"end":return e.stop()}}),t)}))));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ch(e,t){return t().catch((function(n){return sh(e,n,t)}))}function lh(e){return hh.apply(this,arguments)}function hh(){return(hh=e(a)(e(o).mark((function t(n){var r,i,a,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=Wa(n),i=Ah(r),a=r.fu.length>0?r.fu[r.fu.length-1].batchId:-1;case 2:if(!fh(r)){e.next=19;break}return e.prev=3,e.next=6,bl(r.localStore,a);case 6:if(null!==(s=e.sent)){e.next=10;break}return 0===r.fu.length&&i.Fo(),e.abrupt("break",19);case 10:a=s.batchId,dh(r,s),e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(3),e.next=17,sh(r,e.t0);case 17:e.next=2;break;case 19:vh(r)&&ph(r);case 20:case"end":return e.stop()}}),t,null,[[3,13]])})))).apply(this,arguments)}function fh(e){return Zl(e)&&e.fu.length<10}function dh(e,t){e.fu.push(t);var n=Ah(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function vh(e){return Zl(e)&&!Ah(e).No()&&e.fu.length>0}function ph(e){Ah(e).start()}function yh(e){return mh.apply(this,arguments)}function mh(){return(mh=e(a)(e(o).mark((function t(n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Ah(n).eu();case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function gh(e){return kh.apply(this,arguments)}function kh(){return(kh=e(a)(e(o).mark((function t(n){var r,i,a,s,u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=Ah(n),i=!0,a=!1,s=void 0,e.prev=2,u=n.fu[Symbol.iterator]();!(i=(c=u.next()).done);i=!0)l=c.value,r.Xo(l.mutations);e.next=10;break;case 6:e.prev=6,e.t0=e.catch(2),a=!0,s=e.t0;case 10:e.prev=10,e.prev=11,i||null==u.return||u.return();case 13:if(e.prev=13,!a){e.next=16;break}throw s;case 16:return e.finish(13);case 17:return e.finish(10);case 18:case"end":return e.stop()}}),t,null,[[2,6,10,18],[11,,13,17]])})))).apply(this,arguments)}function wh(e,t,n){return bh.apply(this,arguments)}function bh(){return(bh=e(a)(e(o).mark((function t(n,r,i){var a,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.fu.shift(),s=Bc.from(a,r,i),e.next=3,ch(n,(function(){return n.remoteSyncer.applySuccessfulWrite(s)}));case 3:return e.next=5,lh(n);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function xh(e,t){return Th.apply(this,arguments)}function Th(){return Th=e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=r&&Ah(n).Yo,!t.t0){t.next=4;break}return t.next=4,function(){var t=e(a)(e(o).mark((function t(n,r){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Uu(a=r.code)||a===za.ABORTED){e.next=7;break}return i=n.fu.shift(),Ah(n).Mo(),e.next=5,ch(n,(function(){return n.remoteSyncer.rejectFailedWrite(i.batchId,r)}));case 5:return e.next=7,lh(n);case 7:case 8:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()(n,r);case 4:vh(n)&&ph(n);case 5:case"end":return t.stop()}}),t)}))),Th.apply(this,arguments)}function Eh(e,t){return Ih.apply(this,arguments)}function Ih(){return(Ih=e(a)(e(o).mark((function t(n,r){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=Wa(n)).asyncQueue.verifyOperationInProgress(),Va("RemoteStore","RemoteStore received new credentials"),a=Zl(i),i._u.add(3),e.next=6,Wl(i);case 6:return a&&i.gu.set("Unknown"),e.next=9,i.remoteSyncer.handleCredentialChange(r);case 9:return i._u.delete(3),e.next=12,Kl(i);case 12:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function _h(e,t){return Sh.apply(this,arguments)}function Sh(){return(Sh=e(a)(e(o).mark((function t(n,r){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=Wa(n),!r){e.next=7;break}return i._u.delete(2),e.next=5,Kl(i);case 5:e.next=13;break;case 7:if(e.t0=r,e.t0){e.next=13;break}return i._u.add(2),e.next=12,Wl(i);case 12:i.gu.set("Unknown");case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ch(t){return t.pu||(t.pu=(r=t.datastore,i=t.asyncQueue,s={Yr:th.bind(null,t),Zr:rh.bind(null,t),Wo:ah.bind(null,t)},(u=Wa(r)).su(),new Ul(i,u.connection,u.authCredentials,u.appCheckCredentials,u.yt,s)),t.wu.push((n=e(a)(e(o).mark((function n(r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=4;break}t.pu.Mo(),$l(t)?Yl(t):t.gu.set("Unknown"),e.next=7;break;case 4:return e.next=6,t.pu.stop();case 6:eh(t);case 7:case"end":return e.stop()}}),n)}))),function(e){return n.apply(this,arguments)}))),t.pu;var n,r,i,s,u}function Ah(t){return t.Iu||(t.Iu=(r=t.datastore,i=t.asyncQueue,s={Yr:yh.bind(null,t),Zr:xh.bind(null,t),tu:gh.bind(null,t),Zo:wh.bind(null,t)},(u=Wa(r)).su(),new Vl(i,u.connection,u.authCredentials,u.appCheckCredentials,u.yt,s)),t.wu.push((n=e(a)(e(o).mark((function n(r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=6;break}return t.Iu.Mo(),e.next=4,lh(t);case 4:e.next=9;break;case 6:return e.next=8,t.Iu.stop();case 8:t.fu.length>0&&(Va("RemoteStore","Stopping write stream with ".concat(t.fu.length," pending writes")),t.fu=[]);case 9:case"end":return e.stop()}}),n)}))),function(e){return n.apply(this,arguments)}))),t.Iu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */;var n,r,i,s,u}var Nh=function(){"use strict";function t(n,r,i,a,o){e(s)(this,t),this.asyncQueue=n,this.timerId=r,this.targetTimeMs=i,this.op=a,this.removalCallback=o,this.deferred=new Qa,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((function(e){}))}return e(c)(t,[{key:"start",value:function(e){var t=this;this.timerHandle=setTimeout((function(){return t.handleDelayElapsed()}),e)}},{key:"skipDelay",value:function(){return this.handleDelayElapsed()}},{key:"cancel",value:function(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Ga(za.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}},{key:"handleDelayElapsed",value:function(){var e=this;this.asyncQueue.enqueueAndForget((function(){return null!==e.timerHandle?(e.clearTimeout(),e.op().then((function(t){return e.deferred.resolve(t)}))):Promise.resolve()}))}},{key:"clearTimeout",value:function(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}],[{key:"createAndSchedule",value:function(e,n,r,i,a){var o=new t(e,n,Date.now()+r,i,a);return o.start(r),o}}]),t}();function Oh(e,t){if(ja("AsyncQueue","".concat(t,": ").concat(e)),Io(e))return new Ga(za.UNAVAILABLE,"".concat(t,": ").concat(e));throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dh=function(){"use strict";function t(n){e(s)(this,t),this.comparator=n?function(e,t){return n(e,t)||vo.comparator(e.key,t.key)}:function(e,t){return vo.comparator(e.key,t.key)},this.keyedMap=Hu(),this.sortedSet=new Ss(this.comparator)}return e(c)(t,[{key:"has",value:function(e){return null!=this.keyedMap.get(e)}},{key:"get",value:function(e){return this.keyedMap.get(e)}},{key:"first",value:function(){return this.sortedSet.minKey()}},{key:"last",value:function(){return this.sortedSet.maxKey()}},{key:"isEmpty",value:function(){return this.sortedSet.isEmpty()}},{key:"indexOf",value:function(e){var t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}},{key:"size",get:function(){return this.sortedSet.size}},{key:"forEach",value:function(e){this.sortedSet.inorderTraversal((function(t,n){return e(t),!1}))}},{key:"add",value:function(e){var t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}},{key:"delete",value:function(e){var t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}},{key:"isEqual",value:function(e){if(!(e instanceof t))return!1;if(this.size!==e.size)return!1;for(var n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();n.hasNext();){var i=n.getNext().key,a=r.getNext().key;if(!i.isEqual(a))return!1}return!0}},{key:"toString",value:function(){var e=[];return this.forEach((function(t){e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}},{key:"copy",value:function(e,n){var r=new t;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}],[{key:"emptySet",value:function(e){return new t(e.comparator)}}]),t}(),Rh=function(){"use strict";function t(){e(s)(this,t),this.Tu=new Ss(vo.comparator)}return e(c)(t,[{key:"track",value:function(e){var t=e.doc.key,n=this.Tu.get(t);n?0!==e.type&&3===n.type?this.Tu=this.Tu.insert(t,e):3===e.type&&1!==n.type?this.Tu=this.Tu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Tu=this.Tu.remove(t):1===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):Ka():this.Tu=this.Tu.insert(t,e)}},{key:"Eu",value:function(){var e=[];return this.Tu.inorderTraversal((function(t,n){e.push(n)})),e}}]),t}(),Lh=function(){"use strict";function t(n,r,i,a,o,u,c,l,h){e(s)(this,t),this.query=n,this.docs=r,this.oldDocs=i,this.docChanges=a,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}return e(c)(t,[{key:"hasPendingWrites",get:function(){return!this.mutatedKeys.isEmpty()}},{key:"isEqual",value:function(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ys(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;var t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(var r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}],[{key:"fromInitialDocuments",value:function(e,n,r,i,a){var o=[];return n.forEach((function(e){o.push({type:0,doc:e})})),new t(e,n,Dh.emptySet(n),o,r,i,!0,!1,a)}}]),t}(),Ph=function t(){"use strict";e(s)(this,t),this.Au=void 0,this.listeners=[]},Mh=function t(){"use strict";e(s)(this,t),this.queries=new ju((function(e){return $s(e)}),Ys),this.onlineState="Unknown",this.Ru=new Set};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(e,t){return Uh.apply(this,arguments)}function Uh(){return(Uh=e(a)(e(o).mark((function t(n,r){var i,a,s,u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=Wa(n),a=r.query,s=!1,(u=i.queries.get(a))||(s=!0,u=new Ph),!s){e.next=13;break}return e.prev=3,e.next=6,i.onListen(a);case 6:u.Au=e.sent,e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(3),c=Oh(e.t0,"Initialization of query '".concat(Zs(r.query),"' failed")),e.abrupt("return",void r.onError(c));case 13:i.queries.set(a,u),u.listeners.push(r),r.bu(i.onlineState),u.Au&&r.Pu(u.Au)&&Kh(i);case 14:case"end":return e.stop()}}),t,null,[[3,9]])})))).apply(this,arguments)}function Vh(e,t){return jh.apply(this,arguments)}function jh(){return(jh=e(a)(e(o).mark((function t(n,r){var i,a,s,u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=Wa(n),a=r.query,s=!1,(u=i.queries.get(a))&&(c=u.listeners.indexOf(r))>=0&&(u.listeners.splice(c,1),s=0===u.listeners.length),!s){e.next=6;break}return e.abrupt("return",(i.queries.delete(a),i.onUnlisten(a)));case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Bh(e,t){var n=Wa(e),r=!1,i=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value,l=c.query,h=n.queries.get(l);if(h){var f=!0,d=!1,v=void 0;try{for(var p,y=h.listeners[Symbol.iterator]();!(f=(p=y.next()).done);f=!0){p.value.Pu(c)&&(r=!0)}}catch(e){d=!0,v=e}finally{try{f||null==y.return||y.return()}finally{if(d)throw v}}h.Au=c}}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}r&&Kh(n)}function qh(e,t,n){var r=Wa(e),i=r.queries.get(t),a=!0,o=!1,s=void 0;if(i)try{for(var u,c=i.listeners[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){u.value.onError(n)}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}r.queries.delete(t)}function Kh(e){e.Ru.forEach((function(e){e.next()}))}var Hh=function(){"use strict";function t(n,r,i){e(s)(this,t),this.query=n,this.vu=r,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=i||{}}return e(c)(t,[{key:"Pu",value:function(e){if(!this.options.includeMetadataChanges){var t=[],n=!0,r=!1,i=void 0;try{for(var a,o=e.docChanges[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;3!==s.type&&t.push(s)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}e=new Lh(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}var u=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),u=!0):this.Cu(e,this.onlineState)&&(this.xu(e),u=!0),this.Su=e,u}},{key:"onError",value:function(e){this.vu.error(e)}},{key:"bu",value:function(e){this.onlineState=e;var t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}},{key:"Cu",value:function(e,t){if(!e.fromCache)return!0;var n="Offline"!==t;return(!this.options.Nu||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}},{key:"Du",value:function(e){if(e.docChanges.length>0)return!0;var t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}},{key:"xu",value:function(e){e=Lh.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Wh=function t(n){"use strict";e(s)(this,t),this.key=n},zh=function t(n){"use strict";e(s)(this,t),this.key=n},Gh=function(){"use strict";function t(n,r){e(s)(this,t),this.query=n,this.qu=r,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Yu(),this.mutatedKeys=Yu(),this.Gu=nu(n),this.Qu=new Dh(this.Gu)}return e(c)(t,[{key:"ju",get:function(){return this.qu}},{key:"Wu",value:function(e,t){var n=this,r=t?t.zu:new Rh,i=t?t.Qu:this.Qu,a=t?t.mutatedKeys:this.mutatedKeys,o=i,s=!1,u="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,c="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((function(e,t){var l=i.get(e),h=eu(n.query,t)?t:null,f=!!l&&n.mutatedKeys.has(l.key),d=!!h&&(h.hasLocalMutations||n.mutatedKeys.has(h.key)&&h.hasCommittedMutations),v=!1;l&&h?l.data.isEqual(h.data)?f!==d&&(r.track({type:3,doc:h}),v=!0):n.Hu(l,h)||(r.track({type:2,doc:h}),v=!0,(u&&n.Gu(h,u)>0||c&&n.Gu(h,c)<0)&&(s=!0)):!l&&h?(r.track({type:0,doc:h}),v=!0):l&&!h&&(r.track({type:1,doc:l}),v=!0,(u||c)&&(s=!0)),v&&(h?(o=o.add(h),a=d?a.add(e):a.delete(e)):(o=o.delete(e),a=a.delete(e)))})),null!==this.query.limit)for(;o.size>this.query.limit;){var l="F"===this.query.limitType?o.last():o.first();o=o.delete(l.key),a=a.delete(l.key),r.track({type:1,doc:l})}return{Qu:o,zu:r,$i:s,mutatedKeys:a}}},{key:"Hu",value:function(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}},{key:"applyChanges",value:function(e,t,n){var r=this,i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;var a=e.zu.Eu();a.sort((function(e,t){return n=e.type,i=t.type,(a=function(e){switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ka()}})(n)-a(i)||r.Gu(e.doc,t.doc);var n,i,a})),this.Ju(n);var o=t?this.Yu():[],s=0===this.Ku.size&&this.current?1:0,u=s!==this.Uu;return this.Uu=s,0!==a.length||u?{snapshot:new Lh(this.query,e.Qu,i,a,e.mutatedKeys,0===s,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}},{key:"bu",value:function(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Rh,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}},{key:"Zu",value:function(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}},{key:"Ju",value:function(e){var t=this;e&&(e.addedDocuments.forEach((function(e){return t.qu=t.qu.add(e)})),e.modifiedDocuments.forEach((function(e){})),e.removedDocuments.forEach((function(e){return t.qu=t.qu.delete(e)})),this.current=e.current)}},{key:"Yu",value:function(){var e=this;if(!this.current)return[];var t=this.Ku;this.Ku=Yu(),this.Qu.forEach((function(t){e.Zu(t.key)&&(e.Ku=e.Ku.add(t.key))}));var n=[];return t.forEach((function(t){e.Ku.has(t)||n.push(new zh(t))})),this.Ku.forEach((function(e){t.has(e)||n.push(new Wh(e))})),n}},{key:"tc",value:function(e){this.qu=e.Hi,this.Ku=Yu();var t=this.Wu(e.documents);return this.applyChanges(t,!0)}},{key:"ec",value:function(){return Lh.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.Uu,this.hasCachedResults)}}]),t}(),Qh=function t(n,r,i){"use strict";e(s)(this,t),this.query=n,this.targetId=r,this.view=i},Xh=function t(n){"use strict";e(s)(this,t),this.key=n,this.nc=!1},Jh=function(){"use strict";function t(n,r,i,a,o,u){e(s)(this,t),this.localStore=n,this.remoteStore=r,this.eventManager=i,this.sharedClientState=a,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.sc={},this.ic=new ju((function(e){return $s(e)}),Ys),this.rc=new Map,this.oc=new Set,this.uc=new Ss(vo.comparator),this.cc=new Map,this.ac=new nl,this.hc={},this.lc=new Map,this.fc=Jc.vn(),this.onlineState="Unknown",this.dc=void 0}return e(c)(t,[{key:"isPrimaryClient",get:function(){return!0===this.dc}}]),t}();function Yh(e,t){return $h.apply(this,arguments)}function $h(){return($h=e(a)(e(o).mark((function t(n,r){var i,a,s,u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=Sf(n),!(u=i.ic.get(r))){e.next=7;break}a=u.targetId,i.sharedClientState.addLocalQueryTarget(a),s=u.view.ec(),e.next=16;break;case 7:return e.next=9,xl(i.localStore,Xs(r));case 9:return c=e.sent,i.isPrimaryClient&&Gl(i.remoteStore,c),l=i.sharedClientState.addLocalQueryTarget(c.targetId),a=c.targetId,e.next=15,Zh(i,r,a,"current"===l,c.resumeToken);case 15:s=e.sent;case 16:return e.abrupt("return",s);case 17:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Zh(e,t,n,r,i){return ef.apply(this,arguments)}function ef(){return ef=e(a)(e(o).mark((function t(n,r,i,s,u){var c,l,h,f,d,v;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n._c=function(t,r,i){return(s=e(a)(e(o).mark((function t(n,r,i,a){var s,u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=r.view.Wu(i),e.t0=s.$i,!e.t0){e.next=6;break}return e.next=5,Il(n.localStore,r.query,!1).then((function(e){var t=e.documents;return r.view.Wu(t,s)}));case 5:s=e.sent;case 6:return u=a&&a.targetChanges.get(r.targetId),c=r.view.applyChanges(s,n.isPrimaryClient,u),e.abrupt("return",(kf(n,r.targetId,c.Xu),c.snapshot));case 8:case"end":return e.stop()}}),t)}))),function(e,t,n,r){return s.apply(this,arguments)})(n,t,r,i);var s},t.next=3,Il(n.localStore,r,!0);case 3:return c=t.sent,l=new Gh(r,c.Hi),h=l.Wu(c.documents),f=tc.createSynthesizedTargetChangeForCurrentChange(i,s&&"Offline"!==n.onlineState,u),d=l.applyChanges(h,n.isPrimaryClient,f),kf(n,i,d.Xu),v=new Qh(r,i,l),t.abrupt("return",(n.ic.set(r,v),n.rc.has(i)?n.rc.get(i).push(r):n.rc.set(i,[r]),d.snapshot));case 11:case"end":return t.stop()}}),t)}))),ef.apply(this,arguments)}function tf(e,t){return nf.apply(this,arguments)}function nf(){return(nf=e(a)(e(o).mark((function t(n,r){var i,a,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=Wa(n),a=i.ic.get(r),!((s=i.rc.get(a.targetId)).length>1)){e.next=3;break}return e.abrupt("return",(i.rc.set(a.targetId,s.filter((function(e){return!Ys(e,r)}))),void i.ic.delete(r)));case 3:if(!i.isPrimaryClient){e.next=11;break}if(i.sharedClientState.removeLocalQueryTarget(a.targetId),e.t0=i.sharedClientState.isActiveQueryTarget(a.targetId),e.t0){e.next=9;break}return e.next=9,Tl(i.localStore,a.targetId,!1).then((function(){i.sharedClientState.clearQueryState(a.targetId),Ql(i.remoteStore,a.targetId),mf(i,a.targetId)})).catch(xo);case 9:e.next=14;break;case 11:return mf(i,a.targetId),e.next=14,Tl(i.localStore,a.targetId,!0);case 14:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function rf(e,t,n){return af.apply(this,arguments)}function af(){return(af=e(a)(e(o).mark((function t(n,r,i){var a,s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Cf(n),e.prev=1,e.next=4,function(e,t){var n,r,i=Wa(e),a=so.now(),o=t.reduce((function(e,t){return e.add(t.key)}),Yu());return i.persistence.runTransaction("Locally write mutations","readwrite",(function(e){var s=qu(),u=Yu();return i.Gi.getEntries(e,o).next((function(e){(s=e).forEach((function(e,t){t.isValidDocument()||(u=u.add(e))}))})).next((function(){return i.localDocuments.getOverlayedDocuments(e,s)})).next((function(r){n=r;var o=[],s=!0,u=!1,c=void 0;try{for(var l,h=t[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var f=l.value,d=_u(f,n.get(f.key).overlayedDocument);null!=d&&o.push(new Au(f.key,d,Ls(d.value.mapValue),wu.exists(!0)))}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}return i.mutationQueue.addMutationBatch(e,a,o,t)})).next((function(t){r=t;var a=t.applyToLocalDocumentSet(n,u);return i.documentOverlayCache.saveOverlays(e,t.batchId,a)}))})).then((function(){return{batchId:r.batchId,changes:Wu(n)}}))}(a.localStore,r);case 4:return s=e.sent,a.sharedClientState.addPendingMutation(s.batchId),t=a,o=s.batchId,c=i,l=void 0,(l=t.hc[t.currentUser.toKey()])||(l=new Ss(ao)),l=l.insert(o,c),t.hc[t.currentUser.toKey()]=l,e.next=9,xf(a,s.changes);case 9:return e.next=11,lh(a.remoteStore);case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),u=Oh(e.t0,"Failed to persist write"),i.reject(u);case 17:case"end":return e.stop()}var t,o,c,l}),t,null,[[1,13]])})))).apply(this,arguments)}function of(e,t){return sf.apply(this,arguments)}function sf(){return(sf=e(a)(e(o).mark((function t(n,r){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Wa(n),e.prev=1,e.next=4,kl(i.localStore,r);case 4:return a=e.sent,r.targetChanges.forEach((function(e,t){var n=i.cc.get(t);n&&(Ha(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?n.nc=!0:e.modifiedDocuments.size>0?Ha(n.nc):e.removedDocuments.size>0&&(Ha(n.nc),n.nc=!1))})),e.next=8,xf(i,a,r);case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(1),e.next=14,xo(e.t0);case 14:case"end":return e.stop()}}),t,null,[[1,10]])})))).apply(this,arguments)}function uf(e,t,n){var r=Wa(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){var i=[];r.ic.forEach((function(e,n){var r=n.view.bu(t);r.snapshot&&i.push(r.snapshot)})),function(e,t){var n=Wa(e);n.onlineState=t;var r=!1;n.queries.forEach((function(e,n){var i=!0,a=!1,o=void 0;try{for(var s,u=n.listeners[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){s.value.bu(t)&&(r=!0)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}})),r&&Kh(n)}(r.eventManager,t),i.length&&r.sc.Wo(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}function cf(e,t,n){return lf.apply(this,arguments)}function lf(){return(lf=e(a)(e(o).mark((function t(n,r,i){var a,s,u,c,l,h;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((a=Wa(n)).sharedClientState.updateQueryState(r,"rejected",i),s=a.cc.get(r),!(u=s&&s.key)){e.next=14;break}return c=(c=new Ss(vo.comparator)).insert(u,Ps.newNoDocument(u,uo.min())),l=Yu().add(u),h=new ec(uo.min(),new Map,new Ns(ao),c,l),e.next=9,of(a,h);case 9:a.uc=a.uc.remove(u),a.cc.delete(r),bf(a),e.next=16;break;case 14:return e.next=16,Tl(a.localStore,r,!1).then((function(){return mf(a,r,i)})).catch(xo);case 16:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function hf(e,t){return ff.apply(this,arguments)}function ff(){return(ff=e(a)(e(o).mark((function t(n,r){var i,a,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Wa(n),a=r.batch.batchId,e.prev=1,e.next=4,ml(i.localStore,r);case 4:return s=e.sent,yf(i,a,null),pf(i,a),i.sharedClientState.updateMutationState(a,"acknowledged"),e.next=10,xf(i,s);case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(1),e.next=16,xo(e.t0);case 16:case"end":return e.stop()}}),t,null,[[1,12]])})))).apply(this,arguments)}function df(e,t,n){return vf.apply(this,arguments)}function vf(){return(vf=e(a)(e(o).mark((function t(n,r,i){var a,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Wa(n),e.prev=1,e.next=4,function(e,t){var n=Wa(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(function(e){var r;return n.mutationQueue.lookupMutationBatch(e,t).next((function(t){return Ha(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)})).next((function(){return n.mutationQueue.performConsistencyCheck(e)})).next((function(){return n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)})).next((function(){return n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)})).next((function(){return n.localDocuments.getDocuments(e,r)}))}))}(a.localStore,r);case 4:return s=e.sent,yf(a,r,i),pf(a,r),a.sharedClientState.updateMutationState(r,"rejected",i),e.next=10,xf(a,s);case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(1),e.next=16,xo(e.t0);case 16:case"end":return e.stop()}}),t,null,[[1,12]])})))).apply(this,arguments)}function pf(e,t){(e.lc.get(t)||[]).forEach((function(e){e.resolve()})),e.lc.delete(t)}function yf(e,t,n){var r=Wa(e),i=r.hc[r.currentUser.toKey()];if(i){var a=i.get(t);a&&(n?a.reject(n):a.resolve(),i=i.remove(t)),r.hc[r.currentUser.toKey()]=i}}function mf(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e.sharedClientState.removeLocalQueryTarget(t);var r=!0,i=!1,a=void 0;try{for(var o,s=e.rc.get(t)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;e.ic.delete(u),n&&e.sc.wc(u,n)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach((function(t){e.ac.containsKey(t)||gf(e,t)}))}function gf(e,t){e.oc.delete(t.path.canonicalString());var n=e.uc.get(t);null!==n&&(Ql(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),bf(e))}function kf(e,t,n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;u instanceof Wh?(e.ac.addReference(u.key,t),wf(e,u)):u instanceof zh?(Va("SyncEngine","Document no longer in limbo: "+u.key),e.ac.removeReference(u.key,t),e.ac.containsKey(u.key)||gf(e,u.key)):Ka()}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}function wf(e,t){var n=t.key,r=n.path.canonicalString();e.uc.get(n)||e.oc.has(r)||(Va("SyncEngine","New document in limbo: "+n),e.oc.add(r),bf(e))}function bf(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){var t=e.oc.values().next().value;e.oc.delete(t);var n=new vo(lo.fromString(t)),r=e.fc.next();e.cc.set(r,new Xh(n)),e.uc=e.uc.insert(n,r),Gl(e.remoteStore,new Kc(Xs(Ks(n.path)),r,2,_o.at))}}function xf(e,t,n){return Tf.apply(this,arguments)}function Tf(){return Tf=e(a)(e(o).mark((function t(n,r,i){var s,u,c,l;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s=Wa(n),u=[],c=[],l=[],t.t0=s.ic.isEmpty(),t.t0){t.next=9;break}return s.ic.forEach((function(e,t){l.push(s._c(t,r,i).then((function(e){if((e||i)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(t.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){u.push(e);var n=hl.Ci(t.targetId,e);c.push(n)}})))})),t.next=6,Promise.all(l);case 6:return s.sc.Wo(u),t.next=9,function(){var t=e(a)(e(o).mark((function t(n,r){var i,a,s,u,c,l,h,f,d,v,p;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Wa(n),e.prev=1,e.next=4,i.persistence.runTransaction("notifyLocalViewChanges","readwrite",(function(e){return Eo.forEach(r,(function(t){return Eo.forEach(t.Si,(function(n){return i.persistence.referenceDelegate.addReference(e,t.targetId,n)})).next((function(){return Eo.forEach(t.Di,(function(n){return i.persistence.referenceDelegate.removeReference(e,t.targetId,n)}))}))}))}));case 4:e.next=11;break;case 6:if(e.prev=6,e.t0=e.catch(1),Io(e.t0)){e.next=10;break}throw e.t0;case 10:Va("LocalStore","Failed to update sequence numbers: "+e.t0);case 11:for(a=!0,s=!1,u=void 0,e.prev=12,c=r[Symbol.iterator]();!(a=(l=c.next()).done);a=!0)h=l.value,f=h.targetId,h.fromCache||(d=i.qi.get(f),v=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(v),i.qi=i.qi.insert(f,p));e.next=20;break;case 16:e.prev=16,e.t1=e.catch(12),s=!0,u=e.t1;case 20:e.prev=20,e.prev=21,a||null==c.return||c.return();case 23:if(e.prev=23,!s){e.next=26;break}throw u;case 26:return e.finish(23);case 27:return e.finish(20);case 28:case"end":return e.stop()}}),t,null,[[1,6],[12,16,20,28],[21,,23,27]])})));return function(e,n){return t.apply(this,arguments)}}()(s.localStore,c);case 9:case"end":return t.stop()}}),t)}))),Tf.apply(this,arguments)}function Ef(e,t){return If.apply(this,arguments)}function If(){return(If=e(a)(e(o).mark((function t(n,r){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=Wa(n)).currentUser.isEqual(r)){e.next=11;break}return Va("SyncEngine","User change. New user:",r.toKey()),e.next=5,pl(i.localStore,r);case 5:return a=e.sent,i.currentUser=r,(t=i).lc.forEach((function(e){e.forEach((function(e){e.reject(new Ga(za.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.lc.clear(),i.sharedClientState.handleUserChange(r,a.removedBatchIds,a.addedBatchIds),e.next=11,xf(i,a.ji);case 11:case"end":return e.stop()}var t}),t)})))).apply(this,arguments)}function _f(e,t){var n=Wa(e),r=n.cc.get(t);if(r&&r.nc)return Yu().add(r.key);var i=Yu(),a=n.rc.get(t);if(!a)return i;var o=!0,s=!1,u=void 0;try{for(var c,l=a[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var h=c.value,f=n.ic.get(h);i=i.unionWith(f.view.ju)}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return i}function Sf(e){var t=Wa(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=of.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=_f.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=cf.bind(null,t),t.sc.Wo=Bh.bind(null,t.eventManager),t.sc.wc=qh.bind(null,t.eventManager),t}function Cf(e){var t=Wa(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=hf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=df.bind(null,t),t}var Af=function(){"use strict";function t(){e(s)(this,t),this.synchronizeTabs=!1}return e(c)(t,[{key:"initialize",value:function(t){var n=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.yt=Pl(t.databaseInfo.databaseId),n.sharedClientState=n.gc(t),n.persistence=n.yc(t),e.next=5,n.persistence.start();case 5:n.localStore=n.Ic(t),n.gcScheduler=n.Tc(t,n.localStore),n.indexBackfillerScheduler=n.Ec(t,n.localStore);case 8:case"end":return e.stop()}}),r)})))()}},{key:"Tc",value:function(e,t){return null}},{key:"Ec",value:function(e,t){return null}},{key:"Ic",value:function(e){return vl(this.persistence,new fl,e.initialUser,this.yt)}},{key:"yc",value:function(e){return new ul(ll.Bs,this.yt)}},{key:"gc",value:function(e){return new Cl}},{key:"terminate",value:function(){var t=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.gcScheduler&&t.gcScheduler.stop(),e.next=3,t.sharedClientState.shutdown();case 3:return e.next=5,t.persistence.shutdown();case 5:case"end":return e.stop()}}),n)})))()}}]),t}(),Nf=function(){"use strict";function t(){e(s)(this,t)}return e(c)(t,[{key:"initialize",value:function(t,n){var r=this;return e(a)(e(o).mark((function i(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=r.localStore,e.t0){e.next=12;break}return r.localStore=t.localStore,r.sharedClientState=t.sharedClientState,r.datastore=r.createDatastore(n),r.remoteStore=r.createRemoteStore(n),r.eventManager=r.createEventManager(n),r.syncEngine=r.createSyncEngine(n,!t.synchronizeTabs),r.sharedClientState.onlineStateHandler=function(e){return uf(r.syncEngine,e,1)},r.remoteStore.remoteSyncer.handleCredentialChange=Ef.bind(null,r.syncEngine),e.next=12,_h(r.remoteStore,r.syncEngine.isPrimaryClient);case 12:case"end":return e.stop()}}),i)})))()}},{key:"createEventManager",value:function(e){return new Mh}},{key:"createDatastore",value:function(e){var t,n,r,i=Pl(e.databaseInfo.databaseId),a=(t=e.databaseInfo,new Rl(t));return n=e.authCredentials,r=e.appCheckCredentials,new jl(n,r,a,i)}},{key:"createRemoteStore",value:function(e){var t,n,r,i,a,o=this;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=function(e){return uf(o.syncEngine,e,0)},a=Nl.C()?new Nl:new Al,new ql(t,n,r,i,a)}},{key:"createSyncEngine",value:function(e,t){return n=this.localStore,r=this.remoteStore,i=this.eventManager,a=this.sharedClientState,o=e.initialUser,s=e.maxConcurrentLimboResolutions,u=t,c=new Jh(n,r,i,a,o,s),u&&(c.dc=!0),c;var n,r,i,a,o,s,u,c}},{key:"terminate",value:function(){return(t=e(a)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Wa(n),Va("RemoteStore","RemoteStore shutting down."),r._u.add(5),e.next=5,Wl(r);case 5:r.mu.shutdown(),r.gu.set("Unknown");case 7:case"end":return e.stop()}}),t)}))),function(e){return t.apply(this,arguments)})(this.remoteStore);var t}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Of(e,t,n){if(!n)throw new Ga(za.INVALID_ARGUMENT,"Function ".concat(e,"() cannot be called with an empty ").concat(t,"."))}function Df(e){if(!vo.isDocumentKey(e))throw new Ga(za.INVALID_ARGUMENT,"Invalid document reference. Document references must have an even number of segments, but ".concat(e," has ").concat(e.length,"."))}function Rf(e){if(vo.isDocumentKey(e))throw new Ga(za.INVALID_ARGUMENT,"Invalid collection reference. Collection references must have an odd number of segments, but ".concat(e," has ").concat(e.length,"."))}function Lf(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e="".concat(e.substring(0,20),"...")),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";var t=(n=e).constructor?n.constructor.name:null;return t?"a custom ".concat(t," object"):"an object"}var n;return"function"==typeof e?"a function":Ka()}function Pf(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Ga(za.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");var n=Lf(e);throw new Ga(za.INVALID_ARGUMENT,"Expected type '".concat(t.name,"', but it was: ").concat(n))}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Mf=new Map,Ff=function(){"use strict";function t(n){var r;if(e(s)(this,t),void 0===n.host){if(void 0!==n.ssl)throw new Ga(za.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=n.host,this.ssl=null===(r=n.ssl)||void 0===r||r;if(this.credentials=n.credentials,this.ignoreUndefinedProperties=!!n.ignoreUndefinedProperties,void 0===n.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==n.cacheSizeBytes&&n.cacheSizeBytes<1048576)throw new Ga(za.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=n.cacheSizeBytes}this.experimentalForceLongPolling=!!n.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!n.experimentalAutoDetectLongPolling,this.useFetchStreams=!!n.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new Ga(za.INVALID_ARGUMENT,"".concat(e," and ").concat(n," cannot be used together."))}("experimentalForceLongPolling",n.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",n.experimentalAutoDetectLongPolling)}return e(c)(t,[{key:"isEqual",value:function(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}]),t}(),Uf=function(){"use strict";function t(n,r,i,a){e(s)(this,t),this._authCredentials=n,this._appCheckCredentials=r,this._databaseId=i,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ff({}),this._settingsFrozen=!1}return e(c)(t,[{key:"app",get:function(){if(!this._app)throw new Ga(za.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}},{key:"_initialized",get:function(){return this._settingsFrozen}},{key:"_terminated",get:function(){return void 0!==this._terminateTask}},{key:"_setSettings",value:function(e){if(this._settingsFrozen)throw new Ga(za.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ff(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Ja;switch(e.type){case"gapi":var t=e.client;return new eo(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Ga(za.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}},{key:"_getSettings",value:function(){return this._settings}},{key:"_freezeSettings",value:function(){return this._settingsFrozen=!0,this._settings}},{key:"_delete",value:function(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}},{key:"toJSON",value:function(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}},{key:"_terminate",value:function(){return e=this,(t=Mf.get(e))&&(Va("ComponentProvider","Removing Datastore"),Mf.delete(e),t.terminate()),Promise.resolve();var e,t}}]),t}();function Vf(e,t,n){var r,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=(e=Pf(e,Uf))._getSettings();if("firestore.googleapis.com"!==a.host&&a.host!==t&&Ba("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},a),{host:"".concat(t,":").concat(n),ssl:!1})),i.mockUserToken){var o,s;if("string"==typeof i.mockUserToken)o=i.mockUserToken,s=Pa.MOCK_USER;else{o=ie(i.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);var u=i.mockUserToken.sub||i.mockUserToken.user_id;if(!u)throw new Ga(za.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");s=new Pa(u)}e._authCredentials=new Ya(new Xa(o,s))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jf=function(){"use strict";function t(n,r,i){e(s)(this,t),this.converter=r,this._key=i,this.type="document",this.firestore=n}return e(c)(t,[{key:"_path",get:function(){return this._key.path}},{key:"id",get:function(){return this._key.path.lastSegment()}},{key:"path",get:function(){return this._key.path.canonicalString()}},{key:"parent",get:function(){return new qf(this.firestore,this.converter,this._key.path.popLast())}},{key:"withConverter",value:function(e){return new t(this.firestore,e,this._key)}}]),t}(),Bf=function(){"use strict";function t(n,r,i){e(s)(this,t),this.converter=r,this._query=i,this.type="query",this.firestore=n}return e(c)(t,[{key:"withConverter",value:function(e){return new t(this.firestore,e,this._query)}}]),t}(),qf=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(t,i,a){var o;return e(s)(this,r),(o=n.call(this,t,i,Ks(a)))._path=a,o.type="collection",e(y)(o)}return e(c)(r,[{key:"id",get:function(){return this._query.path.lastSegment()}},{key:"path",get:function(){return this._query.path.canonicalString()}},{key:"parent",get:function(){var e=this._path.popLast();return e.isEmpty()?null:new jf(this.firestore,null,new vo(e))}},{key:"withConverter",value:function(e){return new r(this.firestore,e,this._path)}}]),r}(Bf);function Kf(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(t=me(t),Of("collection","path",n),t instanceof Uf){var o,s=(o=lo).fromString.apply(o,[n].concat(e(g)(i)));return Rf(s),new qf(t,null,s)}var u;if(!(t instanceof jf||t instanceof qf))throw new Ga(za.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");var c=t._path.child((u=lo).fromString.apply(u,[n].concat(e(g)(i))));return Rf(c),new qf(t.firestore,null,c)}function Hf(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(t=me(t),1===arguments.length&&(n=io.R()),Of("doc","path",n),t instanceof Uf){var o,s=(o=lo).fromString.apply(o,[n].concat(e(g)(i)));return Df(s),new jf(t,null,new vo(s))}var u;if(!(t instanceof jf||t instanceof qf))throw new Ga(za.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");var c=t._path.child((u=lo).fromString.apply(u,[n].concat(e(g)(i))));return Df(c),new jf(t.firestore,t instanceof qf?t.converter:null,new vo(c))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Wf=function(){"use strict";function t(n){e(s)(this,t),this.observer=n,this.muted=!1}return e(c)(t,[{key:"next",value:function(e){this.observer.next&&this.Rc(this.observer.next,e)}},{key:"error",value:function(e){this.observer.error?this.Rc(this.observer.error,e):ja("Uncaught Error in snapshot listener:",e.toString())}},{key:"bc",value:function(){this.muted=!0}},{key:"Rc",value:function(e,t){var n=this;this.muted||setTimeout((function(){n.muted||e(t)}),0)}}]),t}(),zf=function(){"use strict";function t(n,r,i,u){var c=this;e(s)(this,t);var l,h=this;this.authCredentials=n,this.appCheckCredentials=r,this.asyncQueue=i,this.databaseInfo=u,this.user=Pa.UNAUTHENTICATED,this.clientId=io.R(),this.authCredentialListener=function(){return Promise.resolve()},this.appCheckCredentialListener=function(){return Promise.resolve()},this.authCredentials.start(i,(l=e(a)(e(o).mark((function t(n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Va("FirestoreClient","Received user=",n.uid),e.next=3,h.authCredentialListener(n);case 3:h.user=n;case 4:case"end":return e.stop()}}),t)}))),function(e){return l.apply(this,arguments)})),this.appCheckCredentials.start(i,(function(e){return Va("FirestoreClient","Received new app check token=",e),c.appCheckCredentialListener(e,c.user)}))}return e(c)(t,[{key:"getConfiguration",value:function(){var t=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{asyncQueue:t.asyncQueue,databaseInfo:t.databaseInfo,clientId:t.clientId,authCredentials:t.authCredentials,appCheckCredentials:t.appCheckCredentials,initialUser:t.user,maxConcurrentLimboResolutions:100});case 1:case"end":return e.stop()}}),n)})))()}},{key:"setCredentialChangeListener",value:function(e){this.authCredentialListener=e}},{key:"setAppCheckTokenChangeListener",value:function(e){this.appCheckCredentialListener=e}},{key:"verifyNotTerminated",value:function(){if(this.asyncQueue.isShuttingDown)throw new Ga(za.FAILED_PRECONDITION,"The client has already been terminated.")}},{key:"terminate",value:function(){this.asyncQueue.enterRestrictedMode();var t=new Qa,n=this;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,e.t0=n.onlineComponents,!e.t0){e.next=5;break}return e.next=5,n.onlineComponents.terminate();case 5:if(e.t1=n.offlineComponents,!e.t1){e.next=9;break}return e.next=9,n.offlineComponents.terminate();case 9:n.authCredentials.shutdown(),n.appCheckCredentials.shutdown(),t.resolve(),e.next=18;break;case 14:e.prev=14,e.t2=e.catch(0),i=Oh(e.t2,"Failed to shutdown persistence"),t.reject(i);case 18:case"end":return e.stop()}}),r,null,[[0,14]])})))),t.promise}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(e,t){return Qf.apply(this,arguments)}function Qf(){return Qf=e(a)(e(o).mark((function t(n,r){var i,s;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.asyncQueue.verifyOperationInProgress(),Va("FirestoreClient","Initializing OfflineComponentProvider"),t.next=3,n.getConfiguration();case 3:return i=t.sent,t.next=6,r.initialize(i);case 6:s=i.initialUser,n.setCredentialChangeListener(function(){var t=e(a)(e(o).mark((function t(n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=s.isEqual(n),e.t0){e.next=5;break}return e.next=4,pl(r.localStore,n);case 4:s=n;case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),r.persistence.setDatabaseDeletedListener((function(){return n.terminate()})),n.offlineComponents=r;case 8:case"end":return t.stop()}}),t)}))),Qf.apply(this,arguments)}function Xf(e,t){return Jf.apply(this,arguments)}function Jf(){return(Jf=e(a)(e(o).mark((function t(n,r){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.asyncQueue.verifyOperationInProgress(),e.next=3,Yf(n);case 3:return i=e.sent,Va("FirestoreClient","Initializing OnlineComponentProvider"),e.next=7,n.getConfiguration();case 7:return a=e.sent,e.next=10,r.initialize(i,a);case 10:n.setCredentialChangeListener((function(e){return Eh(r.remoteStore,e)})),n.setAppCheckTokenChangeListener((function(e,t){return Eh(r.remoteStore,t)})),n.onlineComponents=r;case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Yf(e){return $f.apply(this,arguments)}function $f(){return($f=e(a)(e(o).mark((function t(n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=n.offlineComponents,e.t0){e.next=5;break}return Va("FirestoreClient","Using default OfflineComponentProvider"),e.next=5,Gf(n,new Af);case 5:return e.abrupt("return",(e.t0||e.sent,n.offlineComponents));case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Zf(e){return ed.apply(this,arguments)}function ed(){return(ed=e(a)(e(o).mark((function t(n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=n.onlineComponents,e.t0){e.next=5;break}return Va("FirestoreClient","Using default OnlineComponentProvider"),e.next=5,Xf(n,new Nf);case 5:return e.abrupt("return",(e.t0||e.sent,n.onlineComponents));case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function td(e){return Zf(e).then((function(e){return e.syncEngine}))}function nd(e){return rd.apply(this,arguments)}function rd(){return(rd=e(a)(e(o).mark((function t(n){var r,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Zf(n);case 2:return r=e.sent,i=r.eventManager,e.abrupt("return",(i.onListen=Yh.bind(null,r.syncEngine),i.onUnlisten=tf.bind(null,r.syncEngine),i));case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function id(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=new Qa;return t.asyncQueue.enqueueAndForget(e(a)(e(o).mark((function a(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=function(e,t,n,r,i){var a=new Wf({next:function(a){t.enqueueAndForget((function(){return Vh(e,o)}));var s=a.docs.has(n);!s&&a.fromCache?i.reject(new Ga(za.UNAVAILABLE,"Failed to get document because the client is offline.")):s&&a.fromCache&&r&&"server"===r.source?i.reject(new Ga(za.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(a)},error:function(e){return i.reject(e)}}),o=new Hh(Ks(n.path),a,{includeMetadataChanges:!0,Nu:!0});return Fh(e,o)},e.next=3,nd(t);case 3:return e.t1=e.sent,e.t2=t.asyncQueue,e.t3=n,e.t4=r,e.t5=i,e.abrupt("return",(0,e.t0)(e.t1,e.t2,e.t3,e.t4,e.t5));case 9:case"end":return e.stop()}}),a)})))),i.promise}var ad=function(){"use strict";function t(){var n=this;e(s)(this,t),this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Ml(this,"async_queue_retry"),this.Wc=function(){var e=Ll();e&&Va("AsyncQueue","Visibility state changed to "+e.visibilityState),n.xo.Po()};var r=Ll();r&&"function"==typeof r.addEventListener&&r.addEventListener("visibilitychange",this.Wc)}return e(c)(t,[{key:"isShuttingDown",get:function(){return this.qc}},{key:"enqueueAndForget",value:function(e){this.enqueue(e)}},{key:"enqueueAndForgetEvenWhileRestricted",value:function(e){this.zc(),this.Hc(e)}},{key:"enterRestrictedMode",value:function(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;var t=Ll();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Wc)}}},{key:"enqueue",value:function(e){var t=this;if(this.zc(),this.qc)return new Promise((function(){}));var n=new Qa;return this.Hc((function(){return t.qc&&t.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)})).then((function(){return n.promise}))}},{key:"enqueueRetryable",value:function(e){var t=this;this.enqueueAndForget((function(){return t.Lc.push(e),t.Jc()}))}},{key:"Jc",value:function(){var t=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0===t.Lc.length){e.next=14;break}return e.prev=1,e.next=4,t.Lc[0]();case 4:t.Lc.shift(),t.xo.reset(),e.next=13;break;case 8:if(e.prev=8,e.t0=e.catch(1),Io(e.t0)){e.next=12;break}throw e.t0;case 12:Va("AsyncQueue","Operation failed with retryable error: "+e.t0);case 13:t.Lc.length>0&&t.xo.Ro((function(){return t.Jc()}));case 14:case"end":return e.stop()}}),n,null,[[1,8]])})))()}},{key:"Hc",value:function(e){var t=this,n=this.Bc.then((function(){return t.Gc=!0,e().catch((function(e){var n,r;throw t.Kc=e,t.Gc=!1,ja("INTERNAL UNHANDLED ERROR: ",(r=(n=e).message||"",n.stack&&(r=n.stack.includes(n.message)?n.stack:n.message+"\n"+n.stack),r)),e})).then((function(e){return t.Gc=!1,e}))}));return this.Bc=n,n}},{key:"enqueueAfterDelay",value:function(e,t,n){var r=this;this.zc(),this.jc.indexOf(e)>-1&&(t=0);var i=Nh.createAndSchedule(this,e,t,n,(function(e){return r.Yc(e)}));return this.Uc.push(i),i}},{key:"zc",value:function(){this.Kc&&Ka()}},{key:"verifyOperationInProgress",value:function(){}},{key:"Xc",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case 1:return r=t.Bc,e.next=4,r;case 4:if(r!==t.Bc){e.next=1;break}case 5:case"end":return e.stop()}}),n)})))()}},{key:"Zc",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=this.Uc[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){if(i.value.timerId===e)return!0}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return!1}},{key:"ta",value:function(e){var t=this;return this.Xc().then((function(){t.Uc.sort((function(e,t){return e.targetTimeMs-t.targetTimeMs}));var n=!0,r=!1,i=void 0;try{for(var a,o=t.Uc[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s.skipDelay(),"all"!==e&&s.timerId===e)break}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return t.Xc()}))}},{key:"ea",value:function(e){this.jc.push(e)}},{key:"Yc",value:function(e){var t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}]),t}();var od=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(t,i,a,o){var u;return e(s)(this,r),(u=n.call(this,t,i,a,o)).type="firestore",u._queue=new ad,u._persistenceKey=(null==o?void 0:o.name)||"[DEFAULT]",e(y)(u)}return e(c)(r,[{key:"_terminate",value:function(){return this._firestoreClient||ud(this),this._firestoreClient.terminate()}}]),r}(Uf);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(e){return e._firestoreClient||ud(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function ud(e){var t,n,r,i,a,o=e._freezeSettings(),s=(n=e._databaseId,r=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",i=e._persistenceKey,new So(n,r,i,(a=o).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));e._firestoreClient=new zf(e._authCredentials,e._appCheckCredentials,e._queue,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var cd=function(){"use strict";function t(n){e(s)(this,t),this._byteString=n}return e(c)(t,[{key:"toBase64",value:function(){return this._byteString.toBase64()}},{key:"toUint8Array",value:function(){return this._byteString.toUint8Array()}},{key:"toString",value:function(){return"Bytes(base64: "+this.toBase64()+")"}},{key:"isEqual",value:function(e){return this._byteString.isEqual(e._byteString)}}],[{key:"fromBase64String",value:function(e){try{return new t(Mo.fromBase64String(e))}catch(e){throw new Ga(za.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}},{key:"fromUint8Array",value:function(e){return new t(Mo.fromUint8Array(e))}}]),t}(),ld=function(){"use strict";function t(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];e(s)(this,t);for(var a=0;a<r.length;++a)if(0===r[a].length)throw new Ga(za.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new fo(r)}return e(c)(t,[{key:"isEqual",value:function(e){return this._internalPath.isEqual(e._internalPath)}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var hd=function t(n){"use strict";e(s)(this,t),this._methodName=n},fd=function(){"use strict";function t(n,r){if(e(s)(this,t),!isFinite(n)||n<-90||n>90)throw new Ga(za.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+n);if(!isFinite(r)||r<-180||r>180)throw new Ga(za.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=n,this._long=r}return e(c)(t,[{key:"latitude",get:function(){return this._lat}},{key:"longitude",get:function(){return this._long}},{key:"isEqual",value:function(e){return this._lat===e._lat&&this._long===e._long}},{key:"toJSON",value:function(){return{latitude:this._lat,longitude:this._long}}},{key:"_compareTo",value:function(e){return ao(this._lat,e._lat)||ao(this._long,e._long)}}]),t}(),dd=/^__.*__$/,vd=function(){"use strict";function t(n,r,i){e(s)(this,t),this.data=n,this.fieldMask=r,this.fieldTransforms=i}return e(c)(t,[{key:"toMutation",value:function(e,t){return null!==this.fieldMask?new Au(e,this.data,this.fieldMask,t,this.fieldTransforms):new Cu(e,this.data,t,this.fieldTransforms)}}]),t}(),pd=function(){"use strict";function t(n,r,i){e(s)(this,t),this.data=n,this.fieldMask=r,this.fieldTransforms=i}return e(c)(t,[{key:"toMutation",value:function(e,t){return new Au(e,this.data,this.fieldMask,t,this.fieldTransforms)}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ka()}}var md=function(){"use strict";function t(n,r,i,a,o,u){e(s)(this,t),this.settings=n,this.databaseId=r,this.yt=i,this.ignoreUndefinedProperties=a,void 0===o&&this.na(),this.fieldTransforms=o||[],this.fieldMask=u||[]}return e(c)(t,[{key:"path",get:function(){return this.settings.path}},{key:"sa",get:function(){return this.settings.sa}},{key:"ia",value:function(e){return new t(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}},{key:"ra",value:function(e){var t,n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.ua(e),r}},{key:"ca",value:function(e){var t,n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.na(),r}},{key:"aa",value:function(e){return this.ia({path:void 0,oa:!0})}},{key:"ha",value:function(e){return Od(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}},{key:"contains",value:function(e){return void 0!==this.fieldMask.find((function(t){return e.isPrefixOf(t)}))||void 0!==this.fieldTransforms.find((function(t){return e.isPrefixOf(t.field)}))}},{key:"na",value:function(){if(this.path)for(var e=0;e<this.path.length;e++)this.ua(this.path.get(e))}},{key:"ua",value:function(e){if(0===e.length)throw this.ha("Document fields must not be empty");if(yd(this.sa)&&dd.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}]),t}(),gd=function(){"use strict";function t(n,r,i){e(s)(this,t),this.databaseId=n,this.ignoreUndefinedProperties=r,this.yt=i||Pl(n)}return e(c)(t,[{key:"da",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new md({sa:e,methodName:t,fa:n,path:fo.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}]),t}();function kd(e){var t=e._freezeSettings(),n=Pl(e._databaseId);return new gd(e._databaseId,!!t.ignoreUndefinedProperties,n)}function wd(e,t,n,r,i){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},o=e.da(a.merge||a.mergeFields?2:0,t,n,i);Sd("Data must be an object, but it was:",o,r);var s,u,c=Id(r,o);if(a.merge)s=new Ds(o.fieldMask),u=o.fieldTransforms;else if(a.mergeFields){var l=[],h=!0,f=!1,d=void 0;try{for(var v,p=a.mergeFields[Symbol.iterator]();!(h=(v=p.next()).done);h=!0){var y=v.value,m=Cd(t,y,n);if(!o.contains(m))throw new Ga(za.INVALID_ARGUMENT,"Field '".concat(m,"' is specified in your field mask but missing from your input data."));Dd(l,m)||l.push(m)}}catch(e){f=!0,d=e}finally{try{h||null==p.return||p.return()}finally{if(f)throw d}}s=new Ds(l),u=o.fieldTransforms.filter((function(e){return s.covers(e.field)}))}else s=null,u=o.fieldTransforms;return new vd(new Rs(c),s,u)}var bd=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(){return e(s)(this,r),n.apply(this,arguments)}return e(c)(r,[{key:"_toFieldTransform",value:function(e){if(2!==e.sa)throw 1===e.sa?e.ha("".concat(this._methodName,"() can only appear at the top level of your update data")):e.ha("".concat(this._methodName,"() cannot be used with set() unless you pass {merge:true}"));return e.fieldMask.push(e.path),null}},{key:"isEqual",value:function(e){return e instanceof r}}]),r}(hd);function xd(e,t,n,r){var i=e.da(1,t,n);Sd("Data must be an object, but it was:",i,r);var a=[],o=Rs.empty();No(r,(function(e,r){var s=Nd(t,e,n);r=me(r);var u=i.ca(s);if(r instanceof bd)a.push(s);else{var c=Ed(r,u);null!=c&&(a.push(s),o.set(s,c))}}));var s=new Ds(a);return new pd(o,s,i.fieldTransforms)}function Td(e,t,n,r,i,a){var o=e.da(1,t,n),s=[Cd(t,r,n)],u=[i];if(a.length%2!=0)throw new Ga(za.INVALID_ARGUMENT,"Function ".concat(t,"() needs to be called with an even number of arguments that alternate between field names and values."));for(var c=0;c<a.length;c+=2)s.push(Cd(t,a[c])),u.push(a[c+1]);for(var l=[],h=Rs.empty(),f=s.length-1;f>=0;--f)if(!Dd(l,s[f])){var d=s[f],v=u[f];v=me(v);var p=o.ca(d);if(v instanceof bd)l.push(d);else{var y=Ed(v,p);null!=y&&(l.push(d),h.set(d,y))}}var m=new Ds(l);return new pd(h,m,o.fieldTransforms)}function Ed(e,t){if(_d(e=me(e)))return Sd("Unsupported field value:",t,e),Id(e,t);if(e instanceof hd)return function(e,t){if(!yd(t.sa))throw t.ha("".concat(e._methodName,"() can only be used with update() and set()"));if(!t.path)throw t.ha("".concat(e._methodName,"() is not currently supported inside arrays"));var n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&4!==t.sa)throw t.ha("Nested arrays are not supported");return function(e,t){var n=[],r=0,i=!0,a=!1,o=void 0;try{for(var s,u=e[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=Ed(s.value,t.aa(r));null==c&&(c={nullValue:"NULL_VALUE"}),n.push(c),r++}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=me(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return ou(t.yt,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){var n=so.fromDate(e);return{timestampValue:dc(t.yt,n)}}if(e instanceof so){var r=new so(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:dc(t.yt,r)}}if(e instanceof fd)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof cd)return{bytesValue:vc(t.yt,e._byteString)};if(e instanceof jf){var i=t.databaseId,a=e.firestore._databaseId;if(!a.isEqual(i))throw t.ha("Document reference is for database ".concat(a.projectId,"/").concat(a.database," but should be for database ").concat(i.projectId,"/").concat(i.database));return{referenceValue:mc(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ha("Unsupported field value: ".concat(Lf(e)))}(e,t)}function Id(e,t){var n={};return Oo(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):No(e,(function(e,r){var i=Ed(r,t.ra(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function _d(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof so||e instanceof fd||e instanceof cd||e instanceof jf||e instanceof hd)}function Sd(e,t,n){if(!_d(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){var r=Lf(n);throw"an object"===r?t.ha(e+" a custom object"):t.ha(e+" "+r)}var i}function Cd(e,t,n){if((t=me(t))instanceof ld)return t._internalPath;if("string"==typeof t)return Nd(e,t);throw Od("Field path arguments must be of type string or ",e,!1,void 0,n)}var Ad=new RegExp("[~\\*/\\[\\]]");function Nd(t,n,r){if(n.search(Ad)>=0)throw Od("Invalid field path (".concat(n,"). Paths must not contain '~', '*', '/', '[', or ']'"),t,!1,void 0,r);try{return e(u)(ld,e(g)(n.split(".")))._internalPath}catch(e){throw Od("Invalid field path (".concat(n,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"),t,!1,void 0,r)}}function Od(e,t,n,r,i){var a=r&&!r.isEmpty(),o=void 0!==i,s="Function ".concat(t,"() called with invalid data");n&&(s+=" (via `toFirestore()`)"),s+=". ";var u="";return(a||o)&&(u+=" (found",a&&(u+=" in field ".concat(r)),o&&(u+=" in document ".concat(i)),u+=")"),new Ga(za.INVALID_ARGUMENT,s+e+u)}function Dd(e,t){return e.some((function(e){return e.isEqual(t)}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rd=function(){"use strict";function t(n,r,i,a,o){e(s)(this,t),this._firestore=n,this._userDataWriter=r,this._key=i,this._document=a,this._converter=o}return e(c)(t,[{key:"id",get:function(){return this._key.path.lastSegment()}},{key:"ref",get:function(){return new jf(this._firestore,this._converter,this._key)}},{key:"exists",value:function(){return null!==this._document}},{key:"data",value:function(){if(this._document){if(this._converter){var e=new Ld(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}},{key:"get",value:function(e){if(this._document){var t=this._document.data.field(Pd("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}]),t}(),Ld=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(){return e(s)(this,r),n.apply(this,arguments)}return e(c)(r,[{key:"data",value:function(){return e(l)(e(v)(r.prototype),"data",this).call(this)}}]),r}(Rd);function Pd(e,t){return"string"==typeof t?Nd(e,t):t instanceof ld?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Md=function(){"use strict";function t(){e(s)(this,t)}return e(c)(t,[{key:"convertValue",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";switch(Wo(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Vo(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(jo(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Ka()}}},{key:"convertObject",value:function(e,t){var n=this,r={};return No(e.fields,(function(e,i){r[e]=n.convertValue(i,t)})),r}},{key:"convertGeoPoint",value:function(e){return new fd(Vo(e.latitude),Vo(e.longitude))}},{key:"convertArray",value:function(e,t){var n=this;return(e.values||[]).map((function(e){return n.convertValue(e,t)}))}},{key:"convertServerTimestamp",value:function(e,t){switch(t){case"previous":var n=qo(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Ko(e));default:return null}}},{key:"convertTimestamp",value:function(e){var t=Uo(e);return new so(t.seconds,t.nanos)}},{key:"convertDocumentKey",value:function(e,t){var n=lo.fromString(e);Ha(Mc(n));var r=new Co(n.get(1),n.get(3)),i=new vo(n.popFirst(5));return r.isEqual(t)||ja("Document ".concat(i," contains a document reference within a different database (").concat(r.projectId,"/").concat(r.database,") which is not supported. It will be treated as a reference in the current database (").concat(t.projectId,"/").concat(t.database,") instead.")),i}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(e,t,n){return e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t}var Ud=function(){"use strict";function t(n,r){e(s)(this,t),this.hasPendingWrites=n,this.fromCache=r}return e(c)(t,[{key:"isEqual",value:function(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}]),t}(),Vd=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(t,i,a,o,u,c){var l;return e(s)(this,r),(l=n.call(this,t,i,a,o,c))._firestore=t,l._firestoreImpl=t,l.metadata=u,e(y)(l)}return e(c)(r,[{key:"exists",value:function(){return e(l)(e(v)(r.prototype),"exists",this).call(this)}},{key:"data",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this._document){if(this._converter){var t=new jd(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this._document){var n=this._document.data.field(Pd("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}]),r}(Rd),jd=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(){return e(s)(this,r),n.apply(this,arguments)}return e(c)(r,[{key:"data",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e(l)(e(v)(r.prototype),"data",this).call(this,t)}}]),r}(Vd);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Bd(e){e=Pf(e,jf);var t=Pf(e.firestore,od);return id(sd(t),e._key).then((function(n){return zd(t,e,n)}))}var qd=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(t){var i;return e(s)(this,r),(i=n.call(this)).firestore=t,e(y)(i)}return e(c)(r,[{key:"convertBytes",value:function(e){return new cd(e)}},{key:"convertReference",value:function(e){var t=this.convertDocumentKey(e,this.firestore._databaseId);return new jf(this.firestore,null,t)}}]),r}(Md);function Kd(e,t,n){e=Pf(e,jf);var r=Pf(e.firestore,od),i=Fd(e.converter,t,n);return Wd(r,[wd(kd(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,wu.none())])}function Hd(e,t,n){for(var r=arguments.length,i=new Array(r>3?r-3:0),a=3;a<r;a++)i[a-3]=arguments[a];e=Pf(e,jf);var o=Pf(e.firestore,od),s=kd(o);return Wd(o,[("string"==typeof(t=me(t))||t instanceof ld?Td(s,"updateDoc",e._key,t,n,i):xd(s,"updateDoc",e._key,t)).toMutation(e._key,wu.exists(!0))])}function Wd(t,n){return r=sd(t),i=n,s=new Qa,r.asyncQueue.enqueueAndForget(e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=rf,e.next=3,td(r);case 3:return e.t1=e.sent,e.t2=i,e.t3=s,e.abrupt("return",(0,e.t0)(e.t1,e.t2,e.t3));case 7:case"end":return e.stop()}}),t)})))),s.promise;var r,i,s}function zd(e,t,n){var r=n.docs.get(t._key),i=new qd(e);return new Vd(e,i,t._key,r,new Ud(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];Ma=ht,ot(new ge("firestore",(function(e,n){var r=n.instanceIdentifier,i=n.options,a=e.getProvider("app").getImmediate(),o=new od(new $a(e.getProvider("auth-internal")),new no(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Ga(za.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Co(e.options.projectId,t)}(a,r),a);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o}),"PUBLIC").setMultipleInstances(!0)),vt(La,"3.8.0",e),vt(La,"3.8.0","esm2017")}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
vt("firebase","9.15.0","app");x=i("ds8z5"),a=i("bpxeT"),s=i("8MBJY"),c=i("a2hTj"),b=i("hKHmD"),v=i("fVNic"),p=i("eYQtU"),m=i("1t1Wn"),g=i("8nrFW"),w=i("2MbLg"),o=i("2TvXO");function Gd(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function Qd(){return e(b)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var Xd=Qd,Jd=new oe("auth","Firebase",Qd()),Yd=new Ne("@firebase/auth");function $d(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;Yd.logLevel<=be.ERROR&&(a=Yd).error.apply(a,["Auth (".concat(ht,"): ").concat(t)].concat(e(g)(r)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];throw rv.apply(void 0,[t].concat(e(g)(r)))}function ev(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return rv.apply(void 0,[t].concat(e(g)(r)))}function tv(t,n,r){var i=Object.assign(Object.assign({},Xd()),e(b)({},n,r));return new oe("auth","Firebase",i).create(n,{appName:t.name})}function nv(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&Zd(e,"argument-error"),tv(e,"argument-error","Type of ".concat(t.constructor.name," does not match expected instance.")+"Did you pass a reference from a different Auth SDK?")}function rv(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;if("string"!=typeof t){var o,s=r[0],u=e(g)(r.slice(1));return u[0]&&(u[0].appName=t.name),(o=t._errorFactory).create.apply(o,[s].concat(e(g)(u)))}return(a=Jd).create.apply(a,[t].concat(e(g)(r)))}function iv(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(!t)throw rv.apply(void 0,[n].concat(e(g)(i)))}function av(e){var t="INTERNAL ASSERTION FAILED: "+e;throw $d(t),new Error(t)}function ov(e,t){e||av(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var sv=new Map;function uv(e){ov(e instanceof Function,"Expected a class definition");var t=sv.get(e);return t?(ov(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,sv.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cv(e,t){var n=st(e,"auth");if(n.isInitialized()){var r=n.getImmediate();if(le(n.getOptions(),null!=t?t:{}))return r;Zd(r,"already-initialized")}return n.initialize({options:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lv(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function hv(){return"http:"===fv()||"https:"===fv()}function fv(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||!hv()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var vv=function(){"use strict";function t(n,r){e(s)(this,t),this.shortDelay=n,this.longDelay=r,ov(r>n,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(X())||"object"==typeof navigator&&"ReactNative"===navigator.product}return e(c)(t,[{key:"get",value:function(){return dv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(e,t){ov(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yv,mv=function(){"use strict";function t(){e(s)(this,t)}return e(c)(t,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void av("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void av("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void av("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),t}(),gv=(yv={},e(b)(yv,"CREDENTIAL_MISMATCH","custom-token-mismatch"),e(b)(yv,"MISSING_CUSTOM_TOKEN","internal-error"),e(b)(yv,"INVALID_IDENTIFIER","invalid-email"),e(b)(yv,"MISSING_CONTINUE_URI","internal-error"),e(b)(yv,"INVALID_PASSWORD","wrong-password"),e(b)(yv,"MISSING_PASSWORD","internal-error"),e(b)(yv,"EMAIL_EXISTS","email-already-in-use"),e(b)(yv,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),e(b)(yv,"INVALID_IDP_RESPONSE","invalid-credential"),e(b)(yv,"INVALID_PENDING_TOKEN","invalid-credential"),e(b)(yv,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),e(b)(yv,"MISSING_REQ_TYPE","internal-error"),e(b)(yv,"EMAIL_NOT_FOUND","user-not-found"),e(b)(yv,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),e(b)(yv,"EXPIRED_OOB_CODE","expired-action-code"),e(b)(yv,"INVALID_OOB_CODE","invalid-action-code"),e(b)(yv,"MISSING_OOB_CODE","internal-error"),e(b)(yv,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),e(b)(yv,"INVALID_ID_TOKEN","invalid-user-token"),e(b)(yv,"TOKEN_EXPIRED","user-token-expired"),e(b)(yv,"USER_NOT_FOUND","user-token-expired"),e(b)(yv,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),e(b)(yv,"INVALID_CODE","invalid-verification-code"),e(b)(yv,"INVALID_SESSION_INFO","invalid-verification-id"),e(b)(yv,"INVALID_TEMPORARY_PROOF","invalid-credential"),e(b)(yv,"MISSING_SESSION_INFO","missing-verification-id"),e(b)(yv,"SESSION_EXPIRED","code-expired"),e(b)(yv,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),e(b)(yv,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),e(b)(yv,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),e(b)(yv,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),e(b)(yv,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),e(b)(yv,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),e(b)(yv,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),e(b)(yv,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),e(b)(yv,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),e(b)(yv,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),e(b)(yv,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),yv),kv=new vv(3e4,6e4);function wv(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function bv(e,t,n,r){return xv.apply(this,arguments)}function xv(){return xv=e(a)(e(o).mark((function t(n,r,i,s){var u,c=arguments;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=c.length>4&&void 0!==c[4]?c[4]:{},t.abrupt("return",Tv(n,u,e(a)(e(o).mark((function t(){var a,u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},u={},s&&("GET"===r?u=s:a={body:JSON.stringify(s)}),c=fe(Object.assign({key:n.config.apiKey},u)).slice(1),e.next=6,n._getAdditionalHeaders();case 6:return(l=e.sent)["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),e.abrupt("return",mv.fetch()(Sv(n,n.config.apiHost,i,c),Object.assign({method:r,headers:l,referrerPolicy:"no-referrer"},a)));case 10:case"end":return e.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)}))),xv.apply(this,arguments)}function Tv(e,t,n){return Ev.apply(this,arguments)}function Ev(){return(Ev=e(a)(e(o).mark((function t(n,r,i){var a,s,u,c,l,h,f,d,v;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n._canInitEmulator=!1,a=Object.assign(Object.assign({},gv),r),t.prev=2,s=new Cv(n),t.next=6,Promise.race([i(),s.promise]);case 6:return u=t.sent,s.clearNetworkTimeout(),t.next=10,u.json();case 10:if(!("needConfirmation"in(c=t.sent))){t.next=13;break}throw Av(n,"account-exists-with-different-credential",c);case 13:if(!u.ok||"errorMessage"in c){t.next=17;break}return t.abrupt("return",c);case 17:if(l=u.ok?c.errorMessage:c.error.message,h=e(m)(l.split(" : "),2),f=h[0],d=h[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==f){t.next=23;break}throw Av(n,"credential-already-in-use",c);case 23:if("EMAIL_EXISTS"!==f){t.next=27;break}throw Av(n,"email-already-in-use",c);case 27:if("USER_DISABLED"!==f){t.next=29;break}throw Av(n,"user-disabled",c);case 29:if(v=a[f]||f.toLowerCase().replace(/[_\s]+/g,"-"),!d){t.next=34;break}throw tv(n,v,d);case 34:Zd(n,v);case 35:t.next=42;break;case 37:if(t.prev=37,t.t0=t.catch(2),!(t.t0 instanceof ae)){t.next=41;break}throw t.t0;case 41:Zd(n,"network-request-failed");case 42:case"end":return t.stop()}}),t,null,[[2,37]])})))).apply(this,arguments)}function Iv(e,t,n,r){return _v.apply(this,arguments)}function _v(){return _v=e(a)(e(o).mark((function t(n,r,i,a){var s,u,c=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=c.length>4&&void 0!==c[4]?c[4]:{},e.next=3,bv(n,r,i,a,s);case 3:return"mfaPendingCredential"in(u=e.sent)&&Zd(n,"multi-factor-auth-required",{_serverResponse:u}),e.abrupt("return",u);case 6:case"end":return e.stop()}}),t)}))),_v.apply(this,arguments)}function Sv(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?pv(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var Cv=function(){"use strict";function t(n){var r=this;e(s)(this,t),this.auth=n,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(ev(n.auth,"network-request-failed"))}),kv.get())}))}return e(c)(t,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),t}();function Av(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=ev(e,t,r);return i.customData._tokenResponse=n,i}function Nv(e,t){return Ov.apply(this,arguments)}function Ov(){return(Ov=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",bv(n,"POST","/v1/accounts:delete",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Dv(e,t){return Rv.apply(this,arguments)}function Rv(){return(Rv=e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",bv(n,"POST","/v1/accounts:lookup",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pv(){return Pv=e(a)(e(o).mark((function t(n){var r,i,a,s,u,c,l=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.length>1&&void 0!==l[1]&&l[1],i=me(n),e.next=4,i.getIdToken(r);case 4:return a=e.sent,iv((s=Fv(a))&&s.exp&&s.auth_time&&s.iat,i.auth,"internal-error"),u="object"==typeof s.firebase?s.firebase:void 0,c=null==u?void 0:u.sign_in_provider,e.abrupt("return",{claims:s,token:a,authTime:Lv(Mv(s.auth_time)),issuedAtTime:Lv(Mv(s.iat)),expirationTime:Lv(Mv(s.exp)),signInProvider:c||null,signInSecondFactor:(null==u?void 0:u.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),t)}))),Pv.apply(this,arguments)}function Mv(e){return 1e3*Number(e)}function Fv(t){var n=e(m)(t.split("."),3),r=n[0],i=n[1],a=n[2];if(void 0===r||void 0===i||void 0===a)return $d("JWT malformed, contained fewer than 3 sections"),null;try{var o=Q(i);return o?JSON.parse(o):($d("Failed to decode base64 JWT payload"),null)}catch(e){return $d("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function Uv(e,t){return Vv.apply(this,arguments)}function Vv(){return Vv=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n,r){var i=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof ae&&jv(e.t0))){e.next=15;break}if(n.auth.currentUser!==n){e.next=15;break}return e.next=15,n.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),t,null,[[3,9]])}))),Vv.apply(this,arguments)}function jv(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bv=function(){"use strict";function t(n){e(s)(this,t),this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return e(c)(t,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var n=this.getInterval(t),r=this;this.timerId=setTimeout(e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iteration();case 2:case"end":return e.stop()}}),t)}))),n)}}},{key:"iteration",value:function(){var t=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.user.getIdToken(!0);case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),"auth/network-request-failed"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&t.schedule(!0),e.abrupt("return");case 9:t.schedule();case 10:case"end":return e.stop()}}),n,null,[[0,5]])})))()}}]),t}(),qv=function(){"use strict";function t(n,r){e(s)(this,t),this.createdAt=n,this.lastLoginAt=r,this._initializeTime()}return e(c)(t,[{key:"_initializeTime",value:function(){this.lastSignInTime=Lv(this.lastLoginAt),this.creationTime=Lv(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(e){return Hv.apply(this,arguments)}function Hv(){return(Hv=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n){var r,i,a,s,u,c,l,h,f,d,v;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.auth,e.next=4,n.getIdToken();case 4:return a=e.sent,e.next=7,Uv(n,Dv(i,{idToken:a}));case 7:iv(null==(s=e.sent)?void 0:s.users.length,i,"internal-error"),u=s.users[0],n._notifyReloadListener(u),c=(null===(r=u.providerUserInfo)||void 0===r?void 0:r.length)?Gv(u.providerUserInfo):[],l=zv(n.providerData,c),h=n.isAnonymous,f=!(n.email&&u.passwordHash||(null==l?void 0:l.length)),d=!!h&&f,v={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:l,metadata:new qv(u.createdAt,u.lastLoginAt),isAnonymous:d},Object.assign(n,v);case 18:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Wv(){return(Wv=e(a)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=me(n),e.next=3,Kv(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function zv(t,n){var r=t.filter((function(e){return!n.some((function(t){return t.providerId===e.providerId}))}));return e(g)(r).concat(e(g)(n))}function Gv(e){return e.map((function(e){var t=e.providerId,n=Gd(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function Qv(e,t){return Xv.apply(this,arguments)}function Xv(){return(Xv=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n,r){var i;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Tv(n,{},e(a)(e(o).mark((function t(){var i,a,s,u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=fe({grant_type:"refresh_token",refresh_token:r}).slice(1),a=n.config,s=a.tokenApiHost,u=a.apiKey,c=Sv(n,s,"/v1/token","key=".concat(u)),e.next=5,n._getAdditionalHeaders();case 5:return(l=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",mv.fetch()(c,{method:"POST",headers:l,body:i}));case 8:case"end":return e.stop()}}),t)}))));case 2:return i=t.sent,t.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jv=function(){"use strict";function t(){e(s)(this,t),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return e(c)(t,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){iv(e.idToken,"internal-error"),iv(void 0!==e.idToken,"internal-error"),iv(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,iv(n=Fv(t),"internal-error"),iv(void 0!==n.exp,"internal-error"),iv(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(a)(e(o).mark((function i(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(iv(!r.accessToken||r.refreshToken,t,"user-token-expired"),n||!r.accessToken||r.isExpired){e.next=3;break}return e.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){e.next=7;break}return e.next=6,r.refresh(t,r.refreshToken);case 6:return e.abrupt("return",r.accessToken);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(t,n){var r=this;return e(a)(e(o).mark((function i(){var a,s,u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Qv(t,n);case 2:a=e.sent,s=a.accessToken,u=a.refreshToken,c=a.expiresIn,r.updateTokensAndExpiration(s,u,Number(c));case 7:case"end":return e.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new t,this.toJSON())}},{key:"_performRefresh",value:function(){return av("not implemented")}}],[{key:"fromJSON",value:function(e,n){var r=n.refreshToken,i=n.accessToken,a=n.expirationTime,o=new t;return r&&(iv("string"==typeof r,"internal-error",{appName:e}),o.refreshToken=r),i&&(iv("string"==typeof i,"internal-error",{appName:e}),o.accessToken=i),a&&(iv("number"==typeof a,"internal-error",{appName:e}),o.expirationTime=a),o}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yv(e,t){iv("string"==typeof e||void 0===e,"internal-error",{appName:t})}var $v=function(){"use strict";function t(n){e(s)(this,t);var r=n.uid,i=n.auth,a=n.stsTokenManager,o=Gd(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Bv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?e(g)(o.providerData):[],this.metadata=new qv(o.createdAt||void 0,o.lastLoginAt||void 0)}return e(c)(t,[{key:"getIdToken",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Uv(n,n.stsTokenManager.getToken(n.auth,t));case 2:if(iv(i=e.sent,n.auth,"internal-error"),n.accessToken===i){e.next=9;break}return n.accessToken=i,e.next=8,n.auth._persistUserIfCurrent(n);case 8:n.auth._notifyListenersIfCurrent(n);case 9:return e.abrupt("return",i);case 10:case"end":return e.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return Pv.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return Wv.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(iv(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(e){return new t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){iv(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(a)(e(o).mark((function i(){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=!1,t.idToken&&t.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(t),a=!0),!n){e.next=5;break}return e.next=5,Kv(r);case 5:return e.next=7,r.auth._persistUserIfCurrent(r);case 7:a&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return e.stop()}}),i)})))()}},{key:"delete",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIdToken();case 2:return r=e.sent,e.next=5,Uv(t,Nv(t.auth,{idToken:r}));case 5:return t.stsTokenManager.clearRefreshToken(),e.abrupt("return",t.auth.signOut());case 7:case"end":return e.stop()}}),n)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(e,n){var r,i,a,o,s,u,c,l,h=null!==(r=n.displayName)&&void 0!==r?r:void 0,f=null!==(i=n.email)&&void 0!==i?i:void 0,d=null!==(a=n.phoneNumber)&&void 0!==a?a:void 0,v=null!==(o=n.photoURL)&&void 0!==o?o:void 0,p=null!==(s=n.tenantId)&&void 0!==s?s:void 0,y=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,m=null!==(c=n.createdAt)&&void 0!==c?c:void 0,g=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,k=n.uid,w=n.emailVerified,b=n.isAnonymous,x=n.providerData,T=n.stsTokenManager;iv(k&&T,e,"internal-error");var E=Jv.fromJSON(this.name,T);iv("string"==typeof k,e,"internal-error"),Yv(h,e.name),Yv(f,e.name),iv("boolean"==typeof w,e,"internal-error"),iv("boolean"==typeof b,e,"internal-error"),Yv(d,e.name),Yv(v,e.name),Yv(p,e.name),Yv(y,e.name),Yv(m,e.name),Yv(g,e.name);var I=new t({uid:k,auth:e,email:f,emailVerified:w,displayName:h,isAnonymous:b,photoURL:v,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:m,lastLoginAt:g});return x&&Array.isArray(x)&&(I.providerData=x.map((function(e){return Object.assign({},e)}))),y&&(I._redirectEventId=y),I}},{key:"_fromIdTokenResponse",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(a)(e(o).mark((function a(){var s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=new Jv).updateFromServerResponse(r),u=new t({uid:r.localId,auth:n,stsTokenManager:s,isAnonymous:i}),e.next=5,Kv(u);case 5:return e.abrupt("return",u);case 6:case"end":return e.stop()}}),a)})))()}}]),t}(),Zv=function(){"use strict";function t(){e(s)(this,t),this.type="NONE",this.storage={}}return e(c)(t,[{key:"_isAvailable",value:function(){return e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),t)})))()}},{key:"_set",value:function(t,n){var r=this;return e(a)(e(o).mark((function i(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.storage[t]=n;case 1:case"end":return e.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.storage[t],e.abrupt("return",void 0===i?null:i);case 2:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete n.storage[t];case 1:case"end":return e.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zv.type="NONE";var ep=Zv;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var np=function(){"use strict";function t(n,r,i){e(s)(this,t),this.persistence=n,this.auth=r,this.userKey=i;var a=this.auth,o=a.config,u=a.name;this.fullUserKey=tp(this.userKey,o.apiKey,u),this.fullPersistenceKey=tp("persistence",o.apiKey,u),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return e(c)(t,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.persistence._get(t.fullUserKey);case 2:return r=e.sent,e.abrupt("return",r?$v._fromJSON(t.auth,r):null);case 4:case"end":return e.stop()}}),n)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.persistence!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.getCurrentUser();case 4:return i=e.sent,e.next=7,n.removeCurrentUser();case 7:if(n.persistence=t,!i){e.next=10;break}return e.abrupt("return",n.setCurrentUser(i));case 10:case"end":return e.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return e(a)(e(o).mark((function s(){var u,c,l,h,f,d,v,p,y,m,g,k,w;return e(o).wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(r.length){s.next=2;break}return s.abrupt("return",new t(uv(ep),n,i));case 2:return s.next=4,Promise.all(r.map(function(){var t=e(a)(e(o).mark((function t(n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",n);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:u=s.sent.filter((function(e){return e})),c=u[0]||uv(ep),l=tp(i,n.config.apiKey,n.name),h=null,f=!0,d=!1,v=void 0,s.prev=9,p=r[Symbol.iterator]();case 11:if(f=(y=p.next()).done){s.next=29;break}return m=y.value,s.prev=13,s.next=16,m._get(l);case 16:if(!(g=s.sent)){s.next=22;break}return k=$v._fromJSON(n,g),m!==c&&(h=k),c=m,s.abrupt("break",29);case 22:s.next=26;break;case 24:s.prev=24,s.t0=s.catch(13);case 26:f=!0,s.next=11;break;case 29:s.next=35;break;case 31:s.prev=31,s.t1=s.catch(9),d=!0,v=s.t1;case 35:s.prev=35,s.prev=36,f||null==p.return||p.return();case 38:if(s.prev=38,!d){s.next=41;break}throw v;case 41:return s.finish(38);case 42:return s.finish(35);case 43:if(w=u.filter((function(e){return e._shouldAllowMigration})),c._shouldAllowMigration&&w.length){s.next=46;break}return s.abrupt("return",new t(c,n,i));case 46:if(c=w[0],!h){s.next=50;break}return s.next=50,c._set(l,h.toJSON());case 50:return s.next=52,Promise.all(r.map(function(){var t=e(a)(e(o).mark((function t(n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n===c){e.next=8;break}return e.prev=1,e.next=4,n._remove(l);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()));case 52:return s.abrupt("return",new t(c,n,i));case 53:case"end":return s.stop()}}),s,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(sp(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ip(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(cp(t))return"Blackberry";if(lp(t))return"Webos";if(ap(t))return"Safari";if((t.includes("chrome/")||op(t))&&!t.includes("edge/"))return"Chrome";if(up(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function ip(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X();return/firefox\//i.test(e)}function ap(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function op(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X();return/crios\//i.test(e)}function sp(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X();return/iemobile/i.test(e)}function up(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X();return/android/i.test(e)}function cp(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X();return/blackberry/i.test(e)}function lp(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X();return/webos/i.test(e)}function hp(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function fp(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X();return hp(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function dp(){return((e=X()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function vp(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X();return hp(e)||up(e)||lp(e)||cp(e)||/windows phone/i.test(e)||sp(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function pp(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=rp(X());break;case"Worker":t="".concat(rp(X()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(ht,"/").concat(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yp=function(){"use strict";function t(n){e(s)(this,t),this.auth=n,this.queue=[]}return e(c)(t,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,a,s,u,c,l,h,f,d,v,p,y,m;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.auth.currentUser!==t){e.next=2;break}return e.abrupt("return");case 2:i=[],e.prev=3,a=!0,s=!1,u=void 0,e.prev=5,c=n.queue[Symbol.iterator]();case 7:if(a=(l=c.next()).done){e.next=15;break}return h=l.value,e.next=11,h(t);case 11:h.onAbort&&i.push(h.onAbort);case 12:a=!0,e.next=7;break;case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(5),s=!0,u=e.t0;case 21:e.prev=21,e.prev=22,a||null==c.return||c.return();case 24:if(e.prev=24,!s){e.next=27;break}throw u;case 27:return e.finish(24);case 28:return e.finish(21);case 29:e.next=52;break;case 31:for(e.prev=31,e.t1=e.catch(3),i.reverse(),f=!0,d=!1,v=void 0,e.prev=35,p=i[Symbol.iterator]();!(f=(y=p.next()).done);f=!0){m=y.value;try{m()}catch(e){}}e.next=43;break;case 39:e.prev=39,e.t2=e.catch(35),d=!0,v=e.t2;case 43:e.prev=43,e.prev=44,f||null==p.return||p.return();case 46:if(e.prev=46,!d){e.next=49;break}throw v;case 49:return e.finish(46);case 50:return e.finish(43);case 51:throw n.auth._errorFactory.create("login-blocked",{originalMessage:null===e.t1||void 0===e.t1?void 0:e.t1.message});case 52:case"end":return e.stop()}}),r,null,[[3,31],[5,17,21,29],[22,,24,28],[35,39,43,51],[44,,46,50]])})))()}}]),t}(),mp=function(){"use strict";function t(n,r,i){e(s)(this,t),this.app=n,this.heartbeatServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kp(this),this.idTokenSubscription=new kp(this),this.beforeStateQueue=new yp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jd,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=i.sdkClientVersion}return e(c)(t,[{key:"_initializeWithPersistence",value:function(t,n){n&&(this._popupRedirectResolver=uv(n));var r=this;return this._initializationPromise=this.queue(e(a)(e(o).mark((function i(){var a,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r._deleted){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,np.create(r,t);case 5:if(r.persistenceManager=e.sent,!r._deleted){e.next=8;break}return e.abrupt("return");case 8:if(!(null===(a=r._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){e.next=16;break}return e.prev=9,e.next=12,r._popupRedirectResolver._initialize(r);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.next=18,r.initializeCurrentUser(n);case 18:if(r.lastNotifiedUid=(null===(s=r.currentUser)||void 0===s?void 0:s.uid)||null,!r._deleted){e.next=21;break}return e.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return e.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t._deleted){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.assertedPersistence.getCurrentUser();case 4:if(r=e.sent,t.currentUser||r){e.next=7;break}return e.abrupt("return");case 7:if(!t.currentUser||!r||t.currentUser.uid!==r.uid){e.next=12;break}return t._currentUser._assign(r),e.next=11,t.currentUser.getIdToken();case 11:return e.abrupt("return");case 12:return e.next=14,t._updateCurrentUser(r,!0);case 14:case"end":return e.stop()}}),n)})))()}},{key:"initializeCurrentUser",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,a,s,u,c,l,h;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n.assertedPersistence.getCurrentUser();case 3:if(a=e.sent,s=a,u=!1,!t||!n.config.authDomain){e.next=15;break}return e.next=9,n.getOrInitRedirectPersistenceManager();case 9:return c=null===(i=n.redirectUser)||void 0===i?void 0:i._redirectEventId,l=null==s?void 0:s._redirectEventId,e.next=13,n.tryRedirectSignIn(t);case 13:h=e.sent,c&&c!==l||!(null==h?void 0:h.user)||(s=h.user,u=!0);case 15:if(s){e.next=17;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 17:if(s._redirectEventId){e.next=33;break}if(!u){e.next=28;break}return e.prev=19,e.next=22,n.beforeStateQueue.runMiddleware(s);case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(19),s=a,n._popupRedirectResolver._overrideRedirectResult(n,(function(){return Promise.reject(e.t0)}));case 28:if(!s){e.next=32;break}return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(s));case 32:return e.abrupt("return",n.directlySetCurrentUser(null));case 33:return iv(n._popupRedirectResolver,n,"argument-error"),e.next=36,n.getOrInitRedirectPersistenceManager();case 36:if(!n.redirectUser||n.redirectUser._redirectEventId!==s._redirectEventId){e.next=38;break}return e.abrupt("return",n.directlySetCurrentUser(s));case 38:return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(s));case 39:case"end":return e.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=null,e.prev=1,e.next=4,n._popupRedirectResolver._completeRedirectFn(n,t,!0);case 4:i=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,n._setRedirectUser(null);case 11:return e.abrupt("return",i);case 12:case"end":return e.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(t){var n=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Kv(t);case 3:e.next=9;break;case 5:if(e.prev=5,e.t0=e.catch(0),"auth/network-request-failed"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)){e.next=9;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 9:return e.abrupt("return",n.directlySetCurrentUser(t));case 10:case"end":return e.stop()}}),r,null,[[0,5]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var t=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t._deleted=!0;case 1:case"end":return e.stop()}}),n)})))()}},{key:"updateCurrentUser",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=t?me(t):null)&&iv(i.auth.config.apiKey===n.config.apiKey,n,"invalid-user-token"),e.abrupt("return",n._updateCurrentUser(i&&i._clone(n)));case 3:case"end":return e.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(a)(e(o).mark((function i(){return e(o).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!r._deleted){i.next=2;break}return i.abrupt("return");case 2:if(t&&iv(r.tenantId===t.tenantId,r,"tenant-id-mismatch"),n){i.next=6;break}return i.next=6,r.beforeStateQueue.runMiddleware(t);case 6:return i.abrupt("return",r.queue(e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.directlySetCurrentUser(t);case 2:r.notifyAuthListeners();case 3:case"end":return e.stop()}}),n)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var t=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.beforeStateQueue.runMiddleware(null);case 2:if(!t.redirectPersistenceManager&&!t._popupRedirectResolver){e.next=5;break}return e.next=5,t._setRedirectUser(null);case 5:return e.abrupt("return",t._updateCurrentUser(null,!0));case 6:case"end":return e.stop()}}),n)})))()}},{key:"setPersistence",value:function(t){var n=this;return this.queue(e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.assertedPersistence.setPersistence(uv(t));case 2:case"end":return e.stop()}}),r)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new oe("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(t,n){var r=this;return e(a)(e(o).mark((function i(){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getOrInitRedirectPersistenceManager(n);case 2:return a=e.sent,e.abrupt("return",null===t?a.removeCurrentUser():a.setCurrentUser(t));case 4:case"end":return e.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.redirectPersistenceManager){e.next=9;break}return iv(i=t&&uv(t)||n._popupRedirectResolver,n,"argument-error"),e.next=5,np.create(n,[uv(i._redirectPersistence)],"redirectUser");case 5:return n.redirectPersistenceManager=e.sent,e.next=8,n.redirectPersistenceManager.getCurrentUser();case 8:n.redirectUser=e.sent;case 9:return e.abrupt("return",n.redirectPersistenceManager);case 10:case"end":return e.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,s;return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n._isInitialized){r.next=4;break}return r.next=4,n.queue(e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)}))));case 4:if((null===(i=n._currentUser)||void 0===i?void 0:i._redirectEventId)!==t){r.next=6;break}return r.abrupt("return",n._currentUser);case 6:if((null===(s=n.redirectUser)||void 0===s?void 0:s._redirectEventId)!==t){r.next=8;break}return r.abrupt("return",n.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(t){var n=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t!==n.currentUser){r.next=2;break}return r.abrupt("return",n.queue(e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.directlySetCurrentUser(t));case 1:case"end":return e.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return iv(o,this,"internal-error"),o.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(t){var n=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.currentUser&&n.currentUser!==t&&n._currentUser._stopProactiveRefresh(),t&&n.isProactiveRefreshEnabled&&t._startProactiveRefresh(),n.currentUser=t,!t){e.next=8;break}return e.next=6,n.assertedPersistence.setCurrentUser(t);case 6:e.next=10;break;case 8:return e.next=10,n.assertedPersistence.removeCurrentUser();case 10:case"end":return e.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return iv(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pp(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r,i,a;return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=e(b)({},"X-Client-Version",t.clientVersion),t.app.options.appId&&(i["X-Firebase-gmpid"]=t.app.options.appId),n.next=5,null===(r=t.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(a=n.sent)&&(i["X-Firebase-Client"]=a),n.abrupt("return",i);case 8:case"end":return n.stop()}}),n)})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(e){return me(e)}var kp=function(){"use strict";function t(n){var r,i,a=this;e(s)(this,t),this.auth=n,this.observer=null,this.addObserver=(i=new pe((function(e){return a.observer=e}),r)).subscribe.bind(i)}return e(c)(t,[{key:"next",get:function(){return iv(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),t}();function wp(t,n,r){var i=gp(t);iv(i._canInitEmulator,i,"emulator-config-failed"),iv(/^https?:\/\//.test(n),i,"invalid-emulator-scheme");var a=!!(null==r?void 0:r.disableWarnings),o=bp(n),s=function(t){var n=bp(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(n.length));if(!r)return{host:"",port:null};var i=r[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){var o=a[1];return{host:o,port:xp(i.substr(o.length+1))}}var s=e(m)(i.split(":"),2);return{host:s[0],port:xp(s[1])}}(n),u=s.host,c=s.port,l=null===c?"":":".concat(c);i.config.emulator={url:"".concat(o,"//").concat(u).concat(l,"/")},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:u,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function bp(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function xp(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var Tp=function(){"use strict";function t(n,r){e(s)(this,t),this.providerId=n,this.signInMethod=r}return e(c)(t,[{key:"toJSON",value:function(){return av("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return av("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return av("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return av("not implemented")}}]),t}();function Ep(e,t){return Ip.apply(this,arguments)}function Ip(){return(Ip=e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",bv(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function _p(e,t){return Sp.apply(this,arguments)}function Sp(){return(Sp=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Iv(n,"POST","/v1/accounts:signInWithPassword",wv(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Cp(e,t){return Ap.apply(this,arguments)}function Ap(){return(Ap=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Iv(n,"POST","/v1/accounts:signInWithEmailLink",wv(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Np(e,t){return Op.apply(this,arguments)}function Op(){return(Op=e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Iv(n,"POST","/v1/accounts:signInWithEmailLink",wv(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dp=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(t,i,a){var o,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e(s)(this,r),(o=n.call(this,"password",a))._email=t,o._password=i,o._tenantId=u,o}return e(c)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(t){var n=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",_p(t,{returnSecureToken:!0,email:n._email,password:n._password}));case 4:return e.abrupt("return",Cp(t,{email:n._email,oobCode:n._password}));case 5:Zd(t,"internal-error");case 6:case"end":return e.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(t,n){var r=this;return e(a)(e(o).mark((function i(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",Ep(t,{idToken:n,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return e.abrupt("return",Np(t,{idToken:n,email:r._email,oobCode:r._password}));case 5:Zd(t,"internal-error");case 6:case"end":return e.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(Tp);function Rp(e,t){return Lp.apply(this,arguments)}function Lp(){return(Lp=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Iv(n,"POST","/v1/accounts:signInWithIdp",wv(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pp=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(){var t;return e(s)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,t}return e(c)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return Rp(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,Rp(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,Rp(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=fe(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Zd("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,i=t.signInMethod,a=Gd(t,["providerId","signInMethod"]);if(!n||!i)return null;var o=new r(n,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),r}(Tp);function Mp(e,t){return Fp.apply(this,arguments)}function Fp(){return(Fp=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",bv(n,"POST","/v1/accounts:sendVerificationCode",wv(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Up(){return(Up=e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Iv(n,"POST","/v1/accounts:signInWithPhoneNumber",wv(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Vp(){return(Vp=e(a)(e(o).mark((function t(n,r){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Iv(n,"POST","/v1/accounts:signInWithPhoneNumber",wv(n,r));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw Av(n,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var jp=e(b)({},"USER_NOT_FOUND","user-not-found");function Bp(){return(Bp=e(a)(e(o).mark((function t(n,r){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",Iv(n,"POST","/v1/accounts:signInWithPhoneNumber",wv(n,i),jp));case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qp=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(t){var i;return e(s)(this,r),(i=n.call(this,"phone","phone")).params=t,i}return e(c)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return Up.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return Vp.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return Bp.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return n||t||i||a?new r({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:a}):null}}]),r}(Tp);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kp=function(){"use strict";function t(n){var r,i,a,o,u,c;e(s)(this,t);var l=de(ve(n)),h=null!==(r=l.apiKey)&&void 0!==r?r:null,f=null!==(i=l.oobCode)&&void 0!==i?i:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=l.mode)&&void 0!==a?a:null);iv(h&&f&&d,"argument-error"),this.apiKey=h,this.operation=d,this.code=f,this.continueUrl=null!==(o=l.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(u=l.languageCode)&&void 0!==u?u:null,this.tenantId=null!==(c=l.tenantId)&&void 0!==c?c:null}return e(c)(t,null,[{key:"parseLink",value:function(e){var n=function(e){var t=de(ve(e)).link,n=t?de(ve(t)).deep_link_id:null,r=de(ve(e)).deep_link_id;return(r?de(ve(r)).link:null)||r||n||t||e}(e);try{return new t(n)}catch(e){return null}}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Hp=function(){"use strict";function t(){e(s)(this,t),this.providerId=t.PROVIDER_ID}return e(c)(t,null,[{key:"credential",value:function(e,t){return Dp._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=Kp.parseLink(t);return iv(n,"argument-error"),Dp._fromEmailAndCode(e,n.code,n.tenantId)}}]),t}();Hp.PROVIDER_ID="password",Hp.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Hp.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Wp=function(){"use strict";function t(n){e(s)(this,t),this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}return e(c)(t,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),t}(),zp=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(){var t;return e(s)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],t}return e(c)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return e(g)(this.scopes)}}]),r}(Wp),Gp=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(){return e(s)(this,r),n.call(this,"facebook.com")}return e(c)(r,null,[{key:"credential",value:function(e){return Pp._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(zp);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gp.FACEBOOK_SIGN_IN_METHOD="facebook.com",Gp.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Qp=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(){var t;return e(s)(this,r),(t=n.call(this,"google.com")).addScope("profile"),t}return e(c)(r,null,[{key:"credential",value:function(e,t){return Pp._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,i=t.oauthAccessToken;if(!n&&!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(zp);Qp.GOOGLE_SIGN_IN_METHOD="google.com",Qp.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Xp=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(){return e(s)(this,r),n.call(this,"github.com")}return e(c)(r,null,[{key:"credential",value:function(e){return Pp._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(zp);Xp.GITHUB_SIGN_IN_METHOD="github.com",Xp.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Jp=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(){return e(s)(this,r),n.call(this,"twitter.com")}return e(c)(r,null,[{key:"credential",value:function(e,t){return Pp._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,i=t.oauthTokenSecret;if(!n||!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(zp);Jp.TWITTER_SIGN_IN_METHOD="twitter.com",Jp.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Yp=function(){"use strict";function t(n){e(s)(this,t),this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}return e(c)(t,null,[{key:"_fromIdTokenResponse",value:function(n,r,i){var s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e(a)(e(o).mark((function a(){var u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$v._fromIdTokenResponse(n,i,s);case 2:return u=e.sent,c=$p(i),l=new t({user:u,providerId:c,_tokenResponse:i,operationType:r}),e.abrupt("return",l);case 6:case"end":return e.stop()}}),a)})))()}},{key:"_forOperation",value:function(n,r,i){return e(a)(e(o).mark((function a(){var s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._updateTokensIfNecessary(i,!0);case 2:return s=$p(i),e.abrupt("return",new t({user:n,providerId:s,_tokenResponse:i,operationType:r}));case 4:case"end":return e.stop()}}),a)})))()}}]),t}();function $p(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Zp=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(t,i,a,o){var u,c;return e(s)(this,r),(u=n.call(this,i.code,i.message)).operationType=a,u.user=o,Object.setPrototypeOf(e(x)(u),r.prototype),u.customData={appName:t.name,tenantId:null!==(c=t.tenantId)&&void 0!==c?c:void 0,_serverResponse:i.customData._serverResponse,operationType:a},u}return e(c)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,i){return new r(e,t,n,i)}}]),r}(ae);function ey(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw Zp._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(e,t){return ny.apply(this,arguments)}function ny(){return ny=e(a)(e(o).mark((function t(n,r){var i,a,s=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=s.length>2&&void 0!==s[2]&&s[2],e.t0=Uv,e.t1=n,e.t2=r,e.t3=n.auth,e.next=7,n.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",Yp._forOperation(n,"link",a));case 14:case"end":return e.stop()}}),t)}))),ny.apply(this,arguments)}function ry(e,t){return iy.apply(this,arguments)}function iy(){return iy=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n,r){var i,a,s,u,c,l,h=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=h.length>2&&void 0!==h[2]&&h[2],a=n.auth,s="reauthenticate",e.prev=3,e.next=6,Uv(n,ey(a,s,r,n),i);case 6:return iv((u=e.sent).idToken,a,"internal-error"),iv(c=Fv(u.idToken),a,"internal-error"),l=c.sub,iv(n.uid===l,a,"user-mismatch"),e.abrupt("return",Yp._forOperation(n,s,u));case 15:throw e.prev=15,e.t0=e.catch(3),"auth/user-not-found"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&Zd(a,"user-mismatch"),e.t0;case 19:case"end":return e.stop()}}),t,null,[[3,15]])}))),iy.apply(this,arguments)}function ay(e,t){return oy.apply(this,arguments)}function oy(){return oy=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n,r){var i,a,s,u,c=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],a="signIn",e.next=4,ey(n,a,r);case 4:return s=e.sent,e.next=7,Yp._fromIdTokenResponse(n,a,s);case 7:if(u=e.sent,i){e.next=11;break}return e.next=11,n._updateCurrentUser(u.user);case 11:return e.abrupt("return",u);case 12:case"end":return e.stop()}}),t)}))),oy.apply(this,arguments)}function sy(e,t,n,r){return me(e).onIdTokenChanged(t,n,r)}function uy(e,t,n){return me(e).beforeAuthStateChanged(t,n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cy(e,t){return bv(e,"POST","/v2/accounts/mfaEnrollment:start",wv(e,t))}new WeakMap;var ly="__sak",hy=function(){"use strict";function t(n,r){e(s)(this,t),this.storageRetriever=n,this.type=r}return e(c)(t,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(ly,"1"),this.storage.removeItem(ly),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fy=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(){var t,i;return e(s)(this,r),(t=n.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(e,n){return t.onStorageEvent(e,n)},t.listeners={},t.localCache={},t.pollTimer=null,t.safariLocalStorageNotSynced=(ap(i=X())||hp(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),t.fallbackToPolling=vp(),t._shouldAllowMigration=!0,t}return e(c)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var a=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},o=this.storage.getItem(r);dp()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var s=this;this.forAllChangedKeys((function(e,t,n){s.notifyListeners(e,n)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,n,r){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(t,n){var i=this,s=this;return e(a)(e(o).mark((function a(){return e(o).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(l)(e(v)(r.prototype),"_set",i).call(s,t,n);case 2:s.localCache[t]=JSON.stringify(n);case 3:case"end":return a.stop()}}),a)})))()}},{key:"_get",value:function(t){var n=this,i=this;return e(a)(e(o).mark((function a(){var s;return e(o).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(l)(e(v)(r.prototype),"_get",n).call(i,t);case 2:return s=a.sent,i.localCache[t]=JSON.stringify(s),a.abrupt("return",s);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(t){var n=this,i=this;return e(a)(e(o).mark((function a(){return e(o).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(l)(e(v)(r.prototype),"_remove",n).call(i,t);case 2:delete i.localCache[t];case 3:case"end":return a.stop()}}),a)})))()}}]),r}(hy);fy.type="LOCAL";var dy=fy,vy=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(){return e(s)(this,r),n.call(this,(function(){return window.sessionStorage}),"SESSION")}return e(c)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}(hy);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vy.type="SESSION";var py=vy;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yy(t){return Promise.all(t.map((n=e(a)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),t,null,[[0,7]])}))),function(e){return n.apply(this,arguments)})));var n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var my=function(){"use strict";function t(n){e(s)(this,t),this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return e(c)(t,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,s,u,c,l,h,f,d;return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(s=(i=t).data,u=s.eventId,c=s.eventType,l=s.data,null==(h=n.handlersMap[c])?void 0:h.size){r.next=5;break}return r.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:u,eventType:c}),f=Array.from(h).map(function(){var t=e(a)(e(o).mark((function t(n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(i.origin,l));case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),r.next=9,yy(f);case 9:d=r.sent,i.ports[0].postMessage({status:"done",eventId:u,eventType:c,response:d});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(e){var n=this.receivers.find((function(t){return t.isListeningto(e)}));if(n)return n;var r=new t(e);return this.receivers.push(r),r}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gy(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */my.receivers=[];var ky=function(){"use strict";function t(n){e(s)(this,t),this.target=n,this.handlers=new Set}return e(c)(t,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return e(a)(e(o).mark((function a(){var s,u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s="undefined"!=typeof MessageChannel?new MessageChannel:null){e.next=3;break}throw new Error("connection_unavailable");case 3:return e.abrupt("return",new Promise((function(e,a){var o=gy("",20);s.port1.start();var l=setTimeout((function(){a(new Error("unsupported_event"))}),r);c={messageChannel:s,onMessage:function(t){var n=t;if(n.data.eventId===o)switch(n.data.status){case"ack":clearTimeout(l),u=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(u),e(n.data.response);break;default:clearTimeout(l),clearTimeout(u),a(new Error("invalid_response"))}}},i.handlers.add(c),s.port1.addEventListener("message",c.onMessage),i.target.postMessage({eventType:t,eventId:o,data:n},[s.port2])})).finally((function(){c&&i.removeMessageHandler(c)})));case 6:case"end":return e.stop()}}),a)})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function by(){return void 0!==wy().WorkerGlobalScope&&"function"==typeof wy().importScripts}function xy(){return Ty.apply(this,arguments)}function Ty(){return(Ty=e(a)(e(o).mark((function t(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return n=e.sent,e.abrupt("return",n.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ey="firebaseLocalStorageDb",Iy="firebaseLocalStorage",_y="fbase_key",Sy=function(){"use strict";function t(n){e(s)(this,t),this.request=n}return e(c)(t,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){var r=e;e.request.addEventListener("success",(function(){t(r.request.result)})),e.request.addEventListener("error",(function(){n(r.request.error)}))}))}}]),t}();function Cy(e,t){return e.transaction([Iy],t?"readwrite":"readonly").objectStore(Iy)}function Ay(){var e=indexedDB.deleteDatabase(Ey);return new Sy(e).toPromise()}function Ny(){var t=indexedDB.open(Ey,1);return new Promise((function(n,r){t.addEventListener("error",(function(){r(t.error)})),t.addEventListener("upgradeneeded",(function(){var e=t.result;try{e.createObjectStore(Iy,{keyPath:_y})}catch(e){r(e)}})),t.addEventListener("success",e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=t.result).objectStoreNames.contains(Iy)){e.next=12;break}return i.close(),e.next=5,Ay();case 5:return e.t0=n,e.next=8,Ny();case 8:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 12:n(i);case 13:case"end":return e.stop()}}),r)}))))}))}function Oy(e,t,n){return Dy.apply(this,arguments)}function Dy(){return(Dy=e(a)(e(o).mark((function t(n,r,i){var a,s;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=Cy(n,!0).put((a={},e(b)(a,_y,r),e(b)(a,"value",i),a)),t.abrupt("return",new Sy(s).toPromise());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Ry(e,t){return Ly.apply(this,arguments)}function Ly(){return(Ly=e(a)(e(o).mark((function t(n,r){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Cy(n,!1).get(r),e.next=3,new Sy(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Py(e,t){var n=Cy(e,!0).delete(t);return new Sy(n).toPromise()}var My=function(){"use strict";function t(){e(s)(this,t),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return e(c)(t,[{key:"_openDb",value:function(){var t=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.db){e.next=2;break}return e.abrupt("return",t.db);case 2:return e.next=4,Ny();case 4:return t.db=e.sent,e.abrupt("return",t.db);case 6:case"end":return e.stop()}}),n)})))()}},{key:"_withRetries",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0;case 1:return e.prev=2,e.next=5,n._openDb();case 5:return a=e.sent,e.next=8,t(a);case 8:return e.abrupt("return",e.sent);case 11:if(e.prev=11,e.t0=e.catch(2),!(i++>3)){e.next=15;break}throw e.t0;case 15:n.db&&(n.db.close(),n.db=void 0);case 16:e.next=1;break;case 18:case"end":return e.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var t=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",by()?t.initializeReceiver():t.initializeSender());case 1:case"end":return e.stop()}}),n)})))()}},{key:"initializeReceiver",value:function(){var t=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.receiver=my._getInstance(by()?self:null),t.receiver._subscribe("keyChanged",function(){var n=e(a)(e(o).mark((function n(r,i){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._poll();case 2:return a=e.sent,e.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return e.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),t.receiver._subscribe("ping",function(){var t=e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}());case 3:case"end":return n.stop()}}),n)})))()}},{key:"initializeSender",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r,i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,xy();case 3:if(t.activeServiceWorker=e.sent,t.activeServiceWorker){e.next=6;break}return e.abrupt("return");case 6:return t.sender=new ky(t.activeServiceWorker),e.next=9,t.sender._send("ping",{},800);case 9:if(a=e.sent){e.next=12;break}return e.abrupt("return");case 12:(null===(r=a[0])||void 0===r?void 0:r.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(t.serviceWorkerReceiverAvailable=!0);case 13:case"end":return e.stop()}}),n)})))()}},{key:"notifyServiceWorker",value:function(t){var n=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.sender&&n.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===n.activeServiceWorker)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,n.sender._send("keyChanged",{key:t},n.serviceWorkerReceiverAvailable?800:50);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}var r}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return e(a)(e(o).mark((function t(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,Ny();case 5:return n=e.sent,e.next=8,Oy(n,ly,"1");case 8:return e.next=10,Py(n,ly);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(t){var n=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingWrites++,e.prev=1,e.next=4,t();case 4:return e.prev=4,n.pendingWrites--,e.finish(4);case 7:case"end":return e.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(t,n){var r=this;return e(a)(e(o).mark((function i(){return e(o).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",r._withPendingWrite(e(a)(e(o).mark((function i(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return Oy(e,t,n)}));case 2:return r.localCache[t]=n,e.abrupt("return",r.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return Ry(e,t)}));case 2:return i=e.sent,n.localCache[t]=i,e.abrupt("return",i);case 5:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",n._withPendingWrite(e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return Py(e,t)}));case 2:return delete n.localCache[t],e.abrupt("return",n.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r,i,a,s,u,c,l,h,f,d,v,p,y,m,g,k,w;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._withRetries((function(e){var t=Cy(e,!1).getAll();return new Sy(t).toPromise()}));case 2:if(r=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:if(0===t.pendingWrites){e.next=7;break}return e.abrupt("return",[]);case 7:for(i=[],a=new Set,s=!0,u=!1,c=void 0,e.prev=10,l=r[Symbol.iterator]();!(s=(h=l.next()).done);s=!0)f=h.value,d=f.fbase_key,v=f.value,a.add(d),JSON.stringify(t.localCache[d])!==JSON.stringify(v)&&(t.notifyListeners(d,v),i.push(d));e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),u=!0,c=e.t0;case 18:e.prev=18,e.prev=19,s||null==l.return||l.return();case 21:if(e.prev=21,!u){e.next=24;break}throw c;case 24:return e.finish(21);case 25:return e.finish(18);case 26:for(p=!0,y=!1,m=void 0,e.prev=27,g=Object.keys(t.localCache)[Symbol.iterator]();!(p=(k=g.next()).done);p=!0)w=k.value,t.localCache[w]&&!a.has(w)&&(t.notifyListeners(w,null),i.push(w));e.next=35;break;case 31:e.prev=31,e.t1=e.catch(27),y=!0,m=e.t1;case 35:e.prev=35,e.prev=36,p||null==g.return||g.return();case 38:if(e.prev=38,!y){e.next=41;break}throw m;case 41:return e.finish(38);case 42:return e.finish(35);case 43:return e.abrupt("return",i);case 44:case"end":return e.stop()}}),n,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var t=this;this.pollTimer=setInterval(e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._poll());case 1:case"end":return e.stop()}}),n)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),t}();My.type="LOCAL";var Fy=My;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(e,t){return bv(e,"POST","/v2/accounts/mfaSignIn:start",wv(e,t))}function Vy(e){return new Promise((function(t,n){var r,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=ev("internal-error");t.customData=e,n(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(a)}))}function jy(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
jy("rcb"),new vv(3e4,6e4);var By="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(e,t,n){return Ky.apply(this,arguments)}function Ky(){return(Ky=e(a)(e(o).mark((function t(n,r,i){var a,s,u,c,l,h,f,d;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(s=e.sent,e.prev=4,iv("string"==typeof s,n,"argument-error"),iv(i.type===By,n,"argument-error"),!("session"in(u="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(c=u.session,!("phoneNumber"in u)){e.next=19;break}return iv("enroll"===c.type,n,"internal-error"),e.next=15,cy(n,{idToken:c.credential,phoneEnrollmentInfo:{phoneNumber:u.phoneNumber,recaptchaToken:s}});case 15:return l=e.sent,e.abrupt("return",l.phoneSessionInfo.sessionInfo);case 19:return iv("signin"===c.type,n,"internal-error"),iv(h=(null===(a=u.multiFactorHint)||void 0===a?void 0:a.uid)||u.multiFactorUid,n,"missing-multi-factor-info"),e.next=24,Uy(n,{mfaPendingCredential:c.credential,mfaEnrollmentId:h,phoneSignInInfo:{recaptchaToken:s}});case 24:return f=e.sent,e.abrupt("return",f.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,Mp(n,{phoneNumber:u.phoneNumber,recaptchaToken:s});case 30:return d=e.sent.sessionInfo,e.abrupt("return",d);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),t,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Hy=function(){"use strict";function t(n){e(s)(this,t),this.providerId=t.PROVIDER_ID,this.auth=gp(n)}return e(c)(t,[{key:"verifyPhoneNumber",value:function(e,t){return qy(this.auth,e,me(t))}}],[{key:"credential",value:function(e,t){return qp._fromVerification(e,t)}},{key:"credentialFromResult",value:function(e){var n=e;return t.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(e){return t.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?qp._fromTokenResponse(n,r):null}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wy(e,t){return t?uv(t):(iv(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hy.PROVIDER_ID="phone",Hy.PHONE_SIGN_IN_METHOD="phone";var zy=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(t){var i;return e(s)(this,r),(i=n.call(this,"custom","custom")).params=t,i}return e(c)(r,[{key:"_getIdTokenResponse",value:function(e){return Rp(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return Rp(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return Rp(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(Tp);function Gy(e){return ay(e.auth,new zy(e),e.bypassAuthState)}function Qy(e){var t=e.auth,n=e.user;return iv(n,t,"internal-error"),ry(n,new zy(e),e.bypassAuthState)}function Xy(e){return Jy.apply(this,arguments)}function Jy(){return(Jy=e(a)(e(o).mark((function t(n){var r,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.auth,iv(i=n.user,r,"internal-error"),e.abrupt("return",ty(i,new zy(n),n.bypassAuthState));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yy=function(){"use strict";function t(n,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];e(s)(this,t),this.auth=n,this.resolver=i,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return e(c)(t,[{key:"execute",value:function(){var t,n=this;return new Promise((t=e(a)(e(o).mark((function t(r,i){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingPromise={resolve:r,reject:i},e.prev=1,e.next=4,n.resolver._initialize(n.auth);case 4:return n.eventManager=e.sent,e.next=7,n.onExecution();case 7:n.eventManager.registerConsumer(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n.reject(e.t0);case 13:case"end":return e.stop()}}),t,null,[[1,10]])}))),function(e,n){return t.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,a,s,u,c,l,h;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.urlResponse,a=t.sessionId,s=t.postBody,u=t.tenantId,c=t.error,l=t.type,!c){e.next=4;break}return n.reject(c),e.abrupt("return");case 4:return h={auth:n.auth,requestUri:i,sessionId:a,tenantId:u||void 0,postBody:s||void 0,user:n.user,bypassAuthState:n.bypassAuthState},e.prev=5,e.t0=n,e.next=9,n.getIdpTask(l)(h);case 9:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=16;break;case 13:e.prev=13,e.t2=e.catch(5),n.reject(e.t2);case 16:case"end":return e.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Gy;case"linkViaPopup":case"linkViaRedirect":return Xy;case"reauthViaPopup":case"reauthViaRedirect":return Qy;default:Zd(this.auth,"internal-error")}}},{key:"resolve",value:function(e){ov(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){ov(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),t}(),$y=new vv(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(e,t,n){return em.apply(this,arguments)}function em(){return(em=e(a)(e(o).mark((function t(n,r,i){var a,s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=gp(n),nv(n,r,Wp),s=Wy(a,i),u=new tm(a,"signInViaPopup",r,s),e.abrupt("return",u.executeNotNull());case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var tm=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(t,i,a,o,u){var c;return e(s)(this,r),(c=n.call(this,t,i,o,u)).provider=a,c.authWindow=null,c.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=e(x)(c),c}return e(c)(r,[{key:"executeNotNull",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.execute();case 2:return iv(r=e.sent,t.auth,"internal-error"),e.abrupt("return",r);case 5:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ov(1===t.filter.length,"Popup operations only handle one event"),r=gy(),e.next=4,t.resolver._openPopup(t.auth,t.provider,t.filter[0],r);case 4:t.authWindow=e.sent,t.authWindow.associatedEvent=r,t.resolver._originValidation(t.auth).catch((function(e){t.reject(e)})),t.resolver._isIframeWebStorageSupported(t.auth,(function(e){e||t.reject(ev(t.auth,"web-storage-unsupported"))})),t.pollUserCancellation();case 9:case"end":return e.stop()}}),n)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(ev(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;if(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(ev(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,$y.get())};t()}}]),r}(Yy);tm.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var nm=new Map,rm=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(t,i){var a,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(s)(this,r),(a=n.call(this,t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o)).eventId=null,a}return e(c)(r,[{key:"execute",value:function(){var t=this,n=this;return e(a)(e(o).mark((function i(){var a,s;return e(o).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=nm.get(n.auth._key())){i.next=21;break}return i.prev=2,i.next=5,im(n.resolver,n.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,e(l)(e(v)(r.prototype),"execute",t).call(n);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:s=i.t0,a=function(){return Promise.resolve(s)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:nm.set(n.auth._key(),a);case 21:return n.bypassAuthState||nm.set(n.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(t){var n=this,i=this,s=function(){return e(l)(e(v)(r.prototype),"onAuthEvent",n)};return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("signInViaRedirect"!==t.type){e.next=4;break}return e.abrupt("return",s().call(i,t));case 4:if("unknown"!==t.type){e.next=7;break}return i.resolve(null),e.abrupt("return");case 7:if(!t.eventId){e.next=17;break}return e.next=10,i.auth._redirectUserForId(t.eventId);case 10:if(!(r=e.sent)){e.next=16;break}return i.user=r,e.abrupt("return",s().call(i,t));case 16:i.resolve(null);case 17:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){return e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)})))()}},{key:"cleanUp",value:function(){}}]),r}(Yy);function im(e,t){return am.apply(this,arguments)}function am(){return(am=e(a)(e(o).mark((function t(n,r){var i,a,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=um(r),a=sm(n),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,s="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",s);case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function om(e,t){nm.set(e._key(),t)}function sm(e){return uv(e._redirectPersistence)}function um(e){return tp("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(e,t){return lm.apply(this,arguments)}function lm(){return lm=e(a)(e(o).mark((function t(n,r){var i,a,s,u,c,l=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],a=gp(n),s=Wy(a,r),u=new rm(a,s,i),e.next=6,u.execute();case 6:if(!(c=e.sent)||i){e.next=13;break}return delete c.user._redirectEventId,e.next=11,a._persistUserIfCurrent(c.user);case 11:return e.next=13,a._setRedirectUser(null,r);case 13:return e.abrupt("return",c);case 14:case"end":return e.stop()}}),t)}))),lm.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var hm=function(){"use strict";function t(n){e(s)(this,t),this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return e(c)(t,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dm(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!dm(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(ev(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(fm(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(fm(e)),this.lastProcessedEventTime=Date.now()}}]),t}();function fm(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function dm(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function vm(e){return pm.apply(this,arguments)}function pm(){return pm=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n){var r,i=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",bv(n,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),t)}))),pm.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ym=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mm=/^https?/;function gm(){return(gm=e(a)(e(o).mark((function t(n){var r,i,a,s,u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,vm(n);case 4:r=e.sent.authorizedDomains,i=!0,a=!1,s=void 0,e.prev=6,u=r[Symbol.iterator]();case 8:if(i=(c=u.next()).done){e.next=20;break}if(l=c.value,e.prev=10,!km(l)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,s=e.t1;case 26:e.prev=26,e.prev=27,i||null==u.return||u.return();case 29:if(e.prev=29,!a){e.next=32;break}throw s;case 32:return e.finish(29);case 33:return e.finish(26);case 34:Zd(n,"unauthorized-domain");case 35:case"end":return e.stop()}}),t,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function km(e){var t=lv(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&a.hostname===i}if(!mm.test(r))return!1;if(ym.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wm=new vv(3e4,6e4);function bm(){var t=wy().___jsl,n=!0,r=!1,i=void 0;if(null==t?void 0:t.H)try{for(var a,o=Object.keys(t.H)[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(t.H[s].r=t.H[s].r||[],t.H[s].L=t.H[s].L||[],t.H[s].r=e(g)(t.H[s].L),t.CP)for(var u=0;u<t.CP.length;u++)t.CP[u]=null}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}var xm=null;function Tm(e){return xm=xm||function(e){return new Promise((function(t,n){var r,i,a;function o(){bm(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){bm(),n(ev(e,"network-request-failed"))},timeout:wm.get()})}if(null===(i=null===(r=wy().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=wy().gapi)||void 0===a?void 0:a.load)){var s=jy("iframefcb");return wy()[s]=function(){gapi.load?o():n(ev(e,"network-request-failed"))},Vy("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}o()}})).catch((function(e){throw xm=null,e}))}(e),xm}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Em=new vv(5e3,15e3),Im={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_m=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Sm(e){var t=e.config;iv(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?pv(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:ht},i=_m.get(e.config.apiHost);i&&(r.eid=i);var a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),"".concat(n,"?").concat(fe(r).slice(1))}function Cm(e){return Am.apply(this,arguments)}function Am(){return Am=e(a)(e(o).mark((function t(n){var r,i;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Tm(n);case 2:return r=t.sent,iv(i=wy().gapi,n,"internal-error"),t.abrupt("return",r.open({where:document.body,url:Sm(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Im,dontclear:!0},(function(t){return new Promise((r=e(a)(e(o).mark((function r(i,a){var s,u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=function(){wy().clearTimeout(u),i(t)},e.next=3,t.restyle({setHideOnLeave:!1});case 3:s=ev(n,"network-request-failed"),u=wy().setTimeout((function(){a(s)}),Em.get()),t.ping(c).then(c,(function(){a(s)}));case 7:case"end":return e.stop()}}),r)}))),function(e,t){return r.apply(this,arguments)}));var r})));case 6:case"end":return t.stop()}}),t)}))),Am.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Om="_blank",Dm="http://localhost",Rm=function(){"use strict";function t(n){e(s)(this,t),this.window=n,this.associatedEvent=null}return e(c)(t,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),t}();function Lm(t,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},Nm),{width:i.toString(),height:a.toString(),top:o,left:s}),l=X().toLowerCase();r&&(u=op(l)?Om:r),ip(l)&&(n=n||Dm,c.scrollbars="yes");var h=Object.entries(c).reduce((function(t,n){var r=e(m)(n,2),i=r[0],a=r[1];return"".concat(t).concat(i,"=").concat(a,",")}),"");if(fp(l)&&"_self"!==u)return Pm(n||"",u),new Rm(null);var f=window.open(n||"",u,h);iv(f,t,"popup-blocked");try{f.focus()}catch(e){}return new Rm(f)}function Pm(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mm="__/auth/handler",Fm="emulator/auth/handler";function Um(t,n,r,i,a,o){iv(t.config.authDomain,t,"auth-domain-config-required"),iv(t.config.apiKey,t,"invalid-api-key");var s={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:i,v:ht,eventId:a};if(n instanceof Wp){n.setDefaultLanguage(t.languageCode),s.providerId=n.providerId||"",ce(n.getCustomParameters())||(s.customParameters=JSON.stringify(n.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var h,f=Object.entries(o||{})[Symbol.iterator]();!(u=(h=f.next()).done);u=!0){var d=e(m)(h.value,2),v=d[0],p=d[1];s[v]=p}}catch(e){c=!0,l=e}finally{try{u||null==f.return||f.return()}finally{if(c)throw l}}}if(n instanceof zp){var y=n.getScopes().filter((function(e){return""!==e}));y.length>0&&(s.scopes=y.join(","))}t.tenantId&&(s.tid=t.tenantId);var g,k,w=s,b=!0,x=!1,T=void 0;try{for(var E,I=Object.keys(w)[Symbol.iterator]();!(b=(E=I.next()).done);b=!0){var _=E.value;void 0===w[_]&&delete w[_]}}catch(e){x=!0,T=e}finally{try{b||null==I.return||I.return()}finally{if(x)throw T}}return"".concat((g=t,k=g.config,k.emulator?pv(k,Fm):"https://".concat(k.authDomain,"/").concat(Mm)),"?").concat(fe(w).slice(1))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Vm="webStorageSupport",jm=function(){"use strict";function t(){e(s)(this,t),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=py,this._completeRedirectFn=cm,this._overrideRedirectResult=om}return e(c)(t,[{key:"_openPopup",value:function(t,n,r,i){var s=this;return e(a)(e(o).mark((function a(){var u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ov(null===(u=s.eventManagers[t._key()])||void 0===u?void 0:u.manager,"_initialize() not called before _openPopup()"),c=Um(t,n,r,lv(),i),e.abrupt("return",Lm(t,c,gy()));case 4:case"end":return e.stop()}}),a)})))()}},{key:"_openRedirect",value:function(t,n,r,i){var s=this;return e(a)(e(o).mark((function a(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s._originValidation(t);case 2:return a=Um(t,n,r,lv(),i),wy().location.href=a,e.abrupt("return",new Promise((function(){})));case 4:case"end":return e.stop()}var a}),a)})))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,a=r.promise;return i?Promise.resolve(i):(ov(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[n]={promise:o},o.catch((function(){delete t.eventManagers[n]})),o}},{key:"initAndGetManager",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Cm(t);case 2:return i=e.sent,a=new hm(t),i.register("authEvent",(function(e){return iv(null==e?void 0:e.authEvent,t,"invalid-auth-event"),{status:a.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),n.eventManagers[t._key()]={manager:a},n.iframes[t._key()]=i,e.abrupt("return",a);case 8:case"end":return e.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(Vm,{type:Vm},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),Zd(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return gm.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return vp()||ap()||hp()}}]),t}(),Bm=jm,qm=function(t){"use strict";e(p)(r,t);var n=e(w)(r);function r(t){var i;return e(s)(this,r),(i=n.call(this,"phone")).credential=t,i}return e(c)(r,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return bv(e,"POST","/v2/accounts/mfaEnrollment:finalize",wv(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return bv(e,"POST","/v2/accounts/mfaSignIn:finalize",wv(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(function(){"use strict";function t(n){e(s)(this,t),this.factorId=n}return e(c)(t,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return av("unexpected MultiFactorSessionType")}}}]),t}());(function(){"use strict";function t(){e(s)(this,t)}return e(c)(t,null,[{key:"assertion",value:function(e){return qm._fromCredential(e)}}]),t}()).FACTOR_ID="phone";var Km="@firebase/auth",Hm="0.21.0",Wm=function(){"use strict";function t(n){e(s)(this,t),this.auth=n,this.internalListeners=new Map}return e(c)(t,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.assertAuthConfigured(),e.next=3,n.auth._initializationPromise;case 3:if(n.auth.currentUser){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,n.auth.currentUser.getIdToken(t);case 7:return i=e.sent,e.abrupt("return",{accessToken:i});case 9:case"end":return e.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){iv(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var zm,Gm=ne("authIdTokenMaxAge")||300,Qm=null,Xm=function(t){return n=e(a)(e(o).mark((function n(r){var i,a,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=r,!e.t0){e.next=5;break}return e.next=4,r.getIdTokenResult();case 4:e.t0=e.sent;case 5:if(i=e.t0,!((a=i&&((new Date).getTime()-Date.parse(i.issuedAtTime))/1e3)&&a>Gm)){e.next=9;break}return e.abrupt("return");case 9:if(s=null==i?void 0:i.token,Qm!==s){e.next=12;break}return e.abrupt("return");case 12:return Qm=s,e.next=15,fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:"Bearer ".concat(s)}:{}});case 15:case"end":return e.stop()}}),n)}))),function(e){return n.apply(this,arguments)};var n};zm="Browser",ot(new ge("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=r.options,o=a.apiKey,s=a.authDomain;return function(e,t){iv(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),iv(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var r={apiKey:o,authDomain:s,clientPlatform:zm,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pp(zm)},i=new mp(e,t,r);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(uv);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(i,n),i}(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),ot(new ge("auth-internal",(function(e){var t=gp(e.getProvider("auth").getImmediate());return new Wm(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),vt(Km,Hm,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(zm)),vt(Km,Hm,"esm2017");var Jm,Ym=4,$m=9,Zm=ft({apiKey:"AIzaSyAueRO-9rLbY-tP-PLu41y09SRjp5P2-ro",authDomain:"filmoteka-24db4.firebaseapp.com",projectId:"filmoteka-24db4",storageBucket:"filmoteka-24db4.appspot.com",messagingSenderId:"683163081136",appId:"1:683163081136:web:6d5abe4c2dc4cdde999e75",measurementId:"G-8CWBNRF3VK"}),eg=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dt(),t=st(e,"auth");if(t.isInitialized())return t.getImmediate();var n=cv(e,{popupRedirectResolver:Bm,persistence:[Fy,dy,py]}),r=ne("authTokenSyncURL");if(r){var i=Xm(r);uy(n,i,(function(){return i(n.currentUser)})),sy(n,(function(e){return i(e)}))}var a=Z("auth");return a&&wp(n,"http://".concat(a)),n}(Zm),tg=function(t,n){var r="string"==typeof t?t:n||"(default)",i=st("object"==typeof t?t:dt(),"firestore").getImmediate({identifier:r});if(!i._initialized){var a=ee("firestore");a&&Vf.apply(void 0,[i].concat(e(g)(a)))}return i}(Zm),ng=document.getElementById("whenSignedIn"),rg=document.getElementById("whenSignedOut"),ig=document.getElementById("libraryBtn"),ag=document.getElementById("signInBtn"),og=document.getElementById("signOutBtn"),sg=document.getElementById("userDetails"),ug=new Qp,cg="";ag.onclick=function(){return Zy(eg,ug)},og.onclick=function(){return(e=eg,me(e).signOut()).then((function(){})).catch((function(e){}));var e},eg.onAuthStateChanged((function(e){e?(ng.hidden=!1,rg.hidden=!0,sg.innerHTML="<h3>Hello ".concat(e.displayName,"!</h3>"),ig.hidden=!1,!0):(ng.hidden=!0,rg.hidden=!1,sg.innerHTML="",ig.hidden=!0,!1,-1===window.location.href.search("index.html")&&(console.log(window.location.href),window.location.href="index.html"))})),eg.onAuthStateChanged((Jm=e(a)(e(o).mark((function t(n){var r,i,a,s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=33;break}return Kf(tg,"films"),cg=n.uid,e.next=5,lg(cg);case 5:return r=e.sent,console.log("moje filmy",r),e.next=9,hg(cg,16,!0);case 9:return e.next=11,hg(cg,12,!0);case 11:return e.next=13,hg(cg,14,!0);case 13:return e.next=15,lg(cg);case 15:return i=e.sent,console.log("moje filmy po dodaniu trzech filmów do kolejki",i),e.next=19,fg(cg,12,!0);case 19:return e.next=21,lg(cg);case 21:return a=e.sent,console.log("dodanie filmu 12 do obejrzenych",a),e.next=25,vg(cg,1,dg);case 25:return s=e.sent,e.next=28,pg(cg,1,dg);case 28:u=e.sent,console.log(s),console.log(u),e.next=34;break;case 33:case 34:case"end":return e.stop()}}),t)}))),function(e){return Jm.apply(this,arguments)}));var lg=function(){var t=e(a)(e(o).mark((function t(n){var r,i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Hf(tg,"films",n.toString()),e.next=3,Bd(r);case 3:if(!(i=e.sent).exists()){e.next=9;break}return a={amountOfFilms:i.data().amountOfFilms,amountOfWatchedFilms:i.data().amountOfWatchedFilms,filmsCollection:i.data().filmsCollection,filmsWatched:i.data().filmsWatched},e.abrupt("return",a);case 9:return e.abrupt("return",console.log("No such document!"));case 10:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),hg=function(){var t=e(a)(e(o).mark((function t(n,r){var i,a,s,u,c,l,h,f=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=!(f.length>2&&void 0!==f[2])||f[2],a=Hf(tg,"films",n.toString()),e.next=4,Bd(a);case 4:if(!e.sent.exists()){e.next=20;break}return e.next=8,lg(n);case 8:return s=e.sent,u=s.amountOfFilms,c=s.amountOfWatchedFilms,l=s.filmsCollection,h=s.filmsWatched,-1==l.indexOf(r)&&1==i&&(l.push(r),u++,-1!=h.indexOf(r)&&(h.splice(h.indexOf(r),1),c--)),-1!=l.indexOf(r)&&0==i&&(l.splice(l.indexOf(r),1),u--),e.next=17,Hd(a,{uid:n,amountOfFilms:u,amountOfWatchedFilms:c,filmsCollection:l,filmsWatched:h});case 17:e.sent,e.next=29;break;case 20:return e.prev=20,e.next=23,Kd(Hf(tg,"films",n.toString()),{createdAt:so.fromDate(new Date("December 10, 1815")),uid:n,filmsCollection:1==i?[r]:[],filmsWatched:[],amountOfFilms:1==i?1:0,amountOfWatchedFilms:0});case 23:e.sent,e.next=29;break;case 26:e.prev=26,e.t0=e.catch(20),console.error("Error adding document: ",e.t0);case 29:case"end":return e.stop()}}),t,null,[[20,26]])})));return function(e,n){return t.apply(this,arguments)}}(),fg=function(){var t=e(a)(e(o).mark((function t(n,r){var i,a,s,u,c,l,h,f=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=!(f.length>2&&void 0!==f[2])||f[2],a=Hf(tg,"films",n.toString()),e.next=4,Bd(a);case 4:if(!e.sent.exists()){e.next=20;break}return e.next=8,lg(n);case 8:return s=e.sent,u=s.amountOfFilms,c=s.amountOfWatchedFilms,l=s.filmsCollection,-1==(h=s.filmsWatched).indexOf(r)&&1==i&&(h.push(r),c++,-1!=l.indexOf(r)&&(l.splice(l.indexOf(r),1),u--)),-1!=h.indexOf(r)&&0==i&&(h.splice(h.indexOf(r),1),c--),e.next=17,Hd(a,{uid:n,amountOfFilms:u,amountOfWatchedFilms:c,filmsCollection:l,filmsWatched:h});case 17:e.sent,e.next=29;break;case 20:return e.prev=20,e.next=23,Kd(Hf(tg,"films",n.toString()),{createdAt:so.fromDate(new Date("December 10, 1815")),uid:n,filmsCollection:[],filmsWatched:1==watchStaus?[r]:[],amountOfFilms:0,amountOfWatchedFilms:1==watchStaus?1:0});case 23:e.sent,e.next=29;break;case 26:e.prev=26,e.t0=e.catch(20),console.error("Error adding document: ",e.t0);case 29:case"end":return e.stop()}}),t,null,[[20,26]])})));return function(e,n){return t.apply(this,arguments)}}(),dg=(function(){var t=e(a)(e(o).mark((function t(n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Hd(Hf(tg,"films",n.toString()),{amountOfFilms:0,amountOfWatchedFilms:0,filmsCollection:[],filmsWatched:[]});case 2:e.sent;case 3:case"end":return e.stop()}}),t)})))}(),window.matchMedia("(min-width: 1024px)")||window.matchMedia("(min-width: 768px)")?$m:Ym),vg=function(){var t=e(a)(e(o).mark((function t(n,r,i){var a,s,u,c,l,h,f,d,v;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,lg(n);case 2:return a=e.sent,s=a.amountOfFilms,u=a.amountOfWatchedFilms,c=a.filmsCollection,l=a.filmsWatched,console.log(s,u,c,l),h=Math.ceil(s/i),d=(f=i*(r-1))+i>s+1?s+1:f+i,v=c.slice(f,d),console.log(f,d),e.abrupt("return",{filmsOnPage:v,numberofPages:h,amountOfFilms:s});case 14:case"end":return e.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),pg=function(){var t=e(a)(e(o).mark((function t(n,r,i){var a,s,u,c,l,h,f;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,lg(n);case 2:return a=e.sent,a.amountOfFilms,s=a.amountOfWatchedFilms,a.filmsCollection,u=a.filmsWatched,c=Math.ceil(s/i),h=(l=i*(r-1))+i>s+1?s+1:l+i,f=u.slice(l,h),console.log(l,h),e.abrupt("return",{filmsOnPage:f,numberofPages:c,amountOfWatchedFilms:s});case 13:case"end":return e.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()}();
//# sourceMappingURL=index.cf038aff.js.map
