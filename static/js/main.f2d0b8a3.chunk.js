(this["webpackJsonpusers-crud-app"]=this["webpackJsonpusers-crud-app"]||[]).push([[0],{31:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),r=s(19),n=s.n(r),i=s(5),l=s(0);var j=function(){return Object(l.jsxs)("ul",{className:"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion",id:"accordionSidebar",children:[Object(l.jsxs)(i.b,{className:"sidebar-brand d-flex align-items-center justify-content-center",to:"/",children:[Object(l.jsx)("div",{className:"sidebar-brand-icon rotate-n-15",children:Object(l.jsx)("i",{className:"fas fa-laugh-wink"})}),Object(l.jsx)("div",{className:"sidebar-brand-text mx-3",children:"CRUD App"})]}),Object(l.jsx)("hr",{className:"sidebar-divider my-0"}),Object(l.jsx)("li",{className:"nav-item active",children:Object(l.jsxs)(i.b,{className:"nav-link",to:"/",children:[Object(l.jsx)("i",{className:"fas fa-fw fa-tachometer-alt"}),Object(l.jsx)("span",{children:"Dashboard"})]})}),Object(l.jsx)("hr",{className:"sidebar-divider"}),Object(l.jsx)("div",{className:"sidebar-heading",children:"Data"}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsxs)(i.b,{className:"nav-link collapsed",to:"/users",children:[Object(l.jsx)("i",{className:"fas fa-fw fa-cog"}),Object(l.jsx)("span",{children:"Users"})]})}),Object(l.jsx)("hr",{className:"sidebar-divider"})]})};var b=function(){return Object(l.jsxs)("nav",{className:"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow",children:[Object(l.jsx)("button",{id:"sidebarToggleTop",className:"btn btn-link d-md-none rounded-circle mr-3",children:Object(l.jsx)("i",{className:"fa fa-bars"})}),Object(l.jsx)("form",{className:"d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search",children:Object(l.jsxs)("div",{className:"input-group",children:[Object(l.jsx)("input",{type:"text",className:"form-control bg-light border-0 small",placeholder:"Search for...","aria-label":"Search","aria-describedby":"basic-addon2"}),Object(l.jsx)("div",{className:"input-group-append",children:Object(l.jsx)("button",{className:"btn btn-primary",type:"button",children:Object(l.jsx)("i",{className:"fas fa-search fa-sm"})})})]})})]})};var d=function(){return Object(l.jsx)("div",{className:"d-sm-flex align-items-center justify-content-between mb-4",children:Object(l.jsx)("h1",{className:"h3 mb-0 text-gray-800",children:"Dashboard"})})},o=s(2),m=s(10),h=s(4),O=a.a.createContext(),x=O,u=function(e){var t=e.children,s=Object(c.useState)([]),a=Object(h.a)(s,2),r=a[0],n=a[1];return Object(l.jsx)(O.Provider,{value:{userList:r,setUserList:n},children:t})};var f=function(){var e=Object(c.useContext)(x);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"d-sm-flex align-items-center justify-content-between mb-4",children:[Object(l.jsx)("h1",{className:"h3 mb-0 text-gray-800",children:"Users"}),Object(l.jsxs)(i.b,{to:"/create-user",className:"d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm",children:[Object(l.jsx)("i",{className:"fas fa-plus fa-sm text-white-50"})," Create User"]})]}),Object(l.jsxs)("div",{className:"card shadow mb-4",children:[Object(l.jsx)("div",{className:"card-header py-3",children:Object(l.jsx)("h6",{className:"m-0 font-weight-bold text-primary",children:"Users Data"})}),Object(l.jsx)("div",{className:"card-body",children:Object(l.jsx)("div",{className:"table-responsive",children:Object(l.jsxs)("table",{className:"table table-bordered",id:"dataTable",width:"100%",cellspacing:"0",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"ID"}),Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Position"}),Object(l.jsx)("th",{children:"Office"}),Object(l.jsx)("th",{children:"Age"}),Object(l.jsx)("th",{children:"Start date"}),Object(l.jsx)("th",{children:"Salary"}),Object(l.jsx)("th",{children:"Action"})]})}),Object(l.jsx)("tfoot",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"ID"}),Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Position"}),Object(l.jsx)("th",{children:"Office"}),Object(l.jsx)("th",{children:"Age"}),Object(l.jsx)("th",{children:"Start date"}),Object(l.jsx)("th",{children:"Salary"}),Object(l.jsx)("th",{children:"Action"})]})}),Object(l.jsx)("tbody",{children:e.userList.map((function(t,s){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:s+1}),Object(l.jsx)("td",{children:t.name}),Object(l.jsx)("td",{children:t.position}),Object(l.jsx)("td",{children:t.office}),Object(l.jsx)("td",{children:t.age}),Object(l.jsx)("td",{children:t.startDate}),Object(l.jsx)("td",{children:t.salary}),Object(l.jsxs)("td",{children:[Object(l.jsx)(i.b,{to:"/edit-user/".concat(s+1),className:"btn btn-sm btn-primary mr-2",children:"Edit"}),Object(l.jsx)("button",{onClick:function(){return function(t){window.confirm("Are you sure you want to delete?")&&(e.userList.splice(t-1,1),e.setUserList(Object(m.a)(e.userList)))}(s+1)},className:"btn btn-sm btn-danger",children:"Delete"})]})]})}))})]})})})]})]})};var v=function(){var e=Object(c.useState)(""),t=Object(h.a)(e,2),s=t[0],a=t[1],r=Object(c.useState)(""),n=Object(h.a)(r,2),j=n[0],b=n[1],d=Object(c.useState)(""),O=Object(h.a)(d,2),u=O[0],f=O[1],v=Object(c.useState)(""),p=Object(h.a)(v,2),N=p[0],g=p[1],y=Object(c.useState)(""),w=Object(h.a)(y,2),S=w[0],C=w[1],D=Object(c.useState)(""),F=Object(h.a)(D,2),U=F[0],k=F[1],q=Object(c.useContext)(x),L=Object(o.f)();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"d-sm-flex align-items-center justify-content-between mb-4",children:[Object(l.jsx)("h1",{className:"h3 mb-0 text-gray-800",children:"Create User"}),Object(l.jsxs)(i.b,{to:"/users",className:"d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm",children:[Object(l.jsx)("i",{className:"fas fa-left fa-sm text-white-50"})," View All Users"]})]}),Object(l.jsx)("form",{onSubmit:function(e){e.preventDefault();var t={name:s,position:j,office:u,age:N,startDate:S,salary:U};q.setUserList([].concat(Object(m.a)(q.userList),[t])),L.push("/users")},children:Object(l.jsxs)("div",{className:"form-div",children:[Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col-lg-4",children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{type:"text",className:"form-control",value:s,onChange:function(e){return a(e.target.value)},id:"name",required:!0})]}),Object(l.jsxs)("div",{className:"col-lg-4",children:[Object(l.jsx)("label",{htmlFor:"position",children:"Position:"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"position",value:j,onChange:function(e){return b(e.target.value)},required:!0})]})]}),Object(l.jsxs)("div",{className:"row mt-2",children:[Object(l.jsxs)("div",{className:"col-lg-4",children:[Object(l.jsx)("label",{htmlFor:"office",children:"Office:"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"office",value:u,onChange:function(e){return f(e.target.value)},required:!0})]}),Object(l.jsxs)("div",{className:"col-lg-4",children:[Object(l.jsx)("label",{htmlFor:"age",children:"Age:"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"age",value:N,onChange:function(e){return g(e.target.value)},required:!0})]})]}),Object(l.jsxs)("div",{className:"row mt-2",children:[Object(l.jsxs)("div",{className:"col-lg-4",children:[Object(l.jsx)("label",{htmlFor:"startDate",children:"Start Date:"}),Object(l.jsx)("input",{type:"date",className:"form-control",id:"startDate",value:S,onChange:function(e){return C(e.target.value)},required:!0})]}),Object(l.jsxs)("div",{className:"col-lg-4",children:[Object(l.jsx)("label",{htmlFor:"salary",children:"Salary:"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"salary",value:U,onChange:function(e){return k(e.target.value)},required:!0})]})]}),Object(l.jsx)("div",{className:"row mt-3 ml-1",children:Object(l.jsx)("input",{type:"submit",className:"btn btn-primary",value:"Create"})})]})})]})};var p=function(e){var t=Object(c.useState)(""),s=Object(h.a)(t,2),a=s[0],r=s[1],n=Object(c.useState)(""),j=Object(h.a)(n,2),b=j[0],d=j[1],O=Object(c.useState)(""),u=Object(h.a)(O,2),f=u[0],v=u[1],p=Object(c.useState)(""),N=Object(h.a)(p,2),g=N[0],y=N[1],w=Object(c.useState)(""),S=Object(h.a)(w,2),C=S[0],D=S[1],F=Object(c.useState)(""),U=Object(h.a)(F,2),k=U[0],q=U[1],L=Object(c.useContext)(x),A=Object(o.f)();return Object(c.useEffect)((function(){var t=L.userList[e.match.params.id-1];r(t.name),d(t.position),v(t.office),y(t.age),D(t.startDate),q(t.salary)}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"d-sm-flex align-items-center justify-content-between mb-4",children:[Object(l.jsx)("h1",{className:"h3 mb-0 text-gray-800",children:"Edit User"}),Object(l.jsxs)(i.b,{to:"/users",className:"d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm",children:[Object(l.jsx)("i",{className:"fas fa-left fa-sm text-white-50"})," View All Users"]})]}),Object(l.jsx)("form",{onSubmit:function(t){t.preventDefault();var s={name:a,position:b,office:f,age:g,startDate:C,salary:k};L.userList[e.match.params.id-1]=s,L.setUserList(Object(m.a)(L.userList)),A.push("/users")},children:Object(l.jsxs)("div",{className:"form-div",children:[Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col-lg-4",children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{type:"text",className:"form-control",value:a,onChange:function(e){return r(e.target.value)},id:"name",required:!0})]}),Object(l.jsxs)("div",{className:"col-lg-4",children:[Object(l.jsx)("label",{htmlFor:"position",children:"Position:"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"position",value:b,onChange:function(e){return d(e.target.value)},required:!0})]})]}),Object(l.jsxs)("div",{className:"row mt-2",children:[Object(l.jsxs)("div",{className:"col-lg-4",children:[Object(l.jsx)("label",{htmlFor:"office",children:"Office:"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"office",value:f,onChange:function(e){return v(e.target.value)},required:!0})]}),Object(l.jsxs)("div",{className:"col-lg-4",children:[Object(l.jsx)("label",{htmlFor:"age",children:"Age:"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"age",value:g,onChange:function(e){return y(e.target.value)},required:!0})]})]}),Object(l.jsxs)("div",{className:"row mt-2",children:[Object(l.jsxs)("div",{className:"col-lg-4",children:[Object(l.jsx)("label",{htmlFor:"startDate",children:"Start Date:"}),Object(l.jsx)("input",{type:"date",className:"form-control",id:"startDate",value:C,onChange:function(e){return D(e.target.value)},required:!0})]}),Object(l.jsxs)("div",{className:"col-lg-4",children:[Object(l.jsx)("label",{htmlFor:"salary",children:"Salary:"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"salary",value:k,onChange:function(e){return q(e.target.value)},required:!0})]})]}),Object(l.jsx)("div",{className:"row mt-3 ml-1",children:Object(l.jsx)("input",{type:"submit",className:"btn btn-primary",value:"Update"})})]})})]})};var N=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(i.a,{children:Object(l.jsxs)("div",{id:"wrapper",children:[Object(l.jsx)(j,{}),Object(l.jsx)("div",{id:"content-wrapper",class:"d-flex flex-column",children:Object(l.jsxs)("div",{id:"content",children:[Object(l.jsx)(b,{}),Object(l.jsx)("div",{class:"container-fluid",children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/",component:d,exact:!0}),Object(l.jsxs)(u,{children:[Object(l.jsx)(o.a,{path:"/users",component:f,exact:!0}),Object(l.jsx)(o.a,{path:"/create-user",component:v,exact:!0}),Object(l.jsx)(o.a,{path:"/edit-user/:id",component:p,exact:!0})]})]})})]})})]})})})};n.a.render(Object(l.jsx)(N,{}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.f2d0b8a3.chunk.js.map