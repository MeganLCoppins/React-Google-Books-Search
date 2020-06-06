(this["webpackJsonpbook-finder"]=this["webpackJsonpbook-finder"]||[]).push([[0],{26:function(e,t,a){e.exports=a.p+"static/media/book.fe5acd41.jpeg"},29:function(e,t,a){e.exports=a(60)},34:function(e,t,a){},35:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(25),r=a.n(l),i=(a(34),a(8)),c=a(6),u=a(26),s=a.n(u);a(35);var m=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark  navBarBg"},o.a.createElement("img",{src:s.a,alt:"open book",id:"book"}),o.a.createElement(i.b,{to:"/",className:"nav-link googleBooks"},"Book Finder"),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},o.a.createElement("ul",{className:"navbar-nav mr-auto nav"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(i.b,{to:"/",className:"nav-link",id:"navLink"},"Search")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(i.b,{to:"/saved",className:"nav-link",id:"navLink"},"Saved")))))},d=a(10);a(41);var b=function(){return o.a.createElement("div",{className:"jumbotron jumbotron-fluid",style:{width:"100%",textAlign:"center",color:"darkslateblue",marginBottom:"0px",marginTop:"80px",backgroundColor:"rgba(245, 245, 245, 0.748)"}},o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"display-4",style:{fontWeight:"bold"}},"Google Book Finder"),o.a.createElement("h3",{className:"lead",style:{fontSize:"25px"}},"Search For and Save Your Book of Choice")))};var g=function(e){var t=e.query,a=e.handleInputChange,n=e.handleFormSubmit;return o.a.createElement("div",{className:"input-group mb-3"},o.a.createElement("input",{type:"text",id:"Title",name:"query",value:t,onChange:a,className:"form-control",placeholder:"Book's Name","aria-label":"Book Name","aria-describedby":"button-addon2",style:{border:"2px solid darkslateblue"}}),o.a.createElement("div",{className:"input-group-append"},o.a.createElement("button",{className:"btn btn-outline-secondary",type:"button",id:"button-addon2",onClick:n,style:{backgroundColor:"darkslateblue",borderColor:"darkslateblue",color:"lavender"}},"Search")))};a(42);var p=function(e){var t=e.title,a=e.subtitle,n=e.authors,l=e.link,r=e.description,i=e.image,c=e.Button;return o.a.createElement("div",{className:"card"},o.a.createElement("h3",{className:"card-title",style:{textAlign:"center",paddingTop:"3%",paddingBottom:"3%"}},t),o.a.createElement("h5",{style:{backgroundColor:"lavender",textAlign:"center"}},o.a.createElement("strong",null,"Authors: "),n),o.a.createElement("img",{src:i,className:"card-img-top",id:"cardImg",alt:t}),o.a.createElement("div",{className:"card-body",style:{textAlign:"center"}},o.a.createElement("h5",{style:{textAlign:"center"}},a),o.a.createElement("a",{href:l,style:{color:"black",fontWeight:"bold"}},"View the Book!"),o.a.createElement("p",{className:"card-text",style:{textAlign:"left"}},r),o.a.createElement("ul",{className:"list-group list-group-flush",style:{textAlign:"center"}},o.a.createElement(c,null))))},v=a(11),f=a.n(v),k=function(e){return f.a.get("/api/google",{params:{q:"title:"+e}})},E=function(){return f.a.get("/api/books/")},h=function(e){return f.a.post("/api/books",e)},y=function(e){return f.a.delete("/api/books/"+e)};var N=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(""),i=Object(d.a)(r,2),c=i[0],u=i[1];function s(){k(c).then((function(e){return l(e.data)})).catch((function(){return l([])}))}return o.a.createElement("div",null,o.a.createElement(b,null),o.a.createElement("div",{style:{backgroundColor:"rgba(245, 245, 245, 0.748)",padding:"10%",paddingTop:"3%",marginBottom:"60%"}},o.a.createElement(g,{handleInputChange:function(e){var t=e.target.value;u(t)},handleFormSubmit:function(e){e.preventDefault(),s()},query:c}),a.length?o.a.createElement("div",null,a.map((function(e){return o.a.createElement(p,{key:e.id,image:e.volumeInfo.imageLinks.thumbnail,title:e.volumeInfo.title,subtitle:e.volumeInfo.subtitle,description:e.volumeInfo.description,authors:e.volumeInfo.authors.join(", "),link:e.volumeInfo.infoLink,Button:function(){return o.a.createElement("button",{onClick:function(){return function(e){var t=a.find((function(t){return t.id===e}));h({googleId:t.id,image:t.volumeInfo.imageLinks.thumbnail,title:t.volumeInfo.title,subtitle:t.volumeInfo.subtitle,description:t.volumeInfo.description,authors:t.volumeInfo.authors,link:t.volumeInfo.infoLink}).then((function(){return s()}))}(e.id)},style:{background:"darkslateblue",color:"white"}},"Save Book")}})}))):o.a.createElement("h2",{style:{textAlign:"center",color:"darkslateblue"}},"Search For a Book to Display Results")))};var B=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],l=t[1];function r(){E().then((function(e){return l(e.data)})).catch((function(e){return console.log(e)}))}return Object(n.useEffect)((function(){r()}),[]),o.a.createElement("div",null,o.a.createElement("h1",{style:{background:"rgba(245, 245, 245, 0.748)",color:"darkslateblue",textAlign:"center",padding:"2%",marginTop:"6%",marginBottom:"0",fontSize:"3.5rem"}},"Saved Books"),o.a.createElement("div",{style:{backgroundColor:"rgba(245, 245, 245, 0.748)",padding:"10%",paddingTop:"2%",marginBottom:"15%"}},a.length?o.a.createElement("div",null,a.map((function(e){return o.a.createElement(p,{key:e._id,image:e.image,title:e.title,subtitle:e.subtitle,description:e.description,authors:e.authors.join(", "),link:e.link,Button:function(){return o.a.createElement("button",{onClick:function(){return t=e._id,void y(t).then((function(e){return r()}));var t},style:{background:"darkslateblue",color:"white"}},"Remove Book")}})}))):o.a.createElement("h2",{style:{textAlign:"center",color:"white"}},"No Saved Books")))};var x=function(){return o.a.createElement(i.a,null,o.a.createElement(m,null),o.a.createElement("div",{className:"container"},o.a.createElement(c.c,null,o.a.createElement(c.a,{exact:!0,path:"/",component:N})),o.a.createElement(c.c,null,o.a.createElement(c.a,{exact:!0,path:"/saved",component:B}))))};r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(x,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.d8119a1d.chunk.js.map