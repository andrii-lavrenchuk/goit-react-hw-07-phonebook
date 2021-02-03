(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={label:"Form_label__2jpAh",button:"Form_button__1dgPF"}},21:function(e,t,n){e.exports={item:"ContactList_item__18Oon"}},27:function(e,t,n){e.exports={iconButton:"IconButton_iconButton__2RS8i"}},28:function(e,t,n){e.exports={label:"Filter_label__3ipzM"}},29:function(e,t,n){e.exports={container:"Container_container__3eauI"}},42:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),a=n.n(c),l=n(3),o=n.n(l),i=n(4),s=n(25),u=(n(42),n(10)),b=(n(43),n(22)),j=n(26),f=n.n(j),d=n(5),O={addContact:Object(d.b)("contacts/Add",(function(e,t){return{payload:{id:f.a.generate(),name:e,number:t}}})),deleteContact:Object(d.b)("contacts/Delete"),changeFilter:Object(d.b)("contacts/changeFilter")},h=n(11),p=n.n(h),v=n(20),m=n(32),x=n(27),g=n.n(x);function y(e){var t=e.children,n=e.onClick,c=Object(m.a)(e,["children","onClick"]);return Object(r.jsx)("button",Object(v.a)(Object(v.a)({type:"button",className:g.a.iconButton,onClick:n},c),{},{children:t}))}function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}y.defaultProps={onClick:function(){return null},children:null};var _=c.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),k=c.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"});function E(e,t){var n=e.title,r=e.titleId,a=C(e,["title","titleId"]);return c.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,_,k)}var N=c.forwardRef(E);n.p;function P(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],a=t[1],l=Object(c.useState)(""),o=Object(b.a)(l,2),s=o[0],j=o[1],f=Object(i.b)(),d=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":a(r);break;case"number":j(r);break;default:return}};return Object(r.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""!==n&&""!==s){if(!/\d{3}[-]\d{2}[-]\d{2}/g.test(s))return u.b.error("Enter the correct  phone number"),a(""),void j("");f(O.addContact(n,s)),a(""),j("")}else u.b.info("Please fill all fields")},children:[Object(r.jsxs)("label",{className:p.a.label,children:["Name",Object(r.jsx)("input",{className:p.a.input,type:"text",name:"name",placeholder:"John Jonson",value:n,onChange:d}),Object(r.jsxs)("label",{className:p.a.label,children:["Number",Object(r.jsx)("input",{className:p.a.input,type:"tel",name:"number",placeholder:"123-45-67",value:s,onChange:d})]})]}),Object(r.jsx)(y,{type:"submit","aria-label":"Add contact",children:Object(r.jsx)(N,{width:"20",height:"20",fill:"#fff"})})]})}var F=n(21),I=n.n(F);function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function z(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var B=c.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),M=c.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"});function D(e,t){var n=e.title,r=e.titleId,a=z(e,["title","titleId"]);return c.createElement("svg",S({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,B,M)}var H=c.forwardRef(D);n.p;function A(e){var t=e.name,n=e.number,c=e.onDeleteContact;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("p",{children:[t,":",n]}),Object(r.jsx)(y,{onClick:c,"aria-label":"Delete contact",children:Object(r.jsx)(H,{width:"20",height:"20",fill:"#fff"})})]})}var J=function(e){return e.contacts.filter},L=function(e){var t=function(e){return e.contacts.items}(e),n=J(e).toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))};function R(){var e=Object(i.c)(L),t=Object(i.b)();return Object(r.jsx)("ul",{className:I.a.list,children:e.map((function(e){var n=e.id,c=e.name,a=e.number;return Object(r.jsx)("li",{className:I.a.item,children:Object(r.jsx)(A,{name:c,number:a,onDeleteContact:function(){return function(e){return t(O.deleteContact(e))}(n)}})},n)}))})}var V=n(28),T=n.n(V);function q(){var e=Object(i.c)(J),t=Object(i.b)();return Object(r.jsxs)("label",{className:T.a.label,children:["Find contacts by name",Object(r.jsx)("input",{type:"text",value:e,onChange:function(e){return t(O.changeFilter(e.target.value))}})]})}function G(e){var t=e.title;return Object(r.jsx)("h2",{children:t})}var K=n(29),Q=n.n(K);function U(e){var t=e.children;return Object(r.jsx)("div",{className:Q.a.container,children:t})}function W(){return Object(r.jsxs)(U,{children:[Object(r.jsx)(u.a,{autoClose:3e3}),Object(r.jsx)(G,{title:"Phonebook"}),Object(r.jsx)(P,{}),Object(r.jsx)(G,{title:"Contacts"}),Object(r.jsx)(q,{}),Object(r.jsx)(R,{})]})}var X,Y=n(14),Z=n(7),$=n(30),ee=n.n($),te=n(8),ne=n(2),re=Object(d.c)([],(X={},Object(te.a)(X,O.addContact,(function(e,t){var n=t.payload;return[].concat(Object(Y.a)(e),[n])})),Object(te.a)(X,O.deleteContact,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),X)),ce=Object(d.c)("",Object(te.a)({},O.changeFilter,(function(e,t){return t.payload}))),ae=Object(ne.c)({items:re,filter:ce}),le=n(31),oe=n.n(le),ie=[].concat(Object(Y.a)(Object(d.d)({serializableCheck:{ignoredActions:[Z.a,Z.f,Z.b,Z.c,Z.d,Z.e]}})),[oe.a]),se={key:"contacts",storage:ee.a,blacklist:["filter"]},ue=Object(d.a)({reducer:{contacts:Object(Z.g)(se,ae)},devTools:!1,middleware:ie}),be={store:ue,persistor:Object(Z.h)(ue)};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(s.a,{loading:null,persistor:be.persistor,children:Object(r.jsx)(i.a,{store:be.store,children:Object(r.jsx)(W,{})})})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.2ffa82ca.chunk.js.map