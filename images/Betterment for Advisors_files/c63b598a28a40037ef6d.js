(()=>{"use strict";var e,t,r={},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var i=n[e]={exports:{}};return r[e](i,i.exports,o),i.exports}o.m=r,o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[])),o.u=e=>e+"/b0eab045596385f932c0.js",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="Destination:",o.l=(r,n,i,a)=>{if(e[r])e[r].push(n);else{var s,u;if(void 0!==i)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var c=d[l];if(c.getAttribute("src")==r||c.getAttribute("data-webpack")==t+i){s=c;break}}s||(u=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+i),s.src=r),e[r]=[n];var p=(t,n)=>{s.onerror=s.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(n))),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),u&&document.head.appendChild(s)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&!e;)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../"})(),(()=>{var e={935:0};o.f.j=(t,r)=>{var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var i=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=i);var a=o.p+o.u(t),s=new Error;o.l(a,(r=>{if(o.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,n[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,i,[a,s,u]=r,d=0;if(a.some((t=>0!==e[t]))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(u)u(o)}for(t&&t(r);d<a.length;d++)i=a[d],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0},r=self.webpackChunkDestination=self.webpackChunkDestination||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var i={};o.d(i,{default:()=>s});let a={id:void 0,anonymousId:void 0,traits:null};const s=function(e){const t=async t=>(await o.e(962).then(o.bind(o,3962))).generatePlugins(e,t,t.subscriptions||[]);return t.pluginName=e.name,t}({name:"Braze Cloud Mode (Actions)",mode:"device",settings:{},initialize:async()=>({}),actions:{debouncePlugin:{title:"Debounce Middleware",description:"When enabled, it ensures that only events where at least one changed trait value are sent to Braze, and events with duplicate traits are not sent. Debounce functionality requires a frontend client to work. Therefore, it cannot be used with server-side libraries or with Engage.",platform:"web",defaultSubscription:'type = "identify" or type = "group"',fields:{},lifecycleHook:"before",perform:(e,t)=>{const r=t.context.event,n=t.analytics.user(),o=t.context,i=function(e){if(e.userId&&e.userId!==a.id)return!0;if(e.anonymousId&&e.anonymousId!==a.anonymousId)return!0;const t=e.traits??{};return JSON.stringify(a.traits)!==JSON.stringify(t)}(r);o.updateEvent("integrations.Braze Web Mode (Actions)",i),o.updateEvent("integrations.Braze Cloud Mode (Actions)",i),o.updateEvent("integrations.Appboy",i),a.id=n.id(),a.anonymousId=n.anonymousId(),a.traits=n.traits()}}}});window["braze-cloud-pluginsDestination"]=i.default})();
//# sourceMappingURL=c63b598a28a40037ef6d.js.map