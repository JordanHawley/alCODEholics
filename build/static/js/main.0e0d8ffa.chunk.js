(this.webpackJsonpstarting_code=this.webpackJsonpstarting_code||[]).push([[0],{34:function(e,t,a){e.exports=a(64)},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),l=a.n(c),o=a(11),s=a(10),u=a(7),i=a(65),p=a(4),m=a.n(p),d=a(9),f=a(15),h=a.n(f);function E(){return(E=Object(d.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/api/alcohol");case 3:return t=e.sent,a=t.data.alcohol,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function v(){return(v=Object(d.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/api/users");case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function b(e,t){return g.apply(this,arguments)}function g(){return(g=Object(d.a)(m.a.mark((function e(t,a){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("/api/users/register",{username:t,password:a});case 3:return n=e.sent,r=n.data,localStorage.setItem("data",JSON.stringify(r)),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function y(e,t){return x.apply(this,arguments)}function x(){return(x=Object(d.a)(m.a.mark((function e(t,a){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("/api/users/login",{username:t,password:a});case 3:return n=e.sent,r=n.data,localStorage.setItem("data",JSON.stringify(r)),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function w(){return(w=Object(d.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{localStorage.removeItem("data")}catch(t){console.log(t)}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,t){return O.apply(this,arguments)}function O(){return(O=Object(d.a)(m.a.mark((function e(t,a){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("/api/cart/add",{userId:t,alcoholId:a});case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function k(){return(k=Object(d.a)(m.a.mark((function e(t,a){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.delete("/api/cart/remove/".concat(t,"/").concat(a));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function C(){return(C=Object(d.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/api/cart/pending/".concat(t));case 3:return a=e.sent,n=a.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function N(){return(N=Object(d.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.patch("/api/cart/checkout/".concat(t));case 3:return a=e.sent,n=a.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function U(){return(U=Object(d.a)(m.a.mark((function e(t,a){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.patch("/api/cart/quantity/".concat(t,"/").concat(a));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}a(17);var S=function(e){var t=e.user,a=e.setUser,n=Object(u.f)();return r.a.createElement("div",{className:"Nav",style:{display:"flex",justifyContent:"space-around",marginTop:"10px"}},t?r.a.createElement("h3",null,"Hello ",t.user.username,"! Time to get Schwifty!"):"",r.a.createElement(s.b,{to:"/alcohol"},r.a.createElement(i.a,{className:"navButton"},"All Alcohols")),t?r.a.createElement(i.a,{className:"navButton",onClick:function(){!function(){w.apply(this,arguments)}(),a(null),n.push("/registerUserAccount")}},"Log Out"):r.a.createElement(s.b,{to:"/registerUserAccount"},r.a.createElement(i.a,{className:"navButton"},"Login/Register User")),r.a.createElement(s.b,{to:"/cart"},r.a.createElement(i.a,{className:"navButton"},"Cart")),t&&t.user.isAdmin?r.a.createElement(s.b,{to:"/users"},r.a.createElement(i.a,{className:"navButton"},"User List")):"")},A=function(e){var t=e.users,a=e.setUsers;return Object(n.useEffect)((function(){(function(){return v.apply(this,arguments)})().then((function(e){a(e)})).catch(console.error)}),[a]),r.a.createElement("div",{className:"Users"},t.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("h1",null,"Users: ",e.username))})))},P=a(66),T=a(67),B=a(68),I=a(69),D=function(e){var t=e.setUser,a=Object(n.useState)(""),c=Object(o.a)(a,2),l=c[0],p=c[1],f=Object(n.useState)(""),h=Object(o.a)(f,2),E=h[0],v=h[1],b=Object(u.f)();return r.a.createElement("div",{className:"RegisterForm"},r.a.createElement(P.a,{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"250px",marginTop:"150px",margin:"auto"},onSubmit:function(){var e=Object(d.a)(m.a.mark((function e(a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,y(l,E);case 4:(n=e.sent)?(t(n),console.log(n),b.push("/alcohol")):alert("Username or Password Do Not Match!"),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},r.a.createElement(T.a,null,r.a.createElement(B.a,{for:"username"},"Username"),r.a.createElement(I.a,{type:"text",id:"username",placeholder:"Enter Username",required:!0,value:l,onChange:function(e){return p(e.target.value)}})),r.a.createElement(T.a,null,r.a.createElement(B.a,{for:"password"},"Password"),r.a.createElement(I.a,{type:"password",id:"password",placeholder:"Enter Password",required:!0,value:E,onChange:function(e){return v(e.target.value)}})),r.a.createElement(i.a,{style:{marginTop:"5px"},type:"submit"},"Login"),r.a.createElement("h6",null,"Need an account? ",r.a.createElement(s.b,{to:"registerUserAccount"},"Register Here"))))},L=a(70),q=a(71),R=a(72),F=a(73),J=a(74),M=a(75),Y=function(e){var t=e.alcohols,a=e.setAlcohols,c=e.user,l=Object(u.f)();return Object(n.useEffect)((function(){(function(){return E.apply(this,arguments)})().then((function(e){a(e)})).catch(console.error)}),[]),r.a.createElement("div",{style:{marginTop:"30px"}},r.a.createElement("div",{className:"Alcohols"},t.map((function(e,t){return r.a.createElement("div",{className:"alcoholType",key:t},r.a.createElement(L.a,{style:{margin:"20px",padding:"12px",borderRadius:"15%",backgroundColor:"cornsilk",boxShadow:"5px 5px 5px"}},r.a.createElement(q.a,{top:!0,width:"100%",src:e.imageurl,alt:"Card image cap",style:{marginBottom:"10px",display:"flex",justifyContent:"center",alignSelf:"center",maxHeight:"220px",maxWidth:"220px"}}),r.a.createElement(R.a,null,r.a.createElement(F.a,{tag:"h5"},e.name),r.a.createElement(J.a,{tag:"h6",className:"mb-2 text-muted"},"Type: ",e.type," / Price: $",e.price),r.a.createElement(M.a,null,e.description,e.instock),c?r.a.createElement(i.a,{onClick:Object(d.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(c.user.id,e.id);case 2:l.push("/cart");case 3:case"end":return t.stop()}}),t)})))},"Add To Cart"):r.a.createElement(i.a,{onClick:function(){return l.push("/registerUserAccount")}},"Login/Register"))))}))))},H=function(e){var t=e.setUser,a=Object(n.useState)(""),c=Object(o.a)(a,2),l=c[0],p=c[1],f=Object(n.useState)(""),h=Object(o.a)(f,2),E=h[0],v=h[1],g=Object(u.f)();return r.a.createElement("div",{className:"RegisterForm"},r.a.createElement(P.a,{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"250px",marginTop:"150px",margin:"auto"},onSubmit:function(){var e=Object(d.a)(m.a.mark((function e(a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,b(l,E);case 4:(n=e.sent)?(t(n),g.push("/alcohol")):alert("Username already taken! Please try again!"),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},r.a.createElement(T.a,null,r.a.createElement(B.a,{for:"username"},"Username"),r.a.createElement(I.a,{type:"text",id:"username",placeholder:"Enter Username",required:!0,value:l,onChange:function(e){return p(e.target.value)}})),r.a.createElement(T.a,null,r.a.createElement(B.a,{for:"password"},"Password"),r.a.createElement(I.a,{type:"password",id:"password",placeholder:"Enter Password",required:!0,value:E,onChange:function(e){return v(e.target.value)}})),r.a.createElement(i.a,{style:{marginTop:"10px"},type:"submit"},"Register"),r.a.createElement("h6",null,"Already have an account? ",r.a.createElement(s.b,{to:"loginUserAccount"},"Login Here"))))},W=function(e){var t=e.user,a=Object(u.f)(),c=Object(n.useState)([]),l=Object(o.a)(c,2),i=l[0],p=l[1],m=0;return Object(n.useEffect)((function(){t&&function(e){return C.apply(this,arguments)}(t.user.id).then((function(e){e&&p(e)})).catch((function(e){return console.error(e)}))}),[]),t?(i.forEach((function(e){m=parseFloat((Math.round(100*(e.price*e.quantity+m))/100).toFixed(2))})),r.a.createElement("div",{id:"cart"},r.a.createElement("h1",null,"Your Cart"),i.map((function(e,a){return r.a.createElement("div",{className:"cartItem",key:a},r.a.createElement("div",null,e.name),r.a.createElement("label",{for:"item"},"Quantity:"),r.a.createElement("select",{name:"item",id:"item",onChange:function(t){!function(e,t){U.apply(this,arguments)}(e.id,t.target.value),window.location.reload()}},r.a.createElement("option",{selected:!0},e.quantity),r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"6"},"6"),r.a.createElement("option",{value:"7"},"7"),r.a.createElement("option",{value:"8"},"8"),r.a.createElement("option",{value:"9"},"9"),r.a.createElement("option",{value:"10"},"10")),r.a.createElement("div",null,"$",(Math.round(e.price*e.quantity*100)/100).toFixed(2)),r.a.createElement("button",{onClick:function(){!function(e,t){k.apply(this,arguments)}(t.user.id,e.id),window.location.reload()}},"Delete"))})),r.a.createElement("div",{id:"total"},"TOTAL: $",m),0===m?r.a.createElement("button",{id:"disabledButton",disabled:"true",className:"cartButton"},"Checkout"):r.a.createElement("button",{className:"cartButton",onClick:function(){!function(e){N.apply(this,arguments)}(t.user.id),p(new Array),a.push("/paymentform")}},"Checkout"))):r.a.createElement("div",{id:"loginBox",style:{display:"flex",justifyContent:"center",alignItems:"center",border:"3px solid black",height:"300px",backgroundColor:"orange",width:"1000px",marginTop:"300px",marginLeft:"20%",textAlign:"center"}},r.a.createElement("h1",null,"Please ",r.a.createElement(s.b,{to:"/loginUserAccount"},"Login")," or ",r.a.createElement(s.b,{to:"/registerUserAccount"},"Register")," to access the cart!"))},z=function(){return r.a.createElement("div",{className:"welcome-page"},r.a.createElement("h1",{className:"welcome-header"},"Welcome to alCODEholics!"),r.a.createElement("p",{className:"welcome-text"},"We are an online shop serving quality drinks since 2021. Please enjoy our wide selection and great prices."))},$=function(){var e=Object(u.f)();return r.a.createElement("div",{id:"payform"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-75"},r.a.createElement("div",{class:"container"},r.a.createElement("form",{action:"/action_page.php"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-50"},r.a.createElement("h3",null,"Billing Address"),r.a.createElement("label",{for:"fname"},r.a.createElement("i",{class:"fa fa-user"})," Full Name"),r.a.createElement("input",{type:"text",id:"fname",name:"firstname",placeholder:"John M. Doe"}),r.a.createElement("label",{for:"adr"},r.a.createElement("i",{class:"fa fa-address-card-o"})," Address"),r.a.createElement("input",{type:"text",id:"adr",name:"address",placeholder:"542 W. 15th Street"}),r.a.createElement("label",{for:"city"},r.a.createElement("i",{class:"fa fa-institution"})," City"),r.a.createElement("input",{type:"text",id:"city",name:"city",placeholder:"New York"}),r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-50"},r.a.createElement("label",{for:"state"},"State"),r.a.createElement("input",{type:"text",id:"state",name:"state",placeholder:"NY"})),r.a.createElement("div",{class:"col-50"},r.a.createElement("label",{for:"zip"},"Zip"),r.a.createElement("input",{type:"text",id:"zip",name:"zip",placeholder:"10001"})))),r.a.createElement("div",{class:"col-50"},r.a.createElement("h3",null,"Payment"),r.a.createElement("label",{for:"fname"},"Accepted Cards"),r.a.createElement("div",{class:"icon-container"},r.a.createElement("i",{class:"fa fa-cc-visa",style:{color:"navy"}}),r.a.createElement("i",{class:"fa fa-cc-amex",style:{color:"blue"}}),r.a.createElement("i",{class:"fa fa-cc-mastercard",style:{color:"red"}}),r.a.createElement("i",{class:"fa fa-cc-discover",style:{color:"orange"}})),r.a.createElement("label",{for:"cname"},"Name on Card"),r.a.createElement("input",{type:"text",id:"cname",name:"cardname",placeholder:"John More Doe"}),r.a.createElement("label",{for:"ccnum"},"Credit card number"),r.a.createElement("input",{type:"text",id:"ccnum",name:"cardnumber",placeholder:"1111-2222-3333-4444"}),r.a.createElement("label",{for:"expmonth"},"Exp Month"),r.a.createElement("input",{type:"text",id:"expmonth",name:"expmonth",placeholder:"September"}),r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-50"},r.a.createElement("label",{for:"expyear"},"Exp Year"),r.a.createElement("input",{type:"text",id:"expyear",name:"expyear",placeholder:"2018"})),r.a.createElement("div",{class:"col-50"},r.a.createElement("label",{for:"cvv"},"CVV"),r.a.createElement("input",{type:"text",id:"cvv",name:"cvv",placeholder:"352"}))))),r.a.createElement("input",{type:"submit",value:"Finish Payment",class:"paymentbtn",onClick:function(){e.push("/thankyoupage")}}))))))},_=function(){var e=Object(u.f)();return r.a.createElement("div",{style:{marginTop:"200px",marginLeft:"100px",marginRight:"100px",padding:"15px",height:"100%",width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"rgb(252, 124, 5)",boxShadow:"5px 5px 5px black"}},r.a.createElement("h1",null,"Thank You So Much For Your Purchase! Your order has been processed and will be fulfilled as soon as possible!"),r.a.createElement("button",{className:"navButton",style:{margin:"15px",backgroundColor:"rgb(240, 69, 154)"},onClick:function(){e.push("/alcohol")}},"Please continue to browse our selection!"))},V=(a(63),function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),i=Object(o.a)(l,2),p=i[0],m=i[1],d=Object(n.useState)(""),f=Object(o.a)(d,2),h=f[0],E=f[1],v=Object(n.useState)(""),b=Object(o.a)(v,2),g=b[0],y=b[1],x=Object(n.useState)(JSON.parse(localStorage.getItem("data"))),w=Object(o.a)(x,2),j=w[0],O=w[1];return r.a.createElement(s.a,null,r.a.createElement(u.c,null,r.a.createElement("div",{className:"App"},r.a.createElement(S,{user:j,setUser:O}),r.a.createElement(u.a,{exact:!0,path:"/"},r.a.createElement(z,null)),r.a.createElement(u.a,{path:"/alcohol"},r.a.createElement(Y,{alcohols:p,setAlcohols:m,user:j})),r.a.createElement(u.a,{path:"/registerUserAccount"},r.a.createElement(H,{username:h,setUsername:E,password:g,setPassword:y,setUser:O})),r.a.createElement(u.a,{path:"/loginUserAccount"},r.a.createElement(D,{username:h,setUsername:E,password:g,setPassword:y,setUser:O})),r.a.createElement(u.a,{path:"/cart"},r.a.createElement(W,{user:j})),r.a.createElement(u.a,{path:"/users"},r.a.createElement(A,{users:a,setUsers:c})),r.a.createElement(u.a,{path:"/paymentform"},r.a.createElement($,null)),r.a.createElement(u.a,{path:"/thankyoupage"},r.a.createElement(_,null)))))});l.a.render(r.a.createElement(V,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.0e0d8ffa.chunk.js.map