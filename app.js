(function(n){function e(e){for(var c,u,o=e[0],d=e[1],h=e[2],i=0,l=[];i<o.length;i++)u=o[i],r[u]&&l.push(r[u][0]),r[u]=0;for(c in d)Object.prototype.hasOwnProperty.call(d,c)&&(n[c]=d[c]);f&&f(e);while(l.length)l.shift()();return a.push.apply(a,h||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],c=!0,u=1;u<t.length;u++){var o=t[u];0!==r[o]&&(c=!1)}c&&(a.splice(e--,1),n=d(d.s=t[0]))}return n}var c={},u={app:0},r={app:0},a=[];function o(n){return d.p+""+({}[n]||n)+".js"}function d(e){if(c[e])return c[e].exports;var t=c[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(n){var e=[],t={"chunk-0fdac56a":1,"chunk-1c768654":1,"chunk-13c5d368":1,"chunk-22372876":1,"chunk-481a8b7b":1,"chunk-62fafca8":1,"chunk-85b1386a":1,"chunk-a9e940c8":1,"chunk-aaaa6da8":1,"chunk-be54378c":1};u[n]?e.push(u[n]):0!==u[n]&&t[n]&&e.push(u[n]=new Promise(function(e,t){for(var c="css/"+({}[n]||n)+"."+{"chunk-0fdac56a":"2000097e","chunk-1c768654":"35318067","chunk-13c5d368":"925c37f8","chunk-22372876":"64419124","chunk-2d0a400c":"31d6cfe0","chunk-2d0a443e":"31d6cfe0","chunk-2d0ab2eb":"31d6cfe0","chunk-2d0ae5e6":"31d6cfe0","chunk-2d0ae943":"31d6cfe0","chunk-2d0b1bf6":"31d6cfe0","chunk-2d0b59e9":"31d6cfe0","chunk-2d0ba708":"31d6cfe0","chunk-2d0aab88":"31d6cfe0","chunk-2d0c4303":"31d6cfe0","chunk-2d0d3e27":"31d6cfe0","chunk-2d0de2d9":"31d6cfe0","chunk-2d0de6aa":"31d6cfe0","chunk-2d0e1d93":"31d6cfe0","chunk-2d0e8c24":"31d6cfe0","chunk-2d0f06bd":"31d6cfe0","chunk-2d208124":"31d6cfe0","chunk-2d2131a8":"31d6cfe0","chunk-2d21444c":"31d6cfe0","chunk-2d2183eb":"31d6cfe0","chunk-2d21e6d0":"31d6cfe0","chunk-2d21eae7":"31d6cfe0","chunk-2d222779":"31d6cfe0","chunk-2d224eb7":"31d6cfe0","chunk-2d226319":"31d6cfe0","chunk-2d22c303":"31d6cfe0","chunk-2d22cad1":"31d6cfe0","chunk-2d22d610":"31d6cfe0","chunk-2d23777b":"31d6cfe0","chunk-4038307e":"31d6cfe0","chunk-40f4cc33":"31d6cfe0","chunk-2d0f0c1b":"31d6cfe0","chunk-481a8b7b":"4c1bce48","chunk-62fafca8":"fa2e52eb","chunk-9a9e7fd4":"31d6cfe0","chunk-2d0d093a":"31d6cfe0","chunk-85b1386a":"f4cbd52d","chunk-c7051a8e":"31d6cfe0","chunk-a9e940c8":"5413d9a1","chunk-aaaa6da8":"41c3f70c","chunk-be54378c":"6fb0ef0d","chunk-c6d001ea":"31d6cfe0"}[n]+".css",r=d.p+c,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var h=a[o],i=h.getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(i===c||i===r))return e()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){h=l[o],i=h.getAttribute("data-href");if(i===c||i===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var c=e&&e.target&&e.target.src||r,a=new Error("Loading CSS chunk "+n+" failed.\n("+c+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=c,delete u[n],f.parentNode.removeChild(f),t(a)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){u[n]=0}));var c=r[n];if(0!==c)if(c)e.push(c[2]);else{var a=new Promise(function(e,t){c=r[n]=[e,t]});e.push(c[2]=a);var h,i=document.createElement("script");i.charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.src=o(n),h=function(e){i.onerror=i.onload=null,clearTimeout(l);var t=r[n];if(0!==t){if(t){var c=e&&("load"===e.type?"missing":e.type),u=e&&e.target&&e.target.src,a=new Error("Loading chunk "+n+" failed.\n("+c+": "+u+")");a.type=c,a.request=u,t[1](a)}r[n]=void 0}};var l=setTimeout(function(){h({type:"timeout",target:i})},12e4);i.onerror=i.onload=h,document.head.appendChild(i)}return Promise.all(e)},d.m=n,d.c=c,d.d=function(n,e,t){d.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},d.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},d.t=function(n,e){if(1&e&&(n=d(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var c in n)d.d(t,c,function(e){return n[e]}.bind(null,c));return t},d.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return d.d(e,"a",e),e},d.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},d.p="/coreui-free-vue-admin-template/",d.oe=function(n){throw console.error(n),n};var h=window["webpackJsonp"]=window["webpackJsonp"]||[],i=h.push.bind(h);h.push=e,h=h.slice();for(var l=0;l<h.length;l++)e(h[l]);var f=i;a.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"56d7":function(n,e,t){"use strict";t.r(e);t("cadf"),t("551c"),t("f751"),t("097d"),t("f466"),t("579f"),t("587a");var c=t("a026"),u=t("9f7b"),r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("router-view")},a=[],o={name:"app"},d=o,h=(t("5c0b"),t("2877")),i=Object(h["a"])(d,r,a,!1,null,null,null),l=i.exports,f=t("8c4f"),p=function(){return Promise.all([t.e("chunk-40f4cc33"),t.e("chunk-481a8b7b")]).then(t.bind(null,"e8c5"))},s=function(){return t.e("chunk-2d22cad1").then(t.bind(null,"f3f4"))},m=function(){return Promise.all([t.e("chunk-9a9e7fd4"),t.e("chunk-40f4cc33"),t.e("chunk-2d0ba708"),t.e("chunk-0fdac56a"),t.e("chunk-85b1386a")]).then(t.bind(null,"7277"))},b=function(){return t.e("chunk-22372876").then(t.bind(null,"6950"))},k=function(){return Promise.all([t.e("chunk-0fdac56a"),t.e("chunk-1c768654")]).then(t.bind(null,"3e0d"))},g=function(){return Promise.all([t.e("chunk-2d0ba708"),t.e("chunk-2d0aab88")]).then(t.bind(null,"11e7"))},v=function(){return t.e("chunk-2d0de2d9").then(t.bind(null,"8517"))},w=function(){return Promise.all([t.e("chunk-9a9e7fd4"),t.e("chunk-2d0ba708"),t.e("chunk-2d0d093a")]).then(t.bind(null,"6923"))},y=function(){return Promise.all([t.e("chunk-9a9e7fd4"),t.e("chunk-c7051a8e")]).then(t.bind(null,"37cc"))},P=function(){return t.e("chunk-62fafca8").then(t.bind(null,"1292"))},B=function(){return t.e("chunk-13c5d368").then(t.bind(null,"da19"))},C=function(){return Promise.all([t.e("chunk-40f4cc33"),t.e("chunk-2d0f0c1b")]).then(t.bind(null,"9e70"))},S=function(){return t.e("chunk-c6d001ea").then(t.bind(null,"2dc9"))},T=function(){return t.e("chunk-2d22d610").then(t.bind(null,"f6f0"))},j=function(){return t.e("chunk-2d224eb7").then(t.bind(null,"e1d9"))},A=function(){return t.e("chunk-2d0b1bf6").then(t.bind(null,"20bd"))},O=function(){return t.e("chunk-2d0ae943").then(t.bind(null,"0b50"))},_=function(){return t.e("chunk-2d208124").then(t.bind(null,"a2da"))},E=function(){return t.e("chunk-2d0a443e").then(t.bind(null,"0668"))},x=function(){return t.e("chunk-2d21eae7").then(t.bind(null,"d731"))},L=function(){return t.e("chunk-2d0de6aa").then(t.bind(null,"860f"))},N=function(){return t.e("chunk-2d0ab2eb").then(t.bind(null,"13d7"))},D=function(){return t.e("chunk-2d0d3e27").then(t.bind(null,"5f55"))},I=function(){return t.e("chunk-2d0f06bd").then(t.bind(null,"9bfd"))},M=function(){return t.e("chunk-2d21444c").then(t.bind(null,"afe6"))},U=function(){return t.e("chunk-aaaa6da8").then(t.bind(null,"c3fc"))},F=function(){return t.e("chunk-2d222779").then(t.bind(null,"cf77"))},J=function(){return t.e("chunk-2d2183eb").then(t.bind(null,"c9ba"))},q=function(){return t.e("chunk-a9e940c8").then(t.bind(null,"261a"))},G=function(){return t.e("chunk-2d0a400c").then(t.bind(null,"051b"))},H=function(){return t.e("chunk-2d21e6d0").then(t.bind(null,"d608"))},K=function(){return t.e("chunk-2d0e1d93").then(t.bind(null,"7bd6"))},R=function(){return t.e("chunk-2d0ae5e6").then(t.bind(null,"0a87"))},W=function(){return t.e("chunk-2d226319").then(t.bind(null,"e82b"))},$=function(){return t.e("chunk-2d0b59e9").then(t.bind(null,"1a58"))},z=function(){return t.e("chunk-2d23777b").then(t.bind(null,"faf0"))},Q=function(){return t.e("chunk-2d0c4303").then(t.bind(null,"3a87"))},V=function(){return t.e("chunk-2d22c303").then(t.bind(null,"f1bd"))},X=function(){return t.e("chunk-2d0e8c24").then(t.bind(null,"8b48"))},Y=function(){return t.e("chunk-2d2131a8").then(t.bind(null,"aaf8"))},Z=function(){return t.e("chunk-be54378c").then(t.bind(null,"dc02"))},nn=function(){return t.e("chunk-4038307e").then(t.bind(null,"eeca"))};c["default"].use(f["a"]);var en=new f["a"]({mode:"hash",linkActiveClass:"open active",scrollBehavior:function(){return{y:0}},routes:[{path:"/onpage",name:"small-iframe",component:s,children:[{path:"/onpage",component:k}]},{path:"/",redirect:"/dashboard",name:"Home",component:p,children:[{path:"dashboard",name:"Dashboard",component:m},{path:"leaderboard",name:"Leaderboard",component:b},{path:"theme",redirect:"/theme/colors",name:"Theme",component:{render:function(n){return n("router-view")}},children:[{path:"colors",name:"Colors",component:g},{path:"typography",name:"Typography",component:v}]},{path:"charts",name:"Charts",component:w},{path:"widgets",name:"Widgets",component:y},{path:"users",meta:{label:"Users"},component:{render:function(n){return n("router-view")}},children:[{path:"",component:Z},{path:":id",meta:{label:"User Details"},name:"User",component:nn}]},{path:"base",redirect:"/base/cards",name:"Base",component:{render:function(n){return n("router-view")}},children:[{path:"cards",name:"Cards",component:P},{path:"forms",name:"Forms",component:B},{path:"switches",name:"Switches",component:C},{path:"tables",name:"Tables",component:S},{path:"tabs",name:"Tabs",component:T},{path:"breadcrumbs",name:"Breadcrumbs",component:j},{path:"carousels",name:"Carousels",component:A},{path:"collapses",name:"Collapses",component:O},{path:"jumbotrons",name:"Jumbotrons",component:_},{path:"list-groups",name:"List Groups",component:E},{path:"navs",name:"Navs",component:x},{path:"navbars",name:"Navbars",component:L},{path:"paginations",name:"Paginations",component:N},{path:"popovers",name:"Popovers",component:D},{path:"progress-bars",name:"Progress Bars",component:I},{path:"tooltips",name:"Tooltips",component:M}]},{path:"buttons",redirect:"/buttons/standard-buttons",name:"Buttons",component:{render:function(n){return n("router-view")}},children:[{path:"standard-buttons",name:"Standard Buttons",component:U},{path:"button-groups",name:"Button Groups",component:F},{path:"dropdowns",name:"Dropdowns",component:J},{path:"brand-buttons",name:"Brand Buttons",component:q}]},{path:"icons",redirect:"/icons/font-awesome",name:"Icons",component:{render:function(n){return n("router-view")}},children:[{path:"coreui-icons",name:"CoreUI Icons",component:R},{path:"flags",name:"Flags",component:G},{path:"font-awesome",name:"Font Awesome",component:H},{path:"simple-line-icons",name:"Simple Line Icons",component:K}]},{path:"notifications",redirect:"/notifications/alerts",name:"Notifications",component:{render:function(n){return n("router-view")}},children:[{path:"alerts",name:"Alerts",component:W},{path:"badges",name:"Badges",component:$},{path:"modals",name:"Modals",component:z}]}]},{path:"/pages",redirect:"/pages/404",name:"Pages",component:{render:function(n){return n("router-view")}},children:[{path:"404",name:"Page404",component:Q},{path:"500",name:"Page500",component:V},{path:"login",name:"Login",component:X},{path:"register",name:"Register",component:Y}]}]}),tn=t("ce5b"),cn=t.n(tn);t("bf40");c["default"].use(cn.a),c["default"].use(u["a"]),new c["default"]({el:"#app",router:en,template:"<App/>",components:{App:l}})},"5c0b":function(n,e,t){"use strict";var c=t("5e27"),u=t.n(c);u.a},"5e27":function(n,e,t){}});