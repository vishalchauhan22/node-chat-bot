(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(71)},39:function(e,t,a){},41:function(e,t,a){},68:function(e,t){},71:function(e,t,a){"use strict";a.r(t);var n,s=a(0),r=a.n(s),o=a(32),c=a.n(o),i=(a(39),a(4)),l=a(6),u=a(5),m=a(1),g=a(7),h=a(8),d=(a(41),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.messages;return r.a.createElement("ul",{id:"message-box",className:"Messages-list"},t.map(function(t,a){return e.renderMessage(t,a)}))}},{key:"renderMessage",value:function(e,t){var a=e.member,n=e.text,s=(this.props.currentMember,"user"===a?"Messages-message currentMember":"Messages-message");return r.a.createElement("li",{key:t,className:s},r.a.createElement("span",{className:"avatar",style:{backgroundColor:"user"===a?"green":"orange"}}),r.a.createElement("div",{className:"Message-content"},r.a.createElement("div",{className:"username"},a),r.a.createElement("div",{className:"text"},n&&n.split("\n").map(function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e}}),t+1==n.split("\n").length?"":r.a.createElement("br",null))}))))}}]),t}(s.Component)),p=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={text:""},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"onChange",value:function(e){this.setState({text:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),this.setState({text:""}),this.props.onSendMessage(this.state.text)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Input"},r.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t)}},r.a.createElement("input",{onChange:function(t){return e.onChange(t)},value:this.state.text,type:"text",placeholder:"Enter your message and press ENTER",autoFocus:!0}),r.a.createElement("button",null,"Send")))}}]),t}(s.Component),b=a(33),f=a.n(b);new URLSearchParams(window.location.search);var v=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).onSendMessage=function(t){t&&e.sendMessage(t)},e.state={messages:[],isMobilePresent:!1},e.sendMessage=e.sendMessage.bind(Object(h.a)(Object(h.a)(e))),e}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.username=(new Date).getTime(),(n=f()("/")).on("chat-message",function(t){e.state.messages.push({text:function(e){if(!e)return e;return e.replace(/(http?:\/\/[^\s]+)/g,function(e){return'<a href="'+e+'" target="_blank">'+e.replace(/http:\/\/localhost:3000\//g,"")+"</a>"})}(t),member:"bot"}),e.setState({isMobilePresent:!0,messages:e.state.messages}),window.setTimeout(function(){var e=document.getElementById("message-box");e.scrollTop=e.scrollHeight},300)})}},{key:"sendMessage",value:function(e){this.state.messages.push({text:e,member:"user"}),window.setTimeout(function(){var e=document.getElementById("message-box");e.scrollTop=e.scrollHeight},300),this.setState({messages:this.state.messages}),n.emit("chat-message",{from:window.username,text:e})}}]),Object(m.a)(t,[{key:"render",value:function(){return this.state.messages?r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-header"},r.a.createElement("h1",null,"ChatBot")),r.a.createElement(d,{messages:this.state.messages,currentMember:this.state.member}),r.a.createElement(p,{onSendMessage:this.onSendMessage})):r.a.createElement("h3",null,"Please Wait")}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,2,1]]]);
//# sourceMappingURL=main.8eb7ebe1.chunk.js.map