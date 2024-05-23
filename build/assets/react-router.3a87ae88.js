import{r as n,$ as A}from"./react.db2dcf05.js";import{i as g,p as L,m as $,j as N,A as T,s as W,g as D,r as M,a as z}from"./@remix-run.369d9a7a.js";import{j as h,a as q,F as G}from"./react-icons.e18df677.js";/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},R.apply(this,arguments)}const I=n.exports.createContext(null),K=n.exports.createContext(null),E=n.exports.createContext(null),B=n.exports.createContext(null),y=n.exports.createContext({outlet:null,matches:[],isDataRoute:!1}),J=n.exports.createContext(null);function pe(e,t){let{relative:r}=t===void 0?{}:t;P()||g(!1);let{basename:l,navigator:s}=n.exports.useContext(E),{hash:u,pathname:a,search:f}=Y(e,{relative:r}),c=a;return l!=="/"&&(c=a==="/"?l:N([l,a])),s.createHref({pathname:c,search:f,hash:u})}function P(){return n.exports.useContext(B)!=null}function j(){return P()||g(!1),n.exports.useContext(B).location}function _(e){n.exports.useContext(E).static||n.exports.useLayoutEffect(e)}function he(){let{isDataRoute:e}=n.exports.useContext(y);return e?se():Q()}function Q(){P()||g(!1);let e=n.exports.useContext(I),{basename:t,future:r,navigator:l}=n.exports.useContext(E),{matches:s}=n.exports.useContext(y),{pathname:u}=j(),a=JSON.stringify(D(s,r.v7_relativeSplatPath)),f=n.exports.useRef(!1);return _(()=>{f.current=!0}),n.exports.useCallback(function(p,i){if(i===void 0&&(i={}),!f.current)return;if(typeof p=="number"){l.go(p);return}let o=M(p,JSON.parse(a),u,i.relative==="path");e==null&&t!=="/"&&(o.pathname=o.pathname==="/"?t:N([t,o.pathname])),(i.replace?l.replace:l.push)(o,i.state,i)},[t,l,a,u,e])}const V=n.exports.createContext(null);function X(e){let t=n.exports.useContext(y).outlet;return t&&h(V.Provider,{value:e,children:t})}function Y(e,t){let{relative:r}=t===void 0?{}:t,{future:l}=n.exports.useContext(E),{matches:s}=n.exports.useContext(y),{pathname:u}=j(),a=JSON.stringify(D(s,l.v7_relativeSplatPath));return n.exports.useMemo(()=>M(e,JSON.parse(a),u,r==="path"),[e,a,u,r])}function ve(e,t,r,l){P()||g(!1);let{navigator:s}=n.exports.useContext(E),{matches:u}=n.exports.useContext(y),a=u[u.length-1],f=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let p=j(),i;if(t){var o;let d=typeof t=="string"?L(t):t;c==="/"||((o=d.pathname)==null?void 0:o.startsWith(c))||g(!1),i=d}else i=p;let v=i.pathname||"/",m=v;if(c!=="/"){let d=c.replace(/^\//,"").split("/");m="/"+v.replace(/^\//,"").split("/").slice(d.length).join("/")}let x=$(e,{pathname:m}),C=re(x&&x.map(d=>Object.assign({},d,{params:Object.assign({},f,d.params),pathname:N([c,s.encodeLocation?s.encodeLocation(d.pathname).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?c:N([c,s.encodeLocation?s.encodeLocation(d.pathnameBase).pathname:d.pathnameBase])})),u,r,l);return t&&C?h(B.Provider,{value:{location:R({pathname:"/",search:"",hash:"",state:null,key:"default"},i),navigationType:T.Pop},children:C}):C}function Z(){let e=le(),t=z(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null;return q(G,{children:[h("h2",{children:"Unexpected Application Error!"}),h("h3",{style:{fontStyle:"italic"},children:t}),r?h("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},children:r}):null,null]})}const H=h(Z,{});class ee extends n.exports.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?h(y.Provider,{value:this.props.routeContext,children:h(J.Provider,{value:this.state.error,children:this.props.component})}):this.props.children}}function te(e){let{routeContext:t,match:r,children:l}=e,s=n.exports.useContext(I);return s&&s.static&&s.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=r.route.id),h(y.Provider,{value:t,children:l})}function re(e,t,r,l){var s;if(t===void 0&&(t=[]),r===void 0&&(r=null),l===void 0&&(l=null),e==null){var u;if((u=r)!=null&&u.errors)e=r.matches;else return null}let a=e,f=(s=r)==null?void 0:s.errors;if(f!=null){let i=a.findIndex(o=>o.route.id&&(f==null?void 0:f[o.route.id])!==void 0);i>=0||g(!1),a=a.slice(0,Math.min(a.length,i+1))}let c=!1,p=-1;if(r&&l&&l.v7_partialHydration)for(let i=0;i<a.length;i++){let o=a[i];if((o.route.HydrateFallback||o.route.hydrateFallbackElement)&&(p=i),o.route.id){let{loaderData:v,errors:m}=r,x=o.route.loader&&v[o.route.id]===void 0&&(!m||m[o.route.id]===void 0);if(o.route.lazy||x){c=!0,p>=0?a=a.slice(0,p+1):a=[a[0]];break}}}return a.reduceRight((i,o,v)=>{let m,x=!1,C=null,d=null;r&&(m=f&&o.route.id?f[o.route.id]:void 0,C=o.route.errorElement||H,c&&(p<0&&v===0?(ie("route-fallback",!1),x=!0,d=null):p===v&&(x=!0,d=o.route.hydrateFallbackElement||null)));let U=t.concat(a.slice(0,v+1)),F=()=>{let b;return m?b=C:x?b=d:o.route.Component?b=n.exports.createElement(o.route.Component,null):o.route.element?b=o.route.element:b=i,h(te,{match:o,routeContext:{outlet:i,matches:U,isDataRoute:r!=null},children:b})};return r&&(o.route.ErrorBoundary||o.route.errorElement||v===0)?h(ee,{location:r.location,revalidation:r.revalidation,component:C,error:m,children:F(),routeContext:{outlet:null,matches:U,isDataRoute:!0}}):F()},null)}var S=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(S||{}),O=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(O||{});function ne(e){let t=n.exports.useContext(I);return t||g(!1),t}function ae(e){let t=n.exports.useContext(K);return t||g(!1),t}function oe(e){let t=n.exports.useContext(y);return t||g(!1),t}function w(e){let t=oe(),r=t.matches[t.matches.length-1];return r.route.id||g(!1),r.route.id}function le(){var e;let t=n.exports.useContext(J),r=ae(O.UseRouteError),l=w(O.UseRouteError);return t!==void 0?t:(e=r.errors)==null?void 0:e[l]}function se(){let{router:e}=ne(S.UseNavigateStable),t=w(O.UseNavigateStable),r=n.exports.useRef(!1);return _(()=>{r.current=!0}),n.exports.useCallback(function(s,u){u===void 0&&(u={}),r.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,R({fromRouteId:t},u)))},[e,t])}const k={};function ie(e,t,r){!t&&!k[e]&&(k[e]=!0)}const ue="startTransition";A[ue];function me(e){return X(e.context)}function xe(e){let{basename:t="/",children:r=null,location:l,navigationType:s=T.Pop,navigator:u,static:a=!1,future:f}=e;P()&&g(!1);let c=t.replace(/^\/*/,"/"),p=n.exports.useMemo(()=>({basename:c,navigator:u,static:a,future:R({v7_relativeSplatPath:!1},f)}),[c,f,u,a]);typeof l=="string"&&(l=L(l));let{pathname:i="/",search:o="",hash:v="",state:m=null,key:x="default"}=l,C=n.exports.useMemo(()=>{let d=W(i,c);return d==null?null:{location:{pathname:d,search:o,hash:v,state:m,key:x},navigationType:s}},[c,i,o,v,m,x,s]);return C==null?null:h(E.Provider,{value:p,children:h(B.Provider,{children:r,value:C})})}new Promise(()=>{});function ge(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:n.exports.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:n.exports.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:n.exports.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}export{I as D,E as N,me as O,xe as R,K as a,Y as b,j as c,pe as d,he as e,ge as m,ve as u};