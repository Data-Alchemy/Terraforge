import{$ as W,r as a}from"./react.db2dcf05.js";import{R as J}from"./react-dom.aa4a8343.js";import{m as Q,D as z,a as H,R as Z,u as ee,b as F,c as M,N as K,d as te,e as ne}from"./react-router.abc98862.js";import{c as re,b as ie,E as ae,s as N,i as $,d as I,e as V}from"./@remix-run.369d9a7a.js";import{j as R,F as se}from"./react-icons.12d2e325.js";/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function O(){return O=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},O.apply(this,arguments)}function G(t,n){if(t==null)return{};var e={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(n.indexOf(r)>=0)&&(e[r]=t[r]);return e}function oe(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function le(t,n){return t.button===0&&(!n||n==="_self")&&!oe(t)}const ue=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],ce=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],fe="6";try{window.__reactRouterVersion=fe}catch{}function Ne(t,n){return re({basename:n==null?void 0:n.basename,future:O({},n==null?void 0:n.future,{v7_prependBasename:!0}),history:ie({window:n==null?void 0:n.window}),hydrationData:(n==null?void 0:n.hydrationData)||de(),routes:t,mapRouteProperties:Q,unstable_dataStrategy:n==null?void 0:n.unstable_dataStrategy,window:n==null?void 0:n.window}).initialize()}function de(){var t;let n=(t=window)==null?void 0:t.__staticRouterHydrationData;return n&&n.errors&&(n=O({},n,{errors:pe(n.errors)})),n}function pe(t){if(!t)return null;let n=Object.entries(t),e={};for(let[i,r]of n)if(r&&r.__type==="RouteErrorResponse")e[i]=new ae(r.status,r.statusText,r.data,r.internal===!0);else if(r&&r.__type==="Error"){if(r.__subType){let s=window[r.__subType];if(typeof s=="function")try{let o=new s(r.message);o.stack="",e[i]=o}catch{}}if(e[i]==null){let s=new Error(r.message);s.stack="",e[i]=s}}else e[i]=r;return e}const X=a.exports.createContext({isTransitioning:!1}),he=a.exports.createContext(new Map),ve="startTransition",j=W[ve],me="flushSync",A=J[me],we="useId";W[we];function xe(t){j?j(t):t()}function U(t){A?A(t):t()}class ge{constructor(){this.status="pending",this.promise=new Promise((n,e)=>{this.resolve=i=>{this.status==="pending"&&(this.status="resolved",n(i))},this.reject=i=>{this.status==="pending"&&(this.status="rejected",e(i))}})}}function Oe(t){let{fallbackElement:n,router:e,future:i}=t,[r,s]=a.exports.useState(e.state),[o,w]=a.exports.useState(),[h,l]=a.exports.useState({isTransitioning:!1}),[u,g]=a.exports.useState(),[v,L]=a.exports.useState(),[m,b]=a.exports.useState(),S=a.exports.useRef(new Map),{v7_startTransition:C}=i||{},d=a.exports.useCallback(f=>{C?xe(f):f()},[C]),p=a.exports.useCallback((f,y)=>{let{deletedFetchers:x,unstable_flushSync:E,unstable_viewTransitionOpts:T}=y;x.forEach(P=>S.current.delete(P)),f.fetchers.forEach((P,q)=>{P.data!==void 0&&S.current.set(q,P.data)});let Y=e.window==null||e.window.document==null||typeof e.window.document.startViewTransition!="function";if(!T||Y){E?U(()=>s(f)):d(()=>s(f));return}if(E){U(()=>{v&&(u&&u.resolve(),v.skipTransition()),l({isTransitioning:!0,flushSync:!0,currentLocation:T.currentLocation,nextLocation:T.nextLocation})});let P=e.window.document.startViewTransition(()=>{U(()=>s(f))});P.finished.finally(()=>{U(()=>{g(void 0),L(void 0),w(void 0),l({isTransitioning:!1})})}),U(()=>L(P));return}v?(u&&u.resolve(),v.skipTransition(),b({state:f,currentLocation:T.currentLocation,nextLocation:T.nextLocation})):(w(f),l({isTransitioning:!0,flushSync:!1,currentLocation:T.currentLocation,nextLocation:T.nextLocation}))},[e.window,v,u,S,d]);a.exports.useLayoutEffect(()=>e.subscribe(p),[e,p]),a.exports.useEffect(()=>{h.isTransitioning&&!h.flushSync&&g(new ge)},[h]),a.exports.useEffect(()=>{if(u&&o&&e.window){let f=o,y=u.promise,x=e.window.document.startViewTransition(async()=>{d(()=>s(f)),await y});x.finished.finally(()=>{g(void 0),L(void 0),w(void 0),l({isTransitioning:!1})}),L(x)}},[d,o,u,e.window]),a.exports.useEffect(()=>{u&&o&&r.location.key===o.location.key&&u.resolve()},[u,v,r.location,o]),a.exports.useEffect(()=>{!h.isTransitioning&&m&&(w(m.state),l({isTransitioning:!0,flushSync:!1,currentLocation:m.currentLocation,nextLocation:m.nextLocation}),b(void 0))},[h.isTransitioning,m]),a.exports.useEffect(()=>{},[]);let c=a.exports.useMemo(()=>({createHref:e.createHref,encodeLocation:e.encodeLocation,go:f=>e.navigate(f),push:(f,y,x)=>e.navigate(f,{state:y,preventScrollReset:x==null?void 0:x.preventScrollReset}),replace:(f,y,x)=>e.navigate(f,{replace:!0,state:y,preventScrollReset:x==null?void 0:x.preventScrollReset})}),[e]),_=e.basename||"/",k=a.exports.useMemo(()=>({router:e,navigator:c,static:!1,basename:_}),[e,c,_]);return R(se,{children:R(z.Provider,{value:k,children:R(H.Provider,{value:r,children:R(he.Provider,{value:S.current,children:R(X.Provider,{value:h,children:R(Z,{basename:_,location:r.location,navigationType:r.historyAction,navigator:c,future:{v7_relativeSplatPath:e.future.v7_relativeSplatPath},children:r.initialized||e.future.v7_partialHydration?R(ye,{routes:e.routes,future:e.future,state:r}):n})})})})})})}function ye(t){let{routes:n,future:e,state:i}=t;return ee(n,void 0,i,e)}const Se=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Te=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Re=a.exports.forwardRef(function(n,e){let{onClick:i,relative:r,reloadDocument:s,replace:o,state:w,target:h,to:l,preventScrollReset:u,unstable_viewTransition:g}=n,v=G(n,ue),{basename:L}=a.exports.useContext(K),m,b=!1;if(typeof l=="string"&&Te.test(l)&&(m=l,Se))try{let p=new URL(window.location.href),c=l.startsWith("//")?new URL(p.protocol+l):new URL(l),_=N(c.pathname,L);c.origin===p.origin&&_!=null?l=_+c.search+c.hash:b=!0}catch{}let S=te(l,{relative:r}),C=be(l,{replace:o,state:w,target:h,preventScrollReset:u,relative:r,unstable_viewTransition:g});function d(p){i&&i(p),p.defaultPrevented||C(p)}return R("a",{...v,href:m||S,onClick:b||s?i:d,ref:e,target:h})}),De=a.exports.forwardRef(function(n,e){let{"aria-current":i="page",caseSensitive:r=!1,className:s="",end:o=!1,style:w,to:h,unstable_viewTransition:l,children:u}=n,g=G(n,ce),v=F(h,{relative:g.relative}),L=M(),m=a.exports.useContext(H),{navigator:b,basename:S}=a.exports.useContext(K),C=m!=null&&_e(v)&&l===!0,d=b.encodeLocation?b.encodeLocation(v).pathname:v.pathname,p=L.pathname,c=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;r||(p=p.toLowerCase(),c=c?c.toLowerCase():null,d=d.toLowerCase()),c&&S&&(c=N(c,S)||c);const _=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let k=p===d||!o&&p.startsWith(d)&&p.charAt(_)==="/",f=c!=null&&(c===d||!o&&c.startsWith(d)&&c.charAt(d.length)==="/"),y={isActive:k,isPending:f,isTransitioning:C},x=k?i:void 0,E;typeof s=="function"?E=s(y):E=[s,k?"active":null,f?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let T=typeof w=="function"?w(y):w;return R(Re,{...g,"aria-current":x,className:E,ref:e,style:T,to:h,unstable_viewTransition:l,children:typeof u=="function"?u(y):u})});var D;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(D||(D={}));var B;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(B||(B={}));function Le(t){let n=a.exports.useContext(z);return n||$(!1),n}function be(t,n){let{target:e,replace:i,state:r,preventScrollReset:s,relative:o,unstable_viewTransition:w}=n===void 0?{}:n,h=ne(),l=M(),u=F(t,{relative:o});return a.exports.useCallback(g=>{if(le(g,e)){g.preventDefault();let v=i!==void 0?i:V(l)===V(u);h(t,{replace:v,state:r,preventScrollReset:s,relative:o,unstable_viewTransition:w})}},[l,h,u,i,r,e,t,s,o,w])}function _e(t,n){n===void 0&&(n={});let e=a.exports.useContext(X);e==null&&$(!1);let{basename:i}=Le(D.useViewTransitionState),r=F(t,{relative:n.relative});if(!e.isTransitioning)return!1;let s=N(e.currentLocation.pathname,i)||e.currentLocation.pathname,o=N(e.nextLocation.pathname,i)||e.nextLocation.pathname;return I(r.pathname,o)!=null||I(r.pathname,s)!=null}export{De as N,Oe as R,Ne as c};