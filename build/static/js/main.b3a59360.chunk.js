(this.webpackJsonpsciencereact=this.webpackJsonpsciencereact||[]).push([[0],{26:function(e,t,c){},39:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var s=c(3),n=c.n(s),a=c(32),r=c.n(a),i=(c(39),c(10)),l=c(5),j=c(15),o=c(33),d=(c(40),c(52),c(42),o.a.initializeApp({apiKey:"AIzaSyAIzbAcCxSifEwYv5tntJPAyxSrvUN5ALs",authDomain:"science3-c85d4.firebaseapp.com",projectId:"science3-c85d4",storageBucket:"science3-c85d4.appspot.com",messagingSenderId:"188042430",appId:"1:188042430:web:55e8db4b564055cb9a62ef",measurementId:"G-Y2XSXP84FE"})),m=c(2),b=n.a.createContext(),u=function(e){var t=e.children,c=Object(s.useState)(!0),n=Object(j.a)(c,2),a=n[0],r=n[1],i=Object(s.useState)(null),l=Object(j.a)(i,2),o=l[0],u=l[1];return Object(s.useEffect)((function(){d.auth().onAuthStateChanged((function(e){u(e),r(!1)}))}),[]),a?Object(m.jsx)("p",{children:"Loading..."}):Object(m.jsx)(b.Provider,{value:{currentUser:o},children:t})},h=(c(26),c(27)),x=c(17);var O=function(){var e,t=Object(s.useState)(!1),c=Object(j.a)(t,2),n=c[0],a=c[1],r=function(){return a(!1)},l=Object(s.useContext)(b).currentUser;return Object(m.jsx)("div",{className:"header",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"header-con",children:[Object(m.jsx)("div",{className:"logo-container",children:Object(m.jsx)("a",{href:"/",children:"Science3"})}),Object(m.jsxs)("ul",{className:n?"menu active":"menu",children:[Object(m.jsx)("li",{className:"menu-link",onClick:r,children:Object(m.jsx)("a",{href:"#",children:"About"})}),Object(m.jsx)("li",{className:"menu-link",onClick:r,children:Object(m.jsx)("a",{href:"#",children:"Contact"})}),Object(m.jsx)("li",{className:"menu-link",onClick:r,children:Object(m.jsx)("a",{href:"#",children:l.email})}),Object(m.jsx)("li",{children:Object(m.jsx)(i.b,(e={to:"/",className:"menu-link",onClick:r},Object(h.a)(e,"onClick",(function(){return d.auth().signOut()})),Object(h.a)(e,"children","Sign out"),e))})]}),Object(m.jsx)("div",{className:"mobile-menu",onClick:function(){return a(!n)},children:n?Object(m.jsx)(x.b,{}):Object(m.jsx)(x.a,{})})]})})})};var p=function(){var e=Object(s.useState)(!1),t=Object(j.a)(e,2),c=t[0],n=t[1],a=function(){return n(!1)};return Object(m.jsx)("div",{className:"header",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"header-con",children:[Object(m.jsx)("div",{className:"logo-container",children:Object(m.jsx)("a",{href:"/",children:"Science3"})}),Object(m.jsxs)("ul",{className:c?"menu active":"menu",children:[Object(m.jsx)("li",{className:"menu-link",onClick:a,children:Object(m.jsx)("a",{href:"#",children:"About"})}),Object(m.jsx)("li",{className:"menu-link",onClick:a,children:Object(m.jsx)("a",{href:"#",children:"Contact"})}),Object(m.jsx)("li",{children:Object(m.jsx)(i.b,{to:"/login",className:"menu-link",onClick:a,children:"Log in"})}),Object(m.jsx)("li",{children:Object(m.jsx)(i.b,{to:"signup",className:"menu-link",onClick:a,children:"Sign up"})})]}),Object(m.jsx)("div",{className:"mobile-menu",onClick:function(){return n(!c)},children:c?Object(m.jsx)(x.b,{}):Object(m.jsx)(x.a,{})})]})})})};var f=function(){return Object(s.useContext)(b).currentUser?Object(m.jsx)(O,{}):Object(m.jsx)(p,{})},v=(c(50),"Science3 landing page"),N="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem corrupti in est unde impedit recusandae! Corporis, eum cum excepturi eius ipsa maxime, quasi, molestias doloribus dolorem ipsum earum aperiam repellendus!";var g=function(){var e=Object(s.useContext)(b).currentUser;return Object(m.jsx)("div",{className:"banner-bg",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"banner-con",children:Object(m.jsxs)("div",{className:"banner-text",children:[Object(m.jsx)("h1",{children:v}),Object(m.jsx)("p",{children:N}),e?Object(m.jsx)(i.b,{to:"/createproject",className:"banner-btn",children:"Create a project"}):Object(m.jsx)(i.b,{to:"/login",className:"banner-btn",children:"Create a project"})]})})})})},y=function(){Object(s.useContext)(b).currentUser;return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"container mt-5",children:[Object(m.jsx)("h1",{children:"Welcome"}),Object(m.jsx)("p",{children:"This is the dashboard, if you can see this you're logged in."}),Object(m.jsx)("button",{onClick:function(){return d.auth().signOut()},className:"btn btn-danger",children:"Sign Out"})]})})},C=c(20),S=c(21),k=c(23),w=c(22),F=d.firestore(),A=function(e){Object(k.a)(c,e);var t=Object(w.a)(c);function c(e){var s;return Object(C.a)(this,c),(s=t.call(this,e)).state={user:[]},s}return Object(S.a)(c,[{key:"componentDidMount",value:function(){var e=this;F.collection("User").get().then((function(t){var c=[];t.forEach((function(e){var t=e.data();c.push(t)})),e.setState({user:c})}))}},{key:"render",value:function(){return Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"mt-5",children:Object(m.jsx)("div",{className:"col-sm-12",children:Object(m.jsx)("div",{className:"row row-cols-3",children:this.state.user.map((function(e){return Object(m.jsx)("div",{className:"col-sm-4",style:{margin:"0px 0px 30px 0px"},children:Object(m.jsx)("div",{className:"card",children:Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("h4",{className:"card-title",children:e.name}),Object(m.jsx)("h6",{className:"card-subtitle mb-2 text-muted",children:e.type}),Object(m.jsx)("p",{className:"card-text",children:e.message}),Object(m.jsx)("p",{className:"card-text",children:e.fund}),Object(m.jsx)("a",{href:"mailto:".concat(e.email),className:"card-link",children:e.email})]})})},e.fund)}))})})})})}}]),c}(s.Component),I=function(){return Object(s.useContext)(b).currentUser?Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{children:[Object(m.jsx)(f,{}),Object(m.jsx)(g,{}),Object(m.jsx)(y,{}),Object(m.jsx)(A,{})]})}):Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{children:[Object(m.jsx)(f,{}),Object(m.jsx)(g,{}),Object(m.jsx)(A,{})]})})},U=function(){return Object(s.useContext)(b).currentUser?Object(m.jsx)(l.a,{to:"/"}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(f,{}),Object(m.jsxs)("div",{className:"container mt-5",children:[Object(m.jsx)("h1",{children:"Log in"}),Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.elements,c=t.email,s=t.password;try{d.auth().signInWithEmailAndPassword(c.value,s.value)}catch(n){alert(n)}},children:[Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{for:"exampleInputEmail1",className:"form-label",children:"Email address"}),Object(m.jsx)("input",{type:"email",name:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),Object(m.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{for:"exampleInputPassword1",className:"form-label",children:"Password"}),Object(m.jsx)("input",{type:"password",name:"password",className:"form-control",id:"exampleInputPassword1"})]}),Object(m.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})]})},P=function(){var e=Object(s.useState)(null),t=Object(j.a)(e,2),c=t[0],n=t[1];return c?Object(m.jsx)(l.a,{to:"/dashboard"}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(f,{}),Object(m.jsxs)("div",{className:"container mt-5",children:[Object(m.jsx)("h1",{children:"Sign Up"}),Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.elements,c=t.email,s=t.password;try{d.auth().createUserWithEmailAndPassword(c.value,s.value),n(!0)}catch(a){alert(a)}},children:[Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{for:"exampleInputEmail1",className:"form-label",children:"Email address"}),Object(m.jsx)("input",{type:"email",name:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),Object(m.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{for:"exampleInputPassword1",className:"form-label",children:"Password"}),Object(m.jsx)("input",{type:"password",name:"password",className:"form-control",id:"exampleInputPassword1"})]}),Object(m.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})]})},E=d.firestore(),D=function(e){Object(k.a)(c,e);var t=Object(w.a)(c);function c(e){var s;return Object(C.a)(this,c),(s=t.call(this,e)).renderRedirect=function(){if(s.state.redirect)return Object(m.jsx)(l.a,{to:"/login"})},s.state={User:[],alert:!1,alertData:{},redirect:!1},s}return Object(S.a)(c,[{key:"showAlert",value:function(e,t){var c=this;this.setState({alert:!0,alertData:{type:e,message:t}}),setTimeout((function(){c.setState({alert:!1})}),4e3)}},{key:"resetForm",value:function(){this.refs.contactForm.reset()}},{key:"componentDidMount",value:function(){var e=this;E.collection("User").get().then((function(t){var c=[];t.forEach((function(e){var t=e.data();c.push(t)})),e.setState({User:c})}))}},{key:"sendMessage",value:function(e){var t=this;e.preventDefault();var c=d.auth().currentUser;if(c){var s={name:this.inputName.value,email:c.email,type:this.inputType.value,fund:this.inputFund.value,message:this.textAreaMessage.value};s.name&&s.email&&s.type&&s.fund&&s.message?(E.collection("User").add(s).then((function(){t.showAlert("success","Your message was sent successfull")})).catch((function(){t.showAlert("danger","Your message could not be sent")})),this.resetForm()):this.showAlert("warning","Please fill the form")}else this.setState({redirect:!0})}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{children:[Object(m.jsx)(f,{}),this.renderRedirect(),this.state.alert&&Object(m.jsx)("div",{className:"alert alert-".concat(this.state.alertData.type),role:"alert",children:Object(m.jsx)("div",{className:"container",children:this.state.alertData.message})}),Object(m.jsx)("div",{className:"container",style:{padding:"40px 15px 0px 15px"},children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-sm-4",children:[Object(m.jsx)("h2",{children:"Project"}),Object(m.jsxs)("form",{onSubmit:this.sendMessage.bind(this),ref:"contactForm",children:[Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"name",children:"Name"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"name",placeholder:"Name",ref:function(t){return e.inputName=t}})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"type",children:"Type"}),Object(m.jsxs)("select",{className:"form-control",id:"type",ref:function(t){return e.inputType=t},children:[Object(m.jsx)("option",{value:"Tech",children:"Tech"}),Object(m.jsx)("option",{value:"Science",children:"Science"}),Object(m.jsx)("option",{value:"Community",children:"Community"})]})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"fund",children:"Fund"}),Object(m.jsx)("input",{type:"number",className:"form-control",id:"fund",placeholder:"3000 THB",ref:function(t){return e.inputFund=t}})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"message",children:"Message"}),Object(m.jsx)("textarea",{className:"form-control",id:"message",rows:"3",style:{margin:"0px 0px 10px 0px"},ref:function(t){return e.textAreaMessage=t}})]}),Object(m.jsx)("button",{type:"submit",className:"btn btn-primary",style:{margin:"0px 0px 10px 0px"},onClick:this.handleSubmit,children:"Send"})]})]}),Object(m.jsx)("div",{className:"col-sm-8",children:Object(m.jsx)("div",{className:"row",children:this.state.User.map((function(e){return Object(m.jsx)("div",{className:"col-sm-6",style:{margin:"0px 0px 30px 0px"},children:Object(m.jsx)("div",{className:"card",children:Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("h4",{className:"card-title",children:e.name}),Object(m.jsx)("h6",{className:"card-subtitle mb-2 text-muted",children:e.type}),Object(m.jsx)("p",{className:"card-text",children:e.message}),Object(m.jsx)("p",{className:"card-text",children:e.fund}),Object(m.jsx)("a",{href:"mailto:".concat(e.email),className:"card-link",children:e.email})]})})},e.fund)}))})})]})})]})}}]),c}(s.Component);var T=function(){return Object(m.jsx)(u,{children:Object(m.jsx)(i.a,{children:Object(m.jsxs)(l.d,{children:[Object(m.jsx)(l.b,{exact:!0,path:"/",component:I}),Object(m.jsx)(l.b,{exact:!0,path:"/Dashboard",component:y}),Object(m.jsx)(l.b,{exact:!0,path:"/login",component:U}),Object(m.jsx)(l.b,{exact:!0,path:"/signup",component:P}),Object(m.jsx)(l.b,{exact:!0,path:"/createproject",component:D})]})})})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,53)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))};r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(T,{})}),document.getElementById("root")),M()}},[[51,1,2]]]);
//# sourceMappingURL=main.b3a59360.chunk.js.map