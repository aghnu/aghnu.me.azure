(()=>{"use strict";class t{constructor(t,e={}){this.type=t,this.parameters=e}}class e{#t;#e;#i={email:"assets/img/icon_mail.svg",link:"assets/img/icon_link.svg"};constructor(t){if(e._instance)throw"singleton is already initialized";e._instance=this,this.terminal_container=t,this.inputTextArea="",this.displayHist={},this.#r()}static getInstance(){if(ShowIDGenerator._instance)return ShowIDGenerator._instance;throw"singleton was not initialized"}#r(){const t="guest@aghnu.me:/$: ";let e=!0;this.#t=i("p",t,{id:"terminal-prompt"}),window.addEventListener("resize",(()=>{this.#t.scrollIntoView(!0)})),this.#e=setInterval((()=>{this.#t.innerHTML=e?t+this.inputTextArea+"_":t+this.inputTextArea,e=!e}),500),this.terminal_container.appendChild(this.#t)}printLink(t){const e=i("a","",{class:"terminal-link",href:t.link}),r=i("img","",{class:"icon",src:this.#i[t.type]}),n=i("p",t.text,{class:"text"});e.appendChild(r),e.appendChild(n),this.terminal_container.insertBefore(e,this.#t),this.#t.scrollIntoView(!0)}printText(t){const e=i("p",t.text);this.terminal_container.insertBefore(e,this.#t),this.#t.scrollIntoView(!0)}printLine(t){const e=i("p");if(t.height){let i="";for(let e=0;e<t.height;e++)i+="<br>";e.innerHTML=i}else e.innerHTML="<br>";this.terminal_container.insertBefore(e,this.#t),this.#t.scrollIntoView(!0)}print(t){switch(t.type){case"text":this.printText(t.parameters);break;case"line":this.printLine(t.parameters);break;case"link":this.printLink(t.parameters)}}printList(t,e=500,i=null){let r=0;null===i&&(i=e);const n=function(t,e,i){let r;const n=()=>{r=setTimeout((()=>{t(),n()}),Math.floor(Math.random()*(i-e+1))+e)};return n(),{clear:()=>{clearTimeout(r)}}}((()=>{r>=t.length?n.clear():this.print(t[r++])}),e,i)}clear(){this.terminal_container.innerHTML="",this.terminal_container.appendChild(this.#t),this.#t.scrollIntoView(!0)}}function i(t,e="",i={}){const r=document.createElement(t);r.innerHTML=e;for(let t in i)r.setAttribute(t,i[t]);return r}function r(e,i={}){return new t(e,i)}const n=[r("text",{text:"Hello stranger!<br>Welcome... Welcome..."}),r("text",{text:"Name is Gengyuan Huang<br>A programmer..."}),r("line",{height:2}),r("text",{text:"I have recently graduated from the University with a CS degree...<br>I have rent to pay, and a mouth to feed (my mouth)..."}),r("line",{height:2}),r("text",{text:"if you wish to know more about me, my life or my cat...<br>or my social insurance number<br>please type /help"}),r("line",{height:2}),r("text",{text:"To contact me:"}),r("link",{link:"mailto:gengyuan@ualberta.ca",text:"gengyuan@ualberta.ca",type:"email"}),r("line",{height:1})];window.addEventListener("load",(()=>{new e(document.querySelector("#terminal-container")).printList(n,600,1800)}))})();