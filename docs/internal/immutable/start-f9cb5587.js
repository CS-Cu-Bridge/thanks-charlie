var Ke=Object.defineProperty;var Je=(r,e,n)=>e in r?Ke(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n;var le=(r,e,n)=>(Je(r,typeof e!="symbol"?e+"":e,n),n);import{n as fe,s as Ve,S as We,i as He,a as Fe,e as j,c as Ge,b as q,g as H,t as N,d as F,f as C,h as D,j as Ye,k as Me,o as _e,l as Xe,m as Ze,p as Qe,q as ue,r as K,u as xe,v as et,w as tt,x as V,y as Q,z,A as B,B as Ae}from"./chunks/index-4b9d7a72.js";const Y=[];function we(r,e=fe){let n;const s=new Set;function a(i){if(Ve(r,i)&&(r=i,n)){const c=!Y.length;for(const l of s)l[1](),Y.push(l,r);if(c){for(let l=0;l<Y.length;l+=2)Y[l][0](Y[l+1]);Y.length=0}}}function u(i){a(i(r))}function t(i,c=fe){const l=[i,c];return s.add(l),s.size===1&&(n=e(a)||fe),i(r),()=>{s.delete(l),s.size===0&&(n(),n=null)}}return{set:a,update:u,subscribe:t}}class te{constructor(e,n){le(this,"name","HttpError");le(this,"stack");this.status=e,this.message=n!=null?n:`Error: ${e}`}toString(){return this.message}}class Oe{constructor(e,n){this.status=e,this.location=n}}function nt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function rt(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}class at extends URL{get hash(){throw new Error("url.hash is inaccessible from load. Consider accessing hash from the page store within the script tag of your component.")}}let Pe="",ze="";function st(r){Pe=r.base,ze=r.assets||Pe}function je(r){let e=r.baseURI;if(!e){const n=r.getElementsByTagName("base");e=n.length?n[0].href:r.URL}return e}function me(){return{x:pageXOffset,y:pageYOffset}}function Ne(r){return r.composedPath().find(n=>n instanceof Node&&n.nodeName.toUpperCase()==="A")}function Ce(r){return r instanceof SVGAElement?new URL(r.href.baseVal,document.baseURI):new URL(r.href)}function Ie(r){const e=we(r);let n=!0;function s(){n=!0,e.update(t=>t)}function a(t){n=!1,e.set(t)}function u(t){let i;return e.subscribe(c=>{(i===void 0||n&&c!==i)&&t(i=c)})}return{notify:s,set:a,subscribe:u}}function it(){const{set:r,subscribe:e}=we(!1);let n;async function s(){clearTimeout(n);const a=await fetch(`${ze}/internal/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(a.ok){const{version:u}=await a.json(),t=u!=="1660877467347";return t&&(r(!0),clearTimeout(n)),t}else throw new Error(`Version check failed: ${a.status}`)}return{subscribe:e,check:s}}function ot(r){let e=5381,n=r.length;if(typeof r=="string")for(;n;)e=e*33^r.charCodeAt(--n);else for(;n;)e=e*33^r[--n];return(e>>>0).toString(36)}const ge=window.fetch;function ct(r,e){let s=`script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(typeof r=="string"?r:r.url)}]`;e&&typeof e.body=="string"&&(s+=`[sveltekit\\:data-body="${ot(e.body)}"]`);const a=document.querySelector(s);if(a&&a.textContent){const{body:u,...t}=JSON.parse(a.textContent);return Promise.resolve(new Response(u,t))}return ge(r,e)}const lt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function ft(r){const e=[],n=[];let s=!0;return{pattern:r===""?/^\/$/:new RegExp(`^${decodeURIComponent(r).split(/(?:@[a-zA-Z0-9_-]+)?(?:\/|$)/).map((u,t,i)=>{const c=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(u);if(c)return e.push(c[1]),n.push(c[2]),"(?:/(.*))?";const l=t===i.length-1;return u&&"/"+u.split(/\[(.+?)\]/).map((m,L)=>{if(L%2){const A=lt.exec(m);if(!A)throw new Error(`Invalid param: ${m}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,E,J,O]=A;return e.push(J),n.push(O),E?"(.*?)":"([^/]+?)"}return l&&m.includes(".")&&(s=!1),m.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${s?"/?":""}$`),names:e,types:n}}function ut(r,e,n,s){const a={};for(let u=0;u<e.length;u+=1){const t=e[u],i=n[u],c=r[u+1]||"";if(i){const l=s[i];if(!l)throw new Error(`Missing "${i}" param matcher`);if(!l(c))return}a[t]=c}return a}function dt(r,e,n){return Object.entries(e).map(([s,[a,u,t,i]])=>{const{pattern:c,names:l,types:m}=ft(s),L={id:s,exec:A=>{const E=c.exec(A);if(E)return ut(E,l,m,n)},errors:a.map(A=>r[A]),layouts:u.map(A=>r[A]),leaf:r[t],uses_server_data:!!i};return L.errors.length=L.layouts.length=Math.max(L.errors.length,L.layouts.length),L})}function pt(r,e){return new te(r,e)}function ht(r){let e,n,s;var a=r[0][0];function u(t){return{props:{data:t[1],errors:t[4]}}}return a&&(e=new a(u(r))),{c(){e&&V(e.$$.fragment),n=j()},l(t){e&&Q(e.$$.fragment,t),n=j()},m(t,i){e&&z(e,t,i),q(t,n,i),s=!0},p(t,i){const c={};if(i&2&&(c.data=t[1]),i&16&&(c.errors=t[4]),a!==(a=t[0][0])){if(e){H();const l=e;N(l.$$.fragment,1,0,()=>{B(l,1)}),F()}a?(e=new a(u(t)),V(e.$$.fragment),C(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else a&&e.$set(c)},i(t){s||(e&&C(e.$$.fragment,t),s=!0)},o(t){e&&N(e.$$.fragment,t),s=!1},d(t){t&&D(n),e&&B(e,t)}}}function _t(r){let e,n,s;var a=r[0][0];function u(t){return{props:{data:t[1],$$slots:{default:[bt]},$$scope:{ctx:t}}}}return a&&(e=new a(u(r))),{c(){e&&V(e.$$.fragment),n=j()},l(t){e&&Q(e.$$.fragment,t),n=j()},m(t,i){e&&z(e,t,i),q(t,n,i),s=!0},p(t,i){const c={};if(i&2&&(c.data=t[1]),i&1053&&(c.$$scope={dirty:i,ctx:t}),a!==(a=t[0][0])){if(e){H();const l=e;N(l.$$.fragment,1,0,()=>{B(l,1)}),F()}a?(e=new a(u(t)),V(e.$$.fragment),C(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else a&&e.$set(c)},i(t){s||(e&&C(e.$$.fragment,t),s=!0)},o(t){e&&N(e.$$.fragment,t),s=!1},d(t){t&&D(n),e&&B(e,t)}}}function mt(r){let e,n,s;var a=r[0][1];function u(t){return{props:{data:t[2],errors:t[4]}}}return a&&(e=new a(u(r))),{c(){e&&V(e.$$.fragment),n=j()},l(t){e&&Q(e.$$.fragment,t),n=j()},m(t,i){e&&z(e,t,i),q(t,n,i),s=!0},p(t,i){const c={};if(i&4&&(c.data=t[2]),i&16&&(c.errors=t[4]),a!==(a=t[0][1])){if(e){H();const l=e;N(l.$$.fragment,1,0,()=>{B(l,1)}),F()}a?(e=new a(u(t)),V(e.$$.fragment),C(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else a&&e.$set(c)},i(t){s||(e&&C(e.$$.fragment,t),s=!0)},o(t){e&&N(e.$$.fragment,t),s=!1},d(t){t&&D(n),e&&B(e,t)}}}function gt(r){let e,n,s;var a=r[0][1];function u(t){return{props:{data:t[2],$$slots:{default:[wt]},$$scope:{ctx:t}}}}return a&&(e=new a(u(r))),{c(){e&&V(e.$$.fragment),n=j()},l(t){e&&Q(e.$$.fragment,t),n=j()},m(t,i){e&&z(e,t,i),q(t,n,i),s=!0},p(t,i){const c={};if(i&4&&(c.data=t[2]),i&1033&&(c.$$scope={dirty:i,ctx:t}),a!==(a=t[0][1])){if(e){H();const l=e;N(l.$$.fragment,1,0,()=>{B(l,1)}),F()}a?(e=new a(u(t)),V(e.$$.fragment),C(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else a&&e.$set(c)},i(t){s||(e&&C(e.$$.fragment,t),s=!0)},o(t){e&&N(e.$$.fragment,t),s=!1},d(t){t&&D(n),e&&B(e,t)}}}function wt(r){let e,n,s;var a=r[0][2];function u(t){return{props:{data:t[3]}}}return a&&(e=new a(u(r))),{c(){e&&V(e.$$.fragment),n=j()},l(t){e&&Q(e.$$.fragment,t),n=j()},m(t,i){e&&z(e,t,i),q(t,n,i),s=!0},p(t,i){const c={};if(i&8&&(c.data=t[3]),a!==(a=t[0][2])){if(e){H();const l=e;N(l.$$.fragment,1,0,()=>{B(l,1)}),F()}a?(e=new a(u(t)),V(e.$$.fragment),C(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else a&&e.$set(c)},i(t){s||(e&&C(e.$$.fragment,t),s=!0)},o(t){e&&N(e.$$.fragment,t),s=!1},d(t){t&&D(n),e&&B(e,t)}}}function bt(r){let e,n,s,a;const u=[gt,mt],t=[];function i(c,l){return c[0][2]?0:1}return e=i(r),n=t[e]=u[e](r),{c(){n.c(),s=j()},l(c){n.l(c),s=j()},m(c,l){t[e].m(c,l),q(c,s,l),a=!0},p(c,l){let m=e;e=i(c),e===m?t[e].p(c,l):(H(),N(t[m],1,1,()=>{t[m]=null}),F(),n=t[e],n?n.p(c,l):(n=t[e]=u[e](c),n.c()),C(n,1),n.m(s.parentNode,s))},i(c){a||(C(n),a=!0)},o(c){N(n),a=!1},d(c){t[e].d(c),c&&D(s)}}}function Te(r){let e,n=r[6]&&De(r);return{c(){e=Xe("div"),n&&n.c(),this.h()},l(s){e=Ze(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var a=Qe(e);n&&n.l(a),a.forEach(D),this.h()},h(){ue(e,"id","svelte-announcer"),ue(e,"aria-live","assertive"),ue(e,"aria-atomic","true"),K(e,"position","absolute"),K(e,"left","0"),K(e,"top","0"),K(e,"clip","rect(0 0 0 0)"),K(e,"clip-path","inset(50%)"),K(e,"overflow","hidden"),K(e,"white-space","nowrap"),K(e,"width","1px"),K(e,"height","1px")},m(s,a){q(s,e,a),n&&n.m(e,null)},p(s,a){s[6]?n?n.p(s,a):(n=De(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&D(e),n&&n.d()}}}function De(r){let e;return{c(){e=xe(r[7])},l(n){e=et(n,r[7])},m(n,s){q(n,e,s)},p(n,s){s&128&&tt(e,n[7])},d(n){n&&D(e)}}}function yt(r){let e,n,s,a,u;const t=[_t,ht],i=[];function c(m,L){return m[0][1]?0:1}e=c(r),n=i[e]=t[e](r);let l=r[5]&&Te(r);return{c(){n.c(),s=Fe(),l&&l.c(),a=j()},l(m){n.l(m),s=Ge(m),l&&l.l(m),a=j()},m(m,L){i[e].m(m,L),q(m,s,L),l&&l.m(m,L),q(m,a,L),u=!0},p(m,[L]){let A=e;e=c(m),e===A?i[e].p(m,L):(H(),N(i[A],1,1,()=>{i[A]=null}),F(),n=i[e],n?n.p(m,L):(n=i[e]=t[e](m),n.c()),C(n,1),n.m(s.parentNode,s)),m[5]?l?l.p(m,L):(l=Te(m),l.c(),l.m(a.parentNode,a)):l&&(l.d(1),l=null)},i(m){u||(C(n),u=!0)},o(m){N(n),u=!1},d(m){i[e].d(m),m&&D(s),l&&l.d(m),m&&D(a)}}}function vt(r,e,n){let{stores:s}=e,{page:a}=e,{components:u}=e,{data_0:t=null}=e,{data_1:i=null}=e,{data_2:c=null}=e,{errors:l}=e;Ye("__svelte__",s),Me(s.page.notify);let m=!1,L=!1,A=null;return _e(()=>{const E=s.page.subscribe(()=>{m&&(n(6,L=!0),n(7,A=document.title||"untitled page"))});return n(5,m=!0),E}),r.$$set=E=>{"stores"in E&&n(8,s=E.stores),"page"in E&&n(9,a=E.page),"components"in E&&n(0,u=E.components),"data_0"in E&&n(1,t=E.data_0),"data_1"in E&&n(2,i=E.data_1),"data_2"in E&&n(3,c=E.data_2),"errors"in E&&n(4,l=E.errors)},r.$$.update=()=>{r.$$.dirty&768&&s.page.set(a)},[u,t,i,c,l,m,L,A,s,a]}class kt extends We{constructor(e){super(),He(this,e,vt,yt,Ve,{stores:8,page:9,components:0,data_0:1,data_1:2,data_2:3,errors:4})}}const $t=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),Et=function(r,e){return new URL(r,e).href},qe={},de=function(e,n,s){return!n||n.length===0?e():Promise.all(n.map(a=>{if(a=Et(a,s),a in qe)return;qe[a]=!0;const u=a.endsWith(".css"),t=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${t}`))return;const i=document.createElement("link");if(i.rel=u?"stylesheet":$t,u||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),u)return new Promise((c,l)=>{i.addEventListener("load",c),i.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>e())},Rt={},ne=[()=>de(()=>import("./chunks/0-a4d52e45.js"),["chunks\\0-a4d52e45.js","components\\layout.svelte-df6a9fe8.js","chunks\\index-4b9d7a72.js"],import.meta.url),()=>de(()=>import("./chunks/1-494b8509.js"),["chunks\\1-494b8509.js","components\\error.svelte-497b117d.js","chunks\\index-4b9d7a72.js"],import.meta.url),()=>de(()=>import("./chunks/2-4ecdf22f.js"),["chunks\\2-4ecdf22f.js","components\\pages\\_page.svelte-a415a122.js","chunks\\index-4b9d7a72.js"],import.meta.url)],St={"":[[1],[0],2]},Be="sveltekit:scroll",W="sveltekit:index",pe=dt(ne,St,Rt),Lt=ne[0](),Ut=ne[1]();let Z={};try{Z=JSON.parse(sessionStorage[Be])}catch{}function he(r){Z[r]=me()}function At({target:r,base:e,trailing_slash:n}){var Se;const s=[],a={url:Ie({}),page:Ie({}),navigating:we(null),updated:it()},u={id:null,promise:null},t={before_navigate:[],after_navigate:[]};let i={branch:[],error:null,session_id:0,url:null},c=!1,l=!0,m=!1,L=1,A=null,E,J=!0,O=(Se=history.state)==null?void 0:Se[W];O||(O=Date.now(),history.replaceState({...history.state,[W]:O},"",location.href));const re=Z[O];re&&(history.scrollRestoration="manual",scrollTo(re.x,re.y));let ae=!1,se,be;async function ye(o,{noscroll:h=!1,replaceState:g=!1,keepfocus:f=!1,state:d={}},k){if(typeof o=="string"&&(o=new URL(o,je(document))),J)return oe({url:o,scroll:h?me():null,keepfocus:f,redirect_chain:k,details:{state:d,replaceState:g},accepted:()=>{},blocked:()=>{}});await M(o)}async function ve(o){const h=Re(o);if(!h)throw new Error("Attempted to prefetch a URL that does not belong to this app");return u.promise=Ee(h),u.id=h.id,u.promise}async function ke(o,h,g,f){var b,U,R;const d=Re(o),k=be={};let _=d&&await Ee(d);if(!_&&o.origin===location.origin&&o.pathname===location.pathname&&(_=await ee({status:404,error:new Error(`Not found: ${o.pathname}`),url:o,routeId:null})),!_)return await M(o),!1;if(o=(d==null?void 0:d.url)||o,be!==k)return!1;if(s.length=0,_.type==="redirect")if(h.length>10||h.includes(o.pathname))_=await ee({status:500,error:new Error("Redirect loop"),url:o,routeId:null});else return J?ye(new URL(_.location,o).href,{},[...h,o.pathname]):await M(new URL(_.location,location.href)),!1;else((U=(b=_.props)==null?void 0:b.page)==null?void 0:U.status)>=400&&await a.updated.check()&&await M(o);if(m=!0,g&&g.details){const{details:S}=g,v=S.replaceState?0:1;S.state[W]=O+=v,history[S.replaceState?"replaceState":"pushState"](S.state,"",o)}if(c?(i=_.state,_.props.page&&(_.props.page.url=o),E.$set(_.props)):$e(_),g){const{scroll:S,keepfocus:v}=g;if(!v){const w=document.body,p=w.getAttribute("tabindex");w.tabIndex=-1,w.focus({preventScroll:!0}),setTimeout(()=>{var y;(y=getSelection())==null||y.removeAllRanges()}),p!==null?w.setAttribute("tabindex",p):w.removeAttribute("tabindex")}if(await Ae(),l){const w=o.hash&&document.getElementById(o.hash.slice(1));S?scrollTo(S.x,S.y):w?w.scrollIntoView():scrollTo(0,0)}}else await Ae();u.promise=null,u.id=null,l=!0,_.props.page&&(se=_.props.page);const $=_.state.branch.at(-1);J=((R=$==null?void 0:$.node.shared)==null?void 0:R.router)!==!1,f&&f(),m=!1}function $e(o){i=o.state;const h=document.querySelector("style[data-sveltekit]");if(h&&h.remove(),se=o.props.page,E=new kt({target:r,props:{...o.props,stores:a},hydrate:!0}),J){const g={from:null,to:new URL(location.href)};t.after_navigate.forEach(f=>f(g))}c=!0}async function x({url:o,params:h,branch:g,status:f,error:d,routeId:k,validation_errors:_}){const $=g.filter(Boolean),b={type:"loaded",state:{url:o,params:h,branch:g,error:d,session_id:L},props:{components:$.map(v=>v.node.component),errors:_}};let U={},R=!1;for(let v=0;v<$.length;v+=1)U={...U,...$[v].data},(R||!i.branch.some(w=>w===$[v]))&&(b.props[`data_${v}`]=U,R=!0);if(!i.url||o.href!==i.url.href||i.error!==d||R){b.props.page={error:d,params:h,routeId:k,status:f,url:o,data:U};const v=(w,p)=>{Object.defineProperty(b.props.page,w,{get:()=>{throw new Error(`$page.${w} has been replaced by $page.url.${p}`)}})};v("origin","origin"),v("path","pathname"),v("query","searchParams")}return b}async function ie({node:o,parent:h,url:g,params:f,routeId:d,server_data:k}){var S,v;const _={params:new Set,url:!1,dependencies:new Set,parent:!1};function $(...w){for(const p of w){const{href:y}=new URL(p,g);_.dependencies.add(y)}}let b=null;o.server&&(_.dependencies.add(g.href),_.url=!0);const U={};for(const w in f)Object.defineProperty(U,w,{get(){return _.params.add(w),f[w]},enumerable:!0});const R=new at(g);if((S=o.shared)!=null&&S.load){const w={routeId:d,params:U,data:k,get url(){return _.url=!0,R},async fetch(p,y){let P;typeof p=="string"?P=p:(P=p.url,y={body:p.method==="GET"||p.method==="HEAD"?void 0:await p.blob(),cache:p.cache,credentials:p.credentials,headers:p.headers,integrity:p.integrity,keepalive:p.keepalive,method:p.method,mode:p.mode,redirect:p.redirect,referrer:p.referrer,referrerPolicy:p.referrerPolicy,signal:p.signal,...y});const I=new URL(P,g).href;return $(I),c?ge(I,y):ct(P,y)},setHeaders:()=>{},depends:$,get parent(){return _.parent=!0,h},get props(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},get session(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},get stuff(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")}};b=(v=await o.shared.load.call(null,w))!=null?v:null}return{node:o,data:b||k,uses:_}}async function Ee({id:o,url:h,params:g,route:f}){if(u.id===o&&u.promise)return u.promise;const{errors:d,layouts:k,leaf:_}=f,$=i.url&&{url:o!==i.url.pathname+i.url.search,params:Object.keys(g).filter(p=>i.params[p]!==g[p])};[...d,...k,_].forEach(p=>p==null?void 0:p().catch(()=>{}));const b=[...k,_],U=[];for(let p=0;p<b.length;p++)if(!b[p])U.push(!1);else{const y=i.branch[p],P=!y||$.url&&y.uses.url||$.params.some(I=>y.uses.params.has(I))||Array.from(y.uses.dependencies).some(I=>s.some(X=>X(I)))||y.uses.parent&&U.includes(!0);U.push(P)}let R=null;if(f.uses_server_data){try{const p=await ge(`${h.pathname}${h.pathname.endsWith("/")?"":"/"}__data.json${h.search}`);if(R=await p.json(),!p.ok)throw R}catch{throw new Error("TODO render fallback error page")}if(R.type==="redirect")return R}const S=R==null?void 0:R.nodes,v=b.map(async(p,y)=>Promise.resolve().then(async()=>{var G;if(!p)return;const P=await p(),I=i.branch[y];if(U[y]||!I||P!==I.node){const T=S==null?void 0:S[y];if(T!=null&&T.status)throw pt(T.status,T.message);if(T!=null&&T.error)throw T.error;return await ie({node:P,url:h,params:g,routeId:f.id,parent:async()=>{var Ue;const Le={};for(let ce=0;ce<y;ce+=1)Object.assign(Le,(Ue=await v[ce])==null?void 0:Ue.data);return Le},server_data:(G=T==null?void 0:T.data)!=null?G:null})}else return I}));for(const p of v)p.catch(()=>{});const w=[];for(let p=0;p<b.length;p+=1)if(b[p])try{w.push(await v[p])}catch(y){const P=y;if(P instanceof Oe)return{type:"redirect",location:P.location};const I=y instanceof te?y.status:500;for(;p--;)if(d[p]){let X,G=p;for(;!w[G];)G-=1;try{return X={node:await d[p](),data:{},uses:{params:new Set,url:!1,dependencies:new Set,parent:!1}},await x({url:h,params:g,branch:w.slice(0,G+1).concat(X),status:I,error:P,routeId:f.id})}catch{continue}}return await ee({status:I,error:P,url:h,routeId:f.id})}else w.push(void 0);return await x({url:h,params:g,branch:w,status:200,error:null,routeId:f.id})}async function ee({status:o,error:h,url:g,routeId:f}){const d={},k=await ie({node:await Lt,url:g,params:d,routeId:f,parent:()=>Promise.resolve({}),server_data:null}),_={node:await Ut,data:null,uses:{params:new Set,url:!1,dependencies:new Set,parent:!1}};return await x({url:g,params:d,branch:[k,_],status:o,error:h,routeId:f})}function Re(o){if(o.origin!==location.origin||!o.pathname.startsWith(e))return;const h=decodeURI(o.pathname.slice(e.length)||"/");for(const g of pe){const f=g.exec(h);if(f){const d=new URL(o.origin+nt(o.pathname,n)+o.search+o.hash);return{id:d.pathname+d.search,route:g,params:rt(f),url:d}}}}async function oe({url:o,scroll:h,keepfocus:g,redirect_chain:f,details:d,accepted:k,blocked:_}){const $=i.url;let b=!1;const U={from:$,to:o,cancel:()=>b=!0};if(t.before_navigate.forEach(R=>R(U)),b){_();return}he(O),k(),c&&a.navigating.set({from:i.url,to:o}),await ke(o,f,{scroll:h,keepfocus:g,details:d},()=>{const R={from:$,to:o};t.after_navigate.forEach(S=>S(R)),a.navigating.set(null)})}function M(o){return location.href=o.href,new Promise(()=>{})}return{after_navigate:o=>{_e(()=>(t.after_navigate.push(o),()=>{const h=t.after_navigate.indexOf(o);t.after_navigate.splice(h,1)}))},before_navigate:o=>{_e(()=>(t.before_navigate.push(o),()=>{const h=t.before_navigate.indexOf(o);t.before_navigate.splice(h,1)}))},disable_scroll_handling:()=>{(m||!c)&&(l=!1)},goto:(o,h={})=>ye(o,h,[]),invalidate:o=>{if(o===void 0){for(const h of i.branch)h==null||h.uses.dependencies.add("");s.push(()=>!0)}else if(typeof o=="function")s.push(o);else{const{href:h}=new URL(o,location.href);s.push(g=>g===h)}return A||(A=Promise.resolve().then(async()=>{await ke(new URL(location.href),[]),A=null})),A},prefetch:async o=>{const h=new URL(o,je(document));await ve(h)},prefetch_routes:async o=>{const g=(o?pe.filter(f=>o.some(d=>f.exec(d))):pe).map(f=>Promise.all([...f.layouts,f.leaf].map(d=>d==null?void 0:d())));await Promise.all(g)},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",f=>{let d=!1;const k={from:i.url,to:null,cancel:()=>d=!0};t.before_navigate.forEach(_=>_(k)),d?(f.preventDefault(),f.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){he(O);try{sessionStorage[Be]=JSON.stringify(Z)}catch{}}});const o=f=>{const d=Ne(f);d&&d.href&&d.hasAttribute("sveltekit:prefetch")&&ve(Ce(d))};let h;const g=f=>{clearTimeout(h),h=setTimeout(()=>{var d;(d=f.target)==null||d.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",o),addEventListener("mousemove",g),addEventListener("sveltekit:trigger_prefetch",o),addEventListener("click",f=>{if(!J||f.button||f.which!==1||f.metaKey||f.ctrlKey||f.shiftKey||f.altKey||f.defaultPrevented)return;const d=Ne(f);if(!d||!d.href)return;const k=d instanceof SVGAElement,_=Ce(d);if(!k&&!(_.protocol==="https:"||_.protocol==="http:"))return;const $=(d.getAttribute("rel")||"").split(/\s+/);if(d.hasAttribute("download")||$.includes("external")||d.hasAttribute("sveltekit:reload")||(k?d.target.baseVal:d.target))return;const[b,U]=_.href.split("#");if(U!==void 0&&b===location.href.split("#")[0]){ae=!0,he(O),a.page.set({...se,url:_}),a.page.notify();return}oe({url:_,scroll:d.hasAttribute("sveltekit:noscroll")?me():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:_.href===location.href},accepted:()=>f.preventDefault(),blocked:()=>f.preventDefault()})}),addEventListener("popstate",f=>{if(f.state&&J){if(f.state[W]===O)return;oe({url:new URL(location.href),scroll:Z[f.state[W]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{O=f.state[W]},blocked:()=>{const d=O-f.state[W];history.go(d)}})}}),addEventListener("hashchange",()=>{ae&&(ae=!1,history.replaceState({...history.state,[W]:++O},"",location.href))});for(const f of document.querySelectorAll("link"))f.rel==="icon"&&(f.href=f.href);addEventListener("pageshow",f=>{f.persisted&&a.navigating.set(null)})},_hydrate:async({status:o,error:h,node_ids:g,params:f,routeId:d})=>{const k=new URL(location.href);let _;try{const $=(S,v)=>{const w=document.querySelector(`script[sveltekit\\:data-type="${S}"]`);return w!=null&&w.textContent?JSON.parse(w.textContent):v},b=$("server_data",[]),U=$("validation_errors",void 0),R=g.map(async(S,v)=>{var w;return ie({node:await ne[S](),url:k,params:f,routeId:d,parent:async()=>{const p={};for(let y=0;y<v;y+=1)Object.assign(p,(await R[y]).data);return p},server_data:(w=b[v])!=null?w:null})});_=await x({url:k,params:f,branch:await Promise.all(R),status:o,error:h!=null&&h.__is_http_error?new te(h.status,h.message):h,validation_errors:U,routeId:d})}catch($){const b=$;if(b instanceof Oe){await M(new URL($.location,location.href));return}_=await ee({status:b instanceof te?b.status:500,error:b,url:k,routeId:d})}$e(_)}}}function Ot(r){r.client}function Nt(r){}async function Ct({paths:r,target:e,route:n,spa:s,trailing_slash:a,hydrate:u}){const t=At({target:e,base:r.base,trailing_slash:a});Ot({client:t}),st(r),u&&await t._hydrate(u),n&&(s&&t.goto(location.href,{replaceState:!0}),t._start_router()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{Nt as set_public_env,Ct as start};
