(this.webpackJsonpmonsters=this.webpackJsonpmonsters||[]).push([[0],[,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(3),r=s.n(a),o=(s(12),s(4)),i=s(5),l=s(7),d=s(6),h=(s(13),s(14),s(15),s(0)),j=function(e){var t=e.user;return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("img",{src:"https://robohash.org/".concat(t.id,"?set=set1&size=160x160"),alt:"",className:"card__image"}),Object(h.jsx)("h1",{className:"card__title",children:t.name}),Object(h.jsx)("p",{className:"card__contact",children:t.email})]})},u=function(e){var t=e.monsters;return Object(h.jsx)("div",{className:"card-list",children:t.map((function(e){return Object(h.jsx)(j,{user:e},e.id)}))})},m=(s(17),function(e){var t=e.placeholder,s=e.handleChange;return Object(h.jsx)("input",{type:"search",placeholder:t,onChange:s,className:"search"})}),b=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).handleSearch=function(t){e.setState({searchField:t.target.value})},e.toggleDarkMode=function(){e.setState({darkMode:!e.state.darkMode})},e.state={monsters:[],searchField:"",darkMode:!1},e}return Object(i.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,s=e.searchField,c=e.darkMode,n=t.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())}));return Object(h.jsxs)("div",{className:"App ".concat(c?"dark-mode":""),children:[Object(h.jsxs)("div",{className:"header",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"checkbox",className:"checkbox",id:"checkbox",onChange:this.toggleDarkMode}),Object(h.jsxs)("label",{htmlFor:"checkbox",className:"label",children:[Object(h.jsx)("i",{className:"fas fa-sun"}),Object(h.jsx)("i",{className:"fas fa-moon"}),Object(h.jsx)("div",{className:"ball"})]})]}),Object(h.jsx)("h1",{className:"heading",children:"Monsters Rolodex"}),Object(h.jsx)("span",{className:"dark-mode-toggle",onClick:this.toggleDarkMode})]}),Object(h.jsx)(m,{placeholder:"search",handleChange:this.handleSearch}),Object(h.jsx)(u,{monsters:n})]})}}]),s}(c.Component),f=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,19)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;s(e),c(e),n(e),a(e),r(e)}))};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(b,{})}),document.getElementById("root")),f()}],[[18,1,2]]]);
//# sourceMappingURL=main.3777a36b.chunk.js.map