import{r as a}from"./react.32971ca1.js";function c(r,e){return typeof r=="function"?r(e):r&&(r.current=e),r}function f(r,e){var t=a.useState(function(){return{value:r,callback:e,facade:{get current(){return t.value},set current(n){var u=t.value;u!==n&&(t.value=n,t.callback(n,u))}}}})[0];return t.callback=e,t.facade}function i(r,e){return f(e||null,function(t){return r.forEach(function(n){return c(n,t)})})}export{i as u};
