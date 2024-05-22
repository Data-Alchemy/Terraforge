/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},C.apply(this,arguments)}var H;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(H||(H={}));const ct="popstate";function zr(e){e===void 0&&(e={});function t(n,a){let{pathname:s,search:d,hash:u}=n.location;return Ue("",{pathname:s,search:d,hash:u},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(n,a){return typeof a=="string"?a:Fe(a)}return Yt(t,r,null,e)}function A(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ge(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Vt(){return Math.random().toString(36).substr(2,8)}function ut(e,t){return{usr:e.state,key:e.key,idx:t}}function Ue(e,t,r,n){return r===void 0&&(r=null),C({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?se(t):t,{state:r,key:t&&t.key||n||Vt()})}function Fe(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function se(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function Yt(e,t,r,n){n===void 0&&(n={});let{window:a=document.defaultView,v5Compat:s=!1}=n,d=a.history,u=H.Pop,f=null,h=m();h==null&&(h=0,d.replaceState(C({},d.state,{idx:h}),""));function m(){return(d.state||{idx:null}).idx}function M(){u=H.Pop;let v=m(),S=v==null?null:v-h;h=v,f&&f({action:u,location:w.location,delta:S})}function x(v,S){u=H.Push;let _=Ue(w.location,v,S);r&&r(_,v),h=m()+1;let $=ut(_,h),l=w.createHref(_);try{d.pushState($,"",l)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;a.location.assign(l)}s&&f&&f({action:u,location:w.location,delta:1})}function j(v,S){u=H.Replace;let _=Ue(w.location,v,S);r&&r(_,v),h=m();let $=ut(_,h),l=w.createHref(_);d.replaceState($,"",l),s&&f&&f({action:u,location:w.location,delta:0})}function E(v){let S=a.location.origin!=="null"?a.location.origin:a.location.href,_=typeof v=="string"?v:Fe(v);return A(S,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,S)}let w={get action(){return u},get location(){return e(a,d)},listen(v){if(f)throw new Error("A history only accepts one active listener");return a.addEventListener(ct,M),f=v,()=>{a.removeEventListener(ct,M),f=null}},createHref(v){return t(a,v)},createURL:E,encodeLocation(v){let S=E(v);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:x,replace:j,go(v){return d.go(v)}};return w}var O;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(O||(O={}));const Gt=new Set(["lazy","caseSensitive","path","id","index","children"]);function Jt(e){return e.index===!0}function Ye(e,t,r,n){return r===void 0&&(r=[]),n===void 0&&(n={}),e.map((a,s)=>{let d=[...r,s],u=typeof a.id=="string"?a.id:d.join("-");if(A(a.index!==!0||!a.children,"Cannot specify children on an index route"),A(!n[u],'Found a route id collision on id "'+u+`".  Route id's must be globally unique within Data Router usages`),Jt(a)){let f=C({},a,t(a),{id:u});return n[u]=f,f}else{let f=C({},a,t(a),{id:u,children:void 0});return n[u]=f,a.children&&(f.children=Ye(a.children,t,d,n)),f}})}function Se(e,t,r){r===void 0&&(r="/");let n=typeof t=="string"?se(t):t,a=Ie(n.pathname||"/",r);if(a==null)return null;let s=Mt(e);Qt(s);let d=null;for(let u=0;d==null&&u<s.length;++u)d=lr(s[u],cr(a));return d}function Xt(e,t){let{route:r,pathname:n,params:a}=e;return{id:r.id,pathname:n,params:a,data:t[r.id],handle:r.handle}}function Mt(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let a=(s,d,u)=>{let f={relativePath:u===void 0?s.path||"":u,caseSensitive:s.caseSensitive===!0,childrenIndex:d,route:s};f.relativePath.startsWith("/")&&(A(f.relativePath.startsWith(n),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(n.length));let h=Le([n,f.relativePath]),m=r.concat(f);s.children&&s.children.length>0&&(A(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),Mt(s.children,t,m,h)),!(s.path==null&&!s.index)&&t.push({path:h,score:or(h,s.index),routesMeta:m})};return e.forEach((s,d)=>{var u;if(s.path===""||!((u=s.path)!=null&&u.includes("?")))a(s,d);else for(let f of Et(s.path))a(s,d,f)}),t}function Et(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,a=r.endsWith("?"),s=r.replace(/\?$/,"");if(n.length===0)return a?[s,""]:[s];let d=Et(n.join("/")),u=[];return u.push(...d.map(f=>f===""?s:[s,f].join("/"))),a&&u.push(...d),u.map(f=>e.startsWith("/")&&f===""?"/":f)}function Qt(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:ir(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const Zt=/^:\w+$/,er=3,tr=2,rr=1,nr=10,ar=-2,ft=e=>e==="*";function or(e,t){let r=e.split("/"),n=r.length;return r.some(ft)&&(n+=ar),t&&(n+=tr),r.filter(a=>!ft(a)).reduce((a,s)=>a+(Zt.test(s)?er:s===""?rr:nr),n)}function ir(e,t){return e.length===t.length&&e.slice(0,-1).every((n,a)=>n===t[a])?e[e.length-1]-t[t.length-1]:0}function lr(e,t){let{routesMeta:r}=e,n={},a="/",s=[];for(let d=0;d<r.length;++d){let u=r[d],f=d===r.length-1,h=a==="/"?t:t.slice(a.length)||"/",m=dr({path:u.relativePath,caseSensitive:u.caseSensitive,end:f},h);if(!m)return null;Object.assign(n,m.params);let M=u.route;s.push({params:n,pathname:Le([a,m.pathname]),pathnameBase:pr(Le([a,m.pathnameBase])),route:M}),m.pathnameBase!=="/"&&(a=Le([a,m.pathnameBase]))}return s}function dr(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=sr(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let s=a[0],d=s.replace(/(.)\/+$/,"$1"),u=a.slice(1);return{params:n.reduce((h,m,M)=>{if(m==="*"){let x=u[M]||"";d=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}return h[m]=ur(u[M]||"",m),h},{}),pathname:s,pathnameBase:d,pattern:e}}function sr(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),ge(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(d,u)=>(n.push(u),"/([^\\/]+)"));return e.endsWith("*")?(n.push("*"),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),n]}function cr(e){try{return decodeURI(e)}catch(t){return ge(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ur(e,t){try{return decodeURIComponent(e)}catch(r){return ge(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),e}}function Ie(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function fr(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:a=""}=typeof e=="string"?se(e):e;return{pathname:r?r.startsWith("/")?r:hr(r,t):t,search:gr(n),hash:yr(a)}}function hr(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function Ke(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function St(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function mr(e,t,r,n){n===void 0&&(n=!1);let a;typeof e=="string"?a=se(e):(a=C({},e),A(!a.pathname||!a.pathname.includes("?"),Ke("?","pathname","search",a)),A(!a.pathname||!a.pathname.includes("#"),Ke("#","pathname","hash",a)),A(!a.search||!a.search.includes("#"),Ke("#","search","hash",a)));let s=e===""||a.pathname==="",d=s?"/":a.pathname,u;if(n||d==null)u=r;else{let M=t.length-1;if(d.startsWith("..")){let x=d.split("/");for(;x[0]==="..";)x.shift(),M-=1;a.pathname=x.join("/")}u=M>=0?t[M]:"/"}let f=fr(a,u),h=d&&d!=="/"&&d.endsWith("/"),m=(s||d===".")&&r.endsWith("/");return!f.pathname.endsWith("/")&&(h||m)&&(f.pathname+="/"),f}const Le=e=>e.join("/").replace(/\/\/+/g,"/"),pr=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),gr=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,yr=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Lt{constructor(t,r,n,a){a===void 0&&(a=!1),this.status=t,this.statusText=r||"",this.internal=a,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}}function vr(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Pt=["post","put","patch","delete"],br=new Set(Pt),Rr=["get",...Pt],wr=new Set(Rr),Dr=new Set([301,302,303,307,308]),xr=new Set([307,308]),qe={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Mr={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},De={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Ut=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Er=e=>({hasErrorBoundary:Boolean(e.hasErrorBoundary)});function Or(e){const t=e.window?e.window:typeof window<"u"?window:void 0,r=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",n=!r;A(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let a;if(e.mapRouteProperties)a=e.mapRouteProperties;else if(e.detectErrorBoundary){let o=e.detectErrorBoundary;a=i=>({hasErrorBoundary:o(i)})}else a=Er;let s={},d=Ye(e.routes,a,void 0,s),u,f=e.basename||"/",h=C({v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),m=null,M=new Set,x=null,j=null,E=null,w=e.hydrationData!=null,v=Se(d,e.history.location,f),S=null;if(v==null){let o=V(404,{pathname:e.history.location.pathname}),{matches:i,route:c}=Rt(d);v=i,S={[c.id]:o}}let _=!v.some(o=>o.route.lazy)&&(!v.some(o=>o.route.loader)||e.hydrationData!=null),$,l={historyAction:e.history.action,location:e.history.location,matches:v,initialized:_,navigation:qe,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||S,fetchers:new Map,blockers:new Map},P=H.Pop,K=!1,I,Y=!1,q=!1,X=[],ce=[],B=new Map,Ae=0,ye=-1,ue=new Map,Q=new Set,fe=new Map,ne=new Map,ae=new Map,ze=!1;function Ct(){return m=e.history.listen(o=>{let{action:i,location:c,delta:p}=o;if(ze){ze=!1;return}ge(ae.size===0||p!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let R=it({currentLocation:l.location,nextLocation:c,historyAction:i});if(R&&p!=null){ze=!0,e.history.go(p*-1),Ce(R,{state:"blocked",location:c,proceed(){Ce(R,{state:"proceeding",proceed:void 0,reset:void 0,location:c}),e.history.go(p)},reset(){let b=new Map(l.blockers);b.set(R,De),k({blockers:b})}});return}return oe(i,c)}),l.initialized||oe(H.Pop,l.location),$}function jt(){m&&m(),M.clear(),I&&I.abort(),l.fetchers.forEach((o,i)=>Be(i)),l.blockers.forEach((o,i)=>ot(i))}function It(o){return M.add(o),()=>M.delete(o)}function k(o){l=C({},l,o),M.forEach(i=>i(l))}function ve(o,i){var c,p;let R=l.actionData!=null&&l.navigation.formMethod!=null&&J(l.navigation.formMethod)&&l.navigation.state==="loading"&&((c=o.state)==null?void 0:c._isRedirect)!==!0,b;i.actionData?Object.keys(i.actionData).length>0?b=i.actionData:b=null:R?b=l.actionData:b=null;let D=i.loaderData?bt(l.loaderData,i.loaderData,i.matches||[],i.errors):l.loaderData,y=l.blockers;y.size>0&&(y=new Map(y),y.forEach((T,W)=>y.set(W,De)));let g=K===!0||l.navigation.formMethod!=null&&J(l.navigation.formMethod)&&((p=o.state)==null?void 0:p._isRedirect)!==!0;u&&(d=u,u=void 0),Y||P===H.Pop||(P===H.Push?e.history.push(o,o.state):P===H.Replace&&e.history.replace(o,o.state)),k(C({},i,{actionData:b,loaderData:D,historyAction:P,location:o,initialized:!0,navigation:qe,revalidation:"idle",restoreScrollPosition:dt(o,i.matches||l.matches),preventScrollReset:g,blockers:y})),P=H.Pop,K=!1,Y=!1,q=!1,X=[],ce=[]}async function Ze(o,i){if(typeof o=="number"){e.history.go(o);return}let c=Ge(l.location,l.matches,f,h.v7_prependBasename,o,i==null?void 0:i.fromRouteId,i==null?void 0:i.relative),{path:p,submission:R,error:b}=ht(h.v7_normalizeFormMethod,!1,c,i),D=l.location,y=Ue(l.location,p,i&&i.state);y=C({},y,e.history.encodeLocation(y));let g=i&&i.replace!=null?i.replace:void 0,T=H.Push;g===!0?T=H.Replace:g===!1||R!=null&&J(R.formMethod)&&R.formAction===l.location.pathname+l.location.search&&(T=H.Replace);let W=i&&"preventScrollReset"in i?i.preventScrollReset===!0:void 0,L=it({currentLocation:D,nextLocation:y,historyAction:T});if(L){Ce(L,{state:"blocked",location:y,proceed(){Ce(L,{state:"proceeding",proceed:void 0,reset:void 0,location:y}),Ze(o,i)},reset(){let F=new Map(l.blockers);F.set(L,De),k({blockers:F})}});return}return await oe(T,y,{submission:R,pendingError:b,preventScrollReset:W,replace:i&&i.replace})}function zt(){if(Oe(),k({revalidation:"loading"}),l.navigation.state!=="submitting"){if(l.navigation.state==="idle"){oe(l.historyAction,l.location,{startUninterruptedRevalidation:!0});return}oe(P||l.historyAction,l.navigation.location,{overrideNavigation:l.navigation})}}async function oe(o,i,c){I&&I.abort(),I=null,P=o,Y=(c&&c.startUninterruptedRevalidation)===!0,$t(l.location,l.matches),K=(c&&c.preventScrollReset)===!0;let p=u||d,R=c&&c.overrideNavigation,b=Se(p,i,f);if(!b){let F=V(404,{pathname:i.pathname}),{matches:z,route:ie}=Rt(p);Ne(),ve(i,{matches:z,loaderData:{},errors:{[ie.id]:F}});return}if(l.initialized&&!q&&Fr(l.location,i)&&!(c&&c.submission&&J(c.submission.formMethod))){ve(i,{matches:b});return}I=new AbortController;let D=Me(e.history,i,I.signal,c&&c.submission),y,g;if(c&&c.pendingError)g={[me(b).route.id]:c.pendingError};else if(c&&c.submission&&J(c.submission.formMethod)){let F=await Ot(D,i,c.submission,b,{replace:c.replace});if(F.shortCircuited)return;y=F.pendingActionData,g=F.pendingActionError,R=Ve(i,c.submission),D=new Request(D.url,{signal:D.signal})}let{shortCircuited:T,loaderData:W,errors:L}=await Bt(D,i,b,R,c&&c.submission,c&&c.fetcherSubmission,c&&c.replace,y,g);T||(I=null,ve(i,C({matches:b},y?{actionData:y}:{},{loaderData:W,errors:L})))}async function Ot(o,i,c,p,R){R===void 0&&(R={}),Oe();let b=jr(i,c);k({navigation:b});let D,y=Xe(p,i);if(!y.route.action&&!y.route.lazy)D={type:O.error,error:V(405,{method:o.method,pathname:i.pathname,routeId:y.route.id})};else if(D=await xe("action",o,y,p,s,a,f),o.signal.aborted)return{shortCircuited:!0};if(pe(D)){let g;return R&&R.replace!=null?g=R.replace:g=D.location===l.location.pathname+l.location.search,await be(l,D,{submission:c,replace:g}),{shortCircuited:!0}}if(Pe(D)){let g=me(p,y.route.id);return(R&&R.replace)!==!0&&(P=H.Push),{pendingActionData:{},pendingActionError:{[g.route.id]:D.error}}}if(de(D))throw V(400,{type:"defer-action"});return{pendingActionData:{[y.route.id]:D.data}}}async function Bt(o,i,c,p,R,b,D,y,g){let T=p||Ve(i,R),W=R||b||xt(T),L=u||d,[F,z]=mt(e.history,l,c,W,i,q,X,ce,fe,Q,L,f,y,g);if(Ne(U=>!(c&&c.some(G=>G.route.id===U))||F&&F.some(G=>G.route.id===U)),ye=++Ae,F.length===0&&z.length===0){let U=nt();return ve(i,C({matches:c,loaderData:{},errors:g||null},y?{actionData:y}:{},U?{fetchers:new Map(l.fetchers)}:{})),{shortCircuited:!0}}if(!Y){z.forEach(G=>{let re=l.fetchers.get(G.key),$e=Ee(void 0,re?re.data:void 0);l.fetchers.set(G.key,$e)});let U=y||l.actionData;k(C({navigation:T},U?Object.keys(U).length===0?{actionData:null}:{actionData:U}:{},z.length>0?{fetchers:new Map(l.fetchers)}:{}))}z.forEach(U=>{B.has(U.key)&&te(U.key),U.controller&&B.set(U.key,U.controller)});let ie=()=>z.forEach(U=>te(U.key));I&&I.signal.addEventListener("abort",ie);let{results:le,loaderResults:Re,fetcherResults:_e}=await tt(l.matches,c,F,z,o);if(o.signal.aborted)return{shortCircuited:!0};I&&I.signal.removeEventListener("abort",ie),z.forEach(U=>B.delete(U.key));let Z=wt(le);if(Z){if(Z.idx>=F.length){let U=z[Z.idx-F.length].key;Q.add(U)}return await be(l,Z.result,{replace:D}),{shortCircuited:!0}}let{loaderData:ee,errors:je}=vt(l,c,F,Re,g,z,_e,ne);ne.forEach((U,G)=>{U.subscribe(re=>{(re||U.done)&&ne.delete(G)})});let ke=nt(),He=at(ye),We=ke||He||z.length>0;return C({loaderData:ee,errors:je},We?{fetchers:new Map(l.fetchers)}:{})}function et(o){return l.fetchers.get(o)||Mr}function Nt(o,i,c,p){if(n)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");B.has(o)&&te(o);let R=u||d,b=Ge(l.location,l.matches,f,h.v7_prependBasename,c,i,p==null?void 0:p.relative),D=Se(R,b,f);if(!D){Te(o,i,V(404,{pathname:b}));return}let{path:y,submission:g,error:T}=ht(h.v7_normalizeFormMethod,!0,b,p);if(T){Te(o,i,T);return}let W=Xe(D,y);if(K=(p&&p.preventScrollReset)===!0,g&&J(g.formMethod)){_t(o,i,y,W,D,g);return}fe.set(o,{routeId:i,path:y}),kt(o,i,y,W,D,g)}async function _t(o,i,c,p,R,b){if(Oe(),fe.delete(o),!p.route.action&&!p.route.lazy){let N=V(405,{method:b.formMethod,pathname:c,routeId:i});Te(o,i,N);return}let D=l.fetchers.get(o),y=Ir(b,D);l.fetchers.set(o,y),k({fetchers:new Map(l.fetchers)});let g=new AbortController,T=Me(e.history,c,g.signal,b);B.set(o,g);let W=Ae,L=await xe("action",T,p,R,s,a,f);if(T.signal.aborted){B.get(o)===g&&B.delete(o);return}if(pe(L))if(B.delete(o),ye>W){let N=he(void 0);l.fetchers.set(o,N),k({fetchers:new Map(l.fetchers)});return}else{Q.add(o);let N=Ee(b);return l.fetchers.set(o,N),k({fetchers:new Map(l.fetchers)}),be(l,L,{fetcherSubmission:b})}if(Pe(L)){Te(o,i,L.error);return}if(de(L))throw V(400,{type:"defer-action"});let F=l.navigation.location||l.location,z=Me(e.history,F,g.signal),ie=u||d,le=l.navigation.state!=="idle"?Se(ie,l.navigation.location,f):l.matches;A(le,"Didn't find any matches after fetcher action");let Re=++Ae;ue.set(o,Re);let _e=Ee(b,L.data);l.fetchers.set(o,_e);let[Z,ee]=mt(e.history,l,le,b,F,q,X,ce,fe,Q,ie,f,{[p.route.id]:L.data},void 0);ee.filter(N=>N.key!==o).forEach(N=>{let we=N.key,st=l.fetchers.get(we),qt=Ee(void 0,st?st.data:void 0);l.fetchers.set(we,qt),B.has(we)&&te(we),N.controller&&B.set(we,N.controller)}),k({fetchers:new Map(l.fetchers)});let je=()=>ee.forEach(N=>te(N.key));g.signal.addEventListener("abort",je);let{results:ke,loaderResults:He,fetcherResults:We}=await tt(l.matches,le,Z,ee,z);if(g.signal.aborted)return;g.signal.removeEventListener("abort",je),ue.delete(o),B.delete(o),ee.forEach(N=>B.delete(N.key));let U=wt(ke);if(U){if(U.idx>=Z.length){let N=ee[U.idx-Z.length].key;Q.add(N)}return be(l,U.result)}let{loaderData:G,errors:re}=vt(l,l.matches,Z,He,void 0,ee,We,ne);if(l.fetchers.has(o)){let N=he(L.data);l.fetchers.set(o,N)}let $e=at(Re);l.navigation.state==="loading"&&Re>ye?(A(P,"Expected pending action"),I&&I.abort(),ve(l.navigation.location,{matches:le,loaderData:G,errors:re,fetchers:new Map(l.fetchers)})):(k(C({errors:re,loaderData:bt(l.loaderData,G,le,re)},$e||ee.length>0?{fetchers:new Map(l.fetchers)}:{})),q=!1)}async function kt(o,i,c,p,R,b){let D=l.fetchers.get(o),y=Ee(b,D?D.data:void 0);l.fetchers.set(o,y),k({fetchers:new Map(l.fetchers)});let g=new AbortController,T=Me(e.history,c,g.signal);B.set(o,g);let W=Ae,L=await xe("loader",T,p,R,s,a,f);if(de(L)&&(L=await Tt(L,T.signal,!0)||L),B.get(o)===g&&B.delete(o),T.signal.aborted)return;if(pe(L))if(ye>W){let z=he(void 0);l.fetchers.set(o,z),k({fetchers:new Map(l.fetchers)});return}else{Q.add(o),await be(l,L);return}if(Pe(L)){let z=me(l.matches,i);l.fetchers.delete(o),k({fetchers:new Map(l.fetchers),errors:{[z.route.id]:L.error}});return}A(!de(L),"Unhandled fetcher deferred data");let F=he(L.data);l.fetchers.set(o,F),k({fetchers:new Map(l.fetchers)})}async function be(o,i,c){let{submission:p,fetcherSubmission:R,replace:b}=c===void 0?{}:c;i.revalidate&&(q=!0);let D=Ue(o.location,i.location,{_isRedirect:!0});if(A(D,"Expected a location on the redirect navigation"),r){let F=!1;if(i.reloadDocument)F=!0;else if(Ut.test(i.location)){const z=e.history.createURL(i.location);F=z.origin!==t.location.origin||Ie(z.pathname,f)==null}if(F){b?t.location.replace(i.location):t.location.assign(i.location);return}}I=null;let y=b===!0?H.Replace:H.Push,{formMethod:g,formAction:T,formEncType:W}=o.navigation;!p&&!R&&g&&T&&W&&(p=xt(o.navigation));let L=p||R;if(xr.has(i.status)&&L&&J(L.formMethod))await oe(y,D,{submission:C({},L,{formAction:i.location}),preventScrollReset:K});else{let F=Ve(D,p);await oe(y,D,{overrideNavigation:F,fetcherSubmission:R,preventScrollReset:K})}}async function tt(o,i,c,p,R){let b=await Promise.all([...c.map(g=>xe("loader",R,g,i,s,a,f)),...p.map(g=>g.matches&&g.match&&g.controller?xe("loader",Me(e.history,g.path,g.controller.signal),g.match,g.matches,s,a,f):{type:O.error,error:V(404,{pathname:g.path})})]),D=b.slice(0,c.length),y=b.slice(c.length);return await Promise.all([Dt(o,c,D,D.map(()=>R.signal),!1,l.loaderData),Dt(o,p.map(g=>g.match),y,p.map(g=>g.controller?g.controller.signal:null),!0)]),{results:b,loaderResults:D,fetcherResults:y}}function Oe(){q=!0,X.push(...Ne()),fe.forEach((o,i)=>{B.has(i)&&(ce.push(i),te(i))})}function Te(o,i,c){let p=me(l.matches,i);Be(o),k({errors:{[p.route.id]:c},fetchers:new Map(l.fetchers)})}function Be(o){let i=l.fetchers.get(o);B.has(o)&&!(i&&i.state==="loading"&&ue.has(o))&&te(o),fe.delete(o),ue.delete(o),Q.delete(o),l.fetchers.delete(o)}function te(o){let i=B.get(o);A(i,"Expected fetch controller: "+o),i.abort(),B.delete(o)}function rt(o){for(let i of o){let c=et(i),p=he(c.data);l.fetchers.set(i,p)}}function nt(){let o=[],i=!1;for(let c of Q){let p=l.fetchers.get(c);A(p,"Expected fetcher: "+c),p.state==="loading"&&(Q.delete(c),o.push(c),i=!0)}return rt(o),i}function at(o){let i=[];for(let[c,p]of ue)if(p<o){let R=l.fetchers.get(c);A(R,"Expected fetcher: "+c),R.state==="loading"&&(te(c),ue.delete(c),i.push(c))}return rt(i),i.length>0}function Ht(o,i){let c=l.blockers.get(o)||De;return ae.get(o)!==i&&ae.set(o,i),c}function ot(o){l.blockers.delete(o),ae.delete(o)}function Ce(o,i){let c=l.blockers.get(o)||De;A(c.state==="unblocked"&&i.state==="blocked"||c.state==="blocked"&&i.state==="blocked"||c.state==="blocked"&&i.state==="proceeding"||c.state==="blocked"&&i.state==="unblocked"||c.state==="proceeding"&&i.state==="unblocked","Invalid blocker state transition: "+c.state+" -> "+i.state);let p=new Map(l.blockers);p.set(o,i),k({blockers:p})}function it(o){let{currentLocation:i,nextLocation:c,historyAction:p}=o;if(ae.size===0)return;ae.size>1&&ge(!1,"A router only supports one blocker at a time");let R=Array.from(ae.entries()),[b,D]=R[R.length-1],y=l.blockers.get(b);if(!(y&&y.state==="proceeding")&&D({currentLocation:i,nextLocation:c,historyAction:p}))return b}function Ne(o){let i=[];return ne.forEach((c,p)=>{(!o||o(p))&&(c.cancel(),i.push(p),ne.delete(p))}),i}function Wt(o,i,c){if(x=o,E=i,j=c||null,!w&&l.navigation===qe){w=!0;let p=dt(l.location,l.matches);p!=null&&k({restoreScrollPosition:p})}return()=>{x=null,E=null,j=null}}function lt(o,i){return j&&j(o,i.map(p=>Xt(p,l.loaderData)))||o.key}function $t(o,i){if(x&&E){let c=lt(o,i);x[c]=E()}}function dt(o,i){if(x){let c=lt(o,i),p=x[c];if(typeof p=="number")return p}return null}function Kt(o){s={},u=Ye(o,a,void 0,s)}return $={get basename(){return f},get state(){return l},get routes(){return d},initialize:Ct,subscribe:It,enableScrollRestoration:Wt,navigate:Ze,fetch:Nt,revalidate:zt,createHref:o=>e.history.createHref(o),encodeLocation:o=>e.history.encodeLocation(o),getFetcher:et,deleteFetcher:Be,dispose:jt,getBlocker:Ht,deleteBlocker:ot,_internalFetchControllers:B,_internalActiveDeferreds:ne,_internalSetRoutes:Kt},$}function Sr(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Ge(e,t,r,n,a,s,d){let u,f;if(s!=null&&d!=="path"){u=[];for(let m of t)if(u.push(m),m.route.id===s){f=m;break}}else u=t,f=t[t.length-1];let h=mr(a||".",St(u).map(m=>m.pathnameBase),Ie(e.pathname,r)||e.pathname,d==="path");return a==null&&(h.search=e.search,h.hash=e.hash),(a==null||a===""||a===".")&&f&&f.route.index&&!Qe(h.search)&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),n&&r!=="/"&&(h.pathname=h.pathname==="/"?r:Le([r,h.pathname])),Fe(h)}function ht(e,t,r,n){if(!n||!Sr(n))return{path:r};if(n.formMethod&&!Cr(n.formMethod))return{path:r,error:V(405,{method:n.formMethod})};let a=()=>({path:r,error:V(400,{type:"invalid-body"})}),s=n.formMethod||"get",d=e?s.toUpperCase():s.toLowerCase(),u=At(r);if(n.body!==void 0){if(n.formEncType==="text/plain"){if(!J(d))return a();let x=typeof n.body=="string"?n.body:n.body instanceof FormData||n.body instanceof URLSearchParams?Array.from(n.body.entries()).reduce((j,E)=>{let[w,v]=E;return""+j+w+"="+v+`
`},""):String(n.body);return{path:r,submission:{formMethod:d,formAction:u,formEncType:n.formEncType,formData:void 0,json:void 0,text:x}}}else if(n.formEncType==="application/json"){if(!J(d))return a();try{let x=typeof n.body=="string"?JSON.parse(n.body):n.body;return{path:r,submission:{formMethod:d,formAction:u,formEncType:n.formEncType,formData:void 0,json:x,text:void 0}}}catch{return a()}}}A(typeof FormData=="function","FormData is not available in this environment");let f,h;if(n.formData)f=Je(n.formData),h=n.formData;else if(n.body instanceof FormData)f=Je(n.body),h=n.body;else if(n.body instanceof URLSearchParams)f=n.body,h=yt(f);else if(n.body==null)f=new URLSearchParams,h=new FormData;else try{f=new URLSearchParams(n.body),h=yt(f)}catch{return a()}let m={formMethod:d,formAction:u,formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:h,json:void 0,text:void 0};if(J(m.formMethod))return{path:r,submission:m};let M=se(r);return t&&M.search&&Qe(M.search)&&f.append("index",""),M.search="?"+f,{path:Fe(M),submission:m}}function Lr(e,t){let r=e;if(t){let n=e.findIndex(a=>a.route.id===t);n>=0&&(r=e.slice(0,n))}return r}function mt(e,t,r,n,a,s,d,u,f,h,m,M,x,j){let E=j?Object.values(j)[0]:x?Object.values(x)[0]:void 0,w=e.createURL(t.location),v=e.createURL(a),S=j?Object.keys(j)[0]:void 0,$=Lr(r,S).filter((P,K)=>{if(P.route.lazy)return!0;if(P.route.loader==null)return!1;if(Pr(t.loaderData,t.matches[K],P)||d.some(q=>q===P.route.id))return!0;let I=t.matches[K],Y=P;return pt(P,C({currentUrl:w,currentParams:I.params,nextUrl:v,nextParams:Y.params},n,{actionResult:E,defaultShouldRevalidate:s||w.pathname+w.search===v.pathname+v.search||w.search!==v.search||Ft(I,Y)}))}),l=[];return f.forEach((P,K)=>{if(!r.some(ce=>ce.route.id===P.routeId))return;let I=Se(m,P.path,M);if(!I){l.push({key:K,routeId:P.routeId,path:P.path,matches:null,match:null,controller:null});return}let Y=t.fetchers.get(K),q=Xe(I,P.path),X=!1;h.has(K)?X=!1:u.includes(K)?X=!0:Y&&Y.state!=="idle"&&Y.data===void 0?X=s:X=pt(q,C({currentUrl:w,currentParams:t.matches[t.matches.length-1].params,nextUrl:v,nextParams:r[r.length-1].params},n,{actionResult:E,defaultShouldRevalidate:s})),X&&l.push({key:K,routeId:P.routeId,path:P.path,matches:I,match:q,controller:new AbortController})}),[$,l]}function Pr(e,t,r){let n=!t||r.route.id!==t.route.id,a=e[r.route.id]===void 0;return n||a}function Ft(e,t){let r=e.route.path;return e.pathname!==t.pathname||r!=null&&r.endsWith("*")&&e.params["*"]!==t.params["*"]}function pt(e,t){if(e.route.shouldRevalidate){let r=e.route.shouldRevalidate(t);if(typeof r=="boolean")return r}return t.defaultShouldRevalidate}async function gt(e,t,r){if(!e.lazy)return;let n=await e.lazy();if(!e.lazy)return;let a=r[e.id];A(a,"No route found in manifest");let s={};for(let d in n){let f=a[d]!==void 0&&d!=="hasErrorBoundary";ge(!f,'Route "'+a.id+'" has a static property "'+d+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+d+'" will be ignored.')),!f&&!Gt.has(d)&&(s[d]=n[d])}Object.assign(a,s),Object.assign(a,C({},t(a),{lazy:void 0}))}async function xe(e,t,r,n,a,s,d,u){u===void 0&&(u={});let f,h,m,M=E=>{let w,v=new Promise((S,_)=>w=_);return m=()=>w(),t.signal.addEventListener("abort",m),Promise.race([E({request:t,params:r.params,context:u.requestContext}),v])};try{let E=r.route[e];if(r.route.lazy)if(E){let w,v=await Promise.all([M(E).catch(S=>{w=S}),gt(r.route,s,a)]);if(w)throw w;h=v[0]}else if(await gt(r.route,s,a),E=r.route[e],E)h=await M(E);else if(e==="action"){let w=new URL(t.url),v=w.pathname+w.search;throw V(405,{method:t.method,pathname:v,routeId:r.route.id})}else return{type:O.data,data:void 0};else if(E)h=await M(E);else{let w=new URL(t.url),v=w.pathname+w.search;throw V(404,{pathname:v})}A(h!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+r.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(E){f=O.error,h=E}finally{m&&t.signal.removeEventListener("abort",m)}if(Tr(h)){let E=h.status;if(Dr.has(E)){let S=h.headers.get("Location");if(A(S,"Redirects returned/thrown from loaders/actions must have a Location header"),!Ut.test(S))S=Ge(new URL(t.url),n.slice(0,n.indexOf(r)+1),d,!0,S);else if(!u.isStaticRequest){let _=new URL(t.url),$=S.startsWith("//")?new URL(_.protocol+S):new URL(S),l=Ie($.pathname,d)!=null;$.origin===_.origin&&l&&(S=$.pathname+$.search+$.hash)}if(u.isStaticRequest)throw h.headers.set("Location",S),h;return{type:O.redirect,status:E,location:S,revalidate:h.headers.get("X-Remix-Revalidate")!==null,reloadDocument:h.headers.get("X-Remix-Reload-Document")!==null}}if(u.isRouteRequest)throw{type:f===O.error?O.error:O.data,response:h};let w,v=h.headers.get("Content-Type");return v&&/\bapplication\/json\b/.test(v)?w=await h.json():w=await h.text(),f===O.error?{type:f,error:new Lt(E,h.statusText,w),headers:h.headers}:{type:O.data,data:w,statusCode:h.status,headers:h.headers}}if(f===O.error)return{type:f,error:h};if(Ar(h)){var x,j;return{type:O.deferred,deferredData:h,statusCode:(x=h.init)==null?void 0:x.status,headers:((j=h.init)==null?void 0:j.headers)&&new Headers(h.init.headers)}}return{type:O.data,data:h}}function Me(e,t,r,n){let a=e.createURL(At(t)).toString(),s={signal:r};if(n&&J(n.formMethod)){let{formMethod:d,formEncType:u}=n;s.method=d.toUpperCase(),u==="application/json"?(s.headers=new Headers({"Content-Type":u}),s.body=JSON.stringify(n.json)):u==="text/plain"?s.body=n.text:u==="application/x-www-form-urlencoded"&&n.formData?s.body=Je(n.formData):s.body=n.formData}return new Request(a,s)}function Je(e){let t=new URLSearchParams;for(let[r,n]of e.entries())t.append(r,typeof n=="string"?n:n.name);return t}function yt(e){let t=new FormData;for(let[r,n]of e.entries())t.append(r,n);return t}function Ur(e,t,r,n,a){let s={},d=null,u,f=!1,h={};return r.forEach((m,M)=>{let x=t[M].route.id;if(A(!pe(m),"Cannot handle redirect results in processLoaderData"),Pe(m)){let j=me(e,x),E=m.error;n&&(E=Object.values(n)[0],n=void 0),d=d||{},d[j.route.id]==null&&(d[j.route.id]=E),s[x]=void 0,f||(f=!0,u=vr(m.error)?m.error.status:500),m.headers&&(h[x]=m.headers)}else de(m)?(a.set(x,m.deferredData),s[x]=m.deferredData.data):s[x]=m.data,m.statusCode!=null&&m.statusCode!==200&&!f&&(u=m.statusCode),m.headers&&(h[x]=m.headers)}),n&&(d=n,s[Object.keys(n)[0]]=void 0),{loaderData:s,errors:d,statusCode:u||200,loaderHeaders:h}}function vt(e,t,r,n,a,s,d,u){let{loaderData:f,errors:h}=Ur(t,r,n,a,u);for(let m=0;m<s.length;m++){let{key:M,match:x,controller:j}=s[m];A(d!==void 0&&d[m]!==void 0,"Did not find corresponding fetcher result");let E=d[m];if(!(j&&j.signal.aborted))if(Pe(E)){let w=me(e.matches,x==null?void 0:x.route.id);h&&h[w.route.id]||(h=C({},h,{[w.route.id]:E.error})),e.fetchers.delete(M)}else if(pe(E))A(!1,"Unhandled fetcher revalidation redirect");else if(de(E))A(!1,"Unhandled fetcher deferred data");else{let w=he(E.data);e.fetchers.set(M,w)}}return{loaderData:f,errors:h}}function bt(e,t,r,n){let a=C({},t);for(let s of r){let d=s.route.id;if(t.hasOwnProperty(d)?t[d]!==void 0&&(a[d]=t[d]):e[d]!==void 0&&s.route.loader&&(a[d]=e[d]),n&&n.hasOwnProperty(d))break}return a}function me(e,t){return(t?e.slice(0,e.findIndex(n=>n.route.id===t)+1):[...e]).reverse().find(n=>n.route.hasErrorBoundary===!0)||e[0]}function Rt(e){let t=e.find(r=>r.index||!r.path||r.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function V(e,t){let{pathname:r,routeId:n,method:a,type:s}=t===void 0?{}:t,d="Unknown Server Error",u="Unknown @remix-run/router error";return e===400?(d="Bad Request",a&&r&&n?u="You made a "+a+' request to "'+r+'" but '+('did not provide a `loader` for route "'+n+'", ')+"so there is no way to handle the request.":s==="defer-action"?u="defer() is not supported in actions":s==="invalid-body"&&(u="Unable to encode submission body")):e===403?(d="Forbidden",u='Route "'+n+'" does not match URL "'+r+'"'):e===404?(d="Not Found",u='No route matches URL "'+r+'"'):e===405&&(d="Method Not Allowed",a&&r&&n?u="You made a "+a.toUpperCase()+' request to "'+r+'" but '+('did not provide an `action` for route "'+n+'", ')+"so there is no way to handle the request.":a&&(u='Invalid request method "'+a.toUpperCase()+'"')),new Lt(e||500,d,new Error(u),!0)}function wt(e){for(let t=e.length-1;t>=0;t--){let r=e[t];if(pe(r))return{result:r,idx:t}}}function At(e){let t=typeof e=="string"?se(e):e;return Fe(C({},t,{hash:""}))}function Fr(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function de(e){return e.type===O.deferred}function Pe(e){return e.type===O.error}function pe(e){return(e&&e.type)===O.redirect}function Ar(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function Tr(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Cr(e){return wr.has(e.toLowerCase())}function J(e){return br.has(e.toLowerCase())}async function Dt(e,t,r,n,a,s){for(let d=0;d<r.length;d++){let u=r[d],f=t[d];if(!f)continue;let h=e.find(M=>M.route.id===f.route.id),m=h!=null&&!Ft(h,f)&&(s&&s[f.route.id])!==void 0;if(de(u)&&(a||m)){let M=n[d];A(M,"Expected an AbortSignal for revalidating fetcher deferred result"),await Tt(u,M,a).then(x=>{x&&(r[d]=x||r[d])})}}}async function Tt(e,t,r){if(r===void 0&&(r=!1),!await e.deferredData.resolveData(t)){if(r)try{return{type:O.data,data:e.deferredData.unwrappedData}}catch(a){return{type:O.error,error:a}}return{type:O.data,data:e.deferredData.data}}}function Qe(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Xe(e,t){let r=typeof t=="string"?se(t).search:t.search;if(e[e.length-1].route.index&&Qe(r||""))return e[e.length-1];let n=St(e);return n[n.length-1]}function xt(e){let{formMethod:t,formAction:r,formEncType:n,text:a,formData:s,json:d}=e;if(!(!t||!r||!n)){if(a!=null)return{formMethod:t,formAction:r,formEncType:n,formData:void 0,json:void 0,text:a};if(s!=null)return{formMethod:t,formAction:r,formEncType:n,formData:s,json:void 0,text:void 0};if(d!==void 0)return{formMethod:t,formAction:r,formEncType:n,formData:void 0,json:d,text:void 0}}}function Ve(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function jr(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Ee(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Ir(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function he(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}export{H as A,Lt as E,vr as a,zr as b,Or as c,Fe as d,St as g,A as i,Le as j,Se as m,se as p,mr as r,Ie as s};
