(()=>{var A={894:function(A,e){var t,n;void 0===(n="function"==typeof(t=function(){const A=document.createElement("canvas"),e=A.getContext("2d"),t={extract:function(t,n,a=(()=>{}),r=(()=>{})){A.width=t.videoWidth,A.height=t.videoHeight;const i=()=>{if(!r()){const A=Date.now();e.drawImage(t,0,0,t.videoWidth,t.videoHeight);const r=e.getImageData(0,0,t.videoWidth,t.videoHeight);new Promise((()=>{a({data:r})})),setTimeout(i,1e3/n-(Date.now()-A))}};i()},checkSupport:(A,e,n)=>{const a=document.createElement("video");let r=!1,i=!1;a.muted=!0,a.autoplay=!0,a.addEventListener("canplay",(o=>{i||(i=!0,a.readyState>=2&&t.extract(a,120,(t=>{r=!0,n(t)?A():e()}),(()=>r)))}),{once:!0}),a.addEventListener("error",(A=>{i||(i=!0,e())}),{once:!0}),a.src="data:video/mp4;base64,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"}};return t})?t.apply(e,[]):t)||(A.exports=n)},259:function(A,e){var t,n;void 0===(n="function"==typeof(t=function(){function A(A){return A.reduce((function(A,e){return 2*A+e}),0)}function e(A){let e=[];for(let t=7;t>=0;t--)e.push(!!(A&1<<t));return e}function t(t,n){n||(n={});let a=function(A){let e=[];for(let n=0;n<A;n++)e.push(t.readBytes(3));return e},r=function(){let A,e;e="";do{A=t.readByte(),e+=t.read(A)}while(0!==A);return e},i=function(a){switch(a.label=t.readByte(),a.label){case 249:a.extType="gce",function(a){t.readByte();let r=e(t.readByte());a.reserved=r.splice(0,3),a.disposalMethod=A(r.splice(0,3)),a.userInput=r.shift(),a.transparencyGiven=r.shift(),a.delayTime=t.readUnsigned(),a.transparencyIndex=t.readByte(),a.terminator=t.readByte(),n.gce&&n.gce(a)}(a);break;case 254:a.extType="com",function(A){A.comment=r(),n.com&&n.com(A)}(a);break;case 1:a.extType="pte",function(A){t.readByte(),A.ptHeader=t.readBytes(12),A.ptData=r(),n.pte&&n.pte(A)}(a);break;case 255:a.extType="app",function(A){t.readByte(),A.identifier=t.read(8),A.authCode=t.read(3),"NETSCAPE"===A.identifier?function(A){t.readByte(),A.unknown=t.readByte(),A.iterations=t.readUnsigned(),A.terminator=t.readByte(),n.app&&n.app.NETSCAPE&&n.app.NETSCAPE(A)}(A):function(A){A.appData=r(),n.app&&n.app[A.identifier]&&n.app[A.identifier](A)}(A)}(a);break;default:a.extType="unknown",function(A){A.data=r(),n.unknown&&n.unknown(A)}(a)}},o=function(i){i.leftPos=t.readUnsigned(),i.topPos=t.readUnsigned(),i.width=t.readUnsigned(),i.height=t.readUnsigned();let o=e(t.readByte());i.lctFlag=o.shift(),i.interlaced=o.shift(),i.sorted=o.shift(),i.reserved=o.splice(0,2),i.lctSize=A(o.splice(0,3)),i.lctFlag&&(i.lct=a(1<<i.lctSize+1)),i.lzwMinCodeSize=t.readByte();let s=r();i.pixels=function(A,e){let t,n,a=0,r=function(A){let t=0;for(let n=0;n<A;n++)e.charCodeAt(a>>3)&1<<(7&a)&&(t|=1<<n),a++;return t},i=[],o=1<<A,s=o+1,c=A+1,l=[],d=function(){l=[],c=A+1;for(let A=0;A<o;A++)l[A]=[A];l[o]=[],l[s]=null};for(;;)if(n=t,t=r(c),t!==o){if(t===s)break;if(t<l.length)n!==o&&l.push(l[n].concat(l[t][0]));else{if(t!==l.length)throw new Error("Invalid LZW code.");l.push(l[n].concat(l[n][0]))}i.push.apply(i,l[t]),l.length===1<<c&&c<12&&c++}else d();return i}(i.lzwMinCodeSize,s),i.interlaced&&(i.pixels=function(A,e){let t=new Array(A.length),n=A.length/e,a=function(n,a){let r=A.slice(a*e,(a+1)*e);t.splice.apply(t,[n*e,e].concat(r))},r=[0,4,2,1],i=[8,8,4,2],o=0;for(let A=0;A<4;A++)for(let e=r[A];e<n;e+=i[A])a(e,o),o++;return t}(i.pixels,i.width)),n.img&&n.img(i)},s=function(){let A={};switch(A.sentinel=t.readByte(),String.fromCharCode(A.sentinel)){case"!":A.type="ext",i(A);break;case",":A.type="img",o(A);break;case";":A.type="eof",n.eof&&n.eof(A);break;default:throw new Error("Unknown block: 0x"+A.sentinel.toString(16))}"eof"!==A.type&&setTimeout(s,0)};(function(){let r={};if(r.sig=t.read(3),r.ver=t.read(3),"GIF"!==r.sig)throw new Error("Not a GIF file.");r.width=t.readUnsigned(),r.height=t.readUnsigned();let i=e(t.readByte());r.gctFlag=i.shift(),r.colorRes=A(i.splice(0,3)),r.sorted=i.shift(),r.gctSize=A(i.splice(0,3)),r.bgColor=t.readByte(),r.pixelAspectRatio=t.readByte(),r.gctFlag&&(r.gct=a(1<<r.gctSize+1)),n.hdr&&n.hdr(r)})(),setTimeout(s,0)}function n(A){this.data=A,this.len=this.data.length,this.pos=0,this.readByte=function(){if(this.pos>=this.data.length)throw new Error("Attempted to read past end of stream.");return A instanceof Uint8Array?A[this.pos++]:255&A.charCodeAt(this.pos++)},this.readBytes=function(A){let e=[];for(let t=0;t<A;t++)e.push(this.readByte());return e},this.read=function(A){let e="";for(let t=0;t<A;t++)e+=String.fromCharCode(this.readByte());return e},this.readUnsigned=function(){let A=this.readBytes(2);return(A[1]<<8)+A[0]}}return function(A,e=(()=>{}),a=(()=>{})){const r=[],i=document.createElement("canvas");let o=null,s=null,c=null,l=null,d=null,p=null,u=null,h={},g=null;function f(){o=null,s=null,p=l,l=null,g=null}function m(){if(!o)return;const A={data:o.getImageData(0,0,h.width,h.height),delay:s};r.push(A),a(A)}function y(A){var e,t;h=A,e=h.width,t=h.height,i.width=e,i.height=t,i.getContext("2d").setTransform(1,0,0,1,0,0)}function w(A){m(),f(),g=A.transparencyGiven?A.transparencyIndex:null,s=A.delayTime,l=A.disposalMethod}function B(A){o||(o=i.getContext("2d"));let e=r.length,t=A.lctFlag?A.lct:h.gct;e>0&&(3===p?null!==d?o.putImageData(r[d].data,0,0):o.clearRect(u.leftPos,u.topPos,u.width,u.height):d=e-1,2===p&&o.clearRect(u.leftPos,u.topPos,u.width,u.height));let n=o.getImageData(A.leftPos,A.topPos,A.width,A.height);A.pixels.forEach((function(A,e){A!==g&&(n.data[4*e+0]=t[A][0],n.data[4*e+1]=t[A][1],n.data[4*e+2]=t[A][2],n.data[4*e+3]=255)})),o.putImageData(n,A.leftPos,A.topPos),u=A}function b(A){f(),console.log(A)}function v(){const A={hdr:y,gce:w,com:()=>{},app:{NETSCAPE:()=>{}},img:B,eof:()=>{m(),e(r)}};try{t(c,A)}catch{b("parsing error")}}var C,M;C=A,(M=new XMLHttpRequest).open("GET",C,!0),"overrideMimeType"in M?M.overrideMimeType("text/plain; charset=x-user-defined"):"responseType"in M?M.responseType="arraybuffer":M.setRequestHeader("Accept-Charset","x-user-defined"),M.onload=function(A){200!=this.status&&b("response error"),"response"in this||(this.response=new VBArray(this.responseText).toArray().map(String.fromCharCode).join(""));var e=this.response;e.toString().indexOf("ArrayBuffer")>0&&(e=new Uint8Array(e)),c=new n(e),setTimeout(v,0)},M.onerror=function(){b("request error")},M.send()}})?t.apply(e,[]):t)||(A.exports=n)}},e={};function t(n){var a=e[n];if(void 0!==a)return a.exports;var r=e[n]={exports:{}};return A[n].call(r.exports,r,r.exports,t),r.exports}t.n=A=>{var e=A&&A.__esModule?()=>A.default:()=>A;return t.d(e,{a:e}),e},t.d=(A,e)=>{for(var n in e)t.o(e,n)&&!t.o(A,n)&&Object.defineProperty(A,n,{enumerable:!0,get:e[n]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(A){if("object"==typeof window)return window}}(),t.o=(A,e)=>Object.prototype.hasOwnProperty.call(A,e),(()=>{var A;t.g.importScripts&&(A=t.g.location+"");var e=t.g.document;if(!A&&e&&(e.currentScript&&(A=e.currentScript.src),!A)){var n=e.getElementsByTagName("script");n.length&&(A=n[n.length-1].src)}if(!A)throw new Error("Automatic publicPath is not supported in this browser");A=A.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=A})(),(()=>{"use strict";function A(A,e,t=!1){const n="@#QB&MN$%Ebao]{/|?*>;:^'`~-,. ",a=[],r=t?cv.matFromImageData(A):cv.imread(A),i=r.cols/r.rows,o=e,s=Math.floor(i*o*1.8),c=new cv.Size(s,o),l=new cv.Mat;cv.resize(r,l,c,0,0,cv.INTER_AREA);const d=new cv.Mat;if(cv.cvtColor(l,d,cv.COLOR_RGBA2GRAY,0),cv.equalizeHist(d,d),l.isContinuous()&&d.isContinuous())for(let A=0;A<l.rows;A++){const e=[];a.push(e);for(let t=0;t<l.cols;t++){const a=l.data[A*l.cols*l.channels()+t*l.channels()],r=l.data[A*l.cols*l.channels()+t*l.channels()+1],i=l.data[A*l.cols*l.channels()+t*l.channels()+2],o=l.data[A*l.cols*l.channels()+t*l.channels()+3],s=d.data[A*d.cols*d.channels()+t*d.channels()],c=n[n.length-1-Math.floor(s/255*(n.length-1))],p=[a,r,i,o];e.push({char:" "===c?"&nbsp":c,rgba:p})}}return r.delete(),l.delete(),d.delete(),a}function e(A,e="",t={}){const n=document.createElement(A);n.innerHTML=e;for(let A in t)n.setAttribute(A,t[A]);return n}var n=t(259),a=t.n(n),r=t(894),i=t.n(r);const o=t.p+"58a68f987df5124724258795fdc55ded.gif",s=t.p+"77ef16f5ce1bf6c6134faf28f77f26ef.gif",c=t.p+"1573f4d72c230a95e0fdee5a108bf652.gif",l=e("img",""),d=e("video","",{loop:!0}),p=[["Blade-Runner.gif",o],["Blade-Runner-2049.gif",s],["WNFA-Heart.gif",c]];let u;function h(A){let t=0;const n=e("div","",{class:"art-container"});return A.forEach((A=>{t=0;const a=e("div","",{class:"row"});n.appendChild(a),A.forEach((A=>{t++;const n=e("span",A.char,{class:"char"});n.style.color=`rgba(${A.rgba[0]},${A.rgba[1]},${A.rgba[2]},${A.rgba[3]/255})`,a.appendChild(n)}))})),n}function g(){const e=document.querySelector("#img-upload .upload"),t=/(\.jpg|\.jpeg|\.png|\.apng|\.svg|\.bmp|\.webp)$/i,n=/(\.gif)$/i,r=/(\.mp4|\.webm|\.ogg)$/i,o=document.querySelector("#input-prompt");e.value="";let s=null;const c=()=>{s&&s(),s=null},g=(i,p=i)=>{if(t.exec(p))c(),l.src=i,o.innerHTML="&lt"+p+"&gt";else if(n.exec(p))c(),s=function(e,t=!0){return t?function(e){const t=document.getElementById("ascii-art-showcase");let n=null,r=!0,i=!1,o=0;const s=[],c=()=>{const A=o;t.innerHTML="",t.appendChild(s[A][0]),r&&(o=(o+1)%s.length,i||0!==o?n=setTimeout(c,s[A][1]):(o=A,n=setTimeout(c,50)))};return a()(e,(A=>{i=!0}),(e=>{r&&new Promise((()=>{const t=h(A(e.data,30,!0));0===s.length?(s.push([t,10*e.delay]),c()):s.push([t,10*e.delay])}))})),()=>{r=!1,clearTimeout(n)}}(e):function(e){const t=document.getElementById("ascii-art-showcase");let n=null,r=!0;return a()(e,(e=>{const a=e.length;let i=0;const o=[];e.forEach((e=>{const t=A(e.data,30,!0);o.push([h(t),10*e.delay])}));const s=()=>{const A=i;t.innerHTML="",t.appendChild(o[A][0]),r&&(i=(i+1)%a,n=setTimeout(s,o[A][1]))};s()})),()=>{r=!1,clearTimeout(n)}}(e)}(i),o.innerHTML="&lt"+p+"&gt";else if(r.exec(p))if(u)c(),d.src=i,o.innerHTML="&lt"+p+"&gt";else{e.value="";const A=o.innerHTML;o.innerHTML="browser doesn't support video convertion",setTimeout((()=>{o.innerHTML=A}),1500)}else{e.value="";const A=o.innerHTML;o.innerHTML="format is not supported",setTimeout((()=>{o.innerHTML=A}),1500)}};e.addEventListener("change",(A=>{const e=URL.createObjectURL(A.target.files[0]),t=A.target.files[0].name;g(e,t)}),!1),l.addEventListener("load",(e=>{!function(e){const t=document.getElementById("ascii-art-showcase"),n=A(e,30);0!==n.length&&(t.innerHTML="",t.appendChild(h(n)))}(l)})),d.addEventListener("loadeddata",(e=>{d.readyState>=2&&(s=function(e){const t=document.getElementById("ascii-art-showcase");let n=!1;return i().extract(e,120,(e=>{const n=A(e.data,30,!0);0!==n.length&&(t.innerHTML="",t.appendChild(h(n)))}),(()=>n)),e.play(),()=>{e.pause(),n=!0}}(d))}));const f=p[Math.floor(Math.random()*p.length)];g(f[1],f[0])}window.addEventListener("load",(()=>{const t=e("p","",{id:"loading-prompt"}),n=e("script","",{src:"https://www.aghnu.me/static/js/opencv.js",async:!0});let a;document.body.appendChild(t),document.head.appendChild(n);let r=0;const o=["Webpage is loading","Webpage is loading.","Webpage is loading..","Webpage is loading..."];t.style.visibility="visible",a=setInterval((()=>{t.innerHTML=o[r],r=(r+1)%o.length}),500);const s=()=>{const n=()=>{clearInterval(a),function(){const A=e("div","",{id:"app-container"}),t=e("label","",{id:"img-upload"}),n=e("input","",{class:"upload",type:"file"}),a=e("p",u?"UPLOAD<br>JPG \\ PNG \\ GIF \\ MP4":"UPLOAD<br>JPG \\ PNG \\ GIF",{class:"prompt"}),r=e("p","",{id:"input-prompt"}),i=e("div","",{id:"ascii-art-showcase"}),o=e("footer","",{id:"site-footer"}),s=e("p",'Aghnu\'s ASCII Art Generator<br>by Gengyuan Huang<br><a target="_blank" href="https://www.aghnu.me">© 2022 AGHNU.ME</a>',{class:"info"});return o.appendChild(s),t.appendChild(a),t.appendChild(n),A.appendChild(i),A.appendChild(r),A.appendChild(t),A.appendChild(o),document.body.appendChild(A),A}().style.visibility="visible",t.style.visibility="hidden",g()};i().checkSupport((()=>{u=!0,n()}),(()=>{u=!1,n()}),(e=>{const t=A(e.data,1,!0);return 0!==t.length&&254===t[0][0].rgba[0]}))};n.addEventListener("load",(()=>{setTimeout((()=>{cv.getBuildInformation?s():cv.onRuntimeInitialized=s}),500*o.length)}))}))})()})();