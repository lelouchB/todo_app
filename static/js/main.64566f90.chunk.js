(window.webpackJsonptodo_app=window.webpackJsonptodo_app||[]).push([[0],{27:function(t,e,n){t.exports=n(41)},32:function(t,e,n){},33:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(23),l=n.n(r),c=(n(32),n(18)),i=n(5),d=n(6),u=n(8),s=n(7),p=n(9),m=n(13),f=n(10),b=(n(33),function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(o)))).getStyle=function(){return{padding:"10px",background:"#f4f4f4",borderBottom:"1px #ccc dotted",textDecoration:n.props.todo.completed?"line-through":"none"}},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return o.a.createElement("div",{style:this.getStyle()},o.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," ","  ",n,o.a.createElement("button",{onClick:this.props.delTodo.bind(this,e),style:h},"X"))}}]),e}(a.Component)),h={background:"#ff0000",color:"#fff",border:"none",padding:"5px 6px",cursor:"pointer",borderRadius:"50%",float:"right",outline:"none"},v=b,y=function(t){function e(){return Object(i.a)(this,e),Object(u.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement("div",null,this.props.todos.map(function(e){return o.a.createElement(v,{todo:e,key:e.id,markComplete:t.props.markComplete,delTodo:t.props.delTodo})}))}}]),e}(a.Component);var E={color:"#fff",textDecoration:"none"},g={background:"#333",textAlign:"center",color:"#fff"},j=function(){return o.a.createElement("header",{style:g},o.a.createElement("h1",null,"Todo List"),o.a.createElement(m.b,{to:"/",style:E},"Home"),"  ","|","  ",o.a.createElement(m.b,{to:"/about",style:E},"About"))},O=n(26),k=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(o)))).state={title:" "},n.onSubmit=function(t){t.preventDefault(),n.props.addTodo(n.state.title),n.setState({title:" "})},n.onChange=function(t){return n.setState(Object(O.a)({},t.target.name,t.target.value))},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex",padding:"10px"}},o.a.createElement("input",{style:{flex:"10"},type:"text",name:"title",placeholder:"Add Todo...",value:this.state.title,onChange:this.onChange}),o.a.createElement("input",{type:"submit",value:"submit",className:"btn",style:{flex:"1"}}))}}]),e}(a.Component),C=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"This is the Todo List App v1.0.0"))},T=n(14),x=n.n(T),w=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(o)))).state={todos:[{id:x.a.v4(),title:"Take out the trash",completed:!1},{id:x.a.v4(),title:"Dinner with friends",completed:!0},{id:x.a.v4(),title:"Learn React and Preact",completed:!1}]},n.markComplete=function(t){n.setState({todos:n.state.todos.map(function(e){return e.id===t&&(e.completed=!e.completed),e})})},n.delTodo=function(t){n.setState({todos:Object(c.a)(n.state.todos.filter(function(e){return e.id!==t}))})},n.addTodo=function(t){var e={id:x.a.v4(),title:t,completed:!1};n.setState({todos:[].concat(Object(c.a)(n.state.todos),[e])})},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement(m.a,null,o.a.createElement("div",null,o.a.createElement("div",{className:"container"},o.a.createElement(j,null),o.a.createElement(f.a,{path:"/"},"render=",function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(k,{addTodo:t.addTodo}),o.a.createElement(y,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo}))},">"),o.a.createElement(f.a,{path:"/about",component:C}))))}}]),e}(a.Component);l.a.render(o.a.createElement(w,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.64566f90.chunk.js.map