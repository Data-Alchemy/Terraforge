import{c as g,b as A,j as w,d as _,u as h,a as v}from"./micromark-util-character.799e1cad.js";const y={tokenize:B,partial:!0},D={tokenize:U,partial:!0},L={tokenize:q,partial:!0},S={tokenize:F,partial:!0},H={tokenize:G,partial:!0},b={tokenize:R,previous:C},W={tokenize:j,previous:E},f={tokenize:O,previous:T},o={};function K(){return{text:o}}let k=48;for(;k<123;)o[k]=f,k++,k===58?k=65:k===91&&(k=97);o[43]=f;o[45]=f;o[46]=f;o[95]=f;o[72]=[f,W];o[104]=[f,W];o[87]=[f,b];o[119]=[f,b];function O(t,m,l){const u=this;let a,e;return n;function n(i){return!x(i)||!T.call(u,u.previous)||P(u.events)?l(i):(t.enter("literalAutolink"),t.enter("literalAutolinkEmail"),r(i))}function r(i){return x(i)?(t.consume(i),r):i===64?(t.consume(i),p):l(i)}function p(i){return i===46?t.check(H,z,s)(i):i===45||i===95||g(i)?(e=!0,t.consume(i),p):z(i)}function s(i){return t.consume(i),a=!0,p}function z(i){return e&&a&&A(u.previous)?(t.exit("literalAutolinkEmail"),t.exit("literalAutolink"),m(i)):l(i)}}function R(t,m,l){const u=this;return a;function a(n){return n!==87&&n!==119||!C.call(u,u.previous)||P(u.events)?l(n):(t.enter("literalAutolink"),t.enter("literalAutolinkWww"),t.check(y,t.attempt(D,t.attempt(L,e),l),l)(n))}function e(n){return t.exit("literalAutolinkWww"),t.exit("literalAutolink"),m(n)}}function j(t,m,l){const u=this;let a="",e=!1;return n;function n(i){return(i===72||i===104)&&E.call(u,u.previous)&&!P(u.events)?(t.enter("literalAutolink"),t.enter("literalAutolinkHttp"),a+=String.fromCodePoint(i),t.consume(i),r):l(i)}function r(i){if(A(i)&&a.length<5)return a+=String.fromCodePoint(i),t.consume(i),r;if(i===58){const I=a.toLowerCase();if(I==="http"||I==="https")return t.consume(i),p}return l(i)}function p(i){return i===47?(t.consume(i),e?s:(e=!0,p)):l(i)}function s(i){return i===null||_(i)||w(i)||h(i)||v(i)?l(i):t.attempt(D,t.attempt(L,z),l)(i)}function z(i){return t.exit("literalAutolinkHttp"),t.exit("literalAutolink"),m(i)}}function B(t,m,l){let u=0;return a;function a(n){return(n===87||n===119)&&u<3?(u++,t.consume(n),a):n===46&&u===3?(t.consume(n),e):l(n)}function e(n){return n===null?l(n):m(n)}}function U(t,m,l){let u,a,e;return n;function n(s){return s===46||s===95?t.check(S,p,r)(s):s===null||w(s)||h(s)||s!==45&&v(s)?p(s):(e=!0,t.consume(s),n)}function r(s){return s===95?u=!0:(a=u,u=void 0),t.consume(s),n}function p(s){return a||u||!e?l(s):m(s)}}function q(t,m){let l=0,u=0;return a;function a(n){return n===40?(l++,t.consume(n),a):n===41&&u<l?e(n):n===33||n===34||n===38||n===39||n===41||n===42||n===44||n===46||n===58||n===59||n===60||n===63||n===93||n===95||n===126?t.check(S,m,e)(n):n===null||w(n)||h(n)?m(n):(t.consume(n),a)}function e(n){return n===41&&u++,t.consume(n),a}}function F(t,m,l){return u;function u(r){return r===33||r===34||r===39||r===41||r===42||r===44||r===46||r===58||r===59||r===63||r===95||r===126?(t.consume(r),u):r===38?(t.consume(r),e):r===93?(t.consume(r),a):r===60||r===null||w(r)||h(r)?m(r):l(r)}function a(r){return r===null||r===40||r===91||w(r)||h(r)?m(r):u(r)}function e(r){return A(r)?n(r):l(r)}function n(r){return r===59?(t.consume(r),u):A(r)?(t.consume(r),n):l(r)}}function G(t,m,l){return u;function u(e){return t.consume(e),a}function a(e){return g(e)?l(e):m(e)}}function C(t){return t===null||t===40||t===42||t===95||t===91||t===93||t===126||w(t)}function E(t){return!A(t)}function T(t){return!(t===47||x(t))}function x(t){return t===43||t===45||t===46||t===95||g(t)}function P(t){let m=t.length,l=!1;for(;m--;){const u=t[m][1];if((u.type==="labelLink"||u.type==="labelImage")&&!u._balanced){l=!0;break}if(u._gfmAutolinkLiteralWalkedInto){l=!1;break}}return t.length>0&&!l&&(t[t.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),l}export{K as g};
