import{S as $,i as ee,s as te,l as j,u as y,m as z,p as T,v as b,h as d,q as k,b as E,H as c,w as me,n as ie,C as fe,J as ae,K as se,D as ue,E as oe,F as he,L as ge,f as G,t as U,M as de,x as N,y as Y,z as Q,A as X,a as Z,c as x}from"../../chunks/index-371de5eb.js";function we(i){let e,n;return{c(){e=j("div"),n=y(i[0]),this.h()},l(t){e=z(t,"DIV",{class:!0});var l=T(e);n=b(l,i[0]),l.forEach(d),this.h()},h(){k(e,"class","box svelte-2vhoen")},m(t,l){E(t,e,l),c(e,n)},p(t,[l]){l&1&&me(n,t[0])},i:ie,o:ie,d(t){t&&d(e)}}}function ce(i,e,n){let{text:t}=e;return i.$$set=l=>{"text"in l&&n(0,t=l.text)},[t]}class ne extends ${constructor(e){super(),ee(this,e,ce,we,te,{text:0})}}function _e(i,e={}){const n=i.style;Object.entries(e).filter(Boolean).filter(t=>t.every(Boolean)).forEach(t=>{n[t[0]]=t[1]})}function p(...i){return i.filter(e=>e).map(e=>typeof e=="string"?e.trim():Array.from(Object.entries(e)).map(([n,t])=>t?typeof t=="boolean"?n:`${t==null?void 0:t.trim()} ${n}`:"").filter(n=>n).join(" ").trim()).filter(e=>e).join(" ").trim()}function re({wrap:i,basis:e,grow:n,shrink:t,colStart:l,colEnd:r,rowStart:g,rowEnd:s,col:f,row:u,area:o,autoCols:S,autoRows:m,autoFlow:B,colGap:A,rowGap:C,templateAreas:q,templateCols:P,templateRows:v,...R}){return{...R,flexWrap:i,flexBasis:e,flexGrow:n,flexShrink:t,gridColumnStart:l,gridColumnEnd:r,gridRowStart:g,gridRowEnd:s,gridColumn:f,gridRow:u,gridArea:o,gridAutoColumns:S,gridAutoRows:m,gridAutoFlow:B,gridColumnGap:A,gridRowGap:C,gridTemplateAreas:q,gridTemplateColumns:P,gridTemplateRows:v}}function ye(i){let e,n,t,l,r,g;const s=i[8].default,f=fe(s,i,i[7],null);return{c(){e=j("div"),f&&f.c(),this.h()},l(u){e=z(u,"DIV",{class:!0});var o=T(e);f&&f.l(o),o.forEach(d),this.h()},h(){k(e,"class",n=ae(p(i[0],{inline:i[1],reverse:i[2],width:i[3],height:i[4]},"layout"))+" svelte-1qolqkz")},m(u,o){E(u,e,o),f&&f.m(e,null),l=!0,r||(g=[se(t=_e.call(null,e,re(i[5]))),se(i[6].call(null,e))],r=!0)},p(u,[o]){f&&f.p&&(!l||o&128)&&ue(f,s,u,u[7],l?he(s,u[7],o,null):oe(u[7]),null),(!l||o&31&&n!==(n=ae(p(u[0],{inline:u[1],reverse:u[2],width:u[3],height:u[4]},"layout"))+" svelte-1qolqkz"))&&k(e,"class",n),t&&ge(t.update)&&o&32&&t.update.call(null,re(u[5]))},i(u){l||(G(f,u),l=!0)},o(u){U(f,u),l=!1},d(u){u&&d(e),f&&f.d(u),r=!1,de(g)}}}function be(i,e,n){let{$$slots:t={},$$scope:l}=e,{class:r=""}=e,{inline:g=!1}=e,{reverse:s=!1}=e,{width:f=!1}=e,{height:u=!1}=e,{style:o={}}=e,{use:S=m=>{}}=e;return i.$$set=m=>{"class"in m&&n(0,r=m.class),"inline"in m&&n(1,g=m.inline),"reverse"in m&&n(2,s=m.reverse),"width"in m&&n(3,f=m.width),"height"in m&&n(4,u=m.height),"style"in m&&n(5,o=m.style),"use"in m&&n(6,S=m.use),"$$scope"in m&&n(7,l=m.$$scope)},[r,g,s,f,u,o,S,l,t]}class Se extends ${constructor(e){super(),ee(this,e,be,ye,te,{class:0,inline:1,reverse:2,width:3,height:4,style:5,use:6})}}function Ce(i){let e;const n=i[29].default,t=fe(n,i,i[30],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,r){t&&t.m(l,r),e=!0},p(l,r){t&&t.p&&(!e||r&1073741824)&&ue(t,n,l,l[30],e?he(n,l[30],r,null):oe(l[30]),null)},i(l){e||(G(t,l),e=!0)},o(l){U(t,l),e=!1},d(l){t&&t.d(l)}}}function ve(i){let e,n;return e=new Se({props:{class:p(i[0],"row"),inline:i[26],reverse:i[27],width:i[23]===!0,height:i[24]===!0,use:i[28],style:{...i[1],alignContent:i[3],alignItems:i[4],justifyContent:i[2],justifySelf:i[5],alignSelf:i[6],gap:i[7],wrap:i[8],basis:i[9],grow:i[10],shrink:i[12],flex:i[13],order:i[11],colStart:i[17],colEnd:i[16],rowStart:i[20],rowEnd:i[19],col:i[15],row:i[18],area:i[14],padding:i[21],margin:i[22],width:i[23],height:i[24],boxSizing:i[25]},$$slots:{default:[Ce]},$$scope:{ctx:i}}}),{c(){N(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,l){Q(e,t,l),n=!0},p(t,[l]){const r={};l&1&&(r.class=p(t[0],"row")),l&67108864&&(r.inline=t[26]),l&134217728&&(r.reverse=t[27]),l&8388608&&(r.width=t[23]===!0),l&16777216&&(r.height=t[24]===!0),l&268435456&&(r.use=t[28]),l&67108862&&(r.style={...t[1],alignContent:t[3],alignItems:t[4],justifyContent:t[2],justifySelf:t[5],alignSelf:t[6],gap:t[7],wrap:t[8],basis:t[9],grow:t[10],shrink:t[12],flex:t[13],order:t[11],colStart:t[17],colEnd:t[16],rowStart:t[20],rowEnd:t[19],col:t[15],row:t[18],area:t[14],padding:t[21],margin:t[22],width:t[23],height:t[24],boxSizing:t[25]}),l&1073741824&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){U(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}function ke(i,e,n){var le;let{$$slots:t={},$$scope:l}=e,{class:r=""}=e,{style:g={}}=e,{justifyContent:s=void 0}=e,{alignContent:f=void 0}=e,{alignItems:u=void 0}=e,{justifySelf:o=void 0}=e,{alignSelf:S=void 0}=e,{gap:m=void 0}=e,{wrap:B=void 0}=e,{basis:A=void 0}=e,{grow:C=void 0}=e,{order:q=void 0}=e,{shrink:P=void 0}=e,{flex:v=void 0}=e,{area:R=void 0}=e,{col:H=void 0}=e,{colEnd:I=void 0}=e,{colStart:J=void 0}=e,{row:L=void 0}=e,{rowEnd:F=void 0}=e,{rowStart:h=void 0}=e,{padding:w=g.padding}=e,{margin:D=g.margin}=e,{width:V=g.width}=e,{height:_=g.height}=e,{boxSizing:O=(le=g.boxSizing)!=null?le:"border-box"}=e,{inline:W=!1}=e,{reverse:K=!1}=e,{use:M=()=>{}}=e;return i.$$set=a=>{"class"in a&&n(0,r=a.class),"style"in a&&n(1,g=a.style),"justifyContent"in a&&n(2,s=a.justifyContent),"alignContent"in a&&n(3,f=a.alignContent),"alignItems"in a&&n(4,u=a.alignItems),"justifySelf"in a&&n(5,o=a.justifySelf),"alignSelf"in a&&n(6,S=a.alignSelf),"gap"in a&&n(7,m=a.gap),"wrap"in a&&n(8,B=a.wrap),"basis"in a&&n(9,A=a.basis),"grow"in a&&n(10,C=a.grow),"order"in a&&n(11,q=a.order),"shrink"in a&&n(12,P=a.shrink),"flex"in a&&n(13,v=a.flex),"area"in a&&n(14,R=a.area),"col"in a&&n(15,H=a.col),"colEnd"in a&&n(16,I=a.colEnd),"colStart"in a&&n(17,J=a.colStart),"row"in a&&n(18,L=a.row),"rowEnd"in a&&n(19,F=a.rowEnd),"rowStart"in a&&n(20,h=a.rowStart),"padding"in a&&n(21,w=a.padding),"margin"in a&&n(22,D=a.margin),"width"in a&&n(23,V=a.width),"height"in a&&n(24,_=a.height),"boxSizing"in a&&n(25,O=a.boxSizing),"inline"in a&&n(26,W=a.inline),"reverse"in a&&n(27,K=a.reverse),"use"in a&&n(28,M=a.use),"$$scope"in a&&n(30,l=a.$$scope)},[r,g,s,f,u,o,S,m,B,A,C,q,P,v,R,H,I,J,L,F,h,w,D,V,_,O,W,K,M,t,l]}class Ee extends ${constructor(e){super(),ee(this,e,ke,ve,te,{class:0,style:1,justifyContent:2,alignContent:3,alignItems:4,justifySelf:5,alignSelf:6,gap:7,wrap:8,basis:9,grow:10,order:11,shrink:12,flex:13,area:14,col:15,colEnd:16,colStart:17,row:18,rowEnd:19,rowStart:20,padding:21,margin:22,width:23,height:24,boxSizing:25,inline:26,reverse:27,use:28})}}function je(i){let e,n,t,l,r,g;return e=new ne({props:{text:"Thanks for your time today Charlie; your experiences are a helpful reference as we navigate our CS careers/interests! - Joe Rebagliati"}}),t=new ne({props:{text:"It's really helpful to hear from someone that was once in our shoes, so thank you so much for both your time and giving us such thoughtful advice! - Ryan Soeyadi"}}),r=new ne({props:{text:"Appreciate your time and insightful sharings, Charlie! You demystified many industry jargons and career options, bridging the gaps for many CS students who aspire to become software engineers! Will take your offer and look forward to connecting in person when you are on campus! - Jacky Wong"}}),{c(){N(e.$$.fragment),n=Z(),N(t.$$.fragment),l=Z(),N(r.$$.fragment)},l(s){Y(e.$$.fragment,s),n=x(s),Y(t.$$.fragment,s),l=x(s),Y(r.$$.fragment,s)},m(s,f){Q(e,s,f),E(s,n,f),Q(t,s,f),E(s,l,f),Q(r,s,f),g=!0},p:ie,i(s){g||(G(e.$$.fragment,s),G(t.$$.fragment,s),G(r.$$.fragment,s),g=!0)},o(s){U(e.$$.fragment,s),U(t.$$.fragment,s),U(r.$$.fragment,s),g=!1},d(s){X(e,s),s&&d(n),X(t,s),s&&d(l),X(r,s)}}}function ze(i){let e,n,t,l,r,g,s,f,u,o,S,m,B,A,C,q,P,v,R,H,I,J,L,F;return f=new Ee({props:{$$slots:{default:[je]},$$scope:{ctx:i}}}),{c(){e=j("h1"),n=y("From the Columbia Computer Science Bridge Students!"),t=Z(),l=j("h2"),r=y("Thank you Charlie!"),g=Z(),s=j("div"),N(f.$$.fragment),u=Z(),o=j("p"),S=y(`This webpage was made by the community of students who are currently in or\r
    are alumni of the Columbia University CS Bridge Program. This page is not an\r
    official website of the University of Columbia nor is it endorsed by\r
    Columbia. To learn more about the Bridge program visit `),m=j("a"),B=y("here"),A=y(`. This webpage was built on\r
    `),C=j("a"),q=y("Svelte-kit"),P=y(`. Certain configuration\r
    details to make Svelte-kit workable with Github pages are from\r
    `),v=j("a"),R=y("here"),H=y(`\r
    and\r
    `),I=j("a"),J=y("here"),L=y("."),this.h()},l(h){e=z(h,"H1",{class:!0});var w=T(e);n=b(w,"From the Columbia Computer Science Bridge Students!"),w.forEach(d),t=x(h),l=z(h,"H2",{class:!0});var D=T(l);r=b(D,"Thank you Charlie!"),D.forEach(d),g=x(h),s=z(h,"DIV",{class:!0});var V=T(s);Y(f.$$.fragment,V),V.forEach(d),u=x(h),o=z(h,"P",{class:!0});var _=T(o);S=b(_,`This webpage was made by the community of students who are currently in or\r
    are alumni of the Columbia University CS Bridge Program. This page is not an\r
    official website of the University of Columbia nor is it endorsed by\r
    Columbia. To learn more about the Bridge program visit `),m=z(_,"A",{href:!0});var O=T(m);B=b(O,"here"),O.forEach(d),A=b(_,`. This webpage was built on\r
    `),C=z(_,"A",{href:!0});var W=T(C);q=b(W,"Svelte-kit"),W.forEach(d),P=b(_,`. Certain configuration\r
    details to make Svelte-kit workable with Github pages are from\r
    `),v=z(_,"A",{href:!0});var K=T(v);R=b(K,"here"),K.forEach(d),H=b(_,`\r
    and\r
    `),I=z(_,"A",{href:!0});var M=T(I);J=b(M,"here"),M.forEach(d),L=b(_,"."),_.forEach(d),this.h()},h(){k(e,"class","svelte-963c2z"),k(l,"class","svelte-963c2z"),k(s,"class","comments svelte-963c2z"),k(m,"href","https://www.cs.columbia.edu/ms-bridge/"),k(C,"href","https://kit.svelte.dev/"),k(v,"href","https://sveltesaas.com/articles/sveltekit-github-pages-guide/"),k(I,"href","https://github.com/duckdb-wasm-examples/sveltekit-typescript"),k(o,"class","svelte-963c2z")},m(h,w){E(h,e,w),c(e,n),E(h,t,w),E(h,l,w),c(l,r),E(h,g,w),E(h,s,w),Q(f,s,null),E(h,u,w),E(h,o,w),c(o,S),c(o,m),c(m,B),c(o,A),c(o,C),c(C,q),c(o,P),c(o,v),c(v,R),c(o,H),c(o,I),c(I,J),c(o,L),F=!0},p(h,[w]){const D={};w&1&&(D.$$scope={dirty:w,ctx:h}),f.$set(D)},i(h){F||(G(f.$$.fragment,h),F=!0)},o(h){U(f.$$.fragment,h),F=!1},d(h){h&&d(e),h&&d(t),h&&d(l),h&&d(g),h&&d(s),X(f),h&&d(u),h&&d(o)}}}class Ie extends ${constructor(e){super(),ee(this,e,null,ze,te,{})}}export{Ie as default};