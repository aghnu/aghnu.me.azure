(()=>{var e={578:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(81),o=n.n(r),a=n(645),i=n.n(a),s=n(667),c=n.n(s),l=new URL(n(73),n.b),d=i()(o()),u=c()(l);d.push([e.id,'html{background-color:#000;font-size:2.2vh;font-family:"Classic Console Neue"}body{margin:0;padding:0}@font-face{font-family:"Classic Console Neue";font-size:normal;font-weight:400;src:url('+u+') format("truetype")}#ascii-art-showcase{position:fixed;top:40%;left:50%;transform:translate(-50%, -50%);height:35em;overflow:hidden}#ascii-art-showcase .art-container{position:relative;top:50%;left:50%;transform:translate(-50%, -50%)}#ascii-art-showcase .row{width:fit-content;position:relative;top:50%;left:50%;transform:translate(-50%, -50%);overflow:hidden;white-space:nowrap}#ascii-art-showcase .char{display:inline-block;height:1vh;width:1vh;font-family:"Classic Console Neue"}#img-upload{position:fixed;top:82.5%;left:50%;transform:translate(-50%, -50%);height:5vh;text-align:center;color:#ab9877;cursor:pointer;font-size:1.5em}#img-upload .prompt{margin:0;position:relative;top:50%;left:50%;transform:translate(-50%, -50%);font-family:"Classic Console Neue";white-space:nowrap}#img-upload .upload{display:none}#site-footer .info{color:#ab9877;font-size:.75em;position:fixed;text-align:center;top:92.5%;left:50%;transform:translate(-50%, -50%);font-family:"Classic Console Neue"}',""]);const p=d},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},667:e=>{"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=n(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=o(f,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=r(e,o),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},259:function(e,t){var n,r;void 0===(r="function"==typeof(n=function(){function e(e){return e.reduce((function(e,t){return 2*e+t}),0)}function t(e){let t=[];for(let n=7;n>=0;n--)t.push(!!(e&1<<n));return t}function n(n,r){r||(r={});let o=function(e){let t=[];for(let r=0;r<e;r++)t.push(n.readBytes(3));return t},a=function(){let e,t;t="";do{e=n.readByte(),t+=n.read(e)}while(0!==e);return t},i=function(o){switch(o.label=n.readByte(),o.label){case 249:o.extType="gce",function(o){n.readByte();let a=t(n.readByte());o.reserved=a.splice(0,3),o.disposalMethod=e(a.splice(0,3)),o.userInput=a.shift(),o.transparencyGiven=a.shift(),o.delayTime=n.readUnsigned(),o.transparencyIndex=n.readByte(),o.terminator=n.readByte(),r.gce&&r.gce(o)}(o);break;case 254:o.extType="com",function(e){e.comment=a(),r.com&&r.com(e)}(o);break;case 1:o.extType="pte",function(e){n.readByte(),e.ptHeader=n.readBytes(12),e.ptData=a(),r.pte&&r.pte(e)}(o);break;case 255:o.extType="app",function(e){n.readByte(),e.identifier=n.read(8),e.authCode=n.read(3),"NETSCAPE"===e.identifier?function(e){n.readByte(),e.unknown=n.readByte(),e.iterations=n.readUnsigned(),e.terminator=n.readByte(),r.app&&r.app.NETSCAPE&&r.app.NETSCAPE(e)}(e):function(e){e.appData=a(),r.app&&r.app[e.identifier]&&r.app[e.identifier](e)}(e)}(o);break;default:o.extType="unknown",function(e){e.data=a(),r.unknown&&r.unknown(e)}(o)}},s=function(i){i.leftPos=n.readUnsigned(),i.topPos=n.readUnsigned(),i.width=n.readUnsigned(),i.height=n.readUnsigned();let s=t(n.readByte());i.lctFlag=s.shift(),i.interlaced=s.shift(),i.sorted=s.shift(),i.reserved=s.splice(0,2),i.lctSize=e(s.splice(0,3)),i.lctFlag&&(i.lct=o(1<<i.lctSize+1)),i.lzwMinCodeSize=n.readByte();let c=a();i.pixels=function(e,t){let n,r,o=0,a=function(e){let n=0;for(let r=0;r<e;r++)t.charCodeAt(o>>3)&1<<(7&o)&&(n|=1<<r),o++;return n},i=[],s=1<<e,c=s+1,l=e+1,d=[],u=function(){d=[],l=e+1;for(let e=0;e<s;e++)d[e]=[e];d[s]=[],d[c]=null};for(;;)if(r=n,n=a(l),n!==s){if(n===c)break;if(n<d.length)r!==s&&d.push(d[r].concat(d[n][0]));else{if(n!==d.length)throw new Error("Invalid LZW code.");d.push(d[r].concat(d[r][0]))}i.push.apply(i,d[n]),d.length===1<<l&&l<12&&l++}else u();return i}(i.lzwMinCodeSize,c),i.interlaced&&(i.pixels=function(e,t){let n=new Array(e.length),r=e.length/t,o=function(r,o){let a=e.slice(o*t,(o+1)*t);n.splice.apply(n,[r*t,t].concat(a))},a=[0,4,2,1],i=[8,8,4,2],s=0;for(let e=0;e<4;e++)for(let t=a[e];t<r;t+=i[e])o(t,s),s++;return n}(i.pixels,i.width)),r.img&&r.img(i)},c=function(){let e={};switch(e.sentinel=n.readByte(),String.fromCharCode(e.sentinel)){case"!":e.type="ext",i(e);break;case",":e.type="img",s(e);break;case";":e.type="eof",r.eof&&r.eof(e);break;default:throw new Error("Unknown block: 0x"+e.sentinel.toString(16))}"eof"!==e.type&&setTimeout(c,0)};(function(){let a={};if(a.sig=n.read(3),a.ver=n.read(3),"GIF"!==a.sig)throw new Error("Not a GIF file.");a.width=n.readUnsigned(),a.height=n.readUnsigned();let i=t(n.readByte());a.gctFlag=i.shift(),a.colorRes=e(i.splice(0,3)),a.sorted=i.shift(),a.gctSize=e(i.splice(0,3)),a.bgColor=n.readByte(),a.pixelAspectRatio=n.readByte(),a.gctFlag&&(a.gct=o(1<<a.gctSize+1)),r.hdr&&r.hdr(a)})(),setTimeout(c,0)}function r(e){this.data=e,this.len=this.data.length,this.pos=0,this.readByte=function(){if(this.pos>=this.data.length)throw new Error("Attempted to read past end of stream.");return e instanceof Uint8Array?e[this.pos++]:255&e.charCodeAt(this.pos++)},this.readBytes=function(e){let t=[];for(let n=0;n<e;n++)t.push(this.readByte());return t},this.read=function(e){let t="";for(let n=0;n<e;n++)t+=String.fromCharCode(this.readByte());return t},this.readUnsigned=function(){let e=this.readBytes(2);return(e[1]<<8)+e[0]}}return function(e,t=(()=>{}),o=(()=>{})){const a=[],i=document.createElement("canvas");let s=null,c=null,l=null,d=null,u=null,p=null,f=null,h={},g=null;function m(){s=null,c=null,p=d,d=null,g=null}function y(){if(!s)return;const e={data:s.getImageData(0,0,h.width,h.height),delay:c};a.push(e),o(e)}function v(e){var t,n;h=e,t=h.width,n=h.height,i.width=t,i.height=n,i.getContext("2d").setTransform(1,0,0,1,0,0)}function w(e){y(),m(),g=e.transparencyGiven?e.transparencyIndex:null,c=e.delayTime,d=e.disposalMethod}function b(e){s||(s=i.getContext("2d"));let t=a.length,n=e.lctFlag?e.lct:h.gct;t>0&&(3===p?null!==u?s.putImageData(a[u].data,0,0):s.clearRect(f.leftPos,f.topPos,f.width,f.height):u=t-1,2===p&&s.clearRect(f.leftPos,f.topPos,f.width,f.height));let r=s.getImageData(e.leftPos,e.topPos,e.width,e.height);e.pixels.forEach((function(e,t){e!==g&&(r.data[4*t+0]=n[e][0],r.data[4*t+1]=n[e][1],r.data[4*t+2]=n[e][2],r.data[4*t+3]=255)})),s.putImageData(r,e.leftPos,e.topPos),f=e}function C(e){m(),console.log(e)}function x(){const e={hdr:v,gce:w,com:()=>{},app:{NETSCAPE:()=>{}},img:b,eof:()=>{y(),t(a)}};try{n(l,e)}catch{C("parsing error")}}var T,E;T=e,(E=new XMLHttpRequest).open("GET",T,!0),"overrideMimeType"in E?E.overrideMimeType("text/plain; charset=x-user-defined"):"responseType"in E?E.responseType="arraybuffer":E.setRequestHeader("Accept-Charset","x-user-defined"),E.onload=function(e){200!=this.status&&C("response error"),"response"in this||(this.response=new VBArray(this.responseText).toArray().map(String.fromCharCode).join(""));var t=this.response;t.toString().indexOf("ArrayBuffer")>0&&(t=new Uint8Array(t)),l=new r(t),setTimeout(x,0)},E.onerror=function(){C("request error")},E.send()}})?n.apply(t,[]):n)||(e.exports=r)},73:(e,t,n)=>{"use strict";e.exports=n.p+"5bf9de9284ff094e27c6.ttf"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{"use strict";function e(e,t,n=!1){const r="@QB#NgWM8RDHdOKq9$6khEPXwmeZaoS2yjufF]}{tx1zv7lciL/\\|?*>r^;:_\"~,'.-` ",o=[],a=n?cv.matFromImageData(e):cv.imread(e),i=a.cols/a.rows,s=t,c=Math.floor(i*s*1.8),l=new cv.Size(c,s),d=new cv.Mat;cv.resize(a,d,l,0,0,cv.INTER_AREA);const u=new cv.Mat;if(cv.cvtColor(d,u,cv.COLOR_RGBA2GRAY,0),cv.equalizeHist(u,u),d.isContinuous()&&u.isContinuous())for(let e=0;e<d.rows;e++){const t=[];o.push(t);for(let n=0;n<d.cols;n++){const o=d.data[e*d.cols*d.channels()+n*d.channels()],a=d.data[e*d.cols*d.channels()+n*d.channels()+1],i=d.data[e*d.cols*d.channels()+n*d.channels()+2],s=d.data[e*d.cols*d.channels()+n*d.channels()+3],c=u.data[e*u.cols*u.channels()+n*u.channels()],l=r[r.length-1-Math.floor(c/255*(r.length-1))],p=[o,a,i,s];t.push({char:" "===l?"&nbsp":l,rgba:p})}}return a.delete(),d.delete(),u.delete(),o}function t(e,t="",n={}){const r=document.createElement(e);r.innerHTML=t;for(let e in n)r.setAttribute(e,n[e]);return r}var r=n(259),o=n.n(r),a=n(379),i=n.n(a),s=n(795),c=n.n(s),l=n(569),d=n.n(l),u=n(565),p=n.n(u),f=n(216),h=n.n(f),g=n(589),m=n.n(g),y=n(578),v={};v.styleTagTransform=m(),v.setAttributes=p(),v.insert=d().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=h(),i()(y.Z,v),y.Z&&y.Z.locals&&y.Z.locals;const w=n.p+"58a68f987df5124724258795fdc55ded.gif",b=n.p+"77ef16f5ce1bf6c6134faf28f77f26ef.gif",C=n.p+"0caf06141b92dfeafefde58aeef2128f.gif",x=t("img","",{id:"img-temp"}),T=[w,b,C];function E(e){let n=0;const r=t("div","",{class:"art-container"});return e.forEach((e=>{n=0;const o=t("div","",{class:"row"});r.appendChild(o),e.forEach((e=>{n++;const r=t("span",e.char,{class:"char"});r.style.color=`rgba(${e.rgba[0]},${e.rgba[1]},${e.rgba[2]},${e.rgba[3]/255})`,o.appendChild(r)}))})),r}function B(t,n=!0){return n?function(t){const n=document.getElementById("ascii-art-showcase");let r=null,a=!0,i=!1,s=0;const c=[],l=()=>{const e=s;n.innerHTML="",n.appendChild(c[e][0]),a&&(s=(s+1)%c.length,i||0!==s?r=setTimeout(l,c[e][1]):(s=e,r=setTimeout(l,50)))};return o()(t,(e=>{i=!0}),(t=>{a&&new Promise((()=>{const n=E(e(t.data,35,!0));0===c.length?(c.push([n,10*t.delay]),l()):c.push([n,10*t.delay])}))})),()=>{a=!1,clearTimeout(r)}}(t):function(t){const n=document.getElementById("ascii-art-showcase");let r=null,a=!0;return o()(t,(t=>{const o=t.length;let i=0;const s=[];t.forEach((t=>{const n=e(t.data,35,!0);s.push([E(n),10*t.delay])}));const c=()=>{const e=i;n.innerHTML="",n.appendChild(s[e][0]),a&&(i=(i+1)%o,r=setTimeout(c,s[e][1]))};c()})),()=>{a=!1,clearTimeout(r)}}(t)}function A(){const t=document.querySelector("#img-upload .upload"),n=/(\.jpg|\.jpeg|\.png)$/i,r=/(\.gif)$/i;let o=null;const a=()=>{o&&o(),o=null};t.addEventListener("change",(e=>{const i=t.value;n.exec(i)?(a(),x.src=URL.createObjectURL(e.target.files[0])):r.exec(i)?(a(),o=B(URL.createObjectURL(e.target.files[0]))):t.value=""}),!1),x.addEventListener("load",(t=>{!function(t){const n=document.getElementById("ascii-art-showcase"),r=e(t,35);0!==r.length&&(n.innerHTML="",n.appendChild(E(r)))}(x)}));const i=T[Math.floor(Math.random()*T.length)];n.exec(i)?(a(),x.src=i):r.exec(i)&&(a(),o=B(i))}window.addEventListener("load",(()=>{!function(){const e=t("label","",{id:"img-upload"}),n=t("input","",{class:"upload",type:"file"}),r=t("p","UPLOAD<br>JPG \\ PNG \\ GIF",{class:"prompt"}),o=t("div","",{id:"ascii-art-showcase"}),a=t("footer","",{id:"site-footer"}),i=t("p","Aghnu's ASCII Art Generator<br>by Gengyuan Huang",{class:"info"});a.appendChild(i),e.appendChild(r),e.appendChild(n),document.body.appendChild(o),document.body.appendChild(e),document.body.appendChild(a)}();const e=t("script","",{src:"https://docs.opencv.org/4.5.0/opencv.js",async:!0});document.head.appendChild(e),e.addEventListener("load",(()=>{cv.getBuildInformation?A():cv.onRuntimeInitialized=A}))}))})()})();