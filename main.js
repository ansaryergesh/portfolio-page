!function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=4)}([function(t,e,o){var n=o(1),r=o(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var a={insert:"head",singleton:!1},i=(n(r,a),r.locals?r.locals:{});t.exports=i},function(t,e,o){"use strict";var n,r=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},a=function(){var t={};return function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}t[e]=o}return t[e]}}(),i=[];function s(t){for(var e=-1,o=0;o<i.length;o++)if(i[o].identifier===t){e=o;break}return e}function l(t,e){for(var o={},n=[],r=0;r<t.length;r++){var a=t[r],l=e.base?a[0]+e.base:a[0],p=o[l]||0,c="".concat(l," ").concat(p);o[l]=p+1;var d=s(c),g={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(g)):i.push({identifier:c,updater:b(g,e),references:1}),n.push(c)}return n}function p(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var r=o.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var i=a(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var c,d=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n")});function g(t,e,o,n){var r=o?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=d(e,r);else{var a=document.createTextNode(r),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}function f(t,e,o){var n=o.css,r=o.media,a=o.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),a&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var m=null,u=0;function b(t,e){var o,n,r;if(e.singleton){var a=u++;o=m||(m=p(e)),n=g.bind(null,o,a,!1),r=g.bind(null,o,a,!0)}else o=p(e),n=f.bind(null,o,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(o)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var o=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<o.length;n++){var r=s(o[n]);i[r].references--}for(var a=l(t,e),p=0;p<o.length;p++){var c=s(o[p]);0===i[c].references&&(i[c].updater(),i.splice(c,1))}o=a}}}},function(t,e,o){(e=o(3)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro);"]),e.push([t.i,"@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);"]),e.push([t.i,'*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%}*:focus{outline:none}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;user-select:none}*:focus{outline:none}html{background:#fff;color:white;font:normal 10px/1.42857 "Source Sans Pro",Helvetica,Arial,sans-serif;scroll-behavior:smooth}body{background:none;color:inherit;font:inherit}a{color:inherit;cursor:pointer;text-decoration:none}a:hover{opacity:0.8;text-decoration:none}@keyframes moveInLeft{0%{opacity:0;transform:translateX(-100px)}80%{transform:translateX(-10px)}100%{opacity:1;transform:translate(0)}}.nav-toggle{-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;height:.4rem;left:.8%;position:fixed;top:2rem;width:3.6rem;z-index:2}.nav-toggle:hover{opacity:0.8}.nav-toggle .nav-toggle-bar,.nav-toggle .nav-toggle-bar::after,.nav-toggle .nav-toggle-bar::before{position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:all 0.5s ease;-moz-transition:all 0.5s ease;-ms-transition:all 0.5s ease;-o-transition:all 0.5s ease;transition:all 0.5s ease;background:#fff;content:\'\';height:.4rem;width:100%}.nav-toggle .nav-toggle-bar{margin-top:0}.nav-toggle .nav-toggle-bar::after{margin-top:.8rem}.nav-toggle .nav-toggle-bar::before{margin-top:-.8rem}.nav-toggle.expanded .nav-toggle-bar{background:transparent}.nav-toggle.expanded .nav-toggle-bar::after,.nav-toggle.expanded .nav-toggle-bar::before{background:#fff;margin-top:0}.nav-toggle.expanded .nav-toggle-bar::after{-ms-transform:rotate(45deg);-webkit-transform:rotate(45deg);transform:rotate(45deg)}.nav-toggle.expanded .nav-toggle-bar::before{-ms-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.nav{-webkit-transition:left 0.5s ease;-moz-transition:left 0.5s ease;-ms-transition:left 0.5s ease;-o-transition:left 0.5s ease;transition:left 0.5s ease;background:#3f3d3d;color:#fff;cursor:pointer;font-size:2rem;height:100vh;left:-6rem;padding:6rem 2rem 2rem 2rem;position:fixed;top:0;width:6rem;z-index:1}.nav.expanded{left:0}.nav ul{list-style:none;margin:auto;padding:0}.nav ul li,.nav ul a{margin-top:50px;margin-bottom:30vh}.nav ul li:hover,.nav ul a:hover{color:#e02e2e}header{padding:10px}.header-nav{padding:0 250px;margin-top:25px}.header-nav .logo{float:left;font-size:10px;letter-spacing:5px;text-transform:uppercase}.header-nav .img-logo{width:55%}main{padding:100px}.main-header{height:100vh;background-image:linear-gradient(to right bottom, rgba(2,2,2,0.329), rgba(0,0,0,0.568)),url("https://raw.githubusercontent.com/ansaryergesh/portfolio-page/master/src/img/ansar2.jpg");background-repeat:no-repeat;background-size:contain;background-position:90% 70%;position:relative;background-color:black}.heading-primary{color:white;text-transform:uppercase;backface-visibility:hidden;margin-bottom:6rem;border-left:3px solid white}.heading-primary--main{margin-left:12px;font-size:5rem;font-weight:400;letter-spacing:1.5rem;animation-name:moveInLeft;animation-duration:7s;animation-timing-function:ease-out}.heading-primary--sub{margin-left:12px;display:block;font-size:2rem;font-weight:700;letter-spacing:11px;animation:moveInRight 1s ease-out}.main-text-box{position:absolute;top:55%;left:31%;transform:translate(-60%, -60%);user-select:none}.btn-contact{cursor:pointer;outline:none;font-size:1.8rem;border-radius:15px;background-color:transparent;color:#fdb499;padding:0.3em 1.1em;text-align:center;font-weight:normal;transition:box-shadow 400ms ease-in-out, color 400ms;border:2px solid #fdfcfc}.btn-contact:hover{color:white;box-shadow:0 0 40px 40px #d80e0e inset}.btn-contact:focus{outline:none}@media only screen and (min-width: 300px) and (max-width: 500px){.main-text-box{margin:0;position:absolute;top:58%;left:50%;-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%);text-align:center;margin-bottom:50px}}@media only screen and (max-width: 768px){.main-header{background-image:linear-gradient(to right bottom, rgba(0,0,0,0.329), rgba(0,0,0,0.568)),url("https://raw.githubusercontent.com/ansaryergesh/portfolio-page/master/src/img/pr.jpg");background-repeat:no-repeat;background-size:60%;background-position:50% 20%;position:relative;background-color:black}.main-text-box{margin:0;position:absolute;top:63%;left:50%;-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%);text-align:center;margin-bottom:50px}.heading-primary{border:none;margin-bottom:120px}.heading-primary--main{font-size:3rem;letter-spacing:.5rem}.heading-primary--sub{font-size:1.5rem;letter-spacing:10px;opacity:.6}.btn-contact{font-size:2.2rem !important;padding:10px 15px;border-radius:25px}.nav-toggle{left:12px}.nav-toggle:hover{opacity:0.8}.nav-toggle .nav-toggle-bar{margin-top:0}.nav-toggle .nav-toggle-bar::after{margin-top:1rem}.nav-toggle .nav-toggle-bar::before{margin-top:-1rem}}.demo a{position:absolute;z-index:2;display:inline-block;margin:0;position:absolute;top:55%;left:50%;-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%);color:#fff;font:normal 200 10px/1 \'Josefin Sans\', sans-serif;letter-spacing:.1em;text-decoration:none;transition:opacity .3s}.demo a:hover{opacity:.5}section{position:absolute;bottom:8%;left:50%;-webkit-transform:translate(0, -50%);transform:translate(0, -50%)}#section03 a{padding-top:60px}#section03 a span{position:absolute;top:0;left:50%;width:46px;height:46px;margin-left:-23px;border:1px solid #fff;border-radius:100%;box-sizing:border-box}#section03 a span::after{position:absolute;top:50%;left:50%;content:\'\';width:16px;height:16px;margin:-12px 0 0 -8px;border-left:1px solid #fff;border-bottom:1px solid #fff;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);box-sizing:border-box}#section03 a span::before{position:absolute;top:0;left:0;z-index:-1;content:\'\';width:44px;height:44px;box-shadow:0 0 0 0 rgba(255,255,255,0.1);border-radius:100%;opacity:0;-webkit-animation:sdb03 3s infinite;animation:sdb03 3s infinite;box-sizing:border-box}@-webkit-keyframes sdb03{0%{opacity:0}30%{opacity:1}60%{box-shadow:0 0 0 60px rgba(255,255,255,0.1);opacity:0}100%{opacity:0}}@keyframes sdb03{0%{opacity:0}30%{opacity:1}60%{box-shadow:0 0 0 60px rgba(255,255,255,0.1);opacity:0}100%{opacity:0}}.projects{margin-top:15px;background-repeat:no-repeat;background-size:cover;background-position:center;animation:gradient 10s ease infinite;background:linear-gradient(-45deg, #99dab6, #5DB6E8, rgba(255,143,102,0.568), #9373FF),url("https://wallpapercave.com/wp/wp3067541.png");background-size:400% 400%;color:#000;padding:35px;margin:auto}#projects{clear:both}.block{border-radius:15px;padding:25px 15px;background-color:rgba(255,255,255,0.23);-webkit-box-shadow:0 0 10px rgba(0,0,0,0.4);-moz-box-shadow:0 0 10px rgba(0,0,0,0.747);box-shadow:0 0 10px rgba(0,0,0,0.4);margin-bottom:22px}.projectHeader{text-align:center;padding:10px;font-size:30px;font-weight:bold;width:200px;letter-spacing:1.8px;margin:auto;margin-bottom:35px;border-bottom:5px solid #218DCC}.aboutMe{font-size:22px;text-align:center;margin-bottom:80px}.info{margin-bottom:25px}.skills{margin:auto;display:flex;flex-wrap:wrap;width:80%}.skills .skill{font-size:19px;background-color:rgba(255,216,204,0.822);border:0.8px solid #706d6d;color:black;border-radius:15px;padding:22px;margin-left:15px;margin-bottom:15px}.skills .skill:hover{opacity:.85}.resume{background-color:rgba(94,167,216,0.432);font-weight:600}.text{font-size:18px;text-align:justify}.text .textHead{font-size:30px;font-weight:600;letter-spacing:1.5px}.buttons{position:relative;margin-top:55px}.buttons a{border-radius:15px;cursor:pointer;letter-spacing:1.5px;font-size:20px;padding:8px 20px;border:none;color:black;margin-right:7px;background-color:rgba(245,240,240,0.562)}.buttons a:hover{text-decoration:none;box-shadow:0 1rem 2rem rgba(0,0,0,0.2);color:white;background-color:#ff0606}.image img:first-child{width:100%;border-radius:15px;margin-bottom:20px}.image img:first-child:hover{opacity:.85}.tools{margin-top:50px;display:flex;flex-wrap:wrap;color:#020422;font-size:15px;width:100%}.tools .tool{margin-right:5%;padding:9px;border:3px solid #941403;border-radius:15px;letter-spacing:1.2px;margin-bottom:10px}.desc{color:rgba(0,0,0,0.87)}@keyframes gradient{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}@media only screen and (max-width: 400px){.tech{width:240px !important}.projectHeader{margin-top:50px}#info{margin-top:20px}.buttons{display:flex;flex-direction:column}.buttons a{margin:auto;margin-bottom:15px;width:80%}.skills{margin-bottom:20px;width:100%}.skills .skill{padding:6px;font-size:14px;margin-left:5px}.tools{font-size:11px}.tools .tool{padding:7px;margin-right:1%}.text{font-size:19px;text-align:justify}.text .textHead{font-size:21px;font-weight:600;letter-spacing:1px}}@media only screen and (min-width: 400px) and (max-width: 768px){.aboutMe{font-size:16px}.skills{margin-bottom:0;width:90%}.skills .skill{padding:10px;font-size:16px}}#footer{background-image:linear-gradient(to right bottom, rgba(32,31,31,0.8), rgba(0,0,0,0.8)),url("https://i.pinimg.com/originals/f9/17/2c/f9172c0ecd76d38961986844b80355ac.png");padding:40px 0}#footer h5{padding-left:10px;border-left:3px solid #eeeeee;padding-bottom:6px;margin-bottom:20px;color:#ffffff}#footer a{color:#ffffff;text-decoration:none !important;background-color:transparent;-webkit-text-decoration-skip:objects;font-size:16px}#footer ul.social li{padding:3px 0}#footer ul.social li a i{margin-right:5px;font-size:25px;-webkit-transition:.5s all ease;-moz-transition:.5s all ease;transition:.5s all ease}#footer ul.social li:hover a i{font-size:30px;margin-top:-10px}#footer ul.social li a,#footer ul.quick-links li a{color:#ffffff}#footer ul.social li a:hover{color:#ff1c1ccc}#footer ul.quick-links li{padding:3px 0;-webkit-transition:.5s all ease;-moz-transition:.5s all ease;transition:.5s all ease}#footer ul.quick-links li:hover{padding:3px 0;margin-left:5px;font-weight:700}#footer ul.quick-links li a i{margin-right:5px}#footer ul.quick-links li:hover a i{font-weight:700}\n',""]),t.exports=e},function(t,e,o){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o=function(t,e){var o=t[1]||"",n=t[3];if(!n)return o;if(e&&"function"==typeof btoa){var r=(i=n,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),a=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(t," */")}));return[o].concat(a).concat([r]).join("\n")}var i,s,l;return[o].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(o,"}"):o})).join("")},e.i=function(t,o,n){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(n)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);n&&r[l[0]]||(o&&(l[2]?l[2]="".concat(o," and ").concat(l[2]):l[2]=o),e.push(l))}},e}},function(t,e,o){"use strict";o.r(e);o(0);({menu:()=>{var t={navToggle:document.querySelector(".nav-toggle"),nav:document.querySelector("nav"),links:document.querySelector(".links"),expanded:document.querySelector(".expanded"),doToggle:function(t){t.preventDefault(),this.navToggle.classList.toggle("expanded"),this.nav.classList.toggle("expanded"),this.links.addEventListener("click",t=>{this.navToggle.classList.remove("expanded"),this.nav.classList.remove("expanded")})}};t.navToggle.addEventListener("click",e=>{t.doToggle(e)})}}).menu()}]);