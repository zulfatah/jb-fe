const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.es-BJ7Ecz26.js","assets/router-DRybSzA4.js","assets/utils-C6sbJlE3.js","assets/ui-xYHN0dJP.js"])))=>i.map(i=>d[i]);
var y1=Object.defineProperty;var Hu=t=>{throw TypeError(t)};var x1=(t,e,r)=>e in t?y1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var $u=(t,e,r)=>x1(t,typeof e!="symbol"?e+"":e,r),Yc=(t,e,r)=>e.has(t)||Hu("Cannot "+r);var $=(t,e,r)=>(Yc(t,e,"read from private field"),r?r.call(t):e.get(t)),Ue=(t,e,r)=>e.has(t)?Hu("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),Ee=(t,e,r,a)=>(Yc(t,e,"write to private field"),a?a.call(t,r):e.set(t,r),r),st=(t,e,r)=>(Yc(t,e,"access private method"),r);var jl=(t,e,r,a)=>({set _(i){Ee(t,e,i,r)},get _(){return $(t,e,a)}});import{r as me,a as w1,u as j1,b as na,L as ki,d as Gl,R as pf,e as Vu,f as k1,h as Zt,N as yo,B as N1}from"./router-DRybSzA4.js";import{a as S1,g as md,s as Jc,b as A1,o as Qd,c as sr,u as Xd,l as mf,d as L1}from"./utils-C6sbJlE3.js";import{R as Ku,L as P1,C as Gu,X as Yu,Y as Ju,T as Qu,a as Xu,B as _1,b as C1,u as F1,f as Zu,g as I1,c as D1}from"./ui-xYHN0dJP.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(i){if(i.ep)return;i.ep=!0;const n=r(i);fetch(i.href,n)}})();var gf={exports:{}},Yl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E1=me,T1=Symbol.for("react.element"),M1=Symbol.for("react.fragment"),B1=Object.prototype.hasOwnProperty,O1=E1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R1={key:!0,ref:!0,__self:!0,__source:!0};function bf(t,e,r){var a,i={},n=null,l=null;r!==void 0&&(n=""+r),e.key!==void 0&&(n=""+e.key),e.ref!==void 0&&(l=e.ref);for(a in e)B1.call(e,a)&&!R1.hasOwnProperty(a)&&(i[a]=e[a]);if(t&&t.defaultProps)for(a in e=t.defaultProps,e)i[a]===void 0&&(i[a]=e[a]);return{$$typeof:T1,type:t,key:n,ref:l,props:i,_owner:O1.current}}Yl.Fragment=M1;Yl.jsx=bf;Yl.jsxs=bf;gf.exports=Yl;var s=gf.exports,gd={},eh=w1;gd.createRoot=eh.createRoot,gd.hydrateRoot=eh.hydrateRoot;var Is=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},pi,En,bs,rf,z1=(rf=class extends Is{constructor(){super();Ue(this,pi);Ue(this,En);Ue(this,bs);Ee(this,bs,e=>{if(typeof window<"u"&&window.addEventListener){const r=()=>e();return window.addEventListener("visibilitychange",r,!1),()=>{window.removeEventListener("visibilitychange",r)}}})}onSubscribe(){$(this,En)||this.setEventListener($(this,bs))}onUnsubscribe(){var e;this.hasListeners()||((e=$(this,En))==null||e.call(this),Ee(this,En,void 0))}setEventListener(e){var r;Ee(this,bs,e),(r=$(this,En))==null||r.call(this),Ee(this,En,e(a=>{typeof a=="boolean"?this.setFocused(a):this.onFocus()}))}setFocused(e){$(this,pi)!==e&&(Ee(this,pi,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(r=>{r(e)})}isFocused(){var e;return typeof $(this,pi)=="boolean"?$(this,pi):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},pi=new WeakMap,En=new WeakMap,bs=new WeakMap,rf),Zd=new z1,q1={setTimeout:(t,e)=>setTimeout(t,e),clearTimeout:t=>clearTimeout(t),setInterval:(t,e)=>setInterval(t,e),clearInterval:t=>clearInterval(t)},Tn,Jd,af,U1=(af=class{constructor(){Ue(this,Tn,q1);Ue(this,Jd,!1)}setTimeoutProvider(t){Ee(this,Tn,t)}setTimeout(t,e){return $(this,Tn).setTimeout(t,e)}clearTimeout(t){$(this,Tn).clearTimeout(t)}setInterval(t,e){return $(this,Tn).setInterval(t,e)}clearInterval(t){$(this,Tn).clearInterval(t)}},Tn=new WeakMap,Jd=new WeakMap,af),fi=new U1;function W1(t){setTimeout(t,0)}var H1=typeof window>"u"||"Deno"in globalThis;function Lr(){}function $1(t,e){return typeof t=="function"?t(e):t}function bd(t){return typeof t=="number"&&t>=0&&t!==1/0}function vf(t,e){return Math.max(t+(e||0)-Date.now(),0)}function Hn(t,e){return typeof t=="function"?t(e):t}function Kr(t,e){return typeof t=="function"?t(e):t}function th(t,e){const{type:r="all",exact:a,fetchStatus:i,predicate:n,queryKey:l,stale:c}=t;if(l){if(a){if(e.queryHash!==eu(l,e.options))return!1}else if(!xo(e.queryKey,l))return!1}if(r!=="all"){const u=e.isActive();if(r==="active"&&!u||r==="inactive"&&u)return!1}return!(typeof c=="boolean"&&e.isStale()!==c||i&&i!==e.state.fetchStatus||n&&!n(e))}function rh(t,e){const{exact:r,status:a,predicate:i,mutationKey:n}=t;if(n){if(!e.options.mutationKey)return!1;if(r){if(Si(e.options.mutationKey)!==Si(n))return!1}else if(!xo(e.options.mutationKey,n))return!1}return!(a&&e.state.status!==a||i&&!i(e))}function eu(t,e){return((e==null?void 0:e.queryKeyHashFn)||Si)(t)}function Si(t){return JSON.stringify(t,(e,r)=>vd(r)?Object.keys(r).sort().reduce((a,i)=>(a[i]=r[i],a),{}):r)}function xo(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?Object.keys(e).every(r=>xo(t[r],e[r])):!1}var V1=Object.prototype.hasOwnProperty;function yf(t,e,r=0){if(t===e)return t;if(r>500)return e;const a=ah(t)&&ah(e);if(!a&&!(vd(t)&&vd(e)))return e;const n=(a?t:Object.keys(t)).length,l=a?e:Object.keys(e),c=l.length,u=a?new Array(c):{};let f=0;for(let g=0;g<c;g++){const b=a?g:l[g],y=t[b],m=e[b];if(y===m){u[b]=y,(a?g<n:V1.call(t,b))&&f++;continue}if(y===null||m===null||typeof y!="object"||typeof m!="object"){u[b]=m;continue}const k=yf(y,m,r+1);u[b]=k,k===y&&f++}return n===c&&f===n?t:u}function Ol(t,e){if(!e||Object.keys(t).length!==Object.keys(e).length)return!1;for(const r in t)if(t[r]!==e[r])return!1;return!0}function ah(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function vd(t){if(!nh(t))return!1;const e=t.constructor;if(e===void 0)return!0;const r=e.prototype;return!(!nh(r)||!r.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function nh(t){return Object.prototype.toString.call(t)==="[object Object]"}function K1(t){return new Promise(e=>{fi.setTimeout(e,t)})}function yd(t,e,r){return typeof r.structuralSharing=="function"?r.structuralSharing(t,e):r.structuralSharing!==!1?yf(t,e):e}function G1(t,e,r=0){const a=[...t,e];return r&&a.length>r?a.slice(1):a}function Y1(t,e,r=0){const a=[e,...t];return r&&a.length>r?a.slice(0,-1):a}var tu=Symbol();function xf(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===tu?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}function ru(t,e){return typeof t=="function"?t(...e):!!t}function J1(t,e,r){let a=!1,i;return Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(i??(i=e()),a||(a=!0,i.aborted?r():i.addEventListener("abort",r,{once:!0})),i)}),t}var wo=(()=>{let t=()=>H1;return{isServer(){return t()},setIsServer(e){t=e}}})();function xd(){let t,e;const r=new Promise((i,n)=>{t=i,e=n});r.status="pending",r.catch(()=>{});function a(i){Object.assign(r,i),delete r.resolve,delete r.reject}return r.resolve=i=>{a({status:"fulfilled",value:i}),t(i)},r.reject=i=>{a({status:"rejected",reason:i}),e(i)},r}var Q1=W1;function X1(){let t=[],e=0,r=c=>{c()},a=c=>{c()},i=Q1;const n=c=>{e?t.push(c):i(()=>{r(c)})},l=()=>{const c=t;t=[],c.length&&i(()=>{a(()=>{c.forEach(u=>{r(u)})})})};return{batch:c=>{let u;e++;try{u=c()}finally{e--,e||l()}return u},batchCalls:c=>(...u)=>{n(()=>{c(...u)})},schedule:n,setNotifyFunction:c=>{r=c},setBatchNotifyFunction:c=>{a=c},setScheduler:c=>{i=c}}}var er=X1(),vs,Mn,ys,nf,Z1=(nf=class extends Is{constructor(){super();Ue(this,vs,!0);Ue(this,Mn);Ue(this,ys);Ee(this,ys,e=>{if(typeof window<"u"&&window.addEventListener){const r=()=>e(!0),a=()=>e(!1);return window.addEventListener("online",r,!1),window.addEventListener("offline",a,!1),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",a)}}})}onSubscribe(){$(this,Mn)||this.setEventListener($(this,ys))}onUnsubscribe(){var e;this.hasListeners()||((e=$(this,Mn))==null||e.call(this),Ee(this,Mn,void 0))}setEventListener(e){var r;Ee(this,ys,e),(r=$(this,Mn))==null||r.call(this),Ee(this,Mn,e(this.setOnline.bind(this)))}setOnline(e){$(this,vs)!==e&&(Ee(this,vs,e),this.listeners.forEach(a=>{a(e)}))}isOnline(){return $(this,vs)}},vs=new WeakMap,Mn=new WeakMap,ys=new WeakMap,nf),Rl=new Z1;function e0(t){return Math.min(1e3*2**t,3e4)}function wf(t){return(t??"online")==="online"?Rl.isOnline():!0}var wd=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function jf(t){let e=!1,r=0,a;const i=xd(),n=()=>i.status!=="pending",l=N=>{var _;if(!n()){const x=new wd(N);y(x),(_=t.onCancel)==null||_.call(t,x)}},c=()=>{e=!0},u=()=>{e=!1},f=()=>Zd.isFocused()&&(t.networkMode==="always"||Rl.isOnline())&&t.canRun(),g=()=>wf(t.networkMode)&&t.canRun(),b=N=>{n()||(a==null||a(),i.resolve(N))},y=N=>{n()||(a==null||a(),i.reject(N))},m=()=>new Promise(N=>{var _;a=x=>{(n()||f())&&N(x)},(_=t.onPause)==null||_.call(t)}).then(()=>{var N;a=void 0,n()||(N=t.onContinue)==null||N.call(t)}),k=()=>{if(n())return;let N;const _=r===0?t.initialPromise:void 0;try{N=_??t.fn()}catch(x){N=Promise.reject(x)}Promise.resolve(N).then(b).catch(x=>{var ee;if(n())return;const I=t.retry??(wo.isServer()?0:3),B=t.retryDelay??e0,R=typeof B=="function"?B(r,x):B,Z=I===!0||typeof I=="number"&&r<I||typeof I=="function"&&I(r,x);if(e||!Z){y(x);return}r++,(ee=t.onFail)==null||ee.call(t,r,x),K1(R).then(()=>f()?void 0:m()).then(()=>{e?y(x):k()})})};return{promise:i,status:()=>i.status,cancel:l,continue:()=>(a==null||a(),i),cancelRetry:c,continueRetry:u,canStart:g,start:()=>(g()?k():m().then(k),i)}}var mi,sf,kf=(sf=class{constructor(){Ue(this,mi)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),bd(this.gcTime)&&Ee(this,mi,fi.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(wo.isServer()?1/0:5*60*1e3))}clearGcTimeout(){$(this,mi)!==void 0&&(fi.clearTimeout($(this,mi)),Ee(this,mi,void 0))}},mi=new WeakMap,sf);function t0(t){return{onFetch:(e,r)=>{var g,b,y,m,k;const a=e.options,i=(y=(b=(g=e.fetchOptions)==null?void 0:g.meta)==null?void 0:b.fetchMore)==null?void 0:y.direction,n=((m=e.state.data)==null?void 0:m.pages)||[],l=((k=e.state.data)==null?void 0:k.pageParams)||[];let c={pages:[],pageParams:[]},u=0;const f=async()=>{let N=!1;const _=B=>{J1(B,()=>e.signal,()=>N=!0)},x=xf(e.options,e.fetchOptions),I=async(B,R,Z)=>{if(N)return Promise.reject(e.signal.reason);if(R==null&&B.pages.length)return Promise.resolve(B);const A=(()=>{const E={client:e.client,queryKey:e.queryKey,pageParam:R,direction:Z?"backward":"forward",meta:e.options.meta};return _(E),E})(),S=await x(A),{maxPages:M}=e.options,ne=Z?Y1:G1;return{pages:ne(B.pages,S,M),pageParams:ne(B.pageParams,R,M)}};if(i&&n.length){const B=i==="backward",R=B?r0:ih,Z={pages:n,pageParams:l},ee=R(a,Z);c=await I(Z,ee,B)}else{const B=t??n.length;do{const R=u===0?l[0]??a.initialPageParam:ih(a,c);if(u>0&&R==null)break;c=await I(c,R),u++}while(u<B)}return c};e.options.persister?e.fetchFn=()=>{var N,_;return(_=(N=e.options).persister)==null?void 0:_.call(N,f,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},r)}:e.fetchFn=f}}}function ih(t,{pages:e,pageParams:r}){const a=e.length-1;return e.length>0?t.getNextPageParam(e[a],e,r[a],r):void 0}function r0(t,{pages:e,pageParams:r}){var a;return e.length>0?(a=t.getPreviousPageParam)==null?void 0:a.call(t,e[0],e,r[0],r):void 0}var xs,gi,ws,aa,bi,ir,So,vi,Vr,Nf,tn,of,a0=(of=class extends kf{constructor(e){super();Ue(this,Vr);Ue(this,xs);Ue(this,gi);Ue(this,ws);Ue(this,aa);Ue(this,bi);Ue(this,ir);Ue(this,So);Ue(this,vi);Ee(this,vi,!1),Ee(this,So,e.defaultOptions),this.setOptions(e.options),this.observers=[],Ee(this,bi,e.client),Ee(this,aa,$(this,bi).getQueryCache()),this.queryKey=e.queryKey,this.queryHash=e.queryHash,Ee(this,gi,oh(this.options)),this.state=e.state??$(this,gi),this.scheduleGc()}get meta(){return this.options.meta}get queryType(){return $(this,xs)}get promise(){var e;return(e=$(this,ir))==null?void 0:e.promise}setOptions(e){if(this.options={...$(this,So),...e},e!=null&&e._type&&Ee(this,xs,e._type),this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const r=oh(this.options);r.data!==void 0&&(this.setState(sh(r.data,r.dataUpdatedAt)),Ee(this,gi,r))}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&$(this,aa).remove(this)}setData(e,r){const a=yd(this.state.data,e,this.options);return st(this,Vr,tn).call(this,{data:a,type:"success",dataUpdatedAt:r==null?void 0:r.updatedAt,manual:r==null?void 0:r.manual}),a}setState(e){st(this,Vr,tn).call(this,{type:"setState",state:e})}cancel(e){var a,i;const r=(a=$(this,ir))==null?void 0:a.promise;return(i=$(this,ir))==null||i.cancel(e),r?r.then(Lr).catch(Lr):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}get resetState(){return $(this,gi)}reset(){this.destroy(),this.setState(this.resetState)}isActive(){return this.observers.some(e=>Kr(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===tu||!this.isFetched()}isFetched(){return this.state.dataUpdateCount+this.state.errorUpdateCount>0}isStatic(){return this.getObserversCount()>0?this.observers.some(e=>Hn(e.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(e=0){return this.state.data===void 0?!0:e==="static"?!1:this.state.isInvalidated?!0:!vf(this.state.dataUpdatedAt,e)}onFocus(){var r;const e=this.observers.find(a=>a.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(r=$(this,ir))==null||r.continue()}onOnline(){var r;const e=this.observers.find(a=>a.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(r=$(this,ir))==null||r.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),$(this,aa).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(r=>r!==e),this.observers.length||($(this,ir)&&($(this,vi)||st(this,Vr,Nf).call(this)?$(this,ir).cancel({revert:!0}):$(this,ir).cancelRetry()),this.scheduleGc()),$(this,aa).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||st(this,Vr,tn).call(this,{type:"invalidate"})}async fetch(e,r){var f,g,b,y,m,k,N,_,x,I,B;if(this.state.fetchStatus!=="idle"&&((f=$(this,ir))==null?void 0:f.status())!=="rejected"){if(this.state.data!==void 0&&(r!=null&&r.cancelRefetch))this.cancel({silent:!0});else if($(this,ir))return $(this,ir).continueRetry(),$(this,ir).promise}if(e&&this.setOptions(e),!this.options.queryFn){const R=this.observers.find(Z=>Z.options.queryFn);R&&this.setOptions(R.options)}const a=new AbortController,i=R=>{Object.defineProperty(R,"signal",{enumerable:!0,get:()=>(Ee(this,vi,!0),a.signal)})},n=()=>{const R=xf(this.options,r),ee=(()=>{const A={client:$(this,bi),queryKey:this.queryKey,meta:this.meta};return i(A),A})();return Ee(this,vi,!1),this.options.persister?this.options.persister(R,ee,this):R(ee)},c=(()=>{const R={fetchOptions:r,options:this.options,queryKey:this.queryKey,client:$(this,bi),state:this.state,fetchFn:n};return i(R),R})(),u=$(this,xs)==="infinite"?t0(this.options.pages):this.options.behavior;u==null||u.onFetch(c,this),Ee(this,ws,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((g=c.fetchOptions)==null?void 0:g.meta))&&st(this,Vr,tn).call(this,{type:"fetch",meta:(b=c.fetchOptions)==null?void 0:b.meta}),Ee(this,ir,jf({initialPromise:r==null?void 0:r.initialPromise,fn:c.fetchFn,onCancel:R=>{R instanceof wd&&R.revert&&this.setState({...$(this,ws),fetchStatus:"idle"}),a.abort()},onFail:(R,Z)=>{st(this,Vr,tn).call(this,{type:"failed",failureCount:R,error:Z})},onPause:()=>{st(this,Vr,tn).call(this,{type:"pause"})},onContinue:()=>{st(this,Vr,tn).call(this,{type:"continue"})},retry:c.options.retry,retryDelay:c.options.retryDelay,networkMode:c.options.networkMode,canRun:()=>!0}));try{const R=await $(this,ir).start();if(R===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(R),(m=(y=$(this,aa).config).onSuccess)==null||m.call(y,R,this),(N=(k=$(this,aa).config).onSettled)==null||N.call(k,R,this.state.error,this),R}catch(R){if(R instanceof wd){if(R.silent)return $(this,ir).promise;if(R.revert){if(this.state.data===void 0)throw R;return this.state.data}}throw st(this,Vr,tn).call(this,{type:"error",error:R}),(x=(_=$(this,aa).config).onError)==null||x.call(_,R,this),(B=(I=$(this,aa).config).onSettled)==null||B.call(I,this.state.data,R,this),R}finally{this.scheduleGc()}}},xs=new WeakMap,gi=new WeakMap,ws=new WeakMap,aa=new WeakMap,bi=new WeakMap,ir=new WeakMap,So=new WeakMap,vi=new WeakMap,Vr=new WeakSet,Nf=function(){return this.state.fetchStatus==="paused"&&this.state.status==="pending"},tn=function(e){const r=a=>{switch(e.type){case"failed":return{...a,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...a,fetchStatus:"paused"};case"continue":return{...a,fetchStatus:"fetching"};case"fetch":return{...a,...Sf(a.data,this.options),fetchMeta:e.meta??null};case"success":const i={...a,...sh(e.data,e.dataUpdatedAt),dataUpdateCount:a.dataUpdateCount+1,...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return Ee(this,ws,e.manual?i:void 0),i;case"error":const n=e.error;return{...a,error:n,errorUpdateCount:a.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:a.fetchFailureCount+1,fetchFailureReason:n,fetchStatus:"idle",status:"error",isInvalidated:!0};case"invalidate":return{...a,isInvalidated:!0};case"setState":return{...a,...e.state}}};this.state=r(this.state),er.batch(()=>{this.observers.forEach(a=>{a.onQueryUpdate()}),$(this,aa).notify({query:this,type:"updated",action:e})})},of);function Sf(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:wf(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function sh(t,e){return{data:t,dataUpdatedAt:e??Date.now(),error:null,isInvalidated:!1,status:"success"}}function oh(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,r=e!==void 0,a=r?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:r?a??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:r?"success":"pending",fetchStatus:"idle"}}var Mr,ut,Ao,Ar,yi,js,an,Bn,Lo,ks,Ns,xi,wi,On,Ss,xt,fo,jd,kd,Nd,Sd,Ad,Ld,Pd,Af,lf,n0=(lf=class extends Is{constructor(e,r){super();Ue(this,xt);Ue(this,Mr);Ue(this,ut);Ue(this,Ao);Ue(this,Ar);Ue(this,yi);Ue(this,js);Ue(this,an);Ue(this,Bn);Ue(this,Lo);Ue(this,ks);Ue(this,Ns);Ue(this,xi);Ue(this,wi);Ue(this,On);Ue(this,Ss,new Set);this.options=r,Ee(this,Mr,e),Ee(this,Bn,null),Ee(this,an,xd()),this.bindMethods(),this.setOptions(r)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&($(this,ut).addObserver(this),lh($(this,ut),this.options)?st(this,xt,fo).call(this):this.updateResult(),st(this,xt,Sd).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return _d($(this,ut),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return _d($(this,ut),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,st(this,xt,Ad).call(this),st(this,xt,Ld).call(this),$(this,ut).removeObserver(this)}setOptions(e){const r=this.options,a=$(this,ut);if(this.options=$(this,Mr).defaultQueryOptions(e),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof Kr(this.options.enabled,$(this,ut))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");st(this,xt,Pd).call(this),$(this,ut).setOptions(this.options),r._defaulted&&!Ol(this.options,r)&&$(this,Mr).getQueryCache().notify({type:"observerOptionsUpdated",query:$(this,ut),observer:this});const i=this.hasListeners();i&&ch($(this,ut),a,this.options,r)&&st(this,xt,fo).call(this),this.updateResult(),i&&($(this,ut)!==a||Kr(this.options.enabled,$(this,ut))!==Kr(r.enabled,$(this,ut))||Hn(this.options.staleTime,$(this,ut))!==Hn(r.staleTime,$(this,ut)))&&st(this,xt,jd).call(this);const n=st(this,xt,kd).call(this);i&&($(this,ut)!==a||Kr(this.options.enabled,$(this,ut))!==Kr(r.enabled,$(this,ut))||n!==$(this,On))&&st(this,xt,Nd).call(this,n)}getOptimisticResult(e){const r=$(this,Mr).getQueryCache().build($(this,Mr),e),a=this.createResult(r,e);return s0(this,a)&&(Ee(this,Ar,a),Ee(this,js,this.options),Ee(this,yi,$(this,ut).state)),a}getCurrentResult(){return $(this,Ar)}trackResult(e,r){return new Proxy(e,{get:(a,i)=>(this.trackProp(i),r==null||r(i),i==="promise"&&(this.trackProp("data"),!this.options.experimental_prefetchInRender&&$(this,an).status==="pending"&&$(this,an).reject(new Error("experimental_prefetchInRender feature flag is not enabled"))),Reflect.get(a,i))})}trackProp(e){$(this,Ss).add(e)}getCurrentQuery(){return $(this,ut)}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){const r=$(this,Mr).defaultQueryOptions(e),a=$(this,Mr).getQueryCache().build($(this,Mr),r);return a.fetch().then(()=>this.createResult(a,r))}fetch(e){return st(this,xt,fo).call(this,{...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),$(this,Ar)))}createResult(e,r){var M;const a=$(this,ut),i=this.options,n=$(this,Ar),l=$(this,yi),c=$(this,js),f=e!==a?e.state:$(this,Ao),{state:g}=e;let b={...g},y=!1,m;if(r._optimisticResults){const ne=this.hasListeners(),E=!ne&&lh(e,r),T=ne&&ch(e,a,r,i);(E||T)&&(b={...b,...Sf(g.data,e.options)}),r._optimisticResults==="isRestoring"&&(b.fetchStatus="idle")}let{error:k,errorUpdatedAt:N,status:_}=b;m=b.data;let x=!1;if(r.placeholderData!==void 0&&m===void 0&&_==="pending"){let ne;n!=null&&n.isPlaceholderData&&r.placeholderData===(c==null?void 0:c.placeholderData)?(ne=n.data,x=!0):ne=typeof r.placeholderData=="function"?r.placeholderData((M=$(this,Ns))==null?void 0:M.state.data,$(this,Ns)):r.placeholderData,ne!==void 0&&(_="success",m=yd(n==null?void 0:n.data,ne,r),y=!0)}if(r.select&&m!==void 0&&!x)if(n&&m===(l==null?void 0:l.data)&&r.select===$(this,Lo))m=$(this,ks);else try{Ee(this,Lo,r.select),m=r.select(m),m=yd(n==null?void 0:n.data,m,r),Ee(this,ks,m),Ee(this,Bn,null)}catch(ne){Ee(this,Bn,ne)}$(this,Bn)&&(k=$(this,Bn),m=$(this,ks),N=Date.now(),_="error");const I=b.fetchStatus==="fetching",B=_==="pending",R=_==="error",Z=B&&I,ee=m!==void 0,S={status:_,fetchStatus:b.fetchStatus,isPending:B,isSuccess:_==="success",isError:R,isInitialLoading:Z,isLoading:Z,data:m,dataUpdatedAt:b.dataUpdatedAt,error:k,errorUpdatedAt:N,failureCount:b.fetchFailureCount,failureReason:b.fetchFailureReason,errorUpdateCount:b.errorUpdateCount,isFetched:e.isFetched(),isFetchedAfterMount:b.dataUpdateCount>f.dataUpdateCount||b.errorUpdateCount>f.errorUpdateCount,isFetching:I,isRefetching:I&&!B,isLoadingError:R&&!ee,isPaused:b.fetchStatus==="paused",isPlaceholderData:y,isRefetchError:R&&ee,isStale:au(e,r),refetch:this.refetch,promise:$(this,an),isEnabled:Kr(r.enabled,e)!==!1};if(this.options.experimental_prefetchInRender){const ne=S.data!==void 0,E=S.status==="error"&&!ne,T=ce=>{E?ce.reject(S.error):ne&&ce.resolve(S.data)},K=()=>{const ce=Ee(this,an,S.promise=xd());T(ce)},H=$(this,an);switch(H.status){case"pending":e.queryHash===a.queryHash&&T(H);break;case"fulfilled":(E||S.data!==H.value)&&K();break;case"rejected":(!E||S.error!==H.reason)&&K();break}}return S}updateResult(){const e=$(this,Ar),r=this.createResult($(this,ut),this.options);if(Ee(this,yi,$(this,ut).state),Ee(this,js,this.options),$(this,yi).data!==void 0&&Ee(this,Ns,$(this,ut)),Ol(r,e))return;Ee(this,Ar,r);const a=()=>{if(!e)return!0;const{notifyOnChangeProps:i}=this.options,n=typeof i=="function"?i():i;if(n==="all"||!n&&!$(this,Ss).size)return!0;const l=new Set(n??$(this,Ss));return this.options.throwOnError&&l.add("error"),Object.keys($(this,Ar)).some(c=>{const u=c;return $(this,Ar)[u]!==e[u]&&l.has(u)})};st(this,xt,Af).call(this,{listeners:a()})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&st(this,xt,Sd).call(this)}},Mr=new WeakMap,ut=new WeakMap,Ao=new WeakMap,Ar=new WeakMap,yi=new WeakMap,js=new WeakMap,an=new WeakMap,Bn=new WeakMap,Lo=new WeakMap,ks=new WeakMap,Ns=new WeakMap,xi=new WeakMap,wi=new WeakMap,On=new WeakMap,Ss=new WeakMap,xt=new WeakSet,fo=function(e){st(this,xt,Pd).call(this);let r=$(this,ut).fetch(this.options,e);return e!=null&&e.throwOnError||(r=r.catch(Lr)),r},jd=function(){st(this,xt,Ad).call(this);const e=Hn(this.options.staleTime,$(this,ut));if(wo.isServer()||$(this,Ar).isStale||!bd(e))return;const a=vf($(this,Ar).dataUpdatedAt,e)+1;Ee(this,xi,fi.setTimeout(()=>{$(this,Ar).isStale||this.updateResult()},a))},kd=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval($(this,ut)):this.options.refetchInterval)??!1},Nd=function(e){st(this,xt,Ld).call(this),Ee(this,On,e),!(wo.isServer()||Kr(this.options.enabled,$(this,ut))===!1||!bd($(this,On))||$(this,On)===0)&&Ee(this,wi,fi.setInterval(()=>{(this.options.refetchIntervalInBackground||Zd.isFocused())&&st(this,xt,fo).call(this)},$(this,On)))},Sd=function(){st(this,xt,jd).call(this),st(this,xt,Nd).call(this,st(this,xt,kd).call(this))},Ad=function(){$(this,xi)!==void 0&&(fi.clearTimeout($(this,xi)),Ee(this,xi,void 0))},Ld=function(){$(this,wi)!==void 0&&(fi.clearInterval($(this,wi)),Ee(this,wi,void 0))},Pd=function(){const e=$(this,Mr).getQueryCache().build($(this,Mr),this.options);if(e===$(this,ut))return;const r=$(this,ut);Ee(this,ut,e),Ee(this,Ao,e.state),this.hasListeners()&&(r==null||r.removeObserver(this),e.addObserver(this))},Af=function(e){er.batch(()=>{e.listeners&&this.listeners.forEach(r=>{r($(this,Ar))}),$(this,Mr).getQueryCache().notify({query:$(this,ut),type:"observerResultsUpdated"})})},lf);function i0(t,e){return Kr(e.enabled,t)!==!1&&t.state.data===void 0&&!(t.state.status==="error"&&Kr(e.retryOnMount,t)===!1)}function lh(t,e){return i0(t,e)||t.state.data!==void 0&&_d(t,e,e.refetchOnMount)}function _d(t,e,r){if(Kr(e.enabled,t)!==!1&&Hn(e.staleTime,t)!=="static"){const a=typeof r=="function"?r(t):r;return a==="always"||a!==!1&&au(t,e)}return!1}function ch(t,e,r,a){return(t!==e||Kr(a.enabled,t)===!1)&&(!r.suspense||t.state.status!=="error")&&au(t,r)}function au(t,e){return Kr(e.enabled,t)!==!1&&t.isStaleByTime(Hn(e.staleTime,t))}function s0(t,e){return!Ol(t.getCurrentResult(),e)}var Po,Ta,xr,ji,Ma,In,cf,o0=(cf=class extends kf{constructor(e){super();Ue(this,Ma);Ue(this,Po);Ue(this,Ta);Ue(this,xr);Ue(this,ji);Ee(this,Po,e.client),this.mutationId=e.mutationId,Ee(this,xr,e.mutationCache),Ee(this,Ta,[]),this.state=e.state||Lf(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){$(this,Ta).includes(e)||($(this,Ta).push(e),this.clearGcTimeout(),$(this,xr).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){Ee(this,Ta,$(this,Ta).filter(r=>r!==e)),this.scheduleGc(),$(this,xr).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){$(this,Ta).length||(this.state.status==="pending"?this.scheduleGc():$(this,xr).remove(this))}continue(){var e;return((e=$(this,ji))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var l,c,u,f,g,b,y,m,k,N,_,x,I,B,R,Z,ee,A;const r=()=>{st(this,Ma,In).call(this,{type:"continue"})},a={client:$(this,Po),meta:this.options.meta,mutationKey:this.options.mutationKey};Ee(this,ji,jf({fn:()=>this.options.mutationFn?this.options.mutationFn(e,a):Promise.reject(new Error("No mutationFn found")),onFail:(S,M)=>{st(this,Ma,In).call(this,{type:"failed",failureCount:S,error:M})},onPause:()=>{st(this,Ma,In).call(this,{type:"pause"})},onContinue:r,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>$(this,xr).canRun(this)}));const i=this.state.status==="pending",n=!$(this,ji).canStart();try{if(i)r();else{st(this,Ma,In).call(this,{type:"pending",variables:e,isPaused:n}),$(this,xr).config.onMutate&&await $(this,xr).config.onMutate(e,this,a);const M=await((c=(l=this.options).onMutate)==null?void 0:c.call(l,e,a));M!==this.state.context&&st(this,Ma,In).call(this,{type:"pending",context:M,variables:e,isPaused:n})}const S=await $(this,ji).start();return await((f=(u=$(this,xr).config).onSuccess)==null?void 0:f.call(u,S,e,this.state.context,this,a)),await((b=(g=this.options).onSuccess)==null?void 0:b.call(g,S,e,this.state.context,a)),await((m=(y=$(this,xr).config).onSettled)==null?void 0:m.call(y,S,null,this.state.variables,this.state.context,this,a)),await((N=(k=this.options).onSettled)==null?void 0:N.call(k,S,null,e,this.state.context,a)),st(this,Ma,In).call(this,{type:"success",data:S}),S}catch(S){try{await((x=(_=$(this,xr).config).onError)==null?void 0:x.call(_,S,e,this.state.context,this,a))}catch(M){Promise.reject(M)}try{await((B=(I=this.options).onError)==null?void 0:B.call(I,S,e,this.state.context,a))}catch(M){Promise.reject(M)}try{await((Z=(R=$(this,xr).config).onSettled)==null?void 0:Z.call(R,void 0,S,this.state.variables,this.state.context,this,a))}catch(M){Promise.reject(M)}try{await((A=(ee=this.options).onSettled)==null?void 0:A.call(ee,void 0,S,e,this.state.context,a))}catch(M){Promise.reject(M)}throw st(this,Ma,In).call(this,{type:"error",error:S}),S}finally{$(this,xr).runNext(this)}}},Po=new WeakMap,Ta=new WeakMap,xr=new WeakMap,ji=new WeakMap,Ma=new WeakSet,In=function(e){const r=a=>{switch(e.type){case"failed":return{...a,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...a,isPaused:!0};case"continue":return{...a,isPaused:!1};case"pending":return{...a,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...a,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...a,data:void 0,error:e.error,failureCount:a.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=r(this.state),er.batch(()=>{$(this,Ta).forEach(a=>{a.onMutationUpdate(e)}),$(this,xr).notify({mutation:this,type:"updated",action:e})})},cf);function Lf(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var nn,xa,_o,df,l0=(df=class extends Is{constructor(e={}){super();Ue(this,nn);Ue(this,xa);Ue(this,_o);this.config=e,Ee(this,nn,new Set),Ee(this,xa,new Map),Ee(this,_o,0)}build(e,r,a){const i=new o0({client:e,mutationCache:this,mutationId:++jl(this,_o)._,options:e.defaultMutationOptions(r),state:a});return this.add(i),i}add(e){$(this,nn).add(e);const r=kl(e);if(typeof r=="string"){const a=$(this,xa).get(r);a?a.push(e):$(this,xa).set(r,[e])}this.notify({type:"added",mutation:e})}remove(e){if($(this,nn).delete(e)){const r=kl(e);if(typeof r=="string"){const a=$(this,xa).get(r);if(a)if(a.length>1){const i=a.indexOf(e);i!==-1&&a.splice(i,1)}else a[0]===e&&$(this,xa).delete(r)}}this.notify({type:"removed",mutation:e})}canRun(e){const r=kl(e);if(typeof r=="string"){const a=$(this,xa).get(r),i=a==null?void 0:a.find(n=>n.state.status==="pending");return!i||i===e}else return!0}runNext(e){var a;const r=kl(e);if(typeof r=="string"){const i=(a=$(this,xa).get(r))==null?void 0:a.find(n=>n!==e&&n.state.isPaused);return(i==null?void 0:i.continue())??Promise.resolve()}else return Promise.resolve()}clear(){er.batch(()=>{$(this,nn).forEach(e=>{this.notify({type:"removed",mutation:e})}),$(this,nn).clear(),$(this,xa).clear()})}getAll(){return Array.from($(this,nn))}find(e){const r={exact:!0,...e};return this.getAll().find(a=>rh(r,a))}findAll(e={}){return this.getAll().filter(r=>rh(e,r))}notify(e){er.batch(()=>{this.listeners.forEach(r=>{r(e)})})}resumePausedMutations(){const e=this.getAll().filter(r=>r.state.isPaused);return er.batch(()=>Promise.all(e.map(r=>r.continue().catch(Lr))))}},nn=new WeakMap,xa=new WeakMap,_o=new WeakMap,df);function kl(t){var e;return(e=t.options.scope)==null?void 0:e.id}var sn,Rn,Br,on,dn,Fl,Cd,uf,c0=(uf=class extends Is{constructor(r,a){super();Ue(this,dn);Ue(this,sn);Ue(this,Rn);Ue(this,Br);Ue(this,on);Ee(this,sn,r),this.setOptions(a),this.bindMethods(),st(this,dn,Fl).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(r){var i;const a=this.options;this.options=$(this,sn).defaultMutationOptions(r),Ol(this.options,a)||$(this,sn).getMutationCache().notify({type:"observerOptionsUpdated",mutation:$(this,Br),observer:this}),a!=null&&a.mutationKey&&this.options.mutationKey&&Si(a.mutationKey)!==Si(this.options.mutationKey)?this.reset():((i=$(this,Br))==null?void 0:i.state.status)==="pending"&&$(this,Br).setOptions(this.options)}onUnsubscribe(){var r;this.hasListeners()||(r=$(this,Br))==null||r.removeObserver(this)}onMutationUpdate(r){st(this,dn,Fl).call(this),st(this,dn,Cd).call(this,r)}getCurrentResult(){return $(this,Rn)}reset(){var r;(r=$(this,Br))==null||r.removeObserver(this),Ee(this,Br,void 0),st(this,dn,Fl).call(this),st(this,dn,Cd).call(this)}mutate(r,a){var i;return Ee(this,on,a),(i=$(this,Br))==null||i.removeObserver(this),Ee(this,Br,$(this,sn).getMutationCache().build($(this,sn),this.options)),$(this,Br).addObserver(this),$(this,Br).execute(r)}},sn=new WeakMap,Rn=new WeakMap,Br=new WeakMap,on=new WeakMap,dn=new WeakSet,Fl=function(){var a;const r=((a=$(this,Br))==null?void 0:a.state)??Lf();Ee(this,Rn,{...r,isPending:r.status==="pending",isSuccess:r.status==="success",isError:r.status==="error",isIdle:r.status==="idle",mutate:this.mutate,reset:this.reset})},Cd=function(r){er.batch(()=>{var a,i,n,l,c,u,f,g;if($(this,on)&&this.hasListeners()){const b=$(this,Rn).variables,y=$(this,Rn).context,m={client:$(this,sn),meta:this.options.meta,mutationKey:this.options.mutationKey};if((r==null?void 0:r.type)==="success"){try{(i=(a=$(this,on)).onSuccess)==null||i.call(a,r.data,b,y,m)}catch(k){Promise.reject(k)}try{(l=(n=$(this,on)).onSettled)==null||l.call(n,r.data,null,b,y,m)}catch(k){Promise.reject(k)}}else if((r==null?void 0:r.type)==="error"){try{(u=(c=$(this,on)).onError)==null||u.call(c,r.error,b,y,m)}catch(k){Promise.reject(k)}try{(g=(f=$(this,on)).onSettled)==null||g.call(f,void 0,r.error,b,y,m)}catch(k){Promise.reject(k)}}}this.listeners.forEach(b=>{b($(this,Rn))})})},uf),Ba,hf,d0=(hf=class extends Is{constructor(e={}){super();Ue(this,Ba);this.config=e,Ee(this,Ba,new Map)}build(e,r,a){const i=r.queryKey,n=r.queryHash??eu(i,r);let l=this.get(n);return l||(l=new a0({client:e,queryKey:i,queryHash:n,options:e.defaultQueryOptions(r),state:a,defaultOptions:e.getQueryDefaults(i)}),this.add(l)),l}add(e){$(this,Ba).has(e.queryHash)||($(this,Ba).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const r=$(this,Ba).get(e.queryHash);r&&(e.destroy(),r===e&&$(this,Ba).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){er.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return $(this,Ba).get(e)}getAll(){return[...$(this,Ba).values()]}find(e){const r={exact:!0,...e};return this.getAll().find(a=>th(r,a))}findAll(e={}){const r=this.getAll();return Object.keys(e).length>0?r.filter(a=>th(e,a)):r}notify(e){er.batch(()=>{this.listeners.forEach(r=>{r(e)})})}onFocus(){er.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){er.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},Ba=new WeakMap,hf),Rt,zn,qn,As,Ls,Un,Ps,_s,ff,u0=(ff=class{constructor(t={}){Ue(this,Rt);Ue(this,zn);Ue(this,qn);Ue(this,As);Ue(this,Ls);Ue(this,Un);Ue(this,Ps);Ue(this,_s);Ee(this,Rt,t.queryCache||new d0),Ee(this,zn,t.mutationCache||new l0),Ee(this,qn,t.defaultOptions||{}),Ee(this,As,new Map),Ee(this,Ls,new Map),Ee(this,Un,0)}mount(){jl(this,Un)._++,$(this,Un)===1&&(Ee(this,Ps,Zd.subscribe(async t=>{t&&(await this.resumePausedMutations(),$(this,Rt).onFocus())})),Ee(this,_s,Rl.subscribe(async t=>{t&&(await this.resumePausedMutations(),$(this,Rt).onOnline())})))}unmount(){var t,e;jl(this,Un)._--,$(this,Un)===0&&((t=$(this,Ps))==null||t.call(this),Ee(this,Ps,void 0),(e=$(this,_s))==null||e.call(this),Ee(this,_s,void 0))}isFetching(t){return $(this,Rt).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return $(this,zn).findAll({...t,status:"pending"}).length}getQueryData(t){var r;const e=this.defaultQueryOptions({queryKey:t});return(r=$(this,Rt).get(e.queryHash))==null?void 0:r.state.data}ensureQueryData(t){const e=this.defaultQueryOptions(t),r=$(this,Rt).build(this,e),a=r.state.data;return a===void 0?this.fetchQuery(t):(t.revalidateIfStale&&r.isStaleByTime(Hn(e.staleTime,r))&&this.prefetchQuery(e),Promise.resolve(a))}getQueriesData(t){return $(this,Rt).findAll(t).map(({queryKey:e,state:r})=>{const a=r.data;return[e,a]})}setQueryData(t,e,r){const a=this.defaultQueryOptions({queryKey:t}),i=$(this,Rt).get(a.queryHash),n=i==null?void 0:i.state.data,l=$1(e,n);if(l!==void 0)return $(this,Rt).build(this,a).setData(l,{...r,manual:!0})}setQueriesData(t,e,r){return er.batch(()=>$(this,Rt).findAll(t).map(({queryKey:a})=>[a,this.setQueryData(a,e,r)]))}getQueryState(t){var r;const e=this.defaultQueryOptions({queryKey:t});return(r=$(this,Rt).get(e.queryHash))==null?void 0:r.state}removeQueries(t){const e=$(this,Rt);er.batch(()=>{e.findAll(t).forEach(r=>{e.remove(r)})})}resetQueries(t,e){const r=$(this,Rt);return er.batch(()=>(r.findAll(t).forEach(a=>{a.reset()}),this.refetchQueries({type:"active",...t},e)))}cancelQueries(t,e={}){const r={revert:!0,...e},a=er.batch(()=>$(this,Rt).findAll(t).map(i=>i.cancel(r)));return Promise.all(a).then(Lr).catch(Lr)}invalidateQueries(t,e={}){return er.batch(()=>($(this,Rt).findAll(t).forEach(r=>{r.invalidate()}),(t==null?void 0:t.refetchType)==="none"?Promise.resolve():this.refetchQueries({...t,type:(t==null?void 0:t.refetchType)??(t==null?void 0:t.type)??"active"},e)))}refetchQueries(t,e={}){const r={...e,cancelRefetch:e.cancelRefetch??!0},a=er.batch(()=>$(this,Rt).findAll(t).filter(i=>!i.isDisabled()&&!i.isStatic()).map(i=>{let n=i.fetch(void 0,r);return r.throwOnError||(n=n.catch(Lr)),i.state.fetchStatus==="paused"?Promise.resolve():n}));return Promise.all(a).then(Lr)}fetchQuery(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const r=$(this,Rt).build(this,e);return r.isStaleByTime(Hn(e.staleTime,r))?r.fetch(e):Promise.resolve(r.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(Lr).catch(Lr)}fetchInfiniteQuery(t){return t._type="infinite",this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(Lr).catch(Lr)}ensureInfiniteQueryData(t){return t._type="infinite",this.ensureQueryData(t)}resumePausedMutations(){return Rl.isOnline()?$(this,zn).resumePausedMutations():Promise.resolve()}getQueryCache(){return $(this,Rt)}getMutationCache(){return $(this,zn)}getDefaultOptions(){return $(this,qn)}setDefaultOptions(t){Ee(this,qn,t)}setQueryDefaults(t,e){$(this,As).set(Si(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...$(this,As).values()],r={};return e.forEach(a=>{xo(t,a.queryKey)&&Object.assign(r,a.defaultOptions)}),r}setMutationDefaults(t,e){$(this,Ls).set(Si(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...$(this,Ls).values()],r={};return e.forEach(a=>{xo(t,a.mutationKey)&&Object.assign(r,a.defaultOptions)}),r}defaultQueryOptions(t){if(t._defaulted)return t;const e={...$(this,qn).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=eu(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.queryFn===tu&&(e.enabled=!1),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...$(this,qn).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){$(this,Rt).clear(),$(this,zn).clear()}},Rt=new WeakMap,zn=new WeakMap,qn=new WeakMap,As=new WeakMap,Ls=new WeakMap,Un=new WeakMap,Ps=new WeakMap,_s=new WeakMap,ff),Pf=me.createContext(void 0),ia=t=>{const e=me.useContext(Pf);if(!e)throw new Error("No QueryClient set, use QueryClientProvider to set one");return e},h0=({client:t,children:e})=>(me.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),s.jsx(Pf.Provider,{value:t,children:e})),_f=me.createContext(!1),f0=()=>me.useContext(_f);_f.Provider;function p0(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}var m0=me.createContext(p0()),g0=()=>me.useContext(m0),b0=(t,e,r)=>{const a=r!=null&&r.state.error&&typeof t.throwOnError=="function"?ru(t.throwOnError,[r.state.error,r]):t.throwOnError;(t.suspense||t.experimental_prefetchInRender||a)&&(e.isReset()||(t.retryOnMount=!1))},v0=t=>{me.useEffect(()=>{t.clearReset()},[t])},y0=({result:t,errorResetBoundary:e,throwOnError:r,query:a,suspense:i})=>t.isError&&!e.isReset()&&!t.isFetching&&a&&(i&&t.data===void 0||ru(r,[t.error,a])),x0=t=>{if(t.suspense){const r=i=>i==="static"?i:Math.max(i??1e3,1e3),a=t.staleTime;t.staleTime=typeof a=="function"?(...i)=>r(a(...i)):r(a),typeof t.gcTime=="number"&&(t.gcTime=Math.max(t.gcTime,1e3))}},w0=(t,e)=>t.isLoading&&t.isFetching&&!e,j0=(t,e)=>(t==null?void 0:t.suspense)&&e.isPending,dh=(t,e,r)=>e.fetchOptimistic(t).catch(()=>{r.clearReset()});function k0(t,e,r){var y,m,k,N;const a=f0(),i=g0(),n=ia(),l=n.defaultQueryOptions(t);(m=(y=n.getDefaultOptions().queries)==null?void 0:y._experimental_beforeQuery)==null||m.call(y,l);const c=n.getQueryCache().get(l.queryHash);l._optimisticResults=a?"isRestoring":"optimistic",x0(l),b0(l,i,c),v0(i);const u=!n.getQueryCache().get(l.queryHash),[f]=me.useState(()=>new e(n,l)),g=f.getOptimisticResult(l),b=!a&&t.subscribed!==!1;if(me.useSyncExternalStore(me.useCallback(_=>{const x=b?f.subscribe(er.batchCalls(_)):Lr;return f.updateResult(),x},[f,b]),()=>f.getCurrentResult(),()=>f.getCurrentResult()),me.useEffect(()=>{f.setOptions(l)},[l,f]),j0(l,g))throw dh(l,f,i);if(y0({result:g,errorResetBoundary:i,throwOnError:l.throwOnError,query:c,suspense:l.suspense}))throw g.error;if((N=(k=n.getDefaultOptions().queries)==null?void 0:k._experimental_afterQuery)==null||N.call(k,l,g),l.experimental_prefetchInRender&&!wo.isServer()&&w0(g,a)){const _=u?dh(l,f,i):c==null?void 0:c.promise;_==null||_.catch(Lr).finally(()=>{f.updateResult()})}return l.notifyOnChangeProps?g:f.trackResult(g)}function Pr(t,e){return k0(t,n0)}function _r(t,e){const r=ia(),[a]=me.useState(()=>new c0(r,t));me.useEffect(()=>{a.setOptions(t)},[a,t]);const i=me.useSyncExternalStore(me.useCallback(l=>a.subscribe(er.batchCalls(l)),[a]),()=>a.getCurrentResult(),()=>a.getCurrentResult()),n=me.useCallback((l,c)=>{a.mutate(l,c).catch(Lr)},[a]);if(i.error&&ru(a.options.throwOnError,[i.error]))throw i.error;return{...i,mutate:n,mutateAsync:i.mutate}}let N0={data:""},S0=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||N0},A0=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,L0=/\/\*[^]*?\*\/|  +/g,uh=/\n+/g,Dn=(t,e)=>{let r="",a="",i="";for(let n in t){let l=t[n];n[0]=="@"?n[1]=="i"?r=n+" "+l+";":a+=n[1]=="f"?Dn(l,n):n+"{"+Dn(l,n[1]=="k"?"":e)+"}":typeof l=="object"?a+=Dn(l,e?e.replace(/([^,])+/g,c=>n.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,c):c?c+" "+u:u)):n):l!=null&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=Dn.p?Dn.p(n,l):n+":"+l+";")}return r+(e&&i?e+"{"+i+"}":i)+a},Za={},Cf=t=>{if(typeof t=="object"){let e="";for(let r in t)e+=r+Cf(t[r]);return e}return t},P0=(t,e,r,a,i)=>{let n=Cf(t),l=Za[n]||(Za[n]=(u=>{let f=0,g=11;for(;f<u.length;)g=101*g+u.charCodeAt(f++)>>>0;return"go"+g})(n));if(!Za[l]){let u=n!==t?t:(f=>{let g,b,y=[{}];for(;g=A0.exec(f.replace(L0,""));)g[4]?y.shift():g[3]?(b=g[3].replace(uh," ").trim(),y.unshift(y[0][b]=y[0][b]||{})):y[0][g[1]]=g[2].replace(uh," ").trim();return y[0]})(t);Za[l]=Dn(i?{["@keyframes "+l]:u}:u,r?"":"."+l)}let c=r&&Za.g?Za.g:null;return r&&(Za.g=Za[l]),((u,f,g,b)=>{b?f.data=f.data.replace(b,u):f.data.indexOf(u)===-1&&(f.data=g?u+f.data:f.data+u)})(Za[l],e,a,c),l},_0=(t,e,r)=>t.reduce((a,i,n)=>{let l=e[n];if(l&&l.call){let c=l(r),u=c&&c.props&&c.props.className||/^go/.test(c)&&c;l=u?"."+u:c&&typeof c=="object"?c.props?"":Dn(c,""):c===!1?"":c}return a+i+(l??"")},"");function Jl(t){let e=this||{},r=t.call?t(e.p):t;return P0(r.unshift?r.raw?_0(r,[].slice.call(arguments,1),e.p):r.reduce((a,i)=>Object.assign(a,i&&i.call?i(e.p):i),{}):r,S0(e.target),e.g,e.o,e.k)}let Ff,Fd,Id;Jl.bind({g:1});let un=Jl.bind({k:1});function C0(t,e,r,a){Dn.p=e,Ff=t,Fd=r,Id=a}function Jn(t,e){let r=this||{};return function(){let a=arguments;function i(n,l){let c=Object.assign({},n),u=c.className||i.className;r.p=Object.assign({theme:Fd&&Fd()},c),r.o=/ *go\d+/.test(u),c.className=Jl.apply(r,a)+(u?" "+u:"");let f=t;return t[0]&&(f=c.as||t,delete c.as),Id&&f[0]&&Id(c),Ff(f,c)}return i}}var F0=t=>typeof t=="function",zl=(t,e)=>F0(t)?t(e):t,I0=(()=>{let t=0;return()=>(++t).toString()})(),If=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),D0=20,nu="default",Df=(t,e)=>{let{toastLimit:r}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,r)};case 1:return{...t,toasts:t.toasts.map(l=>l.id===e.toast.id?{...l,...e.toast}:l)};case 2:let{toast:a}=e;return Df(t,{type:t.toasts.find(l=>l.id===a.id)?1:0,toast:a});case 3:let{toastId:i}=e;return{...t,toasts:t.toasts.map(l=>l.id===i||i===void 0?{...l,dismissed:!0,visible:!1}:l)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(l=>l.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let n=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(l=>({...l,pauseDuration:l.pauseDuration+n}))}}},Il=[],Ef={toasts:[],pausedAt:void 0,settings:{toastLimit:D0}},Oa={},Tf=(t,e=nu)=>{Oa[e]=Df(Oa[e]||Ef,t),Il.forEach(([r,a])=>{r===e&&a(Oa[e])})},Mf=t=>Object.keys(Oa).forEach(e=>Tf(t,e)),E0=t=>Object.keys(Oa).find(e=>Oa[e].toasts.some(r=>r.id===t)),Ql=(t=nu)=>e=>{Tf(e,t)},T0={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},M0=(t={},e=nu)=>{let[r,a]=me.useState(Oa[e]||Ef),i=me.useRef(Oa[e]);me.useEffect(()=>(i.current!==Oa[e]&&a(Oa[e]),Il.push([e,a]),()=>{let l=Il.findIndex(([c])=>c===e);l>-1&&Il.splice(l,1)}),[e]);let n=r.toasts.map(l=>{var c,u,f;return{...t,...t[l.type],...l,removeDelay:l.removeDelay||((c=t[l.type])==null?void 0:c.removeDelay)||(t==null?void 0:t.removeDelay),duration:l.duration||((u=t[l.type])==null?void 0:u.duration)||(t==null?void 0:t.duration)||T0[l.type],style:{...t.style,...(f=t[l.type])==null?void 0:f.style,...l.style}}});return{...r,toasts:n}},B0=(t,e="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...r,id:(r==null?void 0:r.id)||I0()}),Co=t=>(e,r)=>{let a=B0(e,t,r);return Ql(a.toasterId||E0(a.id))({type:2,toast:a}),a.id},tr=(t,e)=>Co("blank")(t,e);tr.error=Co("error");tr.success=Co("success");tr.loading=Co("loading");tr.custom=Co("custom");tr.dismiss=(t,e)=>{let r={type:3,toastId:t};e?Ql(e)(r):Mf(r)};tr.dismissAll=t=>tr.dismiss(void 0,t);tr.remove=(t,e)=>{let r={type:4,toastId:t};e?Ql(e)(r):Mf(r)};tr.removeAll=t=>tr.remove(void 0,t);tr.promise=(t,e,r)=>{let a=tr.loading(e.loading,{...r,...r==null?void 0:r.loading});return typeof t=="function"&&(t=t()),t.then(i=>{let n=e.success?zl(e.success,i):void 0;return n?tr.success(n,{id:a,...r,...r==null?void 0:r.success}):tr.dismiss(a),i}).catch(i=>{let n=e.error?zl(e.error,i):void 0;n?tr.error(n,{id:a,...r,...r==null?void 0:r.error}):tr.dismiss(a)}),t};var O0=1e3,R0=(t,e="default")=>{let{toasts:r,pausedAt:a}=M0(t,e),i=me.useRef(new Map).current,n=me.useCallback((b,y=O0)=>{if(i.has(b))return;let m=setTimeout(()=>{i.delete(b),l({type:4,toastId:b})},y);i.set(b,m)},[]);me.useEffect(()=>{if(a)return;let b=Date.now(),y=r.map(m=>{if(m.duration===1/0)return;let k=(m.duration||0)+m.pauseDuration-(b-m.createdAt);if(k<0){m.visible&&tr.dismiss(m.id);return}return setTimeout(()=>tr.dismiss(m.id,e),k)});return()=>{y.forEach(m=>m&&clearTimeout(m))}},[r,a,e]);let l=me.useCallback(Ql(e),[e]),c=me.useCallback(()=>{l({type:5,time:Date.now()})},[l]),u=me.useCallback((b,y)=>{l({type:1,toast:{id:b,height:y}})},[l]),f=me.useCallback(()=>{a&&l({type:6,time:Date.now()})},[a,l]),g=me.useCallback((b,y)=>{let{reverseOrder:m=!1,gutter:k=8,defaultPosition:N}=y||{},_=r.filter(B=>(B.position||N)===(b.position||N)&&B.height),x=_.findIndex(B=>B.id===b.id),I=_.filter((B,R)=>R<x&&B.visible).length;return _.filter(B=>B.visible).slice(...m?[I+1]:[0,I]).reduce((B,R)=>B+(R.height||0)+k,0)},[r]);return me.useEffect(()=>{r.forEach(b=>{if(b.dismissed)n(b.id,b.removeDelay);else{let y=i.get(b.id);y&&(clearTimeout(y),i.delete(b.id))}})},[r,n]),{toasts:r,handlers:{updateHeight:u,startPause:c,endPause:f,calculateOffset:g}}},z0=un`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,q0=un`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,U0=un`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,W0=Jn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${z0} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${q0} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${U0} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,H0=un`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,$0=Jn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${H0} 1s linear infinite;
`,V0=un`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,K0=un`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,G0=Jn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${V0} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${K0} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Y0=Jn("div")`
  position: absolute;
`,J0=Jn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Q0=un`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,X0=Jn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Q0} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Z0=({toast:t})=>{let{icon:e,type:r,iconTheme:a}=t;return e!==void 0?typeof e=="string"?me.createElement(X0,null,e):e:r==="blank"?null:me.createElement(J0,null,me.createElement($0,{...a}),r!=="loading"&&me.createElement(Y0,null,r==="error"?me.createElement(W0,{...a}):me.createElement(G0,{...a})))},e2=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,t2=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,r2="0%{opacity:0;} 100%{opacity:1;}",a2="0%{opacity:1;} 100%{opacity:0;}",n2=Jn("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,i2=Jn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,s2=(t,e)=>{let r=t.includes("top")?1:-1,[a,i]=If()?[r2,a2]:[e2(r),t2(r)];return{animation:e?`${un(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${un(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},o2=me.memo(({toast:t,position:e,style:r,children:a})=>{let i=t.height?s2(t.position||e||"top-center",t.visible):{opacity:0},n=me.createElement(Z0,{toast:t}),l=me.createElement(i2,{...t.ariaProps},zl(t.message,t));return me.createElement(n2,{className:t.className,style:{...i,...r,...t.style}},typeof a=="function"?a({icon:n,message:l}):me.createElement(me.Fragment,null,n,l))});C0(me.createElement);var l2=({id:t,className:e,style:r,onHeightUpdate:a,children:i})=>{let n=me.useCallback(l=>{if(l){let c=()=>{let u=l.getBoundingClientRect().height;a(t,u)};c(),new MutationObserver(c).observe(l,{subtree:!0,childList:!0,characterData:!0})}},[t,a]);return me.createElement("div",{ref:n,className:e,style:r},i)},c2=(t,e)=>{let r=t.includes("top"),a=r?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:If()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(r?1:-1)}px)`,...a,...i}},d2=Jl`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Nl=16,u2=({reverseOrder:t,position:e="top-center",toastOptions:r,gutter:a,children:i,toasterId:n,containerStyle:l,containerClassName:c})=>{let{toasts:u,handlers:f}=R0(r,n);return me.createElement("div",{"data-rht-toaster":n||"",style:{position:"fixed",zIndex:9999,top:Nl,left:Nl,right:Nl,bottom:Nl,pointerEvents:"none",...l},className:c,onMouseEnter:f.startPause,onMouseLeave:f.endPause},u.map(g=>{let b=g.position||e,y=f.calculateOffset(g,{reverseOrder:t,gutter:a,defaultPosition:e}),m=c2(b,y);return me.createElement(l2,{id:g.id,key:g.id,onHeightUpdate:f.updateHeight,className:g.visible?d2:"",style:m},g.type==="custom"?zl(g.message,g):i?i(g):me.createElement(o2,{toast:g,position:b}))}))},rn=tr;const h2="https://api-jb.zoeldev.my.id/api",lt=S1.create({baseURL:h2});lt.interceptors.request.use(t=>{const e=localStorage.getItem("token");return e&&(t.headers.Authorization=`Bearer ${e}`),t.data instanceof FormData||(t.headers["Content-Type"]="application/json"),t},t=>Promise.reject(t));lt.interceptors.response.use(t=>t,t=>{var e;return((e=t.response)==null?void 0:e.status)===401&&(localStorage.removeItem("token"),window.location.href="/login"),Promise.reject(t)});const cn={login:t=>lt.post("/auth/login",t),register:t=>lt.post("/auth/register",t),getProfile:()=>lt.get("/auth/profile"),updateProfile:t=>lt.put("/auth/profile",t),refreshToken:()=>lt.post("/auth/refresh"),getUsers:t=>lt.get("/auth/users",{params:t}),getUser:t=>lt.get(`/auth/users/${t}`),updateUser:(t,e)=>lt.put(`/auth/users/${t}`,e),deleteUser:t=>lt.delete(`/auth/users/${t}`)},mt={success:t=>rn.success(t),error:t=>rn.error(t),warning:t=>rn(t,{icon:"⚠️",style:{background:"#fef3c7",color:"#92400e",border:"1px solid #f59e0b"}}),info:t=>rn(t,{icon:"ℹ️",style:{background:"#dbeafe",color:"#1e40af",border:"1px solid #3b82f6"}}),loading:t=>rn.loading(t),dismiss:t=>rn.dismiss(t),promise:(t,e)=>rn.promise(t,e)},Bf=me.createContext(),Li=()=>{const t=me.useContext(Bf);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t},f2=({children:t})=>{const[e,r]=me.useState(null),[a,i]=me.useState(!0);me.useEffect(()=>{(async()=>{try{if(localStorage.getItem("token")){const b=await cn.getProfile();r(b.data.data)}}catch{localStorage.removeItem("token"),r(null)}finally{i(!1)}})()},[]);const u={user:e,loading:a,login:async f=>{var g,b;try{i(!0);const y=await cn.login(f),{data:m}=y.data,{user:k,token:N}=m;return localStorage.setItem("token",N),r(k),mt.success("Login berhasil!"),{success:!0}}catch(y){const m=((b=(g=y.response)==null?void 0:g.data)==null?void 0:b.message)||"Login gagal";return mt.error(m),{success:!1,error:m}}finally{i(!1)}},logout:()=>{localStorage.removeItem("token"),r(null),mt.success("Logout berhasil")},updateProfile:async f=>{var g,b;try{const y=await cn.updateProfile(f);return r(m=>({...m,...f})),mt.success("Profil berhasil diperbarui"),{success:!0}}catch(y){const m=((b=(g=y.response)==null?void 0:g.data)==null?void 0:b.message)||"Gagal memperbarui profil";return mt.error(m),{success:!1,error:m}}},isAdmin:(e==null?void 0:e.role)==="admin",isBendahara:(e==null?void 0:e.role)==="bendahara"||(e==null?void 0:e.role)==="admin"};return s.jsx(Bf.Provider,{value:u,children:t})},Of=me.createContext({theme:"light",toggleTheme:()=>{}}),hh="jabalnur-theme",p2=({children:t})=>{const[e,r]=me.useState("light");me.useEffect(()=>{const i=localStorage.getItem(hh),n=window.matchMedia("(prefers-color-scheme: dark)").matches;r(i||(n?"dark":"light"))},[]),me.useEffect(()=>{const i=document.documentElement;e==="dark"?i.classList.add("dark"):i.classList.remove("dark"),localStorage.setItem(hh,e)},[e]);const a=()=>{r(i=>i==="dark"?"light":"dark")};return s.jsx(Of.Provider,{value:{theme:e,toggleTheme:a},children:t})},m2=()=>me.useContext(Of);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var g2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),qe=(t,e)=>{const r=me.forwardRef(({color:a="currentColor",size:i=24,strokeWidth:n=2,absoluteStrokeWidth:l,className:c="",children:u,...f},g)=>me.createElement("svg",{ref:g,...g2,width:i,height:i,stroke:a,strokeWidth:l?Number(n)*24/Number(i):n,className:["lucide",`lucide-${b2(t)}`,c].join(" "),...f},[...e.map(([b,y])=>me.createElement(b,y)),...Array.isArray(u)?u:[u]]));return r.displayName=`${t}`,r};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=qe("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=qe("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=qe("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=qe("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=qe("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=qe("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=qe("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=qe("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=qe("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=qe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=qe("ChevronsLeft",[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=qe("ChevronsRight",[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=qe("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=qe("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=qe("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=qe("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=qe("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=qe("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=qe("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=qe("GraduationCap",[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z",key:"1ef52a"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5",key:"1f75yj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=qe("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=qe("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=qe("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=qe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=qe("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=qe("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=qe("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=qe("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=qe("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=qe("MoreHorizontal",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=qe("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=qe("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=qe("PenSquare",[["path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1qinfi"}],["path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z",key:"w2jsv5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=qe("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs=qe("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=qe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=qe("Receipt",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z",key:"wqdwcb"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17V7",key:"pyj7ub"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=qe("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=qe("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc=qe("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=qe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=qe("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=qe("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=qe("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=qe("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=qe("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=qe("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=qe("ToggleRight",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"16",cy:"12",r:"2",key:"4ma0v8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=qe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=qe("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=qe("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=qe("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=qe("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=qe("UserCog",[["circle",{cx:"18",cy:"15",r:"3",key:"gjjjvw"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M10 15H6a4 4 0 0 0-4 4v2",key:"1nfge6"}],["path",{d:"m21.7 16.4-.9-.3",key:"12j9ji"}],["path",{d:"m15.2 13.9-.9-.3",key:"1fdjdi"}],["path",{d:"m16.6 18.7.3-.9",key:"heedtr"}],["path",{d:"m19.1 12.2.3-.9",key:"1af3ki"}],["path",{d:"m19.6 18.7-.4-1",key:"1x9vze"}],["path",{d:"m16.8 12.3-.4-1",key:"vqeiwj"}],["path",{d:"m14.3 16.6 1-.4",key:"1qlj63"}],["path",{d:"m20.7 13.8 1-.4",key:"1v5t8k"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=qe("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=qe("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=qe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fs=qe("Wallet",[["path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4",key:"195gfw"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5",key:"195n9w"}],["path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z",key:"vllfpd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=qe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);if(!document.querySelector("#dl-fonts")){const t=document.createElement("link");t.id="dl-fonts",t.rel="stylesheet",t.href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap",document.head.appendChild(t)}const $2=`
  :root {
    --teal:      #5BC4C8;
    --teal-dark: #3A9EA3;
    --teal-deep: #1F6F74;
    --teal-bg:   #EBF7F8;
    --amber:     #E8920A;
    --amber-lt:  #F5B044;
    --ink:       #1A2B2C;
    --ink-mid:   #3D5557;
    --muted:     #7A9294;
    --surface:   #F4FAFA;
    --white:     #FFFFFF;
    --border:    #D4EBEC;
    --border-md: #B8DADA;
  }

  html.dark {
    --teal:      #5BC4C8;
    --teal-dark: #3C96A1;
    --teal-deep: #0F4E58;
    --teal-bg:   #0D1F26;
    --amber:     #F5C34C;
    --amber-lt:  #F9E2A4;
    --ink:       #E2E8F0;
    --ink-mid:   #94A3B8;
    --muted:     #94A3B8;
    --surface:   #08131A;
    --white:     #0F172A;
    --border:    #334155;
    --border-md: #1E293B;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }

  .dl-root {
    display: flex;
    min-height: 100vh;
    background: var(--surface);
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  /* ------------------------------------
     SIDEBAR
  ------------------------------------ */

  .dl-sidebar {
    width: 256px;
    flex-shrink: 0;
    background: var(--white);
    border-right: 1px solid var(--border);
    display: none;
    flex-direction: column;
    position: sticky;
    top: 0;
    height: 100vh;
    overflow: hidden;
    transition: width 0.25s ease;
  }

  .dl-sidebar.collapsed {
    width: 84px;
  }

  @media (min-width: 1024px) {
    .dl-sidebar {
      display: flex;
    }
  }

  .dl-sidebar-accent {
    height: 3px;
    background: linear-gradient(
      90deg,
      var(--teal-deep),
      var(--teal),
      var(--amber)
    );
    flex-shrink: 0;
  }

  /* Brand */

  .dl-brand {
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 18px 18px 15px;
    border-bottom: 1px solid var(--border);
    flex-shrink: 0;
  }

  .dl-brand-mark {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    background: linear-gradient(
      135deg,
      var(--teal-deep) 0%,
      var(--teal-dark) 100%
    );
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .dl-brand-text-name {
    font-size: 15px;
    font-weight: 700;
    color: var(--ink);
    line-height: 1.2;
  }

  .dl-brand-text-sub {
    font-size: 10px;
    color: var(--muted);
    font-weight: 400;
    letter-spacing: 0.01em;
  }

  /* Nav */

  .dl-nav {
    flex: 1;
    padding: 14px 10px;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    gap: 1px;
    min-height: 0;
  }

  .dl-nav-group-label {
    font-size: 9.5px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #B2C8C9;
    padding: 14px 10px 5px;
  }

  .dl-nav-link {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px 10px;
    border-radius: 10px;
    font-size: 13.5px;
    font-weight: 500;
    color: var(--ink-mid);
    text-decoration: none;
    transition: background 0.15s, color 0.15s;
    position: relative;
    cursor: pointer;
    white-space: nowrap;
  }

  .dl-nav-link:hover {
    background: var(--teal-bg);
    color: var(--teal-deep);
  }

  .dl-nav-link.active {
    background: var(--teal-bg);
    color: var(--teal-deep);
    font-weight: 600;
  }

  .dl-nav-link.active::before {
    content: '';
    position: absolute;
    left: 0;
    top: 18%;
    height: 64%;
    width: 3px;
    background: var(--teal-dark);
    border-radius: 0 3px 3px 0;
  }

  .dl-nav-icon-wrap {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: background 0.15s;
  }

  .dl-nav-link:hover .dl-nav-icon-wrap,
  .dl-nav-link.active .dl-nav-icon-wrap {
    background: rgba(58,158,163,0.14);
  }

  /* Collapse */

  .dl-sidebar.collapsed .dl-brand {
    justify-content: center;
    padding-left: 0;
    padding-right: 0;
  }

  .dl-sidebar.collapsed .dl-brand-text-name,
  .dl-sidebar.collapsed .dl-brand-text-sub,
  .dl-sidebar.collapsed .dl-nav-group-label,
  .dl-sidebar.collapsed .dl-user-name,
  .dl-sidebar.collapsed .dl-user-role {
    display: none;
  }

  .dl-sidebar.collapsed .dl-nav-link {
    justify-content: center;
    padding-left: 0;
    padding-right: 0;
  }

  .dl-sidebar.collapsed .dl-user-row {
    justify-content: center;
  }

  .dl-sidebar.collapsed .dl-logout {
    padding: 0;
  }

  /* Footer */

  .dl-sidebar-foot {
    border-top: 1px solid var(--border);
    padding: 14px 14px 16px;
    flex-shrink: 0;
    background: var(--white);
    position: sticky;
    bottom: 0;
  }

  .dl-user-row {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px 11px;
    background: var(--surface);
    border-radius: 11px;
    margin-bottom: 10px;
    border: 1px solid var(--border);
  }

  .dl-avatar {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: linear-gradient(135deg, var(--teal-deep), var(--teal));
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: #fff;
    font-size: 12px;
    font-weight: 700;
  }

  .dl-user-name {
    font-size: 13px;
    font-weight: 600;
    color: var(--ink);
    line-height: 1.25;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .dl-user-role {
    font-size: 10.5px;
    color: var(--muted);
    text-transform: capitalize;
  }

  .dl-logout {
    width: 100%;
    height: 37px;
    background: none;
    border: 1px solid var(--border-md);
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 13px;
    font-weight: 600;
    color: var(--muted);
    cursor: pointer;
    transition:
      background 0.15s,
      color 0.15s,
      border-color 0.15s;
  }

  .dl-logout:hover {
    background: #FEF2F2;
    border-color: #FCA5A5;
    color: #DC2626;
  }

  /* ------------------------------------
     MOBILE DRAWER
  ------------------------------------ */

  .dl-overlay {
    position: fixed;
    inset: 0;
    z-index: 40;
    background: rgba(26,43,44,0.5);
    backdrop-filter: blur(2px);
    animation: fadeIn 0.2s ease;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .dl-drawer {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 50;
    width: 256px;
    max-width: 85vw;
    background: var(--white);
    display: flex;
    flex-direction: column;
    transform: translateX(-100%);
    transition: transform 0.28s cubic-bezier(0.22,1,0.36,1);
    box-shadow: 4px 0 32px rgba(26,43,44,0.15);
    height: 100dvh;
    overflow: hidden;
  }

  .dl-drawer.open {
    transform: translateX(0);
  }

  /* ------------------------------------
     TOPBAR MOBILE
  ------------------------------------ */

  .dl-topbar-mobile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 58px;
    padding: 0 14px;
    background: var(--white);
    border-bottom: 1px solid var(--border);
    position: sticky;
    top: 0;
    z-index: 30;
  }

  @media (min-width: 1024px) {
    .dl-topbar-mobile {
      display: none;
    }
  }

  .dl-topbar-brand-mobile {
    font-weight: 700;
    font-size: 15px;
    color: var(--ink);
  }

  .dl-topbar-brand-sub-mobile {
    font-size: 10px;
    color: var(--muted);
    font-weight: 400;
  }

  /* ------------------------------------
     TOPBAR DESKTOP
  ------------------------------------ */

  .dl-topbar-desktop {
    display: none;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding: 0 28px;
    background: var(--white);
    border-bottom: 1px solid var(--border);
    position: sticky;
    top: 0;
    z-index: 30;
    flex-shrink: 0;
  }

  @media (min-width: 1024px) {
    .dl-topbar-desktop {
      display: flex;
    }
  }

  .dl-breadcrumb {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 13.5px;
    color: var(--muted);
  }

  .dl-breadcrumb-active {
    color: var(--ink);
    font-weight: 600;
  }

  .dl-topbar-right {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .dl-date-badge {
    font-size: 12px;
    color: var(--muted);
    padding: 5px 13px;
    background: var(--surface);
    border-radius: 8px;
    border: 1px solid var(--border);
    white-space: nowrap;
  }

  .dl-icon-btn {
    width: 36px;
    height: 36px;
    border: 1px solid var(--border);
    background: var(--surface);
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--ink-mid);
    transition: background 0.15s, color 0.15s;
  }

  .dl-icon-btn:hover {
    background: var(--teal-bg);
    color: var(--teal-deep);
  }

  .dl-topbar-avatar {
    width: 34px;
    height: 34px;
    border-radius: 9px;
    background: linear-gradient(135deg, var(--teal-deep), var(--teal));
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    border: 2px solid var(--teal-bg);
  }

  /* ------------------------------------
     BODY / MAIN
  ------------------------------------ */

  .dl-body {
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
  }

  .dl-main {
    flex: 1;
    padding: 28px 28px;
    overflow-y: auto;
  }

  @media (max-width: 1023px) {
    .dl-main {
      padding: 20px 16px;
    }
  }
`,gh=(t="")=>t.slice(0,2).toUpperCase()||"U",V2=new Date().toLocaleDateString("id-ID",{weekday:"long",day:"numeric",month:"long",year:"numeric"}),K2=()=>s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:[s.jsx("rect",{x:"2",y:"2",width:"6",height:"6",rx:"1.5",fill:"#fff"}),s.jsx("rect",{x:"10",y:"2",width:"8",height:"3.5",rx:"1.5",fill:"#fff",opacity:".55"}),s.jsx("rect",{x:"2",y:"10",width:"6",height:"8",rx:"1.5",fill:"#fff",opacity:".55"}),s.jsx("rect",{x:"10",y:"7.5",width:"8",height:"10.5",rx:"1.5",fill:"#fff"})]}),pr=({children:t})=>{const[e,r]=me.useState(!1),[a,i]=me.useState(!1),{theme:n,toggleTheme:l}=m2(),c=n==="dark",{user:u,logout:f}=Li(),g=j1(),b=na(),y=[{group:"Menu Utama",items:[{name:"Dashboard",href:"/dashboard",icon:A2},{name:"Data Santri",href:"/santri",icon:cu}]},{group:"Keuangan",items:[{name:"Pembayaran",href:"/pembayaran",icon:Uf},{name:"Pengeluaran",href:"/pengeluaran",icon:lu},{name:"Laporan",href:"/reports",icon:$n}]},...(u==null?void 0:u.role)==="admin"?[{group:"Administrasi",items:[{name:"Manajemen User",href:"/user",icon:W2},{name:"Pengaturan",href:"/pengaturan",icon:B2}]}]:[]],m=y.flatMap(_=>_.items).find(_=>_.href===g.pathname),k=()=>{f(),b("/login")},N=({onClose:_})=>s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"dl-sidebar-accent"}),s.jsxs("div",{className:"dl-brand",children:[s.jsx("div",{className:"dl-brand-mark",children:s.jsx(K2,{})}),!a&&s.jsxs("div",{children:[s.jsx("div",{className:"dl-brand-text-name",children:"SiKeu Pesantren"}),s.jsx("div",{className:"dl-brand-text-sub",children:"Sistem Keuangan Terpadu"})]})]}),s.jsx("nav",{className:"dl-nav","aria-label":"Navigasi utama",children:y.map(x=>s.jsxs("div",{children:[!a&&s.jsx("div",{className:"dl-nav-group-label",children:x.group}),x.items.map(I=>{const B=g.pathname===I.href;return s.jsxs(ki,{to:I.href,title:a?I.name:"",className:`dl-nav-link${B?" active":""}`,onClick:_,"aria-current":B?"page":void 0,children:[s.jsx("span",{className:"dl-nav-icon-wrap",children:s.jsx(I.icon,{size:16})}),!a&&I.name]},I.name)})]},x.group))}),s.jsxs("div",{className:"dl-sidebar-foot",children:[s.jsxs("div",{className:"dl-user-row",children:[s.jsx("div",{className:"dl-avatar",children:gh(u==null?void 0:u.username)}),!a&&s.jsxs("div",{style:{flex:1,minWidth:0},children:[s.jsx("div",{className:"dl-user-name",children:(u==null?void 0:u.username)||"-"}),s.jsx("div",{className:"dl-user-role",children:(u==null?void 0:u.role)||"pengguna"})]})]}),s.jsxs("button",{className:"dl-logout",onClick:k,title:a?"Keluar":"",children:[s.jsx(P2,{size:14}),!a&&"Keluar dari Sistem"]})]})]});return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:$2}),s.jsxs("div",{className:"dl-root",children:[s.jsx("aside",{className:`dl-sidebar${a?" collapsed":""}`,children:s.jsx(N,{onClose:()=>{}})}),e&&s.jsx("div",{className:"dl-overlay",onClick:()=>r(!1),"aria-hidden":"true"}),s.jsx("div",{className:`dl-drawer${e?" open":""}`,"aria-modal":"true",role:"dialog",children:s.jsx(N,{onClose:()=>r(!1)})}),s.jsxs("div",{className:"dl-body",children:[s.jsxs("header",{className:"dl-topbar-mobile",children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[s.jsx("button",{className:"dl-icon-btn",onClick:()=>r(!0),"aria-label":"Buka menu",children:s.jsx(_2,{size:18})}),s.jsxs("div",{children:[s.jsx("div",{className:"dl-topbar-brand-mobile",children:"SiKeu Pesantren"}),s.jsx("div",{className:"dl-topbar-brand-sub-mobile",children:"Sistem Keuangan"})]})]}),s.jsx("button",{className:"dl-icon-btn",onClick:l,"aria-label":"Ganti tema",children:c?s.jsx(mh,{size:16}):s.jsx(ph,{size:16})})]}),s.jsxs("header",{className:"dl-topbar-desktop",children:[s.jsxs("div",{className:"dl-breadcrumb",children:[s.jsx("span",{children:"SiKeu"}),s.jsx(Zl,{size:14,style:{color:"#B2C8C9"}}),s.jsx("span",{className:"dl-breadcrumb-active",children:(m==null?void 0:m.name)||"Halaman"})]}),s.jsxs("div",{className:"dl-topbar-right",children:[s.jsx("button",{className:"dl-icon-btn",onClick:()=>i(_=>!_),"aria-label":"Toggle sidebar",children:a?s.jsx(I2,{size:16}):s.jsx(F2,{size:16})}),s.jsx("span",{className:"dl-date-badge",children:V2}),s.jsx("button",{className:"dl-icon-btn",onClick:l,"aria-label":"Ganti tema",children:c?s.jsx(mh,{size:16}):s.jsx(ph,{size:16})}),s.jsx("div",{className:"dl-topbar-avatar",title:u==null?void 0:u.username,"aria-label":`Profil ${u==null?void 0:u.username}`,children:gh(u==null?void 0:u.username)})]})]}),s.jsx("main",{className:"dl-main",children:t})]})]})]})},bh=(t,e,r)=>{if(t&&"reportValidity"in t){const a=md(r,e);t.setCustomValidity(a&&a.message||""),t.reportValidity()}},Gf=(t,e)=>{for(const r in e.fields){const a=e.fields[r];a&&a.ref&&"reportValidity"in a.ref?bh(a.ref,r,t):a.refs&&a.refs.forEach(i=>bh(i,r,t))}},G2=(t,e)=>{e.shouldUseNativeValidation&&Gf(t,e);const r={};for(const a in t){const i=md(e.fields,a),n=Object.assign(t[a]||{},{ref:i&&i.ref});if(Y2(e.names||Object.keys(t),a)){const l=Object.assign({},md(r,a));Jc(l,"root",n),Jc(r,a,l)}else Jc(r,a,n)}return r},Y2=(t,e)=>t.some(r=>r.startsWith(e+"."));var J2=function(t,e){for(var r={};t.length;){var a=t[0],i=a.code,n=a.message,l=a.path.join(".");if(!r[l])if("unionErrors"in a){var c=a.unionErrors[0].errors[0];r[l]={message:c.message,type:c.code}}else r[l]={message:n,type:i};if("unionErrors"in a&&a.unionErrors.forEach(function(g){return g.errors.forEach(function(b){return t.push(b)})}),e){var u=r[l].types,f=u&&u[a.code];r[l]=A1(l,e,r,i,f?[].concat(f,a.message):a.message)}t.shift()}return r},du=function(t,e,r){return r===void 0&&(r={}),function(a,i,n){try{return Promise.resolve(function(l,c){try{var u=Promise.resolve(t[r.mode==="sync"?"parse":"parseAsync"](a,e)).then(function(f){return n.shouldUseNativeValidation&&Gf({},n),{errors:{},values:r.raw?a:f}})}catch(f){return c(f)}return u&&u.then?u.then(void 0,c):u}(0,function(l){if(function(c){return Array.isArray(c==null?void 0:c.errors)}(l))return{values:{},errors:G2(J2(l.errors,!n.shouldUseNativeValidation&&n.criteriaMode==="all"),n)};throw l}))}catch(l){return Promise.reject(l)}}};const jr=({size:t="md",className:e="",text:r="Memuat...",centered:a=!0,overlay:i=!1})=>{const[n,l]=me.useState("");me.useEffect(()=>{const f=setInterval(()=>{l(g=>g.length>=3?"":g+".")},500);return()=>clearInterval(f)},[]);const c={sm:"w-6 h-6",md:"w-12 h-12",lg:"w-16 h-16",xl:"w-20 h-20"},u=s.jsxs("div",{className:`flex flex-col items-center justify-center gap-4 ${a?"min-h-[200px]":""} ${e}`,children:[s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:`${c[t]} border-4 border-transparent rounded-full animate-spin`,style:{background:"conic-gradient(from 0deg, #3A9EA3, #E8920A, #3A9EA3)",backgroundClip:"padding-box",mask:"linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",maskComposite:"subtract"}}),s.jsx("div",{className:"absolute inset-2 bg-gradient-to-br from-primary-400 to-amber-400 rounded-full animate-pulse opacity-75"})]}),r&&s.jsx("div",{className:"text-center",children:s.jsxs("p",{className:"text-sm font-medium text-gray-600 animate-pulse",children:[r,n]})})]});return i?s.jsx("div",{className:"fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center",children:u}):u};if(!document.querySelector("#login-fonts")){const t=document.createElement("link");t.id="login-fonts",t.rel="stylesheet",t.href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&family=Playfair+Display:ital@0;1&display=swap",document.head.appendChild(t)}const Q2=`
  :root {
    --teal:      #5BC4C8;
    --teal-dark: #3A9EA3;
    --teal-deep: #1F6F74;
    --teal-bg:   #EBF7F8;
    --amber:     #E8920A;
    --amber-lt:  #F5B044;
    --amber-bg:  #FEF5E7;
    --ink:       #1A2B2C;
    --ink-mid:   #3D5557;
    --muted:     #7A9294;
    --surface:   #F4FAFA;
    --white:     #FFFFFF;
    --border:    #D4EBEC;
    --error:     #D94040;
  }

  html.dark {
    --teal:      #4f9ea8;
    --teal-dark: #2b7c85;
    --teal-deep: #1a4f57;
    --teal-bg:   #081c21;
    --amber:     #f5c34c;
    --amber-lt:  #f9e2a4;
    --amber-bg:  #111f2b;
    --ink:       #e2e8f0;
    --ink-mid:   #94a3b8;
    --muted:     #94a3b8;
    --surface:   #0b1720;
    --white:     #0f172a;
    --border:    #334155;
    --error:     #f87171;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .lp-root {
    min-height: 100vh;
    font-family: 'Plus Jakarta Sans', sans-serif;
    display: flex;
    background: var(--surface);
  }

  /* -- LEFT PANEL (desktop only) --------------- */
  .lp-panel {
    display: none;
    flex: 1;
    background: linear-gradient(155deg, var(--teal-deep) 0%, var(--teal-dark) 45%, var(--teal) 100%);
    position: relative;
    overflow: hidden;
    padding: 48px 56px;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (min-width: 900px) {
    .lp-panel { display: flex; }
  }

  .lp-panel-deco {
    position: absolute;
    border-radius: 50%;
    background: rgba(255,255,255,0.06);
  }
  .lp-panel-deco.d1 { width: 420px; height: 420px; top: -100px; right: -120px; }
  .lp-panel-deco.d2 { width: 260px; height: 260px; bottom: 60px; left: -80px; }
  .lp-panel-deco.d3 {
    width: 180px; height: 180px; bottom: 220px; right: 40px;
    background: rgba(232,146,10,0.18);
  }

  .lp-panel-logo {
    display: flex;
    align-items: center;
    gap: 12px;
    position: relative;
    z-index: 1;
  }

  .lp-panel-logo img {
    width: 52px;
    height: 52px;
    object-fit: contain;
    border-radius: 14px;
    background: rgba(255,255,255,0.15);
    padding: 6px;
  }

  .lp-panel-logo-name {
    color: #fff;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.2;
  }

  .lp-panel-logo-sub {
    color: rgba(255,255,255,0.65);
    font-size: 12px;
    font-weight: 400;
  }

  .lp-panel-body {
    position: relative;
    z-index: 1;
  }

  .lp-panel-tag {
    display: inline-block;
    background: var(--amber);
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 5px 14px;
    border-radius: 20px;
    margin-bottom: 24px;
  }

  .lp-panel-heading {
    font-family: 'Playfair Display', serif;
    font-size: 40px;
    color: #fff;
    line-height: 1.2;
    margin-bottom: 16px;
  }

  .lp-panel-heading em {
    font-style: italic;
    color: var(--amber-lt);
  }

  .lp-panel-desc {
    color: rgba(255,255,255,0.72);
    font-size: 15px;
    line-height: 1.7;
    max-width: 340px;
  }

  .lp-panel-stats {
    display: flex;
    gap: 32px;
    position: relative;
    z-index: 1;
    border-top: 1px solid rgba(255,255,255,0.15);
    padding-top: 28px;
  }

  .lp-stat-num {
    font-family: 'Playfair Display', serif;
    font-size: 26px;
    font-weight: 700;
    color: var(--amber-lt);
  }

  .lp-stat-label {
    font-size: 12px;
    color: rgba(255,255,255,0.6);
    margin-top: 2px;
  }

  /* -- RIGHT / FORM SIDE ----------------------- */
  .lp-right {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: none;
    width: 100%;
    padding: 32px 20px;
  }

  @media (min-width: 900px) {
    .lp-right {
      width: 460px;
      padding: 48px 44px;
      background: var(--white);
      border-left: 1px solid var(--border);
    }
  }

  .lp-form-wrap {
    width: 100%;
    max-width: 380px;
    animation: fadeUp 0.5s cubic-bezier(0.22,1,0.36,1) both;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* Mobile-only top logo */
  .lp-mobile-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 32px;
  }

  @media (min-width: 900px) {
    .lp-mobile-logo { display: none; }
  }

  .lp-mobile-logo img {
    width: 48px;
    height: 48px;
    object-fit: contain;
    border-radius: 12px;
    background: var(--teal-bg);
    padding: 5px;
  }

  .lp-mobile-logo-name {
    color: var(--ink);
    font-weight: 700;
    font-size: 16px;
    line-height: 1.2;
  }

  .lp-mobile-logo-sub {
    font-size: 11px;
    color: var(--muted);
  }

  .lp-accent-bar {
    height: 4px;
    background: linear-gradient(90deg, var(--teal), var(--amber));
    border-radius: 2px;
    margin-bottom: 28px;
    width: 48px;
  }

  .lp-form-title {
    font-family: 'Playfair Display', serif;
    font-size: 28px;
    color: var(--ink);
    line-height: 1.25;
    margin-bottom: 8px;
  }

  .lp-form-title em {
    font-style: italic;
    color: var(--teal-dark);
  }

  .lp-form-sub {
    font-size: 13.5px;
    color: var(--muted);
    margin-bottom: 32px;
    line-height: 1.5;
  }

  .lp-fields { display: flex; flex-direction: column; gap: 18px; }

  .lp-field { display: flex; flex-direction: column; gap: 6px; position: relative; }

  .lp-field-label {
    font-size: 11.5px;
    font-weight: 600;
    color: var(--ink-mid);
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .lp-input {
    height: 50px;
    background: var(--surface);
    border: 1.5px solid var(--border);
    border-radius: 12px;
    padding: 0 44px 0 14px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 14.5px;
    color: var(--ink);
    outline: none;
    width: 100%;
    transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
  }

  .lp-input::placeholder { color: #B2C8C9; }

  .lp-input:focus {
    background: var(--white);
    border-color: var(--teal);
    box-shadow: 0 0 0 3px rgba(91,196,200,0.15);
  }

  .lp-input.err {
    border-color: var(--error);
    background: #FFF8F8;
  }

  .lp-eye {
    position: absolute;
    right: 14px;
    bottom: 15px;
    background: none;
    border: none;
    cursor: pointer;
    color: #B2C8C9;
    padding: 0;
    display: flex;
    align-items: center;
    transition: color 0.15s;
  }

  .lp-eye:hover { color: var(--teal-dark); }

  .lp-err-msg {
    font-size: 12px;
    color: var(--error);
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .lp-row {
    display: flex;
    justify-content: flex-end;
    margin-top: 6px;
  }

  .lp-row a {
    font-size: 12.5px;
    color: var(--teal-dark);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.15s;
  }

  .lp-row a:hover { color: var(--amber); }

  .lp-btn {
    width: 100%;
    height: 52px;
    background: var(--teal-dark);
    border: none;
    border-radius: 14px;
    color: #fff;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 15.5px;
    font-weight: 700;
    cursor: pointer;
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: background 0.15s, transform 0.1s, box-shadow 0.15s;
    letter-spacing: 0.01em;
    position: relative;
    overflow: hidden;
  }

  .lp-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent);
    transform: translateX(-100%);
    transition: transform 0.4s;
  }

  .lp-btn:hover:not(:disabled)::before { transform: translateX(100%); }

  .lp-btn:hover:not(:disabled) {
    background: var(--teal-deep);
    box-shadow: 0 6px 22px rgba(58,158,163,0.35);
  }

  .lp-btn:active:not(:disabled) { transform: scale(0.98); }
  .lp-btn:disabled { opacity: 0.65; cursor: not-allowed; }

  .lp-spin {
    width: 18px; height: 18px;
    border: 2px solid rgba(255,255,255,0.35);
    border-top-color: #fff;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
  }

  @keyframes spin { to { transform: rotate(360deg); } }

  .lp-divider {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 28px 0 0;
  }

  .lp-div-line { flex: 1; height: 1px; background: var(--border); }

  .lp-div-txt {
    font-size: 12px;
    color: #B2C8C9;
    font-weight: 500;
    white-space: nowrap;
  }

  .lp-footer {
    text-align: center;
    margin-top: 20px;
    font-size: 13.5px;
    color: var(--muted);
  }

  .lp-footer a {
    color: var(--amber);
    font-weight: 700;
    text-decoration: none;
    transition: opacity 0.15s;
  }

  .lp-footer a:hover { opacity: 0.75; }

  .lp-copyright {
    text-align: center;
    margin-top: 32px;
    font-size: 11.5px;
    color: #B2C8C9;
  }
`,X2=Qd({username:sr().min(1,"Username wajib diisi"),password:sr().min(1,"Password wajib diisi")}),Z2=({open:t})=>t?s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),s.jsx("circle",{cx:"12",cy:"12",r:"3"})]}):s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"}),s.jsx("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"}),s.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}),vh=()=>s.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"currentColor",children:s.jsx("path",{d:"M6 0a6 6 0 1 0 0 12A6 6 0 0 0 6 0zm0 9a.75.75 0 1 1 0-1.5A.75.75 0 0 1 6 9zm.75-3.75a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0v2.5z"})}),yh="/logo_jabal_nur.png",em=()=>{const{login:t,loading:e}=Li(),r=na(),[a,i]=me.useState(!1),{register:n,handleSubmit:l,formState:{errors:c}}=Xd({resolver:du(X2)}),u=async f=>{(await t(f)).success&&r("/dashboard",{replace:!0})};return e?s.jsx(jr,{}):s.jsxs(s.Fragment,{children:[s.jsx("style",{children:Q2}),s.jsxs("div",{className:"lp-root",children:[s.jsxs("div",{className:"lp-panel","aria-hidden":"true",children:[s.jsx("div",{className:"lp-panel-deco d1"}),s.jsx("div",{className:"lp-panel-deco d2"}),s.jsx("div",{className:"lp-panel-deco d3"}),s.jsxs("div",{className:"lp-panel-logo",children:[s.jsx("img",{src:yh,alt:""}),s.jsxs("div",{children:[s.jsx("div",{className:"lp-panel-logo-name",children:"SiKeu Pesantren"}),s.jsx("div",{className:"lp-panel-logo-sub",children:"Sistem Keuangan Terpadu"})]})]}),s.jsxs("div",{className:"lp-panel-body",children:[s.jsx("div",{className:"lp-panel-tag",children:"Sistem Resmi Keuangan"}),s.jsxs("h2",{className:"lp-panel-heading",children:["Kelola Keuangan",s.jsx("br",{}),s.jsx("em",{children:"Amanah & Transparan"})]}),s.jsx("p",{className:"lp-panel-desc",children:"Platform pengelolaan keuangan pesantren yang terintegrasi - dari pembayaran santri, penggajian ustadz, hingga laporan keuangan yayasan secara real-time."})]}),s.jsxs("div",{className:"lp-panel-stats",children:[s.jsxs("div",{children:[s.jsx("div",{className:"lp-stat-num",children:"500+"}),s.jsx("div",{className:"lp-stat-label",children:"Santri Tercatat"})]}),s.jsxs("div",{children:[s.jsx("div",{className:"lp-stat-num",children:"99%"}),s.jsx("div",{className:"lp-stat-label",children:"Transaksi Akurat"})]}),s.jsxs("div",{children:[s.jsx("div",{className:"lp-stat-num",children:"24/7"}),s.jsx("div",{className:"lp-stat-label",children:"Akses Laporan"})]})]})]}),s.jsx("div",{className:"lp-right",children:s.jsxs("div",{className:"lp-form-wrap",children:[s.jsxs("div",{className:"lp-mobile-logo",children:[s.jsx("img",{src:yh,alt:"Logo"}),s.jsxs("div",{children:[s.jsx("div",{className:"lp-mobile-logo-name",children:"SiKeu Pesantren"}),s.jsx("div",{className:"lp-mobile-logo-sub",children:"Sistem Keuangan Terpadu"})]})]}),s.jsx("div",{className:"lp-accent-bar"}),s.jsxs("h1",{className:"lp-form-title",children:["Assalamu'alaikum,",s.jsx("br",{}),s.jsx("em",{children:"Silakan Masuk"})]}),s.jsx("p",{className:"lp-form-sub",children:"Masuk ke sistem keuangan pesantren dengan akun yang telah didaftarkan oleh admin."}),s.jsxs("form",{onSubmit:l(u),noValidate:!0,children:[s.jsxs("div",{className:"lp-fields",children:[s.jsxs("div",{className:"lp-field",children:[s.jsx("label",{className:"lp-field-label",htmlFor:"username",children:"Username"}),s.jsx("input",{id:"username",type:"text",placeholder:"Masukkan ID pengguna",className:`lp-input${c.username?" err":""}`,autoComplete:"username",...n("username")}),c.username&&s.jsxs("span",{className:"lp-err-msg",role:"alert",children:[s.jsx(vh,{})," ",c.username.message]})]}),s.jsxs("div",{className:"lp-field",children:[s.jsx("label",{className:"lp-field-label",htmlFor:"password",children:"Password"}),s.jsx("input",{id:"password",type:a?"text":"password",placeholder:"********",className:`lp-input${c.password?" err":""}`,autoComplete:"current-password",...n("password")}),s.jsx("button",{type:"button",className:"lp-eye",onClick:()=>i(f=>!f),"aria-label":a?"Sembunyikan password":"Tampilkan password",children:s.jsx(Z2,{open:a})}),c.password&&s.jsxs("span",{className:"lp-err-msg",role:"alert",children:[s.jsx(vh,{})," ",c.password.message]})]})]}),s.jsx("div",{className:"lp-row",children:s.jsx(ki,{to:"/forgot-password",children:"Lupa kata sandi?"})}),s.jsx("button",{type:"submit",className:"lp-btn",disabled:e,children:e?s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"lp-spin","aria-hidden":"true"})," Memproses..."]}):"Masuk ke Sistem"})]}),s.jsxs("div",{className:"lp-divider",children:[s.jsx("div",{className:"lp-div-line"}),s.jsx("span",{className:"lp-div-txt",children:"butuh akun baru?"}),s.jsx("div",{className:"lp-div-line"})]}),s.jsx("div",{className:"lp-footer",children:s.jsx(ki,{to:"/register",children:"Hubungi Admin Pesantren ?"})}),s.jsxs("div",{className:"lp-copyright",children:["(c) ",new Date().getFullYear()," Sistem Keuangan Pesantren. Hak cipta dilindungi."]})]})})]})]})},Yf={getDashboardStats:()=>lt.get("/report/dashboard"),getReportByDateRange:t=>lt.get("/report/date-range",{params:t}),getCategoryReport:t=>lt.get("/report/categories",{params:t}),getMonthlyReport:t=>lt.get("/report/monthly",{params:t})},Ea={teal:"#3A9EA3",tealDark:"#1F6F74",amber:"#E8920A"},uu=t=>`Rp ${Number(t||0).toLocaleString("id-ID")}`,xh=t=>t?String(t).split("_").map(e=>{const r=e.toUpperCase();return r.length<=3?r:r.charAt(0)+r.slice(1).toLowerCase()}).join(" "):"-",Sl=({title:t,value:e,icon:r,iconVariant:a="teal",trend:i,trendValue:n})=>s.jsx("div",{className:"stat-card",children:s.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:12},children:[s.jsxs("div",{style:{flex:1,minWidth:0},children:[s.jsx("p",{style:{fontSize:".78rem",fontWeight:600,color:"var(--dash-muted)",letterSpacing:".03em",textTransform:"uppercase",marginBottom:8},children:t}),s.jsx("p",{className:"rp-value",style:{fontSize:"1.35rem",fontWeight:700,color:"var(--dash-text)",lineHeight:1.2},children:uu(e)}),i&&s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4,marginTop:8},children:[i==="up"?s.jsx(zf,{size:15,color:"#059669"}):s.jsx(Rf,{size:15,color:"#e11d48"}),s.jsx("span",{style:{fontSize:".78rem",fontWeight:600,color:i==="up"?"#059669":"#e11d48"},children:n})]})]}),s.jsx("div",{className:`stat-icon ${a}`,children:s.jsx(r,{size:20,color:"#fff"})})]})}),wh=({active:t,payload:e,label:r})=>!t||!(e!=null&&e.length)?null:s.jsxs("div",{style:{background:"var(--dash-tooltip-bg)",border:`1px solid ${Ea.teal}44`,borderRadius:10,padding:"10px 14px",fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:".8rem",boxShadow:"0 4px 16px rgba(0,0,0,.18)"},children:[s.jsx("p",{style:{fontWeight:700,color:Ea.tealDark,marginBottom:6},children:r}),e.map(a=>s.jsxs("p",{style:{color:a.stroke||a.fill,margin:"2px 0"},children:[a.name,": ",s.jsx("strong",{children:uu(a.value)})]},a.name))]}),tm=()=>{var c,u,f,g,b,y,m;const{data:t,isLoading:e,error:r}=Pr({queryKey:["dashboard-stats"],queryFn:Yf.getDashboardStats,refetchInterval:3e4});if(e)return s.jsx("div",{className:"dash-root",children:s.jsx("div",{className:"state-wrap",children:s.jsx(jr,{})})});if(r)return s.jsx("div",{className:"dash-root",children:s.jsx("div",{className:"state-wrap",children:s.jsxs("div",{className:"error-box",children:["Gagal memuat data: ",r.message]})})});const a=((c=t==null?void 0:t.data)==null?void 0:c.data)||{},i=a.chart_data||[],n=a.kategori_pembayaran||[],l=a.transaksi_terbaru||[];return s.jsx("div",{className:"dash-root",children:s.jsxs("div",{style:{maxWidth:1280,margin:"0 auto",padding:"28px 24px",display:"flex",flexDirection:"column",gap:28},children:[s.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"flex-end",justifyContent:"space-between",gap:12},children:[s.jsxs("div",{children:[s.jsx("p",{style:{fontSize:".75rem",fontWeight:600,color:Ea.teal,letterSpacing:".08em",textTransform:"uppercase",marginBottom:4},children:"Sistem Keuangan"}),s.jsx("h1",{className:"page-title",children:"Dashboard Pesantren"}),s.jsx("p",{style:{fontSize:".875rem",color:"var(--dash-muted)",marginTop:4},children:"Ringkasan keuangan & transaksi terkini"})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[s.jsx("span",{className:"badge-live",children:"LIVE"}),s.jsx("span",{style:{fontSize:".78rem",color:"var(--dash-muted)"},children:new Date().toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit"})})]})]}),s.jsxs("div",{className:"stat-grid",children:[s.jsx(Sl,{title:"Pemasukan Hari Ini",value:(u=a.summary)==null?void 0:u.pemasukan_hari_ini,icon:Vf,iconVariant:"green"}),s.jsx(Sl,{title:"Pengeluaran Hari Ini",value:(f=a.summary)==null?void 0:f.pengeluaran_hari_ini,icon:lu,iconVariant:"red"}),s.jsx(Sl,{title:"Pemasukan Bulan Ini",value:(g=a.summary)==null?void 0:g.pemasukan_bulan_ini,icon:Uf,iconVariant:"teal"}),s.jsx(Sl,{title:"Saldo Bulan Ini",value:(b=a.summary)==null?void 0:b.saldo_bulan_ini,icon:((y=a.summary)==null?void 0:y.saldo_bulan_ini)>=0?Fs:j2,iconVariant:((m=a.summary)==null?void 0:m.saldo_bulan_ini)>=0?"amber":"red"})]}),s.jsxs("div",{className:"chart-grid",children:[s.jsxs("div",{className:"chart-card",children:[s.jsx("p",{className:"chart-card-title",children:"Tren Pemasukan vs Pengeluaran"}),s.jsx(Ku,{width:"100%",height:280,children:s.jsxs(P1,{data:i,margin:{top:4,right:4,left:0,bottom:0},children:[s.jsx(Gu,{strokeDasharray:"3 3",stroke:"var(--dash-border)"}),s.jsx(Yu,{dataKey:"bulan",tickFormatter:k=>{const[N,_]=k.split("-");return`${_}/${N.slice(-2)}`},tick:{fontSize:11,fill:"var(--dash-muted)"},axisLine:!1,tickLine:!1}),s.jsx(Ju,{tickFormatter:k=>`${(k/1e3).toFixed(0)}K`,tick:{fontSize:11,fill:"var(--dash-muted)"},axisLine:!1,tickLine:!1}),s.jsx(Qu,{content:s.jsx(wh,{})}),s.jsx(Xu,{type:"monotone",dataKey:"pemasukan",stroke:Ea.teal,strokeWidth:2.5,dot:{r:4,fill:Ea.teal,strokeWidth:0},name:"Pemasukan"}),s.jsx(Xu,{type:"monotone",dataKey:"pengeluaran",stroke:Ea.amber,strokeWidth:2.5,dot:{r:4,fill:Ea.amber,strokeWidth:0},name:"Pengeluaran"})]})}),s.jsx("div",{style:{display:"flex",gap:20,justifyContent:"center",marginTop:12},children:[["Pemasukan",Ea.teal],["Pengeluaran",Ea.amber]].map(([k,N])=>s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,fontSize:".78rem",color:"var(--dash-muted)",fontWeight:600},children:[s.jsx("div",{style:{width:28,height:3,borderRadius:2,background:N}}),k]},k))})]}),s.jsxs("div",{className:"chart-card",children:[s.jsx("p",{className:"chart-card-title",children:"Kategori Pembayaran Bulan Ini"}),s.jsx(Ku,{width:"100%",height:280,children:s.jsxs(_1,{data:n,margin:{top:4,right:4,left:0,bottom:0},children:[s.jsx(Gu,{strokeDasharray:"3 3",stroke:"var(--dash-border)",vertical:!1}),s.jsx(Yu,{dataKey:"kategori",tickFormatter:k=>xh(k),tick:{fontSize:11,fill:"var(--dash-muted)"},axisLine:!1,tickLine:!1}),s.jsx(Ju,{tickFormatter:k=>`${(k/1e3).toFixed(0)}K`,tick:{fontSize:11,fill:"var(--dash-muted)"},axisLine:!1,tickLine:!1}),s.jsx(Qu,{content:s.jsx(wh,{})}),s.jsx(C1,{dataKey:"total_nominal",name:"Total",fill:Ea.teal,radius:[6,6,0,0]})]})})]})]}),s.jsxs("div",{className:"chart-card",children:[s.jsx("p",{className:"chart-card-title",children:"Transaksi Terbaru"}),l.slice(0,5).map((k,N)=>{const _=k.tipe==="pemasukan";return s.jsxs("div",{className:"txn-row",children:[s.jsxs("div",{className:"txn-left",children:[s.jsx("div",{className:`txn-dot ${_?"in":"out"}`,children:_?s.jsx(zf,{size:18,color:"#059669"}):s.jsx(Rf,{size:18,color:"#e11d48"})}),s.jsxs("div",{className:"txn-main",children:[s.jsx("p",{className:"txn-name",children:k.nama_santri||"-"}),s.jsxs("p",{className:"txn-meta",children:[xh(k.kategori),s.jsx("span",{className:"txn-sep",children:"-"}),new Date(k.tanggal).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"})]})]})]}),s.jsxs("div",{className:"txn-right",children:[s.jsxs("p",{className:`rp-value txn-amount ${_?"in":"out"}`,children:[_?"+":"-",uu(k.nominal)]}),s.jsx("span",{className:`txn-badge ${_?"in":"out"}`,children:k.tipe})]})]},N)})]})]})})},Ai={getSantri:t=>lt.get("/santri",{params:t}),getSantriById:t=>lt.get(`/santri/${t}`),createSantri:t=>lt.post("/santri",t),updateSantri:(t,e)=>lt.put(`/santri/${t}`,e),deleteSantri:t=>lt.delete(`/santri/${t}`),getSantriStats:()=>lt.get("/santri/stats")},$r={teal:"#3A9EA3",tealDark:"#1F6F74",amber:"#E8920A"},rm=()=>{var I;const{isAdmin:t}=Li(),e=na(),r=ia(),[a,i]=me.useState(""),[n,l]=me.useState(!1),{data:c,isLoading:u,refetch:f}=Pr({queryKey:["santri-search",a],queryFn:()=>Ai.getSantri({page:1,limit:100,search:a}),enabled:!1,keepPreviousData:!0}),g=((I=c==null?void 0:c.data)==null?void 0:I.data)||[],b=g.length,y=g.filter(B=>B.status_aktif).length,m=_r({mutationFn:Ai.deleteSantri,onSuccess:()=>{r.invalidateQueries({queryKey:["santri-search"]}),mt.success("Santri berhasil dihapus"),f()},onError:B=>{var R,Z;mt.error(((Z=(R=B.response)==null?void 0:R.data)==null?void 0:Z.message)||"Gagal menghapus santri")}}),k=B=>{B.preventDefault(),l(!0),f()},N=B=>{window.confirm("Hapus santri ini?")&&m.mutate(B)},_=B=>e(`/santri/${B}`),x=B=>e(`/santri/edit/${B}`);return s.jsx("div",{className:"santri-root",children:s.jsxs("div",{style:{maxWidth:1280,margin:"0 auto",padding:"28px 24px",display:"flex",flexDirection:"column",gap:24},children:[s.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"flex-end",justifyContent:"space-between",gap:14},children:[s.jsxs("div",{children:[s.jsx("p",{style:{fontSize:".75rem",fontWeight:600,color:$r.teal,letterSpacing:".08em",textTransform:"uppercase",marginBottom:4},children:"Manajemen Santri"}),s.jsx("h1",{className:"s-page-title",children:"Data Santri"}),s.jsx("p",{style:{fontSize:".875rem",color:"#5a8a8d",marginTop:4},children:"Cari dan kelola data santri pesantren"})]}),t&&s.jsxs("button",{className:"btn-tambah",onClick:()=>e("/santri/tambah"),children:[s.jsx(Fo,{size:16}),"Tambah Santri"]})]}),n&&!u&&s.jsxs("div",{className:"s-stat-grid",children:[s.jsxs("div",{className:"s-stat-card",children:[s.jsxs("div",{children:[s.jsx("p",{style:{fontSize:".75rem",fontWeight:600,color:"#5a8a8d",textTransform:"uppercase",letterSpacing:".04em"},children:"Total Santri"}),s.jsx("p",{style:{fontSize:"2rem",fontWeight:800,color:$r.tealDark,marginTop:4,fontFamily:"'DM Mono', monospace"},children:b})]}),s.jsx("div",{className:"s-stat-icon",style:{background:`linear-gradient(135deg, ${$r.teal}, ${$r.tealDark})`},children:s.jsx(cu,{size:20,color:"#fff"})})]}),s.jsxs("div",{className:"s-stat-card",children:[s.jsxs("div",{children:[s.jsx("p",{style:{fontSize:".75rem",fontWeight:600,color:"#5a8a8d",textTransform:"uppercase",letterSpacing:".04em"},children:"Santri Aktif"}),s.jsx("p",{style:{fontSize:"2rem",fontWeight:800,color:"#059669",marginTop:4,fontFamily:"'DM Mono', monospace"},children:y})]}),s.jsx("div",{className:"s-stat-icon",style:{background:"linear-gradient(135deg, #34d399, #059669)"},children:s.jsx(Kf,{size:20,color:"#fff"})})]})]}),s.jsx("div",{className:"s-panel",style:{padding:"20px 24px"},children:s.jsxs("form",{onSubmit:k,className:"s-search-wrap",children:[s.jsxs("div",{className:"s-search-input",children:[s.jsx(po,{size:16,color:$r.teal}),s.jsx("input",{placeholder:"Cari berdasarkan nama santri…",value:a,onChange:B=>i(B.target.value)})]}),s.jsxs("button",{type:"submit",className:"btn-cari",disabled:u,children:[s.jsx(po,{size:15}),"Cari"]})]})}),!n&&s.jsxs("div",{className:"s-empty",children:[s.jsx("div",{className:"s-empty-icon",children:s.jsx(po,{size:32,color:$r.teal})}),s.jsx("h3",{className:"s-empty-title",children:"Cari Data Santri"}),s.jsx("p",{className:"s-empty-desc",children:"Masukkan nama santri untuk menampilkan data."})]}),n&&u&&s.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"64px 0"},children:s.jsx(jr,{})}),n&&!u&&g.length>0&&s.jsxs("div",{children:[s.jsxs("p",{className:"s-result-label",children:["Ditemukan ",s.jsx("strong",{children:g.length})," santri"]}),s.jsx("div",{className:"s-santri-grid",children:g.map(B=>s.jsxs("div",{className:"s-santri-card",children:[s.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:10,marginBottom:16},children:[s.jsxs("div",{style:{minWidth:0},children:[s.jsx("h3",{style:{fontSize:"1rem",fontWeight:700,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:B.nama}),B.nis&&s.jsxs("p",{className:"s-nis",children:["NIS: ",B.nis]})]}),s.jsx("span",{className:`s-badge ${B.status_aktif?"aktif":"nonaktif"}`,children:B.status_aktif?"Aktif":"Nonaktif"})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,flex:1},children:[s.jsxs("div",{className:"s-info-row",children:[s.jsx("div",{className:"s-info-icon",style:{background:`${$r.teal}18`},children:s.jsx(iu,{size:15,color:$r.teal})}),s.jsxs("div",{children:[s.jsx("p",{style:{fontSize:".7rem",color:"#9bbcbe",fontWeight:600,textTransform:"uppercase",letterSpacing:".04em"},children:"Kelas"}),s.jsx("p",{style:{fontSize:".875rem",fontWeight:600,color:"#0f2e30",marginTop:1},children:B.kelas||"—"})]})]}),s.jsxs("div",{className:"s-info-row",children:[s.jsx("div",{className:"s-info-icon",style:{background:`${$r.amber}18`},children:s.jsx(ec,{size:15,color:$r.amber})}),s.jsxs("div",{children:[s.jsx("p",{style:{fontSize:".7rem",color:"#9bbcbe",fontWeight:600,textTransform:"uppercase",letterSpacing:".04em"},children:"Alamat"}),s.jsx("p",{style:{fontSize:".875rem",color:"#3a5e60",marginTop:1,lineHeight:1.5,display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"},children:B.alamat||"—"})]})]}),B.no_hp_wali&&s.jsxs("div",{className:"s-info-row",children:[s.jsx("div",{className:"s-info-icon",style:{background:`${$r.tealDark}18`},children:s.jsx(Cs,{size:15,color:$r.tealDark})}),s.jsxs("div",{children:[s.jsx("p",{style:{fontSize:".7rem",color:"#9bbcbe",fontWeight:600,textTransform:"uppercase",letterSpacing:".04em"},children:"No HP Wali"}),s.jsx("p",{style:{fontSize:".875rem",fontWeight:600,color:"#0f2e30",marginTop:1,fontFamily:"'DM Mono', monospace"},children:B.no_hp_wali})]})]})]}),s.jsxs("div",{style:{display:"flex",gap:8,paddingTop:16,marginTop:16,borderTop:"1px solid #edf6f6"},children:[s.jsxs("button",{className:"btn-detail",onClick:()=>_(B.id),children:[s.jsx(jo,{size:14}),"Detail"]}),t&&s.jsxs(s.Fragment,{children:[s.jsx("button",{className:"btn-icon edit",onClick:()=>x(B.id),children:s.jsx(Hf,{size:15})}),s.jsx("button",{className:"btn-icon delete",onClick:()=>N(B.id),disabled:m.isPending,children:s.jsx(Ul,{size:15})})]})]})]},B.id))})]}),n&&!u&&g.length===0&&s.jsxs("div",{className:"s-empty",children:[s.jsx("div",{className:"s-empty-icon",children:s.jsx(po,{size:32,color:$r.teal})}),s.jsx("h3",{className:"s-empty-title",children:"Data Tidak Ditemukan"}),s.jsx("p",{className:"s-empty-desc",children:"Tidak ada santri yang cocok dengan pencarian."})]})]})})},cs={getPembayaran:t=>lt.get("/pembayaran",{params:t}),getPembayaranById:t=>lt.get(`/pembayaran/${t}`),createPembayaran:t=>lt.post("/pembayaran",t),updatePembayaran:(t,e)=>lt.put(`/pembayaran/${t}`,e),deletePembayaran:t=>lt.delete(`/pembayaran/${t}`),getPembayaranBySantri:(t,e)=>lt.get(`/pembayaran/santri/${t}`,{params:e})},Ed=me.forwardRef(({children:t,variant:e="primary",size:r="md",loading:a=!1,disabled:i=!1,className:n="",...l},c)=>{const u="btn inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-ring disabled:cursor-not-allowed disabled:opacity-60",f={primary:"bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500",secondary:"bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-primary-500",danger:"bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",success:"bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",outline:"bg-transparent text-primary-600 border border-primary-600 hover:bg-primary-50 focus:ring-primary-500"},g={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-sm",lg:"px-6 py-3 text-base",xl:"px-8 py-4 text-lg"},b=`${u} ${f[e]} ${g[r]} ${n}`;return s.jsxs("button",{ref:c,className:b,disabled:i||a,...l,children:[a&&s.jsx(L2,{className:"w-4 h-4 mr-2 animate-spin"}),t]})});Ed.displayName="Button";const ds=({children:t,className:e="",padding:r="normal",shadow:a="soft",...i})=>{const n={none:"",soft:"shadow-soft",medium:"shadow-medium",large:"shadow-large"},l={none:"",small:"p-4",normal:"p-6",large:"p-8"};return s.jsx("div",{className:`bg-white rounded-lg border border-gray-200 ${n[a]} ${l[r]} ${e}`,...i,children:t})},am=({children:t,className:e="",...r})=>s.jsx("div",{className:`border-b border-gray-200 pb-4 mb-4 ${e}`,...r,children:t}),nm=({children:t,className:e="",...r})=>s.jsx("div",{className:e,...r,children:t}),im=({children:t,className:e="",...r})=>s.jsx("div",{className:`border-t border-gray-200 pt-4 mt-4 bg-gray-50 -m-6 px-6 py-4 rounded-b-lg ${e}`,...r,children:t});ds.Header=am;ds.Body=nm;ds.Footer=im;const sm=()=>{var x,I,B;const{id:t}=Gl(),e=na(),{user:r}=Li(),[a,i]=me.useState(0),[n,l]=me.useState(5),{data:c,isLoading:u}=Pr({queryKey:["santri",t],queryFn:()=>Ai.getSantriById(t),enabled:!!t}),{data:f,isLoading:g}=Pr({queryKey:["pembayaran-santri",t,a,n],queryFn:()=>cs.getPembayaranBySantri(t,{page:a+1,limit:n}),enabled:!!t}),b=((x=c==null?void 0:c.data)==null?void 0:x.data)||{},y=((I=f==null?void 0:f.data)==null?void 0:I.data)||[],m=((B=f==null?void 0:f.data)==null?void 0:B.pagination)||{},k=y.reduce((R,Z)=>R+Number(Z.nominal||0),0),N=me.useMemo(()=>[{accessorKey:"tanggal_pembayaran",header:"Tanggal",cell:({getValue:R})=>{const Z=R();return Z?new Date(Z).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric"}):"-"}},{accessorKey:"kategori",header:"Kategori",cell:({getValue:R})=>s.jsx("span",{className:"sd-pill-blue",children:(R()||"-").replaceAll("_"," ")})},{accessorKey:"bulan",header:"Bulan",cell:({getValue:R})=>{const Z=R();return!Z||Z===0?"-":["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"][Z-1]}},{accessorKey:"tahun",header:"Tahun",cell:({getValue:R})=>{const Z=R();return!Z||Z===0?"-":Z}},{accessorKey:"nominal",header:"Nominal",cell:({getValue:R})=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0}).format(R()||0)},{accessorKey:"sisa_tagihan",header:"Sisa",cell:({getValue:R})=>s.jsx("span",{className:"sd-sisa",children:new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0}).format(R()||0)})},{accessorKey:"status_pembayaran",header:"Status",cell:({getValue:R})=>s.jsx("span",{className:R()==="lunas"?"sd-pill-green":"sd-pill-amber",children:R()==="lunas"?"Lunas":"Cicilan"})},{accessorKey:"keterangan",header:"Keterangan",cell:({getValue:R})=>s.jsx("span",{style:{fontSize:13,color:"var(--text-muted)"},children:R()||"-"})}],[]),_=F1({data:y,columns:N,getCoreRowModel:D1(),getPaginationRowModel:I1(),manualPagination:!0,pageCount:m.totalPages||0,state:{pagination:{pageIndex:a,pageSize:n}},onPaginationChange:R=>{const Z=typeof R=="function"?R({pageIndex:a,pageSize:n}):R;i(Z.pageIndex),l(Z.pageSize)}});return u?s.jsx("div",{className:"sd-root",style:{display:"flex",justifyContent:"center",paddingTop:80},children:s.jsx(jr,{})}):s.jsxs("div",{className:"sd-root",style:{padding:"24px 20px",maxWidth:1100,margin:"0 auto"},children:[s.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:16,marginBottom:28},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[s.jsx("button",{className:"sd-back-btn",onClick:()=>e("/santri"),children:s.jsx(Vn,{size:18})}),s.jsxs("div",{children:[s.jsx("h1",{style:{fontSize:26,fontWeight:800,color:"var(--text)",margin:0},children:"Detail Santri"}),s.jsx("p",{style:{fontSize:13,color:"var(--text-muted)",margin:"2px 0 0",fontWeight:500},children:"Informasi santri dan riwayat pembayaran"})]})]}),((r==null?void 0:r.role)==="admin"||(r==null?void 0:r.role)==="bendahara")&&s.jsxs("button",{className:"sd-cta-btn",onClick:()=>e(`/santri/${t}/tambah-pembayaran`),children:[s.jsx(Fo,{size:16}),"Tambah Pembayaran"]})]}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:16,marginBottom:24},children:[s.jsxs("div",{className:"sd-stat-card",children:[s.jsxs("div",{style:{minWidth:0,overflow:"hidden"},children:[s.jsx("p",{className:"sd-stat-label",children:"Total Pembayaran"}),s.jsxs("h2",{className:"sd-stat-value-teal",style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:["Rp ",k.toLocaleString("id-ID")]})]}),s.jsx("div",{className:"sd-icon-teal",children:s.jsx(Fs,{size:22,color:"#fff"})})]}),s.jsxs("div",{className:"sd-stat-card",children:[s.jsxs("div",{style:{minWidth:0},children:[s.jsx("p",{className:"sd-stat-label",children:"Total Riwayat"}),s.jsx("h2",{className:"sd-stat-value-amber",children:m.total||0})]}),s.jsx("div",{className:"sd-icon-amber",children:s.jsx(ko,{size:22,color:"#fff"})})]})]}),s.jsx("div",{className:"sd-detail-card",style:{marginBottom:24},children:s.jsxs("div",{className:"sd-detail-inner",children:[s.jsxs("div",{className:"sd-detail-col",children:[s.jsx("h2",{className:"sd-name",children:b.nama}),s.jsx("span",{className:b.status_aktif?"sd-badge-aktif":"sd-badge-nonaktif",children:b.status_aktif?"Aktif":"Tidak Aktif"}),s.jsxs("div",{className:"sd-tiles-grid",children:[s.jsxs("div",{className:"sd-tile",children:[s.jsx("p",{className:"sd-tile-label",children:"NIS"}),s.jsx("p",{className:"sd-tile-value",children:b.nis||"-"})]}),s.jsxs("div",{className:"sd-tile",children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:6},children:[s.jsx(iu,{size:13,color:"#3A9EA3",style:{flexShrink:0}}),s.jsx("p",{className:"sd-tile-label",style:{margin:0},children:"Kelas"})]}),s.jsx("p",{className:"sd-tile-value",children:b.kelas||"-"})]})]})]}),s.jsxs("div",{className:"sd-detail-col",style:{display:"flex",flexDirection:"column",gap:18},children:[s.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:12},children:[s.jsx("div",{className:"sd-info-icon-wrap sd-info-icon-red",children:s.jsx(ec,{size:18})}),s.jsxs("div",{style:{minWidth:0},children:[s.jsx("p",{className:"sd-info-label",children:"Alamat"}),s.jsx("p",{className:"sd-info-value",children:b.alamat||"-"})]})]}),s.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:12},children:[s.jsx("div",{className:"sd-info-icon-wrap sd-info-icon-teal",children:s.jsx(Cs,{size:18})}),s.jsxs("div",{style:{minWidth:0},children:[s.jsx("p",{className:"sd-info-label",children:"No HP Wali"}),s.jsx("p",{className:"sd-info-value",children:b.no_hp_wali||"-"})]})]}),s.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:12},children:[s.jsx("div",{className:"sd-info-icon-wrap sd-info-icon-amber",children:s.jsx(Xl,{size:18})}),s.jsxs("div",{style:{minWidth:0},children:[s.jsx("p",{className:"sd-info-label",children:"Tahun Ajaran"}),s.jsx("p",{className:"sd-info-value",children:b.tahun_ajaran||"-"})]})]})]})]})}),s.jsxs("div",{className:"sd-riwayat-card",children:[s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20},children:s.jsxs("div",{children:[s.jsx("h3",{className:"sd-section-title",children:"Riwayat Pembayaran"}),s.jsx("p",{className:"sd-section-sub",children:"Data pembayaran santri"})]})}),g?s.jsx("div",{style:{padding:"48px 0",display:"flex",justifyContent:"center"},children:s.jsx(jr,{})}):y.length>0?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"sd-desktop-table",children:s.jsx("div",{style:{overflowX:"auto"},children:s.jsxs("table",{className:"sd-table",children:[s.jsx("thead",{children:_.getHeaderGroups().map(R=>s.jsx("tr",{className:"sd-thead-tr",children:R.headers.map(Z=>s.jsx("th",{className:"sd-th",children:Z.isPlaceholder?null:Zu(Z.column.columnDef.header,Z.getContext())},Z.id))},R.id))}),s.jsx("tbody",{children:_.getRowModel().rows.map(R=>s.jsx("tr",{className:"sd-tbody-tr",children:R.getVisibleCells().map(Z=>s.jsx("td",{className:"sd-td",children:Zu(Z.column.columnDef.cell,Z.getContext())},Z.id))},R.id))})]})})}),s.jsx("div",{className:"sd-mobile-cards",children:y.map(R=>s.jsxs("div",{className:"sd-mobile-card",children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:12},children:[s.jsxs("div",{style:{minWidth:0},children:[s.jsx("p",{style:{fontSize:11,fontWeight:700,color:"#3A9EA3",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Pembayaran"}),s.jsx("p",{className:"sd-mobile-amount",children:new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0}).format(R.nominal)})]}),s.jsx("span",{className:R.status_pembayaran==="lunas"?"sd-pill-green":"sd-pill-amber",style:{flexShrink:0},children:R.status_pembayaran==="lunas"?"Lunas":"Cicilan"})]}),s.jsxs("div",{style:{marginTop:14,display:"flex",flexDirection:"column",gap:10,fontSize:13},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:8},children:[s.jsx("span",{style:{color:"#6B7280",flexShrink:0},children:"Tanggal"}),s.jsx("span",{style:{fontWeight:600,color:"#1C3F42"},children:new Date(R.tanggal_pembayaran).toLocaleDateString("id-ID")})]}),s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:8},children:[s.jsx("span",{style:{color:"#6B7280",flexShrink:0},children:"Kategori"}),s.jsx("span",{className:"sd-pill-blue",children:(R.kategori||"-").replaceAll("_"," ")})]}),s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:8},children:[s.jsx("span",{style:{color:"#6B7280",flexShrink:0},children:"Bulan/Tahun"}),s.jsx("span",{style:{fontWeight:600,color:"#1C3F42"},children:R.bulan===0?`-/${R.tahun===0?"-":R.tahun}`:`${R.bulan}/${R.tahun}`})]}),s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:8},children:[s.jsx("span",{style:{color:"#6B7280",flexShrink:0},children:"Sisa Tagihan"}),s.jsx("span",{className:"sd-sisa",children:new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0}).format(R.sisa_tagihan||0)})]}),s.jsxs("div",{children:[s.jsx("p",{style:{color:"#6B7280",marginBottom:4},children:"Keterangan"}),s.jsx("p",{style:{color:"#1C3F42",fontWeight:500},children:R.keterangan||"-"})]})]})]},R.id))}),s.jsx("hr",{className:"sd-divider"}),s.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:12,marginTop:16},children:[s.jsxs("p",{className:"sd-page-info",children:["Halaman ",a+1," dari ",_.getPageCount()]}),s.jsxs("div",{style:{display:"flex",gap:6},children:[s.jsx("button",{className:"sd-page-btn",onClick:()=>i(0),disabled:!_.getCanPreviousPage(),children:s.jsx(x2,{size:16})}),s.jsx("button",{className:"sd-page-btn",onClick:()=>_.previousPage(),disabled:!_.getCanPreviousPage(),children:s.jsx(su,{size:16})}),s.jsx("button",{className:"sd-page-btn",onClick:()=>_.nextPage(),disabled:!_.getCanNextPage(),children:s.jsx(Zl,{size:16})}),s.jsx("button",{className:"sd-page-btn",onClick:()=>i(_.getPageCount()-1),disabled:!_.getCanNextPage(),children:s.jsx(w2,{size:16})})]})]})]}):s.jsxs("div",{style:{padding:"48px 0",textAlign:"center"},children:[s.jsx("div",{className:"sd-empty-icon",children:s.jsx(Fs,{size:26,color:"#3A9EA3"})}),s.jsx("h3",{style:{fontSize:16,fontWeight:700,color:"#0F3B3E"},children:"Belum Ada Pembayaran"}),s.jsx("p",{style:{fontSize:13,color:"#3A9EA3",marginTop:6},children:"Riwayat pembayaran santri belum tersedia"})]})]})]})},om=Qd({nis:sr().min(1,"NIS wajib diisi").max(20,"NIS maksimal 20 karakter"),nama:sr().min(1,"Nama wajib diisi").max(100,"Nama maksimal 100 karakter"),kelas:sr().min(1,"Kelas wajib diisi").max(20,"Kelas maksimal 20 karakter"),alamat:sr().optional(),no_hp:sr().optional(),no_hp_wali:sr().optional(),email_wali:sr().email("Email tidak valid").optional().or(mf("")),tahun_ajaran:sr().min(1,"Tahun ajaran wajib diisi")}),Jf={teal:"#3A9EA3"},Ln=({label:t,icon:e,error:r,children:a,span:i=!1})=>s.jsxs("div",{className:"ts-field",style:i?{gridColumn:"1 / -1"}:{},children:[s.jsxs("label",{className:"ts-label",children:[e&&s.jsx("span",{className:"ts-label-icon",children:s.jsx(e,{size:12,color:Jf.teal})}),t]}),a,r&&s.jsx("p",{className:"ts-error",children:r})]}),lm=()=>{var c,u,f,g,b,y,m,k;const t=na(),e=ia(),{register:r,handleSubmit:a,formState:{errors:i}}=Xd({resolver:du(om),defaultValues:{nis:"",nama:"",kelas:"",alamat:"",no_hp:"",no_hp_wali:"",email_wali:"",tahun_ajaran:new Date().getFullYear().toString()}}),n=_r({mutationFn:Ai.createSantri,onSuccess:()=>{e.invalidateQueries(["santri-search"]),mt.success("Santri berhasil ditambahkan"),t("/santri")},onError:N=>{var _,x;return mt.error(((x=(_=N.response)==null?void 0:_.data)==null?void 0:x.message)||"Gagal menambahkan santri")}}),l=N=>{const _=Object.fromEntries(Object.entries(N).filter(([,x])=>x!==""&&x!==void 0));n.mutate(_)};return s.jsx("div",{className:"ts-root",children:s.jsxs("div",{style:{maxWidth:860,margin:"0 auto",padding:"28px 24px",display:"flex",flexDirection:"column",gap:24},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14},children:[s.jsx("button",{className:"ts-back-btn",onClick:()=>t("/santri"),children:s.jsx(Vn,{size:18})}),s.jsxs("div",{children:[s.jsx("p",{style:{fontSize:".75rem",fontWeight:600,color:Jf.teal,letterSpacing:".08em",textTransform:"uppercase",marginBottom:3},children:"Manajemen Santri"}),s.jsx("h1",{className:"ts-page-title",children:"Tambah Santri"}),s.jsx("p",{style:{fontSize:".875rem",color:"#5a8a8d",marginTop:2},children:"Tambahkan data santri baru ke sistem"})]})]}),s.jsx("div",{className:"ts-card",children:s.jsxs("form",{onSubmit:a(l),children:[s.jsxs("div",{className:"ts-section-header",children:[s.jsx("div",{className:"ts-section-header-dot"}),"Data Santri"]}),s.jsxs("div",{style:{padding:"24px 28px",display:"flex",flexDirection:"column",gap:20},children:[s.jsxs("div",{className:"ts-field-grid",children:[s.jsx(Ln,{label:"NIS",icon:Wf,error:(c=i.nis)==null?void 0:c.message,children:s.jsx("input",{className:`ts-input mono${i.nis?" error":""}`,placeholder:"Masukkan NIS",...r("nis")})}),s.jsx(Ln,{label:"Nama Lengkap",icon:ko,error:(u=i.nama)==null?void 0:u.message,children:s.jsx("input",{className:`ts-input${i.nama?" error":""}`,placeholder:"Masukkan nama lengkap",...r("nama")})}),s.jsx(Ln,{label:"Kelas",icon:S2,error:(f=i.kelas)==null?void 0:f.message,children:s.jsx("input",{className:`ts-input${i.kelas?" error":""}`,placeholder:"Contoh: X, XI, XII",...r("kelas")})}),s.jsx(Ln,{label:"Tahun Ajaran",icon:Xl,error:(g=i.tahun_ajaran)==null?void 0:g.message,children:s.jsx("input",{className:`ts-input mono${i.tahun_ajaran?" error":""}`,placeholder:"Contoh: 2024/2025",...r("tahun_ajaran")})})]}),s.jsx(Ln,{label:"Alamat",icon:ec,error:(b=i.alamat)==null?void 0:b.message,span:!0,children:s.jsx("textarea",{className:`ts-input${i.alamat?" error":""}`,rows:3,placeholder:"Masukkan alamat lengkap santri",...r("alamat")})})]}),s.jsxs("div",{className:"ts-section-header",style:{marginTop:0},children:[s.jsx("div",{className:"ts-section-header-dot"}),"Data Wali / Orang Tua"]}),s.jsx("div",{style:{padding:"24px 28px"},children:s.jsxs("div",{className:"ts-field-grid",children:[s.jsx(Ln,{label:"No. HP Santri",icon:Cs,error:(y=i.no_hp)==null?void 0:y.message,children:s.jsx("input",{type:"tel",className:`ts-input mono${i.no_hp?" error":""}`,placeholder:"Nomor HP santri",...r("no_hp")})}),s.jsx(Ln,{label:"No. HP Wali",icon:Cs,error:(m=i.no_hp_wali)==null?void 0:m.message,children:s.jsx("input",{type:"tel",className:`ts-input mono${i.no_hp_wali?" error":""}`,placeholder:"Nomor HP wali",...r("no_hp_wali")})}),s.jsx(Ln,{label:"Email Wali",icon:ou,error:(k=i.email_wali)==null?void 0:k.message,span:!0,children:s.jsx("input",{type:"email",className:`ts-input${i.email_wali?" error":""}`,placeholder:"Email wali (opsional)",...r("email_wali")})})]})}),s.jsxs("div",{className:"ts-actions",children:[s.jsx("button",{type:"button",className:"btn-batal",onClick:()=>t("/santri"),children:"Batal"}),s.jsx("button",{type:"submit",className:"btn-simpan",disabled:n.isPending,children:n.isPending?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"ts-spinner"})," Menyimpan…"]}):s.jsxs(s.Fragment,{children:[s.jsx(tc,{size:15})," Simpan Santri"]})})]})]})})]})})},Qc=`
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

  .es-root {
    font-family: 'Plus Jakarta Sans', sans-serif;
    background: #F0F9FA;
    min-height: 100vh;
    padding: 24px 20px;
  }
  html.dark .es-root { background: #08131A; }

  /* -- Back button -- */
  .es-back-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 12px;
    background: #fff;
    border: 1.5px solid #C8E8EA;
    color: #1F6F74;
    cursor: pointer;
    transition: background 0.18s, border-color 0.18s, transform 0.18s;
    flex-shrink: 0;
  }
  .es-back-btn:hover {
    background: #E6F6F7;
    border-color: #3A9EA3;
    transform: translateX(-2px);
  }

  /* -- Card -- */
  .es-card {
    background: #fff;
    border: 1.5px solid #C8E8EA;
    border-radius: 28px;
    padding: 28px 24px;
    box-shadow: 0 2px 16px rgba(58,158,163,0.07);
  }
  html.dark .es-card {
    background: #112135;
    border-color: #1e3a4a;
    box-shadow: 0 2px 16px rgba(0,0,0,0.3);
  }

  @media (min-width: 640px) {
    .es-card { padding: 32px 36px; }
  }

  /* -- Section divider -- */
  .es-section-label {
    font-size: 11px;
    font-weight: 700;
    color: #3A9EA3;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .es-section-label::after {
    content: '';
    flex: 1;
    height: 1.5px;
    background: #E6F6F7;
    border-radius: 2px;
  }

  /* -- Form grid -- */
  .es-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }

  @media (min-width: 640px) {
    .es-grid { grid-template-columns: repeat(2, 1fr); }
  }

  /* -- Field wrapper -- */
  .es-field {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .es-label {
    font-size: 12px;
    font-weight: 700;
    color: #1F6F74;
    letter-spacing: 0.04em;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  html.dark .es-label { color: #5BC4C8; }

  .es-label-icon {
    width: 20px;
    height: 20px;
    border-radius: 6px;
    background: #E6F6F7;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: #1F6F74;
  }
  html.dark .es-label-icon { background: #0d1f30; }
  html.dark .es-label-icon { color: #5BC4C8; }

  /* -- Input -- */
  .es-input {
    width: 100%;
    padding: 11px 14px;
    border: 1.5px solid #C8E8EA;
    border-radius: 14px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #0F3B3E;
    background: #FAFEFE;
    outline: none;
    transition: border-color 0.18s, box-shadow 0.18s, background 0.18s;
    box-sizing: border-box;
  }
  html.dark .es-input {
    color: #e2e8f0;
    background: #0d1f30;
    border-color: #1e3a4a;
  }
  .es-input::placeholder { color: #9BB8BA; }
  html.dark .es-input::placeholder { color: #64748b; }
  .es-input:focus {
    border-color: #3A9EA3;
    background: #fff;
    box-shadow: 0 0 0 3px rgba(58,158,163,0.12);
  }
  html.dark .es-input:focus { background: #112135; }
  .es-input:hover:not(:focus) {
    border-color: #8ACFD2;
  }
  .es-input-error {
    border-color: #FCA5A5 !important;
    background: #FFF8F8;
  }
  .es-input-error:focus {
    border-color: #EF4444 !important;
    box-shadow: 0 0 0 3px rgba(239,68,68,0.10) !important;
  }

  /* -- Textarea -- */
  .es-textarea {
    width: 100%;
    padding: 11px 14px;
    border: 1.5px solid #C8E8EA;
    border-radius: 14px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #0F3B3E;
    background: #FAFEFE;
    outline: none;
    transition: border-color 0.18s, box-shadow 0.18s, background 0.18s;
    resize: vertical;
    min-height: 90px;
    box-sizing: border-box;
  }
  html.dark .es-textarea {
    color: #e2e8f0;
    background: #0d1f30;
    border-color: #1e3a4a;
  }
  .es-textarea::placeholder { color: #9BB8BA; }
  html.dark .es-textarea::placeholder { color: #64748b; }
  .es-textarea:focus {
    border-color: #3A9EA3;
    background: #fff;
    box-shadow: 0 0 0 3px rgba(58,158,163,0.12);
  }
  html.dark .es-textarea:focus { background: #112135; }
  .es-textarea:hover:not(:focus) {
    border-color: #8ACFD2;
  }

  /* -- Error message -- */
  .es-error {
    font-size: 11px;
    font-weight: 600;
    color: #DC2626;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .es-error::before {
    content: '!';
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #FEE2E2;
    color: #DC2626;
    font-size: 9px;
    font-weight: 800;
    flex-shrink: 0;
  }

  /* -- Toggle status -- */
  .es-toggle-wrap {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    border: 1.5px solid #C8E8EA;
    border-radius: 14px;
    background: #FAFEFE;
    cursor: pointer;
    transition: border-color 0.18s, background 0.18s;
    user-select: none;
  }
  html.dark .es-toggle-wrap {
    background: #0d1f30;
    border-color: #1e3a4a;
  }
  .es-toggle-wrap:hover {
    border-color: #3A9EA3;
    background: #F0F9FA;
  }
  html.dark .es-toggle-wrap:hover { background: #112135; }
  .es-toggle-wrap input[type="checkbox"] {
    display: none;
  }
  .es-toggle-track {
    width: 40px;
    height: 22px;
    border-radius: 999px;
    background: #D1D5DB;
    position: relative;
    transition: background 0.2s;
    flex-shrink: 0;
  }
  html.dark .es-toggle-track { background: #334155; }
  .es-toggle-track.checked {
    background: linear-gradient(135deg, #3A9EA3, #1F6F74);
  }
  .es-toggle-thumb {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0,0,0,0.2);
    transition: transform 0.2s;
  }
  .es-toggle-track.checked .es-toggle-thumb {
    transform: translateX(18px);
  }
  .es-toggle-text {
    font-size: 14px;
    font-weight: 600;
    color: #1C3F42;
  }
  html.dark .es-toggle-text { color: #e2e8f0; }
  .es-toggle-sub {
    font-size: 11px;
    color: #3A9EA3;
    margin-top: 1px;
    font-weight: 500;
  }
  html.dark .es-toggle-sub { color: #94a3b8; }

  /* -- Action buttons -- */
  .es-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    padding-top: 24px;
    border-top: 1.5px solid #E6F6F7;
    margin-top: 8px;
  }
  html.dark .es-actions { border-top-color: #1e3a4a; }

  .es-btn-cancel {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 24px;
    border-radius: 14px;
    background: #fff;
    border: 1.5px solid #C8E8EA;
    color: #1F6F74;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.18s, border-color 0.18s;
    white-space: nowrap;
  }
  html.dark .es-btn-cancel {
    background: #112135;
    border-color: #1e3a4a;
    color: #5BC4C8;
  }
  .es-btn-cancel:hover {
    background: #E6F6F7;
    border-color: #3A9EA3;
  }
  html.dark .es-btn-cancel:hover { background: #0d1f30; }

  .es-btn-save {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 28px;
    border-radius: 14px;
    background: linear-gradient(135deg, #E8920A 0%, #F5B044 100%);
    border: none;
    color: #fff;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 4px 14px rgba(232,146,10,0.35);
    transition: transform 0.18s, box-shadow 0.18s, opacity 0.18s;
    white-space: nowrap;
  }
  .es-btn-save:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(232,146,10,0.45);
  }
  .es-btn-save:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }

  /* -- Loading spinner inline -- */
  .es-spinner {
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255,255,255,0.4);
    border-top-color: #fff;
    border-radius: 50%;
    animation: es-spin 0.7s linear infinite;
    flex-shrink: 0;
  }
  @keyframes es-spin { to { transform: rotate(360deg); } }

  /* -- Not found card -- */
  .es-notfound {
    text-align: center;
    padding: 60px 24px;
  }
  .es-notfound-icon {
    width: 64px; height: 64px;
    border-radius: 20px;
    background: #FEE2E2;
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 16px;
  }
`,cm=Qd({nis:sr().min(1,"NIS wajib diisi").max(20,"NIS maksimal 20 karakter"),nama:sr().min(1,"Nama wajib diisi").max(100,"Nama maksimal 100 karakter"),kelas:sr().min(1,"Kelas wajib diisi").max(20,"Kelas maksimal 20 karakter"),alamat:sr().optional(),no_hp:sr().optional(),no_hp_wali:sr().optional(),email_wali:sr().email("Email tidak valid").optional().or(mf("")),tahun_ajaran:sr().min(1,"Tahun ajaran wajib diisi"),status_aktif:L1()}),Pn=({label:t,icon:e,error:r,children:a})=>s.jsxs("div",{className:"es-field",children:[s.jsxs("label",{className:"es-label",children:[s.jsx("span",{className:"es-label-icon",children:s.jsx(e,{size:12,color:"currentColor"})}),t]}),a,r&&s.jsx("p",{className:"es-error",children:r})]}),dm=()=>{var k,N,_,x,I,B,R,Z,ee;const{id:t}=Gl(),e=na(),r=ia(),{data:a,isLoading:i}=Pr({queryKey:["santri",t],queryFn:()=>Ai.getSantriById(t),enabled:!!t}),n=(k=a==null?void 0:a.data)==null?void 0:k.data,{register:l,handleSubmit:c,setValue:u,watch:f,formState:{errors:g}}=Xd({resolver:du(cm),defaultValues:{nis:"",nama:"",kelas:"",alamat:"",no_hp:"",no_hp_wali:"",email_wali:"",tahun_ajaran:"",status_aktif:!0}}),b=f("status_aktif");pf.useEffect(()=>{n&&(u("nis",n.nis||""),u("nama",n.nama||""),u("kelas",n.kelas||""),u("alamat",n.alamat||""),u("no_hp",n.no_hp||""),u("no_hp_wali",n.no_hp_wali||""),u("email_wali",n.email_wali||""),u("tahun_ajaran",n.tahun_ajaran||""),u("status_aktif",n.status_aktif??!0))},[n,u]);const y=_r({mutationFn:A=>Ai.updateSantri(t,A),onSuccess:()=>{r.invalidateQueries(["santri-search"]),r.invalidateQueries(["santri",t]),mt.success("Santri berhasil diperbarui"),e("/santri")},onError:A=>{var S,M;mt.error(((M=(S=A.response)==null?void 0:S.data)==null?void 0:M.message)||"Gagal memperbarui santri")}}),m=A=>{const S=Object.fromEntries(Object.entries(A).filter(([M,ne])=>ne!==""&&ne!==void 0));y.mutate(S)};return i?s.jsxs("div",{className:"es-root",style:{display:"flex",justifyContent:"center",paddingTop:80},children:[s.jsx("style",{children:Qc}),s.jsx(jr,{})]}):n?s.jsxs("div",{className:"es-root",style:{maxWidth:860,margin:"0 auto"},children:[s.jsx("style",{children:Qc}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16,marginBottom:28},children:[s.jsx("button",{className:"es-back-btn",onClick:()=>e("/santri"),children:s.jsx(Vn,{size:18})}),s.jsxs("div",{children:[s.jsx("h1",{style:{fontSize:26,fontWeight:800,color:"var(--text)",margin:0},children:"Edit Santri"}),s.jsxs("p",{style:{fontSize:13,color:"var(--text-muted)",margin:"2px 0 0",fontWeight:500},children:["Edit data santri: ",s.jsx("strong",{style:{color:"var(--accent-dark)"},children:n.nama})]})]})]}),s.jsx("div",{className:"es-card",children:s.jsxs("form",{onSubmit:c(m),children:[s.jsx("p",{className:"es-section-label",children:"Data Pokok"}),s.jsxs("div",{className:"es-grid",style:{marginBottom:28},children:[s.jsx(Pn,{label:"NIS",icon:Wf,error:(N=g.nis)==null?void 0:N.message,children:s.jsx("input",{className:`es-input${g.nis?" es-input-error":""}`,placeholder:"Masukkan NIS",...l("nis")})}),s.jsx(Pn,{label:"Nama Lengkap",icon:ko,error:(_=g.nama)==null?void 0:_.message,children:s.jsx("input",{className:`es-input${g.nama?" es-input-error":""}`,placeholder:"Masukkan nama lengkap",...l("nama")})}),s.jsx(Pn,{label:"Kelas",icon:iu,error:(x=g.kelas)==null?void 0:x.message,children:s.jsx("input",{className:`es-input${g.kelas?" es-input-error":""}`,placeholder:"Contoh: X, XI, XII",...l("kelas")})}),s.jsx(Pn,{label:"Tahun Ajaran",icon:Xl,error:(I=g.tahun_ajaran)==null?void 0:I.message,children:s.jsx("input",{className:`es-input${g.tahun_ajaran?" es-input-error":""}`,placeholder:"Contoh: 2024/2025",...l("tahun_ajaran")})})]}),s.jsx("p",{className:"es-section-label",children:"Kontak"}),s.jsxs("div",{className:"es-grid",style:{marginBottom:28},children:[s.jsx(Pn,{label:"No. HP Santri",icon:Cs,error:(B=g.no_hp)==null?void 0:B.message,children:s.jsx("input",{className:`es-input${g.no_hp?" es-input-error":""}`,type:"tel",placeholder:"Masukkan nomor HP santri",...l("no_hp")})}),s.jsx(Pn,{label:"No. HP Wali",icon:Cs,error:(R=g.no_hp_wali)==null?void 0:R.message,children:s.jsx("input",{className:`es-input${g.no_hp_wali?" es-input-error":""}`,type:"tel",placeholder:"Masukkan nomor HP wali",...l("no_hp_wali")})}),s.jsx(Pn,{label:"Email Wali",icon:ou,error:(Z=g.email_wali)==null?void 0:Z.message,children:s.jsx("input",{className:`es-input${g.email_wali?" es-input-error":""}`,type:"email",placeholder:"Masukkan email wali",...l("email_wali")})})]}),s.jsx("p",{className:"es-section-label",children:"Lainnya"}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[s.jsx(Pn,{label:"Alamat",icon:ec,error:(ee=g.alamat)==null?void 0:ee.message,children:s.jsx("textarea",{className:"es-textarea",rows:3,placeholder:"Masukkan alamat lengkap",...l("alamat")})}),s.jsxs("div",{className:"es-field",children:[s.jsxs("label",{className:"es-label",children:[s.jsx("span",{className:"es-label-icon",children:s.jsx(q2,{size:12,color:"currentColor"})}),"Status Santri"]}),s.jsxs("label",{className:"es-toggle-wrap",style:{maxWidth:320},children:[s.jsx("input",{type:"checkbox",...l("status_aktif")}),s.jsx("div",{className:`es-toggle-track${b?" checked":""}`,children:s.jsx("div",{className:"es-toggle-thumb"})}),s.jsxs("div",{children:[s.jsx("p",{className:"es-toggle-text",children:b?"Aktif":"Tidak Aktif"}),s.jsx("p",{className:"es-toggle-sub",children:b?"Santri terdaftar dan aktif":"Santri tidak aktif / alumni"})]})]})]})]}),s.jsxs("div",{className:"es-actions",children:[s.jsx("button",{type:"button",className:"es-btn-cancel",onClick:()=>e("/santri"),children:"Batal"}),s.jsxs("button",{type:"submit",className:"es-btn-save",disabled:y.isPending,children:[y.isPending?s.jsx("span",{className:"es-spinner"}):s.jsx(tc,{size:15}),y.isPending?"Menyimpan...":"Simpan Perubahan"]})]})]})})]}):s.jsxs("div",{className:"es-root",style:{maxWidth:600,margin:"0 auto"},children:[s.jsx("style",{children:Qc}),s.jsx("div",{className:"es-card",children:s.jsxs("div",{className:"es-notfound",children:[s.jsx("div",{className:"es-notfound-icon",children:s.jsx(ko,{size:28,color:"#DC2626"})}),s.jsx("h3",{style:{fontSize:16,fontWeight:700,color:"var(--text)",margin:"0 0 8px"},children:"Santri Tidak Ditemukan"}),s.jsx("p",{style:{fontSize:13,color:"var(--text-muted)",margin:"0 0 24px"},children:"Data santri dengan ID ini tidak tersedia"}),s.jsxs("button",{className:"es-btn-cancel",onClick:()=>e("/santri"),children:[s.jsx(Vn,{size:15}),"Kembali"]})]})})]})},mo={getTagihan:(t={})=>lt.get("/tagihan",{params:t}),getTagihanById:t=>lt.get(`/tagihan/${t}`),getTagihanAktif:()=>lt.get("/tagihan/aktif"),createTagihan:t=>lt.post("/tagihan",t),updateTagihan:(t,e)=>lt.put(`/tagihan/${t}`,e),deleteTagihan:t=>lt.delete(`/tagihan/${t}`)},um=()=>{if(document.getElementById("select-input-styles"))return;const t=document.createElement("style");t.id="select-input-styles",t.textContent=`
    .si-wrapper {
      position: relative;
      font-family: 'DM Sans', system-ui, sans-serif;
    }
    .si-wrapper *, .si-wrapper *::before, .si-wrapper *::after {
      box-sizing: border-box;
    }

    /* ── Label ── */
    .si-label {
      display: block;
      font-size: 11.5px;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: #1F6F74;
      margin-bottom: 6px;
      transition: color 0.2s;
      user-select: none;
    }
    .si-label.si-label-error { color: #c0392b; }
    .si-label .si-required { color: #E8920A; margin-left: 2px; }

    /* ── Trigger button ── */
    .si-trigger {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      padding: 10px 14px;
      background: #fff;
      border: 1.5px solid #b2d8da;
      border-radius: 10px;
      cursor: pointer;
      transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
      min-height: 46px;
      outline: none;
      text-align: left;
      user-select: none;
    }
    .si-trigger:hover:not(.si-trigger-disabled) {
      border-color: #3A9EA3;
      background: #f0fafa;
    }
    .si-trigger.si-trigger-open {
      border-color: #3A9EA3;
      box-shadow: 0 0 0 3px rgba(58,158,163,0.15);
      background: #fff;
    }
    .si-trigger.si-trigger-error {
      border-color: #e74c3c;
      box-shadow: 0 0 0 3px rgba(231,76,60,0.1);
    }
    .si-trigger.si-trigger-disabled {
      background: #f5f7f7;
      border-color: #d5e6e7;
      opacity: 0.7;
      cursor: not-allowed;
    }

    /* Trigger icon left */
    .si-trigger-icon {
      flex-shrink: 0;
      color: #8ab8bb;
      display: flex;
      align-items: center;
      transition: color 0.2s;
    }
    .si-trigger.si-trigger-open .si-trigger-icon,
    .si-trigger.si-has-value .si-trigger-icon {
      color: #1F6F74;
    }

    /* Trigger text */
    .si-trigger-text {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .si-trigger-placeholder {
      font-size: 14px;
      color: #9bb8ba;
    }
    .si-trigger-value {
      font-size: 14px;
      font-weight: 600;
      color: #1F6F74;
    }

    /* Counter badge */
    .si-badge {
      flex-shrink: 0;
      font-size: 11px;
      background: rgba(58,158,163,0.1);
      color: #1F6F74;
      font-weight: 600;
      padding: 2px 8px;
      border-radius: 20px;
      white-space: nowrap;
    }

    /* Chevron */
    .si-chevron {
      flex-shrink: 0;
      color: #8ab8bb;
      transition: transform 0.22s ease, color 0.2s;
    }
    .si-trigger.si-trigger-open .si-chevron {
      transform: rotate(180deg);
      color: #3A9EA3;
    }

    /* ── Dropdown panel ── */
    .si-dropdown {
      position: absolute;
      left: 0;
      right: 0;
      z-index: 999;
      background: #fff;
      border: 1.5px solid #b2d8da;
      border-radius: 12px;
      box-shadow: 0 8px 28px rgba(31,111,116,0.14), 0 2px 8px rgba(0,0,0,0.06);
      overflow: hidden;
      transform-origin: top center;
      animation: si-pop 0.18s cubic-bezier(0.34,1.26,0.64,1) both;
    }
    .si-dropdown.si-drop-up {
      bottom: calc(100% + 6px);
      top: auto;
      transform-origin: bottom center;
      animation: si-pop-up 0.18s cubic-bezier(0.34,1.26,0.64,1) both;
    }
    .si-dropdown.si-drop-down {
      top: calc(100% + 6px);
    }

    @keyframes si-pop {
      from { opacity: 0; transform: scaleY(0.88) translateY(-4px); }
      to   { opacity: 1; transform: scaleY(1)    translateY(0);    }
    }
    @keyframes si-pop-up {
      from { opacity: 0; transform: scaleY(0.88) translateY(4px); }
      to   { opacity: 1; transform: scaleY(1)    translateY(0);   }
    }

    /* ── Option list ── */
    .si-options {
      max-height: 220px;
      overflow-y: auto;
      padding: 6px;
      scrollbar-width: thin;
      scrollbar-color: #b2d8da transparent;
    }
    .si-options::-webkit-scrollbar { width: 4px; }
    .si-options::-webkit-scrollbar-track { background: transparent; }
    .si-options::-webkit-scrollbar-thumb { background: #b2d8da; border-radius: 99px; }

    /* ── Option item ── */
    .si-option {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 9px 12px;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.13s, color 0.13s;
      font-size: 14px;
      font-weight: 500;
      color: #2d4f52;
      outline: none;
    }
    .si-option:hover, .si-option.si-option-focused {
      background: #f0fafa;
      color: #1F6F74;
    }
    .si-option.si-option-selected {
      background: linear-gradient(135deg, #e8f6f7, #d0ecee);
      color: #1F6F74;
      font-weight: 700;
    }
    .si-option.si-option-selected:hover {
      background: linear-gradient(135deg, #d0ecee, #b8e3e6);
    }

    .si-option-icon {
      flex-shrink: 0;
      font-size: 17px;
      display: flex;
      align-items: center;
    }
    .si-option-label { flex: 1; }
    .si-option-check {
      flex-shrink: 0;
      color: #3A9EA3;
      opacity: 0;
      transition: opacity 0.15s;
    }
    .si-option.si-option-selected .si-option-check { opacity: 1; }

    /* Empty state */
    .si-empty {
      padding: 1.5rem;
      text-align: center;
      color: #9bb8ba;
      font-size: 13px;
    }

    /* ── Error message ── */
    .si-error {
      display: flex;
      align-items: center;
      gap: 5px;
      margin-top: 6px;
      font-size: 12px;
      color: #e74c3c;
      font-weight: 500;
    }
  `,document.head.appendChild(t)},Or=({label:t,value:e,onChange:r,options:a=[],placeholder:i="Pilih opsi...",error:n,disabled:l=!1,required:c=!1,className:u=""})=>{um();const[f,g]=me.useState(!1),[b,y]=me.useState(!1),[m,k]=me.useState(-1),N=me.useRef(null),_=me.useRef(null),x=me.useRef(null),I=a.find(S=>S.value===e)||null,B=a.findIndex(S=>S.value===e);me.useEffect(()=>{const S=M=>{N.current&&!N.current.contains(M.target)&&g(!1)};return document.addEventListener("mousedown",S),()=>document.removeEventListener("mousedown",S)},[]);const R=me.useCallback(()=>{if(!N.current)return;const S=N.current.getBoundingClientRect(),M=window.innerHeight-S.bottom,ne=S.top;y(M<240&&ne>M)},[]),Z=()=>{l||(R(),g(S=>!S),k(B>=0?B:0))},ee=S=>{var M;r({target:{value:S.value}}),g(!1),(M=_.current)==null||M.focus()},A=S=>{if(!l){if(!f){["Enter"," ","ArrowDown","ArrowUp"].includes(S.key)&&(S.preventDefault(),R(),g(!0),k(B>=0?B:0));return}switch(S.key){case"ArrowDown":S.preventDefault(),k(M=>Math.min(M+1,a.length-1));break;case"ArrowUp":S.preventDefault(),k(M=>Math.max(M-1,0));break;case"Enter":case" ":S.preventDefault(),m>=0&&ee(a[m]);break;case"Escape":case"Tab":g(!1);break}}};return me.useEffect(()=>{if(!f||m<0||!x.current)return;const S=x.current.querySelector(`[data-idx="${m}"]`);S==null||S.scrollIntoView({block:"nearest"})},[m,f]),s.jsxs("div",{ref:N,className:`si-wrapper ${u}`,children:[t&&s.jsxs("label",{className:`si-label ${n?"si-label-error":""}`,children:[t,c&&s.jsx("span",{className:"si-required",children:"*"})]}),s.jsxs("div",{style:{position:"relative"},children:[s.jsxs("button",{ref:_,type:"button",className:["si-trigger",f?"si-trigger-open":"",n?"si-trigger-error":"",l?"si-trigger-disabled":"",I?"si-has-value":""].filter(Boolean).join(" "),onClick:Z,onKeyDown:A,disabled:l,"aria-haspopup":"listbox","aria-expanded":f,children:[(I==null?void 0:I.icon)&&s.jsx("span",{className:"si-trigger-icon",children:I.icon}),s.jsx("span",{className:"si-trigger-text",children:I?s.jsx("span",{className:"si-trigger-value",children:I.label}):s.jsx("span",{className:"si-trigger-placeholder",children:i})}),I&&s.jsxs("span",{className:"si-badge",children:[B+1," / ",a.length]}),s.jsx(qf,{size:16,className:"si-chevron",strokeWidth:2.5})]}),f&&s.jsx("div",{ref:x,className:`si-dropdown ${b?"si-drop-up":"si-drop-down"}`,role:"listbox",children:s.jsx("div",{className:"si-options",children:a.length===0?s.jsx("div",{className:"si-empty",children:"Tidak ada opsi tersedia"}):a.map((S,M)=>s.jsxs("div",{"data-idx":M,role:"option","aria-selected":S.value===e,className:["si-option",S.value===e?"si-option-selected":"",m===M?"si-option-focused":""].filter(Boolean).join(" "),onMouseDown:ne=>{ne.preventDefault(),ee(S)},onMouseEnter:()=>k(M),children:[S.icon&&s.jsx("span",{className:"si-option-icon",children:S.icon}),s.jsx("span",{className:"si-option-label",children:S.label}),s.jsx(y2,{size:14,className:"si-option-check",strokeWidth:3})]},S.value))})})]}),n&&s.jsxs("p",{className:"si-error",children:[s.jsx("span",{children:"⚠"})," ",n]})]})},Qf=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],hm=["Min","Sen","Sel","Rab","Kam","Jum","Sab"],fm=["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];function jh(t){return t<10?"0"+t:String(t)}function _n(t){return t.getFullYear()+"-"+jh(t.getMonth()+1)+"-"+jh(t.getDate())}function pm(t){if(!t)return null;const[e,r,a]=t.split("-").map(Number);return new Date(e,r-1,a)}function Xc(t){return`${fm[t.getDay()]}, ${t.getDate()} ${Qf[t.getMonth()]} ${t.getFullYear()}`}const Kn=({label:t,value:e,onChange:r,minDate:a,maxDate:i,error:n,disabled:l=!1,required:c=!1,placeholder:u="Pilih tanggal...",className:f=""})=>{const g=new Date;g.setHours(0,0,0,0);const b=pm(e),[y,m]=me.useState(!1),[k,N]=me.useState(()=>{const M=b||g;return new Date(M.getFullYear(),M.getMonth(),1)}),_=me.useRef(null);me.useEffect(()=>{const M=ne=>{_.current&&!_.current.contains(ne.target)&&m(!1)};return document.addEventListener("mousedown",M),()=>document.removeEventListener("mousedown",M)},[]),me.useEffect(()=>{b&&N(new Date(b.getFullYear(),b.getMonth(),1))},[e]);const x=M=>{N(ne=>new Date(ne.getFullYear(),ne.getMonth()+M,1))},I=M=>{r(_n(M)),setTimeout(()=>m(!1),150)},B=M=>{M.stopPropagation(),r("")},R=()=>{N(new Date(g.getFullYear(),g.getMonth(),1)),r(_n(g)),setTimeout(()=>m(!1),150)},Z=()=>{const M=k.getFullYear(),ne=k.getMonth(),E=new Date(M,ne,1).getDay(),T=new Date(M,ne+1,0).getDate(),K=[];for(let ce=0;ce<E;ce++)K.push({date:new Date(M,ne,-(E-1-ce)),other:!0});for(let ce=1;ce<=T;ce++)K.push({date:new Date(M,ne,ce),other:!1});const H=42-K.length;for(let ce=1;ce<=H;ce++){const ue=ne===11?M+1:M,pe=ne===11?0:ne+1;K.push({date:new Date(ue,pe,ce),other:!0})}return K},ee=M=>!!(a&&_n(M)<a||i&&_n(M)>i),A=M=>b&&_n(M)===_n(b),S=M=>_n(M)===_n(g);return s.jsxs("div",{ref:_,className:`di-root ${f}`,children:[t&&s.jsxs("label",{className:"di-label",children:[t,c&&s.jsx("span",{className:"di-req",children:" *"})]}),s.jsxs("div",{className:["di-trigger",y?"di-open":"",e?"di-has-val":"",n?"di-error":"",l?"di-disabled":""].join(" "),onClick:()=>!l&&m(M=>!M),role:"button",tabIndex:l?-1:0,onKeyDown:M=>{(M.key==="Enter"||M.key===" ")&&(M.preventDefault(),l||m(ne=>!ne)),M.key==="Escape"&&m(!1)},"aria-haspopup":"true","aria-expanded":y,children:[s.jsx(Xl,{size:18,className:"di-cal-icon",strokeWidth:1.8}),s.jsx("div",{className:"di-text",children:e?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"di-val",children:Xc(b)}),s.jsx("div",{className:"di-raw",children:e})]}):s.jsx("span",{className:"di-ph",children:u})}),e&&s.jsx("span",{className:"di-pill",children:"Dipilih"}),s.jsx(qf,{size:15,className:"di-chev",strokeWidth:2.5})]}),y&&s.jsxs("div",{className:"di-popup",role:"dialog","aria-label":"Pilih tanggal",children:[s.jsxs("div",{className:"di-popup-head",children:[s.jsx("div",{className:"di-popup-sub",children:t||"Tanggal"}),s.jsx("div",{className:"di-popup-date",children:b?Xc(b):"—"})]}),s.jsxs("div",{className:"di-nav",children:[s.jsxs("span",{className:"di-nav-month",children:[Qf[k.getMonth()]," ",k.getFullYear()]}),s.jsxs("div",{className:"di-nav-btns",children:[s.jsx("button",{className:"di-nav-btn",onClick:()=>x(-1),"aria-label":"Bulan sebelumnya",children:s.jsx(su,{size:14,strokeWidth:2.5})}),s.jsx("button",{className:"di-nav-btn",onClick:()=>x(1),"aria-label":"Bulan berikutnya",children:s.jsx(Zl,{size:14,strokeWidth:2.5})})]})]}),s.jsx("div",{className:"di-dow",children:hm.map(M=>s.jsx("span",{children:M},M))}),s.jsx("div",{className:"di-days",children:Z().map(({date:M,other:ne},E)=>{const T=ee(M);return s.jsx("div",{className:["di-day",ne?"di-day-other":"",S(M)?"di-day-today":"",A(M)?"di-day-selected":"",T?"di-day-disabled":""].join(" "),onClick:()=>!T&&I(M),role:"button",tabIndex:T?-1:0,"aria-label":Xc(M),"aria-pressed":A(M),onKeyDown:K=>{K.key==="Enter"&&!T&&I(M)},children:M.getDate()},E)})}),s.jsxs("div",{className:"di-footer",children:[s.jsx("button",{className:"di-btn-clear",onClick:B,children:"Hapus"}),s.jsx("button",{className:"di-btn-today",onClick:R,children:"Hari Ini"})]})]}),n&&s.jsxs("p",{className:"di-error-msg",children:["⚠ ",n]})]})},rc=me.forwardRef(({label:t,value:e="",onChange:r,placeholder:a="0",error:i,disabled:n=!1,required:l=!1,className:c="",...u},f)=>{const[g,b]=me.useState(""),y=x=>!x||x==="0"?"":new Intl.NumberFormat("id-ID").format(Number(x)),m=x=>{if(!x)return"";const I=parseFloat(x.toString().replace(/,/g,""));return isNaN(I)?"":Math.floor(I).toString()};me.useEffect(()=>{if(e!=null){const x=m(e);b(y(x))}},[e]);const k=x=>{const B=x.target.value.replace(/[^\d]/g,"");b(y(B)),r==null||r({...x,target:{...x.target,value:B}})},N=()=>{g&&b(g.replace(/[^\d]/g,""))},_=()=>{const x=g.replace(/[^\d]/g,"");b(y(x))};return s.jsxs("div",{className:`si-wrapper ${c}`,children:[t&&s.jsxs("label",{className:`si-label ${i?"si-label-error":""}`,children:[t,l&&s.jsx("span",{className:"si-required",children:"*"})]}),s.jsx("input",{...u,ref:f,type:"text",inputMode:"numeric",value:g,onChange:k,onFocus:N,onBlur:_,placeholder:a,disabled:n,className:["currency-input",i?"currency-input-error":"",n?"currency-input-disabled":""].join(" ")}),i&&s.jsxs("p",{className:"si-error",children:[s.jsx("span",{children:"!"})," ",i]})]})});rc.displayName="CurrencyInput";const mm=[{value:"biaya_pembangunan",label:"Biaya Pembangunan"},{value:"biaya_tahunan",label:"Biaya Tahunan"},{value:"biaya_spp",label:"Biaya SPP"},{value:"biaya_akhir",label:"Biaya Akhir"},{value:"lainnya",label:"Lainnya"}],gm=[{value:"cash",label:"Cash"},{value:"transfer",label:"Transfer"}],bm={1:"Januari",2:"Februari",3:"Maret",4:"April",5:"Mei",6:"Juni",7:"Juli",8:"Agustus",9:"September",10:"Oktober",11:"November",12:"Desember"},kh=()=>{var U,Y,re;const t=Vu("/santri/:id/tambah-pembayaran"),e=Vu("/pembayaran/edit/:id"),r=!!e,a=(U=e==null?void 0:e.params)==null?void 0:U.id,i=(Y=t==null?void 0:t.params)==null?void 0:Y.id,n=na(),l=ia(),[c,u]=me.useState({tanggal:new Date().toISOString().split("T")[0],bulan:"",tahun:"",nominal:"",kategori:"",tagihan_id:null,metode_pembayaran:"",keterangan:""}),[f,g]=me.useState(null),[b,y]=me.useState(null),[m,k]=me.useState({}),{data:N,isLoading:_}=Pr({queryKey:["pembayaran-detail",a],queryFn:()=>cs.getPembayaranById(a),enabled:r}),x=(re=N==null?void 0:N.data)==null?void 0:re.data,I=i||(x==null?void 0:x.santri_id),B=r?"Edit Pembayaran":"Tambah Pembayaran",R=r?"/pembayaran":`/santri/${I}`,{data:Z,isLoading:ee}=Pr({queryKey:["santri",I],queryFn:async()=>(await Ai.getSantriById(I)).data,enabled:!!I}),A=Z==null?void 0:Z.data,{data:S,isLoading:M,error:ne}=Pr({queryKey:["tagihan-aktif"],queryFn:async()=>(await mo.getTagihanAktif()).data}),E=me.useMemo(()=>{var Q;const V=S;return Array.isArray(V)?V:Array.isArray(V==null?void 0:V.data)?V.data:Array.isArray((Q=V==null?void 0:V.data)==null?void 0:Q.data)?V.data.data:[]},[S]);me.useEffect(()=>{var V;!r||!x||u({tanggal:((V=x.tanggal)==null?void 0:V.slice(0,10))||new Date().toISOString().split("T")[0],bulan:x.bulan?String(x.bulan):"",tahun:x.tahun?String(x.tahun):"",nominal:x.nominal?String(x.nominal):"",kategori:x.kategori||"",tagihan_id:x.tagihan_id||null,metode_pembayaran:x.metode_pembayaran||"",keterangan:x.keterangan||""})},[r,x]);const T=me.useMemo(()=>c.kategori?E.filter(V=>V.kategori===c.kategori):[],[c.kategori,E]),K=me.useMemo(()=>[...new Set(T.map(Q=>Q.tahun))].sort((Q,se)=>se-Q).map(Q=>({value:String(Q),label:String(Q)})),[T]),H=me.useMemo(()=>c.kategori!=="biaya_spp"||!c.tahun?[]:[...new Set(T.filter(Q=>Number(Q.tahun)===Number(c.tahun)).map(Q=>Q.bulan))].sort((Q,se)=>Q-se).map(Q=>({value:String(Q),label:bm[Q]||`Bulan ${Q}`})),[T,c.kategori,c.tahun]),ce=me.useMemo(()=>!c.kategori||!c.tahun?null:c.kategori==="biaya_spp"?c.bulan?T.find(V=>Number(V.tahun)===Number(c.tahun)&&Number(V.bulan)===Number(c.bulan)):null:T.find(V=>Number(V.tahun)===Number(c.tahun)),[c.kategori,c.tahun,c.bulan,T]);me.useEffect(()=>{ce&&u(V=>{var Q;return{...V,tagihan_id:ce.id,nominal:V.nominal||((Q=ce.nominal)==null?void 0:Q.toString())||""}})},[ce]);const ue=_r({mutationFn:V=>cs.createPembayaran(V),onSuccess:()=>{mt.success("Pembayaran berhasil ditambahkan"),l.invalidateQueries({queryKey:["pembayaran-santri",I]}),n(`/santri/${I}`)},onError:V=>{var Q,se;return mt.error(((se=(Q=V==null?void 0:V.response)==null?void 0:Q.data)==null?void 0:se.message)||"Gagal menambahkan pembayaran")}}),pe=_r({mutationFn:V=>cs.updatePembayaran(a,V),onSuccess:()=>{mt.success("Pembayaran berhasil diperbarui"),l.invalidateQueries({queryKey:["pembayaran"]}),l.invalidateQueries({queryKey:["pembayaran-santri",I]}),n("/pembayaran")},onError:V=>{var Q,se;return mt.error(((se=(Q=V==null?void 0:V.response)==null?void 0:Q.data)==null?void 0:se.message)||"Gagal memperbarui pembayaran")}}),de=()=>{const V={};return c.tanggal||(V.tanggal="Tanggal pembayaran wajib diisi"),c.kategori||(V.kategori="Kategori pembayaran wajib dipilih"),c.kategori!=="lainnya"&&!c.tahun&&(V.tahun="Tahun pembayaran wajib dipilih"),c.kategori==="biaya_spp"&&!c.bulan&&(V.bulan="Bulan pembayaran wajib dipilih"),c.nominal||(V.nominal="Jumlah pembayaran wajib diisi"),c.metode_pembayaran||(V.metode_pembayaran="Metode pembayaran wajib dipilih"),k(V),Object.keys(V).length===0},fe=V=>Q=>{const se=Q.target.value;if(V==="kategori"){u(Ne=>({...Ne,kategori:se,tahun:se==="lainnya"?"0":"",bulan:se==="lainnya"?"0":"",nominal:"",tagihan_id:null}));return}if(V==="tahun"){u(Ne=>({...Ne,tahun:se,bulan:"",nominal:"",tagihan_id:null}));return}if(V==="bulan"){u(Ne=>({...Ne,bulan:se,nominal:"",tagihan_id:null}));return}u(Ne=>({...Ne,[V]:se}))},ve=V=>{u(Q=>({...Q,tanggal:V}))},Ie=V=>{const Q=V.target.files[0];if(!Q)return;if(!["image/jpeg","image/jpg","image/png","application/pdf"].includes(Q.type)){mt.error("File harus berupa JPG, PNG, atau PDF");return}if(Q.size>5*1024*1024){mt.error("Ukuran file maksimal 5MB");return}if(g(Q),Q.type.startsWith("image/")){const Ne=new FileReader;Ne.onload=Se=>y(Se.target.result),Ne.readAsDataURL(Q)}else y(null)},C=V=>{if(V.preventDefault(),!de())return;const Q=new FormData;Q.append("santri_id",Number(I)),ce!=null&&ce.id&&Q.append("tagihan_id",ce.id),Q.append("tanggal",c.tanggal),Q.append("bulan",c.kategori==="biaya_spp"?Number(c.bulan):0),Q.append("tahun",Number(c.tahun)),Q.append("nominal",Number(c.nominal)),Q.append("kategori",c.kategori),Q.append("metode_pembayaran",c.metode_pembayaran),Q.append("keterangan",c.keterangan),f&&Q.append("bukti_nota",f),r?pe.mutate(Q):ue.mutate(Q)};if(ee||M||r&&_)return s.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"4rem"},children:s.jsx(jr,{})});if(ne)return s.jsx("div",{style:{padding:"1.5rem"},children:s.jsx("div",{style:{background:"var(--card)",borderRadius:"1rem",border:"1.5px solid var(--border)",padding:"2rem",textAlign:"center"},children:s.jsx("p",{style:{color:"#dc2626",fontWeight:600},children:"Gagal mengambil data tagihan"})})});const z=r?pe.isPending:ue.isPending;return s.jsxs("div",{className:"tp-root",children:[s.jsx("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"1rem",marginBottom:"1.75rem"},children:s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.875rem"},children:[s.jsx("button",{className:"tp-back-btn",onClick:()=>n(R),children:s.jsx(Vn,{style:{width:16,height:16}})}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.625rem"},children:[s.jsx("span",{style:{display:"inline-block",width:4,height:28,borderRadius:99,flexShrink:0,background:"linear-gradient(180deg, var(--amber-light), var(--amber))"}}),s.jsxs("div",{children:[s.jsx("h1",{style:{fontSize:"1.5rem",fontWeight:800,color:"var(--text)",letterSpacing:"-0.02em",margin:0},children:B}),s.jsxs("p",{style:{color:"var(--text-muted)",fontSize:"0.8125rem",marginTop:2},children:["Input pembayaran untuk santri ",A==null?void 0:A.nama]})]})]})]})}),s.jsx("div",{className:"tp-card",children:s.jsxs("form",{onSubmit:C,children:[s.jsx("p",{className:"tp-section-title",children:"Detail Tagihan"}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"1.25rem",marginBottom:"1.25rem"},children:[s.jsx(Or,{label:"Kategori Pembayaran",options:mm,value:c.kategori,onChange:fe("kategori"),error:m.kategori,placeholder:"Pilih kategori...",required:!0}),c.kategori&&c.kategori!=="lainnya"&&s.jsx(Or,{label:"Tahun",options:K,value:c.tahun,onChange:fe("tahun"),error:m.tahun,placeholder:"Pilih tahun...",required:!0}),c.kategori==="biaya_spp"&&c.tahun&&s.jsx(Or,{label:"Bulan",options:H,value:c.bulan,onChange:fe("bulan"),error:m.bulan,placeholder:"Pilih bulan...",required:!0})]}),s.jsx("hr",{className:"tp-divider"}),s.jsx("p",{className:"tp-section-title",children:"Informasi Pembayaran"}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"1.25rem",marginBottom:"1.25rem"},children:[s.jsx(Kn,{label:"Tanggal Pembayaran",value:c.tanggal,onChange:ve,error:m.tanggal,required:!0}),s.jsx(rc,{label:"Jumlah Pembayaran",value:c.nominal,onChange:V=>{u(Q=>({...Q,nominal:V.target.value})),m.nominal&&k(Q=>({...Q,nominal:""}))},error:m.nominal,required:!0}),s.jsx(Or,{label:"Metode Pembayaran",options:gm,value:c.metode_pembayaran,onChange:fe("metode_pembayaran"),error:m.metode_pembayaran,placeholder:"Pilih metode...",required:!0})]}),s.jsx("hr",{className:"tp-divider"}),s.jsx("p",{className:"tp-section-title",children:"Tambahan"}),s.jsxs("div",{style:{marginBottom:"1.25rem"},children:[s.jsx("label",{className:"tp-label",children:"Keterangan"}),s.jsx("textarea",{className:"tp-textarea",placeholder:"Keterangan tambahan (opsional)",value:c.keterangan,onChange:fe("keterangan")})]}),s.jsxs("div",{style:{marginBottom:"1.25rem"},children:[s.jsxs("label",{className:"tp-label",children:["Upload Nota ",s.jsx("span",{style:{color:"#9bbfc1",textTransform:"none",letterSpacing:0,fontWeight:500},children:"(opsional)"})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"0.625rem"},children:[s.jsx("input",{id:"bukti_nota",type:"file",accept:"image/*,.pdf",onChange:Ie,style:{display:"none"}}),s.jsx("label",{htmlFor:"bukti_nota",className:"tp-upload-label",children:"Pilih File"}),f&&s.jsx("span",{className:"tp-upload-name",children:f.name})]}),b&&s.jsx("div",{className:"tp-preview",children:s.jsx("img",{src:b,alt:"Preview Nota"})}),s.jsx("p",{className:"tp-upload-hint",children:"Format: JPG, PNG, PDF. Maksimal 5MB."})]}),s.jsx("hr",{className:"tp-divider"}),s.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.75rem"},children:[s.jsx("button",{type:"submit",className:"tp-btn-primary",disabled:z,children:z?"Menyimpan...":r?"Simpan Perubahan":"Simpan Pembayaran"}),s.jsx("button",{type:"button",className:"tp-btn-secondary",onClick:()=>n(R),children:"Batal"})]})]})})]})},vm=[{value:"bendahara",label:"Bendahara"},{value:"admin",label:"Admin"}],Al=({label:t,icon:e,error:r,children:a})=>s.jsxs("div",{className:"tu-field-wrap",children:[s.jsxs("label",{className:"tu-label",children:[t," ",s.jsx("span",{className:"tu-required",children:"*"})]}),s.jsxs("div",{className:"tu-input-wrap",children:[e&&s.jsx(e,{className:"tu-input-icon"}),a]}),r&&s.jsxs("p",{className:"tu-error-msg",children:["âš  ",r]})]}),ym=()=>{const t=na(),[e,r]=me.useState({username:"",email:"",password:"",confirmPassword:"",role:"bendahara"}),[a,i]=me.useState({}),n=_r({mutationFn:f=>cn.register(f),onSuccess:()=>{mt.success("User berhasil ditambahkan"),t("/dashboard")},onError:f=>{var g,b;mt.error(((b=(g=f.response)==null?void 0:g.data)==null?void 0:b.message)||"Gagal menambahkan user")}}),l=()=>{const f={};return e.username.trim()?e.username.length<3?f.username="Username minimal 3 karakter":/^[a-zA-Z0-9_]+$/.test(e.username)||(f.username="Username hanya boleh huruf, angka, dan underscore"):f.username="Username wajib diisi",e.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)||(f.email="Format email tidak valid"):f.email="Email wajib diisi",e.password?e.password.length<6&&(f.password="Password minimal 6 karakter"):f.password="Password wajib diisi",e.confirmPassword?e.password!==e.confirmPassword&&(f.confirmPassword="Password tidak cocok"):f.confirmPassword="Konfirmasi password wajib diisi",e.role||(f.role="Role wajib dipilih"),i(f),Object.keys(f).length===0},c=f=>g=>r(b=>({...b,[f]:g.target.value})),u=f=>{if(f.preventDefault(),!l())return;const{confirmPassword:g,...b}=e;n.mutate(b)};return s.jsxs("div",{className:"tu-root",children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.875rem",marginBottom:"1.75rem"},children:[s.jsx("button",{className:"tu-back-btn",onClick:()=>t("/dashboard"),children:s.jsx(Vn,{style:{width:16,height:16}})}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.625rem"},children:[s.jsx("span",{style:{display:"inline-block",width:4,height:28,borderRadius:99,background:"linear-gradient(180deg, var(--amber-light), var(--amber))",flexShrink:0}}),s.jsxs("div",{children:[s.jsx("h1",{style:{fontSize:"1.5rem",fontWeight:800,color:"var(--text)",letterSpacing:"-0.02em",margin:0},children:"Tambah User"}),s.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.8125rem",marginTop:2},children:"Tambahkan user baru ke sistem"})]})]})]}),s.jsxs("div",{className:"tu-card",children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"1.5rem"},children:[s.jsx("div",{style:{width:"2rem",height:"2rem",borderRadius:"0.625rem",background:"linear-gradient(135deg, var(--teal-light), var(--teal-mid))",display:"flex",alignItems:"center",justifyContent:"center"},children:s.jsx(Dd,{style:{width:15,height:15,color:"var(--teal-dark)"}})}),s.jsx("p",{style:{fontWeight:700,color:"var(--text)",fontSize:"0.9375rem",margin:0},children:"Informasi User"})]}),s.jsxs("form",{onSubmit:u,autoComplete:"off",children:[s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:"1.25rem"},children:[s.jsx(Al,{label:"Username",icon:ko,error:a.username,children:s.jsx("input",{className:`tu-input ${a.username?"tu-error":""}`,type:"text",placeholder:"Masukkan username",autoComplete:"off",value:e.username,onChange:c("username")})}),s.jsx(Al,{label:"Email",icon:ou,error:a.email,children:s.jsx("input",{className:`tu-input ${a.email?"tu-error":""}`,type:"email",placeholder:"Masukkan email",autoComplete:"off",value:e.email,onChange:c("email")})}),s.jsx(Al,{label:"Password",icon:fh,error:a.password,children:s.jsx("input",{className:`tu-input ${a.password?"tu-error":""}`,type:"password",placeholder:"Masukkan password",autoComplete:"new-password",value:e.password,onChange:c("password")})}),s.jsx(Al,{label:"Konfirmasi Password",icon:fh,error:a.confirmPassword,children:s.jsx("input",{className:`tu-input ${a.confirmPassword?"tu-error":""}`,type:"password",placeholder:"Konfirmasi password",autoComplete:"new-password",value:e.confirmPassword,onChange:c("confirmPassword")})}),s.jsx(Or,{label:"Role",value:e.role,onChange:c("role"),options:vm,placeholder:"Pilih role...",error:a.role,required:!0})]}),s.jsx("hr",{className:"tu-divider"}),s.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.75rem"},children:[s.jsxs("button",{type:"submit",className:"tu-btn-primary",disabled:n.isPending,children:[s.jsx(Dd,{style:{width:15,height:15}}),n.isPending?"Menyimpan...":"Tambah User"]}),s.jsx("button",{type:"button",className:"tu-btn-secondary",onClick:()=>t("/dashboard"),children:"Batal"})]})]})]})]})},Dl=me.forwardRef(({label:t,error:e,helperText:r,className:a="",containerClassName:i="",required:n=!1,...l},c)=>s.jsxs("div",{className:`space-y-1 ${i}`,children:[t&&s.jsxs("label",{className:"form-label",children:[t,n&&s.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),s.jsx("input",{ref:c,className:`form-input ${e?"border-red-500 focus:ring-red-500 focus:border-red-500":""} ${a}`,...l}),e&&s.jsx("p",{className:"form-error",children:e}),r&&!e&&s.jsx("p",{className:"text-sm text-gray-500",children:r})]}));Dl.displayName="Input";const xm=()=>{if(document.getElementById("um-theme"))return;const t=document.createElement("style");t.id="um-theme",t.textContent=`
    :root {
      --teal:        #3A9EA3;
      --teal-dark:   #1F6F74;
      --teal-light:  #E8F6F7;
      --teal-mid:    #C2E8EA;
      --amber:       #E8920A;
      --amber-light: #F5B044;
      --amber-pale:  #FEF3DC;
      --amber-mid:   #FBD89A;
      --um-bg:       linear-gradient(160deg,#f0fafa 0%,#faf8f3 60%,#fff 100%);
      --um-card:     #ffffff;
      --um-border:   #e5f4f5;
      --um-sep:      #f0fafa;
      --um-text:     #1a2e30;
      --um-muted:    #6b9ea1;
      --um-muted2:   #9bbfc1;
      --um-search-bg:#ffffff;
      --um-search-col:#1a2e30;
      --um-hdr-bar:  linear-gradient(90deg,#f8fdfd,#fff);
      --um-th-bg:    linear-gradient(90deg,var(--teal-light) 0%,#f0fafa 100%);
      --um-row-hover:#f8fdfd;
      --um-pg-bar:   linear-gradient(90deg,#f8fdfd,#fff);
      --um-del-bg:   #fff0f0;
      --um-del-hover:#fee2e2;
      --um-badge-off-bg: #f3f4f6;
      --um-badge-off-col:#6b7280;
      --um-badge-off-bdr:#e5e7eb;
      --um-pag-bg:   #ffffff;
      --um-mob-del:  #fff0f0;
    }
    html.dark {
      --um-bg:       #08131A;
      --um-card:     #112135;
      --um-border:   #1e3a4a;
      --um-sep:      #1a2f3e;
      --um-text:     #e2e8f0;
      --um-muted:    #94a3b8;
      --um-muted2:   #64748b;
      --um-search-bg:#0d1f30;
      --um-search-col:#e2e8f0;
      --um-hdr-bar:  linear-gradient(90deg,#0d1f30,#112135);
      --um-th-bg:    linear-gradient(90deg,#0d1f30 0%,#112135 100%);
      --um-row-hover:#0d1f30;
      --um-pg-bar:   linear-gradient(90deg,#0d1f30,#112135);
      --um-del-bg:   rgba(239,68,68,0.12);
      --um-del-hover:rgba(239,68,68,0.22);
      --um-badge-off-bg: #1e2a38;
      --um-badge-off-col:#94a3b8;
      --um-badge-off-bdr:#2d3a48;
      --um-pag-bg:   #112135;
      --um-mob-del:  rgba(239,68,68,0.12);
    }

    .um-root {
      min-height: 100vh;
      background: var(--um-bg);
      padding: 0;
    }
    .um-root::before {
      content: '';
      display: block;
      height: 4px;
      background: linear-gradient(90deg, #1F6F74 0%, #3A9EA3 45%, #E8920A 70%, #F5B044 100%);
    }
    .um-page-wrap {
      max-width: 1280px;
      margin: 0 auto;
      padding: 28px 24px;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    .um-page-title {
      font-size: 1.75rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      margin: 0;
      background: linear-gradient(135deg, #1F6F74 0%, #3A9EA3 55%, #E8920A 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .um-btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: linear-gradient(135deg, var(--teal) 0%, var(--teal-dark) 100%);
      color: #fff;
      font-weight: 600;
      font-size: 0.875rem;
      padding: 0.625rem 1.25rem;
      border-radius: 0.75rem;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
      box-shadow: 0 2px 8px rgba(31,111,116,0.25);
    }
    .um-btn-primary:hover {
      background: linear-gradient(135deg, var(--teal-dark) 0%, #164f54 100%);
      box-shadow: 0 4px 14px rgba(31,111,116,0.35);
      transform: translateY(-1px);
    }

    .um-stat-card {
      background: var(--um-card);
      border-radius: 1rem;
      border: 1.5px solid var(--um-border);
      padding: 1.25rem 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: 0 1px 6px rgba(58,158,163,0.07), 0 0 0 1px rgba(91,196,200,0.05);
      transition: box-shadow 0.2s, transform 0.2s;
    }
    .um-stat-card:hover {
      box-shadow: 0 4px 18px rgba(58,158,163,0.13);
      transform: translateY(-2px);
    }

    .um-stat-icon {
      width: 3rem;
      height: 3rem;
      border-radius: 0.875rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .um-table-header {
      background: var(--um-th-bg);
    }
    .um-table-header th {
      padding: 0.875rem 1.5rem;
      text-align: left;
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--teal-dark);
    }
    .um-table-header th:last-child { text-align: right; }

    .um-table-row {
      border-top: 1px solid var(--um-sep);
      transition: background 0.15s;
    }
    .um-table-row:hover { background: var(--um-row-hover); }

    .um-action-btn {
      width: 2rem;
      height: 2rem;
      border-radius: 0.5rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      cursor: pointer;
      transition: all 0.15s;
      flex-shrink: 0;
    }

    .um-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      padding: 0.25rem 0.75rem;
      border-radius: 999px;
      font-size: 0.72rem;
      font-weight: 600;
      letter-spacing: 0.02em;
    }

    .um-search-wrap {
      position: relative;
    }
    .um-search-wrap svg {
      position: absolute;
      left: 0.875rem;
      top: 50%;
      transform: translateY(-50%);
      color: var(--teal);
      pointer-events: none;
    }
    .um-search-input {
      width: 100%;
      padding: 0.625rem 1rem 0.625rem 2.5rem;
      border: 1.5px solid var(--teal-mid);
      border-radius: 0.75rem;
      font-size: 0.875rem;
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
      background: var(--um-search-bg);
      color: var(--um-search-col);
    }
    .um-search-input::placeholder { color: var(--um-muted2); }
    .um-search-input:focus {
      border-color: var(--teal);
      box-shadow: 0 0 0 3px rgba(58,158,163,0.12);
    }

    .um-pagination-btn {
      width: 2.25rem;
      height: 2.25rem;
      border-radius: 0.625rem;
      border: 1.5px solid var(--teal-mid);
      background: var(--um-pag-bg);
      color: var(--teal-dark);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.15s;
    }
    .um-pagination-btn:hover:not(:disabled) {
      background: var(--teal);
      border-color: var(--teal);
      color: #fff;
    }
    .um-pagination-btn:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }

    .um-mobile-card {
      border: 1.5px solid var(--um-border);
      border-radius: 1rem;
      padding: 1rem;
      background: var(--um-card);
      box-shadow: 0 1px 6px rgba(58,158,163,0.06);
    }

    .um-mobile-action {
      flex: 1;
      padding: 0.625rem;
      border-radius: 0.75rem;
      font-size: 0.8125rem;
      font-weight: 600;
      border: none;
      cursor: pointer;
      transition: all 0.15s;
    }

    @keyframes um-fade-in {
      from { opacity: 0; transform: translateY(6px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .um-animate { animation: um-fade-in 0.3s ease both; }
  `,document.head.appendChild(t)};xm();const wm=()=>{var R,Z;const[t,e]=me.useState(""),[r,a]=me.useState(1),[i]=me.useState(10),n=ia(),{data:l,isLoading:c,error:u}=Pr({queryKey:["users",{search:t,page:r,limit:i}],queryFn:()=>cn.getUsers({search:t,page:r,limit:i}),keepPreviousData:!0}),f=((R=l==null?void 0:l.data)==null?void 0:R.data)||[],g=((Z=l==null?void 0:l.data)==null?void 0:Z.pagination)||{},b=g.total||0,y=f.filter(ee=>ee.is_active).length,m=_r({mutationFn:ee=>cn.deleteUser(ee),onSuccess:()=>{mt.success("User berhasil dihapus"),n.invalidateQueries({queryKey:["users"]})},onError:ee=>{var A,S;mt.error(((S=(A=ee.response)==null?void 0:A.data)==null?void 0:S.message)||"Gagal menghapus user")}}),k=_r({mutationFn:({userId:ee,is_active:A})=>cn.updateUser(ee,{is_active:A}),onSuccess:()=>{mt.success("Status user berhasil diubah"),n.invalidateQueries({queryKey:["users"]})},onError:ee=>{var A,S;mt.error(((S=(A=ee.response)==null?void 0:A.data)==null?void 0:S.message)||"Gagal mengubah status user")}}),N=ee=>{window.confirm(`Apakah Anda yakin ingin menghapus user "${ee.username}"?`)&&m.mutate(ee.id)},_=ee=>{const A=ee.is_active?"nonaktifkan":"aktifkan";window.confirm(`Apakah Anda yakin ingin ${A} user "${ee.username}"?`)&&k.mutate({userId:ee.id,is_active:!ee.is_active})},x=ee=>ee?new Date(ee).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}):"-",I=ee=>{const A={admin:{label:"Admin",bg:"linear-gradient(135deg,#fef3dc,#fde9b5)",color:"#92580a",border:"#f5b044",Icon:O2},bendahara:{label:"Bendahara",bg:"linear-gradient(135deg,#e8f6f7,#c2e8ea)",color:"#1f6f74",border:"#3a9ea3",Icon:R2}},S=A[ee]||A.bendahara;return s.jsxs("span",{className:"um-badge",style:{background:S.bg,color:S.color,border:`1px solid ${S.border}44`},children:[s.jsx(S.Icon,{style:{width:11,height:11}}),S.label]})},B=ee=>s.jsxs("span",{className:"um-badge",style:ee?{background:"linear-gradient(135deg,#e8f6f7,#c2e8ea)",color:"#1f6f74",border:"1px solid #3a9ea344"}:{background:"#f3f4f6",color:"#6b7280",border:"1px solid #e5e7eb"},children:[s.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:ee?"#3a9ea3":"#9ca3af",display:"inline-block"}}),ee?"Aktif":"Nonaktif"]});return u?s.jsx("div",{style:{padding:"1.5rem"},children:s.jsxs("div",{style:{background:"var(--um-card)",borderRadius:"1rem",border:"1.5px solid rgba(239,68,68,0.3)",padding:"2rem",textAlign:"center"},children:[s.jsx("p",{style:{color:"#dc2626",fontWeight:600},children:"Gagal memuat data user"}),s.jsx("p",{style:{color:"var(--um-muted)",fontSize:"0.875rem",marginTop:"0.5rem"},children:u.message})]})}):s.jsx("div",{className:"um-root",children:s.jsxs("div",{className:"um-page-wrap",children:[s.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",flexWrap:"wrap",gap:"1rem",marginBottom:"1.75rem"},className:"um-animate",children:[s.jsxs("div",{children:[s.jsx("div",{style:{display:"flex",alignItems:"center",gap:"0.625rem",marginBottom:"0.25rem"},children:s.jsx("h1",{className:"um-page-title",children:"User Management"})}),s.jsx("p",{style:{color:"var(--um-muted)",fontSize:"0.875rem",marginLeft:"0.75rem"},children:"Kelola pengguna sistem"})]}),s.jsx(ki,{to:"/user/tambah",style:{textDecoration:"none"},children:s.jsxs("button",{className:"um-btn-primary",children:[s.jsx(Dd,{style:{width:16,height:16}}),"Tambah User"]})})]}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"1rem",marginBottom:"1.75rem"},children:[s.jsxs("div",{className:"um-stat-card um-animate",style:{animationDelay:"0.05s"},children:[s.jsxs("div",{children:[s.jsx("p",{style:{fontSize:"0.8rem",color:"var(--um-muted)",fontWeight:500,marginBottom:"0.5rem"},children:"Total User"}),s.jsx("h2",{style:{fontSize:"2.25rem",fontWeight:800,color:"var(--um-text)",lineHeight:1},children:b})]}),s.jsx("div",{className:"um-stat-icon",style:{background:"linear-gradient(135deg, var(--teal-light), var(--teal-mid))"},children:s.jsx(cu,{style:{width:22,height:22,color:"var(--teal-dark)"}})})]}),s.jsxs("div",{className:"um-stat-card um-animate",style:{animationDelay:"0.1s"},children:[s.jsxs("div",{children:[s.jsx("p",{style:{fontSize:"0.8rem",color:"#6b9ea1",fontWeight:500,marginBottom:"0.5rem"},children:"User Aktif"}),s.jsx("h2",{style:{fontSize:"2.25rem",fontWeight:800,color:"var(--teal-dark)",lineHeight:1},children:y})]}),s.jsx("div",{className:"um-stat-icon",style:{background:"linear-gradient(135deg, var(--amber-pale), var(--amber-mid))"},children:s.jsx(Kf,{style:{width:22,height:22,color:"var(--amber)"}})})]})]}),s.jsxs("div",{className:"um-animate",style:{animationDelay:"0.15s",background:"var(--um-card)",borderRadius:"1.25rem",border:"1.5px solid var(--um-border)",overflow:"hidden",boxShadow:"0 2px 16px rgba(58,158,163,0.08)"},children:[s.jsx("div",{style:{padding:"1.25rem 1.5rem",borderBottom:"1px solid var(--um-sep)",background:"var(--um-hdr-bar)"},children:s.jsxs("div",{className:"um-search-wrap",style:{maxWidth:420},children:[s.jsx(po,{style:{width:16,height:16}}),s.jsx("input",{className:"um-search-input",type:"text",placeholder:"Cari username atau email...",value:t,onChange:ee=>{e(ee.target.value),a(1)}})]})}),c?s.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"3.5rem"},children:s.jsx(jr,{})}):s.jsxs(s.Fragment,{children:[s.jsx("div",{style:{overflowX:"auto"},className:"hidden md:block",children:s.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[s.jsx("thead",{className:"um-table-header",children:s.jsx("tr",{children:["User","Role","Status","Login Terakhir","Aksi"].map((ee,A)=>s.jsx("th",{style:{textAlign:A===4?"right":"left"},children:ee},ee))})}),s.jsx("tbody",{children:f.length>0?f.map(ee=>s.jsxs("tr",{className:"um-table-row",children:[s.jsxs("td",{style:{padding:"1rem 1.5rem"},children:[s.jsx("p",{style:{fontWeight:600,color:"var(--um-text)",fontSize:"0.875rem",marginBottom:2},children:ee.username}),s.jsx("p",{style:{color:"var(--um-muted)",fontSize:"0.8125rem"},children:ee.email})]}),s.jsx("td",{style:{padding:"1rem 1.5rem"},children:I(ee.role)}),s.jsx("td",{style:{padding:"1rem 1.5rem"},children:B(ee.is_active)}),s.jsx("td",{style:{padding:"1rem 1.5rem",color:"var(--um-muted2)",fontSize:"0.8125rem"},children:x(ee.last_login)}),s.jsx("td",{style:{padding:"1rem 1.5rem"},children:s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"0.5rem"},children:[s.jsx(ki,{to:`/user/edit/${ee.id}`,children:s.jsx("button",{className:"um-action-btn",title:"Edit",style:{background:"var(--teal-light)",color:"var(--teal-dark)"},onMouseEnter:A=>A.currentTarget.style.background="var(--teal-mid)",onMouseLeave:A=>A.currentTarget.style.background="var(--teal-light)",children:s.jsx(Hf,{style:{width:14,height:14}})})}),s.jsx("button",{className:"um-action-btn",title:ee.is_active?"Nonaktifkan":"Aktifkan",onClick:()=>_(ee),style:{background:ee.is_active?"var(--amber-pale)":"var(--teal-light)",color:ee.is_active?"var(--amber)":"var(--teal-dark)"},onMouseEnter:A=>A.currentTarget.style.opacity="0.75",onMouseLeave:A=>A.currentTarget.style.opacity="1",children:s.jsx(C2,{style:{width:14,height:14}})}),s.jsx("button",{className:"um-action-btn",title:"Hapus",onClick:()=>N(ee),style:{background:"var(--um-del-bg)",color:"#dc2626"},onMouseEnter:A=>A.currentTarget.style.background="var(--um-del-hover)",onMouseLeave:A=>A.currentTarget.style.background="var(--um-del-bg)",children:s.jsx(Ul,{style:{width:14,height:14}})})]})})]},ee.id)):s.jsx("tr",{children:s.jsx("td",{colSpan:"5",style:{padding:"3rem",textAlign:"center",color:"var(--um-muted2)"},children:t?"Tidak ada user ditemukan":"Belum ada user"})})})]})}),s.jsx("div",{className:"md:hidden grid gap-3.5 p-4",children:f.length>0?f.map(ee=>s.jsxs("div",{className:"um-mobile-card",children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"0.75rem"},children:[s.jsxs("div",{children:[s.jsx("h3",{style:{fontWeight:700,color:"var(--um-text)",fontSize:"0.9375rem",marginBottom:4},children:ee.username}),s.jsx("p",{style:{color:"#6b9ea1",fontSize:"0.8125rem"},children:ee.email})]}),B(ee.is_active)]}),s.jsx("div",{style:{marginTop:"0.875rem",display:"flex",flexWrap:"wrap",gap:"0.5rem"},children:I(ee.role)}),s.jsxs("div",{style:{marginTop:"0.875rem"},children:[s.jsx("p",{style:{fontSize:"0.75rem",color:"var(--um-muted2)"},children:"Login terakhir"}),s.jsx("p",{style:{fontSize:"0.8125rem",fontWeight:600,color:"var(--um-text)",marginTop:2},children:x(ee.last_login)})]}),s.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginTop:"1rem"},children:[s.jsx(ki,{to:`/user/edit/${ee.id}`,style:{flex:1,textDecoration:"none"},children:s.jsx("button",{className:"um-mobile-action",style:{width:"100%",background:"var(--teal-light)",color:"var(--teal-dark)"},children:"Edit"})}),s.jsx("button",{className:"um-mobile-action",onClick:()=>_(ee),style:ee.is_active?{background:"var(--amber-pale)",color:"var(--amber)"}:{background:"var(--teal-light)",color:"var(--teal-dark)"},children:ee.is_active?"Nonaktifkan":"Aktifkan"}),s.jsx("button",{onClick:()=>N(ee),style:{padding:"0.625rem 0.875rem",borderRadius:"0.75rem",background:"var(--um-mob-del)",color:"#dc2626",border:"none",cursor:"pointer",display:"flex",alignItems:"center"},children:s.jsx(Ul,{style:{width:18,height:18}})})]})]},ee.id)):s.jsx("div",{style:{padding:"3rem",textAlign:"center",color:"var(--um-muted2)"},children:t?"Tidak ada user ditemukan":"Belum ada user"})})]}),g.totalPages>1&&s.jsxs("div",{style:{padding:"1rem 1.5rem",borderTop:"1px solid var(--um-sep)",display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",gap:"0.75rem",background:"var(--um-pg-bar)"},children:[s.jsxs("p",{style:{fontSize:"0.8125rem",color:"var(--um-muted)"},children:["Menampilkan"," ",s.jsxs("strong",{style:{color:"var(--teal-dark)"},children:[(r-1)*i+1,"–",Math.min(r*i,g.total)]})," ","dari"," ",s.jsx("strong",{style:{color:"var(--teal-dark)"},children:g.total})," ","data"]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsx("button",{className:"um-pagination-btn",disabled:r===1,onClick:()=>a(r-1),children:s.jsx(su,{style:{width:16,height:16}})}),s.jsxs("span",{style:{fontSize:"0.8125rem",fontWeight:700,color:"var(--teal-dark)",background:"var(--teal-light)",padding:"0.25rem 0.875rem",borderRadius:"0.5rem"},children:[r," / ",g.totalPages]}),s.jsx("button",{className:"um-pagination-btn",disabled:r===g.totalPages,onClick:()=>a(r+1),children:s.jsx(Zl,{style:{width:16,height:16}})})]})]})]})]})})},jm=[{value:"bendahara",label:"Bendahara"},{value:"admin",label:"Admin"}],km=()=>{const t=na(),{id:e}=Gl(),r=ia(),[a,i]=me.useState({username:"",email:"",role:"bendahara",is_active:!0,password:""}),[n,l]=me.useState({}),{data:c,isLoading:u}=Pr({queryKey:["user",e],queryFn:()=>cn.getUser(e).then(k=>k.data),enabled:!!e}),f=_r({mutationFn:k=>cn.updateUser(e,k),onSuccess:()=>{mt.success("User berhasil diperbarui"),r.invalidateQueries(["users"]),t("/user")},onError:k=>{var N,_;mt.error(((_=(N=k.response)==null?void 0:N.data)==null?void 0:_.message)||"Gagal memperbarui user")}}),g=(c==null?void 0:c.data)||c;me.useEffect(()=>{g&&i({username:g.username||"",email:g.email||"",role:g.role||"bendahara",is_active:g.is_active??!0,password:""})},[g]);const b=()=>{const k={};return a.username.trim()?a.username.length<3?k.username="Username minimal 3 karakter":/^[a-zA-Z0-9_]+$/.test(a.username)||(k.username="Username hanya boleh huruf, angka, dan underscore"):k.username="Username wajib diisi",a.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.email)||(k.email="Format email tidak valid"):k.email="Email wajib diisi",a.password&&a.password.length<6&&(k.password="Password minimal 6 karakter"),a.role||(k.role="Role wajib dipilih"),l(k),Object.keys(k).length===0},y=k=>N=>{const _=N.target.type==="checkbox"?N.target.checked:N.target.value;i({...a,[k]:_})},m=k=>{if(k.preventDefault(),!b())return;const{password:N,..._}=a,x=N?{..._,password:N}:_;f.mutate(x)};return u?s.jsxs("div",{style:{minHeight:"100vh",background:"var(--surface)"},children:[s.jsx("div",{style:{height:4,background:"linear-gradient(90deg, #1F6F74 0%, #3A9EA3 45%, #E8920A 70%, #F5B044 100%)"}}),s.jsx("div",{className:"p-6",children:s.jsx(ds,{className:"max-w-2xl mx-auto",style:{border:"1.5px solid var(--border)",boxShadow:"var(--shadow)",background:"var(--card)"},children:s.jsx("div",{className:"flex justify-center py-8",children:s.jsx(jr,{})})})})]}):g?s.jsxs("div",{style:{minHeight:"100vh",background:"var(--surface)"},children:[s.jsx("div",{style:{height:4,background:"linear-gradient(90deg, #1F6F74 0%, #3A9EA3 45%, #E8920A 70%, #F5B044 100%)"}}),s.jsxs("div",{className:"p-4 md:p-6 space-y-6",style:{color:"var(--text)",maxWidth:1280,margin:"0 auto"},children:[s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("button",{onClick:()=>t("/user"),className:"p-2 rounded-lg transition-colors",style:{background:"transparent"},onMouseEnter:k=>{k.currentTarget.style.background="var(--surface-strong)"},onMouseLeave:k=>{k.currentTarget.style.background="transparent"},children:s.jsx(Vn,{className:"w-5 h-5"})}),s.jsxs("div",{children:[s.jsx("h1",{className:"text-xl md:text-2xl font-bold",style:{fontWeight:800,background:"linear-gradient(135deg, #1F6F74 0%, #3A9EA3 55%, #E8920A 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Edit User"}),s.jsx("p",{className:"text-sm md:text-base",style:{color:"var(--text-muted)"},children:"Perbarui informasi user"})]})]}),s.jsx(ds,{className:"max-w-2xl",style:{border:"1.5px solid var(--border)",boxShadow:"var(--shadow)",background:"var(--card)"},children:s.jsxs("form",{onSubmit:m,className:"space-y-6",children:[s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[s.jsx(Dl,{label:"Username",type:"text",name:"username",autoComplete:"username",placeholder:"Masukkan username",value:a.username,onChange:y("username"),error:n.username,required:!0}),s.jsx(Dl,{label:"Email",type:"email",name:"email",autoComplete:"email",placeholder:"Masukkan email",value:a.email,onChange:y("email"),error:n.email,required:!0}),s.jsx(Or,{label:"Role",options:jm,value:a.role,onChange:y("role"),error:n.role,required:!0}),s.jsxs("div",{className:"flex items-center",children:[s.jsx("input",{id:"is_active",type:"checkbox",checked:a.is_active,onChange:y("is_active"),className:"h-4 w-4 text-primary-600 focus:ring-primary-500 rounded",style:{borderColor:"var(--border)"}}),s.jsx("label",{htmlFor:"is_active",className:"ml-2 block text-sm",style:{color:"var(--text)"},children:"User aktif"})]})]}),s.jsxs("div",{className:"border-t pt-6",style:{borderColor:"var(--border)"},children:[s.jsx("h3",{className:"text-lg font-medium mb-4",style:{color:"var(--text)"},children:"Ubah Password (Opsional)"}),s.jsx("p",{className:"text-sm mb-4",style:{color:"var(--text-muted)"},children:"Biarkan kosong jika tidak ingin mengubah password"}),s.jsx(Dl,{label:"Password Baru",type:"password",name:"new-password",autoComplete:"new-password",placeholder:"Masukkan password baru",value:a.password,onChange:y("password"),error:n.password})]}),s.jsxs("div",{className:"flex flex-wrap gap-3 pt-4 border-t",style:{borderColor:"var(--border)"},children:[s.jsx(Ed,{type:"button",variant:"secondary",onClick:()=>t("/user"),className:"!border-[var(--border)] !bg-[var(--card)] !text-[var(--accent-dark)] hover:!bg-[var(--surface-strong)]",children:"Batal"}),s.jsxs(Ed,{type:"submit",loading:f.isLoading,className:"!border-0 !bg-[var(--accent-dark)] !text-white hover:!bg-[var(--accent-deep)]",children:[s.jsx(tc,{className:"w-4 h-4 mr-2"}),"Simpan Perubahan"]})]})]})})]})]}):s.jsxs("div",{style:{minHeight:"100vh",background:"var(--surface)"},children:[s.jsx("div",{style:{height:4,background:"linear-gradient(90deg, #1F6F74 0%, #3A9EA3 45%, #E8920A 70%, #F5B044 100%)"}}),s.jsx("div",{className:"p-6",children:s.jsx(ds,{className:"max-w-2xl mx-auto",style:{border:"1.5px solid var(--border)",boxShadow:"var(--shadow)",background:"var(--card)"},children:s.jsx("div",{className:"text-center py-8",children:s.jsx("p",{className:"text-red-600",children:"User tidak ditemukan"})})})})]})},di={teal:"#3A9EA3",tealDark:"#1F6F74"},Nh=()=>{const t=new Date,e=r=>r.toISOString().slice(0,10);return{start_date:e(new Date(t.getFullYear(),t.getMonth(),1)),end_date:e(new Date(t.getFullYear(),t.getMonth()+1,0))}},Zc=t=>`Rp ${Number(t||0).toLocaleString("id-ID")}`,Nm=()=>{var Z,ee;const e="https://api-jb.zoeldev.my.id/api".replace(/\/api\/?$/,""),r=A=>A?`${e}/uploads/${A}`:"",a=Nh(),[i,n]=me.useState({search:"",kategori:"",metode_pembayaran:"",...a}),[l,c]=me.useState(i),{data:u,isLoading:f,error:g}=Pr({queryKey:["pembayaran",l],queryFn:()=>cs.getPembayaran(l)}),b=((Z=u==null?void 0:u.data)==null?void 0:Z.data)||[],y=((ee=u==null?void 0:u.data)==null?void 0:ee.pagination)||{},m=b.reduce((A,S)=>A+Number(S.nominal||0),0),k=y.total||b.length,N=ia(),_=na(),x=_r({mutationFn:A=>cs.deletePembayaran(A),onSuccess:()=>{mt.success("Pembayaran berhasil dihapus"),N.invalidateQueries(["pembayaran"])},onError:A=>{var S,M;return mt.error(((M=(S=A.response)==null?void 0:S.data)==null?void 0:M.message)||"Gagal menghapus")}}),I=A=>_(`/pembayaran/edit/${A}`),B=A=>{window.confirm("Hapus data pembayaran ini?")&&x.mutate(A)},R=()=>{const A={search:"",kategori:"",metode_pembayaran:"",...Nh()};n(A),c(A)};return f?s.jsx("div",{className:"pmb-root",children:s.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"80px 0"},children:s.jsx(jr,{})})}):g?s.jsx("div",{className:"pmb-root",children:s.jsx("div",{style:{maxWidth:600,margin:"60px auto",padding:"0 24px"},children:s.jsxs("div",{className:"pmb-error",children:["Gagal memuat data: ",g.message]})})}):s.jsx("div",{className:"pmb-root",children:s.jsxs("div",{style:{maxWidth:1280,margin:"0 auto",padding:"28px 24px",display:"flex",flexDirection:"column",gap:24},children:[s.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"flex-end",justifyContent:"space-between",gap:14},children:[s.jsxs("div",{children:[s.jsx("p",{style:{fontSize:".75rem",fontWeight:600,color:di.teal,letterSpacing:".08em",textTransform:"uppercase",marginBottom:4},children:"Keuangan Pesantren"}),s.jsx("h1",{className:"pmb-page-title",children:"Pembayaran"}),s.jsx("p",{style:{fontSize:".875rem",color:"#5a8a8d",marginTop:4},children:"Kelola data pembayaran santri"})]}),s.jsxs("button",{className:"pmb-btn-tambah",onClick:()=>_("/santri"),children:[s.jsx(Fo,{size:16})," Tambah Pembayaran"]})]}),s.jsxs("div",{className:"pmb-stats-grid",children:[s.jsxs("div",{className:"pmb-stat-card",children:[s.jsxs("div",{style:{minWidth:0},children:[s.jsx("p",{className:"pmb-stat-label",children:"Total Pembayaran"}),s.jsx("h2",{className:"pmb-stat-value-teal",children:Zc(m)}),s.jsx("p",{className:"pmb-stat-sub",children:"Periode filter aktif"})]}),s.jsx("div",{className:"pmb-stat-icon-teal",children:s.jsx(Fs,{size:22,color:"#fff"})})]}),s.jsxs("div",{className:"pmb-stat-card",children:[s.jsxs("div",{style:{minWidth:0},children:[s.jsx("p",{className:"pmb-stat-label",children:"Total Transaksi"}),s.jsx("h2",{className:"pmb-stat-value-amber",children:k.toLocaleString("id-ID")}),s.jsx("p",{className:"pmb-stat-sub",children:"Jumlah transaksi tercatat"})]}),s.jsx("div",{className:"pmb-stat-icon-amber",children:s.jsx($f,{size:22,color:"#fff"})})]})]}),s.jsxs("div",{className:"pmb-panel",style:{padding:"20px 24px"},children:[s.jsxs("p",{className:"filter-heading",children:[s.jsx(N2,{size:14})," Filter Data"]}),s.jsxs("div",{className:"pmb-filter-grid",children:[s.jsxs("div",{children:[s.jsx("label",{className:"pmb-label",children:"Nama / NIS"}),s.jsx("input",{className:"pmb-input",placeholder:"Cari nama atau NIS…",value:i.search,onChange:A=>n(S=>({...S,search:A.target.value}))})]}),s.jsx("div",{children:s.jsx(Or,{label:"Kategori",value:i.kategori,onChange:A=>n(S=>({...S,kategori:A.target.value})),options:[{value:"",label:"Semua Kategori"},{value:"biaya_pembangunan",label:"Biaya Pembangunan"},{value:"biaya_tahunan",label:"Biaya Tahunan"},{value:"biaya_spp",label:"Biaya SPP"},{value:"biaya_akhir",label:"Biaya Akhir"}],placeholder:"Pilih kategori"})}),s.jsx("div",{children:s.jsx(Kn,{label:"Dari Tanggal",value:i.start_date,onChange:A=>n(S=>({...S,start_date:A})),placeholder:"Pilih tanggal awal"})}),s.jsx("div",{children:s.jsx(Kn,{label:"Sampai Tanggal",value:i.end_date,onChange:A=>n(S=>({...S,end_date:A})),placeholder:"Pilih tanggal akhir"})}),s.jsx("div",{children:s.jsx(Or,{label:"Metode Pembayaran",value:i.metode_pembayaran,onChange:A=>n(S=>({...S,metode_pembayaran:A.target.value})),options:[{value:"",label:"Semua Metode"},{value:"cash",label:"Cash"},{value:"transfer",label:"Transfer"}],placeholder:"Pilih metode"})})]}),s.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"flex-end",marginTop:18,flexWrap:"wrap"},children:[s.jsxs("button",{className:"pmb-btn-reset",onClick:R,children:[s.jsx(T2,{size:14})," Reset"]}),s.jsxs("button",{className:"pmb-btn-filter",onClick:()=>c(i),children:[s.jsx(z2,{size:14})," Terapkan Filter"]})]})]}),s.jsxs("div",{className:"pmb-panel",style:{overflow:"hidden"},children:[s.jsx("div",{style:{overflowX:"auto"},className:"pmb-lg-only",children:s.jsxs("table",{className:"pmb-table",children:[s.jsx("thead",{children:s.jsx("tr",{children:["No Transaksi","Santri","Kategori","Nominal","Tanggal","Metode","Petugas","Aksi"].map((A,S)=>s.jsx("th",{style:{textAlign:S===7?"right":"left"},children:A},A))})}),s.jsx("tbody",{children:b.length>0?b.map(A=>{var S;return s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("span",{className:"pmb-no-trx",children:A.nomor_transaksi})}),s.jsxs("td",{children:[s.jsx("p",{style:{fontWeight:700,color:"#0f2e30"},children:A.nama}),s.jsxs("p",{style:{fontSize:".75rem",color:"#5a8a8d",fontFamily:"'DM Mono', monospace"},children:["NIS: ",A.nis]})]}),s.jsx("td",{children:s.jsx("span",{className:"badge-kategori",children:(S=A.kategori)==null?void 0:S.replaceAll("_"," ")})}),s.jsx("td",{children:s.jsx("span",{className:"pmb-nominal",children:Zc(A.nominal)})}),s.jsx("td",{style:{color:"#3a5e60"},children:A.tanggal?new Date(A.tanggal).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"—"}),s.jsx("td",{style:{color:"#3a5e60",textTransform:"capitalize"},children:A.metode_pembayaran||"—"}),s.jsx("td",{style:{color:"#3a5e60"},children:A.petugas_input||"—"}),s.jsx("td",{children:s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center",gap:6},children:[A.bukti_pembayaran?s.jsx("a",{href:r(A.bukti_pembayaran),target:"_blank",rel:"noreferrer",className:"tbl-btn-icon nota-on",title:"Lihat Nota",children:s.jsx(jo,{size:15})}):s.jsx("span",{className:"tbl-btn-icon nota-off",title:"Tidak ada nota",children:s.jsx(ql,{size:15})}),s.jsx("button",{className:"tbl-btn-text edit",onClick:()=>I(A.id),children:"Edit"}),s.jsx("button",{className:"tbl-btn-text del",onClick:()=>B(A.id),children:"Hapus"})]})})]},A.id)}):s.jsx("tr",{children:s.jsx("td",{colSpan:8,style:{padding:"48px 0",textAlign:"center"},children:s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:10,color:"#9bbcbe"},children:[s.jsx($n,{size:36}),s.jsx("p",{style:{fontWeight:600,color:"#5a8a8d"},children:"Tidak ada data pembayaran"}),s.jsx("p",{style:{fontSize:".82rem"},children:"Belum ada pembayaran untuk filter ini"})]})})})})]})}),s.jsx("div",{className:"pmb-sm-only",style:{padding:"16px",flexDirection:"column",gap:14},children:b.length>0?b.map(A=>{var S;return s.jsxs("div",{className:"pmb-mob-card",children:[s.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:10,marginBottom:14},children:[s.jsxs("div",{children:[s.jsx("p",{style:{fontWeight:700,color:"#0f2e30",fontSize:".95rem"},children:A.nama}),s.jsxs("p",{style:{fontSize:".75rem",color:"#5a8a8d",fontFamily:"'DM Mono', monospace",marginTop:2},children:["NIS: ",A.nis]}),s.jsx("p",{style:{fontSize:".75rem",color:di.tealDark,fontFamily:"'DM Mono', monospace",marginTop:2},children:A.nomor_transaksi})]}),s.jsx("span",{className:"badge-kategori",children:(S=A.kategori)==null?void 0:S.replaceAll("_"," ")})]}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:0},children:[["Nominal",s.jsx("span",{className:"pmb-nominal",children:Zc(A.nominal)})],["Tanggal",A.tanggal?new Date(A.tanggal).toLocaleDateString("id-ID"):"—"],["Metode",s.jsx("span",{style:{textTransform:"capitalize"},children:A.metode_pembayaran||"—"})],["Petugas",A.petugas_input||"—"]].map(([M,ne])=>s.jsxs("div",{className:"pmb-mob-row",children:[s.jsx("span",{className:"pmb-mob-label",children:M}),s.jsx("span",{style:{fontWeight:600,color:"#0f2e30",fontSize:".85rem"},children:ne})]},M))}),s.jsxs("div",{style:{display:"flex",gap:8,marginTop:14,alignItems:"center"},children:[A.bukti_pembayaran?s.jsx("a",{href:r(A.bukti_pembayaran),target:"_blank",rel:"noreferrer",className:"tbl-btn-icon nota-on",style:{width:40,height:40},title:"Lihat Nota",children:s.jsx(jo,{size:17})}):s.jsx("span",{className:"tbl-btn-icon nota-off",style:{width:40,height:40},children:s.jsx(ql,{size:17})}),s.jsx("button",{className:"tbl-btn-text edit",style:{flex:1,padding:"9px 0"},onClick:()=>I(A.id),children:"Edit"}),s.jsx("button",{className:"tbl-btn-text del",style:{flex:1,padding:"9px 0"},onClick:()=>B(A.id),children:"Hapus"})]})]},A.id)}):s.jsxs("div",{className:"pmb-empty",children:[s.jsx("div",{className:"pmb-empty-icon",children:s.jsx($n,{size:30,color:di.teal})}),s.jsx("p",{style:{fontWeight:700,color:di.tealDark,fontSize:"1rem"},children:"Tidak ada data pembayaran"}),s.jsx("p",{style:{fontSize:".85rem",color:"#5a8a8d",marginTop:4},children:"Belum ada pembayaran untuk filter ini"})]})}),y.totalPages>1&&s.jsxs("div",{className:"pmb-pagination",children:[s.jsxs("span",{children:["Total data: ",s.jsx("strong",{style:{color:di.tealDark},children:y.total})]}),s.jsxs("span",{children:["Halaman ",s.jsx("strong",{style:{color:di.tealDark},children:y.page})," dari ",s.jsx("strong",{style:{color:di.tealDark},children:y.totalPages})]})]})]})]})})},go={getPengeluaran:t=>lt.get("/pengeluaran",{params:t}),getPengeluaranById:t=>lt.get(`/pengeluaran/${t}`),createPengeluaran:t=>lt.post("/pengeluaran",t),updatePengeluaran:(t,e)=>lt.put(`/pengeluaran/${t}`,e),deletePengeluaran:t=>lt.delete(`/pengeluaran/${t}`)},ed=`
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

  :root {
    --pe-bg:           #F0F9FA;
    --pe-card:         #ffffff;
    --pe-border:       #C8E8EA;
    --pe-border-light: #E6F6F7;
    --pe-text:         #1C3F42;
    --pe-text-heading: #0F3B3E;
    --pe-muted:        #6B7280;
    --pe-teal:         #3A9EA3;
    --pe-teal-dark:    #1F6F74;
    --pe-input-bg:     #F8FDFD;
    --pe-hover-row:    #F8FDFD;
    --pe-pill-bg:      #CCEFF1;
    --pe-pill-text:    #1F6F74;
    --pe-nota-off-bg:  #F3F4F6;
    --pe-nota-off-col: #9CA3AF;
    --pe-edit-bg:      #CCEFF1;
    --pe-edit-col:     #1F6F74;
    --pe-edit-hover:   #A5DDE1;
    --pe-del-bg:       #FEE2E2;
    --pe-del-col:      #DC2626;
    --pe-del-hover:    #FECACA;
    --pe-nota-bg:      #D1FAE5;
    --pe-nota-col:     #065F46;
    --pe-nota-hover:   #A7F3D0;
    --pe-empty-bg:     linear-gradient(135deg,#E6F6F7 0%,#C8E8EA 100%);
    --pe-shadow-sm:    0 2px 12px rgba(58,158,163,0.07);
    --pe-shadow-md:    0 6px 24px rgba(58,158,163,0.14);
    --pe-shadow-card:  0 2px 16px rgba(58,158,163,0.07);
    --pe-filter-shadow:0 4px 14px rgba(31,111,116,0.25);
  }

  html.dark {
    --pe-bg:           #08131A;
    --pe-card:         #112135;
    --pe-border:       #1e3a4a;
    --pe-border-light: #1a2f3e;
    --pe-text:         #cbd5e1;
    --pe-text-heading: #e2e8f0;
    --pe-muted:        #94a3b8;
    --pe-teal:         #5BC4C8;
    --pe-teal-dark:    #3A9EA3;
    --pe-input-bg:     #0d1f30;
    --pe-hover-row:    #0d1f30;
    --pe-pill-bg:      rgba(58,158,163,0.2);
    --pe-pill-text:    #5BC4C8;
    --pe-nota-off-bg:  #1e2a38;
    --pe-nota-off-col: #475569;
    --pe-edit-bg:      rgba(58,158,163,0.2);
    --pe-edit-col:     #5BC4C8;
    --pe-edit-hover:   rgba(58,158,163,0.35);
    --pe-del-bg:       rgba(239,68,68,0.15);
    --pe-del-col:      #f87171;
    --pe-del-hover:    rgba(239,68,68,0.25);
    --pe-nota-bg:      rgba(16,185,129,0.15);
    --pe-nota-col:     #34d399;
    --pe-nota-hover:   rgba(16,185,129,0.25);
    --pe-empty-bg:     linear-gradient(135deg,#1e2a38 0%,#0f172a 100%);
    --pe-shadow-sm:    0 2px 12px rgba(0,0,0,0.25);
    --pe-shadow-md:    0 6px 24px rgba(0,0,0,0.4);
    --pe-shadow-card:  0 2px 16px rgba(0,0,0,0.3);
    --pe-filter-shadow:0 4px 14px rgba(0,0,0,0.35);
  }

  .pe-root {
    font-family: 'Plus Jakarta Sans', sans-serif;
    background: var(--pe-bg);
    min-height: 100vh;
  }
  .pe-root::before {
    content: '';
    display: block;
    height: 4px;
    background: linear-gradient(90deg, #1F6F74 0%, #3A9EA3 45%, #E8920A 70%, #F5B044 100%);
  }

  /* -- CTA button -- */
  .pe-cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 22px;
    border-radius: 14px;
    background: linear-gradient(135deg, #E8920A 0%, #F5B044 100%);
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 14px rgba(232,146,10,0.35);
    transition: transform 0.18s, box-shadow 0.18s;
    white-space: nowrap;
    text-decoration: none;
  }
  .pe-cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(232,146,10,0.45);
  }

  /* -- Stat cards -- */
  .pe-stat-card {
    background: var(--pe-card);
    border: 1.5px solid var(--pe-border);
    border-radius: 20px;
    padding: 20px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: var(--pe-shadow-sm);
    transition: box-shadow 0.2s, transform 0.2s;
  }
  .pe-stat-card:hover {
    box-shadow: var(--pe-shadow-md);
    transform: translateY(-2px);
  }
  .pe-stat-label {
    font-size: 12px;
    font-weight: 600;
    color: var(--pe-muted);
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }
  .pe-stat-value-red {
    font-size: 24px;
    font-weight: 800;
    color: #DC2626;
    margin-top: 8px;
    line-height: 1;
  }
  .pe-stat-value-teal {
    font-size: 24px;
    font-weight: 800;
    color: #1F6F74;
    margin-top: 8px;
    line-height: 1;
  }
  .pe-icon-red {
    width: 48px; height: 48px;
    border-radius: 14px;
    background: linear-gradient(135deg, #FCA5A5 0%, #EF4444 100%);
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 4px 12px rgba(239,68,68,0.25);
    flex-shrink: 0;
  }
  .pe-icon-teal {
    width: 48px; height: 48px;
    border-radius: 14px;
    background: linear-gradient(135deg, #3A9EA3 0%, #1F6F74 100%);
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 4px 12px rgba(31,111,116,0.25);
    flex-shrink: 0;
  }

  /* -- Filter card -- */
  .pe-filter-card {
    background: var(--pe-card);
    border: 1.5px solid var(--pe-border);
    border-radius: 20px;
    padding: 20px 24px;
    box-shadow: var(--pe-shadow-sm);
  }
  .pe-label {
    display: block;
    font-size: 11px;
    font-weight: 700;
    color: var(--pe-teal);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin-bottom: 6px;
  }
  .pe-input {
    width: 100%;
    box-sizing: border-box;
    border-radius: 12px;
    border: 1.5px solid var(--pe-border);
    padding: 10px 14px;
    font-size: 13px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: var(--pe-text-heading);
    background: var(--pe-input-bg);
    outline: none;
    transition: border-color 0.18s, box-shadow 0.18s;
  }
  .pe-input:focus {
    border-color: var(--pe-teal);
    box-shadow: 0 0 0 3px rgba(58,158,163,0.15);
    background: var(--pe-card);
  }
  .pe-filter-btn {
    width: 100%;
    padding: 10px 20px;
    border-radius: 12px;
    background: linear-gradient(135deg, #3A9EA3 0%, #1F6F74 100%);
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    border: none;
    cursor: pointer;
    box-shadow: var(--pe-filter-shadow);
    transition: transform 0.18s, box-shadow 0.18s;
  }
  .pe-filter-btn:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 6px 18px rgba(31,111,116,0.35);
  }
  .pe-filter-btn:disabled { opacity: 0.6; cursor: not-allowed; }

  /* -- Data card -- */
  .pe-data-card {
    background: var(--pe-card);
    border: 1.5px solid var(--pe-border);
    border-radius: 24px;
    padding: 24px;
    box-shadow: var(--pe-shadow-card);
  }

  /* -- Table -- */
  .pe-table { width: 100%; border-collapse: collapse; }
  .pe-thead-tr { border-bottom: 2px solid var(--pe-border-light); }
  .pe-th {
    text-align: left;
    padding: 12px 14px;
    font-size: 11px;
    font-weight: 700;
    color: var(--pe-teal);
    letter-spacing: 0.07em;
    text-transform: uppercase;
    white-space: nowrap;
  }
  .pe-tbody-tr {
    border-bottom: 1px solid var(--pe-border-light);
    transition: background 0.14s;
  }
  .pe-tbody-tr:hover { background: var(--pe-hover-row); }
  .pe-td {
    padding: 14px 14px;
    font-size: 13px;
    color: var(--pe-text);
  }

  /* -- Pills -- */
  .pe-pill-teal {
    display: inline-flex; padding: 4px 12px;
    border-radius: 999px; font-size: 11px; font-weight: 700;
    background: var(--pe-pill-bg); color: var(--pe-pill-text);
    text-transform: capitalize;
  }

  /* -- Action buttons -- */
  .pe-action-nota {
    display: inline-flex; align-items: center; justify-content: center;
    width: 32px; height: 32px;
    border-radius: 9px;
    background: var(--pe-nota-bg); color: var(--pe-nota-col);
    border: none; cursor: pointer; text-decoration: none;
    transition: background 0.15s;
  }
  .pe-action-nota:hover { background: var(--pe-nota-hover); }
  .pe-action-nota-off {
    display: inline-flex; align-items: center; justify-content: center;
    width: 32px; height: 32px;
    border-radius: 9px;
    background: var(--pe-nota-off-bg); color: var(--pe-nota-off-col);
    border: none;
  }
  .pe-action-edit {
    padding: 5px 14px;
    border-radius: 9px;
    background: var(--pe-edit-bg); color: var(--pe-edit-col);
    font-size: 12px; font-weight: 700;
    font-family: 'Plus Jakarta Sans', sans-serif;
    border: none; cursor: pointer;
    transition: background 0.15s;
  }
  .pe-action-edit:hover { background: var(--pe-edit-hover); }
  .pe-action-del {
    padding: 5px 14px;
    border-radius: 9px;
    background: var(--pe-del-bg); color: var(--pe-del-col);
    font-size: 12px; font-weight: 700;
    font-family: 'Plus Jakarta Sans', sans-serif;
    border: none; cursor: pointer;
    transition: background 0.15s;
  }
  .pe-action-del:hover:not(:disabled) { background: var(--pe-del-hover); }
  .pe-action-del:disabled { opacity: 0.5; cursor: not-allowed; }

  /* -- Mobile card -- */
  .pe-mobile-card {
    border: 1.5px solid var(--pe-border);
    border-radius: 18px;
    padding: 18px;
    background: var(--pe-card);
  }
  .pe-mobile-amount {
    font-size: 20px;
    font-weight: 800;
    color: #DC2626;
    margin-top: 4px;
  }
  .pe-mobile-edit {
    flex: 1;
    padding: 9px;
    border-radius: 12px;
    background: var(--pe-edit-bg); color: var(--pe-edit-col);
    font-size: 13px; font-weight: 700;
    font-family: 'Plus Jakarta Sans', sans-serif;
    border: none; cursor: pointer;
    transition: background 0.15s;
  }
  .pe-mobile-edit:hover { background: var(--pe-edit-hover); }
  .pe-mobile-del {
    flex: 1;
    padding: 9px;
    border-radius: 12px;
    background: var(--pe-del-bg); color: var(--pe-del-col);
    font-size: 13px; font-weight: 700;
    font-family: 'Plus Jakarta Sans', sans-serif;
    border: none; cursor: pointer;
    transition: background 0.15s;
  }
  .pe-mobile-del:hover:not(:disabled) { background: var(--pe-del-hover); }
  .pe-mobile-del:disabled { opacity: 0.5; cursor: not-allowed; }
  .pe-mobile-nota {
    display: inline-flex; align-items: center; justify-content: center;
    width: 42px; height: 42px;
    border-radius: 12px;
    background: var(--pe-nota-bg); color: var(--pe-nota-col);
    text-decoration: none;
    transition: background 0.15s;
    flex-shrink: 0;
  }
  .pe-mobile-nota:hover { background: var(--pe-nota-hover); }
  .pe-mobile-nota-off {
    display: inline-flex; align-items: center; justify-content: center;
    width: 42px; height: 42px;
    border-radius: 12px;
    background: var(--pe-nota-off-bg); color: var(--pe-nota-off-col);
    flex-shrink: 0;
  }

  /* -- Pagination -- */
  .pe-pagination {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1.5px solid var(--pe-border-light);
  }
  .pe-page-info {
    font-size: 13px;
    color: var(--pe-teal);
    font-weight: 600;
  }

  /* -- Empty state -- */
  .pe-empty-icon {
    width: 60px; height: 60px;
    border-radius: 18px;
    background: var(--pe-empty-bg);
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 14px;
  }

  /* -- Responsive -- */
  .pe-desktop-table { display: none; }
  .pe-mobile-cards  { display: flex; flex-direction: column; gap: 14px; }

  @media (min-width: 768px) {
    .pe-desktop-table { display: block; overflow-x: auto; }
    .pe-mobile-cards  { display: none; }
  }
`,Sm=()=>{var Z,ee;const[t,e]=me.useState({kategori:"",start_date:"",end_date:""}),[r,a]=me.useState(null),[i,n]=me.useState(!1);me.useEffect(()=>{const A=new Date,S=new Date(A.getFullYear(),A.getMonth(),1),M=new Date(A.getFullYear(),A.getMonth()+1,0),ne=E=>E.toISOString().split("T")[0];e(E=>({...E,start_date:ne(S),end_date:ne(M)}))},[]);const l=async()=>{a(t),n(!0)},{data:c,isLoading:u,error:f}=Pr({queryKey:["pengeluaran",r],queryFn:()=>go.getPengeluaran(r),enabled:i&&!!r}),g=((Z=c==null?void 0:c.data)==null?void 0:Z.data)||[],b=((ee=c==null?void 0:c.data)==null?void 0:ee.pagination)||{},m="https://api-jb.zoeldev.my.id/api".replace(/\/api\/?$/,""),k=A=>A?`${m}/uploads/${A}`:"",N=ia(),_=na(),x=_r({mutationFn:A=>go.deletePengeluaran(A),onSuccess:()=>{rn.success("Pengeluaran berhasil dihapus"),N.invalidateQueries(["pengeluaran"])},onError:A=>{var S,M;rn.error(((M=(S=A.response)==null?void 0:S.data)==null?void 0:M.message)||"Gagal menghapus pengeluaran")}}),I=g.reduce((A,S)=>A+Number(S.nominal||0),0),B=A=>_(`/pengeluaran/edit/${A}`),R=A=>{window.confirm("Yakin ingin menghapus data pengeluaran ini?")&&x.mutate(A)};return u?s.jsxs("div",{className:"pe-root",style:{display:"flex",justifyContent:"center",paddingTop:80},children:[s.jsx("style",{children:ed}),s.jsx(jr,{})]}):f?s.jsxs("div",{className:"pe-root",style:{padding:24},children:[s.jsx("style",{children:ed}),s.jsxs("div",{className:"pe-data-card",style:{textAlign:"center",color:"#DC2626",padding:32},children:["Error loading pengeluaran data: ",f.message]})]}):s.jsxs("div",{className:"pe-root",children:[s.jsx("style",{children:ed}),s.jsxs("div",{style:{maxWidth:1280,margin:"0 auto",padding:"28px 24px",display:"flex",flexDirection:"column",gap:24},children:[s.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:16,marginBottom:28},children:[s.jsxs("div",{children:[s.jsx("h1",{style:{fontSize:26,fontWeight:800,color:"var(--pe-text-heading)",margin:0},children:"Pengeluaran"}),s.jsx("p",{style:{fontSize:13,color:"var(--pe-teal)",margin:"2px 0 0",fontWeight:500},children:"Kelola data pengeluaran pesantren"})]}),s.jsxs(ki,{to:"/pengeluaran/tambah",className:"pe-cta-btn",children:[s.jsx(Fo,{size:16}),"Tambah Pengeluaran"]})]}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:16,marginBottom:24},children:[s.jsxs("div",{className:"pe-stat-card",children:[s.jsxs("div",{children:[s.jsx("p",{className:"pe-stat-label",children:"Total Pengeluaran"}),s.jsxs("h2",{className:"pe-stat-value-red",children:["Rp ",I.toLocaleString("id-ID")]})]}),s.jsx("div",{className:"pe-icon-red",children:s.jsx(Fs,{size:22,color:"#fff"})})]}),s.jsxs("div",{className:"pe-stat-card",children:[s.jsxs("div",{children:[s.jsx("p",{className:"pe-stat-label",children:"Total Transaksi"}),s.jsx("h2",{className:"pe-stat-value-teal",children:b.total||0})]}),s.jsx("div",{className:"pe-icon-teal",children:s.jsx($f,{size:22,color:"#fff"})})]})]}),s.jsx("div",{className:"pe-filter-card",style:{marginBottom:24},children:s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:16,alignItems:"end"},children:[s.jsx("div",{children:s.jsx(Or,{label:"Kategori",value:t.kategori,onChange:A=>e(S=>({...S,kategori:A.target.value})),options:[{value:"",label:"Semua Kategori"},{value:"honor",label:"Honor"},{value:"catering",label:"Catering"},{value:"sarana_prasarana",label:"Sarana Prasarana"},{value:"lainnya",label:"Lainnya"}],placeholder:"Pilih kategori"})}),s.jsx("div",{children:s.jsx(Kn,{label:"Tanggal Awal",value:t.start_date,onChange:A=>e(S=>({...S,start_date:A})),placeholder:"Pilih tanggal mulai"})}),s.jsx("div",{children:s.jsx(Kn,{label:"Tanggal Akhir",value:t.end_date,onChange:A=>e(S=>({...S,end_date:A})),placeholder:"Pilih tanggal akhir"})}),s.jsx("div",{children:s.jsx("button",{className:"pe-filter-btn",onClick:l,disabled:u,children:u?"Memuat...":"Terapkan Filter"})})]})}),s.jsxs("div",{className:"pe-data-card",children:[s.jsx("div",{className:"pe-desktop-table",children:s.jsxs("table",{className:"pe-table",children:[s.jsx("thead",{children:s.jsx("tr",{className:"pe-thead-tr",children:["Kategori","Nominal","Tanggal","Deskripsi","Penerima","Petugas","Aksi"].map(A=>s.jsx("th",{className:"pe-th",children:A},A))})}),s.jsx("tbody",{children:g.length>0?g.map(A=>{var S;return s.jsxs("tr",{className:"pe-tbody-tr",children:[s.jsx("td",{className:"pe-td",children:s.jsx("span",{className:"pe-pill-teal",children:(S=A.kategori)==null?void 0:S.replace("_"," ")})}),s.jsxs("td",{className:"pe-td",style:{fontWeight:700,color:"#DC2626",whiteSpace:"nowrap"},children:["Rp ",Number(A.nominal||0).toLocaleString("id-ID")]}),s.jsx("td",{className:"pe-td",style:{whiteSpace:"nowrap"},children:A.tanggal?new Date(A.tanggal).toLocaleDateString("id-ID"):"-"}),s.jsx("td",{className:"pe-td",style:{maxWidth:200,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:A.deskripsi||"-"}),s.jsx("td",{className:"pe-td",children:A.penerima||"-"}),s.jsx("td",{className:"pe-td",children:A.petugas_input||"-"}),s.jsx("td",{className:"pe-td",children:s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[A.bukti_nota?s.jsx("a",{href:k(A.bukti_nota),target:"_blank",rel:"noreferrer",title:"Lihat Nota",className:"pe-action-nota",children:s.jsx(jo,{size:15})}):s.jsx("span",{title:"Tidak ada nota",className:"pe-action-nota-off",children:s.jsx(ql,{size:15})}),s.jsx("button",{className:"pe-action-edit",onClick:()=>B(A.id),children:"Edit"}),s.jsx("button",{className:"pe-action-del",onClick:()=>R(A.id),disabled:x.isLoading,children:"Hapus"})]})})]},A.id)}):s.jsx("tr",{children:s.jsxs("td",{colSpan:"7",style:{padding:"48px 0",textAlign:"center"},children:[s.jsx("div",{className:"pe-empty-icon",children:s.jsx($n,{size:26,color:"#3A9EA3"})}),s.jsx("p",{style:{fontWeight:700,color:"var(--pe-text-heading)",fontSize:15},children:"Tidak ada data pengeluaran"}),s.jsx("p",{style:{fontSize:13,color:"var(--pe-teal)",marginTop:4},children:"Silakan lakukan filter data"})]})})})]})}),s.jsx("div",{className:"pe-mobile-cards",children:g.length>0?g.map(A=>{var S;return s.jsxs("div",{className:"pe-mobile-card",children:[s.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:12},children:[s.jsxs("div",{children:[s.jsx("span",{className:"pe-pill-teal",children:(S=A.kategori)==null?void 0:S.replace("_"," ")}),s.jsxs("p",{className:"pe-mobile-amount",children:["Rp ",Number(A.nominal||0).toLocaleString("id-ID")]})]}),s.jsx("span",{style:{fontSize:12,color:"#6B7280",fontWeight:500,whiteSpace:"nowrap"},children:A.tanggal?new Date(A.tanggal).toLocaleDateString("id-ID"):"-"})]}),s.jsxs("div",{style:{marginTop:14,display:"flex",flexDirection:"column",gap:10,fontSize:13},children:[s.jsxs("div",{children:[s.jsx("p",{style:{fontSize:11,fontWeight:700,color:"var(--pe-teal)",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:3},children:"Deskripsi"}),s.jsx("p",{style:{color:"var(--pe-text)",fontWeight:500},children:A.deskripsi||"-"})]}),s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:16},children:[s.jsxs("div",{children:[s.jsx("p",{style:{fontSize:11,fontWeight:700,color:"var(--pe-teal)",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:3},children:"Penerima"}),s.jsx("p",{style:{color:"var(--pe-text)",fontWeight:600},children:A.penerima||"-"})]}),s.jsxs("div",{style:{textAlign:"right"},children:[s.jsx("p",{style:{fontSize:11,fontWeight:700,color:"var(--pe-teal)",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:3},children:"Petugas"}),s.jsx("p",{style:{color:"var(--pe-text)",fontWeight:600},children:A.petugas_input||"-"})]})]})]}),s.jsxs("div",{style:{display:"flex",gap:8,marginTop:16,alignItems:"center"},children:[A.bukti_nota?s.jsx("a",{href:k(A.bukti_nota),target:"_blank",rel:"noreferrer",title:"Lihat Nota",className:"pe-mobile-nota",children:s.jsx(jo,{size:18})}):s.jsx("span",{title:"Tidak ada nota",className:"pe-mobile-nota-off",children:s.jsx(ql,{size:18})}),s.jsx("button",{className:"pe-mobile-edit",onClick:()=>B(A.id),children:"Edit"}),s.jsx("button",{className:"pe-mobile-del",onClick:()=>R(A.id),disabled:x.isLoading,children:"Hapus"})]})]},A.id)}):s.jsxs("div",{style:{padding:"40px 0",textAlign:"center"},children:[s.jsx("div",{className:"pe-empty-icon",children:s.jsx($n,{size:26,color:"#3A9EA3"})}),s.jsx("p",{style:{fontWeight:700,color:"var(--pe-text-heading)",fontSize:15},children:"Tidak ada data pengeluaran"}),s.jsx("p",{style:{fontSize:13,color:"var(--pe-teal)",marginTop:4},children:"Silakan lakukan filter data"})]})}),b.totalPages>1&&s.jsxs("div",{className:"pe-pagination",children:[s.jsxs("p",{className:"pe-page-info",children:["Total data: ",b.total]}),s.jsxs("p",{className:"pe-page-info",children:["Halaman ",b.page," dari ",b.totalPages]})]})]})]})]})},Am=[{value:"honor",label:"Honor"},{value:"catering",label:"Catering"},{value:"sarana_prasarana",label:"Sarana Prasarana"},{value:"lainnya",label:"Lainnya"}],td=t=>t.replace(/\D/g,""),Sh=()=>{var ee,A;const t=na(),{user:e}=Li(),{id:r}=Gl(),a=!!r,i=ia(),[n,l]=me.useState({kategori:"",nominal:"",tanggal:new Date().toISOString().split("T")[0],deskripsi:"",penerima:"",bukti_nota:null}),[c,u]=me.useState({}),[f,g]=me.useState(null),[b,y]=me.useState(null),{data:m,isLoading:k}=Pr({queryKey:["pengeluaran",r],queryFn:()=>go.getPengeluaranById(r),enabled:a,retry:!1,refetchOnWindowFocus:!1}),N=_r({mutationFn:S=>go.createPengeluaran(S),onSuccess:()=>{mt.success("Pengeluaran berhasil ditambahkan"),t("/pengeluaran")},onError:S=>{var M,ne;return mt.error(((ne=(M=S.response)==null?void 0:M.data)==null?void 0:ne.message)||"Gagal menambahkan pengeluaran")}}),_=_r({mutationFn:S=>go.updatePengeluaran(r,S),onSuccess:()=>{mt.success("Pengeluaran berhasil diperbarui"),i.invalidateQueries(["pengeluaran"]),t("/pengeluaran")},onError:S=>{var M,ne;return mt.error(((ne=(M=S.response)==null?void 0:M.data)==null?void 0:ne.message)||"Gagal memperbarui pengeluaran")}});me.useEffect(()=>{var M;if(!a||!((M=m==null?void 0:m.data)!=null&&M.data))return;const S=m.data.data;l({kategori:S.kategori||"",nominal:S.nominal?String(S.nominal):"",tanggal:S.tanggal?S.tanggal.split("T")[0]:new Date().toISOString().split("T")[0],deskripsi:S.deskripsi||"",penerima:S.penerima||"",bukti_nota:null}),y(S.bukti_nota||null)},[a,m]);const x=()=>{const S={};return n.kategori||(S.kategori="Kategori wajib dipilih"),(!td(n.nominal)||parseInt(td(n.nominal))<=0)&&(S.nominal="Nominal wajib diisi dan harus lebih dari 0"),n.tanggal||(S.tanggal="Tanggal wajib diisi"),n.deskripsi.trim()||(S.deskripsi="Deskripsi wajib diisi"),n.penerima.trim()||(S.penerima="Penerima wajib diisi"),u(S),Object.keys(S).length===0},I=S=>M=>{l(ne=>({...ne,[S]:M.target.value})),c[S]&&u(ne=>({...ne,[S]:""}))},B=S=>{const M=S.target.files[0];if(!M)return;if(!["image/jpeg","image/jpg","image/png","application/pdf"].includes(M.type)){mt.error("File harus berupa gambar (JPG, PNG) atau PDF");return}if(M.size>5*1024*1024){mt.error("Ukuran file maksimal 5MB");return}if(l(E=>({...E,bukti_nota:M})),M.type.startsWith("image/")){const E=new FileReader;E.onload=T=>g(T.target.result),E.readAsDataURL(M)}else g(null)},R=S=>{if(S.preventDefault(),!x())return;const M=new FormData;M.append("kategori",n.kategori),M.append("nominal",parseInt(td(n.nominal))),M.append("tanggal",n.tanggal),M.append("deskripsi",n.deskripsi),M.append("penerima",n.penerima),M.append("petugas_input",e.username),n.bukti_nota&&M.append("bukti_nota",n.bukti_nota),a?_.mutate(M):N.mutate(M)},Z=a?_.isLoading:N.isLoading;return a&&k?s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh"},children:s.jsx(jr,{})}):s.jsxs("div",{className:"tp-root",children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16,marginBottom:28,maxWidth:720},children:[s.jsx("button",{className:"tp-back-btn",onClick:()=>t("/pengeluaran"),children:s.jsx(Vn,{size:18})}),s.jsxs("div",{children:[s.jsx("h1",{style:{fontSize:22,fontWeight:800,color:"var(--text)",margin:0},children:a?"Edit Pengeluaran":"Tambah Pengeluaran"}),s.jsx("p",{style:{fontSize:13,color:"var(--text-muted)",margin:"2px 0 0",fontWeight:500},children:a?"Perbarui data pengeluaran":"Tambahkan data pengeluaran baru"})]})]}),s.jsx("div",{className:"tp-card",children:s.jsxs("form",{onSubmit:R,children:[s.jsx("p",{className:"tp-section-title",children:"Informasi Pengeluaran"}),s.jsxs("div",{className:"tp-grid-2",style:{marginBottom:20},children:[s.jsx("div",{children:s.jsx(Or,{label:"Kategori",options:Am,value:n.kategori,onChange:I("kategori"),error:c.kategori,required:!0})}),s.jsx("div",{children:s.jsx(rc,{label:"Nominal (Rp)",value:n.nominal,onChange:S=>{l(M=>({...M,nominal:S.target.value})),c.nominal&&u(M=>({...M,nominal:""}))},error:c.nominal,required:!0})}),s.jsx("div",{children:s.jsx(Kn,{label:"Tanggal",value:n.tanggal,onChange:S=>l(M=>({...M,tanggal:S})),error:c.tanggal,required:!0})}),s.jsxs("div",{children:[s.jsx("label",{className:"tp-label tp-required",children:"Penerima"}),s.jsx("input",{type:"text",placeholder:"Masukkan nama penerima",value:n.penerima,onChange:I("penerima"),className:`tp-input${c.penerima?" error":""}`}),c.penerima&&s.jsx("p",{className:"tp-error-text",children:c.penerima})]})]}),s.jsxs("div",{style:{marginBottom:20},children:[s.jsx("label",{className:"tp-label tp-required",children:"Deskripsi"}),s.jsx("textarea",{rows:3,placeholder:"Masukkan deskripsi pengeluaran",value:n.deskripsi,onChange:I("deskripsi"),className:`tp-textarea${c.deskripsi?" error":""}`}),c.deskripsi&&s.jsx("p",{className:"tp-error-text",children:c.deskripsi})]}),s.jsx("p",{className:"tp-section-title",children:"Bukti Nota"}),s.jsxs("div",{style:{marginBottom:20},children:[s.jsxs("div",{className:"tp-upload-zone",children:[s.jsx("input",{type:"file",accept:"image/*,.pdf",onChange:B}),s.jsx("div",{className:"tp-upload-icon",children:s.jsx(U2,{size:18,color:"#fff"})}),s.jsx("p",{style:{fontSize:13,fontWeight:600,color:"var(--accent-dark)"},children:"Klik atau seret file ke sini"}),s.jsx("p",{className:"tp-upload-hint",children:"JPG, PNG, PDF · Maks. 5MB"})]}),n.bukti_nota&&s.jsx("div",{style:{marginTop:10},children:s.jsx("span",{className:"tp-file-chip",children:n.bukti_nota.name})}),!n.bukti_nota&&b&&s.jsx("div",{style:{marginTop:10},children:s.jsxs("span",{className:"tp-file-chip tp-file-chip-existing",children:["File saat ini: ",b]})}),f&&s.jsx("div",{className:"tp-preview",children:s.jsx("img",{src:f,alt:"Preview"})})]}),s.jsx("div",{style:{marginBottom:24},children:s.jsxs("div",{className:"tp-petugas-box",children:[s.jsx("div",{className:"tp-petugas-avatar",children:((A=(ee=e==null?void 0:e.username)==null?void 0:ee[0])==null?void 0:A.toUpperCase())||"P"}),s.jsxs("div",{children:[s.jsx("p",{className:"tp-petugas-label",children:"Petugas Input"}),s.jsx("p",{className:"tp-petugas-value",children:e==null?void 0:e.username})]})]})}),s.jsxs("div",{style:{display:"flex",gap:12,paddingTop:20,borderTop:"1.5px solid var(--border)",flexWrap:"wrap"},children:[s.jsx("button",{type:"button",className:"tp-btn-cancel",onClick:()=>t("/pengeluaran"),children:"Batal"}),s.jsxs("button",{type:"submit",className:"tp-btn-submit",disabled:Z,children:[s.jsx(tc,{size:15}),Z?a?"Memperbarui...":"Menyimpan...":a?"Perbarui Pengeluaran":"Simpan Pengeluaran"]})]})]})})]})},Lm="modulepreload",Pm=function(t){return"/"+t},Ah={},Td=function(e,r,a){let i=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));i=Promise.allSettled(r.map(u=>{if(u=Pm(u),u in Ah)return;Ah[u]=!0;const f=u.endsWith(".css"),g=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${g}`))return;const b=document.createElement("link");if(b.rel=f?"stylesheet":Lm,f||(b.as="script"),b.crossOrigin="",b.href=u,c&&b.setAttribute("nonce",c),document.head.appendChild(b),f)return new Promise((y,m)=>{b.addEventListener("load",y),b.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${u}`)))})}))}function n(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return i.then(l=>{for(const c of l||[])c.status==="rejected"&&n(c.reason);return e().catch(n)})};function kt(t){"@babel/helpers - typeof";return kt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},kt(t)}var wr=Uint8Array,Gr=Uint16Array,hu=Int32Array,ac=new wr([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),nc=new wr([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Md=new wr([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Xf=function(t,e){for(var r=new Gr(31),a=0;a<31;++a)r[a]=e+=1<<t[a-1];for(var i=new hu(r[30]),a=1;a<30;++a)for(var n=r[a];n<r[a+1];++n)i[n]=n-r[a]<<5|a;return{b:r,r:i}},Zf=Xf(ac,2),ep=Zf.b,Bd=Zf.r;ep[28]=258,Bd[258]=28;var tp=Xf(nc,0),_m=tp.b,Lh=tp.r,Od=new Gr(32768);for(var It=0;It<32768;++It){var Cn=(It&43690)>>1|(It&21845)<<1;Cn=(Cn&52428)>>2|(Cn&13107)<<2,Cn=(Cn&61680)>>4|(Cn&3855)<<4,Od[It]=((Cn&65280)>>8|(Cn&255)<<8)>>1}var za=function(t,e,r){for(var a=t.length,i=0,n=new Gr(e);i<a;++i)t[i]&&++n[t[i]-1];var l=new Gr(e);for(i=1;i<e;++i)l[i]=l[i-1]+n[i-1]<<1;var c;if(r){c=new Gr(1<<e);var u=15-e;for(i=0;i<a;++i)if(t[i])for(var f=i<<4|t[i],g=e-t[i],b=l[t[i]-1]++<<g,y=b|(1<<g)-1;b<=y;++b)c[Od[b]>>u]=f}else for(c=new Gr(a),i=0;i<a;++i)t[i]&&(c[i]=Od[l[t[i]-1]++]>>15-t[i]);return c},Gn=new wr(288);for(var It=0;It<144;++It)Gn[It]=8;for(var It=144;It<256;++It)Gn[It]=9;for(var It=256;It<280;++It)Gn[It]=7;for(var It=280;It<288;++It)Gn[It]=8;var No=new wr(32);for(var It=0;It<32;++It)No[It]=5;var Cm=za(Gn,9,0),Fm=za(Gn,9,1),Im=za(No,5,0),Dm=za(No,5,1),rd=function(t){for(var e=t[0],r=1;r<t.length;++r)t[r]>e&&(e=t[r]);return e},ba=function(t,e,r){var a=e/8|0;return(t[a]|t[a+1]<<8)>>(e&7)&r},ad=function(t,e){var r=e/8|0;return(t[r]|t[r+1]<<8|t[r+2]<<16)>>(e&7)},fu=function(t){return(t+7)/8|0},rp=function(t,e,r){return(r==null||r>t.length)&&(r=t.length),new wr(t.subarray(e,r))},Em=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ya=function(t,e,r){var a=new Error(e||Em[t]);if(a.code=t,Error.captureStackTrace&&Error.captureStackTrace(a,ya),!r)throw a;return a},Tm=function(t,e,r,a){var i=t.length,n=0;if(!i||e.f&&!e.l)return r||new wr(0);var l=!r,c=l||e.i!=2,u=e.i;l&&(r=new wr(i*3));var f=function(Se){var De=r.length;if(Se>De){var _e=new wr(Math.max(De*2,Se));_e.set(r),r=_e}},g=e.f||0,b=e.p||0,y=e.b||0,m=e.l,k=e.d,N=e.m,_=e.n,x=i*8;do{if(!m){g=ba(t,b,1);var I=ba(t,b+1,3);if(b+=3,I)if(I==1)m=Fm,k=Dm,N=9,_=5;else if(I==2){var ee=ba(t,b,31)+257,A=ba(t,b+10,15)+4,S=ee+ba(t,b+5,31)+1;b+=14;for(var M=new wr(S),ne=new wr(19),E=0;E<A;++E)ne[Md[E]]=ba(t,b+E*3,7);b+=A*3;for(var T=rd(ne),K=(1<<T)-1,H=za(ne,T,1),E=0;E<S;){var ce=H[ba(t,b,K)];b+=ce&15;var B=ce>>4;if(B<16)M[E++]=B;else{var ue=0,pe=0;for(B==16?(pe=3+ba(t,b,3),b+=2,ue=M[E-1]):B==17?(pe=3+ba(t,b,7),b+=3):B==18&&(pe=11+ba(t,b,127),b+=7);pe--;)M[E++]=ue}}var de=M.subarray(0,ee),fe=M.subarray(ee);N=rd(de),_=rd(fe),m=za(de,N,1),k=za(fe,_,1)}else ya(1);else{var B=fu(b)+4,R=t[B-4]|t[B-3]<<8,Z=B+R;if(Z>i){u&&ya(0);break}c&&f(y+R),r.set(t.subarray(B,Z),y),e.b=y+=R,e.p=b=Z*8,e.f=g;continue}if(b>x){u&&ya(0);break}}c&&f(y+131072);for(var ve=(1<<N)-1,Ie=(1<<_)-1,C=b;;C=b){var ue=m[ad(t,b)&ve],z=ue>>4;if(b+=ue&15,b>x){u&&ya(0);break}if(ue||ya(2),z<256)r[y++]=z;else if(z==256){C=b,m=null;break}else{var U=z-254;if(z>264){var E=z-257,Y=ac[E];U=ba(t,b,(1<<Y)-1)+ep[E],b+=Y}var re=k[ad(t,b)&Ie],V=re>>4;re||ya(3),b+=re&15;var fe=_m[V];if(V>3){var Y=nc[V];fe+=ad(t,b)&(1<<Y)-1,b+=Y}if(b>x){u&&ya(0);break}c&&f(y+131072);var Q=y+U;if(y<fe){var se=n-fe,Ne=Math.min(fe,Q);for(se+y<0&&ya(3);y<Ne;++y)r[y]=a[se+y]}for(;y<Q;++y)r[y]=r[y-fe]}}e.l=m,e.p=C,e.b=y,e.f=g,m&&(g=1,e.m=N,e.d=k,e.n=_)}while(!g);return y!=r.length&&l?rp(r,0,y):r.subarray(0,y)},en=function(t,e,r){r<<=e&7;var a=e/8|0;t[a]|=r,t[a+1]|=r>>8},uo=function(t,e,r){r<<=e&7;var a=e/8|0;t[a]|=r,t[a+1]|=r>>8,t[a+2]|=r>>16},nd=function(t,e){for(var r=[],a=0;a<t.length;++a)t[a]&&r.push({s:a,f:t[a]});var i=r.length,n=r.slice();if(!i)return{t:np,l:0};if(i==1){var l=new wr(r[0].s+1);return l[r[0].s]=1,{t:l,l:1}}r.sort(function(Z,ee){return Z.f-ee.f}),r.push({s:-1,f:25001});var c=r[0],u=r[1],f=0,g=1,b=2;for(r[0]={s:-1,f:c.f+u.f,l:c,r:u};g!=i-1;)c=r[r[f].f<r[b].f?f++:b++],u=r[f!=g&&r[f].f<r[b].f?f++:b++],r[g++]={s:-1,f:c.f+u.f,l:c,r:u};for(var y=n[0].s,a=1;a<i;++a)n[a].s>y&&(y=n[a].s);var m=new Gr(y+1),k=Rd(r[g-1],m,0);if(k>e){var a=0,N=0,_=k-e,x=1<<_;for(n.sort(function(ee,A){return m[A.s]-m[ee.s]||ee.f-A.f});a<i;++a){var I=n[a].s;if(m[I]>e)N+=x-(1<<k-m[I]),m[I]=e;else break}for(N>>=_;N>0;){var B=n[a].s;m[B]<e?N-=1<<e-m[B]++-1:++a}for(;a>=0&&N;--a){var R=n[a].s;m[R]==e&&(--m[R],++N)}k=e}return{t:new wr(m),l:k}},Rd=function(t,e,r){return t.s==-1?Math.max(Rd(t.l,e,r+1),Rd(t.r,e,r+1)):e[t.s]=r},Ph=function(t){for(var e=t.length;e&&!t[--e];);for(var r=new Gr(++e),a=0,i=t[0],n=1,l=function(u){r[a++]=u},c=1;c<=e;++c)if(t[c]==i&&c!=e)++n;else{if(!i&&n>2){for(;n>138;n-=138)l(32754);n>2&&(l(n>10?n-11<<5|28690:n-3<<5|12305),n=0)}else if(n>3){for(l(i),--n;n>6;n-=6)l(8304);n>2&&(l(n-3<<5|8208),n=0)}for(;n--;)l(i);n=1,i=t[c]}return{c:r.subarray(0,a),n:e}},ho=function(t,e){for(var r=0,a=0;a<e.length;++a)r+=t[a]*e[a];return r},ap=function(t,e,r){var a=r.length,i=fu(e+2);t[i]=a&255,t[i+1]=a>>8,t[i+2]=t[i]^255,t[i+3]=t[i+1]^255;for(var n=0;n<a;++n)t[i+n+4]=r[n];return(i+4+a)*8},_h=function(t,e,r,a,i,n,l,c,u,f,g){en(e,g++,r),++i[256];for(var b=nd(i,15),y=b.t,m=b.l,k=nd(n,15),N=k.t,_=k.l,x=Ph(y),I=x.c,B=x.n,R=Ph(N),Z=R.c,ee=R.n,A=new Gr(19),S=0;S<I.length;++S)++A[I[S]&31];for(var S=0;S<Z.length;++S)++A[Z[S]&31];for(var M=nd(A,7),ne=M.t,E=M.l,T=19;T>4&&!ne[Md[T-1]];--T);var K=f+5<<3,H=ho(i,Gn)+ho(n,No)+l,ce=ho(i,y)+ho(n,N)+l+14+3*T+ho(A,ne)+2*A[16]+3*A[17]+7*A[18];if(u>=0&&K<=H&&K<=ce)return ap(e,g,t.subarray(u,u+f));var ue,pe,de,fe;if(en(e,g,1+(ce<H)),g+=2,ce<H){ue=za(y,m,0),pe=y,de=za(N,_,0),fe=N;var ve=za(ne,E,0);en(e,g,B-257),en(e,g+5,ee-1),en(e,g+10,T-4),g+=14;for(var S=0;S<T;++S)en(e,g+3*S,ne[Md[S]]);g+=3*T;for(var Ie=[I,Z],C=0;C<2;++C)for(var z=Ie[C],S=0;S<z.length;++S){var U=z[S]&31;en(e,g,ve[U]),g+=ne[U],U>15&&(en(e,g,z[S]>>5&127),g+=z[S]>>12)}}else ue=Cm,pe=Gn,de=Im,fe=No;for(var S=0;S<c;++S){var Y=a[S];if(Y>255){var U=Y>>18&31;uo(e,g,ue[U+257]),g+=pe[U+257],U>7&&(en(e,g,Y>>23&31),g+=ac[U]);var re=Y&31;uo(e,g,de[re]),g+=fe[re],re>3&&(uo(e,g,Y>>5&8191),g+=nc[re])}else uo(e,g,ue[Y]),g+=pe[Y]}return uo(e,g,ue[256]),g+pe[256]},Mm=new hu([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),np=new wr(0),Bm=function(t,e,r,a,i,n){var l=n.z||t.length,c=new wr(a+l+5*(1+Math.ceil(l/7e3))+i),u=c.subarray(a,c.length-i),f=n.l,g=(n.r||0)&7;if(e){g&&(u[0]=n.r>>3);for(var b=Mm[e-1],y=b>>13,m=b&8191,k=(1<<r)-1,N=n.p||new Gr(32768),_=n.h||new Gr(k+1),x=Math.ceil(r/3),I=2*x,B=function(Ge){return(t[Ge]^t[Ge+1]<<x^t[Ge+2]<<I)&k},R=new hu(25e3),Z=new Gr(288),ee=new Gr(32),A=0,S=0,M=n.i||0,ne=0,E=n.w||0,T=0;M+2<l;++M){var K=B(M),H=M&32767,ce=_[K];if(N[H]=ce,_[K]=H,E<=M){var ue=l-M;if((A>7e3||ne>24576)&&(ue>423||!f)){g=_h(t,u,0,R,Z,ee,S,ne,T,M-T,g),ne=A=S=0,T=M;for(var pe=0;pe<286;++pe)Z[pe]=0;for(var pe=0;pe<30;++pe)ee[pe]=0}var de=2,fe=0,ve=m,Ie=H-ce&32767;if(ue>2&&K==B(M-Ie))for(var C=Math.min(y,ue)-1,z=Math.min(32767,M),U=Math.min(258,ue);Ie<=z&&--ve&&H!=ce;){if(t[M+de]==t[M+de-Ie]){for(var Y=0;Y<U&&t[M+Y]==t[M+Y-Ie];++Y);if(Y>de){if(de=Y,fe=Ie,Y>C)break;for(var re=Math.min(Ie,Y-2),V=0,pe=0;pe<re;++pe){var Q=M-Ie+pe&32767,se=N[Q],Ne=Q-se&32767;Ne>V&&(V=Ne,ce=Q)}}}H=ce,ce=N[H],Ie+=H-ce&32767}if(fe){R[ne++]=268435456|Bd[de]<<18|Lh[fe];var Se=Bd[de]&31,De=Lh[fe]&31;S+=ac[Se]+nc[De],++Z[257+Se],++ee[De],E=M+de,++A}else R[ne++]=t[M],++Z[t[M]]}}for(M=Math.max(M,E);M<l;++M)R[ne++]=t[M],++Z[t[M]];g=_h(t,u,f,R,Z,ee,S,ne,T,M-T,g),f||(n.r=g&7|u[g/8|0]<<3,g-=7,n.h=_,n.p=N,n.i=M,n.w=E)}else{for(var M=n.w||0;M<l+f;M+=65535){var _e=M+65535;_e>=l&&(u[g/8|0]=f,_e=l),g=ap(u,g+1,t.subarray(M,_e))}n.i=l}return rp(c,0,a+fu(g)+i)},ip=function(){var t=1,e=0;return{p:function(r){for(var a=t,i=e,n=r.length|0,l=0;l!=n;){for(var c=Math.min(l+2655,n);l<c;++l)i+=a+=r[l];a=(a&65535)+15*(a>>16),i=(i&65535)+15*(i>>16)}t=a,e=i},d:function(){return t%=65521,e%=65521,(t&255)<<24|(t&65280)<<8|(e&255)<<8|e>>8}}},Om=function(t,e,r,a,i){if(!i&&(i={l:1},e.dictionary)){var n=e.dictionary.subarray(-32768),l=new wr(n.length+t.length);l.set(n),l.set(t,n.length),t=l,i.w=n.length}return Bm(t,e.level==null?6:e.level,e.mem==null?i.l?Math.ceil(Math.max(8,Math.min(13,Math.log(t.length)))*1.5):20:12+e.mem,r,a,i)},sp=function(t,e,r){for(;r;++e)t[e]=r,r>>>=8},Rm=function(t,e){var r=e.level,a=r==0?0:r<6?1:r==9?3:2;if(t[0]=120,t[1]=a<<6|(e.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,e.dictionary){var i=ip();i.p(e.dictionary),sp(t,2,i.d())}},zm=function(t,e){return((t[0]&15)!=8||t[0]>>4>7||(t[0]<<8|t[1])%31)&&ya(6,"invalid zlib data"),(t[1]>>5&1)==1&&ya(6,"invalid zlib data: "+(t[1]&32?"need":"unexpected")+" dictionary"),(t[1]>>3&4)+2};function zd(t,e){e||(e={});var r=ip();r.p(t);var a=Om(t,e,e.dictionary?6:2,4);return Rm(a,e),sp(a,a.length-4,r.d()),a}function qm(t,e){return Tm(t.subarray(zm(t),-4),{i:2},e,e)}var Um=typeof TextDecoder<"u"&&new TextDecoder,Wm=0;try{Um.decode(np,{stream:!0}),Wm=1}catch{}var Ye=function(){return typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:this}();function id(){Ye.console&&typeof Ye.console.log=="function"&&Ye.console.log.apply(Ye.console,arguments)}var Pt={log:id,warn:function(t){Ye.console&&(typeof Ye.console.warn=="function"?Ye.console.warn.apply(Ye.console,arguments):id.call(null,arguments))},error:function(t){Ye.console&&(typeof Ye.console.error=="function"?Ye.console.error.apply(Ye.console,arguments):id(t))}};function sd(t,e,r){var a=new XMLHttpRequest;a.open("GET",t),a.responseType="blob",a.onload=function(){ui(a.response,e,r)},a.onerror=function(){Pt.error("could not download file")},a.send()}function Ch(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch{}return e.status>=200&&e.status<=299}function Ll(t){try{t.dispatchEvent(new MouseEvent("click"))}catch{var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var bo,qd,ui=Ye.saveAs||((typeof window>"u"?"undefined":kt(window))!=="object"||window!==Ye?function(){}:typeof HTMLAnchorElement<"u"&&"download"in HTMLAnchorElement.prototype?function(t,e,r){var a=Ye.URL||Ye.webkitURL,i=document.createElement("a");e=e||t.name||"download",i.download=e,i.rel="noopener",typeof t=="string"?(i.href=t,i.origin!==location.origin?Ch(i.href)?sd(t,e,r):Ll(i,i.target="_blank"):Ll(i)):(i.href=a.createObjectURL(t),setTimeout(function(){a.revokeObjectURL(i.href)},4e4),setTimeout(function(){Ll(i)},0))}:"msSaveOrOpenBlob"in navigator?function(t,e,r){if(e=e||t.name||"download",typeof t=="string")if(Ch(t))sd(t,e,r);else{var a=document.createElement("a");a.href=t,a.target="_blank",setTimeout(function(){Ll(a)})}else navigator.msSaveOrOpenBlob(function(i,n){return n===void 0?n={autoBom:!1}:kt(n)!=="object"&&(Pt.warn("Deprecated: Expected third argument to be a object"),n={autoBom:!n}),n.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(i.type)?new Blob(["\uFEFF",i],{type:i.type}):i}(t,r),e)}:function(t,e,r,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),typeof t=="string")return sd(t,e,r);var i=t.type==="application/octet-stream",n=/constructor/i.test(Ye.HTMLElement)||Ye.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||i&&n)&&(typeof FileReader>"u"?"undefined":kt(FileReader))==="object"){var c=new FileReader;c.onloadend=function(){var g=c.result;g=l?g:g.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=g:location=g,a=null},c.readAsDataURL(t)}else{var u=Ye.URL||Ye.webkitURL,f=u.createObjectURL(t);a?a.location=f:location.href=f,a=null,setTimeout(function(){u.revokeObjectURL(f)},4e4)}});/**
 * A class to parse color values
 * @author Stoyan Stefanov <sstoo@gmail.com>
 * {@link   http://www.phpied.com/rgb-color-parser-in-javascript/}
 * @license Use it if you like it
 */function op(t){var e;t=t||"",this.ok=!1,t.charAt(0)=="#"&&(t=t.substr(1,6)),t={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dodgerblue:"1e90ff",feldspar:"d19275",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslateblue:"8470ff",lightslategray:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",violetred:"d02090",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"}[t=(t=t.replace(/ /g,"")).toLowerCase()]||t;for(var r=[{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,example:["rgb(123, 234, 45)","rgb(255,234,245)"],process:function(c){return[parseInt(c[1]),parseInt(c[2]),parseInt(c[3])]}},{re:/^(\w{2})(\w{2})(\w{2})$/,example:["#00ff00","336699"],process:function(c){return[parseInt(c[1],16),parseInt(c[2],16),parseInt(c[3],16)]}},{re:/^(\w{1})(\w{1})(\w{1})$/,example:["#fb0","f0f"],process:function(c){return[parseInt(c[1]+c[1],16),parseInt(c[2]+c[2],16),parseInt(c[3]+c[3],16)]}}],a=0;a<r.length;a++){var i=r[a].re,n=r[a].process,l=i.exec(t);l&&(e=n(l),this.r=e[0],this.g=e[1],this.b=e[2],this.ok=!0)}this.r=this.r<0||isNaN(this.r)?0:this.r>255?255:this.r,this.g=this.g<0||isNaN(this.g)?0:this.g>255?255:this.g,this.b=this.b<0||isNaN(this.b)?0:this.b>255?255:this.b,this.toRGB=function(){return"rgb("+this.r+", "+this.g+", "+this.b+")"},this.toHex=function(){var c=this.r.toString(16),u=this.g.toString(16),f=this.b.toString(16);return c.length==1&&(c="0"+c),u.length==1&&(u="0"+u),f.length==1&&(f="0"+f),"#"+c+u+f}}/**
 * @license
 * Joseph Myers does not specify a particular license for his work.
 *
 * Author: Joseph Myers
 * Accessed from: http://www.myersdaily.org/joseph/javascript/md5.js
 *
 * Modified by: Owen Leong
 */function od(t,e){var r=t[0],a=t[1],i=t[2],n=t[3];r=mr(r,a,i,n,e[0],7,-680876936),n=mr(n,r,a,i,e[1],12,-389564586),i=mr(i,n,r,a,e[2],17,606105819),a=mr(a,i,n,r,e[3],22,-1044525330),r=mr(r,a,i,n,e[4],7,-176418897),n=mr(n,r,a,i,e[5],12,1200080426),i=mr(i,n,r,a,e[6],17,-1473231341),a=mr(a,i,n,r,e[7],22,-45705983),r=mr(r,a,i,n,e[8],7,1770035416),n=mr(n,r,a,i,e[9],12,-1958414417),i=mr(i,n,r,a,e[10],17,-42063),a=mr(a,i,n,r,e[11],22,-1990404162),r=mr(r,a,i,n,e[12],7,1804603682),n=mr(n,r,a,i,e[13],12,-40341101),i=mr(i,n,r,a,e[14],17,-1502002290),r=gr(r,a=mr(a,i,n,r,e[15],22,1236535329),i,n,e[1],5,-165796510),n=gr(n,r,a,i,e[6],9,-1069501632),i=gr(i,n,r,a,e[11],14,643717713),a=gr(a,i,n,r,e[0],20,-373897302),r=gr(r,a,i,n,e[5],5,-701558691),n=gr(n,r,a,i,e[10],9,38016083),i=gr(i,n,r,a,e[15],14,-660478335),a=gr(a,i,n,r,e[4],20,-405537848),r=gr(r,a,i,n,e[9],5,568446438),n=gr(n,r,a,i,e[14],9,-1019803690),i=gr(i,n,r,a,e[3],14,-187363961),a=gr(a,i,n,r,e[8],20,1163531501),r=gr(r,a,i,n,e[13],5,-1444681467),n=gr(n,r,a,i,e[2],9,-51403784),i=gr(i,n,r,a,e[7],14,1735328473),r=br(r,a=gr(a,i,n,r,e[12],20,-1926607734),i,n,e[5],4,-378558),n=br(n,r,a,i,e[8],11,-2022574463),i=br(i,n,r,a,e[11],16,1839030562),a=br(a,i,n,r,e[14],23,-35309556),r=br(r,a,i,n,e[1],4,-1530992060),n=br(n,r,a,i,e[4],11,1272893353),i=br(i,n,r,a,e[7],16,-155497632),a=br(a,i,n,r,e[10],23,-1094730640),r=br(r,a,i,n,e[13],4,681279174),n=br(n,r,a,i,e[0],11,-358537222),i=br(i,n,r,a,e[3],16,-722521979),a=br(a,i,n,r,e[6],23,76029189),r=br(r,a,i,n,e[9],4,-640364487),n=br(n,r,a,i,e[12],11,-421815835),i=br(i,n,r,a,e[15],16,530742520),r=vr(r,a=br(a,i,n,r,e[2],23,-995338651),i,n,e[0],6,-198630844),n=vr(n,r,a,i,e[7],10,1126891415),i=vr(i,n,r,a,e[14],15,-1416354905),a=vr(a,i,n,r,e[5],21,-57434055),r=vr(r,a,i,n,e[12],6,1700485571),n=vr(n,r,a,i,e[3],10,-1894986606),i=vr(i,n,r,a,e[10],15,-1051523),a=vr(a,i,n,r,e[1],21,-2054922799),r=vr(r,a,i,n,e[8],6,1873313359),n=vr(n,r,a,i,e[15],10,-30611744),i=vr(i,n,r,a,e[6],15,-1560198380),a=vr(a,i,n,r,e[13],21,1309151649),r=vr(r,a,i,n,e[4],6,-145523070),n=vr(n,r,a,i,e[11],10,-1120210379),i=vr(i,n,r,a,e[2],15,718787259),a=vr(a,i,n,r,e[9],21,-343485551),t[0]=Wn(r,t[0]),t[1]=Wn(a,t[1]),t[2]=Wn(i,t[2]),t[3]=Wn(n,t[3])}function ic(t,e,r,a,i,n){return e=Wn(Wn(e,t),Wn(a,n)),Wn(e<<i|e>>>32-i,r)}function mr(t,e,r,a,i,n,l){return ic(e&r|~e&a,t,e,i,n,l)}function gr(t,e,r,a,i,n,l){return ic(e&a|r&~a,t,e,i,n,l)}function br(t,e,r,a,i,n,l){return ic(e^r^a,t,e,i,n,l)}function vr(t,e,r,a,i,n,l){return ic(r^(e|~a),t,e,i,n,l)}function lp(t){var e,r=t.length,a=[1732584193,-271733879,-1732584194,271733878];for(e=64;e<=t.length;e+=64)od(a,Hm(t.substring(e-64,e)));t=t.substring(e-64);var i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(e=0;e<t.length;e++)i[e>>2]|=t.charCodeAt(e)<<(e%4<<3);if(i[e>>2]|=128<<(e%4<<3),e>55)for(od(a,i),e=0;e<16;e++)i[e]=0;return i[14]=8*r,od(a,i),a}function Hm(t){var e,r=[];for(e=0;e<64;e+=4)r[e>>2]=t.charCodeAt(e)+(t.charCodeAt(e+1)<<8)+(t.charCodeAt(e+2)<<16)+(t.charCodeAt(e+3)<<24);return r}bo=Ye.atob.bind(Ye),qd=Ye.btoa.bind(Ye);var Fh="0123456789abcdef".split("");function $m(t){for(var e="",r=0;r<4;r++)e+=Fh[t>>8*r+4&15]+Fh[t>>8*r&15];return e}function Vm(t){return String.fromCharCode((255&t)>>0,(65280&t)>>8,(16711680&t)>>16,(4278190080&t)>>24)}function Ud(t){return lp(t).map(Vm).join("")}var Km=function(t){for(var e=0;e<t.length;e++)t[e]=$m(t[e]);return t.join("")}(lp("hello"))!="5d41402abc4b2a76b9719d911017c592";function Wn(t,e){if(Km){var r=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(r>>16)<<16|65535&r}return t+e&4294967295}/**
 * @license
 * FPDF is released under a permissive license: there is no usage restriction.
 * You may embed it freely in your application (commercial or not), with or
 * without modifications.
 *
 * Reference: http://www.fpdf.org/en/script/script37.php
 */function Wd(t,e){var r,a,i,n;if(t!==r){for(var l=(i=t,n=1+(256/t.length>>0),new Array(n+1).join(i)),c=[],u=0;u<256;u++)c[u]=u;var f=0;for(u=0;u<256;u++){var g=c[u];f=(f+g+l.charCodeAt(u))%256,c[u]=c[f],c[f]=g}r=t,a=c}else c=a;var b=e.length,y=0,m=0,k="";for(u=0;u<b;u++)m=(m+(g=c[y=(y+1)%256]))%256,c[y]=c[m],c[m]=g,l=c[(c[y]+c[m])%256],k+=String.fromCharCode(e.charCodeAt(u)^l);return k}/**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 * Author: Owen Leong (@owenl131)
 * Date: 15 Oct 2020
 * References:
 * https://www.cs.cmu.edu/~dst/Adobe/Gallery/anon21jul01-pdf-encryption.txt
 * https://github.com/foliojs/pdfkit/blob/master/lib/security.js
 * http://www.fpdf.org/en/script/script37.php
 */var Ih={print:4,modify:8,copy:16,"annot-forms":32};function ss(t,e,r,a){this.v=1,this.r=2;var i=192;t.forEach(function(c){if(Ih.perm!==void 0)throw new Error("Invalid permission: "+c);i+=Ih[c]}),this.padding="(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz";var n=(e+this.padding).substr(0,32),l=(r+this.padding).substr(0,32);this.O=this.processOwnerPassword(n,l),this.P=-(1+(255^i)),this.encryptionKey=Ud(n+this.O+this.lsbFirstWord(this.P)+this.hexToBytes(a)).substr(0,5),this.U=Wd(this.encryptionKey,this.padding)}function os(t){if(/[^\u0000-\u00ff]/.test(t))throw new Error("Invalid PDF Name Object: "+t+", Only accept ASCII characters.");for(var e="",r=t.length,a=0;a<r;a++){var i=t.charCodeAt(a);i<33||i===35||i===37||i===40||i===41||i===47||i===60||i===62||i===91||i===93||i===123||i===125||i>126?e+="#"+("0"+i.toString(16)).slice(-2):e+=t[a]}return e}function Dh(t){if(kt(t)!=="object")throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");var e={};this.subscribe=function(r,a,i){if(i=i||!1,typeof r!="string"||typeof a!="function"||typeof i!="boolean")throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");e.hasOwnProperty(r)||(e[r]={});var n=Math.random().toString(35);return e[r][n]=[a,!!i],n},this.unsubscribe=function(r){for(var a in e)if(e[a][r])return delete e[a][r],Object.keys(e[a]).length===0&&delete e[a],!0;return!1},this.publish=function(r){if(e.hasOwnProperty(r)){var a=Array.prototype.slice.call(arguments,1),i=[];for(var n in e[r]){var l=e[r][n];try{l[0].apply(t,a)}catch(c){Ye.console&&Pt.error("jsPDF PubSub Error",c.message,c)}l[1]&&i.push(n)}i.length&&i.forEach(this.unsubscribe)}},this.getTopics=function(){return e}}function Wl(t){if(!(this instanceof Wl))return new Wl(t);var e="opacity,stroke-opacity".split(",");for(var r in t)t.hasOwnProperty(r)&&e.indexOf(r)>=0&&(this[r]=t[r]);this.id="",this.objectNumber=-1}function cp(t,e){this.gState=t,this.matrix=e,this.id="",this.objectNumber=-1}function hi(t,e,r,a,i){if(!(this instanceof hi))return new hi(t,e,r,a,i);this.type=t==="axial"?2:3,this.coords=e,this.colors=r,cp.call(this,a,i)}function ls(t,e,r,a,i){if(!(this instanceof ls))return new ls(t,e,r,a,i);this.boundingBox=t,this.xStep=e,this.yStep=r,this.stream="",this.cloneIndex=0,cp.call(this,a,i)}function Ve(t){var e,r=typeof arguments[0]=="string"?arguments[0]:"p",a=arguments[1],i=arguments[2],n=arguments[3],l=[],c=1,u=16,f="S",g=null;kt(t=t||{})==="object"&&(r=t.orientation,a=t.unit||a,i=t.format||i,n=t.compress||t.compressPdf||n,(g=t.encryption||null)!==null&&(g.userPassword=g.userPassword||"",g.ownerPassword=g.ownerPassword||"",g.userPermissions=g.userPermissions||[]),c=typeof t.userUnit=="number"?Math.abs(t.userUnit):1,t.precision!==void 0&&(e=t.precision),t.floatPrecision!==void 0&&(u=t.floatPrecision),f=t.defaultPathOperation||"S"),l=t.filters||(n===!0?["FlateEncode"]:l),a=a||"mm",r=(""+(r||"P")).toLowerCase();var b=t.putOnlyUsedFonts||!1,y={},m={internal:{},__private__:{}};m.__private__.PubSub=Dh;var k="1.3",N=m.__private__.getPdfVersion=function(){return k};m.__private__.setPdfVersion=function(h){k=h};var _={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]};m.__private__.getPageFormats=function(){return _};var x=m.__private__.getPageFormat=function(h){return _[h]};i=i||"a4";var I={COMPAT:"compat",ADVANCED:"advanced"},B=I.COMPAT;function R(){this.saveGraphicsState(),W(new Ke(Me,0,0,-Me,0,mn()*Me).toString()+" cm"),this.setFontSize(this.getFontSize()/Me),f="n",B=I.ADVANCED}function Z(){this.restoreGraphicsState(),f="S",B=I.COMPAT}var ee=m.__private__.combineFontStyleAndFontWeight=function(h,j){if(h=="bold"&&j=="normal"||h=="bold"&&j==400||h=="normal"&&j=="italic"||h=="bold"&&j=="italic")throw new Error("Invalid Combination of fontweight and fontstyle");return j&&(h=j==400||j==="normal"?h==="italic"?"italic":"normal":j!=700&&j!=="bold"||h!=="normal"?(j==700?"bold":j)+""+h:"bold"),h};m.advancedAPI=function(h){var j=B===I.COMPAT;return j&&R.call(this),typeof h!="function"||(h(this),j&&Z.call(this)),this},m.compatAPI=function(h){var j=B===I.ADVANCED;return j&&Z.call(this),typeof h!="function"||(h(this),j&&R.call(this)),this},m.isAdvancedAPI=function(){return B===I.ADVANCED};var A,S=function(h){if(B!==I.ADVANCED)throw new Error(h+" is only available in 'advanced' API mode. You need to call advancedAPI() first.")},M=m.roundToPrecision=m.__private__.roundToPrecision=function(h,j){var q=e||j;if(isNaN(h)||isNaN(q))throw new Error("Invalid argument passed to jsPDF.roundToPrecision");return h.toFixed(q).replace(/0+$/,"")};A=m.hpf=m.__private__.hpf=typeof u=="number"?function(h){if(isNaN(h))throw new Error("Invalid argument passed to jsPDF.hpf");return M(h,u)}:u==="smart"?function(h){if(isNaN(h))throw new Error("Invalid argument passed to jsPDF.hpf");return M(h,h>-1&&h<1?16:5)}:function(h){if(isNaN(h))throw new Error("Invalid argument passed to jsPDF.hpf");return M(h,16)};var ne=m.f2=m.__private__.f2=function(h){if(isNaN(h))throw new Error("Invalid argument passed to jsPDF.f2");return M(h,2)},E=m.__private__.f3=function(h){if(isNaN(h))throw new Error("Invalid argument passed to jsPDF.f3");return M(h,3)},T=m.scale=m.__private__.scale=function(h){if(isNaN(h))throw new Error("Invalid argument passed to jsPDF.scale");return B===I.COMPAT?h*Me:B===I.ADVANCED?h:void 0},K=function(h){return B===I.COMPAT?mn()-h:B===I.ADVANCED?h:void 0},H=function(h){return T(K(h))};m.__private__.setPrecision=m.setPrecision=function(h){typeof parseInt(h,10)=="number"&&(e=parseInt(h,10))};var ce,ue="00000000000000000000000000000000",pe=m.__private__.getFileId=function(){return ue},de=m.__private__.setFileId=function(h){return ue=h!==void 0&&/^[a-fA-F0-9]{32}$/.test(h)?h.toUpperCase():ue.split("").map(function(){return"ABCDEF0123456789".charAt(Math.floor(16*Math.random()))}).join(""),g!==null&&(hr=new ss(g.userPermissions,g.userPassword,g.ownerPassword,ue)),ue};m.setFileId=function(h){return de(h),this},m.getFileId=function(){return pe()};var fe=m.__private__.convertDateToPDFDate=function(h){var j=h.getTimezoneOffset(),q=j<0?"+":"-",G=Math.floor(Math.abs(j/60)),ie=Math.abs(j%60),ge=[q,U(G),"'",U(ie),"'"].join("");return["D:",h.getFullYear(),U(h.getMonth()+1),U(h.getDate()),U(h.getHours()),U(h.getMinutes()),U(h.getSeconds()),ge].join("")},ve=m.__private__.convertPDFDateToDate=function(h){var j=parseInt(h.substr(2,4),10),q=parseInt(h.substr(6,2),10)-1,G=parseInt(h.substr(8,2),10),ie=parseInt(h.substr(10,2),10),ge=parseInt(h.substr(12,2),10),ke=parseInt(h.substr(14,2),10);return new Date(j,q,G,ie,ge,ke,0)},Ie=m.__private__.setCreationDate=function(h){var j;if(h===void 0&&(h=new Date),h instanceof Date)j=fe(h);else{if(!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(h))throw new Error("Invalid argument passed to jsPDF.setCreationDate");j=h}return ce=j},C=m.__private__.getCreationDate=function(h){var j=ce;return h==="jsDate"&&(j=ve(ce)),j};m.setCreationDate=function(h){return Ie(h),this},m.getCreationDate=function(h){return C(h)};var z,U=m.__private__.padd2=function(h){return("0"+parseInt(h)).slice(-2)},Y=m.__private__.padd2Hex=function(h){return("00"+(h=h.toString())).substr(h.length)},re=0,V=[],Q=[],se=0,Ne=[],Se=[],De=!1,_e=Q,Ge=function(){re=0,se=0,Q=[],V=[],Ne=[],Wa=Kt(),ca=Kt()};m.__private__.setCustomOutputDestination=function(h){De=!0,_e=h};var be=function(h){De||(_e=h)};m.__private__.resetCustomOutputDestination=function(){De=!1,_e=Q};var W=m.__private__.out=function(h){return h=h.toString(),se+=h.length+1,_e.push(h),_e},rt=m.__private__.write=function(h){return W(arguments.length===1?h.toString():Array.prototype.join.call(arguments," "))},ze=m.__private__.getArrayBuffer=function(h){for(var j=h.length,q=new ArrayBuffer(j),G=new Uint8Array(q);j--;)G[j]=h.charCodeAt(j);return q},Ae=[["Helvetica","helvetica","normal","WinAnsiEncoding"],["Helvetica-Bold","helvetica","bold","WinAnsiEncoding"],["Helvetica-Oblique","helvetica","italic","WinAnsiEncoding"],["Helvetica-BoldOblique","helvetica","bolditalic","WinAnsiEncoding"],["Courier","courier","normal","WinAnsiEncoding"],["Courier-Bold","courier","bold","WinAnsiEncoding"],["Courier-Oblique","courier","italic","WinAnsiEncoding"],["Courier-BoldOblique","courier","bolditalic","WinAnsiEncoding"],["Times-Roman","times","normal","WinAnsiEncoding"],["Times-Bold","times","bold","WinAnsiEncoding"],["Times-Italic","times","italic","WinAnsiEncoding"],["Times-BoldItalic","times","bolditalic","WinAnsiEncoding"],["ZapfDingbats","zapfdingbats","normal",null],["Symbol","symbol","normal",null]];m.__private__.getStandardFonts=function(){return Ae};var Le=t.fontSize||16;m.__private__.setFontSize=m.setFontSize=function(h){return Le=B===I.ADVANCED?h/Me:h,this};var Te,Fe=m.__private__.getFontSize=m.getFontSize=function(){return B===I.COMPAT?Le:Le*Me},We=t.R2L||!1;m.__private__.setR2L=m.setR2L=function(h){return We=h,this},m.__private__.getR2L=m.getR2L=function(){return We};var Xe,it=m.__private__.setZoomMode=function(h){var j=[void 0,null,"fullwidth","fullheight","fullpage","original"];if(/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(h))Te=h;else if(isNaN(h)){if(j.indexOf(h)===-1)throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "'+h+'" is not recognized.');Te=h}else Te=parseInt(h,10)};m.__private__.getZoomMode=function(){return Te};var ot,ft=m.__private__.setPageMode=function(h){if([void 0,null,"UseNone","UseOutlines","UseThumbs","FullScreen"].indexOf(h)==-1)throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "'+h+'" is not recognized.');Xe=h};m.__private__.getPageMode=function(){return Xe};var Nt=m.__private__.setLayoutMode=function(h){if([void 0,null,"continuous","single","twoleft","tworight","two"].indexOf(h)==-1)throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "'+h+'" is not recognized.');ot=h};m.__private__.getLayoutMode=function(){return ot},m.__private__.setDisplayMode=m.setDisplayMode=function(h,j,q){return it(h),Nt(j),ft(q),this};var Je={title:"",subject:"",author:"",keywords:"",creator:""};m.__private__.getDocumentProperty=function(h){if(Object.keys(Je).indexOf(h)===-1)throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");return Je[h]},m.__private__.getDocumentProperties=function(){return Je},m.__private__.setDocumentProperties=m.setProperties=m.setDocumentProperties=function(h){for(var j in Je)Je.hasOwnProperty(j)&&h[j]&&(Je[j]=h[j]);return this},m.__private__.setDocumentProperty=function(h,j){if(Object.keys(Je).indexOf(h)===-1)throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");return Je[h]=j};var ct,Me,ur,gt,sa,At={},Dt={},ka=[],vt={},Qn={},Tt={},oa={},Ua=null,Mt=0,Ze=[],yt=new Dh(m),Xn=t.hotfixes||[],lr={},Na={},Sa=[],Ke=function h(j,q,G,ie,ge,ke){if(!(this instanceof h))return new h(j,q,G,ie,ge,ke);isNaN(j)&&(j=1),isNaN(q)&&(q=0),isNaN(G)&&(G=0),isNaN(ie)&&(ie=1),isNaN(ge)&&(ge=0),isNaN(ke)&&(ke=0),this._matrix=[j,q,G,ie,ge,ke]};Object.defineProperty(Ke.prototype,"sx",{get:function(){return this._matrix[0]},set:function(h){this._matrix[0]=h}}),Object.defineProperty(Ke.prototype,"shy",{get:function(){return this._matrix[1]},set:function(h){this._matrix[1]=h}}),Object.defineProperty(Ke.prototype,"shx",{get:function(){return this._matrix[2]},set:function(h){this._matrix[2]=h}}),Object.defineProperty(Ke.prototype,"sy",{get:function(){return this._matrix[3]},set:function(h){this._matrix[3]=h}}),Object.defineProperty(Ke.prototype,"tx",{get:function(){return this._matrix[4]},set:function(h){this._matrix[4]=h}}),Object.defineProperty(Ke.prototype,"ty",{get:function(){return this._matrix[5]},set:function(h){this._matrix[5]=h}}),Object.defineProperty(Ke.prototype,"a",{get:function(){return this._matrix[0]},set:function(h){this._matrix[0]=h}}),Object.defineProperty(Ke.prototype,"b",{get:function(){return this._matrix[1]},set:function(h){this._matrix[1]=h}}),Object.defineProperty(Ke.prototype,"c",{get:function(){return this._matrix[2]},set:function(h){this._matrix[2]=h}}),Object.defineProperty(Ke.prototype,"d",{get:function(){return this._matrix[3]},set:function(h){this._matrix[3]=h}}),Object.defineProperty(Ke.prototype,"e",{get:function(){return this._matrix[4]},set:function(h){this._matrix[4]=h}}),Object.defineProperty(Ke.prototype,"f",{get:function(){return this._matrix[5]},set:function(h){this._matrix[5]=h}}),Object.defineProperty(Ke.prototype,"rotation",{get:function(){return Math.atan2(this.shx,this.sx)}}),Object.defineProperty(Ke.prototype,"scaleX",{get:function(){return this.decompose().scale.sx}}),Object.defineProperty(Ke.prototype,"scaleY",{get:function(){return this.decompose().scale.sy}}),Object.defineProperty(Ke.prototype,"isIdentity",{get:function(){return this.sx===1&&this.shy===0&&this.shx===0&&this.sy===1&&this.tx===0&&this.ty===0}}),Ke.prototype.join=function(h){return[this.sx,this.shy,this.shx,this.sy,this.tx,this.ty].map(A).join(h)},Ke.prototype.multiply=function(h){var j=h.sx*this.sx+h.shy*this.shx,q=h.sx*this.shy+h.shy*this.sy,G=h.shx*this.sx+h.sy*this.shx,ie=h.shx*this.shy+h.sy*this.sy,ge=h.tx*this.sx+h.ty*this.shx+this.tx,ke=h.tx*this.shy+h.ty*this.sy+this.ty;return new Ke(j,q,G,ie,ge,ke)},Ke.prototype.decompose=function(){var h=this.sx,j=this.shy,q=this.shx,G=this.sy,ie=this.tx,ge=this.ty,ke=Math.sqrt(h*h+j*j),Be=(h/=ke)*q+(j/=ke)*G;q-=h*Be,G-=j*Be;var He=Math.sqrt(q*q+G*G);return Be/=He,h*(G/=He)<j*(q/=He)&&(h=-h,j=-j,Be=-Be,ke=-ke),{scale:new Ke(ke,0,0,He,0,0),translate:new Ke(1,0,0,1,ie,ge),rotate:new Ke(h,j,-j,h,0,0),skew:new Ke(1,0,Be,1,0,0)}},Ke.prototype.toString=function(h){return this.join(" ")},Ke.prototype.inversed=function(){var h=this.sx,j=this.shy,q=this.shx,G=this.sy,ie=this.tx,ge=this.ty,ke=1/(h*G-j*q),Be=G*ke,He=-j*ke,at=-q*ke,et=h*ke;return new Ke(Be,He,at,et,-Be*ie-at*ge,-He*ie-et*ge)},Ke.prototype.applyToPoint=function(h){var j=h.x*this.sx+h.y*this.shx+this.tx,q=h.x*this.shy+h.y*this.sy+this.ty;return new Ui(j,q)},Ke.prototype.applyToRectangle=function(h){var j=this.applyToPoint(h),q=this.applyToPoint(new Ui(h.x+h.w,h.y+h.h));return new Hs(j.x,j.y,q.x-j.x,q.y-j.y)},Ke.prototype.clone=function(){var h=this.sx,j=this.shy,q=this.shx,G=this.sy,ie=this.tx,ge=this.ty;return new Ke(h,j,q,G,ie,ge)},m.Matrix=Ke;var la=m.matrixMult=function(h,j){return j.multiply(h)},Aa=new Ke(1,0,0,1,0,0);m.unitMatrix=m.identityMatrix=Aa;var Cr=function(h,j){if(!Qn[h]){var q=(j instanceof hi?"Sh":"P")+(Object.keys(vt).length+1).toString(10);j.id=q,Qn[h]=q,vt[q]=j,yt.publish("addPattern",j)}};m.ShadingPattern=hi,m.TilingPattern=ls,m.addShadingPattern=function(h,j){return S("addShadingPattern()"),Cr(h,j),this},m.beginTilingPattern=function(h){S("beginTilingPattern()"),Jo(h.boundingBox[0],h.boundingBox[1],h.boundingBox[2]-h.boundingBox[0],h.boundingBox[3]-h.boundingBox[1],h.matrix)},m.endTilingPattern=function(h,j){S("endTilingPattern()"),j.stream=Se[z].join(`
`),Cr(h,j),yt.publish("endTilingPattern",j),Sa.pop().restore()};var Qt=m.__private__.newObject=function(){var h=Kt();return zr(h,!0),h},Kt=m.__private__.newObjectDeferred=function(){return re++,V[re]=function(){return se},re},zr=function(h,j){return j=typeof j=="boolean"&&j,V[h]=se,j&&W(h+" 0 obj"),h},_i=m.__private__.newAdditionalObject=function(){var h={objId:Kt(),content:""};return Ne.push(h),h},Wa=Kt(),ca=Kt(),da=m.__private__.decodeColorString=function(h){var j=h.split(" ");if(j.length!==2||j[1]!=="g"&&j[1]!=="G")j.length===5&&(j[4]==="k"||j[4]==="K")&&(j=[(1-j[0])*(1-j[3]),(1-j[1])*(1-j[3]),(1-j[2])*(1-j[3]),"r"]);else{var q=parseFloat(j[0]);j=[q,q,q,"r"]}for(var G="#",ie=0;ie<3;ie++)G+=("0"+Math.floor(255*parseFloat(j[ie])).toString(16)).slice(-2);return G},ua=m.__private__.encodeColorString=function(h){var j;typeof h=="string"&&(h={ch1:h});var q=h.ch1,G=h.ch2,ie=h.ch3,ge=h.ch4,ke=h.pdfColorType==="draw"?["G","RG","K"]:["g","rg","k"];if(typeof q=="string"&&q.charAt(0)!=="#"){var Be=new op(q);if(Be.ok)q=Be.toHex();else if(!/^\d*\.?\d*$/.test(q))throw new Error('Invalid color "'+q+'" passed to jsPDF.encodeColorString.')}if(typeof q=="string"&&/^#[0-9A-Fa-f]{3}$/.test(q)&&(q="#"+q[1]+q[1]+q[2]+q[2]+q[3]+q[3]),typeof q=="string"&&/^#[0-9A-Fa-f]{6}$/.test(q)){var He=parseInt(q.substr(1),16);q=He>>16&255,G=He>>8&255,ie=255&He}if(G===void 0||ge===void 0&&q===G&&G===ie)if(typeof q=="string")j=q+" "+ke[0];else switch(h.precision){case 2:j=ne(q/255)+" "+ke[0];break;case 3:default:j=E(q/255)+" "+ke[0]}else if(ge===void 0||kt(ge)==="object"){if(ge&&!isNaN(ge.a)&&ge.a===0)return j=["1.","1.","1.",ke[1]].join(" ");if(typeof q=="string")j=[q,G,ie,ke[1]].join(" ");else switch(h.precision){case 2:j=[ne(q/255),ne(G/255),ne(ie/255),ke[1]].join(" ");break;default:case 3:j=[E(q/255),E(G/255),E(ie/255),ke[1]].join(" ")}}else if(typeof q=="string")j=[q,G,ie,ge,ke[2]].join(" ");else switch(h.precision){case 2:j=[ne(q),ne(G),ne(ie),ne(ge),ke[2]].join(" ");break;case 3:default:j=[E(q),E(G),E(ie),E(ge),ke[2]].join(" ")}return j},La=m.__private__.getFilters=function(){return l},Yr=m.__private__.putStream=function(h){var j=(h=h||{}).data||"",q=h.filters||La(),G=h.alreadyAppliedFilters||[],ie=h.addLength1||!1,ge=j.length,ke=h.objectId,Be=function(fr){return fr};if(g!==null&&ke===void 0)throw new Error("ObjectId must be passed to putStream for file encryption");g!==null&&(Be=hr.encryptor(ke,0));var He={};q===!0&&(q=["FlateEncode"]);var at=h.additionalKeyValues||[],et=(He=Ve.API.processDataByFilters!==void 0?Ve.API.processDataByFilters(j,q):{data:j,reverseChain:[]}).reverseChain+(Array.isArray(G)?G.join(" "):G.toString());if(He.data.length!==0&&(at.push({key:"Length",value:He.data.length}),ie===!0&&at.push({key:"Length1",value:ge})),et.length!=0)if(et.split("/").length-1==1)at.push({key:"Filter",value:et});else{at.push({key:"Filter",value:"["+et+"]"});for(var ht=0;ht<at.length;ht+=1)if(at[ht].key==="DecodeParms"){for(var Et=[],Bt=0;Bt<He.reverseChain.split("/").length-1;Bt+=1)Et.push("null");Et.push(at[ht].value),at[ht].value="["+Et.join(" ")+"]"}}W("<<");for(var Gt=0;Gt<at.length;Gt++)W("/"+at[Gt].key+" "+at[Gt].value);W(">>"),He.data.length!==0&&(W("stream"),W(Be(He.data)),W("endstream"))},Pa=m.__private__.putPage=function(h){var j=h.number,q=h.data,G=h.objId,ie=h.contentsObjId;zr(G,!0),W("<</Type /Page"),W("/Parent "+h.rootDictionaryObjId+" 0 R"),W("/Resources "+h.resourceDictionaryObjId+" 0 R"),W("/MediaBox ["+parseFloat(A(h.mediaBox.bottomLeftX))+" "+parseFloat(A(h.mediaBox.bottomLeftY))+" "+A(h.mediaBox.topRightX)+" "+A(h.mediaBox.topRightY)+"]"),h.cropBox!==null&&W("/CropBox ["+A(h.cropBox.bottomLeftX)+" "+A(h.cropBox.bottomLeftY)+" "+A(h.cropBox.topRightX)+" "+A(h.cropBox.topRightY)+"]"),h.bleedBox!==null&&W("/BleedBox ["+A(h.bleedBox.bottomLeftX)+" "+A(h.bleedBox.bottomLeftY)+" "+A(h.bleedBox.topRightX)+" "+A(h.bleedBox.topRightY)+"]"),h.trimBox!==null&&W("/TrimBox ["+A(h.trimBox.bottomLeftX)+" "+A(h.trimBox.bottomLeftY)+" "+A(h.trimBox.topRightX)+" "+A(h.trimBox.topRightY)+"]"),h.artBox!==null&&W("/ArtBox ["+A(h.artBox.bottomLeftX)+" "+A(h.artBox.bottomLeftY)+" "+A(h.artBox.topRightX)+" "+A(h.artBox.topRightY)+"]"),typeof h.userUnit=="number"&&h.userUnit!==1&&W("/UserUnit "+h.userUnit),yt.publish("putPage",{objId:G,pageContext:Ze[j],pageNumber:j,page:q}),W("/Contents "+ie+" 0 R"),W(">>"),W("endobj");var ge=q.join(`
`);return B===I.ADVANCED&&(ge+=`
Q`),zr(ie,!0),Yr({data:ge,filters:La(),objectId:ie}),W("endobj"),G},Zn=m.__private__.putPages=function(){var h,j,q=[];for(h=1;h<=Mt;h++)Ze[h].objId=Kt(),Ze[h].contentsObjId=Kt();for(h=1;h<=Mt;h++)q.push(Pa({number:h,data:Se[h],objId:Ze[h].objId,contentsObjId:Ze[h].contentsObjId,mediaBox:Ze[h].mediaBox,cropBox:Ze[h].cropBox,bleedBox:Ze[h].bleedBox,trimBox:Ze[h].trimBox,artBox:Ze[h].artBox,userUnit:Ze[h].userUnit,rootDictionaryObjId:Wa,resourceDictionaryObjId:ca}));zr(Wa,!0),W("<</Type /Pages");var G="/Kids [";for(j=0;j<Mt;j++)G+=q[j]+" 0 R ";W(G+"]"),W("/Count "+Mt),W(">>"),W("endobj"),yt.publish("postPutPages")},Ci=function(h){yt.publish("putFont",{font:h,out:W,newObject:Qt,putStream:Yr}),h.isAlreadyPutted!==!0&&(h.objectNumber=Qt(),W("<<"),W("/Type /Font"),W("/BaseFont /"+os(h.postScriptName)),W("/Subtype /Type1"),typeof h.encoding=="string"&&W("/Encoding /"+h.encoding),W("/FirstChar 32"),W("/LastChar 255"),W(">>"),W("endobj"))},Fi=function(){for(var h in At)At.hasOwnProperty(h)&&(b===!1||b===!0&&y.hasOwnProperty(h))&&Ci(At[h])},Ii=function(h){h.objectNumber=Qt();var j=[];j.push({key:"Type",value:"/XObject"}),j.push({key:"Subtype",value:"/Form"}),j.push({key:"BBox",value:"["+[A(h.x),A(h.y),A(h.x+h.width),A(h.y+h.height)].join(" ")+"]"}),j.push({key:"Matrix",value:"["+h.matrix.toString()+"]"});var q=h.pages[1].join(`
`);Yr({data:q,additionalKeyValues:j,objectId:h.objectNumber}),W("endobj")},Di=function(){for(var h in lr)lr.hasOwnProperty(h)&&Ii(lr[h])},Io=function(h,j){var q,G=[],ie=1/(j-1);for(q=0;q<1;q+=ie)G.push(q);if(G.push(1),h[0].offset!=0){var ge={offset:0,color:h[0].color};h.unshift(ge)}if(h[h.length-1].offset!=1){var ke={offset:1,color:h[h.length-1].color};h.push(ke)}for(var Be="",He=0,at=0;at<G.length;at++){for(q=G[at];q>h[He+1].offset;)He++;var et=h[He].offset,ht=(q-et)/(h[He+1].offset-et),Et=h[He].color,Bt=h[He+1].color;Be+=Y(Math.round((1-ht)*Et[0]+ht*Bt[0]).toString(16))+Y(Math.round((1-ht)*Et[1]+ht*Bt[1]).toString(16))+Y(Math.round((1-ht)*Et[2]+ht*Bt[2]).toString(16))}return Be.trim()},oc=function(h,j){j||(j=21);var q=Qt(),G=Io(h.colors,j),ie=[];ie.push({key:"FunctionType",value:"0"}),ie.push({key:"Domain",value:"[0.0 1.0]"}),ie.push({key:"Size",value:"["+j+"]"}),ie.push({key:"BitsPerSample",value:"8"}),ie.push({key:"Range",value:"[0.0 1.0 0.0 1.0 0.0 1.0]"}),ie.push({key:"Decode",value:"[0.0 1.0 0.0 1.0 0.0 1.0]"}),Yr({data:G,additionalKeyValues:ie,alreadyAppliedFilters:["/ASCIIHexDecode"],objectId:q}),W("endobj"),h.objectNumber=Qt(),W("<< /ShadingType "+h.type),W("/ColorSpace /DeviceRGB");var ge="/Coords ["+A(parseFloat(h.coords[0]))+" "+A(parseFloat(h.coords[1]))+" ";h.type===2?ge+=A(parseFloat(h.coords[2]))+" "+A(parseFloat(h.coords[3])):ge+=A(parseFloat(h.coords[2]))+" "+A(parseFloat(h.coords[3]))+" "+A(parseFloat(h.coords[4]))+" "+A(parseFloat(h.coords[5])),W(ge+="]"),h.matrix&&W("/Matrix ["+h.matrix.toString()+"]"),W("/Function "+q+" 0 R"),W("/Extend [true true]"),W(">>"),W("endobj")},lc=function(h,j){var q=Kt(),G=Qt();j.push({resourcesOid:q,objectOid:G}),h.objectNumber=G;var ie=[];ie.push({key:"Type",value:"/Pattern"}),ie.push({key:"PatternType",value:"1"}),ie.push({key:"PaintType",value:"1"}),ie.push({key:"TilingType",value:"1"}),ie.push({key:"BBox",value:"["+h.boundingBox.map(A).join(" ")+"]"}),ie.push({key:"XStep",value:A(h.xStep)}),ie.push({key:"YStep",value:A(h.yStep)}),ie.push({key:"Resources",value:q+" 0 R"}),h.matrix&&ie.push({key:"Matrix",value:"["+h.matrix.toString()+"]"}),Yr({data:h.stream,additionalKeyValues:ie,objectId:h.objectNumber}),W("endobj")},Ei=function(h){var j;for(j in vt)vt.hasOwnProperty(j)&&(vt[j]instanceof hi?oc(vt[j]):vt[j]instanceof ls&&lc(vt[j],h))},Do=function(h){for(var j in h.objectNumber=Qt(),W("<<"),h)switch(j){case"opacity":W("/ca "+ne(h[j]));break;case"stroke-opacity":W("/CA "+ne(h[j]))}W(">>"),W("endobj")},cc=function(){var h;for(h in Tt)Tt.hasOwnProperty(h)&&Do(Tt[h])},Es=function(){for(var h in W("/XObject <<"),lr)lr.hasOwnProperty(h)&&lr[h].objectNumber>=0&&W("/"+h+" "+lr[h].objectNumber+" 0 R");yt.publish("putXobjectDict"),W(">>")},dc=function(){hr.oid=Qt(),W("<<"),W("/Filter /Standard"),W("/V "+hr.v),W("/R "+hr.r),W("/U <"+hr.toHexString(hr.U)+">"),W("/O <"+hr.toHexString(hr.O)+">"),W("/P "+hr.P),W(">>"),W("endobj")},Eo=function(){for(var h in W("/Font <<"),At)At.hasOwnProperty(h)&&(b===!1||b===!0&&y.hasOwnProperty(h))&&W("/"+h+" "+At[h].objectNumber+" 0 R");W(">>")},uc=function(){if(Object.keys(vt).length>0){for(var h in W("/Shading <<"),vt)vt.hasOwnProperty(h)&&vt[h]instanceof hi&&vt[h].objectNumber>=0&&W("/"+h+" "+vt[h].objectNumber+" 0 R");yt.publish("putShadingPatternDict"),W(">>")}},Ti=function(h){if(Object.keys(vt).length>0){for(var j in W("/Pattern <<"),vt)vt.hasOwnProperty(j)&&vt[j]instanceof m.TilingPattern&&vt[j].objectNumber>=0&&vt[j].objectNumber<h&&W("/"+j+" "+vt[j].objectNumber+" 0 R");yt.publish("putTilingPatternDict"),W(">>")}},hc=function(){if(Object.keys(Tt).length>0){var h;for(h in W("/ExtGState <<"),Tt)Tt.hasOwnProperty(h)&&Tt[h].objectNumber>=0&&W("/"+h+" "+Tt[h].objectNumber+" 0 R");yt.publish("putGStateDict"),W(">>")}},qt=function(h){zr(h.resourcesOid,!0),W("<<"),W("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"),Eo(),uc(),Ti(h.objectOid),hc(),Es(),W(">>"),W("endobj")},To=function(){var h=[];Fi(),cc(),Di(),Ei(h),yt.publish("putResources"),h.forEach(qt),qt({resourcesOid:ca,objectOid:Number.MAX_SAFE_INTEGER}),yt.publish("postPutResources")},Mo=function(){yt.publish("putAdditionalObjects");for(var h=0;h<Ne.length;h++){var j=Ne[h];zr(j.objId,!0),W(j.content),W("endobj")}yt.publish("postPutAdditionalObjects")},Bo=function(h){Dt[h.fontName]=Dt[h.fontName]||{},Dt[h.fontName][h.fontStyle]=h.id},Ts=function(h,j,q,G,ie){var ge={id:"F"+(Object.keys(At).length+1).toString(10),postScriptName:h,fontName:j,fontStyle:q,encoding:G,isStandardFont:ie||!1,metadata:{}};return yt.publish("addFont",{font:ge,instance:this}),At[ge.id]=ge,Bo(ge),ge.id},fc=function(h){for(var j=0,q=Ae.length;j<q;j++){var G=Ts.call(this,h[j][0],h[j][1],h[j][2],Ae[j][3],!0);b===!1&&(y[G]=!0);var ie=h[j][0].split("-");Bo({id:G,fontName:ie[0],fontStyle:ie[1]||""})}yt.publish("addFonts",{fonts:At,dictionary:Dt})},ha=function(h){return h.foo=function(){try{return h.apply(this,arguments)}catch(G){var j=G.stack||"";~j.indexOf(" at ")&&(j=j.split(" at ")[1]);var q="Error in function "+j.split(`
`)[0].split("<")[0]+": "+G.message;if(!Ye.console)throw new Error(q);Ye.console.error(q,G),Ye.alert&&alert(q)}},h.foo.bar=h,h.foo},Mi=function(h,j){var q,G,ie,ge,ke,Be,He,at,et;if(ie=(j=j||{}).sourceEncoding||"Unicode",ke=j.outputEncoding,(j.autoencode||ke)&&At[ct].metadata&&At[ct].metadata[ie]&&At[ct].metadata[ie].encoding&&(ge=At[ct].metadata[ie].encoding,!ke&&At[ct].encoding&&(ke=At[ct].encoding),!ke&&ge.codePages&&(ke=ge.codePages[0]),typeof ke=="string"&&(ke=ge[ke]),ke)){for(He=!1,Be=[],q=0,G=h.length;q<G;q++)(at=ke[h.charCodeAt(q)])?Be.push(String.fromCharCode(at)):Be.push(h[q]),Be[q].charCodeAt(0)>>8&&(He=!0);h=Be.join("")}for(q=h.length;He===void 0&&q!==0;)h.charCodeAt(q-1)>>8&&(He=!0),q--;if(!He)return h;for(Be=j.noBOM?[]:[254,255],q=0,G=h.length;q<G;q++){if((et=(at=h.charCodeAt(q))>>8)>>8)throw new Error("Character at position "+q+" of string '"+h+"' exceeds 16bits. Cannot be encoded into UCS-2 BE");Be.push(et),Be.push(at-(et<<8))}return String.fromCharCode.apply(void 0,Be)},Fr=m.__private__.pdfEscape=m.pdfEscape=function(h,j){return Mi(h,j).replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},Ms=m.__private__.beginPage=function(h){Se[++Mt]=[],Ze[Mt]={objId:0,contentsObjId:0,userUnit:Number(c),artBox:null,bleedBox:null,cropBox:null,trimBox:null,mediaBox:{bottomLeftX:0,bottomLeftY:0,topRightX:Number(h[0]),topRightY:Number(h[1])}},Ro(Mt),be(Se[z])},Oo=function(h,j){var q,G,ie;switch(r=j||r,typeof h=="string"&&(q=x(h.toLowerCase()),Array.isArray(q)&&(G=q[0],ie=q[1])),Array.isArray(h)&&(G=h[0]*Me,ie=h[1]*Me),isNaN(G)&&(G=i[0],ie=i[1]),(G>14400||ie>14400)&&(Pt.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"),G=Math.min(14400,G),ie=Math.min(14400,ie)),i=[G,ie],r.substr(0,1)){case"l":ie>G&&(i=[ie,G]);break;case"p":G>ie&&(i=[ie,G])}Ms(i),$o(zs),W(fa),Us!==0&&W(Us+" J"),Ws!==0&&W(Ws+" j"),yt.publish("addPage",{pageNumber:Mt})},pc=function(h){h>0&&h<=Mt&&(Se.splice(h,1),Ze.splice(h,1),Mt--,z>Mt&&(z=Mt),this.setPage(z))},Ro=function(h){h>0&&h<=Mt&&(z=h)},mc=m.__private__.getNumberOfPages=m.getNumberOfPages=function(){return Se.length-1},zo=function(h,j,q){var G,ie=void 0;return q=q||{},h=h!==void 0?h:At[ct].fontName,j=j!==void 0?j:At[ct].fontStyle,G=h.toLowerCase(),Dt[G]!==void 0&&Dt[G][j]!==void 0?ie=Dt[G][j]:Dt[h]!==void 0&&Dt[h][j]!==void 0?ie=Dt[h][j]:q.disableWarning===!1&&Pt.warn("Unable to look up font label for font '"+h+"', '"+j+"'. Refer to getFontList() for available fonts."),ie||q.noFallback||(ie=Dt.times[j])==null&&(ie=Dt.times.normal),ie},gc=m.__private__.putInfo=function(){var h=Qt(),j=function(G){return G};for(var q in g!==null&&(j=hr.encryptor(h,0)),W("<<"),W("/Producer ("+Fr(j("jsPDF "+Ve.version))+")"),Je)Je.hasOwnProperty(q)&&Je[q]&&W("/"+q.substr(0,1).toUpperCase()+q.substr(1)+" ("+Fr(j(Je[q]))+")");W("/CreationDate ("+Fr(j(ce))+")"),W(">>"),W("endobj")},Bs=m.__private__.putCatalog=function(h){var j=(h=h||{}).rootDictionaryObjId||Wa;switch(Qt(),W("<<"),W("/Type /Catalog"),W("/Pages "+j+" 0 R"),Te||(Te="fullwidth"),Te){case"fullwidth":W("/OpenAction [3 0 R /FitH null]");break;case"fullheight":W("/OpenAction [3 0 R /FitV null]");break;case"fullpage":W("/OpenAction [3 0 R /Fit]");break;case"original":W("/OpenAction [3 0 R /XYZ null null 1]");break;default:var q=""+Te;q.substr(q.length-1)==="%"&&(Te=parseInt(Te)/100),typeof Te=="number"&&W("/OpenAction [3 0 R /XYZ null null "+ne(Te)+"]")}switch(ot||(ot="continuous"),ot){case"continuous":W("/PageLayout /OneColumn");break;case"single":W("/PageLayout /SinglePage");break;case"two":case"twoleft":W("/PageLayout /TwoColumnLeft");break;case"tworight":W("/PageLayout /TwoColumnRight")}Xe&&W("/PageMode /"+Xe),yt.publish("putCatalog"),W(">>"),W("endobj")},bc=m.__private__.putTrailer=function(){W("trailer"),W("<<"),W("/Size "+(re+1)),W("/Root "+re+" 0 R"),W("/Info "+(re-1)+" 0 R"),g!==null&&W("/Encrypt "+hr.oid+" 0 R"),W("/ID [ <"+ue+"> <"+ue+"> ]"),W(">>")},vc=m.__private__.putHeader=function(){W("%PDF-"+k),W("%ºß¬à")},yc=m.__private__.putXRef=function(){var h="0000000000";W("xref"),W("0 "+(re+1)),W("0000000000 65535 f ");for(var j=1;j<=re;j++)typeof V[j]=="function"?W((h+V[j]()).slice(-10)+" 00000 n "):V[j]!==void 0?W((h+V[j]).slice(-10)+" 00000 n "):W("0000000000 00000 n ")},Ha=m.__private__.buildDocument=function(){Ge(),be(Q),yt.publish("buildDocument"),vc(),Zn(),Mo(),To(),g!==null&&dc(),gc(),Bs();var h=se;return yc(),bc(),W("startxref"),W(""+h),W("%%EOF"),be(Se[z]),Q.join(`
`)},Bi=m.__private__.getBlob=function(h){return new Blob([ze(h)],{type:"application/pdf"})},Oi=m.output=m.__private__.output=ha(function(h,j){switch(typeof(j=j||{})=="string"?j={filename:j}:j.filename=j.filename||"generated.pdf",h){case void 0:return Ha();case"save":m.save(j.filename);break;case"arraybuffer":return ze(Ha());case"blob":return Bi(Ha());case"bloburi":case"bloburl":if(Ye.URL!==void 0&&typeof Ye.URL.createObjectURL=="function")return Ye.URL&&Ye.URL.createObjectURL(Bi(Ha()))||void 0;Pt.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");break;case"datauristring":case"dataurlstring":var q="",G=Ha();try{q=qd(G)}catch{q=qd(unescape(encodeURIComponent(G)))}return"data:application/pdf;filename="+j.filename+";base64,"+q;case"pdfobjectnewwindow":if(Object.prototype.toString.call(Ye)==="[object Window]"){var ie="https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js",ge=' integrity="sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==" crossorigin="anonymous"';j.pdfObjectUrl&&(ie=j.pdfObjectUrl,ge="");var ke='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="'+ie+'"'+ge+'><\/script><script >PDFObject.embed("'+this.output("dataurlstring")+'", '+JSON.stringify(j)+");<\/script></body></html>",Be=Ye.open();return Be!==null&&Be.document.write(ke),Be}throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");case"pdfjsnewwindow":if(Object.prototype.toString.call(Ye)==="[object Window]"){var He='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="'+(j.pdfJsUrl||"examples/PDF.js/web/viewer.html")+"?file=&downloadName="+j.filename+'" width="500px" height="400px" /></body></html>',at=Ye.open();if(at!==null){at.document.write(He);var et=this;at.document.documentElement.querySelector("#pdfViewer").onload=function(){at.document.title=j.filename,at.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open(et.output("bloburl"))}}return at}throw new Error("The option pdfjsnewwindow just works in a browser-environment.");case"dataurlnewwindow":if(Object.prototype.toString.call(Ye)!=="[object Window]")throw new Error("The option dataurlnewwindow just works in a browser-environment.");var ht='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="'+this.output("datauristring",j)+'"></iframe></body></html>',Et=Ye.open();if(Et!==null&&(Et.document.write(ht),Et.document.title=j.filename),Et||typeof safari>"u")return Et;break;case"datauri":case"dataurl":return Ye.document.location.href=this.output("datauristring",j);default:return null}}),qo=function(h){return Array.isArray(Xn)===!0&&Xn.indexOf(h)>-1};switch(a){case"pt":Me=1;break;case"mm":Me=72/25.4;break;case"cm":Me=72/2.54;break;case"in":Me=72;break;case"px":Me=qo("px_scaling")==1?.75:96/72;break;case"pc":case"em":Me=12;break;case"ex":Me=6;break;default:if(typeof a!="number")throw new Error("Invalid unit: "+a);Me=a}var hr=null;Ie(),de();var xc=function(h){return g!==null?hr.encryptor(h,0):function(j){return j}},Uo=m.__private__.getPageInfo=m.getPageInfo=function(h){if(isNaN(h)||h%1!=0)throw new Error("Invalid argument passed to jsPDF.getPageInfo");return{objId:Ze[h].objId,pageNumber:h,pageContext:Ze[h]}},Qe=m.__private__.getPageInfoByObjId=function(h){if(isNaN(h)||h%1!=0)throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");for(var j in Ze)if(Ze[j].objId===h)break;return Uo(j)},wc=m.__private__.getCurrentPageInfo=m.getCurrentPageInfo=function(){return{objId:Ze[z].objId,pageNumber:z,pageContext:Ze[z]}};m.addPage=function(){return Oo.apply(this,arguments),this},m.setPage=function(){return Ro.apply(this,arguments),be.call(this,Se[z]),this},m.insertPage=function(h){return this.addPage(),this.movePage(z,h),this},m.movePage=function(h,j){var q,G;if(h>j){q=Se[h],G=Ze[h];for(var ie=h;ie>j;ie--)Se[ie]=Se[ie-1],Ze[ie]=Ze[ie-1];Se[j]=q,Ze[j]=G,this.setPage(j)}else if(h<j){q=Se[h],G=Ze[h];for(var ge=h;ge<j;ge++)Se[ge]=Se[ge+1],Ze[ge]=Ze[ge+1];Se[j]=q,Ze[j]=G,this.setPage(j)}return this},m.deletePage=function(){return pc.apply(this,arguments),this},m.__private__.text=m.text=function(h,j,q,G,ie){var ge,ke,Be,He,at,et,ht,Et,Bt,Gt=(G=G||{}).scope||this;if(typeof h=="number"&&typeof j=="number"&&(typeof q=="string"||Array.isArray(q))){var fr=q;q=j,j=h,h=fr}if(arguments[3]instanceof Ke?(S("The transform parameter of text() with a Matrix value"),Bt=ie):(Be=arguments[4],He=arguments[5],kt(ht=arguments[3])==="object"&&ht!==null||(typeof Be=="string"&&(He=Be,Be=null),typeof ht=="string"&&(He=ht,ht=null),typeof ht=="number"&&(Be=ht,ht=null),G={flags:ht,angle:Be,align:He})),isNaN(j)||isNaN(q)||h==null)throw new Error("Invalid arguments passed to jsPDF.text");if(h.length===0)return Gt;var rr="",pa=!1,qr=typeof G.lineHeightFactor=="number"?G.lineHeightFactor:ti,Fa=Gt.internal.scaleFactor;function Qo(_t){return _t=_t.split("	").join(Array(G.TabLen||9).join(" ")),Fr(_t,ht)}function Gs(_t){for(var Ct,Wt=_t.concat(),Xt=[],Ya=Wt.length;Ya--;)typeof(Ct=Wt.shift())=="string"?Xt.push(Ct):Array.isArray(_t)&&(Ct.length===1||Ct[1]===void 0&&Ct[2]===void 0)?Xt.push(Ct[0]):Xt.push([Ct[0],Ct[1],Ct[2]]);return Xt}function Ys(_t,Ct){var Wt;if(typeof _t=="string")Wt=Ct(_t)[0];else if(Array.isArray(_t)){for(var Xt,Ya,ao=_t.concat(),Zi=[],rl=ao.length;rl--;)typeof(Xt=ao.shift())=="string"?Zi.push(Ct(Xt)[0]):Array.isArray(Xt)&&typeof Xt[0]=="string"&&(Ya=Ct(Xt[0],Xt[1],Xt[2]),Zi.push([Ya[0],Ya[1],Ya[2]]));Wt=Zi}return Wt}var Hi=!1,Js=!0;if(typeof h=="string")Hi=!0;else if(Array.isArray(h)){var Qs=h.concat();ke=[];for(var $i,cr=Qs.length;cr--;)(typeof($i=Qs.shift())!="string"||Array.isArray($i)&&typeof $i[0]!="string")&&(Js=!1);Hi=Js}if(Hi===!1)throw new Error('Type of text must be string or Array. "'+h+'" is not recognized.');typeof h=="string"&&(h=h.match(/[\r?\n]/)?h.split(/\r\n|\r|\n/g):[h]);var Vi=Le/Gt.internal.scaleFactor,Ki=Vi*(qr-1);switch(G.baseline){case"bottom":q-=Ki;break;case"top":q+=Vi-Ki;break;case"hanging":q+=Vi-2*Ki;break;case"middle":q+=Vi/2-Ki}if((et=G.maxWidth||0)>0&&(typeof h=="string"?h=Gt.splitTextToSize(h,et):Object.prototype.toString.call(h)==="[object Array]"&&(h=h.reduce(function(_t,Ct){return _t.concat(Gt.splitTextToSize(Ct,et))},[]))),ge={text:h,x:j,y:q,options:G,mutex:{pdfEscape:Fr,activeFontKey:ct,fonts:At,activeFontSize:Le}},yt.publish("preProcessText",ge),h=ge.text,Be=(G=ge.options).angle,!(Bt instanceof Ke)&&Be&&typeof Be=="number"){Be*=Math.PI/180,G.rotationDirection===0&&(Be=-Be),B===I.ADVANCED&&(Be=-Be);var Gi=Math.cos(Be),Xs=Math.sin(Be);Bt=new Ke(Gi,Xs,-Xs,Gi,0,0)}else Be&&Be instanceof Ke&&(Bt=Be);B!==I.ADVANCED||Bt||(Bt=Aa),(at=G.charSpace||qi)!==void 0&&(rr+=A(T(at))+` Tc
`,this.setCharSpace(this.getCharSpace()||0)),(Et=G.horizontalScale)!==void 0&&(rr+=A(100*Et)+` Tz
`),G.lang;var Ir=-1,Fc=G.renderingMode!==void 0?G.renderingMode:G.stroke,Zs=Gt.internal.getCurrentPageInfo().pageContext;switch(Fc){case 0:case!1:case"fill":Ir=0;break;case 1:case!0:case"stroke":Ir=1;break;case 2:case"fillThenStroke":Ir=2;break;case 3:case"invisible":Ir=3;break;case 4:case"fillAndAddForClipping":Ir=4;break;case 5:case"strokeAndAddPathForClipping":Ir=5;break;case 6:case"fillThenStrokeAndAddToPathForClipping":Ir=6;break;case 7:case"addToPathForClipping":Ir=7}var Xo=Zs.usedRenderingMode!==void 0?Zs.usedRenderingMode:-1;Ir!==-1?rr+=Ir+` Tr
`:Xo!==-1&&(rr+=`0 Tr
`),Ir!==-1&&(Zs.usedRenderingMode=Ir),He=G.align||"left";var Jr,Yi=Le*qr,Zo=Gt.internal.pageSize.getWidth(),el=At[ct];at=G.charSpace||qi,et=G.maxWidth||0,ht=Object.assign({autoencode:!0,noBOM:!0},G.flags);var gn=[],ni=function(_t){return Gt.getStringUnitWidth(_t,{font:el,charSpace:at,fontSize:Le,doKerning:!1})*Le/Fa};if(Object.prototype.toString.call(h)==="[object Array]"){var Dr;ke=Gs(h),He!=="left"&&(Jr=ke.map(ni));var kr,bn=0;if(He==="right"){j-=Jr[0],h=[],cr=ke.length;for(var Va=0;Va<cr;Va++)Va===0?(kr=Ca(j),Dr=$a(q)):(kr=T(bn-Jr[Va]),Dr=-Yi),h.push([ke[Va],kr,Dr]),bn=Jr[Va]}else if(He==="center"){j-=Jr[0]/2,h=[],cr=ke.length;for(var Ka=0;Ka<cr;Ka++)Ka===0?(kr=Ca(j),Dr=$a(q)):(kr=T((bn-Jr[Ka])/2),Dr=-Yi),h.push([ke[Ka],kr,Dr]),bn=Jr[Ka]}else if(He==="left"){h=[],cr=ke.length;for(var Ji=0;Ji<cr;Ji++)h.push(ke[Ji])}else if(He==="justify"&&el.encoding==="Identity-H"){h=[],cr=ke.length,et=et!==0?et:Zo;for(var Ga=0,Ut=0;Ut<cr;Ut++)if(Dr=Ut===0?$a(q):-Yi,kr=Ut===0?Ca(j):Ga,Ut<cr-1){var eo=T((et-Jr[Ut])/(ke[Ut].split(" ").length-1)),Nr=ke[Ut].split(" ");h.push([Nr[0]+" ",kr,Dr]),Ga=0;for(var Qr=1;Qr<Nr.length;Qr++){var Qi=(ni(Nr[Qr-1]+" "+Nr[Qr])-ni(Nr[Qr]))*Fa+eo;Qr==Nr.length-1?h.push([Nr[Qr],Qi,0]):h.push([Nr[Qr]+" ",Qi,0]),Ga-=Qi}}else h.push([ke[Ut],kr,Dr]);h.push(["",Ga,0])}else{if(He!=="justify")throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');for(h=[],cr=ke.length,et=et!==0?et:Zo,Ut=0;Ut<cr;Ut++)Dr=Ut===0?$a(q):-Yi,kr=Ut===0?Ca(j):0,Ut<cr-1?gn.push(A(T((et-Jr[Ut])/(ke[Ut].split(" ").length-1)))):gn.push(0),h.push([ke[Ut],kr,Dr])}}var tl=typeof G.R2L=="boolean"?G.R2L:We;tl===!0&&(h=Ys(h,function(_t,Ct,Wt){return[_t.split("").reverse().join(""),Ct,Wt]})),ge={text:h,x:j,y:q,options:G,mutex:{pdfEscape:Fr,activeFontKey:ct,fonts:At,activeFontSize:Le}},yt.publish("postProcessText",ge),h=ge.text,pa=ge.mutex.isHex||!1;var to=At[ct].encoding;to!=="WinAnsiEncoding"&&to!=="StandardEncoding"||(h=Ys(h,function(_t,Ct,Wt){return[Qo(_t),Ct,Wt]})),ke=Gs(h),h=[];for(var ii,si,vn,oi=0,Xi=1,li=Array.isArray(ke[0])?Xi:oi,yn="",ro=function(_t,Ct,Wt){var Xt="";return Wt instanceof Ke?(Wt=typeof G.angle=="number"?la(Wt,new Ke(1,0,0,1,_t,Ct)):la(new Ke(1,0,0,1,_t,Ct),Wt),B===I.ADVANCED&&(Wt=la(new Ke(1,0,0,-1,0,0),Wt)),Xt=Wt.join(" ")+` Tm
`):Xt=A(_t)+" "+A(Ct)+` Td
`,Xt},Xr=0;Xr<ke.length;Xr++){switch(yn="",li){case Xi:vn=(pa?"<":"(")+ke[Xr][0]+(pa?">":")"),ii=parseFloat(ke[Xr][1]),si=parseFloat(ke[Xr][2]);break;case oi:vn=(pa?"<":"(")+ke[Xr]+(pa?">":")"),ii=Ca(j),si=$a(q)}gn!==void 0&&gn[Xr]!==void 0&&(yn=gn[Xr]+` Tw
`),Xr===0?h.push(yn+ro(ii,si,Bt)+vn):li===oi?h.push(yn+vn):li===Xi&&h.push(yn+ro(ii,si,Bt)+vn)}h=li===oi?h.join(` Tj
T* `):h.join(` Tj
`),h+=` Tj
`;var Zr=`BT
/`;return Zr+=ct+" "+Le+` Tf
`,Zr+=A(Le*qr)+` TL
`,Zr+=ri+`
`,Zr+=rr,Zr+=h,W(Zr+="ET"),y[ct]=!0,Gt};var jc=m.__private__.clip=m.clip=function(h){return W(h==="evenodd"?"W*":"W"),this};m.clipEvenOdd=function(){return jc("evenodd")},m.__private__.discardPath=m.discardPath=function(){return W("n"),this};var _a=m.__private__.isValidStyle=function(h){var j=!1;return[void 0,null,"S","D","F","DF","FD","f","f*","B","B*","n"].indexOf(h)!==-1&&(j=!0),j};m.__private__.setDefaultPathOperation=m.setDefaultPathOperation=function(h){return _a(h)&&(f=h),this};var Wo=m.__private__.getStyle=m.getStyle=function(h){var j=f;switch(h){case"D":case"S":j="S";break;case"F":j="f";break;case"FD":case"DF":j="B";break;case"f":case"f*":case"B":case"B*":j=h}return j},Ho=m.close=function(){return W("h"),this};m.stroke=function(){return W("S"),this},m.fill=function(h){return Ri("f",h),this},m.fillEvenOdd=function(h){return Ri("f*",h),this},m.fillStroke=function(h){return Ri("B",h),this},m.fillStrokeEvenOdd=function(h){return Ri("B*",h),this};var Ri=function(h,j){kt(j)==="object"?Nc(j,h):W(h)},Os=function(h){h===null||B===I.ADVANCED&&h===void 0||(h=Wo(h),W(h))};function kc(h,j,q,G,ie){var ge=new ls(j||this.boundingBox,q||this.xStep,G||this.yStep,this.gState,ie||this.matrix);ge.stream=this.stream;var ke=h+"$$"+this.cloneIndex+++"$$";return Cr(ke,ge),ge}var Nc=function(h,j){var q=Qn[h.key],G=vt[q];if(G instanceof hi)W("q"),W(Sc(j)),G.gState&&m.setGState(G.gState),W(h.matrix.toString()+" cm"),W("/"+q+" sh"),W("Q");else if(G instanceof ls){var ie=new Ke(1,0,0,-1,0,mn());h.matrix&&(ie=ie.multiply(h.matrix||Aa),q=kc.call(G,h.key,h.boundingBox,h.xStep,h.yStep,ie).id),W("q"),W("/Pattern cs"),W("/"+q+" scn"),G.gState&&m.setGState(G.gState),W(j),W("Q")}},Sc=function(h){switch(h){case"f":case"F":return"W n";case"f*":return"W* n";case"B":return"W S";case"B*":return"W* S";case"S":return"W S";case"n":return"W n"}},Rs=m.moveTo=function(h,j){return W(A(T(h))+" "+A(H(j))+" m"),this},ei=m.lineTo=function(h,j){return W(A(T(h))+" "+A(H(j))+" l"),this},fn=m.curveTo=function(h,j,q,G,ie,ge){return W([A(T(h)),A(H(j)),A(T(q)),A(H(G)),A(T(ie)),A(H(ge)),"c"].join(" ")),this};m.__private__.line=m.line=function(h,j,q,G,ie){if(isNaN(h)||isNaN(j)||isNaN(q)||isNaN(G)||!_a(ie))throw new Error("Invalid arguments passed to jsPDF.line");return B===I.COMPAT?this.lines([[q-h,G-j]],h,j,[1,1],ie||"S"):this.lines([[q-h,G-j]],h,j,[1,1]).stroke()},m.__private__.lines=m.lines=function(h,j,q,G,ie,ge){var ke,Be,He,at,et,ht,Et,Bt,Gt,fr,rr,pa;if(typeof h=="number"&&(pa=q,q=j,j=h,h=pa),G=G||[1,1],ge=ge||!1,isNaN(j)||isNaN(q)||!Array.isArray(h)||!Array.isArray(G)||!_a(ie)||typeof ge!="boolean")throw new Error("Invalid arguments passed to jsPDF.lines");for(Rs(j,q),ke=G[0],Be=G[1],at=h.length,fr=j,rr=q,He=0;He<at;He++)(et=h[He]).length===2?(fr=et[0]*ke+fr,rr=et[1]*Be+rr,ei(fr,rr)):(ht=et[0]*ke+fr,Et=et[1]*Be+rr,Bt=et[2]*ke+fr,Gt=et[3]*Be+rr,fr=et[4]*ke+fr,rr=et[5]*Be+rr,fn(ht,Et,Bt,Gt,fr,rr));return ge&&Ho(),Os(ie),this},m.path=function(h){for(var j=0;j<h.length;j++){var q=h[j],G=q.c;switch(q.op){case"m":Rs(G[0],G[1]);break;case"l":ei(G[0],G[1]);break;case"c":fn.apply(this,G);break;case"h":Ho()}}return this},m.__private__.rect=m.rect=function(h,j,q,G,ie){if(isNaN(h)||isNaN(j)||isNaN(q)||isNaN(G)||!_a(ie))throw new Error("Invalid arguments passed to jsPDF.rect");return B===I.COMPAT&&(G=-G),W([A(T(h)),A(H(j)),A(T(q)),A(T(G)),"re"].join(" ")),Os(ie),this},m.__private__.triangle=m.triangle=function(h,j,q,G,ie,ge,ke){if(isNaN(h)||isNaN(j)||isNaN(q)||isNaN(G)||isNaN(ie)||isNaN(ge)||!_a(ke))throw new Error("Invalid arguments passed to jsPDF.triangle");return this.lines([[q-h,G-j],[ie-q,ge-G],[h-ie,j-ge]],h,j,[1,1],ke,!0),this},m.__private__.roundedRect=m.roundedRect=function(h,j,q,G,ie,ge,ke){if(isNaN(h)||isNaN(j)||isNaN(q)||isNaN(G)||isNaN(ie)||isNaN(ge)||!_a(ke))throw new Error("Invalid arguments passed to jsPDF.roundedRect");var Be=4/3*(Math.SQRT2-1);return ie=Math.min(ie,.5*q),ge=Math.min(ge,.5*G),this.lines([[q-2*ie,0],[ie*Be,0,ie,ge-ge*Be,ie,ge],[0,G-2*ge],[0,ge*Be,-ie*Be,ge,-ie,ge],[2*ie-q,0],[-ie*Be,0,-ie,-ge*Be,-ie,-ge],[0,2*ge-G],[0,-ge*Be,ie*Be,-ge,ie,-ge]],h+ie,j,[1,1],ke,!0),this},m.__private__.ellipse=m.ellipse=function(h,j,q,G,ie){if(isNaN(h)||isNaN(j)||isNaN(q)||isNaN(G)||!_a(ie))throw new Error("Invalid arguments passed to jsPDF.ellipse");var ge=4/3*(Math.SQRT2-1)*q,ke=4/3*(Math.SQRT2-1)*G;return Rs(h+q,j),fn(h+q,j-ke,h+ge,j-G,h,j-G),fn(h-ge,j-G,h-q,j-ke,h-q,j),fn(h-q,j+ke,h-ge,j+G,h,j+G),fn(h+ge,j+G,h+q,j+ke,h+q,j),Os(ie),this},m.__private__.circle=m.circle=function(h,j,q,G){if(isNaN(h)||isNaN(j)||isNaN(q)||!_a(G))throw new Error("Invalid arguments passed to jsPDF.circle");return this.ellipse(h,j,q,q,G)},m.setFont=function(h,j,q){return q&&(j=ee(j,q)),ct=zo(h,j,{disableWarning:!1}),this};var Ac=m.__private__.getFont=m.getFont=function(){return At[zo.apply(m,arguments)]};m.__private__.getFontList=m.getFontList=function(){var h,j,q={};for(h in Dt)if(Dt.hasOwnProperty(h))for(j in q[h]=[],Dt[h])Dt[h].hasOwnProperty(j)&&q[h].push(j);return q},m.addFont=function(h,j,q,G,ie){var ge=["StandardEncoding","MacRomanEncoding","Identity-H","WinAnsiEncoding"];return arguments[3]&&ge.indexOf(arguments[3])!==-1?ie=arguments[3]:arguments[3]&&ge.indexOf(arguments[3])==-1&&(q=ee(q,G)),ie=ie||"Identity-H",Ts.call(this,h,j,q,ie)};var ti,zs=t.lineWidth||.200025,zi=m.__private__.getLineWidth=m.getLineWidth=function(){return zs},$o=m.__private__.setLineWidth=m.setLineWidth=function(h){return zs=h,W(A(T(h))+" w"),this};m.__private__.setLineDash=Ve.API.setLineDash=Ve.API.setLineDashPattern=function(h,j){if(h=h||[],j=j||0,isNaN(j)||!Array.isArray(h))throw new Error("Invalid arguments passed to jsPDF.setLineDash");return h=h.map(function(q){return A(T(q))}).join(" "),j=A(T(j)),W("["+h+"] "+j+" d"),this};var Vo=m.__private__.getLineHeight=m.getLineHeight=function(){return Le*ti};m.__private__.getLineHeight=m.getLineHeight=function(){return Le*ti};var Ko=m.__private__.setLineHeightFactor=m.setLineHeightFactor=function(h){return typeof(h=h||1.15)=="number"&&(ti=h),this},Go=m.__private__.getLineHeightFactor=m.getLineHeightFactor=function(){return ti};Ko(t.lineHeight);var Ca=m.__private__.getHorizontalCoordinate=function(h){return T(h)},$a=m.__private__.getVerticalCoordinate=function(h){return B===I.ADVANCED?h:Ze[z].mediaBox.topRightY-Ze[z].mediaBox.bottomLeftY-T(h)},Lc=m.__private__.getHorizontalCoordinateString=m.getHorizontalCoordinateString=function(h){return A(Ca(h))},pn=m.__private__.getVerticalCoordinateString=m.getVerticalCoordinateString=function(h){return A($a(h))},fa=t.strokeColor||"0 G";m.__private__.getStrokeColor=m.getDrawColor=function(){return da(fa)},m.__private__.setStrokeColor=m.setDrawColor=function(h,j,q,G){return fa=ua({ch1:h,ch2:j,ch3:q,ch4:G,pdfColorType:"draw",precision:2}),W(fa),this};var qs=t.fillColor||"0 g";m.__private__.getFillColor=m.getFillColor=function(){return da(qs)},m.__private__.setFillColor=m.setFillColor=function(h,j,q,G){return qs=ua({ch1:h,ch2:j,ch3:q,ch4:G,pdfColorType:"fill",precision:2}),W(qs),this};var ri=t.textColor||"0 g",Pc=m.__private__.getTextColor=m.getTextColor=function(){return da(ri)};m.__private__.setTextColor=m.setTextColor=function(h,j,q,G){return ri=ua({ch1:h,ch2:j,ch3:q,ch4:G,pdfColorType:"text",precision:3}),this};var qi=t.charSpace,_c=m.__private__.getCharSpace=m.getCharSpace=function(){return parseFloat(qi||0)};m.__private__.setCharSpace=m.setCharSpace=function(h){if(isNaN(h))throw new Error("Invalid argument passed to jsPDF.setCharSpace");return qi=h,this};var Us=0;m.CapJoinStyles={0:0,butt:0,but:0,miter:0,1:1,round:1,rounded:1,circle:1,2:2,projecting:2,project:2,square:2,bevel:2},m.__private__.setLineCap=m.setLineCap=function(h){var j=m.CapJoinStyles[h];if(j===void 0)throw new Error("Line cap style of '"+h+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return Us=j,W(j+" J"),this};var Ws=0;m.__private__.setLineJoin=m.setLineJoin=function(h){var j=m.CapJoinStyles[h];if(j===void 0)throw new Error("Line join style of '"+h+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return Ws=j,W(j+" j"),this},m.__private__.setLineMiterLimit=m.__private__.setMiterLimit=m.setLineMiterLimit=m.setMiterLimit=function(h){if(h=h||0,isNaN(h))throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");return W(A(T(h))+" M"),this},m.GState=Wl,m.setGState=function(h){(h=typeof h=="string"?Tt[oa[h]]:Yo(null,h)).equals(Ua)||(W("/"+h.id+" gs"),Ua=h)};var Yo=function(h,j){if(!h||!oa[h]){var q=!1;for(var G in Tt)if(Tt.hasOwnProperty(G)&&Tt[G].equals(j)){q=!0;break}if(q)j=Tt[G];else{var ie="GS"+(Object.keys(Tt).length+1).toString(10);Tt[ie]=j,j.id=ie}return h&&(oa[h]=j.id),yt.publish("addGState",j),j}};m.addGState=function(h,j){return Yo(h,j),this},m.saveGraphicsState=function(){return W("q"),ka.push({key:ct,size:Le,color:ri}),this},m.restoreGraphicsState=function(){W("Q");var h=ka.pop();return ct=h.key,Le=h.size,ri=h.color,Ua=null,this},m.setCurrentTransformationMatrix=function(h){return W(h.toString()+" cm"),this},m.comment=function(h){return W("#"+h),this};var Ui=function(h,j){var q=h||0;Object.defineProperty(this,"x",{enumerable:!0,get:function(){return q},set:function(ge){isNaN(ge)||(q=parseFloat(ge))}});var G=j||0;Object.defineProperty(this,"y",{enumerable:!0,get:function(){return G},set:function(ge){isNaN(ge)||(G=parseFloat(ge))}});var ie="pt";return Object.defineProperty(this,"type",{enumerable:!0,get:function(){return ie},set:function(ge){ie=ge.toString()}}),this},Hs=function(h,j,q,G){Ui.call(this,h,j),this.type="rect";var ie=q||0;Object.defineProperty(this,"w",{enumerable:!0,get:function(){return ie},set:function(ke){isNaN(ke)||(ie=parseFloat(ke))}});var ge=G||0;return Object.defineProperty(this,"h",{enumerable:!0,get:function(){return ge},set:function(ke){isNaN(ke)||(ge=parseFloat(ke))}}),this},$s=function(){this.page=Mt,this.currentPage=z,this.pages=Se.slice(0),this.pagesContext=Ze.slice(0),this.x=ur,this.y=gt,this.matrix=sa,this.width=ai(z),this.height=mn(z),this.outputDestination=_e,this.id="",this.objectNumber=-1};$s.prototype.restore=function(){Mt=this.page,z=this.currentPage,Ze=this.pagesContext,Se=this.pages,ur=this.x,gt=this.y,sa=this.matrix,Vs(z,this.width),Ks(z,this.height),_e=this.outputDestination};var Jo=function(h,j,q,G,ie){Sa.push(new $s),Mt=z=0,Se=[],ur=h,gt=j,sa=ie,Ms([q,G])},Cc=function(h){if(Na[h])Sa.pop().restore();else{var j=new $s,q="Xo"+(Object.keys(lr).length+1).toString(10);j.id=q,Na[h]=q,lr[q]=j,yt.publish("addFormObject",j),Sa.pop().restore()}};for(var Wi in m.beginFormObject=function(h,j,q,G,ie){return Jo(h,j,q,G,ie),this},m.endFormObject=function(h){return Cc(h),this},m.doFormObject=function(h,j){var q=lr[Na[h]];return W("q"),W(j.toString()+" cm"),W("/"+q.id+" Do"),W("Q"),this},m.getFormObject=function(h){var j=lr[Na[h]];return{x:j.x,y:j.y,width:j.width,height:j.height,matrix:j.matrix}},m.save=function(h,j){return h=h||"generated.pdf",(j=j||{}).returnPromise=j.returnPromise||!1,j.returnPromise===!1?(ui(Bi(Ha()),h),typeof ui.unload=="function"&&Ye.setTimeout&&setTimeout(ui.unload,911),this):new Promise(function(q,G){try{var ie=ui(Bi(Ha()),h);typeof ui.unload=="function"&&Ye.setTimeout&&setTimeout(ui.unload,911),q(ie)}catch(ge){G(ge.message)}})},Ve.API)Ve.API.hasOwnProperty(Wi)&&(Wi==="events"&&Ve.API.events.length?function(h,j){var q,G,ie;for(ie=j.length-1;ie!==-1;ie--)q=j[ie][0],G=j[ie][1],h.subscribe.apply(h,[q].concat(typeof G=="function"?[G]:G))}(yt,Ve.API.events):m[Wi]=Ve.API[Wi]);var ai=m.getPageWidth=function(h){return(Ze[h=h||z].mediaBox.topRightX-Ze[h].mediaBox.bottomLeftX)/Me},Vs=m.setPageWidth=function(h,j){Ze[h].mediaBox.topRightX=j*Me+Ze[h].mediaBox.bottomLeftX},mn=m.getPageHeight=function(h){return(Ze[h=h||z].mediaBox.topRightY-Ze[h].mediaBox.bottomLeftY)/Me},Ks=m.setPageHeight=function(h,j){Ze[h].mediaBox.topRightY=j*Me+Ze[h].mediaBox.bottomLeftY};return m.internal={pdfEscape:Fr,getStyle:Wo,getFont:Ac,getFontSize:Fe,getCharSpace:_c,getTextColor:Pc,getLineHeight:Vo,getLineHeightFactor:Go,getLineWidth:zi,write:rt,getHorizontalCoordinate:Ca,getVerticalCoordinate:$a,getCoordinateString:Lc,getVerticalCoordinateString:pn,collections:{},newObject:Qt,newAdditionalObject:_i,newObjectDeferred:Kt,newObjectDeferredBegin:zr,getFilters:La,putStream:Yr,events:yt,scaleFactor:Me,pageSize:{getWidth:function(){return ai(z)},setWidth:function(h){Vs(z,h)},getHeight:function(){return mn(z)},setHeight:function(h){Ks(z,h)}},encryptionOptions:g,encryption:hr,getEncryptor:xc,output:Oi,getNumberOfPages:mc,pages:Se,out:W,f2:ne,f3:E,getPageInfo:Uo,getPageInfoByObjId:Qe,getCurrentPageInfo:wc,getPDFVersion:N,Point:Ui,Rectangle:Hs,Matrix:Ke,hasHotfix:qo},Object.defineProperty(m.internal.pageSize,"width",{get:function(){return ai(z)},set:function(h){Vs(z,h)},enumerable:!0,configurable:!0}),Object.defineProperty(m.internal.pageSize,"height",{get:function(){return mn(z)},set:function(h){Ks(z,h)},enumerable:!0,configurable:!0}),fc.call(m,Ae),ct="F1",Oo(i,r),yt.publish("initialized"),m}ss.prototype.lsbFirstWord=function(t){return String.fromCharCode(t>>0&255,t>>8&255,t>>16&255,t>>24&255)},ss.prototype.toHexString=function(t){return t.split("").map(function(e){return("0"+(255&e.charCodeAt(0)).toString(16)).slice(-2)}).join("")},ss.prototype.hexToBytes=function(t){for(var e=[],r=0;r<t.length;r+=2)e.push(String.fromCharCode(parseInt(t.substr(r,2),16)));return e.join("")},ss.prototype.processOwnerPassword=function(t,e){return Wd(Ud(e).substr(0,5),t)},ss.prototype.encryptor=function(t,e){var r=Ud(this.encryptionKey+String.fromCharCode(255&t,t>>8&255,t>>16&255,255&e,e>>8&255)).substr(0,10);return function(a){return Wd(r,a)}},Wl.prototype.equals=function(t){var e,r="id,objectNumber,equals";if(!t||kt(t)!==kt(this))return!1;var a=0;for(e in this)if(!(r.indexOf(e)>=0)){if(this.hasOwnProperty(e)&&!t.hasOwnProperty(e)||this[e]!==t[e])return!1;a++}for(e in t)t.hasOwnProperty(e)&&r.indexOf(e)<0&&a--;return a===0},Ve.API={events:[]},Ve.version="2.5.2";var zt=Ve.API,pu=1,Pi=function(t){return t.replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},ns=function(t){return t.replace(/\\\\/g,"\\").replace(/\\\(/g,"(").replace(/\\\)/g,")")},tt=function(t){return t.toFixed(2)},Fn=function(t){return t.toFixed(5)};zt.__acroform__={};var Rr=function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t},Eh=function(t){return t*pu},Da=function(t){var e=new up,r=Re.internal.getHeight(t)||0,a=Re.internal.getWidth(t)||0;return e.BBox=[0,0,Number(tt(a)),Number(tt(r))],e},Gm=zt.__acroform__.setBit=function(t,e){if(t=t||0,e=e||0,isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");return t|=1<<e},Ym=zt.__acroform__.clearBit=function(t,e){if(t=t||0,e=e||0,isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");return t&=~(1<<e)},Jm=zt.__acroform__.getBit=function(t,e){if(isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");return t&1<<e?1:0},Ht=zt.__acroform__.getBitForPdf=function(t,e){if(isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");return Jm(t,e-1)},$t=zt.__acroform__.setBitForPdf=function(t,e){if(isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");return Gm(t,e-1)},Vt=zt.__acroform__.clearBitForPdf=function(t,e){if(isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");return Ym(t,e-1)},Qm=zt.__acroform__.calculateCoordinates=function(t,e){var r=e.internal.getHorizontalCoordinate,a=e.internal.getVerticalCoordinate,i=t[0],n=t[1],l=t[2],c=t[3],u={};return u.lowerLeft_X=r(i)||0,u.lowerLeft_Y=a(n+c)||0,u.upperRight_X=r(i+l)||0,u.upperRight_Y=a(n)||0,[Number(tt(u.lowerLeft_X)),Number(tt(u.lowerLeft_Y)),Number(tt(u.upperRight_X)),Number(tt(u.upperRight_Y))]},Xm=function(t){if(t.appearanceStreamContent)return t.appearanceStreamContent;if(t.V||t.DV){var e=[],r=t._V||t.DV,a=Hd(t,r),i=t.scope.internal.getFont(t.fontName,t.fontStyle).id;e.push("/Tx BMC"),e.push("q"),e.push("BT"),e.push(t.scope.__private__.encodeColorString(t.color)),e.push("/"+i+" "+tt(a.fontSize)+" Tf"),e.push("1 0 0 1 0 0 Tm"),e.push(a.text),e.push("ET"),e.push("Q"),e.push("EMC");var n=Da(t);return n.scope=t.scope,n.stream=e.join(`
`),n}},Hd=function(t,e){var r=t.fontSize===0?t.maxFontSize:t.fontSize,a={text:"",fontSize:""},i=(e=(e=e.substr(0,1)=="("?e.substr(1):e).substr(e.length-1)==")"?e.substr(0,e.length-1):e).split(" ");i=t.multiline?i.map(function(E){return E.split(`
`)}):i.map(function(E){return[E]});var n=r,l=Re.internal.getHeight(t)||0;l=l<0?-l:l;var c=Re.internal.getWidth(t)||0;c=c<0?-c:c;var u=function(E,T,K){if(E+1<i.length){var H=T+" "+i[E+1][0];return Pl(H,t,K).width<=c-4}return!1};n++;e:for(;n>0;){e="",n--;var f,g,b=Pl("3",t,n).height,y=t.multiline?l-n:(l-b)/2,m=y+=2,k=0,N=0,_=0;if(n<=0){e=`(...) Tj
`,e+="% Width of Text: "+Pl(e,t,n=12).width+", FieldWidth:"+c+`
`;break}for(var x="",I=0,B=0;B<i.length;B++)if(i.hasOwnProperty(B)){var R=!1;if(i[B].length!==1&&_!==i[B].length-1){if((b+2)*(I+2)+2>l)continue e;x+=i[B][_],R=!0,N=B,B--}else{x=(x+=i[B][_]+" ").substr(x.length-1)==" "?x.substr(0,x.length-1):x;var Z=parseInt(B),ee=u(Z,x,n),A=B>=i.length-1;if(ee&&!A){x+=" ",_=0;continue}if(ee||A){if(A)N=Z;else if(t.multiline&&(b+2)*(I+2)+2>l)continue e}else{if(!t.multiline||(b+2)*(I+2)+2>l)continue e;N=Z}}for(var S="",M=k;M<=N;M++){var ne=i[M];if(t.multiline){if(M===N){S+=ne[_]+" ",_=(_+1)%ne.length;continue}if(M===k){S+=ne[ne.length-1]+" ";continue}}S+=ne[0]+" "}switch(S=S.substr(S.length-1)==" "?S.substr(0,S.length-1):S,g=Pl(S,t,n).width,t.textAlign){case"right":f=c-g-2;break;case"center":f=(c-g)/2;break;case"left":default:f=2}e+=tt(f)+" "+tt(m)+` Td
`,e+="("+Pi(S)+`) Tj
`,e+=-tt(f)+` 0 Td
`,m=-(n+2),g=0,k=R?N:N+1,I++,x=""}break}return a.text=e,a.fontSize=n,a},Pl=function(t,e,r){var a=e.scope.internal.getFont(e.fontName,e.fontStyle),i=e.scope.getStringUnitWidth(t,{font:a,fontSize:parseFloat(r),charSpace:0})*parseFloat(r);return{height:e.scope.getStringUnitWidth("3",{font:a,fontSize:parseFloat(r),charSpace:0})*parseFloat(r)*1.5,width:i}},Zm={fields:[],xForms:[],acroFormDictionaryRoot:null,printedOut:!1,internal:null,isInitialized:!1},eg=function(t,e){var r={type:"reference",object:t};e.internal.getPageInfo(t.page).pageContext.annotations.find(function(a){return a.type===r.type&&a.object===r.object})===void 0&&e.internal.getPageInfo(t.page).pageContext.annotations.push(r)},tg=function(t,e){for(var r in t)if(t.hasOwnProperty(r)){var a=r,i=t[r];e.internal.newObjectDeferredBegin(i.objId,!0),kt(i)==="object"&&typeof i.putStream=="function"&&i.putStream(),delete t[a]}},rg=function(t,e){if(e.scope=t,t.internal!==void 0&&(t.internal.acroformPlugin===void 0||t.internal.acroformPlugin.isInitialized===!1)){if(wa.FieldNum=0,t.internal.acroformPlugin=JSON.parse(JSON.stringify(Zm)),t.internal.acroformPlugin.acroFormDictionaryRoot)throw new Error("Exception while creating AcroformDictionary");pu=t.internal.scaleFactor,t.internal.acroformPlugin.acroFormDictionaryRoot=new hp,t.internal.acroformPlugin.acroFormDictionaryRoot.scope=t,t.internal.acroformPlugin.acroFormDictionaryRoot._eventID=t.internal.events.subscribe("postPutResources",function(){(function(r){r.internal.events.unsubscribe(r.internal.acroformPlugin.acroFormDictionaryRoot._eventID),delete r.internal.acroformPlugin.acroFormDictionaryRoot._eventID,r.internal.acroformPlugin.printedOut=!0})(t)}),t.internal.events.subscribe("buildDocument",function(){(function(r){r.internal.acroformPlugin.acroFormDictionaryRoot.objId=void 0;var a=r.internal.acroformPlugin.acroFormDictionaryRoot.Fields;for(var i in a)if(a.hasOwnProperty(i)){var n=a[i];n.objId=void 0,n.hasAnnotation&&eg(n,r)}})(t)}),t.internal.events.subscribe("putCatalog",function(){(function(r){if(r.internal.acroformPlugin.acroFormDictionaryRoot===void 0)throw new Error("putCatalogCallback: Root missing.");r.internal.write("/AcroForm "+r.internal.acroformPlugin.acroFormDictionaryRoot.objId+" 0 R")})(t)}),t.internal.events.subscribe("postPutPages",function(r){(function(a,i){var n=!a;for(var l in a||(i.internal.newObjectDeferredBegin(i.internal.acroformPlugin.acroFormDictionaryRoot.objId,!0),i.internal.acroformPlugin.acroFormDictionaryRoot.putStream()),a=a||i.internal.acroformPlugin.acroFormDictionaryRoot.Kids)if(a.hasOwnProperty(l)){var c=a[l],u=[],f=c.Rect;if(c.Rect&&(c.Rect=Qm(c.Rect,i)),i.internal.newObjectDeferredBegin(c.objId,!0),c.DA=Re.createDefaultAppearanceStream(c),kt(c)==="object"&&typeof c.getKeyValueListForStream=="function"&&(u=c.getKeyValueListForStream()),c.Rect=f,c.hasAppearanceStream&&!c.appearanceStreamContent){var g=Xm(c);u.push({key:"AP",value:"<</N "+g+">>"}),i.internal.acroformPlugin.xForms.push(g)}if(c.appearanceStreamContent){var b="";for(var y in c.appearanceStreamContent)if(c.appearanceStreamContent.hasOwnProperty(y)){var m=c.appearanceStreamContent[y];if(b+="/"+y+" ",b+="<<",Object.keys(m).length>=1||Array.isArray(m)){for(var l in m)if(m.hasOwnProperty(l)){var k=m[l];typeof k=="function"&&(k=k.call(i,c)),b+="/"+l+" "+k+" ",i.internal.acroformPlugin.xForms.indexOf(k)>=0||i.internal.acroformPlugin.xForms.push(k)}}else typeof(k=m)=="function"&&(k=k.call(i,c)),b+="/"+l+" "+k,i.internal.acroformPlugin.xForms.indexOf(k)>=0||i.internal.acroformPlugin.xForms.push(k);b+=">>"}u.push({key:"AP",value:`<<
`+b+">>"})}i.internal.putStream({additionalKeyValues:u,objectId:c.objId}),i.internal.out("endobj")}n&&tg(i.internal.acroformPlugin.xForms,i)})(r,t)}),t.internal.acroformPlugin.isInitialized=!0}},dp=zt.__acroform__.arrayToPdfArray=function(t,e,r){var a=function(l){return l};if(Array.isArray(t)){for(var i="[",n=0;n<t.length;n++)switch(n!==0&&(i+=" "),kt(t[n])){case"boolean":case"number":case"object":i+=t[n].toString();break;case"string":t[n].substr(0,1)!=="/"?(e!==void 0&&r&&(a=r.internal.getEncryptor(e)),i+="("+Pi(a(t[n].toString()))+")"):i+=t[n].toString()}return i+="]"}throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray")},ld=function(t,e,r){var a=function(i){return i};return e!==void 0&&r&&(a=r.internal.getEncryptor(e)),(t=t||"").toString(),t="("+Pi(a(t))+")"},Ra=function(){this._objId=void 0,this._scope=void 0,Object.defineProperty(this,"objId",{get:function(){if(this._objId===void 0){if(this.scope===void 0)return;this._objId=this.scope.internal.newObjectDeferred()}return this._objId},set:function(t){this._objId=t}}),Object.defineProperty(this,"scope",{value:this._scope,writable:!0})};Ra.prototype.toString=function(){return this.objId+" 0 R"},Ra.prototype.putStream=function(){var t=this.getKeyValueListForStream();this.scope.internal.putStream({data:this.stream,additionalKeyValues:t,objectId:this.objId}),this.scope.internal.out("endobj")},Ra.prototype.getKeyValueListForStream=function(){var t=[],e=Object.getOwnPropertyNames(this).filter(function(n){return n!="content"&&n!="appearanceStreamContent"&&n!="scope"&&n!="objId"&&n.substring(0,1)!="_"});for(var r in e)if(Object.getOwnPropertyDescriptor(this,e[r]).configurable===!1){var a=e[r],i=this[a];i&&(Array.isArray(i)?t.push({key:a,value:dp(i,this.objId,this.scope)}):i instanceof Ra?(i.scope=this.scope,t.push({key:a,value:i.objId+" 0 R"})):typeof i!="function"&&t.push({key:a,value:i}))}return t};var up=function(){Ra.call(this),Object.defineProperty(this,"Type",{value:"/XObject",configurable:!1,writable:!0}),Object.defineProperty(this,"Subtype",{value:"/Form",configurable:!1,writable:!0}),Object.defineProperty(this,"FormType",{value:1,configurable:!1,writable:!0});var t,e=[];Object.defineProperty(this,"BBox",{configurable:!1,get:function(){return e},set:function(r){e=r}}),Object.defineProperty(this,"Resources",{value:"2 0 R",configurable:!1,writable:!0}),Object.defineProperty(this,"stream",{enumerable:!1,configurable:!0,set:function(r){t=r.trim()},get:function(){return t||null}})};Rr(up,Ra);var hp=function(){Ra.call(this);var t,e=[];Object.defineProperty(this,"Kids",{enumerable:!1,configurable:!0,get:function(){return e.length>0?e:void 0}}),Object.defineProperty(this,"Fields",{enumerable:!1,configurable:!1,get:function(){return e}}),Object.defineProperty(this,"DA",{enumerable:!1,configurable:!1,get:function(){if(t){var r=function(a){return a};return this.scope&&(r=this.scope.internal.getEncryptor(this.objId)),"("+Pi(r(t))+")"}},set:function(r){t=r}})};Rr(hp,Ra);var wa=function t(){Ra.call(this);var e=4;Object.defineProperty(this,"F",{enumerable:!1,configurable:!1,get:function(){return e},set:function(x){if(isNaN(x))throw new Error('Invalid value "'+x+'" for attribute F supplied.');e=x}}),Object.defineProperty(this,"showWhenPrinted",{enumerable:!0,configurable:!0,get:function(){return!!Ht(e,3)},set:function(x){x?this.F=$t(e,3):this.F=Vt(e,3)}});var r=0;Object.defineProperty(this,"Ff",{enumerable:!1,configurable:!1,get:function(){return r},set:function(x){if(isNaN(x))throw new Error('Invalid value "'+x+'" for attribute Ff supplied.');r=x}});var a=[];Object.defineProperty(this,"Rect",{enumerable:!1,configurable:!1,get:function(){if(a.length!==0)return a},set:function(x){a=x!==void 0?x:[]}}),Object.defineProperty(this,"x",{enumerable:!0,configurable:!0,get:function(){return!a||isNaN(a[0])?0:a[0]},set:function(x){a[0]=x}}),Object.defineProperty(this,"y",{enumerable:!0,configurable:!0,get:function(){return!a||isNaN(a[1])?0:a[1]},set:function(x){a[1]=x}}),Object.defineProperty(this,"width",{enumerable:!0,configurable:!0,get:function(){return!a||isNaN(a[2])?0:a[2]},set:function(x){a[2]=x}}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,get:function(){return!a||isNaN(a[3])?0:a[3]},set:function(x){a[3]=x}});var i="";Object.defineProperty(this,"FT",{enumerable:!0,configurable:!1,get:function(){return i},set:function(x){switch(x){case"/Btn":case"/Tx":case"/Ch":case"/Sig":i=x;break;default:throw new Error('Invalid value "'+x+'" for attribute FT supplied.')}}});var n=null;Object.defineProperty(this,"T",{enumerable:!0,configurable:!1,get:function(){if(!n||n.length<1){if(this instanceof Hl)return;n="FieldObject"+t.FieldNum++}var x=function(I){return I};return this.scope&&(x=this.scope.internal.getEncryptor(this.objId)),"("+Pi(x(n))+")"},set:function(x){n=x.toString()}}),Object.defineProperty(this,"fieldName",{configurable:!0,enumerable:!0,get:function(){return n},set:function(x){n=x}});var l="helvetica";Object.defineProperty(this,"fontName",{enumerable:!0,configurable:!0,get:function(){return l},set:function(x){l=x}});var c="normal";Object.defineProperty(this,"fontStyle",{enumerable:!0,configurable:!0,get:function(){return c},set:function(x){c=x}});var u=0;Object.defineProperty(this,"fontSize",{enumerable:!0,configurable:!0,get:function(){return u},set:function(x){u=x}});var f=void 0;Object.defineProperty(this,"maxFontSize",{enumerable:!0,configurable:!0,get:function(){return f===void 0?50/pu:f},set:function(x){f=x}});var g="black";Object.defineProperty(this,"color",{enumerable:!0,configurable:!0,get:function(){return g},set:function(x){g=x}});var b="/F1 0 Tf 0 g";Object.defineProperty(this,"DA",{enumerable:!0,configurable:!1,get:function(){if(!(!b||this instanceof Hl||this instanceof Ni))return ld(b,this.objId,this.scope)},set:function(x){x=x.toString(),b=x}});var y=null;Object.defineProperty(this,"DV",{enumerable:!1,configurable:!1,get:function(){if(y)return this instanceof or?y:ld(y,this.objId,this.scope)},set:function(x){x=x.toString(),y=this instanceof or?x:x.substr(0,1)==="("?ns(x.substr(1,x.length-2)):ns(x)}}),Object.defineProperty(this,"defaultValue",{enumerable:!0,configurable:!0,get:function(){return this instanceof or?ns(y.substr(1,y.length-1)):y},set:function(x){x=x.toString(),y=this instanceof or?"/"+x:x}});var m=null;Object.defineProperty(this,"_V",{enumerable:!1,configurable:!1,get:function(){if(m)return m},set:function(x){this.V=x}}),Object.defineProperty(this,"V",{enumerable:!1,configurable:!1,get:function(){if(m)return this instanceof or?m:ld(m,this.objId,this.scope)},set:function(x){x=x.toString(),m=this instanceof or?x:x.substr(0,1)==="("?ns(x.substr(1,x.length-2)):ns(x)}}),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,get:function(){return this instanceof or?ns(m.substr(1,m.length-1)):m},set:function(x){x=x.toString(),m=this instanceof or?"/"+x:x}}),Object.defineProperty(this,"hasAnnotation",{enumerable:!0,configurable:!0,get:function(){return this.Rect}}),Object.defineProperty(this,"Type",{enumerable:!0,configurable:!1,get:function(){return this.hasAnnotation?"/Annot":null}}),Object.defineProperty(this,"Subtype",{enumerable:!0,configurable:!1,get:function(){return this.hasAnnotation?"/Widget":null}});var k,N=!1;Object.defineProperty(this,"hasAppearanceStream",{enumerable:!0,configurable:!0,get:function(){return N},set:function(x){x=!!x,N=x}}),Object.defineProperty(this,"page",{enumerable:!0,configurable:!0,get:function(){if(k)return k},set:function(x){k=x}}),Object.defineProperty(this,"readOnly",{enumerable:!0,configurable:!0,get:function(){return!!Ht(this.Ff,1)},set:function(x){x?this.Ff=$t(this.Ff,1):this.Ff=Vt(this.Ff,1)}}),Object.defineProperty(this,"required",{enumerable:!0,configurable:!0,get:function(){return!!Ht(this.Ff,2)},set:function(x){x?this.Ff=$t(this.Ff,2):this.Ff=Vt(this.Ff,2)}}),Object.defineProperty(this,"noExport",{enumerable:!0,configurable:!0,get:function(){return!!Ht(this.Ff,3)},set:function(x){x?this.Ff=$t(this.Ff,3):this.Ff=Vt(this.Ff,3)}});var _=null;Object.defineProperty(this,"Q",{enumerable:!0,configurable:!1,get:function(){if(_!==null)return _},set:function(x){if([0,1,2].indexOf(x)===-1)throw new Error('Invalid value "'+x+'" for attribute Q supplied.');_=x}}),Object.defineProperty(this,"textAlign",{get:function(){var x;switch(_){case 0:default:x="left";break;case 1:x="center";break;case 2:x="right"}return x},configurable:!0,enumerable:!0,set:function(x){switch(x){case"right":case 2:_=2;break;case"center":case 1:_=1;break;case"left":case 0:default:_=0}}})};Rr(wa,Ra);var us=function(){wa.call(this),this.FT="/Ch",this.V="()",this.fontName="zapfdingbats";var t=0;Object.defineProperty(this,"TI",{enumerable:!0,configurable:!1,get:function(){return t},set:function(r){t=r}}),Object.defineProperty(this,"topIndex",{enumerable:!0,configurable:!0,get:function(){return t},set:function(r){t=r}});var e=[];Object.defineProperty(this,"Opt",{enumerable:!0,configurable:!1,get:function(){return dp(e,this.objId,this.scope)},set:function(r){var a,i;i=[],typeof(a=r)=="string"&&(i=function(n,l,c){c||(c=1);for(var u,f=[];u=l.exec(n);)f.push(u[c]);return f}(a,/\((.*?)\)/g)),e=i}}),this.getOptions=function(){return e},this.setOptions=function(r){e=r,this.sort&&e.sort()},this.addOption=function(r){r=(r=r||"").toString(),e.push(r),this.sort&&e.sort()},this.removeOption=function(r,a){for(a=a||!1,r=(r=r||"").toString();e.indexOf(r)!==-1&&(e.splice(e.indexOf(r),1),a!==!1););},Object.defineProperty(this,"combo",{enumerable:!0,configurable:!0,get:function(){return!!Ht(this.Ff,18)},set:function(r){r?this.Ff=$t(this.Ff,18):this.Ff=Vt(this.Ff,18)}}),Object.defineProperty(this,"edit",{enumerable:!0,configurable:!0,get:function(){return!!Ht(this.Ff,19)},set:function(r){this.combo===!0&&(r?this.Ff=$t(this.Ff,19):this.Ff=Vt(this.Ff,19))}}),Object.defineProperty(this,"sort",{enumerable:!0,configurable:!0,get:function(){return!!Ht(this.Ff,20)},set:function(r){r?(this.Ff=$t(this.Ff,20),e.sort()):this.Ff=Vt(this.Ff,20)}}),Object.defineProperty(this,"multiSelect",{enumerable:!0,configurable:!0,get:function(){return!!Ht(this.Ff,22)},set:function(r){r?this.Ff=$t(this.Ff,22):this.Ff=Vt(this.Ff,22)}}),Object.defineProperty(this,"doNotSpellCheck",{enumerable:!0,configurable:!0,get:function(){return!!Ht(this.Ff,23)},set:function(r){r?this.Ff=$t(this.Ff,23):this.Ff=Vt(this.Ff,23)}}),Object.defineProperty(this,"commitOnSelChange",{enumerable:!0,configurable:!0,get:function(){return!!Ht(this.Ff,27)},set:function(r){r?this.Ff=$t(this.Ff,27):this.Ff=Vt(this.Ff,27)}}),this.hasAppearanceStream=!1};Rr(us,wa);var hs=function(){us.call(this),this.fontName="helvetica",this.combo=!1};Rr(hs,us);var fs=function(){hs.call(this),this.combo=!0};Rr(fs,hs);var El=function(){fs.call(this),this.edit=!0};Rr(El,fs);var or=function(){wa.call(this),this.FT="/Btn",Object.defineProperty(this,"noToggleToOff",{enumerable:!0,configurable:!0,get:function(){return!!Ht(this.Ff,15)},set:function(r){r?this.Ff=$t(this.Ff,15):this.Ff=Vt(this.Ff,15)}}),Object.defineProperty(this,"radio",{enumerable:!0,configurable:!0,get:function(){return!!Ht(this.Ff,16)},set:function(r){r?this.Ff=$t(this.Ff,16):this.Ff=Vt(this.Ff,16)}}),Object.defineProperty(this,"pushButton",{enumerable:!0,configurable:!0,get:function(){return!!Ht(this.Ff,17)},set:function(r){r?this.Ff=$t(this.Ff,17):this.Ff=Vt(this.Ff,17)}}),Object.defineProperty(this,"radioIsUnison",{enumerable:!0,configurable:!0,get:function(){return!!Ht(this.Ff,26)},set:function(r){r?this.Ff=$t(this.Ff,26):this.Ff=Vt(this.Ff,26)}});var t,e={};Object.defineProperty(this,"MK",{enumerable:!1,configurable:!1,get:function(){var r=function(n){return n};if(this.scope&&(r=this.scope.internal.getEncryptor(this.objId)),Object.keys(e).length!==0){var a,i=[];for(a in i.push("<<"),e)i.push("/"+a+" ("+Pi(r(e[a]))+")");return i.push(">>"),i.join(`
`)}},set:function(r){kt(r)==="object"&&(e=r)}}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,get:function(){return e.CA||""},set:function(r){typeof r=="string"&&(e.CA=r)}}),Object.defineProperty(this,"AS",{enumerable:!1,configurable:!1,get:function(){return t},set:function(r){t=r}}),Object.defineProperty(this,"appearanceState",{enumerable:!0,configurable:!0,get:function(){return t.substr(1,t.length-1)},set:function(r){t="/"+r}})};Rr(or,wa);var Tl=function(){or.call(this),this.pushButton=!0};Rr(Tl,or);var ps=function(){or.call(this),this.radio=!0,this.pushButton=!1;var t=[];Object.defineProperty(this,"Kids",{enumerable:!0,configurable:!1,get:function(){return t},set:function(e){t=e!==void 0?e:[]}})};Rr(ps,or);var Hl=function(){var t,e;wa.call(this),Object.defineProperty(this,"Parent",{enumerable:!1,configurable:!1,get:function(){return t},set:function(i){t=i}}),Object.defineProperty(this,"optionName",{enumerable:!1,configurable:!0,get:function(){return e},set:function(i){e=i}});var r,a={};Object.defineProperty(this,"MK",{enumerable:!1,configurable:!1,get:function(){var i=function(c){return c};this.scope&&(i=this.scope.internal.getEncryptor(this.objId));var n,l=[];for(n in l.push("<<"),a)l.push("/"+n+" ("+Pi(i(a[n]))+")");return l.push(">>"),l.join(`
`)},set:function(i){kt(i)==="object"&&(a=i)}}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,get:function(){return a.CA||""},set:function(i){typeof i=="string"&&(a.CA=i)}}),Object.defineProperty(this,"AS",{enumerable:!1,configurable:!1,get:function(){return r},set:function(i){r=i}}),Object.defineProperty(this,"appearanceState",{enumerable:!0,configurable:!0,get:function(){return r.substr(1,r.length-1)},set:function(i){r="/"+i}}),this.caption="l",this.appearanceState="Off",this._AppearanceType=Re.RadioButton.Circle,this.appearanceStreamContent=this._AppearanceType.createAppearanceStream(this.optionName)};Rr(Hl,wa),ps.prototype.setAppearance=function(t){if(!("createAppearanceStream"in t)||!("getCA"in t))throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");for(var e in this.Kids)if(this.Kids.hasOwnProperty(e)){var r=this.Kids[e];r.appearanceStreamContent=t.createAppearanceStream(r.optionName),r.caption=t.getCA()}},ps.prototype.createOption=function(t){var e=new Hl;return e.Parent=this,e.optionName=t,this.Kids.push(e),ag.call(this.scope,e),e};var Ml=function(){or.call(this),this.fontName="zapfdingbats",this.caption="3",this.appearanceState="On",this.value="On",this.textAlign="center",this.appearanceStreamContent=Re.CheckBox.createAppearanceStream()};Rr(Ml,or);var Ni=function(){wa.call(this),this.FT="/Tx",Object.defineProperty(this,"multiline",{enumerable:!0,configurable:!0,get:function(){return!!Ht(this.Ff,13)},set:function(e){e?this.Ff=$t(this.Ff,13):this.Ff=Vt(this.Ff,13)}}),Object.defineProperty(this,"fileSelect",{enumerable:!0,configurable:!0,get:function(){return!!Ht(this.Ff,21)},set:function(e){e?this.Ff=$t(this.Ff,21):this.Ff=Vt(this.Ff,21)}}),Object.defineProperty(this,"doNotSpellCheck",{enumerable:!0,configurable:!0,get:function(){return!!Ht(this.Ff,23)},set:function(e){e?this.Ff=$t(this.Ff,23):this.Ff=Vt(this.Ff,23)}}),Object.defineProperty(this,"doNotScroll",{enumerable:!0,configurable:!0,get:function(){return!!Ht(this.Ff,24)},set:function(e){e?this.Ff=$t(this.Ff,24):this.Ff=Vt(this.Ff,24)}}),Object.defineProperty(this,"comb",{enumerable:!0,configurable:!0,get:function(){return!!Ht(this.Ff,25)},set:function(e){e?this.Ff=$t(this.Ff,25):this.Ff=Vt(this.Ff,25)}}),Object.defineProperty(this,"richText",{enumerable:!0,configurable:!0,get:function(){return!!Ht(this.Ff,26)},set:function(e){e?this.Ff=$t(this.Ff,26):this.Ff=Vt(this.Ff,26)}});var t=null;Object.defineProperty(this,"MaxLen",{enumerable:!0,configurable:!1,get:function(){return t},set:function(e){t=e}}),Object.defineProperty(this,"maxLength",{enumerable:!0,configurable:!0,get:function(){return t},set:function(e){Number.isInteger(e)&&(t=e)}}),Object.defineProperty(this,"hasAppearanceStream",{enumerable:!0,configurable:!0,get:function(){return this.V||this.DV}})};Rr(Ni,wa);var Bl=function(){Ni.call(this),Object.defineProperty(this,"password",{enumerable:!0,configurable:!0,get:function(){return!!Ht(this.Ff,14)},set:function(t){t?this.Ff=$t(this.Ff,14):this.Ff=Vt(this.Ff,14)}}),this.password=!0};Rr(Bl,Ni);var Re={CheckBox:{createAppearanceStream:function(){return{N:{On:Re.CheckBox.YesNormal},D:{On:Re.CheckBox.YesPushDown,Off:Re.CheckBox.OffPushDown}}},YesPushDown:function(t){var e=Da(t);e.scope=t.scope;var r=[],a=t.scope.internal.getFont(t.fontName,t.fontStyle).id,i=t.scope.__private__.encodeColorString(t.color),n=Hd(t,t.caption);return r.push("0.749023 g"),r.push("0 0 "+tt(Re.internal.getWidth(t))+" "+tt(Re.internal.getHeight(t))+" re"),r.push("f"),r.push("BMC"),r.push("q"),r.push("0 0 1 rg"),r.push("/"+a+" "+tt(n.fontSize)+" Tf "+i),r.push("BT"),r.push(n.text),r.push("ET"),r.push("Q"),r.push("EMC"),e.stream=r.join(`
`),e},YesNormal:function(t){var e=Da(t);e.scope=t.scope;var r=t.scope.internal.getFont(t.fontName,t.fontStyle).id,a=t.scope.__private__.encodeColorString(t.color),i=[],n=Re.internal.getHeight(t),l=Re.internal.getWidth(t),c=Hd(t,t.caption);return i.push("1 g"),i.push("0 0 "+tt(l)+" "+tt(n)+" re"),i.push("f"),i.push("q"),i.push("0 0 1 rg"),i.push("0 0 "+tt(l-1)+" "+tt(n-1)+" re"),i.push("W"),i.push("n"),i.push("0 g"),i.push("BT"),i.push("/"+r+" "+tt(c.fontSize)+" Tf "+a),i.push(c.text),i.push("ET"),i.push("Q"),e.stream=i.join(`
`),e},OffPushDown:function(t){var e=Da(t);e.scope=t.scope;var r=[];return r.push("0.749023 g"),r.push("0 0 "+tt(Re.internal.getWidth(t))+" "+tt(Re.internal.getHeight(t))+" re"),r.push("f"),e.stream=r.join(`
`),e}},RadioButton:{Circle:{createAppearanceStream:function(t){var e={D:{Off:Re.RadioButton.Circle.OffPushDown},N:{}};return e.N[t]=Re.RadioButton.Circle.YesNormal,e.D[t]=Re.RadioButton.Circle.YesPushDown,e},getCA:function(){return"l"},YesNormal:function(t){var e=Da(t);e.scope=t.scope;var r=[],a=Re.internal.getWidth(t)<=Re.internal.getHeight(t)?Re.internal.getWidth(t)/4:Re.internal.getHeight(t)/4;a=Number((.9*a).toFixed(5));var i=Re.internal.Bezier_C,n=Number((a*i).toFixed(5));return r.push("q"),r.push("1 0 0 1 "+Fn(Re.internal.getWidth(t)/2)+" "+Fn(Re.internal.getHeight(t)/2)+" cm"),r.push(a+" 0 m"),r.push(a+" "+n+" "+n+" "+a+" 0 "+a+" c"),r.push("-"+n+" "+a+" -"+a+" "+n+" -"+a+" 0 c"),r.push("-"+a+" -"+n+" -"+n+" -"+a+" 0 -"+a+" c"),r.push(n+" -"+a+" "+a+" -"+n+" "+a+" 0 c"),r.push("f"),r.push("Q"),e.stream=r.join(`
`),e},YesPushDown:function(t){var e=Da(t);e.scope=t.scope;var r=[],a=Re.internal.getWidth(t)<=Re.internal.getHeight(t)?Re.internal.getWidth(t)/4:Re.internal.getHeight(t)/4;a=Number((.9*a).toFixed(5));var i=Number((2*a).toFixed(5)),n=Number((i*Re.internal.Bezier_C).toFixed(5)),l=Number((a*Re.internal.Bezier_C).toFixed(5));return r.push("0.749023 g"),r.push("q"),r.push("1 0 0 1 "+Fn(Re.internal.getWidth(t)/2)+" "+Fn(Re.internal.getHeight(t)/2)+" cm"),r.push(i+" 0 m"),r.push(i+" "+n+" "+n+" "+i+" 0 "+i+" c"),r.push("-"+n+" "+i+" -"+i+" "+n+" -"+i+" 0 c"),r.push("-"+i+" -"+n+" -"+n+" -"+i+" 0 -"+i+" c"),r.push(n+" -"+i+" "+i+" -"+n+" "+i+" 0 c"),r.push("f"),r.push("Q"),r.push("0 g"),r.push("q"),r.push("1 0 0 1 "+Fn(Re.internal.getWidth(t)/2)+" "+Fn(Re.internal.getHeight(t)/2)+" cm"),r.push(a+" 0 m"),r.push(a+" "+l+" "+l+" "+a+" 0 "+a+" c"),r.push("-"+l+" "+a+" -"+a+" "+l+" -"+a+" 0 c"),r.push("-"+a+" -"+l+" -"+l+" -"+a+" 0 -"+a+" c"),r.push(l+" -"+a+" "+a+" -"+l+" "+a+" 0 c"),r.push("f"),r.push("Q"),e.stream=r.join(`
`),e},OffPushDown:function(t){var e=Da(t);e.scope=t.scope;var r=[],a=Re.internal.getWidth(t)<=Re.internal.getHeight(t)?Re.internal.getWidth(t)/4:Re.internal.getHeight(t)/4;a=Number((.9*a).toFixed(5));var i=Number((2*a).toFixed(5)),n=Number((i*Re.internal.Bezier_C).toFixed(5));return r.push("0.749023 g"),r.push("q"),r.push("1 0 0 1 "+Fn(Re.internal.getWidth(t)/2)+" "+Fn(Re.internal.getHeight(t)/2)+" cm"),r.push(i+" 0 m"),r.push(i+" "+n+" "+n+" "+i+" 0 "+i+" c"),r.push("-"+n+" "+i+" -"+i+" "+n+" -"+i+" 0 c"),r.push("-"+i+" -"+n+" -"+n+" -"+i+" 0 -"+i+" c"),r.push(n+" -"+i+" "+i+" -"+n+" "+i+" 0 c"),r.push("f"),r.push("Q"),e.stream=r.join(`
`),e}},Cross:{createAppearanceStream:function(t){var e={D:{Off:Re.RadioButton.Cross.OffPushDown},N:{}};return e.N[t]=Re.RadioButton.Cross.YesNormal,e.D[t]=Re.RadioButton.Cross.YesPushDown,e},getCA:function(){return"8"},YesNormal:function(t){var e=Da(t);e.scope=t.scope;var r=[],a=Re.internal.calculateCross(t);return r.push("q"),r.push("1 1 "+tt(Re.internal.getWidth(t)-2)+" "+tt(Re.internal.getHeight(t)-2)+" re"),r.push("W"),r.push("n"),r.push(tt(a.x1.x)+" "+tt(a.x1.y)+" m"),r.push(tt(a.x2.x)+" "+tt(a.x2.y)+" l"),r.push(tt(a.x4.x)+" "+tt(a.x4.y)+" m"),r.push(tt(a.x3.x)+" "+tt(a.x3.y)+" l"),r.push("s"),r.push("Q"),e.stream=r.join(`
`),e},YesPushDown:function(t){var e=Da(t);e.scope=t.scope;var r=Re.internal.calculateCross(t),a=[];return a.push("0.749023 g"),a.push("0 0 "+tt(Re.internal.getWidth(t))+" "+tt(Re.internal.getHeight(t))+" re"),a.push("f"),a.push("q"),a.push("1 1 "+tt(Re.internal.getWidth(t)-2)+" "+tt(Re.internal.getHeight(t)-2)+" re"),a.push("W"),a.push("n"),a.push(tt(r.x1.x)+" "+tt(r.x1.y)+" m"),a.push(tt(r.x2.x)+" "+tt(r.x2.y)+" l"),a.push(tt(r.x4.x)+" "+tt(r.x4.y)+" m"),a.push(tt(r.x3.x)+" "+tt(r.x3.y)+" l"),a.push("s"),a.push("Q"),e.stream=a.join(`
`),e},OffPushDown:function(t){var e=Da(t);e.scope=t.scope;var r=[];return r.push("0.749023 g"),r.push("0 0 "+tt(Re.internal.getWidth(t))+" "+tt(Re.internal.getHeight(t))+" re"),r.push("f"),e.stream=r.join(`
`),e}}},createDefaultAppearanceStream:function(t){var e=t.scope.internal.getFont(t.fontName,t.fontStyle).id,r=t.scope.__private__.encodeColorString(t.color);return"/"+e+" "+t.fontSize+" Tf "+r}};Re.internal={Bezier_C:.551915024494,calculateCross:function(t){var e=Re.internal.getWidth(t),r=Re.internal.getHeight(t),a=Math.min(e,r);return{x1:{x:(e-a)/2,y:(r-a)/2+a},x2:{x:(e-a)/2+a,y:(r-a)/2},x3:{x:(e-a)/2,y:(r-a)/2},x4:{x:(e-a)/2+a,y:(r-a)/2+a}}}},Re.internal.getWidth=function(t){var e=0;return kt(t)==="object"&&(e=Eh(t.Rect[2])),e},Re.internal.getHeight=function(t){var e=0;return kt(t)==="object"&&(e=Eh(t.Rect[3])),e};var ag=zt.addField=function(t){if(rg(this,t),!(t instanceof wa))throw new Error("Invalid argument passed to jsPDF.addField.");var e;return(e=t).scope.internal.acroformPlugin.printedOut&&(e.scope.internal.acroformPlugin.printedOut=!1,e.scope.internal.acroformPlugin.acroFormDictionaryRoot=null),e.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(e),t.page=t.scope.internal.getCurrentPageInfo().pageNumber,this};zt.AcroFormChoiceField=us,zt.AcroFormListBox=hs,zt.AcroFormComboBox=fs,zt.AcroFormEditBox=El,zt.AcroFormButton=or,zt.AcroFormPushButton=Tl,zt.AcroFormRadioButton=ps,zt.AcroFormCheckBox=Ml,zt.AcroFormTextField=Ni,zt.AcroFormPasswordField=Bl,zt.AcroFormAppearance=Re,zt.AcroForm={ChoiceField:us,ListBox:hs,ComboBox:fs,EditBox:El,Button:or,PushButton:Tl,RadioButton:ps,CheckBox:Ml,TextField:Ni,PasswordField:Bl,Appearance:Re},Ve.AcroForm={ChoiceField:us,ListBox:hs,ComboBox:fs,EditBox:El,Button:or,PushButton:Tl,RadioButton:ps,CheckBox:Ml,TextField:Ni,PasswordField:Bl,Appearance:Re};Ve.AcroForm;function fp(t){return t.reduce(function(e,r,a){return e[r]=a,e},{})}(function(t){t.__addimage__={};var e="UNKNOWN",r={PNG:[[137,80,78,71]],TIFF:[[77,77,0,42],[73,73,42,0]],JPEG:[[255,216,255,224,void 0,void 0,74,70,73,70,0],[255,216,255,225,void 0,void 0,69,120,105,102,0,0],[255,216,255,219],[255,216,255,238]],JPEG2000:[[0,0,0,12,106,80,32,32]],GIF87a:[[71,73,70,56,55,97]],GIF89a:[[71,73,70,56,57,97]],WEBP:[[82,73,70,70,void 0,void 0,void 0,void 0,87,69,66,80]],BMP:[[66,77],[66,65],[67,73],[67,80],[73,67],[80,84]]},a=t.__addimage__.getImageFileTypeByImageData=function(E,T){var K,H,ce,ue,pe,de=e;if((T=T||e)==="RGBA"||E.data!==void 0&&E.data instanceof Uint8ClampedArray&&"height"in E&&"width"in E)return"RGBA";if(ee(E))for(pe in r)for(ce=r[pe],K=0;K<ce.length;K+=1){for(ue=!0,H=0;H<ce[K].length;H+=1)if(ce[K][H]!==void 0&&ce[K][H]!==E[H]){ue=!1;break}if(ue===!0){de=pe;break}}else for(pe in r)for(ce=r[pe],K=0;K<ce.length;K+=1){for(ue=!0,H=0;H<ce[K].length;H+=1)if(ce[K][H]!==void 0&&ce[K][H]!==E.charCodeAt(H)){ue=!1;break}if(ue===!0){de=pe;break}}return de===e&&T!==e&&(de=T),de},i=function E(T){for(var K=this.internal.write,H=this.internal.putStream,ce=(0,this.internal.getFilters)();ce.indexOf("FlateEncode")!==-1;)ce.splice(ce.indexOf("FlateEncode"),1);T.objectId=this.internal.newObject();var ue=[];if(ue.push({key:"Type",value:"/XObject"}),ue.push({key:"Subtype",value:"/Image"}),ue.push({key:"Width",value:T.width}),ue.push({key:"Height",value:T.height}),T.colorSpace===_.INDEXED?ue.push({key:"ColorSpace",value:"[/Indexed /DeviceRGB "+(T.palette.length/3-1)+" "+("sMask"in T&&T.sMask!==void 0?T.objectId+2:T.objectId+1)+" 0 R]"}):(ue.push({key:"ColorSpace",value:"/"+T.colorSpace}),T.colorSpace===_.DEVICE_CMYK&&ue.push({key:"Decode",value:"[1 0 1 0 1 0 1 0]"})),ue.push({key:"BitsPerComponent",value:T.bitsPerComponent}),"decodeParameters"in T&&T.decodeParameters!==void 0&&ue.push({key:"DecodeParms",value:"<<"+T.decodeParameters+">>"}),"transparency"in T&&Array.isArray(T.transparency)){for(var pe="",de=0,fe=T.transparency.length;de<fe;de++)pe+=T.transparency[de]+" "+T.transparency[de]+" ";ue.push({key:"Mask",value:"["+pe+"]"})}T.sMask!==void 0&&ue.push({key:"SMask",value:T.objectId+1+" 0 R"});var ve=T.filter!==void 0?["/"+T.filter]:void 0;if(H({data:T.data,additionalKeyValues:ue,alreadyAppliedFilters:ve,objectId:T.objectId}),K("endobj"),"sMask"in T&&T.sMask!==void 0){var Ie="/Predictor "+T.predictor+" /Colors 1 /BitsPerComponent "+T.bitsPerComponent+" /Columns "+T.width,C={width:T.width,height:T.height,colorSpace:"DeviceGray",bitsPerComponent:T.bitsPerComponent,decodeParameters:Ie,data:T.sMask};"filter"in T&&(C.filter=T.filter),E.call(this,C)}if(T.colorSpace===_.INDEXED){var z=this.internal.newObject();H({data:S(new Uint8Array(T.palette)),objectId:z}),K("endobj")}},n=function(){var E=this.internal.collections.addImage_images;for(var T in E)i.call(this,E[T])},l=function(){var E,T=this.internal.collections.addImage_images,K=this.internal.write;for(var H in T)K("/I"+(E=T[H]).index,E.objectId,"0","R")},c=function(){this.internal.collections.addImage_images||(this.internal.collections.addImage_images={},this.internal.events.subscribe("putResources",n),this.internal.events.subscribe("putXobjectDict",l))},u=function(){var E=this.internal.collections.addImage_images;return c.call(this),E},f=function(){return Object.keys(this.internal.collections.addImage_images).length},g=function(E){return typeof t["process"+E.toUpperCase()]=="function"},b=function(E){return kt(E)==="object"&&E.nodeType===1},y=function(E,T){if(E.nodeName==="IMG"&&E.hasAttribute("src")){var K=""+E.getAttribute("src");if(K.indexOf("data:image/")===0)return bo(unescape(K).split("base64,").pop());var H=t.loadFile(K,!0);if(H!==void 0)return H}if(E.nodeName==="CANVAS"){if(E.width===0||E.height===0)throw new Error("Given canvas must have data. Canvas width: "+E.width+", height: "+E.height);var ce;switch(T){case"PNG":ce="image/png";break;case"WEBP":ce="image/webp";break;case"JPEG":case"JPG":default:ce="image/jpeg"}return bo(E.toDataURL(ce,1).split("base64,").pop())}},m=function(E){var T=this.internal.collections.addImage_images;if(T){for(var K in T)if(E===T[K].alias)return T[K]}},k=function(E,T,K){return E||T||(E=-96,T=-96),E<0&&(E=-1*K.width*72/E/this.internal.scaleFactor),T<0&&(T=-1*K.height*72/T/this.internal.scaleFactor),E===0&&(E=T*K.width/K.height),T===0&&(T=E*K.height/K.width),[E,T]},N=function(E,T,K,H,ce,ue){var pe=k.call(this,K,H,ce),de=this.internal.getCoordinateString,fe=this.internal.getVerticalCoordinateString,ve=u.call(this);if(K=pe[0],H=pe[1],ve[ce.index]=ce,ue){ue*=Math.PI/180;var Ie=Math.cos(ue),C=Math.sin(ue),z=function(Y){return Y.toFixed(4)},U=[z(Ie),z(C),z(-1*C),z(Ie),0,0,"cm"]}this.internal.write("q"),ue?(this.internal.write([1,"0","0",1,de(E),fe(T+H),"cm"].join(" ")),this.internal.write(U.join(" ")),this.internal.write([de(K),"0","0",de(H),"0","0","cm"].join(" "))):this.internal.write([de(K),"0","0",de(H),de(E),fe(T+H),"cm"].join(" ")),this.isAdvancedAPI()&&this.internal.write([1,0,0,-1,0,0,"cm"].join(" ")),this.internal.write("/I"+ce.index+" Do"),this.internal.write("Q")},_=t.color_spaces={DEVICE_RGB:"DeviceRGB",DEVICE_GRAY:"DeviceGray",DEVICE_CMYK:"DeviceCMYK",CAL_GREY:"CalGray",CAL_RGB:"CalRGB",LAB:"Lab",ICC_BASED:"ICCBased",INDEXED:"Indexed",PATTERN:"Pattern",SEPARATION:"Separation",DEVICE_N:"DeviceN"};t.decode={DCT_DECODE:"DCTDecode",FLATE_DECODE:"FlateDecode",LZW_DECODE:"LZWDecode",JPX_DECODE:"JPXDecode",JBIG2_DECODE:"JBIG2Decode",ASCII85_DECODE:"ASCII85Decode",ASCII_HEX_DECODE:"ASCIIHexDecode",RUN_LENGTH_DECODE:"RunLengthDecode",CCITT_FAX_DECODE:"CCITTFaxDecode"};var x=t.image_compression={NONE:"NONE",FAST:"FAST",MEDIUM:"MEDIUM",SLOW:"SLOW"},I=t.__addimage__.sHashCode=function(E){var T,K,H=0;if(typeof E=="string")for(K=E.length,T=0;T<K;T++)H=(H<<5)-H+E.charCodeAt(T),H|=0;else if(ee(E))for(K=E.byteLength/2,T=0;T<K;T++)H=(H<<5)-H+E[T],H|=0;return H},B=t.__addimage__.validateStringAsBase64=function(E){(E=E||"").toString().trim();var T=!0;return E.length===0&&(T=!1),E.length%4!=0&&(T=!1),/^[A-Za-z0-9+/]+$/.test(E.substr(0,E.length-2))===!1&&(T=!1),/^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(E.substr(-2))===!1&&(T=!1),T},R=t.__addimage__.extractImageFromDataUrl=function(E){var T=(E=E||"").split("base64,"),K=null;if(T.length===2){var H=/^data:(\w*\/\w*);*(charset=(?!charset=)[\w=-]*)*;*$/.exec(T[0]);Array.isArray(H)&&(K={mimeType:H[1],charset:H[2],data:T[1]})}return K},Z=t.__addimage__.supportsArrayBuffer=function(){return typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"};t.__addimage__.isArrayBuffer=function(E){return Z()&&E instanceof ArrayBuffer};var ee=t.__addimage__.isArrayBufferView=function(E){return Z()&&typeof Uint32Array<"u"&&(E instanceof Int8Array||E instanceof Uint8Array||typeof Uint8ClampedArray<"u"&&E instanceof Uint8ClampedArray||E instanceof Int16Array||E instanceof Uint16Array||E instanceof Int32Array||E instanceof Uint32Array||E instanceof Float32Array||E instanceof Float64Array)},A=t.__addimage__.binaryStringToUint8Array=function(E){for(var T=E.length,K=new Uint8Array(T),H=0;H<T;H++)K[H]=E.charCodeAt(H);return K},S=t.__addimage__.arrayBufferToBinaryString=function(E){for(var T="",K=ee(E)?E:new Uint8Array(E),H=0;H<K.length;H+=8192)T+=String.fromCharCode.apply(null,K.subarray(H,H+8192));return T};t.addImage=function(){var E,T,K,H,ce,ue,pe,de,fe;if(typeof arguments[1]=="number"?(T=e,K=arguments[1],H=arguments[2],ce=arguments[3],ue=arguments[4],pe=arguments[5],de=arguments[6],fe=arguments[7]):(T=arguments[1],K=arguments[2],H=arguments[3],ce=arguments[4],ue=arguments[5],pe=arguments[6],de=arguments[7],fe=arguments[8]),kt(E=arguments[0])==="object"&&!b(E)&&"imageData"in E){var ve=E;E=ve.imageData,T=ve.format||T||e,K=ve.x||K||0,H=ve.y||H||0,ce=ve.w||ve.width||ce,ue=ve.h||ve.height||ue,pe=ve.alias||pe,de=ve.compression||de,fe=ve.rotation||ve.angle||fe}var Ie=this.internal.getFilters();if(de===void 0&&Ie.indexOf("FlateEncode")!==-1&&(de="SLOW"),isNaN(K)||isNaN(H))throw new Error("Invalid coordinates passed to jsPDF.addImage");c.call(this);var C=M.call(this,E,T,pe,de);return N.call(this,K,H,ce,ue,C,fe),this};var M=function(E,T,K,H){var ce,ue,pe;if(typeof E=="string"&&a(E)===e){E=unescape(E);var de=ne(E,!1);(de!==""||(de=t.loadFile(E,!0))!==void 0)&&(E=de)}if(b(E)&&(E=y(E,T)),T=a(E,T),!g(T))throw new Error("addImage does not support files of type '"+T+"', please ensure that a plugin for '"+T+"' support is added.");if(((pe=K)==null||pe.length===0)&&(K=function(fe){return typeof fe=="string"||ee(fe)?I(fe):ee(fe.data)?I(fe.data):null}(E)),(ce=m.call(this,K))||(Z()&&(E instanceof Uint8Array||T==="RGBA"||(ue=E,E=A(E))),ce=this["process"+T.toUpperCase()](E,f.call(this),K,function(fe){return fe&&typeof fe=="string"&&(fe=fe.toUpperCase()),fe in t.image_compression?fe:x.NONE}(H),ue)),!ce)throw new Error("An unknown error occurred whilst processing the image.");return ce},ne=t.__addimage__.convertBase64ToBinaryString=function(E,T){var K;T=typeof T!="boolean"||T;var H,ce="";if(typeof E=="string"){H=(K=R(E))!==null?K.data:E;try{ce=bo(H)}catch(ue){if(T)throw B(H)?new Error("atob-Error in jsPDF.convertBase64ToBinaryString "+ue.message):new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ")}}return ce};t.getImageProperties=function(E){var T,K,H="";if(b(E)&&(E=y(E)),typeof E=="string"&&a(E)===e&&((H=ne(E,!1))===""&&(H=t.loadFile(E)||""),E=H),K=a(E),!g(K))throw new Error("addImage does not support files of type '"+K+"', please ensure that a plugin for '"+K+"' support is added.");if(!Z()||E instanceof Uint8Array||(E=A(E)),!(T=this["process"+K.toUpperCase()](E)))throw new Error("An unknown error occurred whilst processing the image");return T.fileType=K,T}})(Ve.API),function(t){var e=function(r){if(r!==void 0&&r!="")return!0};Ve.API.events.push(["addPage",function(r){this.internal.getPageInfo(r.pageNumber).pageContext.annotations=[]}]),t.events.push(["putPage",function(r){for(var a,i,n,l=this.internal.getCoordinateString,c=this.internal.getVerticalCoordinateString,u=this.internal.getPageInfoByObjId(r.objId),f=r.pageContext.annotations,g=!1,b=0;b<f.length&&!g;b++)switch((a=f[b]).type){case"link":(e(a.options.url)||e(a.options.pageNumber))&&(g=!0);break;case"reference":case"text":case"freetext":g=!0}if(g!=0){this.internal.write("/Annots [");for(var y=0;y<f.length;y++){a=f[y];var m=this.internal.pdfEscape,k=this.internal.getEncryptor(r.objId);switch(a.type){case"reference":this.internal.write(" "+a.object.objId+" 0 R ");break;case"text":var N=this.internal.newAdditionalObject(),_=this.internal.newAdditionalObject(),x=this.internal.getEncryptor(N.objId),I=a.title||"Note";n="<</Type /Annot /Subtype /Text "+(i="/Rect ["+l(a.bounds.x)+" "+c(a.bounds.y+a.bounds.h)+" "+l(a.bounds.x+a.bounds.w)+" "+c(a.bounds.y)+"] ")+"/Contents ("+m(x(a.contents))+")",n+=" /Popup "+_.objId+" 0 R",n+=" /P "+u.objId+" 0 R",n+=" /T ("+m(x(I))+") >>",N.content=n;var B=N.objId+" 0 R";n="<</Type /Annot /Subtype /Popup "+(i="/Rect ["+l(a.bounds.x+30)+" "+c(a.bounds.y+a.bounds.h)+" "+l(a.bounds.x+a.bounds.w+30)+" "+c(a.bounds.y)+"] ")+" /Parent "+B,a.open&&(n+=" /Open true"),n+=" >>",_.content=n,this.internal.write(N.objId,"0 R",_.objId,"0 R");break;case"freetext":i="/Rect ["+l(a.bounds.x)+" "+c(a.bounds.y)+" "+l(a.bounds.x+a.bounds.w)+" "+c(a.bounds.y+a.bounds.h)+"] ";var R=a.color||"#000000";n="<</Type /Annot /Subtype /FreeText "+i+"/Contents ("+m(k(a.contents))+")",n+=" /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#"+R+")",n+=" /Border [0 0 0]",n+=" >>",this.internal.write(n);break;case"link":if(a.options.name){var Z=this.annotations._nameMap[a.options.name];a.options.pageNumber=Z.page,a.options.top=Z.y}else a.options.top||(a.options.top=0);if(i="/Rect ["+a.finalBounds.x+" "+a.finalBounds.y+" "+a.finalBounds.w+" "+a.finalBounds.h+"] ",n="",a.options.url)n="<</Type /Annot /Subtype /Link "+i+"/Border [0 0 0] /A <</S /URI /URI ("+m(k(a.options.url))+") >>";else if(a.options.pageNumber)switch(n="<</Type /Annot /Subtype /Link "+i+"/Border [0 0 0] /Dest ["+this.internal.getPageInfo(a.options.pageNumber).objId+" 0 R",a.options.magFactor=a.options.magFactor||"XYZ",a.options.magFactor){case"Fit":n+=" /Fit]";break;case"FitH":n+=" /FitH "+a.options.top+"]";break;case"FitV":a.options.left=a.options.left||0,n+=" /FitV "+a.options.left+"]";break;case"XYZ":default:var ee=c(a.options.top);a.options.left=a.options.left||0,a.options.zoom===void 0&&(a.options.zoom=0),n+=" /XYZ "+a.options.left+" "+ee+" "+a.options.zoom+"]"}n!=""&&(n+=" >>",this.internal.write(n))}}this.internal.write("]")}}]),t.createAnnotation=function(r){var a=this.internal.getCurrentPageInfo();switch(r.type){case"link":this.link(r.bounds.x,r.bounds.y,r.bounds.w,r.bounds.h,r);break;case"text":case"freetext":a.pageContext.annotations.push(r)}},t.link=function(r,a,i,n,l){var c=this.internal.getCurrentPageInfo(),u=this.internal.getCoordinateString,f=this.internal.getVerticalCoordinateString;c.pageContext.annotations.push({finalBounds:{x:u(r),y:f(a),w:u(r+i),h:f(a+n)},options:l,type:"link"})},t.textWithLink=function(r,a,i,n){var l,c,u=this.getTextWidth(r),f=this.internal.getLineHeight()/this.internal.scaleFactor;if(n.maxWidth!==void 0){c=n.maxWidth;var g=this.splitTextToSize(r,c).length;l=Math.ceil(f*g)}else c=u,l=f;return this.text(r,a,i,n),i+=.2*f,n.align==="center"&&(a-=u/2),n.align==="right"&&(a-=u),this.link(a,i-f,c,l,n),u},t.getTextWidth=function(r){var a=this.internal.getFontSize();return this.getStringUnitWidth(r)*a/this.internal.scaleFactor}}(Ve.API),function(t){var e={1569:[65152],1570:[65153,65154],1571:[65155,65156],1572:[65157,65158],1573:[65159,65160],1574:[65161,65162,65163,65164],1575:[65165,65166],1576:[65167,65168,65169,65170],1577:[65171,65172],1578:[65173,65174,65175,65176],1579:[65177,65178,65179,65180],1580:[65181,65182,65183,65184],1581:[65185,65186,65187,65188],1582:[65189,65190,65191,65192],1583:[65193,65194],1584:[65195,65196],1585:[65197,65198],1586:[65199,65200],1587:[65201,65202,65203,65204],1588:[65205,65206,65207,65208],1589:[65209,65210,65211,65212],1590:[65213,65214,65215,65216],1591:[65217,65218,65219,65220],1592:[65221,65222,65223,65224],1593:[65225,65226,65227,65228],1594:[65229,65230,65231,65232],1601:[65233,65234,65235,65236],1602:[65237,65238,65239,65240],1603:[65241,65242,65243,65244],1604:[65245,65246,65247,65248],1605:[65249,65250,65251,65252],1606:[65253,65254,65255,65256],1607:[65257,65258,65259,65260],1608:[65261,65262],1609:[65263,65264,64488,64489],1610:[65265,65266,65267,65268],1649:[64336,64337],1655:[64477],1657:[64358,64359,64360,64361],1658:[64350,64351,64352,64353],1659:[64338,64339,64340,64341],1662:[64342,64343,64344,64345],1663:[64354,64355,64356,64357],1664:[64346,64347,64348,64349],1667:[64374,64375,64376,64377],1668:[64370,64371,64372,64373],1670:[64378,64379,64380,64381],1671:[64382,64383,64384,64385],1672:[64392,64393],1676:[64388,64389],1677:[64386,64387],1678:[64390,64391],1681:[64396,64397],1688:[64394,64395],1700:[64362,64363,64364,64365],1702:[64366,64367,64368,64369],1705:[64398,64399,64400,64401],1709:[64467,64468,64469,64470],1711:[64402,64403,64404,64405],1713:[64410,64411,64412,64413],1715:[64406,64407,64408,64409],1722:[64414,64415],1723:[64416,64417,64418,64419],1726:[64426,64427,64428,64429],1728:[64420,64421],1729:[64422,64423,64424,64425],1733:[64480,64481],1734:[64473,64474],1735:[64471,64472],1736:[64475,64476],1737:[64482,64483],1739:[64478,64479],1740:[64508,64509,64510,64511],1744:[64484,64485,64486,64487],1746:[64430,64431],1747:[64432,64433]},r={65247:{65154:65269,65156:65271,65160:65273,65166:65275},65248:{65154:65270,65156:65272,65160:65274,65166:65276},65165:{65247:{65248:{65258:65010}}},1617:{1612:64606,1613:64607,1614:64608,1615:64609,1616:64610}},a={1612:64606,1613:64607,1614:64608,1615:64609,1616:64610},i=[1570,1571,1573,1575];t.__arabicParser__={};var n=t.__arabicParser__.isInArabicSubstitutionA=function(N){return e[N.charCodeAt(0)]!==void 0},l=t.__arabicParser__.isArabicLetter=function(N){return typeof N=="string"&&/^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(N)},c=t.__arabicParser__.isArabicEndLetter=function(N){return l(N)&&n(N)&&e[N.charCodeAt(0)].length<=2},u=t.__arabicParser__.isArabicAlfLetter=function(N){return l(N)&&i.indexOf(N.charCodeAt(0))>=0};t.__arabicParser__.arabicLetterHasIsolatedForm=function(N){return l(N)&&n(N)&&e[N.charCodeAt(0)].length>=1};var f=t.__arabicParser__.arabicLetterHasFinalForm=function(N){return l(N)&&n(N)&&e[N.charCodeAt(0)].length>=2};t.__arabicParser__.arabicLetterHasInitialForm=function(N){return l(N)&&n(N)&&e[N.charCodeAt(0)].length>=3};var g=t.__arabicParser__.arabicLetterHasMedialForm=function(N){return l(N)&&n(N)&&e[N.charCodeAt(0)].length==4},b=t.__arabicParser__.resolveLigatures=function(N){var _=0,x=r,I="",B=0;for(_=0;_<N.length;_+=1)x[N.charCodeAt(_)]!==void 0?(B++,typeof(x=x[N.charCodeAt(_)])=="number"&&(I+=String.fromCharCode(x),x=r,B=0),_===N.length-1&&(x=r,I+=N.charAt(_-(B-1)),_-=B-1,B=0)):(x=r,I+=N.charAt(_-B),_-=B,B=0);return I};t.__arabicParser__.isArabicDiacritic=function(N){return N!==void 0&&a[N.charCodeAt(0)]!==void 0};var y=t.__arabicParser__.getCorrectForm=function(N,_,x){return l(N)?n(N)===!1?-1:!f(N)||!l(_)&&!l(x)||!l(x)&&c(_)||c(N)&&!l(_)||c(N)&&u(_)||c(N)&&c(_)?0:g(N)&&l(_)&&!c(_)&&l(x)&&f(x)?3:c(N)||!l(x)?1:2:-1},m=function(N){var _=0,x=0,I=0,B="",R="",Z="",ee=(N=N||"").split("\\s+"),A=[];for(_=0;_<ee.length;_+=1){for(A.push(""),x=0;x<ee[_].length;x+=1)B=ee[_][x],R=ee[_][x-1],Z=ee[_][x+1],l(B)?(I=y(B,R,Z),A[_]+=I!==-1?String.fromCharCode(e[B.charCodeAt(0)][I]):B):A[_]+=B;A[_]=b(A[_])}return A.join(" ")},k=t.__arabicParser__.processArabic=t.processArabic=function(){var N,_=typeof arguments[0]=="string"?arguments[0]:arguments[0].text,x=[];if(Array.isArray(_)){var I=0;for(x=[],I=0;I<_.length;I+=1)Array.isArray(_[I])?x.push([m(_[I][0]),_[I][1],_[I][2]]):x.push([m(_[I])]);N=x}else N=m(_);return typeof arguments[0]=="string"?N:(arguments[0].text=N,arguments[0])};t.events.push(["preProcessText",k])}(Ve.API),Ve.API.autoPrint=function(t){var e;switch((t=t||{}).variant=t.variant||"non-conform",t.variant){case"javascript":this.addJS("print({});");break;case"non-conform":default:this.internal.events.subscribe("postPutResources",function(){e=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/S /Named"),this.internal.out("/Type /Action"),this.internal.out("/N /Print"),this.internal.out(">>"),this.internal.out("endobj")}),this.internal.events.subscribe("putCatalog",function(){this.internal.out("/OpenAction "+e+" 0 R")})}return this},function(t){var e=function(){var r=void 0;Object.defineProperty(this,"pdf",{get:function(){return r},set:function(c){r=c}});var a=150;Object.defineProperty(this,"width",{get:function(){return a},set:function(c){a=isNaN(c)||Number.isInteger(c)===!1||c<0?150:c,this.getContext("2d").pageWrapXEnabled&&(this.getContext("2d").pageWrapX=a+1)}});var i=300;Object.defineProperty(this,"height",{get:function(){return i},set:function(c){i=isNaN(c)||Number.isInteger(c)===!1||c<0?300:c,this.getContext("2d").pageWrapYEnabled&&(this.getContext("2d").pageWrapY=i+1)}});var n=[];Object.defineProperty(this,"childNodes",{get:function(){return n},set:function(c){n=c}});var l={};Object.defineProperty(this,"style",{get:function(){return l},set:function(c){l=c}}),Object.defineProperty(this,"parentNode",{})};e.prototype.getContext=function(r,a){var i;if((r=r||"2d")!=="2d")return null;for(i in a)this.pdf.context2d.hasOwnProperty(i)&&(this.pdf.context2d[i]=a[i]);return this.pdf.context2d._canvas=this,this.pdf.context2d},e.prototype.toDataURL=function(){throw new Error("toDataURL is not implemented.")},t.events.push(["initialized",function(){this.canvas=new e,this.canvas.pdf=this}])}(Ve.API),function(t){var e={left:0,top:0,bottom:0,right:0},r=!1,a=function(){this.internal.__cell__===void 0&&(this.internal.__cell__={},this.internal.__cell__.padding=3,this.internal.__cell__.headerFunction=void 0,this.internal.__cell__.margins=Object.assign({},e),this.internal.__cell__.margins.width=this.getPageWidth(),i.call(this))},i=function(){this.internal.__cell__.lastCell=new n,this.internal.__cell__.pages=1},n=function(){var u=arguments[0];Object.defineProperty(this,"x",{enumerable:!0,get:function(){return u},set:function(N){u=N}});var f=arguments[1];Object.defineProperty(this,"y",{enumerable:!0,get:function(){return f},set:function(N){f=N}});var g=arguments[2];Object.defineProperty(this,"width",{enumerable:!0,get:function(){return g},set:function(N){g=N}});var b=arguments[3];Object.defineProperty(this,"height",{enumerable:!0,get:function(){return b},set:function(N){b=N}});var y=arguments[4];Object.defineProperty(this,"text",{enumerable:!0,get:function(){return y},set:function(N){y=N}});var m=arguments[5];Object.defineProperty(this,"lineNumber",{enumerable:!0,get:function(){return m},set:function(N){m=N}});var k=arguments[6];return Object.defineProperty(this,"align",{enumerable:!0,get:function(){return k},set:function(N){k=N}}),this};n.prototype.clone=function(){return new n(this.x,this.y,this.width,this.height,this.text,this.lineNumber,this.align)},n.prototype.toArray=function(){return[this.x,this.y,this.width,this.height,this.text,this.lineNumber,this.align]},t.setHeaderFunction=function(u){return a.call(this),this.internal.__cell__.headerFunction=typeof u=="function"?u:void 0,this},t.getTextDimensions=function(u,f){a.call(this);var g=(f=f||{}).fontSize||this.getFontSize(),b=f.font||this.getFont(),y=f.scaleFactor||this.internal.scaleFactor,m=0,k=0,N=0,_=this;if(!Array.isArray(u)&&typeof u!="string"){if(typeof u!="number")throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");u=String(u)}var x=f.maxWidth;x>0?typeof u=="string"?u=this.splitTextToSize(u,x):Object.prototype.toString.call(u)==="[object Array]"&&(u=u.reduce(function(B,R){return B.concat(_.splitTextToSize(R,x))},[])):u=Array.isArray(u)?u:[u];for(var I=0;I<u.length;I++)m<(N=this.getStringUnitWidth(u[I],{font:b})*g)&&(m=N);return m!==0&&(k=u.length),{w:m/=y,h:Math.max((k*g*this.getLineHeightFactor()-g*(this.getLineHeightFactor()-1))/y,0)}},t.cellAddPage=function(){a.call(this),this.addPage();var u=this.internal.__cell__.margins||e;return this.internal.__cell__.lastCell=new n(u.left,u.top,void 0,void 0),this.internal.__cell__.pages+=1,this};var l=t.cell=function(){var u;u=arguments[0]instanceof n?arguments[0]:new n(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]),a.call(this);var f=this.internal.__cell__.lastCell,g=this.internal.__cell__.padding,b=this.internal.__cell__.margins||e,y=this.internal.__cell__.tableHeaderRow,m=this.internal.__cell__.printHeaders;return f.lineNumber!==void 0&&(f.lineNumber===u.lineNumber?(u.x=(f.x||0)+(f.width||0),u.y=f.y||0):f.y+f.height+u.height+b.bottom>this.getPageHeight()?(this.cellAddPage(),u.y=b.top,m&&y&&(this.printHeaderRow(u.lineNumber,!0),u.y+=y[0].height)):u.y=f.y+f.height||u.y),u.text[0]!==void 0&&(this.rect(u.x,u.y,u.width,u.height,r===!0?"FD":void 0),u.align==="right"?this.text(u.text,u.x+u.width-g,u.y+g,{align:"right",baseline:"top"}):u.align==="center"?this.text(u.text,u.x+u.width/2,u.y+g,{align:"center",baseline:"top",maxWidth:u.width-g-g}):this.text(u.text,u.x+g,u.y+g,{align:"left",baseline:"top",maxWidth:u.width-g-g})),this.internal.__cell__.lastCell=u,this};t.table=function(u,f,g,b,y){if(a.call(this),!g)throw new Error("No data for PDF table.");var m,k,N,_,x=[],I=[],B=[],R={},Z={},ee=[],A=[],S=(y=y||{}).autoSize||!1,M=y.printHeaders!==!1,ne=y.css&&y.css["font-size"]!==void 0?16*y.css["font-size"]:y.fontSize||12,E=y.margins||Object.assign({width:this.getPageWidth()},e),T=typeof y.padding=="number"?y.padding:3,K=y.headerBackgroundColor||"#c8c8c8",H=y.headerTextColor||"#000";if(i.call(this),this.internal.__cell__.printHeaders=M,this.internal.__cell__.margins=E,this.internal.__cell__.table_font_size=ne,this.internal.__cell__.padding=T,this.internal.__cell__.headerBackgroundColor=K,this.internal.__cell__.headerTextColor=H,this.setFontSize(ne),b==null)I=x=Object.keys(g[0]),B=x.map(function(){return"left"});else if(Array.isArray(b)&&kt(b[0])==="object")for(x=b.map(function(ve){return ve.name}),I=b.map(function(ve){return ve.prompt||ve.name||""}),B=b.map(function(ve){return ve.align||"left"}),m=0;m<b.length;m+=1)Z[b[m].name]=b[m].width*(19.049976/25.4);else Array.isArray(b)&&typeof b[0]=="string"&&(I=x=b,B=x.map(function(){return"left"}));if(S||Array.isArray(b)&&typeof b[0]=="string")for(m=0;m<x.length;m+=1){for(R[_=x[m]]=g.map(function(ve){return ve[_]}),this.setFont(void 0,"bold"),ee.push(this.getTextDimensions(I[m],{fontSize:this.internal.__cell__.table_font_size,scaleFactor:this.internal.scaleFactor}).w),k=R[_],this.setFont(void 0,"normal"),N=0;N<k.length;N+=1)ee.push(this.getTextDimensions(k[N],{fontSize:this.internal.__cell__.table_font_size,scaleFactor:this.internal.scaleFactor}).w);Z[_]=Math.max.apply(null,ee)+T+T,ee=[]}if(M){var ce={};for(m=0;m<x.length;m+=1)ce[x[m]]={},ce[x[m]].text=I[m],ce[x[m]].align=B[m];var ue=c.call(this,ce,Z);A=x.map(function(ve){return new n(u,f,Z[ve],ue,ce[ve].text,void 0,ce[ve].align)}),this.setTableHeaderRow(A),this.printHeaderRow(1,!1)}var pe=b.reduce(function(ve,Ie){return ve[Ie.name]=Ie.align,ve},{});for(m=0;m<g.length;m+=1){"rowStart"in y&&y.rowStart instanceof Function&&y.rowStart({row:m,data:g[m]},this);var de=c.call(this,g[m],Z);for(N=0;N<x.length;N+=1){var fe=g[m][x[N]];"cellStart"in y&&y.cellStart instanceof Function&&y.cellStart({row:m,col:N,data:fe},this),l.call(this,new n(u,f,Z[x[N]],de,fe,m+2,pe[x[N]]))}}return this.internal.__cell__.table_x=u,this.internal.__cell__.table_y=f,this};var c=function(u,f){var g=this.internal.__cell__.padding,b=this.internal.__cell__.table_font_size,y=this.internal.scaleFactor;return Object.keys(u).map(function(m){var k=u[m];return this.splitTextToSize(k.hasOwnProperty("text")?k.text:k,f[m]-g-g)},this).map(function(m){return this.getLineHeightFactor()*m.length*b/y+g+g},this).reduce(function(m,k){return Math.max(m,k)},0)};t.setTableHeaderRow=function(u){a.call(this),this.internal.__cell__.tableHeaderRow=u},t.printHeaderRow=function(u,f){if(a.call(this),!this.internal.__cell__.tableHeaderRow)throw new Error("Property tableHeaderRow does not exist.");var g;if(r=!0,typeof this.internal.__cell__.headerFunction=="function"){var b=this.internal.__cell__.headerFunction(this,this.internal.__cell__.pages);this.internal.__cell__.lastCell=new n(b[0],b[1],b[2],b[3],void 0,-1)}this.setFont(void 0,"bold");for(var y=[],m=0;m<this.internal.__cell__.tableHeaderRow.length;m+=1){g=this.internal.__cell__.tableHeaderRow[m].clone(),f&&(g.y=this.internal.__cell__.margins.top||0,y.push(g)),g.lineNumber=u;var k=this.getTextColor();this.setTextColor(this.internal.__cell__.headerTextColor),this.setFillColor(this.internal.__cell__.headerBackgroundColor),l.call(this,g),this.setTextColor(k)}y.length>0&&this.setTableHeaderRow(y),this.setFont(void 0,"normal"),r=!1}}(Ve.API);var pp={italic:["italic","oblique","normal"],oblique:["oblique","italic","normal"],normal:["normal","oblique","italic"]},mp=["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded"],$d=fp(mp),gp=[100,200,300,400,500,600,700,800,900],ng=fp(gp);function Vd(t){var e=t.family.replace(/"|'/g,"").toLowerCase(),r=function(n){return pp[n=n||"normal"]?n:"normal"}(t.style),a=function(n){if(!n)return 400;if(typeof n=="number")return n>=100&&n<=900&&n%100==0?n:400;if(/^\d00$/.test(n))return parseInt(n);switch(n){case"bold":return 700;case"normal":default:return 400}}(t.weight),i=function(n){return typeof $d[n=n||"normal"]=="number"?n:"normal"}(t.stretch);return{family:e,style:r,weight:a,stretch:i,src:t.src||[],ref:t.ref||{name:e,style:[i,r,a].join(" ")}}}function Th(t,e,r,a){var i;for(i=r;i>=0&&i<e.length;i+=a)if(t[e[i]])return t[e[i]];for(i=r;i>=0&&i<e.length;i-=a)if(t[e[i]])return t[e[i]]}var ig={"sans-serif":"helvetica",fixed:"courier",monospace:"courier",terminal:"courier",cursive:"times",fantasy:"times",serif:"times"},Mh={caption:"times",icon:"times",menu:"times","message-box":"times","small-caption":"times","status-bar":"times"};function Bh(t){return[t.stretch,t.style,t.weight,t.family].join(" ")}function sg(t,e,r){for(var a=(r=r||{}).defaultFontFamily||"times",i=Object.assign({},ig,r.genericFontFamilies||{}),n=null,l=null,c=0;c<e.length;++c)if(i[(n=Vd(e[c])).family]&&(n.family=i[n.family]),t.hasOwnProperty(n.family)){l=t[n.family];break}if(!(l=l||t[a]))throw new Error("Could not find a font-family for the rule '"+Bh(n)+"' and default family '"+a+"'.");if(l=function(u,f){if(f[u])return f[u];var g=$d[u],b=g<=$d.normal?-1:1,y=Th(f,mp,g,b);if(!y)throw new Error("Could not find a matching font-stretch value for "+u);return y}(n.stretch,l),l=function(u,f){if(f[u])return f[u];for(var g=pp[u],b=0;b<g.length;++b)if(f[g[b]])return f[g[b]];throw new Error("Could not find a matching font-style for "+u)}(n.style,l),!(l=function(u,f){if(f[u])return f[u];if(u===400&&f[500])return f[500];if(u===500&&f[400])return f[400];var g=ng[u],b=Th(f,gp,g,u<400?-1:1);if(!b)throw new Error("Could not find a matching font-weight for value "+u);return b}(n.weight,l)))throw new Error("Failed to resolve a font for the rule '"+Bh(n)+"'.");return l}function Oh(t){return t.trimLeft()}function og(t,e){for(var r=0;r<t.length;){if(t.charAt(r)===e)return[t.substring(0,r),t.substring(r+1)];r+=1}return null}function lg(t){var e=t.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);return e===null?null:[e[0],t.substring(e[0].length)]}var _l,Rh,zh,cd=["times"];(function(t){var e,r,a,i,n,l,c,u,f,g=function(C){return C=C||{},this.isStrokeTransparent=C.isStrokeTransparent||!1,this.strokeOpacity=C.strokeOpacity||1,this.strokeStyle=C.strokeStyle||"#000000",this.fillStyle=C.fillStyle||"#000000",this.isFillTransparent=C.isFillTransparent||!1,this.fillOpacity=C.fillOpacity||1,this.font=C.font||"10px sans-serif",this.textBaseline=C.textBaseline||"alphabetic",this.textAlign=C.textAlign||"left",this.lineWidth=C.lineWidth||1,this.lineJoin=C.lineJoin||"miter",this.lineCap=C.lineCap||"butt",this.path=C.path||[],this.transform=C.transform!==void 0?C.transform.clone():new u,this.globalCompositeOperation=C.globalCompositeOperation||"normal",this.globalAlpha=C.globalAlpha||1,this.clip_path=C.clip_path||[],this.currentPoint=C.currentPoint||new l,this.miterLimit=C.miterLimit||10,this.lastPoint=C.lastPoint||new l,this.lineDashOffset=C.lineDashOffset||0,this.lineDash=C.lineDash||[],this.margin=C.margin||[0,0,0,0],this.prevPageLastElemOffset=C.prevPageLastElemOffset||0,this.ignoreClearRect=typeof C.ignoreClearRect!="boolean"||C.ignoreClearRect,this};t.events.push(["initialized",function(){this.context2d=new b(this),e=this.internal.f2,r=this.internal.getCoordinateString,a=this.internal.getVerticalCoordinateString,i=this.internal.getHorizontalCoordinate,n=this.internal.getVerticalCoordinate,l=this.internal.Point,c=this.internal.Rectangle,u=this.internal.Matrix,f=new g}]);var b=function(C){Object.defineProperty(this,"canvas",{get:function(){return{parentNode:!1,style:!1}}});var z=C;Object.defineProperty(this,"pdf",{get:function(){return z}});var U=!1;Object.defineProperty(this,"pageWrapXEnabled",{get:function(){return U},set:function(be){U=!!be}});var Y=!1;Object.defineProperty(this,"pageWrapYEnabled",{get:function(){return Y},set:function(be){Y=!!be}});var re=0;Object.defineProperty(this,"posX",{get:function(){return re},set:function(be){isNaN(be)||(re=be)}});var V=0;Object.defineProperty(this,"posY",{get:function(){return V},set:function(be){isNaN(be)||(V=be)}}),Object.defineProperty(this,"margin",{get:function(){return f.margin},set:function(be){var W;typeof be=="number"?W=[be,be,be,be]:((W=new Array(4))[0]=be[0],W[1]=be.length>=2?be[1]:W[0],W[2]=be.length>=3?be[2]:W[0],W[3]=be.length>=4?be[3]:W[1]),f.margin=W}});var Q=!1;Object.defineProperty(this,"autoPaging",{get:function(){return Q},set:function(be){Q=be}});var se=0;Object.defineProperty(this,"lastBreak",{get:function(){return se},set:function(be){se=be}});var Ne=[];Object.defineProperty(this,"pageBreaks",{get:function(){return Ne},set:function(be){Ne=be}}),Object.defineProperty(this,"ctx",{get:function(){return f},set:function(be){be instanceof g&&(f=be)}}),Object.defineProperty(this,"path",{get:function(){return f.path},set:function(be){f.path=be}});var Se=[];Object.defineProperty(this,"ctxStack",{get:function(){return Se},set:function(be){Se=be}}),Object.defineProperty(this,"fillStyle",{get:function(){return this.ctx.fillStyle},set:function(be){var W;W=y(be),this.ctx.fillStyle=W.style,this.ctx.isFillTransparent=W.a===0,this.ctx.fillOpacity=W.a,this.pdf.setFillColor(W.r,W.g,W.b,{a:W.a}),this.pdf.setTextColor(W.r,W.g,W.b,{a:W.a})}}),Object.defineProperty(this,"strokeStyle",{get:function(){return this.ctx.strokeStyle},set:function(be){var W=y(be);this.ctx.strokeStyle=W.style,this.ctx.isStrokeTransparent=W.a===0,this.ctx.strokeOpacity=W.a,W.a===0?this.pdf.setDrawColor(255,255,255):(W.a,this.pdf.setDrawColor(W.r,W.g,W.b))}}),Object.defineProperty(this,"lineCap",{get:function(){return this.ctx.lineCap},set:function(be){["butt","round","square"].indexOf(be)!==-1&&(this.ctx.lineCap=be,this.pdf.setLineCap(be))}}),Object.defineProperty(this,"lineWidth",{get:function(){return this.ctx.lineWidth},set:function(be){isNaN(be)||(this.ctx.lineWidth=be,this.pdf.setLineWidth(be))}}),Object.defineProperty(this,"lineJoin",{get:function(){return this.ctx.lineJoin},set:function(be){["bevel","round","miter"].indexOf(be)!==-1&&(this.ctx.lineJoin=be,this.pdf.setLineJoin(be))}}),Object.defineProperty(this,"miterLimit",{get:function(){return this.ctx.miterLimit},set:function(be){isNaN(be)||(this.ctx.miterLimit=be,this.pdf.setMiterLimit(be))}}),Object.defineProperty(this,"textBaseline",{get:function(){return this.ctx.textBaseline},set:function(be){this.ctx.textBaseline=be}}),Object.defineProperty(this,"textAlign",{get:function(){return this.ctx.textAlign},set:function(be){["right","end","center","left","start"].indexOf(be)!==-1&&(this.ctx.textAlign=be)}});var De=null;function _e(be,W){if(De===null){var rt=function(ze){var Ae=[];return Object.keys(ze).forEach(function(Le){ze[Le].forEach(function(Te){var Fe=null;switch(Te){case"bold":Fe={family:Le,weight:"bold"};break;case"italic":Fe={family:Le,style:"italic"};break;case"bolditalic":Fe={family:Le,weight:"bold",style:"italic"};break;case"":case"normal":Fe={family:Le}}Fe!==null&&(Fe.ref={name:Le,style:Te},Ae.push(Fe))})}),Ae}(be.getFontList());De=function(ze){for(var Ae={},Le=0;Le<ze.length;++Le){var Te=Vd(ze[Le]),Fe=Te.family,We=Te.stretch,Xe=Te.style,it=Te.weight;Ae[Fe]=Ae[Fe]||{},Ae[Fe][We]=Ae[Fe][We]||{},Ae[Fe][We][Xe]=Ae[Fe][We][Xe]||{},Ae[Fe][We][Xe][it]=Te}return Ae}(rt.concat(W))}return De}var Ge=null;Object.defineProperty(this,"fontFaces",{get:function(){return Ge},set:function(be){De=null,Ge=be}}),Object.defineProperty(this,"font",{get:function(){return this.ctx.font},set:function(be){var W;if(this.ctx.font=be,(W=/^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(be))!==null){var rt=W[1],ze=(W[2],W[3]),Ae=W[4],Le=(W[5],W[6]),Te=/^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(Ae)[2];Ae=Math.floor(Te==="px"?parseFloat(Ae)*this.pdf.internal.scaleFactor:Te==="em"?parseFloat(Ae)*this.pdf.getFontSize():parseFloat(Ae)*this.pdf.internal.scaleFactor),this.pdf.setFontSize(Ae);var Fe=function(Je){var ct,Me,ur=[],gt=Je.trim();if(gt==="")return cd;if(gt in Mh)return[Mh[gt]];for(;gt!=="";){switch(Me=null,ct=(gt=Oh(gt)).charAt(0)){case'"':case"'":Me=og(gt.substring(1),ct);break;default:Me=lg(gt)}if(Me===null||(ur.push(Me[0]),(gt=Oh(Me[1]))!==""&&gt.charAt(0)!==","))return cd;gt=gt.replace(/^,/,"")}return ur}(Le);if(this.fontFaces){var We=sg(_e(this.pdf,this.fontFaces),Fe.map(function(Je){return{family:Je,stretch:"normal",weight:ze,style:rt}}));this.pdf.setFont(We.ref.name,We.ref.style)}else{var Xe="";(ze==="bold"||parseInt(ze,10)>=700||rt==="bold")&&(Xe="bold"),rt==="italic"&&(Xe+="italic"),Xe.length===0&&(Xe="normal");for(var it="",ot={arial:"Helvetica",Arial:"Helvetica",verdana:"Helvetica",Verdana:"Helvetica",helvetica:"Helvetica",Helvetica:"Helvetica","sans-serif":"Helvetica",fixed:"Courier",monospace:"Courier",terminal:"Courier",cursive:"Times",fantasy:"Times",serif:"Times"},ft=0;ft<Fe.length;ft++){if(this.pdf.internal.getFont(Fe[ft],Xe,{noFallback:!0,disableWarning:!0})!==void 0){it=Fe[ft];break}if(Xe==="bolditalic"&&this.pdf.internal.getFont(Fe[ft],"bold",{noFallback:!0,disableWarning:!0})!==void 0)it=Fe[ft],Xe="bold";else if(this.pdf.internal.getFont(Fe[ft],"normal",{noFallback:!0,disableWarning:!0})!==void 0){it=Fe[ft],Xe="normal";break}}if(it===""){for(var Nt=0;Nt<Fe.length;Nt++)if(ot[Fe[Nt]]){it=ot[Fe[Nt]];break}}it=it===""?"Times":it,this.pdf.setFont(it,Xe)}}}}),Object.defineProperty(this,"globalCompositeOperation",{get:function(){return this.ctx.globalCompositeOperation},set:function(be){this.ctx.globalCompositeOperation=be}}),Object.defineProperty(this,"globalAlpha",{get:function(){return this.ctx.globalAlpha},set:function(be){this.ctx.globalAlpha=be}}),Object.defineProperty(this,"lineDashOffset",{get:function(){return this.ctx.lineDashOffset},set:function(be){this.ctx.lineDashOffset=be,Ie.call(this)}}),Object.defineProperty(this,"lineDash",{get:function(){return this.ctx.lineDash},set:function(be){this.ctx.lineDash=be,Ie.call(this)}}),Object.defineProperty(this,"ignoreClearRect",{get:function(){return this.ctx.ignoreClearRect},set:function(be){this.ctx.ignoreClearRect=!!be}})};b.prototype.setLineDash=function(C){this.lineDash=C},b.prototype.getLineDash=function(){return this.lineDash.length%2?this.lineDash.concat(this.lineDash):this.lineDash.slice()},b.prototype.fill=function(){R.call(this,"fill",!1)},b.prototype.stroke=function(){R.call(this,"stroke",!1)},b.prototype.beginPath=function(){this.path=[{type:"begin"}]},b.prototype.moveTo=function(C,z){if(isNaN(C)||isNaN(z))throw Pt.error("jsPDF.context2d.moveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.moveTo");var U=this.ctx.transform.applyToPoint(new l(C,z));this.path.push({type:"mt",x:U.x,y:U.y}),this.ctx.lastPoint=new l(C,z)},b.prototype.closePath=function(){var C=new l(0,0),z=0;for(z=this.path.length-1;z!==-1;z--)if(this.path[z].type==="begin"&&kt(this.path[z+1])==="object"&&typeof this.path[z+1].x=="number"){C=new l(this.path[z+1].x,this.path[z+1].y);break}this.path.push({type:"close"}),this.ctx.lastPoint=new l(C.x,C.y)},b.prototype.lineTo=function(C,z){if(isNaN(C)||isNaN(z))throw Pt.error("jsPDF.context2d.lineTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.lineTo");var U=this.ctx.transform.applyToPoint(new l(C,z));this.path.push({type:"lt",x:U.x,y:U.y}),this.ctx.lastPoint=new l(U.x,U.y)},b.prototype.clip=function(){this.ctx.clip_path=JSON.parse(JSON.stringify(this.path)),R.call(this,null,!0)},b.prototype.quadraticCurveTo=function(C,z,U,Y){if(isNaN(U)||isNaN(Y)||isNaN(C)||isNaN(z))throw Pt.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");var re=this.ctx.transform.applyToPoint(new l(U,Y)),V=this.ctx.transform.applyToPoint(new l(C,z));this.path.push({type:"qct",x1:V.x,y1:V.y,x:re.x,y:re.y}),this.ctx.lastPoint=new l(re.x,re.y)},b.prototype.bezierCurveTo=function(C,z,U,Y,re,V){if(isNaN(re)||isNaN(V)||isNaN(C)||isNaN(z)||isNaN(U)||isNaN(Y))throw Pt.error("jsPDF.context2d.bezierCurveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");var Q=this.ctx.transform.applyToPoint(new l(re,V)),se=this.ctx.transform.applyToPoint(new l(C,z)),Ne=this.ctx.transform.applyToPoint(new l(U,Y));this.path.push({type:"bct",x1:se.x,y1:se.y,x2:Ne.x,y2:Ne.y,x:Q.x,y:Q.y}),this.ctx.lastPoint=new l(Q.x,Q.y)},b.prototype.arc=function(C,z,U,Y,re,V){if(isNaN(C)||isNaN(z)||isNaN(U)||isNaN(Y)||isNaN(re))throw Pt.error("jsPDF.context2d.arc: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.arc");if(V=!!V,!this.ctx.transform.isIdentity){var Q=this.ctx.transform.applyToPoint(new l(C,z));C=Q.x,z=Q.y;var se=this.ctx.transform.applyToPoint(new l(0,U)),Ne=this.ctx.transform.applyToPoint(new l(0,0));U=Math.sqrt(Math.pow(se.x-Ne.x,2)+Math.pow(se.y-Ne.y,2))}Math.abs(re-Y)>=2*Math.PI&&(Y=0,re=2*Math.PI),this.path.push({type:"arc",x:C,y:z,radius:U,startAngle:Y,endAngle:re,counterclockwise:V})},b.prototype.arcTo=function(C,z,U,Y,re){throw new Error("arcTo not implemented.")},b.prototype.rect=function(C,z,U,Y){if(isNaN(C)||isNaN(z)||isNaN(U)||isNaN(Y))throw Pt.error("jsPDF.context2d.rect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.rect");this.moveTo(C,z),this.lineTo(C+U,z),this.lineTo(C+U,z+Y),this.lineTo(C,z+Y),this.lineTo(C,z),this.lineTo(C+U,z),this.lineTo(C,z)},b.prototype.fillRect=function(C,z,U,Y){if(isNaN(C)||isNaN(z)||isNaN(U)||isNaN(Y))throw Pt.error("jsPDF.context2d.fillRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.fillRect");if(!m.call(this)){var re={};this.lineCap!=="butt"&&(re.lineCap=this.lineCap,this.lineCap="butt"),this.lineJoin!=="miter"&&(re.lineJoin=this.lineJoin,this.lineJoin="miter"),this.beginPath(),this.rect(C,z,U,Y),this.fill(),re.hasOwnProperty("lineCap")&&(this.lineCap=re.lineCap),re.hasOwnProperty("lineJoin")&&(this.lineJoin=re.lineJoin)}},b.prototype.strokeRect=function(C,z,U,Y){if(isNaN(C)||isNaN(z)||isNaN(U)||isNaN(Y))throw Pt.error("jsPDF.context2d.strokeRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");k.call(this)||(this.beginPath(),this.rect(C,z,U,Y),this.stroke())},b.prototype.clearRect=function(C,z,U,Y){if(isNaN(C)||isNaN(z)||isNaN(U)||isNaN(Y))throw Pt.error("jsPDF.context2d.clearRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.clearRect");this.ignoreClearRect||(this.fillStyle="#ffffff",this.fillRect(C,z,U,Y))},b.prototype.save=function(C){C=typeof C!="boolean"||C;for(var z=this.pdf.internal.getCurrentPageInfo().pageNumber,U=0;U<this.pdf.internal.getNumberOfPages();U++)this.pdf.setPage(U+1),this.pdf.internal.out("q");if(this.pdf.setPage(z),C){this.ctx.fontSize=this.pdf.internal.getFontSize();var Y=new g(this.ctx);this.ctxStack.push(this.ctx),this.ctx=Y}},b.prototype.restore=function(C){C=typeof C!="boolean"||C;for(var z=this.pdf.internal.getCurrentPageInfo().pageNumber,U=0;U<this.pdf.internal.getNumberOfPages();U++)this.pdf.setPage(U+1),this.pdf.internal.out("Q");this.pdf.setPage(z),C&&this.ctxStack.length!==0&&(this.ctx=this.ctxStack.pop(),this.fillStyle=this.ctx.fillStyle,this.strokeStyle=this.ctx.strokeStyle,this.font=this.ctx.font,this.lineCap=this.ctx.lineCap,this.lineWidth=this.ctx.lineWidth,this.lineJoin=this.ctx.lineJoin,this.lineDash=this.ctx.lineDash,this.lineDashOffset=this.ctx.lineDashOffset)},b.prototype.toDataURL=function(){throw new Error("toDataUrl not implemented.")};var y=function(C){var z,U,Y,re;if(C.isCanvasGradient===!0&&(C=C.getColor()),!C)return{r:0,g:0,b:0,a:0,style:C};if(/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(C))z=0,U=0,Y=0,re=0;else{var V=/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(C);if(V!==null)z=parseInt(V[1]),U=parseInt(V[2]),Y=parseInt(V[3]),re=1;else if((V=/rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(C))!==null)z=parseInt(V[1]),U=parseInt(V[2]),Y=parseInt(V[3]),re=parseFloat(V[4]);else{if(re=1,typeof C=="string"&&C.charAt(0)!=="#"){var Q=new op(C);C=Q.ok?Q.toHex():"#000000"}C.length===4?(z=C.substring(1,2),z+=z,U=C.substring(2,3),U+=U,Y=C.substring(3,4),Y+=Y):(z=C.substring(1,3),U=C.substring(3,5),Y=C.substring(5,7)),z=parseInt(z,16),U=parseInt(U,16),Y=parseInt(Y,16)}}return{r:z,g:U,b:Y,a:re,style:C}},m=function(){return this.ctx.isFillTransparent||this.globalAlpha==0},k=function(){return!!(this.ctx.isStrokeTransparent||this.globalAlpha==0)};b.prototype.fillText=function(C,z,U,Y){if(isNaN(z)||isNaN(U)||typeof C!="string")throw Pt.error("jsPDF.context2d.fillText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.fillText");if(Y=isNaN(Y)?void 0:Y,!m.call(this)){var re=de(this.ctx.transform.rotation),V=this.ctx.transform.scaleX;T.call(this,{text:C,x:z,y:U,scale:V,angle:re,align:this.textAlign,maxWidth:Y})}},b.prototype.strokeText=function(C,z,U,Y){if(isNaN(z)||isNaN(U)||typeof C!="string")throw Pt.error("jsPDF.context2d.strokeText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.strokeText");if(!k.call(this)){Y=isNaN(Y)?void 0:Y;var re=de(this.ctx.transform.rotation),V=this.ctx.transform.scaleX;T.call(this,{text:C,x:z,y:U,scale:V,renderingMode:"stroke",angle:re,align:this.textAlign,maxWidth:Y})}},b.prototype.measureText=function(C){if(typeof C!="string")throw Pt.error("jsPDF.context2d.measureText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.measureText");var z=this.pdf,U=this.pdf.internal.scaleFactor,Y=z.internal.getFontSize(),re=z.getStringUnitWidth(C)*Y/z.internal.scaleFactor,V=function(Q){var se=(Q=Q||{}).width||0;return Object.defineProperty(this,"width",{get:function(){return se}}),this};return new V({width:re*=Math.round(96*U/72*1e4)/1e4})},b.prototype.scale=function(C,z){if(isNaN(C)||isNaN(z))throw Pt.error("jsPDF.context2d.scale: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.scale");var U=new u(C,0,0,z,0,0);this.ctx.transform=this.ctx.transform.multiply(U)},b.prototype.rotate=function(C){if(isNaN(C))throw Pt.error("jsPDF.context2d.rotate: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.rotate");var z=new u(Math.cos(C),Math.sin(C),-Math.sin(C),Math.cos(C),0,0);this.ctx.transform=this.ctx.transform.multiply(z)},b.prototype.translate=function(C,z){if(isNaN(C)||isNaN(z))throw Pt.error("jsPDF.context2d.translate: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.translate");var U=new u(1,0,0,1,C,z);this.ctx.transform=this.ctx.transform.multiply(U)},b.prototype.transform=function(C,z,U,Y,re,V){if(isNaN(C)||isNaN(z)||isNaN(U)||isNaN(Y)||isNaN(re)||isNaN(V))throw Pt.error("jsPDF.context2d.transform: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.transform");var Q=new u(C,z,U,Y,re,V);this.ctx.transform=this.ctx.transform.multiply(Q)},b.prototype.setTransform=function(C,z,U,Y,re,V){C=isNaN(C)?1:C,z=isNaN(z)?0:z,U=isNaN(U)?0:U,Y=isNaN(Y)?1:Y,re=isNaN(re)?0:re,V=isNaN(V)?0:V,this.ctx.transform=new u(C,z,U,Y,re,V)};var N=function(){return this.margin[0]>0||this.margin[1]>0||this.margin[2]>0||this.margin[3]>0};b.prototype.drawImage=function(C,z,U,Y,re,V,Q,se,Ne){var Se=this.pdf.getImageProperties(C),De=1,_e=1,Ge=1,be=1;Y!==void 0&&se!==void 0&&(Ge=se/Y,be=Ne/re,De=Se.width/Y*se/Y,_e=Se.height/re*Ne/re),V===void 0&&(V=z,Q=U,z=0,U=0),Y!==void 0&&se===void 0&&(se=Y,Ne=re),Y===void 0&&se===void 0&&(se=Se.width,Ne=Se.height);for(var W,rt=this.ctx.transform.decompose(),ze=de(rt.rotate.shx),Ae=new u,Le=(Ae=(Ae=(Ae=Ae.multiply(rt.translate)).multiply(rt.skew)).multiply(rt.scale)).applyToRectangle(new c(V-z*Ge,Q-U*be,Y*De,re*_e)),Te=_.call(this,Le),Fe=[],We=0;We<Te.length;We+=1)Fe.indexOf(Te[We])===-1&&Fe.push(Te[We]);if(B(Fe),this.autoPaging)for(var Xe=Fe[0],it=Fe[Fe.length-1],ot=Xe;ot<it+1;ot++){this.pdf.setPage(ot);var ft=this.pdf.internal.pageSize.width-this.margin[3]-this.margin[1],Nt=ot===1?this.posY+this.margin[0]:this.margin[0],Je=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],ct=this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2],Me=ot===1?0:Je+(ot-2)*ct;if(this.ctx.clip_path.length!==0){var ur=this.path;W=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=I(W,this.posX+this.margin[3],-Me+Nt+this.ctx.prevPageLastElemOffset),Z.call(this,"fill",!0),this.path=ur}var gt=JSON.parse(JSON.stringify(Le));gt=I([gt],this.posX+this.margin[3],-Me+Nt+this.ctx.prevPageLastElemOffset)[0];var sa=(ot>Xe||ot<it)&&N.call(this);sa&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],ft,ct,null).clip().discardPath()),this.pdf.addImage(C,"JPEG",gt.x,gt.y,gt.w,gt.h,null,null,ze),sa&&this.pdf.restoreGraphicsState()}else this.pdf.addImage(C,"JPEG",Le.x,Le.y,Le.w,Le.h,null,null,ze)};var _=function(C,z,U){var Y=[];z=z||this.pdf.internal.pageSize.width,U=U||this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2];var re=this.posY+this.ctx.prevPageLastElemOffset;switch(C.type){default:case"mt":case"lt":Y.push(Math.floor((C.y+re)/U)+1);break;case"arc":Y.push(Math.floor((C.y+re-C.radius)/U)+1),Y.push(Math.floor((C.y+re+C.radius)/U)+1);break;case"qct":var V=fe(this.ctx.lastPoint.x,this.ctx.lastPoint.y,C.x1,C.y1,C.x,C.y);Y.push(Math.floor((V.y+re)/U)+1),Y.push(Math.floor((V.y+V.h+re)/U)+1);break;case"bct":var Q=ve(this.ctx.lastPoint.x,this.ctx.lastPoint.y,C.x1,C.y1,C.x2,C.y2,C.x,C.y);Y.push(Math.floor((Q.y+re)/U)+1),Y.push(Math.floor((Q.y+Q.h+re)/U)+1);break;case"rect":Y.push(Math.floor((C.y+re)/U)+1),Y.push(Math.floor((C.y+C.h+re)/U)+1)}for(var se=0;se<Y.length;se+=1)for(;this.pdf.internal.getNumberOfPages()<Y[se];)x.call(this);return Y},x=function(){var C=this.fillStyle,z=this.strokeStyle,U=this.font,Y=this.lineCap,re=this.lineWidth,V=this.lineJoin;this.pdf.addPage(),this.fillStyle=C,this.strokeStyle=z,this.font=U,this.lineCap=Y,this.lineWidth=re,this.lineJoin=V},I=function(C,z,U){for(var Y=0;Y<C.length;Y++)switch(C[Y].type){case"bct":C[Y].x2+=z,C[Y].y2+=U;case"qct":C[Y].x1+=z,C[Y].y1+=U;case"mt":case"lt":case"arc":default:C[Y].x+=z,C[Y].y+=U}return C},B=function(C){return C.sort(function(z,U){return z-U})},R=function(C,z){for(var U,Y,re=this.fillStyle,V=this.strokeStyle,Q=this.lineCap,se=this.lineWidth,Ne=Math.abs(se*this.ctx.transform.scaleX),Se=this.lineJoin,De=JSON.parse(JSON.stringify(this.path)),_e=JSON.parse(JSON.stringify(this.path)),Ge=[],be=0;be<_e.length;be++)if(_e[be].x!==void 0)for(var W=_.call(this,_e[be]),rt=0;rt<W.length;rt+=1)Ge.indexOf(W[rt])===-1&&Ge.push(W[rt]);for(var ze=0;ze<Ge.length;ze++)for(;this.pdf.internal.getNumberOfPages()<Ge[ze];)x.call(this);if(B(Ge),this.autoPaging)for(var Ae=Ge[0],Le=Ge[Ge.length-1],Te=Ae;Te<Le+1;Te++){this.pdf.setPage(Te),this.fillStyle=re,this.strokeStyle=V,this.lineCap=Q,this.lineWidth=Ne,this.lineJoin=Se;var Fe=this.pdf.internal.pageSize.width-this.margin[3]-this.margin[1],We=Te===1?this.posY+this.margin[0]:this.margin[0],Xe=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],it=this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2],ot=Te===1?0:Xe+(Te-2)*it;if(this.ctx.clip_path.length!==0){var ft=this.path;U=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=I(U,this.posX+this.margin[3],-ot+We+this.ctx.prevPageLastElemOffset),Z.call(this,C,!0),this.path=ft}if(Y=JSON.parse(JSON.stringify(De)),this.path=I(Y,this.posX+this.margin[3],-ot+We+this.ctx.prevPageLastElemOffset),z===!1||Te===0){var Nt=(Te>Ae||Te<Le)&&N.call(this);Nt&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],Fe,it,null).clip().discardPath()),Z.call(this,C,z),Nt&&this.pdf.restoreGraphicsState()}this.lineWidth=se}else this.lineWidth=Ne,Z.call(this,C,z),this.lineWidth=se;this.path=De},Z=function(C,z){if((C!=="stroke"||z||!k.call(this))&&(C==="stroke"||z||!m.call(this))){for(var U,Y,re=[],V=this.path,Q=0;Q<V.length;Q++){var se=V[Q];switch(se.type){case"begin":re.push({begin:!0});break;case"close":re.push({close:!0});break;case"mt":re.push({start:se,deltas:[],abs:[]});break;case"lt":var Ne=re.length;if(V[Q-1]&&!isNaN(V[Q-1].x)&&(U=[se.x-V[Q-1].x,se.y-V[Q-1].y],Ne>0)){for(;Ne>=0;Ne--)if(re[Ne-1].close!==!0&&re[Ne-1].begin!==!0){re[Ne-1].deltas.push(U),re[Ne-1].abs.push(se);break}}break;case"bct":U=[se.x1-V[Q-1].x,se.y1-V[Q-1].y,se.x2-V[Q-1].x,se.y2-V[Q-1].y,se.x-V[Q-1].x,se.y-V[Q-1].y],re[re.length-1].deltas.push(U);break;case"qct":var Se=V[Q-1].x+2/3*(se.x1-V[Q-1].x),De=V[Q-1].y+2/3*(se.y1-V[Q-1].y),_e=se.x+2/3*(se.x1-se.x),Ge=se.y+2/3*(se.y1-se.y),be=se.x,W=se.y;U=[Se-V[Q-1].x,De-V[Q-1].y,_e-V[Q-1].x,Ge-V[Q-1].y,be-V[Q-1].x,W-V[Q-1].y],re[re.length-1].deltas.push(U);break;case"arc":re.push({deltas:[],abs:[],arc:!0}),Array.isArray(re[re.length-1].abs)&&re[re.length-1].abs.push(se)}}Y=z?null:C==="stroke"?"stroke":"fill";for(var rt=!1,ze=0;ze<re.length;ze++)if(re[ze].arc)for(var Ae=re[ze].abs,Le=0;Le<Ae.length;Le++){var Te=Ae[Le];Te.type==="arc"?S.call(this,Te.x,Te.y,Te.radius,Te.startAngle,Te.endAngle,Te.counterclockwise,void 0,z,!rt):K.call(this,Te.x,Te.y),rt=!0}else if(re[ze].close===!0)this.pdf.internal.out("h"),rt=!1;else if(re[ze].begin!==!0){var Fe=re[ze].start.x,We=re[ze].start.y;H.call(this,re[ze].deltas,Fe,We),rt=!0}Y&&M.call(this,Y),z&&ne.call(this)}},ee=function(C){var z=this.pdf.internal.getFontSize()/this.pdf.internal.scaleFactor,U=z*(this.pdf.internal.getLineHeightFactor()-1);switch(this.ctx.textBaseline){case"bottom":return C-U;case"top":return C+z-U;case"hanging":return C+z-2*U;case"middle":return C+z/2-U;case"ideographic":return C;case"alphabetic":default:return C}},A=function(C){return C+this.pdf.internal.getFontSize()/this.pdf.internal.scaleFactor*(this.pdf.internal.getLineHeightFactor()-1)};b.prototype.createLinearGradient=function(){var C=function(){};return C.colorStops=[],C.addColorStop=function(z,U){this.colorStops.push([z,U])},C.getColor=function(){return this.colorStops.length===0?"#000000":this.colorStops[0][1]},C.isCanvasGradient=!0,C},b.prototype.createPattern=function(){return this.createLinearGradient()},b.prototype.createRadialGradient=function(){return this.createLinearGradient()};var S=function(C,z,U,Y,re,V,Q,se,Ne){for(var Se=ue.call(this,U,Y,re,V),De=0;De<Se.length;De++){var _e=Se[De];De===0&&(Ne?E.call(this,_e.x1+C,_e.y1+z):K.call(this,_e.x1+C,_e.y1+z)),ce.call(this,C,z,_e.x2,_e.y2,_e.x3,_e.y3,_e.x4,_e.y4)}se?ne.call(this):M.call(this,Q)},M=function(C){switch(C){case"stroke":this.pdf.internal.out("S");break;case"fill":this.pdf.internal.out("f")}},ne=function(){this.pdf.clip(),this.pdf.discardPath()},E=function(C,z){this.pdf.internal.out(r(C)+" "+a(z)+" m")},T=function(C){var z;switch(C.align){case"right":case"end":z="right";break;case"center":z="center";break;case"left":case"start":default:z="left"}var U=this.pdf.getTextDimensions(C.text),Y=ee.call(this,C.y),re=A.call(this,Y)-U.h,V=this.ctx.transform.applyToPoint(new l(C.x,Y)),Q=this.ctx.transform.decompose(),se=new u;se=(se=(se=se.multiply(Q.translate)).multiply(Q.skew)).multiply(Q.scale);for(var Ne,Se,De,_e=this.ctx.transform.applyToRectangle(new c(C.x,Y,U.w,U.h)),Ge=se.applyToRectangle(new c(C.x,re,U.w,U.h)),be=_.call(this,Ge),W=[],rt=0;rt<be.length;rt+=1)W.indexOf(be[rt])===-1&&W.push(be[rt]);if(B(W),this.autoPaging)for(var ze=W[0],Ae=W[W.length-1],Le=ze;Le<Ae+1;Le++){this.pdf.setPage(Le);var Te=Le===1?this.posY+this.margin[0]:this.margin[0],Fe=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],We=this.pdf.internal.pageSize.height-this.margin[2],Xe=We-this.margin[0],it=this.pdf.internal.pageSize.width-this.margin[1],ot=it-this.margin[3],ft=Le===1?0:Fe+(Le-2)*Xe;if(this.ctx.clip_path.length!==0){var Nt=this.path;Ne=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=I(Ne,this.posX+this.margin[3],-1*ft+Te),Z.call(this,"fill",!0),this.path=Nt}var Je=I([JSON.parse(JSON.stringify(Ge))],this.posX+this.margin[3],-ft+Te+this.ctx.prevPageLastElemOffset)[0];C.scale>=.01&&(Se=this.pdf.internal.getFontSize(),this.pdf.setFontSize(Se*C.scale),De=this.lineWidth,this.lineWidth=De*C.scale);var ct=this.autoPaging!=="text";if(ct||Je.y+Je.h<=We){if(ct||Je.y>=Te&&Je.x<=it){var Me=ct?C.text:this.pdf.splitTextToSize(C.text,C.maxWidth||it-Je.x)[0],ur=I([JSON.parse(JSON.stringify(_e))],this.posX+this.margin[3],-ft+Te+this.ctx.prevPageLastElemOffset)[0],gt=ct&&(Le>ze||Le<Ae)&&N.call(this);gt&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],ot,Xe,null).clip().discardPath()),this.pdf.text(Me,ur.x,ur.y,{angle:C.angle,align:z,renderingMode:C.renderingMode}),gt&&this.pdf.restoreGraphicsState()}}else Je.y<We&&(this.ctx.prevPageLastElemOffset+=We-Je.y);C.scale>=.01&&(this.pdf.setFontSize(Se),this.lineWidth=De)}else C.scale>=.01&&(Se=this.pdf.internal.getFontSize(),this.pdf.setFontSize(Se*C.scale),De=this.lineWidth,this.lineWidth=De*C.scale),this.pdf.text(C.text,V.x+this.posX,V.y+this.posY,{angle:C.angle,align:z,renderingMode:C.renderingMode,maxWidth:C.maxWidth}),C.scale>=.01&&(this.pdf.setFontSize(Se),this.lineWidth=De)},K=function(C,z,U,Y){U=U||0,Y=Y||0,this.pdf.internal.out(r(C+U)+" "+a(z+Y)+" l")},H=function(C,z,U){return this.pdf.lines(C,z,U,null,null)},ce=function(C,z,U,Y,re,V,Q,se){this.pdf.internal.out([e(i(U+C)),e(n(Y+z)),e(i(re+C)),e(n(V+z)),e(i(Q+C)),e(n(se+z)),"c"].join(" "))},ue=function(C,z,U,Y){for(var re=2*Math.PI,V=Math.PI/2;z>U;)z-=re;var Q=Math.abs(U-z);Q<re&&Y&&(Q=re-Q);for(var se=[],Ne=Y?-1:1,Se=z;Q>1e-5;){var De=Se+Ne*Math.min(Q,V);se.push(pe.call(this,C,Se,De)),Q-=Math.abs(De-Se),Se=De}return se},pe=function(C,z,U){var Y=(U-z)/2,re=C*Math.cos(Y),V=C*Math.sin(Y),Q=re,se=-V,Ne=Q*Q+se*se,Se=Ne+Q*re+se*V,De=4/3*(Math.sqrt(2*Ne*Se)-Se)/(Q*V-se*re),_e=Q-De*se,Ge=se+De*Q,be=_e,W=-Ge,rt=Y+z,ze=Math.cos(rt),Ae=Math.sin(rt);return{x1:C*Math.cos(z),y1:C*Math.sin(z),x2:_e*ze-Ge*Ae,y2:_e*Ae+Ge*ze,x3:be*ze-W*Ae,y3:be*Ae+W*ze,x4:C*Math.cos(U),y4:C*Math.sin(U)}},de=function(C){return 180*C/Math.PI},fe=function(C,z,U,Y,re,V){var Q=C+.5*(U-C),se=z+.5*(Y-z),Ne=re+.5*(U-re),Se=V+.5*(Y-V),De=Math.min(C,re,Q,Ne),_e=Math.max(C,re,Q,Ne),Ge=Math.min(z,V,se,Se),be=Math.max(z,V,se,Se);return new c(De,Ge,_e-De,be-Ge)},ve=function(C,z,U,Y,re,V,Q,se){var Ne,Se,De,_e,Ge,be,W,rt,ze,Ae,Le,Te,Fe,We,Xe=U-C,it=Y-z,ot=re-U,ft=V-Y,Nt=Q-re,Je=se-V;for(Se=0;Se<41;Se++)ze=(W=(De=C+(Ne=Se/40)*Xe)+Ne*((Ge=U+Ne*ot)-De))+Ne*(Ge+Ne*(re+Ne*Nt-Ge)-W),Ae=(rt=(_e=z+Ne*it)+Ne*((be=Y+Ne*ft)-_e))+Ne*(be+Ne*(V+Ne*Je-be)-rt),Se==0?(Le=ze,Te=Ae,Fe=ze,We=Ae):(Le=Math.min(Le,ze),Te=Math.min(Te,Ae),Fe=Math.max(Fe,ze),We=Math.max(We,Ae));return new c(Math.round(Le),Math.round(Te),Math.round(Fe-Le),Math.round(We-Te))},Ie=function(){if(this.prevLineDash||this.ctx.lineDash.length||this.ctx.lineDashOffset){var C,z,U=(C=this.ctx.lineDash,z=this.ctx.lineDashOffset,JSON.stringify({lineDash:C,lineDashOffset:z}));this.prevLineDash!==U&&(this.pdf.setLineDash(this.ctx.lineDash,this.ctx.lineDashOffset),this.prevLineDash=U)}}})(Ve.API),function(t){var e=function(n){var l,c,u,f,g,b,y,m,k,N;for(c=[],u=0,f=(n+=l="\0\0\0\0".slice(n.length%4||4)).length;f>u;u+=4)(g=(n.charCodeAt(u)<<24)+(n.charCodeAt(u+1)<<16)+(n.charCodeAt(u+2)<<8)+n.charCodeAt(u+3))!==0?(b=(g=((g=((g=((g=(g-(N=g%85))/85)-(k=g%85))/85)-(m=g%85))/85)-(y=g%85))/85)%85,c.push(b+33,y+33,m+33,k+33,N+33)):c.push(122);return function(_,x){for(var I=x;I>0;I--)_.pop()}(c,l.length),String.fromCharCode.apply(String,c)+"~>"},r=function(n){var l,c,u,f,g,b=String,y="length",m=255,k="charCodeAt",N="slice",_="replace";for(n[N](-2),n=n[N](0,-2)[_](/\s/g,"")[_]("z","!!!!!"),u=[],f=0,g=(n+=l="uuuuu"[N](n[y]%5||5))[y];g>f;f+=5)c=52200625*(n[k](f)-33)+614125*(n[k](f+1)-33)+7225*(n[k](f+2)-33)+85*(n[k](f+3)-33)+(n[k](f+4)-33),u.push(m&c>>24,m&c>>16,m&c>>8,m&c);return function(x,I){for(var B=I;B>0;B--)x.pop()}(u,l[y]),b.fromCharCode.apply(b,u)},a=function(n){var l=new RegExp(/^([0-9A-Fa-f]{2})+$/);if((n=n.replace(/\s/g,"")).indexOf(">")!==-1&&(n=n.substr(0,n.indexOf(">"))),n.length%2&&(n+="0"),l.test(n)===!1)return"";for(var c="",u=0;u<n.length;u+=2)c+=String.fromCharCode("0x"+(n[u]+n[u+1]));return c},i=function(n){for(var l=new Uint8Array(n.length),c=n.length;c--;)l[c]=n.charCodeAt(c);return n=(l=zd(l)).reduce(function(u,f){return u+String.fromCharCode(f)},"")};t.processDataByFilters=function(n,l){var c=0,u=n||"",f=[];for(typeof(l=l||[])=="string"&&(l=[l]),c=0;c<l.length;c+=1)switch(l[c]){case"ASCII85Decode":case"/ASCII85Decode":u=r(u),f.push("/ASCII85Encode");break;case"ASCII85Encode":case"/ASCII85Encode":u=e(u),f.push("/ASCII85Decode");break;case"ASCIIHexDecode":case"/ASCIIHexDecode":u=a(u),f.push("/ASCIIHexEncode");break;case"ASCIIHexEncode":case"/ASCIIHexEncode":u=u.split("").map(function(g){return("0"+g.charCodeAt().toString(16)).slice(-2)}).join("")+">",f.push("/ASCIIHexDecode");break;case"FlateEncode":case"/FlateEncode":u=i(u),f.push("/FlateDecode");break;default:throw new Error('The filter: "'+l[c]+'" is not implemented')}return{data:u,reverseChain:f.reverse().join(" ")}}}(Ve.API),function(t){t.loadFile=function(e,r,a){return function(i,n,l){n=n!==!1,l=typeof l=="function"?l:function(){};var c=void 0;try{c=function(u,f,g){var b=new XMLHttpRequest,y=0,m=function(k){var N=k.length,_=[],x=String.fromCharCode;for(y=0;y<N;y+=1)_.push(x(255&k.charCodeAt(y)));return _.join("")};if(b.open("GET",u,!f),b.overrideMimeType("text/plain; charset=x-user-defined"),f===!1&&(b.onload=function(){b.status===200?g(m(this.responseText)):g(void 0)}),b.send(null),f&&b.status===200)return m(b.responseText)}(i,n,l)}catch{}return c}(e,r,a)},t.loadImageFile=t.loadFile}(Ve.API),function(t){function e(){return(Ye.html2canvas?Promise.resolve(Ye.html2canvas):Td(()=>import("./html2canvas.esm-CBrSDip1.js"),[])).catch(function(l){return Promise.reject(new Error("Could not load html2canvas: "+l))}).then(function(l){return l.default?l.default:l})}function r(){return(Ye.DOMPurify?Promise.resolve(Ye.DOMPurify):Td(()=>import("./purify.es-BwoZCkIS.js"),[])).catch(function(l){return Promise.reject(new Error("Could not load dompurify: "+l))}).then(function(l){return l.default?l.default:l})}var a=function(l){var c=kt(l);return c==="undefined"?"undefined":c==="string"||l instanceof String?"string":c==="number"||l instanceof Number?"number":c==="function"||l instanceof Function?"function":l&&l.constructor===Array?"array":l&&l.nodeType===1?"element":c==="object"?"object":"unknown"},i=function(l,c){var u=document.createElement(l);for(var f in c.className&&(u.className=c.className),c.innerHTML&&c.dompurify&&(u.innerHTML=c.dompurify.sanitize(c.innerHTML)),c.style)u.style[f]=c.style[f];return u},n=function l(c){var u=Object.assign(l.convert(Promise.resolve()),JSON.parse(JSON.stringify(l.template))),f=l.convert(Promise.resolve(),u);return f=(f=f.setProgress(1,l,1,[l])).set(c)};(n.prototype=Object.create(Promise.prototype)).constructor=n,n.convert=function(l,c){return l.__proto__=c||n.prototype,l},n.template={prop:{src:null,container:null,overlay:null,canvas:null,img:null,pdf:null,pageSize:null,callback:function(){}},progress:{val:0,state:null,n:0,stack:[]},opt:{filename:"file.pdf",margin:[0,0,0,0],enableLinks:!0,x:0,y:0,html2canvas:{},jsPDF:{},backgroundColor:"transparent"}},n.prototype.from=function(l,c){return this.then(function(){switch(c=c||function(u){switch(a(u)){case"string":return"string";case"element":return u.nodeName.toLowerCase()==="canvas"?"canvas":"element";default:return"unknown"}}(l)){case"string":return this.then(r).then(function(u){return this.set({src:i("div",{innerHTML:l,dompurify:u})})});case"element":return this.set({src:l});case"canvas":return this.set({canvas:l});case"img":return this.set({img:l});default:return this.error("Unknown source type.")}})},n.prototype.to=function(l){switch(l){case"container":return this.toContainer();case"canvas":return this.toCanvas();case"img":return this.toImg();case"pdf":return this.toPdf();default:return this.error("Invalid target.")}},n.prototype.toContainer=function(){return this.thenList([function(){return this.prop.src||this.error("Cannot duplicate - no source HTML.")},function(){return this.prop.pageSize||this.setPageSize()}]).then(function(){var l={position:"relative",display:"inline-block",width:(typeof this.opt.width!="number"||isNaN(this.opt.width)||typeof this.opt.windowWidth!="number"||isNaN(this.opt.windowWidth)?Math.max(this.prop.src.clientWidth,this.prop.src.scrollWidth,this.prop.src.offsetWidth):this.opt.windowWidth)+"px",left:0,right:0,top:0,margin:"auto",backgroundColor:this.opt.backgroundColor},c=function u(f,g){for(var b=f.nodeType===3?document.createTextNode(f.nodeValue):f.cloneNode(!1),y=f.firstChild;y;y=y.nextSibling)g!==!0&&y.nodeType===1&&y.nodeName==="SCRIPT"||b.appendChild(u(y,g));return f.nodeType===1&&(f.nodeName==="CANVAS"?(b.width=f.width,b.height=f.height,b.getContext("2d").drawImage(f,0,0)):f.nodeName!=="TEXTAREA"&&f.nodeName!=="SELECT"||(b.value=f.value),b.addEventListener("load",function(){b.scrollTop=f.scrollTop,b.scrollLeft=f.scrollLeft},!0)),b}(this.prop.src,this.opt.html2canvas.javascriptEnabled);c.tagName==="BODY"&&(l.height=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)+"px"),this.prop.overlay=i("div",{className:"html2pdf__overlay",style:{position:"fixed",overflow:"hidden",zIndex:1e3,left:"-100000px",right:0,bottom:0,top:0}}),this.prop.container=i("div",{className:"html2pdf__container",style:l}),this.prop.container.appendChild(c),this.prop.container.firstChild.appendChild(i("div",{style:{clear:"both",border:"0 none transparent",margin:0,padding:0,height:0}})),this.prop.container.style.float="none",this.prop.overlay.appendChild(this.prop.container),document.body.appendChild(this.prop.overlay),this.prop.container.firstChild.style.position="relative",this.prop.container.height=Math.max(this.prop.container.firstChild.clientHeight,this.prop.container.firstChild.scrollHeight,this.prop.container.firstChild.offsetHeight)+"px"})},n.prototype.toCanvas=function(){var l=[function(){return document.body.contains(this.prop.container)||this.toContainer()}];return this.thenList(l).then(e).then(function(c){var u=Object.assign({},this.opt.html2canvas);return delete u.onrendered,c(this.prop.container,u)}).then(function(c){(this.opt.html2canvas.onrendered||function(){})(c),this.prop.canvas=c,document.body.removeChild(this.prop.overlay)})},n.prototype.toContext2d=function(){var l=[function(){return document.body.contains(this.prop.container)||this.toContainer()}];return this.thenList(l).then(e).then(function(c){var u=this.opt.jsPDF,f=this.opt.fontFaces,g=typeof this.opt.width!="number"||isNaN(this.opt.width)||typeof this.opt.windowWidth!="number"||isNaN(this.opt.windowWidth)?1:this.opt.width/this.opt.windowWidth,b=Object.assign({async:!0,allowTaint:!0,scale:g,scrollX:this.opt.scrollX||0,scrollY:this.opt.scrollY||0,backgroundColor:"#ffffff",imageTimeout:15e3,logging:!0,proxy:null,removeContainer:!0,foreignObjectRendering:!1,useCORS:!1},this.opt.html2canvas);if(delete b.onrendered,u.context2d.autoPaging=this.opt.autoPaging===void 0||this.opt.autoPaging,u.context2d.posX=this.opt.x,u.context2d.posY=this.opt.y,u.context2d.margin=this.opt.margin,u.context2d.fontFaces=f,f)for(var y=0;y<f.length;++y){var m=f[y],k=m.src.find(function(N){return N.format==="truetype"});k&&u.addFont(k.url,m.ref.name,m.ref.style)}return b.windowHeight=b.windowHeight||0,b.windowHeight=b.windowHeight==0?Math.max(this.prop.container.clientHeight,this.prop.container.scrollHeight,this.prop.container.offsetHeight):b.windowHeight,u.context2d.save(!0),c(this.prop.container,b)}).then(function(c){this.opt.jsPDF.context2d.restore(!0),(this.opt.html2canvas.onrendered||function(){})(c),this.prop.canvas=c,document.body.removeChild(this.prop.overlay)})},n.prototype.toImg=function(){return this.thenList([function(){return this.prop.canvas||this.toCanvas()}]).then(function(){var l=this.prop.canvas.toDataURL("image/"+this.opt.image.type,this.opt.image.quality);this.prop.img=document.createElement("img"),this.prop.img.src=l})},n.prototype.toPdf=function(){return this.thenList([function(){return this.toContext2d()}]).then(function(){this.prop.pdf=this.prop.pdf||this.opt.jsPDF})},n.prototype.output=function(l,c,u){return(u=u||"pdf").toLowerCase()==="img"||u.toLowerCase()==="image"?this.outputImg(l,c):this.outputPdf(l,c)},n.prototype.outputPdf=function(l,c){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).then(function(){return this.prop.pdf.output(l,c)})},n.prototype.outputImg=function(l){return this.thenList([function(){return this.prop.img||this.toImg()}]).then(function(){switch(l){case void 0:case"img":return this.prop.img;case"datauristring":case"dataurlstring":return this.prop.img.src;case"datauri":case"dataurl":return document.location.href=this.prop.img.src;default:throw'Image output type "'+l+'" is not supported.'}})},n.prototype.save=function(l){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).set(l?{filename:l}:null).then(function(){this.prop.pdf.save(this.opt.filename)})},n.prototype.doCallback=function(){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).then(function(){this.prop.callback(this.prop.pdf)})},n.prototype.set=function(l){if(a(l)!=="object")return this;var c=Object.keys(l||{}).map(function(u){if(u in n.template.prop)return function(){this.prop[u]=l[u]};switch(u){case"margin":return this.setMargin.bind(this,l.margin);case"jsPDF":return function(){return this.opt.jsPDF=l.jsPDF,this.setPageSize()};case"pageSize":return this.setPageSize.bind(this,l.pageSize);default:return function(){this.opt[u]=l[u]}}},this);return this.then(function(){return this.thenList(c)})},n.prototype.get=function(l,c){return this.then(function(){var u=l in n.template.prop?this.prop[l]:this.opt[l];return c?c(u):u})},n.prototype.setMargin=function(l){return this.then(function(){switch(a(l)){case"number":l=[l,l,l,l];case"array":if(l.length===2&&(l=[l[0],l[1],l[0],l[1]]),l.length===4)break;default:return this.error("Invalid margin array.")}this.opt.margin=l}).then(this.setPageSize)},n.prototype.setPageSize=function(l){function c(u,f){return Math.floor(u*f/72*96)}return this.then(function(){(l=l||Ve.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner")||(l.inner={width:l.width-this.opt.margin[1]-this.opt.margin[3],height:l.height-this.opt.margin[0]-this.opt.margin[2]},l.inner.px={width:c(l.inner.width,l.k),height:c(l.inner.height,l.k)},l.inner.ratio=l.inner.height/l.inner.width),this.prop.pageSize=l})},n.prototype.setProgress=function(l,c,u,f){return l!=null&&(this.progress.val=l),c!=null&&(this.progress.state=c),u!=null&&(this.progress.n=u),f!=null&&(this.progress.stack=f),this.progress.ratio=this.progress.val/this.progress.state,this},n.prototype.updateProgress=function(l,c,u,f){return this.setProgress(l?this.progress.val+l:null,c||null,u?this.progress.n+u:null,f?this.progress.stack.concat(f):null)},n.prototype.then=function(l,c){var u=this;return this.thenCore(l,c,function(f,g){return u.updateProgress(null,null,1,[f]),Promise.prototype.then.call(this,function(b){return u.updateProgress(null,f),b}).then(f,g).then(function(b){return u.updateProgress(1),b})})},n.prototype.thenCore=function(l,c,u){u=u||Promise.prototype.then,l&&(l=l.bind(this)),c&&(c=c.bind(this));var f=Promise.toString().indexOf("[native code]")!==-1&&Promise.name==="Promise"?this:n.convert(Object.assign({},this),Promise.prototype),g=u.call(f,l,c);return n.convert(g,this.__proto__)},n.prototype.thenExternal=function(l,c){return Promise.prototype.then.call(this,l,c)},n.prototype.thenList=function(l){var c=this;return l.forEach(function(u){c=c.thenCore(u)}),c},n.prototype.catch=function(l){l&&(l=l.bind(this));var c=Promise.prototype.catch.call(this,l);return n.convert(c,this)},n.prototype.catchExternal=function(l){return Promise.prototype.catch.call(this,l)},n.prototype.error=function(l){return this.then(function(){throw new Error(l)})},n.prototype.using=n.prototype.set,n.prototype.saveAs=n.prototype.save,n.prototype.export=n.prototype.output,n.prototype.run=n.prototype.then,Ve.getPageSize=function(l,c,u){if(kt(l)==="object"){var f=l;l=f.orientation,c=f.unit||c,u=f.format||u}c=c||"mm",u=u||"a4",l=(""+(l||"P")).toLowerCase();var g,b=(""+u).toLowerCase(),y={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]};switch(c){case"pt":g=1;break;case"mm":g=72/25.4;break;case"cm":g=72/2.54;break;case"in":g=72;break;case"px":g=.75;break;case"pc":case"em":g=12;break;case"ex":g=6;break;default:throw"Invalid unit: "+c}var m,k=0,N=0;if(y.hasOwnProperty(b))k=y[b][1]/g,N=y[b][0]/g;else try{k=u[1],N=u[0]}catch{throw new Error("Invalid format: "+u)}if(l==="p"||l==="portrait")l="p",N>k&&(m=N,N=k,k=m);else{if(l!=="l"&&l!=="landscape")throw"Invalid orientation: "+l;l="l",k>N&&(m=N,N=k,k=m)}return{width:N,height:k,unit:c,k:g,orientation:l}},t.html=function(l,c){(c=c||{}).callback=c.callback||function(){},c.html2canvas=c.html2canvas||{},c.html2canvas.canvas=c.html2canvas.canvas||this.canvas,c.jsPDF=c.jsPDF||this,c.fontFaces=c.fontFaces?c.fontFaces.map(Vd):null;var u=new n(c);return c.worker?u:u.from(l).doCallback()}}(Ve.API),Ve.API.addJS=function(t){return zh=t,this.internal.events.subscribe("postPutResources",function(){_l=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/Names [(EmbeddedJS) "+(_l+1)+" 0 R]"),this.internal.out(">>"),this.internal.out("endobj"),Rh=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/S /JavaScript"),this.internal.out("/JS ("+zh+")"),this.internal.out(">>"),this.internal.out("endobj")}),this.internal.events.subscribe("putCatalog",function(){_l!==void 0&&Rh!==void 0&&this.internal.out("/Names <</JavaScript "+_l+" 0 R>>")}),this},function(t){var e;t.events.push(["postPutResources",function(){var r=this,a=/^(\d+) 0 obj$/;if(this.outline.root.children.length>0)for(var i=r.outline.render().split(/\r\n/),n=0;n<i.length;n++){var l=i[n],c=a.exec(l);if(c!=null){var u=c[1];r.internal.newObjectDeferredBegin(u,!1)}r.internal.write(l)}if(this.outline.createNamedDestinations){var f=this.internal.pages.length,g=[];for(n=0;n<f;n++){var b=r.internal.newObject();g.push(b);var y=r.internal.getPageInfo(n+1);r.internal.write("<< /D["+y.objId+" 0 R /XYZ null null null]>> endobj")}var m=r.internal.newObject();for(r.internal.write("<< /Names [ "),n=0;n<g.length;n++)r.internal.write("(page_"+(n+1)+")"+g[n]+" 0 R");r.internal.write(" ] >>","endobj"),e=r.internal.newObject(),r.internal.write("<< /Dests "+m+" 0 R"),r.internal.write(">>","endobj")}}]),t.events.push(["putCatalog",function(){this.outline.root.children.length>0&&(this.internal.write("/Outlines",this.outline.makeRef(this.outline.root)),this.outline.createNamedDestinations&&this.internal.write("/Names "+e+" 0 R"))}]),t.events.push(["initialized",function(){var r=this;r.outline={createNamedDestinations:!1,root:{children:[]}},r.outline.add=function(a,i,n){var l={title:i,options:n,children:[]};return a==null&&(a=this.root),a.children.push(l),l},r.outline.render=function(){return this.ctx={},this.ctx.val="",this.ctx.pdf=r,this.genIds_r(this.root),this.renderRoot(this.root),this.renderItems(this.root),this.ctx.val},r.outline.genIds_r=function(a){a.id=r.internal.newObjectDeferred();for(var i=0;i<a.children.length;i++)this.genIds_r(a.children[i])},r.outline.renderRoot=function(a){this.objStart(a),this.line("/Type /Outlines"),a.children.length>0&&(this.line("/First "+this.makeRef(a.children[0])),this.line("/Last "+this.makeRef(a.children[a.children.length-1]))),this.line("/Count "+this.count_r({count:0},a)),this.objEnd()},r.outline.renderItems=function(a){for(var i=this.ctx.pdf.internal.getVerticalCoordinateString,n=0;n<a.children.length;n++){var l=a.children[n];this.objStart(l),this.line("/Title "+this.makeString(l.title)),this.line("/Parent "+this.makeRef(a)),n>0&&this.line("/Prev "+this.makeRef(a.children[n-1])),n<a.children.length-1&&this.line("/Next "+this.makeRef(a.children[n+1])),l.children.length>0&&(this.line("/First "+this.makeRef(l.children[0])),this.line("/Last "+this.makeRef(l.children[l.children.length-1])));var c=this.count=this.count_r({count:0},l);if(c>0&&this.line("/Count "+c),l.options&&l.options.pageNumber){var u=r.internal.getPageInfo(l.options.pageNumber);this.line("/Dest ["+u.objId+" 0 R /XYZ 0 "+i(0)+" 0]")}this.objEnd()}for(var f=0;f<a.children.length;f++)this.renderItems(a.children[f])},r.outline.line=function(a){this.ctx.val+=a+`\r
`},r.outline.makeRef=function(a){return a.id+" 0 R"},r.outline.makeString=function(a){return"("+r.internal.pdfEscape(a)+")"},r.outline.objStart=function(a){this.ctx.val+=`\r
`+a.id+` 0 obj\r
<<\r
`},r.outline.objEnd=function(){this.ctx.val+=`>> \r
endobj\r
`},r.outline.count_r=function(a,i){for(var n=0;n<i.children.length;n++)a.count++,this.count_r(a,i.children[n]);return a.count}}])}(Ve.API),function(t){var e=[192,193,194,195,196,197,198,199];t.processJPEG=function(r,a,i,n,l,c){var u,f=this.decode.DCT_DECODE,g=null;if(typeof r=="string"||this.__addimage__.isArrayBuffer(r)||this.__addimage__.isArrayBufferView(r)){switch(r=l||r,r=this.__addimage__.isArrayBuffer(r)?new Uint8Array(r):r,(u=function(b){for(var y,m=256*b.charCodeAt(4)+b.charCodeAt(5),k=b.length,N={width:0,height:0,numcomponents:1},_=4;_<k;_+=2){if(_+=m,e.indexOf(b.charCodeAt(_+1))!==-1){y=256*b.charCodeAt(_+5)+b.charCodeAt(_+6),N={width:256*b.charCodeAt(_+7)+b.charCodeAt(_+8),height:y,numcomponents:b.charCodeAt(_+9)};break}m=256*b.charCodeAt(_+2)+b.charCodeAt(_+3)}return N}(r=this.__addimage__.isArrayBufferView(r)?this.__addimage__.arrayBufferToBinaryString(r):r)).numcomponents){case 1:c=this.color_spaces.DEVICE_GRAY;break;case 4:c=this.color_spaces.DEVICE_CMYK;break;case 3:c=this.color_spaces.DEVICE_RGB}g={data:r,width:u.width,height:u.height,colorSpace:c,bitsPerComponent:8,filter:f,index:a,alias:i}}return g}}(Ve.API);var is,Cl,qh,Uh,Wh,cg=function(){var t,e,r;function a(n){var l,c,u,f,g,b,y,m,k,N,_,x,I,B;for(this.data=n,this.pos=8,this.palette=[],this.imgData=[],this.transparency={},this.animation=null,this.text={},b=null;;){switch(l=this.readUInt32(),k=(function(){var R,Z;for(Z=[],R=0;R<4;++R)Z.push(String.fromCharCode(this.data[this.pos++]));return Z}).call(this).join("")){case"IHDR":this.width=this.readUInt32(),this.height=this.readUInt32(),this.bits=this.data[this.pos++],this.colorType=this.data[this.pos++],this.compressionMethod=this.data[this.pos++],this.filterMethod=this.data[this.pos++],this.interlaceMethod=this.data[this.pos++];break;case"acTL":this.animation={numFrames:this.readUInt32(),numPlays:this.readUInt32()||1/0,frames:[]};break;case"PLTE":this.palette=this.read(l);break;case"fcTL":b&&this.animation.frames.push(b),this.pos+=4,b={width:this.readUInt32(),height:this.readUInt32(),xOffset:this.readUInt32(),yOffset:this.readUInt32()},g=this.readUInt16(),f=this.readUInt16()||100,b.delay=1e3*g/f,b.disposeOp=this.data[this.pos++],b.blendOp=this.data[this.pos++],b.data=[];break;case"IDAT":case"fdAT":for(k==="fdAT"&&(this.pos+=4,l-=4),n=(b!=null?b.data:void 0)||this.imgData,x=0;0<=l?x<l:x>l;0<=l?++x:--x)n.push(this.data[this.pos++]);break;case"tRNS":switch(this.transparency={},this.colorType){case 3:if(u=this.palette.length/3,this.transparency.indexed=this.read(l),this.transparency.indexed.length>u)throw new Error("More transparent colors than palette size");if((N=u-this.transparency.indexed.length)>0)for(I=0;0<=N?I<N:I>N;0<=N?++I:--I)this.transparency.indexed.push(255);break;case 0:this.transparency.grayscale=this.read(l)[0];break;case 2:this.transparency.rgb=this.read(l)}break;case"tEXt":y=(_=this.read(l)).indexOf(0),m=String.fromCharCode.apply(String,_.slice(0,y)),this.text[m]=String.fromCharCode.apply(String,_.slice(y+1));break;case"IEND":return b&&this.animation.frames.push(b),this.colors=(function(){switch(this.colorType){case 0:case 3:case 4:return 1;case 2:case 6:return 3}}).call(this),this.hasAlphaChannel=(B=this.colorType)===4||B===6,c=this.colors+(this.hasAlphaChannel?1:0),this.pixelBitlength=this.bits*c,this.colorSpace=(function(){switch(this.colors){case 1:return"DeviceGray";case 3:return"DeviceRGB"}}).call(this),void(this.imgData=new Uint8Array(this.imgData));default:this.pos+=l}if(this.pos+=4,this.pos>this.data.length)throw new Error("Incomplete or corrupt PNG file")}}a.prototype.read=function(n){var l,c;for(c=[],l=0;0<=n?l<n:l>n;0<=n?++l:--l)c.push(this.data[this.pos++]);return c},a.prototype.readUInt32=function(){return this.data[this.pos++]<<24|this.data[this.pos++]<<16|this.data[this.pos++]<<8|this.data[this.pos++]},a.prototype.readUInt16=function(){return this.data[this.pos++]<<8|this.data[this.pos++]},a.prototype.decodePixels=function(n){var l=this.pixelBitlength/8,c=new Uint8Array(this.width*this.height*l),u=0,f=this;if(n==null&&(n=this.imgData),n.length===0)return new Uint8Array(0);function g(b,y,m,k){var N,_,x,I,B,R,Z,ee,A,S,M,ne,E,T,K,H,ce,ue,pe,de,fe,ve=Math.ceil((f.width-b)/m),Ie=Math.ceil((f.height-y)/k),C=f.width==ve&&f.height==Ie;for(T=l*ve,ne=C?c:new Uint8Array(T*Ie),R=n.length,E=0,_=0;E<Ie&&u<R;){switch(n[u++]){case 0:for(I=ce=0;ce<T;I=ce+=1)ne[_++]=n[u++];break;case 1:for(I=ue=0;ue<T;I=ue+=1)N=n[u++],B=I<l?0:ne[_-l],ne[_++]=(N+B)%256;break;case 2:for(I=pe=0;pe<T;I=pe+=1)N=n[u++],x=(I-I%l)/l,K=E&&ne[(E-1)*T+x*l+I%l],ne[_++]=(K+N)%256;break;case 3:for(I=de=0;de<T;I=de+=1)N=n[u++],x=(I-I%l)/l,B=I<l?0:ne[_-l],K=E&&ne[(E-1)*T+x*l+I%l],ne[_++]=(N+Math.floor((B+K)/2))%256;break;case 4:for(I=fe=0;fe<T;I=fe+=1)N=n[u++],x=(I-I%l)/l,B=I<l?0:ne[_-l],E===0?K=H=0:(K=ne[(E-1)*T+x*l+I%l],H=x&&ne[(E-1)*T+(x-1)*l+I%l]),Z=B+K-H,ee=Math.abs(Z-B),S=Math.abs(Z-K),M=Math.abs(Z-H),A=ee<=S&&ee<=M?B:S<=M?K:H,ne[_++]=(N+A)%256;break;default:throw new Error("Invalid filter algorithm: "+n[u-1])}if(!C){var z=((y+E*k)*f.width+b)*l,U=E*T;for(I=0;I<ve;I+=1){for(var Y=0;Y<l;Y+=1)c[z++]=ne[U++];z+=(m-1)*l}}E++}}return n=qm(n),f.interlaceMethod==1?(g(0,0,8,8),g(4,0,8,8),g(0,4,4,8),g(2,0,4,4),g(0,2,2,4),g(1,0,2,2),g(0,1,1,2)):g(0,0,1,1),c},a.prototype.decodePalette=function(){var n,l,c,u,f,g,b,y,m;for(c=this.palette,g=this.transparency.indexed||[],f=new Uint8Array((g.length||0)+c.length),u=0,n=0,l=b=0,y=c.length;b<y;l=b+=3)f[u++]=c[l],f[u++]=c[l+1],f[u++]=c[l+2],f[u++]=(m=g[n++])!=null?m:255;return f},a.prototype.copyToImageData=function(n,l){var c,u,f,g,b,y,m,k,N,_,x;if(u=this.colors,N=null,c=this.hasAlphaChannel,this.palette.length&&(N=(x=this._decodedPalette)!=null?x:this._decodedPalette=this.decodePalette(),u=4,c=!0),k=(f=n.data||n).length,b=N||l,g=y=0,u===1)for(;g<k;)m=N?4*l[g/4]:y,_=b[m++],f[g++]=_,f[g++]=_,f[g++]=_,f[g++]=c?b[m++]:255,y=m;else for(;g<k;)m=N?4*l[g/4]:y,f[g++]=b[m++],f[g++]=b[m++],f[g++]=b[m++],f[g++]=c?b[m++]:255,y=m},a.prototype.decode=function(){var n;return n=new Uint8Array(this.width*this.height*4),this.copyToImageData(n,this.decodePixels()),n};var i=function(){if(Object.prototype.toString.call(Ye)==="[object Window]"){try{e=Ye.document.createElement("canvas"),r=e.getContext("2d")}catch{return!1}return!0}return!1};return i(),t=function(n){var l;if(i()===!0)return r.width=n.width,r.height=n.height,r.clearRect(0,0,n.width,n.height),r.putImageData(n,0,0),(l=new Image).src=e.toDataURL(),l;throw new Error("This method requires a Browser with Canvas-capability.")},a.prototype.decodeFrames=function(n){var l,c,u,f,g,b,y,m;if(this.animation){for(m=[],c=g=0,b=(y=this.animation.frames).length;g<b;c=++g)l=y[c],u=n.createImageData(l.width,l.height),f=this.decodePixels(new Uint8Array(l.data)),this.copyToImageData(u,f),l.imageData=u,m.push(l.image=t(u));return m}},a.prototype.renderFrame=function(n,l){var c,u,f;return c=(u=this.animation.frames)[l],f=u[l-1],l===0&&n.clearRect(0,0,this.width,this.height),(f!=null?f.disposeOp:void 0)===1?n.clearRect(f.xOffset,f.yOffset,f.width,f.height):(f!=null?f.disposeOp:void 0)===2&&n.putImageData(f.imageData,f.xOffset,f.yOffset),c.blendOp===0&&n.clearRect(c.xOffset,c.yOffset,c.width,c.height),n.drawImage(c.image,c.xOffset,c.yOffset)},a.prototype.animate=function(n){var l,c,u,f,g,b,y=this;return c=0,b=this.animation,f=b.numFrames,u=b.frames,g=b.numPlays,(l=function(){var m,k;if(m=c++%f,k=u[m],y.renderFrame(n,m),f>1&&c/f<g)return y.animation._timeout=setTimeout(l,k.delay)})()},a.prototype.stopAnimation=function(){var n;return clearTimeout((n=this.animation)!=null?n._timeout:void 0)},a.prototype.render=function(n){var l,c;return n._png&&n._png.stopAnimation(),n._png=this,n.width=this.width,n.height=this.height,l=n.getContext("2d"),this.animation?(this.decodeFrames(l),this.animate(l)):(c=l.createImageData(this.width,this.height),this.copyToImageData(c,this.decodePixels()),l.putImageData(c,0,0))},a}();/**
 * @license
 *
 * Copyright (c) 2014 James Robb, https://github.com/jamesbrobb
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 *//**
 * @license
 * (c) Dean McNamee <dean@gmail.com>, 2013.
 *
 * https://github.com/deanm/omggif
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 *
 * omggif is a JavaScript implementation of a GIF 89a encoder and decoder,
 * including animation and compression.  It does not rely on any specific
 * underlying system, so should run in the browser, Node, or Plask.
 */function dg(t){var e=0;if(t[e++]!==71||t[e++]!==73||t[e++]!==70||t[e++]!==56||(t[e++]+1&253)!=56||t[e++]!==97)throw new Error("Invalid GIF 87a/89a header.");var r=t[e++]|t[e++]<<8,a=t[e++]|t[e++]<<8,i=t[e++],n=i>>7,l=1<<(7&i)+1;t[e++],t[e++];var c=null,u=null;n&&(c=e,u=l,e+=3*l);var f=!0,g=[],b=0,y=null,m=0,k=null;for(this.width=r,this.height=a;f&&e<t.length;)switch(t[e++]){case 33:switch(t[e++]){case 255:if(t[e]!==11||t[e+1]==78&&t[e+2]==69&&t[e+3]==84&&t[e+4]==83&&t[e+5]==67&&t[e+6]==65&&t[e+7]==80&&t[e+8]==69&&t[e+9]==50&&t[e+10]==46&&t[e+11]==48&&t[e+12]==3&&t[e+13]==1&&t[e+16]==0)e+=14,k=t[e++]|t[e++]<<8,e++;else for(e+=12;;){if(!((E=t[e++])>=0))throw Error("Invalid block size");if(E===0)break;e+=E}break;case 249:if(t[e++]!==4||t[e+4]!==0)throw new Error("Invalid graphics extension block.");var N=t[e++];b=t[e++]|t[e++]<<8,y=t[e++],!(1&N)&&(y=null),m=N>>2&7,e++;break;case 254:for(;;){if(!((E=t[e++])>=0))throw Error("Invalid block size");if(E===0)break;e+=E}break;default:throw new Error("Unknown graphic control label: 0x"+t[e-1].toString(16))}break;case 44:var _=t[e++]|t[e++]<<8,x=t[e++]|t[e++]<<8,I=t[e++]|t[e++]<<8,B=t[e++]|t[e++]<<8,R=t[e++],Z=R>>6&1,ee=1<<(7&R)+1,A=c,S=u,M=!1;R>>7&&(M=!0,A=e,S=ee,e+=3*ee);var ne=e;for(e++;;){var E;if(!((E=t[e++])>=0))throw Error("Invalid block size");if(E===0)break;e+=E}g.push({x:_,y:x,width:I,height:B,has_local_palette:M,palette_offset:A,palette_size:S,data_offset:ne,data_length:e-ne,transparent_index:y,interlaced:!!Z,delay:b,disposal:m});break;case 59:f=!1;break;default:throw new Error("Unknown gif block: 0x"+t[e-1].toString(16))}this.numFrames=function(){return g.length},this.loopCount=function(){return k},this.frameInfo=function(T){if(T<0||T>=g.length)throw new Error("Frame index out of range.");return g[T]},this.decodeAndBlitFrameBGRA=function(T,K){var H=this.frameInfo(T),ce=H.width*H.height,ue=new Uint8Array(ce);Hh(t,H.data_offset,ue,ce);var pe=H.palette_offset,de=H.transparent_index;de===null&&(de=256);var fe=H.width,ve=r-fe,Ie=fe,C=4*(H.y*r+H.x),z=4*((H.y+H.height)*r+H.x),U=C,Y=4*ve;H.interlaced===!0&&(Y+=4*r*7);for(var re=8,V=0,Q=ue.length;V<Q;++V){var se=ue[V];if(Ie===0&&(Ie=fe,(U+=Y)>=z&&(Y=4*ve+4*r*(re-1),U=C+(fe+ve)*(re<<1),re>>=1)),se===de)U+=4;else{var Ne=t[pe+3*se],Se=t[pe+3*se+1],De=t[pe+3*se+2];K[U++]=De,K[U++]=Se,K[U++]=Ne,K[U++]=255}--Ie}},this.decodeAndBlitFrameRGBA=function(T,K){var H=this.frameInfo(T),ce=H.width*H.height,ue=new Uint8Array(ce);Hh(t,H.data_offset,ue,ce);var pe=H.palette_offset,de=H.transparent_index;de===null&&(de=256);var fe=H.width,ve=r-fe,Ie=fe,C=4*(H.y*r+H.x),z=4*((H.y+H.height)*r+H.x),U=C,Y=4*ve;H.interlaced===!0&&(Y+=4*r*7);for(var re=8,V=0,Q=ue.length;V<Q;++V){var se=ue[V];if(Ie===0&&(Ie=fe,(U+=Y)>=z&&(Y=4*ve+4*r*(re-1),U=C+(fe+ve)*(re<<1),re>>=1)),se===de)U+=4;else{var Ne=t[pe+3*se],Se=t[pe+3*se+1],De=t[pe+3*se+2];K[U++]=Ne,K[U++]=Se,K[U++]=De,K[U++]=255}--Ie}}}function Hh(t,e,r,a){for(var i=t[e++],n=1<<i,l=n+1,c=l+1,u=i+1,f=(1<<u)-1,g=0,b=0,y=0,m=t[e++],k=new Int32Array(4096),N=null;;){for(;g<16&&m!==0;)b|=t[e++]<<g,g+=8,m===1?m=t[e++]:--m;if(g<u)break;var _=b&f;if(b>>=u,g-=u,_!==n){if(_===l)break;for(var x=_<c?_:N,I=0,B=x;B>n;)B=k[B]>>8,++I;var R=B;if(y+I+(x!==_?1:0)>a)return void Pt.log("Warning, gif stream longer than expected.");r[y++]=R;var Z=y+=I;for(x!==_&&(r[y++]=R),B=x;I--;)B=k[B],r[--Z]=255&B,B>>=8;N!==null&&c<4096&&(k[c++]=N<<8|R,c>=f+1&&u<12&&(++u,f=f<<1|1)),N=_}else c=l+1,f=(1<<(u=i+1))-1,N=null}return y!==a&&Pt.log("Warning, gif stream shorter than expected."),r}/**
 * @license
  Copyright (c) 2008, Adobe Systems Incorporated
  All rights reserved.

  Redistribution and use in source and binary forms, with or without 
  modification, are permitted provided that the following conditions are
  met:

  * Redistributions of source code must retain the above copyright notice, 
    this list of conditions and the following disclaimer.
  
  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the 
    documentation and/or other materials provided with the distribution.
  
  * Neither the name of Adobe Systems Incorporated nor the names of its 
    contributors may be used to endorse or promote products derived from 
    this software without specific prior written permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
  IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
  THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
  PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/function dd(t){var e,r,a,i,n,l=Math.floor,c=new Array(64),u=new Array(64),f=new Array(64),g=new Array(64),b=new Array(65535),y=new Array(65535),m=new Array(64),k=new Array(64),N=[],_=0,x=7,I=new Array(64),B=new Array(64),R=new Array(64),Z=new Array(256),ee=new Array(2048),A=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],S=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],M=[0,1,2,3,4,5,6,7,8,9,10,11],ne=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],E=[1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],T=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],K=[0,1,2,3,4,5,6,7,8,9,10,11],H=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],ce=[0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250];function ue(C,z){for(var U=0,Y=0,re=new Array,V=1;V<=16;V++){for(var Q=1;Q<=C[V];Q++)re[z[Y]]=[],re[z[Y]][0]=U,re[z[Y]][1]=V,Y++,U++;U*=2}return re}function pe(C){for(var z=C[0],U=C[1]-1;U>=0;)z&1<<U&&(_|=1<<x),U--,--x<0&&(_==255?(de(255),de(0)):de(_),x=7,_=0)}function de(C){N.push(C)}function fe(C){de(C>>8&255),de(255&C)}function ve(C,z,U,Y,re){for(var V,Q=re[0],se=re[240],Ne=function(Ae,Le){var Te,Fe,We,Xe,it,ot,ft,Nt,Je,ct,Me=0;for(Je=0;Je<8;++Je){Te=Ae[Me],Fe=Ae[Me+1],We=Ae[Me+2],Xe=Ae[Me+3],it=Ae[Me+4],ot=Ae[Me+5],ft=Ae[Me+6];var ur=Te+(Nt=Ae[Me+7]),gt=Te-Nt,sa=Fe+ft,At=Fe-ft,Dt=We+ot,ka=We-ot,vt=Xe+it,Qn=Xe-it,Tt=ur+vt,oa=ur-vt,Ua=sa+Dt,Mt=sa-Dt;Ae[Me]=Tt+Ua,Ae[Me+4]=Tt-Ua;var Ze=.707106781*(Mt+oa);Ae[Me+2]=oa+Ze,Ae[Me+6]=oa-Ze;var yt=.382683433*((Tt=Qn+ka)-(Mt=At+gt)),Xn=.5411961*Tt+yt,lr=1.306562965*Mt+yt,Na=.707106781*(Ua=ka+At),Sa=gt+Na,Ke=gt-Na;Ae[Me+5]=Ke+Xn,Ae[Me+3]=Ke-Xn,Ae[Me+1]=Sa+lr,Ae[Me+7]=Sa-lr,Me+=8}for(Me=0,Je=0;Je<8;++Je){Te=Ae[Me],Fe=Ae[Me+8],We=Ae[Me+16],Xe=Ae[Me+24],it=Ae[Me+32],ot=Ae[Me+40],ft=Ae[Me+48];var la=Te+(Nt=Ae[Me+56]),Aa=Te-Nt,Cr=Fe+ft,Qt=Fe-ft,Kt=We+ot,zr=We-ot,_i=Xe+it,Wa=Xe-it,ca=la+_i,da=la-_i,ua=Cr+Kt,La=Cr-Kt;Ae[Me]=ca+ua,Ae[Me+32]=ca-ua;var Yr=.707106781*(La+da);Ae[Me+16]=da+Yr,Ae[Me+48]=da-Yr;var Pa=.382683433*((ca=Wa+zr)-(La=Qt+Aa)),Zn=.5411961*ca+Pa,Ci=1.306562965*La+Pa,Fi=.707106781*(ua=zr+Qt),Ii=Aa+Fi,Di=Aa-Fi;Ae[Me+40]=Di+Zn,Ae[Me+24]=Di-Zn,Ae[Me+8]=Ii+Ci,Ae[Me+56]=Ii-Ci,Me++}for(Je=0;Je<64;++Je)ct=Ae[Je]*Le[Je],m[Je]=ct>0?ct+.5|0:ct-.5|0;return m}(C,z),Se=0;Se<64;++Se)k[A[Se]]=Ne[Se];var De=k[0]-U;U=k[0],De==0?pe(Y[0]):(pe(Y[y[V=32767+De]]),pe(b[V]));for(var _e=63;_e>0&&k[_e]==0;)_e--;if(_e==0)return pe(Q),U;for(var Ge,be=1;be<=_e;){for(var W=be;k[be]==0&&be<=_e;)++be;var rt=be-W;if(rt>=16){Ge=rt>>4;for(var ze=1;ze<=Ge;++ze)pe(se);rt&=15}V=32767+k[be],pe(re[(rt<<4)+y[V]]),pe(b[V]),be++}return _e!=63&&pe(Q),U}function Ie(C){C=Math.min(Math.max(C,1),100),n!=C&&(function(z){for(var U=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],Y=0;Y<64;Y++){var re=l((U[Y]*z+50)/100);re=Math.min(Math.max(re,1),255),c[A[Y]]=re}for(var V=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],Q=0;Q<64;Q++){var se=l((V[Q]*z+50)/100);se=Math.min(Math.max(se,1),255),u[A[Q]]=se}for(var Ne=[1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379],Se=0,De=0;De<8;De++)for(var _e=0;_e<8;_e++)f[Se]=1/(c[A[Se]]*Ne[De]*Ne[_e]*8),g[Se]=1/(u[A[Se]]*Ne[De]*Ne[_e]*8),Se++}(C<50?Math.floor(5e3/C):Math.floor(200-2*C)),n=C)}this.encode=function(C,z){z&&Ie(z),N=new Array,_=0,x=7,fe(65496),fe(65504),fe(16),de(74),de(70),de(73),de(70),de(0),de(1),de(1),de(0),fe(1),fe(1),de(0),de(0),function(){fe(65499),fe(132),de(0);for(var Fe=0;Fe<64;Fe++)de(c[Fe]);de(1);for(var We=0;We<64;We++)de(u[We])}(),function(Fe,We){fe(65472),fe(17),de(8),fe(We),fe(Fe),de(3),de(1),de(17),de(0),de(2),de(17),de(1),de(3),de(17),de(1)}(C.width,C.height),function(){fe(65476),fe(418),de(0);for(var Fe=0;Fe<16;Fe++)de(S[Fe+1]);for(var We=0;We<=11;We++)de(M[We]);de(16);for(var Xe=0;Xe<16;Xe++)de(ne[Xe+1]);for(var it=0;it<=161;it++)de(E[it]);de(1);for(var ot=0;ot<16;ot++)de(T[ot+1]);for(var ft=0;ft<=11;ft++)de(K[ft]);de(17);for(var Nt=0;Nt<16;Nt++)de(H[Nt+1]);for(var Je=0;Je<=161;Je++)de(ce[Je])}(),fe(65498),fe(12),de(3),de(1),de(0),de(2),de(17),de(3),de(17),de(0),de(63),de(0);var U=0,Y=0,re=0;_=0,x=7,this.encode.displayName="_encode_";for(var V,Q,se,Ne,Se,De,_e,Ge,be,W=C.data,rt=C.width,ze=C.height,Ae=4*rt,Le=0;Le<ze;){for(V=0;V<Ae;){for(Se=Ae*Le+V,_e=-1,Ge=0,be=0;be<64;be++)De=Se+(Ge=be>>3)*Ae+(_e=4*(7&be)),Le+Ge>=ze&&(De-=Ae*(Le+1+Ge-ze)),V+_e>=Ae&&(De-=V+_e-Ae+4),Q=W[De++],se=W[De++],Ne=W[De++],I[be]=(ee[Q]+ee[se+256>>0]+ee[Ne+512>>0]>>16)-128,B[be]=(ee[Q+768>>0]+ee[se+1024>>0]+ee[Ne+1280>>0]>>16)-128,R[be]=(ee[Q+1280>>0]+ee[se+1536>>0]+ee[Ne+1792>>0]>>16)-128;U=ve(I,f,U,e,a),Y=ve(B,g,Y,r,i),re=ve(R,g,re,r,i),V+=32}Le+=8}if(x>=0){var Te=[];Te[1]=x+1,Te[0]=(1<<x+1)-1,pe(Te)}return fe(65497),new Uint8Array(N)},t=t||50,function(){for(var C=String.fromCharCode,z=0;z<256;z++)Z[z]=C(z)}(),e=ue(S,M),r=ue(T,K),a=ue(ne,E),i=ue(H,ce),function(){for(var C=1,z=2,U=1;U<=15;U++){for(var Y=C;Y<z;Y++)y[32767+Y]=U,b[32767+Y]=[],b[32767+Y][1]=U,b[32767+Y][0]=Y;for(var re=-(z-1);re<=-C;re++)y[32767+re]=U,b[32767+re]=[],b[32767+re][1]=U,b[32767+re][0]=z-1+re;C<<=1,z<<=1}}(),function(){for(var C=0;C<256;C++)ee[C]=19595*C,ee[C+256>>0]=38470*C,ee[C+512>>0]=7471*C+32768,ee[C+768>>0]=-11059*C,ee[C+1024>>0]=-21709*C,ee[C+1280>>0]=32768*C+8421375,ee[C+1536>>0]=-27439*C,ee[C+1792>>0]=-5329*C}(),Ie(t)}/**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */function va(t,e){if(this.pos=0,this.buffer=t,this.datav=new DataView(t.buffer),this.is_with_alpha=!!e,this.bottom_up=!0,this.flag=String.fromCharCode(this.buffer[0])+String.fromCharCode(this.buffer[1]),this.pos+=2,["BM","BA","CI","CP","IC","PT"].indexOf(this.flag)===-1)throw new Error("Invalid BMP File");this.parseHeader(),this.parseBGR()}function $h(t){function e(S){if(!S)throw Error("assert :P")}function r(S,M,ne){for(var E=0;4>E;E++)if(S[M+E]!=ne.charCodeAt(E))return!0;return!1}function a(S,M,ne,E,T){for(var K=0;K<T;K++)S[M+K]=ne[E+K]}function i(S,M,ne,E){for(var T=0;T<E;T++)S[M+T]=ne}function n(S){return new Int32Array(S)}function l(S,M){for(var ne=[],E=0;E<S;E++)ne.push(new M);return ne}function c(S,M){var ne=[];return function E(T,K,H){for(var ce=H[K],ue=0;ue<ce&&(T.push(H.length>K+1?[]:new M),!(H.length<K+1));ue++)E(T[ue],K+1,H)}(ne,0,S),ne}var u=function(){var S=this;function M(o,d){for(var p=1<<d-1>>>0;o&p;)p>>>=1;return p?(o&p-1)+p:o}function ne(o,d,p,v,w){e(!(v%p));do o[d+(v-=p)]=w;while(0<v)}function E(o,d,p,v,w){if(e(2328>=w),512>=w)var L=n(512);else if((L=n(w))==null)return 0;return function(P,F,D,O,J,oe){var le,ae,we=F,he=1<<D,X=n(16),te=n(16);for(e(J!=0),e(O!=null),e(P!=null),e(0<D),ae=0;ae<J;++ae){if(15<O[ae])return 0;++X[O[ae]]}if(X[0]==J)return 0;for(te[1]=0,le=1;15>le;++le){if(X[le]>1<<le)return 0;te[le+1]=te[le]+X[le]}for(ae=0;ae<J;++ae)le=O[ae],0<O[ae]&&(oe[te[le]++]=ae);if(te[15]==1)return(O=new T).g=0,O.value=oe[0],ne(P,we,1,he,O),he;var ye,je=-1,xe=he-1,Oe=0,Pe=1,$e=1,Ce=1<<D;for(ae=0,le=1,J=2;le<=D;++le,J<<=1){if(Pe+=$e<<=1,0>($e-=X[le]))return 0;for(;0<X[le];--X[le])(O=new T).g=le,O.value=oe[ae++],ne(P,we+Oe,J,Ce,O),Oe=M(Oe,le)}for(le=D+1,J=2;15>=le;++le,J<<=1){if(Pe+=$e<<=1,0>($e-=X[le]))return 0;for(;0<X[le];--X[le]){if(O=new T,(Oe&xe)!=je){for(we+=Ce,ye=1<<(je=le)-D;15>je&&!(0>=(ye-=X[je]));)++je,ye<<=1;he+=Ce=1<<(ye=je-D),P[F+(je=Oe&xe)].g=ye+D,P[F+je].value=we-F-je}O.g=le-D,O.value=oe[ae++],ne(P,we+(Oe>>D),J,Ce,O),Oe=M(Oe,le)}}return Pe!=2*te[15]-1?0:he}(o,d,p,v,w,L)}function T(){this.value=this.g=0}function K(){this.value=this.g=0}function H(){this.G=l(5,T),this.H=n(5),this.jc=this.Qb=this.qb=this.nd=0,this.pd=l(cr,K)}function ce(o,d,p,v){e(o!=null),e(d!=null),e(2147483648>v),o.Ca=254,o.I=0,o.b=-8,o.Ka=0,o.oa=d,o.pa=p,o.Jd=d,o.Yc=p+v,o.Zc=4<=v?p+v-4+1:p,V(o)}function ue(o,d){for(var p=0;0<d--;)p|=se(o,128)<<d;return p}function pe(o,d){var p=ue(o,d);return Q(o)?-p:p}function de(o,d,p,v){var w,L=0;for(e(o!=null),e(d!=null),e(4294967288>v),o.Sb=v,o.Ra=0,o.u=0,o.h=0,4<v&&(v=4),w=0;w<v;++w)L+=d[p+w]<<8*w;o.Ra=L,o.bb=v,o.oa=d,o.pa=p}function fe(o){for(;8<=o.u&&o.bb<o.Sb;)o.Ra>>>=8,o.Ra+=o.oa[o.pa+o.bb]<<Gi-8>>>0,++o.bb,o.u-=8;U(o)&&(o.h=1,o.u=0)}function ve(o,d){if(e(0<=d),!o.h&&d<=Ki){var p=z(o)&Vi[d];return o.u+=d,fe(o),p}return o.h=1,o.u=0}function Ie(){this.b=this.Ca=this.I=0,this.oa=[],this.pa=0,this.Jd=[],this.Yc=0,this.Zc=[],this.Ka=0}function C(){this.Ra=0,this.oa=[],this.h=this.u=this.bb=this.Sb=this.pa=0}function z(o){return o.Ra>>>(o.u&Gi-1)>>>0}function U(o){return e(o.bb<=o.Sb),o.h||o.bb==o.Sb&&o.u>Gi}function Y(o,d){o.u=d,o.h=U(o)}function re(o){o.u>=Xs&&(e(o.u>=Xs),fe(o))}function V(o){e(o!=null&&o.oa!=null),o.pa<o.Zc?(o.I=(o.oa[o.pa++]|o.I<<8)>>>0,o.b+=8):(e(o!=null&&o.oa!=null),o.pa<o.Yc?(o.b+=8,o.I=o.oa[o.pa++]|o.I<<8):o.Ka?o.b=0:(o.I<<=8,o.b+=8,o.Ka=1))}function Q(o){return ue(o,1)}function se(o,d){var p=o.Ca;0>o.b&&V(o);var v=o.b,w=p*d>>>8,L=(o.I>>>v>w)+0;for(L?(p-=w,o.I-=w+1<<v>>>0):p=w+1,v=p,w=0;256<=v;)w+=8,v>>=8;return v=7^w+Ir[v],o.b-=v,o.Ca=(p<<v)-1,L}function Ne(o,d,p){o[d+0]=p>>24&255,o[d+1]=p>>16&255,o[d+2]=p>>8&255,o[d+3]=p>>0&255}function Se(o,d){return o[d+0]<<0|o[d+1]<<8}function De(o,d){return Se(o,d)|o[d+2]<<16}function _e(o,d){return Se(o,d)|Se(o,d+2)<<16}function Ge(o,d){var p=1<<d;return e(o!=null),e(0<d),o.X=n(p),o.X==null?0:(o.Mb=32-d,o.Xa=d,1)}function be(o,d){e(o!=null),e(d!=null),e(o.Xa==d.Xa),a(d.X,0,o.X,0,1<<d.Xa)}function W(){this.X=[],this.Xa=this.Mb=0}function rt(o,d,p,v){e(p!=null),e(v!=null);var w=p[0],L=v[0];return w==0&&(w=(o*L+d/2)/d),L==0&&(L=(d*w+o/2)/o),0>=w||0>=L?0:(p[0]=w,v[0]=L,1)}function ze(o,d){return o+(1<<d)-1>>>d}function Ae(o,d){return((4278255360&o)+(4278255360&d)>>>0&4278255360)+((16711935&o)+(16711935&d)>>>0&16711935)>>>0}function Le(o,d){S[d]=function(p,v,w,L,P,F,D){var O;for(O=0;O<P;++O){var J=S[o](F[D+O-1],w,L+O);F[D+O]=Ae(p[v+O],J)}}}function Te(){this.ud=this.hd=this.jd=0}function Fe(o,d){return((4278124286&(o^d))>>>1)+(o&d)>>>0}function We(o){return 0<=o&&256>o?o:0>o?0:255<o?255:void 0}function Xe(o,d){return We(o+(o-d+.5>>1))}function it(o,d,p){return Math.abs(d-p)-Math.abs(o-p)}function ot(o,d,p,v,w,L,P){for(v=L[P-1],p=0;p<w;++p)L[P+p]=v=Ae(o[d+p],v)}function ft(o,d,p,v,w){var L;for(L=0;L<p;++L){var P=o[d+L],F=P>>8&255,D=16711935&(D=(D=16711935&P)+((F<<16)+F));v[w+L]=(4278255360&P)+D>>>0}}function Nt(o,d){d.jd=o>>0&255,d.hd=o>>8&255,d.ud=o>>16&255}function Je(o,d,p,v,w,L){var P;for(P=0;P<v;++P){var F=d[p+P],D=F>>>8,O=F,J=255&(J=(J=F>>>16)+((o.jd<<24>>24)*(D<<24>>24)>>>5));O=255&(O=(O=O+((o.hd<<24>>24)*(D<<24>>24)>>>5))+((o.ud<<24>>24)*(J<<24>>24)>>>5)),w[L+P]=(4278255360&F)+(J<<16)+O}}function ct(o,d,p,v,w){S[d]=function(L,P,F,D,O,J,oe,le,ae){for(D=oe;D<le;++D)for(oe=0;oe<ae;++oe)O[J++]=w(F[v(L[P++])])},S[o]=function(L,P,F,D,O,J,oe){var le=8>>L.b,ae=L.Ea,we=L.K[0],he=L.w;if(8>le)for(L=(1<<L.b)-1,he=(1<<le)-1;P<F;++P){var X,te=0;for(X=0;X<ae;++X)X&L||(te=v(D[O++])),J[oe++]=w(we[te&he]),te>>=le}else S["VP8LMapColor"+p](D,O,we,he,J,oe,P,F,ae)}}function Me(o,d,p,v,w){for(p=d+p;d<p;){var L=o[d++];v[w++]=L>>16&255,v[w++]=L>>8&255,v[w++]=L>>0&255}}function ur(o,d,p,v,w){for(p=d+p;d<p;){var L=o[d++];v[w++]=L>>16&255,v[w++]=L>>8&255,v[w++]=L>>0&255,v[w++]=L>>24&255}}function gt(o,d,p,v,w){for(p=d+p;d<p;){var L=(P=o[d++])>>16&240|P>>12&15,P=P>>0&240|P>>28&15;v[w++]=L,v[w++]=P}}function sa(o,d,p,v,w){for(p=d+p;d<p;){var L=(P=o[d++])>>16&248|P>>13&7,P=P>>5&224|P>>3&31;v[w++]=L,v[w++]=P}}function At(o,d,p,v,w){for(p=d+p;d<p;){var L=o[d++];v[w++]=L>>0&255,v[w++]=L>>8&255,v[w++]=L>>16&255}}function Dt(o,d,p,v,w,L){if(L==0)for(p=d+p;d<p;)Ne(v,((L=o[d++])[0]>>24|L[1]>>8&65280|L[2]<<8&16711680|L[3]<<24)>>>0),w+=32;else a(v,w,o,d,p)}function ka(o,d){S[d][0]=S[o+"0"],S[d][1]=S[o+"1"],S[d][2]=S[o+"2"],S[d][3]=S[o+"3"],S[d][4]=S[o+"4"],S[d][5]=S[o+"5"],S[d][6]=S[o+"6"],S[d][7]=S[o+"7"],S[d][8]=S[o+"8"],S[d][9]=S[o+"9"],S[d][10]=S[o+"10"],S[d][11]=S[o+"11"],S[d][12]=S[o+"12"],S[d][13]=S[o+"13"],S[d][14]=S[o+"0"],S[d][15]=S[o+"0"]}function vt(o){return o==Ec||o==Tc||o==ll||o==Mc}function Qn(){this.eb=[],this.size=this.A=this.fb=0}function Tt(){this.y=[],this.f=[],this.ea=[],this.F=[],this.Tc=this.Ed=this.Cd=this.Fd=this.lb=this.Db=this.Ab=this.fa=this.J=this.W=this.N=this.O=0}function oa(){this.Rd=this.height=this.width=this.S=0,this.f={},this.f.RGBA=new Qn,this.f.kb=new Tt,this.sd=null}function Ua(){this.width=[0],this.height=[0],this.Pd=[0],this.Qd=[0],this.format=[0]}function Mt(){this.Id=this.fd=this.Md=this.hb=this.ib=this.da=this.bd=this.cd=this.j=this.v=this.Da=this.Sd=this.ob=0}function Ze(o){return alert("todo:WebPSamplerProcessPlane"),o.T}function yt(o,d){var p=o.T,v=d.ba.f.RGBA,w=v.eb,L=v.fb+o.ka*v.A,P=ta[d.ba.S],F=o.y,D=o.O,O=o.f,J=o.N,oe=o.ea,le=o.W,ae=d.cc,we=d.dc,he=d.Mc,X=d.Nc,te=o.ka,ye=o.ka+o.T,je=o.U,xe=je+1>>1;for(te==0?P(F,D,null,null,O,J,oe,le,O,J,oe,le,w,L,null,null,je):(P(d.ec,d.fc,F,D,ae,we,he,X,O,J,oe,le,w,L-v.A,w,L,je),++p);te+2<ye;te+=2)ae=O,we=J,he=oe,X=le,J+=o.Rc,le+=o.Rc,L+=2*v.A,P(F,(D+=2*o.fa)-o.fa,F,D,ae,we,he,X,O,J,oe,le,w,L-v.A,w,L,je);return D+=o.fa,o.j+ye<o.o?(a(d.ec,d.fc,F,D,je),a(d.cc,d.dc,O,J,xe),a(d.Mc,d.Nc,oe,le,xe),p--):1&ye||P(F,D,null,null,O,J,oe,le,O,J,oe,le,w,L+v.A,null,null,je),p}function Xn(o,d,p){var v=o.F,w=[o.J];if(v!=null){var L=o.U,P=d.ba.S,F=P==ol||P==ll;d=d.ba.f.RGBA;var D=[0],O=o.ka;D[0]=o.T,o.Kb&&(O==0?--D[0]:(--O,w[0]-=o.width),o.j+o.ka+o.T==o.o&&(D[0]=o.o-o.j-O));var J=d.eb;O=d.fb+O*d.A,o=Ct(v,w[0],o.width,L,D,J,O+(F?0:3),d.A),e(p==D),o&&vt(P)&&Zr(J,O,F,L,D,d.A)}return 0}function lr(o){var d=o.ma,p=d.ba.S,v=11>p,w=p==il||p==sl||p==ol||p==Dc||p==12||vt(p);if(d.memory=null,d.Ib=null,d.Jb=null,d.Nd=null,!Js(d.Oa,o,w?11:12))return 0;if(w&&vt(p)&&ke(),o.da)alert("todo:use_scaling");else{if(v){if(d.Ib=Ze,o.Kb){if(p=o.U+1>>1,d.memory=n(o.U+2*p),d.memory==null)return 0;d.ec=d.memory,d.fc=0,d.cc=d.ec,d.dc=d.fc+o.U,d.Mc=d.cc,d.Nc=d.dc+p,d.Ib=yt,ke()}}else alert("todo:EmitYUV");w&&(d.Jb=Xn,v&&ie())}if(v&&!Au){for(o=0;256>o;++o)e1[o]=89858*(o-128)+dl>>cl,a1[o]=-22014*(o-128)+dl,r1[o]=-45773*(o-128),t1[o]=113618*(o-128)+dl>>cl;for(o=io;o<Rc;++o)d=76283*(o-16)+dl>>cl,n1[o-io]=qr(d,255),i1[o-io]=qr(d+8>>4,15);Au=1}return 1}function Na(o){var d=o.ma,p=o.U,v=o.T;return e(!(1&o.ka)),0>=p||0>=v?0:(p=d.Ib(o,d),d.Jb!=null&&d.Jb(o,d,p),d.Dc+=p,1)}function Sa(o){o.ma.memory=null}function Ke(o,d,p,v){return ve(o,8)!=47?0:(d[0]=ve(o,14)+1,p[0]=ve(o,14)+1,v[0]=ve(o,1),ve(o,3)!=0?0:!o.h)}function la(o,d){if(4>o)return o+1;var p=o-2>>1;return(2+(1&o)<<p)+ve(d,p)+1}function Aa(o,d){return 120<d?d-120:1<=(p=((p=zp[d-1])>>4)*o+(8-(15&p)))?p:1;var p}function Cr(o,d,p){var v=z(p),w=o[d+=255&v].g-8;return 0<w&&(Y(p,p.u+8),v=z(p),d+=o[d].value,d+=v&(1<<w)-1),Y(p,p.u+o[d].g),o[d].value}function Qt(o,d,p){return p.g+=o.g,p.value+=o.value<<d>>>0,e(8>=p.g),o.g}function Kt(o,d,p){var v=o.xc;return e((d=v==0?0:o.vc[o.md*(p>>v)+(d>>v)])<o.Wb),o.Ya[d]}function zr(o,d,p,v){var w=o.ab,L=o.c*d,P=o.C;d=P+d;var F=p,D=v;for(v=o.Ta,p=o.Ua;0<w--;){var O=o.gc[w],J=P,oe=d,le=F,ae=D,we=(D=v,F=p,O.Ea);switch(e(J<oe),e(oe<=O.nc),O.hc){case 2:Xo(le,ae,(oe-J)*we,D,F);break;case 0:var he=J,X=oe,te=D,ye=F,je=(Ce=O).Ea;he==0&&(Fc(le,ae,null,null,1,te,ye),ot(le,ae+1,0,0,je-1,te,ye+1),ae+=je,ye+=je,++he);for(var xe=1<<Ce.b,Oe=xe-1,Pe=ze(je,Ce.b),$e=Ce.K,Ce=Ce.w+(he>>Ce.b)*Pe;he<X;){var bt=$e,wt=Ce,pt=1;for(Zs(le,ae,te,ye-je,1,te,ye);pt<je;){var dt=(pt&~Oe)+xe;dt>je&&(dt=je),(0,gn[bt[wt++]>>8&15])(le,ae+ +pt,te,ye+pt-je,dt-pt,te,ye+pt),pt=dt}ae+=je,ye+=je,++he&Oe||(Ce+=Pe)}oe!=O.nc&&a(D,F-we,D,F+(oe-J-1)*we,we);break;case 1:for(we=le,X=ae,je=(le=O.Ea)-(ye=le&~(te=(ae=1<<O.b)-1)),he=ze(le,O.b),xe=O.K,O=O.w+(J>>O.b)*he;J<oe;){for(Oe=xe,Pe=O,$e=new Te,Ce=X+ye,bt=X+le;X<Ce;)Nt(Oe[Pe++],$e),ni($e,we,X,ae,D,F),X+=ae,F+=ae;X<bt&&(Nt(Oe[Pe++],$e),ni($e,we,X,je,D,F),X+=je,F+=je),++J&te||(O+=he)}break;case 3:if(le==D&&ae==F&&0<O.b){for(X=D,le=we=F+(oe-J)*we-(ye=(oe-J)*ze(O.Ea,O.b)),ae=D,te=F,he=[],ye=(je=ye)-1;0<=ye;--ye)he[ye]=ae[te+ye];for(ye=je-1;0<=ye;--ye)X[le+ye]=he[ye];Jr(O,J,oe,D,we,D,F)}else Jr(O,J,oe,le,ae,D,F)}F=v,D=p}D!=p&&a(v,p,F,D,L)}function _i(o,d){var p=o.V,v=o.Ba+o.c*o.C,w=d-o.C;if(e(d<=o.l.o),e(16>=w),0<w){var L=o.l,P=o.Ta,F=o.Ua,D=L.width;if(zr(o,w,p,v),w=F=[F],e((p=o.C)<(v=d)),e(L.v<L.va),v>L.o&&(v=L.o),p<L.j){var O=L.j-p;p=L.j,w[0]+=O*D}if(p>=v?p=0:(w[0]+=4*L.v,L.ka=p-L.j,L.U=L.va-L.v,L.T=v-p,p=1),p){if(F=F[0],11>(p=o.ca).S){var J=p.f.RGBA,oe=(v=p.S,w=L.U,L=L.T,O=J.eb,J.A),le=L;for(J=J.fb+o.Ma*J.A;0<le--;){var ae=P,we=F,he=w,X=O,te=J;switch(v){case nl:Dr(ae,we,he,X,te);break;case il:kr(ae,we,he,X,te);break;case Ec:kr(ae,we,he,X,te),Zr(X,te,0,he,1,0);break;case bu:Ka(ae,we,he,X,te);break;case sl:Dt(ae,we,he,X,te,1);break;case Tc:Dt(ae,we,he,X,te,1),Zr(X,te,0,he,1,0);break;case ol:Dt(ae,we,he,X,te,0);break;case ll:Dt(ae,we,he,X,te,0),Zr(X,te,1,he,1,0);break;case Dc:bn(ae,we,he,X,te);break;case Mc:bn(ae,we,he,X,te),_t(X,te,he,1,0);break;case vu:Va(ae,we,he,X,te);break;default:e(0)}F+=D,J+=oe}o.Ma+=L}else alert("todo:EmitRescaledRowsYUVA");e(o.Ma<=p.height)}}o.C=d,e(o.C<=o.i)}function Wa(o){var d;if(0<o.ua)return 0;for(d=0;d<o.Wb;++d){var p=o.Ya[d].G,v=o.Ya[d].H;if(0<p[1][v[1]+0].g||0<p[2][v[2]+0].g||0<p[3][v[3]+0].g)return 0}return 1}function ca(o,d,p,v,w,L){if(o.Z!=0){var P=o.qd,F=o.rd;for(e(wn[o.Z]!=null);d<p;++d)wn[o.Z](P,F,v,w,v,w,L),P=v,F=w,w+=L;o.qd=P,o.rd=F}}function da(o,d){var p=o.l.ma,v=p.Z==0||p.Z==1?o.l.j:o.C;if(v=o.C<v?v:o.C,e(d<=o.l.o),d>v){var w=o.l.width,L=p.ca,P=p.tb+w*v,F=o.V,D=o.Ba+o.c*v,O=o.gc;e(o.ab==1),e(O[0].hc==3),Zo(O[0],v,d,F,D,L,P),ca(p,v,d,L,P,w)}o.C=o.Ma=d}function ua(o,d,p,v,w,L,P){var F=o.$/v,D=o.$%v,O=o.m,J=o.s,oe=p+o.$,le=oe;w=p+v*w;var ae=p+v*L,we=280+J.ua,he=o.Pb?F:16777216,X=0<J.ua?J.Wa:null,te=J.wc,ye=oe<ae?Kt(J,D,F):null;e(o.C<L),e(ae<=w);var je=!1;e:for(;;){for(;je||oe<ae;){var xe=0;if(F>=he){var Oe=oe-p;e((he=o).Pb),he.wd=he.m,he.xd=Oe,0<he.s.ua&&be(he.s.Wa,he.s.vb),he=F+Up}if(D&te||(ye=Kt(J,D,F)),e(ye!=null),ye.Qb&&(d[oe]=ye.qb,je=!0),!je)if(re(O),ye.jc){xe=O,Oe=d;var Pe=oe,$e=ye.pd[z(xe)&cr-1];e(ye.jc),256>$e.g?(Y(xe,xe.u+$e.g),Oe[Pe]=$e.value,xe=0):(Y(xe,xe.u+$e.g-256),e(256<=$e.value),xe=$e.value),xe==0&&(je=!0)}else xe=Cr(ye.G[0],ye.H[0],O);if(O.h)break;if(je||256>xe){if(!je)if(ye.nd)d[oe]=(ye.qb|xe<<8)>>>0;else{if(re(O),je=Cr(ye.G[1],ye.H[1],O),re(O),Oe=Cr(ye.G[2],ye.H[2],O),Pe=Cr(ye.G[3],ye.H[3],O),O.h)break;d[oe]=(Pe<<24|je<<16|xe<<8|Oe)>>>0}if(je=!1,++oe,++D>=v&&(D=0,++F,P!=null&&F<=L&&!(F%16)&&P(o,F),X!=null))for(;le<oe;)xe=d[le++],X.X[(506832829*xe&4294967295)>>>X.Mb]=xe}else if(280>xe){if(xe=la(xe-256,O),Oe=Cr(ye.G[4],ye.H[4],O),re(O),Oe=Aa(v,Oe=la(Oe,O)),O.h)break;if(oe-p<Oe||w-oe<xe)break e;for(Pe=0;Pe<xe;++Pe)d[oe+Pe]=d[oe+Pe-Oe];for(oe+=xe,D+=xe;D>=v;)D-=v,++F,P!=null&&F<=L&&!(F%16)&&P(o,F);if(e(oe<=w),D&te&&(ye=Kt(J,D,F)),X!=null)for(;le<oe;)xe=d[le++],X.X[(506832829*xe&4294967295)>>>X.Mb]=xe}else{if(!(xe<we))break e;for(je=xe-280,e(X!=null);le<oe;)xe=d[le++],X.X[(506832829*xe&4294967295)>>>X.Mb]=xe;xe=oe,e(!(je>>>(Oe=X).Xa)),d[xe]=Oe.X[je],je=!0}je||e(O.h==U(O))}if(o.Pb&&O.h&&oe<w)e(o.m.h),o.a=5,o.m=o.wd,o.$=o.xd,0<o.s.ua&&be(o.s.vb,o.s.Wa);else{if(O.h)break e;P!=null&&P(o,F>L?L:F),o.a=0,o.$=oe-p}return 1}return o.a=3,0}function La(o){e(o!=null),o.vc=null,o.yc=null,o.Ya=null;var d=o.Wa;d!=null&&(d.X=null),o.vb=null,e(o!=null)}function Yr(){var o=new Cc;return o==null?null:(o.a=0,o.xb=wu,ka("Predictor","VP8LPredictors"),ka("Predictor","VP8LPredictors_C"),ka("PredictorAdd","VP8LPredictorsAdd"),ka("PredictorAdd","VP8LPredictorsAdd_C"),Xo=ft,ni=Je,Dr=Me,kr=ur,bn=gt,Va=sa,Ka=At,S.VP8LMapColor32b=Yi,S.VP8LMapColor8b=el,o)}function Pa(o,d,p,v,w){var L=1,P=[o],F=[d],D=v.m,O=v.s,J=null,oe=0;e:for(;;){if(p)for(;L&&ve(D,1);){var le=P,ae=F,we=v,he=1,X=we.m,te=we.gc[we.ab],ye=ve(X,2);if(we.Oc&1<<ye)L=0;else{switch(we.Oc|=1<<ye,te.hc=ye,te.Ea=le[0],te.nc=ae[0],te.K=[null],++we.ab,e(4>=we.ab),ye){case 0:case 1:te.b=ve(X,3)+2,he=Pa(ze(te.Ea,te.b),ze(te.nc,te.b),0,we,te.K),te.K=te.K[0];break;case 3:var je,xe=ve(X,8)+1,Oe=16<xe?0:4<xe?1:2<xe?2:3;if(le[0]=ze(te.Ea,Oe),te.b=Oe,je=he=Pa(xe,1,0,we,te.K)){var Pe,$e=xe,Ce=te,bt=1<<(8>>Ce.b),wt=n(bt);if(wt==null)je=0;else{var pt=Ce.K[0],dt=Ce.w;for(wt[0]=Ce.K[0][0],Pe=1;Pe<1*$e;++Pe)wt[Pe]=Ae(pt[dt+Pe],wt[Pe-1]);for(;Pe<4*bt;++Pe)wt[Pe]=0;Ce.K[0]=null,Ce.K[0]=wt,je=1}}he=je;break;case 2:break;default:e(0)}L=he}}if(P=P[0],F=F[0],L&&ve(D,1)&&!(L=1<=(oe=ve(D,4))&&11>=oe)){v.a=3;break e}var Lt;if(Lt=L)t:{var St,nt,Yt,Er=v,Jt=P,Tr=F,jt=oe,Wr=p,Hr=Er.m,ar=Er.s,dr=[null],Sr=1,ra=0,Ia=qp[jt];r:for(;;){if(Wr&&ve(Hr,1)){var nr=ve(Hr,3)+2,Qa=ze(Jt,nr),ci=ze(Tr,nr),es=Qa*ci;if(!Pa(Qa,ci,0,Er,dr))break r;for(dr=dr[0],ar.xc=nr,St=0;St<es;++St){var jn=dr[St]>>8&65535;dr[St]=jn,jn>=Sr&&(Sr=jn+1)}}if(Hr.h)break r;for(nt=0;5>nt;++nt){var Ot=yu[nt];!nt&&0<jt&&(Ot+=1<<jt),ra<Ot&&(ra=Ot)}var zc=l(Sr*Ia,T),_u=Sr,Cu=l(_u,H);if(Cu==null)var hl=null;else e(65536>=_u),hl=Cu;var so=n(ra);if(hl==null||so==null||zc==null){Er.a=1;break r}var fl=zc;for(St=Yt=0;St<Sr;++St){var ga=hl[St],ts=ga.G,rs=ga.H,Fu=0,pl=1,Iu=0;for(nt=0;5>nt;++nt){Ot=yu[nt],ts[nt]=fl,rs[nt]=Yt,!nt&&0<jt&&(Ot+=1<<jt);n:{var ml,qc=Ot,gl=Er,oo=so,l1=fl,c1=Yt,Uc=0,kn=gl.m,d1=ve(kn,1);if(i(oo,0,0,qc),d1){var u1=ve(kn,1)+1,h1=ve(kn,1),Du=ve(kn,h1==0?1:8);oo[Du]=1,u1==2&&(oo[Du=ve(kn,8)]=1);var bl=1}else{var Eu=n(19),Tu=ve(kn,4)+4;if(19<Tu){gl.a=3;var vl=0;break n}for(ml=0;ml<Tu;++ml)Eu[Rp[ml]]=ve(kn,3);var Wc=void 0,lo=void 0,Mu=gl,f1=Eu,yl=qc,Bu=oo,Hc=0,Nn=Mu.m,Ou=8,Ru=l(128,T);a:for(;E(Ru,0,7,f1,19);){if(ve(Nn,1)){var p1=2+2*ve(Nn,3);if((Wc=2+ve(Nn,p1))>yl)break a}else Wc=yl;for(lo=0;lo<yl&&Wc--;){re(Nn);var zu=Ru[0+(127&z(Nn))];Y(Nn,Nn.u+zu.g);var as=zu.value;if(16>as)Bu[lo++]=as,as!=0&&(Ou=as);else{var m1=as==16,qu=as-16,g1=Bp[qu],Uu=ve(Nn,Mp[qu])+g1;if(lo+Uu>yl)break a;for(var b1=m1?Ou:0;0<Uu--;)Bu[lo++]=b1}}Hc=1;break a}Hc||(Mu.a=3),bl=Hc}(bl=bl&&!kn.h)&&(Uc=E(l1,c1,8,oo,qc)),bl&&Uc!=0?vl=Uc:(gl.a=3,vl=0)}if(vl==0)break r;if(pl&&Op[nt]==1&&(pl=fl[Yt].g==0),Fu+=fl[Yt].g,Yt+=vl,3>=nt){var co,$c=so[0];for(co=1;co<Ot;++co)so[co]>$c&&($c=so[co]);Iu+=$c}}if(ga.nd=pl,ga.Qb=0,pl&&(ga.qb=(ts[3][rs[3]+0].value<<24|ts[1][rs[1]+0].value<<16|ts[2][rs[2]+0].value)>>>0,Fu==0&&256>ts[0][rs[0]+0].value&&(ga.Qb=1,ga.qb+=ts[0][rs[0]+0].value<<8)),ga.jc=!ga.Qb&&6>Iu,ga.jc){var xl,Xa=ga;for(xl=0;xl<cr;++xl){var Sn=xl,An=Xa.pd[Sn],wl=Xa.G[0][Xa.H[0]+Sn];256<=wl.value?(An.g=wl.g+256,An.value=wl.value):(An.g=0,An.value=0,Sn>>=Qt(wl,8,An),Sn>>=Qt(Xa.G[1][Xa.H[1]+Sn],16,An),Sn>>=Qt(Xa.G[2][Xa.H[2]+Sn],0,An),Qt(Xa.G[3][Xa.H[3]+Sn],24,An))}}}ar.vc=dr,ar.Wb=Sr,ar.Ya=hl,ar.yc=zc,Lt=1;break t}Lt=0}if(!(L=Lt)){v.a=3;break e}if(0<oe){if(O.ua=1<<oe,!Ge(O.Wa,oe)){v.a=1,L=0;break e}}else O.ua=0;var Vc=v,Wu=P,v1=F,Kc=Vc.s,Gc=Kc.xc;if(Vc.c=Wu,Vc.i=v1,Kc.md=ze(Wu,Gc),Kc.wc=Gc==0?-1:(1<<Gc)-1,p){v.xb=Yp;break e}if((J=n(P*F))==null){v.a=1,L=0;break e}L=(L=ua(v,J,0,P,F,F,null))&&!D.h;break e}return L?(w!=null?w[0]=J:(e(J==null),e(p)),v.$=0,p||La(O)):La(O),L}function Zn(o,d){var p=o.c*o.i,v=p+d+16*d;return e(o.c<=d),o.V=n(v),o.V==null?(o.Ta=null,o.Ua=0,o.a=1,0):(o.Ta=o.V,o.Ua=o.Ba+p+d,1)}function Ci(o,d){var p=o.C,v=d-p,w=o.V,L=o.Ba+o.c*p;for(e(d<=o.l.o);0<v;){var P=16<v?16:v,F=o.l.ma,D=o.l.width,O=D*P,J=F.ca,oe=F.tb+D*p,le=o.Ta,ae=o.Ua;zr(o,P,w,L),Wt(le,ae,J,oe,O),ca(F,p,p+P,J,oe,D),v-=P,w+=P*o.c,p+=P}e(p==d),o.C=o.Ma=d}function Fi(){this.ub=this.yd=this.td=this.Rb=0}function Ii(){this.Kd=this.Ld=this.Ud=this.Td=this.i=this.c=0}function Di(){this.Fb=this.Bb=this.Cb=0,this.Zb=n(4),this.Lb=n(4)}function Io(){this.Yb=function(){var o=[];return function d(p,v,w){for(var L=w[v],P=0;P<L&&(p.push(w.length>v+1?[]:0),!(w.length<v+1));P++)d(p[P],v+1,w)}(o,0,[3,11]),o}()}function oc(){this.jb=n(3),this.Wc=c([4,8],Io),this.Xc=c([4,17],Io)}function lc(){this.Pc=this.wb=this.Tb=this.zd=0,this.vd=new n(4),this.od=new n(4)}function Ei(){this.ld=this.La=this.dd=this.tc=0}function Do(){this.Na=this.la=0}function cc(){this.Sc=[0,0],this.Eb=[0,0],this.Qc=[0,0],this.ia=this.lc=0}function Es(){this.ad=n(384),this.Za=0,this.Ob=n(16),this.$b=this.Ad=this.ia=this.Gc=this.Hc=this.Dd=0}function dc(){this.uc=this.M=this.Nb=0,this.wa=Array(new Ei),this.Y=0,this.ya=Array(new Es),this.aa=0,this.l=new Ti}function Eo(){this.y=n(16),this.f=n(8),this.ea=n(8)}function uc(){this.cb=this.a=0,this.sc="",this.m=new Ie,this.Od=new Fi,this.Kc=new Ii,this.ed=new lc,this.Qa=new Di,this.Ic=this.$c=this.Aa=0,this.D=new dc,this.Xb=this.Va=this.Hb=this.zb=this.yb=this.Ub=this.za=0,this.Jc=l(8,Ie),this.ia=0,this.pb=l(4,cc),this.Pa=new oc,this.Bd=this.kc=0,this.Ac=[],this.Bc=0,this.zc=[0,0,0,0],this.Gd=Array(new Eo),this.Hd=0,this.rb=Array(new Do),this.sb=0,this.wa=Array(new Ei),this.Y=0,this.oc=[],this.pc=0,this.sa=[],this.ta=0,this.qa=[],this.ra=0,this.Ha=[],this.B=this.R=this.Ia=0,this.Ec=[],this.M=this.ja=this.Vb=this.Fc=0,this.ya=Array(new Es),this.L=this.aa=0,this.gd=c([4,2],Ei),this.ga=null,this.Fa=[],this.Cc=this.qc=this.P=0,this.Gb=[],this.Uc=0,this.mb=[],this.nb=0,this.rc=[],this.Ga=this.Vc=0}function Ti(){this.T=this.U=this.ka=this.height=this.width=0,this.y=[],this.f=[],this.ea=[],this.Rc=this.fa=this.W=this.N=this.O=0,this.ma="void",this.put="VP8IoPutHook",this.ac="VP8IoSetupHook",this.bc="VP8IoTeardownHook",this.ha=this.Kb=0,this.data=[],this.hb=this.ib=this.da=this.o=this.j=this.va=this.v=this.Da=this.ob=this.w=0,this.F=[],this.J=0}function hc(){var o=new uc;return o!=null&&(o.a=0,o.sc="OK",o.cb=0,o.Xb=0,no||(no=Bo)),o}function qt(o,d,p){return o.a==0&&(o.a=d,o.sc=p,o.cb=0),0}function To(o,d,p){return 3<=p&&o[d+0]==157&&o[d+1]==1&&o[d+2]==42}function Mo(o,d){if(o==null)return 0;if(o.a=0,o.sc="OK",d==null)return qt(o,2,"null VP8Io passed to VP8GetHeaders()");var p=d.data,v=d.w,w=d.ha;if(4>w)return qt(o,7,"Truncated header.");var L=p[v+0]|p[v+1]<<8|p[v+2]<<16,P=o.Od;if(P.Rb=!(1&L),P.td=L>>1&7,P.yd=L>>4&1,P.ub=L>>5,3<P.td)return qt(o,3,"Incorrect keyframe parameters.");if(!P.yd)return qt(o,4,"Frame not displayable.");v+=3,w-=3;var F=o.Kc;if(P.Rb){if(7>w)return qt(o,7,"cannot parse picture header");if(!To(p,v,w))return qt(o,3,"Bad code word");F.c=16383&(p[v+4]<<8|p[v+3]),F.Td=p[v+4]>>6,F.i=16383&(p[v+6]<<8|p[v+5]),F.Ud=p[v+6]>>6,v+=7,w-=7,o.za=F.c+15>>4,o.Ub=F.i+15>>4,d.width=F.c,d.height=F.i,d.Da=0,d.j=0,d.v=0,d.va=d.width,d.o=d.height,d.da=0,d.ib=d.width,d.hb=d.height,d.U=d.width,d.T=d.height,i((L=o.Pa).jb,0,255,L.jb.length),e((L=o.Qa)!=null),L.Cb=0,L.Bb=0,L.Fb=1,i(L.Zb,0,0,L.Zb.length),i(L.Lb,0,0,L.Lb)}if(P.ub>w)return qt(o,7,"bad partition length");ce(L=o.m,p,v,P.ub),v+=P.ub,w-=P.ub,P.Rb&&(F.Ld=Q(L),F.Kd=Q(L)),F=o.Qa;var D,O=o.Pa;if(e(L!=null),e(F!=null),F.Cb=Q(L),F.Cb){if(F.Bb=Q(L),Q(L)){for(F.Fb=Q(L),D=0;4>D;++D)F.Zb[D]=Q(L)?pe(L,7):0;for(D=0;4>D;++D)F.Lb[D]=Q(L)?pe(L,6):0}if(F.Bb)for(D=0;3>D;++D)O.jb[D]=Q(L)?ue(L,8):255}else F.Bb=0;if(L.Ka)return qt(o,3,"cannot parse segment header");if((F=o.ed).zd=Q(L),F.Tb=ue(L,6),F.wb=ue(L,3),F.Pc=Q(L),F.Pc&&Q(L)){for(O=0;4>O;++O)Q(L)&&(F.vd[O]=pe(L,6));for(O=0;4>O;++O)Q(L)&&(F.od[O]=pe(L,6))}if(o.L=F.Tb==0?0:F.zd?1:2,L.Ka)return qt(o,3,"cannot parse filter header");var J=w;if(w=D=v,v=D+J,F=J,o.Xb=(1<<ue(o.m,2))-1,J<3*(O=o.Xb))p=7;else{for(D+=3*O,F-=3*O,J=0;J<O;++J){var oe=p[w+0]|p[w+1]<<8|p[w+2]<<16;oe>F&&(oe=F),ce(o.Jc[+J],p,D,oe),D+=oe,F-=oe,w+=3}ce(o.Jc[+O],p,D,F),p=D<v?0:5}if(p!=0)return qt(o,p,"cannot parse partitions");for(p=ue(D=o.m,7),w=Q(D)?pe(D,4):0,v=Q(D)?pe(D,4):0,F=Q(D)?pe(D,4):0,O=Q(D)?pe(D,4):0,D=Q(D)?pe(D,4):0,J=o.Qa,oe=0;4>oe;++oe){if(J.Cb){var le=J.Zb[oe];J.Fb||(le+=p)}else{if(0<oe){o.pb[oe]=o.pb[0];continue}le=p}var ae=o.pb[oe];ae.Sc[0]=Bc[qr(le+w,127)],ae.Sc[1]=Oc[qr(le+0,127)],ae.Eb[0]=2*Bc[qr(le+v,127)],ae.Eb[1]=101581*Oc[qr(le+F,127)]>>16,8>ae.Eb[1]&&(ae.Eb[1]=8),ae.Qc[0]=Bc[qr(le+O,117)],ae.Qc[1]=Oc[qr(le+D,127)],ae.lc=le+D}if(!P.Rb)return qt(o,4,"Not a key frame.");for(Q(L),P=o.Pa,p=0;4>p;++p){for(w=0;8>w;++w)for(v=0;3>v;++v)for(F=0;11>F;++F)O=se(L,Kp[p][w][v][F])?ue(L,8):$p[p][w][v][F],P.Wc[p][w].Yb[v][F]=O;for(w=0;17>w;++w)P.Xc[p][w]=P.Wc[p][Gp[w]]}return o.kc=Q(L),o.kc&&(o.Bd=ue(L,8)),o.cb=1}function Bo(o,d,p,v,w,L,P){var F=d[w].Yb[p];for(p=0;16>w;++w){if(!se(o,F[p+0]))return w;for(;!se(o,F[p+1]);)if(F=d[++w].Yb[0],p=0,w==16)return 16;var D=d[w+1].Yb;if(se(o,F[p+2])){var O=o,J=0;if(se(O,(le=F)[(oe=p)+3]))if(se(O,le[oe+6])){for(F=0,oe=2*(J=se(O,le[oe+8]))+(le=se(O,le[oe+9+J])),J=0,le=Wp[oe];le[F];++F)J+=J+se(O,le[F]);J+=3+(8<<oe)}else se(O,le[oe+7])?(J=7+2*se(O,165),J+=se(O,145)):J=5+se(O,159);else J=se(O,le[oe+4])?3+se(O,le[oe+5]):2;F=D[2]}else J=1,F=D[1];D=P+Hp[w],0>(O=o).b&&V(O);var oe,le=O.b,ae=(oe=O.Ca>>1)-(O.I>>le)>>31;--O.b,O.Ca+=ae,O.Ca|=1,O.I-=(oe+1&ae)<<le,L[D]=((J^ae)-ae)*v[(0<w)+0]}return 16}function Ts(o){var d=o.rb[o.sb-1];d.la=0,d.Na=0,i(o.zc,0,0,o.zc.length),o.ja=0}function fc(o,d){if(o==null)return 0;if(d==null)return qt(o,2,"NULL VP8Io parameter in VP8Decode().");if(!o.cb&&!Mo(o,d))return 0;if(e(o.cb),d.ac==null||d.ac(d)){d.ob&&(o.L=0);var p=ul[o.L];if(o.L==2?(o.yb=0,o.zb=0):(o.yb=d.v-p>>4,o.zb=d.j-p>>4,0>o.yb&&(o.yb=0),0>o.zb&&(o.zb=0)),o.Va=d.o+15+p>>4,o.Hb=d.va+15+p>>4,o.Hb>o.za&&(o.Hb=o.za),o.Va>o.Ub&&(o.Va=o.Ub),0<o.L){var v=o.ed;for(p=0;4>p;++p){var w;if(o.Qa.Cb){var L=o.Qa.Lb[p];o.Qa.Fb||(L+=v.Tb)}else L=v.Tb;for(w=0;1>=w;++w){var P=o.gd[p][w],F=L;if(v.Pc&&(F+=v.vd[0],w&&(F+=v.od[0])),0<(F=0>F?0:63<F?63:F)){var D=F;0<v.wb&&(D=4<v.wb?D>>2:D>>1)>9-v.wb&&(D=9-v.wb),1>D&&(D=1),P.dd=D,P.tc=2*F+D,P.ld=40<=F?2:15<=F?1:0}else P.tc=0;P.La=w}}}p=0}else qt(o,6,"Frame setup failed"),p=o.a;if(p=p==0){if(p){o.$c=0,0<o.Aa||(o.Ic=o1);e:{p=o.Ic,v=4*(D=o.za);var O=32*D,J=D+1,oe=0<o.L?D*(0<o.Aa?2:1):0,le=(o.Aa==2?2:1)*D;if((P=v+832+(w=3*(16*p+ul[o.L])/2*O)+(L=o.Fa!=null&&0<o.Fa.length?o.Kc.c*o.Kc.i:0))!=P)p=0;else{if(P>o.Vb){if(o.Vb=0,o.Ec=n(P),o.Fc=0,o.Ec==null){p=qt(o,1,"no memory during frame initialization.");break e}o.Vb=P}P=o.Ec,F=o.Fc,o.Ac=P,o.Bc=F,F+=v,o.Gd=l(O,Eo),o.Hd=0,o.rb=l(J+1,Do),o.sb=1,o.wa=oe?l(oe,Ei):null,o.Y=0,o.D.Nb=0,o.D.wa=o.wa,o.D.Y=o.Y,0<o.Aa&&(o.D.Y+=D),e(!0),o.oc=P,o.pc=F,F+=832,o.ya=l(le,Es),o.aa=0,o.D.ya=o.ya,o.D.aa=o.aa,o.Aa==2&&(o.D.aa+=D),o.R=16*D,o.B=8*D,D=(O=ul[o.L])*o.R,O=O/2*o.B,o.sa=P,o.ta=F+D,o.qa=o.sa,o.ra=o.ta+16*p*o.R+O,o.Ha=o.qa,o.Ia=o.ra+8*p*o.B+O,o.$c=0,F+=w,o.mb=L?P:null,o.nb=L?F:null,e(F+L<=o.Fc+o.Vb),Ts(o),i(o.Ac,o.Bc,0,v),p=1}}if(p){if(d.ka=0,d.y=o.sa,d.O=o.ta,d.f=o.qa,d.N=o.ra,d.ea=o.Ha,d.Vd=o.Ia,d.fa=o.R,d.Rc=o.B,d.F=null,d.J=0,!rl){for(p=-255;255>=p;++p)Xt[255+p]=0>p?-p:p;for(p=-1020;1020>=p;++p)Ya[1020+p]=-128>p?-128:127<p?127:p;for(p=-112;112>=p;++p)ao[112+p]=-16>p?-16:15<p?15:p;for(p=-255;510>=p;++p)Zi[255+p]=0>p?0:255<p?255:p;rl=1}Ji=gc,Ga=pc,eo=Ro,Nr=mc,Qr=zo,Ut=Oo,Qi=qs,tl=ri,to=_c,ii=Us,si=Pc,vn=qi,oi=Ws,Xi=Yo,li=Go,yn=Ca,ro=$a,Xr=Lc,ma[0]=_a,ma[1]=bc,ma[2]=wc,ma[3]=jc,ma[4]=Wo,ma[5]=Ri,ma[6]=Ho,ma[7]=Os,ma[8]=Nc,ma[9]=kc,xn[0]=qo,xn[1]=yc,xn[2]=Ha,xn[3]=Bi,xn[4]=hr,xn[5]=xc,xn[6]=Uo,Ja[0]=fn,Ja[1]=vc,Ja[2]=Sc,Ja[3]=Rs,Ja[4]=ti,Ja[5]=Ac,Ja[6]=zs,p=1}else p=0}p&&(p=function(ae,we){for(ae.M=0;ae.M<ae.Va;++ae.M){var he,X=ae.Jc[ae.M&ae.Xb],te=ae.m,ye=ae;for(he=0;he<ye.za;++he){var je=te,xe=ye,Oe=xe.Ac,Pe=xe.Bc+4*he,$e=xe.zc,Ce=xe.ya[xe.aa+he];if(xe.Qa.Bb?Ce.$b=se(je,xe.Pa.jb[0])?2+se(je,xe.Pa.jb[2]):se(je,xe.Pa.jb[1]):Ce.$b=0,xe.kc&&(Ce.Ad=se(je,xe.Bd)),Ce.Za=!se(je,145)+0,Ce.Za){var bt=Ce.Ob,wt=0;for(xe=0;4>xe;++xe){var pt,dt=$e[0+xe];for(pt=0;4>pt;++pt){dt=Vp[Oe[Pe+pt]][dt];for(var Lt=xu[se(je,dt[0])];0<Lt;)Lt=xu[2*Lt+se(je,dt[Lt])];dt=-Lt,Oe[Pe+pt]=dt}a(bt,wt,Oe,Pe,4),wt+=4,$e[0+xe]=dt}}else dt=se(je,156)?se(je,128)?1:3:se(je,163)?2:0,Ce.Ob[0]=dt,i(Oe,Pe,dt,4),i($e,0,dt,4);Ce.Dd=se(je,142)?se(je,114)?se(je,183)?1:3:2:0}if(ye.m.Ka)return qt(ae,7,"Premature end-of-partition0 encountered.");for(;ae.ja<ae.za;++ae.ja){if(ye=X,je=(te=ae).rb[te.sb-1],Oe=te.rb[te.sb+te.ja],he=te.ya[te.aa+te.ja],Pe=te.kc?he.Ad:0)je.la=Oe.la=0,he.Za||(je.Na=Oe.Na=0),he.Hc=0,he.Gc=0,he.ia=0;else{var St,nt;if(je=Oe,Oe=ye,Pe=te.Pa.Xc,$e=te.ya[te.aa+te.ja],Ce=te.pb[$e.$b],xe=$e.ad,bt=0,wt=te.rb[te.sb-1],dt=pt=0,i(xe,bt,0,384),$e.Za)var Yt=0,Er=Pe[3];else{Lt=n(16);var Jt=je.Na+wt.Na;if(Jt=no(Oe,Pe[1],Jt,Ce.Eb,0,Lt,0),je.Na=wt.Na=(0<Jt)+0,1<Jt)Ji(Lt,0,xe,bt);else{var Tr=Lt[0]+3>>3;for(Lt=0;256>Lt;Lt+=16)xe[bt+Lt]=Tr}Yt=1,Er=Pe[0]}var jt=15&je.la,Wr=15&wt.la;for(Lt=0;4>Lt;++Lt){var Hr=1&Wr;for(Tr=nt=0;4>Tr;++Tr)jt=jt>>1|(Hr=(Jt=no(Oe,Er,Jt=Hr+(1&jt),Ce.Sc,Yt,xe,bt))>Yt)<<7,nt=nt<<2|(3<Jt?3:1<Jt?2:xe[bt+0]!=0),bt+=16;jt>>=4,Wr=Wr>>1|Hr<<7,pt=(pt<<8|nt)>>>0}for(Er=jt,Yt=Wr>>4,St=0;4>St;St+=2){for(nt=0,jt=je.la>>4+St,Wr=wt.la>>4+St,Lt=0;2>Lt;++Lt){for(Hr=1&Wr,Tr=0;2>Tr;++Tr)Jt=Hr+(1&jt),jt=jt>>1|(Hr=0<(Jt=no(Oe,Pe[2],Jt,Ce.Qc,0,xe,bt)))<<3,nt=nt<<2|(3<Jt?3:1<Jt?2:xe[bt+0]!=0),bt+=16;jt>>=2,Wr=Wr>>1|Hr<<5}dt|=nt<<4*St,Er|=jt<<4<<St,Yt|=(240&Wr)<<St}je.la=Er,wt.la=Yt,$e.Hc=pt,$e.Gc=dt,$e.ia=43690&dt?0:Ce.ia,Pe=!(pt|dt)}if(0<te.L&&(te.wa[te.Y+te.ja]=te.gd[he.$b][he.Za],te.wa[te.Y+te.ja].La|=!Pe),ye.Ka)return qt(ae,7,"Premature end-of-file encountered.")}if(Ts(ae),te=we,ye=1,he=(X=ae).D,je=0<X.L&&X.M>=X.zb&&X.M<=X.Va,X.Aa==0)e:{if(he.M=X.M,he.uc=je,Ys(X,he),ye=1,he=(nt=X.D).Nb,je=(dt=ul[X.L])*X.R,Oe=dt/2*X.B,Lt=16*he*X.R,Tr=8*he*X.B,Pe=X.sa,$e=X.ta-je+Lt,Ce=X.qa,xe=X.ra-Oe+Tr,bt=X.Ha,wt=X.Ia-Oe+Tr,Wr=(jt=nt.M)==0,pt=jt>=X.Va-1,X.Aa==2&&Ys(X,nt),nt.uc)for(Hr=(Jt=X).D.M,e(Jt.D.uc),nt=Jt.yb;nt<Jt.Hb;++nt){Yt=nt,Er=Hr;var ar=(dr=(Ot=Jt).D).Nb;St=Ot.R;var dr=dr.wa[dr.Y+Yt],Sr=Ot.sa,ra=Ot.ta+16*ar*St+16*Yt,Ia=dr.dd,nr=dr.tc;if(nr!=0)if(e(3<=nr),Ot.L==1)0<Yt&&yn(Sr,ra,St,nr+4),dr.La&&Xr(Sr,ra,St,nr),0<Er&&li(Sr,ra,St,nr+4),dr.La&&ro(Sr,ra,St,nr);else{var Qa=Ot.B,ci=Ot.qa,es=Ot.ra+8*ar*Qa+8*Yt,jn=Ot.Ha,Ot=Ot.Ia+8*ar*Qa+8*Yt;ar=dr.ld,0<Yt&&(tl(Sr,ra,St,nr+4,Ia,ar),ii(ci,es,jn,Ot,Qa,nr+4,Ia,ar)),dr.La&&(vn(Sr,ra,St,nr,Ia,ar),Xi(ci,es,jn,Ot,Qa,nr,Ia,ar)),0<Er&&(Qi(Sr,ra,St,nr+4,Ia,ar),to(ci,es,jn,Ot,Qa,nr+4,Ia,ar)),dr.La&&(si(Sr,ra,St,nr,Ia,ar),oi(ci,es,jn,Ot,Qa,nr,Ia,ar))}}if(X.ia&&alert("todo:DitherRow"),te.put!=null){if(nt=16*jt,jt=16*(jt+1),Wr?(te.y=X.sa,te.O=X.ta+Lt,te.f=X.qa,te.N=X.ra+Tr,te.ea=X.Ha,te.W=X.Ia+Tr):(nt-=dt,te.y=Pe,te.O=$e,te.f=Ce,te.N=xe,te.ea=bt,te.W=wt),pt||(jt-=dt),jt>te.o&&(jt=te.o),te.F=null,te.J=null,X.Fa!=null&&0<X.Fa.length&&nt<jt&&(te.J=Ks(X,te,nt,jt-nt),te.F=X.mb,te.F==null&&te.F.length==0)){ye=qt(X,3,"Could not decode alpha data.");break e}nt<te.j&&(dt=te.j-nt,nt=te.j,e(!(1&dt)),te.O+=X.R*dt,te.N+=X.B*(dt>>1),te.W+=X.B*(dt>>1),te.F!=null&&(te.J+=te.width*dt)),nt<jt&&(te.O+=te.v,te.N+=te.v>>1,te.W+=te.v>>1,te.F!=null&&(te.J+=te.v),te.ka=nt-te.j,te.U=te.va-te.v,te.T=jt-nt,ye=te.put(te))}he+1!=X.Ic||pt||(a(X.sa,X.ta-je,Pe,$e+16*X.R,je),a(X.qa,X.ra-Oe,Ce,xe+8*X.B,Oe),a(X.Ha,X.Ia-Oe,bt,wt+8*X.B,Oe))}if(!ye)return qt(ae,6,"Output aborted.")}return 1}(o,d)),d.bc!=null&&d.bc(d),p&=1}return p?(o.cb=0,p):0}function ha(o,d,p,v,w){w=o[d+p+32*v]+(w>>3),o[d+p+32*v]=-256&w?0>w?0:255:w}function Mi(o,d,p,v,w,L){ha(o,d,0,p,v+w),ha(o,d,1,p,v+L),ha(o,d,2,p,v-L),ha(o,d,3,p,v-w)}function Fr(o){return(20091*o>>16)+o}function Ms(o,d,p,v){var w,L=0,P=n(16);for(w=0;4>w;++w){var F=o[d+0]+o[d+8],D=o[d+0]-o[d+8],O=(35468*o[d+4]>>16)-Fr(o[d+12]),J=Fr(o[d+4])+(35468*o[d+12]>>16);P[L+0]=F+J,P[L+1]=D+O,P[L+2]=D-O,P[L+3]=F-J,L+=4,d++}for(w=L=0;4>w;++w)F=(o=P[L+0]+4)+P[L+8],D=o-P[L+8],O=(35468*P[L+4]>>16)-Fr(P[L+12]),ha(p,v,0,0,F+(J=Fr(P[L+4])+(35468*P[L+12]>>16))),ha(p,v,1,0,D+O),ha(p,v,2,0,D-O),ha(p,v,3,0,F-J),L++,v+=32}function Oo(o,d,p,v){var w=o[d+0]+4,L=35468*o[d+4]>>16,P=Fr(o[d+4]),F=35468*o[d+1]>>16;Mi(p,v,0,w+P,o=Fr(o[d+1]),F),Mi(p,v,1,w+L,o,F),Mi(p,v,2,w-L,o,F),Mi(p,v,3,w-P,o,F)}function pc(o,d,p,v,w){Ms(o,d,p,v),w&&Ms(o,d+16,p,v+4)}function Ro(o,d,p,v){Ga(o,d+0,p,v,1),Ga(o,d+32,p,v+128,1)}function mc(o,d,p,v){var w;for(o=o[d+0]+4,w=0;4>w;++w)for(d=0;4>d;++d)ha(p,v,d,w,o)}function zo(o,d,p,v){o[d+0]&&Nr(o,d+0,p,v),o[d+16]&&Nr(o,d+16,p,v+4),o[d+32]&&Nr(o,d+32,p,v+128),o[d+48]&&Nr(o,d+48,p,v+128+4)}function gc(o,d,p,v){var w,L=n(16);for(w=0;4>w;++w){var P=o[d+0+w]+o[d+12+w],F=o[d+4+w]+o[d+8+w],D=o[d+4+w]-o[d+8+w],O=o[d+0+w]-o[d+12+w];L[0+w]=P+F,L[8+w]=P-F,L[4+w]=O+D,L[12+w]=O-D}for(w=0;4>w;++w)P=(o=L[0+4*w]+3)+L[3+4*w],F=L[1+4*w]+L[2+4*w],D=L[1+4*w]-L[2+4*w],O=o-L[3+4*w],p[v+0]=P+F>>3,p[v+16]=O+D>>3,p[v+32]=P-F>>3,p[v+48]=O-D>>3,v+=64}function Bs(o,d,p){var v,w=d-32,L=Ur,P=255-o[w-1];for(v=0;v<p;++v){var F,D=L,O=P+o[d-1];for(F=0;F<p;++F)o[d+F]=D[O+o[w+F]];d+=32}}function bc(o,d){Bs(o,d,4)}function vc(o,d){Bs(o,d,8)}function yc(o,d){Bs(o,d,16)}function Ha(o,d){var p;for(p=0;16>p;++p)a(o,d+32*p,o,d-32,16)}function Bi(o,d){var p;for(p=16;0<p;--p)i(o,d,o[d-1],16),d+=32}function Oi(o,d,p){var v;for(v=0;16>v;++v)i(d,p+32*v,o,16)}function qo(o,d){var p,v=16;for(p=0;16>p;++p)v+=o[d-1+32*p]+o[d+p-32];Oi(v>>5,o,d)}function hr(o,d){var p,v=8;for(p=0;16>p;++p)v+=o[d-1+32*p];Oi(v>>4,o,d)}function xc(o,d){var p,v=8;for(p=0;16>p;++p)v+=o[d+p-32];Oi(v>>4,o,d)}function Uo(o,d){Oi(128,o,d)}function Qe(o,d,p){return o+2*d+p+2>>2}function wc(o,d){var p,v=d-32;for(v=new Uint8Array([Qe(o[v-1],o[v+0],o[v+1]),Qe(o[v+0],o[v+1],o[v+2]),Qe(o[v+1],o[v+2],o[v+3]),Qe(o[v+2],o[v+3],o[v+4])]),p=0;4>p;++p)a(o,d+32*p,v,0,v.length)}function jc(o,d){var p=o[d-1],v=o[d-1+32],w=o[d-1+64],L=o[d-1+96];Ne(o,d+0,16843009*Qe(o[d-1-32],p,v)),Ne(o,d+32,16843009*Qe(p,v,w)),Ne(o,d+64,16843009*Qe(v,w,L)),Ne(o,d+96,16843009*Qe(w,L,L))}function _a(o,d){var p,v=4;for(p=0;4>p;++p)v+=o[d+p-32]+o[d-1+32*p];for(v>>=3,p=0;4>p;++p)i(o,d+32*p,v,4)}function Wo(o,d){var p=o[d-1+0],v=o[d-1+32],w=o[d-1+64],L=o[d-1-32],P=o[d+0-32],F=o[d+1-32],D=o[d+2-32],O=o[d+3-32];o[d+0+96]=Qe(v,w,o[d-1+96]),o[d+1+96]=o[d+0+64]=Qe(p,v,w),o[d+2+96]=o[d+1+64]=o[d+0+32]=Qe(L,p,v),o[d+3+96]=o[d+2+64]=o[d+1+32]=o[d+0+0]=Qe(P,L,p),o[d+3+64]=o[d+2+32]=o[d+1+0]=Qe(F,P,L),o[d+3+32]=o[d+2+0]=Qe(D,F,P),o[d+3+0]=Qe(O,D,F)}function Ho(o,d){var p=o[d+1-32],v=o[d+2-32],w=o[d+3-32],L=o[d+4-32],P=o[d+5-32],F=o[d+6-32],D=o[d+7-32];o[d+0+0]=Qe(o[d+0-32],p,v),o[d+1+0]=o[d+0+32]=Qe(p,v,w),o[d+2+0]=o[d+1+32]=o[d+0+64]=Qe(v,w,L),o[d+3+0]=o[d+2+32]=o[d+1+64]=o[d+0+96]=Qe(w,L,P),o[d+3+32]=o[d+2+64]=o[d+1+96]=Qe(L,P,F),o[d+3+64]=o[d+2+96]=Qe(P,F,D),o[d+3+96]=Qe(F,D,D)}function Ri(o,d){var p=o[d-1+0],v=o[d-1+32],w=o[d-1+64],L=o[d-1-32],P=o[d+0-32],F=o[d+1-32],D=o[d+2-32],O=o[d+3-32];o[d+0+0]=o[d+1+64]=L+P+1>>1,o[d+1+0]=o[d+2+64]=P+F+1>>1,o[d+2+0]=o[d+3+64]=F+D+1>>1,o[d+3+0]=D+O+1>>1,o[d+0+96]=Qe(w,v,p),o[d+0+64]=Qe(v,p,L),o[d+0+32]=o[d+1+96]=Qe(p,L,P),o[d+1+32]=o[d+2+96]=Qe(L,P,F),o[d+2+32]=o[d+3+96]=Qe(P,F,D),o[d+3+32]=Qe(F,D,O)}function Os(o,d){var p=o[d+0-32],v=o[d+1-32],w=o[d+2-32],L=o[d+3-32],P=o[d+4-32],F=o[d+5-32],D=o[d+6-32],O=o[d+7-32];o[d+0+0]=p+v+1>>1,o[d+1+0]=o[d+0+64]=v+w+1>>1,o[d+2+0]=o[d+1+64]=w+L+1>>1,o[d+3+0]=o[d+2+64]=L+P+1>>1,o[d+0+32]=Qe(p,v,w),o[d+1+32]=o[d+0+96]=Qe(v,w,L),o[d+2+32]=o[d+1+96]=Qe(w,L,P),o[d+3+32]=o[d+2+96]=Qe(L,P,F),o[d+3+64]=Qe(P,F,D),o[d+3+96]=Qe(F,D,O)}function kc(o,d){var p=o[d-1+0],v=o[d-1+32],w=o[d-1+64],L=o[d-1+96];o[d+0+0]=p+v+1>>1,o[d+2+0]=o[d+0+32]=v+w+1>>1,o[d+2+32]=o[d+0+64]=w+L+1>>1,o[d+1+0]=Qe(p,v,w),o[d+3+0]=o[d+1+32]=Qe(v,w,L),o[d+3+32]=o[d+1+64]=Qe(w,L,L),o[d+3+64]=o[d+2+64]=o[d+0+96]=o[d+1+96]=o[d+2+96]=o[d+3+96]=L}function Nc(o,d){var p=o[d-1+0],v=o[d-1+32],w=o[d-1+64],L=o[d-1+96],P=o[d-1-32],F=o[d+0-32],D=o[d+1-32],O=o[d+2-32];o[d+0+0]=o[d+2+32]=p+P+1>>1,o[d+0+32]=o[d+2+64]=v+p+1>>1,o[d+0+64]=o[d+2+96]=w+v+1>>1,o[d+0+96]=L+w+1>>1,o[d+3+0]=Qe(F,D,O),o[d+2+0]=Qe(P,F,D),o[d+1+0]=o[d+3+32]=Qe(p,P,F),o[d+1+32]=o[d+3+64]=Qe(v,p,P),o[d+1+64]=o[d+3+96]=Qe(w,v,p),o[d+1+96]=Qe(L,w,v)}function Sc(o,d){var p;for(p=0;8>p;++p)a(o,d+32*p,o,d-32,8)}function Rs(o,d){var p;for(p=0;8>p;++p)i(o,d,o[d-1],8),d+=32}function ei(o,d,p){var v;for(v=0;8>v;++v)i(d,p+32*v,o,8)}function fn(o,d){var p,v=8;for(p=0;8>p;++p)v+=o[d+p-32]+o[d-1+32*p];ei(v>>4,o,d)}function Ac(o,d){var p,v=4;for(p=0;8>p;++p)v+=o[d+p-32];ei(v>>3,o,d)}function ti(o,d){var p,v=4;for(p=0;8>p;++p)v+=o[d-1+32*p];ei(v>>3,o,d)}function zs(o,d){ei(128,o,d)}function zi(o,d,p){var v=o[d-p],w=o[d+0],L=3*(w-v)+Ic[1020+o[d-2*p]-o[d+p]],P=al[112+(L+4>>3)];o[d-p]=Ur[255+v+al[112+(L+3>>3)]],o[d+0]=Ur[255+w-P]}function $o(o,d,p,v){var w=o[d+0],L=o[d+p];return ea[255+o[d-2*p]-o[d-p]]>v||ea[255+L-w]>v}function Vo(o,d,p,v){return 4*ea[255+o[d-p]-o[d+0]]+ea[255+o[d-2*p]-o[d+p]]<=v}function Ko(o,d,p,v,w){var L=o[d-3*p],P=o[d-2*p],F=o[d-p],D=o[d+0],O=o[d+p],J=o[d+2*p],oe=o[d+3*p];return 4*ea[255+F-D]+ea[255+P-O]>v?0:ea[255+o[d-4*p]-L]<=w&&ea[255+L-P]<=w&&ea[255+P-F]<=w&&ea[255+oe-J]<=w&&ea[255+J-O]<=w&&ea[255+O-D]<=w}function Go(o,d,p,v){var w=2*v+1;for(v=0;16>v;++v)Vo(o,d+v,p,w)&&zi(o,d+v,p)}function Ca(o,d,p,v){var w=2*v+1;for(v=0;16>v;++v)Vo(o,d+v*p,1,w)&&zi(o,d+v*p,1)}function $a(o,d,p,v){var w;for(w=3;0<w;--w)Go(o,d+=4*p,p,v)}function Lc(o,d,p,v){var w;for(w=3;0<w;--w)Ca(o,d+=4,p,v)}function pn(o,d,p,v,w,L,P,F){for(L=2*L+1;0<w--;){if(Ko(o,d,p,L,P))if($o(o,d,p,F))zi(o,d,p);else{var D=o,O=d,J=p,oe=D[O-2*J],le=D[O-J],ae=D[O+0],we=D[O+J],he=D[O+2*J],X=27*(ye=Ic[1020+3*(ae-le)+Ic[1020+oe-we]])+63>>7,te=18*ye+63>>7,ye=9*ye+63>>7;D[O-3*J]=Ur[255+D[O-3*J]+ye],D[O-2*J]=Ur[255+oe+te],D[O-J]=Ur[255+le+X],D[O+0]=Ur[255+ae-X],D[O+J]=Ur[255+we-te],D[O+2*J]=Ur[255+he-ye]}d+=v}}function fa(o,d,p,v,w,L,P,F){for(L=2*L+1;0<w--;){if(Ko(o,d,p,L,P))if($o(o,d,p,F))zi(o,d,p);else{var D=o,O=d,J=p,oe=D[O-J],le=D[O+0],ae=D[O+J],we=al[112+((he=3*(le-oe))+4>>3)],he=al[112+(he+3>>3)],X=we+1>>1;D[O-2*J]=Ur[255+D[O-2*J]+X],D[O-J]=Ur[255+oe+he],D[O+0]=Ur[255+le-we],D[O+J]=Ur[255+ae-X]}d+=v}}function qs(o,d,p,v,w,L){pn(o,d,p,1,16,v,w,L)}function ri(o,d,p,v,w,L){pn(o,d,1,p,16,v,w,L)}function Pc(o,d,p,v,w,L){var P;for(P=3;0<P;--P)fa(o,d+=4*p,p,1,16,v,w,L)}function qi(o,d,p,v,w,L){var P;for(P=3;0<P;--P)fa(o,d+=4,1,p,16,v,w,L)}function _c(o,d,p,v,w,L,P,F){pn(o,d,w,1,8,L,P,F),pn(p,v,w,1,8,L,P,F)}function Us(o,d,p,v,w,L,P,F){pn(o,d,1,w,8,L,P,F),pn(p,v,1,w,8,L,P,F)}function Ws(o,d,p,v,w,L,P,F){fa(o,d+4*w,w,1,8,L,P,F),fa(p,v+4*w,w,1,8,L,P,F)}function Yo(o,d,p,v,w,L,P,F){fa(o,d+4,1,w,8,L,P,F),fa(p,v+4,1,w,8,L,P,F)}function Ui(){this.ba=new oa,this.ec=[],this.cc=[],this.Mc=[],this.Dc=this.Nc=this.dc=this.fc=0,this.Oa=new Mt,this.memory=0,this.Ib="OutputFunc",this.Jb="OutputAlphaFunc",this.Nd="OutputRowFunc"}function Hs(){this.data=[],this.offset=this.kd=this.ha=this.w=0,this.na=[],this.xa=this.gb=this.Ja=this.Sa=this.P=0}function $s(){this.nc=this.Ea=this.b=this.hc=0,this.K=[],this.w=0}function Jo(){this.ua=0,this.Wa=new W,this.vb=new W,this.md=this.xc=this.wc=0,this.vc=[],this.Wb=0,this.Ya=new H,this.yc=new T}function Cc(){this.xb=this.a=0,this.l=new Ti,this.ca=new oa,this.V=[],this.Ba=0,this.Ta=[],this.Ua=0,this.m=new C,this.Pb=0,this.wd=new C,this.Ma=this.$=this.C=this.i=this.c=this.xd=0,this.s=new Jo,this.ab=0,this.gc=l(4,$s),this.Oc=0}function Wi(){this.Lc=this.Z=this.$a=this.i=this.c=0,this.l=new Ti,this.ic=0,this.ca=[],this.tb=0,this.qd=null,this.rd=0}function ai(o,d,p,v,w,L,P){for(o=o==null?0:o[d+0],d=0;d<P;++d)w[L+d]=o+p[v+d]&255,o=w[L+d]}function Vs(o,d,p,v,w,L,P){var F;if(o==null)ai(null,null,p,v,w,L,P);else for(F=0;F<P;++F)w[L+F]=o[d+F]+p[v+F]&255}function mn(o,d,p,v,w,L,P){if(o==null)ai(null,null,p,v,w,L,P);else{var F,D=o[d+0],O=D,J=D;for(F=0;F<P;++F)O=J+(D=o[d+F])-O,J=p[v+F]+(-256&O?0>O?0:255:O)&255,O=D,w[L+F]=J}}function Ks(o,d,p,v){var w=d.width,L=d.o;if(e(o!=null&&d!=null),0>p||0>=v||p+v>L)return null;if(!o.Cc){if(o.ga==null){var P;if(o.ga=new Wi,(P=o.ga==null)||(P=d.width*d.o,e(o.Gb.length==0),o.Gb=n(P),o.Uc=0,o.Gb==null?P=0:(o.mb=o.Gb,o.nb=o.Uc,o.rc=null,P=1),P=!P),!P){P=o.ga;var F=o.Fa,D=o.P,O=o.qc,J=o.mb,oe=o.nb,le=D+1,ae=O-1,we=P.l;if(e(F!=null&&J!=null&&d!=null),wn[0]=null,wn[1]=ai,wn[2]=Vs,wn[3]=mn,P.ca=J,P.tb=oe,P.c=d.width,P.i=d.height,e(0<P.c&&0<P.i),1>=O)d=0;else if(P.$a=F[D+0]>>0&3,P.Z=F[D+0]>>2&3,P.Lc=F[D+0]>>4&3,D=F[D+0]>>6&3,0>P.$a||1<P.$a||4<=P.Z||1<P.Lc||D)d=0;else if(we.put=Na,we.ac=lr,we.bc=Sa,we.ma=P,we.width=d.width,we.height=d.height,we.Da=d.Da,we.v=d.v,we.va=d.va,we.j=d.j,we.o=d.o,P.$a)e:{e(P.$a==1),d=Yr();t:for(;;){if(d==null){d=0;break e}if(e(P!=null),P.mc=d,d.c=P.c,d.i=P.i,d.l=P.l,d.l.ma=P,d.l.width=P.c,d.l.height=P.i,d.a=0,de(d.m,F,le,ae),!Pa(P.c,P.i,1,d,null)||(d.ab==1&&d.gc[0].hc==3&&Wa(d.s)?(P.ic=1,F=d.c*d.i,d.Ta=null,d.Ua=0,d.V=n(F),d.Ba=0,d.V==null?(d.a=1,d=0):d=1):(P.ic=0,d=Zn(d,P.c)),!d))break t;d=1;break e}P.mc=null,d=0}else d=ae>=P.c*P.i;P=!d}if(P)return null;o.ga.Lc!=1?o.Ga=0:v=L-p}e(o.ga!=null),e(p+v<=L);e:{if(d=(F=o.ga).c,L=F.l.o,F.$a==0){if(le=o.rc,ae=o.Vc,we=o.Fa,D=o.P+1+p*d,O=o.mb,J=o.nb+p*d,e(D<=o.P+o.qc),F.Z!=0)for(e(wn[F.Z]!=null),P=0;P<v;++P)wn[F.Z](le,ae,we,D,O,J,d),le=O,ae=J,J+=d,D+=d;else for(P=0;P<v;++P)a(O,J,we,D,d),le=O,ae=J,J+=d,D+=d;o.rc=le,o.Vc=ae}else{if(e(F.mc!=null),d=p+v,e((P=F.mc)!=null),e(d<=P.i),P.C>=d)d=1;else if(F.ic||ie(),F.ic){F=P.V,le=P.Ba,ae=P.c;var he=P.i,X=(we=1,D=P.$/ae,O=P.$%ae,J=P.m,oe=P.s,P.$),te=ae*he,ye=ae*d,je=oe.wc,xe=X<ye?Kt(oe,O,D):null;e(X<=te),e(d<=he),e(Wa(oe));t:for(;;){for(;!J.h&&X<ye;){if(O&je||(xe=Kt(oe,O,D)),e(xe!=null),re(J),256>(he=Cr(xe.G[0],xe.H[0],J)))F[le+X]=he,++X,++O>=ae&&(O=0,++D<=d&&!(D%16)&&da(P,D));else{if(!(280>he)){we=0;break t}he=la(he-256,J);var Oe,Pe=Cr(xe.G[4],xe.H[4],J);if(re(J),!(X>=(Pe=Aa(ae,Pe=la(Pe,J)))&&te-X>=he)){we=0;break t}for(Oe=0;Oe<he;++Oe)F[le+X+Oe]=F[le+X+Oe-Pe];for(X+=he,O+=he;O>=ae;)O-=ae,++D<=d&&!(D%16)&&da(P,D);X<ye&&O&je&&(xe=Kt(oe,O,D))}e(J.h==U(J))}da(P,D>d?d:D);break t}!we||J.h&&X<te?(we=0,P.a=J.h?5:3):P.$=X,d=we}else d=ua(P,P.V,P.Ba,P.c,P.i,d,Ci);if(!d){v=0;break e}}p+v>=L&&(o.Cc=1),v=1}if(!v)return null;if(o.Cc&&((v=o.ga)!=null&&(v.mc=null),o.ga=null,0<o.Ga))return alert("todo:WebPDequantizeLevels"),null}return o.nb+p*w}function h(o,d,p,v,w,L){for(;0<w--;){var P,F=o,D=d+(p?1:0),O=o,J=d+(p?0:3);for(P=0;P<v;++P){var oe=O[J+4*P];oe!=255&&(oe*=32897,F[D+4*P+0]=F[D+4*P+0]*oe>>23,F[D+4*P+1]=F[D+4*P+1]*oe>>23,F[D+4*P+2]=F[D+4*P+2]*oe>>23)}d+=L}}function j(o,d,p,v,w){for(;0<v--;){var L;for(L=0;L<p;++L){var P=o[d+2*L+0],F=15&(O=o[d+2*L+1]),D=4369*F,O=(240&O|O>>4)*D>>16;o[d+2*L+0]=(240&P|P>>4)*D>>16&240|(15&P|P<<4)*D>>16>>4&15,o[d+2*L+1]=240&O|F}d+=w}}function q(o,d,p,v,w,L,P,F){var D,O,J=255;for(O=0;O<w;++O){for(D=0;D<v;++D){var oe=o[d+D];L[P+4*D]=oe,J&=oe}d+=p,P+=F}return J!=255}function G(o,d,p,v,w){var L;for(L=0;L<w;++L)p[v+L]=o[d+L]>>8}function ie(){Zr=h,_t=j,Ct=q,Wt=G}function ge(o,d,p){S[o]=function(v,w,L,P,F,D,O,J,oe,le,ae,we,he,X,te,ye,je){var xe,Oe=je-1>>1,Pe=F[D+0]|O[J+0]<<16,$e=oe[le+0]|ae[we+0]<<16;e(v!=null);var Ce=3*Pe+$e+131074>>2;for(d(v[w+0],255&Ce,Ce>>16,he,X),L!=null&&(Ce=3*$e+Pe+131074>>2,d(L[P+0],255&Ce,Ce>>16,te,ye)),xe=1;xe<=Oe;++xe){var bt=F[D+xe]|O[J+xe]<<16,wt=oe[le+xe]|ae[we+xe]<<16,pt=Pe+bt+$e+wt+524296,dt=pt+2*(bt+$e)>>3;Ce=dt+Pe>>1,Pe=(pt=pt+2*(Pe+wt)>>3)+bt>>1,d(v[w+2*xe-1],255&Ce,Ce>>16,he,X+(2*xe-1)*p),d(v[w+2*xe-0],255&Pe,Pe>>16,he,X+(2*xe-0)*p),L!=null&&(Ce=pt+$e>>1,Pe=dt+wt>>1,d(L[P+2*xe-1],255&Ce,Ce>>16,te,ye+(2*xe-1)*p),d(L[P+2*xe+0],255&Pe,Pe>>16,te,ye+(2*xe+0)*p)),Pe=bt,$e=wt}1&je||(Ce=3*Pe+$e+131074>>2,d(v[w+je-1],255&Ce,Ce>>16,he,X+(je-1)*p),L!=null&&(Ce=3*$e+Pe+131074>>2,d(L[P+je-1],255&Ce,Ce>>16,te,ye+(je-1)*p)))}}function ke(){ta[nl]=Jp,ta[il]=ju,ta[bu]=Qp,ta[sl]=ku,ta[ol]=Nu,ta[Dc]=Su,ta[vu]=Xp,ta[Ec]=ju,ta[Tc]=ku,ta[ll]=Nu,ta[Mc]=Su}function Be(o){return o&-16384?0>o?0:255:o>>Zp}function He(o,d){return Be((19077*o>>8)+(26149*d>>8)-14234)}function at(o,d,p){return Be((19077*o>>8)-(6419*d>>8)-(13320*p>>8)+8708)}function et(o,d){return Be((19077*o>>8)+(33050*d>>8)-17685)}function ht(o,d,p,v,w){v[w+0]=He(o,p),v[w+1]=at(o,d,p),v[w+2]=et(o,d)}function Et(o,d,p,v,w){v[w+0]=et(o,d),v[w+1]=at(o,d,p),v[w+2]=He(o,p)}function Bt(o,d,p,v,w){var L=at(o,d,p);d=L<<3&224|et(o,d)>>3,v[w+0]=248&He(o,p)|L>>5,v[w+1]=d}function Gt(o,d,p,v,w){var L=240&et(o,d)|15;v[w+0]=240&He(o,p)|at(o,d,p)>>4,v[w+1]=L}function fr(o,d,p,v,w){v[w+0]=255,ht(o,d,p,v,w+1)}function rr(o,d,p,v,w){Et(o,d,p,v,w),v[w+3]=255}function pa(o,d,p,v,w){ht(o,d,p,v,w),v[w+3]=255}function qr(o,d){return 0>o?0:o>d?d:o}function Fa(o,d,p){S[o]=function(v,w,L,P,F,D,O,J,oe){for(var le=J+(-2&oe)*p;J!=le;)d(v[w+0],L[P+0],F[D+0],O,J),d(v[w+1],L[P+0],F[D+0],O,J+p),w+=2,++P,++D,J+=2*p;1&oe&&d(v[w+0],L[P+0],F[D+0],O,J)}}function Qo(o,d,p){return p==0?o==0?d==0?6:5:d==0?4:0:p}function Gs(o,d,p,v,w){switch(o>>>30){case 3:Ga(d,p,v,w,0);break;case 2:Ut(d,p,v,w);break;case 1:Nr(d,p,v,w)}}function Ys(o,d){var p,v,w=d.M,L=d.Nb,P=o.oc,F=o.pc+40,D=o.oc,O=o.pc+584,J=o.oc,oe=o.pc+600;for(p=0;16>p;++p)P[F+32*p-1]=129;for(p=0;8>p;++p)D[O+32*p-1]=129,J[oe+32*p-1]=129;for(0<w?P[F-1-32]=D[O-1-32]=J[oe-1-32]=129:(i(P,F-32-1,127,21),i(D,O-32-1,127,9),i(J,oe-32-1,127,9)),v=0;v<o.za;++v){var le=d.ya[d.aa+v];if(0<v){for(p=-1;16>p;++p)a(P,F+32*p-4,P,F+32*p+12,4);for(p=-1;8>p;++p)a(D,O+32*p-4,D,O+32*p+4,4),a(J,oe+32*p-4,J,oe+32*p+4,4)}var ae=o.Gd,we=o.Hd+v,he=le.ad,X=le.Hc;if(0<w&&(a(P,F-32,ae[we].y,0,16),a(D,O-32,ae[we].f,0,8),a(J,oe-32,ae[we].ea,0,8)),le.Za){var te=P,ye=F-32+16;for(0<w&&(v>=o.za-1?i(te,ye,ae[we].y[15],4):a(te,ye,ae[we+1].y,0,4)),p=0;4>p;p++)te[ye+128+p]=te[ye+256+p]=te[ye+384+p]=te[ye+0+p];for(p=0;16>p;++p,X<<=2)te=P,ye=F+Lu[p],ma[le.Ob[p]](te,ye),Gs(X,he,16*+p,te,ye)}else if(te=Qo(v,w,le.Ob[0]),xn[te](P,F),X!=0)for(p=0;16>p;++p,X<<=2)Gs(X,he,16*+p,P,F+Lu[p]);for(p=le.Gc,te=Qo(v,w,le.Dd),Ja[te](D,O),Ja[te](J,oe),X=he,te=D,ye=O,255&(le=p>>0)&&(170&le?eo(X,256,te,ye):Qr(X,256,te,ye)),le=J,X=oe,255&(p>>=8)&&(170&p?eo(he,320,le,X):Qr(he,320,le,X)),w<o.Ub-1&&(a(ae[we].y,0,P,F+480,16),a(ae[we].f,0,D,O+224,8),a(ae[we].ea,0,J,oe+224,8)),p=8*L*o.B,ae=o.sa,we=o.ta+16*v+16*L*o.R,he=o.qa,le=o.ra+8*v+p,X=o.Ha,te=o.Ia+8*v+p,p=0;16>p;++p)a(ae,we+p*o.R,P,F+32*p,16);for(p=0;8>p;++p)a(he,le+p*o.B,D,O+32*p,8),a(X,te+p*o.B,J,oe+32*p,8)}}function Hi(o,d,p,v,w,L,P,F,D){var O=[0],J=[0],oe=0,le=D!=null?D.kd:0,ae=D??new Hs;if(o==null||12>p)return 7;ae.data=o,ae.w=d,ae.ha=p,d=[d],p=[p],ae.gb=[ae.gb];e:{var we=d,he=p,X=ae.gb;if(e(o!=null),e(he!=null),e(X!=null),X[0]=0,12<=he[0]&&!r(o,we[0],"RIFF")){if(r(o,we[0]+8,"WEBP")){X=3;break e}var te=_e(o,we[0]+4);if(12>te||4294967286<te){X=3;break e}if(le&&te>he[0]-8){X=7;break e}X[0]=te,we[0]+=12,he[0]-=12}X=0}if(X!=0)return X;for(te=0<ae.gb[0],p=p[0];;){e:{var ye=o;he=d,X=p;var je=O,xe=J,Oe=we=[0];if((Ce=oe=[oe])[0]=0,8>X[0])X=7;else{if(!r(ye,he[0],"VP8X")){if(_e(ye,he[0]+4)!=10){X=3;break e}if(18>X[0]){X=7;break e}var Pe=_e(ye,he[0]+8),$e=1+De(ye,he[0]+12);if(2147483648<=$e*(ye=1+De(ye,he[0]+15))){X=3;break e}Oe!=null&&(Oe[0]=Pe),je!=null&&(je[0]=$e),xe!=null&&(xe[0]=ye),he[0]+=18,X[0]-=18,Ce[0]=1}X=0}}if(oe=oe[0],we=we[0],X!=0)return X;if(he=!!(2&we),!te&&oe)return 3;if(L!=null&&(L[0]=!!(16&we)),P!=null&&(P[0]=he),F!=null&&(F[0]=0),P=O[0],we=J[0],oe&&he&&D==null){X=0;break}if(4>p){X=7;break}if(te&&oe||!te&&!oe&&!r(o,d[0],"ALPH")){p=[p],ae.na=[ae.na],ae.P=[ae.P],ae.Sa=[ae.Sa];e:{Pe=o,X=d,te=p;var Ce=ae.gb;je=ae.na,xe=ae.P,Oe=ae.Sa,$e=22,e(Pe!=null),e(te!=null),ye=X[0];var bt=te[0];for(e(je!=null),e(Oe!=null),je[0]=null,xe[0]=null,Oe[0]=0;;){if(X[0]=ye,te[0]=bt,8>bt){X=7;break e}var wt=_e(Pe,ye+4);if(4294967286<wt){X=3;break e}var pt=8+wt+1&-2;if($e+=pt,0<Ce&&$e>Ce){X=3;break e}if(!r(Pe,ye,"VP8 ")||!r(Pe,ye,"VP8L")){X=0;break e}if(bt[0]<pt){X=7;break e}r(Pe,ye,"ALPH")||(je[0]=Pe,xe[0]=ye+8,Oe[0]=wt),ye+=pt,bt-=pt}}if(p=p[0],ae.na=ae.na[0],ae.P=ae.P[0],ae.Sa=ae.Sa[0],X!=0)break}p=[p],ae.Ja=[ae.Ja],ae.xa=[ae.xa];e:if(Ce=o,X=d,te=p,je=ae.gb[0],xe=ae.Ja,Oe=ae.xa,Pe=X[0],ye=!r(Ce,Pe,"VP8 "),$e=!r(Ce,Pe,"VP8L"),e(Ce!=null),e(te!=null),e(xe!=null),e(Oe!=null),8>te[0])X=7;else{if(ye||$e){if(Ce=_e(Ce,Pe+4),12<=je&&Ce>je-12){X=3;break e}if(le&&Ce>te[0]-8){X=7;break e}xe[0]=Ce,X[0]+=8,te[0]-=8,Oe[0]=$e}else Oe[0]=5<=te[0]&&Ce[Pe+0]==47&&!(Ce[Pe+4]>>5),xe[0]=te[0];X=0}if(p=p[0],ae.Ja=ae.Ja[0],ae.xa=ae.xa[0],d=d[0],X!=0)break;if(4294967286<ae.Ja)return 3;if(F==null||he||(F[0]=ae.xa?2:1),P=[P],we=[we],ae.xa){if(5>p){X=7;break}F=P,le=we,he=L,o==null||5>p?o=0:5<=p&&o[d+0]==47&&!(o[d+4]>>5)?(te=[0],Ce=[0],je=[0],de(xe=new C,o,d,p),Ke(xe,te,Ce,je)?(F!=null&&(F[0]=te[0]),le!=null&&(le[0]=Ce[0]),he!=null&&(he[0]=je[0]),o=1):o=0):o=0}else{if(10>p){X=7;break}F=we,o==null||10>p||!To(o,d+3,p-3)?o=0:(le=o[d+0]|o[d+1]<<8|o[d+2]<<16,he=16383&(o[d+7]<<8|o[d+6]),o=16383&(o[d+9]<<8|o[d+8]),1&le||3<(le>>1&7)||!(le>>4&1)||le>>5>=ae.Ja||!he||!o?o=0:(P&&(P[0]=he),F&&(F[0]=o),o=1))}if(!o||(P=P[0],we=we[0],oe&&(O[0]!=P||J[0]!=we)))return 3;D!=null&&(D[0]=ae,D.offset=d-D.w,e(4294967286>d-D.w),e(D.offset==D.ha-p));break}return X==0||X==7&&oe&&D==null?(L!=null&&(L[0]|=ae.na!=null&&0<ae.na.length),v!=null&&(v[0]=P),w!=null&&(w[0]=we),0):X}function Js(o,d,p){var v=d.width,w=d.height,L=0,P=0,F=v,D=w;if(d.Da=o!=null&&0<o.Da,d.Da&&(F=o.cd,D=o.bd,L=o.v,P=o.j,11>p||(L&=-2,P&=-2),0>L||0>P||0>=F||0>=D||L+F>v||P+D>w))return 0;if(d.v=L,d.j=P,d.va=L+F,d.o=P+D,d.U=F,d.T=D,d.da=o!=null&&0<o.da,d.da){if(!rt(F,D,p=[o.ib],L=[o.hb]))return 0;d.ib=p[0],d.hb=L[0]}return d.ob=o!=null&&o.ob,d.Kb=o==null||!o.Sd,d.da&&(d.ob=d.ib<3*v/4&&d.hb<3*w/4,d.Kb=0),1}function Qs(o){if(o==null)return 2;if(11>o.S){var d=o.f.RGBA;d.fb+=(o.height-1)*d.A,d.A=-d.A}else d=o.f.kb,o=o.height,d.O+=(o-1)*d.fa,d.fa=-d.fa,d.N+=(o-1>>1)*d.Ab,d.Ab=-d.Ab,d.W+=(o-1>>1)*d.Db,d.Db=-d.Db,d.F!=null&&(d.J+=(o-1)*d.lb,d.lb=-d.lb);return 0}function $i(o,d,p,v){if(v==null||0>=o||0>=d)return 2;if(p!=null){if(p.Da){var w=p.cd,L=p.bd,P=-2&p.v,F=-2&p.j;if(0>P||0>F||0>=w||0>=L||P+w>o||F+L>d)return 2;o=w,d=L}if(p.da){if(!rt(o,d,w=[p.ib],L=[p.hb]))return 2;o=w[0],d=L[0]}}v.width=o,v.height=d;e:{var D=v.width,O=v.height;if(o=v.S,0>=D||0>=O||!(o>=nl&&13>o))o=2;else{if(0>=v.Rd&&v.sd==null){P=L=w=d=0;var J=(F=D*Pu[o])*O;if(11>o||(L=(O+1)/2*(d=(D+1)/2),o==12&&(P=(w=D)*O)),(O=n(J+2*L+P))==null){o=1;break e}v.sd=O,11>o?((D=v.f.RGBA).eb=O,D.fb=0,D.A=F,D.size=J):((D=v.f.kb).y=O,D.O=0,D.fa=F,D.Fd=J,D.f=O,D.N=0+J,D.Ab=d,D.Cd=L,D.ea=O,D.W=0+J+L,D.Db=d,D.Ed=L,o==12&&(D.F=O,D.J=0+J+2*L),D.Tc=P,D.lb=w)}if(d=1,w=v.S,L=v.width,P=v.height,w>=nl&&13>w)if(11>w)o=v.f.RGBA,d&=(F=Math.abs(o.A))*(P-1)+L<=o.size,d&=F>=L*Pu[w],d&=o.eb!=null;else{o=v.f.kb,F=(L+1)/2,J=(P+1)/2,D=Math.abs(o.fa),O=Math.abs(o.Ab);var oe=Math.abs(o.Db),le=Math.abs(o.lb),ae=le*(P-1)+L;d&=D*(P-1)+L<=o.Fd,d&=O*(J-1)+F<=o.Cd,d=(d&=oe*(J-1)+F<=o.Ed)&D>=L&O>=F&oe>=F,d&=o.y!=null,d&=o.f!=null,d&=o.ea!=null,w==12&&(d&=le>=L,d&=ae<=o.Tc,d&=o.F!=null)}else d=0;o=d?0:2}}return o!=0||p!=null&&p.fd&&(o=Qs(v)),o}var cr=64,Vi=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215],Ki=24,Gi=32,Xs=8,Ir=[0,0,1,1,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7];Le("Predictor0","PredictorAdd0"),S.Predictor0=function(){return 4278190080},S.Predictor1=function(o){return o},S.Predictor2=function(o,d,p){return d[p+0]},S.Predictor3=function(o,d,p){return d[p+1]},S.Predictor4=function(o,d,p){return d[p-1]},S.Predictor5=function(o,d,p){return Fe(Fe(o,d[p+1]),d[p+0])},S.Predictor6=function(o,d,p){return Fe(o,d[p-1])},S.Predictor7=function(o,d,p){return Fe(o,d[p+0])},S.Predictor8=function(o,d,p){return Fe(d[p-1],d[p+0])},S.Predictor9=function(o,d,p){return Fe(d[p+0],d[p+1])},S.Predictor10=function(o,d,p){return Fe(Fe(o,d[p-1]),Fe(d[p+0],d[p+1]))},S.Predictor11=function(o,d,p){var v=d[p+0];return 0>=it(v>>24&255,o>>24&255,(d=d[p-1])>>24&255)+it(v>>16&255,o>>16&255,d>>16&255)+it(v>>8&255,o>>8&255,d>>8&255)+it(255&v,255&o,255&d)?v:o},S.Predictor12=function(o,d,p){var v=d[p+0];return(We((o>>24&255)+(v>>24&255)-((d=d[p-1])>>24&255))<<24|We((o>>16&255)+(v>>16&255)-(d>>16&255))<<16|We((o>>8&255)+(v>>8&255)-(d>>8&255))<<8|We((255&o)+(255&v)-(255&d)))>>>0},S.Predictor13=function(o,d,p){var v=d[p-1];return(Xe((o=Fe(o,d[p+0]))>>24&255,v>>24&255)<<24|Xe(o>>16&255,v>>16&255)<<16|Xe(o>>8&255,v>>8&255)<<8|Xe(o>>0&255,v>>0&255))>>>0};var Fc=S.PredictorAdd0;S.PredictorAdd1=ot,Le("Predictor2","PredictorAdd2"),Le("Predictor3","PredictorAdd3"),Le("Predictor4","PredictorAdd4"),Le("Predictor5","PredictorAdd5"),Le("Predictor6","PredictorAdd6"),Le("Predictor7","PredictorAdd7"),Le("Predictor8","PredictorAdd8"),Le("Predictor9","PredictorAdd9"),Le("Predictor10","PredictorAdd10"),Le("Predictor11","PredictorAdd11"),Le("Predictor12","PredictorAdd12"),Le("Predictor13","PredictorAdd13");var Zs=S.PredictorAdd2;ct("ColorIndexInverseTransform","MapARGB","32b",function(o){return o>>8&255},function(o){return o}),ct("VP8LColorIndexInverseTransformAlpha","MapAlpha","8b",function(o){return o},function(o){return o>>8&255});var Xo,Jr=S.ColorIndexInverseTransform,Yi=S.MapARGB,Zo=S.VP8LColorIndexInverseTransformAlpha,el=S.MapAlpha,gn=S.VP8LPredictorsAdd=[];gn.length=16,(S.VP8LPredictors=[]).length=16,(S.VP8LPredictorsAdd_C=[]).length=16,(S.VP8LPredictors_C=[]).length=16;var ni,Dr,kr,bn,Va,Ka,Ji,Ga,Ut,eo,Nr,Qr,Qi,tl,to,ii,si,vn,oi,Xi,li,yn,ro,Xr,Zr,_t,Ct,Wt,Xt=n(511),Ya=n(2041),ao=n(225),Zi=n(767),rl=0,Ic=Ya,al=ao,Ur=Zi,ea=Xt,nl=0,il=1,bu=2,sl=3,ol=4,Dc=5,vu=6,Ec=7,Tc=8,ll=9,Mc=10,Mp=[2,3,7],Bp=[3,3,11],yu=[280,256,256,256,40],Op=[0,1,1,1,0],Rp=[17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15],zp=[24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112],qp=[2954,2956,2958,2962,2970,2986,3018,3082,3212,3468,3980,5004],Up=8,Bc=[4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157],Oc=[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284],no=null,Wp=[[173,148,140,0],[176,155,140,135,0],[180,157,141,134,130,0],[254,254,243,230,196,177,153,140,133,130,129,0]],Hp=[0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15],xu=[-0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9],$p=[[[[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128]],[[253,136,254,255,228,219,128,128,128,128,128],[189,129,242,255,227,213,255,219,128,128,128],[106,126,227,252,214,209,255,255,128,128,128]],[[1,98,248,255,236,226,255,255,128,128,128],[181,133,238,254,221,234,255,154,128,128,128],[78,134,202,247,198,180,255,219,128,128,128]],[[1,185,249,255,243,255,128,128,128,128,128],[184,150,247,255,236,224,128,128,128,128,128],[77,110,216,255,236,230,128,128,128,128,128]],[[1,101,251,255,241,255,128,128,128,128,128],[170,139,241,252,236,209,255,255,128,128,128],[37,116,196,243,228,255,255,255,128,128,128]],[[1,204,254,255,245,255,128,128,128,128,128],[207,160,250,255,238,128,128,128,128,128,128],[102,103,231,255,211,171,128,128,128,128,128]],[[1,152,252,255,240,255,128,128,128,128,128],[177,135,243,255,234,225,128,128,128,128,128],[80,129,211,255,194,224,128,128,128,128,128]],[[1,1,255,128,128,128,128,128,128,128,128],[246,1,255,128,128,128,128,128,128,128,128],[255,128,128,128,128,128,128,128,128,128,128]]],[[[198,35,237,223,193,187,162,160,145,155,62],[131,45,198,221,172,176,220,157,252,221,1],[68,47,146,208,149,167,221,162,255,223,128]],[[1,149,241,255,221,224,255,255,128,128,128],[184,141,234,253,222,220,255,199,128,128,128],[81,99,181,242,176,190,249,202,255,255,128]],[[1,129,232,253,214,197,242,196,255,255,128],[99,121,210,250,201,198,255,202,128,128,128],[23,91,163,242,170,187,247,210,255,255,128]],[[1,200,246,255,234,255,128,128,128,128,128],[109,178,241,255,231,245,255,255,128,128,128],[44,130,201,253,205,192,255,255,128,128,128]],[[1,132,239,251,219,209,255,165,128,128,128],[94,136,225,251,218,190,255,255,128,128,128],[22,100,174,245,186,161,255,199,128,128,128]],[[1,182,249,255,232,235,128,128,128,128,128],[124,143,241,255,227,234,128,128,128,128,128],[35,77,181,251,193,211,255,205,128,128,128]],[[1,157,247,255,236,231,255,255,128,128,128],[121,141,235,255,225,227,255,255,128,128,128],[45,99,188,251,195,217,255,224,128,128,128]],[[1,1,251,255,213,255,128,128,128,128,128],[203,1,248,255,255,128,128,128,128,128,128],[137,1,177,255,224,255,128,128,128,128,128]]],[[[253,9,248,251,207,208,255,192,128,128,128],[175,13,224,243,193,185,249,198,255,255,128],[73,17,171,221,161,179,236,167,255,234,128]],[[1,95,247,253,212,183,255,255,128,128,128],[239,90,244,250,211,209,255,255,128,128,128],[155,77,195,248,188,195,255,255,128,128,128]],[[1,24,239,251,218,219,255,205,128,128,128],[201,51,219,255,196,186,128,128,128,128,128],[69,46,190,239,201,218,255,228,128,128,128]],[[1,191,251,255,255,128,128,128,128,128,128],[223,165,249,255,213,255,128,128,128,128,128],[141,124,248,255,255,128,128,128,128,128,128]],[[1,16,248,255,255,128,128,128,128,128,128],[190,36,230,255,236,255,128,128,128,128,128],[149,1,255,128,128,128,128,128,128,128,128]],[[1,226,255,128,128,128,128,128,128,128,128],[247,192,255,128,128,128,128,128,128,128,128],[240,128,255,128,128,128,128,128,128,128,128]],[[1,134,252,255,255,128,128,128,128,128,128],[213,62,250,255,255,128,128,128,128,128,128],[55,93,255,128,128,128,128,128,128,128,128]],[[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128]]],[[[202,24,213,235,186,191,220,160,240,175,255],[126,38,182,232,169,184,228,174,255,187,128],[61,46,138,219,151,178,240,170,255,216,128]],[[1,112,230,250,199,191,247,159,255,255,128],[166,109,228,252,211,215,255,174,128,128,128],[39,77,162,232,172,180,245,178,255,255,128]],[[1,52,220,246,198,199,249,220,255,255,128],[124,74,191,243,183,193,250,221,255,255,128],[24,71,130,219,154,170,243,182,255,255,128]],[[1,182,225,249,219,240,255,224,128,128,128],[149,150,226,252,216,205,255,171,128,128,128],[28,108,170,242,183,194,254,223,255,255,128]],[[1,81,230,252,204,203,255,192,128,128,128],[123,102,209,247,188,196,255,233,128,128,128],[20,95,153,243,164,173,255,203,128,128,128]],[[1,222,248,255,216,213,128,128,128,128,128],[168,175,246,252,235,205,255,255,128,128,128],[47,116,215,255,211,212,255,255,128,128,128]],[[1,121,236,253,212,214,255,255,128,128,128],[141,84,213,252,201,202,255,219,128,128,128],[42,80,160,240,162,185,255,205,128,128,128]],[[1,1,255,128,128,128,128,128,128,128,128],[244,1,255,128,128,128,128,128,128,128,128],[238,1,255,128,128,128,128,128,128,128,128]]]],Vp=[[[231,120,48,89,115,113,120,152,112],[152,179,64,126,170,118,46,70,95],[175,69,143,80,85,82,72,155,103],[56,58,10,171,218,189,17,13,152],[114,26,17,163,44,195,21,10,173],[121,24,80,195,26,62,44,64,85],[144,71,10,38,171,213,144,34,26],[170,46,55,19,136,160,33,206,71],[63,20,8,114,114,208,12,9,226],[81,40,11,96,182,84,29,16,36]],[[134,183,89,137,98,101,106,165,148],[72,187,100,130,157,111,32,75,80],[66,102,167,99,74,62,40,234,128],[41,53,9,178,241,141,26,8,107],[74,43,26,146,73,166,49,23,157],[65,38,105,160,51,52,31,115,128],[104,79,12,27,217,255,87,17,7],[87,68,71,44,114,51,15,186,23],[47,41,14,110,182,183,21,17,194],[66,45,25,102,197,189,23,18,22]],[[88,88,147,150,42,46,45,196,205],[43,97,183,117,85,38,35,179,61],[39,53,200,87,26,21,43,232,171],[56,34,51,104,114,102,29,93,77],[39,28,85,171,58,165,90,98,64],[34,22,116,206,23,34,43,166,73],[107,54,32,26,51,1,81,43,31],[68,25,106,22,64,171,36,225,114],[34,19,21,102,132,188,16,76,124],[62,18,78,95,85,57,50,48,51]],[[193,101,35,159,215,111,89,46,111],[60,148,31,172,219,228,21,18,111],[112,113,77,85,179,255,38,120,114],[40,42,1,196,245,209,10,25,109],[88,43,29,140,166,213,37,43,154],[61,63,30,155,67,45,68,1,209],[100,80,8,43,154,1,51,26,71],[142,78,78,16,255,128,34,197,171],[41,40,5,102,211,183,4,1,221],[51,50,17,168,209,192,23,25,82]],[[138,31,36,171,27,166,38,44,229],[67,87,58,169,82,115,26,59,179],[63,59,90,180,59,166,93,73,154],[40,40,21,116,143,209,34,39,175],[47,15,16,183,34,223,49,45,183],[46,17,33,183,6,98,15,32,183],[57,46,22,24,128,1,54,17,37],[65,32,73,115,28,128,23,128,205],[40,3,9,115,51,192,18,6,223],[87,37,9,115,59,77,64,21,47]],[[104,55,44,218,9,54,53,130,226],[64,90,70,205,40,41,23,26,57],[54,57,112,184,5,41,38,166,213],[30,34,26,133,152,116,10,32,134],[39,19,53,221,26,114,32,73,255],[31,9,65,234,2,15,1,118,73],[75,32,12,51,192,255,160,43,51],[88,31,35,67,102,85,55,186,85],[56,21,23,111,59,205,45,37,192],[55,38,70,124,73,102,1,34,98]],[[125,98,42,88,104,85,117,175,82],[95,84,53,89,128,100,113,101,45],[75,79,123,47,51,128,81,171,1],[57,17,5,71,102,57,53,41,49],[38,33,13,121,57,73,26,1,85],[41,10,67,138,77,110,90,47,114],[115,21,2,10,102,255,166,23,6],[101,29,16,10,85,128,101,196,26],[57,18,10,102,102,213,34,20,43],[117,20,15,36,163,128,68,1,26]],[[102,61,71,37,34,53,31,243,192],[69,60,71,38,73,119,28,222,37],[68,45,128,34,1,47,11,245,171],[62,17,19,70,146,85,55,62,70],[37,43,37,154,100,163,85,160,1],[63,9,92,136,28,64,32,201,85],[75,15,9,9,64,255,184,119,16],[86,6,28,5,64,255,25,248,1],[56,8,17,132,137,255,55,116,128],[58,15,20,82,135,57,26,121,40]],[[164,50,31,137,154,133,25,35,218],[51,103,44,131,131,123,31,6,158],[86,40,64,135,148,224,45,183,128],[22,26,17,131,240,154,14,1,209],[45,16,21,91,64,222,7,1,197],[56,21,39,155,60,138,23,102,213],[83,12,13,54,192,255,68,47,28],[85,26,85,85,128,128,32,146,171],[18,11,7,63,144,171,4,4,246],[35,27,10,146,174,171,12,26,128]],[[190,80,35,99,180,80,126,54,45],[85,126,47,87,176,51,41,20,32],[101,75,128,139,118,146,116,128,85],[56,41,15,176,236,85,37,9,62],[71,30,17,119,118,255,17,18,138],[101,38,60,138,55,70,43,26,142],[146,36,19,30,171,255,97,27,20],[138,45,61,62,219,1,81,188,64],[32,41,20,117,151,142,20,21,163],[112,19,12,61,195,128,48,4,24]]],Kp=[[[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[176,246,255,255,255,255,255,255,255,255,255],[223,241,252,255,255,255,255,255,255,255,255],[249,253,253,255,255,255,255,255,255,255,255]],[[255,244,252,255,255,255,255,255,255,255,255],[234,254,254,255,255,255,255,255,255,255,255],[253,255,255,255,255,255,255,255,255,255,255]],[[255,246,254,255,255,255,255,255,255,255,255],[239,253,254,255,255,255,255,255,255,255,255],[254,255,254,255,255,255,255,255,255,255,255]],[[255,248,254,255,255,255,255,255,255,255,255],[251,255,254,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[251,254,254,255,255,255,255,255,255,255,255],[254,255,254,255,255,255,255,255,255,255,255]],[[255,254,253,255,254,255,255,255,255,255,255],[250,255,254,255,254,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[217,255,255,255,255,255,255,255,255,255,255],[225,252,241,253,255,255,254,255,255,255,255],[234,250,241,250,253,255,253,254,255,255,255]],[[255,254,255,255,255,255,255,255,255,255,255],[223,254,254,255,255,255,255,255,255,255,255],[238,253,254,254,255,255,255,255,255,255,255]],[[255,248,254,255,255,255,255,255,255,255,255],[249,254,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,255,255,255,255,255,255,255,255,255],[247,254,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[252,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,254,255,255,255,255,255,255,255,255],[253,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,253,255,255,255,255,255,255,255,255],[250,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[186,251,250,255,255,255,255,255,255,255,255],[234,251,244,254,255,255,255,255,255,255,255],[251,251,243,253,254,255,254,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[236,253,254,255,255,255,255,255,255,255,255],[251,253,253,254,254,255,255,255,255,255,255]],[[255,254,254,255,255,255,255,255,255,255,255],[254,254,254,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,255,255,255,255,255,255,255,255,255],[254,254,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[248,255,255,255,255,255,255,255,255,255,255],[250,254,252,254,255,255,255,255,255,255,255],[248,254,249,253,255,255,255,255,255,255,255]],[[255,253,253,255,255,255,255,255,255,255,255],[246,253,253,255,255,255,255,255,255,255,255],[252,254,251,254,254,255,255,255,255,255,255]],[[255,254,252,255,255,255,255,255,255,255,255],[248,254,253,255,255,255,255,255,255,255,255],[253,255,254,254,255,255,255,255,255,255,255]],[[255,251,254,255,255,255,255,255,255,255,255],[245,251,254,255,255,255,255,255,255,255,255],[253,253,254,255,255,255,255,255,255,255,255]],[[255,251,253,255,255,255,255,255,255,255,255],[252,253,254,255,255,255,255,255,255,255,255],[255,254,255,255,255,255,255,255,255,255,255]],[[255,252,255,255,255,255,255,255,255,255,255],[249,255,254,255,255,255,255,255,255,255,255],[255,255,254,255,255,255,255,255,255,255,255]],[[255,255,253,255,255,255,255,255,255,255,255],[250,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]]],Gp=[0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0],xn=[],ma=[],Ja=[],Yp=1,wu=2,wn=[],ta=[];ge("UpsampleRgbLinePair",ht,3),ge("UpsampleBgrLinePair",Et,3),ge("UpsampleRgbaLinePair",pa,4),ge("UpsampleBgraLinePair",rr,4),ge("UpsampleArgbLinePair",fr,4),ge("UpsampleRgba4444LinePair",Gt,2),ge("UpsampleRgb565LinePair",Bt,2);var Jp=S.UpsampleRgbLinePair,Qp=S.UpsampleBgrLinePair,ju=S.UpsampleRgbaLinePair,ku=S.UpsampleBgraLinePair,Nu=S.UpsampleArgbLinePair,Su=S.UpsampleRgba4444LinePair,Xp=S.UpsampleRgb565LinePair,cl=16,dl=1<<cl-1,io=-227,Rc=482,Zp=6,Au=0,e1=n(256),t1=n(256),r1=n(256),a1=n(256),n1=n(Rc-io),i1=n(Rc-io);Fa("YuvToRgbRow",ht,3),Fa("YuvToBgrRow",Et,3),Fa("YuvToRgbaRow",pa,4),Fa("YuvToBgraRow",rr,4),Fa("YuvToArgbRow",fr,4),Fa("YuvToRgba4444Row",Gt,2),Fa("YuvToRgb565Row",Bt,2);var Lu=[0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396],ul=[0,2,8],s1=[8,7,6,4,4,2,2,2,1,1,1,1],o1=1;this.WebPDecodeRGBA=function(o,d,p,v,w){var L=il,P=new Ui,F=new oa;P.ba=F,F.S=L,F.width=[F.width],F.height=[F.height];var D=F.width,O=F.height,J=new Ua;if(J==null||o==null)var oe=2;else e(J!=null),oe=Hi(o,d,p,J.width,J.height,J.Pd,J.Qd,J.format,null);if(oe!=0?D=0:(D!=null&&(D[0]=J.width[0]),O!=null&&(O[0]=J.height[0]),D=1),D){F.width=F.width[0],F.height=F.height[0],v!=null&&(v[0]=F.width),w!=null&&(w[0]=F.height);e:{if(v=new Ti,(w=new Hs).data=o,w.w=d,w.ha=p,w.kd=1,d=[0],e(w!=null),((o=Hi(w.data,w.w,w.ha,null,null,null,d,null,w))==0||o==7)&&d[0]&&(o=4),(d=o)==0){if(e(P!=null),v.data=w.data,v.w=w.w+w.offset,v.ha=w.ha-w.offset,v.put=Na,v.ac=lr,v.bc=Sa,v.ma=P,w.xa){if((o=Yr())==null){P=1;break e}if(function(le,ae){var we=[0],he=[0],X=[0];t:for(;;){if(le==null)return 0;if(ae==null)return le.a=2,0;if(le.l=ae,le.a=0,de(le.m,ae.data,ae.w,ae.ha),!Ke(le.m,we,he,X)){le.a=3;break t}if(le.xb=wu,ae.width=we[0],ae.height=he[0],!Pa(we[0],he[0],1,le,null))break t;return 1}return e(le.a!=0),0}(o,v)){if(v=(d=$i(v.width,v.height,P.Oa,P.ba))==0){t:{v=o;r:for(;;){if(v==null){v=0;break t}if(e(v.s.yc!=null),e(v.s.Ya!=null),e(0<v.s.Wb),e((p=v.l)!=null),e((w=p.ma)!=null),v.xb!=0){if(v.ca=w.ba,v.tb=w.tb,e(v.ca!=null),!Js(w.Oa,p,sl)){v.a=2;break r}if(!Zn(v,p.width)||p.da)break r;if((p.da||vt(v.ca.S))&&ie(),11>v.ca.S||(alert("todo:WebPInitConvertARGBToYUV"),v.ca.f.kb.F!=null&&ie()),v.Pb&&0<v.s.ua&&v.s.vb.X==null&&!Ge(v.s.vb,v.s.Wa.Xa)){v.a=1;break r}v.xb=0}if(!ua(v,v.V,v.Ba,v.c,v.i,p.o,_i))break r;w.Dc=v.Ma,v=1;break t}e(v.a!=0),v=0}v=!v}v&&(d=o.a)}else d=o.a}else{if((o=new hc)==null){P=1;break e}if(o.Fa=w.na,o.P=w.P,o.qc=w.Sa,Mo(o,v)){if((d=$i(v.width,v.height,P.Oa,P.ba))==0){if(o.Aa=0,p=P.Oa,e((w=o)!=null),p!=null){if(0<(D=0>(D=p.Md)?0:100<D?255:255*D/100)){for(O=J=0;4>O;++O)12>(oe=w.pb[O]).lc&&(oe.ia=D*s1[0>oe.lc?0:oe.lc]>>3),J|=oe.ia;J&&(alert("todo:VP8InitRandom"),w.ia=1)}w.Ga=p.Id,100<w.Ga?w.Ga=100:0>w.Ga&&(w.Ga=0)}fc(o,v)||(d=o.a)}}else d=o.a}d==0&&P.Oa!=null&&P.Oa.fd&&(d=Qs(P.ba))}P=d}L=P!=0?null:11>L?F.f.RGBA.eb:F.f.kb.y}else L=null;return L};var Pu=[3,4,3,4,4,2,2,4,4,4,2,1,1]};function f(S,M){for(var ne="",E=0;E<4;E++)ne+=String.fromCharCode(S[M++]);return ne}function g(S,M){return(S[M+0]<<0|S[M+1]<<8|S[M+2]<<16)>>>0}function b(S,M){return(S[M+0]<<0|S[M+1]<<8|S[M+2]<<16|S[M+3]<<24)>>>0}new u;var y=[0],m=[0],k=[],N=new u,_=t,x=function(S,M){var ne={},E=0,T=!1,K=0,H=0;if(ne.frames=[],!function(z,U,Y,re){for(var V=0;V<re;V++)if(z[U+V]!=Y.charCodeAt(V))return!0;return!1}(S,M,"RIFF",4)){var ce,ue;for(b(S,M+=4),M+=8;M<S.length;){var pe=f(S,M),de=b(S,M+=4);M+=4;var fe=de+(1&de);switch(pe){case"VP8 ":case"VP8L":ne.frames[E]===void 0&&(ne.frames[E]={}),(C=ne.frames[E]).src_off=T?H:M-8,C.src_size=K+de+8,E++,T&&(T=!1,K=0,H=0);break;case"VP8X":(C=ne.header={}).feature_flags=S[M];var ve=M+4;C.canvas_width=1+g(S,ve),ve+=3,C.canvas_height=1+g(S,ve),ve+=3;break;case"ALPH":T=!0,K=fe+8,H=M-8;break;case"ANIM":(C=ne.header).bgcolor=b(S,M),ve=M+4,C.loop_count=(ce=S)[(ue=ve)+0]<<0|ce[ue+1]<<8,ve+=2;break;case"ANMF":var Ie,C;(C=ne.frames[E]={}).offset_x=2*g(S,M),M+=3,C.offset_y=2*g(S,M),M+=3,C.width=1+g(S,M),M+=3,C.height=1+g(S,M),M+=3,C.duration=g(S,M),M+=3,Ie=S[M++],C.dispose=1&Ie,C.blend=Ie>>1&1}pe!="ANMF"&&(M+=fe)}return ne}}(_,0);x.response=_,x.rgbaoutput=!0,x.dataurl=!1;var I=x.header?x.header:null,B=x.frames?x.frames:null;if(I){I.loop_counter=I.loop_count,y=[I.canvas_height],m=[I.canvas_width];for(var R=0;R<B.length&&B[R].blend!=0;R++);}var Z=B[0],ee=N.WebPDecodeRGBA(_,Z.src_off,Z.src_size,m,y);Z.rgba=ee,Z.imgwidth=m[0],Z.imgheight=y[0];for(var A=0;A<m[0]*y[0]*4;A++)k[A]=ee[A];return this.width=m,this.height=y,this.data=k,this}(function(t){var e=function(){return typeof zd=="function"},r=function(y,m,k,N){var _=4,x=l;switch(N){case t.image_compression.FAST:_=1,x=n;break;case t.image_compression.MEDIUM:_=6,x=c;break;case t.image_compression.SLOW:_=9,x=u}y=a(y,m,k,x);var I=zd(y,{level:_});return t.__addimage__.arrayBufferToBinaryString(I)},a=function(y,m,k,N){for(var _,x,I,B=y.length/m,R=new Uint8Array(y.length+B),Z=g(),ee=0;ee<B;ee+=1){if(I=ee*m,_=y.subarray(I,I+m),N)R.set(N(_,k,x),I+ee);else{for(var A,S=Z.length,M=[];A<S;A+=1)M[A]=Z[A](_,k,x);var ne=b(M.concat());R.set(M[ne],I+ee)}x=_}return R},i=function(y){var m=Array.apply([],y);return m.unshift(0),m},n=function(y,m){var k,N=[],_=y.length;N[0]=1;for(var x=0;x<_;x+=1)k=y[x-m]||0,N[x+1]=y[x]-k+256&255;return N},l=function(y,m,k){var N,_=[],x=y.length;_[0]=2;for(var I=0;I<x;I+=1)N=k&&k[I]||0,_[I+1]=y[I]-N+256&255;return _},c=function(y,m,k){var N,_,x=[],I=y.length;x[0]=3;for(var B=0;B<I;B+=1)N=y[B-m]||0,_=k&&k[B]||0,x[B+1]=y[B]+256-(N+_>>>1)&255;return x},u=function(y,m,k){var N,_,x,I,B=[],R=y.length;B[0]=4;for(var Z=0;Z<R;Z+=1)N=y[Z-m]||0,_=k&&k[Z]||0,x=k&&k[Z-m]||0,I=f(N,_,x),B[Z+1]=y[Z]-I+256&255;return B},f=function(y,m,k){if(y===m&&m===k)return y;var N=Math.abs(m-k),_=Math.abs(y-k),x=Math.abs(y+m-k-k);return N<=_&&N<=x?y:_<=x?m:k},g=function(){return[i,n,l,c,u]},b=function(y){var m=y.map(function(k){return k.reduce(function(N,_){return N+Math.abs(_)},0)});return m.indexOf(Math.min.apply(null,m))};t.processPNG=function(y,m,k,N){var _,x,I,B,R,Z,ee,A,S,M,ne,E,T,K,H,ce=this.decode.FLATE_DECODE,ue="";if(this.__addimage__.isArrayBuffer(y)&&(y=new Uint8Array(y)),this.__addimage__.isArrayBufferView(y)){if(y=(I=new cg(y)).imgData,x=I.bits,_=I.colorSpace,R=I.colors,[4,6].indexOf(I.colorType)!==-1){if(I.bits===8){S=(A=I.pixelBitlength==32?new Uint32Array(I.decodePixels().buffer):I.pixelBitlength==16?new Uint16Array(I.decodePixels().buffer):new Uint8Array(I.decodePixels().buffer)).length,ne=new Uint8Array(S*I.colors),M=new Uint8Array(S);var pe,de=I.pixelBitlength-I.bits;for(K=0,H=0;K<S;K++){for(T=A[K],pe=0;pe<de;)ne[H++]=T>>>pe&255,pe+=I.bits;M[K]=T>>>pe&255}}if(I.bits===16){S=(A=new Uint32Array(I.decodePixels().buffer)).length,ne=new Uint8Array(S*(32/I.pixelBitlength)*I.colors),M=new Uint8Array(S*(32/I.pixelBitlength)),E=I.colors>1,K=0,H=0;for(var fe=0;K<S;)T=A[K++],ne[H++]=T>>>0&255,E&&(ne[H++]=T>>>16&255,T=A[K++],ne[H++]=T>>>0&255),M[fe++]=T>>>16&255;x=8}N!==t.image_compression.NONE&&e()?(y=r(ne,I.width*I.colors,I.colors,N),ee=r(M,I.width,1,N)):(y=ne,ee=M,ce=void 0)}if(I.colorType===3&&(_=this.color_spaces.INDEXED,Z=I.palette,I.transparency.indexed)){var ve=I.transparency.indexed,Ie=0;for(K=0,S=ve.length;K<S;++K)Ie+=ve[K];if((Ie/=255)===S-1&&ve.indexOf(0)!==-1)B=[ve.indexOf(0)];else if(Ie!==S){for(A=I.decodePixels(),M=new Uint8Array(A.length),K=0,S=A.length;K<S;K++)M[K]=ve[A[K]];ee=r(M,I.width,1)}}var C=function(z){var U;switch(z){case t.image_compression.FAST:U=11;break;case t.image_compression.MEDIUM:U=13;break;case t.image_compression.SLOW:U=14;break;default:U=12}return U}(N);return ce===this.decode.FLATE_DECODE&&(ue="/Predictor "+C+" "),ue+="/Colors "+R+" /BitsPerComponent "+x+" /Columns "+I.width,(this.__addimage__.isArrayBuffer(y)||this.__addimage__.isArrayBufferView(y))&&(y=this.__addimage__.arrayBufferToBinaryString(y)),(ee&&this.__addimage__.isArrayBuffer(ee)||this.__addimage__.isArrayBufferView(ee))&&(ee=this.__addimage__.arrayBufferToBinaryString(ee)),{alias:k,data:y,index:m,filter:ce,decodeParameters:ue,transparency:B,palette:Z,sMask:ee,predictor:C,width:I.width,height:I.height,bitsPerComponent:x,colorSpace:_}}}})(Ve.API),function(t){t.processGIF89A=function(e,r,a,i){var n=new dg(e),l=n.width,c=n.height,u=[];n.decodeAndBlitFrameRGBA(0,u);var f={data:u,width:l,height:c},g=new dd(100).encode(f,100);return t.processJPEG.call(this,g,r,a,i)},t.processGIF87A=t.processGIF89A}(Ve.API),va.prototype.parseHeader=function(){if(this.fileSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.reserved=this.datav.getUint32(this.pos,!0),this.pos+=4,this.offset=this.datav.getUint32(this.pos,!0),this.pos+=4,this.headerSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.width=this.datav.getUint32(this.pos,!0),this.pos+=4,this.height=this.datav.getInt32(this.pos,!0),this.pos+=4,this.planes=this.datav.getUint16(this.pos,!0),this.pos+=2,this.bitPP=this.datav.getUint16(this.pos,!0),this.pos+=2,this.compress=this.datav.getUint32(this.pos,!0),this.pos+=4,this.rawSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.hr=this.datav.getUint32(this.pos,!0),this.pos+=4,this.vr=this.datav.getUint32(this.pos,!0),this.pos+=4,this.colors=this.datav.getUint32(this.pos,!0),this.pos+=4,this.importantColors=this.datav.getUint32(this.pos,!0),this.pos+=4,this.bitPP===16&&this.is_with_alpha&&(this.bitPP=15),this.bitPP<15){var t=this.colors===0?1<<this.bitPP:this.colors;this.palette=new Array(t);for(var e=0;e<t;e++){var r=this.datav.getUint8(this.pos++,!0),a=this.datav.getUint8(this.pos++,!0),i=this.datav.getUint8(this.pos++,!0),n=this.datav.getUint8(this.pos++,!0);this.palette[e]={red:i,green:a,blue:r,quad:n}}}this.height<0&&(this.height*=-1,this.bottom_up=!1)},va.prototype.parseBGR=function(){this.pos=this.offset;try{var t="bit"+this.bitPP,e=this.width*this.height*4;this.data=new Uint8Array(e),this[t]()}catch(r){Pt.log("bit decode error:"+r)}},va.prototype.bit1=function(){var t,e=Math.ceil(this.width/8),r=e%4;for(t=this.height-1;t>=0;t--){for(var a=this.bottom_up?t:this.height-1-t,i=0;i<e;i++)for(var n=this.datav.getUint8(this.pos++,!0),l=a*this.width*4+8*i*4,c=0;c<8&&8*i+c<this.width;c++){var u=this.palette[n>>7-c&1];this.data[l+4*c]=u.blue,this.data[l+4*c+1]=u.green,this.data[l+4*c+2]=u.red,this.data[l+4*c+3]=255}r!==0&&(this.pos+=4-r)}},va.prototype.bit4=function(){for(var t=Math.ceil(this.width/2),e=t%4,r=this.height-1;r>=0;r--){for(var a=this.bottom_up?r:this.height-1-r,i=0;i<t;i++){var n=this.datav.getUint8(this.pos++,!0),l=a*this.width*4+2*i*4,c=n>>4,u=15&n,f=this.palette[c];if(this.data[l]=f.blue,this.data[l+1]=f.green,this.data[l+2]=f.red,this.data[l+3]=255,2*i+1>=this.width)break;f=this.palette[u],this.data[l+4]=f.blue,this.data[l+4+1]=f.green,this.data[l+4+2]=f.red,this.data[l+4+3]=255}e!==0&&(this.pos+=4-e)}},va.prototype.bit8=function(){for(var t=this.width%4,e=this.height-1;e>=0;e--){for(var r=this.bottom_up?e:this.height-1-e,a=0;a<this.width;a++){var i=this.datav.getUint8(this.pos++,!0),n=r*this.width*4+4*a;if(i<this.palette.length){var l=this.palette[i];this.data[n]=l.red,this.data[n+1]=l.green,this.data[n+2]=l.blue,this.data[n+3]=255}else this.data[n]=255,this.data[n+1]=255,this.data[n+2]=255,this.data[n+3]=255}t!==0&&(this.pos+=4-t)}},va.prototype.bit15=function(){for(var t=this.width%3,e=parseInt("11111",2),r=this.height-1;r>=0;r--){for(var a=this.bottom_up?r:this.height-1-r,i=0;i<this.width;i++){var n=this.datav.getUint16(this.pos,!0);this.pos+=2;var l=(n&e)/e*255|0,c=(n>>5&e)/e*255|0,u=(n>>10&e)/e*255|0,f=n>>15?255:0,g=a*this.width*4+4*i;this.data[g]=u,this.data[g+1]=c,this.data[g+2]=l,this.data[g+3]=f}this.pos+=t}},va.prototype.bit16=function(){for(var t=this.width%3,e=parseInt("11111",2),r=parseInt("111111",2),a=this.height-1;a>=0;a--){for(var i=this.bottom_up?a:this.height-1-a,n=0;n<this.width;n++){var l=this.datav.getUint16(this.pos,!0);this.pos+=2;var c=(l&e)/e*255|0,u=(l>>5&r)/r*255|0,f=(l>>11)/e*255|0,g=i*this.width*4+4*n;this.data[g]=f,this.data[g+1]=u,this.data[g+2]=c,this.data[g+3]=255}this.pos+=t}},va.prototype.bit24=function(){for(var t=this.height-1;t>=0;t--){for(var e=this.bottom_up?t:this.height-1-t,r=0;r<this.width;r++){var a=this.datav.getUint8(this.pos++,!0),i=this.datav.getUint8(this.pos++,!0),n=this.datav.getUint8(this.pos++,!0),l=e*this.width*4+4*r;this.data[l]=n,this.data[l+1]=i,this.data[l+2]=a,this.data[l+3]=255}this.pos+=this.width%4}},va.prototype.bit32=function(){for(var t=this.height-1;t>=0;t--)for(var e=this.bottom_up?t:this.height-1-t,r=0;r<this.width;r++){var a=this.datav.getUint8(this.pos++,!0),i=this.datav.getUint8(this.pos++,!0),n=this.datav.getUint8(this.pos++,!0),l=this.datav.getUint8(this.pos++,!0),c=e*this.width*4+4*r;this.data[c]=n,this.data[c+1]=i,this.data[c+2]=a,this.data[c+3]=l}},va.prototype.getData=function(){return this.data},function(t){t.processBMP=function(e,r,a,i){var n=new va(e,!1),l=n.width,c=n.height,u={data:n.getData(),width:l,height:c},f=new dd(100).encode(u,100);return t.processJPEG.call(this,f,r,a,i)}}(Ve.API),$h.prototype.getData=function(){return this.data},function(t){t.processWEBP=function(e,r,a,i){var n=new $h(e),l=n.width,c=n.height,u={data:n.getData(),width:l,height:c},f=new dd(100).encode(u,100);return t.processJPEG.call(this,f,r,a,i)}}(Ve.API),Ve.API.processRGBA=function(t,e,r){for(var a=t.data,i=a.length,n=new Uint8Array(i/4*3),l=new Uint8Array(i/4),c=0,u=0,f=0;f<i;f+=4){var g=a[f],b=a[f+1],y=a[f+2],m=a[f+3];n[c++]=g,n[c++]=b,n[c++]=y,l[u++]=m}var k=this.__addimage__.arrayBufferToBinaryString(n);return{alpha:this.__addimage__.arrayBufferToBinaryString(l),data:k,index:e,alias:r,colorSpace:"DeviceRGB",bitsPerComponent:8,width:t.width,height:t.height}},Ve.API.setLanguage=function(t){return this.internal.languageSettings===void 0&&(this.internal.languageSettings={},this.internal.languageSettings.isSubscribed=!1),{af:"Afrikaans",sq:"Albanian",ar:"Arabic (Standard)","ar-DZ":"Arabic (Algeria)","ar-BH":"Arabic (Bahrain)","ar-EG":"Arabic (Egypt)","ar-IQ":"Arabic (Iraq)","ar-JO":"Arabic (Jordan)","ar-KW":"Arabic (Kuwait)","ar-LB":"Arabic (Lebanon)","ar-LY":"Arabic (Libya)","ar-MA":"Arabic (Morocco)","ar-OM":"Arabic (Oman)","ar-QA":"Arabic (Qatar)","ar-SA":"Arabic (Saudi Arabia)","ar-SY":"Arabic (Syria)","ar-TN":"Arabic (Tunisia)","ar-AE":"Arabic (U.A.E.)","ar-YE":"Arabic (Yemen)",an:"Aragonese",hy:"Armenian",as:"Assamese",ast:"Asturian",az:"Azerbaijani",eu:"Basque",be:"Belarusian",bn:"Bengali",bs:"Bosnian",br:"Breton",bg:"Bulgarian",my:"Burmese",ca:"Catalan",ch:"Chamorro",ce:"Chechen",zh:"Chinese","zh-HK":"Chinese (Hong Kong)","zh-CN":"Chinese (PRC)","zh-SG":"Chinese (Singapore)","zh-TW":"Chinese (Taiwan)",cv:"Chuvash",co:"Corsican",cr:"Cree",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch (Standard)","nl-BE":"Dutch (Belgian)",en:"English","en-AU":"English (Australia)","en-BZ":"English (Belize)","en-CA":"English (Canada)","en-IE":"English (Ireland)","en-JM":"English (Jamaica)","en-NZ":"English (New Zealand)","en-PH":"English (Philippines)","en-ZA":"English (South Africa)","en-TT":"English (Trinidad & Tobago)","en-GB":"English (United Kingdom)","en-US":"English (United States)","en-ZW":"English (Zimbabwe)",eo:"Esperanto",et:"Estonian",fo:"Faeroese",fj:"Fijian",fi:"Finnish",fr:"French (Standard)","fr-BE":"French (Belgium)","fr-CA":"French (Canada)","fr-FR":"French (France)","fr-LU":"French (Luxembourg)","fr-MC":"French (Monaco)","fr-CH":"French (Switzerland)",fy:"Frisian",fur:"Friulian",gd:"Gaelic (Scots)","gd-IE":"Gaelic (Irish)",gl:"Galacian",ka:"Georgian",de:"German (Standard)","de-AT":"German (Austria)","de-DE":"German (Germany)","de-LI":"German (Liechtenstein)","de-LU":"German (Luxembourg)","de-CH":"German (Switzerland)",el:"Greek",gu:"Gujurati",ht:"Haitian",he:"Hebrew",hi:"Hindi",hu:"Hungarian",is:"Icelandic",id:"Indonesian",iu:"Inuktitut",ga:"Irish",it:"Italian (Standard)","it-CH":"Italian (Switzerland)",ja:"Japanese",kn:"Kannada",ks:"Kashmiri",kk:"Kazakh",km:"Khmer",ky:"Kirghiz",tlh:"Klingon",ko:"Korean","ko-KP":"Korean (North Korea)","ko-KR":"Korean (South Korea)",la:"Latin",lv:"Latvian",lt:"Lithuanian",lb:"Luxembourgish",mk:"North Macedonia",ms:"Malay",ml:"Malayalam",mt:"Maltese",mi:"Maori",mr:"Marathi",mo:"Moldavian",nv:"Navajo",ng:"Ndonga",ne:"Nepali",no:"Norwegian",nb:"Norwegian (Bokmal)",nn:"Norwegian (Nynorsk)",oc:"Occitan",or:"Oriya",om:"Oromo",fa:"Persian","fa-IR":"Persian/Iran",pl:"Polish",pt:"Portuguese","pt-BR":"Portuguese (Brazil)",pa:"Punjabi","pa-IN":"Punjabi (India)","pa-PK":"Punjabi (Pakistan)",qu:"Quechua",rm:"Rhaeto-Romanic",ro:"Romanian","ro-MO":"Romanian (Moldavia)",ru:"Russian","ru-MO":"Russian (Moldavia)",sz:"Sami (Lappish)",sg:"Sango",sa:"Sanskrit",sc:"Sardinian",sd:"Sindhi",si:"Singhalese",sr:"Serbian",sk:"Slovak",sl:"Slovenian",so:"Somani",sb:"Sorbian",es:"Spanish","es-AR":"Spanish (Argentina)","es-BO":"Spanish (Bolivia)","es-CL":"Spanish (Chile)","es-CO":"Spanish (Colombia)","es-CR":"Spanish (Costa Rica)","es-DO":"Spanish (Dominican Republic)","es-EC":"Spanish (Ecuador)","es-SV":"Spanish (El Salvador)","es-GT":"Spanish (Guatemala)","es-HN":"Spanish (Honduras)","es-MX":"Spanish (Mexico)","es-NI":"Spanish (Nicaragua)","es-PA":"Spanish (Panama)","es-PY":"Spanish (Paraguay)","es-PE":"Spanish (Peru)","es-PR":"Spanish (Puerto Rico)","es-ES":"Spanish (Spain)","es-UY":"Spanish (Uruguay)","es-VE":"Spanish (Venezuela)",sx:"Sutu",sw:"Swahili",sv:"Swedish","sv-FI":"Swedish (Finland)","sv-SV":"Swedish (Sweden)",ta:"Tamil",tt:"Tatar",te:"Teluga",th:"Thai",tig:"Tigre",ts:"Tsonga",tn:"Tswana",tr:"Turkish",tk:"Turkmen",uk:"Ukrainian",hsb:"Upper Sorbian",ur:"Urdu",ve:"Venda",vi:"Vietnamese",vo:"Volapuk",wa:"Walloon",cy:"Welsh",xh:"Xhosa",ji:"Yiddish",zu:"Zulu"}[t]!==void 0&&(this.internal.languageSettings.languageCode=t,this.internal.languageSettings.isSubscribed===!1&&(this.internal.events.subscribe("putCatalog",function(){this.internal.write("/Lang ("+this.internal.languageSettings.languageCode+")")}),this.internal.languageSettings.isSubscribed=!0)),this},is=Ve.API,Cl=is.getCharWidthsArray=function(t,e){var r,a,i=(e=e||{}).font||this.internal.getFont(),n=e.fontSize||this.internal.getFontSize(),l=e.charSpace||this.internal.getCharSpace(),c=e.widths?e.widths:i.metadata.Unicode.widths,u=c.fof?c.fof:1,f=e.kerning?e.kerning:i.metadata.Unicode.kerning,g=f.fof?f.fof:1,b=e.doKerning!==!1,y=0,m=t.length,k=0,N=c[0]||u,_=[];for(r=0;r<m;r++)a=t.charCodeAt(r),typeof i.metadata.widthOfString=="function"?_.push((i.metadata.widthOfGlyph(i.metadata.characterToGlyph(a))+l*(1e3/n)||0)/1e3):(y=b&&kt(f[a])==="object"&&!isNaN(parseInt(f[a][k],10))?f[a][k]/g:0,_.push((c[a]||N)/u+y)),k=a;return _},qh=is.getStringUnitWidth=function(t,e){var r=(e=e||{}).fontSize||this.internal.getFontSize(),a=e.font||this.internal.getFont(),i=e.charSpace||this.internal.getCharSpace();return is.processArabic&&(t=is.processArabic(t)),typeof a.metadata.widthOfString=="function"?a.metadata.widthOfString(t,r,i)/r:Cl.apply(this,arguments).reduce(function(n,l){return n+l},0)},Uh=function(t,e,r,a){for(var i=[],n=0,l=t.length,c=0;n!==l&&c+e[n]<r;)c+=e[n],n++;i.push(t.slice(0,n));var u=n;for(c=0;n!==l;)c+e[n]>a&&(i.push(t.slice(u,n)),c=0,u=n),c+=e[n],n++;return u!==n&&i.push(t.slice(u,n)),i},Wh=function(t,e,r){r||(r={});var a,i,n,l,c,u,f,g=[],b=[g],y=r.textIndent||0,m=0,k=0,N=t.split(" "),_=Cl.apply(this,[" ",r])[0];if(u=r.lineIndent===-1?N[0].length+2:r.lineIndent||0){var x=Array(u).join(" "),I=[];N.map(function(R){(R=R.split(/\s*\n/)).length>1?I=I.concat(R.map(function(Z,ee){return(ee&&Z.length?`
`:"")+Z})):I.push(R[0])}),N=I,u=qh.apply(this,[x,r])}for(n=0,l=N.length;n<l;n++){var B=0;if(a=N[n],u&&a[0]==`
`&&(a=a.substr(1),B=1),y+m+(k=(i=Cl.apply(this,[a,r])).reduce(function(R,Z){return R+Z},0))>e||B){if(k>e){for(c=Uh.apply(this,[a,i,e-(y+m),e]),g.push(c.shift()),g=[c.pop()];c.length;)b.push([c.shift()]);k=i.slice(a.length-(g[0]?g[0].length:0)).reduce(function(R,Z){return R+Z},0)}else g=[a];b.push(g),y=k+u,m=_}else g.push(a),y+=m+k,m=_}return f=u?function(R,Z){return(Z?x:"")+R.join(" ")}:function(R){return R.join(" ")},b.map(f)},is.splitTextToSize=function(t,e,r){var a,i=(r=r||{}).fontSize||this.internal.getFontSize(),n=(function(g){if(g.widths&&g.kerning)return{widths:g.widths,kerning:g.kerning};var b=this.internal.getFont(g.fontName,g.fontStyle);return b.metadata.Unicode?{widths:b.metadata.Unicode.widths||{0:1},kerning:b.metadata.Unicode.kerning||{}}:{font:b.metadata,fontSize:this.internal.getFontSize(),charSpace:this.internal.getCharSpace()}}).call(this,r);a=Array.isArray(t)?t:String(t).split(/\r?\n/);var l=1*this.internal.scaleFactor*e/i;n.textIndent=r.textIndent?1*r.textIndent*this.internal.scaleFactor/i:0,n.lineIndent=r.lineIndent;var c,u,f=[];for(c=0,u=a.length;c<u;c++)f=f.concat(Wh.apply(this,[a[c],l,n]));return f},function(t){t.__fontmetrics__=t.__fontmetrics__||{};for(var e="klmnopqrstuvwxyz",r={},a={},i=0;i<e.length;i++)r[e[i]]="0123456789abcdef"[i],a["0123456789abcdef"[i]]=e[i];var n=function(b){return"0x"+parseInt(b,10).toString(16)},l=t.__fontmetrics__.compress=function(b){var y,m,k,N,_=["{"];for(var x in b){if(y=b[x],isNaN(parseInt(x,10))?m="'"+x+"'":(x=parseInt(x,10),m=(m=n(x).slice(2)).slice(0,-1)+a[m.slice(-1)]),typeof y=="number")y<0?(k=n(y).slice(3),N="-"):(k=n(y).slice(2),N=""),k=N+k.slice(0,-1)+a[k.slice(-1)];else{if(kt(y)!=="object")throw new Error("Don't know what to do with value type "+kt(y)+".");k=l(y)}_.push(m+k)}return _.push("}"),_.join("")},c=t.__fontmetrics__.uncompress=function(b){if(typeof b!="string")throw new Error("Invalid argument passed to uncompress.");for(var y,m,k,N,_={},x=1,I=_,B=[],R="",Z="",ee=b.length-1,A=1;A<ee;A+=1)(N=b[A])=="'"?y?(k=y.join(""),y=void 0):y=[]:y?y.push(N):N=="{"?(B.push([I,k]),I={},k=void 0):N=="}"?((m=B.pop())[0][m[1]]=I,k=void 0,I=m[0]):N=="-"?x=-1:k===void 0?r.hasOwnProperty(N)?(R+=r[N],k=parseInt(R,16)*x,x=1,R=""):R+=N:r.hasOwnProperty(N)?(Z+=r[N],I[k]=parseInt(Z,16)*x,x=1,k=void 0,Z=""):Z+=N;return _},u={codePages:["WinAnsiEncoding"],WinAnsiEncoding:c("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")},f={Unicode:{Courier:u,"Courier-Bold":u,"Courier-BoldOblique":u,"Courier-Oblique":u,Helvetica:u,"Helvetica-Bold":u,"Helvetica-BoldOblique":u,"Helvetica-Oblique":u,"Times-Roman":u,"Times-Bold":u,"Times-BoldItalic":u,"Times-Italic":u}},g={Unicode:{"Courier-Oblique":c("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-BoldItalic":c("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),"Helvetica-Bold":c("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),Courier:c("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-BoldOblique":c("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Bold":c("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),Symbol:c("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"),Helvetica:c("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),"Helvetica-BoldOblique":c("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),ZapfDingbats:c("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-Bold":c("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Italic":c("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),"Times-Roman":c("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),"Helvetica-Oblique":c("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")}};t.events.push(["addFont",function(b){var y=b.font,m=g.Unicode[y.postScriptName];m&&(y.metadata.Unicode={},y.metadata.Unicode.widths=m.widths,y.metadata.Unicode.kerning=m.kerning);var k=f.Unicode[y.postScriptName];k&&(y.metadata.Unicode.encoding=k,y.encoding=k.codePages[0])}])}(Ve.API),function(t){var e=function(r){for(var a=r.length,i=new Uint8Array(a),n=0;n<a;n++)i[n]=r.charCodeAt(n);return i};t.API.events.push(["addFont",function(r){var a=void 0,i=r.font,n=r.instance;if(!i.isStandardFont){if(n===void 0)throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('"+i.postScriptName+"').");if(typeof(a=n.existsFileInVFS(i.postScriptName)===!1?n.loadFile(i.postScriptName):n.getFileFromVFS(i.postScriptName))!="string")throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('"+i.postScriptName+"').");(function(l,c){c=/^\x00\x01\x00\x00/.test(c)?e(c):e(bo(c)),l.metadata=t.API.TTFFont.open(c),l.metadata.Unicode=l.metadata.Unicode||{encoding:{},kerning:{},widths:[]},l.metadata.glyIdsUsed=[0]})(i,a)}}])}(Ve),function(t){function e(){return(Ye.canvg?Promise.resolve(Ye.canvg):Td(()=>import("./index.es-BJ7Ecz26.js"),__vite__mapDeps([0,1,2,3]))).catch(function(r){return Promise.reject(new Error("Could not load canvg: "+r))}).then(function(r){return r.default?r.default:r})}Ve.API.addSvgAsImage=function(r,a,i,n,l,c,u,f){if(isNaN(a)||isNaN(i))throw Pt.error("jsPDF.addSvgAsImage: Invalid coordinates",arguments),new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");if(isNaN(n)||isNaN(l))throw Pt.error("jsPDF.addSvgAsImage: Invalid measurements",arguments),new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");var g=document.createElement("canvas");g.width=n,g.height=l;var b=g.getContext("2d");b.fillStyle="#fff",b.fillRect(0,0,g.width,g.height);var y={ignoreMouse:!0,ignoreAnimation:!0,ignoreDimensions:!0},m=this;return e().then(function(k){return k.fromString(b,r,y)},function(){return Promise.reject(new Error("Could not load canvg."))}).then(function(k){return k.render(y)}).then(function(){m.addImage(g.toDataURL("image/jpeg",1),a,i,n,l,u,f)})}}(),Ve.API.putTotalPages=function(t){var e,r=0;parseInt(this.internal.getFont().id.substr(1),10)<15?(e=new RegExp(t,"g"),r=this.internal.getNumberOfPages()):(e=new RegExp(this.pdfEscape16(t,this.internal.getFont()),"g"),r=this.pdfEscape16(this.internal.getNumberOfPages()+"",this.internal.getFont()));for(var a=1;a<=this.internal.getNumberOfPages();a++)for(var i=0;i<this.internal.pages[a].length;i++)this.internal.pages[a][i]=this.internal.pages[a][i].replace(e,r);return this},Ve.API.viewerPreferences=function(t,e){var r;t=t||{},e=e||!1;var a,i,n,l={HideToolbar:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},HideMenubar:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},HideWindowUI:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},FitWindow:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},CenterWindow:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},DisplayDocTitle:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.4},NonFullScreenPageMode:{defaultValue:"UseNone",value:"UseNone",type:"name",explicitSet:!1,valueSet:["UseNone","UseOutlines","UseThumbs","UseOC"],pdfVersion:1.3},Direction:{defaultValue:"L2R",value:"L2R",type:"name",explicitSet:!1,valueSet:["L2R","R2L"],pdfVersion:1.3},ViewArea:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},ViewClip:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintArea:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintClip:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintScaling:{defaultValue:"AppDefault",value:"AppDefault",type:"name",explicitSet:!1,valueSet:["AppDefault","None"],pdfVersion:1.6},Duplex:{defaultValue:"",value:"none",type:"name",explicitSet:!1,valueSet:["Simplex","DuplexFlipShortEdge","DuplexFlipLongEdge","none"],pdfVersion:1.7},PickTrayByPDFSize:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.7},PrintPageRange:{defaultValue:"",value:"",type:"array",explicitSet:!1,valueSet:null,pdfVersion:1.7},NumCopies:{defaultValue:1,value:1,type:"integer",explicitSet:!1,valueSet:null,pdfVersion:1.7}},c=Object.keys(l),u=[],f=0,g=0,b=0;function y(k,N){var _,x=!1;for(_=0;_<k.length;_+=1)k[_]===N&&(x=!0);return x}if(this.internal.viewerpreferences===void 0&&(this.internal.viewerpreferences={},this.internal.viewerpreferences.configuration=JSON.parse(JSON.stringify(l)),this.internal.viewerpreferences.isSubscribed=!1),r=this.internal.viewerpreferences.configuration,t==="reset"||e===!0){var m=c.length;for(b=0;b<m;b+=1)r[c[b]].value=r[c[b]].defaultValue,r[c[b]].explicitSet=!1}if(kt(t)==="object"){for(i in t)if(n=t[i],y(c,i)&&n!==void 0){if(r[i].type==="boolean"&&typeof n=="boolean")r[i].value=n;else if(r[i].type==="name"&&y(r[i].valueSet,n))r[i].value=n;else if(r[i].type==="integer"&&Number.isInteger(n))r[i].value=n;else if(r[i].type==="array"){for(f=0;f<n.length;f+=1)if(a=!0,n[f].length===1&&typeof n[f][0]=="number")u.push(String(n[f]-1));else if(n[f].length>1){for(g=0;g<n[f].length;g+=1)typeof n[f][g]!="number"&&(a=!1);a===!0&&u.push([n[f][0]-1,n[f][1]-1].join(" "))}r[i].value="["+u.join(" ")+"]"}else r[i].value=r[i].defaultValue;r[i].explicitSet=!0}}return this.internal.viewerpreferences.isSubscribed===!1&&(this.internal.events.subscribe("putCatalog",function(){var k,N=[];for(k in r)r[k].explicitSet===!0&&(r[k].type==="name"?N.push("/"+k+" /"+r[k].value):N.push("/"+k+" "+r[k].value));N.length!==0&&this.internal.write(`/ViewerPreferences
<<
`+N.join(`
`)+`
>>`)}),this.internal.viewerpreferences.isSubscribed=!0),this.internal.viewerpreferences.configuration=r,this},function(t){var e=function(){var a='<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="'+this.internal.__metadata__.namespaceuri+'"><jspdf:metadata>',i=unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')),n=unescape(encodeURIComponent(a)),l=unescape(encodeURIComponent(this.internal.__metadata__.metadata)),c=unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")),u=unescape(encodeURIComponent("</x:xmpmeta>")),f=n.length+l.length+c.length+i.length+u.length;this.internal.__metadata__.metadata_object_number=this.internal.newObject(),this.internal.write("<< /Type /Metadata /Subtype /XML /Length "+f+" >>"),this.internal.write("stream"),this.internal.write(i+n+l+c+u),this.internal.write("endstream"),this.internal.write("endobj")},r=function(){this.internal.__metadata__.metadata_object_number&&this.internal.write("/Metadata "+this.internal.__metadata__.metadata_object_number+" 0 R")};t.addMetadata=function(a,i){return this.internal.__metadata__===void 0&&(this.internal.__metadata__={metadata:a,namespaceuri:i||"http://jspdf.default.namespaceuri/"},this.internal.events.subscribe("putCatalog",r),this.internal.events.subscribe("postPutResources",e)),this}}(Ve.API),function(t){var e=t.API,r=e.pdfEscape16=function(n,l){for(var c,u=l.metadata.Unicode.widths,f=["","0","00","000","0000"],g=[""],b=0,y=n.length;b<y;++b){if(c=l.metadata.characterToGlyph(n.charCodeAt(b)),l.metadata.glyIdsUsed.push(c),l.metadata.toUnicode[c]=n.charCodeAt(b),u.indexOf(c)==-1&&(u.push(c),u.push([parseInt(l.metadata.widthOfGlyph(c),10)])),c=="0")return g.join("");c=c.toString(16),g.push(f[4-c.length],c)}return g.join("")},a=function(n){var l,c,u,f,g,b,y;for(g=`/CIDInit /ProcSet findresource begin
12 dict begin
begincmap
/CIDSystemInfo <<
  /Registry (Adobe)
  /Ordering (UCS)
  /Supplement 0
>> def
/CMapName /Adobe-Identity-UCS def
/CMapType 2 def
1 begincodespacerange
<0000><ffff>
endcodespacerange`,u=[],b=0,y=(c=Object.keys(n).sort(function(m,k){return m-k})).length;b<y;b++)l=c[b],u.length>=100&&(g+=`
`+u.length+` beginbfchar
`+u.join(`
`)+`
endbfchar`,u=[]),n[l]!==void 0&&n[l]!==null&&typeof n[l].toString=="function"&&(f=("0000"+n[l].toString(16)).slice(-4),l=("0000"+(+l).toString(16)).slice(-4),u.push("<"+l+"><"+f+">"));return u.length&&(g+=`
`+u.length+` beginbfchar
`+u.join(`
`)+`
endbfchar
`),g+=`endcmap
CMapName currentdict /CMap defineresource pop
end
end`};e.events.push(["putFont",function(n){(function(l){var c=l.font,u=l.out,f=l.newObject,g=l.putStream;if(c.metadata instanceof t.API.TTFFont&&c.encoding==="Identity-H"){for(var b=c.metadata.Unicode.widths,y=c.metadata.subset.encode(c.metadata.glyIdsUsed,1),m="",k=0;k<y.length;k++)m+=String.fromCharCode(y[k]);var N=f();g({data:m,addLength1:!0,objectId:N}),u("endobj");var _=f();g({data:a(c.metadata.toUnicode),addLength1:!0,objectId:_}),u("endobj");var x=f();u("<<"),u("/Type /FontDescriptor"),u("/FontName /"+os(c.fontName)),u("/FontFile2 "+N+" 0 R"),u("/FontBBox "+t.API.PDFObject.convert(c.metadata.bbox)),u("/Flags "+c.metadata.flags),u("/StemV "+c.metadata.stemV),u("/ItalicAngle "+c.metadata.italicAngle),u("/Ascent "+c.metadata.ascender),u("/Descent "+c.metadata.decender),u("/CapHeight "+c.metadata.capHeight),u(">>"),u("endobj");var I=f();u("<<"),u("/Type /Font"),u("/BaseFont /"+os(c.fontName)),u("/FontDescriptor "+x+" 0 R"),u("/W "+t.API.PDFObject.convert(b)),u("/CIDToGIDMap /Identity"),u("/DW 1000"),u("/Subtype /CIDFontType2"),u("/CIDSystemInfo"),u("<<"),u("/Supplement 0"),u("/Registry (Adobe)"),u("/Ordering ("+c.encoding+")"),u(">>"),u(">>"),u("endobj"),c.objectNumber=f(),u("<<"),u("/Type /Font"),u("/Subtype /Type0"),u("/ToUnicode "+_+" 0 R"),u("/BaseFont /"+os(c.fontName)),u("/Encoding /"+c.encoding),u("/DescendantFonts ["+I+" 0 R]"),u(">>"),u("endobj"),c.isAlreadyPutted=!0}})(n)}]),e.events.push(["putFont",function(n){(function(l){var c=l.font,u=l.out,f=l.newObject,g=l.putStream;if(c.metadata instanceof t.API.TTFFont&&c.encoding==="WinAnsiEncoding"){for(var b=c.metadata.rawData,y="",m=0;m<b.length;m++)y+=String.fromCharCode(b[m]);var k=f();g({data:y,addLength1:!0,objectId:k}),u("endobj");var N=f();g({data:a(c.metadata.toUnicode),addLength1:!0,objectId:N}),u("endobj");var _=f();u("<<"),u("/Descent "+c.metadata.decender),u("/CapHeight "+c.metadata.capHeight),u("/StemV "+c.metadata.stemV),u("/Type /FontDescriptor"),u("/FontFile2 "+k+" 0 R"),u("/Flags 96"),u("/FontBBox "+t.API.PDFObject.convert(c.metadata.bbox)),u("/FontName /"+os(c.fontName)),u("/ItalicAngle "+c.metadata.italicAngle),u("/Ascent "+c.metadata.ascender),u(">>"),u("endobj"),c.objectNumber=f();for(var x=0;x<c.metadata.hmtx.widths.length;x++)c.metadata.hmtx.widths[x]=parseInt(c.metadata.hmtx.widths[x]*(1e3/c.metadata.head.unitsPerEm));u("<</Subtype/TrueType/Type/Font/ToUnicode "+N+" 0 R/BaseFont/"+os(c.fontName)+"/FontDescriptor "+_+" 0 R/Encoding/"+c.encoding+" /FirstChar 29 /LastChar 255 /Widths "+t.API.PDFObject.convert(c.metadata.hmtx.widths)+">>"),u("endobj"),c.isAlreadyPutted=!0}})(n)}]);var i=function(n){var l,c=n.text||"",u=n.x,f=n.y,g=n.options||{},b=n.mutex||{},y=b.pdfEscape,m=b.activeFontKey,k=b.fonts,N=m,_="",x=0,I="",B=k[N].encoding;if(k[N].encoding!=="Identity-H")return{text:c,x:u,y:f,options:g,mutex:b};for(I=c,N=m,Array.isArray(c)&&(I=c[0]),x=0;x<I.length;x+=1)k[N].metadata.hasOwnProperty("cmap")&&(l=k[N].metadata.cmap.unicode.codeMap[I[x].charCodeAt(0)]),l||I[x].charCodeAt(0)<256&&k[N].metadata.hasOwnProperty("Unicode")?_+=I[x]:_+="";var R="";return parseInt(N.slice(1))<14||B==="WinAnsiEncoding"?R=y(_,N).split("").map(function(Z){return Z.charCodeAt(0).toString(16)}).join(""):B==="Identity-H"&&(R=r(_,k[N])),b.isHex=!0,{text:R,x:u,y:f,options:g,mutex:b}};e.events.push(["postProcessText",function(n){var l=n.text||"",c=[],u={text:l,x:n.x,y:n.y,options:n.options,mutex:n.mutex};if(Array.isArray(l)){var f=0;for(f=0;f<l.length;f+=1)Array.isArray(l[f])&&l[f].length===3?c.push([i(Object.assign({},u,{text:l[f][0]})).text,l[f][1],l[f][2]]):c.push(i(Object.assign({},u,{text:l[f]})).text);n.text=c}else n.text=i(Object.assign({},u,{text:l})).text}])}(Ve),function(t){var e=function(){return this.internal.vFS===void 0&&(this.internal.vFS={}),!0};t.existsFileInVFS=function(r){return e.call(this),this.internal.vFS[r]!==void 0},t.addFileToVFS=function(r,a){return e.call(this),this.internal.vFS[r]=a,this},t.getFileFromVFS=function(r){return e.call(this),this.internal.vFS[r]!==void 0?this.internal.vFS[r]:null}}(Ve.API),function(t){t.__bidiEngine__=t.prototype.__bidiEngine__=function(a){var i,n,l,c,u,f,g,b=e,y=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],m=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],k={L:0,R:1,EN:2,AN:3,N:4,B:5,S:6},N={0:0,5:1,6:2,7:3,32:4,251:5,254:6,255:7},_=["(",")","(","<",">","<","[","]","[","{","}","{","«","»","«","‹","›","‹","⁅","⁆","⁅","⁽","⁾","⁽","₍","₎","₍","≤","≥","≤","〈","〉","〈","﹙","﹚","﹙","﹛","﹜","﹛","﹝","﹞","﹝","﹤","﹥","﹤"],x=new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/),I=!1,B=0;this.__bidiEngine__={};var R=function(E){var T=E.charCodeAt(),K=T>>8,H=N[K];return H!==void 0?b[256*H+(255&T)]:K===252||K===253?"AL":x.test(K)?"L":K===8?"R":"N"},Z=function(E){for(var T,K=0;K<E.length;K++){if((T=R(E.charAt(K)))==="L")return!1;if(T==="R")return!0}return!1},ee=function(E,T,K,H){var ce,ue,pe,de,fe=T[H];switch(fe){case"L":case"R":I=!1;break;case"N":case"AN":break;case"EN":I&&(fe="AN");break;case"AL":I=!0,fe="R";break;case"WS":fe="N";break;case"CS":H<1||H+1>=T.length||(ce=K[H-1])!=="EN"&&ce!=="AN"||(ue=T[H+1])!=="EN"&&ue!=="AN"?fe="N":I&&(ue="AN"),fe=ue===ce?ue:"N";break;case"ES":fe=(ce=H>0?K[H-1]:"B")==="EN"&&H+1<T.length&&T[H+1]==="EN"?"EN":"N";break;case"ET":if(H>0&&K[H-1]==="EN"){fe="EN";break}if(I){fe="N";break}for(pe=H+1,de=T.length;pe<de&&T[pe]==="ET";)pe++;fe=pe<de&&T[pe]==="EN"?"EN":"N";break;case"NSM":if(l&&!c){for(de=T.length,pe=H+1;pe<de&&T[pe]==="NSM";)pe++;if(pe<de){var ve=E[H],Ie=ve>=1425&&ve<=2303||ve===64286;if(ce=T[pe],Ie&&(ce==="R"||ce==="AL")){fe="R";break}}}fe=H<1||(ce=T[H-1])==="B"?"N":K[H-1];break;case"B":I=!1,i=!0,fe=B;break;case"S":n=!0,fe="N";break;case"LRE":case"RLE":case"LRO":case"RLO":case"PDF":I=!1;break;case"BN":fe="N"}return fe},A=function(E,T,K){var H=E.split("");return K&&S(H,K,{hiLevel:B}),H.reverse(),T&&T.reverse(),H.join("")},S=function(E,T,K){var H,ce,ue,pe,de,fe=-1,ve=E.length,Ie=0,C=[],z=B?m:y,U=[];for(I=!1,i=!1,n=!1,ce=0;ce<ve;ce++)U[ce]=R(E[ce]);for(ue=0;ue<ve;ue++){if(de=Ie,C[ue]=ee(E,U,C,ue),H=240&(Ie=z[de][k[C[ue]]]),Ie&=15,T[ue]=pe=z[Ie][5],H>0)if(H===16){for(ce=fe;ce<ue;ce++)T[ce]=1;fe=-1}else fe=-1;if(z[Ie][6])fe===-1&&(fe=ue);else if(fe>-1){for(ce=fe;ce<ue;ce++)T[ce]=pe;fe=-1}U[ue]==="B"&&(T[ue]=0),K.hiLevel|=pe}n&&function(Y,re,V){for(var Q=0;Q<V;Q++)if(Y[Q]==="S"){re[Q]=B;for(var se=Q-1;se>=0&&Y[se]==="WS";se--)re[se]=B}}(U,T,ve)},M=function(E,T,K,H,ce){if(!(ce.hiLevel<E)){if(E===1&&B===1&&!i)return T.reverse(),void(K&&K.reverse());for(var ue,pe,de,fe,ve=T.length,Ie=0;Ie<ve;){if(H[Ie]>=E){for(de=Ie+1;de<ve&&H[de]>=E;)de++;for(fe=Ie,pe=de-1;fe<pe;fe++,pe--)ue=T[fe],T[fe]=T[pe],T[pe]=ue,K&&(ue=K[fe],K[fe]=K[pe],K[pe]=ue);Ie=de}Ie++}}},ne=function(E,T,K){var H=E.split(""),ce={hiLevel:B};return K||(K=[]),S(H,K,ce),function(ue,pe,de){if(de.hiLevel!==0&&g)for(var fe,ve=0;ve<ue.length;ve++)pe[ve]===1&&(fe=_.indexOf(ue[ve]))>=0&&(ue[ve]=_[fe+1])}(H,K,ce),M(2,H,T,K,ce),M(1,H,T,K,ce),H.join("")};return this.__bidiEngine__.doBidiReorder=function(E,T,K){if(function(ce,ue){if(ue)for(var pe=0;pe<ce.length;pe++)ue[pe]=pe;c===void 0&&(c=Z(ce)),f===void 0&&(f=Z(ce))}(E,T),l||!u||f)if(l&&u&&c^f)B=c?1:0,E=A(E,T,K);else if(!l&&u&&f)B=c?1:0,E=ne(E,T,K),E=A(E,T);else if(!l||c||u||f){if(l&&!u&&c^f)E=A(E,T),c?(B=0,E=ne(E,T,K)):(B=1,E=ne(E,T,K),E=A(E,T));else if(l&&c&&!u&&f)B=1,E=ne(E,T,K),E=A(E,T);else if(!l&&!u&&c^f){var H=g;c?(B=1,E=ne(E,T,K),B=0,g=!1,E=ne(E,T,K),g=H):(B=0,E=ne(E,T,K),E=A(E,T),B=1,g=!1,E=ne(E,T,K),g=H,E=A(E,T))}}else B=0,E=ne(E,T,K);else B=c?1:0,E=ne(E,T,K);return E},this.__bidiEngine__.setOptions=function(E){E&&(l=E.isInputVisual,u=E.isOutputVisual,c=E.isInputRtl,f=E.isOutputRtl,g=E.isSymmetricSwapping)},this.__bidiEngine__.setOptions(a),this.__bidiEngine__};var e=["BN","BN","BN","BN","BN","BN","BN","BN","BN","S","B","S","WS","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","B","B","B","S","WS","N","N","ET","ET","ET","N","N","N","N","N","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","BN","BN","BN","BN","BN","BN","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","CS","N","ET","ET","ET","ET","N","N","N","N","L","N","N","BN","N","N","ET","ET","EN","EN","N","L","N","N","N","EN","L","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","N","N","N","N","N","ET","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","R","NSM","R","NSM","NSM","R","NSM","NSM","R","NSM","N","N","N","N","N","N","N","N","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","N","N","N","N","N","R","R","R","R","R","N","N","N","N","N","N","N","N","N","N","N","AN","AN","AN","AN","AN","AN","N","N","AL","ET","ET","AL","CS","AL","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","AN","AN","AN","AN","AN","AN","AN","AN","AN","ET","AN","AN","AL","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","N","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","NSM","NSM","N","NSM","NSM","NSM","NSM","AL","AL","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","N","N","N","N","N","N","N","N","N","N","N","N","N","N","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","R","R","N","N","N","N","R","N","N","N","N","N","WS","WS","WS","WS","WS","WS","WS","WS","WS","WS","WS","BN","BN","BN","L","R","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","WS","B","LRE","RLE","PDF","LRO","RLO","CS","ET","ET","ET","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","CS","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","WS","BN","BN","BN","BN","BN","N","LRI","RLI","FSI","PDI","BN","BN","BN","BN","BN","BN","EN","L","N","N","EN","EN","EN","EN","EN","EN","ES","ES","N","N","N","L","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","ES","ES","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","L","L","N","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","N","N","N","N","N","R","NSM","R","R","R","R","R","R","R","R","R","R","ES","R","R","R","R","R","R","R","R","R","R","R","R","R","N","R","R","R","R","R","N","R","N","R","R","N","R","R","N","R","R","R","R","R","R","R","R","R","R","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","CS","N","CS","N","N","CS","N","N","N","N","N","N","N","N","N","ET","N","N","ES","ES","N","N","N","N","N","ET","ET","N","N","N","N","N","AL","AL","AL","AL","AL","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","N","BN","N","N","N","ET","ET","ET","N","N","N","N","N","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","L","L","L","L","L","L","N","N","L","L","L","L","L","L","N","N","L","L","L","L","L","L","N","N","L","L","L","N","N","N","ET","ET","N","N","N","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N"],r=new t.__bidiEngine__({isInputVisual:!0});t.API.events.push(["postProcessText",function(a){var i=a.text,n=(a.x,a.y,a.options||{}),l=(a.mutex,n.lang,[]);if(n.isInputVisual=typeof n.isInputVisual!="boolean"||n.isInputVisual,r.setOptions(n),Object.prototype.toString.call(i)==="[object Array]"){var c=0;for(l=[],c=0;c<i.length;c+=1)Object.prototype.toString.call(i[c])==="[object Array]"?l.push([r.doBidiReorder(i[c][0]),i[c][1],i[c][2]]):l.push([r.doBidiReorder(i[c])]);a.text=l}else a.text=r.doBidiReorder(i);r.setOptions({isInputVisual:!0})}])}(Ve),Ve.API.TTFFont=function(){function t(e){var r;if(this.rawData=e,r=this.contents=new Yn(e),this.contents.pos=4,r.readString(4)==="ttcf")throw new Error("TTCF not supported.");r.pos=0,this.parse(),this.subset=new Sg(this),this.registerTTF()}return t.open=function(e){return new t(e)},t.prototype.parse=function(){return this.directory=new ug(this.contents),this.head=new fg(this),this.name=new vg(this),this.cmap=new bp(this),this.toUnicode={},this.hhea=new pg(this),this.maxp=new yg(this),this.hmtx=new xg(this),this.post=new gg(this),this.os2=new mg(this),this.loca=new Ng(this),this.glyf=new wg(this),this.ascender=this.os2.exists&&this.os2.ascender||this.hhea.ascender,this.decender=this.os2.exists&&this.os2.decender||this.hhea.decender,this.lineGap=this.os2.exists&&this.os2.lineGap||this.hhea.lineGap,this.bbox=[this.head.xMin,this.head.yMin,this.head.xMax,this.head.yMax]},t.prototype.registerTTF=function(){var e,r,a,i,n;if(this.scaleFactor=1e3/this.head.unitsPerEm,this.bbox=(function(){var l,c,u,f;for(f=[],l=0,c=(u=this.bbox).length;l<c;l++)e=u[l],f.push(Math.round(e*this.scaleFactor));return f}).call(this),this.stemV=0,this.post.exists?(a=255&(i=this.post.italic_angle),32768&(r=i>>16)&&(r=-(1+(65535^r))),this.italicAngle=+(r+"."+a)):this.italicAngle=0,this.ascender=Math.round(this.ascender*this.scaleFactor),this.decender=Math.round(this.decender*this.scaleFactor),this.lineGap=Math.round(this.lineGap*this.scaleFactor),this.capHeight=this.os2.exists&&this.os2.capHeight||this.ascender,this.xHeight=this.os2.exists&&this.os2.xHeight||0,this.familyClass=(this.os2.exists&&this.os2.familyClass||0)>>8,this.isSerif=(n=this.familyClass)===1||n===2||n===3||n===4||n===5||n===7,this.isScript=this.familyClass===10,this.flags=0,this.post.isFixedPitch&&(this.flags|=1),this.isSerif&&(this.flags|=2),this.isScript&&(this.flags|=8),this.italicAngle!==0&&(this.flags|=64),this.flags|=32,!this.cmap.unicode)throw new Error("No unicode cmap for font")},t.prototype.characterToGlyph=function(e){var r;return((r=this.cmap.unicode)!=null?r.codeMap[e]:void 0)||0},t.prototype.widthOfGlyph=function(e){var r;return r=1e3/this.head.unitsPerEm,this.hmtx.forGlyph(e).advance*r},t.prototype.widthOfString=function(e,r,a){var i,n,l,c;for(l=0,n=0,c=(e=""+e).length;0<=c?n<c:n>c;n=0<=c?++n:--n)i=e.charCodeAt(n),l+=this.widthOfGlyph(this.characterToGlyph(i))+a*(1e3/r)||0;return l*(r/1e3)},t.prototype.lineHeight=function(e,r){var a;return r==null&&(r=!1),a=r?this.lineGap:0,(this.ascender+a-this.decender)/1e3*e},t}();var ja,Yn=function(){function t(e){this.data=e??[],this.pos=0,this.length=this.data.length}return t.prototype.readByte=function(){return this.data[this.pos++]},t.prototype.writeByte=function(e){return this.data[this.pos++]=e},t.prototype.readUInt32=function(){return 16777216*this.readByte()+(this.readByte()<<16)+(this.readByte()<<8)+this.readByte()},t.prototype.writeUInt32=function(e){return this.writeByte(e>>>24&255),this.writeByte(e>>16&255),this.writeByte(e>>8&255),this.writeByte(255&e)},t.prototype.readInt32=function(){var e;return(e=this.readUInt32())>=2147483648?e-4294967296:e},t.prototype.writeInt32=function(e){return e<0&&(e+=4294967296),this.writeUInt32(e)},t.prototype.readUInt16=function(){return this.readByte()<<8|this.readByte()},t.prototype.writeUInt16=function(e){return this.writeByte(e>>8&255),this.writeByte(255&e)},t.prototype.readInt16=function(){var e;return(e=this.readUInt16())>=32768?e-65536:e},t.prototype.writeInt16=function(e){return e<0&&(e+=65536),this.writeUInt16(e)},t.prototype.readString=function(e){var r,a;for(a=[],r=0;0<=e?r<e:r>e;r=0<=e?++r:--r)a[r]=String.fromCharCode(this.readByte());return a.join("")},t.prototype.writeString=function(e){var r,a,i;for(i=[],r=0,a=e.length;0<=a?r<a:r>a;r=0<=a?++r:--r)i.push(this.writeByte(e.charCodeAt(r)));return i},t.prototype.readShort=function(){return this.readInt16()},t.prototype.writeShort=function(e){return this.writeInt16(e)},t.prototype.readLongLong=function(){var e,r,a,i,n,l,c,u;return e=this.readByte(),r=this.readByte(),a=this.readByte(),i=this.readByte(),n=this.readByte(),l=this.readByte(),c=this.readByte(),u=this.readByte(),128&e?-1*(72057594037927940*(255^e)+281474976710656*(255^r)+1099511627776*(255^a)+4294967296*(255^i)+16777216*(255^n)+65536*(255^l)+256*(255^c)+(255^u)+1):72057594037927940*e+281474976710656*r+1099511627776*a+4294967296*i+16777216*n+65536*l+256*c+u},t.prototype.writeLongLong=function(e){var r,a;return r=Math.floor(e/4294967296),a=4294967295&e,this.writeByte(r>>24&255),this.writeByte(r>>16&255),this.writeByte(r>>8&255),this.writeByte(255&r),this.writeByte(a>>24&255),this.writeByte(a>>16&255),this.writeByte(a>>8&255),this.writeByte(255&a)},t.prototype.readInt=function(){return this.readInt32()},t.prototype.writeInt=function(e){return this.writeInt32(e)},t.prototype.read=function(e){var r,a;for(r=[],a=0;0<=e?a<e:a>e;a=0<=e?++a:--a)r.push(this.readByte());return r},t.prototype.write=function(e){var r,a,i,n;for(n=[],a=0,i=e.length;a<i;a++)r=e[a],n.push(this.writeByte(r));return n},t}(),ug=function(){var t;function e(r){var a,i,n;for(this.scalarType=r.readInt(),this.tableCount=r.readShort(),this.searchRange=r.readShort(),this.entrySelector=r.readShort(),this.rangeShift=r.readShort(),this.tables={},i=0,n=this.tableCount;0<=n?i<n:i>n;i=0<=n?++i:--i)a={tag:r.readString(4),checksum:r.readInt(),offset:r.readInt(),length:r.readInt()},this.tables[a.tag]=a}return e.prototype.encode=function(r){var a,i,n,l,c,u,f,g,b,y,m,k,N;for(N in m=Object.keys(r).length,u=Math.log(2),b=16*Math.floor(Math.log(m)/u),l=Math.floor(b/u),g=16*m-b,(i=new Yn).writeInt(this.scalarType),i.writeShort(m),i.writeShort(b),i.writeShort(l),i.writeShort(g),n=16*m,f=i.pos+n,c=null,k=[],r)for(y=r[N],i.writeString(N),i.writeInt(t(y)),i.writeInt(f),i.writeInt(y.length),k=k.concat(y),N==="head"&&(c=f),f+=y.length;f%4;)k.push(0),f++;return i.write(k),a=2981146554-t(i.data),i.pos=c+8,i.writeUInt32(a),i.data},t=function(r){var a,i,n,l;for(r=vp.call(r);r.length%4;)r.push(0);for(n=new Yn(r),i=0,a=0,l=r.length;a<l;a=a+=4)i+=n.readUInt32();return 4294967295&i},e}(),hg={}.hasOwnProperty,qa=function(t,e){for(var r in e)hg.call(e,r)&&(t[r]=e[r]);function a(){this.constructor=t}return a.prototype=e.prototype,t.prototype=new a,t.__super__=e.prototype,t};ja=function(){function t(e){var r;this.file=e,r=this.file.directory.tables[this.tag],this.exists=!!r,r&&(this.offset=r.offset,this.length=r.length,this.parse(this.file.contents))}return t.prototype.parse=function(){},t.prototype.encode=function(){},t.prototype.raw=function(){return this.exists?(this.file.contents.pos=this.offset,this.file.contents.read(this.length)):null},t}();var fg=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return qa(e,ja),e.prototype.tag="head",e.prototype.parse=function(r){return r.pos=this.offset,this.version=r.readInt(),this.revision=r.readInt(),this.checkSumAdjustment=r.readInt(),this.magicNumber=r.readInt(),this.flags=r.readShort(),this.unitsPerEm=r.readShort(),this.created=r.readLongLong(),this.modified=r.readLongLong(),this.xMin=r.readShort(),this.yMin=r.readShort(),this.xMax=r.readShort(),this.yMax=r.readShort(),this.macStyle=r.readShort(),this.lowestRecPPEM=r.readShort(),this.fontDirectionHint=r.readShort(),this.indexToLocFormat=r.readShort(),this.glyphDataFormat=r.readShort()},e.prototype.encode=function(r){var a;return(a=new Yn).writeInt(this.version),a.writeInt(this.revision),a.writeInt(this.checkSumAdjustment),a.writeInt(this.magicNumber),a.writeShort(this.flags),a.writeShort(this.unitsPerEm),a.writeLongLong(this.created),a.writeLongLong(this.modified),a.writeShort(this.xMin),a.writeShort(this.yMin),a.writeShort(this.xMax),a.writeShort(this.yMax),a.writeShort(this.macStyle),a.writeShort(this.lowestRecPPEM),a.writeShort(this.fontDirectionHint),a.writeShort(r),a.writeShort(this.glyphDataFormat),a.data},e}(),Vh=function(){function t(e,r){var a,i,n,l,c,u,f,g,b,y,m,k,N,_,x,I,B;switch(this.platformID=e.readUInt16(),this.encodingID=e.readShort(),this.offset=r+e.readInt(),b=e.pos,e.pos=this.offset,this.format=e.readUInt16(),this.length=e.readUInt16(),this.language=e.readUInt16(),this.isUnicode=this.platformID===3&&this.encodingID===1&&this.format===4||this.platformID===0&&this.format===4,this.codeMap={},this.format){case 0:for(u=0;u<256;++u)this.codeMap[u]=e.readByte();break;case 4:for(m=e.readUInt16(),y=m/2,e.pos+=6,n=function(){var R,Z;for(Z=[],u=R=0;0<=y?R<y:R>y;u=0<=y?++R:--R)Z.push(e.readUInt16());return Z}(),e.pos+=2,N=function(){var R,Z;for(Z=[],u=R=0;0<=y?R<y:R>y;u=0<=y?++R:--R)Z.push(e.readUInt16());return Z}(),f=function(){var R,Z;for(Z=[],u=R=0;0<=y?R<y:R>y;u=0<=y?++R:--R)Z.push(e.readUInt16());return Z}(),g=function(){var R,Z;for(Z=[],u=R=0;0<=y?R<y:R>y;u=0<=y?++R:--R)Z.push(e.readUInt16());return Z}(),i=(this.length-e.pos+this.offset)/2,c=function(){var R,Z;for(Z=[],u=R=0;0<=i?R<i:R>i;u=0<=i?++R:--R)Z.push(e.readUInt16());return Z}(),u=x=0,B=n.length;x<B;u=++x)for(_=n[u],a=I=k=N[u];k<=_?I<=_:I>=_;a=k<=_?++I:--I)g[u]===0?l=a+f[u]:(l=c[g[u]/2+(a-k)-(y-u)]||0)!==0&&(l+=f[u]),this.codeMap[a]=65535&l}e.pos=b}return t.encode=function(e,r){var a,i,n,l,c,u,f,g,b,y,m,k,N,_,x,I,B,R,Z,ee,A,S,M,ne,E,T,K,H,ce,ue,pe,de,fe,ve,Ie,C,z,U,Y,re,V,Q,se,Ne,Se,De;switch(H=new Yn,l=Object.keys(e).sort(function(_e,Ge){return _e-Ge}),r){case"macroman":for(N=0,_=function(){var _e=[];for(k=0;k<256;++k)_e.push(0);return _e}(),I={0:0},n={},ce=0,fe=l.length;ce<fe;ce++)I[se=e[i=l[ce]]]==null&&(I[se]=++N),n[i]={old:e[i],new:I[e[i]]},_[i]=I[e[i]];return H.writeUInt16(1),H.writeUInt16(0),H.writeUInt32(12),H.writeUInt16(0),H.writeUInt16(262),H.writeUInt16(0),H.write(_),{charMap:n,subtable:H.data,maxGlyphID:N+1};case"unicode":for(T=[],b=[],B=0,I={},a={},x=f=null,ue=0,ve=l.length;ue<ve;ue++)I[Z=e[i=l[ue]]]==null&&(I[Z]=++B),a[i]={old:Z,new:I[Z]},c=I[Z]-i,x!=null&&c===f||(x&&b.push(x),T.push(i),f=c),x=i;for(x&&b.push(x),b.push(65535),T.push(65535),ne=2*(M=T.length),S=2*Math.pow(Math.log(M)/Math.LN2,2),y=Math.log(S/2)/Math.LN2,A=2*M-S,u=[],ee=[],m=[],k=pe=0,Ie=T.length;pe<Ie;k=++pe){if(E=T[k],g=b[k],E===65535){u.push(0),ee.push(0);break}if(E-(K=a[E].new)>=32768)for(u.push(0),ee.push(2*(m.length+M-k)),i=de=E;E<=g?de<=g:de>=g;i=E<=g?++de:--de)m.push(a[i].new);else u.push(K-E),ee.push(0)}for(H.writeUInt16(3),H.writeUInt16(1),H.writeUInt32(12),H.writeUInt16(4),H.writeUInt16(16+8*M+2*m.length),H.writeUInt16(0),H.writeUInt16(ne),H.writeUInt16(S),H.writeUInt16(y),H.writeUInt16(A),V=0,C=b.length;V<C;V++)i=b[V],H.writeUInt16(i);for(H.writeUInt16(0),Q=0,z=T.length;Q<z;Q++)i=T[Q],H.writeUInt16(i);for(Ne=0,U=u.length;Ne<U;Ne++)c=u[Ne],H.writeUInt16(c);for(Se=0,Y=ee.length;Se<Y;Se++)R=ee[Se],H.writeUInt16(R);for(De=0,re=m.length;De<re;De++)N=m[De],H.writeUInt16(N);return{charMap:a,subtable:H.data,maxGlyphID:B+1}}},t}(),bp=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return qa(e,ja),e.prototype.tag="cmap",e.prototype.parse=function(r){var a,i,n;for(r.pos=this.offset,this.version=r.readUInt16(),n=r.readUInt16(),this.tables=[],this.unicode=null,i=0;0<=n?i<n:i>n;i=0<=n?++i:--i)a=new Vh(r,this.offset),this.tables.push(a),a.isUnicode&&this.unicode==null&&(this.unicode=a);return!0},e.encode=function(r,a){var i,n;return a==null&&(a="macroman"),i=Vh.encode(r,a),(n=new Yn).writeUInt16(0),n.writeUInt16(1),i.table=n.data.concat(i.subtable),i},e}(),pg=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return qa(e,ja),e.prototype.tag="hhea",e.prototype.parse=function(r){return r.pos=this.offset,this.version=r.readInt(),this.ascender=r.readShort(),this.decender=r.readShort(),this.lineGap=r.readShort(),this.advanceWidthMax=r.readShort(),this.minLeftSideBearing=r.readShort(),this.minRightSideBearing=r.readShort(),this.xMaxExtent=r.readShort(),this.caretSlopeRise=r.readShort(),this.caretSlopeRun=r.readShort(),this.caretOffset=r.readShort(),r.pos+=8,this.metricDataFormat=r.readShort(),this.numberOfMetrics=r.readUInt16()},e}(),mg=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return qa(e,ja),e.prototype.tag="OS/2",e.prototype.parse=function(r){if(r.pos=this.offset,this.version=r.readUInt16(),this.averageCharWidth=r.readShort(),this.weightClass=r.readUInt16(),this.widthClass=r.readUInt16(),this.type=r.readShort(),this.ySubscriptXSize=r.readShort(),this.ySubscriptYSize=r.readShort(),this.ySubscriptXOffset=r.readShort(),this.ySubscriptYOffset=r.readShort(),this.ySuperscriptXSize=r.readShort(),this.ySuperscriptYSize=r.readShort(),this.ySuperscriptXOffset=r.readShort(),this.ySuperscriptYOffset=r.readShort(),this.yStrikeoutSize=r.readShort(),this.yStrikeoutPosition=r.readShort(),this.familyClass=r.readShort(),this.panose=function(){var a,i;for(i=[],a=0;a<10;++a)i.push(r.readByte());return i}(),this.charRange=function(){var a,i;for(i=[],a=0;a<4;++a)i.push(r.readInt());return i}(),this.vendorID=r.readString(4),this.selection=r.readShort(),this.firstCharIndex=r.readShort(),this.lastCharIndex=r.readShort(),this.version>0&&(this.ascent=r.readShort(),this.descent=r.readShort(),this.lineGap=r.readShort(),this.winAscent=r.readShort(),this.winDescent=r.readShort(),this.codePageRange=function(){var a,i;for(i=[],a=0;a<2;a=++a)i.push(r.readInt());return i}(),this.version>1))return this.xHeight=r.readShort(),this.capHeight=r.readShort(),this.defaultChar=r.readShort(),this.breakChar=r.readShort(),this.maxContext=r.readShort()},e}(),gg=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return qa(e,ja),e.prototype.tag="post",e.prototype.parse=function(r){var a,i,n;switch(r.pos=this.offset,this.format=r.readInt(),this.italicAngle=r.readInt(),this.underlinePosition=r.readShort(),this.underlineThickness=r.readShort(),this.isFixedPitch=r.readInt(),this.minMemType42=r.readInt(),this.maxMemType42=r.readInt(),this.minMemType1=r.readInt(),this.maxMemType1=r.readInt(),this.format){case 65536:break;case 131072:var l;for(i=r.readUInt16(),this.glyphNameIndex=[],l=0;0<=i?l<i:l>i;l=0<=i?++l:--l)this.glyphNameIndex.push(r.readUInt16());for(this.names=[],n=[];r.pos<this.offset+this.length;)a=r.readByte(),n.push(this.names.push(r.readString(a)));return n;case 151552:return i=r.readUInt16(),this.offsets=r.read(i);case 196608:break;case 262144:return this.map=(function(){var c,u,f;for(f=[],l=c=0,u=this.file.maxp.numGlyphs;0<=u?c<u:c>u;l=0<=u?++c:--c)f.push(r.readUInt32());return f}).call(this)}},e}(),bg=function(t,e){this.raw=t,this.length=t.length,this.platformID=e.platformID,this.encodingID=e.encodingID,this.languageID=e.languageID},vg=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return qa(e,ja),e.prototype.tag="name",e.prototype.parse=function(r){var a,i,n,l,c,u,f,g,b,y,m;for(r.pos=this.offset,r.readShort(),a=r.readShort(),u=r.readShort(),i=[],l=0;0<=a?l<a:l>a;l=0<=a?++l:--l)i.push({platformID:r.readShort(),encodingID:r.readShort(),languageID:r.readShort(),nameID:r.readShort(),length:r.readShort(),offset:this.offset+u+r.readShort()});for(f={},l=b=0,y=i.length;b<y;l=++b)n=i[l],r.pos=n.offset,g=r.readString(n.length),c=new bg(g,n),f[m=n.nameID]==null&&(f[m]=[]),f[n.nameID].push(c);this.strings=f,this.copyright=f[0],this.fontFamily=f[1],this.fontSubfamily=f[2],this.uniqueSubfamily=f[3],this.fontName=f[4],this.version=f[5];try{this.postscriptName=f[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g,"")}catch{this.postscriptName=f[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g,"")}return this.trademark=f[7],this.manufacturer=f[8],this.designer=f[9],this.description=f[10],this.vendorUrl=f[11],this.designerUrl=f[12],this.license=f[13],this.licenseUrl=f[14],this.preferredFamily=f[15],this.preferredSubfamily=f[17],this.compatibleFull=f[18],this.sampleText=f[19]},e}(),yg=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return qa(e,ja),e.prototype.tag="maxp",e.prototype.parse=function(r){return r.pos=this.offset,this.version=r.readInt(),this.numGlyphs=r.readUInt16(),this.maxPoints=r.readUInt16(),this.maxContours=r.readUInt16(),this.maxCompositePoints=r.readUInt16(),this.maxComponentContours=r.readUInt16(),this.maxZones=r.readUInt16(),this.maxTwilightPoints=r.readUInt16(),this.maxStorage=r.readUInt16(),this.maxFunctionDefs=r.readUInt16(),this.maxInstructionDefs=r.readUInt16(),this.maxStackElements=r.readUInt16(),this.maxSizeOfInstructions=r.readUInt16(),this.maxComponentElements=r.readUInt16(),this.maxComponentDepth=r.readUInt16()},e}(),xg=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return qa(e,ja),e.prototype.tag="hmtx",e.prototype.parse=function(r){var a,i,n,l,c,u,f;for(r.pos=this.offset,this.metrics=[],a=0,u=this.file.hhea.numberOfMetrics;0<=u?a<u:a>u;a=0<=u?++a:--a)this.metrics.push({advance:r.readUInt16(),lsb:r.readInt16()});for(n=this.file.maxp.numGlyphs-this.file.hhea.numberOfMetrics,this.leftSideBearings=function(){var g,b;for(b=[],a=g=0;0<=n?g<n:g>n;a=0<=n?++g:--g)b.push(r.readInt16());return b}(),this.widths=(function(){var g,b,y,m;for(m=[],g=0,b=(y=this.metrics).length;g<b;g++)l=y[g],m.push(l.advance);return m}).call(this),i=this.widths[this.widths.length-1],f=[],a=c=0;0<=n?c<n:c>n;a=0<=n?++c:--c)f.push(this.widths.push(i));return f},e.prototype.forGlyph=function(r){return r in this.metrics?this.metrics[r]:{advance:this.metrics[this.metrics.length-1].advance,lsb:this.leftSideBearings[r-this.metrics.length]}},e}(),vp=[].slice,wg=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return qa(e,ja),e.prototype.tag="glyf",e.prototype.parse=function(){return this.cache={}},e.prototype.glyphFor=function(r){var a,i,n,l,c,u,f,g,b,y;return r in this.cache?this.cache[r]:(l=this.file.loca,a=this.file.contents,i=l.indexOf(r),(n=l.lengthOf(r))===0?this.cache[r]=null:(a.pos=this.offset+i,c=(u=new Yn(a.read(n))).readShort(),g=u.readShort(),y=u.readShort(),f=u.readShort(),b=u.readShort(),this.cache[r]=c===-1?new kg(u,g,y,f,b):new jg(u,c,g,y,f,b),this.cache[r]))},e.prototype.encode=function(r,a,i){var n,l,c,u,f;for(c=[],l=[],u=0,f=a.length;u<f;u++)n=r[a[u]],l.push(c.length),n&&(c=c.concat(n.encode(i)));return l.push(c.length),{table:c,offsets:l}},e}(),jg=function(){function t(e,r,a,i,n,l){this.raw=e,this.numberOfContours=r,this.xMin=a,this.yMin=i,this.xMax=n,this.yMax=l,this.compound=!1}return t.prototype.encode=function(){return this.raw.data},t}(),kg=function(){function t(e,r,a,i,n){var l,c;for(this.raw=e,this.xMin=r,this.yMin=a,this.xMax=i,this.yMax=n,this.compound=!0,this.glyphIDs=[],this.glyphOffsets=[],l=this.raw;c=l.readShort(),this.glyphOffsets.push(l.pos),this.glyphIDs.push(l.readUInt16()),32&c;)l.pos+=1&c?4:2,128&c?l.pos+=8:64&c?l.pos+=4:8&c&&(l.pos+=2)}return t.prototype.encode=function(){var e,r,a;for(r=new Yn(vp.call(this.raw.data)),e=0,a=this.glyphIDs.length;e<a;++e)r.pos=this.glyphOffsets[e];return r.data},t}(),Ng=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return qa(e,ja),e.prototype.tag="loca",e.prototype.parse=function(r){var a,i;return r.pos=this.offset,a=this.file.head.indexToLocFormat,this.offsets=a===0?(function(){var n,l;for(l=[],i=0,n=this.length;i<n;i+=2)l.push(2*r.readUInt16());return l}).call(this):(function(){var n,l;for(l=[],i=0,n=this.length;i<n;i+=4)l.push(r.readUInt32());return l}).call(this)},e.prototype.indexOf=function(r){return this.offsets[r]},e.prototype.lengthOf=function(r){return this.offsets[r+1]-this.offsets[r]},e.prototype.encode=function(r,a){for(var i=new Uint32Array(this.offsets.length),n=0,l=0,c=0;c<i.length;++c)if(i[c]=n,l<a.length&&a[l]==c){++l,i[c]=n;var u=this.offsets[c],f=this.offsets[c+1]-u;f>0&&(n+=f)}for(var g=new Array(4*i.length),b=0;b<i.length;++b)g[4*b+3]=255&i[b],g[4*b+2]=(65280&i[b])>>8,g[4*b+1]=(16711680&i[b])>>16,g[4*b]=(4278190080&i[b])>>24;return g},e}(),Sg=function(){function t(e){this.font=e,this.subset={},this.unicodes={},this.next=33}return t.prototype.generateCmap=function(){var e,r,a,i,n;for(r in i=this.font.cmap.tables[0].codeMap,e={},n=this.subset)a=n[r],e[r]=i[a];return e},t.prototype.glyphsFor=function(e){var r,a,i,n,l,c,u;for(i={},l=0,c=e.length;l<c;l++)i[n=e[l]]=this.font.glyf.glyphFor(n);for(n in r=[],i)(a=i[n])!=null&&a.compound&&r.push.apply(r,a.glyphIDs);if(r.length>0)for(n in u=this.glyphsFor(r))a=u[n],i[n]=a;return i},t.prototype.encode=function(e,r){var a,i,n,l,c,u,f,g,b,y,m,k,N,_,x;for(i in a=bp.encode(this.generateCmap(),"unicode"),l=this.glyphsFor(e),m={0:0},x=a.charMap)m[(u=x[i]).old]=u.new;for(k in y=a.maxGlyphID,l)k in m||(m[k]=y++);return g=function(I){var B,R;for(B in R={},I)R[I[B]]=B;return R}(m),b=Object.keys(g).sort(function(I,B){return I-B}),N=function(){var I,B,R;for(R=[],I=0,B=b.length;I<B;I++)c=b[I],R.push(g[c]);return R}(),n=this.font.glyf.encode(l,N,m),f=this.font.loca.encode(n.offsets,N),_={cmap:this.font.cmap.raw(),glyf:n.table,loca:f,hmtx:this.font.hmtx.raw(),hhea:this.font.hhea.raw(),maxp:this.font.maxp.raw(),post:this.font.post.raw(),name:this.font.name.raw(),head:this.font.head.encode(r)},this.font.os2.exists&&(_["OS/2"]=this.font.os2.raw()),this.font.directory.encode(_)},t}();Ve.API.PDFObject=function(){var t;function e(){}return t=function(r,a){return(Array(a+1).join("0")+r).slice(-a)},e.convert=function(r){var a,i,n,l;if(Array.isArray(r))return"["+function(){var c,u,f;for(f=[],c=0,u=r.length;c<u;c++)a=r[c],f.push(e.convert(a));return f}().join(" ")+"]";if(typeof r=="string")return"/"+r;if(r!=null&&r.isString)return"("+r+")";if(r instanceof Date)return"(D:"+t(r.getUTCFullYear(),4)+t(r.getUTCMonth(),2)+t(r.getUTCDate(),2)+t(r.getUTCHours(),2)+t(r.getUTCMinutes(),2)+t(r.getUTCSeconds(),2)+"Z)";if({}.toString.call(r)==="[object Object]"){for(i in n=["<<"],r)l=r[i],n.push("/"+i+" "+e.convert(l));return n.push(">>"),n.join(`
`)}return""+r},e}();function yp(t,e,r,a,i){a=a||{};var n=1.15,l=i.internal.scaleFactor,c=i.internal.getFontSize()/l,u=i.getLineHeightFactor?i.getLineHeightFactor():n,f=c*u,g=/\r\n|\r|\n/g,b="",y=1;if((a.valign==="middle"||a.valign==="bottom"||a.halign==="center"||a.halign==="right")&&(b=typeof t=="string"?t.split(g):t,y=b.length||1),r+=c*(2-n),a.valign==="middle"?r-=y/2*f:a.valign==="bottom"&&(r-=y*f),a.halign==="center"||a.halign==="right"){var m=c;if(a.halign==="center"&&(m*=.5),b&&y>=1){for(var k=0;k<b.length;k++)i.text(b[k],e-i.getStringUnitWidth(b[k])*m,r),r+=f;return i}e-=i.getStringUnitWidth(t)*m}return a.halign==="justify"?i.text(t,e,r,{maxWidth:a.maxWidth||100,align:"justify"}):i.text(t,e,r),i}var Kh={},ms=function(){function t(e){this.jsPDFDocument=e,this.userStyles={textColor:e.getTextColor?this.jsPDFDocument.getTextColor():0,fontSize:e.internal.getFontSize(),fontStyle:e.internal.getFont().fontStyle,font:e.internal.getFont().fontName,lineWidth:e.getLineWidth?this.jsPDFDocument.getLineWidth():0,lineColor:e.getDrawColor?this.jsPDFDocument.getDrawColor():0}}return t.setDefaults=function(e,r){r===void 0&&(r=null),r?r.__autoTableDocumentDefaults=e:Kh=e},t.unifyColor=function(e){return Array.isArray(e)?e:typeof e=="number"?[e,e,e]:typeof e=="string"?[e]:null},t.prototype.applyStyles=function(e,r){var a,i,n;r===void 0&&(r=!1),e.fontStyle&&this.jsPDFDocument.setFontStyle&&this.jsPDFDocument.setFontStyle(e.fontStyle);var l=this.jsPDFDocument.internal.getFont(),c=l.fontStyle,u=l.fontName;if(e.font&&(u=e.font),e.fontStyle){c=e.fontStyle;var f=this.getFontList()[u];f&&f.indexOf(c)===-1&&this.jsPDFDocument.setFontStyle&&(this.jsPDFDocument.setFontStyle(f[0]),c=f[0])}if(this.jsPDFDocument.setFont(u,c),e.fontSize&&this.jsPDFDocument.setFontSize(e.fontSize),!r){var g=t.unifyColor(e.fillColor);g&&(a=this.jsPDFDocument).setFillColor.apply(a,g),g=t.unifyColor(e.textColor),g&&(i=this.jsPDFDocument).setTextColor.apply(i,g),g=t.unifyColor(e.lineColor),g&&(n=this.jsPDFDocument).setDrawColor.apply(n,g),typeof e.lineWidth=="number"&&this.jsPDFDocument.setLineWidth(e.lineWidth)}},t.prototype.splitTextToSize=function(e,r,a){return this.jsPDFDocument.splitTextToSize(e,r,a)},t.prototype.rect=function(e,r,a,i,n){return this.jsPDFDocument.rect(e,r,a,i,n)},t.prototype.getLastAutoTable=function(){return this.jsPDFDocument.lastAutoTable||null},t.prototype.getTextWidth=function(e){return this.jsPDFDocument.getTextWidth(e)},t.prototype.getDocument=function(){return this.jsPDFDocument},t.prototype.setPage=function(e){this.jsPDFDocument.setPage(e)},t.prototype.addPage=function(){return this.jsPDFDocument.addPage()},t.prototype.getFontList=function(){return this.jsPDFDocument.getFontList()},t.prototype.getGlobalOptions=function(){return Kh||{}},t.prototype.getDocumentOptions=function(){return this.jsPDFDocument.__autoTableDocumentDefaults||{}},t.prototype.pageSize=function(){var e=this.jsPDFDocument.internal.pageSize;return e.width==null&&(e={width:e.getWidth(),height:e.getHeight()}),e},t.prototype.scaleFactor=function(){return this.jsPDFDocument.internal.scaleFactor},t.prototype.getLineHeightFactor=function(){var e=this.jsPDFDocument;return e.getLineHeightFactor?e.getLineHeightFactor():1.15},t.prototype.getLineHeight=function(e){return e/this.scaleFactor()*this.getLineHeightFactor()},t.prototype.pageNumber=function(){var e=this.jsPDFDocument.internal.getCurrentPageInfo();return e?e.pageNumber:this.jsPDFDocument.internal.getNumberOfPages()},t}(),Kd=function(t,e){return Kd=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,a){r.__proto__=a}||function(r,a){for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(r[i]=a[i])},Kd(t,e)};function xp(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Kd(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}var wp=function(t){xp(e,t);function e(r){var a=t.call(this)||this;return a._element=r,a}return e}(Array);function Ag(t){return{font:"helvetica",fontStyle:"normal",overflow:"linebreak",fillColor:!1,textColor:20,halign:"left",valign:"top",fontSize:10,cellPadding:5/t,lineColor:200,lineWidth:0,cellWidth:"auto",minCellHeight:0,minCellWidth:0}}function Lg(t){var e={striped:{table:{fillColor:255,textColor:80,fontStyle:"normal"},head:{textColor:255,fillColor:[41,128,185],fontStyle:"bold"},body:{},foot:{textColor:255,fillColor:[41,128,185],fontStyle:"bold"},alternateRow:{fillColor:245}},grid:{table:{fillColor:255,textColor:80,fontStyle:"normal",lineWidth:.1},head:{textColor:255,fillColor:[26,188,156],fontStyle:"bold",lineWidth:0},body:{},foot:{textColor:255,fillColor:[26,188,156],fontStyle:"bold",lineWidth:0},alternateRow:{}},plain:{head:{fontStyle:"bold"},foot:{fontStyle:"bold"}}};return e[t]}function $l(t,e,r){r.applyStyles(e,!0);var a=Array.isArray(t)?t:[t],i=a.map(function(n){return r.getTextWidth(n)}).reduce(function(n,l){return Math.max(n,l)},0);return i}function jp(t,e,r,a){var i=e.settings.tableLineWidth,n=e.settings.tableLineColor;t.applyStyles({lineWidth:i,lineColor:n});var l=kp(i,!1);l&&t.rect(r.x,r.y,e.getWidth(t.pageSize().width),a.y-r.y,l)}function kp(t,e){var r=t>0,a=e||e===0;return r&&a?"DF":r?"S":a?"F":null}function sc(t,e){var r,a,i,n;if(t=t||e,Array.isArray(t)){if(t.length>=4)return{top:t[0],right:t[1],bottom:t[2],left:t[3]};if(t.length===3)return{top:t[0],right:t[1],bottom:t[2],left:t[1]};if(t.length===2)return{top:t[0],right:t[1],bottom:t[0],left:t[1]};t.length===1?t=t[0]:t=e}return typeof t=="object"?(typeof t.vertical=="number"&&(t.top=t.vertical,t.bottom=t.vertical),typeof t.horizontal=="number"&&(t.right=t.horizontal,t.left=t.horizontal),{left:(r=t.left)!==null&&r!==void 0?r:e,top:(a=t.top)!==null&&a!==void 0?a:e,right:(i=t.right)!==null&&i!==void 0?i:e,bottom:(n=t.bottom)!==null&&n!==void 0?n:e}):(typeof t!="number"&&(t=e),{top:t,right:t,bottom:t,left:t})}function Np(t,e){var r=sc(e.settings.margin,0);return t.pageSize().width-(r.left+r.right)}function Pg(t,e,r,a,i){var n={},l=1.3333333333333333,c=ud(e,function(B){return i.getComputedStyle(B).backgroundColor});c!=null&&(n.fillColor=c);var u=ud(e,function(B){return i.getComputedStyle(B).color});u!=null&&(n.textColor=u);var f=Cg(a,r);f&&(n.cellPadding=f);var g="borderTopColor",b=l*r,y=a.borderTopWidth;if(a.borderBottomWidth===y&&a.borderRightWidth===y&&a.borderLeftWidth===y){var m=(parseFloat(y)||0)/b;m&&(n.lineWidth=m)}else n.lineWidth={top:(parseFloat(a.borderTopWidth)||0)/b,right:(parseFloat(a.borderRightWidth)||0)/b,bottom:(parseFloat(a.borderBottomWidth)||0)/b,left:(parseFloat(a.borderLeftWidth)||0)/b},n.lineWidth.top||(n.lineWidth.right?g="borderRightColor":n.lineWidth.bottom?g="borderBottomColor":n.lineWidth.left&&(g="borderLeftColor"));var k=ud(e,function(B){return i.getComputedStyle(B)[g]});k!=null&&(n.lineColor=k);var N=["left","right","center","justify"];N.indexOf(a.textAlign)!==-1&&(n.halign=a.textAlign),N=["middle","bottom","top"],N.indexOf(a.verticalAlign)!==-1&&(n.valign=a.verticalAlign);var _=parseInt(a.fontSize||"");isNaN(_)||(n.fontSize=_/l);var x=_g(a);x&&(n.fontStyle=x);var I=(a.fontFamily||"").toLowerCase();return t.indexOf(I)!==-1&&(n.font=I),n}function _g(t){var e="";return(t.fontWeight==="bold"||t.fontWeight==="bolder"||parseInt(t.fontWeight)>=700)&&(e="bold"),(t.fontStyle==="italic"||t.fontStyle==="oblique")&&(e+="italic"),e}function ud(t,e){var r=Sp(t,e);if(!r)return null;var a=r.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d*))?\)$/);if(!a||!Array.isArray(a))return null;var i=[parseInt(a[1]),parseInt(a[2]),parseInt(a[3])],n=parseInt(a[4]);return n===0||isNaN(i[0])||isNaN(i[1])||isNaN(i[2])?null:i}function Sp(t,e){var r=e(t);return r==="rgba(0, 0, 0, 0)"||r==="transparent"||r==="initial"||r==="inherit"?t.parentElement==null?null:Sp(t.parentElement,e):r}function Cg(t,e){var r=[t.paddingTop,t.paddingRight,t.paddingBottom,t.paddingLeft],a=96/(72/e),i=(parseInt(t.lineHeight)-parseInt(t.fontSize))/e/2,n=r.map(function(c){return parseInt(c||"0")/a}),l=sc(n,0);return i>l.top&&(l.top=i),i>l.bottom&&(l.bottom=i),l}function Ap(t,e,r,a,i){var n,l;a===void 0&&(a=!1),i===void 0&&(i=!1);var c;typeof e=="string"?c=r.document.querySelector(e):c=e;var u=Object.keys(t.getFontList()),f=t.scaleFactor(),g=[],b=[],y=[];if(!c)return console.error("Html table could not be found with input: ",e),{head:g,body:b,foot:y};for(var m=0;m<c.rows.length;m++){var k=c.rows[m],N=(l=(n=k==null?void 0:k.parentElement)===null||n===void 0?void 0:n.tagName)===null||l===void 0?void 0:l.toLowerCase(),_=Fg(u,f,r,k,a,i);_&&(N==="thead"?g.push(_):N==="tfoot"?y.push(_):b.push(_))}return{head:g,body:b,foot:y}}function Fg(t,e,r,a,i,n){for(var l=new wp(a),c=0;c<a.cells.length;c++){var u=a.cells[c],f=r.getComputedStyle(u);if(i||f.display!=="none"){var g=void 0;n&&(g=Pg(t,u,e,f,r)),l.push({rowSpan:u.rowSpan,colSpan:u.colSpan,styles:g,_element:u,content:Ig(u)})}}var b=r.getComputedStyle(a);if(l.length>0&&(i||b.display!=="none"))return l}function Ig(t){var e=t.cloneNode(!0);return e.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/ +/g," "),e.innerHTML=e.innerHTML.split(/<br.*?>/).map(function(r){return r.trim()}).join(`
`),e.innerText||e.textContent||""}function Dg(t,e,r){for(var a=0,i=[t,e,r];a<i.length;a++){var n=i[a];n&&typeof n!="object"&&console.error("The options parameter should be of type object, is: "+typeof n),n.startY&&typeof n.startY!="number"&&(console.error("Invalid value for startY option",n.startY),delete n.startY)}}function ln(t,e,r,a,i){if(t==null)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(t),l=1;l<arguments.length;l++){var c=arguments[l];if(c!=null)for(var u in c)Object.prototype.hasOwnProperty.call(c,u)&&(n[u]=c[u])}return n}function Lp(t,e){var r=new ms(t),a=r.getDocumentOptions(),i=r.getGlobalOptions();Dg(i,a,e);var n=ln({},i,a,e),l;typeof window<"u"&&(l=window);var c=Eg(i,a,e),u=Tg(i,a,e),f=Mg(r,n),g=Og(r,n,l);return{id:e.tableId,content:g,hooks:u,styles:c,settings:f}}function Eg(t,e,r){for(var a={styles:{},headStyles:{},bodyStyles:{},footStyles:{},alternateRowStyles:{},columnStyles:{}},i=function(u){if(u==="columnStyles"){var f=t[u],g=e[u],b=r[u];a.columnStyles=ln({},f,g,b)}else{var y=[t,e,r],m=y.map(function(k){return k[u]||{}});a[u]=ln({},m[0],m[1],m[2])}},n=0,l=Object.keys(a);n<l.length;n++){var c=l[n];i(c)}return a}function Tg(t,e,r){for(var a=[t,e,r],i={didParseCell:[],willDrawCell:[],didDrawCell:[],willDrawPage:[],didDrawPage:[]},n=0,l=a;n<l.length;n++){var c=l[n];c.didParseCell&&i.didParseCell.push(c.didParseCell),c.willDrawCell&&i.willDrawCell.push(c.willDrawCell),c.didDrawCell&&i.didDrawCell.push(c.didDrawCell),c.willDrawPage&&i.willDrawPage.push(c.willDrawPage),c.didDrawPage&&i.didDrawPage.push(c.didDrawPage)}return i}function Mg(t,e){var r,a,i,n,l,c,u,f,g,b,y,m,k=sc(e.margin,40/t.scaleFactor()),N=(r=Bg(t,e.startY))!==null&&r!==void 0?r:k.top,_;e.showFoot===!0?_="everyPage":e.showFoot===!1?_="never":_=(a=e.showFoot)!==null&&a!==void 0?a:"everyPage";var x;e.showHead===!0?x="everyPage":e.showHead===!1?x="never":x=(i=e.showHead)!==null&&i!==void 0?i:"everyPage";var I=(n=e.useCss)!==null&&n!==void 0?n:!1,B=e.theme||(I?"plain":"striped"),R=!!e.horizontalPageBreak,Z=(l=e.horizontalPageBreakRepeat)!==null&&l!==void 0?l:null;return{includeHiddenHtml:(c=e.includeHiddenHtml)!==null&&c!==void 0?c:!1,useCss:I,theme:B,startY:N,margin:k,pageBreak:(u=e.pageBreak)!==null&&u!==void 0?u:"auto",rowPageBreak:(f=e.rowPageBreak)!==null&&f!==void 0?f:"auto",tableWidth:(g=e.tableWidth)!==null&&g!==void 0?g:"auto",showHead:x,showFoot:_,tableLineWidth:(b=e.tableLineWidth)!==null&&b!==void 0?b:0,tableLineColor:(y=e.tableLineColor)!==null&&y!==void 0?y:200,horizontalPageBreak:R,horizontalPageBreakRepeat:Z,horizontalPageBreakBehaviour:(m=e.horizontalPageBreakBehaviour)!==null&&m!==void 0?m:"afterAllRows"}}function Bg(t,e){var r=t.getLastAutoTable(),a=t.scaleFactor(),i=t.pageNumber(),n=!1;if(r&&r.startPageNumber){var l=r.startPageNumber+r.pageNumber-1;n=l===i}return typeof e=="number"?e:(e==null||e===!1)&&n&&(r==null?void 0:r.finalY)!=null?r.finalY+20/a:null}function Og(t,e,r){var a=e.head||[],i=e.body||[],n=e.foot||[];if(e.html){var l=e.includeHiddenHtml;if(r){var c=Ap(t,e.html,r,l,e.useCss)||{};a=c.head||a,i=c.body||a,n=c.foot||a}else console.error("Cannot parse html in non browser environment")}var u=e.columns||Rg(a,i,n);return{columns:u,head:a,body:i,foot:n}}function Rg(t,e,r){var a=t[0]||e[0]||r[0]||[],i=[];return Object.keys(a).filter(function(n){return n!=="_element"}).forEach(function(n){var l=1,c;Array.isArray(a)?c=a[parseInt(n)]:c=a[n],typeof c=="object"&&!Array.isArray(c)&&(l=(c==null?void 0:c.colSpan)||1);for(var u=0;u<l;u++){var f=void 0;Array.isArray(a)?f=i.length:f=n+(u>0?"_".concat(u):"");var g={dataKey:f};i.push(g)}}),i}var Gd=function(){function t(e,r,a){this.table=r,this.pageNumber=r.pageNumber,this.settings=r.settings,this.cursor=a,this.doc=e.getDocument()}return t}(),zg=function(t){xp(e,t);function e(r,a,i,n,l,c){var u=t.call(this,r,a,c)||this;return u.cell=i,u.row=n,u.column=l,u.section=n.section,u}return e}(Gd),qg=function(){function t(e,r){this.pageNumber=1,this.id=e.id,this.settings=e.settings,this.styles=e.styles,this.hooks=e.hooks,this.columns=r.columns,this.head=r.head,this.body=r.body,this.foot=r.foot}return t.prototype.getHeadHeight=function(e){return this.head.reduce(function(r,a){return r+a.getMaxCellHeight(e)},0)},t.prototype.getFootHeight=function(e){return this.foot.reduce(function(r,a){return r+a.getMaxCellHeight(e)},0)},t.prototype.allRows=function(){return this.head.concat(this.body).concat(this.foot)},t.prototype.callCellHooks=function(e,r,a,i,n,l){for(var c=0,u=r;c<u.length;c++){var f=u[c],g=new zg(e,this,a,i,n,l),b=f(g)===!1;if(a.text=Array.isArray(a.text)?a.text:[a.text],b)return!1}return!0},t.prototype.callEndPageHooks=function(e,r){e.applyStyles(e.userStyles);for(var a=0,i=this.hooks.didDrawPage;a<i.length;a++){var n=i[a];n(new Gd(e,this,r))}},t.prototype.callWillDrawPageHooks=function(e,r){for(var a=0,i=this.hooks.willDrawPage;a<i.length;a++){var n=i[a];n(new Gd(e,this,r))}},t.prototype.getWidth=function(e){if(typeof this.settings.tableWidth=="number")return this.settings.tableWidth;if(this.settings.tableWidth==="wrap"){var r=this.columns.reduce(function(i,n){return i+n.wrappedWidth},0);return r}else{var a=this.settings.margin;return e-a.left-a.right}},t}(),Pp=function(){function t(e,r,a,i,n){n===void 0&&(n=!1),this.height=0,this.raw=e,e instanceof wp&&(this.raw=e._element,this.element=e._element),this.index=r,this.section=a,this.cells=i,this.spansMultiplePages=n}return t.prototype.getMaxCellHeight=function(e){var r=this;return e.reduce(function(a,i){var n;return Math.max(a,((n=r.cells[i.index])===null||n===void 0?void 0:n.height)||0)},0)},t.prototype.hasRowSpan=function(e){var r=this;return e.filter(function(a){var i=r.cells[a.index];return i?i.rowSpan>1:!1}).length>0},t.prototype.canEntireRowFit=function(e,r){return this.getMaxCellHeight(r)<=e},t.prototype.getMinimumRowHeight=function(e,r){var a=this;return e.reduce(function(i,n){var l=a.cells[n.index];if(!l)return 0;var c=r.getLineHeight(l.styles.fontSize),u=l.padding("vertical"),f=u+c;return f>i?f:i},0)},t}(),_p=function(){function t(e,r,a){var i;this.contentHeight=0,this.contentWidth=0,this.wrappedWidth=0,this.minReadableWidth=0,this.minWidth=0,this.width=0,this.height=0,this.x=0,this.y=0,this.styles=r,this.section=a,this.raw=e;var n=e;e!=null&&typeof e=="object"&&!Array.isArray(e)?(this.rowSpan=e.rowSpan||1,this.colSpan=e.colSpan||1,n=(i=e.content)!==null&&i!==void 0?i:e,e._element&&(this.raw=e._element)):(this.rowSpan=1,this.colSpan=1);var l=n!=null?""+n:"",c=/\r\n|\r|\n/g;this.text=l.split(c)}return t.prototype.getTextPos=function(){var e;if(this.styles.valign==="top")e=this.y+this.padding("top");else if(this.styles.valign==="bottom")e=this.y+this.height-this.padding("bottom");else{var r=this.height-this.padding("vertical");e=this.y+r/2+this.padding("top")}var a;if(this.styles.halign==="right")a=this.x+this.width-this.padding("right");else if(this.styles.halign==="center"){var i=this.width-this.padding("horizontal");a=this.x+i/2+this.padding("left")}else a=this.x+this.padding("left");return{x:a,y:e}},t.prototype.getContentHeight=function(e,r){r===void 0&&(r=1.15);var a=Array.isArray(this.text)?this.text.length:1,i=this.styles.fontSize/e*r,n=a*i+this.padding("vertical");return Math.max(n,this.styles.minCellHeight)},t.prototype.padding=function(e){var r=sc(this.styles.cellPadding,0);return e==="vertical"?r.top+r.bottom:e==="horizontal"?r.left+r.right:r[e]},t}(),Ug=function(){function t(e,r,a){this.wrappedWidth=0,this.minReadableWidth=0,this.minWidth=0,this.width=0,this.dataKey=e,this.raw=r,this.index=a}return t.prototype.getMaxCustomCellWidth=function(e){for(var r=0,a=0,i=e.allRows();a<i.length;a++){var n=i[a],l=n.cells[this.index];l&&typeof l.styles.cellWidth=="number"&&(r=Math.max(r,l.styles.cellWidth))}return r},t}();function Wg(t,e){Hg(t,e);var r=[],a=0;e.columns.forEach(function(n){var l=n.getMaxCustomCellWidth(e);l?n.width=l:(n.width=n.wrappedWidth,r.push(n)),a+=n.width});var i=e.getWidth(t.pageSize().width)-a;i&&(i=Yd(r,i,function(n){return Math.max(n.minReadableWidth,n.minWidth)})),i&&(i=Yd(r,i,function(n){return n.minWidth})),i=Math.abs(i),!e.settings.horizontalPageBreak&&i>.1/t.scaleFactor()&&(i=i<1?i:Math.round(i),console.log("Of the table content, ".concat(i," units width could not fit page"))),Vg(e),Kg(e,t),$g(e)}function Hg(t,e){var r=t.scaleFactor(),a=e.settings.horizontalPageBreak,i=Np(t,e);e.allRows().forEach(function(n){for(var l=0,c=e.columns;l<c.length;l++){var u=c[l],f=n.cells[u.index];if(f){var g=e.hooks.didParseCell;e.callCellHooks(t,g,f,n,u,null);var b=f.padding("horizontal");f.contentWidth=$l(f.text,f.styles,t)+b;var y=$l(f.text.join(" ").split(/[^\S\u00A0]+/),f.styles,t);if(f.minReadableWidth=y+f.padding("horizontal"),typeof f.styles.cellWidth=="number")f.minWidth=f.styles.cellWidth,f.wrappedWidth=f.styles.cellWidth;else if(f.styles.cellWidth==="wrap"||a===!0)f.contentWidth>i?(f.minWidth=i,f.wrappedWidth=i):(f.minWidth=f.contentWidth,f.wrappedWidth=f.contentWidth);else{var m=10/r;f.minWidth=f.styles.minCellWidth||m,f.wrappedWidth=f.contentWidth,f.minWidth>f.wrappedWidth&&(f.wrappedWidth=f.minWidth)}}}}),e.allRows().forEach(function(n){for(var l=0,c=e.columns;l<c.length;l++){var u=c[l],f=n.cells[u.index];if(f&&f.colSpan===1)u.wrappedWidth=Math.max(u.wrappedWidth,f.wrappedWidth),u.minWidth=Math.max(u.minWidth,f.minWidth),u.minReadableWidth=Math.max(u.minReadableWidth,f.minReadableWidth);else{var g=e.styles.columnStyles[u.dataKey]||e.styles.columnStyles[u.index]||{},b=g.cellWidth||g.minCellWidth;b&&typeof b=="number"&&(u.minWidth=b,u.wrappedWidth=b)}f&&(f.colSpan>1&&!u.minWidth&&(u.minWidth=f.minWidth),f.colSpan>1&&!u.wrappedWidth&&(u.wrappedWidth=f.minWidth))}})}function Yd(t,e,r){for(var a=e,i=t.reduce(function(m,k){return m+k.wrappedWidth},0),n=0;n<t.length;n++){var l=t[n],c=l.wrappedWidth/i,u=a*c,f=l.width+u,g=r(l),b=f<g?g:f;e-=b-l.width,l.width=b}if(e=Math.round(e*1e10)/1e10,e){var y=t.filter(function(m){return e<0?m.width>r(m):!0});y.length&&(e=Yd(y,e,r))}return e}function $g(t){for(var e={},r=1,a=t.allRows(),i=0;i<a.length;i++)for(var n=a[i],l=0,c=t.columns;l<c.length;l++){var u=c[l],f=e[u.index];if(r>1)r--,delete n.cells[u.index];else if(f)f.cell.height+=n.height,r=f.cell.colSpan,delete n.cells[u.index],f.left--,f.left<=1&&delete e[u.index];else{var g=n.cells[u.index];if(!g)continue;if(g.height=n.height,g.rowSpan>1){var b=a.length-i,y=g.rowSpan>b?b:g.rowSpan;e[u.index]={cell:g,left:y,row:n}}}}}function Vg(t){for(var e=t.allRows(),r=0;r<e.length;r++)for(var a=e[r],i=null,n=0,l=0,c=0;c<t.columns.length;c++){var u=t.columns[c];if(l-=1,l>1&&t.columns[c+1])n+=u.width,delete a.cells[u.index];else if(i){var f=i;delete a.cells[u.index],i=null,f.width=u.width+n}else{var f=a.cells[u.index];if(!f)continue;if(l=f.colSpan,n=0,f.colSpan>1){i=f,n+=u.width;continue}f.width=u.width+n}}}function Kg(t,e){for(var r={count:0,height:0},a=0,i=t.allRows();a<i.length;a++){for(var n=i[a],l=0,c=t.columns;l<c.length;l++){var u=c[l],f=n.cells[u.index];if(f){e.applyStyles(f.styles,!0);var g=f.width-f.padding("horizontal");if(f.styles.overflow==="linebreak")f.text=e.splitTextToSize(f.text,g+1/e.scaleFactor(),{fontSize:f.styles.fontSize});else if(f.styles.overflow==="ellipsize")f.text=Gh(f.text,g,f.styles,e,"...");else if(f.styles.overflow==="hidden")f.text=Gh(f.text,g,f.styles,e,"");else if(typeof f.styles.overflow=="function"){var b=f.styles.overflow(f.text,g);typeof b=="string"?f.text=[b]:f.text=b}f.contentHeight=f.getContentHeight(e.scaleFactor(),e.getLineHeightFactor());var y=f.contentHeight/f.rowSpan;f.rowSpan>1&&r.count*r.height<y*f.rowSpan?r={height:y,count:f.rowSpan}:r&&r.count>0&&r.height>y&&(y=r.height),y>n.height&&(n.height=y)}}r.count--}}function Gh(t,e,r,a,i){return t.map(function(n){return Gg(n,e,r,a,i)})}function Gg(t,e,r,a,i){var n=1e4*a.scaleFactor();if(e=Math.ceil(e*n)/n,e>=$l(t,r,a))return t;for(;e<$l(t+i,r,a)&&!(t.length<=1);)t=t.substring(0,t.length-1);return t.trim()+i}function Cp(t,e){var r=new ms(t),a=Yg(e,r.scaleFactor()),i=new qg(e,a);return Wg(r,i),r.applyStyles(r.userStyles),i}function Yg(t,e){var r=t.content,a=Qg(r.columns);if(r.head.length===0){var i=Yh(a,"head");i&&r.head.push(i)}if(r.foot.length===0){var i=Yh(a,"foot");i&&r.foot.push(i)}var n=t.settings.theme,l=t.styles;return{columns:a,head:hd("head",r.head,a,l,n,e),body:hd("body",r.body,a,l,n,e),foot:hd("foot",r.foot,a,l,n,e)}}function hd(t,e,r,a,i,n){var l={},c=e.map(function(u,f){for(var g=0,b={},y=0,m=0,k=0,N=r;k<N.length;k++){var _=N[k];if(l[_.index]==null||l[_.index].left===0)if(m===0){var x=void 0;Array.isArray(u)?x=u[_.index-y-g]:x=u[_.dataKey];var I={};typeof x=="object"&&!Array.isArray(x)&&(I=(x==null?void 0:x.styles)||{});var B=Xg(t,_,f,i,a,n,I),R=new _p(x,B,t);b[_.dataKey]=R,b[_.index]=R,m=R.colSpan-1,l[_.index]={left:R.rowSpan-1,times:m}}else m--,y++;else l[_.index].left--,m=l[_.index].times,g++}return new Pp(u,f,t,b)});return c}function Yh(t,e){var r={};return t.forEach(function(a){if(a.raw!=null){var i=Jg(e,a.raw);i!=null&&(r[a.dataKey]=i)}}),Object.keys(r).length>0?r:null}function Jg(t,e){if(t==="head"){if(typeof e=="object")return e.header||null;if(typeof e=="string"||typeof e=="number")return e}else if(t==="foot"&&typeof e=="object")return e.footer;return null}function Qg(t){return t.map(function(e,r){var a,i;return typeof e=="object"?i=(a=e.dataKey)!==null&&a!==void 0?a:r:i=r,new Ug(i,e,r)})}function Xg(t,e,r,a,i,n,l){var c=Lg(a),u;t==="head"?u=i.headStyles:t==="body"?u=i.bodyStyles:t==="foot"&&(u=i.footStyles);var f=ln({},c.table,c[t],i.styles,u),g=i.columnStyles[e.dataKey]||i.columnStyles[e.index]||{},b=t==="body"?g:{},y=t==="body"&&r%2===0?ln({},c.alternateRow,i.alternateRowStyles):{},m=Ag(n),k=ln({},m,f,y,b);return ln(k,l)}function Zg(t,e,r){var a;r===void 0&&(r={});var i=Np(t,e),n=new Map,l=[],c=[],u=[];Array.isArray(e.settings.horizontalPageBreakRepeat)?u=e.settings.horizontalPageBreakRepeat:(typeof e.settings.horizontalPageBreakRepeat=="string"||typeof e.settings.horizontalPageBreakRepeat=="number")&&(u=[e.settings.horizontalPageBreakRepeat]),u.forEach(function(y){var m=e.columns.find(function(k){return k.dataKey===y||k.index===y});m&&!n.has(m.index)&&(n.set(m.index,!0),l.push(m.index),c.push(e.columns[m.index]),i-=m.wrappedWidth)});for(var f=!0,g=(a=r==null?void 0:r.start)!==null&&a!==void 0?a:0;g<e.columns.length;){if(n.has(g)){g++;continue}var b=e.columns[g].wrappedWidth;if(f||i>=b)f=!1,l.push(g),c.push(e.columns[g]),i-=b;else break;g++}return{colIndexes:l,columns:c,lastIndex:g-1}}function e5(t,e){for(var r=[],a=0;a<e.columns.length;a++){var i=Zg(t,e,{start:a});i.columns.length&&(r.push(i),a=i.lastIndex)}return r}function Fp(t,e){var r=e.settings,a=r.startY,i=r.margin,n={x:i.left,y:a},l=e.getHeadHeight(e.columns)+e.getFootHeight(e.columns),c=a+i.bottom+l;if(r.pageBreak==="avoid"){var u=e.body,f=u.reduce(function(y,m){return y+m.height},0);c+=f}var g=new ms(t);(r.pageBreak==="always"||r.startY!=null&&c>g.pageSize().height)&&(Dp(g),n.y=i.top),e.callWillDrawPageHooks(g,n);var b=ln({},n);e.startPageNumber=g.pageNumber(),r.horizontalPageBreak?t5(g,e,b,n):(g.applyStyles(g.userStyles),(r.showHead==="firstPage"||r.showHead==="everyPage")&&e.head.forEach(function(y){return hn(g,e,y,n,e.columns)}),g.applyStyles(g.userStyles),e.body.forEach(function(y,m){var k=m===e.body.length-1;Vl(g,e,y,k,b,n,e.columns)}),g.applyStyles(g.userStyles),(r.showFoot==="lastPage"||r.showFoot==="everyPage")&&e.foot.forEach(function(y){return hn(g,e,y,n,e.columns)})),jp(g,e,b,n),e.callEndPageHooks(g,n),e.finalY=n.y,t.lastAutoTable=e,g.applyStyles(g.userStyles)}function t5(t,e,r,a){var i=e5(t,e),n=e.settings;if(n.horizontalPageBreakBehaviour==="afterAllRows")i.forEach(function(f,g){t.applyStyles(t.userStyles),g>0?vo(t,e,r,a,f.columns,!0):Jh(t,e,a,f.columns),r5(t,e,r,a,f.columns),fd(t,e,a,f.columns)});else for(var l=-1,c=i[0],u=function(){var f=l;if(c){t.applyStyles(t.userStyles);var g=c.columns;l>=0?vo(t,e,r,a,g,!0):Jh(t,e,a,g),f=Qh(t,e,l+1,a,g),fd(t,e,a,g)}var b=f-l;i.slice(1).forEach(function(y){t.applyStyles(t.userStyles),vo(t,e,r,a,y.columns,!0),Qh(t,e,l+1,a,y.columns,b),fd(t,e,a,y.columns)}),l=f};l<e.body.length-1;)u()}function Jh(t,e,r,a){var i=e.settings;t.applyStyles(t.userStyles),(i.showHead==="firstPage"||i.showHead==="everyPage")&&e.head.forEach(function(n){return hn(t,e,n,r,a)})}function r5(t,e,r,a,i){t.applyStyles(t.userStyles),e.body.forEach(function(n,l){var c=l===e.body.length-1;Vl(t,e,n,c,r,a,i)})}function Qh(t,e,r,a,i,n){t.applyStyles(t.userStyles),n=n??e.body.length;var l=Math.min(r+n,e.body.length),c=-1;return e.body.slice(r,l).forEach(function(u,f){var g=r+f===e.body.length-1,b=Ip(t,e,g,a);u.canEntireRowFit(b,i)&&(hn(t,e,u,a,i),c=r+f)}),c}function fd(t,e,r,a){var i=e.settings;t.applyStyles(t.userStyles),(i.showFoot==="lastPage"||i.showFoot==="everyPage")&&e.foot.forEach(function(n){return hn(t,e,n,r,a)})}function a5(t,e,r){var a=r.getLineHeight(t.styles.fontSize),i=t.padding("vertical"),n=Math.floor((e-i)/a);return Math.max(0,n)}function n5(t,e,r,a){var i={};t.spansMultiplePages=!0,t.height=0;for(var n=0,l=0,c=r.columns;l<c.length;l++){var u=c[l],f=t.cells[u.index];if(f){Array.isArray(f.text)||(f.text=[f.text]);var g=new _p(f.raw,f.styles,f.section);g=ln(g,f),g.text=[];var b=a5(f,e,a);f.text.length>b&&(g.text=f.text.splice(b,f.text.length));var y=a.scaleFactor(),m=a.getLineHeightFactor();f.contentHeight=f.getContentHeight(y,m),f.contentHeight>=e&&(f.contentHeight=e,g.styles.minCellHeight-=e),f.contentHeight>t.height&&(t.height=f.contentHeight),g.contentHeight=g.getContentHeight(y,m),g.contentHeight>n&&(n=g.contentHeight),i[u.index]=g}}var k=new Pp(t.raw,-1,t.section,i,!0);k.height=n;for(var N=0,_=r.columns;N<_.length;N++){var u=_[N],g=k.cells[u.index];g&&(g.height=k.height);var f=t.cells[u.index];f&&(f.height=t.height)}return k}function i5(t,e,r,a){var i=t.pageSize().height,n=a.settings.margin,l=n.top+n.bottom,c=i-l;e.section==="body"&&(c-=a.getHeadHeight(a.columns)+a.getFootHeight(a.columns));var u=e.getMinimumRowHeight(a.columns,t),f=u<r;if(u>c)return console.log("Will not be able to print row ".concat(e.index," correctly since it's minimum height is larger than page height")),!0;if(!f)return!1;var g=e.hasRowSpan(a.columns),b=e.getMaxCellHeight(a.columns)>c;return b?(g&&console.log("The content of row ".concat(e.index," will not be drawn correctly since drawing rows with a height larger than the page height and has cells with rowspans is not supported.")),!0):!(g||a.settings.rowPageBreak==="avoid")}function Vl(t,e,r,a,i,n,l){var c=Ip(t,e,a,n);if(r.canEntireRowFit(c,l))hn(t,e,r,n,l);else if(i5(t,r,c,e)){var u=n5(r,c,e,t);hn(t,e,r,n,l),vo(t,e,i,n,l),Vl(t,e,u,a,i,n,l)}else vo(t,e,i,n,l),Vl(t,e,r,a,i,n,l)}function hn(t,e,r,a,i){a.x=e.settings.margin.left;for(var n=0,l=i;n<l.length;n++){var c=l[n],u=r.cells[c.index];if(!u){a.x+=c.width;continue}t.applyStyles(u.styles),u.x=a.x,u.y=a.y;var f=e.callCellHooks(t,e.hooks.willDrawCell,u,r,c,a);if(f===!1){a.x+=c.width;continue}s5(t,u,a);var g=u.getTextPos();yp(u.text,g.x,g.y,{halign:u.styles.halign,valign:u.styles.valign,maxWidth:Math.ceil(u.width-u.padding("left")-u.padding("right"))},t.getDocument()),e.callCellHooks(t,e.hooks.didDrawCell,u,r,c,a),a.x+=c.width}a.y+=r.height}function s5(t,e,r){var a=e.styles;if(t.getDocument().setFillColor(t.getDocument().getFillColor()),typeof a.lineWidth=="number"){var i=kp(a.lineWidth,a.fillColor);i&&t.rect(e.x,r.y,e.width,e.height,i)}else typeof a.lineWidth=="object"&&(a.fillColor&&t.rect(e.x,r.y,e.width,e.height,"F"),o5(t,e,r,a.lineWidth))}function o5(t,e,r,a){var i,n,l,c;a.top&&(i=r.x,n=r.y,l=r.x+e.width,c=r.y,a.right&&(l+=.5*a.right),a.left&&(i-=.5*a.left),u(a.top,i,n,l,c)),a.bottom&&(i=r.x,n=r.y+e.height,l=r.x+e.width,c=r.y+e.height,a.right&&(l+=.5*a.right),a.left&&(i-=.5*a.left),u(a.bottom,i,n,l,c)),a.left&&(i=r.x,n=r.y,l=r.x,c=r.y+e.height,a.top&&(n-=.5*a.top),a.bottom&&(c+=.5*a.bottom),u(a.left,i,n,l,c)),a.right&&(i=r.x+e.width,n=r.y,l=r.x+e.width,c=r.y+e.height,a.top&&(n-=.5*a.top),a.bottom&&(c+=.5*a.bottom),u(a.right,i,n,l,c));function u(f,g,b,y,m){t.getDocument().setLineWidth(f),t.getDocument().line(g,b,y,m,"S")}}function Ip(t,e,r,a){var i=e.settings.margin.bottom,n=e.settings.showFoot;return(n==="everyPage"||n==="lastPage"&&r)&&(i+=e.getFootHeight(e.columns)),t.pageSize().height-a.y-i}function vo(t,e,r,a,i,n){i===void 0&&(i=[]),n===void 0&&(n=!1),t.applyStyles(t.userStyles),e.settings.showFoot==="everyPage"&&!n&&e.foot.forEach(function(c){return hn(t,e,c,a,i)}),e.callEndPageHooks(t,a);var l=e.settings.margin;jp(t,e,r,a),Dp(t),e.pageNumber++,a.x=l.left,a.y=l.top,r.y=l.top,e.callWillDrawPageHooks(t,a),e.settings.showHead==="everyPage"&&(e.head.forEach(function(c){return hn(t,e,c,a,i)}),t.applyStyles(t.userStyles))}function Dp(t){var e=t.pageNumber();t.setPage(e+1);var r=t.pageNumber();return r===e?(t.addPage(),!0):!1}function l5(t){t.API.autoTable=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var a=e[0],i=Lp(this,a),n=Cp(this,i);return Fp(this,n),this},t.API.lastAutoTable=!1,t.API.autoTableText=function(e,r,a,i){yp(e,r,a,i,this)},t.API.autoTableSetDefaults=function(e){return ms.setDefaults(e,this),this},t.autoTableSetDefaults=function(e,r){ms.setDefaults(e,r)},t.API.autoTableHtmlToJson=function(e,r){var a;if(r===void 0&&(r=!1),typeof window>"u")return console.error("Cannot run autoTableHtmlToJson in non browser environment"),null;var i=new ms(this),n=Ap(i,e,window,r,!1),l=n.head,c=n.body,u=((a=l[0])===null||a===void 0?void 0:a.map(function(f){return f.content}))||[];return{columns:u,rows:c,data:c}}}var pd;function c5(t,e){var r=Lp(t,e),a=Cp(t,r);Fp(t,a)}try{if(typeof window<"u"&&window){var Xh=window,Zh=Xh.jsPDF||((pd=Xh.jspdf)===null||pd===void 0?void 0:pd.jsPDF);Zh&&l5(Zh)}}catch(t){console.error("Could not apply autoTable plugin",t)}const Ft={teal:[8,80,65],tealLight:[225,245,238],tealMid:[29,158,117],coral:[153,60,29],coralLight:[250,236,231],purple:[83,74,183],purpleLight:[238,237,254],dark:[30,30,30],mid:[90,90,90],light:[160,160,160],border:[220,220,215],surface:[248,247,244],white:[255,255,255]},Ep=t=>`Rp ${Number(t||0).toLocaleString("id-ID")}`,Kl=t=>t?new Date(t).toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"}):"-",Ds=t=>t.internal.pageSize.getWidth(),d5=t=>t.internal.pageSize.getHeight(),Tp=(t,e,r,a,i,n,l="F")=>t.roundedRect(e,r,a,i,n,n,l),gs=22;function mu(t,e){const r=Ds(t);t.setFillColor(...Ft.teal),t.rect(0,0,r,gs,"F"),t.setFillColor(...Ft.tealMid),t.rect(0,gs-1.5,r,1.5,"F"),t.setFont("helvetica","bold"),t.setFontSize(11),t.setTextColor(...Ft.white),t.text("PESANTREN JABALNUR",14,10),t.setFont("helvetica","normal"),t.setFontSize(7),t.setTextColor(159,225,203),t.text("LAPORAN KEUANGAN",14,17);const a=`${Kl(e.start_date)} – ${Kl(e.end_date)}`;t.setFontSize(7),t.setTextColor(200,240,225),t.text(a,r-14,10,{align:"right"}),t.setFontSize(6.5),t.setTextColor(130,200,170),t.text(`Dibuat: ${new Date().toLocaleString("id-ID")}`,r-14,17,{align:"right"})}function u5(t,e){t.setDrawColor(...Ft.border),t.setLineWidth(.3),t.line(14,e,Ds(t)-14,e)}function ef(t,e,r){t.setFillColor(...Ft.tealMid),t.rect(14,r-4,3,11,"F"),t.setFont("helvetica","bold"),t.setFontSize(10),t.setTextColor(...Ft.dark),t.text(e,21,r+4)}function h5(t,e,r){const a=Ds(t),i=[{label:"Total Pemasukan",key:"total_pemasukan",bg:Ft.tealLight,text:Ft.teal,border:Ft.tealMid},{label:"Total Pengeluaran",key:"total_pengeluaran",bg:Ft.coralLight,text:Ft.coral,border:[240,153,123]},{label:"Saldo Akhir",key:"saldo",bg:Ft.purpleLight,text:Ft.purple,border:[175,169,236]}],n=14,l=6,u=(a-n*2-l*2)/3,f=36;return i.forEach(({label:g,key:b,bg:y,text:m,border:k},N)=>{const _=n+N*(u+l),x=r;t.setFillColor(...y),t.setDrawColor(...k),t.setLineWidth(.4),Tp(t,_,x,u,f,4,"FD"),t.setFont("helvetica","bold"),t.setFontSize(7),t.setTextColor(...m),t.text(g.toUpperCase(),_+10,x+11),t.setFont("helvetica","bold"),t.setFontSize(12),t.setTextColor(...m),t.text(Ep(e[b]||0),_+10,x+27)}),r+f}function f5(t,e,r,a){const i=e.map(n=>[n.tanggal?new Date(n.tanggal).toLocaleDateString("id-ID"):"-",n.tipe==="pemasukan"?"Masuk":"Keluar",n.nomor||"-",n.nama_santri||"-",n.kategori?n.kategori.replaceAll("_"," ").replace(/\b\w/g,l=>l.toUpperCase()):"-",Ep(n.nominal||0),n.keterangan||"-"]);c5(t,{startY:r,head:[["Tanggal","Tipe","Nomor","Santri","Kategori","Nominal","Keterangan"]],body:i,theme:"plain",styles:{font:"helvetica",fontSize:7.5,cellPadding:{top:4,bottom:4,left:5,right:5},overflow:"linebreak",valign:"middle",textColor:Ft.dark,lineColor:Ft.border,lineWidth:.2},headStyles:{fillColor:Ft.teal,textColor:[159,225,203],fontStyle:"bold",fontSize:7,cellPadding:{top:5,bottom:5,left:5,right:5}},alternateRowStyles:{fillColor:Ft.surface},columnStyles:{0:{cellWidth:20},1:{cellWidth:22},2:{cellWidth:26},3:{cellWidth:28},4:{cellWidth:26},5:{cellWidth:30,halign:"right",fontStyle:"bold"},6:{cellWidth:"auto"}},margin:{left:14,right:14},didParseCell:n=>{n.section==="body"&&n.column.index===1&&(n.cell.styles.textColor=n.cell.raw==="Masuk"?Ft.teal:Ft.coral,n.cell.styles.fontStyle="bold")},didDrawPage:()=>{mu(t,a),gu(t)}})}function gu(t){const e=d5(t),r=Ds(t),a=t.internal.getNumberOfPages(),i=t.internal.getCurrentPageInfo().pageNumber;t.setDrawColor(...Ft.border),t.setLineWidth(.3),t.line(14,e-14,r-14,e-14),t.setFont("helvetica","normal"),t.setFontSize(7),t.setTextColor(...Ft.light),t.text("Laporan Keuangan Pesantren Jabalnur",14,e-7),t.text(`Halaman ${i} / ${a}`,r-14,e-7,{align:"right"})}const p5=(t,e)=>{const r=(t==null?void 0:t.summary)||{},a=(t==null?void 0:t.transactions)||[],i=new Ve({unit:"mm",format:"a4"});mu(i,e);let n=gs+10;ef(i,"Ringkasan Keuangan",n),n+=10,n=h5(i,r,n),n+=14,u5(i,n),n+=10,a.length>0?(ef(i,"Detail Transaksi",n),n+=10,f5(i,a,n,e)):(i.setFont("helvetica","normal"),i.setFontSize(11),i.setTextColor(...Ft.light),i.text("Tidak ada transaksi pada periode ini.",Ds(i)/2,n+20,{align:"center"}));const l=i.internal.getNumberOfPages();for(let u=1;u<=l;u++)i.setPage(u),gu(i);const c=`laporan-keuangan-${e.start_date}-to-${e.end_date}.pdf`;i.save(c)},m5=t=>{const e=new Ve({unit:"mm",format:"a4"});mu(e,t);const r=Ds(e);e.setFillColor(...Ft.surface),Tp(e,40,gs+30,r-80,50,6,"F"),e.setFont("helvetica","bold"),e.setFontSize(11),e.setTextColor(...Ft.mid),e.text("Tidak Ada Transaksi",r/2,gs+52,{align:"center"}),e.setFont("helvetica","normal"),e.setFontSize(8.5),e.setTextColor(...Ft.light),e.text(`Tidak ditemukan transaksi untuk periode ${Kl(t.start_date)} – ${Kl(t.end_date)}`,r/2,gs+63,{align:"center"}),gu(e);const a=`laporan-keuangan-${t.start_date}-to-${t.end_date}.pdf`;e.save(a)},g5=()=>{const[t,e]=me.useState({start_date:"",end_date:""}),{data:r,isLoading:a,isFetching:i,error:n}=Pr({queryKey:["report-date-range",t],queryFn:async()=>{var y;const b=await Yf.getReportByDateRange({start_date:t.start_date,end_date:t.end_date});return((y=b==null?void 0:b.data)==null?void 0:y.data)||{}},enabled:!!(t.start_date&&t.end_date),refetchOnWindowFocus:!1}),l=(r==null?void 0:r.summary)||{},c=(r==null?void 0:r.transactions)||[],u=b=>{if(b==null)return"-";const y=String(b).trim();return y===""?"-":y},f=()=>{c.length>0?p5(r,t):m5(t)},g=t.start_date&&t.end_date&&!i;return s.jsxs("div",{className:"reports-page",children:[s.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');

        :root {
          --teal: #3A9EA3;
          --teal-dark: #1F6F74;
          --teal-light: #f0fafa;
          --teal-muted: #b2d8da;
          --amber: #E8920A;
          --amber-light: #F5B044;
          --amber-pale: #fff8ee;
        }

        * { box-sizing: border-box; }

        .reports-page {
          font-family: 'DM Sans', sans-serif;
          padding: 0;
          background: var(--surface);
          min-height: 100vh;
          color: var(--text);
        }
        .reports-page::before {
          content: '';
          display: block;
          height: 4px;
          background: linear-gradient(90deg, #1F6F74 0%, #3A9EA3 45%, #E8920A 70%, #F5B044 100%);
        }

        /* -- Header --------------------------- */
        .reports-header {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-end;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 28px;
        }
        .reports-title-group h1 {
          font-size: 26px;
          font-weight: 800;
          background: linear-gradient(135deg, #1F6F74 0%, #3A9EA3 55%, #E8920A 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 4px;
          letter-spacing: -0.3px;
        }
        .reports-title-group p {
          font-size: 14px;
          color: #6a9ea2;
          margin: 0;
        }

        /* -- Filter Card ----------------------- */
        .filter-card {
          background: var(--card);
          border: 1.5px solid var(--border);
          border-top: 3px solid var(--accent);
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 24px;
          position: relative;
        }
        .filter-grid {
          display: grid;
          grid-template-columns: 1fr 1fr auto;
          gap: 16px;
          align-items: flex-end;
        }
        @media (max-width: 640px) {
          .filter-grid { grid-template-columns: 1fr; }
        }

        /* -- Generate Button ------------------- */
        .btn-generate {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0 22px;
          height: 48px;
          background: linear-gradient(135deg, var(--teal-dark), var(--teal));
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.15s;
          white-space: nowrap;
          letter-spacing: 0.01em;
        }
        .btn-generate:hover:not(:disabled) { opacity: 0.9; transform: translateY(-1px); }
        .btn-generate:active:not(:disabled) { transform: translateY(0); }
        .btn-generate:disabled {
          background: #c0d8da;
          cursor: not-allowed;
          transform: none;
        }

        /* -- Summary Cards --------------------- */
        .summary-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 24px;
        }
        @media (max-width: 640px) {
          .summary-grid { grid-template-columns: 1fr; }
        }
        .summary-card {
          background: var(--card);
          border: 1.5px solid var(--border);
          border-radius: 14px;
          padding: 20px 22px;
          display: flex;
          align-items: center;
          gap: 16px;
          transition: box-shadow 0.2s;
        }
        .summary-card:hover {
          box-shadow: 0 4px 16px rgba(58,158,163,0.1);
        }
        .summary-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .summary-icon.income  { background: #e6f7f0; color: #1a8c5a; }
        .summary-icon.expense { background: #fef0f0; color: #c0392b; }
        .summary-icon.balance { background: #e8f5f6; color: var(--teal-dark); }
        .summary-label {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #8aa8aa;
          margin-bottom: 4px;
        }
        .summary-amount {
          font-size: 20px;
          font-weight: 700;
          letter-spacing: -0.5px;
          font-variant-numeric: tabular-nums;
        }
        .summary-amount.income  { color: #1a8c5a; }
        .summary-amount.expense { color: #c0392b; }
        .summary-amount.positive { color: var(--teal-dark); }
        .summary-amount.negative { color: #c0392b; }

        /* -- Transaction Table Card ------------ */
        .table-card {
          background: var(--card);
          border: 1.5px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
        }
        .table-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1.5px solid #eaf3f4;
          gap: 12px;
          flex-wrap: wrap;
        }
        .table-title {
          font-size: 16px;
          font-weight: 700;
          color: var(--teal-dark);
        }
        .table-subtitle {
          font-size: 12px;
          color: #8aa8aa;
          margin-top: 2px;
        }
        .btn-export {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 18px;
          background: var(--amber-pale);
          color: var(--amber);
          border: 1.5px solid #f5d48a;
          border-radius: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
        }
        .btn-export:hover {
          background: #fde8c8;
          border-color: var(--amber-light);
        }
        .table-scroll { overflow-x: auto; }
        .tx-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13.5px;
        }
        .tx-table thead tr {
          background: var(--surface-strong);
        }
        .tx-table thead th {
          padding: 12px 16px;
          text-align: left;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: var(--text-muted);
          border-bottom: 1.5px solid var(--border);
          white-space: nowrap;
        }
        .tx-table thead th:last-child { text-align: right; }
        .tx-table td {
          padding: 12px 16px;
          border-bottom: 1px solid var(--border);
          color: var(--text);
          vertical-align: middle;
        }
        .tx-table tbody tr:last-child td { border-bottom: none; }
        .tx-table tbody tr:hover td { background: var(--surface-inset); }
        .tx-type-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: capitalize;
        }
        .tx-type-badge.pemasukan {
          background: #e6f7f0;
          color: #1a7a4a;
        }
        .tx-type-badge.pengeluaran {
          background: #fef0f0;
          color: #b03030;
        }
        .tx-nominal {
          text-align: right;
          font-weight: 700;
          font-variant-numeric: tabular-nums;
          white-space: nowrap;
        }
        .tx-nominal.pemasukan { color: #1a7a4a; }
        .tx-nominal.pengeluaran { color: #b03030; }
        .tx-mono {
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          color: #5a8a8d;
        }

        /* -- Empty / Initial State ------------- */
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 24px;
          text-align: center;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 16px;
        }
        .empty-icon-bg {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: rgba(91,196,200,0.16);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .empty-state h3 {
          font-size: 16px;
          font-weight: 600;
          color: var(--accent-deep);
          margin: 0 0 6px;
        }
        .empty-state p {
          font-size: 14px;
          color: var(--text-muted);
          margin: 0;
        }

        /* -- Error State ----------------------- */
        .error-card {
          background: #fff5f5;
          border: 1.5px solid #f5c6c6;
          border-radius: 12px;
          padding: 24px;
          text-align: center;
          color: #c0392b;
          font-weight: 500;
        }
      `}),s.jsxs("div",{style:{maxWidth:1280,margin:"0 auto",padding:"28px 24px",display:"flex",flexDirection:"column",gap:24},children:[s.jsx("div",{className:"reports-header",children:s.jsxs("div",{className:"reports-title-group",children:[s.jsx("h1",{children:"Laporan Keuangan"}),s.jsx("p",{children:"Laporan pemasukan dan pengeluaran pesantren"})]})}),s.jsx("div",{className:"filter-card",children:s.jsxs("div",{className:"filter-grid",children:[s.jsx(Kn,{label:"Tanggal Mulai",value:t.start_date,onChange:b=>e(y=>({...y,start_date:b})),maxDate:t.end_date||void 0,required:!0}),s.jsx(Kn,{label:"Tanggal Akhir",value:t.end_date,onChange:b=>e(y=>({...y,end_date:b})),minDate:t.start_date||void 0,required:!0}),s.jsxs("button",{className:"btn-generate",disabled:!g,children:[s.jsx($n,{size:16}),i?"Memuat...":"Generate Report"]})]})}),a&&s.jsx("div",{style:{padding:"48px 0",textAlign:"center"},children:s.jsx(jr,{})}),n&&s.jsx("div",{className:"error-card",children:"[!] Gagal mengambil data laporan. Silakan coba lagi."}),!a&&r&&s.jsxs("div",{className:"summary-grid",children:[s.jsxs("div",{className:"summary-card",children:[s.jsx("div",{className:"summary-icon income",children:s.jsx(Vf,{size:22,strokeWidth:2})}),s.jsxs("div",{children:[s.jsx("div",{className:"summary-label",children:"Total Pemasukan"}),s.jsxs("div",{className:"summary-amount income",children:["Rp ",Number(l.total_pemasukan||0).toLocaleString("id-ID")]})]})]}),s.jsxs("div",{className:"summary-card",children:[s.jsx("div",{className:"summary-icon expense",children:s.jsx(lu,{size:22,strokeWidth:2})}),s.jsxs("div",{children:[s.jsx("div",{className:"summary-label",children:"Total Pengeluaran"}),s.jsxs("div",{className:"summary-amount expense",children:["Rp ",Number(l.total_pengeluaran||0).toLocaleString("id-ID")]})]})]}),s.jsxs("div",{className:"summary-card",children:[s.jsx("div",{className:"summary-icon balance",children:s.jsx(Fs,{size:22,strokeWidth:2})}),s.jsxs("div",{children:[s.jsx("div",{className:"summary-label",children:"Saldo"}),s.jsxs("div",{className:`summary-amount ${Number(l.saldo||0)>=0?"positive":"negative"}`,children:["Rp ",Number(l.saldo||0).toLocaleString("id-ID")]})]})]})]}),!a&&c.length>0&&s.jsxs("div",{className:"table-card",children:[s.jsxs("div",{className:"table-header",children:[s.jsxs("div",{children:[s.jsx("div",{className:"table-title",children:"Detail Transaksi"}),s.jsxs("div",{className:"table-subtitle",children:[c.length," transaksi ditemukan"]})]}),s.jsxs("button",{className:"btn-export",onClick:f,children:[s.jsx(k2,{size:15}),"Export PDF"]})]}),s.jsx("div",{className:"table-scroll",children:s.jsxs("table",{className:"tx-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Tanggal"}),s.jsx("th",{children:"Tipe"}),s.jsx("th",{children:"Nomor"}),s.jsx("th",{children:"Nama"}),s.jsx("th",{children:"Kategori"}),s.jsx("th",{children:"Nominal"}),s.jsx("th",{children:"Keterangan"})]})}),s.jsx("tbody",{children:c.map((b,y)=>s.jsxs("tr",{children:[s.jsx("td",{style:{whiteSpace:"nowrap",color:"#5a8a8d",fontSize:13},children:b.tanggal?new Date(b.tanggal).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric"}):"-"}),s.jsx("td",{children:s.jsxs("span",{className:`tx-type-badge ${b.tipe}`,children:[b.tipe==="pemasukan"?"+":"-"," ",b.tipe]})}),s.jsx("td",{className:"tx-mono",children:u(b.nomor)}),s.jsx("td",{style:{whiteSpace:"nowrap",fontWeight:500},children:u(b.nama_santri)}),s.jsx("td",{style:{whiteSpace:"nowrap",textTransform:"capitalize",color:"#5a8a8d"},children:u(b.kategori).replaceAll("_"," ")}),s.jsxs("td",{className:`tx-nominal ${b.tipe}`,children:["Rp ",Number(b.nominal||0).toLocaleString("id-ID")]}),s.jsx("td",{style:{minWidth:180,color:"#7a9a9c",fontSize:13},children:u(b.keterangan)})]},b.id||y))})]})})]}),!a&&r&&c.length===0&&s.jsx("div",{className:"table-card",children:s.jsxs("div",{className:"empty-state",children:[s.jsx("div",{className:"empty-icon-bg",children:s.jsx($n,{size:28,color:"var(--teal)",strokeWidth:1.5})}),s.jsx("h3",{children:"Tidak ada transaksi"}),s.jsx("p",{children:"Tidak ada transaksi pada rentang tanggal ini"})]})}),!t.start_date&&!t.end_date&&s.jsx("div",{className:"table-card",children:s.jsxs("div",{className:"empty-state",children:[s.jsx("div",{className:"empty-icon-bg",children:s.jsx($n,{size:28,color:"var(--teal)",strokeWidth:1.5})}),s.jsx("h3",{children:"Pilih Rentang Tanggal"}),s.jsx("p",{children:"Tentukan tanggal mulai & akhir untuk menghasilkan laporan"})]})})]})]})},b5=()=>{if(document.getElementById("settings-theme"))return;const t=document.createElement("style");t.id="settings-theme",t.textContent=`
    :root {
      --teal:        #3A9EA3;
      --teal-dark:   #1F6F74;
      --teal-light:  #E8F6F7;
      --teal-mid:    #C2E8EA;
      --amber:       #E8920A;
      --amber-light: #F5B044;
      --amber-pale:  #FEF3DC;
      --amber-mid:   #FBD89A;
      --st-bg:       linear-gradient(160deg, #f0fafa 0%, #faf8f3 60%, #fff 100%);
      --st-card:     #ffffff;
      --st-border:   #e5f4f5;
      --st-sep:      #f0fafa;
      --st-text:     #1a2e30;
      --st-muted:    #6b9ea1;
      --st-input-bg: #ffffff;
      --st-input-dis:#f0fafa;
      --st-badge-off-bg: #f3f4f6;
      --st-badge-off-col:#6b7280;
      --st-badge-off-bdr:#e5e7eb;
      --st-del-bg:   #fff0f0;
      --st-del-hover:#fee2e2;
      --st-close-bg: #ffffff;
      --st-close-hover-bg:#fee2e2;
      --st-close-hover-bdr:#fca5a5;
      --st-close-hover-col:#dc2626;
      --st-hdr-bar:  linear-gradient(90deg, #f8fdfd, #fff);
      --st-th-bg:    linear-gradient(90deg, var(--teal-light), #f0fafa);
      --st-row-hover:#f8fdfd;
      --st-form-bg:  linear-gradient(135deg, #f0fafa 0%, #fefdf8 100%);
      --st-secondary-bg: #fff;
      --st-secondary-col: #4b7f82;
    }
    html.dark {
      --teal:        #5BC4C8;
      --teal-dark:   #3A9EA3;
      --teal-light:  rgba(58,158,163,0.15);
      --teal-mid:    #1e3a3c;
      --amber:       #F5B044;
      --amber-light: #F5B044;
      --amber-pale:  rgba(232,146,10,0.15);
      --amber-mid:   rgba(251,216,154,0.3);
      --st-bg:       #08131A;
      --st-card:     #112135;
      --st-border:   #1e3a4a;
      --st-sep:      #1a2f3e;
      --st-text:     #e2e8f0;
      --st-muted:    #94a3b8;
      --st-input-bg: #0d1f30;
      --st-input-dis:#0a1628;
      --st-badge-off-bg: #1e2a38;
      --st-badge-off-col:#94a3b8;
      --st-badge-off-bdr:#2d3a48;
      --st-del-bg:   rgba(239,68,68,0.12);
      --st-del-hover:rgba(239,68,68,0.22);
      --st-close-bg: #112135;
      --st-close-hover-bg:rgba(239,68,68,0.15);
      --st-close-hover-bdr:rgba(239,68,68,0.4);
      --st-close-hover-col:#f87171;
      --st-hdr-bar:  linear-gradient(90deg,#0d1f30,#112135);
      --st-th-bg:    linear-gradient(90deg,#0d1f30,#112135);
      --st-row-hover:#0d1f30;
      --st-form-bg:  linear-gradient(135deg,#0d1f30 0%,#112135 100%);
      --st-secondary-bg: #112135;
      --st-secondary-col: #5BC4C8;
    }

    /* ── Root padding responsive ── */
    .st-root {
      min-height: 100vh;
      background: var(--st-bg);
      padding: 12px;
    }
    @media (min-width: 480px) { .st-root { padding: 16px; } }
    @media (min-width: 768px) { .st-root { padding: 24px; } }

    /* ── Buttons ── */
    .st-btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: linear-gradient(135deg, var(--teal) 0%, var(--teal-dark) 100%);
      color: #fff;
      font-weight: 600;
      font-size: 0.875rem;
      padding: 0.625rem 1.25rem;
      border-radius: 0.75rem;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: 0 2px 8px rgba(31,111,116,0.25);
    }
    .st-btn-primary:hover:not(:disabled) {
      background: linear-gradient(135deg, var(--teal-dark) 0%, #164f54 100%);
      box-shadow: 0 4px 14px rgba(31,111,116,0.35);
      transform: translateY(-1px);
    }
    .st-btn-primary:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .st-btn-secondary {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--st-secondary-bg);
      color: var(--st-secondary-col);
      font-weight: 600;
      font-size: 0.875rem;
      padding: 0.625rem 1.25rem;
      border-radius: 0.75rem;
      border: 1.5px solid var(--teal-mid);
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .st-btn-secondary:hover {
      background: var(--teal-light);
      border-color: var(--teal);
    }

    /* ── Form card ── */
    .st-form-card {
      position: relative;
      z-index: 29;
      background: var(--st-form-bg);
      border: 1.5px solid var(--teal-mid);
      border-radius: 1.25rem;
      padding: 1rem;
      margin-bottom: 1.25rem;
      box-shadow: 0 2px 12px rgba(58,158,163,0.08);
      animation: st-slide-down 0.2s ease both;
    }
    @media (min-width: 640px) {
      .st-form-card { padding: 1.5rem; margin-bottom: 1.5rem; }
    }
    @keyframes st-slide-down {
      from { opacity: 0; transform: translateY(-8px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .st-form-title {
      font-size: 1rem;
      font-weight: 700;
      color: var(--teal-dark);
      margin-bottom: 1.25rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    /* ── Form controls ── */
    .st-label {
      display: block;
      font-size: 0.78rem;
      font-weight: 600;
      color: var(--teal-dark);
      margin-bottom: 0.4rem;
      letter-spacing: 0.02em;
      text-transform: uppercase;
    }

    .st-input, .st-select {
      width: 100%;
      padding: 0.625rem 0.875rem;
      border: 1.5px solid var(--teal-mid);
      border-radius: 0.75rem;
      font-size: 0.875rem;
      outline: none;
      background: var(--st-input-bg);
      color: var(--st-text);
      transition: border-color 0.2s, box-shadow 0.2s;
      appearance: none;
      -webkit-appearance: none;
    }
    .st-input::placeholder { color: var(--st-muted); }
    .st-input:focus, .st-select:focus {
      border-color: var(--teal);
      box-shadow: 0 0 0 3px rgba(58,158,163,0.12);
    }
    .st-input:disabled, .st-select:disabled {
      background: var(--st-input-dis);
      color: var(--st-muted);
      cursor: not-allowed;
    }
    .st-select-wrap { position: relative; }
    .st-select-wrap::after {
      content: '▾';
      position: absolute;
      right: 0.875rem;
      top: 50%;
      transform: translateY(-50%);
      color: var(--teal);
      pointer-events: none;
      font-size: 0.75rem;
    }

    /* ── Table ── */
    .st-table-header th {
      padding: 0.875rem 1rem;
      text-align: left;
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--teal-dark);
      background: var(--st-th-bg);
      white-space: nowrap;
    }
    .st-table-header th:last-child { text-align: center; }

    .st-table-row {
      border-top: 1px solid var(--st-sep);
      transition: background 0.15s;
    }
    .st-table-row:hover { background: var(--st-row-hover); }

    .st-action-btn {
      width: 2rem;
      height: 2rem;
      border-radius: 0.5rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      cursor: pointer;
      transition: all 0.15s;
    }

    .st-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      padding: 0.25rem 0.75rem;
      border-radius: 999px;
      font-size: 0.72rem;
      font-weight: 600;
    }

    .st-nominal {
      font-weight: 700;
      color: var(--teal-dark);
      font-variant-numeric: tabular-nums;
    }

    @keyframes st-fade-in {
      from { opacity: 0; transform: translateY(6px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .st-animate { animation: st-fade-in 0.3s ease both; }

    .st-close-btn {
      width: 2rem;
      height: 2rem;
      border-radius: 0.5rem;
      background: var(--st-close-bg);
      border: 1.5px solid var(--teal-mid);
      color: var(--teal-dark);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.15s;
      flex-shrink: 0;
    }
    .st-close-btn:hover {
      background: var(--st-close-hover-bg);
      border-color: var(--st-close-hover-bdr);
      color: var(--st-close-hover-col);
    }

    /* ── Header responsive ── */
    .st-header {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: space-between;
      gap: 0.75rem;
      margin-bottom: 1.25rem;
    }
    @media (min-width: 768px) {
      .st-header { margin-bottom: 1.75rem; gap: 1rem; }
    }

    .st-page-title {
      font-size: 1.4rem;
      font-weight: 800;
      color: var(--st-text);
      letter-spacing: -0.02em;
      margin: 0;
    }
    @media (min-width: 480px) { .st-page-title { font-size: 1.75rem; } }

    /* ── Table card ── */
    .st-table-card {
      background: var(--st-card);
      border-radius: 1.25rem;
      border: 1.5px solid var(--st-border);
      overflow: hidden;
      box-shadow: 0 2px 16px rgba(58,158,163,0.08);
    }

    .st-table-header-bar {
      padding: 0.75rem 1rem;
      border-bottom: 1px solid var(--st-sep);
      background: var(--st-hdr-bar);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    @media (min-width: 640px) {
      .st-table-header-bar { padding: 1rem 1.5rem; }
    }
  `,document.head.appendChild(t)};b5();const v5=()=>{const t=ia(),[e,r]=me.useState(!1),[a,i]=me.useState(null),[n,l]=me.useState({kategori:"",tahun:new Date().getFullYear(),bulan:"",nominal:"",aktif:!0}),{data:c=[],isLoading:u,error:f}=Pr({queryKey:["tagihan"],queryFn:async()=>{var S;const A=await mo.getTagihan({limit:100});return(S=A==null?void 0:A.data)!=null&&S.data?A.data.data:Array.isArray(A==null?void 0:A.data)?A.data:[]}}),g=_r({mutationFn:async A=>a?await mo.updateTagihan(a,A):await mo.createTagihan(A),onSuccess:()=>{t.invalidateQueries({queryKey:["tagihan"]}),x()},onError:A=>{var S,M;alert(((M=(S=A==null?void 0:A.response)==null?void 0:S.data)==null?void 0:M.message)||"Gagal menyimpan data tagihan")}}),b=_r({mutationFn:async A=>await mo.deleteTagihan(A),onSuccess:()=>t.invalidateQueries({queryKey:["tagihan"]}),onError:A=>{var S,M;alert(((M=(S=A==null?void 0:A.response)==null?void 0:S.data)==null?void 0:M.message)||"Gagal menghapus data")}}),y=[{value:"biaya_pembangunan",label:"Biaya Pembangunan"},{value:"biaya_tahunan",label:"Biaya Tahunan"},{value:"biaya_spp",label:"Biaya SPP"},{value:"biaya_akhir",label:"Biaya Akhir"}],m=[{value:"01",label:"Januari"},{value:"02",label:"Februari"},{value:"03",label:"Maret"},{value:"04",label:"April"},{value:"05",label:"Mei"},{value:"06",label:"Juni"},{value:"07",label:"Juli"},{value:"08",label:"Agustus"},{value:"09",label:"September"},{value:"10",label:"Oktober"},{value:"11",label:"November"},{value:"12",label:"Desember"}],k=me.useMemo(()=>{const A=new Date().getFullYear();return Array.from({length:5},(S,M)=>A-2+M)},[]),N=A=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0}).format(A||0),_=(A=null)=>{A?(l({kategori:A.kategori,tahun:A.tahun.toString(),bulan:A.bulan?A.bulan.toString().padStart(2,"0"):"",nominal:A.nominal.toString(),aktif:A.aktif}),i(A.id)):(l({kategori:"",tahun:new Date().getFullYear().toString(),bulan:"",nominal:"",aktif:!0}),i(null)),r(!0)},x=()=>{r(!1),i(null),l({kategori:"",tahun:new Date().getFullYear().toString(),bulan:"",nominal:"",aktif:!0})},I=async A=>{if(A.preventDefault(),!n.kategori){alert("Kategori wajib dipilih");return}if(!n.nominal){alert("Nominal wajib diisi");return}if(n.kategori==="biaya_spp"&&!n.bulan){alert("Bulan wajib dipilih");return}g.mutate({kategori:n.kategori,tahun:parseInt(n.tahun),bulan:n.kategori==="biaya_spp"?parseInt(n.bulan):null,nominal:parseFloat(n.nominal),aktif:n.aktif})},B=A=>{window.confirm("Yakin ingin menghapus tagihan ini?")&&b.mutate(A)},R=(A,S)=>l(M=>({...M,[A]:S})),Z=A=>{l(S=>({...S,kategori:A,bulan:A==="biaya_spp"?S.bulan:""}))},ee={biaya_pembangunan:{bg:"var(--amber-pale)",color:"var(--amber)",border:"var(--amber-mid)"},biaya_tahunan:{bg:"var(--teal-light)",color:"var(--teal-dark)",border:"var(--teal-mid)"},biaya_spp:{bg:"#f0f9ff",color:"#0369a1",border:"#bae6fd"},biaya_akhir:{bg:"#fdf4ff",color:"#7e22ce",border:"#e9d5ff"}};return u?s.jsx("div",{className:"st-root",style:{display:"flex",justifyContent:"center",paddingTop:"4rem"},children:s.jsx(jr,{})}):f?s.jsx("div",{className:"st-root",children:s.jsxs("div",{style:{background:"var(--st-card)",borderRadius:"1rem",border:"1.5px solid rgba(239,68,68,0.3)",padding:"2rem",textAlign:"center"},children:[s.jsx("p",{style:{color:"#dc2626",fontWeight:600},children:"Gagal memuat data"}),s.jsx("p",{style:{color:"var(--st-muted)",fontSize:"0.875rem",marginTop:4},children:f.message})]})}):s.jsxs("div",{className:"st-root",children:[s.jsxs("div",{className:"st-animate st-header",children:[s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.625rem",marginBottom:"0.25rem"},children:[s.jsx("span",{style:{display:"inline-block",width:4,height:28,borderRadius:99,background:"linear-gradient(180deg, var(--amber-light), var(--amber))",flexShrink:0}}),s.jsx("h1",{className:"st-page-title",children:"Pengaturan Tagihan"})]}),s.jsx("p",{style:{color:"var(--st-muted)",fontSize:"0.875rem",marginLeft:"0.75rem"},children:"Kelola master tagihan pembayaran santri"})]}),s.jsxs("button",{className:"st-btn-primary",onClick:()=>_(),children:[s.jsx(Fo,{style:{width:16,height:16}}),"Tambah Tagihan"]})]}),e&&s.jsxs("div",{className:"st-form-card",style:{overflow:"visible"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsxs("p",{className:"st-form-title",children:[s.jsx(M2,{style:{width:18,height:18,color:"var(--teal)"}}),a?"Edit Tagihan":"Tambah Tagihan Baru"]}),s.jsx("button",{className:"st-close-btn",onClick:x,children:s.jsx(H2,{style:{width:14,height:14}})})]}),s.jsxs("form",{onSubmit:I,children:[s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"1rem",marginBottom:"1.25rem"},children:[s.jsx("div",{children:s.jsx(Or,{label:"Kategori",options:y,value:n.kategori,onChange:A=>Z(A.target.value),placeholder:"Pilih kategori",disabled:!!a,required:!0})}),s.jsx("div",{children:s.jsx(Or,{label:"Tahun",options:k.map(A=>({value:A.toString(),label:A.toString()})),value:n.tahun.toString(),onChange:A=>R("tahun",parseInt(A.target.value)),placeholder:"Pilih tahun",disabled:!!a,required:!0})}),n.kategori==="biaya_spp"&&s.jsx("div",{children:s.jsx(Or,{label:"Bulan",options:m,value:n.bulan,onChange:A=>R("bulan",A.target.value),placeholder:"Pilih bulan",required:!0})}),s.jsx("div",{children:s.jsx(rc,{label:"Nominal",value:n.nominal,onChange:A=>R("nominal",A.target.value),placeholder:"Masukkan nominal",required:!0})}),s.jsx("div",{children:s.jsx(Or,{label:"Status",options:[{value:"true",label:"Aktif"},{value:"false",label:"Tidak Aktif"}],value:n.aktif?"true":"false",onChange:A=>R("aktif",A.target.value==="true"),placeholder:"Pilih status",required:!0})})]}),s.jsx("div",{style:{borderTop:"1px solid var(--teal-mid)",marginBottom:"1.25rem"}}),s.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.75rem"},children:[s.jsx("button",{type:"submit",className:"st-btn-primary",disabled:g.isPending,children:g.isPending?"Menyimpan...":a?"Simpan Perubahan":"Tambah Tagihan"}),s.jsx("button",{type:"button",className:"st-btn-secondary",onClick:x,children:"Batal"})]})]})]}),s.jsxs("div",{className:"st-animate st-table-card",style:{animationDelay:"0.1s"},children:[s.jsxs("div",{className:"st-table-header-bar",children:[s.jsx("h3",{style:{fontWeight:700,color:"var(--st-text)",fontSize:"1rem",margin:0},children:"Daftar Tagihan"}),s.jsxs("span",{style:{fontSize:"0.78rem",fontWeight:600,background:"var(--teal-light)",color:"var(--teal-dark)",padding:"0.2rem 0.75rem",borderRadius:999},children:[c.length," data"]})]}),c.length===0?s.jsx("div",{style:{padding:"3.5rem",textAlign:"center",color:"var(--st-muted)",fontSize:"0.9rem"},children:"Belum ada data tagihan"}):s.jsx("div",{style:{overflowX:"auto"},children:s.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[s.jsx("thead",{children:s.jsx("tr",{className:"st-table-header",children:["Kategori","Bulan","Tahun","Nominal","Status","Aksi"].map((A,S)=>s.jsx("th",{style:{textAlign:S===5?"center":"left",padding:"0.875rem 1rem",fontSize:"0.7rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--teal-dark)",background:"var(--st-th-bg)",whiteSpace:"nowrap"},children:A},A))})}),s.jsx("tbody",{children:c.map(A=>{const S=ee[A.kategori]||ee.biaya_tahunan;return s.jsxs("tr",{className:"st-table-row",children:[s.jsx("td",{style:{padding:"0.875rem 1rem",whiteSpace:"nowrap"},children:s.jsx("span",{className:"st-badge",style:{background:S.bg,color:S.color,border:`1px solid ${S.border}99`},children:A.kategori.replace(/_/g," ")})}),s.jsx("td",{style:{padding:"0.875rem 1rem",whiteSpace:"nowrap",fontSize:"0.875rem",color:"var(--st-muted)"},children:A.bulan??"-"}),s.jsx("td",{style:{padding:"0.875rem 1rem",whiteSpace:"nowrap",fontSize:"0.875rem",fontWeight:600,color:"var(--st-text)"},children:A.tahun}),s.jsx("td",{style:{padding:"0.875rem 1rem",whiteSpace:"nowrap"},children:s.jsx("span",{className:"st-nominal",children:N(A.nominal)})}),s.jsx("td",{style:{padding:"0.875rem 1rem",whiteSpace:"nowrap"},children:s.jsxs("span",{className:"st-badge",style:A.aktif?{background:"var(--teal-light)",color:"var(--teal-dark)",border:"1px solid var(--teal-mid)"}:{background:"var(--st-badge-off-bg)",color:"var(--st-badge-off-col)",border:"1px solid var(--st-badge-off-bdr)"},children:[s.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:A.aktif?"var(--teal)":"var(--st-badge-off-col)",display:"inline-block"}}),A.aktif?"Aktif":"Tidak Aktif"]})}),s.jsx("td",{style:{padding:"0.875rem 1rem",whiteSpace:"nowrap"},children:s.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"0.5rem"},children:[s.jsx("button",{className:"st-action-btn",title:"Edit",onClick:()=>_(A),style:{background:"var(--teal-light)",color:"var(--teal-dark)"},onMouseEnter:M=>M.currentTarget.style.background="var(--teal-mid)",onMouseLeave:M=>M.currentTarget.style.background="var(--teal-light)",children:s.jsx(D2,{style:{width:14,height:14}})}),s.jsx("button",{className:"st-action-btn",title:"Hapus",onClick:()=>B(A.id),disabled:b.isPending,style:{background:"var(--st-del-bg)",color:"#dc2626"},onMouseEnter:M=>M.currentTarget.style.background="var(--st-del-hover)",onMouseLeave:M=>M.currentTarget.style.background="var(--st-del-bg)",children:s.jsx(Ul,{style:{width:14,height:14}})})]})})]},A.id)})})]})})]})]})};class y5 extends me.Component{constructor(r){super(r);$u(this,"handleRetry",()=>{this.setState({hasError:!1,error:null,errorInfo:null})});this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(r){return{hasError:!0}}componentDidCatch(r,a){this.setState({error:r,errorInfo:a})}render(){return this.state.hasError?s.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50",children:s.jsxs("div",{className:"max-w-md w-full bg-white rounded-lg shadow-soft p-8 text-center",children:[s.jsx("div",{className:"flex justify-center mb-4",children:s.jsx(v2,{className:"w-16 h-16 text-red-500"})}),s.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Oops! Terjadi Kesalahan"}),s.jsx("p",{className:"text-gray-600 mb-6",children:"Maaf, terjadi kesalahan yang tidak terduga. Silakan coba lagi."}),s.jsxs("button",{onClick:this.handleRetry,className:"btn btn-primary inline-flex items-center",children:[s.jsx(E2,{className:"w-4 h-4 mr-2"}),"Coba Lagi"]}),!1]})}):this.props.children}}const yr=({children:t,allowedRoles:e=[]})=>{const{user:r,loading:a}=Li();return a?s.jsx("div",{className:"min-h-screen flex items-center justify-center",children:s.jsx(jr,{centered:!1})}):r?e.length>0&&!e.includes(r.role)?s.jsx(yo,{to:"/dashboard",replace:!0}):t:s.jsx(yo,{to:"/login",replace:!0})},x5=({children:t})=>{const{user:e,loading:r}=Li();return r?s.jsx("div",{className:"min-h-screen flex items-center justify-center",children:s.jsx(jr,{centered:!1})}):e?s.jsx(yo,{to:"/dashboard",replace:!0}):t};function w5(){return s.jsx(p2,{children:s.jsx(y5,{children:s.jsx("div",{className:"min-h-screen",children:s.jsxs(k1,{children:[s.jsx(Zt,{path:"/login",element:s.jsx(x5,{children:s.jsx(em,{})})}),s.jsx(Zt,{path:"/dashboard",element:s.jsx(yr,{children:s.jsx(pr,{children:s.jsx(tm,{})})})}),s.jsx(Zt,{path:"/santri",element:s.jsx(yr,{children:s.jsx(pr,{children:s.jsx(rm,{})})})}),s.jsx(Zt,{path:"/santri/:id",element:s.jsx(yr,{children:s.jsx(pr,{children:s.jsx(sm,{})})})}),s.jsx(Zt,{path:"/santri/:id/tambah-pembayaran",element:s.jsx(yr,{allowedRoles:["admin","bendahara"],children:s.jsx(pr,{children:s.jsx(kh,{})})})}),s.jsx(Zt,{path:"/santri/tambah",element:s.jsx(yr,{allowedRoles:["admin"],children:s.jsx(pr,{children:s.jsx(lm,{})})})}),s.jsx(Zt,{path:"/santri/edit/:id",element:s.jsx(yr,{allowedRoles:["admin"],children:s.jsx(pr,{children:s.jsx(dm,{})})})}),s.jsx(Zt,{path:"/pembayaran",element:s.jsx(yr,{children:s.jsx(pr,{children:s.jsx(Nm,{})})})}),s.jsx(Zt,{path:"/pembayaran/edit/:id",element:s.jsx(yr,{allowedRoles:["admin","bendahara"],children:s.jsx(pr,{children:s.jsx(kh,{})})})}),s.jsx(Zt,{path:"/pengeluaran",element:s.jsx(yr,{children:s.jsx(pr,{children:s.jsx(Sm,{})})})}),s.jsx(Zt,{path:"/pengeluaran/tambah",element:s.jsx(yr,{allowedRoles:["admin","bendahara"],children:s.jsx(pr,{children:s.jsx(Sh,{})})})}),s.jsx(Zt,{path:"/pengeluaran/edit/:id",element:s.jsx(yr,{allowedRoles:["admin","bendahara"],children:s.jsx(pr,{children:s.jsx(Sh,{})})})}),s.jsx(Zt,{path:"/reports",element:s.jsx(yr,{children:s.jsx(pr,{children:s.jsx(g5,{})})})}),s.jsx(Zt,{path:"/user",element:s.jsx(yr,{allowedRoles:["admin"],children:s.jsx(pr,{children:s.jsx(wm,{})})})}),s.jsx(Zt,{path:"/user/tambah",element:s.jsx(yr,{allowedRoles:["admin"],children:s.jsx(pr,{children:s.jsx(ym,{})})})}),s.jsx(Zt,{path:"/user/edit/:id",element:s.jsx(yr,{allowedRoles:["admin"],children:s.jsx(pr,{children:s.jsx(km,{})})})}),s.jsx(Zt,{path:"/pengaturan",element:s.jsx(yr,{allowedRoles:["admin"],children:s.jsx(pr,{children:s.jsx(v5,{})})})}),s.jsx(Zt,{path:"/",element:s.jsx(yo,{to:"/dashboard",replace:!0})}),s.jsx(Zt,{path:"*",element:s.jsx(yo,{to:"/dashboard",replace:!0})})]})})})})}const tf={success:{icon:"✓",bg:"#eaf6f7",border:"#3A9EA3",iconBg:"#3A9EA3",iconColor:"#ffffff",titleColor:"#1F6F74",msgColor:"#2d8589",progressColor:"#1F6F74"},error:{icon:"✕",bg:"#fdf0e0",border:"#E8920A",iconBg:"#E8920A",iconColor:"#ffffff",titleColor:"#b46e07",msgColor:"#c47c09",progressColor:"#E8920A"},warning:{icon:"⚠",bg:"#fff8ec",border:"#F5B044",iconBg:"#F5B044",iconColor:"#ffffff",titleColor:"#b46e07",msgColor:"#c47c09",progressColor:"#F5B044"},info:{icon:"i",bg:"#e6f5f6",border:"#3A9EA3",iconBg:"#1F6F74",iconColor:"#ffffff",titleColor:"#1F6F74",msgColor:"#2d8589",progressColor:"#3A9EA3"}},j5=({id:t,type:e="success",title:r,message:a,duration:i=4e3,action:n,onDismiss:l})=>{const c=tf[e]||tf.info,[u,f]=me.useState(!1),[g,b]=me.useState(!1),y=me.useRef(null);me.useEffect(()=>(requestAnimationFrame(()=>f(!0)),y.current=setTimeout(()=>m(),i),()=>clearTimeout(y.current)),[]);const m=()=>{b(!0),setTimeout(()=>l==null?void 0:l(t),280)},k=g?{transform:"translateX(24px) scale(0.95)",opacity:0}:u?{transform:"translateX(0) scale(1)",opacity:1}:{transform:"translateX(24px) scale(0.96)",opacity:0};return s.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:12,padding:"14px 16px",borderRadius:14,border:`0.5px solid ${c.border}`,background:c.bg,position:"relative",overflow:"hidden",maxWidth:420,width:"100%",transition:"transform 0.3s cubic-bezier(0.34,1.56,0.64,1), opacity 0.28s ease",...k},children:[s.jsx("div",{style:{flexShrink:0,width:32,height:32,borderRadius:8,background:c.iconBg,color:c.iconColor,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:600,fontSize:14,marginTop:1},children:c.icon}),s.jsxs("div",{style:{flex:1,minWidth:0},children:[r&&s.jsx("p",{style:{fontSize:13,fontWeight:500,color:c.titleColor,marginBottom:2,lineHeight:1.4},children:r}),s.jsx("p",{style:{fontSize:12,color:c.msgColor,lineHeight:1.5,margin:0},children:a}),n&&s.jsx("div",{style:{marginTop:8},children:s.jsx("button",{onClick:n.onClick,style:{fontSize:12,fontWeight:500,padding:"4px 10px",borderRadius:6,border:`0.5px solid ${c.border}`,background:c.iconBg,color:"#ffffff",cursor:"pointer"},children:n.label})})]}),s.jsx("button",{onClick:m,"aria-label":"Dismiss",style:{flexShrink:0,width:24,height:24,border:"none",background:"transparent",borderRadius:6,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:c.titleColor,opacity:.5,fontSize:14,marginTop:2},onMouseEnter:N=>N.currentTarget.style.opacity="1",onMouseLeave:N=>N.currentTarget.style.opacity="0.5",children:"✕"}),s.jsx("div",{style:{position:"absolute",bottom:0,left:0,height:2.5,borderRadius:"0 2px 2px 0",background:c.progressColor,width:"100%",animation:`progressDrain ${i}ms linear forwards`}})]})},k5=new u0({defaultOptions:{queries:{staleTime:1e3*60*5,cacheTime:1e3*60*10,retry:(t,e)=>{var r;return((r=e==null?void 0:e.response)==null?void 0:r.status)===401?!1:t<3},refetchOnWindowFocus:!1}}});gd.createRoot(document.getElementById("root")).render(s.jsx(pf.StrictMode,{children:s.jsx(h0,{client:k5,children:s.jsx(N1,{children:s.jsxs(f2,{children:[s.jsx(w5,{}),s.jsx(u2,{position:"top-right",toastOptions:{duration:4e3,success:{duration:3e3},error:{duration:5e3}},children:t=>s.jsx(j5,{t,message:t.message,type:t.type})})]})})})}));export{kt as _};
