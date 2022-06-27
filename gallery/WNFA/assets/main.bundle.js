(()=>{"use strict";class e{constructor(){if(e._instance)return e._instance;e._instance=this,this.onPoster=!1,this.clickDown=!1,this.rotateSpeed=1}static getInstance(){return e._instance?e._instance:new ProgramCore}canRotate(){return!this.onPoster&&!this.clickDown}}const t={pointerX:0,pointerY:0,focusX:0,focusY:0,rotateDegFocus:0,rotateDeg:0,rotateDirection:1},n=.25;let s=!0;const o=[],r="https://wnfa-interactive-art-project.github.io/hangzhou_060122/";function a(e,t,n){fetch(e).then((e=>{200===e.status&&e.blob().then((e=>{t(URL.createObjectURL(e))}))})).catch((e=>{n(e)}))}function i(t,n){const s=[];let i,c,l,d=!1;const u=t=>{const n=document.createElement("img"),s=80*Math.random(),o=80*Math.random(),r=360*Math.random(),a=4*Math.random()+2;return n.classList.add("poster"),n.onerror=()=>{n.style.display="none"},n.draggable=!1,n.style.top=o+"%",n.style.right=s+"%",n.style.transform=`rotateZ(${r}deg) rotateY(${r}deg)`,n.style.height=a+"em",n.src=t,n.onmouseenter=()=>{e.getInstance().onPoster=!0,n.classList.add("focus")},n.onmouseleave=()=>{e.getInstance().onPoster=!1,n.classList.remove("focus")},n.onclick=()=>{e.getInstance().onPoster=!1,n.classList.remove("focus");const s=document.querySelector("#site-poster-detail-layer"),o=document.createElement("img");o.classList.add("show"),o.src=t,p((()=>{s.classList.add("show"),s.appendChild(o),s.onclick=()=>{s.onclick=()=>{},s.classList.remove("show"),setTimeout((()=>{s.removeChild(o),f((()=>{}))}),500)}}))},n},h=e=>{o[Math.floor(Math.random()*o.length)].appendChild(e),s.push(e),setTimeout((()=>{d||e.classList.add("show")}),100)},g=()=>{if(0!==s.length){const e=s.shift();e.classList.remove("show"),setTimeout((()=>{e.parentElement.removeChild(e)}),500)}},m=(e=(()=>{}))=>{for(;0!==s.length;)g();e()},p=(e=(()=>{}))=>{d=!0;for(let e=0;e<s.length;e++)s[e].classList.remove("show");e()},f=(e=(()=>{}))=>{for(let e=0;e<s.length;e++)s[e].classList.add("show");d=!1,e()},v=(t=(()=>{}))=>{clearInterval(l),e.getInstance().rotateSpeed=.5,l=setInterval((()=>{if(!d){const n=1.25*e.getInstance().rotateSpeed;n>30?(e.getInstance().rotateSpeed=30,clearInterval(l),t()):e.getInstance().rotateSpeed=n}}),250)},w=document.querySelector("#site-gallery-name"),L=()=>{const e=document.querySelector("#site-interactive");"results"===n?(v((()=>{})),d=!1,(()=>{const e=t.results.total;let n=1,s=!0;i=setInterval((()=>{!d&&s&&(s=!1,a(r+"results/"+Math.floor(Math.random()*e+1)+".jpg",(e=>{d||(h(u(e)),n++),s=!0}),(()=>{s=!0})),n>=22&&(clearInterval(i),c=setInterval((()=>{!d&&s&&(s=!1,a(r+"results/"+Math.floor(Math.random()*e+1)+".jpg",(e=>{d||(g(),h(u(e))),s=!0}),(()=>{s=!0})))}),5e3)))}),100)})(),w.innerHTML="WNFA/心的铁片",e.classList.add("lightup")):"posters"===n&&(v((()=>{})),d=!1,w.innerHTML="回想回想",(()=>{const e=t.posters.total;let n=1,s=!0;i=setInterval((()=>{!d&&s&&(s=!1,a(r+"posters/"+String(n)+".jpg",(e=>{d||(h(u(e)),n++),s=!0}),(()=>{s=!0})),n>=e&&clearInterval(i))}),100)})(),e.classList.add("lightup"))};return L(),{clean:e=>{d=!0,clearInterval(i),clearInterval(c),m((()=>{document.querySelector("#site-interactive").classList.remove("lightup"),setTimeout((()=>{e()}),1e3)}))},refresh:()=>{d=!0,clearInterval(i),clearInterval(c),m((()=>{document.querySelector("#site-interactive").classList.remove("lightup"),setTimeout((()=>{L()}),1e3)}))},hide:e=>{p((()=>{setTimeout((()=>{e()}),1e3)}))},show:e=>{f((()=>{setTimeout((()=>{e()}),1e3)}))}}}function c(){const a=document.querySelector("#site-interactive"),c=document.querySelector("#site-interactive .room"),l=document.querySelector("#site-interactive .room .gallery");new e,function(o,r,a){const i=()=>{const e=o.getBoundingClientRect();t.pointerX=e.left+e.width/2,t.pointerY=e.top+e.height/2},c=()=>{const e=a.getBoundingClientRect(),t=e.width/e.height,n=document.querySelector("#site-prompt"),s=document.querySelector("#site-prompt .prompt");if(t<.4||t>2.5)s.innerHTML="Window ratio not supported",n.style.visibility="visible";else{n.style.visibility="hidden",s.innerHTML="";const e=document.querySelector("#site-interactive");t<1?e.classList.add("vertical"):e.classList.remove("vertical")}};i(),t.focusX=t.pointerX,t.focusY=t.pointerY,c(),a.onmousemove=n=>{if(s){if(e.getInstance().clickDown)if(null===t.rotateOrigin)t.rotateOrigin=n.clientX;else{const e=n.clientX-t.rotateOrigin,s=90/1080;t.rotateDeg=t.rotateDeg+4*e*s,t.rotateOrigin=n.clientX}t.pointerX=n.clientX,t.pointerY=n.clientY}},a.ontouchmove=n=>{if(s){if(e.getInstance().clickDown)if(null===t.rotateOrigin)t.rotateOrigin=n.touches[0].clientX;else{const e=n.touches[0].clientX-t.rotateOrigin,s=90/1080;t.rotateDeg=t.rotateDeg+4*e*s,t.rotateOrigin=n.touches[0].clientX}t.pointerX=n.touches[0].clientX,t.pointerY=n.touches[0].clientY}};const l=()=>{t.rotateOrigin=null,e.getInstance().clickDown=!0},d=()=>{e.getInstance().clickDown=!1};a.addEventListener("mousedown",(e=>{l()})),a.addEventListener("touchstart",(e=>{l()})),a.addEventListener("touchend",(e=>{d()})),a.addEventListener("touchcancel",(e=>{d()})),document.addEventListener("mouseup",(e=>{d()})),document.addEventListener("mouseleave",(e=>{d()})),window.onblur=()=>{d(),s=!1,i()},window.onfocus=()=>{s=!0,i()};const u=window.getComputedStyle(r).transform,h=document.querySelector("#site-fps .prompt");let g=0;setInterval((()=>{h.innerHTML="FPS: "+g}),1e3);const m=s=>{window.requestAnimationFrame((i=>{const c=1/((i-s)/1e3);var l;g=Math.round(c),c>5&&(e.getInstance().canRotate()&&(t.rotateDeg=t.rotateDeg+t.rotateDirection*(360/(e.getInstance().rotateSpeed/(1/c)))),function(e){e*n>1&&(Math.abs(t.pointerX-t.focusX)>1?t.focusX=t.focusX+(t.pointerX-t.focusX)/(n*e):t.focusX=t.pointerX,Math.abs(t.pointerY-t.focusY)>1?t.focusY=t.focusY+(t.pointerY-t.focusY)/(n*e):t.focusY=t.pointerY,Math.abs(t.rotateDeg-t.rotateDegFocus)>1?(t.rotateDeg-t.rotateDegFocus>0?t.rotateDirection=1:t.rotateDirection=-1,t.rotateDegFocus=t.rotateDegFocus+(t.rotateDeg-t.rotateDegFocus)/(n*e)):t.rotateDegFocus=t.rotateDeg)}(c),function(e,n){const s=10,o=e.getBoundingClientRect(),r=n.getBoundingClientRect(),a=r.height/r.width,i=s*a,c=s/a,l=o.left+o.width/2,d=o.top+o.height/2,u=t.focusX-l,h=t.focusY-d,g=u/(r.width/2),m=h/(r.height/2);let p=g*i/((r.height+600)/600),f=-m*c/((r.width+600)/600);Math.abs(p)>s&&(p=p/Math.abs(p)*s),Math.abs(f)>s&&(f=f/Math.abs(f)*s),e.style.transform=`rotateX(${f}deg) rotateY(${p}deg)`}(o,a),l=u,r.style.transform=l+`rotateY(${t.rotateDegFocus}deg)`),m(i)}))};window.requestAnimationFrame((e=>{m(e)})),window.addEventListener("resize",(()=>{c(),i()}))}(c,l,a),function(e){for(let t=0;t<6;t++){const n=60+60*t,s=document.createElement("div");s.classList.add("wall"),s.style.transform=`rotateY(${n}deg) translateX(-50%)`,o.push(s),e.appendChild(s)}var t;t=e=>{const t=new URL(window.location);let n;switch(t.searchParams.get("gallery")?t.searchParams.get("gallery"):"tiepian"){case"tiepian":default:n=["results","posters"];break;case"huixiang":n=["posters","results"]}const s=n.shift();n.push(s);let o=i(e,s);const r=document.querySelector("#site-button-refresh"),a=document.querySelector("#site-button-next"),c=document.querySelector("#site-button-info"),l=document.querySelector("#site-wall-text"),d=(e,t,n)=>{let s=!1;e.addEventListener("touchstart",(e=>{e.preventDefault(),s=!0,t()})),e.addEventListener("touchend",(e=>{e.preventDefault(),n()})),e.addEventListener("touchcancel",(e=>{e.preventDefault(),n()})),e.addEventListener("mousedown",(e=>{e.preventDefault(),s=!0,t()})),e.addEventListener("mouseup",(e=>{e.preventDefault(),n()})),document.addEventListener("mouseup",(e=>{s&&n()}))};d(c,(()=>{c.classList.add("pressed"),l.classList.add("focus"),o.hide((()=>{}))}),(()=>{c.classList.remove("pressed"),l.classList.remove("focus"),o.show((()=>{}))})),d(r,(()=>{r.classList.add("pressed")}),(()=>{o.refresh(),r.classList.remove("pressed")})),d(a,(()=>{a.classList.add("pressed")}),(()=>{const t=n.shift();n.push(t),o.clean((()=>{o=i(e,t)})),a.classList.remove("pressed")}))},fetch(r+"META.json").then((e=>{200===e.status&&e.json().then((e=>{t(e)}))})).catch((e=>{console.log("error",e)}))}(l);const d=document.querySelector("#site-button-info"),u=document.querySelector("#site-button-next"),h=document.querySelector("#site-button-refresh"),g=document.createElement("div"),m=document.createElement("div"),p=document.createElement("div");g.classList.add("icon"),m.classList.add("icon"),p.classList.add("icon"),g.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="${"0.75em"}" viewBox="0 0 74 74"><rect width="74" height="74" fill="none"/><path d="M40.657,38.124h10.2L50.8,77.772H40.657ZM45.731,19a6.122,6.122,0,1,1-6.122,6.122A6.122,6.122,0,0,1,45.731,19Z" transform="translate(-8.786 -11.12)" fill="${"rgb(58, 58, 58)"}"/></svg>`,m.innerHTML=((e,t)=>`<svg xmlns="http://www.w3.org/2000/svg" width="${t}" viewBox="0 0 74 74"><rect width="74" height="74" fill="none"/><g transform="translate(-28.581 6.732)"><g transform="translate(48.224)"><g transform="translate(0)"><path d="M52.745,60.535l-4.521-4.57,26.546-25.7L48.224,4.568,52.745,0,82.939,30.269Z" transform="translate(-48.224)" fill="${e}"/></g></g></g></svg>`)("rgb(225, 225, 225)","0.75em"),p.innerHTML=((e,t)=>`<svg xmlns="http://www.w3.org/2000/svg" width="${t}" viewBox="0 0 74 74"><rect width="74" height="74" fill="none"/><path d="M55.148,13.867a29.123,29.123,0,0,0-7.136-7.619L54.23,0h-18.1V18.184l8.455-8.5a24.242,24.242,0,1,1-38.1,19.885A24.092,24.092,0,0,1,20.139,7.757L18.045,3.45a29.033,29.033,0,1,0,37.1,10.417Z" transform="translate(6.273 7.697)" fill="${e}"/></svg>`)("rgb(225, 225, 225)","0.75em"),d.appendChild(g),u.appendChild(m),h.appendChild(p)}window.addEventListener("load",(()=>{const e=document.querySelector("#site-prompt"),t=document.querySelector("#site-prompt .prompt"),n=["·","· ·","· · ·"];let s=0,o=setInterval((()=>{t.innerHTML="If you encounter lag or visual artifact<br>Please make sure your broswer is up-to-date<br>and has hardware acceleration enabled<br><br>如果遇到卡顿或渲染错误<br>请确保浏览器已经更新<br>并且支持硬件加速<br><br>"+n[s],s=(s+1)%n.length}),750);setTimeout((()=>{clearInterval(o),t.innerHTML="",e.style.visibility="hidden",c()}),5e3)}))})();