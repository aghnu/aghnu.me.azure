(()=>{"use strict";var e={};function t(e,t){e.innerHTML="";let o=!0;for(let r=0;r<t.length;r++){const n=document.createElement("span"),s=1.5*Math.random()+1,a=1,c=.25*Math.random()+.1;let i;n.style.transition=`opacity ${s}s`,n.innerHTML=t[r],n.style.opacity=[a,c][Math.floor(2*Math.random())];const l=()=>{n.style.opacity===String(a)?n.style.opacity=String(c):n.style.opacity=String(a),i=setTimeout((()=>{o&&l()}),1e3*Math.random()+1e3*s)};i=setTimeout((()=>{l()}),100),e.appendChild(n)}return()=>{o=!1}}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var o=e.g.document;if(!t&&o&&(o.currentScript&&(t=o.currentScript.src),!t)){var r=o.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const o=e.p+"1a83ba729d21aacde07e5a9b42851b49.webp",r=[{class:"monitor-0",url:e.p+"29a6d5b43479e7d1a4cd3193be23b3c0.webp"},{class:"monitor-1",url:e.p+"2603184f8e48829b2f0319d11ebe12a3.webp"},{class:"monitor-2",url:e.p+"4a32a38a0b28065916c3de8f387dfdce.webp"},{class:"monitor-3",url:e.p+"d5c110bd156802ccf519b3c499d8dd9d.webp"}],n={frameInit_0:!1,frameInit_1:!1,frameInit_2:!1,frameInit_3:!1,posterInit:!1,fontsLoaded:!1};let s=!1,a=!1;function c(){const e=document.querySelector("#site-structure .floor .monitor .poster");e.addEventListener("load",(()=>{n.posterInit=!0}),{once:!0}),e.src=o;const t=document.querySelector("#site-structure .floor .monitor .monitor-frame.monitor-0"),c=document.querySelector("#site-structure .floor .monitor .monitor-frame.monitor-1"),i=document.querySelector("#site-structure .floor .monitor .monitor-frame.monitor-2"),l=document.querySelector("#site-structure .floor .monitor .monitor-frame.monitor-3");t.addEventListener("load",(()=>{n.frameInit_0=!0}),{once:!0}),c.addEventListener("load",(()=>{n.frameInit_1=!0}),{once:!0}),i.addEventListener("load",(()=>{n.frameInit_2=!0}),{once:!0}),l.addEventListener("load",(()=>{n.frameInit_3=!0}),{once:!0}),t.src=r[0].url,c.src=r[1].url,i.src=r[2].url,l.src=r[3].url;const d=document.querySelector("#site-structure .floor .monitor");let u=Math.floor(Math.random()*r.length);d.classList.add(r[u].class),function(e,t,o){let n;const c=()=>{n=setTimeout((()=>{s||a||function(e,t){const o=e.style.display;e.style.display="none",setTimeout((()=>{e.style.display=o,setTimeout((()=>{e.style.display="none",setTimeout((()=>{t(),e.style.display=o}),50)}),80)}),50)}(d,(()=>{d.classList.remove(r[u].class),u=(u+1)%r.length,d.classList.add(r[u].class)})),c()}),Math.floor(5001*Math.random())+1e4)};c()}(),document.fonts.ready.then((()=>{n.fontsLoaded=!0}))}function i(){const e=document.querySelector("#site-structure"),r=document.querySelector("#site-structure .footer .first"),n=document.querySelector("#site-structure .footer .second");t(r,"GENGYUAN HUANG & YUAN FANG"),t(n,"© 2022 WNFA Posters Generator");const i=document.querySelector("#site-console .input"),l=[["Type into this area to write a poem, then, click the display device to generate the poster.",.075],["点击这里写一首诗，然后单击显示装置生成海报。",.2],["荷叶滴落泪水\n来不及 浸透书页\n一百年 一千年\n点燃一片通电的网\n\n回想 回想\n那心的铁片\n也要发出轰响",.2]],d=()=>{const e=l.shift();var t,o,r,n,s;l.push(e),t=e[0],o=e[1],r=()=>i.placeholder,n=e=>i.placeholder=e,s=()=>{setTimeout((()=>{!function(e,t,o,r){const n=()=>{setTimeout((()=>{var e;""!==t()?(e=t().slice(0,-1),i.placeholder=e,n()):setTimeout((()=>{d()}),2e3)}),.05*Math.random()*1e3)};n()}(0,(()=>i.placeholder))}),2e3)},(e=>{let t=0;const a=()=>{setTimeout((()=>{if(t<e.length){const o=e[t++];n(r()+o),a()}else s()}),Math.random()*o*1e3+25)};a()})(t)};d();const u=document.querySelector("#site-structure .prompt");t(u,"System Ready / 系统就绪");const m=document.querySelector("#site-structure .floor .monitor"),p=document.querySelector("#site-structure .floor .monitor .poster");let f,h,y="";const v=()=>{var r,n,a;""!==i.value&&i.value!==y&&(s=!0,t(u,"Generating / 生成中"),e.classList.add("processing"),i.blur(),r=i.value,n=r=>{s=!1,h=L,e.classList.remove("processing"),t(u,"Poster Ready / 海报就绪"),p.src="data:image/jpeg; base64, "+r.image_data,y=i.value,i.addEventListener("input",(()=>{h=v,y="",p.src=o,t(u,"System Ready / 系统就绪")}),{once:!0})},a=o=>{switch(s=!1,e.classList.remove("processing"),console.error("ERROR: "+o),o){case 1003:t(u,"Network Error / 网络错误");break;case 1002:t(u,"Sever Error / 服务器错误");break;case 1001:y=i.value,t(u,"Invalid input / 文本不规范")}},fetch("https://wnfafunctions.azurewebsites.net/api/wnfapostersgen",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:r})}).then((e=>{200===e.status?e.json().then((e=>{n(e)})):400===e.status?a(1001):a(1002)})).catch((()=>{a(1003)})))},L=()=>{const e=document.querySelector("#site-posterview");e.innerHTML="";const t=document.createElement("img");t.classList.add("poster"),t.src=p.src,e.appendChild(t),e.addEventListener("click",(()=>{e.classList.remove("show")}),{once:!0}),e.classList.add("show")};var g,b,S;f=()=>{},h=v,b=()=>{m.classList.add("pressed")},S=()=>{m.classList.remove("pressed"),h()},(g=m).addEventListener("touchstart",(e=>{e.preventDefault(),a=!0,b()})),g.addEventListener("touchend",(e=>{e.preventDefault(),a=!1,S()})),g.addEventListener("touchcancel",(e=>{e.preventDefault(),a=!1,S()})),g.addEventListener("mousedown",(e=>{e.preventDefault(),a=!0,b()})),g.addEventListener("mouseup",(e=>{e.preventDefault(),a=!1,S()})),document.addEventListener("mouseup",(e=>{a&&(a=!1,S())})),c()}window.addEventListener("load",(function(){i();const e=document.querySelector("#site-informative .loading .prompt"),t=["·","· ·","· · ·"];let o=0,r=()=>{};setInterval((()=>{e.innerHTML="Loading / 载入中<br>"+t[o],o=(o+1)%t.length,r()}),750),setTimeout((()=>{r=()=>{(function(){for(const e in n)if(!n[e])return!1;return!0})()&&document.querySelector("#site-informative .loading").classList.add("hide")}}),2250)}))})();