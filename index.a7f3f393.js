!function(){function n(n){return n&&n.__esModule?n.default:n}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},o=e.parcelRequired76b;null==o&&((o=function(n){if(n in t)return t[n].exports;if(n in i){var e=i[n];delete i[n];var o={id:n,exports:{}};return t[n]=o,e.call(o.exports,o,o.exports),o.exports}var d=new Error("Cannot find module '"+n+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(n,e){i[n]=e},e.parcelRequired76b=o);var d,r,u,s,c,a,l,h,f,g,w,m=o("bpxeT"),p=o("2TvXO"),y=o("6m2hf"),v=o("gQOBw"),L=o("6yrqd");u=document.getElementById("whenSignedIn"),s=document.getElementById("whenSignedOut"),c=document.getElementById("libraryBtn"),a=document.getElementById("signInBtn"),l=document.getElementById("signOutBtn"),h=document.querySelector("svg.icon-login"),f=document.querySelector("svg.icon-logout"),g=document.getElementById("userDetails"),w=new(0,v.GoogleAuthProvider),window.userSigned=!1,window.userUid="",a.onclick=function(){return(0,v.signInWithPopup)(L.auth,w)},h.onclick=function(){return(0,v.signInWithPopup)(L.auth,w)},l.onclick=function(){return(0,v.signOut)(L.auth).then((function(){window.userSigned=!1})).catch((function(n){}))},f.onclick=function(){return(0,v.signOut)(L.auth).then((function(){window.userSigned=!1})).catch((function(n){}))},L.auth.onAuthStateChanged((function(n){n?(h.classList.add("hidden"),f.classList.remove("hidden"),u.classList.remove("hidden"),s.classList.add("hidden"),g.innerHTML="<h3>Hello ".concat(n.displayName,"!</h3>"),c.classList.remove("hidden"),window.userUid=!0):(h.classList.remove("hidden"),f.classList.add("hidden"),u.classList.add("hidden"),s.classList.remove("hidden"),g.innerHTML="",c.classList.add("hidden"),window.userUid=!1,-1===window.location.href.search("index.html")&&(console.log(window.location.href),window.location.href="index.html"))})),L.auth.onAuthStateChanged((r=n(m)(n(p).mark((function e(t){return n(p).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t?(window.userSigned=!0,window.userUid=t.uid,d=(0,y.onSnapshot)((0,L.doc)(L.db,"films",t.uid.toString()),(function(n){console.log("Current data: ",n.data())}))):d&&d();case 1:case"end":return n.stop()}}),e)}))),function(n){return r.apply(this,arguments)}))}();
//# sourceMappingURL=index.a7f3f393.js.map
