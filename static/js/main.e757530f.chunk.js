(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),o=n.n(c),s=n(9),u=n(5),i=n(6),l=n(8),d=n(7),p=n(10),m=n(1),f=n.n(m),h=n(2),v=(n(18),function(e){return r.a.createElement("div",null,r.a.createElement("p",null,e.user.name),r.a.createElement("p",null,"contact :",e.user.email))}),E=function(e){return r.a.createElement("section",{className:"Todo"},r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",checked:e.todo.completed}),e.todo.title),r.a.createElement(v,{user:e.todo.user}))},b=function(e){return r.a.createElement("div",null,e.todos.map(function(e){return r.a.createElement(E,{todo:e})}))},j=function(){var e=Object(h.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/todos");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(h.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),k=[],y=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={todos:[],isLoaded:!1,isLoading:!1},n.handleClick=function(){n.setState({isLoading:!0}),setTimeout(function(){n.setState({todos:k,isLoaded:!0,isLoading:!1})},2e3)},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(f.a.mark(function e(){var t,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:return t=e.sent,e.next=5,w();case 5:n=e.sent,k=t.map(function(e){return Object(s.a)({},e,{user:n.find(function(t){return t.id===e.userId})})});case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("main",null,this.state.isLoaded?r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Dynamic list of todos"),r.a.createElement(b,{todos:this.state.todos})):r.a.createElement("button",{className:"load",onClick:this.handleClick},this.state.isLoading?"Loading...":"Load"))}}]),t}(r.a.Component);o.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.e757530f.chunk.js.map