import{o as k}from"./devlop.0b871bfb.js";import{m as R}from"./markdown-table.daba02db.js";import{h as D}from"./mdast-util-to-markdown.2ca38493.js";function M(){return{enter:{table:v,tableData:g,tableHeader:g,tableRow:_},exit:{codeText:A,table:y,tableData:u,tableHeader:u,tableRow:u}}}function v(e){const l=e._align;this.enter({type:"table",align:l.map(function(c){return c==="none"?null:c}),children:[]},e),this.data.inTable=!0}function y(e){this.exit(e),this.data.inTable=void 0}function _(e){this.enter({type:"tableRow",children:[]},e)}function u(e){this.exit(e)}function g(e){this.enter({type:"tableCell",children:[]},e)}function A(e){let l=this.resume();this.data.inTable&&(l=l.replace(/\\([\\|])/g,B));const c=this.stack[this.stack.length-1];k(c.type==="inlineCode"),c.value=l,this.exit(e)}function B(e,l){return l==="|"?l:e}function z(e){const l=e||{},c=l.tableCellPadding,C=l.tablePipeAlign,x=l.stringLength,h=c?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:w,table:T,tableCell:b,tableRow:p}};function T(t,r,a,n){return d(m(t,a,n),t.align)}function p(t,r,a,n){const i=f(t,a,n),o=d([i]);return o.slice(0,o.indexOf(`
`))}function b(t,r,a,n){const i=a.enter("tableCell"),o=a.enter("phrasing"),s=a.containerPhrasing(t,{...n,before:h,after:h});return o(),i(),s}function d(t,r){return R(t,{align:r,alignDelimiters:C,padding:c,stringLength:x})}function m(t,r,a){const n=t.children;let i=-1;const o=[],s=r.enter("table");for(;++i<n.length;)o[i]=f(n[i],r,a);return s(),o}function f(t,r,a){const n=t.children;let i=-1;const o=[],s=r.enter("tableRow");for(;++i<n.length;)o[i]=b(n[i],t,r,a);return s(),o}function w(t,r,a){let n=D.inlineCode(t,r,a);return a.stack.includes("tableCell")&&(n=n.replace(/\|/g,"\\$&")),n}}export{z as a,M as g};
