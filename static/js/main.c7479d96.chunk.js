(this["webpackJsonpmy-react-portfolio-mcheung008"]=this["webpackJsonpmy-react-portfolio-mcheung008"]||[]).push([[0],{126:function(e,t,a){},133:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var i=a(2),n=a(0),s=a.n(n),c=a(29),r=a.n(c),l=(a(126),a(17)),o=a(21),d=a(20),j=a(19),h=a(65),m=a(12),u=a(23),b=a(66),p=a(112),x=a(31),O=a(27);var f=function(){return Object(i.jsx)("footer",{className:"mt-5",children:Object(i.jsx)(u.a,{fluid:!0,children:Object(i.jsxs)(x.a,{className:"border-top justify-content-between p-3",children:[Object(i.jsx)(O.a,{className:"p-0",md:3,sm:12,children:"This site was made with \u2764\ufe0f."}),Object(i.jsx)(O.a,{className:"p-0 d-flex justify-content-end",md:3,children:"\xa9\ufe0f 2021"})]})})})},g=a(48),y=a(98);var v=function(e){var t=Object(y.b)({opacity:1,from:{opacity:0}});return Object(i.jsxs)(y.a.div,{className:"m-card-info",style:t,children:[Object(i.jsx)("p",{className:"m-card-title",children:e.title}),Object(i.jsx)("p",{className:"m-card-sub-title",children:e.subTitle}),Object(i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:"View"})]})};var w=function(e){return Object(i.jsxs)("div",{className:"d-inline-block m-card",onClick:function(t){return e.click(e.item)},children:[Object(i.jsx)("img",{className:"m-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item&&Object(i.jsx)(v,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link})]})},k=a.p+"static/media/sportsPage.4c77a79e.png",C=a.p+"static/media/filmConnector.8f8f098a.png",N=a.p+"static/media/wvw.9e6653a8.png",S=a.p+"static/media/employee.714e0889.png",T=a.p+"static/media/fitness.32d81551.png",F=a.p+"static/media/password.028ab373.png",G=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleProjectCardClick=function(e,t){var a=Object(g.a)(n.state.items);a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),n.setState({items:a})},n.makeItems=function(e){return e.map((function(e){return Object(i.jsx)(w,{item:e,click:function(t){return n.handleProjectCardClick(e.id,t)}},e.id)}))},n.state={items:[{id:0,title:"Your Local Sports Page",subTitle:"Easily find information about your favorite sports teams.",imgSrc:k,link:"https://jackryansmith.github.io/Group-work/",selected:!1},{id:1,title:"Film Connector",subTitle:"Finding and comparing favorite movies with other users.",imgSrc:C,link:"https://film-connector.herokuapp.com/",selected:!1},{id:2,title:"Willamette Valley Vineyards",subTitle:"Schedule your wine tour.",imgSrc:N,link:"https://shrouded-wildwood-55739.herokuapp.com/",selected:!1},{id:3,title:"Employee Directory",subTitle:"Search for individual employees in the company.",imgSrc:S,link:"https://mcheung008.github.io/bootcampspot-week19-hw/",selected:!1},{id:4,title:"Fitness Tracker",subTitle:"Add, track, and store workouts.",imgSrc:T,link:"https://cryptic-wildwood-83467.herokuapp.com/",selected:!1},{id:5,title:"Password Generator",subTitle:"This app will help you create a random unique password.",imgSrc:F,link:"https://mcheung008.github.io/bootcamp-week3-hw/",selected:!1}]},n}return Object(o.a)(a,[{key:"render",value:function(){return Object(i.jsx)(u.a,{fluid:!0,children:Object(i.jsx)(x.a,{className:"justify-content-around",children:this.makeItems(this.state.items)})})}}]),a}(s.a.Component),I=a(109);var L=function(e){return Object(i.jsx)(I.a,{className:"bg-transparent jumbotron-fluid p-0",children:Object(i.jsx)(u.a,{fluid:!0,children:Object(i.jsx)(x.a,{className:"justify-content-center py-5",children:Object(i.jsxs)(O.a,{md:8,sm:12,children:[e.title&&Object(i.jsx)("h1",{classname:"display-1 font-weight-bolder",children:e.title}),e.subTitle&&Object(i.jsx)("h3",{className:"display-6 font-weight-light",children:e.subTitle}),e.text&&Object(i.jsx)("h3",{className:"lead font-weight-light",children:e.text})]})})})})},M=a(59);var E=function(){return Object(i.jsx)(u.a,{fluid:!0,children:Object(i.jsx)(x.a,{className:"justify-content-center",children:Object(i.jsxs)(O.a,{md:4,children:[Object(i.jsx)(M.a,{href:"https://github.com/mcheung008",children:"GitHub"}),Object(i.jsx)(M.a,{href:"https://www.linkedin.com/in/michael-cheung-73353396",children:"LinkedIn"}),Object(i.jsx)(M.a,{href:"https://drive.google.com/file/d/1IMNuwv-sFvy3yYClwG8_YLGe5_sTxWuu/view?usp=sharing",children:"Resume"})]})})})};var P=function(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)(L,{title:e.title,subTitle:e.subTitle,text:e.text}),Object(i.jsx)(E,{}),Object(i.jsx)(G,{})]})};var B=function(e){return Object(i.jsx)(u.a,{fluid:!0,children:Object(i.jsx)(x.a,{className:"justify-content-center",children:Object(i.jsx)(O.a,{md:8,children:e.children})})})};var A=function(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)(L,{title:e.title}),Object(i.jsxs)(B,{children:[Object(i.jsx)("p",{children:"Based in Eugene, Oregon. I' am an aspiring software engineer who's into all things tech and always striving to learn new things."}),Object(i.jsx)("p",{children:"I have experience with JavaScript, jQuery, Express.js, React.js, Node.js, MongoDB, MySQL, Git, and more."}),Object(i.jsx)("p",{children:"I have worked in the restaurant industry for many years and I currently run a restaurant with my family. Besides food and coding I also love to play video games and watch tech videos on YouTube. My dream is to someday work for one of the big tech companies such as Google or Apple."})]})]})},D=a(47),Y=a(30),q=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e)).handleChange=function(e){console.log(e);var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;i.setState(Object(D.a)({},n,a))},i.handleSubmit=function(e){e.preventDefault(),i.setState({disabled:!0})},i.state={name:"",email:"",message:"",disabled:!1,emailSent:null},i}return Object(o.a)(a,[{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(L,{title:this.props.title}),Object(i.jsx)(B,{children:Object(i.jsxs)(Y.a,{onSubmit:this.handleSubmit,children:[Object(i.jsxs)(Y.a.Group,{children:[Object(i.jsx)(Y.a.Label,{htmlFor:"full-name",children:"Full Name"}),Object(i.jsx)(Y.a.Control,{id:"full-name",name:"name",type:"text",value:this.state.name,onChange:this.handleChange})]}),Object(i.jsxs)(Y.a.Group,{children:[Object(i.jsx)(Y.a.Label,{htmlFor:"email",children:"Email"}),Object(i.jsx)(Y.a.Control,{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})]}),Object(i.jsxs)(Y.a.Group,{children:[Object(i.jsx)(Y.a.Label,{htmlFor:"message",children:"Message"}),Object(i.jsx)(Y.a.Control,{id:"message",name:"message",as:"textarea",rows:"3",value:this.state.message,onChange:this.handleChange})]}),Object(i.jsx)(M.a,{className:"d-inline-block",variant:"primary",type:"submit",disable:this.state.disabled,children:"Send"}),!0===this.state.emailSent&&Object(i.jsx)("p",{className:"d-inline success-msg",children:"Email Sent"}),!1===this.state.emailSent&&Object(i.jsx)("p",{className:"d-inline err-msg",children:"Email Not Sent"})]})})]})}}]),a}(s.a.Component),H=a(152),J=a(97),V=function(){return Object(i.jsxs)(H.a,{as:"h2",children:[Object(i.jsx)(J.a,{name:"coffee"}),Object(i.jsx)(H.a.Content,{children:"Greetings, \ud83d\udd96\ufe0f"})]})},W=(a(133),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e)).state={title:"Michael Cheung",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:"Welcome to my portfolio!",subTitle:"Contact me: \ud83d\udce7mcheung008@gmail.com --- \ud83d\udcf1541-206-7951",text:"Check out some of my projects below and always feel free to contact me with any questions or critiques you may have. My door (and email) are always open."},about:{title:"About Me"},contact:{title:"Let's Chat!"}},i}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(i.jsx)(h.a,{children:Object(i.jsxs)(u.a,{className:"p-0",fluid:!0,children:[Object(i.jsx)(V,{}),Object(i.jsxs)(b.a,{className:"border-bottom",bg:"transparent",expand:"lg",children:[Object(i.jsx)(b.a.Brand,{children:"Michael Cheung"}),Object(i.jsx)(b.a.Toggle,{className:"border-0","aria-controls":"Navbar-toggle"}),Object(i.jsx)(b.a.Collapse,{id:"navbar-toggle",children:Object(i.jsxs)(p.a,{className:"ml-auto",children:[Object(i.jsx)(h.b,{className:"nav-link",to:"/",children:"Home"}),Object(i.jsx)(h.b,{className:"nav-link",to:"/about",children:"About"}),Object(i.jsx)(h.b,{className:"nav-link",to:"/contact",children:"Contact"})]})})]}),Object(i.jsx)(m.a,{path:"/",exact:!0,render:function(){return Object(i.jsx)(P,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),Object(i.jsx)(m.a,{path:"/about",render:function(){return Object(i.jsx)(A,{title:e.state.about.title})}}),Object(i.jsx)(m.a,{path:"/contact",render:function(){return Object(i.jsx)(q,{title:e.state.contact.title})}}),Object(i.jsx)(f,{})]})})}}]),a}(s.a.Component)),_=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,153)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),i(e),n(e),s(e),c(e)}))};a(135);r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(W,{})}),document.getElementById("root")),_()}},[[136,1,2]]]);
//# sourceMappingURL=main.c7479d96.chunk.js.map