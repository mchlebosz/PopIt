import{S as O,i as T,s as z,k as v,l as m,m as _,h as d,n as f,b as A,E as h,C as L,F as Y,o as B,q as H,a as k,r as P,c as w,u as ue,G as ce,w as R,x as G,H as x,y as J,f as C,t as j,z as K,I as fe,J as he,K as de,L as pe}from"../../chunks/paths-d26134cd.js";import{p as ve}from"../../chunks/stores-ad88e9ca.js";function le(i,e,t){const s=i.slice();return s[2]=e[t],s}function se(i){let e,t,s=i[2].name+"",r,a,l,o;return{c(){e=v("li"),t=v("a"),r=H(s),o=k(),this.h()},l(n){e=m(n,"LI",{class:!0});var u=_(e);t=m(u,"A",{id:!0,href:!0});var c=_(t);r=P(c,s),c.forEach(d),o=w(u),u.forEach(d),this.h()},h(){f(t,"id",a=i[2].id),f(t,"href",l=i[2].href),f(e,"class","pl-10 transition-all hover:drop-shadow hover:inline-block hover:-translate-x-[1px] hover:-translate-y-[1px] ")},m(n,u){A(n,e,u),h(e,t),h(t,r),h(e,o)},p(n,u){u&1&&s!==(s=n[2].name+"")&&ue(r,s),u&1&&a!==(a=n[2].id)&&f(t,"id",a),u&1&&l!==(l=n[2].href)&&f(t,"href",l)},d(n){n&&d(e)}}}function me(i){let e,t,s=i[0],r=[];for(let a=0;a<s.length;a+=1)r[a]=se(le(i,s,a));return{c(){e=v("nav"),t=v("ul");for(let a=0;a<r.length;a+=1)r[a].c();this.h()},l(a){e=m(a,"NAV",{class:!0});var l=_(e);t=m(l,"UL",{class:!0});var o=_(t);for(let n=0;n<r.length;n+=1)r[n].l(o);o.forEach(d),l.forEach(d),this.h()},h(){f(t,"class","flex flex-row justify-between align-middle"),f(e,"class","hidden sm:flex")},m(a,l){A(a,e,l),h(e,t);for(let o=0;o<r.length;o+=1)r[o].m(t,null)},p(a,[l]){if(l&1){s=a[0];let o;for(o=0;o<s.length;o+=1){const n=le(a,s,o);r[o]?r[o].p(n,l):(r[o]=se(n),r[o].c(),r[o].m(t,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=s.length}},i:L,o:L,d(a){a&&d(e),Y(r,a)}}}function _e(i,e,t){let{subpages:s}=e;const r=[{key:"blue",value:"#3b82f6"},{key:"red",value:"#ef4444"},{key:"green",value:"#10b981"},{key:"purple",value:"#8b5cf6"},{key:"pink",value:"#ec4899"},{key:"indigo",value:"#6366f1"},{key:"cyan",value:"#22d3ee"}];return B(()=>{document.querySelectorAll("nav li").forEach(l=>{l.addEventListener("mouseenter",()=>{const o=r[Math.floor(Math.random()*r.length)];l.style.color=o.value}),l.addEventListener("mouseleave",()=>{l.style.color=""})})}),i.$$set=a=>{"subpages"in a&&t(0,s=a.subpages)},[s]}class ge extends O{constructor(e){super(),T(this,e,_e,me,z,{subpages:0})}}function re(i,e,t){const s=i.slice();return s[4]=e[t],s}function ne(i){let e,t,s=i[4].name+"",r,a,l,o;return{c(){e=v("li"),t=v("a"),r=H(s),o=k(),this.h()},l(n){e=m(n,"LI",{class:!0});var u=_(e);t=m(u,"A",{id:!0,href:!0});var c=_(t);r=P(c,s),c.forEach(d),o=w(u),u.forEach(d),this.h()},h(){f(t,"id",a=i[4].id),f(t,"href",l=i[4].href),f(e,"class","transition-all hover:drop-shadow hover:inline-block hover:-translate-x-[1px] hover:-translate-y-[1px]")},m(n,u){A(n,e,u),h(e,t),h(t,r),h(e,o)},p(n,u){u&1&&s!==(s=n[4].name+"")&&ue(r,s),u&1&&a!==(a=n[4].id)&&f(t,"id",a),u&1&&l!==(l=n[4].href)&&f(t,"href",l)},d(n){n&&d(e)}}}function be(i){let e,t,s,r,a,l,o,n,u,c,p,E,V,I,U,Q,S,N,F,W,Z,M=i[0],y=[];for(let g=0;g<M.length;g+=1)y[g]=ne(re(i,M,g));return{c(){e=v("nav"),t=v("button"),s=v("span"),r=H("Open main menu"),a=k(),l=v("div"),o=v("div"),n=v("span"),c=k(),p=v("span"),V=k(),I=v("span"),Q=k(),S=v("div"),N=v("ul");for(let g=0;g<y.length;g+=1)y[g].c();this.h()},l(g){e=m(g,"NAV",{class:!0});var $=_(e);t=m($,"BUTTON",{type:!0,class:!0});var b=_(t);s=m(b,"SPAN",{class:!0});var q=_(s);r=P(q,"Open main menu"),q.forEach(d),a=w(b),l=m(b,"DIV",{class:!0});var ee=_(l);o=m(ee,"DIV",{class:!0});var D=_(o);n=m(D,"SPAN",{"aria-hidden":!0,class:!0}),_(n).forEach(d),c=w(D),p=m(D,"SPAN",{"aria-hidden":!0,class:!0}),_(p).forEach(d),V=w(D),I=m(D,"SPAN",{"aria-hidden":!0,class:!0}),_(I).forEach(d),D.forEach(d),ee.forEach(d),b.forEach(d),Q=w($),S=m($,"DIV",{class:!0});var te=_(S);N=m(te,"UL",{class:!0});var ae=_(N);for(let X=0;X<y.length;X+=1)y[X].l(ae);ae.forEach(d),te.forEach(d),$.forEach(d),this.h()},h(){f(s,"class","sr-only"),f(n,"aria-hidden","true"),f(n,"class",u="block absolute h-[3px] w-5 rounded antialiased bg-current transform transition duration-300 ease-in-out "+(i[1]?"rotate-45":"-translate-y-1.5")),f(p,"aria-hidden","true"),f(p,"class",E="block absolute h-[3px] w-5 bg-current rounded antialiased transform transition duration-300 ease-in-out "+(i[1]?"opacity-0":"")),f(I,"aria-hidden","true"),f(I,"class",U="block absolute h-[3px] w-5 bg-current rounded antialiased transform transition duration-300 ease-in-out "+(i[1]?"-rotate-45":" translate-y-1.5")),f(o,"class","relative antialiased w-full h-0.5 top-1/2 -translate-y-1/2"),f(l,"class","block w-5 h-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"),f(t,"type","button"),f(t,"class","relative flex w-0 h-0 p-4 rounded bg-white text-gray-800 hover:cursor-pointer hover:text-primary"),f(N,"class","space-y-4"),f(S,"class",F="flex overflow-hidden absolute drop-shadow top-0 right-0 mt-16 mr-0 transition-transform duration-300 p-4 rounded-l-lg bg-white flex-col "+i[2]),f(e,"class","flex sm:hidden")},m(g,$){A(g,e,$),h(e,t),h(t,s),h(s,r),h(t,a),h(t,l),h(l,o),h(o,n),h(o,c),h(o,p),h(o,V),h(o,I),h(e,Q),h(e,S),h(S,N);for(let b=0;b<y.length;b+=1)y[b].m(N,null);W||(Z=ce(t,"click",i[3]),W=!0)},p(g,[$]){if($&2&&u!==(u="block absolute h-[3px] w-5 rounded antialiased bg-current transform transition duration-300 ease-in-out "+(g[1]?"rotate-45":"-translate-y-1.5"))&&f(n,"class",u),$&2&&E!==(E="block absolute h-[3px] w-5 bg-current rounded antialiased transform transition duration-300 ease-in-out "+(g[1]?"opacity-0":""))&&f(p,"class",E),$&2&&U!==(U="block absolute h-[3px] w-5 bg-current rounded antialiased transform transition duration-300 ease-in-out "+(g[1]?"-rotate-45":" translate-y-1.5"))&&f(I,"class",U),$&1){M=g[0];let b;for(b=0;b<M.length;b+=1){const q=re(g,M,b);y[b]?y[b].p(q,$):(y[b]=ne(q),y[b].c(),y[b].m(N,null))}for(;b<y.length;b+=1)y[b].d(1);y.length=M.length}$&4&&F!==(F="flex overflow-hidden absolute drop-shadow top-0 right-0 mt-16 mr-0 transition-transform duration-300 p-4 rounded-l-lg bg-white flex-col "+g[2])&&f(S,"class",F)},i:L,o:L,d(g){g&&d(e),Y(y,g),W=!1,Z()}}}function ye(i,e,t){let{subpages:s}=e,r=!1,a="translate-x-full hidden";function l(){r?(t(2,a="translate-x-full"),window.setTimeout(function(){t(2,a+=" hidden")},300)):(t(2,a="translate-x-full"),window.setTimeout(function(){t(2,a="translate-x-0")},1)),t(1,r=!r)}return i.$$set=o=>{"subpages"in o&&t(0,s=o.subpages)},[s,r,a,l]}class $e extends O{constructor(e){super(),T(this,e,ye,be,z,{subpages:0})}}function ke(i){let e,t,s,r,a,l,o,n,u;return l=new ge({props:{subpages:i[0]}}),n=new $e({props:{subpages:i[0]}}),{c(){e=v("header"),t=v("div"),s=v("a"),r=H("pop it.com"),a=k(),R(l.$$.fragment),o=k(),R(n.$$.fragment),this.h()},l(c){e=m(c,"HEADER",{class:!0});var p=_(e);t=m(p,"DIV",{class:!0});var E=_(t);s=m(E,"A",{href:!0,id:!0,rel:!0,class:!0});var V=_(s);r=P(V,"pop it.com"),V.forEach(d),E.forEach(d),a=w(p),G(l.$$.fragment,p),o=w(p),G(n.$$.fragment,p),p.forEach(d),this.h()},h(){f(s,"href",x+"/."),f(s,"id","logo"),f(s,"rel","home"),f(s,"class","align-middle transition-all hover:drop-shadow hover:inline-block hover:-translate-x-[1px] hover:-translate-y-[1px]"),f(t,"class","logo h-full my-auto align-middle"),f(e,"class","flex flex-row justify-between m-0 px-8 py-4 align-baseline uppercase font-semibold bg-primary sticky top-0 z-10")},m(c,p){A(c,e,p),h(e,t),h(t,s),h(s,r),h(e,a),J(l,e,null),h(e,o),J(n,e,null),u=!0},p:L,i(c){u||(C(l.$$.fragment,c),C(n.$$.fragment,c),u=!0)},o(c){j(l.$$.fragment,c),j(n.$$.fragment,c),u=!1},d(c){c&&d(e),K(l),K(n)}}}function we(i){B(()=>{ve.subscribe(s=>{const r=document.querySelector("nav");if(!r)return;r.querySelectorAll("a").forEach(l=>{l.id===String(s)?l.classList.add("active"):l.classList.remove("active")})})});const e=[{id:"about",name:"about it!",href:{base:x}+"/about"},{id:"shop",name:"shop it!",href:{base:x}+"/shop"},{id:"contact",name:"contact it!",href:{base:x}+"/contact"}],t=[{key:"blue",value:"#3b82f6"},{key:"red",value:"#ef4444"},{key:"green",value:"#10b981"},{key:"purple",value:"#8b5cf6"},{key:"pink",value:"#ec4899"},{key:"indigo",value:"#6366f1"},{key:"cyan",value:"#22d3ee"}];return B(()=>{const s=document.getElementById("logo");s&&(s.addEventListener("mouseenter",()=>{const r=t[Math.floor(Math.random()*t.length)];s.style.color=r.value}),s.addEventListener("mouseleave",()=>{s.style.color=""}))}),[e]}class Ee extends O{constructor(e){super(),T(this,e,we,ke,z,{})}}function oe(i,e,t){const s=i.slice();return s[2]=e[t],s}function ie(i){let e,t,s=i[2].name+"",r,a;return{c(){e=v("li"),t=v("a"),r=H(s),a=k(),this.h()},l(l){e=m(l,"LI",{class:!0});var o=_(e);t=m(o,"A",{href:!0,class:!0});var n=_(t);r=P(n,s),n.forEach(d),a=w(o),o.forEach(d),this.h()},h(){f(t,"href",i[2].href),f(t,"class","text-white "),f(e,"class","m-auto my-2 first:font-semibold transition-all hover:drop-shadow-[2px_2px_2px_rgba(255,255,255,0.3)] hover:inline-block hover:-translate-x-[1px] hover:-translate-y-[1px] ")},m(l,o){A(l,e,o),h(e,t),h(t,r),h(e,a)},p:L,d(l){l&&d(e)}}}function xe(i){let e,t,s,r=i[0],a=[];for(let l=0;l<r.length;l+=1)a[l]=ie(oe(i,r,l));return{c(){e=v("footer"),t=v("nav"),s=v("ul");for(let l=0;l<a.length;l+=1)a[l].c();this.h()},l(l){e=m(l,"FOOTER",{class:!0});var o=_(e);t=m(o,"NAV",{class:!0});var n=_(t);s=m(n,"UL",{class:!0});var u=_(s);for(let c=0;c<a.length;c+=1)a[c].l(u);u.forEach(d),n.forEach(d),o.forEach(d),this.h()},h(){f(s,"class","flex w-full mx-auto my-2 justify-around align-middle flex-col sm:flex-row"),f(t,"class","flex m-0 p-0 w-full"),f(e,"class","mt-auto w-full bg-zinc-700 text-white text-sm capitalize")},m(l,o){A(l,e,o),h(e,t),h(t,s);for(let n=0;n<a.length;n+=1)a[n].m(s,null)},p(l,[o]){if(o&1){r=l[0];let n;for(n=0;n<r.length;n+=1){const u=oe(l,r,n);a[n]?a[n].p(u,o):(a[n]=ie(u),a[n].c(),a[n].m(s,null))}for(;n<a.length;n+=1)a[n].d(1);a.length=r.length}},i:L,o:L,d(l){l&&d(e),Y(a,l)}}}function Le(i){const e=[{id:"home",name:"pop it!",href:{base:x}+"/."},{id:"about",name:"about it!",href:{base:x}+"/about"},{id:"shop",name:"shop it!",href:{base:x}+"/shop"},{id:"contact",name:"contact it!",href:{base:x}+"/contact"}],t=[{key:"blue",value:"#3b82f6"},{key:"red",value:"#ef4444"},{key:"green",value:"#10b981"},{key:"purple",value:"#8b5cf6"},{key:"pink",value:"#ec4899"},{key:"indigo",value:"#6366f1"},{key:"cyan",value:"#22d3ee"}];return B(()=>{document.querySelectorAll("nav a").forEach(r=>{r.addEventListener("mouseenter",()=>{const a=t[Math.floor(Math.random()*t.length)];r.style.color=a.value}),r.addEventListener("mouseleave",()=>{r.style.color=""})})}),[e]}class Ae extends O{constructor(e){super(),T(this,e,Le,xe,z,{})}}function Ie(i){let e,t,s,r,a,l,o;t=new Ee({});const n=i[2].default,u=fe(n,i,i[1],null);return l=new Ae({}),{c(){e=v("div"),R(t.$$.fragment),s=k(),u&&u.c(),r=k(),a=v("div"),R(l.$$.fragment),this.h()},l(c){e=m(c,"DIV",{class:!0});var p=_(e);G(t.$$.fragment,p),s=w(p),u&&u.l(p),r=w(p),a=m(p,"DIV",{id:!0,class:!0});var E=_(a);G(l.$$.fragment,E),E.forEach(d),p.forEach(d),this.h()},h(){f(a,"id","footer"),f(a,"class","parallax__group h-10 svelte-jvibcw"),f(e,"class","parallax svelte-jvibcw")},m(c,p){A(c,e,p),J(t,e,null),h(e,s),u&&u.m(e,null),h(e,r),h(e,a),J(l,a,null),o=!0},p(c,[p]){u&&u.p&&(!o||p&2)&&he(u,n,c,c[1],o?pe(n,c[1],p,null):de(c[1]),null)},i(c){o||(C(t.$$.fragment,c),C(u,c),C(l.$$.fragment,c),o=!0)},o(c){j(t.$$.fragment,c),j(u,c),j(l.$$.fragment,c),o=!1},d(c){c&&d(e),K(t),u&&u.d(c),K(l)}}}function Se(i,e,t){let{$$slots:s={},$$scope:r}=e;const a=!0;return i.$$set=l=>{"$$scope"in l&&t(1,r=l.$$scope)},[a,r,s]}class Me extends O{constructor(e){super(),T(this,e,Se,Ie,z,{prerender:0})}get prerender(){return this.$$.ctx[0]}}export{Me as default};