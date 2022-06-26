(()=>{"use strict";class e{constructor(){if(e._instance)return e._instance;e._instance=this,this.onPoster=!1,this.clickDown=!1}static getInstance(){return e._instance?e._instance:new ProgramCore}canRotate(){return!this.onPoster&&!this.clickDown}}const t={pointerX:0,pointerY:0,focusX:0,focusY:0,rotateDeg:0};const n=[],o="https://wnfa-interactive-art-project.github.io/hangzhou_060122/";function s(t,s){const r=[];let i,c,a=!1;const l=t=>{const n=document.createElement("img"),o=80*Math.random(),s=80*Math.random(),r=360*Math.random(),i=6*Math.random()+2;return n.classList.add("poster"),n.onerror=()=>{this.style.display="none"},n.draggable=!1,n.style.top=s+"%",n.style.right=o+"%",n.style.transform=`rotateZ(${r}deg) rotateY(${r}deg)`,n.style.height=i+"em",n.src=t,n.onmouseenter=()=>{e.getInstance().onPoster=!0,n.classList.add("focus")},n.onmouseleave=()=>{e.getInstance().onPoster=!1,n.classList.remove("focus")},n.onclick=()=>{const e=document.querySelector("#site-poster-detail-layer"),n=document.createElement("img");n.classList.add("show"),n.src=t,m((()=>{e.classList.add("show"),e.appendChild(n),e.onclick=()=>{e.onclick=()=>{},e.classList.remove("show"),setTimeout((()=>{e.removeChild(n),g((()=>{}))}),500)}}))},n},d=e=>{n[Math.floor(Math.random()*n.length)].appendChild(e),r.push(e),setTimeout((()=>{a||e.classList.add("show")}),100)},u=()=>{if(0!==r.length){const e=r.shift();e.classList.remove("show"),setTimeout((()=>{e.parentElement.removeChild(e)}),500)}},h=(e=(()=>{}))=>{for(;0!==r.length;)u();e()},m=(e=(()=>{}))=>{a=!0;for(let e=0;e<r.length;e++)r[e].classList.remove("show");e()},g=(e=(()=>{}))=>{for(let e=0;e<r.length;e++)r[e].classList.add("show");a=!1,e()},p=document.querySelector("#site-gallery-name"),v=()=>{const e=document.querySelector("#site-interactive");"results"===s?(a=!1,(()=>{const e=t.results.total;let n=0;i=setInterval((()=>{a||(d(l(o+"results/"+Math.floor(Math.random()*e+1)+".jpg")),++n>20&&(clearInterval(i),c=setInterval((()=>{a||(u(),d(l(o+"results/"+Math.floor(Math.random()*e+1)+".jpg")))}),5e3)))}),100)})(),p.innerHTML="WNFA/心的铁片",e.classList.add("lightup")):"posters"===s&&(a=!1,p.innerHTML="回想回想",(()=>{const e=t.posters.total;let n=1;i=setInterval((()=>{a||(d(l(o+"posters/"+String(n)+".jpg")),++n>e&&clearInterval(i))}),100)})(),e.classList.add("lightup"))};return v(),{clean:e=>{a=!0,clearInterval(i),clearInterval(c),h((()=>{document.querySelector("#site-interactive").classList.remove("lightup"),setTimeout((()=>{e()}),1e3)}))},refresh:()=>{a=!0,clearInterval(i),clearInterval(c),h((()=>{document.querySelector("#site-interactive").classList.remove("lightup"),setTimeout((()=>{v()}),1e3)}))},hide:e=>{m((()=>{setTimeout((()=>{e()}),1e3)}))},show:e=>{g((()=>{setTimeout((()=>{e()}),1e3)}))}}}function r(){const r=document.querySelector("#site-interactive"),i=document.querySelector("#site-interactive .room"),c=document.querySelector("#site-interactive .room .gallery");new e,function(n,o,s){const r=()=>{const e=n.getBoundingClientRect();t.pointerX=e.left+e.width/2,t.pointerY=e.top+e.height/2,t.focusX=t.pointerX,t.focusY=t.pointerY},i=()=>{const e=s.getBoundingClientRect(),t=e.width/e.height,n=document.querySelector("#site-prompt"),o=document.querySelector("#site-prompt .prompt");if(t<.4||t>2.5)o.innerHTML="Window ratio not supported",n.style.visibility="visible";else{n.style.visibility="hidden",o.innerHTML="";const e=document.querySelector("#site-interactive");t<1?e.classList.add("vertical"):e.classList.remove("vertical")}};r(),i(),s.onmousemove=n=>{if(e.getInstance().clickDown)if(null===t.rotateOrigin)t.rotateOrigin=n.clientX;else{const e=n.clientX-t.rotateOrigin,o=90/1080;t.rotateDeg=(t.rotateDeg+4*e*o)%360,t.rotateOrigin=n.clientX}t.pointerX=n.clientX,t.pointerY=n.clientY},s.ontouchmove=n=>{if(e.getInstance().clickDown)if(null===t.rotateOrigin)t.rotateOrigin=n.touches[0].clientX;else{const e=n.touches[0].clientX-t.rotateOrigin,o=90/1080;t.rotateDeg=(t.rotateDeg+4*e*o)%360,t.rotateOrigin=n.touches[0].clientX}t.pointerX=n.touches[0].clientX,t.pointerY=n.touches[0].clientY};const c=()=>{t.rotateOrigin=null,e.getInstance().clickDown=!0},a=()=>{e.getInstance().clickDown=!1};s.addEventListener("mousedown",(e=>{c()})),s.addEventListener("touchstart",(e=>{c()})),s.addEventListener("touchend",(e=>{a()})),s.addEventListener("touchcancel",(e=>{a()})),document.addEventListener("mouseup",(e=>{a()})),document.addEventListener("mouseleave",(e=>{a()}));const l=window.getComputedStyle(o).transform,d=r=>{window.requestAnimationFrame((i=>{const c=1/((i-r)/1e3);var a;console.log(c),e.getInstance().canRotate()&&(t.rotateDeg=(t.rotateDeg+360/(60/(1/c)))%360),function(e){Math.abs(t.pointerX-t.focusX)>1&&(t.focusX=t.focusX+(t.pointerX-t.focusX)/(.25*e)),Math.abs(t.pointerY-t.focusY)>1&&(t.focusY=t.focusY+(t.pointerY-t.focusY)/(.25*e))}(c),function(e,n){const o=e.getBoundingClientRect(),s=n.getBoundingClientRect(),r=s.height/s.width,i=10*r,c=10/r,a=o.left+o.width/2,l=o.top+o.height/2,d=t.focusX-a,u=t.focusY-l,h=d/(s.width/2),m=u/(s.height/2),g=h*i/((s.height+600)/600),p=-m*c/((s.width+600)/600);e.style.transform=`rotateX(${p}deg) rotateY(${g}deg)`}(n,s),a=l,o.style.transform=a+`rotateY(${t.rotateDeg}deg)`,d(i)}))};window.requestAnimationFrame((e=>{d(e)})),window.addEventListener("resize",(()=>{i(),r()}))}(i,c,r),function(e){for(let t=0;t<6;t++){const o=60+60*t,s=document.createElement("div");s.classList.add("wall"),s.style.transform=`rotateY(${o}deg) translateX(-50%)`,n.push(s),e.appendChild(s)}var t;t=e=>{let t=["posters","results"],n=s(e,"results");document.querySelector("#site-button-refresh").onclick=()=>{n.refresh()},document.querySelector("#site-button-next").onclick=()=>{const o=t.shift();t.push(o),n.clean((()=>{n=s(e,o)}))};const o=document.querySelector("#site-button-info");document.querySelector("#site-interactive .room .gallery");let r=!1;const i=()=>{r=!0,n.hide((()=>{}))},c=()=>{r=!1,n.show((()=>{}))};o.addEventListener("touchstart",(e=>{e.preventDefault(),i()})),o.addEventListener("touchend",(e=>{e.preventDefault(),c()})),o.addEventListener("touchcancel",(e=>{e.preventDefault(),c()})),o.addEventListener("mousedown",(e=>{e.preventDefault(),i()})),o.addEventListener("mouseup",(e=>{e.preventDefault(),c()})),document.addEventListener("mouseup",(e=>{r&&c()}))},fetch(o+"META.json").then((e=>{200===e.status&&e.json().then((e=>{t(e)}))})).catch((e=>{console.log("error",e)}))}(c);const a=document.querySelector("#site-button-info"),l=document.querySelector("#site-button-next"),d=document.querySelector("#site-button-refresh"),u=document.createElement("div"),h=document.createElement("div"),m=document.createElement("div");u.classList.add("icon"),h.classList.add("icon"),m.classList.add("icon"),u.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="${"0.75em"}" viewBox="0 0 74 74"><rect width="74" height="74" fill="none"/><path d="M40.657,38.124h10.2L50.8,77.772H40.657ZM45.731,19a6.122,6.122,0,1,1-6.122,6.122A6.122,6.122,0,0,1,45.731,19Z" transform="translate(-8.786 -11.12)" fill="${"rgb(58, 58, 58)"}"/></svg>`,h.innerHTML=((e,t)=>`<svg xmlns="http://www.w3.org/2000/svg" width="${t}" viewBox="0 0 74 74"><rect width="74" height="74" fill="none"/><g transform="translate(-28.581 6.732)"><g transform="translate(48.224)"><g transform="translate(0)"><path d="M52.745,60.535l-4.521-4.57,26.546-25.7L48.224,4.568,52.745,0,82.939,30.269Z" transform="translate(-48.224)" fill="${e}"/></g></g></g></svg>`)("rgb(225, 225, 225)","0.75em"),m.innerHTML=((e,t)=>`<svg xmlns="http://www.w3.org/2000/svg" width="${t}" viewBox="0 0 74 74"><rect width="74" height="74" fill="none"/><path d="M55.148,13.867a29.123,29.123,0,0,0-7.136-7.619L54.23,0h-18.1V18.184l8.455-8.5a24.242,24.242,0,1,1-38.1,19.885A24.092,24.092,0,0,1,20.139,7.757L18.045,3.45a29.033,29.033,0,1,0,37.1,10.417Z" transform="translate(6.273 7.697)" fill="${e}"/></svg>`)("rgb(225, 225, 225)","0.75em"),a.appendChild(u),l.appendChild(h),d.appendChild(m)}window.addEventListener("load",(()=>{const e=document.querySelector("#site-prompt"),t=document.querySelector("#site-prompt .prompt"),n=["loading<br>.","loading<br>. .","loading<br>. . ."];let o=0,s=setInterval((()=>{t.innerHTML=n[o],o=(o+1)%n.length}),750);setTimeout((()=>{clearInterval(s),t.innerHTML="",e.style.visibility="hidden",r()}),3e3)}))})();