import{S as O,i as T,s as z,k as v,l as m,m as _,h as d,n as f,b as A,E as h,C as L,F as Y,o as B,q as H,a as k,r as P,c as w,u as ue,G as ce,w as R,x as G,H as E,y as J,f as C,t as j,z as K,I as fe,J as he,K as de,L as pe}from"../../chunks/paths-d26134cd.js";import{p as ve}from"../../chunks/stores-ad88e9ca.js";function le(i,e,t){const s=i.slice();return s[2]=e[t],s}function se(i){let e,t,s=i[2].name+"",n,a,l,o;return{c(){e=v("li"),t=v("a"),n=H(s),o=k(),this.h()},l(r){e=m(r,"LI",{class:!0});var u=_(e);t=m(u,"A",{id:!0,href:!0});var c=_(t);n=P(c,s),c.forEach(d),o=w(u),u.forEach(d),this.h()},h(){f(t,"id",a=i[2].id),f(t,"href",l=i[2].href),f(e,"class","pl-10 transition-all hover:drop-shadow hover:inline-block hover:-translate-x-[1px] hover:-translate-y-[1px] ")},m(r,u){A(r,e,u),h(e,t),h(t,n),h(e,o)},p(r,u){u&1&&s!==(s=r[2].name+"")&&ue(n,s),u&1&&a!==(a=r[2].id)&&f(t,"id",a),u&1&&l!==(l=r[2].href)&&f(t,"href",l)},d(r){r&&d(e)}}}function me(i){let e,t,s=i[0],n=[];for(let a=0;a<s.length;a+=1)n[a]=se(le(i,s,a));return{c(){e=v("nav"),t=v("ul");for(let a=0;a<n.length;a+=1)n[a].c();this.h()},l(a){e=m(a,"NAV",{class:!0});var l=_(e);t=m(l,"UL",{class:!0});var o=_(t);for(let r=0;r<n.length;r+=1)n[r].l(o);o.forEach(d),l.forEach(d),this.h()},h(){f(t,"class","flex flex-row justify-between align-middle"),f(e,"class","hidden sm:flex")},m(a,l){A(a,e,l),h(e,t);for(let o=0;o<n.length;o+=1)n[o].m(t,null)},p(a,[l]){if(l&1){s=a[0];let o;for(o=0;o<s.length;o+=1){const r=le(a,s,o);n[o]?n[o].p(r,l):(n[o]=se(r),n[o].c(),n[o].m(t,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=s.length}},i:L,o:L,d(a){a&&d(e),Y(n,a)}}}function _e(i,e,t){let{subpages:s}=e;const n=[{key:"blue",value:"#3b82f6"},{key:"red",value:"#ef4444"},{key:"green",value:"#10b981"},{key:"purple",value:"#8b5cf6"},{key:"pink",value:"#ec4899"},{key:"indigo",value:"#6366f1"},{key:"cyan",value:"#22d3ee"}];return B(()=>{document.querySelectorAll("nav li").forEach(l=>{l.addEventListener("mouseenter",()=>{const o=n[Math.floor(Math.random()*n.length)];l.style.color=o.value}),l.addEventListener("mouseleave",()=>{l.style.color=""})})}),i.$$set=a=>{"subpages"in a&&t(0,s=a.subpages)},[s]}class ge extends O{constructor(e){super(),T(this,e,_e,me,z,{subpages:0})}}function re(i,e,t){const s=i.slice();return s[4]=e[t],s}function ne(i){let e,t,s=i[4].name+"",n,a,l,o;return{c(){e=v("li"),t=v("a"),n=H(s),o=k(),this.h()},l(r){e=m(r,"LI",{class:!0});var u=_(e);t=m(u,"A",{id:!0,href:!0});var c=_(t);n=P(c,s),c.forEach(d),o=w(u),u.forEach(d),this.h()},h(){f(t,"id",a=i[4].id),f(t,"href",l=i[4].href),f(e,"class","transition-all hover:drop-shadow hover:inline-block hover:-translate-x-[1px] hover:-translate-y-[1px]")},m(r,u){A(r,e,u),h(e,t),h(t,n),h(e,o)},p(r,u){u&1&&s!==(s=r[4].name+"")&&ue(n,s),u&1&&a!==(a=r[4].id)&&f(t,"id",a),u&1&&l!==(l=r[4].href)&&f(t,"href",l)},d(r){r&&d(e)}}}function be(i){let e,t,s,n,a,l,o,r,u,c,p,x,V,S,U,Q,I,N,F,W,Z,M=i[0],y=[];for(let g=0;g<M.length;g+=1)y[g]=ne(re(i,M,g));return{c(){e=v("nav"),t=v("button"),s=v("span"),n=H("Open main menu"),a=k(),l=v("div"),o=v("div"),r=v("span"),c=k(),p=v("span"),V=k(),S=v("span"),Q=k(),I=v("div"),N=v("ul");for(let g=0;g<y.length;g+=1)y[g].c();this.h()},l(g){e=m(g,"NAV",{class:!0});var $=_(e);t=m($,"BUTTON",{type:!0,class:!0});var b=_(t);s=m(b,"SPAN",{class:!0});var q=_(s);n=P(q,"Open main menu"),q.forEach(d),a=w(b),l=m(b,"DIV",{class:!0});var ee=_(l);o=m(ee,"DIV",{class:!0});var D=_(o);r=m(D,"SPAN",{"aria-hidden":!0,class:!0}),_(r).forEach(d),c=w(D),p=m(D,"SPAN",{"aria-hidden":!0,class:!0}),_(p).forEach(d),V=w(D),S=m(D,"SPAN",{"aria-hidden":!0,class:!0}),_(S).forEach(d),D.forEach(d),ee.forEach(d),b.forEach(d),Q=w($),I=m($,"DIV",{class:!0});var te=_(I);N=m(te,"UL",{class:!0});var ae=_(N);for(let X=0;X<y.length;X+=1)y[X].l(ae);ae.forEach(d),te.forEach(d),$.forEach(d),this.h()},h(){f(s,"class","sr-only"),f(r,"aria-hidden","true"),f(r,"class",u="block absolute h-[3px] w-5 rounded antialiased bg-current transform transition duration-300 ease-in-out "+(i[1]?"rotate-45":"-translate-y-1.5")),f(p,"aria-hidden","true"),f(p,"class",x="block absolute h-[3px] w-5 bg-current rounded antialiased transform transition duration-300 ease-in-out "+(i[1]?"opacity-0":"")),f(S,"aria-hidden","true"),f(S,"class",U="block absolute h-[3px] w-5 bg-current rounded antialiased transform transition duration-300 ease-in-out "+(i[1]?"-rotate-45":" translate-y-1.5")),f(o,"class","relative antialiased w-full h-0.5 top-1/2 -translate-y-1/2"),f(l,"class","block w-5 h-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"),f(t,"type","button"),f(t,"class","relative flex w-0 h-0 p-4 rounded bg-white text-gray-800 hover:cursor-pointer hover:text-primary"),f(N,"class","space-y-4"),f(I,"class",F="flex overflow-hidden absolute drop-shadow top-0 right-0 mt-16 mr-0 transition-transform duration-300 p-4 rounded-l-lg bg-white flex-col "+i[2]),f(e,"class","flex sm:hidden")},m(g,$){A(g,e,$),h(e,t),h(t,s),h(s,n),h(t,a),h(t,l),h(l,o),h(o,r),h(o,c),h(o,p),h(o,V),h(o,S),h(e,Q),h(e,I),h(I,N);for(let b=0;b<y.length;b+=1)y[b].m(N,null);W||(Z=ce(t,"click",i[3]),W=!0)},p(g,[$]){if($&2&&u!==(u="block absolute h-[3px] w-5 rounded antialiased bg-current transform transition duration-300 ease-in-out "+(g[1]?"rotate-45":"-translate-y-1.5"))&&f(r,"class",u),$&2&&x!==(x="block absolute h-[3px] w-5 bg-current rounded antialiased transform transition duration-300 ease-in-out "+(g[1]?"opacity-0":""))&&f(p,"class",x),$&2&&U!==(U="block absolute h-[3px] w-5 bg-current rounded antialiased transform transition duration-300 ease-in-out "+(g[1]?"-rotate-45":" translate-y-1.5"))&&f(S,"class",U),$&1){M=g[0];let b;for(b=0;b<M.length;b+=1){const q=re(g,M,b);y[b]?y[b].p(q,$):(y[b]=ne(q),y[b].c(),y[b].m(N,null))}for(;b<y.length;b+=1)y[b].d(1);y.length=M.length}$&4&&F!==(F="flex overflow-hidden absolute drop-shadow top-0 right-0 mt-16 mr-0 transition-transform duration-300 p-4 rounded-l-lg bg-white flex-col "+g[2])&&f(I,"class",F)},i:L,o:L,d(g){g&&d(e),Y(y,g),W=!1,Z()}}}function ye(i,e,t){let{subpages:s}=e,n=!1,a="translate-x-full hidden";function l(){n?(t(2,a="translate-x-full"),window.setTimeout(function(){t(2,a+=" hidden")},300)):(t(2,a="translate-x-full"),window.setTimeout(function(){t(2,a="translate-x-0")},1)),t(1,n=!n)}return i.$$set=o=>{"subpages"in o&&t(0,s=o.subpages)},[s,n,a,l]}class $e extends O{constructor(e){super(),T(this,e,ye,be,z,{subpages:0})}}function ke(i){let e,t,s,n,a,l,o,r,u;return l=new ge({props:{subpages:i[0]}}),r=new $e({props:{subpages:i[0]}}),{c(){e=v("header"),t=v("div"),s=v("a"),n=H("pop it.com"),a=k(),R(l.$$.fragment),o=k(),R(r.$$.fragment),this.h()},l(c){e=m(c,"HEADER",{class:!0});var p=_(e);t=m(p,"DIV",{class:!0});var x=_(t);s=m(x,"A",{href:!0,id:!0,rel:!0,class:!0});var V=_(s);n=P(V,"pop it.com"),V.forEach(d),x.forEach(d),a=w(p),G(l.$$.fragment,p),o=w(p),G(r.$$.fragment,p),p.forEach(d),this.h()},h(){f(s,"href",E+"/."),f(s,"id","logo"),f(s,"rel","home"),f(s,"class","transition-all hover:drop-shadow hover:inline-block hover:-translate-x-[1px] hover:-translate-y-[1px] "),f(t,"class","logo h-full my-auto "),f(e,"class","flex flex-row justify-between m-0 px-8 py-4 align-middle uppercase font-semibold bg-primary sticky top-0 z-10 text-lg ")},m(c,p){A(c,e,p),h(e,t),h(t,s),h(s,n),h(e,a),J(l,e,null),h(e,o),J(r,e,null),u=!0},p:L,i(c){u||(C(l.$$.fragment,c),C(r.$$.fragment,c),u=!0)},o(c){j(l.$$.fragment,c),j(r.$$.fragment,c),u=!1},d(c){c&&d(e),K(l),K(r)}}}function we(i){B(()=>{ve.subscribe(s=>{const n=document.querySelector("nav");if(!n)return;n.querySelectorAll("a").forEach(l=>{l.id===String(s)?l.classList.add("active"):l.classList.remove("active")})})});const e=[{id:"about",name:"about it!",href:{base:E}+"/about"},{id:"shop",name:"shop it!",href:{base:E}+"/shop"},{id:"contact",name:"contact it!",href:{base:E}+"/contact"}],t=[{key:"blue",value:"#3b82f6"},{key:"red",value:"#ef4444"},{key:"green",value:"#10b981"},{key:"purple",value:"#8b5cf6"},{key:"pink",value:"#ec4899"},{key:"indigo",value:"#6366f1"},{key:"cyan",value:"#22d3ee"}];return B(()=>{const s=document.getElementById("logo");s&&(s.addEventListener("mouseenter",()=>{const n=t[Math.floor(Math.random()*t.length)];s.style.color=n.value}),s.addEventListener("mouseleave",()=>{s.style.color=""}))}),[e]}class xe extends O{constructor(e){super(),T(this,e,we,ke,z,{})}}function oe(i,e,t){const s=i.slice();return s[2]=e[t],s}function ie(i){let e,t,s=i[2].name+"",n,a;return{c(){e=v("li"),t=v("a"),n=H(s),a=k(),this.h()},l(l){e=m(l,"LI",{class:!0});var o=_(e);t=m(o,"A",{href:!0,class:!0});var r=_(t);n=P(r,s),r.forEach(d),a=w(o),o.forEach(d),this.h()},h(){f(t,"href",i[2].href),f(t,"class","text-white "),f(e,"class","m-auto my-2 first:font-semibold transition-all hover:drop-shadow-[2px_2px_2px_rgba(255,255,255,0.3)] hover:inline-block hover:-translate-x-[1px] hover:-translate-y-[1px] ")},m(l,o){A(l,e,o),h(e,t),h(t,n),h(e,a)},p:L,d(l){l&&d(e)}}}function Ee(i){let e,t,s,n=i[0],a=[];for(let l=0;l<n.length;l+=1)a[l]=ie(oe(i,n,l));return{c(){e=v("footer"),t=v("nav"),s=v("ul");for(let l=0;l<a.length;l+=1)a[l].c();this.h()},l(l){e=m(l,"FOOTER",{class:!0});var o=_(e);t=m(o,"NAV",{class:!0});var r=_(t);s=m(r,"UL",{class:!0});var u=_(s);for(let c=0;c<a.length;c+=1)a[c].l(u);u.forEach(d),r.forEach(d),o.forEach(d),this.h()},h(){f(s,"class","flex w-full mx-auto my-2 justify-around align-middle flex-col sm:flex-row"),f(t,"class","flex m-0 p-0 w-full"),f(e,"class","mt-auto w-full bg-zinc-700 text-white text-sm capitalize")},m(l,o){A(l,e,o),h(e,t),h(t,s);for(let r=0;r<a.length;r+=1)a[r].m(s,null)},p(l,[o]){if(o&1){n=l[0];let r;for(r=0;r<n.length;r+=1){const u=oe(l,n,r);a[r]?a[r].p(u,o):(a[r]=ie(u),a[r].c(),a[r].m(s,null))}for(;r<a.length;r+=1)a[r].d(1);a.length=n.length}},i:L,o:L,d(l){l&&d(e),Y(a,l)}}}function Le(i){const e=[{id:"home",name:"pop it!",href:{base:E}+"/."},{id:"about",name:"about it!",href:{base:E}+"/about"},{id:"shop",name:"shop it!",href:{base:E}+"/shop"},{id:"contact",name:"contact it!",href:{base:E}+"/contact"}],t=[{key:"blue",value:"#3b82f6"},{key:"red",value:"#ef4444"},{key:"green",value:"#10b981"},{key:"purple",value:"#8b5cf6"},{key:"pink",value:"#ec4899"},{key:"indigo",value:"#6366f1"},{key:"cyan",value:"#22d3ee"}];return B(()=>{document.querySelectorAll("nav a").forEach(n=>{n.addEventListener("mouseenter",()=>{const a=t[Math.floor(Math.random()*t.length)];n.style.color=a.value}),n.addEventListener("mouseleave",()=>{n.style.color=""})})}),[e]}class Ae extends O{constructor(e){super(),T(this,e,Le,Ee,z,{})}}function Se(i){let e,t,s,n,a,l,o;t=new xe({});const r=i[4].default,u=fe(r,i,i[3],null);return l=new Ae({}),{c(){e=v("div"),R(t.$$.fragment),s=k(),u&&u.c(),n=k(),a=v("div"),R(l.$$.fragment),this.h()},l(c){e=m(c,"DIV",{class:!0});var p=_(e);G(t.$$.fragment,p),s=w(p),u&&u.l(p),n=w(p),a=m(p,"DIV",{id:!0,class:!0});var x=_(a);G(l.$$.fragment,x),x.forEach(d),p.forEach(d),this.h()},h(){f(a,"id","footer"),f(a,"class","parallax__group h-10 svelte-jvibcw"),f(e,"class","parallax svelte-jvibcw")},m(c,p){A(c,e,p),J(t,e,null),h(e,s),u&&u.m(e,null),h(e,n),h(e,a),J(l,a,null),o=!0},p(c,[p]){u&&u.p&&(!o||p&8)&&he(u,r,c,c[3],o?pe(r,c[3],p,null):de(c[3]),null)},i(c){o||(C(t.$$.fragment,c),C(u,c),C(l.$$.fragment,c),o=!0)},o(c){j(t.$$.fragment,c),j(u,c),j(l.$$.fragment,c),o=!1},d(c){c&&d(e),K(t),u&&u.d(c),K(l)}}}function Ie(i,e,t){let{$$slots:s={},$$scope:n}=e;const a=!0,l="ignore",o=!1;return i.$$set=r=>{"$$scope"in r&&t(3,n=r.$$scope)},[a,l,o,n,s]}class Me extends O{constructor(e){super(),T(this,e,Ie,Se,z,{prerender:0,trailingSlash:1,ssr:2})}get prerender(){return this.$$.ctx[0]}get trailingSlash(){return this.$$.ctx[1]}get ssr(){return this.$$.ctx[2]}}export{Me as default};
