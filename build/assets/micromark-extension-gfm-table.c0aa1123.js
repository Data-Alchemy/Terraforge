import{f as o}from"./micromark-factory-space.aa559465.js";import{m as O,f as R,j as P}from"./micromark-util-character.799e1cad.js";class N{constructor(){this.map=[]}add(n,i,r){x(this,n,i,r)}consume(n){if(this.map.sort(function(a,u){return a[0]-u[0]}),this.map.length===0)return;let i=this.map.length;const r=[];for(;i>0;)i-=1,r.push(n.slice(this.map[i][0]+this.map[i][1]),this.map[i][2]),n.length=this.map[i][0];r.push([...n]),n.length=0;let l=r.pop();for(;l;)n.push(...l),l=r.pop();this.map.length=0}}function x(t,n,i,r){let l=0;if(!(i===0&&r.length===0)){for(;l<t.map.length;){if(t.map[l][0]===n){t.map[l][1]+=i,t.map[l][2].push(...r);return}l+=1}t.map.push([n,i,r])}}function V(t,n){let i=!1;const r=[];for(;n<t.length;){const l=t[n];if(i){if(l[0]==="enter")l[1].type==="tableContent"&&r.push(t[n+1][1].type==="tableDelimiterMarker"?"left":"none");else if(l[1].type==="tableContent"){if(t[n-1][1].type==="tableDelimiterMarker"){const a=r.length-1;r[a]=r[a]==="left"?"center":"right"}}else if(l[1].type==="tableDelimiterRow")break}else l[0]==="enter"&&l[1].type==="tableDelimiterRow"&&(i=!0);n+=1}return r}function Q(){return{flow:{null:{tokenize:_,resolveAll:q}}}}function _(t,n,i){const r=this;let l=0,a=0,u;return w;function w(e){let g=r.events.length-1;for(;g>-1;){const M=r.events[g][1].type;if(M==="lineEnding"||M==="linePrefix")g--;else break}const S=g>-1?r.events[g][1].type:null,z=S==="tableHead"||S==="tableRow"?H:h;return z===H&&r.parser.lazy[r.now().line]?i(e):z(e)}function h(e){return t.enter("tableHead"),t.enter("tableRow"),D(e)}function D(e){return e===124||(u=!0,a+=1),p(e)}function p(e){return e===null?i(e):O(e)?a>1?(a=0,r.interrupt=!0,t.exit("tableRow"),t.enter("lineEnding"),t.consume(e),t.exit("lineEnding"),f):i(e):R(e)?o(t,p,"whitespace")(e):(a+=1,u&&(u=!1,l+=1),e===124?(t.enter("tableCellDivider"),t.consume(e),t.exit("tableCellDivider"),u=!0,p):(t.enter("data"),b(e)))}function b(e){return e===null||e===124||P(e)?(t.exit("data"),p(e)):(t.consume(e),e===92?m:b)}function m(e){return e===92||e===124?(t.consume(e),b):b(e)}function f(e){return r.interrupt=!1,r.parser.lazy[r.now().line]?i(e):(t.enter("tableDelimiterRow"),u=!1,R(e)?o(t,s,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(e):s(e))}function s(e){return e===45||e===58?A(e):e===124?(u=!0,t.enter("tableCellDivider"),t.consume(e),t.exit("tableCellDivider"),T):d(e)}function T(e){return R(e)?o(t,A,"whitespace")(e):A(e)}function A(e){return e===58?(a+=1,u=!0,t.enter("tableDelimiterMarker"),t.consume(e),t.exit("tableDelimiterMarker"),E):e===45?(a+=1,E(e)):e===null||O(e)?C(e):d(e)}function E(e){return e===45?(t.enter("tableDelimiterFiller"),B(e)):d(e)}function B(e){return e===45?(t.consume(e),B):e===58?(u=!0,t.exit("tableDelimiterFiller"),t.enter("tableDelimiterMarker"),t.consume(e),t.exit("tableDelimiterMarker"),F):(t.exit("tableDelimiterFiller"),F(e))}function F(e){return R(e)?o(t,C,"whitespace")(e):C(e)}function C(e){return e===124?s(e):e===null||O(e)?!u||l!==a?d(e):(t.exit("tableDelimiterRow"),t.exit("tableHead"),n(e)):d(e)}function d(e){return i(e)}function H(e){return t.enter("tableRow"),k(e)}function k(e){return e===124?(t.enter("tableCellDivider"),t.consume(e),t.exit("tableCellDivider"),k):e===null||O(e)?(t.exit("tableRow"),n(e)):R(e)?o(t,k,"whitespace")(e):(t.enter("data"),j(e))}function j(e){return e===null||e===124||P(e)?(t.exit("data"),k(e)):(t.consume(e),e===92?L:j)}function L(e){return e===92||e===124?(t.consume(e),j):j(e)}}function q(t,n){let i=-1,r=!0,l=0,a=[0,0,0,0],u=[0,0,0,0],w=!1,h=0,D,p,b;const m=new N;for(;++i<t.length;){const f=t[i],s=f[1];f[0]==="enter"?s.type==="tableHead"?(w=!1,h!==0&&(I(m,n,h,D,p),p=void 0,h=0),D={type:"table",start:Object.assign({},s.start),end:Object.assign({},s.end)},m.add(i,0,[["enter",D,n]])):s.type==="tableRow"||s.type==="tableDelimiterRow"?(r=!0,b=void 0,a=[0,0,0,0],u=[0,i+1,0,0],w&&(w=!1,p={type:"tableBody",start:Object.assign({},s.start),end:Object.assign({},s.end)},m.add(i,0,[["enter",p,n]])),l=s.type==="tableDelimiterRow"?2:p?3:1):l&&(s.type==="data"||s.type==="tableDelimiterMarker"||s.type==="tableDelimiterFiller")?(r=!1,u[2]===0&&(a[1]!==0&&(u[0]=u[1],b=v(m,n,a,l,void 0,b),a=[0,0,0,0]),u[2]=i)):s.type==="tableCellDivider"&&(r?r=!1:(a[1]!==0&&(u[0]=u[1],b=v(m,n,a,l,void 0,b)),a=u,u=[a[1],i,0,0])):s.type==="tableHead"?(w=!0,h=i):s.type==="tableRow"||s.type==="tableDelimiterRow"?(h=i,a[1]!==0?(u[0]=u[1],b=v(m,n,a,l,i,b)):u[1]!==0&&(b=v(m,n,u,l,i,b)),l=0):l&&(s.type==="data"||s.type==="tableDelimiterMarker"||s.type==="tableDelimiterFiller")&&(u[3]=i)}for(h!==0&&I(m,n,h,D,p),m.consume(n.events),i=-1;++i<n.events.length;){const f=n.events[i];f[0]==="enter"&&f[1].type==="table"&&(f[1]._align=V(n.events,i))}return t}function v(t,n,i,r,l,a){const u=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",w="tableContent";i[0]!==0&&(a.end=Object.assign({},y(n.events,i[0])),t.add(i[0],0,[["exit",a,n]]));const h=y(n.events,i[1]);if(a={type:u,start:Object.assign({},h),end:Object.assign({},h)},t.add(i[1],0,[["enter",a,n]]),i[2]!==0){const D=y(n.events,i[2]),p=y(n.events,i[3]),b={type:w,start:Object.assign({},D),end:Object.assign({},p)};if(t.add(i[2],0,[["enter",b,n]]),r!==2){const m=n.events[i[2]],f=n.events[i[3]];if(m[1].end=Object.assign({},f[1].end),m[1].type="chunkText",m[1].contentType="text",i[3]>i[2]+1){const s=i[2]+1,T=i[3]-i[2]-1;t.add(s,T,[])}}t.add(i[3]+1,0,[["exit",b,n]])}return l!==void 0&&(a.end=Object.assign({},y(n.events,l)),t.add(l,0,[["exit",a,n]]),a=void 0),a}function I(t,n,i,r,l){const a=[],u=y(n.events,i);l&&(l.end=Object.assign({},u),a.push(["exit",l,n])),r.end=Object.assign({},u),a.push(["exit",r,n]),t.add(i+1,0,a)}function y(t,n){const i=t[n],r=i[0]==="enter"?"start":"end";return i[1][r]}export{Q as g};
