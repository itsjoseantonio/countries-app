(this["webpackJsonpcountries-app"]=this["webpackJsonpcountries-app"]||[]).push([[0],{13:function(e,t,n){e.exports={main:"Single_main__3VLL-",main__back:"Single_main__back__3BSVM",content:"Single_content__3iMnw",content__image:"Single_content__image__1JQBH",content__info:"Single_content__info__2oPqG",content__info__borders:"Single_content__info__borders__3E9RD"}},17:function(e,t,n){e.exports={main:"Home_main__1f1R5",controls:"Home_controls__29ezu",flagsGrid:"Home_flagsGrid__3GhdM",lazyload:"Home_lazyload__1JrkO"}},23:function(e,t,n){e.exports={flagItem:"FlagItem_flagItem__2PqWC",flagItem__image:"FlagItem_flagItem__image__1UlYL",flagItem__text:"FlagItem_flagItem__text__1ihWL"}},27:function(e,t,n){e.exports={header:"Header_header__mnEN0",header__inner:"Header_header__inner__2P7z3"}},40:function(e,t,n){e.exports={searchBox:"SearchBox_searchBox__1mTj5"}},41:function(e,t,n){e.exports={container:"Container_container__pZK2z"}},42:function(e,t,n){e.exports={seletFilter:"SelectFilter_seletFilter__1ssPl"}},43:function(e,t,n){e.exports={loader:"Loader_loader__3zO0z",rotate:"Loader_rotate__2UNGs"}},46:function(e,t,n){e.exports={backButton:"BackButton_backButton__1VFNC"}},47:function(e,t,n){e.exports={switch:"SwitchMode_switch__nQk6e"}},52:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(38),r=n.n(s),i=(n(52),n(14)),o=n(3),l=n(15),j=n.n(l),m=n(21),d=n(11),u=n(22),h=n.n(u),b=n(39),_=n.n(b),x=n(9),O=n(10),g=n(40),p=n.n(g),f=n(0),v=function(e){var t=e.name,n=e.setName;return Object(f.jsxs)("div",{className:p.a.searchBox,children:[Object(f.jsx)("input",{value:t,type:"text",id:"search",name:"search",placeholder:"Search for a country...",onChange:function(e){return t=e.target.value,n(t),void console.log(t);var t}}),Object(f.jsx)(x.a,{icon:O.d})]})},N=n(41),S=n.n(N),I=function(e){var t=e.children;return Object(f.jsx)("div",{className:S.a.container,children:t})},k=n(42),B=n.n(k),y=function(e){var t=e.region,n=e.setRegion;return Object(f.jsxs)("div",{className:B.a.seletFilter,children:[Object(f.jsxs)("select",{value:t,onChange:function(e){return t=e.target.value,n(t),void console.log(t);var t},children:[Object(f.jsx)("option",{value:"",children:"Fylter by Region"}),Object(f.jsx)("option",{value:"africa",children:"Africa"}),Object(f.jsx)("option",{value:"ame",children:"America"}),Object(f.jsx)("option",{value:"asia",children:"Asia"}),Object(f.jsx)("option",{value:"europe",children:"Europe"}),Object(f.jsx)("option",{value:"oceania",children:"Oceania"})]}),Object(f.jsx)(x.a,{icon:O.a})]})},L=n(23),T=n.n(L),w=function(e){var t=e.flag,n=e.name,c=e.population,a=e.region,s=e.capital;return Object(f.jsxs)("div",{className:T.a.flagItem,children:[Object(f.jsx)("div",{className:T.a.flagItem__image,children:Object(f.jsx)("img",{src:t,alt:n})}),Object(f.jsxs)("div",{className:T.a.flagItem__text,children:[Object(f.jsx)("h2",{children:n}),Object(f.jsxs)("ul",{children:[Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{children:"Population:"})," ",c]}),Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{children:"Region:"})," ",a]}),Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{children:"Capital:"})," ",s]})]})]})]})},E=n(43),H=n.n(E),M=function(){return Object(f.jsx)("div",{className:H.a.loader})},C=n(17),F=n.n(C),z=function(){var e=Object(c.useState)(null),t=Object(d.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(d.a)(s,2),o=r[0],l=r[1],u=Object(c.useState)(""),b=Object(d.a)(u,2),x=b[0],O=b[1],g=Object(c.useState)(!1),p=Object(d.a)(g,2),N=p[0],S=p[1];Object(c.useEffect)((function(){var e=setTimeout((function(){k()}),500);return function(){return clearTimeout(e)}}),[o,x]);var k=function(){var e=Object(m.a)(j.a.mark((function e(){var t,n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://restcountries.com/v3.1/all",o&&(t="https://restcountries.com/v3.1/region/".concat(o)),x&&(t="https://restcountries.com/v3.1/name/".concat(x)),S(!0),e.prev=4,e.next=7,h.a.get(t);case 7:n=e.sent,c=n.data,a(c),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:S(!1);case 16:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(){return e.apply(this,arguments)}}();return Object(f.jsx)("main",{className:F.a.main,children:Object(f.jsxs)(I,{children:[Object(f.jsxs)("div",{className:F.a.controls,children:[Object(f.jsx)(v,{name:x,setName:O}),Object(f.jsx)(y,{region:o,setRegion:l})]}),Object(f.jsxs)("div",{className:F.a.flagsGrid,children:[n&&n.map((function(e,t){var n=e.flags,c=e.name,a=e.population,s=e.region,r=e.capital;return Object(f.jsx)(_.a,{className:F.a.lazyload,children:Object(f.jsx)(i.b,{to:"/".concat(c.common),children:Object(f.jsx)(w,{flag:n.png,name:c.common,population:a,region:s,capital:r})})},t)})),N&&Object(f.jsx)(M,{})]})]})})},A=n(46),R=n.n(A),G=function(){return Object(f.jsxs)("span",{className:R.a.backButton,children:[Object(f.jsx)(x.a,{icon:O.b}),"Back"]})},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"https://restcountries.com/v3.1/all",t=Object(c.useState)(null),n=Object(d.a)(t,2),a=n[0],s=n[1];Object(c.useEffect)((function(){r(e)}),[e]);var r=function(){var t=Object(m.a)(j.a.mark((function t(){var n,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.get(e);case 3:n=t.sent,c=n.data,s(c),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return{data:a,getData:r}},D=n(13),J=n.n(D),W=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=P("https://restcountries.com/v3.1/name/".concat(e));return t}(Object(o.f)().name),t=e.data;return Object(f.jsx)("main",{className:J.a.main,children:Object(f.jsxs)(I,{children:[Object(f.jsx)("div",{className:J.a.main__back,children:Object(f.jsx)(i.b,{to:"/",children:Object(f.jsx)(G,{})})}),t&&Object(f.jsxs)("div",{className:J.a.content,children:[Object(f.jsx)("div",{className:J.a.content__image,children:Object(f.jsx)("img",{src:t[0].flags.svg,alt:t[0].name.common})}),Object(f.jsxs)("div",{className:J.a.content__info,children:[Object(f.jsx)("h2",{children:t[0].name.common}),Object(f.jsxs)("ul",{children:[Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{children:"Native name: "}),t[0].name.common]}),Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{children:"Population: "}),t[0].population]}),Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{children:"Region: "})," ",t[0].name.common]}),Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{children:"Sub Region: "})," ",t[0].region]}),Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{children:"Capital: "})," ",t[0].capital[0]]}),Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{children:"Top Level Domain: "}),t[0].tld[0]]}),Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{children:"Currencies: "}),t[0].name.common]}),Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{children:"Languages: "}),t[0].name.common]})]}),Object(f.jsx)("div",{className:J.a.content__info__borders,children:Object(f.jsxs)("p",{children:["Borders:"," ",t[0].borders.map((function(e,t){return Object(f.jsx)("span",{children:e},t)}))]})})]})]})]})})},V=n(47),q=n.n(V),Q=function(){var e=Object(c.useState)("dark"===localStorage.getItem("theme")),t=Object(d.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){null===localStorage.getItem("theme")&&(document.getElementsByTagName("HTML")[0].setAttribute("data-theme","light"),localStorage.setItem("theme","light")),document.getElementsByTagName("HTML")[0].setAttribute("data-theme",localStorage.getItem("theme"))}),[]);return Object(f.jsxs)("span",{className:q.a.switch,onClick:function(){!1===n?(localStorage.setItem("theme","dark"),document.getElementsByTagName("HTML")[0].setAttribute("data-theme",localStorage.getItem("theme")),a(!0)):(localStorage.setItem("theme","light"),document.getElementsByTagName("HTML")[0].setAttribute("data-theme",localStorage.getItem("theme")),a(!1))},children:[n?Object(f.jsx)(x.a,{icon:O.e}):Object(f.jsx)(x.a,{icon:O.c}),n?"Light":"Dark"," Mode"]})},U=n(27),K=n.n(U),Y=function(){return Object(f.jsx)("header",{className:K.a.header,children:Object(f.jsx)(I,{children:Object(f.jsxs)("div",{className:K.a.header__inner,children:[Object(f.jsx)("h1",{children:"Where in the World?"}),Object(f.jsx)(Q,{})]})})})};var Z=function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(Y,{}),Object(f.jsx)(i.a,{children:Object(f.jsxs)(o.c,{children:[Object(f.jsx)(o.a,{path:"/:name",children:Object(f.jsx)(W,{})}),Object(f.jsx)(o.a,{path:"/",children:Object(f.jsx)(z,{})})]})})]})};r.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(Z,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.0649dad6.chunk.js.map