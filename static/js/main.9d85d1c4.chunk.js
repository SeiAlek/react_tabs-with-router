(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,a,t){e.exports=t(26)},26:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(14),l=t.n(r),s=t(6),m=t(1),i=function(){return c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"header"},"Home Page")))},o=function(e){var a=e.tabs,t=e.currentTabId,n=a.find((function(e){return e.id===t})),r=a[0].id;return t?c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"header"},"React Tabs",t),c.a.createElement("ul",{className:"tabs"},a.map((function(e){return c.a.createElement("li",{className:"tab col s3",key:e.id},c.a.createElement(s.b,{to:"/tabs/".concat(e.id),className:"orange-text"},e.title))}))),c.a.createElement("article",null,c.a.createElement("h2",{className:"header"},n&&n.title),n&&n.content))):c.a.createElement(m.a,{to:"/tabs/".concat(r)})},b=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],u=function(){return c.a.createElement(s.a,null,c.a.createElement("nav",{className:"nav orange"},c.a.createElement("div",{className:"nav-wrapper container"},c.a.createElement("ul",{className:"nav__list"},c.a.createElement("li",{className:"nav__item"},c.a.createElement(s.b,{to:"/",className:"nav__link",activeClassName:"nav__link--active"},"Home Page")),c.a.createElement("li",null,c.a.createElement(s.b,{to:"/tabs",className:"nav__link",activeClassName:"nav__link--active"},"Tabs"))))),c.a.createElement(m.b,{path:"/",exact:!0,component:i}),c.a.createElement(m.b,{path:"/tabs/:id?",render:function(e){var a=e.match;return c.a.createElement(o,{tabs:b,currentTabId:a.params.id})}}))};l.a.render(c.a.createElement(s.a,{basename:"/react_tabs-with-router/"},c.a.createElement(u,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.9d85d1c4.chunk.js.map