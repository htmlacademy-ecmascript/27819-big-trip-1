(()=>{var e={10:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var s=n(537),i=n.n(s),r=n(645),a=n.n(r)()(i());a.push([e.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const o=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",s=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),s&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),s&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,s,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(s)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);s&&a[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),t.push(u))}},t}},537:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),r="/*# ".concat(i," */");return[t].concat([r]).join("\n")}return[t].join("\n")}},484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",s="second",i="minute",r="hour",a="day",o="week",l="month",c="quarter",u="year",d="date",p="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},m=function(e,t,n){var s=String(e);return!s||s.length>=t?e:""+Array(t+1-s.length).join(n)+e},_={s:m,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),s=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+m(s,2,"0")+":"+m(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var s=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(s,l),r=n-i<0,a=t.clone().add(s+(r?-1:1),l);return+(-(s+(n-i)/(r?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:u,w:o,d:a,D:d,h:r,m:i,s,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",g={};g[y]=h;var b=function(e){return e instanceof C},$=function e(t,n,s){var i;if(!t)return y;if("string"==typeof t){var r=t.toLowerCase();g[r]&&(i=r),n&&(g[r]=n,i=r);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var o=t.name;g[o]=t,i=o}return!s&&i&&(y=i),i||!s&&y},M=function(e,t){if(b(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new C(n)},w=_;w.l=$,w.i=b,w.w=function(e,t){return M(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var C=function(){function h(e){this.$L=$(e.locale,null,!0),this.parse(e)}var m=h.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(w.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var s=t.match(f);if(s){var i=s[2]-1||0,r=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)):new Date(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return w},m.isValid=function(){return!(this.$d.toString()===p)},m.isSame=function(e,t){var n=M(e);return this.startOf(t)<=n&&n<=this.endOf(t)},m.isAfter=function(e,t){return M(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<M(e)},m.$g=function(e,t,n){return w.u(e)?this[t]:this.set(n,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,t){var n=this,c=!!w.u(t)||t,p=w.p(e),f=function(e,t){var s=w.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return c?s:s.endOf(a)},v=function(e,t){return w.w(n.toDate()[e].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},h=this.$W,m=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(p){case u:return c?f(1,0):f(31,11);case l:return c?f(1,m):f(0,m+1);case o:var g=this.$locale().weekStart||0,b=(h<g?h+7:h)-g;return f(c?_-b:_+(6-b),m);case a:case d:return v(y+"Hours",0);case r:return v(y+"Minutes",1);case i:return v(y+"Seconds",2);case s:return v(y+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(e,t){var o,c=w.p(e),p="set"+(this.$u?"UTC":""),f=(o={},o[a]=p+"Date",o[d]=p+"Date",o[l]=p+"Month",o[u]=p+"FullYear",o[r]=p+"Hours",o[i]=p+"Minutes",o[s]=p+"Seconds",o[n]=p+"Milliseconds",o)[c],v=c===a?this.$D+(t-this.$W):t;if(c===l||c===u){var h=this.clone().set(d,1);h.$d[f](v),h.init(),this.$d=h.set(d,Math.min(this.$D,h.daysInMonth())).$d}else f&&this.$d[f](v);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[w.p(e)]()},m.add=function(n,c){var d,p=this;n=Number(n);var f=w.p(c),v=function(e){var t=M(p);return w.w(t.date(t.date()+Math.round(e*n)),p)};if(f===l)return this.set(l,this.$M+n);if(f===u)return this.set(u,this.$y+n);if(f===a)return v(1);if(f===o)return v(7);var h=(d={},d[i]=e,d[r]=t,d[s]=1e3,d)[f]||1,m=this.$d.getTime()+n*h;return w.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var s=e||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),r=this.$H,a=this.$m,o=this.$M,l=n.weekdays,c=n.months,u=function(e,n,i,r){return e&&(e[n]||e(t,s))||i[n].slice(0,r)},d=function(e){return w.s(r%12||12,e,"0")},f=n.meridiem||function(e,t,n){var s=e<12?"AM":"PM";return n?s.toLowerCase():s},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:w.s(o+1,2,"0"),MMM:u(n.monthsShort,o,c,3),MMMM:u(c,o),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:w.s(r,2,"0"),h:d(1),hh:d(2),a:f(r,a,!0),A:f(r,a,!1),m:String(a),mm:w.s(a,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:i};return s.replace(v,(function(e,t){return t||h[e]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,d,p){var f,v=w.p(d),h=M(n),m=(h.utcOffset()-this.utcOffset())*e,_=this-h,y=w.m(this,h);return y=(f={},f[u]=y/12,f[l]=y,f[c]=y/3,f[o]=(_-m)/6048e5,f[a]=(_-m)/864e5,f[r]=_/t,f[i]=_/e,f[s]=_/1e3,f)[v]||_,p?y:w.a(y)},m.daysInMonth=function(){return this.endOf(l).$D},m.$locale=function(){return g[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),s=$(e,t,!0);return s&&(n.$L=s),n},m.clone=function(){return w.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},h}(),S=C.prototype;return M.prototype=S,[["$ms",n],["$s",s],["$m",i],["$H",r],["$W",a],["$M",l],["$y",u],["$D",d]].forEach((function(e){S[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),M.extend=function(e,t){return e.$i||(e(t,C,M),e.$i=!0),M},M.locale=$,M.isDayjs=b,M.unix=function(e){return M(1e3*e)},M.en=g[y],M.Ls=g,M.p={},M}()},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,s=0;s<t.length;s++)if(t[s].identifier===e){n=s;break}return n}function s(e,s){for(var r={},a=[],o=0;o<e.length;o++){var l=e[o],c=s.base?l[0]+s.base:l[0],u=r[c]||0,d="".concat(c," ").concat(u);r[c]=u+1;var p=n(d),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var v=i(f,s);s.byIndex=o,t.splice(o,0,{identifier:d,updater:v,references:1})}a.push(d)}return a}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var r=s(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var o=n(r[a]);t[o].references--}for(var l=s(e,i),c=0;c<r.length;c++){var u=n(r[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}r=l}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var s=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var s="";n.supports&&(s+="@supports (".concat(n.supports,") {")),n.media&&(s+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(s+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),s+=n.css,i&&(s+="}"),n.media&&(s+="}"),n.supports&&(s+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(s,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var r=t[s]={id:s,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";function e(e,t,n="beforeend"){if(!(e instanceof y))throw new Error("Can render only components");if(null===t)throw new Error("Container element doesn't exist");t.insertAdjacentElement(n,e.element)}function t(e,t){if(!(e instanceof y&&t instanceof y))throw new Error("Can replace only components");const n=e.element,s=t.element,i=s.parentElement;if(null===i)throw new Error("Parent element doesn't exist");i.replaceChild(n,s)}var s=n(379),i=n.n(s),r=n(795),a=n.n(r),o=n(569),l=n.n(o),c=n(565),u=n.n(c),d=n(216),p=n.n(d),f=n(589),v=n.n(f),h=n(10),m={};m.styleTagTransform=v(),m.setAttributes=u(),m.insert=l().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=p(),i()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;const _="shake";class y{#e=null;constructor(){if(new.target===y)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#e||(this.#e=function(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}(this.template)),this.#e}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#e=null}shake(e){this.element.classList.add(_),setTimeout((()=>{this.element.classList.remove(_),e?.()}),600)}}const g=e=>`\n  <div class="trip-filters__filter">\n    <input id="filter-${e.type}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${e.type}"${e.hasEvents?"":" disabled"}>\n    <label class="trip-filters__filter-label" for="filter-${e.type}">${e.type}</label>\n  </div>\n`;class b extends y{#t=null;constructor(e){super(),this.#t=e}get template(){return`\n<form class="trip-filters" action="#" method="get">\n  ${this.#t.map(g).join("")}\n\n  <button class="visually-hidden" type="submit">Accept filter</button>\n</form>`}}var $=n(484),M=n.n($);const w={everything:e=>[...e],future:e=>e.filter((e=>(e=>M()().isBefore(e.dateFrom))(e))),present:e=>e.filter((e=>(e=>M()().isAfter(e.dateFrom)&&M()().isBefore(e.dateTo))(e))),past:e=>e.filter((e=>(e=>M()().isAfter(e.dateTo))(e)))};class C extends y{get template(){return'\n<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n  <div class="trip-sort__item  trip-sort__item--day">\n    <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>\n    <label class="trip-sort__btn" for="sort-day">Day</label>\n  </div>\n\n  <div class="trip-sort__item  trip-sort__item--event">\n    <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n    <label class="trip-sort__btn" for="sort-event">Event</label>\n  </div>\n\n  <div class="trip-sort__item  trip-sort__item--time">\n    <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n    <label class="trip-sort__btn" for="sort-time">Time</label>\n  </div>\n\n  <div class="trip-sort__item  trip-sort__item--price">\n    <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">\n    <label class="trip-sort__btn" for="sort-price">Price</label>\n  </div>\n\n  <div class="trip-sort__item  trip-sort__item--offer">\n    <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n    <label class="trip-sort__btn" for="sort-offer">Offers</label>\n  </div>\n</form>\n'}}class S extends y{get template(){return'\n<p class="trip-events__msg">Click New Event to create your first point</p>\n'}}class A extends y{get template(){return'\n<ul class="trip-events__list"></ul>\n'}}const D=e=>e[Math.floor(Math.random()*e.length)],E=(e=0,t=1)=>{const n=Math.ceil(Math.min(e,t)),s=Math.floor(Math.max(e,t));return Math.floor(n+Math.random()*(s-n+1))},x=(e,t)=>e&&t?M()(e).format(t):null,k=()=>M()(),O=()=>{const e=E(4,5760);return M()().add(e,"minutes").toDate()},T=()=>{const e=M()(),t=e.subtract(4,"day"),n=t.valueOf()+Math.random()*(e.valueOf()-t.valueOf());return M()(n)},H=()=>{let e=0;return()=>(e+=1,`${e}`)},L=(e,t,n)=>{const s=e.sort((()=>Math.random()-.5)),i=Math.floor(Math.random()*(n-t+1))+t;return s.slice(0,i)},F=e=>e.replace(/ /g,"_").toLowerCase();class Y extends y{#n=null;#s=null;constructor({event:e,onEditClick:t}){super(),this.#n=e,this.#s=t,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#i)}get template(){return(e=>{const{type:t,dateFrom:n,dateTo:s,basePrice:i,isFavorite:r,destination:a,offers:o}=e,l=r?" event__favorite-btn--active":"";return`<li class="trip-events__item">\n    <div class="event">\n    <time class="event__date" datetime="${x(n,"YYYY-MM-DD")}">${x(n,"MMM D")}</time>\n      <div class="event__type">\n        <img class="event__type-icon" width="42" height="42" src="img/icons/${t}.png" alt="Event type icon">\n      </div>\n      <h3 class="event__title">${t} ${a.name}</h3>\n      <div class="event__schedule">\n        <p class="event__time">\n          <time class="event__start-time" datetime="${x(n,"YYYY-MM-DDTHH:mm")}">${x(n,"HH:mm")}</time>\n          &mdash;\n          <time class="event__end-time" datetime="${x(s,"YYYY-MM-DDTHH:mm")}">${x(s,"HH:mm")}</time>\n        </p>\n        <p class="event__duration">${((e,t)=>{const n=t-e,s=(n/6e4).toFixed(0),i=(n/36e5).toFixed(0),r=(n/864e5).toFixed(0),a=s%60;return s<60?`${s}M`:i<24?`${i}H ${a}M`:`${r}D ${i%24}H ${a}M`})(n,s)}</p>\n      </div>\n      <p class="event__price">\n        &euro;&nbsp;<span class="event__price-value">${i}</span>\n      </p>\n      ${(e=>0===e.length?"":`\n    <h4 class="visually-hidden">Offers:</h4>\n    <ul class="event__selected-offers">\n    ${e.map((({title:e,price:t})=>`\n      <li class="event__offer">\n        <span class="event__offer-title">${e}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${t}</span>\n      </li>\n    `)).join("")}\n    </ul>\n  `)(o)}\n      <button class="event__favorite-btn${l}" type="button">\n        <span class="visually-hidden">Add to favorite</span>\n        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n        </svg>\n      </button>\n      <button class="event__rollup-btn" type="button">\n        <span class="visually-hidden">Open event</span>\n      </button>\n    </div>\n  </li>`})(this.#n)}#i=e=>{e.preventDefault(),this.#s()}}const B={basePrice:"",dateFrom:k(),dateTo:k(),destination:null,type:"taxi",offers:[]};class j extends y{#n=null;#r=null;#a=null;#o=null;#l=null;constructor({event:e=B,generateOffers:t,generateDestinations:n,onFormSubmit:s,onResetClick:i}){super(),this.#n=e,this.#r=t,this.#a=n,this.#o=s,this.#l=i,this.element.querySelector("form").addEventListener("submit",this.#c),this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#u)}get template(){return((e={},t,n)=>{const{type:s,dateFrom:i,dateTo:r,basePrice:a,destination:o,offers:l}=e;return`\n  <li class="trip-events__item">\n    <form class="event event--edit" action="#" method="post">\n      <header class="event__header">\n        <div class="event__type-wrapper">\n          <label class="event__type  event__type-btn" for="event-type-toggle-1">\n            <span class="visually-hidden">Choose event type</span>\n            <img class="event__type-icon" width="17" height="17" src="img/icons/${s}.png" alt="Event type icon">\n          </label>\n          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n  \n          <div class="event__type-list">\n            <fieldset class="event__type-group">\n              <legend class="visually-hidden">Event type</legend>\n  \n              ${((e,t)=>t.map((t=>{return`\n    <div class="event__type-item">\n      <input id="event-type-${t.type.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${t.type.toLowerCase()}"${e===t.type?" checked":""}>\n      <label class="event__type-label  event__type-label--${t.type.toLowerCase()}" for="event-type-${t.type.toLowerCase()}-1">${n=t.type,n.charAt(0).toUpperCase()+n.slice(1)}</label>\n    </div>\n  `;var n})).join(""))(s,t)}\n            </fieldset>\n          </div>\n        </div>\n  \n        <div class="event__field-group  event__field-group--destination">\n          <label class="event__label  event__type-output" for="event-destination-1">\n            ${s}\n          </label>\n          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${o?o.name:""}" list="destination-list-1">\n          <datalist id="destination-list-1">\n            ${(e=>e.map((e=>`<option value="${e.name}"></option>`)).join(""))(n)}\n          </datalist>\n        </div>\n  \n        <div class="event__field-group  event__field-group--time">\n          <label class="visually-hidden" for="event-start-time-1">From</label>\n          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${x(i,"DD/MM/YY HH:mm")}">\n          &mdash;\n          <label class="visually-hidden" for="event-end-time-1">To</label>\n          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${x(r,"DD/MM/YY HH:mm")}">\n        </div>\n  \n        <div class="event__field-group  event__field-group--price">\n          <label class="event__label" for="event-price-1">\n            <span class="visually-hidden">Price</span>\n            &euro;\n          </label>\n          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${a}">\n        </div>\n  \n        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n        <button class="event__reset-btn" type="reset">Delete</button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </header>\n      <section class="event__details">\n        <section class="event__section  event__section--offers">\n          <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n  \n          <div class="event__available-offers">\n          ${((e,t,n)=>t.find((t=>t.type===e)).offers.map(((e,t)=>{return`\n    <div class="event__offer-selector">\n      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${F(e.title)}-${t}" type="checkbox" name="event-offer-${F(e.title)}" ${s=e.id,n.find((e=>e.id===s))?"checked":""}>\n      <label class="event__offer-label" for="event-offer-${F(e.title)}-${t}">\n        <span class="event__offer-title">Add ${e.title}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${e.price}</span>\n      </label>\n    </div>\n  `;var s})).join(""))(s,t,l)}\n          </div>\n        </section>\n  \n        <section class="event__section  event__section--destination">\n          <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n          ${((e,t)=>{const n=t.find((t=>t===e)),s=n.pictures.map((e=>`<img class="event__photo" src="${e.src}" alt="${e.alt}">`)).join("");return`\n  <p class="event__destination-description">${n.description}</p>\n  ${s.length>0?`\n      <div class="event__photos-container">\n        <div class="event__photos-tape">\n          ${s}\n        </div>\n      </div>\n  `:""}\n  `})(o,n)}\n        </section>\n      </section>\n    </form>\n  </li>\n  `})(this.#n,this.#r,this.#a)}#c=e=>{e.preventDefault(),this.#o()};#u=e=>{e.preventDefault(),this.#l()}}const I=["Fish in the Ocean","Sea Water","Coral Reef","Swift Shark","Colorful Fish","Dolphins Jumping","Moving Jellyfish","Crabs Hiding","Sea Horse","Sea Breeze","Turtles Moving","Sea Sand","Crabs Grabbing","Mollusks Creating","Fisherman Fishing","Sea Star"],R=()=>{const e=H();return Array.from({length:E(3,6)},(()=>({id:e(),title:D(I),price:E(10,120)})))},W=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"].map((e=>({type:e,offers:R()}))),P=["Nestled along shimmering water canals, this city amazes with its architectural elegance and rich cultural scene, where every corner is infused with grand historical influences.","Surrounded by majestic mountains and emerald meadows, this small town captivates with its pastoral charm and friendly atmosphere, as if crafted for a tranquil life amidst nature.","Bustling streets filled with a variety of vibrant signs and aromas of diverse cuisine characterize this metropolis as a global hub of entertainment and culinary discoveries.","Weathered stone walls and narrow alleys of this ancient city are filled with historical mysteries, and the atmosphere of old-world romance attracts travelers from various corners of the globe.","Amidst towering skyscrapers and modern architecture, this city embodies the spirit of innovation and technological progress, offering a breathtaking glimpse into the future."],q=["The sun is shining brightly.","She loves reading books.","The cat sits on the mat.","We are going on a trip.","I enjoy listening to music.","Fresh coffee smells amazing.","He runs faster than her.","They celebrated their victory."],N=H(),z=["Amsterdam","Chamonix","Geneva","Paris","Tallinn"].map((e=>({id:N(),description:D(P),name:e,pictures:Array.from({length:E(0,5)},(()=>({src:`https://loremflickr.com/248/152?random=${E(8,160)}`,alt:D(q)})))}))),U=()=>{const e=D(W);return{type:e.type,basePrice:E(80,160),dateFrom:T(),dateTo:O(),destination:D(z),offers:L(e.offers,1,2),isFavorite:Boolean(E(0,1))}},Z=document.querySelector(".trip-main"),J=Z.querySelector(".trip-controls__filters");e(new class extends y{get template(){return'\n<section class="trip-main__trip-info  trip-info"></section>\n'}},Z,"afterbegin");const X=Z.querySelector(".trip-info");e(new class extends y{get template(){return'\n<div class="trip-info__main">\n  <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n  <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>\n</div>\n'}},X),e(new class extends y{get template(){return'\n<p class="trip-info__cost">\n  Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n</p>\n'}},X);const V=document.querySelector(".trip-events"),G=new class{#d=Array.from({length:4},U);get events(){return this.#d}},K=new class{#p=null;#f=null;#d=[];#t=[];constructor({container:e,eventsModel:t}){this.#p=e,this.#f=t}init(){this.#d=[...this.#f.events],this.#t=this.#v(this.#d),e(new b(this.#t),this.#p)}#v(e){return Object.entries(w).map((([t,n])=>({type:t,hasEvents:n(e).length>0})))}}({container:J,eventsModel:G}),Q=new class{#p=null;#f=null;#d=[];constructor({container:e,eventsModel:t}){this.#p=e,this.#f=t}init(){this.#d=[...this.#f.events],0!==this.#d.length&&e(new C,this.#p)}}({container:V,eventsModel:G}),ee=new class{#h=new A;#m=new S;#_=null;#f=null;#d=[];constructor({container:e,eventsModel:t}){this.#_=e,this.#f=t}init(){this.#d=[...this.#f.events],this.#y();for(let e=0;e<this.#d.length;e++)this.#g(this.#d[e])}#y(){0!==this.#d.length?e(this.#h,this.#_):e(this.#m,this.#_)}#g(n){const s=new Y({event:n,onEditClick:function(){t(i,s),document.addEventListener("keydown",r)}}),i=new j({event:n,generateOffers:W,generateDestinations:z,onFormSubmit:function(){a(),document.removeEventListener("keydown",r)},onResetClick:function(){a(),document.removeEventListener("keydown",r)}}),r=e=>{"Escape"===e.key&&(e.preventDefault(),a(),document.removeEventListener("keydown",r))};function a(){t(s,i)}e(s,this.#h.element)}}({container:V,eventsModel:G});K.init(),Q.init(),ee.init()})()})();
//# sourceMappingURL=bundle.069093b08152de36591e.js.map