(this.webpackJsonpsciencereact=this.webpackJsonpsciencereact||[]).push([[0],{27:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(20),r=a.n(s),i=(a(27),a(10)),l=a(3),o=a(13),b=a(21),j=(a(28),b.a.initializeApp({apiKey:"AIzaSyAIzbAcCxSifEwYv5tntJPAyxSrvUN5ALs",authDomain:"science3-c85d4.firebaseapp.com",projectId:"science3-c85d4",storageBucket:"science3-c85d4.appspot.com",messagingSenderId:"188042430",appId:"1:188042430:web:55e8db4b564055cb9a62ef",measurementId:"G-Y2XSXP84FE"})),d=a(0),m=n.a.createContext(),u=function(e){var t=e.children,a=Object(c.useState)(!0),n=Object(o.a)(a,2),s=n[0],r=n[1],i=Object(c.useState)(null),l=Object(o.a)(i,2),b=l[0],u=l[1];return Object(c.useEffect)((function(){j.auth().onAuthStateChanged((function(e){u(e),r(!1)}))}),[]),s?Object(d.jsx)("p",{children:"Loading..."}):Object(d.jsx)(m.Provider,{value:{currentUser:b},children:t})},h=function(){var e=Object(c.useContext)(m).currentUSer;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"container mt-5",children:[Object(d.jsx)("h1",{children:"Home"}),e?Object(d.jsxs)("p",{children:["You are logged in - ",Object(d.jsx)(i.b,{to:"/dashboard",children:"View Dashboard"})]}):Object(d.jsxs)("p",{children:[Object(d.jsx)(i.b,{to:"/login",className:"btn btn-primary",children:"Log in"})," ","or"," ",Object(d.jsx)(i.b,{to:"signup",className:"btn btn-success",children:"Sign up"})]})]})})},p=function(){return Object(c.useContext)(m).currentUser?Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"container mt-5",children:[Object(d.jsx)("h1",{children:"Welcome"}),Object(d.jsx)("p",{children:"This is the dashboard, if you can see this you're logged in."}),Object(d.jsx)("button",{onClick:function(){return j.auth().signOut()},class:"btn btn-danger",children:"Sign Out"})]})}):Object(d.jsx)(l.a,{to:"/login"})},x=function(){return Object(c.useContext)(m).currentUser?Object(d.jsx)(l.a,{to:"/dashboard"}):Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"container mt-5",children:[Object(d.jsx)("h1",{children:"Log in"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.elements,a=t.email,c=t.password;try{j.auth().signInWithEmailAndPassword(a.value,c.value)}catch(n){alert(n)}},children:[Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{for:"exampleInputEmail1",className:"form-label",children:"Email address"}),Object(d.jsx)("input",{type:"email",name:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),Object(d.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{for:"exampleInputPassword1",className:"form-label",children:"Password"}),Object(d.jsx)("input",{type:"password",name:"password",className:"form-control",id:"exampleInputPassword1"})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})})},O=function(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),a=t[0],n=t[1];return a?Object(d.jsx)(l.a,{to:"/dashboard"}):Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"container mt-5",children:[Object(d.jsx)("h1",{children:"Sign Up"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.elements,a=t.email,c=t.password;try{j.auth().createUserWithEmailAndPassword(a.value,c.value),n(!0)}catch(s){alert(s)}},children:[Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{for:"exampleInputEmail1",className:"form-label",children:"Email address"}),Object(d.jsx)("input",{type:"email",name:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),Object(d.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{for:"exampleInputPassword1",className:"form-label",children:"Password"}),Object(d.jsx)("input",{type:"password",name:"password",className:"form-control",id:"exampleInputPassword1"})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})})};var f=function(){return Object(d.jsx)(u,{children:Object(d.jsx)(i.a,{children:Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.b,{exact:!0,path:"/",component:h}),Object(d.jsx)(l.b,{exact:!0,path:"/Dashboard",component:p}),Object(d.jsx)(l.b,{exact:!0,path:"/login",component:x}),Object(d.jsx)(l.b,{exact:!0,path:"/signup",component:O})]})})})},g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,36)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),g()}},[[35,1,2]]]);
//# sourceMappingURL=main.e381049a.chunk.js.map