!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=4)}([function(e,t,o){var n=o(1),r=o(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1},i=(n(r,a),r.locals?r.locals:{});e.exports=i},function(e,t,o){"use strict";var n,r=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},a=function(){var e={};return function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}e[t]=o}return e[t]}}(),i=[];function s(e){for(var t=-1,o=0;o<i.length;o++)if(i[o].identifier===e){t=o;break}return t}function l(e,t){for(var o={},n=[],r=0;r<e.length;r++){var a=e[r],l=t.base?a[0]+t.base:a[0],d=o[l]||0,c="".concat(l," ").concat(d);o[l]=d+1;var p=s(c),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==p?(i[p].references++,i[p].updater(f)):i.push({identifier:c,updater:b(f,t),references:1}),n.push(c)}return n}function d(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var r=o.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var c,p=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function f(e,t,o,n){var r=o?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=p(t,r);else{var a=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function g(e,t,o){var n=o.css,r=o.media,a=o.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u=null,m=0;function b(e,t){var o,n,r;if(t.singleton){var a=m++;o=u||(u=d(t)),n=f.bind(null,o,a,!1),r=f.bind(null,o,a,!0)}else o=d(t),n=g.bind(null,o,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var o=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<o.length;n++){var r=s(o[n]);i[r].references--}for(var a=l(e,t),d=0;d<o.length;d++){var c=s(o[d]);0===i[c].references&&(i[c].updater(),i.splice(c,1))}o=a}}}},function(e,t,o){(t=o(3)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro);"]),t.push([e.i,"@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);"]),t.push([e.i,'*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%}*:focus{outline:none}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;user-select:none}*:focus{outline:none}html{background:#fff;color:white;font:normal 10px/1.42857 "Source Sans Pro",Helvetica,Arial,sans-serif;scroll-behavior:smooth}body{background:none;color:inherit;font:inherit}a{color:inherit;cursor:pointer;text-decoration:none}a:hover{opacity:0.8;text-decoration:none}@keyframes moveInLeft{0%{opacity:0;transform:translateX(-100px)}80%{transform:translateX(-10px)}100%{opacity:1;transform:translate(0)}}.nav-toggle{-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;height:.4rem;left:.8%;position:fixed;top:2rem;width:3.6rem;z-index:2}.nav-toggle:hover{opacity:0.8}.nav-toggle .nav-toggle-bar,.nav-toggle .nav-toggle-bar::after,.nav-toggle .nav-toggle-bar::before{position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:all 0.5s ease;-moz-transition:all 0.5s ease;-ms-transition:all 0.5s ease;-o-transition:all 0.5s ease;transition:all 0.5s ease;background:#fff;content:\'\';height:.4rem;width:100%}.nav-toggle .nav-toggle-bar{margin-top:0}.nav-toggle .nav-toggle-bar::after{margin-top:.8rem}.nav-toggle .nav-toggle-bar::before{margin-top:-.8rem}.nav-toggle.expanded .nav-toggle-bar{background:transparent}.nav-toggle.expanded .nav-toggle-bar::after,.nav-toggle.expanded .nav-toggle-bar::before{background:#fff;margin-top:0}.nav-toggle.expanded .nav-toggle-bar::after{-ms-transform:rotate(45deg);-webkit-transform:rotate(45deg);transform:rotate(45deg)}.nav-toggle.expanded .nav-toggle-bar::before{-ms-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.nav{-webkit-transition:left 0.5s ease;-moz-transition:left 0.5s ease;-ms-transition:left 0.5s ease;-o-transition:left 0.5s ease;transition:left 0.5s ease;background:#3f3d3d;color:#fff;cursor:pointer;font-size:2rem;height:100vh;left:-6rem;padding:6rem 2rem 2rem 2rem;position:fixed;top:0;width:6rem;z-index:1}.nav.expanded{left:0}.nav ul{list-style:none;margin:auto;padding:0}.nav ul li,.nav ul a{margin-top:50px;margin-bottom:30vh}.nav ul li:hover,.nav ul a:hover{color:#e44a4a}header{padding:10px}.header-nav{padding:0 250px;margin-top:25px}.header-nav .logo{float:left;font-size:10px;letter-spacing:5px;text-transform:uppercase}.header-nav .img-logo{width:55%}main{padding:100px}.main-header{height:100vh;background-image:linear-gradient(to right bottom, rgba(32,31,31,0.8), rgba(0,0,0,0.8)),url("https://images3.alphacoders.com/104/thumb-1920-1041825.jpg");background-repeat:no-repeat;background-size:cover;background-position:center;position:relative}.heading-primary{color:white;text-transform:uppercase;backface-visibility:hidden;margin-bottom:6rem;border-left:3px solid white}.heading-primary--main{margin-left:12px;font-size:4rem;font-weight:400;letter-spacing:1.5rem;animation-name:moveInLeft;animation-duration:7s;animation-timing-function:ease-out}.heading-primary--sub{margin-left:12px;display:block;font-size:rem;font-weight:700;letter-spacing:11px;animation:moveInRight 1s ease-out}.main-text-box{position:absolute;top:55%;left:31%;transform:translate(-60%, -60%);user-select:none}.btn-contact{cursor:pointer;outline:none;font-size:1.7rem;border-radius:15px;background-color:transparent;color:#fdb499;padding:0.3em 1.1em;text-align:center;font-weight:normal;transition:box-shadow 300ms ease-in-out, color 300ms;border:2px solid #fdfcfc}.btn-contact:hover{color:white;box-shadow:0 0 40px 40px #d80e0e inset}.btn-contact:focus{outline:none}@media only screen and (max-width: 768px){.main-text-box{margin:0;position:absolute;top:50%;left:50%;-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%);text-align:center}.heading-primary{border:none}}@media only screen and (min-width: 300px) and (max-width: 655px){.nav-toggle{left:2%}.heading-primary{border:none}.heading-primary--main{font-size:3rem;letter-spacing:1rem}.heading-primary--sub{font-size:1.5rem;letter-spacing:8px}}.demo a{position:absolute;left:50%;z-index:2;display:inline-block;-webkit-transform:translate(0, -50%);transform:translate(0, -50%);color:#fff;font:normal 200 10px/1 \'Josefin Sans\', sans-serif;letter-spacing:.1em;text-decoration:none;transition:opacity .3s}.demo a:hover{opacity:.5}section{position:absolute;bottom:8%;left:50%;-webkit-transform:translate(0, -50%);transform:translate(0, -50%)}#section03 a{padding-top:60px}#section03 a span{position:absolute;top:0;left:50%;width:46px;height:46px;margin-left:-23px;border:1px solid #fff;border-radius:100%;box-sizing:border-box}#section03 a span::after{position:absolute;top:50%;left:50%;content:\'\';width:16px;height:16px;margin:-12px 0 0 -8px;border-left:1px solid #fff;border-bottom:1px solid #fff;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);box-sizing:border-box}#section03 a span::before{position:absolute;top:0;left:0;z-index:-1;content:\'\';width:44px;height:44px;box-shadow:0 0 0 0 rgba(255,255,255,0.1);border-radius:100%;opacity:0;-webkit-animation:sdb03 3s infinite;animation:sdb03 3s infinite;box-sizing:border-box}@-webkit-keyframes sdb03{0%{opacity:0}30%{opacity:1}60%{box-shadow:0 0 0 60px rgba(255,255,255,0.1);opacity:0}100%{opacity:0}}@keyframes sdb03{0%{opacity:0}30%{opacity:1}60%{box-shadow:0 0 0 60px rgba(255,255,255,0.1);opacity:0}100%{opacity:0}}.projects{margin-top:15px;background-repeat:no-repeat;background-size:cover;background-position:center;animation:gradient 10s ease infinite;background:linear-gradient(-45deg, #99dab6, rgba(3,44,20,0.541176), #b17d7d, #0ea6e2),url("https://wallpapercave.com/wp/wp3067541.png");background-size:400% 400%;color:#000;padding:35px;margin:auto}.block{border-radius:15px;padding:25px 15px;background-color:rgba(76,150,140,0.589);-webkit-box-shadow:0 0 10px rgba(0,0,0,0.4);-moz-box-shadow:0 0 10px rgba(0,0,0,0.747);box-shadow:0 0 10px rgba(0,0,0,0.4);margin-bottom:22px}.projectHeader{text-align:center;padding:10px;font-size:30px;font-weight:bold;width:200px;letter-spacing:1.8px;margin:auto;margin-bottom:35px;border-bottom:5px solid blue}.aboutMe{font-size:22px;text-align:center;font-family:"Mali";margin-bottom:80px}.info{height:105vh}.skills{margin:auto;display:flex;flex-wrap:wrap;width:80%}.skills .skill{font-size:15px;background-color:rgba(94,167,216,0.836);border:0.8px solid #706d6d;color:black;border-radius:15px;padding:30px;margin-left:15px;margin-bottom:15px}.skills .skill:hover{opacity:.85}.resume{background-color:#5ea7d8 !important;font-weight:600}.text{font-size:18px;text-align:justify}.text .textHead{font-size:30px;font-weight:600;letter-spacing:1.5px;font-family:"Ubuntu"}.buttons{position:relative;margin-top:55px}.buttons a{border-radius:15px;cursor:pointer;letter-spacing:1.5px;font-size:20px;padding:8px 20px;border:none;color:black;margin-right:7px;background-color:rgba(245,240,240,0.562)}.buttons a:hover{text-decoration:none;box-shadow:0 1rem 2rem rgba(0,0,0,0.2);color:white;background-color:#ff0606}.image img:first-child{width:100%;border-radius:15px;margin-bottom:20px}.image img:first-child:hover{opacity:.85}.tools{margin-top:50px;display:flex;flex-wrap:wrap;color:#020422;font-family:"Muli";font-size:15px;width:100%}.tools .tool{margin-right:5%;padding:9px;border:3px solid #941403;border-radius:15px;letter-spacing:1.2px;margin-bottom:10px}.desc{color:rgba(0,0,0,0.87)}@keyframes gradient{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}@media only screen and (max-width: 768px){.info{height:100vh}.aboutMe{font-size:16px}.skills{margin-bottom:0;width:90%}.skills .skill{padding:10px;font-size:16px}}#footer{background-image:linear-gradient(to right bottom, rgba(32,31,31,0.8), rgba(0,0,0,0.8)),url("https://i.pinimg.com/originals/f9/17/2c/f9172c0ecd76d38961986844b80355ac.png");padding:40px 0}#footer h5{padding-left:10px;border-left:3px solid #eeeeee;padding-bottom:6px;margin-bottom:20px;color:#ffffff}#footer a{color:#ffffff;text-decoration:none !important;background-color:transparent;-webkit-text-decoration-skip:objects;font-size:16px}#footer ul.social li{padding:3px 0}#footer ul.social li a i{margin-right:5px;font-size:25px;-webkit-transition:.5s all ease;-moz-transition:.5s all ease;transition:.5s all ease}#footer ul.social li:hover a i{font-size:30px;margin-top:-10px}#footer ul.social li a,#footer ul.quick-links li a{color:#ffffff}#footer ul.social li a:hover{color:#ff1c1ccc}#footer ul.quick-links li{padding:3px 0;-webkit-transition:.5s all ease;-moz-transition:.5s all ease;transition:.5s all ease}#footer ul.quick-links li:hover{padding:3px 0;margin-left:5px;font-weight:700}#footer ul.quick-links li a i{margin-right:5px}#footer ul.quick-links li:hover a i{font-weight:700}\n',""]),e.exports=t},function(e,t,o){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=function(e,t){var o=e[1]||"",n=e[3];if(!n)return o;if(t&&"function"==typeof btoa){var r=(i=n,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),a=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[o].concat(a).concat([r]).join("\n")}var i,s,l;return[o].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(e,o,n){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(n)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);n&&r[l[0]]||(o&&(l[2]?l[2]="".concat(o," and ").concat(l[2]):l[2]=o),t.push(l))}},t}},function(e,t,o){"use strict";o.r(t);o(0);({menu:()=>{var e={navToggle:document.querySelector(".nav-toggle"),nav:document.querySelector("nav"),links:document.querySelector(".links"),expanded:document.querySelector(".expanded"),doToggle:function(e){e.preventDefault(),this.navToggle.classList.toggle("expanded"),this.nav.classList.toggle("expanded"),this.links.addEventListener("click",e=>{this.navToggle.classList.remove("expanded"),this.nav.classList.remove("expanded")})}};e.navToggle.addEventListener("click",t=>{e.doToggle(t)})}}).menu()}]);