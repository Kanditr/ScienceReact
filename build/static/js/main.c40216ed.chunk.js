(this.webpackJsonpsciencereact=this.webpackJsonpsciencereact||[]).push([[0],{139:function(e,t,a){},149:function(e,t,a){},158:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(17),r=a.n(i),s=(a(139),a(15)),o=a(18),l=a(16),j=a(9),d=(a(100),a(160),a(141),j.a.initializeApp({apiKey:"AIzaSyAIzbAcCxSifEwYv5tntJPAyxSrvUN5ALs",authDomain:"science3-c85d4.firebaseapp.com",projectId:"science3-c85d4",storageBucket:"science3-c85d4.appspot.com",messagingSenderId:"188042430",appId:"1:188042430:web:55e8db4b564055cb9a62ef",measurementId:"G-Y2XSXP84FE"})),b=a(1),m=c.a.createContext(),u=function(e){var t=e.children,a=Object(n.useState)(!0),c=Object(l.a)(a,2),i=c[0],r=c[1],s=Object(n.useState)(null),o=Object(l.a)(s,2),j=o[0],u=o[1];return Object(n.useEffect)((function(){d.auth().onAuthStateChanged((function(e){u(e),r(!1)}))}),[]),i?Object(b.jsx)("p",{children:"Loading..."}):Object(b.jsx)(m.Provider,{value:{currentUser:j},children:t})},p=(a(88),a(24)),h=a(65);var x=function(){var e,t=Object(n.useState)(!1),a=Object(l.a)(t,2),c=a[0],i=a[1],r=function(){return i(!1)},o=Object(n.useContext)(m).currentUser;return Object(b.jsx)("div",{className:"header",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"header-con",children:[Object(b.jsx)("div",{className:"logo-container",children:Object(b.jsx)(s.b,{to:"/",children:"Science3"})}),Object(b.jsxs)("ul",{className:c?"menu active":"menu",children:[Object(b.jsx)("li",{className:"menu-link",onClick:r,children:Object(b.jsx)("a",{href:"#",children:"About"})}),Object(b.jsx)("li",{className:"menu-link",onClick:r,children:Object(b.jsx)("a",{href:"#",children:"Contact"})}),Object(b.jsx)("li",{className:"menu-link",onClick:r,children:Object(b.jsx)("a",{href:"#",children:o.email})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.b,(e={to:"/",className:"menu-link",onClick:r},Object(p.a)(e,"onClick",(function(){return d.auth().signOut()})),Object(p.a)(e,"children","Sign out"),e))})]}),Object(b.jsx)("div",{className:"mobile-menu",onClick:function(){return i(!c)},children:c?Object(b.jsx)(h.b,{}):Object(b.jsx)(h.a,{})})]})})})};var g=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],i=function(){return c(!1)};return Object(b.jsx)("div",{className:"header",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"header-con",children:[Object(b.jsx)("div",{className:"logo-container",children:Object(b.jsx)(s.b,{to:"/",children:"Science3"})}),Object(b.jsxs)("ul",{className:a?"menu active":"menu",children:[Object(b.jsx)("li",{className:"menu-link",onClick:i,children:Object(b.jsx)("a",{href:"#",children:"About"})}),Object(b.jsx)("li",{className:"menu-link",onClick:i,children:Object(b.jsx)("a",{href:"#",children:"Contact"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.b,{to:"/login",className:"menu-link",onClick:i,children:"Log in"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.b,{to:"signup",className:"menu-link",onClick:i,children:"Sign up"})})]}),Object(b.jsx)("div",{className:"mobile-menu",onClick:function(){return c(!a)},children:a?Object(b.jsx)(h.b,{}):Object(b.jsx)(h.a,{})})]})})})};var O=function(){return Object(n.useContext)(m).currentUser?Object(b.jsx)(x,{}):Object(b.jsx)(g,{})},f=(a(149),a(102),a(192)),v=a(66),y="Science3 landing page",N="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem corrupti in est unde impedit recusandae! Corporis, eum cum excepturi eius ipsa maxime, quasi, molestias doloribus dolorem ipsum earum aperiam repellendus!";var C=function(){var e=Object(n.useContext)(m).currentUser;return Object(b.jsx)("div",{className:"banner-bg",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"banner-con",children:Object(b.jsxs)(f.a,{className:"banner-text",children:[Object(b.jsx)(v.a,{variant:"h4",gutterBottom:!0,children:y}),Object(b.jsx)(v.a,{variant:"body1",gutterBottom:!0,children:N}),e?Object(b.jsx)(s.b,{to:"/createproject",className:"banner-btn",children:"Create a project"}):Object(b.jsx)(s.b,{to:{pathname:"login",value:"home"},className:"banner-btn",children:"Create a project"})]})})})})},S=function(){Object(n.useContext)(m).currentUser;return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"container mt-5",children:[Object(b.jsx)("h1",{children:"Welcome"}),Object(b.jsx)("p",{children:"This is the dashboard, if you can see this you're logged in."}),Object(b.jsx)("button",{onClick:function(){return d.auth().signOut()},className:"btn btn-danger",children:"Sign Out"})]})})},k=a(197),w=a(200),T=a(199),B=a(198),F=a(201),I=a(196),D=a(195),P=a(222);var W=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(!1),r=Object(l.a)(i,2),o=r[0],j=r[1],m=d.firestore().collection("User");function u(){m.limit(9).onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),c(t),j(!1)}))}function p(e){m.where("type","==",e).limit(10).onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),c(t),j(!0)}))}Object(n.useEffect)((function(){0==o?u():p()}),[]);var h=Object(D.a)((function(e){return{root:{"& > *":{margin:e.spacing(5)}},icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(5)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)},chip:{margin:e.spacing(.5)}}}))();return Object(b.jsx)("div",{className:h.root,children:Object(b.jsxs)("div",{children:[Object(b.jsxs)(I.a,{container:!0,justify:"center",children:[Object(b.jsx)(P.a,{size:"small",label:"Tech",onClick:function(){return p("Tech")},variant:"outlined",className:h.chip}),Object(b.jsx)(P.a,{size:"small",label:"Community",onClick:function(){return p("Community")},variant:"outlined",className:h.chip}),Object(b.jsx)(P.a,{size:"small",label:"Science",onClick:function(){return p("Science")},variant:"outlined",className:h.chip}),Object(b.jsx)(P.a,{size:"small",x:!0,label:"Reset",onClick:u,variant:"outlined",className:h.chip})]}),Object(b.jsx)(f.a,{className:h.cardGrid,maxWidth:"md",children:Object(b.jsx)(I.a,{container:!0,spacing:4,children:a.map((function(e){return Object(b.jsx)(I.a,{item:!0,xs:12,sm:6,md:4,children:Object(b.jsxs)(k.a,{className:h.card,children:[Object(b.jsx)(B.a,{className:h.cardMedia,image:"https://source.unsplash.com/random",title:"Image title"}),Object(b.jsxs)(T.a,{className:h.cardContent,children:[Object(b.jsx)(v.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.name}),Object(b.jsx)(v.a,{children:e.message})]}),Object(b.jsxs)(w.a,{children:[Object(b.jsx)(F.a,{size:"small",color:"primary",children:"View"}),Object(b.jsx)(s.b,{to:{pathname:"/testreceive",value:e.name},children:"Test"})]})]})},e)}))})})]})})},A=function(){var e=Object(n.useContext)(m).currentUser,t=Object(D.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}}))();function a(){return Object(b.jsxs)(v.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(b.jsx)(s.b,{color:"inherit",href:"/",children:"Science3"})," ",(new Date).getFullYear(),"."]})}return e?Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{children:[Object(b.jsx)(O,{}),Object(b.jsx)(C,{}),Object(b.jsx)(S,{}),Object(b.jsx)(W,{}),Object(b.jsxs)("footer",{className:t.footer,children:[Object(b.jsx)(v.a,{variant:"h6",align:"center",gutterBottom:!0,children:"Footer"}),Object(b.jsx)(v.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",children:"Something here to give the footer a purpose!"}),Object(b.jsx)(a,{})]})]})}):Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{children:[Object(b.jsx)(O,{}),Object(b.jsx)(C,{}),Object(b.jsx)(W,{}),Object(b.jsxs)("footer",{className:t.footer,children:[Object(b.jsx)(v.a,{variant:"h6",align:"center",gutterBottom:!0,children:"Footer"}),Object(b.jsx)(v.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",children:"Something here to give the footer a purpose!"}),Object(b.jsx)(a,{})]})]})})},E=a(79),R=a.n(E),L=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],c=t[1];return a?Object(b.jsx)(o.a,{to:"/dashboard"}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O,{}),Object(b.jsxs)("div",{className:"container mt-5",children:[Object(b.jsx)("h1",{children:"Sign Up"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.elements,a=t.email,n=t.password;try{d.auth().createUserWithEmailAndPassword(a.value,n.value),c(!0)}catch(i){alert(i)}},children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{for:"exampleInputEmail1",className:"form-label",children:"Email address"}),Object(b.jsx)("input",{type:"email",name:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),Object(b.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{for:"exampleInputPassword1",className:"form-label",children:"Password"}),Object(b.jsx)("input",{type:"password",name:"password",className:"form-control",id:"exampleInputPassword1"})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"}),Object(b.jsx)(s.b,{to:"login",className:"btn btn-success ms-2",children:"Login"})]})]})]})},U=a(80),G=a(81),z=a(84),M=a(83),Y=d.firestore();n.Component;var q=function(){return Object(b.jsx)("div",{})},V=a(35),H=a(82),J=d.firestore().collection("User"),X=function(e){Object(z.a)(a,e);var t=Object(M.a)(a);function a(){var e;Object(U.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={post:[]},e}return Object(G.a)(a,[{key:"componentDidMount",value:function(){var e=this;J.limit(10).onSnapshot((function(t){var a=[];t.forEach((function(e){a.push(e.data())})),e.setState({post:a})}))}},{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h3",{className:"mt-3",children:" Card "}),this.state.post.map((function(e){var t=e.name;return Object(b.jsx)(H.a,{className:"m-3",children:Object(b.jsxs)(V.a,{children:[Object(b.jsxs)(V.a.Body,{children:[Object(b.jsxs)(V.a.Title,{children:[" ",e.name," "]}),Object(b.jsx)(V.a.Text,{children:e.message})]}),Object(b.jsx)(V.a.Footer,{children:Object(b.jsx)(s.b,{to:{pathname:"/testreceive",value:{Projectname:t}},children:Object(b.jsx)(V.a,{children:"Read More..."})})})]})},e.name)}))]})}}]),a}(n.Component),K=function(){var e=d.firestore().collection("projects"),t=Object(n.useState)([]),a=Object(l.a)(t,2),c=a[0],i=a[1],r=Object(o.g)().value;return console.log(r),Object(n.useEffect)((function(){e.where("projectName","==","".concat(r)).onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),i(t)}))}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O,{}),Object(b.jsxs)("div",{className:"container mt-5",children:[c.map((function(e){return Object(b.jsx)(H.a,{children:Object(b.jsx)(V.a,{children:Object(b.jsxs)(V.a.Body,{children:[Object(b.jsx)(V.a.Title,{className:"mt-5",children:e.projectName}),Object(b.jsx)(V.a.Text,{children:e.description})]})})},e.projectName)})),Object(b.jsx)(s.b,{to:"/",children:Object(b.jsx)("button",{className:"btn btn-outline-primary mt-4",children:"back"})})]})]})},_=a(218),Q=a(202),Z=a(219),$=a(207),ee=a(217),te=a(216),ae=a(111),ne=a.n(ae);function ce(){return Object(b.jsxs)(v.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(b.jsx)(s.b,{color:"inherit",href:"/",children:"Science3"})," ",(new Date).getFullYear(),"."]})}var ie=Object(D.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function re(){var e=Object(o.g)().value,t=Object(n.useContext)(m).currentUser,a=ie();if(t&&e)return Object(b.jsx)(o.a,{to:"/createproject"});if(t&&!e)return Object(b.jsx)(o.a,{to:"/"});var c={signInFlow:"popup",signInOptions:[j.a.auth.GoogleAuthProvider.PROVIDER_ID],callbacks:{signInSuccess:function(){return!1}}};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O,{}),Object(b.jsxs)(f.a,{component:"main",maxWidth:"xs",children:[Object(b.jsx)(Q.a,{}),Object(b.jsxs)("div",{className:a.paper,children:[Object(b.jsx)(_.a,{className:a.avatar,children:Object(b.jsx)(ne.a,{})}),Object(b.jsx)(v.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(b.jsxs)("form",{className:a.form,noValidate:!0,onSubmit:function(e){e.preventDefault();var t=e.target.elements,a=t.email,n=t.password;try{d.auth().signInWithEmailAndPassword(a.value,n.value)}catch(c){alert(c)}},children:[Object(b.jsx)(Z.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(b.jsx)(Z.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(b.jsx)($.a,{control:Object(b.jsx)(ee.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(b.jsx)(F.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,children:"Sign In"}),Object(b.jsxs)(I.a,{container:!0,children:[Object(b.jsx)(I.a,{item:!0,xs:!0,children:Object(b.jsx)(s.b,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(b.jsx)(I.a,{item:!0,children:Object(b.jsx)(s.b,{href:"#",variant:"body2",children:"Don't have an account? Sign Up"})})]}),Object(b.jsx)(R.a,{uiConfig:c,firebaseAuth:j.a.auth()})]})]}),Object(b.jsx)(te.a,{mt:8,children:Object(b.jsx)(ce,{})})]})]})}var se=a(209),oe=a(112),le=a.n(oe),je=a(210),de=a(208);function be(){return Object(b.jsxs)(v.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(b.jsx)(de.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var me=Object(D.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}})),ue=[1,2,3,4,5,6,7,8,9];function pe(){var e=me();return Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsx)(Q.a,{}),Object(b.jsx)(se.a,{position:"relative",children:Object(b.jsxs)(je.a,{children:[Object(b.jsx)(le.a,{className:e.icon}),Object(b.jsx)(v.a,{variant:"h6",color:"inherit",noWrap:!0,children:"Album layout"})]})}),Object(b.jsxs)("main",{children:[Object(b.jsx)("div",{className:e.heroContent,children:Object(b.jsxs)(f.a,{maxWidth:"sm",children:[Object(b.jsx)(v.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,children:"Album layout"}),Object(b.jsx)(v.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0,children:"Something short and leading about the collection below\u2014its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely."}),Object(b.jsx)("div",{className:e.heroButtons,children:Object(b.jsxs)(I.a,{container:!0,spacing:2,justify:"center",children:[Object(b.jsx)(I.a,{item:!0,children:Object(b.jsx)(F.a,{variant:"contained",color:"primary",children:"Main call to action"})}),Object(b.jsx)(I.a,{item:!0,children:Object(b.jsx)(F.a,{variant:"outlined",color:"primary",children:"Secondary action"})})]})})]})}),Object(b.jsx)(f.a,{className:e.cardGrid,maxWidth:"md",children:Object(b.jsx)(I.a,{container:!0,spacing:4,children:ue.map((function(t){return Object(b.jsx)(I.a,{item:!0,xs:12,sm:6,md:4,children:Object(b.jsxs)(k.a,{className:e.card,children:[Object(b.jsx)(B.a,{className:e.cardMedia,image:"https://source.unsplash.com/random",title:"Image title"}),Object(b.jsxs)(T.a,{className:e.cardContent,children:[Object(b.jsx)(v.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Heading"}),Object(b.jsx)(v.a,{children:"This is a media card. You can use this section to describe the content."})]}),Object(b.jsxs)(w.a,{children:[Object(b.jsx)(F.a,{size:"small",color:"primary",children:"View"}),Object(b.jsx)(F.a,{size:"small",color:"primary",children:"Edit"})]})]})},t)}))})})]}),Object(b.jsxs)("footer",{className:e.footer,children:[Object(b.jsx)(v.a,{variant:"h6",align:"center",gutterBottom:!0,children:"Footer"}),Object(b.jsx)(v.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",children:"Something here to give the footer a purpose!"}),Object(b.jsx)(be,{})]})]})}var he=a(115),xe=a(221),ge=a(213),Oe=(a(163),a(93),a(220)),fe=a(215),ve=a(205);a(206),a(211),a(212),Object(D.a)((function(e){return{listItem:{padding:e.spacing(1,0)},total:{fontWeight:700},title:{marginTop:e.spacing(2)}}}));Object(D.a)((function(e){return{appBar:{position:"relative"},layout:Object(p.a)({width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:Object(p.a)({marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)}}}));var ye=a(214);Object(D.a)((function(e){return{root:{width:"100%"},layout:Object(p.a)({width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:Object(p.a)({marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),stepper:{padding:e.spacing(3,0,5)},button:{marginRight:e.spacing(1)},completed:{display:"inline-block"},instructions:{marginTop:e.spacing(1),marginBottom:e.spacing(1)}}}));var Ne=function(){var e=d.firestore(),t=Object(D.a)((function(e){return{root:{width:"100%"},layout:Object(p.a)({width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:Object(p.a)({marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),stepper:{padding:e.spacing(3,0,5)},button:{marginTop:e.spacing(3)},completed:{display:"inline-block"},instructions:{marginTop:e.spacing(1),marginBottom:e.spacing(2)},formControl:{minWidth:120}}}))(),a=Object(n.useState)(0),i=Object(l.a)(a,2),r=i[0],j=i[1],m=Object(n.useState)({}),u=Object(l.a)(m,2),h=u[0],x=(u[1],["General Information","Project Budget","Review information"]),g=Object(n.useState)({projectName:"",description:"",budget:"",category:"",createdBy:""}),f=Object(l.a)(g,2),y=f[0],N=f[1],C=Object(n.useState)(""),S=Object(l.a)(C,2),k=S[0],w=S[1];function T(){return Object(b.jsxs)(v.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(b.jsx)(s.b,{color:"inherit",to:"/",children:"Science3"})," ",(new Date).getFullYear(),"."]})}return k?Object(b.jsx)(o.a,{to:{pathname:"/testreceive",value:y.projectName}}):(console.log(y),console.log(k),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O,{}),Object(b.jsxs)("div",{className:t.layout,children:[Object(b.jsxs)(he.a,{className:t.paper,children:[Object(b.jsx)(v.a,{component:"h1",variant:"h4",align:"center",children:"Create Project"}),Object(b.jsx)(xe.a,{nonLinear:!0,activeStep:r,className:t.stepper,children:x.map((function(e,t){return Object(b.jsx)(ge.a,{children:Object(b.jsx)(ye.a,{onClick:(a=t,function(){j(a)}),completed:h[t],children:e})},e);var a}))}),Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsx)(Q.a,{}),Object(b.jsx)(v.a,{variant:"h6",gutterBottom:!0,className:t.instructions,children:"General Information"}),Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a=d.auth().currentUser,n={projectName:t.target.projectName.value,description:t.target.description.value,budget:t.target.budget.value,category:t.target.category.value,createdBy:a.email};N(n),console.log(n),e.collection("projects").add(n),w("true")},children:[Object(b.jsxs)(I.a,{container:!0,spacing:3,children:[Object(b.jsx)(I.a,{item:!0,xs:12,children:Object(b.jsx)(Z.a,{required:!0,id:"projectName",name:"projectName",label:"Project name",variant:"outlined",fullWidth:!0})}),Object(b.jsx)(I.a,{item:!0,xs:12,children:Object(b.jsx)(Z.a,{required:!0,id:"description",name:"description",label:"Description",variant:"outlined",multiline:!0,rows:4,fullWidth:!0})}),Object(b.jsx)(I.a,{item:!0,xs:12,sm:6,children:Object(b.jsx)(Z.a,{required:!0,id:"budget",name:"budget",label:"Budget",variant:"outlined",fullWidth:!0})}),Object(b.jsx)(I.a,{item:!0,xs:12,sm:6,children:Object(b.jsxs)(ve.a,{variant:"outlined",fullWidth:!0,children:[Object(b.jsx)(Oe.a,{htmlFor:"outlined-age-native-simple",children:"Category"}),Object(b.jsxs)(fe.a,{native:!0,label:"Category",inputProps:{name:"category",id:"outlined-age-native-simple"},children:[Object(b.jsx)("option",{"aria-label":"None",value:""}),Object(b.jsx)("option",{value:"Tech",children:"Tech"}),Object(b.jsx)("option",{value:"Science",children:"Science"}),Object(b.jsx)("option",{value:"Community",children:"Community"})]})]})})]}),Object(b.jsx)(F.a,{variant:"contained",color:"primary",type:"submit",className:t.button,children:"Submit"})]})]})]}),Object(b.jsx)(T,{})]})]}))};var Ce=function(){return Object(b.jsx)(u,{children:Object(b.jsx)(s.a,{children:Object(b.jsxs)(o.d,{children:[Object(b.jsx)(o.b,{exact:!0,path:"/",component:A}),Object(b.jsx)(o.b,{exact:!0,path:"/Dashboard",component:S}),Object(b.jsx)(o.b,{exact:!0,path:"/login",component:re}),Object(b.jsx)(o.b,{exact:!0,path:"/signup",component:L}),Object(b.jsx)(o.b,{exact:!0,path:"/createproject",component:Ne}),Object(b.jsx)(o.b,{exact:!0,path:"/project",component:q}),Object(b.jsx)(o.b,{exact:!0,path:"/testsend",component:X}),Object(b.jsx)(o.b,{exact:!0,path:"/testreceive",component:K}),Object(b.jsx)(o.b,{exact:!0,path:"/materialtest",component:re}),Object(b.jsx)(o.b,{exact:!0,path:"/materialcard",component:pe})]})})})},Se=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,225)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(Ce,{})}),document.getElementById("root")),Se()},88:function(e,t,a){}},[[158,1,2]]]);
//# sourceMappingURL=main.c40216ed.chunk.js.map