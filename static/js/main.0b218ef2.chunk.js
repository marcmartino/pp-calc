(this["webpackJsonppp-calc"]=this["webpackJsonppp-calc"]||[]).push([[0],{16:function(e,t,r){},18:function(e,t,r){"use strict";r.r(t);var s=r(0),i=r(7),c=r.n(i),n=(r(16),r(2)),a=r(5),l=r(4),o=Object(l.a)({maxMultiplier:Object(l.b)({pp:l.c.query.optional.number},(function(){return"/maxMult"})),requiredPP:Object(l.b)({lvl:l.c.query.optional.number,mult:l.c.query.optional.number},(function(){return"/requiredPP"}))}),m=o.RouteProvider,d=o.useRoute,u=o.routes,j=r(10),x=r(1),b="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium",p="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",h="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium",g="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",O=function(e){var t=e.children,r=d();return Object(x.jsxs)("div",{children:[Object(x.jsx)(a.a,{as:"nav",className:"bg-gray-800",children:function(e){var t=e.open;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:Object(x.jsxs)("div",{className:"flex items-center justify-between h-16",children:[Object(x.jsxs)("div",{className:"flex items-center",children:[Object(x.jsx)("div",{className:"flex-shrink-0",children:Object(x.jsx)("img",{className:"h-8 w-8",src:"/prest.png",alt:"PP"})}),Object(x.jsx)("div",{className:"hidden md:block",children:Object(x.jsxs)("div",{className:"ml-10 flex items-baseline space-x-4",children:[Object(x.jsx)("a",Object(n.a)(Object(n.a)({},u.maxMultiplier().link),{},{className:"maxMultiplier"===r.name?b:p,children:"Max Multiplier"})),Object(x.jsx)("a",Object(n.a)(Object(n.a)({},u.requiredPP().link),{},{className:"requiredPP"===r.name?b:p,children:"Required PP"}))]})})]}),Object(x.jsx)("div",{className:"-mr-2 flex md:hidden",children:Object(x.jsxs)(a.a.Button,{className:"bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",children:[Object(x.jsx)("span",{className:"sr-only",children:"Open main menu"}),t?Object(x.jsx)(j.b,{className:"block h-6 w-6","aria-hidden":"true"}):Object(x.jsx)(j.a,{className:"block h-6 w-6","aria-hidden":"true"})]})})]})}),Object(x.jsx)(a.a.Panel,{className:"md:hidden",children:Object(x.jsxs)("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:[Object(x.jsx)(a.a.Button,Object(n.a)(Object(n.a)({as:"a"},u.maxMultiplier().link),{},{className:"maxMultiplier"===r.name?h:g,"aria-controls":"nav",children:"Max Multiplier"})),Object(x.jsx)(a.a.Button,Object(n.a)(Object(n.a)({as:"a"},u.requiredPP().link),{},{className:"requiredPP"===r.name?h:g,children:"Required PP"}))]})})]})}}),Object(x.jsx)("header",{className:"bg-white shadow",children:Object(x.jsx)("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:Object(x.jsx)("h1",{className:"text-3xl font-bold text-gray-900",children:"maxMultiplier"===r.name?"Max Multiplier":"Required PP"})})}),Object(x.jsx)("main",{children:Object(x.jsx)("div",{className:"max-w-7xl mx-auto py-6 sm:px-6 lg:px-8",children:t})})]})},f=r(3),v=r(11),y={1:12e3,2:56e3,3:144e3,4:288e3,5:5e5,6:792e3,7:1176e3,8:1664e3,9:2268e3,10:3e6,11:3872e3,12:4896e3,13:6084e3,14:7448e3,15:9e6,16:10752e3,17:12716e3,18:14904e3,19:17328e3,20:2e7,21:22932e3,22:26136e3,23:29624e3,24:33408e3,25:375e5,26:41912e3,27:46656e3,28:51744e3,29:57188e3,30:63e6,31:69192e3,32:75776e3,33:82764e3,34:90168e3,35:98e6,36:106272e3,37:114996e3,38:124184e3,39:133848e3,40:144e6,41:154652e3,42:165816e3,43:177504e3,44:189728e3,45:2025e5,46:215832e3,47:229736e3,48:244224e3,49:259308e3,50:275e6},N=[[5,{qty:0,cost:10,multPerPrest:.5}],[15,{qty:0,cost:50,multPerPrest:.3}],[30,{qty:0,cost:250,multPerPrest:.12}],[50,{qty:0,cost:750,multPerPrest:50/750}],[100,{qty:0,cost:2500,multPerPrest:.04}]],P={5:0,15:1,30:2,50:3,100:4},w=function(e){return e.reduce((function(e,t){return e[1].multPerPrest>=t[1].multPerPrest?e:t}))},q=function(e){return function(t){var r=Object(v.a)(t),s=t[P[e]],i=s[1].cost+N[P[e]][1].cost;return r[P[e]]=[s[0],{qty:t[P[e]][1].qty+1,cost:i,multPerPrest:e/i}],r}},k=function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N;if(t<=100)return{prestige:r,multipliers:s};var i=w(s);return e(t-i[0],r+i[1].cost)(q(i[0])(s))}},M=function(e){return t=function(t){return void 0!==t&&t[1].cost<=e},r=function(e,t){return e[1].multPerPrest>=t[1].multPerPrest?e:t},function(e){return e.reduce((function(e,s){return t(s)?t(e)?r(e,s):s:e}),void 0)};var t,r},S=function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:N,s=M(t)(r);if(s){var i=e(t-s[1].cost,q(s[0])(r));return[{multiplier:s[0]+i[0].multiplier,remainingPrest:i[0].remainingPrest},i[1]]}return[{multiplier:100,remainingPrest:t},r]},R=function(e){return e.toString().length-1},F="\ud83d\udca0",B=function(e){var t=e.multipliers;return Object(x.jsx)("dl",{children:t.map((function(e,t){var r=Object(f.a)(e,2),s=r[0],i=r[1],c=i.qty;i.cost;return Object(x.jsxs)("div",{className:(t%2?"bg-gray-50":"bg-white")+" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:[Object(x.jsxs)("dt",{className:"text-sm font-medium text-gray-500",children:[s,"% Multiplier"]}),Object(x.jsx)("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:c})]},"".concat(t,"-").concat(s))}))})},E=function(e){var t=e.route,r=null===t||void 0===t?void 0:t.params.pp,i=Object(s.useState)(r||0),c=Object(f.a)(i,2),a=c[0],l=c[1];Object(s.useEffect)((function(){u.maxMultiplier({pp:a}).replace()}),[a]);var o,m=S(a<=3e8?a:0),d=Object(f.a)(m,2),j=d[0],b=j.multiplier,p=j.remainingPrest,h=d[1];return console.table(h.map((function(e){var t=Object(f.a)(e,2),r=t[0],s=t[1];return Object(n.a)(Object(n.a)({},s),{},{m:r})}))),Object(x.jsx)("form",{children:Object(x.jsxs)("div",{className:"bg-white shadow overflow-hidden sm:rounded-lg",children:[Object(x.jsxs)("div",{className:"px-4 py-5 sm:px-4",children:[Object(x.jsx)("div",{className:"border-b border-gray-200",children:Object(x.jsxs)("h3",{children:[Object(x.jsx)("label",{htmlFor:"startingPrestige",className:"block text-sm font-medium text-gray-700",children:"Starting Prestige"}),Object(x.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[Object(x.jsx)("div",{className:"absolute inset-y-0 left-0 pl-1 flex items-center pointer-events-none",children:Object(x.jsx)("span",{className:"text-gray-500 sm:text-sm",children:F})}),Object(x.jsx)("input",{type:"text",name:"startingPrestige",id:"startingPrestige",className:"focus:ring-indigo-500 focus:border-indigo-500 block w-full p-1 pl-7 pr-12 sm:text-md border-gray-300 rounded-md",placeholder:"Enter Prestige",value:a||"",onChange:function(e){var t=Number(e.target.value);!isNaN(t)&&t>-1&&l(Number(e.target.value))}})]})]})}),Object(x.jsxs)("div",{className:"mt-1 max-w-2xl text-sm text-gray-500",children:[Object(x.jsxs)("div",{className:"flex flex-row justify-between",children:[Object(x.jsxs)("span",{children:["Remaining Prestige: ",p.toLocaleString(),F]}),a>0&&Object(x.jsxs)("span",{children:[(o=a,o.toString().length*o.toString().length),"\ud83e\ude99"]})]}),Object(x.jsxs)("div",{className:"flex flex-row justify-between",children:[Object(x.jsxs)("span",{children:["TotalPrestige Multiplier: ",(b/100).toFixed(2),"x","\ud83d\udcb9"]}),a>0&&Object(x.jsxs)("span",{children:[R(a),"\ud83d\udcbc"]})]})]})]}),Object(x.jsx)("div",{className:"border-t border-gray-200",children:Object(x.jsx)(B,{multipliers:h})})]})})},C=function(e){var t=e.route.params,r=t.mult,i=t.lvl,c=Object(s.useState)(r||0),a=Object(f.a)(c,2),l=a[0],o=a[1],m=Object(s.useState)(i||void 0),d=Object(f.a)(m,2),j=d[0],b=d[1];Object(s.useEffect)((function(){u.requiredPP(Object(n.a)(Object(n.a)({},l?{mult:l}:{}),j?{lvl:j}:{})).replace()}),[l,j]);var p,h=l>1500?{prestige:0,multipliers:N,cost:void 0}:j?(p=j,function(e){var t=k(e)(N);return{cost:y[p]*t.prestige,multipliers:t.multipliers,prestige:t.prestige}})(100*l):Object(n.a)(Object(n.a)({},k(100*l)()),{},{cost:void 0}),g=h.prestige,O=h.multipliers,v=h.cost;return console.table(O.map((function(e){var t=Object(f.a)(e,2),r=t[0],s=t[1];return Object(n.a)(Object(n.a)({},s),{},{m:r})}))),Object(x.jsx)("form",{children:Object(x.jsxs)("div",{className:"bg-white shadow overflow-hidden sm:rounded-lg",children:[Object(x.jsxs)("div",{className:"px-4 py-5 sm:px-4",children:[Object(x.jsx)("div",{className:"border-b border-gray-200",children:Object(x.jsxs)("h3",{children:[Object(x.jsx)("label",{htmlFor:"startingPrestige",className:"block text-sm font-medium text-gray-700",children:"Goal Multiplier"}),Object(x.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[Object(x.jsx)("div",{className:"absolute inset-y-0 left-0 pl-1 flex items-center pointer-events-none",children:Object(x.jsx)("span",{className:"text-gray-500 sm:text-sm",children:"\ud83d\udcb9"})}),Object(x.jsx)("input",{type:"text",name:"startingPrestige",id:"startingPrestige",className:"focus:ring-indigo-500 focus:border-indigo-500 block w-full p-1 pl-7 pr-12 sm:text-md border-gray-300 rounded-md",placeholder:"Enter Multiplier",value:l||"",onChange:function(e){var t=Number(e.target.value);!isNaN(t)&&t>-1&&o(Number(e.target.value))}}),Object(x.jsxs)("div",{className:"absolute inset-y-0 right-0 flex items-center",children:[Object(x.jsx)("label",{htmlFor:"currency",className:"sr-only",children:"level"}),Object(x.jsxs)("select",{id:"level",name:"level",value:j,onChange:function(e){var t=Number(e.target.value);b(!isNaN(t)&&t>0&&t<=50?t:void 0)},className:"focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-gray border-l  bg-transparent text-gray-500 sm:text-sm rounded-md rounded-l-none",children:[Object(x.jsx)("option",{children:"level"}),Object.keys(y).map((function(e){return Object(x.jsx)("option",{value:e,children:e},e)}))]})]})]})]})}),Object(x.jsxs)("p",{className:"mt-1 max-w-2xl text-sm text-gray-500",children:["Required Prestige: ",g.toLocaleString(),F]}),void 0!==v&&0!==v&&j&&Object(x.jsxs)("p",{className:"mt-1 max-w-2xl text-sm text-gray-500",children:["Required Money: ",v.toLocaleString(),"\ud83d\udcb0"]})]}),Object(x.jsx)("div",{className:"border-t border-gray-200",children:Object(x.jsx)(B,{multipliers:O})})]})})},L=function(){var e=d();return Object(x.jsxs)(x.Fragment,{children:["maxMultiplier"===e.name&&Object(x.jsx)(E,{route:e}),"requiredPP"===e.name&&Object(x.jsx)(C,{route:e}),!1===e.name&&Object(x.jsx)(E,{})]})},J=function(){return Object(x.jsx)("footer",{className:"flex flex-row justify-start max-w-7xl mx-auto px-4 py-6 sm:py-4 sm:px-6 lg:px-8 w-full",children:Object(x.jsx)("a",{className:"text-xs font-mono text-purple-900 hover:text-purple-600 hover:underline",href:"https://github.com/marcmartino",target:"_blank",rel:"noreferrer",children:"@marmar"})})};var W=function(){return Object(x.jsx)(m,{children:Object(x.jsxs)("div",{className:"flex h-full flex-col justify-between",children:[Object(x.jsx)(O,{children:Object(x.jsx)("div",{className:"flex flex-col h-full items-center justify-center ",children:Object(x.jsx)(L,{})})}),Object(x.jsx)(J,{})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(x.jsx)(W,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.0b218ef2.chunk.js.map