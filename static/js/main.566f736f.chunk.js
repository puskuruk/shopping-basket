(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(32)},24:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),o=n.n(c),i=(n(24),n(3)),s=n(4),u=n(7),l=n(5),p=n(8),d=n(1),m=n(6),b=n(18),h=n(12),f="ADD_PRODUCT",k="REMOVE_PRODUCT";function O(e,t){return{type:f,payload:t}}function E(e,t){return{type:k,payload:t}}var v={basketList:[]};var j=Object(d.c)({basket:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,n=e.basketList;switch(t.type){case f:return void 0===n.find(function(e){return e.id===t.payload.id})?(t.payload.count=1,n.push(t.payload)):t.payload.count+=1,Object(h.a)({},e,{basketList:n});case k:return n.forEach(function(e){e.id===t.payload.id&&(1===e.count?n.splice(n.indexOf(e),1):e.count-=1)}),Object(h.a)({},e,{basketList:n});default:return e}}}),y=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.products.map(function(t,n){return r.a.createElement("li",{className:"product",key:n},t.name,r.a.createElement("button",{className:"buttons",onClick:function(n){e.props.addBasketAction(f,t)}},"+"),r.a.createElement("span",{className:"price"},t.price,"$ "))});return r.a.createElement("div",null,r.a.createElement("h1",null,"Product List (",this.props.products.length,")"),r.a.createElement("ul",null,t))}}]),t}(r.a.Component);var g=Object(m.b)(function(e){return{basketState:e.basket}},function(e){return Object(d.b)({addBasketAction:O},e)})(y),w=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=0,n=this.props.basketState.basketList.map(function(n,a){return t+=n.price*n.count,r.a.createElement("tr",{key:a},r.a.createElement("td",{style:{paddingRight:"25px"}},a+1," - ",n.name," (",n.count,")"),r.a.createElement("td",null,r.a.createElement("button",{className:"removeProduct",onClick:function(t){return e.props.removeBasketAction(k,n)}},"x")))});return r.a.createElement("div",{className:"basket"},r.a.createElement("h4",{style:{marginBottom:"0"}},"Basket"),r.a.createElement("hr",null),0===n.length&&r.a.createElement("p",{style:{color:"red"}},"Your basket is empty."),r.a.createElement("table",null,r.a.createElement("tbody",null,n)),"Total Price: ",t,"$")}}]),t}(r.a.Component);var B=Object(m.b)(function(e){return{basketState:e.basket}},function(e){return Object(d.b)({removeBasketAction:E},e)})(w),C=(n(30),Object(d.d)(j,Object(d.a)(b.a))),P=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={products:[{id:1,name:"Apple",price:10},{id:2,name:"Eggplant",price:15},{id:3,name:"Pear",price:5},{id:4,name:"Patato",price:12},{id:5,name:"Banana",price:18}]},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,{store:C},r.a.createElement("div",{className:"general"},r.a.createElement(g,{products:this.state.products}),r.a.createElement(B,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.566f736f.chunk.js.map