import{r as u}from"./react.db2dcf05.js";import{s as v}from"./react-style-singleton.4e5143d0.js";import{j as p}from"./react-icons.e18df677.js";var d="right-scroll-bar-position",g="width-before-scroll-bar",m="with-scroll-bars-hidden",h="--removed-body-scroll-bar-size",b={left:0,top:0,right:0,gap:0},l=function(n){return parseInt(n||"",10)||0},x=function(n){var r=window.getComputedStyle(document.body),o=r[n==="padding"?"paddingLeft":"marginLeft"],t=r[n==="padding"?"paddingTop":"marginTop"],a=r[n==="padding"?"paddingRight":"marginRight"];return[l(o),l(t),l(a)]},y=function(n){if(n===void 0&&(n="margin"),typeof window>"u")return b;var r=x(n),o=document.documentElement.clientWidth,t=window.innerWidth;return{left:r[0],top:r[1],right:r[2],gap:Math.max(0,t-o+r[2]-r[0])}},w=v(),i="data-scroll-locked",S=function(n,r,o,t){var a=n.left,c=n.top,f=n.right,e=n.gap;return o===void 0&&(o="margin"),`
  .`.concat(m,` {
   overflow: hidden `).concat(t,`;
   padding-right: `).concat(e,"px ").concat(t,`;
  }
  body[`).concat(i,`] {
    overflow: hidden `).concat(t,`;
    overscroll-behavior: contain;
    `).concat([r&&"position: relative ".concat(t,";"),o==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(c,`px;
    padding-right: `).concat(f,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(e,"px ").concat(t,`;
    `),o==="padding"&&"padding-right: ".concat(e,"px ").concat(t,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(d,` {
    right: `).concat(e,"px ").concat(t,`;
  }
  
  .`).concat(g,` {
    margin-right: `).concat(e,"px ").concat(t,`;
  }
  
  .`).concat(d," .").concat(d,` {
    right: 0 `).concat(t,`;
  }
  
  .`).concat(g," .").concat(g,` {
    margin-right: 0 `).concat(t,`;
  }
  
  body[`).concat(i,`] {
    `).concat(h,": ").concat(e,`px;
  }
`)},s=function(){var n=parseInt(document.body.getAttribute(i)||"0",10);return isFinite(n)?n:0},C=function(){u.exports.useEffect(function(){return document.body.setAttribute(i,(s()+1).toString()),function(){var n=s()-1;n<=0?document.body.removeAttribute(i):document.body.setAttribute(i,n.toString())}},[])},z=function(n){var r=n.noRelative,o=n.noImportant,t=n.gapMode,a=t===void 0?"margin":t;C();var c=u.exports.useMemo(function(){return y(a)},[a]);return p(w,{styles:S(c,!r,a,o?"":"!important")})};export{z as R,g as f,d as z};
