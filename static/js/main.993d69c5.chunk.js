(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[0],{35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},43:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var n=c(2),i=c.n(n),a=c(29),r=c.n(a),s=(c(35),c(21)),j=c(6),o=(c(36),c.p+"static/media/NavBarLogo.0decc187.png"),d=(c(37),c.p+"static/media/cartIcon.c7333b75.svg"),l=c(27),b=c(1),u=i.a.createContext();var O=function(e){var t=e.children,c=Object(n.useState)([]),i=Object(j.a)(c,2),a=i[0],r=i[1],s=Object(n.useState)(0),o=Object(j.a)(s,2),d=o[0],O=o[1],m=Object(n.useState)(),h=Object(j.a)(m,2),x=h[0],f=h[1];return Object(n.useEffect)((function(){var e=0;a.map((function(e){return e.price*e.amount})).map((function(t){return e+=t})),f(e);var t=a.length;O(t)}),[a]),Object(b.jsx)(u.Provider,{value:{cart:a,quantity:d,total:x,addToCart:function(e,t,c,n,i){if(function(e){return void 0!==a.find((function(t){return t.id===e}))}(c)){var s=a.find((function(e){return e.id===c})),j=s.amount+t,o={id:s.id,name:s.name,image:s.image,price:s.price,amount:j},d=a.filter((function(e){return e.id=!c})),b=[].concat(Object(l.a)(d),[o]);r(b)}else{var u={id:c,name:e,image:i,price:n,amount:t};r([].concat(Object(l.a)(a),[u]))}},eliminateFromCart:function(e){var t=a.filter((function(t){return t.id!==e}));r(t)},clearCart:function(){r([]),O(0)}},children:t})};var m=function(){var e=Object(n.useContext)(u).quantity;return Object(b.jsx)("div",{className:"cartWidget",children:e>0&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("img",{style:{width:30},src:d,alt:"CartIcon"}),Object(b.jsx)("h4",{children:e})]})})},h=c(9),x=[{categoryId:"BULONES",name:"BULON"},{categoryId:"TUERCA",name:"TUERCA"},{categoryId:"ARANDELA",name:"ARANDELA"}];var f=function(){return Object(b.jsxs)("div",{className:"navBar",children:[Object(b.jsx)("div",{className:"topNav",children:Object(b.jsx)(h.b,{to:"/",children:Object(b.jsx)("img",{src:o,alt:"logo",width:100})})}),Object(b.jsxs)("div",{className:"link",children:[x.map((function(e){return Object(b.jsx)(h.b,{to:"/category/".concat(e.categoryId),children:Object(b.jsx)("p",{children:e.name})})})),Object(b.jsx)("p",{children:"NOSOTROS"}),Object(b.jsx)("p",{children:"CONTACTO"}),Object(b.jsx)("div",{className:"navbar__cart",children:Object(b.jsx)(h.b,{to:"/cart",children:Object(b.jsx)(m,{})})})]})]})};var v=function(e){var t=e.id,c=e.name,n=e.image;return Object(b.jsx)("div",{className:"item",children:Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{alt:"img",height:"300",src:n,title:c}),Object(b.jsx)("div",{children:Object(b.jsx)("h3",{children:c})})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{children:Object(b.jsx)(h.b,{to:"/item/"+t,children:" Conocer Mas"})})})]})})};var p=function(e){var t=e.products;return Object(b.jsx)("div",{className:"itemList",children:t.map((function(e){return Object(b.jsx)(v,{id:e.id,name:e.name,image:e.image},e.id)}))})},g=(c(43),c(4));var C=function(e){var t=e.greeting,c=e.products,i=Object(n.useState)([]),a=Object(j.a)(i,2),r=a[0],s=a[1],o=Object(g.f)().id;return Object(n.useEffect)((function(){if(o){var e=c.filter((function(e){return e.categoryID===o}));s(e)}else s(c)}),[o,c]),Object(b.jsxs)("div",{className:"itemListContainer",children:[Object(b.jsx)("h2",{children:t}),c.length>0?Object(b.jsx)(p,{products:r}):Object(b.jsx)("h2",{children:"Loading"})]})};var N=function(e){var t=e.item,c=e.id,i=e.add,a=e.substract,r=e.counter,s=e.price,o=e.image,d=Object(n.useState)(!1),l=Object(j.a)(d,2),O=l[0],m=l[1],x=Object(n.useContext)(u).addToCart;return Object(b.jsxs)("div",{className:"itemCount",children:[Object(b.jsxs)("div",{className:"itemCount__counter",children:[Object(b.jsx)("button",{onClick:a,children:"-"}),Object(b.jsx)("h3",{children:r}),Object(b.jsx)("button",{onClick:i,children:"+"})]}),O?Object(b.jsx)("div",{children:Object(b.jsx)(h.b,{to:"/cart",children:Object(b.jsx)("button",{children:Object(b.jsx)("h3",{children:"Terminar la compra"})})})}):Object(b.jsx)("div",{className:"itemCount__agregar",children:Object(b.jsx)("button",{onClick:function(){return function(e,t,c,n,i){x(e,t,c,n,i),m(!0)}(t,r,c,s,o)},children:Object(b.jsxs)("h3",{children:["Agregar al carrito"," "]})})})]})};var I=function(e){e.item;var t=e.id,c=e.name,i=e.image,a=e.description,r=e.stock,s=e.initial,o=e.price,d=Object(n.useState)(0),l=Object(j.a)(d,2),u=l[0],O=l[1];return Object(b.jsxs)("div",{className:"itemDetail",children:[Object(b.jsx)("div",{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{component:"img",alt:c,height:"300",src:i,title:c}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:c}),Object(b.jsxs)("h5",{children:[a," por tan solo $",o]})]})]})}),Object(b.jsx)("div",{children:Object(b.jsx)(N,{initial:s,stock:r,add:function(){u<r&&O(u+1)},substract:function(){u>s&&O(u-1)},item:c,counter:u,id:t,price:o,image:i})})]})},S=c(19),k=(c(46),S.a.initializeApp({apiKey:"AIzaSyA4s257LOkcp9QEqKZWpByqwbfCvwnu4iY",authDomain:"tornillos-a875d.firebaseapp.com",projectId:"tornillos-a875d",storageBucket:"tornillos-a875d.appspot.com",messagingSenderId:"353891088662",appId:"1:353891088662:web:6406e369f43cd8a9f47837"})),A=S.a.firestore(k);var y=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],i=t[1],a=Object(g.f)().id;Object(n.useEffect)((function(){A.collection("items").get().then((function(e){i(e.docs.map((function(e){return Object(s.a)({id:e.id},e.data())})))})).catch((function(e){}))}),[a]);var r=[];return c.forEach((function(e){e.id===a&&(r=e)})),Object(b.jsx)("div",{className:"itemDetailContainer",children:c?Object(b.jsx)(I,{item:r.item,id:r.id,name:r.name,price:r.price,image:r.image,description:r.description,stock:r.stock,initial:r.initial}):Object(b.jsx)("h2",{children:"Loading"})})};var T=function(e){var t=e.id,c=e.name,i=e.image,a=e.price,r=e.amount,s=Object(n.useContext)(u).eliminateFromCart;return Object(b.jsxs)("div",{className:"cartItem",children:[Object(b.jsx)("div",{className:"cartItem__title",children:Object(b.jsx)("h3",{children:c})}),Object(b.jsx)("div",{className:"cartItem__image",children:Object(b.jsx)("img",{src:i,alt:c})}),Object(b.jsx)("div",{className:"price",children:Object(b.jsxs)("h3",{children:["$",a]})}),Object(b.jsx)("div",{className:"amount",children:Object(b.jsx)("h3",{children:r})}),Object(b.jsx)("div",{className:"parcial",children:Object(b.jsxs)("h3",{children:["$",r*a]})}),Object(b.jsx)("button",{onClick:function(){return s(t)},children:"Eliminar"})]})};var E=function(){var e=Object(n.useContext)(u),t=e.cart,c=e.clearCart,i=e.total,a=Object(n.useState)(!1),r=Object(j.a)(a,2),s=r[0],o=r[1],d=Object(n.useState)(""),l=Object(j.a)(d,2),O=l[0],m=l[1],x=Object(n.useState)(""),f=Object(j.a)(x,2),v=f[0],p=f[1],g=Object(n.useState)(""),C=Object(j.a)(g,2),N=C[0],I=C[1];return Object(b.jsxs)("div",{className:"cart",children:[t.length>0?Object(b.jsx)("h1",{children:"Dale, compra!"}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"A\xfan no elegiste tus productos"}),Object(b.jsx)(h.b,{to:"/",children:Object(b.jsx)("button",{onClick:c,variant:"contained",color:"primary",children:"Llevame a los productos"})})]}),Object(b.jsx)("div",{className:"cartItems",children:t.length>0&&t.map((function(e){return Object(b.jsx)(T,{id:e.id,name:e.name,image:e.image,price:e.price,amount:e.amount},e.id)}))}),t.length>0&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("h2",{children:["Total $",i]}),Object(b.jsxs)("div",{className:"cartItems__buttons",children:[Object(b.jsx)("button",{onClick:c,children:"Vaciar carrito"}),Object(b.jsx)("button",{onClick:function(){o(!0)},children:"PAGAR"})]})]}),s&&Object(b.jsxs)("form",{noValidate:!0,autoComplete:"off",children:[Object(b.jsx)("input",{id:"standard-basic",label:"Name",placeholder:"Ingrese su nombre",value:O,onChange:function(e){return m(e.target.value)}}),Object(b.jsx)("input",{id:"standard-basic",label:"Telephone",placeholder:"Ingrese su telefono",value:v,onChange:function(e){return p(e.target.value)}}),Object(b.jsx)("input",{id:"standard-basic",label:"Email",placeholder:"Ingrese su email",value:N,onChange:function(e){return I(e.target.value)}}),Object(b.jsx)("button",{onClick:function(e){e.preventDefault(),console.log(O);var n=A.collection("orders"),a={buyer:{name:O,phone:v,email:N},items:t,date:S.a.firestore.Timestamp.fromDate(new Date),total:i};n.add(a).then((function(e){var t=e.id;return alert("Anot\xe1 el id de tu compra ".concat(t))})).then(c).then(o(!1)).catch((function(e){return alert("no funciona ".concat(e))}))},children:"completar orden"})]})]})};var L=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){A.collection("items").get().then((function(e){i(e.docs.map((function(e){return Object(s.a)({id:e.id},e.data())})))})).catch((function(e){console.log(e)}))}),[]),Object(b.jsx)("div",{className:"app",children:Object(b.jsx)(O,{children:Object(b.jsxs)(h.a,{children:[Object(b.jsx)(f,{}),Object(b.jsxs)(g.c,{children:[Object(b.jsx)(g.a,{exact:!0,path:"/",children:Object(b.jsx)(C,{greeting:"Tornillos & fijaciones",products:c})}),Object(b.jsx)(g.a,{exact:!0,path:"/category/:id",children:Object(b.jsx)(C,{greeting:"Tornillos & fijaciones",products:c})}),Object(b.jsx)(g.a,{exact:!0,path:"/item/:id",children:Object(b.jsx)(y,{})}),Object(b.jsx)(g.a,{exact:!0,path:"/cart",children:Object(b.jsx)(E,{})})]})]})})})},_=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,47)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),i(e),a(e),r(e)}))};r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(L,{})}),document.getElementById("root")),_()}},[[45,1,2]]]);
//# sourceMappingURL=main.993d69c5.chunk.js.map