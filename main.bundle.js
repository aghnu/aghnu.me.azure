(()=>{"use strict";var t={578:(t,e,n)=>{n.d(e,{Z:()=>m});var a=n(81),r=n.n(a),i=n(645),o=n.n(i),s=n(667),l=n.n(s),c=new URL(n(73),n.b),p=new URL(n(753),n.b),h=o()(r()),d=l()(c),u=l()(p);h.push([t.id,'html{overflow:hidden;background-color:#000;color:#fff;font-family:"Classic Console Neue"}@font-face{font-family:"Classic Console Neue";font-size:normal;font-weight:400;src:url('+d+') format("truetype")}.layer{position:fixed;height:100vh;width:100vw;top:0;left:0}#top-layer{z-index:1000}#second-layer{z-index:999}#third-layer{z-index:998}.clickthrough{pointer-events:none}.noselect{-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;user-select:none}#terminal-container{position:fixed;top:2.5vh;left:5vw;width:90vw;max-width:500px;height:calc(100% - 24px - 48px - 10vh);overflow-x:hidden;overflow-y:scroll;-ms-overflow-style:none;scrollbar-width:none}#terminal-container::-webkit-scrollbar{display:none}#virtual-keyboard{display:none;position:fixed;width:90vw;max-width:500px;left:5vw;bottom:calc(24px + 48px + 7.5vh);height:180px}#virtual-keyboard.on{display:flex}#virtual-keyboard.on~#terminal-container{height:calc(100% - 24px - 48px - 180px - 12.5vh)}#function-key-container{position:fixed;bottom:calc(24px + 5vh);height:48px;left:5vw;width:90vw;max-width:500px}#footer{display:flex;justify-content:center;position:fixed;bottom:2.5vh;left:5vw;height:24px;width:90vw;max-width:500px}#top-layer{opacity:.8;background-image:url('+u+')}#terminal-container p{color:#78a88a;font-size:20px;line-height:24px;margin:0}#terminal-container p::-moz-selection{color:#000;background:#78a88a}#terminal-container #terminal-link{display:flex;justify-content:space-between}#terminal-container #terminal-link .name{display:flex;width:20%;gap:5px}#terminal-container #terminal-link .name .name-text{color:#de9835}#terminal-container #terminal-link .name .icon{height:24px}#terminal-container #terminal-link .container{width:65%}#terminal-container #terminal-link .container .link{display:block;text-decoration:none;width:fit-content}#terminal-container #terminal-input{color:#984511;word-wrap:break-word}#terminal-container #terminal-cmddesc{display:flex;justify-content:space-between}#terminal-container #terminal-cmddesc .name{width:20%;color:#de9835;cursor:pointer}#terminal-container #terminal-cmddesc .desc{width:65%}#terminal-container #terminal-project{display:flex;justify-content:space-between}#terminal-container #terminal-project .container{width:20%;cursor:pointer}#terminal-container #terminal-project .container .name{color:#de9835}#terminal-container #terminal-project .container .link{display:block;text-decoration:none;width:fit-content}#terminal-container #terminal-project .desc{width:65%}#footer .text-container{display:flex;flex-direction:column;justify-content:center;height:26px}#footer .text-container #footer-date-str{font-size:18px;font-family:"Classic Console Neue";color:#de9835;margin:auto}#function-key-container{display:flex;justify-content:space-between}#function-key-container .container{display:flex;flex-direction:column}#function-key-container .container .key{display:flex;gap:5px;border:none;background:rgba(0,0,0,0);cursor:pointer}#function-key-container .container .key .icon{height:24px}#function-key-container .container .key .text-container{display:flex;flex-direction:column;justify-content:center;height:26px}#function-key-container .container .key .text-container .text{font-size:18px;font-family:"Classic Console Neue";color:#de9835}#virtual-keyboard{flex-direction:column;gap:5%}#virtual-keyboard .row{display:flex;flex-direction:row;gap:1.5%;justify-content:center;height:16%}#virtual-keyboard .row .key{position:relative;height:100%;min-width:fit-content;width:8.65%;border:solid;border-radius:6px;border-width:2px;background:#000;color:#de9835;cursor:pointer;font-size:18px;box-shadow:0px 2px 0px #984511;font-family:"Classic Console Neue"}#virtual-keyboard .row .key.hold{box-shadow:none;height:175%;bottom:75%}#virtual-keyboard .row .key#virtual-key-Space{min-width:fit-content;width:64.6666666667%;height:120%}#virtual-keyboard .row .key#virtual-key-Space.hold{height:195%;bottom:75%}#virtual-keyboard .row .key#virtual-key-Enter{min-width:fit-content;width:16.1666666667%;height:120%}#virtual-keyboard .row .key#virtual-key-Enter.hold{height:195%;bottom:75%}#virtual-keyboard .row .key#virtual-key-Back{min-width:fit-content;width:16.1666666667%;height:120%}#virtual-keyboard .row .key#virtual-key-Back.hold{height:195%;bottom:75%}',""]);const m=h},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",a=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),a&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),a&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,a,r,i){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(a)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(o[l]=!0)}for(var c=0;c<t.length;c++){var p=[].concat(t[c]);a&&o[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),e.push(p))}},e}},667:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,a=0;a<e.length;a++)if(e[a].identifier===t){n=a;break}return n}function a(t,a){for(var i={},o=[],s=0;s<t.length;s++){var l=t[s],c=a.base?l[0]+a.base:l[0],p=i[c]||0,h="".concat(c," ").concat(p);i[c]=p+1;var d=n(h),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)e[d].references++,e[d].updater(u);else{var m=r(u,a);a.byIndex=s,e.splice(s,0,{identifier:h,updater:m,references:1})}o.push(h)}return o}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var i=a(t=t||[],r=r||{});return function(t){t=t||[];for(var o=0;o<i.length;o++){var s=n(i[o]);e[s].references--}for(var l=a(t,r),c=0;c<i.length;c++){var p=n(i[c]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=l}}},569:t=>{var e={};t.exports=function(t,n){var a=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(a,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},73:(t,e,n)=>{t.exports=n.p+"5bf9de9284ff094e27c6.ttf"},753:(t,e,n)=>{t.exports=n.p+"46854604e0614cb8b029.png"}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var i=e[a]={id:a,exports:{}};return t[a](i,i.exports,n),i.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var a=e.getElementsByTagName("script");a.length&&(t=a[a.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,(()=>{function t(t,e="",n={}){const a=document.createElement(t);a.innerHTML=e;for(let t in n)a.setAttribute(t,n[t]);return a}const e={about:(t,e)=>`<svg xmlns="http://www.w3.org/2000/svg" width="${e}" viewBox="0 0 150 150"><rect width="150" height="150" fill="none"/><g transform="translate(27.613 27.613)"><path d="M47.387,0A47.387,47.387,0,1,0,94.773,47.387,47.441,47.441,0,0,0,47.387,0Zm0,86.158A38.771,38.771,0,1,1,86.158,47.387,38.815,38.815,0,0,1,47.387,86.158Z" fill="${t}"/><path d="M150.745,70a5.744,5.744,0,1,0,5.743,5.746A5.751,5.751,0,0,0,150.745,70Z" transform="translate(-103.359 -49.897)" fill="${t}"/><path d="M154.308,140A4.308,4.308,0,0,0,150,144.308v25.847a4.308,4.308,0,1,0,8.616,0V144.308A4.308,4.308,0,0,0,154.308,140Z" transform="translate(-106.921 -99.793)" fill="${t}"/></g></svg>`,clean:(t,e)=>`<svg xmlns="http://www.w3.org/2000/svg" width="${e}" viewBox="0 0 150 150"><rect width="150" height="150" fill="none"/><g transform="translate(10 9.768)"><rect width="25" height="9" transform="translate(105 81.232) rotate(180)" fill="${t}"/><rect width="24" height="9" transform="translate(122 114.232) rotate(180)" fill="${t}"/><rect width="25" height="8" transform="translate(114 97.232) rotate(180)" fill="${t}"/><path d="M56.834,75.138a19.89,19.89,0,0,0-9.77-16.955L77.139,6.063,70.106,2,39.324,55.334a23.155,23.155,0,0,0-21.3,6.107C2.808,76.113,3.986,110.415,4.041,111.869a4.063,4.063,0,0,0,4.063,3.9H69.017a4.063,4.063,0,0,0,2.438-7.314C57.072,97.664,56.834,75.356,56.834,75.138Zm-20.612-12.2a12.637,12.637,0,0,1,12.491,12.2c0,.155.008.845.068,1.9L24.811,66.382a15.44,15.44,0,0,1,11.412-3.446Zm14.3,44.707a21.129,21.129,0,0,1-5.889-12.19H36.507a26.408,26.408,0,0,0,3.935,12.19H31.408A67.516,67.516,0,0,1,28.38,91.391H20.254a70.466,70.466,0,0,0,2.7,16.253H12.127c.126-7.462,1.178-23.941,7.325-34.751L50.06,86.5a52.925,52.925,0,0,0,9.187,21.14Z" transform="translate(12.252 6.336)" fill="${t}"/><rect width="130" height="130" transform="translate(0 0.232)" fill="none"/></g></svg>`,contact:(t,e)=>`<svg xmlns="http://www.w3.org/2000/svg" width="${e}" viewBox="0 0 150 150"><rect width="150" height="150" fill="none"/><g transform="translate(17.402 26.309)"><g transform="translate(3 5)"><path d="M93.451,4A17.744,17.744,0,0,1,111.2,21.744V73.637A17.744,17.744,0,0,1,93.451,91.382H19.744A17.744,17.744,0,0,1,2,73.637V21.744A17.745,17.745,0,0,1,18.737,4.028L19.744,4Zm0,8.19H19.744l-.784.032a9.555,9.555,0,0,0-8.771,9.523V73.637a9.555,9.555,0,0,0,9.555,9.555H93.451a9.555,9.555,0,0,0,9.555-9.555V21.744A9.555,9.555,0,0,0,93.451,12.19ZM41.6,50.408a4.1,4.1,0,0,1,4.1,4.095v3.179c0,6.945-5.288,10.471-13.657,10.471S18.379,64.623,18.379,57.675V54.5a4.1,4.1,0,0,1,4.095-4.095Zm8.632-.008,7.734.008A4.1,4.1,0,0,1,62.058,54.5v1.816c0,5.261-4.177,7.738-10.237,7.738-.634,0-1.248-.027-1.838-.082a15.561,15.561,0,0,0,1.121-4.91l.049-1.384V54.5A9.517,9.517,0,0,0,50.229,50.4Zm24.111.008H90.721a4.1,4.1,0,0,1,.556,8.153l-.556.037H74.34a4.1,4.1,0,0,1-.556-8.153l.556-.037h0ZM32.033,28.569a8.193,8.193,0,1,1-8.194,8.193A8.194,8.194,0,0,1,32.033,28.569Zm21.125,2.742a6.812,6.812,0,1,1-6.813,6.812A6.812,6.812,0,0,1,53.158,31.311ZM74.34,34.029H90.721a4.1,4.1,0,0,1,.556,8.153l-.556.037H74.34a4.1,4.1,0,0,1-.556-8.152l.556-.037h0Z" transform="translate(-2 -4)" fill="${t}"/></g></g></svg>`,github:(t,e)=>`<svg xmlns="http://www.w3.org/2000/svg" width="${e}" viewBox="0 0 150 150"><rect width="150" height="150" fill="none"/><path d="M47.388.4a47.4,47.4,0,0,0-15,92.356c2.378.447,3.237-1.019,3.237-2.286,0-1.125-.027-4.1-.044-8.053C22.4,85.27,19.619,76.044,19.619,76.044c-2.159-5.461-5.275-6.928-5.275-6.928-4.289-2.929.341-2.867.341-2.867,4.751.323,7.25,4.872,7.25,4.872,4.226,7.25,11.089,5.153,13.8,3.933a10.036,10.036,0,0,1,2.994-6.323c-10.52-1.188-21.582-5.26-21.582-23.419a18.3,18.3,0,0,1,4.872-12.727c-.524-1.188-2.129-6.015.418-12.543,0,0,3.966-1.265,13.032,4.86a44.6,44.6,0,0,1,23.694,0c9.013-6.125,12.975-4.86,12.975-4.86,2.544,6.528.939,11.352.477,12.543a18.423,18.423,0,0,1,4.842,12.727c0,18.2-11.077,22.213-21.609,23.371,1.647,1.419,3.19,4.336,3.19,8.764,0,6.338-.059,11.444-.059,12.987,0,1.232.829,2.713,3.27,2.236A47.327,47.327,0,0,0,47.382.395Z" transform="translate(27.615 28.384)" fill="${t}"/></svg>`,help:(t,e)=>`<svg xmlns="http://www.w3.org/2000/svg" width="${e}" viewBox="0 0 150 150"><rect width="150" height="150" fill="none"/><g transform="translate(120.641 211.504)"><g transform="translate(4 2)"><path d="M69.094,2A11.624,11.624,0,0,1,80.718,13.624V79.881a3.487,3.487,0,0,1-3.487,3.487H12.974a4.65,4.65,0,0,0,4.65,4.65H77.231a3.487,3.487,0,0,1,0,6.974H15.624A11.624,11.624,0,0,1,4,83.368V13.624A11.624,11.624,0,0,1,15.624,2Zm-2,8.974H17.624a4.65,4.65,0,0,0-4.65,4.65V74.393H71.744V15.624A4.65,4.65,0,0,0,67.094,10.974Zm-7.3,4.974a4.65,4.65,0,0,1,4.65,4.65V33.9a4.65,4.65,0,0,1-4.65,4.65H22.6a4.65,4.65,0,0,1-4.65-4.65V20.6a4.65,4.65,0,0,1,4.65-4.65ZM55.47,24.923H26.923v4.65H55.47Z" transform="translate(-92 -187)" fill="${t}"/></g></g></svg>`,keyboard:(t,e)=>`<svg xmlns="http://www.w3.org/2000/svg" width="${e}" viewBox="0 0 150 150"><path d="M0,0H150V150H0Z" fill="none"/><g transform="translate(8 -58.517)"><path d="M123,168.631V98.4a6.3,6.3,0,0,0-6.469-6.1H17.469A6.3,6.3,0,0,0,11,98.4v70.229a6.3,6.3,0,0,0,6.469,6.1h99.063A6.29,6.29,0,0,0,123,168.631Zm-102.4-4V102.4c0-.206.343-.5.869-.5h91.063c.549,0,.869.32.869.5v62.229c0,.206-.343.5-.869.5H21.469C20.943,165.134,20.6,164.837,20.6,164.631Z" transform="translate(0 0)" fill="${t}"/><ellipse cx="4.76" cy="4.76" rx="4.76" ry="4.76" transform="translate(27.942 109.606)" fill="${t}"/><ellipse cx="4.76" cy="4.76" rx="4.76" ry="4.76" transform="translate(45.6 109.606)" fill="${t}"/><ellipse cx="4.76" cy="4.76" rx="4.76" ry="4.76" transform="translate(63.286 109.606)" fill="${t}"/><ellipse cx="4.76" cy="4.76" rx="4.76" ry="4.76" transform="translate(80.972 109.606)" fill="${t}"/><ellipse cx="4.76" cy="4.76" rx="4.76" ry="4.76" transform="translate(96.538 109.606)" fill="${t}"/><ellipse cx="4.76" cy="4.76" rx="4.76" ry="4.76" transform="translate(36.771 127.829)" fill="${t}"/><ellipse cx="4.76" cy="4.76" rx="4.76" ry="4.76" transform="translate(54.457 127.829)" fill="${t}"/><ellipse cx="4.76" cy="4.76" rx="4.76" ry="4.76" transform="translate(72.115 127.829)" fill="${t}"/><path d="M370.76,240.7h0a4.76,4.76,0,1,0,0,9.52h0a4.76,4.76,0,1,0,0-9.52Z" transform="translate(-276.199 -112.871)" fill="${t}"/><path d="M188.5,308.7H137.282c-1.593,0-2.882,1.952-2.882,4.367s1.289,4.366,2.882,4.366H188.5c1.593,0,2.882-1.952,2.882-4.366S190.094,308.7,188.5,308.7Z" transform="translate(-95.891 -161.105)" fill="${t}"/></g></svg>`,projects:(t,e)=>`<svg xmlns="http://www.w3.org/2000/svg" width="${e}" viewBox="0 0 150 150"><path d="M0,0H150V150H0Z" fill="none"/><g transform="translate(30.545 30.546)"><g transform="translate(17.396 11.597)"><path d="M151.393,66.782h-48.32a2.9,2.9,0,0,0-2.9,2.9v34.79a2.9,2.9,0,0,0,2.9,2.9h48.319a2.9,2.9,0,0,0,2.9-2.9V69.681A2.9,2.9,0,0,0,151.393,66.782Zm-32.857,34.79H105.972V72.58h12.563Zm29.958,0h-24.16v-11.6h24.16Zm0-17.395h-24.16V72.58h24.16Z" transform="translate(-100.174 -66.782)" fill="${t}"/></g><g transform="translate(0.001)"><g transform="translate(0)"><path d="M86.01,57.983h-2.9V5.8h2.9a2.9,2.9,0,0,0,0-5.8H2.9a2.9,2.9,0,0,0,0,5.8H5.8V57.983H2.9a2.9,2.9,0,0,0,0,5.8H41.556V78.12L26.143,83.258a2.9,2.9,0,1,0,1.834,5.5l16.478-5.493,16.478,5.493a2.9,2.9,0,0,0,1.834-5.5L47.355,78.12V63.782H86.01a2.9,2.9,0,1,0,0-5.8Zm-8.7,0H11.6V5.8H77.312Z" transform="translate(-0.001)" fill="${t}"/></g></g></g></svg>`,email:(t,e)=>`<svg xmlns="http://www.w3.org/2000/svg" width="${e}" viewBox="0 0 150 150"><rect width="150" height="150" fill="none"/><g transform="translate(355.843 -42.355)"><path d="M95.084,12.089H13.23A13.246,13.246,0,0,0,0,25.319V83.392a13.246,13.246,0,0,0,13.23,13.23H95.084a13.246,13.246,0,0,0,13.23-13.23V25.321A13.244,13.244,0,0,0,95.084,12.089ZM88.619,20.72l-34.462,22.2L19.7,20.72Zm6.465,67.272H13.23a4.6,4.6,0,0,1-4.6-4.6V25.565L51.494,53.128c.058.036.119.06.178.093s.125.068.188.1a4.971,4.971,0,0,0,1.024.4c.036.01.072.014.108.023a5.063,5.063,0,0,0,1.161.147h.009a4.984,4.984,0,0,0,1.161-.147c.036-.009.072-.013.108-.023a5,5,0,0,0,1.024-.4c.063-.032.127-.065.188-.1s.121-.058.178-.093L99.686,25.565V83.392A4.609,4.609,0,0,1,95.084,87.992Z" transform="translate(-335 63)" fill="${t}"/></g></svg>`,link:(t,e)=>`<svg xmlns="http://www.w3.org/2000/svg" width="${e}" viewBox="0 0 150 150"><rect width="150" height="150" fill="none"/><g transform="translate(28.428 28.423)"><path d="M121.829,7.383l-.074-.071A25.454,25.454,0,0,0,86.1,7.376l-.062.064L70.076,23.406a3.581,3.581,0,1,0,5.064,5.063L91.164,12.443l.05-.05a18.295,18.295,0,0,1,25.546.051l.064.063a18.122,18.122,0,0,1-.059,25.536L100.742,54.067a3.581,3.581,0,0,0,5.065,5.063L121.83,43.106A25.292,25.292,0,0,0,121.829,7.383Z" transform="translate(-36.07 0)" fill="${t}"/><path d="M54.062,100.73,38.048,116.745l-.094.1A18.1,18.1,0,0,1,12.446,91.151L28.467,75.135A3.584,3.584,0,0,0,29.516,72.6V72.6a3.58,3.58,0,0,0-6.173-2.467L7.38,86.087A25.264,25.264,0,0,0,43.1,121.822c.036-.036.072-.073.106-.111l15.917-15.917a3.581,3.581,0,0,0-5.064-5.064Z" transform="translate(0 -36.06)" fill="${t}"/><path d="M58,94.646a3.581,3.581,0,0,0,5.064,0l31.59-31.589a3.581,3.581,0,1,0-5.063-5.064L58,89.582A3.58,3.58,0,0,0,58,94.646Z" transform="translate(-29.761 -29.751)" fill="${t}"/></g></svg>`,linkedin:(t,e)=>`<svg xmlns="http://www.w3.org/2000/svg" width="${e}" viewBox="0 0 150 150"><rect width="150" height="150" fill="none"/><g transform="translate(26.729 26.729)"><path d="M246.052,203.826v-.141c-.029.047-.069.095-.094.141Z" transform="translate(-193.77 -160.467)" fill="${t}" fill-rule="evenodd"/><path d="M0,0V96.542H96.542V0ZM30.028,80.2H15.7V37.112H30.028ZM22.867,31.23h-.095c-4.8,0-7.919-3.31-7.919-7.448,0-4.228,3.205-7.445,8.108-7.445s7.916,3.216,8.01,7.445C30.971,27.92,27.864,31.23,22.867,31.23ZM81.69,80.2H67.362V57.15c0-5.791-2.07-9.743-7.256-9.743a7.834,7.834,0,0,0-7.35,5.239,9.817,9.817,0,0,0-.475,3.492V80.2H37.951s.192-39.05,0-43.093h14.33v6.106A14.228,14.228,0,0,1,65.194,36.1c9.429,0,16.5,6.157,16.5,19.393Z" fill="${t}" fill-rule="evenodd"/></g></svg>`};class a{constructor(t,e={}){this.type=t,this.parameters=e}}class r{constructor(){this.oldInput="",this.input="",this.listeners=[]}getInput(){return this.input}getPrevInput(){return this.oldInput}updateInput(t){this.oldInput=this.input,this.input=t,this.listeners.forEach((t=>t(this)))}subscribe(t){this.listeners.push(t)}}class i{constructor(t){this.out=t,this.listeners=[]}hasElement(t){const e=this.out.children;for(let n=0;n<e.length;n++)if(e[n]===t)return!0;return!1}broadCast(){this.listeners.forEach((t=>t(this)))}append(t){this.out.appendChild(t),this.broadCast()}insert(t,e){const n=this.out.children,a=e<0?n.length+e:e;this.out.insertBefore(t,n[a]),this.broadCast()}clear(){this.out.innerHTML="",this.broadCast()}subscribe(t){this.listeners.push(t)}printLink(n){const a=t("div","",{id:"terminal-link"}),r=t("div","",{class:"name"}),i=t("div",e[n.type]("#984511","24px"),{class:"icon"}),o=t("p",n.name,{class:"name-text"}),s=t("p","-",{class:"sep"}),l=t("div","",{class:"container"}),c=t("a","",{class:"link",href:n.link}),p=t("p",n.text,{class:"text"});r.appendChild(i),r.appendChild(o),c.appendChild(p),l.appendChild(c),a.appendChild(r),a.appendChild(s),a.appendChild(l),this.append(a)}printCMDDesc(e){const n=t("div","",{id:"terminal-cmddesc"}),a=t("p",e.name,{class:"name"}),r=t("p","-",{class:"sep"}),i=t("p",e.desc,{class:"desc"});a.onclick=e.func,n.appendChild(a),n.appendChild(r),n.appendChild(i),this.append(n)}printProject(e){const n=t("div","",{id:"terminal-project"}),a=t("div","",{class:"container"}),r=t("a","",{class:"link",href:e.link}),i=t("p",e.name,{class:"name"}),o=t("p","-",{class:"sep"}),s=t("p",e.desc,{class:"desc"});r.appendChild(i),a.appendChild(r),n.appendChild(a),n.appendChild(o),n.appendChild(s),this.append(n)}printText(e){const n=t("p",e.text);this.append(n)}printLine(e){const n=t("p");if(e.height){let t="";for(let n=0;n<e.height;n++)t+="<br>";n.innerHTML=t}else n.innerHTML="<br>";this.append(n)}printList(t){const e=t.list,n=t.min_interval,a=t.max_interval;void 0===n&&(n=500,a=500),void 0===a&&(a=n);let r=0;const i=function(t,e,n){let a;const r=()=>{a=setTimeout((()=>{t(),r()}),Math.floor(Math.random()*(n-e+1))+e)};return r(),{clear:()=>{clearTimeout(a)}}}((()=>{r>=e.length?i.clear():this.print(e[r++])}),n,a)}print(t){switch(t.type){case"text":this.printText(t.parameters);break;case"line":this.printLine(t.parameters);break;case"link":this.printLink(t.parameters);break;case"list":this.printList(t.parameters);break;case"CMDDesc":this.printCMDDesc(t.parameters);break;case"project":this.printProject(t.parameters)}}}const o=[{name:"welcome",func:s,desc:"welcome message"},{name:"help",func:c,desc:"list all the commands that aghnu.me currently supports"},{name:"clear",func:p,desc:"clear the terminal screen"},{name:"contact",func:h,desc:"list my contact information"},{name:"keyboard",func:d,desc:"open/close the virtual keyboard"},{name:"projects",func:u,desc:"list all the projects that I worked on"},{name:"about",func:l,desc:"more about this website/project"}];function s(t){t.outStream.print(new a("list",{list:[new a("text",{text:"Hello stranger! Welcome~ Welcome~ :)<br>Name is Gengyuan Huang<br>A programmer..."}),new a("line",{height:1}),new a("text",{text:"I have recently graduated from the University of Alberta with a CS degree...<br>I have rent to pay, and a mouth to feed (my mouth)... -> I am open to work!"}),new a("line",{height:1}),new a("text",{text:'If you wish to know more about me, my life or my cat...<br>or my social insurance number<br>please type or click -> "help"'}),new a("line",{height:1}),new a("text",{text:"This is my personal website. It is a fun project designed and programmed by me, using pure JavaScript"}),new a("text",{text:'If you want to learn more about this project<br>please type or click -> "about"'}),new a("line",{height:1}),new a("text",{text:'If you wish to contact me<br>please type or click -> "contact"'}),new a("line",{height:1})],min_interval:0,max_interval:150}))}function l(t){t.outStream.print(new a("list",{list:[new a("text",{text:"Under Construction :)"}),new a("line",{height:1})],min_interval:0,max_interval:0}))}function c(t){t.outStream.print(new a("list",{list:(()=>{const e=[];return e.push(new a("text",{text:"Commands:"})),e.push(new a("line",{height:1})),o.forEach((n=>{e.push(new a("CMDDesc",{name:n.name,desc:n.desc,func:()=>n.func(t)}))})),e.push(new a("line",{height:1})),e})(),min_interval:0,max_interval:0}))}function p(t){t.outStream.clear()}function h(t){t.outStream.print(new a("list",{list:[new a("text",{text:"To contact me:"}),new a("line",{height:1}),new a("link",{link:"mailto:gengyuan@ualberta.ca",name:"Email",text:"gengyuan@ualberta.ca",type:"email"}),new a("link",{link:"mailto:scotthuang007@outlook.com",name:"Email",text:"scotthuang007@outlook.com",type:"email"}),new a("link",{link:"https://github.com/aghnu",name:"Github",text:"aghnu",type:"github"}),new a("link",{link:"https://www.linkedin.com/in/gengyuan-huang",name:"LinkedIn",text:"Gengyuan Huang",type:"linkedin"}),new a("link",{link:"https://www.aghnu.me",name:"Website",text:"aghnu.me",type:"link"}),new a("line",{height:1})],min_interval:0,max_interval:0}))}function d(t){const e=document.querySelector("#virtual-keyboard");e&&e.classList.toggle("on"),t.outStream.broadCast()}function u(t){t.outStream.print(new a("list",{list:[new a("text",{text:"Past Projects:"}),new a("line",{height:1}),new a("project",{name:"Yonder",desc:"Yonder is a distributed social network using RESTful API. (UAlberta CMPUT404 class project)",link:"https://github.com/aghnu/yonder"}),new a("project",{name:"MoodSwing",desc:"MoodSwing is a Java-based android app designed to record and archive user’s mood in relation to geo location and time. Users can follow each other on MoodSwing and view their friend's mood records. (UAlberta CMPUT301 class project)",link:"https://github.com/aghnu/MoodSwing"}),new a("project",{name:"A python implementation of Hollow Heap",desc:"hollow_heap.py is a python implementation of Hollow Heap base on Thomas Dueholm Hansen, Haim Kaplan, Robert E. Tarjan, Uri Zwick 's paper https://arxiv.org/abs/1510.06535. (UAlberta CMPUT403 class project)",link:"https://github.com/aghnu/Hollow_Heap"}),new a("project",{name:"XiaoHongShu Userscript",desc:"a tampermonkey userscript to export xiaohongshu.com search query result to speadsheet ",link:"https://github.com/aghnu/xiaohongshu_search_export_userscript"}),new a("project",{name:"Interactive Moodle Plugin",desc:"This plugin is a Moodle Activity Module that is developed for Delphi technology as part of their future online learning platform for aviators. (UAlberta CMPUT401 class project)",link:"https://github.com/aghnu/Interactive-Moodle-Plugin-Showcase"}),new a("line",{height:1}),new a("text",{text:"Current Projects:"}),new a("line",{height:1}),new a("project",{name:"WNFA",desc:"WNFA (Words Never Fall Apart) is an interactive art project that uses grid method and machine learning to generate art from handwritten poems.",link:"https://github.com/aghnu/WNFA"}),new a("project",{name:"Aghnu's Console",desc:"A personal project that shows my frustration and my passion for Human-Computer Interaction. Oh... It also serves as my personal website.",link:"https://github.com/aghnu/aghnu.github.io"}),new a("project",{name:"Jia's Lab",desc:"Dr. Huijue Jia's personal website.",link:"https://jiaslab-org.github.io/"}),new a("project",{name:"Stranding Air",desc:"A website for a group of passionate people who are interested in exploring the boundary of visual design, art, media, and technology.",link:"https://github.com/StrandingAir-Group/StrandingAir-Group.github.io"}),new a("line",{height:1})],min_interval:0,max_interval:0}))}class m{constructor(){if(m._instance)return m._instance;m._instance=this,this.path,this.updatePath()}static getInstance(){return m._instance?m._instance:new m}updatePath(){this.path={},o.forEach((t=>{this.path[t.name]={exe:t.func}}))}execute(t,e){e.outStream.print(new a("text",{text:">&nbsp"+t})),void 0===this.path[t]?e.outStream.print(new a("text",{text:"Command Not Found"})):this.path[t].exe(e)}}class f{#t="guest@aghnu.me:/$:&nbsp";#e="_";#n;constructor(t,e){this.out=e,this.in=t,window.addEventListener("resize",(()=>this.refresh)),this.#a(),this.#r(),this.#i(),this.#o()}refresh(){this.#n.scrollIntoView(!0)}#o(){this.out.subscribe((()=>{this.refresh()})),this.in.subscribe((()=>{this.refresh()}))}#i(){const n=document.querySelector("#function-key-container .left"),a=document.querySelector("#function-key-container .middle"),r=document.querySelector("#function-key-container .right");[{type:"keyboard",text:"keyboard",col:"left",func:()=>{d({outStream:this.out})}},{type:"clean",text:"clear",col:"middle",func:()=>{p({outStream:this.out})}},{type:"help",text:"help",col:"right",func:()=>{c({outStream:this.out})}},{type:"contact",text:"contact",col:"left",func:()=>{h({outStream:this.out})}},{type:"about",text:"about",col:"middle",func:()=>{l({outStream:this.out})}},{type:"projects",text:"projects",col:"right",func:()=>{u({outStream:this.out})}}].forEach((i=>{const o=t("button","",{class:"key"}),s=t("div",e[i.type]("#984511","26px"),{class:"icon"}),l=t("text",i.text,{class:"text"}),c=t("div","",{class:"text-container"});switch(o.onclick=i.func,c.appendChild(l),o.appendChild(s),o.appendChild(c),i.col){case"left":n.appendChild(o);break;case"middle":a.appendChild(o);break;case"right":r.appendChild(o)}}))}#r(){const e=document.querySelector("#footer"),n=t("p","",{id:"footer-date-str"}),a=t("div","",{class:"text-container"}),r=new Date;n.innerHTML=r.toLocaleDateString()+"&nbsp"+r.toLocaleTimeString(),setInterval((()=>{const t=new Date;n.innerHTML=t.toLocaleDateString()+"&nbsp"+t.toLocaleTimeString()}),1e3),a.appendChild(n),e.appendChild(a)}#a(){let e="";const n=document.querySelector("#terminal-container");let a;this.#n=t("p","",{id:"terminal-input"});const r=()=>{clearInterval(a),e=this.in.getInput().replaceAll(" ","&nbsp"),this.#n.innerHTML=this.#t+e+this.#e;let t=!1;a=setInterval((()=>{this.#n.innerHTML=t?this.#t+e+this.#e:this.#t+e+"&nbsp",t=!t}),500)};r(),this.in.subscribe(r),n.append(this.#n)}}var g=n(379),w=n.n(g),y=n(795),v=n.n(y),x=n(569),b=n.n(x),k=n(565),S=n.n(k),C=n(216),H=n.n(C),A=n(589),M=n.n(A),L=n(578),j={};j.styleTagTransform=M(),j.setAttributes=S(),j.insert=b().bind(null,"head"),j.domAPI=v(),j.insertStyleElement=H(),w()(L.Z,j),L.Z&&L.Z.locals&&L.Z.locals;class I{constructor(t,e){this.keyAllowedShowSet=new Set(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","/"," "]),this.specialKeyHandlers={},this.inputStream=t,this.outputStream=e,this.#s(),this.#l(),this.#c()}#l(){document.addEventListener("keydown",(t=>{const e=t.key;this.pressKey(e,(()=>{t.preventDefault()}))}))}#c(){const e=[["1","2","3","4","5","6","7","8","9","0"],["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l"],["z","x","c","v","b","n","m","/"],[" ","Enter","Backspace"]],n=[["1","2","3","4","5","6","7","8","9","0"],["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l"],["z","x","c","v","b","n","m","/"],["Space","Enter","Back"]],a=document.querySelector("#virtual-keyboard");for(let r=0;r<n.length;r++){const i=t("div","",{class:"row"});for(let a=0;a<n[r].length;a++){const o=n[r][a],s=e[r][a],l=t("button",o,{class:"key noselect",id:"virtual-key-"+o});let c=!1,p=null,h=null;const d=()=>{p&&(clearTimeout(p),p=null),h&&(clearInterval(h),h=null),l.classList.add("hold"),c=!0,p=setTimeout((()=>{!0===c&&(h=setInterval((()=>{this.pressKey(s)}),30))}),500)},u=()=>{p&&(clearTimeout(p),p=null),h?(clearInterval(h),h=null):c&&this.pressKey(s),l.classList.remove("hold"),c=!1};l.addEventListener("touchstart",(t=>{t.preventDefault(),d()})),l.addEventListener("touchend",(t=>{t.preventDefault(),u()})),l.addEventListener("touchcancel",(t=>{t.preventDefault(),u()})),l.addEventListener("mousedown",(t=>{t.preventDefault(),d()})),l.addEventListener("mouseup",(t=>{t.preventDefault(),u()})),document.addEventListener("mouseup",(t=>{u()})),i.appendChild(l)}a.append(i)}}#s(){this.addSpecialKey("Backspace",(()=>{this.inputStream.updateInput(this.inputStream.getInput().slice(0,-1))})),this.addSpecialKey("Enter",(()=>{const t=m.getInstance(),e=this.inputStream.getInput();this.inputStream.updateInput(""),""===e?this.outputStream.print(new a("line",{height:1})):t.execute(e,{outStream:this.outputStream})}))}keyIsAllowedShow(t){return this.keyAllowedShowSet.has(t)}keyIsSpecial(t){return void 0!==this.specialKeyHandlers[t]}addSpecialKey(t,e){this.specialKeyHandlers[t]=e}updateInputWithKey(t){this.inputStream.updateInput(this.inputStream.getInput()+t)}pressKey(t,e=null){let n=!1;this.keyIsAllowedShow(t)&&(this.updateInputWithKey(t),n=!0),this.keyIsSpecial(t)&&(this.specialKeyHandlers[t](),n=!0),n&&null!==e&&e()}}window.addEventListener("load",(()=>{!function(){const e=t("div","",{id:"top-layer",class:"layer clickthrough noselect"}),n=t("div","",{id:"second-layer",class:"layer clickthrough noselect"}),a=t("div","",{id:"third-layer",class:"layer"}),r=t("div","",{id:"virtual-keyboard"}),i=t("div","",{id:"terminal-container"}),o=t("div","",{id:"function-key-container",class:"noselect"}),s=t("div","",{id:"footer"}),l=t("div","",{id:"terminal-output"}),c=t("div","",{class:"container left"}),p=t("div","",{class:"container middle"}),h=t("div","",{class:"container right"});i.appendChild(l),o.appendChild(c),o.appendChild(p),o.appendChild(h),a.appendChild(r),a.appendChild(i),a.appendChild(o),a.appendChild(s),document.body.appendChild(e),document.body.appendChild(n),document.body.appendChild(a)}();const e=new r,n=new i(document.querySelector("#terminal-container #terminal-output"));new m,new f(e,n),new I(e,n),s({outStream:n})}))})()})();