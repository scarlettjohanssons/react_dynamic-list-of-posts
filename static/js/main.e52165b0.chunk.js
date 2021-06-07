(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(6),s=n.n(o),l=n(1),r=(n(14),n(15),n(16),function(e){var t=e.posts,n=e.postSelect,a=e.selectedPostId;return c.a.createElement("div",{className:"PostsList"},c.a.createElement("h2",null,"Posts:"),c.a.createElement("ul",{className:"PostsList__list"},t.map((function(e){return c.a.createElement("li",{key:e.id,className:"PostsList__item"},c.a.createElement("div",null,c.a.createElement("b",null,"[User #",e.userId,"]:"," "),e.title),c.a.createElement("button",{type:"button",className:"PostsList__button button \n              ".concat(a===e.id&&"PostsList__active"),onClick:function(){n(e.id)}},a===e.id?"Close":"Open"))}))))}),u=n(8),m=n(4),i=n.n(m),p=n(7),f=(n(18),function(e){var t=e.onAddComment,n=Object(a.useState)(""),o=Object(l.a)(n,2),s=o[0],r=o[1],u=Object(a.useState)(""),m=Object(l.a)(u,2),i=m[0],p=m[1],f=Object(a.useState)(""),d=Object(l.a)(f,2),E=d[0],b=d[1];return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),s&&i&&E&&(t(s,i,E),r(""),p(""),b(""))},className:"NewCommentForm"},c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"name",value:s,onChange:function(e){r(e.target.value)},placeholder:"Your name",className:"NewCommentForm__input"})),c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"email",value:i,onChange:function(e){p(e.target.value)},placeholder:"Your email",className:"NewCommentForm__input"})),c.a.createElement("div",{className:"form-field"},c.a.createElement("textarea",{name:"body",value:E,onChange:function(e){b(e.target.value)},placeholder:"Type comment here",className:"NewCommentForm__input"})),c.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a comment"))}),d="https://mate-api.herokuapp.com";function E(e){return fetch("".concat(d).concat(e)).then((function(e){return e.json()})).then((function(e){return e.data}))}n(19);var b=function(e){var t=e.selectedPostId,n=Object(a.useState)({}),o=Object(l.a)(n,2),s=o[0],r=o[1],m=Object(a.useState)([]),b=Object(l.a)(m,2),h=b[0],v=b[1],_=Object(a.useState)(!1),N=Object(l.a)(_,2),j=N[0],O=N[1],y=Object(a.useCallback)(Object(p.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E("/posts/".concat(t));case 2:n=e.sent,r(n);case 4:case"end":return e.stop()}}),e)}))),[t]);Object(a.useEffect)((function(){y()}),[y]),Object(a.useEffect)((function(){var e;(e=t,E("/comments?postId=".concat(e))).then((function(e){return v(e)}))}),[t]);var P=function(e){return(t="/comments/".concat(e),fetch("".concat(d).concat(t),{method:"DELETE"})).then((function(){v((function(t){return t.filter((function(t){return t.id!==e}))}))}));var t};return c.a.createElement("div",{className:"PostDetails"},s&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"Post details:"),c.a.createElement("section",{className:"PostDetails__post"},c.a.createElement("p",null,s&&s.body)),c.a.createElement("section",{className:"PostDetails__comments"},0!==h.length&&c.a.createElement("button",{type:"button",className:"button",onClick:function(){O(!j)}},j?"Show ".concat(h.length," comments"):"Hide ".concat(h.length," comments")),j||c.a.createElement("ul",{className:"PostDetails__list"},h.map((function(e){return c.a.createElement("li",{key:e.id,className:"PostDetails__list-item"},c.a.createElement("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){P(e.id)}},"X"),c.a.createElement("p",null,e.body))})))),c.a.createElement("section",null,c.a.createElement("div",{className:"PostDetails__form-wrapper"},c.a.createElement(f,{onAddComment:function(e,n,a){return function(e,t){return fetch("".concat(d).concat(e),{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)})}("/comments",{name:e,email:n,body:a,postId:t}).then((function(e){return e.json()})).then((function(e){return e.data})).then((function(e){v((function(t){return[].concat(Object(u.a)(t),[e])}))}))}})))))},h=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1],s=Object(a.useState)(0),u=Object(l.a)(s,2),m=u[0],i=u[1],p=Object(a.useState)("0"),f=Object(l.a)(p,2),d=f[0],h=f[1];Object(a.useEffect)((function(){E("/posts").then((function(e){return o(e)}))}),[]);var v=n.filter((function(e){switch(d){case"0":return e;default:return e.userId===+d}}));return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App__header"},c.a.createElement("label",null,"Select a user: \xa0",c.a.createElement("select",{className:"App__user-selector",value:d,onChange:function(e){h(e.target.value)}},c.a.createElement("option",{value:"0"},"All users"),c.a.createElement("option",{value:"1"},"Leanne Graham"),c.a.createElement("option",{value:"2"},"Ervin Howell"),c.a.createElement("option",{value:"3"},"Clementine Bauch"),c.a.createElement("option",{value:"4"},"Patricia Lebsack"),c.a.createElement("option",{value:"5"},"Chelsey Dietrich"),c.a.createElement("option",{value:"6"},"Mrs. Dennis Schulist"),c.a.createElement("option",{value:"7"},"Kurtis Weissnat"),c.a.createElement("option",{value:"8"},"Nicholas Runolfsdottir V"),c.a.createElement("option",{value:"9"},"Glenna Reichert"),c.a.createElement("option",{value:"10"},"Leanne Graham")))),c.a.createElement("main",{className:"App__main"},c.a.createElement("div",{className:"App__sidebar"},c.a.createElement(r,{posts:v,selectedPostId:m,postSelect:function(e){i(e===m?0:e)}})),c.a.createElement("div",{className:"App__content"},c.a.createElement(b,{selectedPostId:m}))))};s.a.render(c.a.createElement(h,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.e52165b0.chunk.js.map