(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,r){},function(e,t,r){var c={"./calculator.jpg":14,"./code-quiz.jpg":15,"./evil-trivia.jpg":16,"./run-buddy.jpg":17,"./weather-dashboard.jpg":18,"./work-day-scheduler.jpg":19};function n(e){var t=i(e);return r(t)}function i(e){if(!r.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}n.keys=function(){return Object.keys(c)},n.resolve=i,e.exports=n,n.id=13},function(e,t,r){"use strict";r.r(t),t.default=r.p+"static/media/calculator.bb6f4d8d.jpg"},function(e,t,r){"use strict";r.r(t),t.default=r.p+"static/media/code-quiz.ef7f4333.jpg"},function(e,t,r){"use strict";r.r(t),t.default=r.p+"static/media/evil-trivia.d0f39532.jpg"},function(e,t,r){"use strict";r.r(t),t.default=r.p+"static/media/run-buddy.b57f2b88.jpg"},function(e,t,r){"use strict";r.r(t),t.default=r.p+"static/media/weather-dashboard.d906b924.jpg"},function(e,t,r){"use strict";r.r(t),t.default=r.p+"static/media/work-day-scheduler.48e35684.jpg"},function(e,t,r){"use strict";r.r(t);var c=r(0),n=r(1),i=r.n(n),a=r(6),s=r.n(a),o=(r(12),r(2)),l=r.p+"static/media/cover-image.54d8e4d3.jpg";var j=function(e){return Object(c.jsxs)("header",{className:"flex-row space-between px-1",children:[Object(c.jsx)("h1",{children:"Ron Gould"}),Object(c.jsx)("img",{src:l,alt:"Beach Scene"}),e.children]})};function u(e){return e.charAt(0).toUpperCase()+e.slice(1)}function d(e){return e.replace(/-/g," ").replace(/(^\w|\s\w)/g,(function(e){return e.toUpperCase()}))}var h=function(e){var t=e.pages,r=void 0===t?[]:t,i=e.setCurrentPage,a=e.currentPage;return Object(n.useEffect)((function(){document.title=u(a.name)}),[a]),Object(c.jsx)("nav",{children:Object(c.jsx)("ul",{className:"flex-row",children:r.map((function(e){return Object(c.jsx)("li",{className:"mx-5 ".concat(a.name===e.name&&"navActive"),children:Object(c.jsx)("span",{onClick:function(){return i(e)},children:u(e.name)})},e.name)}))})})},b=function(e){return Object(c.jsx)("div",{children:e.children})};var m=function(){return Object(c.jsx)("section",{className:"my-5",children:Object(c.jsxs)("div",{className:"my-2",children:[Object(c.jsx)("div",{className:"profile-img my-5",children:Object(c.jsx)("i",{className:"fas fa-user-circle",style:{fontSize:"96px"}})}),Object(c.jsx)("p",{children:"Helvetica put a bird on it church-key Blue Bottle banjo bespoke brunch Etsy authentic Marfa quinoa typewriter plaid direct trade small batch wayfarers bicycle rights cliche craft beer gastropub single-origin coffee Godard Carles you probably haven't heard of them irony pickled kitsch synth sriracha gentrify literally heirloom blog Truffaut paleo scenester"}),Object(c.jsx)("p",{children:"Echo Park sriracha Pinterest vegan biodiesel 90's irony iPhone Kickstarter Carles crucifix kitsch narwhal dreamcatcher pickled trust fund selvage art party letterpress Tumblr post-ironic kogi Thundercats Tonx Brooklyn Pitchfork Odd Future authentic normcore freegan leggings Schlitz chambray organic tousled retro fap squid street art church-key fashion axe Wes Anderson bespoke whatever gentrify banh mi you probably haven't heard of them American Apparel next level pug ugh."})]})})};var p=function(e){var t=e.project,n=t.name,i=t.repo,a=t.link,s=t.description;return Object(c.jsxs)("div",{className:"project",children:[Object(c.jsx)("img",{src:r(13)("./".concat(n,".jpg")).default,alt:d(n),className:"project-bg"}),Object(c.jsxs)("div",{className:"project-text",children:[Object(c.jsxs)("h3",{children:[Object(c.jsx)("a",{href:a,children:d(n)})," ",Object(c.jsx)("a",{href:i,children:Object(c.jsx)("i",{className:"fab fa-github"})})]}),Object(c.jsx)("p",{children:s})]})]},n)};var f=function(){var e=Object(n.useState)([{name:"evil-trivia",description:"HTML/Bulma/API",link:"https://stephen-harding1.github.io/Evil-Trivia/",repo:"https://github.com/Stephen-Harding1/Evil-Trivia"},{name:"weather-dashboard",description:"Bootstrap/JavaScript",link:"https://r0ng13.github.io/Weather-Dashboard/",repo:"https://github.com/R0nG13/Weather-Dashboard"},{name:"run-buddy",description:"HTML/CSS",link:"https://r0ng13.github.io/run-buddy/",repo:"https://github.com/R0nG13/run-buddy"},{name:"work-day-scheduler",description:"jQuery",link:"https://r0ng13.github.io/Work-Day-Scheduler/",repo:"https://github.com/R0nG13/Work-Day-Scheduler"},{name:"code-quiz",description:"JavaScript/CSS",link:"https://r0ng13.github.io/Code-Quiz/",repo:"https://github.com/R0nG13/Code-Quiz"}]),t=Object(o.a)(e,1)[0];return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"flex-row",children:t.map((function(e,t){return Object(c.jsx)(p,{project:e},"project"+t)}))})})},O=r(3),x=r(5);var g=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(o.a)(e,2),r=t[0],i=t[1],a=Object(n.useState)(""),s=Object(o.a)(a,2),l=s[0],j=s[1],u=r.name,d=r.email,h=r.message,b=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);j(t?"":"Your email is invalid.")}else e.target.value.length?j(""):j("".concat(e.target.name," is required."));l||(i(Object(x.a)(Object(x.a)({},r),{},Object(O.a)({},e.target.name,e.target.value))),console.log("Handle Form",r))};return Object(c.jsx)("section",{children:Object(c.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),l||console.log("Submit Form",r)},children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(c.jsx)("input",{type:"text",name:"name",defaultValue:u,onBlur:b})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(c.jsx)("input",{type:"email",name:"email",defaultValue:d,onBlur:b})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(c.jsx)("textarea",{name:"message",rows:"5",defaultValue:h,onBlur:b})]}),l&&Object(c.jsx)("div",{children:Object(c.jsx)("p",{className:"error-text",children:l})}),Object(c.jsx)("button",{type:"submit",children:"Submit"})]})})};var v=function(){return Object(c.jsx)("section",{className:"my-5",children:Object(c.jsxs)("div",{className:"my-2",children:[Object(c.jsxs)("p",{children:["Download my ",Object(c.jsx)("a",{href:"https://www.linkedin.com/",children:"resume"})]}),Object(c.jsx)("h3",{children:"Front-end Proficiencies"}),Object(c.jsxs)("ul",{className:"skills",children:[Object(c.jsx)("li",{children:"HTML"}),Object(c.jsx)("li",{children:"CSS"}),Object(c.jsx)("li",{children:"JavaScript"}),Object(c.jsx)("li",{children:"jQuery"}),Object(c.jsx)("li",{children:"responsive design"}),Object(c.jsx)("li",{children:"React"}),Object(c.jsx)("li",{children:"Bootstrap"})]}),Object(c.jsx)("h3",{children:"Back-end Proficiencies"}),Object(c.jsxs)("ul",{className:"skills",children:[Object(c.jsx)("li",{children:"APIs"}),Object(c.jsx)("li",{children:"Node"}),Object(c.jsx)("li",{children:"Express"}),Object(c.jsx)("li",{children:"MySQL, Sequelize"}),Object(c.jsx)("li",{children:"MongoDB, Mongoose"}),Object(c.jsx)("li",{children:"REST"}),Object(c.jsx)("li",{children:"GraphQL"})]})]})})};var y=function(e){var t=e.currentPage;return Object(c.jsxs)("section",{children:[Object(c.jsx)("h2",{children:u(t.name)}),Object(c.jsx)(b,{children:function(){switch(t.name){case"about me":return Object(c.jsx)(m,{});case"portfolio":return Object(c.jsx)(f,{});case"contact":return Object(c.jsx)(g,{});case"resume":return Object(c.jsx)(v,{});default:return Object(c.jsx)(m,{})}}()})]})};var k=function(){return Object(c.jsx)("footer",{className:"flex-row px-1",children:[{name:"R0nG13 fa-github",link:"https://github.com/R0nG13"},{name:"ron gould fa-linkedin",link:"https://www.linkedin.com/in/ron-gould-a279601/"}].map((function(e){return Object(c.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:Object(c.jsx)("i",{className:e.name})},e.name)}))})};var w=function(){var e=Object(n.useState)([{name:"about me"},{name:"portfolio"},{name:"contact"},{name:"resume"}]),t=Object(o.a)(e,1)[0],r=Object(n.useState)(t[0]),i=Object(o.a)(r,2),a=i[0],s=i[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)(j,{children:Object(c.jsx)(h,{pages:t,setCurrentPage:s,currentPage:a})}),Object(c.jsx)("main",{children:Object(c.jsx)(y,{currentPage:a})}),Object(c.jsx)(k,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(w,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[20,1,2]]]);
//# sourceMappingURL=main.e2d4db0f.chunk.js.map