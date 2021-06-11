(this["webpackJsonppp-calc"]=this["webpackJsonppp-calc"]||[]).push([[0],{15:function(e,t,s){},17:function(e,t,s){"use strict";s.r(t);var r=s(0),a=s(4),c=s.n(a),i=(s(15),s(2)),l=s(7),n=s(9),o={maxMultiplier:{title:"Max Multiplier",hash:"maxMult"},ppToMultiplier:{title:"PP Needed for Multiplier",hash:"ppToMult"},cashToMultiplier:{title:"Cash Needed for Multiplier",hash:"cashToMult"},charts:{title:"Charts",hash:"charts"}},d=s(1),m=["Dashboard","Team","Projects","Calendar","Reports"],x=["Your Profile","Settings","Sign out"];var h=function(e){var t=e.children,s=e.activePage,a=e.pages,c=void 0===a?o:a;return Object(d.jsxs)("div",{children:[Object(d.jsx)(l.a,{as:"nav",className:"bg-gray-800",children:function(e){e.open;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:Object(d.jsx)("div",{className:"flex items-center justify-between h-16",children:Object(d.jsxs)("div",{className:"flex items-center",children:[Object(d.jsx)("div",{className:"flex-shrink-0",children:Object(d.jsx)("img",{className:"h-8 w-8",src:"./prest.png",alt:"Workflow"})}),Object(d.jsx)("div",{className:"hidden md:block",children:Object(d.jsx)("div",{className:"ml-10 flex items-baseline space-x-4",children:Object.entries(c).map((function(e,t){var s=Object(i.a)(e,2),a=s[0],c=s[1],l=c.title,n=c.hash;return 0===t?Object(d.jsx)(r.Fragment,{children:Object(d.jsx)("a",{href:"#".concat(n),className:"bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium",children:l})},a):Object(d.jsx)("a",{href:"#".concat(n),className:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",children:l},a)}))})})]})})}),Object(d.jsxs)(l.a.Panel,{className:"md:hidden",children:[Object(d.jsx)("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:m.map((function(e,t){return 0===t?Object(d.jsx)(r.Fragment,{children:Object(d.jsx)("a",{href:"#",className:"bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium",children:e})},e):Object(d.jsx)("a",{href:"#",className:"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",children:e},e)}))}),Object(d.jsxs)("div",{className:"pt-4 pb-3 border-t border-gray-700",children:[Object(d.jsxs)("div",{className:"flex items-center px-5",children:[Object(d.jsx)("div",{className:"flex-shrink-0",children:Object(d.jsx)("img",{className:"h-10 w-10 rounded-full",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:""})}),Object(d.jsxs)("div",{className:"ml-3",children:[Object(d.jsx)("div",{className:"text-base font-medium leading-none text-white",children:"Tom Cook"}),Object(d.jsx)("div",{className:"text-sm font-medium leading-none text-gray-400",children:"tom@example.com"})]}),Object(d.jsxs)("button",{className:"ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",children:[Object(d.jsx)("span",{className:"sr-only",children:"View notifications"}),Object(d.jsx)(n.a,{className:"h-6 w-6","aria-hidden":"true"})]})]}),Object(d.jsx)("div",{className:"mt-3 px-2 space-y-1",children:x.map((function(e){return Object(d.jsx)("a",{href:"#",className:"block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700",children:e},e)}))})]})]})]})}}),Object(d.jsx)("header",{className:"bg-white shadow",children:Object(d.jsx)("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:Object(d.jsx)("h1",{className:"text-3xl font-bold text-gray-900",children:c[s].title})})}),Object(d.jsx)("main",{children:Object(d.jsx)("div",{className:"max-w-7xl mx-auto py-6 sm:px-6 lg:px-8",children:t})})]})},j=s(8),b=s(10),u=[[5,{qty:0,cost:5,multPerPrest:1}],[15,{qty:0,cost:50,multPerPrest:.3}],[30,{qty:0,cost:250,multPerPrest:.12}],[50,{qty:0,cost:750,multPerPrest:50/750}],[100,{qty:0,cost:2500,multPerPrest:.04}]],p={5:0,15:1,30:2,50:3,100:4},g=function(e){return function(t){var s=Object(b.a)(t),r=t[p[e]],a=r[1].cost+u[p[e]][1].cost;return s[p[e]]=[r[0],{qty:t[p[e]][1].qty+1,cost:a,multPerPrest:e/a}],s}},f=function e(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u,r=s.reduce((function(e,s){return void 0!==e&&e[1].multPerPrest>=s[1].multPerPrest||s[1].cost>t?e:s}),void 0);if(r){var a=e(t-r[1].cost,g(r[0])(s));return[{multiplier:r[0]+a[0].multiplier,remainingPrest:a[0].remainingPrest},a[1]]}return[{multiplier:0,remainingPrest:t},s]},O=function(e){Object(j.a)(e);var t=Object(r.useState)(0),s=Object(i.a)(t,2),a=s[0],c=s[1],l=f(a),n=Object(i.a)(l,2),o=n[0],m=o.multiplier,x=o.remainingPrest,h=n[1];return Object(d.jsx)("form",{children:Object(d.jsxs)("div",{className:"bg-white shadow overflow-hidden sm:rounded-lg",children:[Object(d.jsxs)("div",{className:"px-4 py-5 sm:px-6",children:[Object(d.jsx)("p",{className:"border-b border-gray-200",children:Object(d.jsxs)("h3",{children:[Object(d.jsx)("label",{htmlFor:"startingPrestige",className:"block text-sm font-medium text-gray-700",children:"Starting Prestige"}),Object(d.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[Object(d.jsx)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:Object(d.jsx)("span",{className:"text-gray-500 sm:text-sm",children:"\ud83d\udca0"})}),Object(d.jsx)("input",{type:"text",name:"startingPrestige",id:"startingPrestige",className:"focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-md border-gray-300 rounded-md",placeholder:"0",onChange:function(e){var t=Number(e.target.value);!isNaN(t)&&t>-1&&c(Number(e.target.value))}})]})]})}),Object(d.jsxs)("p",{className:"mt-1 max-w-2xl text-sm text-gray-500",children:["Remaining Prestige: ",x,"\ud83d\udca0",Object(d.jsx)("br",{}),"TotalPrestige Multiplier: ",(m/100).toFixed(2),"x ","\ud83d\udcb9"]})]}),Object(d.jsx)("div",{className:"border-t border-gray-200",children:Object(d.jsx)("dl",{children:h.map((function(e,t){var s=Object(i.a)(e,2),r=s[0],a=s[1],c=a.qty;a.cost;return Object(d.jsxs)("div",{className:(t%2?"bg-gray-50":"bg-white")+" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:[Object(d.jsxs)("dt",{className:"text-sm font-medium text-gray-500",children:[r,"% Multiplier"]}),Object(d.jsx)("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:c})]})}))})})]})})};var v=function(){return Object(d.jsx)(h,{activePage:"maxMultiplier",pages:o,children:Object(d.jsx)("div",{className:"flex flex-col h-full items-center justify-center ",children:Object(d.jsx)(O,{})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(d.jsx)(v,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.0a49e6fa.chunk.js.map