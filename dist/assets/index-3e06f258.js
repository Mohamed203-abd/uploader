var Lh=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var C=(t,e,n)=>(Lh(t,e,"read from private field"),n?n.call(t):e.get(t)),K=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},H=(t,e,n,r)=>(Lh(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n);var Bl=(t,e,n,r)=>({set _(i){H(t,e,i,n)},get _(){return C(t,e,r)}}),se=(t,e,n)=>(Lh(t,e,"access private method"),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function b1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Zv={exports:{}},Nc={},eE={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ll=Symbol.for("react.element"),M1=Symbol.for("react.portal"),F1=Symbol.for("react.fragment"),U1=Symbol.for("react.strict_mode"),j1=Symbol.for("react.profiler"),B1=Symbol.for("react.provider"),z1=Symbol.for("react.context"),$1=Symbol.for("react.forward_ref"),H1=Symbol.for("react.suspense"),q1=Symbol.for("react.memo"),W1=Symbol.for("react.lazy"),qg=Symbol.iterator;function K1(t){return t===null||typeof t!="object"?null:(t=qg&&t[qg]||t["@@iterator"],typeof t=="function"?t:null)}var tE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nE=Object.assign,rE={};function co(t,e,n){this.props=t,this.context=e,this.refs=rE,this.updater=n||tE}co.prototype.isReactComponent={};co.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};co.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function iE(){}iE.prototype=co.prototype;function rp(t,e,n){this.props=t,this.context=e,this.refs=rE,this.updater=n||tE}var ip=rp.prototype=new iE;ip.constructor=rp;nE(ip,co.prototype);ip.isPureReactComponent=!0;var Wg=Array.isArray,sE=Object.prototype.hasOwnProperty,sp={current:null},oE={key:!0,ref:!0,__self:!0,__source:!0};function aE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)sE.call(e,r)&&!oE.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ll,type:t,key:s,ref:o,props:i,_owner:sp.current}}function Q1(t,e){return{$$typeof:ll,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function op(t){return typeof t=="object"&&t!==null&&t.$$typeof===ll}function G1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Kg=/\/+/g;function bh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?G1(""+t.key):e.toString(36)}function mu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ll:case M1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+bh(o,0):r,Wg(i)?(n="",t!=null&&(n=t.replace(Kg,"$&/")+"/"),mu(i,e,n,"",function(c){return c})):i!=null&&(op(i)&&(i=Q1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Kg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Wg(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+bh(s,l);o+=mu(s,e,n,u,i)}else if(u=K1(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+bh(s,l++),o+=mu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function zl(t,e,n){if(t==null)return t;var r=[],i=0;return mu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function X1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var It={current:null},gu={transition:null},Y1={ReactCurrentDispatcher:It,ReactCurrentBatchConfig:gu,ReactCurrentOwner:sp};function lE(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:zl,forEach:function(t,e,n){zl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return zl(t,function(){e++}),e},toArray:function(t){return zl(t,function(e){return e})||[]},only:function(t){if(!op(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=co;ie.Fragment=F1;ie.Profiler=j1;ie.PureComponent=rp;ie.StrictMode=U1;ie.Suspense=H1;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y1;ie.act=lE;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=nE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=sp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)sE.call(e,u)&&!oE.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:ll,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:z1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:B1,_context:t},t.Consumer=t};ie.createElement=aE;ie.createFactory=function(t){var e=aE.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:$1,render:t}};ie.isValidElement=op;ie.lazy=function(t){return{$$typeof:W1,_payload:{_status:-1,_result:t},_init:X1}};ie.memo=function(t,e){return{$$typeof:q1,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=gu.transition;gu.transition={};try{t()}finally{gu.transition=e}};ie.unstable_act=lE;ie.useCallback=function(t,e){return It.current.useCallback(t,e)};ie.useContext=function(t){return It.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return It.current.useDeferredValue(t)};ie.useEffect=function(t,e){return It.current.useEffect(t,e)};ie.useId=function(){return It.current.useId()};ie.useImperativeHandle=function(t,e,n){return It.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return It.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return It.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return It.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return It.current.useReducer(t,e,n)};ie.useRef=function(t){return It.current.useRef(t)};ie.useState=function(t){return It.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return It.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return It.current.useTransition()};ie.version="18.3.1";eE.exports=ie;var ee=eE.exports;const J1=b1(ee);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z1=ee,eS=Symbol.for("react.element"),tS=Symbol.for("react.fragment"),nS=Object.prototype.hasOwnProperty,rS=Z1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,iS={key:!0,ref:!0,__self:!0,__source:!0};function uE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)nS.call(e,r)&&!iS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:eS,type:t,key:s,ref:o,props:i,_owner:rS.current}}Nc.Fragment=tS;Nc.jsx=uE;Nc.jsxs=uE;Zv.exports=Nc;var j=Zv.exports,cE={exports:{}},$t={},hE={exports:{}},dE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,X){var Z=$.length;$.push(X);e:for(;0<Z;){var ge=Z-1>>>1,Ee=$[ge];if(0<i(Ee,X))$[ge]=X,$[Z]=Ee,Z=ge;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var X=$[0],Z=$.pop();if(Z!==X){$[0]=Z;e:for(var ge=0,Ee=$.length,Mn=Ee>>>1;ge<Mn;){var At=2*(ge+1)-1,Fn=$[At],Rt=At+1,pn=$[Rt];if(0>i(Fn,Z))Rt<Ee&&0>i(pn,Fn)?($[ge]=pn,$[Rt]=Z,ge=Rt):($[ge]=Fn,$[At]=Z,ge=At);else if(Rt<Ee&&0>i(pn,Z))$[ge]=pn,$[Rt]=Z,ge=Rt;else break e}}return X}function i($,X){var Z=$.sortIndex-X.sortIndex;return Z!==0?Z:$.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,p=null,m=3,I=!1,P=!1,N=!1,x=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A($){for(var X=n(c);X!==null;){if(X.callback===null)r(c);else if(X.startTime<=$)r(c),X.sortIndex=X.expirationTime,e(u,X);else break;X=n(c)}}function k($){if(N=!1,A($),!P)if(n(u)!==null)P=!0,ir(M);else{var X=n(c);X!==null&&sr(k,X.startTime-$)}}function M($,X){P=!1,N&&(N=!1,w(y),y=-1),I=!0;var Z=m;try{for(A(X),p=n(u);p!==null&&(!(p.expirationTime>X)||$&&!R());){var ge=p.callback;if(typeof ge=="function"){p.callback=null,m=p.priorityLevel;var Ee=ge(p.expirationTime<=X);X=t.unstable_now(),typeof Ee=="function"?p.callback=Ee:p===n(u)&&r(u),A(X)}else r(u);p=n(u)}if(p!==null)var Mn=!0;else{var At=n(c);At!==null&&sr(k,At.startTime-X),Mn=!1}return Mn}finally{p=null,m=Z,I=!1}}var U=!1,v=null,y=-1,E=5,T=-1;function R(){return!(t.unstable_now()-T<E)}function D(){if(v!==null){var $=t.unstable_now();T=$;var X=!0;try{X=v(!0,$)}finally{X?S():(U=!1,v=null)}}else U=!1}var S;if(typeof _=="function")S=function(){_(D)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,$e=ve.port2;ve.port1.onmessage=D,S=function(){$e.postMessage(null)}}else S=function(){x(D,0)};function ir($){v=$,U||(U=!0,S())}function sr($,X){y=x(function(){$(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){P||I||(P=!0,ir(M))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(m){case 1:case 2:case 3:var X=3;break;default:X=m}var Z=m;m=X;try{return $()}finally{m=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,X){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Z=m;m=$;try{return X()}finally{m=Z}},t.unstable_scheduleCallback=function($,X,Z){var ge=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ge+Z:ge):Z=ge,$){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=Z+Ee,$={id:f++,callback:X,priorityLevel:$,startTime:Z,expirationTime:Ee,sortIndex:-1},Z>ge?($.sortIndex=Z,e(c,$),n(u)===null&&$===n(c)&&(N?(w(y),y=-1):N=!0,sr(k,Z-ge))):($.sortIndex=Ee,e(u,$),P||I||(P=!0,ir(M))),$},t.unstable_shouldYield=R,t.unstable_wrapCallback=function($){var X=m;return function(){var Z=m;m=X;try{return $.apply(this,arguments)}finally{m=Z}}}})(dE);hE.exports=dE;var sS=hE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oS=ee,zt=sS;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fE=new Set,Ea={};function Zi(t,e){Xs(t,e),Xs(t+"Capture",e)}function Xs(t,e){for(Ea[t]=e,t=0;t<e.length;t++)fE.add(e[t])}var Gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Td=Object.prototype.hasOwnProperty,aS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qg={},Gg={};function lS(t){return Td.call(Gg,t)?!0:Td.call(Qg,t)?!1:aS.test(t)?Gg[t]=!0:(Qg[t]=!0,!1)}function uS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function cS(t,e,n,r){if(e===null||typeof e>"u"||uS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function St(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var at={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){at[t]=new St(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];at[e]=new St(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){at[t]=new St(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){at[t]=new St(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){at[t]=new St(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){at[t]=new St(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){at[t]=new St(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){at[t]=new St(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){at[t]=new St(t,5,!1,t.toLowerCase(),null,!1,!1)});var ap=/[\-:]([a-z])/g;function lp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ap,lp);at[e]=new St(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ap,lp);at[e]=new St(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ap,lp);at[e]=new St(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){at[t]=new St(t,1,!1,t.toLowerCase(),null,!1,!1)});at.xlinkHref=new St("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){at[t]=new St(t,1,!1,t.toLowerCase(),null,!0,!0)});function up(t,e,n,r){var i=at.hasOwnProperty(e)?at[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(cS(e,n,i,r)&&(n=null),r||i===null?lS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var rr=oS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$l=Symbol.for("react.element"),fs=Symbol.for("react.portal"),ps=Symbol.for("react.fragment"),cp=Symbol.for("react.strict_mode"),Id=Symbol.for("react.profiler"),pE=Symbol.for("react.provider"),mE=Symbol.for("react.context"),hp=Symbol.for("react.forward_ref"),Sd=Symbol.for("react.suspense"),Ad=Symbol.for("react.suspense_list"),dp=Symbol.for("react.memo"),gr=Symbol.for("react.lazy"),gE=Symbol.for("react.offscreen"),Xg=Symbol.iterator;function Fo(t){return t===null||typeof t!="object"?null:(t=Xg&&t[Xg]||t["@@iterator"],typeof t=="function"?t:null)}var ke=Object.assign,Mh;function Qo(t){if(Mh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Mh=e&&e[1]||""}return`
`+Mh+t}var Fh=!1;function Uh(t,e){if(!t||Fh)return"";Fh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Fh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qo(t):""}function hS(t){switch(t.tag){case 5:return Qo(t.type);case 16:return Qo("Lazy");case 13:return Qo("Suspense");case 19:return Qo("SuspenseList");case 0:case 2:case 15:return t=Uh(t.type,!1),t;case 11:return t=Uh(t.type.render,!1),t;case 1:return t=Uh(t.type,!0),t;default:return""}}function Rd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ps:return"Fragment";case fs:return"Portal";case Id:return"Profiler";case cp:return"StrictMode";case Sd:return"Suspense";case Ad:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case mE:return(t.displayName||"Context")+".Consumer";case pE:return(t._context.displayName||"Context")+".Provider";case hp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case dp:return e=t.displayName||null,e!==null?e:Rd(t.type)||"Memo";case gr:e=t._payload,t=t._init;try{return Rd(t(e))}catch{}}return null}function dS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rd(e);case 8:return e===cp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Yr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function yE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function fS(t){var e=yE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Hl(t){t._valueTracker||(t._valueTracker=fS(t))}function _E(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=yE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Fu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Cd(t,e){var n=e.checked;return ke({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Yg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function vE(t,e){e=e.checked,e!=null&&up(t,"checked",e,!1)}function Pd(t,e){vE(t,e);var n=Yr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?kd(t,e.type,n):e.hasOwnProperty("defaultValue")&&kd(t,e.type,Yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Jg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function kd(t,e,n){(e!=="number"||Fu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Go=Array.isArray;function Rs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Yr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Nd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return ke({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Zg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(Go(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Yr(n)}}function EE(t,e){var n=Yr(e.value),r=Yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ey(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function wE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?wE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ql,TE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ql=ql||document.createElement("div"),ql.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ql.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function wa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ia={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pS=["Webkit","ms","Moz","O"];Object.keys(ia).forEach(function(t){pS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ia[e]=ia[t]})});function IE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ia.hasOwnProperty(t)&&ia[t]?(""+e).trim():e+"px"}function SE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=IE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var mS=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Od(t,e){if(e){if(mS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function xd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vd=null;function fp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ld=null,Cs=null,Ps=null;function ty(t){if(t=hl(t)){if(typeof Ld!="function")throw Error(B(280));var e=t.stateNode;e&&(e=Lc(e),Ld(t.stateNode,t.type,e))}}function AE(t){Cs?Ps?Ps.push(t):Ps=[t]:Cs=t}function RE(){if(Cs){var t=Cs,e=Ps;if(Ps=Cs=null,ty(t),e)for(t=0;t<e.length;t++)ty(e[t])}}function CE(t,e){return t(e)}function PE(){}var jh=!1;function kE(t,e,n){if(jh)return t(e,n);jh=!0;try{return CE(t,e,n)}finally{jh=!1,(Cs!==null||Ps!==null)&&(PE(),RE())}}function Ta(t,e){var n=t.stateNode;if(n===null)return null;var r=Lc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var bd=!1;if(Gn)try{var Uo={};Object.defineProperty(Uo,"passive",{get:function(){bd=!0}}),window.addEventListener("test",Uo,Uo),window.removeEventListener("test",Uo,Uo)}catch{bd=!1}function gS(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var sa=!1,Uu=null,ju=!1,Md=null,yS={onError:function(t){sa=!0,Uu=t}};function _S(t,e,n,r,i,s,o,l,u){sa=!1,Uu=null,gS.apply(yS,arguments)}function vS(t,e,n,r,i,s,o,l,u){if(_S.apply(this,arguments),sa){if(sa){var c=Uu;sa=!1,Uu=null}else throw Error(B(198));ju||(ju=!0,Md=c)}}function es(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function NE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ny(t){if(es(t)!==t)throw Error(B(188))}function ES(t){var e=t.alternate;if(!e){if(e=es(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ny(i),t;if(s===r)return ny(i),e;s=s.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function DE(t){return t=ES(t),t!==null?OE(t):null}function OE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=OE(t);if(e!==null)return e;t=t.sibling}return null}var xE=zt.unstable_scheduleCallback,ry=zt.unstable_cancelCallback,wS=zt.unstable_shouldYield,TS=zt.unstable_requestPaint,Fe=zt.unstable_now,IS=zt.unstable_getCurrentPriorityLevel,pp=zt.unstable_ImmediatePriority,VE=zt.unstable_UserBlockingPriority,Bu=zt.unstable_NormalPriority,SS=zt.unstable_LowPriority,LE=zt.unstable_IdlePriority,Dc=null,An=null;function AS(t){if(An&&typeof An.onCommitFiberRoot=="function")try{An.onCommitFiberRoot(Dc,t,void 0,(t.current.flags&128)===128)}catch{}}var un=Math.clz32?Math.clz32:PS,RS=Math.log,CS=Math.LN2;function PS(t){return t>>>=0,t===0?32:31-(RS(t)/CS|0)|0}var Wl=64,Kl=4194304;function Xo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function zu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Xo(l):(s&=o,s!==0&&(r=Xo(s)))}else o=n&~i,o!==0?r=Xo(o):s!==0&&(r=Xo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-un(e),i=1<<n,r|=t[n],e&=~i;return r}function kS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function NS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-un(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=kS(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Fd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function bE(){var t=Wl;return Wl<<=1,!(Wl&4194240)&&(Wl=64),t}function Bh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ul(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-un(e),t[e]=n}function DS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-un(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function mp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-un(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var pe=0;function ME(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var FE,gp,UE,jE,BE,Ud=!1,Ql=[],br=null,Mr=null,Fr=null,Ia=new Map,Sa=new Map,_r=[],OS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function iy(t,e){switch(t){case"focusin":case"focusout":br=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Fr=null;break;case"pointerover":case"pointerout":Ia.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sa.delete(e.pointerId)}}function jo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=hl(e),e!==null&&gp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function xS(t,e,n,r,i){switch(e){case"focusin":return br=jo(br,t,e,n,r,i),!0;case"dragenter":return Mr=jo(Mr,t,e,n,r,i),!0;case"mouseover":return Fr=jo(Fr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ia.set(s,jo(Ia.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Sa.set(s,jo(Sa.get(s)||null,t,e,n,r,i)),!0}return!1}function zE(t){var e=Ii(t.target);if(e!==null){var n=es(e);if(n!==null){if(e=n.tag,e===13){if(e=NE(n),e!==null){t.blockedOn=e,BE(t.priority,function(){UE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function yu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=jd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Vd=r,n.target.dispatchEvent(r),Vd=null}else return e=hl(n),e!==null&&gp(e),t.blockedOn=n,!1;e.shift()}return!0}function sy(t,e,n){yu(t)&&n.delete(e)}function VS(){Ud=!1,br!==null&&yu(br)&&(br=null),Mr!==null&&yu(Mr)&&(Mr=null),Fr!==null&&yu(Fr)&&(Fr=null),Ia.forEach(sy),Sa.forEach(sy)}function Bo(t,e){t.blockedOn===e&&(t.blockedOn=null,Ud||(Ud=!0,zt.unstable_scheduleCallback(zt.unstable_NormalPriority,VS)))}function Aa(t){function e(i){return Bo(i,t)}if(0<Ql.length){Bo(Ql[0],t);for(var n=1;n<Ql.length;n++){var r=Ql[n];r.blockedOn===t&&(r.blockedOn=null)}}for(br!==null&&Bo(br,t),Mr!==null&&Bo(Mr,t),Fr!==null&&Bo(Fr,t),Ia.forEach(e),Sa.forEach(e),n=0;n<_r.length;n++)r=_r[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<_r.length&&(n=_r[0],n.blockedOn===null);)zE(n),n.blockedOn===null&&_r.shift()}var ks=rr.ReactCurrentBatchConfig,$u=!0;function LS(t,e,n,r){var i=pe,s=ks.transition;ks.transition=null;try{pe=1,yp(t,e,n,r)}finally{pe=i,ks.transition=s}}function bS(t,e,n,r){var i=pe,s=ks.transition;ks.transition=null;try{pe=4,yp(t,e,n,r)}finally{pe=i,ks.transition=s}}function yp(t,e,n,r){if($u){var i=jd(t,e,n,r);if(i===null)Yh(t,e,r,Hu,n),iy(t,r);else if(xS(i,t,e,n,r))r.stopPropagation();else if(iy(t,r),e&4&&-1<OS.indexOf(t)){for(;i!==null;){var s=hl(i);if(s!==null&&FE(s),s=jd(t,e,n,r),s===null&&Yh(t,e,r,Hu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Yh(t,e,r,null,n)}}var Hu=null;function jd(t,e,n,r){if(Hu=null,t=fp(r),t=Ii(t),t!==null)if(e=es(t),e===null)t=null;else if(n=e.tag,n===13){if(t=NE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Hu=t,null}function $E(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(IS()){case pp:return 1;case VE:return 4;case Bu:case SS:return 16;case LE:return 536870912;default:return 16}default:return 16}}var xr=null,_p=null,_u=null;function HE(){if(_u)return _u;var t,e=_p,n=e.length,r,i="value"in xr?xr.value:xr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return _u=i.slice(t,1<r?1-r:void 0)}function vu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Gl(){return!0}function oy(){return!1}function Ht(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Gl:oy,this.isPropagationStopped=oy,this}return ke(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gl)},persist:function(){},isPersistent:Gl}),e}var ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vp=Ht(ho),cl=ke({},ho,{view:0,detail:0}),MS=Ht(cl),zh,$h,zo,Oc=ke({},cl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ep,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zo&&(zo&&t.type==="mousemove"?(zh=t.screenX-zo.screenX,$h=t.screenY-zo.screenY):$h=zh=0,zo=t),zh)},movementY:function(t){return"movementY"in t?t.movementY:$h}}),ay=Ht(Oc),FS=ke({},Oc,{dataTransfer:0}),US=Ht(FS),jS=ke({},cl,{relatedTarget:0}),Hh=Ht(jS),BS=ke({},ho,{animationName:0,elapsedTime:0,pseudoElement:0}),zS=Ht(BS),$S=ke({},ho,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),HS=Ht($S),qS=ke({},ho,{data:0}),ly=Ht(qS),WS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},KS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},QS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function GS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=QS[t])?!!e[t]:!1}function Ep(){return GS}var XS=ke({},cl,{key:function(t){if(t.key){var e=WS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=vu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?KS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ep,charCode:function(t){return t.type==="keypress"?vu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),YS=Ht(XS),JS=ke({},Oc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uy=Ht(JS),ZS=ke({},cl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ep}),eA=Ht(ZS),tA=ke({},ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),nA=Ht(tA),rA=ke({},Oc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),iA=Ht(rA),sA=[9,13,27,32],wp=Gn&&"CompositionEvent"in window,oa=null;Gn&&"documentMode"in document&&(oa=document.documentMode);var oA=Gn&&"TextEvent"in window&&!oa,qE=Gn&&(!wp||oa&&8<oa&&11>=oa),cy=String.fromCharCode(32),hy=!1;function WE(t,e){switch(t){case"keyup":return sA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function KE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ms=!1;function aA(t,e){switch(t){case"compositionend":return KE(e);case"keypress":return e.which!==32?null:(hy=!0,cy);case"textInput":return t=e.data,t===cy&&hy?null:t;default:return null}}function lA(t,e){if(ms)return t==="compositionend"||!wp&&WE(t,e)?(t=HE(),_u=_p=xr=null,ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return qE&&e.locale!=="ko"?null:e.data;default:return null}}var uA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!uA[t.type]:e==="textarea"}function QE(t,e,n,r){AE(r),e=qu(e,"onChange"),0<e.length&&(n=new vp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var aa=null,Ra=null;function cA(t){sw(t,0)}function xc(t){var e=_s(t);if(_E(e))return t}function hA(t,e){if(t==="change")return e}var GE=!1;if(Gn){var qh;if(Gn){var Wh="oninput"in document;if(!Wh){var fy=document.createElement("div");fy.setAttribute("oninput","return;"),Wh=typeof fy.oninput=="function"}qh=Wh}else qh=!1;GE=qh&&(!document.documentMode||9<document.documentMode)}function py(){aa&&(aa.detachEvent("onpropertychange",XE),Ra=aa=null)}function XE(t){if(t.propertyName==="value"&&xc(Ra)){var e=[];QE(e,Ra,t,fp(t)),kE(cA,e)}}function dA(t,e,n){t==="focusin"?(py(),aa=e,Ra=n,aa.attachEvent("onpropertychange",XE)):t==="focusout"&&py()}function fA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xc(Ra)}function pA(t,e){if(t==="click")return xc(e)}function mA(t,e){if(t==="input"||t==="change")return xc(e)}function gA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var dn=typeof Object.is=="function"?Object.is:gA;function Ca(t,e){if(dn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Td.call(e,i)||!dn(t[i],e[i]))return!1}return!0}function my(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gy(t,e){var n=my(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=my(n)}}function YE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?YE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function JE(){for(var t=window,e=Fu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Fu(t.document)}return e}function Tp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function yA(t){var e=JE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&YE(n.ownerDocument.documentElement,n)){if(r!==null&&Tp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=gy(n,s);var o=gy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _A=Gn&&"documentMode"in document&&11>=document.documentMode,gs=null,Bd=null,la=null,zd=!1;function yy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zd||gs==null||gs!==Fu(r)||(r=gs,"selectionStart"in r&&Tp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),la&&Ca(la,r)||(la=r,r=qu(Bd,"onSelect"),0<r.length&&(e=new vp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=gs)))}function Xl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ys={animationend:Xl("Animation","AnimationEnd"),animationiteration:Xl("Animation","AnimationIteration"),animationstart:Xl("Animation","AnimationStart"),transitionend:Xl("Transition","TransitionEnd")},Kh={},ZE={};Gn&&(ZE=document.createElement("div").style,"AnimationEvent"in window||(delete ys.animationend.animation,delete ys.animationiteration.animation,delete ys.animationstart.animation),"TransitionEvent"in window||delete ys.transitionend.transition);function Vc(t){if(Kh[t])return Kh[t];if(!ys[t])return t;var e=ys[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ZE)return Kh[t]=e[n];return t}var ew=Vc("animationend"),tw=Vc("animationiteration"),nw=Vc("animationstart"),rw=Vc("transitionend"),iw=new Map,_y="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function oi(t,e){iw.set(t,e),Zi(e,[t])}for(var Qh=0;Qh<_y.length;Qh++){var Gh=_y[Qh],vA=Gh.toLowerCase(),EA=Gh[0].toUpperCase()+Gh.slice(1);oi(vA,"on"+EA)}oi(ew,"onAnimationEnd");oi(tw,"onAnimationIteration");oi(nw,"onAnimationStart");oi("dblclick","onDoubleClick");oi("focusin","onFocus");oi("focusout","onBlur");oi(rw,"onTransitionEnd");Xs("onMouseEnter",["mouseout","mouseover"]);Xs("onMouseLeave",["mouseout","mouseover"]);Xs("onPointerEnter",["pointerout","pointerover"]);Xs("onPointerLeave",["pointerout","pointerover"]);Zi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wA=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yo));function vy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,vS(r,e,void 0,t),t.currentTarget=null}function sw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;vy(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;vy(i,l,c),s=u}}}if(ju)throw t=Md,ju=!1,Md=null,t}function Te(t,e){var n=e[Kd];n===void 0&&(n=e[Kd]=new Set);var r=t+"__bubble";n.has(r)||(ow(e,t,2,!1),n.add(r))}function Xh(t,e,n){var r=0;e&&(r|=4),ow(n,t,r,e)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function Pa(t){if(!t[Yl]){t[Yl]=!0,fE.forEach(function(n){n!=="selectionchange"&&(wA.has(n)||Xh(n,!1,t),Xh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Yl]||(e[Yl]=!0,Xh("selectionchange",!1,e))}}function ow(t,e,n,r){switch($E(e)){case 1:var i=LS;break;case 4:i=bS;break;default:i=yp}n=i.bind(null,e,n,t),i=void 0,!bd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Yh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Ii(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}kE(function(){var c=s,f=fp(n),p=[];e:{var m=iw.get(t);if(m!==void 0){var I=vp,P=t;switch(t){case"keypress":if(vu(n)===0)break e;case"keydown":case"keyup":I=YS;break;case"focusin":P="focus",I=Hh;break;case"focusout":P="blur",I=Hh;break;case"beforeblur":case"afterblur":I=Hh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=ay;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=US;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=eA;break;case ew:case tw:case nw:I=zS;break;case rw:I=nA;break;case"scroll":I=MS;break;case"wheel":I=iA;break;case"copy":case"cut":case"paste":I=HS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=uy}var N=(e&4)!==0,x=!N&&t==="scroll",w=N?m!==null?m+"Capture":null:m;N=[];for(var _=c,A;_!==null;){A=_;var k=A.stateNode;if(A.tag===5&&k!==null&&(A=k,w!==null&&(k=Ta(_,w),k!=null&&N.push(ka(_,k,A)))),x)break;_=_.return}0<N.length&&(m=new I(m,P,null,n,f),p.push({event:m,listeners:N}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",m&&n!==Vd&&(P=n.relatedTarget||n.fromElement)&&(Ii(P)||P[Xn]))break e;if((I||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,I?(P=n.relatedTarget||n.toElement,I=c,P=P?Ii(P):null,P!==null&&(x=es(P),P!==x||P.tag!==5&&P.tag!==6)&&(P=null)):(I=null,P=c),I!==P)){if(N=ay,k="onMouseLeave",w="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(N=uy,k="onPointerLeave",w="onPointerEnter",_="pointer"),x=I==null?m:_s(I),A=P==null?m:_s(P),m=new N(k,_+"leave",I,n,f),m.target=x,m.relatedTarget=A,k=null,Ii(f)===c&&(N=new N(w,_+"enter",P,n,f),N.target=A,N.relatedTarget=x,k=N),x=k,I&&P)t:{for(N=I,w=P,_=0,A=N;A;A=ls(A))_++;for(A=0,k=w;k;k=ls(k))A++;for(;0<_-A;)N=ls(N),_--;for(;0<A-_;)w=ls(w),A--;for(;_--;){if(N===w||w!==null&&N===w.alternate)break t;N=ls(N),w=ls(w)}N=null}else N=null;I!==null&&Ey(p,m,I,N,!1),P!==null&&x!==null&&Ey(p,x,P,N,!0)}}e:{if(m=c?_s(c):window,I=m.nodeName&&m.nodeName.toLowerCase(),I==="select"||I==="input"&&m.type==="file")var M=hA;else if(dy(m))if(GE)M=mA;else{M=fA;var U=dA}else(I=m.nodeName)&&I.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(M=pA);if(M&&(M=M(t,c))){QE(p,M,n,f);break e}U&&U(t,m,c),t==="focusout"&&(U=m._wrapperState)&&U.controlled&&m.type==="number"&&kd(m,"number",m.value)}switch(U=c?_s(c):window,t){case"focusin":(dy(U)||U.contentEditable==="true")&&(gs=U,Bd=c,la=null);break;case"focusout":la=Bd=gs=null;break;case"mousedown":zd=!0;break;case"contextmenu":case"mouseup":case"dragend":zd=!1,yy(p,n,f);break;case"selectionchange":if(_A)break;case"keydown":case"keyup":yy(p,n,f)}var v;if(wp)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else ms?WE(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(qE&&n.locale!=="ko"&&(ms||y!=="onCompositionStart"?y==="onCompositionEnd"&&ms&&(v=HE()):(xr=f,_p="value"in xr?xr.value:xr.textContent,ms=!0)),U=qu(c,y),0<U.length&&(y=new ly(y,t,null,n,f),p.push({event:y,listeners:U}),v?y.data=v:(v=KE(n),v!==null&&(y.data=v)))),(v=oA?aA(t,n):lA(t,n))&&(c=qu(c,"onBeforeInput"),0<c.length&&(f=new ly("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=v))}sw(p,e)})}function ka(t,e,n){return{instance:t,listener:e,currentTarget:n}}function qu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ta(t,n),s!=null&&r.unshift(ka(t,s,i)),s=Ta(t,e),s!=null&&r.push(ka(t,s,i))),t=t.return}return r}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ey(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Ta(n,s),u!=null&&o.unshift(ka(n,u,l))):i||(u=Ta(n,s),u!=null&&o.push(ka(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var TA=/\r\n?/g,IA=/\u0000|\uFFFD/g;function wy(t){return(typeof t=="string"?t:""+t).replace(TA,`
`).replace(IA,"")}function Jl(t,e,n){if(e=wy(e),wy(t)!==e&&n)throw Error(B(425))}function Wu(){}var $d=null,Hd=null;function qd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Wd=typeof setTimeout=="function"?setTimeout:void 0,SA=typeof clearTimeout=="function"?clearTimeout:void 0,Ty=typeof Promise=="function"?Promise:void 0,AA=typeof queueMicrotask=="function"?queueMicrotask:typeof Ty<"u"?function(t){return Ty.resolve(null).then(t).catch(RA)}:Wd;function RA(t){setTimeout(function(){throw t})}function Jh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Aa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Aa(e)}function Ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Iy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fo=Math.random().toString(36).slice(2),In="__reactFiber$"+fo,Na="__reactProps$"+fo,Xn="__reactContainer$"+fo,Kd="__reactEvents$"+fo,CA="__reactListeners$"+fo,PA="__reactHandles$"+fo;function Ii(t){var e=t[In];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Xn]||n[In]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Iy(t);t!==null;){if(n=t[In])return n;t=Iy(t)}return e}t=n,n=t.parentNode}return null}function hl(t){return t=t[In]||t[Xn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function _s(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function Lc(t){return t[Na]||null}var Qd=[],vs=-1;function ai(t){return{current:t}}function Ae(t){0>vs||(t.current=Qd[vs],Qd[vs]=null,vs--)}function _e(t,e){vs++,Qd[vs]=t.current,t.current=e}var Jr={},gt=ai(Jr),xt=ai(!1),Bi=Jr;function Ys(t,e){var n=t.type.contextTypes;if(!n)return Jr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Vt(t){return t=t.childContextTypes,t!=null}function Ku(){Ae(xt),Ae(gt)}function Sy(t,e,n){if(gt.current!==Jr)throw Error(B(168));_e(gt,e),_e(xt,n)}function aw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,dS(t)||"Unknown",i));return ke({},n,r)}function Qu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Jr,Bi=gt.current,_e(gt,t),_e(xt,xt.current),!0}function Ay(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=aw(t,e,Bi),r.__reactInternalMemoizedMergedChildContext=t,Ae(xt),Ae(gt),_e(gt,t)):Ae(xt),_e(xt,n)}var Bn=null,bc=!1,Zh=!1;function lw(t){Bn===null?Bn=[t]:Bn.push(t)}function kA(t){bc=!0,lw(t)}function li(){if(!Zh&&Bn!==null){Zh=!0;var t=0,e=pe;try{var n=Bn;for(pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Bn=null,bc=!1}catch(i){throw Bn!==null&&(Bn=Bn.slice(t+1)),xE(pp,li),i}finally{pe=e,Zh=!1}}return null}var Es=[],ws=0,Gu=null,Xu=0,Kt=[],Qt=0,zi=null,Hn=1,qn="";function Ei(t,e){Es[ws++]=Xu,Es[ws++]=Gu,Gu=t,Xu=e}function uw(t,e,n){Kt[Qt++]=Hn,Kt[Qt++]=qn,Kt[Qt++]=zi,zi=t;var r=Hn;t=qn;var i=32-un(r)-1;r&=~(1<<i),n+=1;var s=32-un(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Hn=1<<32-un(e)+i|n<<i|r,qn=s+t}else Hn=1<<s|n<<i|r,qn=t}function Ip(t){t.return!==null&&(Ei(t,1),uw(t,1,0))}function Sp(t){for(;t===Gu;)Gu=Es[--ws],Es[ws]=null,Xu=Es[--ws],Es[ws]=null;for(;t===zi;)zi=Kt[--Qt],Kt[Qt]=null,qn=Kt[--Qt],Kt[Qt]=null,Hn=Kt[--Qt],Kt[Qt]=null}var Bt=null,Ft=null,Re=!1,an=null;function cw(t,e){var n=Yt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ry(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Bt=t,Ft=Ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Bt=t,Ft=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=zi!==null?{id:Hn,overflow:qn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Yt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Bt=t,Ft=null,!0):!1;default:return!1}}function Gd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Xd(t){if(Re){var e=Ft;if(e){var n=e;if(!Ry(t,e)){if(Gd(t))throw Error(B(418));e=Ur(n.nextSibling);var r=Bt;e&&Ry(t,e)?cw(r,n):(t.flags=t.flags&-4097|2,Re=!1,Bt=t)}}else{if(Gd(t))throw Error(B(418));t.flags=t.flags&-4097|2,Re=!1,Bt=t}}}function Cy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Bt=t}function Zl(t){if(t!==Bt)return!1;if(!Re)return Cy(t),Re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!qd(t.type,t.memoizedProps)),e&&(e=Ft)){if(Gd(t))throw hw(),Error(B(418));for(;e;)cw(t,e),e=Ur(e.nextSibling)}if(Cy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ft=Ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ft=null}}else Ft=Bt?Ur(t.stateNode.nextSibling):null;return!0}function hw(){for(var t=Ft;t;)t=Ur(t.nextSibling)}function Js(){Ft=Bt=null,Re=!1}function Ap(t){an===null?an=[t]:an.push(t)}var NA=rr.ReactCurrentBatchConfig;function $o(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function eu(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Py(t){var e=t._init;return e(t._payload)}function dw(t){function e(w,_){if(t){var A=w.deletions;A===null?(w.deletions=[_],w.flags|=16):A.push(_)}}function n(w,_){if(!t)return null;for(;_!==null;)e(w,_),_=_.sibling;return null}function r(w,_){for(w=new Map;_!==null;)_.key!==null?w.set(_.key,_):w.set(_.index,_),_=_.sibling;return w}function i(w,_){return w=$r(w,_),w.index=0,w.sibling=null,w}function s(w,_,A){return w.index=A,t?(A=w.alternate,A!==null?(A=A.index,A<_?(w.flags|=2,_):A):(w.flags|=2,_)):(w.flags|=1048576,_)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,_,A,k){return _===null||_.tag!==6?(_=od(A,w.mode,k),_.return=w,_):(_=i(_,A),_.return=w,_)}function u(w,_,A,k){var M=A.type;return M===ps?f(w,_,A.props.children,k,A.key):_!==null&&(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===gr&&Py(M)===_.type)?(k=i(_,A.props),k.ref=$o(w,_,A),k.return=w,k):(k=Ru(A.type,A.key,A.props,null,w.mode,k),k.ref=$o(w,_,A),k.return=w,k)}function c(w,_,A,k){return _===null||_.tag!==4||_.stateNode.containerInfo!==A.containerInfo||_.stateNode.implementation!==A.implementation?(_=ad(A,w.mode,k),_.return=w,_):(_=i(_,A.children||[]),_.return=w,_)}function f(w,_,A,k,M){return _===null||_.tag!==7?(_=Ui(A,w.mode,k,M),_.return=w,_):(_=i(_,A),_.return=w,_)}function p(w,_,A){if(typeof _=="string"&&_!==""||typeof _=="number")return _=od(""+_,w.mode,A),_.return=w,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case $l:return A=Ru(_.type,_.key,_.props,null,w.mode,A),A.ref=$o(w,null,_),A.return=w,A;case fs:return _=ad(_,w.mode,A),_.return=w,_;case gr:var k=_._init;return p(w,k(_._payload),A)}if(Go(_)||Fo(_))return _=Ui(_,w.mode,A,null),_.return=w,_;eu(w,_)}return null}function m(w,_,A,k){var M=_!==null?_.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return M!==null?null:l(w,_,""+A,k);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case $l:return A.key===M?u(w,_,A,k):null;case fs:return A.key===M?c(w,_,A,k):null;case gr:return M=A._init,m(w,_,M(A._payload),k)}if(Go(A)||Fo(A))return M!==null?null:f(w,_,A,k,null);eu(w,A)}return null}function I(w,_,A,k,M){if(typeof k=="string"&&k!==""||typeof k=="number")return w=w.get(A)||null,l(_,w,""+k,M);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case $l:return w=w.get(k.key===null?A:k.key)||null,u(_,w,k,M);case fs:return w=w.get(k.key===null?A:k.key)||null,c(_,w,k,M);case gr:var U=k._init;return I(w,_,A,U(k._payload),M)}if(Go(k)||Fo(k))return w=w.get(A)||null,f(_,w,k,M,null);eu(_,k)}return null}function P(w,_,A,k){for(var M=null,U=null,v=_,y=_=0,E=null;v!==null&&y<A.length;y++){v.index>y?(E=v,v=null):E=v.sibling;var T=m(w,v,A[y],k);if(T===null){v===null&&(v=E);break}t&&v&&T.alternate===null&&e(w,v),_=s(T,_,y),U===null?M=T:U.sibling=T,U=T,v=E}if(y===A.length)return n(w,v),Re&&Ei(w,y),M;if(v===null){for(;y<A.length;y++)v=p(w,A[y],k),v!==null&&(_=s(v,_,y),U===null?M=v:U.sibling=v,U=v);return Re&&Ei(w,y),M}for(v=r(w,v);y<A.length;y++)E=I(v,w,y,A[y],k),E!==null&&(t&&E.alternate!==null&&v.delete(E.key===null?y:E.key),_=s(E,_,y),U===null?M=E:U.sibling=E,U=E);return t&&v.forEach(function(R){return e(w,R)}),Re&&Ei(w,y),M}function N(w,_,A,k){var M=Fo(A);if(typeof M!="function")throw Error(B(150));if(A=M.call(A),A==null)throw Error(B(151));for(var U=M=null,v=_,y=_=0,E=null,T=A.next();v!==null&&!T.done;y++,T=A.next()){v.index>y?(E=v,v=null):E=v.sibling;var R=m(w,v,T.value,k);if(R===null){v===null&&(v=E);break}t&&v&&R.alternate===null&&e(w,v),_=s(R,_,y),U===null?M=R:U.sibling=R,U=R,v=E}if(T.done)return n(w,v),Re&&Ei(w,y),M;if(v===null){for(;!T.done;y++,T=A.next())T=p(w,T.value,k),T!==null&&(_=s(T,_,y),U===null?M=T:U.sibling=T,U=T);return Re&&Ei(w,y),M}for(v=r(w,v);!T.done;y++,T=A.next())T=I(v,w,y,T.value,k),T!==null&&(t&&T.alternate!==null&&v.delete(T.key===null?y:T.key),_=s(T,_,y),U===null?M=T:U.sibling=T,U=T);return t&&v.forEach(function(D){return e(w,D)}),Re&&Ei(w,y),M}function x(w,_,A,k){if(typeof A=="object"&&A!==null&&A.type===ps&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case $l:e:{for(var M=A.key,U=_;U!==null;){if(U.key===M){if(M=A.type,M===ps){if(U.tag===7){n(w,U.sibling),_=i(U,A.props.children),_.return=w,w=_;break e}}else if(U.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===gr&&Py(M)===U.type){n(w,U.sibling),_=i(U,A.props),_.ref=$o(w,U,A),_.return=w,w=_;break e}n(w,U);break}else e(w,U);U=U.sibling}A.type===ps?(_=Ui(A.props.children,w.mode,k,A.key),_.return=w,w=_):(k=Ru(A.type,A.key,A.props,null,w.mode,k),k.ref=$o(w,_,A),k.return=w,w=k)}return o(w);case fs:e:{for(U=A.key;_!==null;){if(_.key===U)if(_.tag===4&&_.stateNode.containerInfo===A.containerInfo&&_.stateNode.implementation===A.implementation){n(w,_.sibling),_=i(_,A.children||[]),_.return=w,w=_;break e}else{n(w,_);break}else e(w,_);_=_.sibling}_=ad(A,w.mode,k),_.return=w,w=_}return o(w);case gr:return U=A._init,x(w,_,U(A._payload),k)}if(Go(A))return P(w,_,A,k);if(Fo(A))return N(w,_,A,k);eu(w,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,_!==null&&_.tag===6?(n(w,_.sibling),_=i(_,A),_.return=w,w=_):(n(w,_),_=od(A,w.mode,k),_.return=w,w=_),o(w)):n(w,_)}return x}var Zs=dw(!0),fw=dw(!1),Yu=ai(null),Ju=null,Ts=null,Rp=null;function Cp(){Rp=Ts=Ju=null}function Pp(t){var e=Yu.current;Ae(Yu),t._currentValue=e}function Yd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ns(t,e){Ju=t,Rp=Ts=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ot=!0),t.firstContext=null)}function Zt(t){var e=t._currentValue;if(Rp!==t)if(t={context:t,memoizedValue:e,next:null},Ts===null){if(Ju===null)throw Error(B(308));Ts=t,Ju.dependencies={lanes:0,firstContext:t}}else Ts=Ts.next=t;return e}var Si=null;function kp(t){Si===null?Si=[t]:Si.push(t)}function pw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,kp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Yn(t,r)}function Yn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var yr=!1;function Np(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Qn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function jr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Yn(t,n)}return i=r.interleaved,i===null?(e.next=e,kp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Yn(t,n)}function Eu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,mp(t,n)}}function ky(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Zu(t,e,n,r){var i=t.updateQueue;yr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=c=u=null,l=s;do{var m=l.lane,I=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:I,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,N=l;switch(m=e,I=n,N.tag){case 1:if(P=N.payload,typeof P=="function"){p=P.call(I,p,m);break e}p=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=N.payload,m=typeof P=="function"?P.call(I,p,m):P,m==null)break e;p=ke({},p,m);break e;case 2:yr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else I={eventTime:I,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=I,u=p):f=f.next=I,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Hi|=o,t.lanes=o,t.memoizedState=p}}function Ny(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var dl={},Rn=ai(dl),Da=ai(dl),Oa=ai(dl);function Ai(t){if(t===dl)throw Error(B(174));return t}function Dp(t,e){switch(_e(Oa,e),_e(Da,t),_e(Rn,dl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Dd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Dd(e,t)}Ae(Rn),_e(Rn,e)}function eo(){Ae(Rn),Ae(Da),Ae(Oa)}function gw(t){Ai(Oa.current);var e=Ai(Rn.current),n=Dd(e,t.type);e!==n&&(_e(Da,t),_e(Rn,n))}function Op(t){Da.current===t&&(Ae(Rn),Ae(Da))}var Ce=ai(0);function ec(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ed=[];function xp(){for(var t=0;t<ed.length;t++)ed[t]._workInProgressVersionPrimary=null;ed.length=0}var wu=rr.ReactCurrentDispatcher,td=rr.ReactCurrentBatchConfig,$i=0,Pe=null,We=null,Ze=null,tc=!1,ua=!1,xa=0,DA=0;function ut(){throw Error(B(321))}function Vp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!dn(t[n],e[n]))return!1;return!0}function Lp(t,e,n,r,i,s){if($i=s,Pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,wu.current=t===null||t.memoizedState===null?LA:bA,t=n(r,i),ua){s=0;do{if(ua=!1,xa=0,25<=s)throw Error(B(301));s+=1,Ze=We=null,e.updateQueue=null,wu.current=MA,t=n(r,i)}while(ua)}if(wu.current=nc,e=We!==null&&We.next!==null,$i=0,Ze=We=Pe=null,tc=!1,e)throw Error(B(300));return t}function bp(){var t=xa!==0;return xa=0,t}function _n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Pe.memoizedState=Ze=t:Ze=Ze.next=t,Ze}function en(){if(We===null){var t=Pe.alternate;t=t!==null?t.memoizedState:null}else t=We.next;var e=Ze===null?Pe.memoizedState:Ze.next;if(e!==null)Ze=e,We=t;else{if(t===null)throw Error(B(310));We=t,t={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},Ze===null?Pe.memoizedState=Ze=t:Ze=Ze.next=t}return Ze}function Va(t,e){return typeof e=="function"?e(t):e}function nd(t){var e=en(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=We,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var f=c.lane;if(($i&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Pe.lanes|=f,Hi|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,dn(r,e.memoizedState)||(Ot=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Pe.lanes|=s,Hi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function rd(t){var e=en(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);dn(s,e.memoizedState)||(Ot=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function yw(){}function _w(t,e){var n=Pe,r=en(),i=e(),s=!dn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ot=!0),r=r.queue,Mp(ww.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,La(9,Ew.bind(null,n,r,i,e),void 0,null),tt===null)throw Error(B(349));$i&30||vw(n,e,i)}return i}function vw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ew(t,e,n,r){e.value=n,e.getSnapshot=r,Tw(e)&&Iw(t)}function ww(t,e,n){return n(function(){Tw(e)&&Iw(t)})}function Tw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!dn(t,n)}catch{return!0}}function Iw(t){var e=Yn(t,1);e!==null&&cn(e,t,1,-1)}function Dy(t){var e=_n();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:t},e.queue=t,t=t.dispatch=VA.bind(null,Pe,t),[e.memoizedState,t]}function La(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Sw(){return en().memoizedState}function Tu(t,e,n,r){var i=_n();Pe.flags|=t,i.memoizedState=La(1|e,n,void 0,r===void 0?null:r)}function Mc(t,e,n,r){var i=en();r=r===void 0?null:r;var s=void 0;if(We!==null){var o=We.memoizedState;if(s=o.destroy,r!==null&&Vp(r,o.deps)){i.memoizedState=La(e,n,s,r);return}}Pe.flags|=t,i.memoizedState=La(1|e,n,s,r)}function Oy(t,e){return Tu(8390656,8,t,e)}function Mp(t,e){return Mc(2048,8,t,e)}function Aw(t,e){return Mc(4,2,t,e)}function Rw(t,e){return Mc(4,4,t,e)}function Cw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Pw(t,e,n){return n=n!=null?n.concat([t]):null,Mc(4,4,Cw.bind(null,e,t),n)}function Fp(){}function kw(t,e){var n=en();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Nw(t,e){var n=en();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Dw(t,e,n){return $i&21?(dn(n,e)||(n=bE(),Pe.lanes|=n,Hi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ot=!0),t.memoizedState=n)}function OA(t,e){var n=pe;pe=n!==0&&4>n?n:4,t(!0);var r=td.transition;td.transition={};try{t(!1),e()}finally{pe=n,td.transition=r}}function Ow(){return en().memoizedState}function xA(t,e,n){var r=zr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},xw(t))Vw(e,n);else if(n=pw(t,e,n,r),n!==null){var i=Tt();cn(n,t,r,i),Lw(n,e,r)}}function VA(t,e,n){var r=zr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(xw(t))Vw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,dn(l,o)){var u=e.interleaved;u===null?(i.next=i,kp(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=pw(t,e,i,r),n!==null&&(i=Tt(),cn(n,t,r,i),Lw(n,e,r))}}function xw(t){var e=t.alternate;return t===Pe||e!==null&&e===Pe}function Vw(t,e){ua=tc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Lw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,mp(t,n)}}var nc={readContext:Zt,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useInsertionEffect:ut,useLayoutEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useMutableSource:ut,useSyncExternalStore:ut,useId:ut,unstable_isNewReconciler:!1},LA={readContext:Zt,useCallback:function(t,e){return _n().memoizedState=[t,e===void 0?null:e],t},useContext:Zt,useEffect:Oy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Tu(4194308,4,Cw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Tu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Tu(4,2,t,e)},useMemo:function(t,e){var n=_n();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=_n();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=xA.bind(null,Pe,t),[r.memoizedState,t]},useRef:function(t){var e=_n();return t={current:t},e.memoizedState=t},useState:Dy,useDebugValue:Fp,useDeferredValue:function(t){return _n().memoizedState=t},useTransition:function(){var t=Dy(!1),e=t[0];return t=OA.bind(null,t[1]),_n().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Pe,i=_n();if(Re){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),tt===null)throw Error(B(349));$i&30||vw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Oy(ww.bind(null,r,s,t),[t]),r.flags|=2048,La(9,Ew.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=_n(),e=tt.identifierPrefix;if(Re){var n=qn,r=Hn;n=(r&~(1<<32-un(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=xa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=DA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},bA={readContext:Zt,useCallback:kw,useContext:Zt,useEffect:Mp,useImperativeHandle:Pw,useInsertionEffect:Aw,useLayoutEffect:Rw,useMemo:Nw,useReducer:nd,useRef:Sw,useState:function(){return nd(Va)},useDebugValue:Fp,useDeferredValue:function(t){var e=en();return Dw(e,We.memoizedState,t)},useTransition:function(){var t=nd(Va)[0],e=en().memoizedState;return[t,e]},useMutableSource:yw,useSyncExternalStore:_w,useId:Ow,unstable_isNewReconciler:!1},MA={readContext:Zt,useCallback:kw,useContext:Zt,useEffect:Mp,useImperativeHandle:Pw,useInsertionEffect:Aw,useLayoutEffect:Rw,useMemo:Nw,useReducer:rd,useRef:Sw,useState:function(){return rd(Va)},useDebugValue:Fp,useDeferredValue:function(t){var e=en();return We===null?e.memoizedState=t:Dw(e,We.memoizedState,t)},useTransition:function(){var t=rd(Va)[0],e=en().memoizedState;return[t,e]},useMutableSource:yw,useSyncExternalStore:_w,useId:Ow,unstable_isNewReconciler:!1};function nn(t,e){if(t&&t.defaultProps){e=ke({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Jd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ke({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Fc={isMounted:function(t){return(t=t._reactInternals)?es(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Tt(),i=zr(t),s=Qn(r,i);s.payload=e,n!=null&&(s.callback=n),e=jr(t,s,i),e!==null&&(cn(e,t,i,r),Eu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Tt(),i=zr(t),s=Qn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=jr(t,s,i),e!==null&&(cn(e,t,i,r),Eu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Tt(),r=zr(t),i=Qn(n,r);i.tag=2,e!=null&&(i.callback=e),e=jr(t,i,r),e!==null&&(cn(e,t,r,n),Eu(e,t,r))}};function xy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ca(n,r)||!Ca(i,s):!0}function bw(t,e,n){var r=!1,i=Jr,s=e.contextType;return typeof s=="object"&&s!==null?s=Zt(s):(i=Vt(e)?Bi:gt.current,r=e.contextTypes,s=(r=r!=null)?Ys(t,i):Jr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Fc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Vy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Fc.enqueueReplaceState(e,e.state,null)}function Zd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Np(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Zt(s):(s=Vt(e)?Bi:gt.current,i.context=Ys(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Jd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Fc.enqueueReplaceState(i,i.state,null),Zu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function to(t,e){try{var n="",r=e;do n+=hS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function id(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ef(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var FA=typeof WeakMap=="function"?WeakMap:Map;function Mw(t,e,n){n=Qn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ic||(ic=!0,hf=r),ef(t,e)},n}function Fw(t,e,n){n=Qn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ef(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ef(t,e),typeof r!="function"&&(Br===null?Br=new Set([this]):Br.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ly(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new FA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=JA.bind(null,t,e,n),e.then(t,t))}function by(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function My(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Qn(-1,1),e.tag=2,jr(n,e,1))),n.lanes|=1),t)}var UA=rr.ReactCurrentOwner,Ot=!1;function wt(t,e,n,r){e.child=t===null?fw(e,null,n,r):Zs(e,t.child,n,r)}function Fy(t,e,n,r,i){n=n.render;var s=e.ref;return Ns(e,i),r=Lp(t,e,n,r,s,i),n=bp(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Jn(t,e,i)):(Re&&n&&Ip(e),e.flags|=1,wt(t,e,r,i),e.child)}function Uy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Wp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Uw(t,e,s,r,i)):(t=Ru(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ca,n(o,r)&&t.ref===e.ref)return Jn(t,e,i)}return e.flags|=1,t=$r(s,r),t.ref=e.ref,t.return=e,e.child=t}function Uw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ca(s,r)&&t.ref===e.ref)if(Ot=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ot=!0);else return e.lanes=t.lanes,Jn(t,e,i)}return tf(t,e,n,r,i)}function jw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(Ss,Mt),Mt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_e(Ss,Mt),Mt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,_e(Ss,Mt),Mt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,_e(Ss,Mt),Mt|=r;return wt(t,e,i,n),e.child}function Bw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function tf(t,e,n,r,i){var s=Vt(n)?Bi:gt.current;return s=Ys(e,s),Ns(e,i),n=Lp(t,e,n,r,s,i),r=bp(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Jn(t,e,i)):(Re&&r&&Ip(e),e.flags|=1,wt(t,e,n,i),e.child)}function jy(t,e,n,r,i){if(Vt(n)){var s=!0;Qu(e)}else s=!1;if(Ns(e,i),e.stateNode===null)Iu(t,e),bw(e,n,r),Zd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Zt(c):(c=Vt(n)?Bi:gt.current,c=Ys(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Vy(e,o,r,c),yr=!1;var m=e.memoizedState;o.state=m,Zu(e,r,o,i),u=e.memoizedState,l!==r||m!==u||xt.current||yr?(typeof f=="function"&&(Jd(e,n,f,r),u=e.memoizedState),(l=yr||xy(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,mw(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:nn(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Zt(u):(u=Vt(n)?Bi:gt.current,u=Ys(e,u));var I=n.getDerivedStateFromProps;(f=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&Vy(e,o,r,u),yr=!1,m=e.memoizedState,o.state=m,Zu(e,r,o,i);var P=e.memoizedState;l!==p||m!==P||xt.current||yr?(typeof I=="function"&&(Jd(e,n,I,r),P=e.memoizedState),(c=yr||xy(e,n,c,r,m,P,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return nf(t,e,n,r,s,i)}function nf(t,e,n,r,i,s){Bw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ay(e,n,!1),Jn(t,e,s);r=e.stateNode,UA.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Zs(e,t.child,null,s),e.child=Zs(e,null,l,s)):wt(t,e,l,s),e.memoizedState=r.state,i&&Ay(e,n,!0),e.child}function zw(t){var e=t.stateNode;e.pendingContext?Sy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Sy(t,e.context,!1),Dp(t,e.containerInfo)}function By(t,e,n,r,i){return Js(),Ap(i),e.flags|=256,wt(t,e,n,r),e.child}var rf={dehydrated:null,treeContext:null,retryLane:0};function sf(t){return{baseLanes:t,cachePool:null,transitions:null}}function $w(t,e,n){var r=e.pendingProps,i=Ce.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),_e(Ce,i&1),t===null)return Xd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Bc(o,r,0,null),t=Ui(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=sf(n),e.memoizedState=rf,t):Up(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return jA(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=$r(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=$r(l,s):(s=Ui(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?sf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=rf,r}return s=t.child,t=s.sibling,r=$r(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Up(t,e){return e=Bc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function tu(t,e,n,r){return r!==null&&Ap(r),Zs(e,t.child,null,n),t=Up(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function jA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=id(Error(B(422))),tu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Bc({mode:"visible",children:r.children},i,0,null),s=Ui(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Zs(e,t.child,null,o),e.child.memoizedState=sf(o),e.memoizedState=rf,s);if(!(e.mode&1))return tu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(B(419)),r=id(s,r,void 0),tu(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ot||l){if(r=tt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Yn(t,i),cn(r,t,i,-1))}return qp(),r=id(Error(B(421))),tu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=ZA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ft=Ur(i.nextSibling),Bt=e,Re=!0,an=null,t!==null&&(Kt[Qt++]=Hn,Kt[Qt++]=qn,Kt[Qt++]=zi,Hn=t.id,qn=t.overflow,zi=e),e=Up(e,r.children),e.flags|=4096,e)}function zy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Yd(t.return,e,n)}function sd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Hw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(wt(t,e,r.children,n),r=Ce.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zy(t,n,e);else if(t.tag===19)zy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(_e(Ce,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ec(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),sd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ec(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}sd(e,!0,n,null,s);break;case"together":sd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Iu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Jn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Hi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=$r(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=$r(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function BA(t,e,n){switch(e.tag){case 3:zw(e),Js();break;case 5:gw(e);break;case 1:Vt(e.type)&&Qu(e);break;case 4:Dp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;_e(Yu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(_e(Ce,Ce.current&1),e.flags|=128,null):n&e.child.childLanes?$w(t,e,n):(_e(Ce,Ce.current&1),t=Jn(t,e,n),t!==null?t.sibling:null);_e(Ce,Ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Hw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(Ce,Ce.current),r)break;return null;case 22:case 23:return e.lanes=0,jw(t,e,n)}return Jn(t,e,n)}var qw,of,Ww,Kw;qw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};of=function(){};Ww=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ai(Rn.current);var s=null;switch(n){case"input":i=Cd(t,i),r=Cd(t,r),s=[];break;case"select":i=ke({},i,{value:void 0}),r=ke({},r,{value:void 0}),s=[];break;case"textarea":i=Nd(t,i),r=Nd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Wu)}Od(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ea.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ea.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Te("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Kw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ho(t,e){if(!Re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function zA(t,e,n){var r=e.pendingProps;switch(Sp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(e),null;case 1:return Vt(e.type)&&Ku(),ct(e),null;case 3:return r=e.stateNode,eo(),Ae(xt),Ae(gt),xp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Zl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,an!==null&&(pf(an),an=null))),of(t,e),ct(e),null;case 5:Op(e);var i=Ai(Oa.current);if(n=e.type,t!==null&&e.stateNode!=null)Ww(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return ct(e),null}if(t=Ai(Rn.current),Zl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[In]=e,r[Na]=s,t=(e.mode&1)!==0,n){case"dialog":Te("cancel",r),Te("close",r);break;case"iframe":case"object":case"embed":Te("load",r);break;case"video":case"audio":for(i=0;i<Yo.length;i++)Te(Yo[i],r);break;case"source":Te("error",r);break;case"img":case"image":case"link":Te("error",r),Te("load",r);break;case"details":Te("toggle",r);break;case"input":Yg(r,s),Te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Te("invalid",r);break;case"textarea":Zg(r,s),Te("invalid",r)}Od(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Jl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Jl(r.textContent,l,t),i=["children",""+l]):Ea.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Te("scroll",r)}switch(n){case"input":Hl(r),Jg(r,s,!0);break;case"textarea":Hl(r),ey(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Wu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=wE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[In]=e,t[Na]=r,qw(t,e,!1,!1),e.stateNode=t;e:{switch(o=xd(n,r),n){case"dialog":Te("cancel",t),Te("close",t),i=r;break;case"iframe":case"object":case"embed":Te("load",t),i=r;break;case"video":case"audio":for(i=0;i<Yo.length;i++)Te(Yo[i],t);i=r;break;case"source":Te("error",t),i=r;break;case"img":case"image":case"link":Te("error",t),Te("load",t),i=r;break;case"details":Te("toggle",t),i=r;break;case"input":Yg(t,r),i=Cd(t,r),Te("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ke({},r,{value:void 0}),Te("invalid",t);break;case"textarea":Zg(t,r),i=Nd(t,r),Te("invalid",t);break;default:i=r}Od(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?SE(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&TE(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&wa(t,u):typeof u=="number"&&wa(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ea.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Te("scroll",t):u!=null&&up(t,s,u,o))}switch(n){case"input":Hl(t),Jg(t,r,!1);break;case"textarea":Hl(t),ey(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Yr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Rs(t,!!r.multiple,s,!1):r.defaultValue!=null&&Rs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Wu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ct(e),null;case 6:if(t&&e.stateNode!=null)Kw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=Ai(Oa.current),Ai(Rn.current),Zl(e)){if(r=e.stateNode,n=e.memoizedProps,r[In]=e,(s=r.nodeValue!==n)&&(t=Bt,t!==null))switch(t.tag){case 3:Jl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Jl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[In]=e,e.stateNode=r}return ct(e),null;case 13:if(Ae(Ce),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Re&&Ft!==null&&e.mode&1&&!(e.flags&128))hw(),Js(),e.flags|=98560,s=!1;else if(s=Zl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[In]=e}else Js(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ct(e),s=!1}else an!==null&&(pf(an),an=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ce.current&1?Qe===0&&(Qe=3):qp())),e.updateQueue!==null&&(e.flags|=4),ct(e),null);case 4:return eo(),of(t,e),t===null&&Pa(e.stateNode.containerInfo),ct(e),null;case 10:return Pp(e.type._context),ct(e),null;case 17:return Vt(e.type)&&Ku(),ct(e),null;case 19:if(Ae(Ce),s=e.memoizedState,s===null)return ct(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ho(s,!1);else{if(Qe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ec(t),o!==null){for(e.flags|=128,Ho(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _e(Ce,Ce.current&1|2),e.child}t=t.sibling}s.tail!==null&&Fe()>no&&(e.flags|=128,r=!0,Ho(s,!1),e.lanes=4194304)}else{if(!r)if(t=ec(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ho(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Re)return ct(e),null}else 2*Fe()-s.renderingStartTime>no&&n!==1073741824&&(e.flags|=128,r=!0,Ho(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Fe(),e.sibling=null,n=Ce.current,_e(Ce,r?n&1|2:n&1),e):(ct(e),null);case 22:case 23:return Hp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Mt&1073741824&&(ct(e),e.subtreeFlags&6&&(e.flags|=8192)):ct(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function $A(t,e){switch(Sp(e),e.tag){case 1:return Vt(e.type)&&Ku(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return eo(),Ae(xt),Ae(gt),xp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Op(e),null;case 13:if(Ae(Ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));Js()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ae(Ce),null;case 4:return eo(),null;case 10:return Pp(e.type._context),null;case 22:case 23:return Hp(),null;case 24:return null;default:return null}}var nu=!1,pt=!1,HA=typeof WeakSet=="function"?WeakSet:Set,W=null;function Is(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(t,e,r)}else n.current=null}function af(t,e,n){try{n()}catch(r){xe(t,e,r)}}var $y=!1;function qA(t,e){if($d=$u,t=JE(),Tp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,p=t,m=null;t:for(;;){for(var I;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(I=p.firstChild)!==null;)m=p,p=I;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++f===r&&(u=o),(I=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=I}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hd={focusedElem:t,selectionRange:n},$u=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var N=P.memoizedProps,x=P.memoizedState,w=e.stateNode,_=w.getSnapshotBeforeUpdate(e.elementType===e.type?N:nn(e.type,N),x);w.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(k){xe(e,e.return,k)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return P=$y,$y=!1,P}function ca(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&af(e,n,s)}i=i.next}while(i!==r)}}function Uc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function lf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Qw(t){var e=t.alternate;e!==null&&(t.alternate=null,Qw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[In],delete e[Na],delete e[Kd],delete e[CA],delete e[PA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Gw(t){return t.tag===5||t.tag===3||t.tag===4}function Hy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Gw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Wu));else if(r!==4&&(t=t.child,t!==null))for(uf(t,e,n),t=t.sibling;t!==null;)uf(t,e,n),t=t.sibling}function cf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(cf(t,e,n),t=t.sibling;t!==null;)cf(t,e,n),t=t.sibling}var nt=null,on=!1;function fr(t,e,n){for(n=n.child;n!==null;)Xw(t,e,n),n=n.sibling}function Xw(t,e,n){if(An&&typeof An.onCommitFiberUnmount=="function")try{An.onCommitFiberUnmount(Dc,n)}catch{}switch(n.tag){case 5:pt||Is(n,e);case 6:var r=nt,i=on;nt=null,fr(t,e,n),nt=r,on=i,nt!==null&&(on?(t=nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):nt.removeChild(n.stateNode));break;case 18:nt!==null&&(on?(t=nt,n=n.stateNode,t.nodeType===8?Jh(t.parentNode,n):t.nodeType===1&&Jh(t,n),Aa(t)):Jh(nt,n.stateNode));break;case 4:r=nt,i=on,nt=n.stateNode.containerInfo,on=!0,fr(t,e,n),nt=r,on=i;break;case 0:case 11:case 14:case 15:if(!pt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&af(n,e,o),i=i.next}while(i!==r)}fr(t,e,n);break;case 1:if(!pt&&(Is(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){xe(n,e,l)}fr(t,e,n);break;case 21:fr(t,e,n);break;case 22:n.mode&1?(pt=(r=pt)||n.memoizedState!==null,fr(t,e,n),pt=r):fr(t,e,n);break;default:fr(t,e,n)}}function qy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new HA),e.forEach(function(r){var i=eR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:nt=l.stateNode,on=!1;break e;case 3:nt=l.stateNode.containerInfo,on=!0;break e;case 4:nt=l.stateNode.containerInfo,on=!0;break e}l=l.return}if(nt===null)throw Error(B(160));Xw(s,o,i),nt=null,on=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){xe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Yw(e,t),e=e.sibling}function Yw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(tn(e,t),yn(t),r&4){try{ca(3,t,t.return),Uc(3,t)}catch(N){xe(t,t.return,N)}try{ca(5,t,t.return)}catch(N){xe(t,t.return,N)}}break;case 1:tn(e,t),yn(t),r&512&&n!==null&&Is(n,n.return);break;case 5:if(tn(e,t),yn(t),r&512&&n!==null&&Is(n,n.return),t.flags&32){var i=t.stateNode;try{wa(i,"")}catch(N){xe(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&vE(i,s),xd(l,o);var c=xd(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?SE(i,p):f==="dangerouslySetInnerHTML"?TE(i,p):f==="children"?wa(i,p):up(i,f,p,c)}switch(l){case"input":Pd(i,s);break;case"textarea":EE(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var I=s.value;I!=null?Rs(i,!!s.multiple,I,!1):m!==!!s.multiple&&(s.defaultValue!=null?Rs(i,!!s.multiple,s.defaultValue,!0):Rs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Na]=s}catch(N){xe(t,t.return,N)}}break;case 6:if(tn(e,t),yn(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){xe(t,t.return,N)}}break;case 3:if(tn(e,t),yn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Aa(e.containerInfo)}catch(N){xe(t,t.return,N)}break;case 4:tn(e,t),yn(t);break;case 13:tn(e,t),yn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(zp=Fe())),r&4&&qy(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(pt=(c=pt)||f,tn(e,t),pt=c):tn(e,t),yn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(W=t,f=t.child;f!==null;){for(p=W=f;W!==null;){switch(m=W,I=m.child,m.tag){case 0:case 11:case 14:case 15:ca(4,m,m.return);break;case 1:Is(m,m.return);var P=m.stateNode;if(typeof P.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(N){xe(r,n,N)}}break;case 5:Is(m,m.return);break;case 22:if(m.memoizedState!==null){Ky(p);continue}}I!==null?(I.return=m,W=I):Ky(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=IE("display",o))}catch(N){xe(t,t.return,N)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(N){xe(t,t.return,N)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:tn(e,t),yn(t),r&4&&qy(t);break;case 21:break;default:tn(e,t),yn(t)}}function yn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Gw(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(wa(i,""),r.flags&=-33);var s=Hy(t);cf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Hy(t);uf(t,l,o);break;default:throw Error(B(161))}}catch(u){xe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function WA(t,e,n){W=t,Jw(t)}function Jw(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||nu;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||pt;l=nu;var c=pt;if(nu=o,(pt=u)&&!c)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?Qy(i):u!==null?(u.return=o,W=u):Qy(i);for(;s!==null;)W=s,Jw(s),s=s.sibling;W=i,nu=l,pt=c}Wy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):Wy(t)}}function Wy(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:pt||Uc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!pt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:nn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ny(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ny(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Aa(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}pt||e.flags&512&&lf(e)}catch(m){xe(e,e.return,m)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function Ky(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function Qy(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Uc(4,e)}catch(u){xe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){xe(e,i,u)}}var s=e.return;try{lf(e)}catch(u){xe(e,s,u)}break;case 5:var o=e.return;try{lf(e)}catch(u){xe(e,o,u)}}}catch(u){xe(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var KA=Math.ceil,rc=rr.ReactCurrentDispatcher,jp=rr.ReactCurrentOwner,Jt=rr.ReactCurrentBatchConfig,he=0,tt=null,je=null,ot=0,Mt=0,Ss=ai(0),Qe=0,ba=null,Hi=0,jc=0,Bp=0,ha=null,Nt=null,zp=0,no=1/0,jn=null,ic=!1,hf=null,Br=null,ru=!1,Vr=null,sc=0,da=0,df=null,Su=-1,Au=0;function Tt(){return he&6?Fe():Su!==-1?Su:Su=Fe()}function zr(t){return t.mode&1?he&2&&ot!==0?ot&-ot:NA.transition!==null?(Au===0&&(Au=bE()),Au):(t=pe,t!==0||(t=window.event,t=t===void 0?16:$E(t.type)),t):1}function cn(t,e,n,r){if(50<da)throw da=0,df=null,Error(B(185));ul(t,n,r),(!(he&2)||t!==tt)&&(t===tt&&(!(he&2)&&(jc|=n),Qe===4&&vr(t,ot)),Lt(t,r),n===1&&he===0&&!(e.mode&1)&&(no=Fe()+500,bc&&li()))}function Lt(t,e){var n=t.callbackNode;NS(t,e);var r=zu(t,t===tt?ot:0);if(r===0)n!==null&&ry(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ry(n),e===1)t.tag===0?kA(Gy.bind(null,t)):lw(Gy.bind(null,t)),AA(function(){!(he&6)&&li()}),n=null;else{switch(ME(r)){case 1:n=pp;break;case 4:n=VE;break;case 16:n=Bu;break;case 536870912:n=LE;break;default:n=Bu}n=o0(n,Zw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Zw(t,e){if(Su=-1,Au=0,he&6)throw Error(B(327));var n=t.callbackNode;if(Ds()&&t.callbackNode!==n)return null;var r=zu(t,t===tt?ot:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=oc(t,r);else{e=r;var i=he;he|=2;var s=t0();(tt!==t||ot!==e)&&(jn=null,no=Fe()+500,Fi(t,e));do try{XA();break}catch(l){e0(t,l)}while(1);Cp(),rc.current=s,he=i,je!==null?e=0:(tt=null,ot=0,e=Qe)}if(e!==0){if(e===2&&(i=Fd(t),i!==0&&(r=i,e=ff(t,i))),e===1)throw n=ba,Fi(t,0),vr(t,r),Lt(t,Fe()),n;if(e===6)vr(t,r);else{if(i=t.current.alternate,!(r&30)&&!QA(i)&&(e=oc(t,r),e===2&&(s=Fd(t),s!==0&&(r=s,e=ff(t,s))),e===1))throw n=ba,Fi(t,0),vr(t,r),Lt(t,Fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:wi(t,Nt,jn);break;case 3:if(vr(t,r),(r&130023424)===r&&(e=zp+500-Fe(),10<e)){if(zu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Tt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Wd(wi.bind(null,t,Nt,jn),e);break}wi(t,Nt,jn);break;case 4:if(vr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-un(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*KA(r/1960))-r,10<r){t.timeoutHandle=Wd(wi.bind(null,t,Nt,jn),r);break}wi(t,Nt,jn);break;case 5:wi(t,Nt,jn);break;default:throw Error(B(329))}}}return Lt(t,Fe()),t.callbackNode===n?Zw.bind(null,t):null}function ff(t,e){var n=ha;return t.current.memoizedState.isDehydrated&&(Fi(t,e).flags|=256),t=oc(t,e),t!==2&&(e=Nt,Nt=n,e!==null&&pf(e)),t}function pf(t){Nt===null?Nt=t:Nt.push.apply(Nt,t)}function QA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!dn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function vr(t,e){for(e&=~Bp,e&=~jc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-un(e),r=1<<n;t[n]=-1,e&=~r}}function Gy(t){if(he&6)throw Error(B(327));Ds();var e=zu(t,0);if(!(e&1))return Lt(t,Fe()),null;var n=oc(t,e);if(t.tag!==0&&n===2){var r=Fd(t);r!==0&&(e=r,n=ff(t,r))}if(n===1)throw n=ba,Fi(t,0),vr(t,e),Lt(t,Fe()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,wi(t,Nt,jn),Lt(t,Fe()),null}function $p(t,e){var n=he;he|=1;try{return t(e)}finally{he=n,he===0&&(no=Fe()+500,bc&&li())}}function qi(t){Vr!==null&&Vr.tag===0&&!(he&6)&&Ds();var e=he;he|=1;var n=Jt.transition,r=pe;try{if(Jt.transition=null,pe=1,t)return t()}finally{pe=r,Jt.transition=n,he=e,!(he&6)&&li()}}function Hp(){Mt=Ss.current,Ae(Ss)}function Fi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,SA(n)),je!==null)for(n=je.return;n!==null;){var r=n;switch(Sp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ku();break;case 3:eo(),Ae(xt),Ae(gt),xp();break;case 5:Op(r);break;case 4:eo();break;case 13:Ae(Ce);break;case 19:Ae(Ce);break;case 10:Pp(r.type._context);break;case 22:case 23:Hp()}n=n.return}if(tt=t,je=t=$r(t.current,null),ot=Mt=e,Qe=0,ba=null,Bp=jc=Hi=0,Nt=ha=null,Si!==null){for(e=0;e<Si.length;e++)if(n=Si[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Si=null}return t}function e0(t,e){do{var n=je;try{if(Cp(),wu.current=nc,tc){for(var r=Pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}tc=!1}if($i=0,Ze=We=Pe=null,ua=!1,xa=0,jp.current=null,n===null||n.return===null){Qe=1,ba=e,je=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=ot,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var I=by(o);if(I!==null){I.flags&=-257,My(I,o,l,s,e),I.mode&1&&Ly(s,c,e),e=I,u=c;var P=e.updateQueue;if(P===null){var N=new Set;N.add(u),e.updateQueue=N}else P.add(u);break e}else{if(!(e&1)){Ly(s,c,e),qp();break e}u=Error(B(426))}}else if(Re&&l.mode&1){var x=by(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),My(x,o,l,s,e),Ap(to(u,l));break e}}s=u=to(u,l),Qe!==4&&(Qe=2),ha===null?ha=[s]:ha.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=Mw(s,u,e);ky(s,w);break e;case 1:l=u;var _=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(Br===null||!Br.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var k=Fw(s,l,e);ky(s,k);break e}}s=s.return}while(s!==null)}r0(n)}catch(M){e=M,je===n&&n!==null&&(je=n=n.return);continue}break}while(1)}function t0(){var t=rc.current;return rc.current=nc,t===null?nc:t}function qp(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),tt===null||!(Hi&268435455)&&!(jc&268435455)||vr(tt,ot)}function oc(t,e){var n=he;he|=2;var r=t0();(tt!==t||ot!==e)&&(jn=null,Fi(t,e));do try{GA();break}catch(i){e0(t,i)}while(1);if(Cp(),he=n,rc.current=r,je!==null)throw Error(B(261));return tt=null,ot=0,Qe}function GA(){for(;je!==null;)n0(je)}function XA(){for(;je!==null&&!wS();)n0(je)}function n0(t){var e=s0(t.alternate,t,Mt);t.memoizedProps=t.pendingProps,e===null?r0(t):je=e,jp.current=null}function r0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=$A(n,e),n!==null){n.flags&=32767,je=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qe=6,je=null;return}}else if(n=zA(n,e,Mt),n!==null){je=n;return}if(e=e.sibling,e!==null){je=e;return}je=e=t}while(e!==null);Qe===0&&(Qe=5)}function wi(t,e,n){var r=pe,i=Jt.transition;try{Jt.transition=null,pe=1,YA(t,e,n,r)}finally{Jt.transition=i,pe=r}return null}function YA(t,e,n,r){do Ds();while(Vr!==null);if(he&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(DS(t,s),t===tt&&(je=tt=null,ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ru||(ru=!0,o0(Bu,function(){return Ds(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Jt.transition,Jt.transition=null;var o=pe;pe=1;var l=he;he|=4,jp.current=null,qA(t,n),Yw(n,t),yA(Hd),$u=!!$d,Hd=$d=null,t.current=n,WA(n),TS(),he=l,pe=o,Jt.transition=s}else t.current=n;if(ru&&(ru=!1,Vr=t,sc=i),s=t.pendingLanes,s===0&&(Br=null),AS(n.stateNode),Lt(t,Fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ic)throw ic=!1,t=hf,hf=null,t;return sc&1&&t.tag!==0&&Ds(),s=t.pendingLanes,s&1?t===df?da++:(da=0,df=t):da=0,li(),null}function Ds(){if(Vr!==null){var t=ME(sc),e=Jt.transition,n=pe;try{if(Jt.transition=null,pe=16>t?16:t,Vr===null)var r=!1;else{if(t=Vr,Vr=null,sc=0,he&6)throw Error(B(331));var i=he;for(he|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(W=c;W!==null;){var f=W;switch(f.tag){case 0:case 11:case 15:ca(8,f,s)}var p=f.child;if(p!==null)p.return=f,W=p;else for(;W!==null;){f=W;var m=f.sibling,I=f.return;if(Qw(f),f===c){W=null;break}if(m!==null){m.return=I,W=m;break}W=I}}}var P=s.alternate;if(P!==null){var N=P.child;if(N!==null){P.child=null;do{var x=N.sibling;N.sibling=null,N=x}while(N!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ca(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,W=w;break e}W=s.return}}var _=t.current;for(W=_;W!==null;){o=W;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,W=A;else e:for(o=_;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Uc(9,l)}}catch(M){xe(l,l.return,M)}if(l===o){W=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,W=k;break e}W=l.return}}if(he=i,li(),An&&typeof An.onPostCommitFiberRoot=="function")try{An.onPostCommitFiberRoot(Dc,t)}catch{}r=!0}return r}finally{pe=n,Jt.transition=e}}return!1}function Xy(t,e,n){e=to(n,e),e=Mw(t,e,1),t=jr(t,e,1),e=Tt(),t!==null&&(ul(t,1,e),Lt(t,e))}function xe(t,e,n){if(t.tag===3)Xy(t,t,n);else for(;e!==null;){if(e.tag===3){Xy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Br===null||!Br.has(r))){t=to(n,t),t=Fw(e,t,1),e=jr(e,t,1),t=Tt(),e!==null&&(ul(e,1,t),Lt(e,t));break}}e=e.return}}function JA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Tt(),t.pingedLanes|=t.suspendedLanes&n,tt===t&&(ot&n)===n&&(Qe===4||Qe===3&&(ot&130023424)===ot&&500>Fe()-zp?Fi(t,0):Bp|=n),Lt(t,e)}function i0(t,e){e===0&&(t.mode&1?(e=Kl,Kl<<=1,!(Kl&130023424)&&(Kl=4194304)):e=1);var n=Tt();t=Yn(t,e),t!==null&&(ul(t,e,n),Lt(t,n))}function ZA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),i0(t,n)}function eR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),i0(t,n)}var s0;s0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||xt.current)Ot=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ot=!1,BA(t,e,n);Ot=!!(t.flags&131072)}else Ot=!1,Re&&e.flags&1048576&&uw(e,Xu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Iu(t,e),t=e.pendingProps;var i=Ys(e,gt.current);Ns(e,n),i=Lp(null,e,r,t,i,n);var s=bp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Vt(r)?(s=!0,Qu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Np(e),i.updater=Fc,e.stateNode=i,i._reactInternals=e,Zd(e,r,t,n),e=nf(null,e,r,!0,s,n)):(e.tag=0,Re&&s&&Ip(e),wt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Iu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=nR(r),t=nn(r,t),i){case 0:e=tf(null,e,r,t,n);break e;case 1:e=jy(null,e,r,t,n);break e;case 11:e=Fy(null,e,r,t,n);break e;case 14:e=Uy(null,e,r,nn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),tf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),jy(t,e,r,i,n);case 3:e:{if(zw(e),t===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,mw(t,e),Zu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=to(Error(B(423)),e),e=By(t,e,r,n,i);break e}else if(r!==i){i=to(Error(B(424)),e),e=By(t,e,r,n,i);break e}else for(Ft=Ur(e.stateNode.containerInfo.firstChild),Bt=e,Re=!0,an=null,n=fw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Js(),r===i){e=Jn(t,e,n);break e}wt(t,e,r,n)}e=e.child}return e;case 5:return gw(e),t===null&&Xd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,qd(r,i)?o=null:s!==null&&qd(r,s)&&(e.flags|=32),Bw(t,e),wt(t,e,o,n),e.child;case 6:return t===null&&Xd(e),null;case 13:return $w(t,e,n);case 4:return Dp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Zs(e,null,r,n):wt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),Fy(t,e,r,i,n);case 7:return wt(t,e,e.pendingProps,n),e.child;case 8:return wt(t,e,e.pendingProps.children,n),e.child;case 12:return wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,_e(Yu,r._currentValue),r._currentValue=o,s!==null)if(dn(s.value,o)){if(s.children===i.children&&!xt.current){e=Jn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Qn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Yd(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Yd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}wt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ns(e,n),i=Zt(i),r=r(i),e.flags|=1,wt(t,e,r,n),e.child;case 14:return r=e.type,i=nn(r,e.pendingProps),i=nn(r.type,i),Uy(t,e,r,i,n);case 15:return Uw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),Iu(t,e),e.tag=1,Vt(r)?(t=!0,Qu(e)):t=!1,Ns(e,n),bw(e,r,i),Zd(e,r,i,n),nf(null,e,r,!0,t,n);case 19:return Hw(t,e,n);case 22:return jw(t,e,n)}throw Error(B(156,e.tag))};function o0(t,e){return xE(t,e)}function tR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yt(t,e,n,r){return new tR(t,e,n,r)}function Wp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function nR(t){if(typeof t=="function")return Wp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===hp)return 11;if(t===dp)return 14}return 2}function $r(t,e){var n=t.alternate;return n===null?(n=Yt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ru(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Wp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ps:return Ui(n.children,i,s,e);case cp:o=8,i|=8;break;case Id:return t=Yt(12,n,e,i|2),t.elementType=Id,t.lanes=s,t;case Sd:return t=Yt(13,n,e,i),t.elementType=Sd,t.lanes=s,t;case Ad:return t=Yt(19,n,e,i),t.elementType=Ad,t.lanes=s,t;case gE:return Bc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case pE:o=10;break e;case mE:o=9;break e;case hp:o=11;break e;case dp:o=14;break e;case gr:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=Yt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ui(t,e,n,r){return t=Yt(7,t,r,e),t.lanes=n,t}function Bc(t,e,n,r){return t=Yt(22,t,r,e),t.elementType=gE,t.lanes=n,t.stateNode={isHidden:!1},t}function od(t,e,n){return t=Yt(6,t,null,e),t.lanes=n,t}function ad(t,e,n){return e=Yt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function rR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bh(0),this.expirationTimes=Bh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Kp(t,e,n,r,i,s,o,l,u){return t=new rR(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Yt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Np(s),t}function iR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function a0(t){if(!t)return Jr;t=t._reactInternals;e:{if(es(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(Vt(n))return aw(t,n,e)}return e}function l0(t,e,n,r,i,s,o,l,u){return t=Kp(n,r,!0,t,i,s,o,l,u),t.context=a0(null),n=t.current,r=Tt(),i=zr(n),s=Qn(r,i),s.callback=e??null,jr(n,s,i),t.current.lanes=i,ul(t,i,r),Lt(t,r),t}function zc(t,e,n,r){var i=e.current,s=Tt(),o=zr(i);return n=a0(n),e.context===null?e.context=n:e.pendingContext=n,e=Qn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=jr(i,e,o),t!==null&&(cn(t,i,o,s),Eu(t,i,o)),o}function ac(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Yy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Qp(t,e){Yy(t,e),(t=t.alternate)&&Yy(t,e)}function sR(){return null}var u0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Gp(t){this._internalRoot=t}$c.prototype.render=Gp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));zc(t,e,null,null)};$c.prototype.unmount=Gp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qi(function(){zc(null,t,null,null)}),e[Xn]=null}};function $c(t){this._internalRoot=t}$c.prototype.unstable_scheduleHydration=function(t){if(t){var e=jE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<_r.length&&e!==0&&e<_r[n].priority;n++);_r.splice(n,0,t),n===0&&zE(t)}};function Xp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Hc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Jy(){}function oR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ac(o);s.call(c)}}var o=l0(e,r,t,0,null,!1,!1,"",Jy);return t._reactRootContainer=o,t[Xn]=o.current,Pa(t.nodeType===8?t.parentNode:t),qi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=ac(u);l.call(c)}}var u=Kp(t,0,!1,null,null,!1,!1,"",Jy);return t._reactRootContainer=u,t[Xn]=u.current,Pa(t.nodeType===8?t.parentNode:t),qi(function(){zc(e,u,n,r)}),u}function qc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=ac(o);l.call(u)}}zc(e,o,t,i)}else o=oR(n,e,t,i,r);return ac(o)}FE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Xo(e.pendingLanes);n!==0&&(mp(e,n|1),Lt(e,Fe()),!(he&6)&&(no=Fe()+500,li()))}break;case 13:qi(function(){var r=Yn(t,1);if(r!==null){var i=Tt();cn(r,t,1,i)}}),Qp(t,1)}};gp=function(t){if(t.tag===13){var e=Yn(t,134217728);if(e!==null){var n=Tt();cn(e,t,134217728,n)}Qp(t,134217728)}};UE=function(t){if(t.tag===13){var e=zr(t),n=Yn(t,e);if(n!==null){var r=Tt();cn(n,t,e,r)}Qp(t,e)}};jE=function(){return pe};BE=function(t,e){var n=pe;try{return pe=t,e()}finally{pe=n}};Ld=function(t,e,n){switch(e){case"input":if(Pd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Lc(r);if(!i)throw Error(B(90));_E(r),Pd(r,i)}}}break;case"textarea":EE(t,n);break;case"select":e=n.value,e!=null&&Rs(t,!!n.multiple,e,!1)}};CE=$p;PE=qi;var aR={usingClientEntryPoint:!1,Events:[hl,_s,Lc,AE,RE,$p]},qo={findFiberByHostInstance:Ii,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lR={bundleType:qo.bundleType,version:qo.version,rendererPackageName:qo.rendererPackageName,rendererConfig:qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=DE(t),t===null?null:t.stateNode},findFiberByHostInstance:qo.findFiberByHostInstance||sR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!iu.isDisabled&&iu.supportsFiber)try{Dc=iu.inject(lR),An=iu}catch{}}$t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aR;$t.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xp(e))throw Error(B(200));return iR(t,e,null,n)};$t.createRoot=function(t,e){if(!Xp(t))throw Error(B(299));var n=!1,r="",i=u0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Kp(t,1,!1,null,null,n,!1,r,i),t[Xn]=e.current,Pa(t.nodeType===8?t.parentNode:t),new Gp(e)};$t.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=DE(e),t=t===null?null:t.stateNode,t};$t.flushSync=function(t){return qi(t)};$t.hydrate=function(t,e,n){if(!Hc(e))throw Error(B(200));return qc(null,t,e,!0,n)};$t.hydrateRoot=function(t,e,n){if(!Xp(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=u0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=l0(e,null,t,1,n??null,i,!1,s,o),t[Xn]=e.current,Pa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new $c(e)};$t.render=function(t,e,n){if(!Hc(e))throw Error(B(200));return qc(null,t,e,!1,n)};$t.unmountComponentAtNode=function(t){if(!Hc(t))throw Error(B(40));return t._reactRootContainer?(qi(function(){qc(null,null,t,!1,function(){t._reactRootContainer=null,t[Xn]=null})}),!0):!1};$t.unstable_batchedUpdates=$p;$t.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Hc(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return qc(t,e,n,!1,r)};$t.version="18.3.1-next-f1338f8080-20240426";function c0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c0)}catch(t){console.error(t)}}c0(),cE.exports=$t;var uR=cE.exports,h0,Zy=uR;h0=Zy.createRoot,Zy.hydrateRoot;const cR=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},hR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},f0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,I=c&63;u||(I=64,o||(m=64)),r.push(n[f],n[p],n[m],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(d0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):hR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new dR;const m=s<<2|l>>4;if(r.push(m),c!==64){const I=l<<4&240|c>>2;if(r.push(I),p!==64){const P=c<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class dR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fR=function(t){const e=d0(t);return f0.encodeByteArray(e,!0)},lc=function(t){return fR(t).replace(/\./g,"")},p0=function(t){try{return f0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR=()=>pR().__FIREBASE_DEFAULTS__,gR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&p0(t[1]);return e&&JSON.parse(e)},Wc=()=>{try{return cR()||mR()||gR()||yR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},m0=t=>{var e,n;return(n=(e=Wc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},g0=t=>{const e=m0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},y0=()=>{var t;return(t=Wc())==null?void 0:t.config},_0=t=>{var e;return(e=Wc())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Yp(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t},l="";return[lc(JSON.stringify(n)),lc(JSON.stringify(o)),l].join(".")}const fa={};function vR(){const t={prod:[],emulator:[]};for(const e of Object.keys(fa))fa[e]?t.emulator.push(e):t.prod.push(e);return t}function ER(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let e_=!1;function Jp(t,e){if(typeof window>"u"||typeof document>"u"||!ui(window.location.host)||fa[t]===e||fa[t]||e_)return;fa[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",s=vR().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,I){m.setAttribute("width","24"),m.setAttribute("id",I),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function c(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{e_=!0,o()},m}function f(m,I){m.setAttribute("id",I),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=ER(r),I=n("text"),P=document.getElementById(I)||document.createElement("span"),N=n("learnmore"),x=document.getElementById(N)||document.createElement("a"),w=n("preprendIcon"),_=document.getElementById(w)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const A=m.element;l(A),f(x,N);const k=c();u(_,w),A.append(_,P,x,k),document.body.appendChild(A)}s?(P.innerText="Preview backend disconnected.",_.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(_.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yt())}function TR(){var e;const t=(e=Wc())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function IR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function SR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function AR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function RR(){const t=yt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function CR(){return!TR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function PR(){try{return typeof indexedDB=="object"}catch{return!1}}function kR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR="FirebaseError";class bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=NR,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fl.prototype.create)}}class fl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?DR(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new bn(i,l,r)}}function DR(t,e){return t.replace(OR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const OR=/\{\$([^}]+)}/g;function xR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(t_(s)&&t_(o)){if(!Wi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function t_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Jo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Zo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function VR(t,e){const n=new LR(t,e);return n.subscribe.bind(n)}class LR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");bR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ld),i.error===void 0&&(i.error=ld),i.complete===void 0&&(i.complete=ld);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ld(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(t){return t&&t._delegate?t._delegate:t}class Zr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new _R;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(UR(e))try{this.getOrInitializeService({instanceIdentifier:Ti})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ti){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ti){return this.instances.has(e)}getOptions(e=Ti){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:FR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ti){return this.component?this.component.multipleInstances?e:Ti:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function FR(t){return t===Ti?void 0:t}function UR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new MR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const BR={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},zR=oe.INFO,$R={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},HR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=$R[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zp{constructor(e){this.name=e,this._logLevel=zR,this._logHandler=HR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?BR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const qR=(t,e)=>e.some(n=>t instanceof n);let n_,r_;function WR(){return n_||(n_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function KR(){return r_||(r_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const E0=new WeakMap,mf=new WeakMap,w0=new WeakMap,ud=new WeakMap,em=new WeakMap;function QR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Hr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&E0.set(n,t)}).catch(()=>{}),em.set(e,t),e}function GR(t){if(mf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});mf.set(t,e)}let gf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return mf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||w0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function XR(t){gf=t(gf)}function YR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(cd(this),e,...n);return w0.set(r,e.sort?e.sort():[e]),Hr(r)}:KR().includes(t)?function(...e){return t.apply(cd(this),e),Hr(E0.get(this))}:function(...e){return Hr(t.apply(cd(this),e))}}function JR(t){return typeof t=="function"?YR(t):(t instanceof IDBTransaction&&GR(t),qR(t,WR())?new Proxy(t,gf):t)}function Hr(t){if(t instanceof IDBRequest)return QR(t);if(ud.has(t))return ud.get(t);const e=JR(t);return e!==t&&(ud.set(t,e),em.set(e,t)),e}const cd=t=>em.get(t);function ZR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Hr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Hr(o.result),u.oldVersion,u.newVersion,Hr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const eC=["get","getKey","getAll","getAllKeys","count"],tC=["put","add","delete","clear"],hd=new Map;function i_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(hd.get(e))return hd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=tC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||eC.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return hd.set(e,s),s}XR(t=>({...t,get:(e,n,r)=>i_(e,n)||t.get(e,n,r),has:(e,n)=>!!i_(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function rC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yf="@firebase/app",s_="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=new Zp("@firebase/app"),iC="@firebase/app-compat",sC="@firebase/analytics-compat",oC="@firebase/analytics",aC="@firebase/app-check-compat",lC="@firebase/app-check",uC="@firebase/auth",cC="@firebase/auth-compat",hC="@firebase/database",dC="@firebase/data-connect",fC="@firebase/database-compat",pC="@firebase/functions",mC="@firebase/functions-compat",gC="@firebase/installations",yC="@firebase/installations-compat",_C="@firebase/messaging",vC="@firebase/messaging-compat",EC="@firebase/performance",wC="@firebase/performance-compat",TC="@firebase/remote-config",IC="@firebase/remote-config-compat",SC="@firebase/storage",AC="@firebase/storage-compat",RC="@firebase/firestore",CC="@firebase/ai",PC="@firebase/firestore-compat",kC="firebase",NC="12.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f="[DEFAULT]",DC={[yf]:"fire-core",[iC]:"fire-core-compat",[oC]:"fire-analytics",[sC]:"fire-analytics-compat",[lC]:"fire-app-check",[aC]:"fire-app-check-compat",[uC]:"fire-auth",[cC]:"fire-auth-compat",[hC]:"fire-rtdb",[dC]:"fire-data-connect",[fC]:"fire-rtdb-compat",[pC]:"fire-fn",[mC]:"fire-fn-compat",[gC]:"fire-iid",[yC]:"fire-iid-compat",[_C]:"fire-fcm",[vC]:"fire-fcm-compat",[EC]:"fire-perf",[wC]:"fire-perf-compat",[TC]:"fire-rc",[IC]:"fire-rc-compat",[SC]:"fire-gcs",[AC]:"fire-gcs-compat",[RC]:"fire-fst",[PC]:"fire-fst-compat",[CC]:"fire-vertex","fire-js":"fire-js",[kC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc=new Map,OC=new Map,vf=new Map;function o_(t,e){try{t.container.addComponent(e)}catch(n){Zn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ki(t){const e=t.name;if(vf.has(e))return Zn.debug(`There were multiple attempts to register component ${e}.`),!1;vf.set(e,t);for(const n of uc.values())o_(n,t);for(const n of OC.values())o_(n,t);return!0}function Kc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Gt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qr=new fl("app","Firebase",xC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=NC;function T0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:_f,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw qr.create("bad-app-name",{appName:String(i)});if(n||(n=y0()),!n)throw qr.create("no-options");const s=uc.get(i);if(s){if(Wi(n,s.options)&&Wi(r,s.config))return s;throw qr.create("duplicate-app",{appName:i})}const o=new jR(i);for(const u of vf.values())o.addComponent(u);const l=new VC(n,r,o);return uc.set(i,l),l}function tm(t=_f){const e=uc.get(t);if(!e&&t===_f&&y0())return T0();if(!e)throw qr.create("no-app",{appName:t});return e}function Cn(t,e,n){let r=DC[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zn.warn(o.join(" "));return}Ki(new Zr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC="firebase-heartbeat-database",bC=1,Ma="firebase-heartbeat-store";let dd=null;function I0(){return dd||(dd=ZR(LC,bC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ma)}catch(n){console.warn(n)}}}}).catch(t=>{throw qr.create("idb-open",{originalErrorMessage:t.message})})),dd}async function MC(t){try{const n=(await I0()).transaction(Ma),r=await n.objectStore(Ma).get(S0(t));return await n.done,r}catch(e){if(e instanceof bn)Zn.warn(e.message);else{const n=qr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zn.warn(n.message)}}}async function a_(t,e){try{const r=(await I0()).transaction(Ma,"readwrite");await r.objectStore(Ma).put(e,S0(t)),await r.done}catch(n){if(n instanceof bn)Zn.warn(n.message);else{const r=qr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zn.warn(r.message)}}}function S0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC=1024,UC=30;class jC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=l_();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>UC){const o=$C(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Zn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=l_(),{heartbeatsToSend:r,unsentEntries:i}=BC(this._heartbeatsCache.heartbeats),s=lc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Zn.warn(n),""}}}function l_(){return new Date().toISOString().substring(0,10)}function BC(t,e=FC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),u_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),u_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return PR()?kR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await MC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return a_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return a_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function u_(t){return lc(JSON.stringify({version:2,heartbeats:t})).length}function $C(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HC(t){Ki(new Zr("platform-logger",e=>new nC(e),"PRIVATE")),Ki(new Zr("heartbeat",e=>new jC(e),"PRIVATE")),Cn(yf,s_,t),Cn(yf,s_,"esm2020"),Cn("fire-js","")}HC("");function A0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qC=A0,R0=new fl("auth","Firebase",A0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=new Zp("@firebase/auth");function WC(t,...e){cc.logLevel<=oe.WARN&&cc.warn(`Auth (${ts}): ${t}`,...e)}function Cu(t,...e){cc.logLevel<=oe.ERROR&&cc.error(`Auth (${ts}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t,...e){throw nm(t,...e)}function Pn(t,...e){return nm(t,...e)}function C0(t,e,n){const r={...qC(),[e]:n};return new fl("auth","Firebase",r).create(e,{appName:t.name})}function Wr(t){return C0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function nm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return R0.create(t,...e)}function Y(t,e,...n){if(!t)throw nm(e,...n)}function Wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Cu(e),new Error(e)}function er(t,e){t||Wn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function KC(){return c_()==="http:"||c_()==="https:"}function c_(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(KC()||SR()||"connection"in navigator)?navigator.onLine:!0}function GC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,n){this.shortDelay=e,this.longDelay=n,er(n>e,"Short delay should be less than long delay!"),this.isMobile=wR()||AR()}get(){return QC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(t,e){er(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],JC=new ml(3e4,6e4);function ns(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ci(t,e,n,r,i={}){return k0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=pl({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return IR()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&ui(t.emulatorConfig.host)&&(c.credentials="include"),P0.fetch()(await N0(t,t.config.apiHost,n,l),c)})}async function k0(t,e,n){t._canInitEmulator=!1;const r={...XC,...e};try{const i=new eP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw su(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw su(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw su(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw su(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw C0(t,f,c);fn(t,f)}}catch(i){if(i instanceof bn)throw i;fn(t,"network-request-failed",{message:String(i)})}}async function Qc(t,e,n,r,i={}){const s=await ci(t,e,n,r,i);return"mfaPendingCredential"in s&&fn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function N0(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?rm(t.config,i):`${t.config.apiScheme}://${i}`;return YC.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function ZC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class eP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Pn(this.auth,"network-request-failed")),JC.get())})}}function su(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Pn(t,e,r);return i.customData._tokenResponse=n,i}function h_(t){return t!==void 0&&t.enterprise!==void 0}class tP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ZC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function nP(t,e){return ci(t,"GET","/v2/recaptchaConfig",ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rP(t,e){return ci(t,"POST","/v1/accounts:delete",e)}async function hc(t,e){return ci(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iP(t,e=!1){const n=ze(t),r=await n.getIdToken(e),i=im(r);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:pa(fd(i.auth_time)),issuedAtTime:pa(fd(i.iat)),expirationTime:pa(fd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function fd(t){return Number(t)*1e3}function im(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Cu("JWT malformed, contained fewer than 3 sections"),null;try{const i=p0(n);return i?JSON.parse(i):(Cu("Failed to decode base64 JWT payload"),null)}catch(i){return Cu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function d_(t){const e=im(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof bn&&sP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function sP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=pa(this.lastLoginAt),this.creationTime=pa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dc(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Fa(t,hc(e,{idToken:n}));Y(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?D0(i.providerUserInfo):[],o=lP(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new wf(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function aP(t){const e=ze(t);await dc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function D0(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uP(t,e){const n=await k0(t,{},async()=>{const r=pl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await N0(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&ui(t.emulatorConfig.host)&&(u.credentials="include"),P0.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function cP(t,e){return ci(t,"POST","/v2/accounts:revokeToken",ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):d_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=d_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await uP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Os;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Os,this.toJSON())}_performRefresh(){return Wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ln{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new oP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new wf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Fa(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return iP(this,e)}reload(){return aP(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ln({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await dc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Gt(this.auth.app))return Promise.reject(Wr(this.auth));const e=await this.getIdToken();return await Fa(this,rP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:I,providerData:P,stsTokenManager:N}=n;Y(p&&N,e,"internal-error");const x=Os.fromJSON(this.name,N);Y(typeof p=="string",e,"internal-error"),pr(r,e.name),pr(i,e.name),Y(typeof m=="boolean",e,"internal-error"),Y(typeof I=="boolean",e,"internal-error"),pr(s,e.name),pr(o,e.name),pr(l,e.name),pr(u,e.name),pr(c,e.name),pr(f,e.name);const w=new ln({uid:p,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:I,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:x,createdAt:c,lastLoginAt:f});return P&&Array.isArray(P)&&(w.providerData=P.map(_=>({..._}))),u&&(w._redirectEventId=u),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new Os;i.updateFromServerResponse(n);const s=new ln({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await dc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Y(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?D0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Os;l.updateFromIdToken(r);const u=new ln({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new wf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_=new Map;function Kn(t){er(t instanceof Function,"Expected a class definition");let e=f_.get(t);return e?(er(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,f_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}O0.type="NONE";const p_=O0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(t,e,n){return`firebase:${t}:${e}:${n}`}class xs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Pu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Pu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await hc(this.auth,{idToken:e}).catch(()=>{});return n?ln._fromGetAccountInfoResponse(this.auth,n,e):null}return ln._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new xs(Kn(p_),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Kn(p_);const o=Pu(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){let p;if(typeof f=="string"){const m=await hc(e,{idToken:f}).catch(()=>{});if(!m)break;p=await ln._fromGetAccountInfoResponse(e,m,f)}else p=ln._fromJSON(e,f);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new xs(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new xs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(b0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(x0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(F0(e))return"Blackberry";if(U0(e))return"Webos";if(V0(e))return"Safari";if((e.includes("chrome/")||L0(e))&&!e.includes("edge/"))return"Chrome";if(M0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function x0(t=yt()){return/firefox\//i.test(t)}function V0(t=yt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function L0(t=yt()){return/crios\//i.test(t)}function b0(t=yt()){return/iemobile/i.test(t)}function M0(t=yt()){return/android/i.test(t)}function F0(t=yt()){return/blackberry/i.test(t)}function U0(t=yt()){return/webos/i.test(t)}function sm(t=yt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function hP(t=yt()){var e;return sm(t)&&!!((e=window.navigator)!=null&&e.standalone)}function dP(){return RR()&&document.documentMode===10}function j0(t=yt()){return sm(t)||M0(t)||U0(t)||F0(t)||/windows phone/i.test(t)||b0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(t,e=[]){let n;switch(t){case"Browser":n=m_(yt());break;case"Worker":n=`${m_(yt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ts}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pP(t,e={}){return ci(t,"GET","/v2/passwordPolicy",ns(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP=6;class gP{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??mP,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new g_(this),this.idTokenSubscription=new g_(this),this.beforeStateQueue=new fP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=R0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Kn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await xs.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await hc(this,{idToken:e}),r=await ln._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Gt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await dc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=GC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Gt(this.app))return Promise.reject(Wr(this));const n=e?ze(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Gt(this.app)?Promise.reject(Wr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Gt(this.app)?Promise.reject(Wr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await pP(this),n=new gP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new fl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await cP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Kn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await xs.create(this,[Kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=B0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Gt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&WC(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function po(t){return ze(t)}class g_{constructor(e){this.auth=e,this.observer=null,this.addObserver=VR(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _P(t){Gc=t}function z0(t){return Gc.loadJS(t)}function vP(){return Gc.recaptchaEnterpriseScript}function EP(){return Gc.gapiScript}function wP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class TP{constructor(){this.enterprise=new IP}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class IP{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const SP="recaptcha-enterprise",$0="NO_RECAPTCHA";class AP{constructor(e){this.type=SP,this.auth=po(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{nP(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new tP(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;h_(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o($0)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new TP().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&h_(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=vP();u.length!==0&&(u+=l),z0(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Wo(t,e,n,r=!1,i=!1){const s=new AP(t);let o;if(i)o=$0;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function y_(t,e,n,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await Wo(t,e,n,n==="getOobCode");return r(t,l)}else return r(t,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await Wo(t,e,n,n==="getOobCode");return r(t,u)}else return Promise.reject(l)});else if(i==="PHONE_PROVIDER")if((o=t._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const l=await Wo(t,e,n);return r(t,l).catch(async u=>{var c;if(((c=t._getRecaptchaConfig())==null?void 0:c.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(u.code==="auth/missing-recaptcha-token"||u.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const f=await Wo(t,e,n,!1,!0);return r(t,f)}return Promise.reject(u)})}else{const l=await Wo(t,e,n,!1,!0);return r(t,l)}else return Promise.reject(i+" provider is not supported.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RP(t,e){const n=Kc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Wi(s,e??{}))return i;fn(i,"already-initialized")}return n.initialize({options:e})}function CP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function PP(t,e,n){const r=po(t);Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=H0(e),{host:o,port:l}=kP(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){Y(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Y(Wi(c,r.config.emulator)&&Wi(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,ui(o)?(Yp(`${s}//${o}${u}`),Jp("Auth",!0)):i||NP()}function H0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function kP(t){const e=H0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:__(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:__(o)}}}function __(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function NP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wn("not implemented")}_getIdTokenResponse(e){return Wn("not implemented")}_linkToIdToken(e,n){return Wn("not implemented")}_getReauthenticationResolver(e){return Wn("not implemented")}}async function DP(t,e){return ci(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OP(t,e){return Qc(t,"POST","/v1/accounts:signInWithPassword",ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xP(t,e){return Qc(t,"POST","/v1/accounts:signInWithEmailLink",ns(t,e))}async function VP(t,e){return Qc(t,"POST","/v1/accounts:signInWithEmailLink",ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua extends om{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ua(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ua(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return y_(e,n,"signInWithPassword",OP,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return xP(e,{email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return y_(e,r,"signUpPassword",DP,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return VP(e,{idToken:n,email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vs(t,e){return Qc(t,"POST","/v1/accounts:signInWithIdp",ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP="http://localhost";class Qi extends om{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Qi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Vs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Vs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vs(e,n)}buildRequest(){const e={requestUri:LP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=pl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function MP(t){const e=Jo(Zo(t)).link,n=e?Jo(Zo(e)).deep_link_id:null,r=Jo(Zo(t)).deep_link_id;return(r?Jo(Zo(r)).link:null)||r||n||e||t}class am{constructor(e){const n=Jo(Zo(e)),r=n.apiKey??null,i=n.oobCode??null,s=bP(n.mode??null);Y(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=MP(e);try{return new am(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(){this.providerId=mo.PROVIDER_ID}static credential(e,n){return Ua._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=am.parseLink(n);return Y(r,"argument-error"),Ua._fromEmailAndCode(e,r.code,r.tenantId)}}mo.PROVIDER_ID="password";mo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";mo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl extends q0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends gl{constructor(){super("facebook.com")}static credential(e){return Qi._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Er.credential(e.oauthAccessToken)}catch{return null}}}Er.FACEBOOK_SIGN_IN_METHOD="facebook.com";Er.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends gl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qi._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return wr.credential(n,r)}catch{return null}}}wr.GOOGLE_SIGN_IN_METHOD="google.com";wr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends gl{constructor(){super("github.com")}static credential(e){return Qi._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tr.credential(e.oauthAccessToken)}catch{return null}}}Tr.GITHUB_SIGN_IN_METHOD="github.com";Tr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends gl{constructor(){super("twitter.com")}static credential(e,n){return Qi._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ir.credential(n,r)}catch{return null}}}Ir.TWITTER_SIGN_IN_METHOD="twitter.com";Ir.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ln._fromIdTokenResponse(e,r,i),o=v_(r);return new ro({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=v_(r);return new ro({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function v_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc extends bn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,fc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new fc(e,n,r,i)}}function W0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?fc._fromErrorAndOperation(t,s,e,r):s})}async function FP(t,e,n=!1){const r=await Fa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ro._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UP(t,e,n=!1){const{auth:r}=t;if(Gt(r.app))return Promise.reject(Wr(r));const i="reauthenticate";try{const s=await Fa(t,W0(r,i,e,t),n);Y(s.idToken,r,"internal-error");const o=im(s.idToken);Y(o,r,"internal-error");const{sub:l}=o;return Y(t.uid===l,r,"user-mismatch"),ro._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&fn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K0(t,e,n=!1){if(Gt(t.app))return Promise.reject(Wr(t));const r="signIn",i=await W0(t,r,e),s=await ro._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function jP(t,e){return K0(po(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BP(t){const e=po(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function zP(t,e,n){return Gt(t.app)?Promise.reject(Wr(t)):jP(ze(t),mo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&BP(t),r})}function $P(t,e,n,r){return ze(t).onIdTokenChanged(e,n,r)}function HP(t,e,n){return ze(t).beforeAuthStateChanged(e,n)}const pc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(pc,"1"),this.storage.removeItem(pc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qP=1e3,WP=10;class G0 extends Q0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=j0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);dP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,WP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},qP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}G0.type="LOCAL";const KP=G0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0 extends Q0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}X0.type="SESSION";const Y0=X0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Xc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await QP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=lm("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(){return window}function XP(t){kn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J0(){return typeof kn().WorkerGlobalScope<"u"&&typeof kn().importScripts=="function"}async function YP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function ZP(){return J0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0="firebaseLocalStorageDb",ek=1,mc="firebaseLocalStorage",eT="fbase_key";class yl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Yc(t,e){return t.transaction([mc],e?"readwrite":"readonly").objectStore(mc)}function tk(){const t=indexedDB.deleteDatabase(Z0);return new yl(t).toPromise()}function Tf(){const t=indexedDB.open(Z0,ek);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(mc,{keyPath:eT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(mc)?e(r):(r.close(),await tk(),e(await Tf()))})})}async function E_(t,e,n){const r=Yc(t,!0).put({[eT]:e,value:n});return new yl(r).toPromise()}async function nk(t,e){const n=Yc(t,!1).get(e),r=await new yl(n).toPromise();return r===void 0?null:r.value}function w_(t,e){const n=Yc(t,!0).delete(e);return new yl(n).toPromise()}const rk=800,ik=3;class tT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ik)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return J0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xc._getInstance(ZP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await YP(),!this.activeServiceWorker)return;this.sender=new GP(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tf();return await E_(e,pc,"1"),await w_(e,pc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>E_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>nk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>w_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Yc(i,!1).getAll();return new yl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tT.type="LOCAL";const sk=tT;new ml(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ok(t,e){return e?Kn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um extends om{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ak(t){return K0(t.auth,new um(t),t.bypassAuthState)}function lk(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),UP(n,new um(t),t.bypassAuthState)}async function uk(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),FP(n,new um(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ak;case"linkViaPopup":case"linkViaRedirect":return uk;case"reauthViaPopup":case"reauthViaRedirect":return lk;default:fn(this.auth,"internal-error")}}resolve(e){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck=new ml(2e3,1e4);class As extends nT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,As.currentPopupAction&&As.currentPopupAction.cancel(),As.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){er(this.filter.length===1,"Popup operations only handle one event");const e=lm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,As.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ck.get())};e()}}As.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk="pendingRedirect",ku=new Map;class dk extends nT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ku.get(this.auth._key());if(!e){try{const r=await fk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ku.set(this.auth._key(),e)}return this.bypassAuthState||ku.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fk(t,e){const n=gk(e),r=mk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function pk(t,e){ku.set(t._key(),e)}function mk(t){return Kn(t._redirectPersistence)}function gk(t){return Pu(hk,t.config.apiKey,t.name)}async function yk(t,e,n=!1){if(Gt(t.app))return Promise.reject(Wr(t));const r=po(t),i=ok(r,e),o=await new dk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k=10*60*1e3;class vk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ek(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!rT(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Pn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_k&&this.cachedEventUids.clear(),this.cachedEventUids.has(T_(e))}saveEventToCache(e){this.cachedEventUids.add(T_(e)),this.lastProcessedEventTime=Date.now()}}function T_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function rT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ek(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wk(t,e={}){return ci(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ik=/^https?/;async function Sk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await wk(t);for(const n of e)try{if(Ak(n))return}catch{}fn(t,"unauthorized-domain")}function Ak(t){const e=Ef(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Ik.test(n))return!1;if(Tk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk=new ml(3e4,6e4);function I_(){const t=kn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ck(t){return new Promise((e,n)=>{var i,s,o;function r(){I_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{I_(),n(Pn(t,"network-request-failed"))},timeout:Rk.get()})}if((s=(i=kn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=kn().gapi)!=null&&o.load)r();else{const l=wP("iframefcb");return kn()[l]=()=>{gapi.load?r():n(Pn(t,"network-request-failed"))},z0(`${EP()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Nu=null,e})}let Nu=null;function Pk(t){return Nu=Nu||Ck(t),Nu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk=new ml(5e3,15e3),Nk="__/auth/iframe",Dk="emulator/auth/iframe",Ok={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vk(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?rm(e,Dk):`https://${t.config.authDomain}/${Nk}`,r={apiKey:e.apiKey,appName:t.name,v:ts},i=xk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${pl(r).slice(1)}`}async function Lk(t){const e=await Pk(t),n=kn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:Vk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ok,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Pn(t,"network-request-failed"),l=kn().setTimeout(()=>{s(o)},kk.get());function u(){kn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Mk=500,Fk=600,Uk="_blank",jk="http://localhost";class S_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Bk(t,e,n,r=Mk,i=Fk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...bk,width:r.toString(),height:i.toString(),top:s,left:o},c=yt().toLowerCase();n&&(l=L0(c)?Uk:n),x0(c)&&(e=e||jk,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[I,P])=>`${m}${I}=${P},`,"");if(hP(c)&&l!=="_self")return zk(e||"",l),new S_(null);const p=window.open(e||"",l,f);Y(p,t,"popup-blocked");try{p.focus()}catch{}return new S_(p)}function zk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k="__/auth/handler",Hk="emulator/auth/handler",qk=encodeURIComponent("fac");async function A_(t,e,n,r,i,s){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ts,eventId:i};if(e instanceof q0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",xR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries(s||{}))o[f]=p}if(e instanceof gl){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${qk}=${encodeURIComponent(u)}`:"";return`${Wk(t)}?${pl(l).slice(1)}${c}`}function Wk({config:t}){return t.emulator?rm(t,Hk):`https://${t.authDomain}/${$k}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd="webStorageSupport";class Kk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Y0,this._completeRedirectFn=yk,this._overrideRedirectResult=pk}async _openPopup(e,n,r,i){var o;er((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await A_(e,n,r,Ef(),i);return Bk(e,s,lm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await A_(e,n,r,Ef(),i);return XP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(er(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Lk(e),r=new vk(e);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(pd,{type:pd},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[pd];s!==void 0&&n(!!s),fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Sk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return j0()||V0()||sm()}}const Qk=Kk;var R_="@firebase/auth",C_="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Yk(t){Ki(new Zr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:B0(t)},c=new yP(r,i,s,u);return CP(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ki(new Zr("auth-internal",e=>{const n=po(e.getProvider("auth").getImmediate());return(r=>new Gk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Cn(R_,C_,Xk(t)),Cn(R_,C_,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk=5*60,Zk=_0("authIdTokenMaxAge")||Jk;let P_=null;const eN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Zk)return;const i=n==null?void 0:n.token;P_!==i&&(P_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function tN(t=tm()){const e=Kc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=RP(t,{popupRedirectResolver:Qk,persistence:[sk,KP,Y0]}),r=_0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=eN(s.toString());HP(n,o,()=>o(n.currentUser)),$P(n,l=>o(l))}}const i=m0("auth");return i&&PP(n,`http://${i}`),n}function nN(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}_P({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Pn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",nN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Yk("Browser");var rN="firebase",iN="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Cn(rN,iN,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT="firebasestorage.googleapis.com",sT="storageBucket",sN=2*60*1e3,oN=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le extends bn{constructor(e,n,r=0){super(md(e),`Firebase Storage: ${n} (${md(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Le.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return md(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ve;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ve||(Ve={}));function md(t){return"storage/"+t}function cm(){const t="An unknown error occurred, please check the error payload for server response.";return new Le(Ve.UNKNOWN,t)}function aN(t){return new Le(Ve.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function lN(t){return new Le(Ve.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function uN(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Le(Ve.UNAUTHENTICATED,t)}function cN(){return new Le(Ve.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function hN(t){return new Le(Ve.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function dN(){return new Le(Ve.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function fN(){return new Le(Ve.CANCELED,"User canceled the upload/download.")}function pN(t){return new Le(Ve.INVALID_URL,"Invalid URL '"+t+"'.")}function mN(t){return new Le(Ve.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function gN(){return new Le(Ve.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+sT+"' property when initializing the app?")}function yN(){return new Le(Ve.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function _N(){return new Le(Ve.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function vN(t){return new Le(Ve.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function If(t){return new Le(Ve.INVALID_ARGUMENT,t)}function oT(){return new Le(Ve.APP_DELETED,"The Firebase app was deleted.")}function EN(t){return new Le(Ve.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ma(t,e){return new Le(Ve.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ko(t){throw new Le(Ve.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ut.makeFromUrl(e,n)}catch{return new Ut(e,"")}if(r.path==="")return r;throw mN(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(k){k.path.charAt(k.path.length-1)==="/"&&(k.path_=k.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(k){k.path_=decodeURIComponent(k.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",I=new RegExp(`^https?://${p}/${f}/b/${i}/o${m}`,"i"),P={bucket:1,path:3},N=n===iT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,x="([^?#]*)",w=new RegExp(`^https?://${N}/${i}/${x}`,"i"),A=[{regex:l,indices:u,postModify:s},{regex:I,indices:P,postModify:c},{regex:w,indices:{bucket:1,path:2},postModify:c}];for(let k=0;k<A.length;k++){const M=A[k],U=M.regex.exec(e);if(U){const v=U[M.indices.bucket];let y=U[M.indices.path];y||(y=""),r=new Ut(v,y),M.postModify(r);break}}if(r==null)throw pN(e);return r}}class wN{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TN(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function f(...x){c||(c=!0,e.apply(null,x))}function p(x){i=setTimeout(()=>{i=null,t(I,u())},x)}function m(){s&&clearTimeout(s)}function I(x,...w){if(c){m();return}if(x){m(),f.call(null,x,...w);return}if(u()||o){m(),f.call(null,x,...w);return}r<64&&(r*=2);let A;l===1?(l=2,A=0):A=(r+Math.random())*1e3,p(A)}let P=!1;function N(x){P||(P=!0,m(),!c&&(i!==null?(x||(l=2),clearTimeout(i),p(0)):x||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,N(!0)},n),N}function IN(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SN(t){return t!==void 0}function AN(t){return typeof t=="object"&&!Array.isArray(t)}function hm(t){return typeof t=="string"||t instanceof String}function k_(t){return dm()&&t instanceof Blob}function dm(){return typeof Blob<"u"}function N_(t,e,n,r){if(r<e)throw If(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw If(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function aT(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var ji;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ji||(ji={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RN(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{constructor(e,n,r,i,s,o,l,u,c,f,p,m=!0,I=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=f,this.connectionFactory_=p,this.retry=m,this.isUsingEmulator=I,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((P,N)=>{this.resolve_=P,this.reject_=N,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ou(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===ji.NO_ERROR,u=s.getStatus();if(!l||RN(u,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===ji.ABORT;r(!1,new ou(!1,null,f));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new ou(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());SN(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=cm();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?oT():fN();o(u)}else{const u=dN();o(u)}};this.canceled_?n(!1,new ou(!1,null,!0)):this.backoffId_=TN(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&IN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ou{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function PN(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function kN(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function NN(t,e){e&&(t["X-Firebase-GMPID"]=e)}function DN(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function ON(t,e,n,r,i,s,o=!0,l=!1){const u=aT(t.urlParams),c=t.url+u,f=Object.assign({},t.headers);return NN(f,e),PN(f,n),kN(f,s),DN(f,r),new CN(c,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xN(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function VN(...t){const e=xN();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(dm())return new Blob(t);throw new Le(Ve.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function LN(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bN(t){if(typeof atob>"u")throw vN("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class gd{constructor(e,n){this.data=e,this.contentType=n||null}}function MN(t,e){switch(t){case Sn.RAW:return new gd(lT(e));case Sn.BASE64:case Sn.BASE64URL:return new gd(uT(t,e));case Sn.DATA_URL:return new gd(UN(e),jN(e))}throw cm()}function lT(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function FN(t){let e;try{e=decodeURIComponent(t)}catch{throw ma(Sn.DATA_URL,"Malformed data URL.")}return lT(e)}function uT(t,e){switch(t){case Sn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ma(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Sn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ma(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=bN(e)}catch(i){throw i.message.includes("polyfill")?i:ma(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class cT{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ma(Sn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=BN(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function UN(t){const e=new cT(t);return e.base64?uT(Sn.BASE64,e.rest):FN(e.rest)}function jN(t){return new cT(t).contentType}function BN(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,n){let r=0,i="";k_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(k_(this.data_)){const r=this.data_,i=LN(r,e,n);return i===null?null:new Sr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Sr(r,!0)}}static getBlob(...e){if(dm()){const n=e.map(r=>r instanceof Sr?r.data_:r);return new Sr(VN.apply(null,n))}else{const n=e.map(o=>hm(o)?MN(Sn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new Sr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(t){let e;try{e=JSON.parse(t)}catch{return null}return AN(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zN(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function $N(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function dT(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HN(t,e){return e}class vt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||HN}}let au=null;function qN(t){return!hm(t)||t.length<2?t:dT(t)}function fT(){if(au)return au;const t=[];t.push(new vt("bucket")),t.push(new vt("generation")),t.push(new vt("metageneration")),t.push(new vt("name","fullPath",!0));function e(s,o){return qN(o)}const n=new vt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new vt("size");return i.xform=r,t.push(i),t.push(new vt("timeCreated")),t.push(new vt("updated")),t.push(new vt("md5Hash",null,!0)),t.push(new vt("cacheControl",null,!0)),t.push(new vt("contentDisposition",null,!0)),t.push(new vt("contentEncoding",null,!0)),t.push(new vt("contentLanguage",null,!0)),t.push(new vt("contentType",null,!0)),t.push(new vt("metadata","customMetadata",!0)),au=t,au}function WN(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Ut(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function KN(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return WN(r,t),r}function pT(t,e,n){const r=hT(e);return r===null?null:KN(t,r,n)}function QN(t,e,n,r){const i=hT(e);if(i===null||!hm(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const f=t.bucket,p=t.fullPath,m="/b/"+o(f)+"/o/"+o(p),I=Jc(m,n,r),P=aT({alt:"media",token:c});return I+P})[0]}function GN(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class fm{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mT(t){if(!t)throw cm()}function XN(t,e){function n(r,i){const s=pT(t,i,e);return mT(s!==null),s}return n}function YN(t,e){function n(r,i){const s=pT(t,i,e);return mT(s!==null),QN(s,i,t.host,t._protocol)}return n}function gT(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=cN():i=uN():n.getStatus()===402?i=lN(t.bucket):n.getStatus()===403?i=hN(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function yT(t){const e=gT(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=aN(t.path)),s.serverResponse=i.serverResponse,s}return n}function JN(t,e,n){const r=e.fullServerUrl(),i=Jc(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new fm(i,s,YN(t,n),o);return l.errorHandler=yT(e),l}function ZN(t,e){const n=e.fullServerUrl(),r=Jc(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(u,c){}const l=new fm(r,i,o,s);return l.successCodes=[200,204],l.errorHandler=yT(e),l}function eD(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function tD(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=eD(null,e)),r}function nD(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let A="";for(let k=0;k<2;k++)A=A+Math.random().toString().slice(2);return A}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=tD(e,r,i),f=GN(c,n),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",I=Sr.getBlob(p,r,m);if(I===null)throw yN();const P={name:c.fullPath},N=Jc(s,t.host,t._protocol),x="POST",w=t.maxUploadRetryTime,_=new fm(N,x,XN(t,n),w);return _.urlParams=P,_.headers=o,_.body=I.uploadData(),_.errorHandler=gT(e),_}class rD{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ji.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ji.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ji.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i,s){if(this.sent_)throw Ko("cannot .send() more than once");if(ui(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ko("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ko("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ko("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ko("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class iD extends rD{initXhr(){this.xhr_.responseType="text"}}function pm(){return new iD}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n){this._service=e,n instanceof Ut?this._location=n:this._location=Ut.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Gi(e,n)}get root(){const e=new Ut(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return dT(this._location.path)}get storage(){return this._service}get parent(){const e=zN(this._location.path);if(e===null)return null;const n=new Ut(this._location.bucket,e);return new Gi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw EN(e)}}function sD(t,e,n){t._throwIfRoot("uploadBytes");const r=nD(t.storage,t._location,fT(),new Sr(e,!0),n);return t.storage.makeRequestWithTokens(r,pm).then(i=>({metadata:i,ref:t}))}function oD(t){t._throwIfRoot("getDownloadURL");const e=JN(t.storage,t._location,fT());return t.storage.makeRequestWithTokens(e,pm).then(n=>{if(n===null)throw _N();return n})}function aD(t){t._throwIfRoot("deleteObject");const e=ZN(t.storage,t._location);return t.storage.makeRequestWithTokens(e,pm)}function lD(t,e){const n=$N(t._location.path,e),r=new Ut(t._location.bucket,n);return new Gi(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uD(t){return/^[A-Za-z]+:\/\//.test(t)}function cD(t,e){return new Gi(t,e)}function _T(t,e){if(t instanceof mm){const n=t;if(n._bucket==null)throw gN();const r=new Gi(n,n._bucket);return e!=null?_T(r,e):r}else return e!==void 0?lD(t,e):t}function hD(t,e){if(e&&uD(e)){if(t instanceof mm)return cD(t,e);throw If("To use ref(service, url), the first argument must be a Storage instance.")}else return _T(t,e)}function D_(t,e){const n=e==null?void 0:e[sT];return n==null?null:Ut.makeFromBucketSpec(n,t)}function dD(t,e,n,r={}){t.host=`${e}:${n}`;const i=ui(e);i&&(Yp(`https://${t.host}/b`),Jp("Storage",!0)),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:v0(s,t.app.options.projectId))}class mm{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=iT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=sN,this._maxUploadRetryTime=oN,this._requests=new Set,i!=null?this._bucket=Ut.makeFromBucketSpec(i,this._host):this._bucket=D_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ut.makeFromBucketSpec(this._url,e):this._bucket=D_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){N_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){N_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Gt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Gi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new wN(oT());{const o=ON(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const O_="@firebase/storage",x_="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT="storage";function fD(t,e,n){return t=ze(t),sD(t,e,n)}function pD(t){return t=ze(t),oD(t)}function mD(t){return t=ze(t),aD(t)}function V_(t,e){return t=ze(t),hD(t,e)}function gD(t=tm(),e){t=ze(t);const r=Kc(t,vT).getImmediate({identifier:e}),i=g0("storage");return i&&yD(r,...i),r}function yD(t,e,n,r={}){dD(t,e,n,r)}function _D(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new mm(n,r,i,e,ts)}function vD(){Ki(new Zr(vT,_D,"PUBLIC").setMultipleInstances(!0)),Cn(O_,x_,""),Cn(O_,x_,"esm2020")}vD();var L_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kr,ET;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,y){function E(){}E.prototype=y.prototype,v.F=y.prototype,v.prototype=new E,v.prototype.constructor=v,v.D=function(T,R,D){for(var S=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)S[ve-2]=arguments[ve];return y.prototype[R].apply(T,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,y,E){E||(E=0);const T=Array(16);if(typeof y=="string")for(var R=0;R<16;++R)T[R]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(R=0;R<16;++R)T[R]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=v.g[0],E=v.g[1],R=v.g[2];let D=v.g[3],S;S=y+(D^E&(R^D))+T[0]+3614090360&4294967295,y=E+(S<<7&4294967295|S>>>25),S=D+(R^y&(E^R))+T[1]+3905402710&4294967295,D=y+(S<<12&4294967295|S>>>20),S=R+(E^D&(y^E))+T[2]+606105819&4294967295,R=D+(S<<17&4294967295|S>>>15),S=E+(y^R&(D^y))+T[3]+3250441966&4294967295,E=R+(S<<22&4294967295|S>>>10),S=y+(D^E&(R^D))+T[4]+4118548399&4294967295,y=E+(S<<7&4294967295|S>>>25),S=D+(R^y&(E^R))+T[5]+1200080426&4294967295,D=y+(S<<12&4294967295|S>>>20),S=R+(E^D&(y^E))+T[6]+2821735955&4294967295,R=D+(S<<17&4294967295|S>>>15),S=E+(y^R&(D^y))+T[7]+4249261313&4294967295,E=R+(S<<22&4294967295|S>>>10),S=y+(D^E&(R^D))+T[8]+1770035416&4294967295,y=E+(S<<7&4294967295|S>>>25),S=D+(R^y&(E^R))+T[9]+2336552879&4294967295,D=y+(S<<12&4294967295|S>>>20),S=R+(E^D&(y^E))+T[10]+4294925233&4294967295,R=D+(S<<17&4294967295|S>>>15),S=E+(y^R&(D^y))+T[11]+2304563134&4294967295,E=R+(S<<22&4294967295|S>>>10),S=y+(D^E&(R^D))+T[12]+1804603682&4294967295,y=E+(S<<7&4294967295|S>>>25),S=D+(R^y&(E^R))+T[13]+4254626195&4294967295,D=y+(S<<12&4294967295|S>>>20),S=R+(E^D&(y^E))+T[14]+2792965006&4294967295,R=D+(S<<17&4294967295|S>>>15),S=E+(y^R&(D^y))+T[15]+1236535329&4294967295,E=R+(S<<22&4294967295|S>>>10),S=y+(R^D&(E^R))+T[1]+4129170786&4294967295,y=E+(S<<5&4294967295|S>>>27),S=D+(E^R&(y^E))+T[6]+3225465664&4294967295,D=y+(S<<9&4294967295|S>>>23),S=R+(y^E&(D^y))+T[11]+643717713&4294967295,R=D+(S<<14&4294967295|S>>>18),S=E+(D^y&(R^D))+T[0]+3921069994&4294967295,E=R+(S<<20&4294967295|S>>>12),S=y+(R^D&(E^R))+T[5]+3593408605&4294967295,y=E+(S<<5&4294967295|S>>>27),S=D+(E^R&(y^E))+T[10]+38016083&4294967295,D=y+(S<<9&4294967295|S>>>23),S=R+(y^E&(D^y))+T[15]+3634488961&4294967295,R=D+(S<<14&4294967295|S>>>18),S=E+(D^y&(R^D))+T[4]+3889429448&4294967295,E=R+(S<<20&4294967295|S>>>12),S=y+(R^D&(E^R))+T[9]+568446438&4294967295,y=E+(S<<5&4294967295|S>>>27),S=D+(E^R&(y^E))+T[14]+3275163606&4294967295,D=y+(S<<9&4294967295|S>>>23),S=R+(y^E&(D^y))+T[3]+4107603335&4294967295,R=D+(S<<14&4294967295|S>>>18),S=E+(D^y&(R^D))+T[8]+1163531501&4294967295,E=R+(S<<20&4294967295|S>>>12),S=y+(R^D&(E^R))+T[13]+2850285829&4294967295,y=E+(S<<5&4294967295|S>>>27),S=D+(E^R&(y^E))+T[2]+4243563512&4294967295,D=y+(S<<9&4294967295|S>>>23),S=R+(y^E&(D^y))+T[7]+1735328473&4294967295,R=D+(S<<14&4294967295|S>>>18),S=E+(D^y&(R^D))+T[12]+2368359562&4294967295,E=R+(S<<20&4294967295|S>>>12),S=y+(E^R^D)+T[5]+4294588738&4294967295,y=E+(S<<4&4294967295|S>>>28),S=D+(y^E^R)+T[8]+2272392833&4294967295,D=y+(S<<11&4294967295|S>>>21),S=R+(D^y^E)+T[11]+1839030562&4294967295,R=D+(S<<16&4294967295|S>>>16),S=E+(R^D^y)+T[14]+4259657740&4294967295,E=R+(S<<23&4294967295|S>>>9),S=y+(E^R^D)+T[1]+2763975236&4294967295,y=E+(S<<4&4294967295|S>>>28),S=D+(y^E^R)+T[4]+1272893353&4294967295,D=y+(S<<11&4294967295|S>>>21),S=R+(D^y^E)+T[7]+4139469664&4294967295,R=D+(S<<16&4294967295|S>>>16),S=E+(R^D^y)+T[10]+3200236656&4294967295,E=R+(S<<23&4294967295|S>>>9),S=y+(E^R^D)+T[13]+681279174&4294967295,y=E+(S<<4&4294967295|S>>>28),S=D+(y^E^R)+T[0]+3936430074&4294967295,D=y+(S<<11&4294967295|S>>>21),S=R+(D^y^E)+T[3]+3572445317&4294967295,R=D+(S<<16&4294967295|S>>>16),S=E+(R^D^y)+T[6]+76029189&4294967295,E=R+(S<<23&4294967295|S>>>9),S=y+(E^R^D)+T[9]+3654602809&4294967295,y=E+(S<<4&4294967295|S>>>28),S=D+(y^E^R)+T[12]+3873151461&4294967295,D=y+(S<<11&4294967295|S>>>21),S=R+(D^y^E)+T[15]+530742520&4294967295,R=D+(S<<16&4294967295|S>>>16),S=E+(R^D^y)+T[2]+3299628645&4294967295,E=R+(S<<23&4294967295|S>>>9),S=y+(R^(E|~D))+T[0]+4096336452&4294967295,y=E+(S<<6&4294967295|S>>>26),S=D+(E^(y|~R))+T[7]+1126891415&4294967295,D=y+(S<<10&4294967295|S>>>22),S=R+(y^(D|~E))+T[14]+2878612391&4294967295,R=D+(S<<15&4294967295|S>>>17),S=E+(D^(R|~y))+T[5]+4237533241&4294967295,E=R+(S<<21&4294967295|S>>>11),S=y+(R^(E|~D))+T[12]+1700485571&4294967295,y=E+(S<<6&4294967295|S>>>26),S=D+(E^(y|~R))+T[3]+2399980690&4294967295,D=y+(S<<10&4294967295|S>>>22),S=R+(y^(D|~E))+T[10]+4293915773&4294967295,R=D+(S<<15&4294967295|S>>>17),S=E+(D^(R|~y))+T[1]+2240044497&4294967295,E=R+(S<<21&4294967295|S>>>11),S=y+(R^(E|~D))+T[8]+1873313359&4294967295,y=E+(S<<6&4294967295|S>>>26),S=D+(E^(y|~R))+T[15]+4264355552&4294967295,D=y+(S<<10&4294967295|S>>>22),S=R+(y^(D|~E))+T[6]+2734768916&4294967295,R=D+(S<<15&4294967295|S>>>17),S=E+(D^(R|~y))+T[13]+1309151649&4294967295,E=R+(S<<21&4294967295|S>>>11),S=y+(R^(E|~D))+T[4]+4149444226&4294967295,y=E+(S<<6&4294967295|S>>>26),S=D+(E^(y|~R))+T[11]+3174756917&4294967295,D=y+(S<<10&4294967295|S>>>22),S=R+(y^(D|~E))+T[2]+718787259&4294967295,R=D+(S<<15&4294967295|S>>>17),S=E+(D^(R|~y))+T[9]+3951481745&4294967295,v.g[0]=v.g[0]+y&4294967295,v.g[1]=v.g[1]+(R+(S<<21&4294967295|S>>>11))&4294967295,v.g[2]=v.g[2]+R&4294967295,v.g[3]=v.g[3]+D&4294967295}r.prototype.v=function(v,y){y===void 0&&(y=v.length);const E=y-this.blockSize,T=this.C;let R=this.h,D=0;for(;D<y;){if(R==0)for(;D<=E;)i(this,v,D),D+=this.blockSize;if(typeof v=="string"){for(;D<y;)if(T[R++]=v.charCodeAt(D++),R==this.blockSize){i(this,T),R=0;break}}else for(;D<y;)if(T[R++]=v[D++],R==this.blockSize){i(this,T),R=0;break}}this.h=R,this.o+=y},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var y=1;y<v.length-8;++y)v[y]=0;y=this.o*8;for(var E=v.length-8;E<v.length;++E)v[E]=y&255,y/=256;for(this.v(v),v=Array(16),y=0,E=0;E<4;++E)for(let T=0;T<32;T+=8)v[y++]=this.g[E]>>>T&255;return v};function s(v,y){var E=l;return Object.prototype.hasOwnProperty.call(E,v)?E[v]:E[v]=y(v)}function o(v,y){this.h=y;const E=[];let T=!0;for(let R=v.length-1;R>=0;R--){const D=v[R]|0;T&&D==y||(E[R]=D,T=!1)}this.g=E}var l={};function u(v){return-128<=v&&v<128?s(v,function(y){return new o([y|0],y<0?-1:0)}):new o([v|0],v<0?-1:0)}function c(v){if(isNaN(v)||!isFinite(v))return p;if(v<0)return x(c(-v));const y=[];let E=1;for(let T=0;v>=E;T++)y[T]=v/E|0,E*=4294967296;return new o(y,0)}function f(v,y){if(v.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(v.charAt(0)=="-")return x(f(v.substring(1),y));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=c(Math.pow(y,8));let T=p;for(let D=0;D<v.length;D+=8){var R=Math.min(8,v.length-D);const S=parseInt(v.substring(D,D+R),y);R<8?(R=c(Math.pow(y,R)),T=T.j(R).add(c(S))):(T=T.j(E),T=T.add(c(S)))}return T}var p=u(0),m=u(1),I=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-x(this).m();let v=0,y=1;for(let E=0;E<this.g.length;E++){const T=this.i(E);v+=(T>=0?T:4294967296+T)*y,y*=4294967296}return v},t.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(P(this))return"0";if(N(this))return"-"+x(this).toString(v);const y=c(Math.pow(v,6));var E=this;let T="";for(;;){const R=k(E,y).g;E=w(E,R.j(y));let D=((E.g.length>0?E.g[0]:E.h)>>>0).toString(v);if(E=R,P(E))return D+T;for(;D.length<6;)D="0"+D;T=D+T}},t.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function P(v){if(v.h!=0)return!1;for(let y=0;y<v.g.length;y++)if(v.g[y]!=0)return!1;return!0}function N(v){return v.h==-1}t.l=function(v){return v=w(this,v),N(v)?-1:P(v)?0:1};function x(v){const y=v.g.length,E=[];for(let T=0;T<y;T++)E[T]=~v.g[T];return new o(E,~v.h).add(m)}t.abs=function(){return N(this)?x(this):this},t.add=function(v){const y=Math.max(this.g.length,v.g.length),E=[];let T=0;for(let R=0;R<=y;R++){let D=T+(this.i(R)&65535)+(v.i(R)&65535),S=(D>>>16)+(this.i(R)>>>16)+(v.i(R)>>>16);T=S>>>16,D&=65535,S&=65535,E[R]=S<<16|D}return new o(E,E[E.length-1]&-2147483648?-1:0)};function w(v,y){return v.add(x(y))}t.j=function(v){if(P(this)||P(v))return p;if(N(this))return N(v)?x(this).j(x(v)):x(x(this).j(v));if(N(v))return x(this.j(x(v)));if(this.l(I)<0&&v.l(I)<0)return c(this.m()*v.m());const y=this.g.length+v.g.length,E=[];for(var T=0;T<2*y;T++)E[T]=0;for(T=0;T<this.g.length;T++)for(let R=0;R<v.g.length;R++){const D=this.i(T)>>>16,S=this.i(T)&65535,ve=v.i(R)>>>16,$e=v.i(R)&65535;E[2*T+2*R]+=S*$e,_(E,2*T+2*R),E[2*T+2*R+1]+=D*$e,_(E,2*T+2*R+1),E[2*T+2*R+1]+=S*ve,_(E,2*T+2*R+1),E[2*T+2*R+2]+=D*ve,_(E,2*T+2*R+2)}for(v=0;v<y;v++)E[v]=E[2*v+1]<<16|E[2*v];for(v=y;v<2*y;v++)E[v]=0;return new o(E,0)};function _(v,y){for(;(v[y]&65535)!=v[y];)v[y+1]+=v[y]>>>16,v[y]&=65535,y++}function A(v,y){this.g=v,this.h=y}function k(v,y){if(P(y))throw Error("division by zero");if(P(v))return new A(p,p);if(N(v))return y=k(x(v),y),new A(x(y.g),x(y.h));if(N(y))return y=k(v,x(y)),new A(x(y.g),y.h);if(v.g.length>30){if(N(v)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var E=m,T=y;T.l(v)<=0;)E=M(E),T=M(T);var R=U(E,1),D=U(T,1);for(T=U(T,2),E=U(E,2);!P(T);){var S=D.add(T);S.l(v)<=0&&(R=R.add(E),D=S),T=U(T,1),E=U(E,1)}return y=w(v,R.j(y)),new A(R,y)}for(R=p;v.l(y)>=0;){for(E=Math.max(1,Math.floor(v.m()/y.m())),T=Math.ceil(Math.log(E)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),D=c(E),S=D.j(y);N(S)||S.l(v)>0;)E-=T,D=c(E),S=D.j(y);P(D)&&(D=m),R=R.add(D),v=w(v,S)}return new A(R,v)}t.B=function(v){return k(this,v).h},t.and=function(v){const y=Math.max(this.g.length,v.g.length),E=[];for(let T=0;T<y;T++)E[T]=this.i(T)&v.i(T);return new o(E,this.h&v.h)},t.or=function(v){const y=Math.max(this.g.length,v.g.length),E=[];for(let T=0;T<y;T++)E[T]=this.i(T)|v.i(T);return new o(E,this.h|v.h)},t.xor=function(v){const y=Math.max(this.g.length,v.g.length),E=[];for(let T=0;T<y;T++)E[T]=this.i(T)^v.i(T);return new o(E,this.h^v.h)};function M(v){const y=v.g.length+1,E=[];for(let T=0;T<y;T++)E[T]=v.i(T)<<1|v.i(T-1)>>>31;return new o(E,v.h)}function U(v,y){const E=y>>5;y%=32;const T=v.g.length-E,R=[];for(let D=0;D<T;D++)R[D]=y>0?v.i(D+E)>>>y|v.i(D+E+1)<<32-y:v.i(D+E);return new o(R,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,ET=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,Kr=o}).apply(typeof L_<"u"?L_:typeof self<"u"?self:typeof window<"u"?window:{});var lu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wT,ea,TT,Du,Sf,IT,ST,AT;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof lu=="object"&&lu];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var O=a[g];if(!(O in d))break e;d=d[O]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var d=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&d.push([g,h[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,d){return a.call.apply(a.bind,arguments)}function c(a,h,d){return c=u,c.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,O,V){for(var z=Array(arguments.length-2),re=2;re<arguments.length;re++)z[re-2]=arguments[re];return h.prototype[O].apply(g,z)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function I(a){const h=a.length;if(h>0){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function P(a,h){for(let g=1;g<arguments.length;g++){const O=arguments[g];var d=typeof O;if(d=d!="object"?d:O?Array.isArray(O)?"array":d:"null",d=="array"||d=="object"&&typeof O.length=="number"){d=a.length||0;const V=O.length||0;a.length=d+V;for(let z=0;z<V;z++)a[d+z]=O[z]}else a.push(O)}}class N{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function x(a){o.setTimeout(()=>{throw a},0)}function w(){var a=v;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class _{constructor(){this.h=this.g=null}add(h,d){const g=A.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var A=new N(()=>new k,a=>a.reset());class k{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let M,U=!1,v=new _,y=()=>{const a=Promise.resolve(void 0);M=()=>{a.then(E)}};function E(){for(var a;a=w();){try{a.h.call(a.g)}catch(d){x(d)}var h=A;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}U=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function R(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var D=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a}();function S(a){return/^[\s\xa0]*$/.test(a)}function ve(a,h){R.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(ve,R),ve.prototype.init=function(a,h){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ve.Z.h.call(this)},ve.prototype.h=function(){ve.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var $e="closure_listenable_"+(Math.random()*1e6|0),ir=0;function sr(a,h,d,g,O){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=O,this.key=++ir,this.da=this.fa=!1}function $(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function X(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function Z(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function ge(a){const h={};for(const d in a)h[d]=a[d];return h}const Ee="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Mn(a,h){let d,g;for(let O=1;O<arguments.length;O++){g=arguments[O];for(d in g)a[d]=g[d];for(let V=0;V<Ee.length;V++)d=Ee[V],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function At(a){this.src=a,this.g={},this.h=0}At.prototype.add=function(a,h,d,g,O){const V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);const z=Rt(a,h,g,O);return z>-1?(h=a[z],d||(h.fa=!1)):(h=new sr(h,this.src,V,!!g,O),h.fa=d,a.push(h)),h};function Fn(a,h){const d=h.type;if(d in a.g){var g=a.g[d],O=Array.prototype.indexOf.call(g,h,void 0),V;(V=O>=0)&&Array.prototype.splice.call(g,O,1),V&&($(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Rt(a,h,d,g){for(let O=0;O<a.length;++O){const V=a[O];if(!V.da&&V.listener==h&&V.capture==!!d&&V.ha==g)return O}return-1}var pn="closure_lm_"+(Math.random()*1e6|0),Eo={};function Al(a,h,d,g,O){if(g&&g.once)return Cl(a,h,d,g,O);if(Array.isArray(h)){for(let V=0;V<h.length;V++)Al(a,h[V],d,g,O);return null}return d=He(d),a&&a[$e]?a.J(h,d,l(g)?!!g.capture:!!g,O):Rl(a,h,d,!1,g,O)}function Rl(a,h,d,g,O,V){if(!h)throw Error("Invalid event type");const z=l(O)?!!O.capture:!!O;let re=L(a);if(re||(a[pn]=re=new At(a)),d=re.add(h,d,g,z,V),d.proxy)return d;if(g=gh(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)D||(O=z),O===void 0&&(O=!1),a.addEventListener(h.toString(),g,O);else if(a.attachEvent)a.attachEvent(kl(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function gh(){function a(d){return h.call(a.src,a.listener,d)}const h=yh;return a}function Cl(a,h,d,g,O){if(Array.isArray(h)){for(let V=0;V<h.length;V++)Cl(a,h[V],d,g,O);return null}return d=He(d),a&&a[$e]?a.K(h,d,l(g)?!!g.capture:!!g,O):Rl(a,h,d,!0,g,O)}function Pl(a,h,d,g,O){if(Array.isArray(h))for(var V=0;V<h.length;V++)Pl(a,h[V],d,g,O);else g=l(g)?!!g.capture:!!g,d=He(d),a&&a[$e]?(a=a.i,V=String(h).toString(),V in a.g&&(h=a.g[V],d=Rt(h,d,g,O),d>-1&&($(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[V],a.h--)))):a&&(a=L(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Rt(h,d,g,O)),(d=a>-1?h[a]:null)&&wo(d))}function wo(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[$e])Fn(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(kl(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=L(h))?(Fn(d,a),d.h==0&&(d.src=null,h[pn]=null)):$(a)}}}function kl(a){return a in Eo?Eo[a]:Eo[a]="on"+a}function yh(a,h){if(a.da)a=!0;else{h=new ve(h,this);const d=a.listener,g=a.ha||a.src;a.fa&&wo(a),a=d.call(g,h)}return a}function L(a){return a=a[pn],a instanceof At?a:null}var de="__closure_events_fn_"+(Math.random()*1e9>>>0);function He(a){return typeof a=="function"?a:(a[de]||(a[de]=function(h){return a.handleEvent(h)}),a[de])}function me(){T.call(this),this.i=new At(this),this.M=this,this.G=null}p(me,T),me.prototype[$e]=!0,me.prototype.removeEventListener=function(a,h,d,g){Pl(this,a,h,d,g)};function be(a,h){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new R(h,a);else if(h instanceof R)h.target=h.target||a;else{var O=h;h=new R(g,a),Mn(h,O)}O=!0;let V,z;if(d)for(z=d.length-1;z>=0;z--)V=h.g=d[z],O=fi(V,g,!0,h)&&O;if(V=h.g=a,O=fi(V,g,!0,h)&&O,O=fi(V,g,!1,h)&&O,d)for(z=0;z<d.length;z++)V=h.g=d[z],O=fi(V,g,!1,h)&&O}me.prototype.N=function(){if(me.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let g=0;g<d.length;g++)$(d[g]);delete a.g[h],a.h--}}this.G=null},me.prototype.J=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},me.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function fi(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let O=!0;for(let V=0;V<h.length;++V){const z=h[V];if(z&&!z.da&&z.capture==d){const re=z.listener,qe=z.ha||z.src;z.fa&&Fn(a.i,z),O=re.call(qe,g)!==!1&&O}}return O&&!g.defaultPrevented}function or(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function pi(a){a.g=or(()=>{a.g=null,a.i&&(a.i=!1,pi(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class h1 extends T{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:pi(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function To(a){T.call(this),this.h=a,this.g={}}p(To,T);var Jm=[];function Zm(a){X(a.g,function(h,d){this.g.hasOwnProperty(d)&&wo(h)},a),a.g={}}To.prototype.N=function(){To.Z.N.call(this),Zm(this)},To.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _h=o.JSON.stringify,d1=o.JSON.parse,f1=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function eg(){}function tg(){}var Io={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function vh(){R.call(this,"d")}p(vh,R);function Eh(){R.call(this,"c")}p(Eh,R);var mi={},ng=null;function Nl(){return ng=ng||new me}mi.Ia="serverreachability";function rg(a){R.call(this,mi.Ia,a)}p(rg,R);function So(a){const h=Nl();be(h,new rg(h))}mi.STAT_EVENT="statevent";function ig(a,h){R.call(this,mi.STAT_EVENT,a),this.stat=h}p(ig,R);function _t(a){const h=Nl();be(h,new ig(h,a))}mi.Ja="timingevent";function sg(a,h){R.call(this,mi.Ja,a),this.size=h}p(sg,R);function Ao(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Ro(){this.g=!0}Ro.prototype.ua=function(){this.g=!1};function p1(a,h,d,g,O,V){a.info(function(){if(a.g)if(V){var z="",re=V.split("&");for(let ye=0;ye<re.length;ye++){var qe=re[ye].split("=");if(qe.length>1){const Xe=qe[0];qe=qe[1];const gn=Xe.split("_");z=gn.length>=2&&gn[1]=="type"?z+(Xe+"="+qe+"&"):z+(Xe+"=redacted&")}}}else z=null;else z=V;return"XMLHTTP REQ ("+g+") [attempt "+O+"]: "+h+`
`+d+`
`+z})}function m1(a,h,d,g,O,V,z){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+O+"]: "+h+`
`+d+`
`+V+" "+z})}function ss(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+y1(a,d)+(g?" "+g:"")})}function g1(a,h){a.info(function(){return"TIMEOUT: "+h})}Ro.prototype.info=function(){};function y1(a,h){if(!a.g)return h;if(!h)return null;try{const V=JSON.parse(h);if(V){for(a=0;a<V.length;a++)if(Array.isArray(V[a])){var d=V[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var O=g[0];if(O!="noop"&&O!="stop"&&O!="close")for(let z=1;z<g.length;z++)g[z]=""}}}}return _h(V)}catch{return h}}var Dl={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},og={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ag;function wh(){}p(wh,eg),wh.prototype.g=function(){return new XMLHttpRequest},ag=new wh;function Co(a){return encodeURIComponent(String(a))}function _1(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function ar(a,h,d,g){this.j=a,this.i=h,this.l=d,this.S=g||1,this.V=new To(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new lg}function lg(){this.i=null,this.g="",this.h=!1}var ug={},Th={};function Ih(a,h,d){a.M=1,a.A=xl(mn(h)),a.u=d,a.R=!0,cg(a,null)}function cg(a,h){a.F=Date.now(),Ol(a),a.B=mn(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),Ig(d.i,"t",g),a.C=0,d=a.j.L,a.h=new lg,a.g=Bg(a.j,d?h:null,!a.u),a.P>0&&(a.O=new h1(c(a.Y,a,a.g),a.P)),h=a.V,d=a.g,g=a.ba;var O="readystatechange";Array.isArray(O)||(O&&(Jm[0]=O.toString()),O=Jm);for(let V=0;V<O.length;V++){const z=Al(d,O[V],g||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.J?ge(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),So(),p1(a.i,a.v,a.B,a.l,a.S,a.u)}ar.prototype.ba=function(a){a=a.target;const h=this.O;h&&cr(a)==3?h.j():this.Y(a)},ar.prototype.Y=function(a){try{if(a==this.g)e:{const re=cr(this.g),qe=this.g.ya(),ye=this.g.ca();if(!(re<3)&&(re!=3||this.g&&(this.h.h||this.g.la()||Ng(this.g)))){this.K||re!=4||qe==7||(qe==8||ye<=0?So(3):So(2)),Sh(this);var h=this.g.ca();this.X=h;var d=v1(this);if(this.o=h==200,m1(this.i,this.v,this.B,this.l,this.S,re,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,O=this.g;if((g=O.g?O.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(g)){var V=g;break t}}V=null}if(a=V)ss(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ah(this,a);else{this.o=!1,this.m=3,_t(12),gi(this),Po(this);break e}}if(this.R){a=!0;let Xe;for(;!this.K&&this.C<d.length;)if(Xe=E1(this,d),Xe==Th){re==4&&(this.m=4,_t(14),a=!1),ss(this.i,this.l,null,"[Incomplete Response]");break}else if(Xe==ug){this.m=4,_t(15),ss(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else ss(this.i,this.l,Xe,null),Ah(this,Xe);if(hg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),re!=4||d.length!=0||this.h.h||(this.m=1,_t(16),a=!1),this.o=this.o&&a,!a)ss(this.i,this.l,d,"[Invalid Chunked Response]"),gi(this),Po(this);else if(d.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),xh(z),z.P=!0,_t(11))}}else ss(this.i,this.l,d,null),Ah(this,d);re==4&&gi(this),this.o&&!this.K&&(re==4?Mg(this.j,this):(this.o=!1,Ol(this)))}else V1(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,_t(12)):(this.m=0,_t(13)),gi(this),Po(this)}}}catch{}finally{}};function v1(a){if(!hg(a))return a.g.la();const h=Ng(a.g);if(h==="")return"";let d="";const g=h.length,O=cr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return gi(a),Po(a),"";a.h.i=new o.TextDecoder}for(let V=0;V<g;V++)a.h.h=!0,d+=a.h.i.decode(h[V],{stream:!(O&&V==g-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function hg(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function E1(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?Th:(d=Number(h.substring(d,g)),isNaN(d)?ug:(g+=1,g+d>h.length?Th:(h=h.slice(g,g+d),a.C=g+d,h)))}ar.prototype.cancel=function(){this.K=!0,gi(this)};function Ol(a){a.T=Date.now()+a.H,dg(a,a.H)}function dg(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Ao(c(a.aa,a),h)}function Sh(a){a.D&&(o.clearTimeout(a.D),a.D=null)}ar.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(g1(this.i,this.B),this.M!=2&&(So(),_t(17)),gi(this),this.m=2,Po(this)):dg(this,this.T-a)};function Po(a){a.j.I==0||a.K||Mg(a.j,a)}function gi(a){Sh(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Zm(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Ah(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||Rh(d.h,a))){if(!a.L&&Rh(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var O=g;if(O[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Fl(d),bl(d);else break e;Oh(d),_t(18)}}else d.xa=O[1],0<d.xa-d.K&&O[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Ao(c(d.Va,d),6e3));mg(d.h)<=1&&d.ta&&(d.ta=void 0)}else _i(d,11)}else if((a.L||d.g==a)&&Fl(d),!S(h))for(O=d.Ba.g.parse(h),h=0;h<O.length;h++){let ye=O[h];const Xe=ye[0];if(!(Xe<=d.K))if(d.K=Xe,ye=ye[1],d.I==2)if(ye[0]=="c"){d.M=ye[1],d.ba=ye[2];const gn=ye[3];gn!=null&&(d.ka=gn,d.j.info("VER="+d.ka));const vi=ye[4];vi!=null&&(d.za=vi,d.j.info("SVER="+d.za));const hr=ye[5];hr!=null&&typeof hr=="number"&&hr>0&&(g=1.5*hr,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const dr=a.g;if(dr){const jl=dr.g?dr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(jl){var V=g.h;V.g||jl.indexOf("spdy")==-1&&jl.indexOf("quic")==-1&&jl.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Ch(V,V.h),V.h=null))}if(g.G){const Vh=dr.g?dr.g.getResponseHeader("X-HTTP-Session-Id"):null;Vh&&(g.wa=Vh,we(g.J,g.G,Vh))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var z=a;if(g.na=jg(g,g.L?g.ba:null,g.W),z.L){gg(g.h,z);var re=z,qe=g.O;qe&&(re.H=qe),re.D&&(Sh(re),Ol(re)),g.g=z}else Lg(g);d.i.length>0&&Ml(d)}else ye[0]!="stop"&&ye[0]!="close"||_i(d,7);else d.I==3&&(ye[0]=="stop"||ye[0]=="close"?ye[0]=="stop"?_i(d,7):Dh(d):ye[0]!="noop"&&d.l&&d.l.qa(ye),d.A=0)}}So(4)}catch{}}var w1=class{constructor(a,h){this.g=a,this.map=h}};function fg(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function pg(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function mg(a){return a.h?1:a.g?a.g.size:0}function Rh(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Ch(a,h){a.g?a.g.add(h):a.h=h}function gg(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}fg.prototype.cancel=function(){if(this.i=yg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function yg(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return I(a.i)}var _g=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function T1(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let O,V=null;g>=0?(O=a[d].substring(0,g),V=a[d].substring(g+1)):O=a[d],h(O,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function lr(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof lr?(this.l=a.l,ko(this,a.j),this.o=a.o,this.g=a.g,No(this,a.u),this.h=a.h,Ph(this,Sg(a.i)),this.m=a.m):a&&(h=String(a).match(_g))?(this.l=!1,ko(this,h[1]||"",!0),this.o=Do(h[2]||""),this.g=Do(h[3]||"",!0),No(this,h[4]),this.h=Do(h[5]||"",!0),Ph(this,h[6]||"",!0),this.m=Do(h[7]||"")):(this.l=!1,this.i=new xo(null,this.l))}lr.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Oo(h,vg,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Oo(h,vg,!0),"@"),a.push(Co(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Oo(d,d.charAt(0)=="/"?A1:S1,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Oo(d,C1)),a.join("")},lr.prototype.resolve=function(a){const h=mn(this);let d=!!a.j;d?ko(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var g=a.h;if(d)No(h,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var O=h.h.lastIndexOf("/");O!=-1&&(g=h.h.slice(0,O+1)+g)}if(O=g,O==".."||O==".")g="";else if(O.indexOf("./")!=-1||O.indexOf("/.")!=-1){g=O.lastIndexOf("/",0)==0,O=O.split("/");const V=[];for(let z=0;z<O.length;){const re=O[z++];re=="."?g&&z==O.length&&V.push(""):re==".."?((V.length>1||V.length==1&&V[0]!="")&&V.pop(),g&&z==O.length&&V.push("")):(V.push(re),g=!0)}g=V.join("/")}else g=O}return d?h.h=g:d=a.i.toString()!=="",d?Ph(h,Sg(a.i)):d=!!a.m,d&&(h.m=a.m),h};function mn(a){return new lr(a)}function ko(a,h,d){a.j=d?Do(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function No(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Ph(a,h,d){h instanceof xo?(a.i=h,P1(a.i,a.l)):(d||(h=Oo(h,R1)),a.i=new xo(h,a.l))}function we(a,h,d){a.i.set(h,d)}function xl(a){return we(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Do(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Oo(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,I1),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function I1(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var vg=/[#\/\?@]/g,S1=/[#\?:]/g,A1=/[#\?]/g,R1=/[#\?@]/g,C1=/#/g;function xo(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function yi(a){a.g||(a.g=new Map,a.h=0,a.i&&T1(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=xo.prototype,t.add=function(a,h){yi(this),this.i=null,a=os(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Eg(a,h){yi(a),h=os(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function wg(a,h){return yi(a),h=os(a,h),a.g.has(h)}t.forEach=function(a,h){yi(this),this.g.forEach(function(d,g){d.forEach(function(O){a.call(h,O,g,this)},this)},this)};function Tg(a,h){yi(a);let d=[];if(typeof h=="string")wg(a,h)&&(d=d.concat(a.g.get(os(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return yi(this),this.i=null,a=os(this,a),wg(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Tg(this,a),a.length>0?String(a[0]):h):h};function Ig(a,h,d){Eg(a,h),d.length>0&&(a.i=null,a.g.set(os(a,h),I(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var d=h[g];const O=Co(d);d=Tg(this,d);for(let V=0;V<d.length;V++){let z=O;d[V]!==""&&(z+="="+Co(d[V])),a.push(z)}}return this.i=a.join("&")};function Sg(a){const h=new xo;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function os(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function P1(a,h){h&&!a.j&&(yi(a),a.i=null,a.g.forEach(function(d,g){const O=g.toLowerCase();g!=O&&(Eg(this,g),Ig(this,O,d))},a)),a.j=h}function k1(a,h){const d=new Ro;if(o.Image){const g=new Image;g.onload=f(ur,d,"TestLoadImage: loaded",!0,h,g),g.onerror=f(ur,d,"TestLoadImage: error",!1,h,g),g.onabort=f(ur,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=f(ur,d,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function N1(a,h){const d=new Ro,g=new AbortController,O=setTimeout(()=>{g.abort(),ur(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(V=>{clearTimeout(O),V.ok?ur(d,"TestPingServer: ok",!0,h):ur(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),ur(d,"TestPingServer: error",!1,h)})}function ur(a,h,d,g,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),g(d)}catch{}}function D1(){this.g=new f1}function kh(a){this.i=a.Sb||null,this.h=a.ab||!1}p(kh,eg),kh.prototype.g=function(){return new Vl(this.i,this.h)};function Vl(a,h){me.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Vl,me),t=Vl.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Lo(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Vo(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Lo(this)),this.g&&(this.readyState=3,Lo(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ag(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ag(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Vo(this):Lo(this),this.readyState==3&&Ag(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Vo(this))},t.Na=function(a){this.g&&(this.response=a,Vo(this))},t.ga=function(){this.g&&Vo(this)};function Vo(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Lo(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Lo(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Vl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Rg(a){let h="";return X(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function Nh(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Rg(d),typeof a=="string"?d!=null&&Co(d):we(a,h,d))}function De(a){me.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(De,me);var O1=/^https?$/i,x1=["POST","PUT"];t=De.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ag.g(),this.g.onreadystatechange=m(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){Cg(this,V);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var O in g)d.set(O,g[O]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())d.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),O=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(x1,h,void 0)>=0)||g||O||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,z]of d)this.g.setRequestHeader(V,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(V){Cg(this,V)}};function Cg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Pg(a),Ll(a)}function Pg(a){a.A||(a.A=!0,be(a,"complete"),be(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,be(this,"complete"),be(this,"abort"),Ll(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ll(this,!0)),De.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?kg(this):this.Xa())},t.Xa=function(){kg(this)};function kg(a){if(a.h&&typeof s<"u"){if(a.v&&cr(a)==4)setTimeout(a.Ca.bind(a),0);else if(be(a,"readystatechange"),cr(a)==4){a.h=!1;try{const V=a.ca();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=V===0){let z=String(a.D).match(_g)[1]||null;!z&&o.self&&o.self.location&&(z=o.self.location.protocol.slice(0,-1)),g=!O1.test(z?z.toLowerCase():"")}d=g}if(d)be(a,"complete"),be(a,"success");else{a.o=6;try{var O=cr(a)>2?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.ca()+"]",Pg(a)}}finally{Ll(a)}}}}function Ll(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||be(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function cr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return cr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),d1(h)}};function Ng(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function V1(a){const h={};a=(a.g&&cr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(S(a[g]))continue;var d=_1(a[g]);const O=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=h[O]||[];h[O]=V,V.push(d)}Z(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function bo(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Dg(a){this.za=0,this.i=[],this.j=new Ro,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=bo("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=bo("baseRetryDelayMs",5e3,a),this.Za=bo("retryDelaySeedMs",1e4,a),this.Ta=bo("forwardChannelMaxRetries",2,a),this.va=bo("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new fg(a&&a.concurrentRequestLimit),this.Ba=new D1,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Dg.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,g){_t(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=jg(this,null,this.W),Ml(this)};function Dh(a){if(Og(a),a.I==3){var h=a.V++,d=mn(a.J);if(we(d,"SID",a.M),we(d,"RID",h),we(d,"TYPE","terminate"),Mo(a,d),h=new ar(a,a.j,h),h.M=2,h.A=xl(mn(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=Bg(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Ol(h)}Ug(a)}function bl(a){a.g&&(xh(a),a.g.cancel(),a.g=null)}function Og(a){bl(a),a.v&&(o.clearTimeout(a.v),a.v=null),Fl(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ml(a){if(!pg(a.h)&&!a.m){a.m=!0;var h=a.Ea;M||y(),U||(M(),U=!0),v.add(h,a),a.D=0}}function L1(a,h){return mg(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Ao(c(a.Ea,a,h),Fg(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const O=new ar(this,this.j,a);let V=this.o;if(this.U&&(V?(V=ge(V),Mn(V,this.U)):V=this.U),this.u!==null||this.R||(O.J=V,V=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Vg(this,O,h),d=mn(this.J),we(d,"RID",a),we(d,"CVER",22),this.G&&we(d,"X-HTTP-Session-Id",this.G),Mo(this,d),V&&(this.R?h="headers="+Co(Rg(V))+"&"+h:this.u&&Nh(d,this.u,V)),Ch(this.h,O),this.Ra&&we(d,"TYPE","init"),this.S?(we(d,"$req",h),we(d,"SID","null"),O.U=!0,Ih(O,d,null)):Ih(O,d,h),this.I=2}}else this.I==3&&(a?xg(this,a):this.i.length==0||pg(this.h)||xg(this))};function xg(a,h){var d;h?d=h.l:d=a.V++;const g=mn(a.J);we(g,"SID",a.M),we(g,"RID",d),we(g,"AID",a.K),Mo(a,g),a.u&&a.o&&Nh(g,a.u,a.o),d=new ar(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Vg(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Ch(a.h,d),Ih(d,g,h)}function Mo(a,h){a.H&&X(a.H,function(d,g){we(h,g,d)}),a.l&&X({},function(d,g){we(h,g,d)})}function Vg(a,h,d){d=Math.min(a.i.length,d);const g=a.l?c(a.l.Ka,a.l,a):null;e:{var O=a.i;let re=-1;for(;;){const qe=["count="+d];re==-1?d>0?(re=O[0].g,qe.push("ofs="+re)):re=0:qe.push("ofs="+re);let ye=!0;for(let Xe=0;Xe<d;Xe++){var V=O[Xe].g;const gn=O[Xe].map;if(V-=re,V<0)re=Math.max(0,O[Xe].g-100),ye=!1;else try{V="req"+V+"_"||"";try{var z=gn instanceof Map?gn:Object.entries(gn);for(const[vi,hr]of z){let dr=hr;l(hr)&&(dr=_h(hr)),qe.push(V+vi+"="+encodeURIComponent(dr))}}catch(vi){throw qe.push(V+"type="+encodeURIComponent("_badmap")),vi}}catch{g&&g(gn)}}if(ye){z=qe.join("&");break e}}z=void 0}return a=a.i.splice(0,d),h.G=a,z}function Lg(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;M||y(),U||(M(),U=!0),v.add(h,a),a.A=0}}function Oh(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Ao(c(a.Da,a),Fg(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,bg(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Ao(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,_t(10),bl(this),bg(this))};function xh(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function bg(a){a.g=new ar(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=mn(a.na);we(h,"RID","rpc"),we(h,"SID",a.M),we(h,"AID",a.K),we(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&we(h,"TO",a.ia),we(h,"TYPE","xmlhttp"),Mo(a,h),a.u&&a.o&&Nh(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=xl(mn(h)),d.u=null,d.R=!0,cg(d,a)}t.Va=function(){this.C!=null&&(this.C=null,bl(this),Oh(this),_t(19))};function Fl(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Mg(a,h){var d=null;if(a.g==h){Fl(a),xh(a),a.g=null;var g=2}else if(Rh(a.h,h))d=h.G,gg(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var O=a.D;g=Nl(),be(g,new sg(g,d)),Ml(a)}else Lg(a);else if(O=h.m,O==3||O==0&&h.X>0||!(g==1&&L1(a,h)||g==2&&Oh(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),O){case 1:_i(a,5);break;case 4:_i(a,10);break;case 3:_i(a,6);break;default:_i(a,2)}}}function Fg(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function _i(a,h){if(a.j.info("Error code "+h),h==2){var d=c(a.bb,a),g=a.Ua;const O=!g;g=new lr(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ko(g,"https"),xl(g),O?k1(g.toString(),d):N1(g.toString(),d)}else _t(2);a.I=0,a.l&&a.l.pa(h),Ug(a),Og(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function Ug(a){if(a.I=0,a.ja=[],a.l){const h=yg(a.h);(h.length!=0||a.i.length!=0)&&(P(a.ja,h),P(a.ja,a.i),a.h.i.length=0,I(a.i),a.i.length=0),a.l.oa()}}function jg(a,h,d){var g=d instanceof lr?mn(d):new lr(d);if(g.g!="")h&&(g.g=h+"."+g.g),No(g,g.u);else{var O=o.location;g=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;const V=new lr(null);g&&ko(V,g),h&&(V.g=h),O&&No(V,O),d&&(V.h=d),g=V}return d=a.G,h=a.wa,d&&h&&we(g,d,h),we(g,"VER",a.ka),Mo(a,g),g}function Bg(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new De(new kh({ab:d})):new De(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function zg(){}t=zg.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Ul(){}Ul.prototype.g=function(a,h){return new bt(a,h)};function bt(a,h){me.call(this),this.g=new Dg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!S(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!S(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new as(this)}p(bt,me),bt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},bt.prototype.close=function(){Dh(this.g)},bt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=_h(a),a=d);h.i.push(new w1(h.Ya++,a)),h.I==3&&Ml(h)},bt.prototype.N=function(){this.g.l=null,delete this.j,Dh(this.g),delete this.g,bt.Z.N.call(this)};function $g(a){vh.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p($g,vh);function Hg(){Eh.call(this),this.status=1}p(Hg,Eh);function as(a){this.g=a}p(as,zg),as.prototype.ra=function(){be(this.g,"a")},as.prototype.qa=function(a){be(this.g,new $g(a))},as.prototype.pa=function(a){be(this.g,new Hg)},as.prototype.oa=function(){be(this.g,"b")},Ul.prototype.createWebChannel=Ul.prototype.g,bt.prototype.send=bt.prototype.o,bt.prototype.open=bt.prototype.m,bt.prototype.close=bt.prototype.close,AT=function(){return new Ul},ST=function(){return Nl()},IT=mi,Sf={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Dl.NO_ERROR=0,Dl.TIMEOUT=8,Dl.HTTP_ERROR=6,Du=Dl,og.COMPLETE="complete",TT=og,tg.EventType=Io,Io.OPEN="a",Io.CLOSE="b",Io.ERROR="c",Io.MESSAGE="d",me.prototype.listen=me.prototype.J,ea=tg,De.prototype.listenOnce=De.prototype.K,De.prototype.getLastError=De.prototype.Ha,De.prototype.getLastErrorCode=De.prototype.ya,De.prototype.getStatus=De.prototype.ca,De.prototype.getResponseJson=De.prototype.La,De.prototype.getResponseText=De.prototype.la,De.prototype.send=De.prototype.ea,De.prototype.setWithCredentials=De.prototype.Fa,wT=De}).apply(typeof lu<"u"?lu:typeof self<"u"?self:typeof window<"u"?window:{});const b_="@firebase/firestore",M_="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let go="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=new Zp("@firebase/firestore");function us(){return Xi.logLevel}function q(t,...e){if(Xi.logLevel<=oe.DEBUG){const n=e.map(gm);Xi.debug(`Firestore (${go}): ${t}`,...n)}}function tr(t,...e){if(Xi.logLevel<=oe.ERROR){const n=e.map(gm);Xi.error(`Firestore (${go}): ${t}`,...n)}}function io(t,...e){if(Xi.logLevel<=oe.WARN){const n=e.map(gm);Xi.warn(`Firestore (${go}): ${t}`,...n)}}function gm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,RT(t,r,n)}function RT(t,e,n){let r=`FIRESTORE (${go}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw tr(r),new Error(r)}function fe(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||RT(e,i,r)}function ne(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ED{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ft.UNAUTHENTICATED))}shutdown(){}}class wD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class TD{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){fe(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Qr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Qr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Qr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(fe(typeof r.accessToken=="string",31837,{l:r}),new CT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return fe(e===null||typeof e=="string",2055,{h:e}),new ft(e)}}class ID{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class SD{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new ID(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class F_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class AD{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Gt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){fe(this.o===void 0,3512);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new F_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(fe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new F_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=RD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function Af(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return yd(i)===yd(s)?ae(i,s):yd(i)?1:-1}return ae(t.length,e.length)}const CD=55296,PD=57343;function yd(t){const e=t.charCodeAt(0);return e>=CD&&e<=PD}function so(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_="__name__";class vn{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&J(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return vn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof vn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=vn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ae(e.length,n.length)}static compareSegments(e,n){const r=vn.isNumericId(e),i=vn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?vn.extractNumericId(e).compare(vn.extractNumericId(n)):Af(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Kr.fromString(e.substring(4,e.length-2))}}class Ie extends vn{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const kD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends vn{construct(e,n,r){return new st(e,n,r)}static isValidIdentifier(e){return kD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===U_}static keyField(){return new st([U_])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new Q(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new Q(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Q(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new Q(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(n)}static emptyPath(){return new st([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Ie.fromString(e))}static fromName(e){return new G(Ie.fromString(e).popFirst(5))}static empty(){return new G(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Ie(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PT(t,e,n){if(!n)throw new Q(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ND(t,e,n,r){if(e===!0&&r===!0)throw new Q(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function j_(t){if(!G.isDocumentKey(t))throw new Q(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function B_(t){if(G.isDocumentKey(t))throw new Q(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function kT(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function _m(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J(12329,{type:typeof t})}function Yi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Q(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_m(t);throw new Q(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(t,e){const n={typeString:t};return e&&(n.value=e),n}function _l(t,e){if(!kT(t))throw new Q(F.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new Q(F.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_=-62135596800,$_=1e6;class Se{static now(){return Se.fromMillis(Date.now())}static fromDate(e){return Se.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*$_);return new Se(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Q(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Q(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<z_)throw new Q(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/$_}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Se._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(_l(e,Se._jsonSchema))return new Se(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-z_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Se._jsonSchemaVersion="firestore/timestamp/1.0",Se._jsonSchema={type:Be("string",Se._jsonSchemaVersion),seconds:Be("number"),nanoseconds:Be("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{static fromTimestamp(e){return new te(e)}static min(){return new te(new Se(0,0))}static max(){return new te(new Se(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja=-1;function DD(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=te.fromTimestamp(r===1e9?new Se(n+1,0):new Se(n,r));return new ei(i,G.empty(),e)}function OD(t){return new ei(t.readTime,t.key,ja)}class ei{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ei(te.min(),G.empty(),ja)}static max(){return new ei(te.max(),G.empty(),ja)}}function xD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class LD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yo(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==VD)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(i=>i?b.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new b((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new b((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function bD(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function _o(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Zc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm=-1;function eh(t){return t==null}function gc(t){return t===0&&1/t==-1/0}function MD(t){return typeof t=="number"&&Number.isInteger(t)&&!gc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT="";function FD(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=H_(e)),e=UD(t.get(n),e);return H_(e)}function UD(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case NT:n+="";break;default:n+=s}}return n}function H_(t){return t+NT+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function hi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function DT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new Ne(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new Ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new uu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new uu(this.root,e,this.comparator,!1)}getReverseIterator(){return new uu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new uu(this.root,e,this.comparator,!0)}}class uu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??rt.RED,this.left=i??rt.EMPTY,this.right=s??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new rt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return rt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw J(43730,{key:this.key,value:this.value});if(this.right.isRed())throw J(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw J(27949);return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw J(57766)}get value(){throw J(16141)}get color(){throw J(16727)}get left(){throw J(29726)}get right(){throw J(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.comparator=e,this.data=new Ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new W_(this.data.getIterator())}getIteratorFrom(e){return new W_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ge(this.comparator);return n.data=e,n}}class W_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new jt([])}unionWith(e){let n=new Ge(st.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return so(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new OT("Invalid base64 string: "+s):s}}(e);return new lt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const jD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ti(t){if(fe(!!t,39018),typeof t=="string"){let e=0;const n=jD.exec(t);if(fe(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ni(t){return typeof t=="string"?lt.fromBase64String(t):lt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT="server_timestamp",VT="__type__",LT="__previous_value__",bT="__local_write_time__";function Em(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[VT])==null?void 0:r.stringValue)===xT}function th(t){const e=t.mapValue.fields[LT];return Em(e)?th(e):e}function Ba(t){const e=ti(t.mapValue.fields[bT].timestampValue);return new Se(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(e,n,r,i,s,o,l,u,c,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=f}}const yc="(default)";class za{constructor(e,n){this.projectId=e,this.database=n||yc}static empty(){return new za("","")}get isDefaultDatabase(){return this.database===yc}isEqual(e){return e instanceof za&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT="__type__",FT="__max__",cu={mapValue:{fields:{__type__:{stringValue:FT}}}},UT="__vector__",_c="value";function ri(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Em(t)?4:$D(t)?9007199254740991:zD(t)?10:11:J(28295,{value:t})}function Vn(t,e){if(t===e)return!0;const n=ri(t);if(n!==ri(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ba(t).isEqual(Ba(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ti(i.timestampValue),l=ti(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ni(i.bytesValue).isEqual(ni(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Me(i.geoPointValue.latitude)===Me(s.geoPointValue.latitude)&&Me(i.geoPointValue.longitude)===Me(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Me(i.integerValue)===Me(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Me(i.doubleValue),l=Me(s.doubleValue);return o===l?gc(o)===gc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return so(t.arrayValue.values||[],e.arrayValue.values||[],Vn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(q_(o)!==q_(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Vn(o[u],l[u])))return!1;return!0}(t,e);default:return J(52216,{left:t})}}function $a(t,e){return(t.values||[]).find(n=>Vn(n,e))!==void 0}function oo(t,e){if(t===e)return 0;const n=ri(t),r=ri(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Me(s.integerValue||s.doubleValue),u=Me(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return K_(t.timestampValue,e.timestampValue);case 4:return K_(Ba(t),Ba(e));case 5:return Af(t.stringValue,e.stringValue);case 6:return function(s,o){const l=ni(s),u=ni(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=ae(l[c],u[c]);if(f!==0)return f}return ae(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ae(Me(s.latitude),Me(o.latitude));return l!==0?l:ae(Me(s.longitude),Me(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Q_(t.arrayValue,e.arrayValue);case 10:return function(s,o){var m,I,P,N;const l=s.fields||{},u=o.fields||{},c=(m=l[_c])==null?void 0:m.arrayValue,f=(I=u[_c])==null?void 0:I.arrayValue,p=ae(((P=c==null?void 0:c.values)==null?void 0:P.length)||0,((N=f==null?void 0:f.values)==null?void 0:N.length)||0);return p!==0?p:Q_(c,f)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===cu.mapValue&&o===cu.mapValue)return 0;if(s===cu.mapValue)return 1;if(o===cu.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const m=Af(u[p],f[p]);if(m!==0)return m;const I=oo(l[u[p]],c[f[p]]);if(I!==0)return I}return ae(u.length,f.length)}(t.mapValue,e.mapValue);default:throw J(23264,{he:n})}}function K_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=ti(t),r=ti(e),i=ae(n.seconds,r.seconds);return i!==0?i:ae(n.nanos,r.nanos)}function Q_(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=oo(n[i],r[i]);if(s)return s}return ae(n.length,r.length)}function ao(t){return Rf(t)}function Rf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ti(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ni(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Rf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Rf(n.fields[o])}`;return i+"}"}(t.mapValue):J(61005,{value:t})}function Ou(t){switch(ri(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=th(t);return e?16+Ou(e):16;case 5:return 2*t.stringValue.length;case 6:return ni(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Ou(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return hi(r.fields,(s,o)=>{i+=s.length+Ou(o)}),i}(t.mapValue);default:throw J(13486,{value:t})}}function Cf(t){return!!t&&"integerValue"in t}function wm(t){return!!t&&"arrayValue"in t}function G_(t){return!!t&&"nullValue"in t}function X_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xu(t){return!!t&&"mapValue"in t}function zD(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[MT])==null?void 0:r.stringValue)===UT}function ga(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return hi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ga(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ga(t.arrayValue.values[n]);return e}return{...t}}function $D(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===FT}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!xu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ga(n)}setAll(e){let n=st.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=ga(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());xu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];xu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){hi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Dt(ga(this.value))}}function jT(t){const e=[];return hi(t.fields,(n,r)=>{const i=new st([n]);if(xu(r)){const s=jT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new jt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new mt(e,0,te.min(),te.min(),te.min(),Dt.empty(),0)}static newFoundDocument(e,n,r,i){return new mt(e,1,n,te.min(),r,i,0)}static newNoDocument(e,n){return new mt(e,2,n,te.min(),te.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new mt(e,3,n,te.min(),te.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,n){this.position=e,this.inclusive=n}}function Y_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=oo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function J_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Vn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,n="asc"){this.field=e,this.dir=n}}function HD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{}class Ke extends BT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new WD(e,n,r):n==="array-contains"?new GD(e,r):n==="in"?new XD(e,r):n==="not-in"?new YD(e,r):n==="array-contains-any"?new JD(e,r):new Ke(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new KD(e,r):new QD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(oo(n,this.value)):n!==null&&ri(this.value)===ri(n)&&this.matchesComparison(oo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ln extends BT{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Ln(e,n)}matches(e){return zT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function zT(t){return t.op==="and"}function $T(t){return qD(t)&&zT(t)}function qD(t){for(const e of t.filters)if(e instanceof Ln)return!1;return!0}function Pf(t){if(t instanceof Ke)return t.field.canonicalString()+t.op.toString()+ao(t.value);if($T(t))return t.filters.map(e=>Pf(e)).join(",");{const e=t.filters.map(n=>Pf(n)).join(",");return`${t.op}(${e})`}}function HT(t,e){return t instanceof Ke?function(r,i){return i instanceof Ke&&r.op===i.op&&r.field.isEqual(i.field)&&Vn(r.value,i.value)}(t,e):t instanceof Ln?function(r,i){return i instanceof Ln&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&HT(o,i.filters[l]),!0):!1}(t,e):void J(19439)}function qT(t){return t instanceof Ke?function(n){return`${n.field.canonicalString()} ${n.op} ${ao(n.value)}`}(t):t instanceof Ln?function(n){return n.op.toString()+" {"+n.getFilters().map(qT).join(" ,")+"}"}(t):"Filter"}class WD extends Ke{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class KD extends Ke{constructor(e,n){super(e,"in",n),this.keys=WT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class QD extends Ke{constructor(e,n){super(e,"not-in",n),this.keys=WT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function WT(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class GD extends Ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return wm(n)&&$a(n.arrayValue,this.value)}}class XD extends Ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&$a(this.value.arrayValue,n)}}class YD extends Ke{constructor(e,n){super(e,"not-in",n)}matches(e){if($a(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!$a(this.value.arrayValue,n)}}class JD extends Ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!wm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>$a(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function Z_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new ZD(t,e,n,r,i,s,o)}function Tm(t){const e=ne(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Pf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),eh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ao(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ao(r)).join(",")),e.Te=n}return e.Te}function Im(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!HD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!HT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!J_(t.startAt,e.startAt)&&J_(t.endAt,e.endAt)}function kf(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function eO(t,e,n,r,i,s,o,l){return new nh(t,e,n,r,i,s,o,l)}function KT(t){return new nh(t)}function ev(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function tO(t){return t.collectionGroup!==null}function ya(t){const e=ne(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ge(st.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new Ec(s,r))}),n.has(st.keyField().canonicalString())||e.Ie.push(new Ec(st.keyField(),r))}return e.Ie}function Nn(t){const e=ne(t);return e.Ee||(e.Ee=nO(e,ya(t))),e.Ee}function nO(t,e){if(t.limitType==="F")return Z_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ec(i.field,s)});const n=t.endAt?new vc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new vc(t.startAt.position,t.startAt.inclusive):null;return Z_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Nf(t,e,n){return new nh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function rh(t,e){return Im(Nn(t),Nn(e))&&t.limitType===e.limitType}function QT(t){return`${Tm(Nn(t))}|lt:${t.limitType}`}function cs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>qT(i)).join(", ")}]`),eh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ao(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ao(i)).join(",")),`Target(${r})`}(Nn(t))}; limitType=${t.limitType})`}function ih(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ya(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Y_(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,ya(r),i)||r.endAt&&!function(o,l,u){const c=Y_(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,ya(r),i))}(t,e)}function rO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function GT(t){return(e,n)=>{let r=!1;for(const i of ya(t)){const s=iO(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function iO(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?oo(u,c):J(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){hi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return DT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sO=new Ne(G.comparator);function nr(){return sO}const XT=new Ne(G.comparator);function ta(...t){let e=XT;for(const n of t)e=e.insert(n.key,n);return e}function YT(t){let e=XT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ri(){return _a()}function JT(){return _a()}function _a(){return new rs(t=>t.toString(),(t,e)=>t.isEqual(e))}const oO=new Ne(G.comparator),aO=new Ge(G.comparator);function le(...t){let e=aO;for(const n of t)e=e.add(n);return e}const lO=new Ge(ae);function uO(){return lO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gc(e)?"-0":e}}function ZT(t){return{integerValue:""+t}}function cO(t,e){return MD(e)?ZT(e):Sm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(){this._=void 0}}function hO(t,e,n){return t instanceof Ha?function(i,s){const o={fields:{[VT]:{stringValue:xT},[bT]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Em(s)&&(s=th(s)),s&&(o.fields[LT]=s),{mapValue:o}}(n,e):t instanceof qa?tI(t,e):t instanceof Wa?nI(t,e):function(i,s){const o=eI(i,s),l=tv(o)+tv(i.Ae);return Cf(o)&&Cf(i.Ae)?ZT(l):Sm(i.serializer,l)}(t,e)}function dO(t,e,n){return t instanceof qa?tI(t,e):t instanceof Wa?nI(t,e):n}function eI(t,e){return t instanceof wc?function(r){return Cf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ha extends sh{}class qa extends sh{constructor(e){super(),this.elements=e}}function tI(t,e){const n=rI(e);for(const r of t.elements)n.some(i=>Vn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Wa extends sh{constructor(e){super(),this.elements=e}}function nI(t,e){let n=rI(e);for(const r of t.elements)n=n.filter(i=>!Vn(i,r));return{arrayValue:{values:n}}}class wc extends sh{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function tv(t){return Me(t.integerValue||t.doubleValue)}function rI(t){return wm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{constructor(e,n){this.field=e,this.transform=n}}function pO(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof qa&&i instanceof qa||r instanceof Wa&&i instanceof Wa?so(r.elements,i.elements,Vn):r instanceof wc&&i instanceof wc?Vn(r.Ae,i.Ae):r instanceof Ha&&i instanceof Ha}(t.transform,e.transform)}class mO{constructor(e,n){this.version=e,this.transformResults=n}}class hn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new hn}static exists(e){return new hn(void 0,e)}static updateTime(e){return new hn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}let oh=class{};function iI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Am(t.key,hn.none()):new vl(t.key,t.data,hn.none());{const n=t.data,r=Dt.empty();let i=new Ge(st.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new di(t.key,r,new jt(i.toArray()),hn.none())}}function gO(t,e,n){t instanceof vl?function(i,s,o){const l=i.value.clone(),u=rv(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof di?function(i,s,o){if(!Vu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=rv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(sI(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function va(t,e,n,r){return t instanceof vl?function(s,o,l,u){if(!Vu(s.precondition,o))return l;const c=s.value.clone(),f=iv(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof di?function(s,o,l,u){if(!Vu(s.precondition,o))return l;const c=iv(s.fieldTransforms,u,o),f=o.data;return f.setAll(sI(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Vu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function yO(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=eI(r.transform,i||null);s!=null&&(n===null&&(n=Dt.empty()),n.set(r.field,s))}return n||null}function nv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&so(r,i,(s,o)=>pO(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class vl extends oh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class di extends oh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function sI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function rv(t,e,n){const r=new Map;fe(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,dO(o,l,n[i]))}return r}function iv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,hO(s,o,e))}return r}class Am extends oh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _O extends oh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&gO(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=va(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=va(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=JT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=iI(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&so(this.mutations,e.mutations,(n,r)=>nv(n,r))&&so(this.baseMutations,e.baseMutations,(n,r)=>nv(n,r))}}class Rm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){fe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return oO}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Rm(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ue,ce;function TO(t){switch(t){case F.OK:return J(64938);case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0;default:return J(15467,{code:t})}}function oI(t){if(t===void 0)return tr("GRPC error has no .code"),F.UNKNOWN;switch(t){case Ue.OK:return F.OK;case Ue.CANCELLED:return F.CANCELLED;case Ue.UNKNOWN:return F.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return F.INTERNAL;case Ue.UNAVAILABLE:return F.UNAVAILABLE;case Ue.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Ue.NOT_FOUND:return F.NOT_FOUND;case Ue.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Ue.ABORTED:return F.ABORTED;case Ue.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Ue.DATA_LOSS:return F.DATA_LOSS;default:return J(39323,{code:t})}}(ce=Ue||(Ue={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IO(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SO=new Kr([4294967295,4294967295],0);function sv(t){const e=IO().encode(t),n=new ET;return n.update(e),new Uint8Array(n.digest())}function ov(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Kr([n,r],0),new Kr([i,s],0)]}class Cm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new na(`Invalid padding: ${n}`);if(r<0)throw new na(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new na(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new na(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Kr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Kr.fromNumber(r)));return i.compare(SO)===1&&(i=new Kr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=sv(e),[r,i]=ov(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Cm(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=sv(e),[r,i]=ov(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class na extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,El.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ah(te.min(),i,new Ne(ae),nr(),le())}}class El{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new El(r,n,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class aI{constructor(e,n){this.targetId=e,this.Ce=n}}class lI{constructor(e,n,r=lt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class av{constructor(){this.ve=0,this.Fe=lv(),this.Me=lt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=le(),n=le(),r=le();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:J(38017,{changeType:s})}}),new El(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=lv()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,fe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class AO{constructor(e){this.Ge=e,this.ze=new Map,this.je=nr(),this.Je=hu(),this.He=hu(),this.Ye=new Ne(ae)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:J(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(kf(s))if(r===0){const o=new G(s.path);this.et(n,o,mt.newNoDocument(o,te.min()))}else fe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=ni(r).toUint8Array()}catch(u){if(u instanceof OT)return io("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Cm(o,i,s)}catch(u){return io(u instanceof na?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&kf(l.target)){const u=new G(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,mt.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=le();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new ah(e,n,this.Ye,this.je,r);return this.je=nr(),this.Je=hu(),this.He=hu(),this.Ye=new Ne(ae),i}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new av,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Ge(ae),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Ge(ae),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new av),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function hu(){return new Ne(G.comparator)}function lv(){return new Ne(G.comparator)}const RO=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),CO=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),PO=(()=>({and:"AND",or:"OR"}))();class kO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Df(t,e){return t.useProto3Json||eh(e)?e:{value:e}}function Tc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function uI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function NO(t,e){return Tc(t,e.toTimestamp())}function Dn(t){return fe(!!t,49232),te.fromTimestamp(function(n){const r=ti(n);return new Se(r.seconds,r.nanos)}(t))}function Pm(t,e){return Of(t,e).canonicalString()}function Of(t,e){const n=function(i){return new Ie(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function cI(t){const e=Ie.fromString(t);return fe(mI(e),10190,{key:e.toString()}),e}function xf(t,e){return Pm(t.databaseId,e.path)}function _d(t,e){const n=cI(e);if(n.get(1)!==t.databaseId.projectId)throw new Q(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Q(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(dI(n))}function hI(t,e){return Pm(t.databaseId,e)}function DO(t){const e=cI(t);return e.length===4?Ie.emptyPath():dI(e)}function Vf(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function dI(t){return fe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function uv(t,e,n){return{name:xf(t,e),fields:n.value.mapValue.fields}}function OO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:J(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(fe(f===void 0||typeof f=="string",58123),lt.fromBase64String(f||"")):(fe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),lt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?F.UNKNOWN:oI(c.code);return new Q(f,c.message||"")}(o);n=new lI(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=_d(t,r.document.name),s=Dn(r.document.updateTime),o=r.document.createTime?Dn(r.document.createTime):te.min(),l=new Dt({mapValue:{fields:r.document.fields}}),u=mt.newFoundDocument(i,s,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new Lu(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=_d(t,r.document),s=r.readTime?Dn(r.readTime):te.min(),o=mt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Lu([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=_d(t,r.document),s=r.removedTargetIds||[];n=new Lu([],s,i,null)}else{if(!("filter"in e))return J(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new wO(i,s),l=r.targetId;n=new aI(l,o)}}return n}function xO(t,e){let n;if(e instanceof vl)n={update:uv(t,e.key,e.value)};else if(e instanceof Am)n={delete:xf(t,e.key)};else if(e instanceof di)n={update:uv(t,e.key,e.data),updateMask:zO(e.fieldMask)};else{if(!(e instanceof _O))return J(16599,{Vt:e.type});n={verify:xf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Ha)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof qa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Wa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof wc)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw J(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:NO(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:J(27497)}(t,e.precondition)),n}function VO(t,e){return t&&t.length>0?(fe(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Dn(i.updateTime):Dn(s);return o.isEqual(te.min())&&(o=Dn(s)),new mO(o,i.transformResults||[])}(n,e))):[]}function LO(t,e){return{documents:[hI(t,e.path)]}}function bO(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=hI(t,i);const s=function(c){if(c.length!==0)return pI(Ln.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(m){return{field:hs(m.field),direction:UO(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Df(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function MO(t){let e=DO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){fe(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const m=fI(p);return m instanceof Ln&&$T(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(P){return new Ec(ds(P.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,eh(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,I=p.values||[];return new vc(I,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,I=p.values||[];return new vc(I,m)}(n.endAt)),eO(e,i,o,s,l,"F",u,c)}function FO(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function fI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ds(n.unaryFilter.field);return Ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ds(n.unaryFilter.field);return Ke.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ds(n.unaryFilter.field);return Ke.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ds(n.unaryFilter.field);return Ke.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return J(61313);default:return J(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ke.create(ds(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return J(58110);default:return J(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ln.create(n.compositeFilter.filters.map(r=>fI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return J(1026)}}(n.compositeFilter.op))}(t):J(30097,{filter:t})}function UO(t){return RO[t]}function jO(t){return CO[t]}function BO(t){return PO[t]}function hs(t){return{fieldPath:t.canonicalString()}}function ds(t){return st.fromServerFormat(t.fieldPath)}function pI(t){return t instanceof Ke?function(n){if(n.op==="=="){if(X_(n.value))return{unaryFilter:{field:hs(n.field),op:"IS_NAN"}};if(G_(n.value))return{unaryFilter:{field:hs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(X_(n.value))return{unaryFilter:{field:hs(n.field),op:"IS_NOT_NAN"}};if(G_(n.value))return{unaryFilter:{field:hs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hs(n.field),op:jO(n.op),value:n.value}}}(t):t instanceof Ln?function(n){const r=n.getFilters().map(i=>pI(i));return r.length===1?r[0]:{compositeFilter:{op:BO(n.op),filters:r}}}(t):J(54877,{filter:t})}function zO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function mI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n,r,i,s=te.min(),o=te.min(),l=lt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(e){this.yt=e}}function HO(t){const e=MO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Nf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO{constructor(){this.Cn=new WO}addToCollectionParentIndex(e,n){return this.Cn.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(ei.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(ei.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class WO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ge(Ie.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ge(Ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},gI=41943040;class Pt{static withCacheSize(e){return new Pt(e,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pt.DEFAULT_COLLECTION_PERCENTILE=10,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Pt.DEFAULT=new Pt(gI,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Pt.DISABLED=new Pt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new lo(0)}static cr(){return new lo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv="LruGarbageCollector",KO=1048576;function dv([t,e],[n,r]){const i=ae(t,n);return i===0?ae(e,r):i}class QO{constructor(e){this.Ir=e,this.buffer=new Ge(dv),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();dv(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class GO{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){q(hv,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){_o(n)?q(hv,"Ignoring IndexedDB error during garbage collection: ",n):await yo(n)}await this.Vr(3e5)})}}class XO{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return b.resolve(Zc.ce);const r=new QO(n);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(cv)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),cv):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,i,s,o,l,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),us()<=oe.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function YO(t,e){return new XO(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JO{constructor(){this.changes=new rs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&va(r.mutation,i,jt.empty(),Se.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,n,r=le()){const i=Ri();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ta();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ri();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,le()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=nr();const o=_a(),l=function(){return _a()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof di)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),va(f.mutation,c,f.mutation.getFieldMask(),Se.now())):o.set(c.key,jt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>l.set(c,new ZO(f,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=_a();let i=new Ne((o,l)=>o-l),s=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||jt.empty();f=l.applyToLocalView(c,f),r.set(u,f);const p=(i.get(l.batchId)||le()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,p=JT();f.forEach(m=>{if(!s.has(m)){const I=iI(n.get(m),r.get(m));I!==null&&p.set(m,I),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):tO(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):b.resolve(Ri());let l=ja,u=s;return o.next(c=>b.forEach(c,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?b.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,le())).next(f=>({batchId:l,changes:YT(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=ta();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ta();return this.indexManager.getCollectionParents(e,s).next(l=>b.forEach(l,u=>{const c=function(p,m){return new nh(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,mt.newInvalidDocument(f)))});let l=ta();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&va(f.mutation,c,jt.empty(),Se.now()),ih(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return b.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Dn(i.createTime)}}(n)),b.resolve()}getNamedQuery(e,n){return b.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(i){return{name:i.name,query:HO(i.bundledQuery),readTime:Dn(i.readTime)}}(n)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(){this.overlays=new Ne(G.comparator),this.qr=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ri();return b.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const i=Ri(),s=n.length+1,o=new G(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return b.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ne((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=Ri(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=Ri(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=i)););return b.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new EO(n,r));let s=this.qr.get(n);s===void 0&&(s=le(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(e){return b.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,b.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(){this.Qr=new Ge(Je.$r),this.Ur=new Ge(Je.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Je(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new Je(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new G(new Ie([])),r=new Je(n,e),i=new Je(n,e+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new G(new Ie([])),r=new Je(n,e),i=new Je(n,e+1);let s=le();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Je(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Je{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return G.comparator(e.key,n.key)||ae(e.Yr,n.Yr)}static Kr(e,n){return ae(e.Yr,n.Yr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Ge(Je.$r)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new vO(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new Je(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return b.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?vm:this.tr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Je(n,0),i=new Je(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const l=this.Xr(o.Yr);s.push(l)}),b.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ge(ae);return n.forEach(i=>{const s=new Je(i,0),o=new Je(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],l=>{r=r.add(l.Yr)})}),b.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new Je(new G(s),0);let l=new Ge(ae);return this.Zr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Yr)),!0)},o),b.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){fe(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return b.forEach(n.mutations,i=>{const s=new Je(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new Je(n,0),i=this.Zr.firstAfterOrEqual(r);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e){this.ri=e,this.docs=function(){return new Ne(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():mt.newInvalidDocument(n))}getEntries(e,n){let r=nr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():mt.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=nr();const o=n.path,l=new G(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||xD(OD(f),r)<=0||(i.has(f.key)||ih(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return b.resolve(s)}getAllFromCollectionGroup(e,n,r,i){J(9500)}ii(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new o2(this)}getSize(e){return b.resolve(this.size)}}class o2 extends JO{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e){this.persistence=e,this.si=new rs(n=>Tm(n),Im),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.oi=0,this._i=new km,this.targetCount=0,this.ai=lo.ur()}forEachTarget(e,n){return this.si.forEach((r,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),b.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new lo(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Pr(n),b.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),b.waitFor(s).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),b.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e,n){this.ui={},this.overlays={},this.ci=new Zc(0),this.li=!1,this.li=!0,this.hi=new r2,this.referenceDelegate=e(this),this.Pi=new a2(this),this.indexManager=new qO,this.remoteDocumentCache=function(i){return new s2(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new $O(n),this.Ii=new t2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new n2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new i2(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new l2(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return b.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class l2 extends LD{constructor(e){super(),this.currentSequenceNumber=e}}class Nm{constructor(e){this.persistence=e,this.Ri=new km,this.Vi=null}static mi(e){return new Nm(e)}get fi(){if(this.Vi)return this.Vi;throw J(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),b.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.fi,r=>{const i=G.fromPath(r);return this.gi(e,i).next(s=>{s||n.removeEntry(i,te.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return b.or([()=>b.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Ic{constructor(e,n){this.persistence=e,this.pi=new rs(r=>FD(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=YO(this,n)}static mi(e,n){return new Ic(e,n)}Ei(){}di(e){return b.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return b.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?b.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,s.removeEntry(o,te.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),b.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),b.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),b.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),b.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ou(e.data.value)),n}br(e,n,r){return b.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return b.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=i}static As(e,n){let r=le(),i=le();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Dm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return CR()?8:bD(yt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ys(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new u2;return this.Ss(e,n,o).next(l=>{if(s.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>s.result)}bs(e,n,r,i){return r.documentReadCount<this.fs?(us()<=oe.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",cs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),b.resolve()):(us()<=oe.DEBUG&&q("QueryEngine","Query:",cs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(us()<=oe.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",cs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Nn(n))):b.resolve())}ys(e,n){if(ev(n))return b.resolve(null);let r=Nn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Nf(n,null,"F"),r=Nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=le(...s);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ds(n,l);return this.Cs(n,c,o,u.readTime)?this.ys(e,Nf(n,null,"F")):this.vs(e,c,n,u)}))})))}ws(e,n,r,i){return ev(n)||i.isEqual(te.min())?b.resolve(null):this.ps.getDocuments(e,r).next(s=>{const o=this.Ds(n,s);return this.Cs(n,o,r,i)?b.resolve(null):(us()<=oe.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),cs(n)),this.vs(e,o,n,DD(i,ja)).next(l=>l))})}Ds(e,n){let r=new Ge(GT(e));return n.forEach((i,s)=>{ih(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return us()<=oe.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",cs(n)),this.ps.getDocumentsMatchingQuery(e,n,ei.min(),r)}vs(e,n,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om="LocalStore",h2=3e8;class d2{constructor(e,n,r,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new Ne(ae),this.xs=new rs(s=>Tm(s),Im),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new e2(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function f2(t,e,n,r){return new d2(t,e,n,r)}async function _I(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=le();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function p2(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const p=c.batch,m=p.keys();let I=b.resolve();return m.forEach(P=>{I=I.next(()=>f.getEntry(u,P)).next(N=>{const x=c.docVersions.get(P);fe(x!==null,48541),N.version.compareTo(x)<0&&(p.applyToRemoteDocument(N,c),N.isValidDocument()&&(N.setReadTime(c.commitVersion),f.addEntry(N)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=le();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function vI(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function m2(t,e){const n=ne(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];e.targetChanges.forEach((f,p)=>{const m=i.get(p);if(!m)return;l.push(n.Pi.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(s,f.addedDocuments,p)));let I=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?I=I.withResumeToken(lt.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,r)),i=i.insert(p,I),function(N,x,w){return N.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=h2?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(m,I,f)&&l.push(n.Pi.updateTargetData(s,I))});let u=nr(),c=le();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(g2(s,o,e.documentUpdates).next(f=>{u=f.ks,c=f.qs})),!r.isEqual(te.min())){const f=n.Pi.getLastRemoteSnapshotVersion(s).next(p=>n.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return b.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Ms=i,s))}function g2(t,e,n){let r=le(),i=le();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=nr();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(te.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q(Om,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{ks:o,qs:i}})}function y2(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=vm),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function _2(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Pi.getTargetData(r,e).next(s=>s?(i=s,b.resolve(i)):n.Pi.allocateTargetId(r).next(o=>(i=new Lr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function Lf(t,e,n){const r=ne(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!_o(o))throw o;q(Om,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function fv(t,e,n){const r=ne(t);let i=te.min(),s=le();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const p=ne(u),m=p.xs.get(f);return m!==void 0?b.resolve(p.Ms.get(m)):p.Pi.getTargetData(c,f)}(r,o,Nn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?i:te.min(),n?s:le())).next(l=>(v2(r,rO(e),l),{documents:l,Qs:s})))}function v2(t,e,n){let r=t.Os.get(e)||te.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Os.set(e,r)}class pv{constructor(){this.activeTargetIds=uO()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class E2{constructor(){this.Mo=new pv,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new pv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv="ConnectivityMonitor";class gv{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){q(mv,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){q(mv,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let du=null;function bf(){return du===null?du=function(){return 268435456+Math.round(2147483648*Math.random())}():du++,"0x"+du.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd="RestConnection",T2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class I2{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===yc?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,n,r,i,s){const o=bf(),l=this.zo(e,n.toUriEncodedString());q(vd,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,i,s);const{host:c}=new URL(l),f=ui(c);return this.Jo(e,l,u,r,f).then(p=>(q(vd,`Received RPC '${e}' ${o}: `,p),p),p=>{throw io(vd,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Ho(e,n,r,i,s,o){return this.Go(e,n,r,i,s)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+go}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,n){const r=T2[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="WebChannelConnection";class A2 extends I2{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const o=bf();return new Promise((l,u)=>{const c=new wT;c.setWithCredentials(!0),c.listenOnce(TT.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Du.NO_ERROR:const p=c.getResponseJson();q(ht,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Du.TIMEOUT:q(ht,`RPC '${e}' ${o} timed out`),u(new Q(F.DEADLINE_EXCEEDED,"Request time out"));break;case Du.HTTP_ERROR:const m=c.getStatus();if(q(ht,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let I=c.getResponseJson();Array.isArray(I)&&(I=I[0]);const P=I==null?void 0:I.error;if(P&&P.status&&P.message){const N=function(w){const _=w.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(_)>=0?_:F.UNKNOWN}(P.status);u(new Q(N,P.message))}else u(new Q(F.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new Q(F.UNAVAILABLE,"Connection failed."));break;default:J(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{q(ht,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);q(ht,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",f,r,15)})}T_(e,n,r){const i=bf(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=AT(),l=ST(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");q(ht,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);this.I_(p);let m=!1,I=!1;const P=new S2({Yo:x=>{I?q(ht,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(m||(q(ht,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),q(ht,`RPC '${e}' stream ${i} sending:`,x),p.send(x))},Zo:()=>p.close()}),N=(x,w,_)=>{x.listen(w,A=>{try{_(A)}catch(k){setTimeout(()=>{throw k},0)}})};return N(p,ea.EventType.OPEN,()=>{I||(q(ht,`RPC '${e}' stream ${i} transport opened.`),P.o_())}),N(p,ea.EventType.CLOSE,()=>{I||(I=!0,q(ht,`RPC '${e}' stream ${i} transport closed`),P.a_(),this.E_(p))}),N(p,ea.EventType.ERROR,x=>{I||(I=!0,io(ht,`RPC '${e}' stream ${i} transport errored. Name:`,x.name,"Message:",x.message),P.a_(new Q(F.UNAVAILABLE,"The operation could not be completed")))}),N(p,ea.EventType.MESSAGE,x=>{var w;if(!I){const _=x.data[0];fe(!!_,16349);const A=_,k=(A==null?void 0:A.error)||((w=A[0])==null?void 0:w.error);if(k){q(ht,`RPC '${e}' stream ${i} received error:`,k);const M=k.status;let U=function(E){const T=Ue[E];if(T!==void 0)return oI(T)}(M),v=k.message;U===void 0&&(U=F.INTERNAL,v="Unknown error status: "+M+" with message "+k.message),I=!0,P.a_(new Q(U,v)),p.close()}else q(ht,`RPC '${e}' stream ${i} received:`,_),P.u_(_)}}),N(l,IT.STAT_EVENT,x=>{x.stat===Sf.PROXY?q(ht,`RPC '${e}' stream ${i} detected buffering proxy`):x.stat===Sf.NOPROXY&&q(ht,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.__()},0),P}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Ed(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(t){return new kO(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv="PersistentStream";class wI{constructor(e,n,r,i,s,o,l,u){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new EI(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(tr(n.toString()),tr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new Q(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return q(yv,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(q(yv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class R2 extends wI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=OO(this.serializer,e),r=function(s){if(!("targetChange"in s))return te.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?Dn(o.readTime):te.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Vf(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=kf(u)?{documents:LO(s,u)}:{query:bO(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=uI(s,o.resumeToken);const c=Df(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(te.min())>0){l.readTime=Tc(s,o.snapshotVersion.toTimestamp());const c=Df(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=FO(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Vf(this.serializer),n.removeTarget=e,this.q_(n)}}class C2 extends wI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=VO(e.writeResults,e.commitTime),r=Dn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Vf(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>xO(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{}class k2 extends P2{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new Q(F.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(e,Of(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Q(F.UNKNOWN,s.toString())})}Ho(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,Of(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Q(F.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class N2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(tr(n),this.aa=!1):q("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji="RemoteStore";class D2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{is(this)&&(q(Ji,"Restarting streams for network reachability change."),await async function(u){const c=ne(u);c.Ea.add(4),await wl(c),c.Ra.set("Unknown"),c.Ea.delete(4),await uh(c)}(this))})}),this.Ra=new N2(r,i)}}async function uh(t){if(is(t))for(const e of t.da)await e(!0)}async function wl(t){for(const e of t.da)await e(!1)}function TI(t,e){const n=ne(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),bm(n)?Lm(n):vo(n).O_()&&Vm(n,e))}function xm(t,e){const n=ne(t),r=vo(n);n.Ia.delete(e),r.O_()&&II(n,e),n.Ia.size===0&&(r.O_()?r.L_():is(n)&&n.Ra.set("Unknown"))}function Vm(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}vo(t).Y_(e)}function II(t,e){t.Va.Ue(e),vo(t).Z_(e)}function Lm(t){t.Va=new AO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),vo(t).start(),t.Ra.ua()}function bm(t){return is(t)&&!vo(t).x_()&&t.Ia.size>0}function is(t){return ne(t).Ea.size===0}function SI(t){t.Va=void 0}async function O2(t){t.Ra.set("Online")}async function x2(t){t.Ia.forEach((e,n)=>{Vm(t,e)})}async function V2(t,e){SI(t),bm(t)?(t.Ra.ha(e),Lm(t)):t.Ra.set("Unknown")}async function L2(t,e,n){if(t.Ra.set("Online"),e instanceof lI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))}(t,e)}catch(r){q(Ji,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Sc(t,r)}else if(e instanceof Lu?t.Va.Ze(e):e instanceof aI?t.Va.st(e):t.Va.tt(e),!n.isEqual(te.min()))try{const r=await vI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Va.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ia.get(c);f&&s.Ia.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=s.Ia.get(u);if(!f)return;s.Ia.set(u,f.withResumeToken(lt.EMPTY_BYTE_STRING,f.snapshotVersion)),II(s,u);const p=new Lr(f.target,u,c,f.sequenceNumber);Vm(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q(Ji,"Failed to raise snapshot:",r),await Sc(t,r)}}async function Sc(t,e,n){if(!_o(e))throw e;t.Ea.add(1),await wl(t),t.Ra.set("Offline"),n||(n=()=>vI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q(Ji,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await uh(t)})}function AI(t,e){return e().catch(n=>Sc(t,n,e))}async function ch(t){const e=ne(t),n=ii(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:vm;for(;b2(e);)try{const i=await y2(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,M2(e,i)}catch(i){await Sc(e,i)}RI(e)&&CI(e)}function b2(t){return is(t)&&t.Ta.length<10}function M2(t,e){t.Ta.push(e);const n=ii(t);n.O_()&&n.X_&&n.ea(e.mutations)}function RI(t){return is(t)&&!ii(t).x_()&&t.Ta.length>0}function CI(t){ii(t).start()}async function F2(t){ii(t).ra()}async function U2(t){const e=ii(t);for(const n of t.Ta)e.ea(n.mutations)}async function j2(t,e,n){const r=t.Ta.shift(),i=Rm.from(r,e,n);await AI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ch(t)}async function B2(t,e){e&&ii(t).X_&&await async function(r,i){if(function(o){return TO(o)&&o!==F.ABORTED}(i.code)){const s=r.Ta.shift();ii(r).B_(),await AI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ch(r)}}(t,e),RI(t)&&CI(t)}async function _v(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),q(Ji,"RemoteStore received new credentials");const r=is(n);n.Ea.add(3),await wl(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await uh(n)}async function z2(t,e){const n=ne(t);e?(n.Ea.delete(2),await uh(n)):e||(n.Ea.add(2),await wl(n),n.Ra.set("Unknown"))}function vo(t){return t.ma||(t.ma=function(n,r,i){const s=ne(n);return s.sa(),new R2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:O2.bind(null,t),t_:x2.bind(null,t),r_:V2.bind(null,t),H_:L2.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),bm(t)?Lm(t):t.Ra.set("Unknown")):(await t.ma.stop(),SI(t))})),t.ma}function ii(t){return t.fa||(t.fa=function(n,r,i){const s=ne(n);return s.sa(),new C2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:F2.bind(null,t),r_:B2.bind(null,t),ta:U2.bind(null,t),na:j2.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await ch(t)):(await t.fa.stop(),t.Ta.length>0&&(q(Ji,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Qr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Mm(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fm(t,e){if(tr("AsyncQueue",`${e}: ${t}`),_o(t))return new Q(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{static emptySet(e){return new Ls(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=ta(),this.sortedSet=new Ne(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ls)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ls;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(){this.ga=new Ne(G.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):J(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class uo{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new uo(e,n,Ls.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class H2{constructor(){this.queries=Ev(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=ne(n),s=i.queries;i.queries=Ev(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new Q(F.ABORTED,"Firestore shutting down"))}}function Ev(){return new rs(t=>QT(t),rh)}async function q2(t,e){const n=ne(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new $2,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Fm(o,`Initialization of query '${cs(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&Um(n)}async function W2(t,e){const n=ne(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function K2(t,e){const n=ne(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&Um(n)}function Q2(t,e,n){const r=ne(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function Um(t){t.Ca.forEach(e=>{e.next()})}var Mf,wv;(wv=Mf||(Mf={})).Ma="default",wv.Cache="cache";class G2{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new uo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=uo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Mf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e){this.key=e}}class kI{constructor(e){this.key=e}}class X2{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=le(),this.mutatedKeys=le(),this.eu=GT(e),this.tu=new Ls(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new vv,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const m=i.get(f),I=ih(this.query,p)?p:null,P=!!m&&this.mutatedKeys.has(m.key),N=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let x=!1;m&&I?m.data.isEqual(I.data)?P!==N&&(r.track({type:3,doc:I}),x=!0):this.su(m,I)||(r.track({type:2,doc:I}),x=!0,(u&&this.eu(I,u)>0||c&&this.eu(I,c)<0)&&(l=!0)):!m&&I?(r.track({type:0,doc:I}),x=!0):m&&!I&&(r.track({type:1,doc:m}),x=!0,(u||c)&&(l=!0)),x&&(I?(o=o.add(I),s=N?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,p)=>function(I,P){const N=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J(20277,{Rt:x})}};return N(I)-N(P)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Xa.size===0&&this.current&&!i?1:0,c=u!==this.Za;return this.Za=u,o.length!==0||c?{snapshot:new uo(this.query,e.tu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new vv,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=le(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new kI(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new PI(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=le();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return uo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const jm="SyncEngine";class Y2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class J2{constructor(e){this.key=e,this.hu=!1}}class Z2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new rs(l=>QT(l),rh),this.Iu=new Map,this.Eu=new Set,this.du=new Ne(G.comparator),this.Au=new Map,this.Ru=new km,this.Vu={},this.mu=new Map,this.fu=lo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function ex(t,e,n=!0){const r=LI(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await NI(r,e,n,!0),i}async function tx(t,e){const n=LI(t);await NI(n,e,!0,!1)}async function NI(t,e,n,r){const i=await _2(t.localStore,Nn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await nx(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&TI(t.remoteStore,i),l}async function nx(t,e,n,r,i){t.pu=(p,m,I)=>async function(N,x,w,_){let A=x.view.ru(w);A.Cs&&(A=await fv(N.localStore,x.query,!1).then(({documents:v})=>x.view.ru(v,A)));const k=_&&_.targetChanges.get(x.targetId),M=_&&_.targetMismatches.get(x.targetId)!=null,U=x.view.applyChanges(A,N.isPrimaryClient,k,M);return Iv(N,x.targetId,U.au),U.snapshot}(t,p,m,I);const s=await fv(t.localStore,e,!0),o=new X2(e,s.Qs),l=o.ru(s.documents),u=El.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);Iv(t,n,c.au);const f=new Y2(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function rx(t,e,n){const r=ne(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!rh(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Lf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&xm(r.remoteStore,i.targetId),Ff(r,i.targetId)}).catch(yo)):(Ff(r,i.targetId),await Lf(r.localStore,i.targetId,!0))}async function ix(t,e){const n=ne(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),xm(n.remoteStore,r.targetId))}async function sx(t,e,n){const r=dx(t);try{const i=await function(o,l){const u=ne(o),c=Se.now(),f=l.reduce((I,P)=>I.add(P.key),le());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let P=nr(),N=le();return u.Ns.getEntries(I,f).next(x=>{P=x,P.forEach((w,_)=>{_.isValidDocument()||(N=N.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,P)).next(x=>{p=x;const w=[];for(const _ of l){const A=yO(_,p.get(_.key).overlayedDocument);A!=null&&w.push(new di(_.key,A,jT(A.value.mapValue),hn.exists(!0)))}return u.mutationQueue.addMutationBatch(I,c,w,l)}).next(x=>{m=x;const w=x.applyToLocalDocumentSet(p,N);return u.documentOverlayCache.saveOverlays(I,x.batchId,w)})}).then(()=>({batchId:m.batchId,changes:YT(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Vu[o.currentUser.toKey()];c||(c=new Ne(ae)),c=c.insert(l,u),o.Vu[o.currentUser.toKey()]=c}(r,i.batchId,n),await Tl(r,i.changes),await ch(r.remoteStore)}catch(i){const s=Fm(i,"Failed to persist write");n.reject(s)}}async function DI(t,e){const n=ne(t);try{const r=await m2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(fe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?fe(o.hu,14607):i.removedDocuments.size>0&&(fe(o.hu,42227),o.hu=!1))}),await Tl(n,r,e)}catch(r){await yo(r)}}function Tv(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ne(o);u.onlineState=l;let c=!1;u.queries.forEach((f,p)=>{for(const m of p.Sa)m.va(l)&&(c=!0)}),c&&Um(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ox(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Ne(G.comparator);o=o.insert(s,mt.newNoDocument(s,te.min()));const l=le().add(s),u=new ah(te.min(),new Map,new Ne(ae),o,l);await DI(r,u),r.du=r.du.remove(s),r.Au.delete(e),Bm(r)}else await Lf(r.localStore,e,!1).then(()=>Ff(r,e,n)).catch(yo)}async function ax(t,e){const n=ne(t),r=e.batch.batchId;try{const i=await p2(n.localStore,e);xI(n,r,null),OI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Tl(n,i)}catch(i){await yo(i)}}async function lx(t,e,n){const r=ne(t);try{const i=await function(o,l){const u=ne(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(fe(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);xI(r,e,n),OI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Tl(r,i)}catch(i){await yo(i)}}function OI(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function xI(t,e,n){const r=ne(t);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function Ff(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||VI(t,r)})}function VI(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(xm(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Bm(t))}function Iv(t,e,n){for(const r of n)r instanceof PI?(t.Ru.addReference(r.key,e),ux(t,r)):r instanceof kI?(q(jm,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||VI(t,r.key)):J(19791,{wu:r})}function ux(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(q(jm,"New document in limbo: "+n),t.Eu.add(r),Bm(t))}function Bm(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new G(Ie.fromString(e)),r=t.fu.next();t.Au.set(r,new J2(n)),t.du=t.du.insert(n,r),TI(t.remoteStore,new Lr(Nn(KT(n.path)),r,"TargetPurposeLimboResolution",Zc.ce))}}async function Tl(t,e,n){const r=ne(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=Dm.As(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,c){const f=ne(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>b.forEach(c,m=>b.forEach(m.Es,I=>f.persistence.referenceDelegate.addReference(p,m.targetId,I)).next(()=>b.forEach(m.ds,I=>f.persistence.referenceDelegate.removeReference(p,m.targetId,I)))))}catch(p){if(!_o(p))throw p;q(Om,"Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const I=f.Ms.get(m),P=I.snapshotVersion,N=I.withLastLimboFreeSnapshotVersion(P);f.Ms=f.Ms.insert(m,N)}}}(r.localStore,s))}async function cx(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){q(jm,"User change. New user:",e.toKey());const r=await _I(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new Q(F.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Tl(n,r.Ls)}}function hx(t,e){const n=ne(t),r=n.Au.get(e);if(r&&r.hu)return le().add(r.key);{let i=le();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function LI(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=DI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ox.bind(null,e),e.Pu.H_=K2.bind(null,e.eventManager),e.Pu.yu=Q2.bind(null,e.eventManager),e}function dx(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ax.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=lx.bind(null,e),e}class Ac{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=lh(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return f2(this.persistence,new c2,e.initialUser,this.serializer)}Cu(e){return new yI(Nm.mi,this.serializer)}Du(e){return new E2}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ac.provider={build:()=>new Ac};class fx extends Ac{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){fe(this.persistence.referenceDelegate instanceof Ic,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new GO(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Pt.withCacheSize(this.cacheSizeBytes):Pt.DEFAULT;return new yI(r=>Ic.mi(r,n),this.serializer)}}class Uf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Tv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=cx.bind(null,this.syncEngine),await z2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new H2}()}createDatastore(e){const n=lh(e.databaseInfo.databaseId),r=function(s){return new A2(s)}(e.databaseInfo);return function(s,o,l,u){return new k2(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new D2(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Tv(this.syncEngine,n,0),function(){return gv.v()?new gv:new w2}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,f){const p=new Z2(i,s,o,l,u,c);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ne(i);q(Ji,"RemoteStore shutting down."),s.Ea.add(5),await wl(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Uf.provider={build:()=>new Uf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):tr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si="FirestoreClient";class mx{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ft.UNAUTHENTICATED,this.clientId=ym.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q(si,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q(si,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Fm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function wd(t,e){t.asyncQueue.verifyOperationInProgress(),q(si,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await _I(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Sv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await gx(t);q(si,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>_v(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>_v(e.remoteStore,i)),t._onlineComponents=e}async function gx(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q(si,"Using user provided OfflineComponentProvider");try{await wd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===F.FAILED_PRECONDITION||i.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;io("Error using user provided cache. Falling back to memory cache: "+n),await wd(t,new Ac)}}else q(si,"Using default OfflineComponentProvider"),await wd(t,new fx(void 0));return t._offlineComponents}async function bI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q(si,"Using user provided OnlineComponentProvider"),await Sv(t,t._uninitializedComponentsProvider._online)):(q(si,"Using default OnlineComponentProvider"),await Sv(t,new Uf))),t._onlineComponents}function yx(t){return bI(t).then(e=>e.syncEngine)}async function _x(t){const e=await bI(t),n=e.eventManager;return n.onListen=ex.bind(null,e.syncEngine),n.onUnlisten=rx.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=tx.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=ix.bind(null,e.syncEngine),n}function vx(t,e,n={}){const r=new Qr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const f=new px({next:m=>{f.Nu(),o.enqueueAndForget(()=>W2(s,p)),m.fromCache&&u.source==="server"?c.reject(new Q(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new G2(l,f,{includeMetadataChanges:!0,qa:!0});return q2(s,p)}(await _x(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI="firestore.googleapis.com",Rv=!0;class Cv{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Q(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=FI,this.ssl=Rv}else this.host=e.host,this.ssl=e.ssl??Rv;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=gI;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<KO)throw new Q(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ND("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=MI(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Q(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Q(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Q(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Q(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cv(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ED;switch(r.type){case"firstParty":return new SD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Av.get(n);r&&(q("ComponentProvider","Removing Datastore"),Av.delete(n),r.terminate())}(this),Promise.resolve()}}function Ex(t,e,n,r={}){var c;t=Yi(t,hh);const i=ui(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(Yp(`https://${l}`),Jp("Firestore",!0)),s.host!==FI&&s.host!==l&&io("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!Wi(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=ft.MOCK_USER;else{f=v0(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new Q(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ft(m)}t._authCredentials=new wD(new CT(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let UI=class jI{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new jI(this.firestore,e,this._query)}};class et{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new et(this.firestore,e,this._key)}toJSON(){return{type:et._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(_l(n,et._jsonSchema))return new et(e,r||null,new G(Ie.fromString(n.referencePath)))}}et._jsonSchemaVersion="firestore/documentReference/1.0",et._jsonSchema={type:Be("string",et._jsonSchemaVersion),referencePath:Be("string")};class Gr extends UI{constructor(e,n,r){super(e,n,KT(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new et(this.firestore,null,new G(e))}withConverter(e){return new Gr(this.firestore,e,this._path)}}function BI(t,e,...n){if(t=ze(t),PT("collection","path",e),t instanceof hh){const r=Ie.fromString(e,...n);return B_(r),new Gr(t,null,r)}{if(!(t instanceof et||t instanceof Gr))throw new Q(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return B_(r),new Gr(t.firestore,null,r)}}function jf(t,e,...n){if(t=ze(t),arguments.length===1&&(e=ym.newId()),PT("doc","path",e),t instanceof hh){const r=Ie.fromString(e,...n);return j_(r),new et(t,null,new G(r))}{if(!(t instanceof et||t instanceof Gr))throw new Q(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return j_(r),new et(t.firestore,t instanceof Gr?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv="AsyncQueue";class kv{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new EI(this,"async_queue_retry"),this._c=()=>{const r=Ed();r&&q(Pv,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Ed();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Ed();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Qr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!_o(e))throw e;q(Pv,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,tr("INTERNAL UNHANDLED ERROR: ",Nv(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=Mm.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&J(47125,{Pc:Nv(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Nv(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Il extends hh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new kv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new kv(e),this._firestoreClient=void 0,await e}}}function wx(t,e){const n=typeof t=="object"?t:tm(),r=typeof t=="string"?t:e||yc,i=Kc(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=g0("firestore");s&&Ex(i,...s)}return i}function zI(t){if(t._terminated)throw new Q(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Tx(t),t._firestoreClient}function Tx(t){var r,i,s;const e=t._freezeSettings(),n=function(l,u,c,f){return new BD(l,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,MI(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new mx(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xt(lt.fromBase64String(e))}catch(n){throw new Q(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Xt(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Xt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(_l(e,Xt._jsonSchema))return Xt.fromBase64String(e.bytes)}}Xt._jsonSchemaVersion="firestore/bytes/1.0",Xt._jsonSchema={type:Be("string",Xt._jsonSchemaVersion),bytes:Be("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Q(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Q(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Q(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:On._jsonSchemaVersion}}static fromJSON(e){if(_l(e,On._jsonSchema))return new On(e.latitude,e.longitude)}}On._jsonSchemaVersion="firestore/geoPoint/1.0",On._jsonSchema={type:Be("string",On._jsonSchemaVersion),latitude:Be("number"),longitude:Be("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:xn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(_l(e,xn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new xn(e.vectorValues);throw new Q(F.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}xn._jsonSchemaVersion="firestore/vectorValue/1.0",xn._jsonSchema={type:Be("string",xn._jsonSchemaVersion),vectorValues:Be("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ix=/^__.*__$/;class Sx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new di(e,this.data,this.fieldMask,n,this.fieldTransforms):new vl(e,this.data,n,this.fieldTransforms)}}class $I{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new di(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function HI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J(40011,{Ac:t})}}class zm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new zm({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Rc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(HI(this.Ac)&&Ix.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Ax{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||lh(e)}Cc(e,n,r,i=!1){return new zm({Ac:e,methodName:n,Dc:r,path:st.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qI(t){const e=t._freezeSettings(),n=lh(t._databaseId);return new Ax(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Rx(t,e,n,r,i,s={}){const o=t.Cc(s.merge||s.mergeFields?2:0,e,n,i);Hm("Data must be an object, but it was:",o,r);const l=WI(r,o);let u,c;if(s.merge)u=new jt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const m=Bf(e,p,n);if(!o.contains(m))throw new Q(F.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);QI(f,m)||f.push(m)}u=new jt(f),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new Sx(new Dt(l),u,c)}class ph extends fh{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ph}}class $m extends fh{_toFieldTransform(e){return new fO(e.path,new Ha)}isEqual(e){return e instanceof $m}}function Cx(t,e,n,r){const i=t.Cc(1,e,n);Hm("Data must be an object, but it was:",i,r);const s=[],o=Dt.empty();hi(r,(u,c)=>{const f=qm(e,u,n);c=ze(c);const p=i.yc(f);if(c instanceof ph)s.push(f);else{const m=mh(c,p);m!=null&&(s.push(f),o.set(f,m))}});const l=new jt(s);return new $I(o,l,i.fieldTransforms)}function Px(t,e,n,r,i,s){const o=t.Cc(1,e,n),l=[Bf(e,r,n)],u=[i];if(s.length%2!=0)throw new Q(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Bf(e,s[m])),u.push(s[m+1]);const c=[],f=Dt.empty();for(let m=l.length-1;m>=0;--m)if(!QI(c,l[m])){const I=l[m];let P=u[m];P=ze(P);const N=o.yc(I);if(P instanceof ph)c.push(I);else{const x=mh(P,N);x!=null&&(c.push(I),f.set(I,x))}}const p=new jt(c);return new $I(f,p,o.fieldTransforms)}function mh(t,e){if(KI(t=ze(t)))return Hm("Unsupported field value:",e,t),WI(t,e);if(t instanceof fh)return function(r,i){if(!HI(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=mh(l,i.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ze(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return cO(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Se.fromDate(r);return{timestampValue:Tc(i.serializer,s)}}if(r instanceof Se){const s=new Se(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Tc(i.serializer,s)}}if(r instanceof On)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Xt)return{bytesValue:uI(i.serializer,r._byteString)};if(r instanceof et){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Pm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof xn)return function(o,l){return{mapValue:{fields:{[MT]:{stringValue:UT},[_c]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Sc("VectorValues must only contain numeric values.");return Sm(l.serializer,c)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${_m(r)}`)}(t,e)}function WI(t,e){const n={};return DT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hi(t,(r,i)=>{const s=mh(i,e.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function KI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Se||t instanceof On||t instanceof Xt||t instanceof et||t instanceof fh||t instanceof xn)}function Hm(t,e,n){if(!KI(n)||!kT(n)){const r=_m(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function Bf(t,e,n){if((e=ze(e))instanceof dh)return e._internalPath;if(typeof e=="string")return qm(t,e);throw Rc("Field path arguments must be of type string or ",t,!1,void 0,n)}const kx=new RegExp("[~\\*/\\[\\]]");function qm(t,e,n){if(e.search(kx)>=0)throw Rc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new dh(...e.split("."))._internalPath}catch{throw Rc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Rc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new Q(F.INVALID_ARGUMENT,l+t+u)}function QI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Nx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(XI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Nx extends GI{data(){return super.data()}}function XI(t,e){return typeof e=="string"?qm(t,e):e instanceof dh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dx(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Q(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ox{convertValue(e,n="none"){switch(ri(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ni(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw J(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return hi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[_c].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Me(o.doubleValue));return new xn(n)}convertGeoPoint(e){return new On(Me(e.latitude),Me(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=th(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ba(e));default:return null}}convertTimestamp(e){const n=ti(e);return new Se(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);fe(mI(r),9688,{name:e});const i=new za(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||tr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xx(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class fu{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class bs extends GI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new bu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(XI("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Q(F.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=bs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}bs._jsonSchemaVersion="firestore/documentSnapshot/1.0",bs._jsonSchema={type:Be("string",bs._jsonSchemaVersion),bundleSource:Be("string","DocumentSnapshot"),bundleName:Be("string"),bundle:Be("string")};class bu extends bs{data(e={}){return super.data(e)}}class Ms{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new fu(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new bu(this._firestore,this._userDataWriter,r.key,r,new fu(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Q(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new bu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new fu(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new bu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new fu(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:Vx(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Q(F.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ms._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ym.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Vx(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J(61501,{type:t})}}Ms._jsonSchemaVersion="firestore/querySnapshot/1.0",Ms._jsonSchema={type:Be("string",Ms._jsonSchemaVersion),bundleSource:Be("string","QuerySnapshot"),bundleName:Be("string"),bundle:Be("string")};class Lx extends Ox{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new et(this.firestore,null,n)}}function bx(t){t=Yi(t,UI);const e=Yi(t.firestore,Il),n=zI(e),r=new Lx(e);return Dx(t._query),vx(n,t._query).then(i=>new Ms(e,r,t,i))}function Mx(t,e,n,...r){t=Yi(t,et);const i=Yi(t.firestore,Il),s=qI(i);let o;return o=typeof(e=ze(e))=="string"||e instanceof dh?Px(s,"updateDoc",t._key,e,n,r):Cx(s,"updateDoc",t._key,e),Wm(i,[o.toMutation(t._key,hn.exists(!0))])}function Fx(t){return Wm(Yi(t.firestore,Il),[new Am(t._key,hn.none())])}function Ux(t,e){const n=Yi(t.firestore,Il),r=jf(t),i=xx(t.converter,e);return Wm(n,[Rx(qI(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,hn.exists(!1))]).then(()=>r)}function Wm(t,e){return function(r,i){const s=new Qr;return r.asyncQueue.enqueueAndForget(async()=>sx(await yx(r),i,s)),s.promise}(zI(t),e)}function jx(){return new $m("serverTimestamp")}(function(e,n=!0){(function(i){go=i})(ts),Ki(new Zr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Il(new TD(r.getProvider("auth-internal")),new AD(o,r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new Q(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new za(c.options.projectId,f)}(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Cn(b_,M_,e),Cn(b_,M_,"esm2020")})();const Bx={apiKey:"AIzaSyCeOymW84M8G8MgofFouFLR5x6yz_w3Dt4",authDomain:"settawsetteen.firebaseapp.com",projectId:"settawsetteen",storageBucket:"settawsetteen.firebasestorage.app",messagingSenderId:"494471179137",appId:"1:494471179137:web:d52be1d0bc788b67a8d680"},Km=T0(Bx),YI=tN(Km),Dv=gD(Km),Mu=wx(Km);function zx({onLoginSuccess:t}){const[e,n]=ee.useState(""),[r,i]=ee.useState(""),[s,o]=ee.useState(!1),l=async()=>{if(!e||!r)return alert("Please enter your email and password!");o(!0);try{await zP(YI,e,r),alert("✅ Logged in successfully!"),t()}catch(u){console.error(u),alert("❌ Invalid email or password!")}finally{o(!1)}};return j.jsx("div",{className:"login-container",children:j.jsxs("div",{className:"login-card",children:[j.jsx("h2",{children:"🔐 Admin Login"}),j.jsx("p",{className:"subtitle",children:"Sign in to manage file uploads"}),j.jsx("input",{type:"email",placeholder:"Email address",value:e,onChange:u=>n(u.target.value)}),j.jsx("input",{type:"password",placeholder:"Password",value:r,onChange:u=>i(u.target.value)}),j.jsx("button",{onClick:l,disabled:s,children:s?"Logging in...":"Login"})]})})}var Sl=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Pi,Ar,Fs,$v,$x=($v=class extends Sl{constructor(){super();K(this,Pi,void 0);K(this,Ar,void 0);K(this,Fs,void 0);H(this,Fs,e=>{if(typeof window<"u"&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){C(this,Ar)||this.setEventListener(C(this,Fs))}onUnsubscribe(){var e;this.hasListeners()||((e=C(this,Ar))==null||e.call(this),H(this,Ar,void 0))}setEventListener(e){var n;H(this,Fs,e),(n=C(this,Ar))==null||n.call(this),H(this,Ar,e(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(e){C(this,Pi)!==e&&(H(this,Pi,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(n=>{n(e)})}isFocused(){var e;return typeof C(this,Pi)=="boolean"?C(this,Pi):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},Pi=new WeakMap,Ar=new WeakMap,Fs=new WeakMap,$v),Qm=new $x,Hx={setTimeout:(t,e)=>setTimeout(t,e),clearTimeout:t=>clearTimeout(t),setInterval:(t,e)=>setInterval(t,e),clearInterval:t=>clearInterval(t)},Rr,np,Hv,qx=(Hv=class{constructor(){K(this,Rr,Hx);K(this,np,!1)}setTimeoutProvider(t){H(this,Rr,t)}setTimeout(t,e){return C(this,Rr).setTimeout(t,e)}clearTimeout(t){C(this,Rr).clearTimeout(t)}setInterval(t,e){return C(this,Rr).setInterval(t,e)}clearInterval(t){C(this,Rr).clearInterval(t)}},Rr=new WeakMap,np=new WeakMap,Hv),Ci=new qx;function Wx(t){setTimeout(t,0)}var Kx=typeof window>"u"||"Deno"in globalThis;function kt(){}function Qx(t,e){return typeof t=="function"?t(e):t}function zf(t){return typeof t=="number"&&t>=0&&t!==1/0}function JI(t,e){return Math.max(t+(e||0)-Date.now(),0)}function Xr(t,e){return typeof t=="function"?t(e):t}function Wt(t,e){return typeof t=="function"?t(e):t}function Ov(t,e){const{type:n="all",exact:r,fetchStatus:i,predicate:s,queryKey:o,stale:l}=t;if(o){if(r){if(e.queryHash!==Gm(o,e.options))return!1}else if(!Qa(e.queryKey,o))return!1}if(n!=="all"){const u=e.isActive();if(n==="active"&&!u||n==="inactive"&&u)return!1}return!(typeof l=="boolean"&&e.isStale()!==l||i&&i!==e.state.fetchStatus||s&&!s(e))}function xv(t,e){const{exact:n,status:r,predicate:i,mutationKey:s}=t;if(s){if(!e.options.mutationKey)return!1;if(n){if(Ka(e.options.mutationKey)!==Ka(s))return!1}else if(!Qa(e.options.mutationKey,s))return!1}return!(r&&e.state.status!==r||i&&!i(e))}function Gm(t,e){return((e==null?void 0:e.queryKeyHashFn)||Ka)(t)}function Ka(t){return JSON.stringify(t,(e,n)=>Hf(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function Qa(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?Object.keys(e).every(n=>Qa(t[n],e[n])):!1}var Gx=Object.prototype.hasOwnProperty;function ZI(t,e,n=0){if(t===e)return t;if(n>500)return e;const r=Vv(t)&&Vv(e);if(!r&&!(Hf(t)&&Hf(e)))return e;const s=(r?t:Object.keys(t)).length,o=r?e:Object.keys(e),l=o.length,u=r?new Array(l):{};let c=0;for(let f=0;f<l;f++){const p=r?f:o[f],m=t[p],I=e[p];if(m===I){u[p]=m,(r?f<s:Gx.call(t,p))&&c++;continue}if(m===null||I===null||typeof m!="object"||typeof I!="object"){u[p]=I;continue}const P=ZI(m,I,n+1);u[p]=P,P===m&&c++}return s===l&&c===s?t:u}function $f(t,e){if(!e||Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(t[n]!==e[n])return!1;return!0}function Vv(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function Hf(t){if(!Lv(t))return!1;const e=t.constructor;if(e===void 0)return!0;const n=e.prototype;return!(!Lv(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function Lv(t){return Object.prototype.toString.call(t)==="[object Object]"}function Xx(t){return new Promise(e=>{Ci.setTimeout(e,t)})}function qf(t,e,n){return typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?ZI(t,e):e}function Yx(t,e,n=0){const r=[...t,e];return n&&r.length>n?r.slice(1):r}function Jx(t,e,n=0){const r=[e,...t];return n&&r.length>n?r.slice(0,-1):r}var Xm=Symbol();function e1(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===Xm?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}function t1(t,e){return typeof t=="function"?t(...e):!!t}function Zx(t,e,n){let r=!1,i;return Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(i??(i=e()),r||(r=!0,i.aborted?n():i.addEventListener("abort",n,{once:!0})),i)}),t}var Ga=(()=>{let t=()=>Kx;return{isServer(){return t()},setIsServer(e){t=e}}})();function Wf(){let t,e;const n=new Promise((i,s)=>{t=i,e=s});n.status="pending",n.catch(()=>{});function r(i){Object.assign(n,i),delete n.resolve,delete n.reject}return n.resolve=i=>{r({status:"fulfilled",value:i}),t(i)},n.reject=i=>{r({status:"rejected",reason:i}),e(i)},n}var eV=Wx;function tV(){let t=[],e=0,n=l=>{l()},r=l=>{l()},i=eV;const s=l=>{e?t.push(l):i(()=>{n(l)})},o=()=>{const l=t;t=[],l.length&&i(()=>{r(()=>{l.forEach(u=>{n(u)})})})};return{batch:l=>{let u;e++;try{u=l()}finally{e--,e||o()}return u},batchCalls:l=>(...u)=>{s(()=>{l(...u)})},schedule:s,setNotifyFunction:l=>{n=l},setBatchNotifyFunction:l=>{r=l},setScheduler:l=>{i=l}}}var it=tV(),Us,Cr,js,qv,nV=(qv=class extends Sl{constructor(){super();K(this,Us,!0);K(this,Cr,void 0);K(this,js,void 0);H(this,js,e=>{if(typeof window<"u"&&window.addEventListener){const n=()=>e(!0),r=()=>e(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){C(this,Cr)||this.setEventListener(C(this,js))}onUnsubscribe(){var e;this.hasListeners()||((e=C(this,Cr))==null||e.call(this),H(this,Cr,void 0))}setEventListener(e){var n;H(this,js,e),(n=C(this,Cr))==null||n.call(this),H(this,Cr,e(this.setOnline.bind(this)))}setOnline(e){C(this,Us)!==e&&(H(this,Us,e),this.listeners.forEach(r=>{r(e)}))}isOnline(){return C(this,Us)}},Us=new WeakMap,Cr=new WeakMap,js=new WeakMap,qv),Cc=new nV;function rV(t){return Math.min(1e3*2**t,3e4)}function n1(t){return(t??"online")==="online"?Cc.isOnline():!0}var Kf=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function r1(t){let e=!1,n=0,r;const i=Wf(),s=()=>i.status!=="pending",o=N=>{var x;if(!s()){const w=new Kf(N);m(w),(x=t.onCancel)==null||x.call(t,w)}},l=()=>{e=!0},u=()=>{e=!1},c=()=>Qm.isFocused()&&(t.networkMode==="always"||Cc.isOnline())&&t.canRun(),f=()=>n1(t.networkMode)&&t.canRun(),p=N=>{s()||(r==null||r(),i.resolve(N))},m=N=>{s()||(r==null||r(),i.reject(N))},I=()=>new Promise(N=>{var x;r=w=>{(s()||c())&&N(w)},(x=t.onPause)==null||x.call(t)}).then(()=>{var N;r=void 0,s()||(N=t.onContinue)==null||N.call(t)}),P=()=>{if(s())return;let N;const x=n===0?t.initialPromise:void 0;try{N=x??t.fn()}catch(w){N=Promise.reject(w)}Promise.resolve(N).then(p).catch(w=>{var U;if(s())return;const _=t.retry??(Ga.isServer()?0:3),A=t.retryDelay??rV,k=typeof A=="function"?A(n,w):A,M=_===!0||typeof _=="number"&&n<_||typeof _=="function"&&_(n,w);if(e||!M){m(w);return}n++,(U=t.onFail)==null||U.call(t,n,w),Xx(k).then(()=>c()?void 0:I()).then(()=>{e?m(w):P()})})};return{promise:i,status:()=>i.status,cancel:o,continue:()=>(r==null||r(),i),cancelRetry:l,continueRetry:u,canStart:f,start:()=>(f()?P():I().then(P),i)}}var ki,Wv,i1=(Wv=class{constructor(){K(this,ki,void 0)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),zf(this.gcTime)&&H(this,ki,Ci.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(Ga.isServer()?1/0:5*60*1e3))}clearGcTimeout(){C(this,ki)!==void 0&&(Ci.clearTimeout(C(this,ki)),H(this,ki,void 0))}},ki=new WeakMap,Wv),Ni,Bs,qt,Di,Ye,Xa,Oi,Pc,s1,rn,Un,Kv,iV=(Kv=class extends i1{constructor(e){super();K(this,Pc);K(this,rn);K(this,Ni,void 0);K(this,Bs,void 0);K(this,qt,void 0);K(this,Di,void 0);K(this,Ye,void 0);K(this,Xa,void 0);K(this,Oi,void 0);H(this,Oi,!1),H(this,Xa,e.defaultOptions),this.setOptions(e.options),this.observers=[],H(this,Di,e.client),H(this,qt,C(this,Di).getQueryCache()),this.queryKey=e.queryKey,this.queryHash=e.queryHash,H(this,Ni,Mv(this.options)),this.state=e.state??C(this,Ni),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var e;return(e=C(this,Ye))==null?void 0:e.promise}setOptions(e){if(this.options={...C(this,Xa),...e},this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const n=Mv(this.options);n.data!==void 0&&(this.setState(bv(n.data,n.dataUpdatedAt)),H(this,Ni,n))}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&C(this,qt).remove(this)}setData(e,n){const r=qf(this.state.data,e,this.options);return se(this,rn,Un).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(e,n){se(this,rn,Un).call(this,{type:"setState",state:e,setStateOptions:n})}cancel(e){var r,i;const n=(r=C(this,Ye))==null?void 0:r.promise;return(i=C(this,Ye))==null||i.cancel(e),n?n.then(kt).catch(kt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}get resetState(){return C(this,Ni)}reset(){this.destroy(),this.setState(this.resetState)}isActive(){return this.observers.some(e=>Wt(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Xm||!this.isFetched()}isFetched(){return this.state.dataUpdateCount+this.state.errorUpdateCount>0}isStatic(){return this.getObserversCount()>0?this.observers.some(e=>Xr(e.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(e=0){return this.state.data===void 0?!0:e==="static"?!1:this.state.isInvalidated?!0:!JI(this.state.dataUpdatedAt,e)}onFocus(){var n;const e=this.observers.find(r=>r.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(n=C(this,Ye))==null||n.continue()}onOnline(){var n;const e=this.observers.find(r=>r.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(n=C(this,Ye))==null||n.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),C(this,qt).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(C(this,Ye)&&(C(this,Oi)||se(this,Pc,s1).call(this)?C(this,Ye).cancel({revert:!0}):C(this,Ye).cancelRetry()),this.scheduleGc()),C(this,qt).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||se(this,rn,Un).call(this,{type:"invalidate"})}async fetch(e,n){var u,c,f,p,m,I,P,N,x,w,_,A;if(this.state.fetchStatus!=="idle"&&((u=C(this,Ye))==null?void 0:u.status())!=="rejected"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(C(this,Ye))return C(this,Ye).continueRetry(),C(this,Ye).promise}if(e&&this.setOptions(e),!this.options.queryFn){const k=this.observers.find(M=>M.options.queryFn);k&&this.setOptions(k.options)}const r=new AbortController,i=k=>{Object.defineProperty(k,"signal",{enumerable:!0,get:()=>(H(this,Oi,!0),r.signal)})},s=()=>{const k=e1(this.options,n),U=(()=>{const v={client:C(this,Di),queryKey:this.queryKey,meta:this.meta};return i(v),v})();return H(this,Oi,!1),this.options.persister?this.options.persister(k,U,this):k(U)},l=(()=>{const k={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:C(this,Di),state:this.state,fetchFn:s};return i(k),k})();(c=this.options.behavior)==null||c.onFetch(l,this),H(this,Bs,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((f=l.fetchOptions)==null?void 0:f.meta))&&se(this,rn,Un).call(this,{type:"fetch",meta:(p=l.fetchOptions)==null?void 0:p.meta}),H(this,Ye,r1({initialPromise:n==null?void 0:n.initialPromise,fn:l.fetchFn,onCancel:k=>{k instanceof Kf&&k.revert&&this.setState({...C(this,Bs),fetchStatus:"idle"}),r.abort()},onFail:(k,M)=>{se(this,rn,Un).call(this,{type:"failed",failureCount:k,error:M})},onPause:()=>{se(this,rn,Un).call(this,{type:"pause"})},onContinue:()=>{se(this,rn,Un).call(this,{type:"continue"})},retry:l.options.retry,retryDelay:l.options.retryDelay,networkMode:l.options.networkMode,canRun:()=>!0}));try{const k=await C(this,Ye).start();if(k===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(k),(I=(m=C(this,qt).config).onSuccess)==null||I.call(m,k,this),(N=(P=C(this,qt).config).onSettled)==null||N.call(P,k,this.state.error,this),k}catch(k){if(k instanceof Kf){if(k.silent)return C(this,Ye).promise;if(k.revert){if(this.state.data===void 0)throw k;return this.state.data}}throw se(this,rn,Un).call(this,{type:"error",error:k}),(w=(x=C(this,qt).config).onError)==null||w.call(x,k,this),(A=(_=C(this,qt).config).onSettled)==null||A.call(_,this.state.data,k,this),k}finally{this.scheduleGc()}}},Ni=new WeakMap,Bs=new WeakMap,qt=new WeakMap,Di=new WeakMap,Ye=new WeakMap,Xa=new WeakMap,Oi=new WeakMap,Pc=new WeakSet,s1=function(){return this.state.fetchStatus==="paused"&&this.state.status==="pending"},rn=new WeakSet,Un=function(e){const n=r=>{switch(e.type){case"failed":return{...r,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...o1(r.data,this.options),fetchMeta:e.meta??null};case"success":const i={...r,...bv(e.data,e.dataUpdatedAt),dataUpdateCount:r.dataUpdateCount+1,...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return H(this,Bs,e.manual?i:void 0),i;case"error":const s=e.error;return{...r,error:s,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error",isInvalidated:!0};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...e.state}}};this.state=n(this.state),it.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),C(this,qt).notify({query:this,type:"updated",action:e})})},Kv);function o1(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:n1(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function bv(t,e){return{data:t,dataUpdatedAt:e??Date.now(),error:null,isInvalidated:!1,status:"success"}}function Mv(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=e!==void 0,r=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var Ct,ue,Ya,Et,xi,zs,zn,Pr,Ja,$s,Hs,Vi,Li,kr,qs,bi,ra,Za,Qf,el,Gf,tl,Xf,nl,Yf,rl,Jf,il,Zf,sl,ep,kc,a1,Qv,sV=(Qv=class extends Sl{constructor(e,n){super();K(this,bi);K(this,Za);K(this,el);K(this,tl);K(this,nl);K(this,rl);K(this,il);K(this,sl);K(this,kc);K(this,Ct,void 0);K(this,ue,void 0);K(this,Ya,void 0);K(this,Et,void 0);K(this,xi,void 0);K(this,zs,void 0);K(this,zn,void 0);K(this,Pr,void 0);K(this,Ja,void 0);K(this,$s,void 0);K(this,Hs,void 0);K(this,Vi,void 0);K(this,Li,void 0);K(this,kr,void 0);K(this,qs,new Set);this.options=n,H(this,Ct,e),H(this,Pr,null),H(this,zn,Wf()),this.bindMethods(),this.setOptions(n)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(C(this,ue).addObserver(this),Fv(C(this,ue),this.options)?se(this,bi,ra).call(this):this.updateResult(),se(this,nl,Yf).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return tp(C(this,ue),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return tp(C(this,ue),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,se(this,rl,Jf).call(this),se(this,il,Zf).call(this),C(this,ue).removeObserver(this)}setOptions(e){const n=this.options,r=C(this,ue);if(this.options=C(this,Ct).defaultQueryOptions(e),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof Wt(this.options.enabled,C(this,ue))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");se(this,sl,ep).call(this),C(this,ue).setOptions(this.options),n._defaulted&&!$f(this.options,n)&&C(this,Ct).getQueryCache().notify({type:"observerOptionsUpdated",query:C(this,ue),observer:this});const i=this.hasListeners();i&&Uv(C(this,ue),r,this.options,n)&&se(this,bi,ra).call(this),this.updateResult(),i&&(C(this,ue)!==r||Wt(this.options.enabled,C(this,ue))!==Wt(n.enabled,C(this,ue))||Xr(this.options.staleTime,C(this,ue))!==Xr(n.staleTime,C(this,ue)))&&se(this,Za,Qf).call(this);const s=se(this,el,Gf).call(this);i&&(C(this,ue)!==r||Wt(this.options.enabled,C(this,ue))!==Wt(n.enabled,C(this,ue))||s!==C(this,kr))&&se(this,tl,Xf).call(this,s)}getOptimisticResult(e){const n=C(this,Ct).getQueryCache().build(C(this,Ct),e),r=this.createResult(n,e);return aV(this,r)&&(H(this,Et,r),H(this,zs,this.options),H(this,xi,C(this,ue).state)),r}getCurrentResult(){return C(this,Et)}trackResult(e,n){return new Proxy(e,{get:(r,i)=>(this.trackProp(i),n==null||n(i),i==="promise"&&(this.trackProp("data"),!this.options.experimental_prefetchInRender&&C(this,zn).status==="pending"&&C(this,zn).reject(new Error("experimental_prefetchInRender feature flag is not enabled"))),Reflect.get(r,i))})}trackProp(e){C(this,qs).add(e)}getCurrentQuery(){return C(this,ue)}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){const n=C(this,Ct).defaultQueryOptions(e),r=C(this,Ct).getQueryCache().build(C(this,Ct),n);return r.fetch().then(()=>this.createResult(r,n))}fetch(e){return se(this,bi,ra).call(this,{...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),C(this,Et)))}createResult(e,n){var E;const r=C(this,ue),i=this.options,s=C(this,Et),o=C(this,xi),l=C(this,zs),c=e!==r?e.state:C(this,Ya),{state:f}=e;let p={...f},m=!1,I;if(n._optimisticResults){const T=this.hasListeners(),R=!T&&Fv(e,n),D=T&&Uv(e,r,n,i);(R||D)&&(p={...p,...o1(f.data,e.options)}),n._optimisticResults==="isRestoring"&&(p.fetchStatus="idle")}let{error:P,errorUpdatedAt:N,status:x}=p;I=p.data;let w=!1;if(n.placeholderData!==void 0&&I===void 0&&x==="pending"){let T;s!=null&&s.isPlaceholderData&&n.placeholderData===(l==null?void 0:l.placeholderData)?(T=s.data,w=!0):T=typeof n.placeholderData=="function"?n.placeholderData((E=C(this,Hs))==null?void 0:E.state.data,C(this,Hs)):n.placeholderData,T!==void 0&&(x="success",I=qf(s==null?void 0:s.data,T,n),m=!0)}if(n.select&&I!==void 0&&!w)if(s&&I===(o==null?void 0:o.data)&&n.select===C(this,Ja))I=C(this,$s);else try{H(this,Ja,n.select),I=n.select(I),I=qf(s==null?void 0:s.data,I,n),H(this,$s,I),H(this,Pr,null)}catch(T){H(this,Pr,T)}C(this,Pr)&&(P=C(this,Pr),I=C(this,$s),N=Date.now(),x="error");const _=p.fetchStatus==="fetching",A=x==="pending",k=x==="error",M=A&&_,U=I!==void 0,y={status:x,fetchStatus:p.fetchStatus,isPending:A,isSuccess:x==="success",isError:k,isInitialLoading:M,isLoading:M,data:I,dataUpdatedAt:p.dataUpdatedAt,error:P,errorUpdatedAt:N,failureCount:p.fetchFailureCount,failureReason:p.fetchFailureReason,errorUpdateCount:p.errorUpdateCount,isFetched:e.isFetched(),isFetchedAfterMount:p.dataUpdateCount>c.dataUpdateCount||p.errorUpdateCount>c.errorUpdateCount,isFetching:_,isRefetching:_&&!A,isLoadingError:k&&!U,isPaused:p.fetchStatus==="paused",isPlaceholderData:m,isRefetchError:k&&U,isStale:Ym(e,n),refetch:this.refetch,promise:C(this,zn),isEnabled:Wt(n.enabled,e)!==!1};if(this.options.experimental_prefetchInRender){const T=y.data!==void 0,R=y.status==="error"&&!T,D=$e=>{R?$e.reject(y.error):T&&$e.resolve(y.data)},S=()=>{const $e=H(this,zn,y.promise=Wf());D($e)},ve=C(this,zn);switch(ve.status){case"pending":e.queryHash===r.queryHash&&D(ve);break;case"fulfilled":(R||y.data!==ve.value)&&S();break;case"rejected":(!R||y.error!==ve.reason)&&S();break}}return y}updateResult(){const e=C(this,Et),n=this.createResult(C(this,ue),this.options);if(H(this,xi,C(this,ue).state),H(this,zs,this.options),C(this,xi).data!==void 0&&H(this,Hs,C(this,ue)),$f(n,e))return;H(this,Et,n);const r=()=>{if(!e)return!0;const{notifyOnChangeProps:i}=this.options,s=typeof i=="function"?i():i;if(s==="all"||!s&&!C(this,qs).size)return!0;const o=new Set(s??C(this,qs));return this.options.throwOnError&&o.add("error"),Object.keys(C(this,Et)).some(l=>{const u=l;return C(this,Et)[u]!==e[u]&&o.has(u)})};se(this,kc,a1).call(this,{listeners:r()})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&se(this,nl,Yf).call(this)}},Ct=new WeakMap,ue=new WeakMap,Ya=new WeakMap,Et=new WeakMap,xi=new WeakMap,zs=new WeakMap,zn=new WeakMap,Pr=new WeakMap,Ja=new WeakMap,$s=new WeakMap,Hs=new WeakMap,Vi=new WeakMap,Li=new WeakMap,kr=new WeakMap,qs=new WeakMap,bi=new WeakSet,ra=function(e){se(this,sl,ep).call(this);let n=C(this,ue).fetch(this.options,e);return e!=null&&e.throwOnError||(n=n.catch(kt)),n},Za=new WeakSet,Qf=function(){se(this,rl,Jf).call(this);const e=Xr(this.options.staleTime,C(this,ue));if(Ga.isServer()||C(this,Et).isStale||!zf(e))return;const r=JI(C(this,Et).dataUpdatedAt,e)+1;H(this,Vi,Ci.setTimeout(()=>{C(this,Et).isStale||this.updateResult()},r))},el=new WeakSet,Gf=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(C(this,ue)):this.options.refetchInterval)??!1},tl=new WeakSet,Xf=function(e){se(this,il,Zf).call(this),H(this,kr,e),!(Ga.isServer()||Wt(this.options.enabled,C(this,ue))===!1||!zf(C(this,kr))||C(this,kr)===0)&&H(this,Li,Ci.setInterval(()=>{(this.options.refetchIntervalInBackground||Qm.isFocused())&&se(this,bi,ra).call(this)},C(this,kr)))},nl=new WeakSet,Yf=function(){se(this,Za,Qf).call(this),se(this,tl,Xf).call(this,se(this,el,Gf).call(this))},rl=new WeakSet,Jf=function(){C(this,Vi)!==void 0&&(Ci.clearTimeout(C(this,Vi)),H(this,Vi,void 0))},il=new WeakSet,Zf=function(){C(this,Li)!==void 0&&(Ci.clearInterval(C(this,Li)),H(this,Li,void 0))},sl=new WeakSet,ep=function(){const e=C(this,Ct).getQueryCache().build(C(this,Ct),this.options);if(e===C(this,ue))return;const n=C(this,ue);H(this,ue,e),H(this,Ya,e.state),this.hasListeners()&&(n==null||n.removeObserver(this),e.addObserver(this))},kc=new WeakSet,a1=function(e){it.batch(()=>{e.listeners&&this.listeners.forEach(n=>{n(C(this,Et))}),C(this,Ct).getQueryCache().notify({query:C(this,ue),type:"observerResultsUpdated"})})},Qv);function oV(t,e){return Wt(e.enabled,t)!==!1&&t.state.data===void 0&&!(t.state.status==="error"&&e.retryOnMount===!1)}function Fv(t,e){return oV(t,e)||t.state.data!==void 0&&tp(t,e,e.refetchOnMount)}function tp(t,e,n){if(Wt(e.enabled,t)!==!1&&Xr(e.staleTime,t)!=="static"){const r=typeof n=="function"?n(t):n;return r==="always"||r!==!1&&Ym(t,e)}return!1}function Uv(t,e,n,r){return(t!==e||Wt(r.enabled,t)===!1)&&(!n.suspense||t.state.status!=="error")&&Ym(t,n)}function Ym(t,e){return Wt(e.enabled,t)!==!1&&t.isStaleByTime(Xr(e.staleTime,t))}function aV(t,e){return!$f(t.getCurrentResult(),e)}function jv(t){return{onFetch:(e,n)=>{var f,p,m,I,P;const r=e.options,i=(m=(p=(f=e.fetchOptions)==null?void 0:f.meta)==null?void 0:p.fetchMore)==null?void 0:m.direction,s=((I=e.state.data)==null?void 0:I.pages)||[],o=((P=e.state.data)==null?void 0:P.pageParams)||[];let l={pages:[],pageParams:[]},u=0;const c=async()=>{let N=!1;const x=A=>{Zx(A,()=>e.signal,()=>N=!0)},w=e1(e.options,e.fetchOptions),_=async(A,k,M)=>{if(N)return Promise.reject();if(k==null&&A.pages.length)return Promise.resolve(A);const v=(()=>{const R={client:e.client,queryKey:e.queryKey,pageParam:k,direction:M?"backward":"forward",meta:e.options.meta};return x(R),R})(),y=await w(v),{maxPages:E}=e.options,T=M?Jx:Yx;return{pages:T(A.pages,y,E),pageParams:T(A.pageParams,k,E)}};if(i&&s.length){const A=i==="backward",k=A?lV:Bv,M={pages:s,pageParams:o},U=k(r,M);l=await _(M,U,A)}else{const A=t??s.length;do{const k=u===0?o[0]??r.initialPageParam:Bv(r,l);if(u>0&&k==null)break;l=await _(l,k),u++}while(u<A)}return l};e.options.persister?e.fetchFn=()=>{var N,x;return(x=(N=e.options).persister)==null?void 0:x.call(N,c,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},n)}:e.fetchFn=c}}}function Bv(t,{pages:e,pageParams:n}){const r=e.length-1;return e.length>0?t.getNextPageParam(e[r],e,n[r],n):void 0}function lV(t,{pages:e,pageParams:n}){var r;return e.length>0?(r=t.getPreviousPageParam)==null?void 0:r.call(t,e[0],e,n[0],n):void 0}var ol,En,dt,Mi,wn,mr,Gv,uV=(Gv=class extends i1{constructor(e){super();K(this,wn);K(this,ol,void 0);K(this,En,void 0);K(this,dt,void 0);K(this,Mi,void 0);H(this,ol,e.client),this.mutationId=e.mutationId,H(this,dt,e.mutationCache),H(this,En,[]),this.state=e.state||cV(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){C(this,En).includes(e)||(C(this,En).push(e),this.clearGcTimeout(),C(this,dt).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){H(this,En,C(this,En).filter(n=>n!==e)),this.scheduleGc(),C(this,dt).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){C(this,En).length||(this.state.status==="pending"?this.scheduleGc():C(this,dt).remove(this))}continue(){var e;return((e=C(this,Mi))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var o,l,u,c,f,p,m,I,P,N,x,w,_,A,k,M,U,v;const n=()=>{se(this,wn,mr).call(this,{type:"continue"})},r={client:C(this,ol),meta:this.options.meta,mutationKey:this.options.mutationKey};H(this,Mi,r1({fn:()=>this.options.mutationFn?this.options.mutationFn(e,r):Promise.reject(new Error("No mutationFn found")),onFail:(y,E)=>{se(this,wn,mr).call(this,{type:"failed",failureCount:y,error:E})},onPause:()=>{se(this,wn,mr).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>C(this,dt).canRun(this)}));const i=this.state.status==="pending",s=!C(this,Mi).canStart();try{if(i)n();else{se(this,wn,mr).call(this,{type:"pending",variables:e,isPaused:s}),C(this,dt).config.onMutate&&await C(this,dt).config.onMutate(e,this,r);const E=await((l=(o=this.options).onMutate)==null?void 0:l.call(o,e,r));E!==this.state.context&&se(this,wn,mr).call(this,{type:"pending",context:E,variables:e,isPaused:s})}const y=await C(this,Mi).start();return await((c=(u=C(this,dt).config).onSuccess)==null?void 0:c.call(u,y,e,this.state.context,this,r)),await((p=(f=this.options).onSuccess)==null?void 0:p.call(f,y,e,this.state.context,r)),await((I=(m=C(this,dt).config).onSettled)==null?void 0:I.call(m,y,null,this.state.variables,this.state.context,this,r)),await((N=(P=this.options).onSettled)==null?void 0:N.call(P,y,null,e,this.state.context,r)),se(this,wn,mr).call(this,{type:"success",data:y}),y}catch(y){try{await((w=(x=C(this,dt).config).onError)==null?void 0:w.call(x,y,e,this.state.context,this,r))}catch(E){Promise.reject(E)}try{await((A=(_=this.options).onError)==null?void 0:A.call(_,y,e,this.state.context,r))}catch(E){Promise.reject(E)}try{await((M=(k=C(this,dt).config).onSettled)==null?void 0:M.call(k,void 0,y,this.state.variables,this.state.context,this,r))}catch(E){Promise.reject(E)}try{await((v=(U=this.options).onSettled)==null?void 0:v.call(U,void 0,y,e,this.state.context,r))}catch(E){Promise.reject(E)}throw se(this,wn,mr).call(this,{type:"error",error:y}),y}finally{C(this,dt).runNext(this)}}},ol=new WeakMap,En=new WeakMap,dt=new WeakMap,Mi=new WeakMap,wn=new WeakSet,mr=function(e){const n=r=>{switch(e.type){case"failed":return{...r,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...r,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:e.error,failureCount:r.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=n(this.state),it.batch(()=>{C(this,En).forEach(r=>{r.onMutationUpdate(e)}),C(this,dt).notify({mutation:this,type:"updated",action:e})})},Gv);function cV(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var $n,sn,al,Xv,hV=(Xv=class extends Sl{constructor(e={}){super();K(this,$n,void 0);K(this,sn,void 0);K(this,al,void 0);this.config=e,H(this,$n,new Set),H(this,sn,new Map),H(this,al,0)}build(e,n,r){const i=new uV({client:e,mutationCache:this,mutationId:++Bl(this,al)._,options:e.defaultMutationOptions(n),state:r});return this.add(i),i}add(e){C(this,$n).add(e);const n=pu(e);if(typeof n=="string"){const r=C(this,sn).get(n);r?r.push(e):C(this,sn).set(n,[e])}this.notify({type:"added",mutation:e})}remove(e){if(C(this,$n).delete(e)){const n=pu(e);if(typeof n=="string"){const r=C(this,sn).get(n);if(r)if(r.length>1){const i=r.indexOf(e);i!==-1&&r.splice(i,1)}else r[0]===e&&C(this,sn).delete(n)}}this.notify({type:"removed",mutation:e})}canRun(e){const n=pu(e);if(typeof n=="string"){const r=C(this,sn).get(n),i=r==null?void 0:r.find(s=>s.state.status==="pending");return!i||i===e}else return!0}runNext(e){var r;const n=pu(e);if(typeof n=="string"){const i=(r=C(this,sn).get(n))==null?void 0:r.find(s=>s!==e&&s.state.isPaused);return(i==null?void 0:i.continue())??Promise.resolve()}else return Promise.resolve()}clear(){it.batch(()=>{C(this,$n).forEach(e=>{this.notify({type:"removed",mutation:e})}),C(this,$n).clear(),C(this,sn).clear()})}getAll(){return Array.from(C(this,$n))}find(e){const n={exact:!0,...e};return this.getAll().find(r=>xv(n,r))}findAll(e={}){return this.getAll().filter(n=>xv(e,n))}notify(e){it.batch(()=>{this.listeners.forEach(n=>{n(e)})})}resumePausedMutations(){const e=this.getAll().filter(n=>n.state.isPaused);return it.batch(()=>Promise.all(e.map(n=>n.continue().catch(kt))))}},$n=new WeakMap,sn=new WeakMap,al=new WeakMap,Xv);function pu(t){var e;return(e=t.options.scope)==null?void 0:e.id}var Tn,Yv,dV=(Yv=class extends Sl{constructor(e={}){super();K(this,Tn,void 0);this.config=e,H(this,Tn,new Map)}build(e,n,r){const i=n.queryKey,s=n.queryHash??Gm(i,n);let o=this.get(s);return o||(o=new iV({client:e,queryKey:i,queryHash:s,options:e.defaultQueryOptions(n),state:r,defaultOptions:e.getQueryDefaults(i)}),this.add(o)),o}add(e){C(this,Tn).has(e.queryHash)||(C(this,Tn).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const n=C(this,Tn).get(e.queryHash);n&&(e.destroy(),n===e&&C(this,Tn).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){it.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return C(this,Tn).get(e)}getAll(){return[...C(this,Tn).values()]}find(e){const n={exact:!0,...e};return this.getAll().find(r=>Ov(n,r))}findAll(e={}){const n=this.getAll();return Object.keys(e).length>0?n.filter(r=>Ov(e,r)):n}notify(e){it.batch(()=>{this.listeners.forEach(n=>{n(e)})})}onFocus(){it.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){it.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},Tn=new WeakMap,Yv),Oe,Nr,Dr,Ws,Ks,Or,Qs,Gs,Jv,fV=(Jv=class{constructor(t={}){K(this,Oe,void 0);K(this,Nr,void 0);K(this,Dr,void 0);K(this,Ws,void 0);K(this,Ks,void 0);K(this,Or,void 0);K(this,Qs,void 0);K(this,Gs,void 0);H(this,Oe,t.queryCache||new dV),H(this,Nr,t.mutationCache||new hV),H(this,Dr,t.defaultOptions||{}),H(this,Ws,new Map),H(this,Ks,new Map),H(this,Or,0)}mount(){Bl(this,Or)._++,C(this,Or)===1&&(H(this,Qs,Qm.subscribe(async t=>{t&&(await this.resumePausedMutations(),C(this,Oe).onFocus())})),H(this,Gs,Cc.subscribe(async t=>{t&&(await this.resumePausedMutations(),C(this,Oe).onOnline())})))}unmount(){var t,e;Bl(this,Or)._--,C(this,Or)===0&&((t=C(this,Qs))==null||t.call(this),H(this,Qs,void 0),(e=C(this,Gs))==null||e.call(this),H(this,Gs,void 0))}isFetching(t){return C(this,Oe).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return C(this,Nr).findAll({...t,status:"pending"}).length}getQueryData(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=C(this,Oe).get(e.queryHash))==null?void 0:n.state.data}ensureQueryData(t){const e=this.defaultQueryOptions(t),n=C(this,Oe).build(this,e),r=n.state.data;return r===void 0?this.fetchQuery(t):(t.revalidateIfStale&&n.isStaleByTime(Xr(e.staleTime,n))&&this.prefetchQuery(e),Promise.resolve(r))}getQueriesData(t){return C(this,Oe).findAll(t).map(({queryKey:e,state:n})=>{const r=n.data;return[e,r]})}setQueryData(t,e,n){const r=this.defaultQueryOptions({queryKey:t}),i=C(this,Oe).get(r.queryHash),s=i==null?void 0:i.state.data,o=Qx(e,s);if(o!==void 0)return C(this,Oe).build(this,r).setData(o,{...n,manual:!0})}setQueriesData(t,e,n){return it.batch(()=>C(this,Oe).findAll(t).map(({queryKey:r})=>[r,this.setQueryData(r,e,n)]))}getQueryState(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=C(this,Oe).get(e.queryHash))==null?void 0:n.state}removeQueries(t){const e=C(this,Oe);it.batch(()=>{e.findAll(t).forEach(n=>{e.remove(n)})})}resetQueries(t,e){const n=C(this,Oe);return it.batch(()=>(n.findAll(t).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...t},e)))}cancelQueries(t,e={}){const n={revert:!0,...e},r=it.batch(()=>C(this,Oe).findAll(t).map(i=>i.cancel(n)));return Promise.all(r).then(kt).catch(kt)}invalidateQueries(t,e={}){return it.batch(()=>(C(this,Oe).findAll(t).forEach(n=>{n.invalidate()}),(t==null?void 0:t.refetchType)==="none"?Promise.resolve():this.refetchQueries({...t,type:(t==null?void 0:t.refetchType)??(t==null?void 0:t.type)??"active"},e)))}refetchQueries(t,e={}){const n={...e,cancelRefetch:e.cancelRefetch??!0},r=it.batch(()=>C(this,Oe).findAll(t).filter(i=>!i.isDisabled()&&!i.isStatic()).map(i=>{let s=i.fetch(void 0,n);return n.throwOnError||(s=s.catch(kt)),i.state.fetchStatus==="paused"?Promise.resolve():s}));return Promise.all(r).then(kt)}fetchQuery(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const n=C(this,Oe).build(this,e);return n.isStaleByTime(Xr(e.staleTime,n))?n.fetch(e):Promise.resolve(n.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(kt).catch(kt)}fetchInfiniteQuery(t){return t.behavior=jv(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(kt).catch(kt)}ensureInfiniteQueryData(t){return t.behavior=jv(t.pages),this.ensureQueryData(t)}resumePausedMutations(){return Cc.isOnline()?C(this,Nr).resumePausedMutations():Promise.resolve()}getQueryCache(){return C(this,Oe)}getMutationCache(){return C(this,Nr)}getDefaultOptions(){return C(this,Dr)}setDefaultOptions(t){H(this,Dr,t)}setQueryDefaults(t,e){C(this,Ws).set(Ka(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...C(this,Ws).values()],n={};return e.forEach(r=>{Qa(t,r.queryKey)&&Object.assign(n,r.defaultOptions)}),n}setMutationDefaults(t,e){C(this,Ks).set(Ka(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...C(this,Ks).values()],n={};return e.forEach(r=>{Qa(t,r.mutationKey)&&Object.assign(n,r.defaultOptions)}),n}defaultQueryOptions(t){if(t._defaulted)return t;const e={...C(this,Dr).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=Gm(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.queryFn===Xm&&(e.enabled=!1),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...C(this,Dr).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){C(this,Oe).clear(),C(this,Nr).clear()}},Oe=new WeakMap,Nr=new WeakMap,Dr=new WeakMap,Ws=new WeakMap,Ks=new WeakMap,Or=new WeakMap,Qs=new WeakMap,Gs=new WeakMap,Jv),l1=ee.createContext(void 0),u1=t=>{const e=ee.useContext(l1);if(t)return t;if(!e)throw new Error("No QueryClient set, use QueryClientProvider to set one");return e},pV=({client:t,children:e})=>(ee.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),j.jsx(l1.Provider,{value:t,children:e})),c1=ee.createContext(!1),mV=()=>ee.useContext(c1);c1.Provider;function gV(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}var yV=ee.createContext(gV()),_V=()=>ee.useContext(yV),vV=(t,e,n)=>{const r=n!=null&&n.state.error&&typeof t.throwOnError=="function"?t1(t.throwOnError,[n.state.error,n]):t.throwOnError;(t.suspense||t.experimental_prefetchInRender||r)&&(e.isReset()||(t.retryOnMount=!1))},EV=t=>{ee.useEffect(()=>{t.clearReset()},[t])},wV=({result:t,errorResetBoundary:e,throwOnError:n,query:r,suspense:i})=>t.isError&&!e.isReset()&&!t.isFetching&&r&&(i&&t.data===void 0||t1(n,[t.error,r])),TV=t=>{if(t.suspense){const n=i=>i==="static"?i:Math.max(i??1e3,1e3),r=t.staleTime;t.staleTime=typeof r=="function"?(...i)=>n(r(...i)):n(r),typeof t.gcTime=="number"&&(t.gcTime=Math.max(t.gcTime,1e3))}},IV=(t,e)=>t.isLoading&&t.isFetching&&!e,SV=(t,e)=>(t==null?void 0:t.suspense)&&e.isPending,zv=(t,e,n)=>e.fetchOptimistic(t).catch(()=>{n.clearReset()});function AV(t,e,n){var m,I,P,N;const r=mV(),i=_V(),s=u1(n),o=s.defaultQueryOptions(t);(I=(m=s.getDefaultOptions().queries)==null?void 0:m._experimental_beforeQuery)==null||I.call(m,o);const l=s.getQueryCache().get(o.queryHash);o._optimisticResults=r?"isRestoring":"optimistic",TV(o),vV(o,i,l),EV(i);const u=!s.getQueryCache().get(o.queryHash),[c]=ee.useState(()=>new e(s,o)),f=c.getOptimisticResult(o),p=!r&&t.subscribed!==!1;if(ee.useSyncExternalStore(ee.useCallback(x=>{const w=p?c.subscribe(it.batchCalls(x)):kt;return c.updateResult(),w},[c,p]),()=>c.getCurrentResult(),()=>c.getCurrentResult()),ee.useEffect(()=>{c.setOptions(o)},[o,c]),SV(o,f))throw zv(o,c,i);if(wV({result:f,errorResetBoundary:i,throwOnError:o.throwOnError,query:l,suspense:o.suspense}))throw f.error;if((N=(P=s.getDefaultOptions().queries)==null?void 0:P._experimental_afterQuery)==null||N.call(P,o,f),o.experimental_prefetchInRender&&!Ga.isServer()&&IV(f,r)){const x=u?zv(o,c,i):l==null?void 0:l.promise;x==null||x.catch(kt).finally(()=>{c.updateResult()})}return o.notifyOnChangeProps?f:c.trackResult(f)}function RV(t,e){return AV(t,sV,e)}const CV=t=>{if(!t)return"";const n=String(t).toLowerCase().replace(/\s/g,"").match(/(\d{2,4})/);if(!n)return"";let r=Number(n[1]);return r<100&&(r+=r<50?2e3:1900),`${r}/${String(r+1).slice(-2)}`},PV=async()=>(await bx(BI(Mu,"products"))).docs.map(e=>{const n=e.data();return{id:e.id,...n,type:n.Type||"",league:n.kitType==="NATIONAL KITS"?n.continent:n.league,club:n.name,season:CV(n.season)}});function kV(){return RV({queryKey:["products"],queryFn:PV,staleTime:1e3*60*5})}function NV(){const t=u1(),{data:e=[]}=kV(),[n,r]=ee.useState(""),[i,s]=ee.useState(""),[o,l]=ee.useState(""),[u,c]=ee.useState([""]),[f,p]=ee.useState(""),[m,I]=ee.useState(""),[P,N]=ee.useState(""),[x,w]=ee.useState(""),[_,A]=ee.useState(""),[k,M]=ee.useState(""),[U,v]=ee.useState(""),[y,E]=ee.useState(""),[T,R]=ee.useState(""),[D,S]=ee.useState(""),[ve,$e]=ee.useState([]),[ir,sr]=ee.useState(!1),[$,X]=ee.useState(!1),[Z,ge]=ee.useState(null),[Ee,Mn]=ee.useState("");ee.useEffect(()=>{["REGULAR KITS","NATIONAL KITS","MYSTERY BOX"].includes(_)||M("")},[_]);const At=ee.useMemo(()=>[...new Set(e.map(L=>L.brand).filter(Boolean))].sort(),[e]),Fn=ee.useMemo(()=>[...new Set(e.map(L=>L.league).filter(Boolean))].sort(),[e]),Rt=ee.useMemo(()=>[...new Set(e.map(L=>L.name).filter(Boolean))].sort(),[e]),pn=["Europe","South America","North America","Africa","Asia","Oceania"],Eo=ee.useMemo(()=>U?[...new Set(e.filter(L=>L.continent===U).map(L=>L.name).filter(Boolean))]:[],[e,U]),Al=ee.useMemo(()=>!P||P==="__new"?Rt:[...new Set(e.filter(L=>L.league===P).map(L=>L.name).filter(Boolean))],[e,P,Rt]),Rl=ee.useMemo(()=>{const L=Ee.toLowerCase();return e.filter(de=>{var He,me,be;return((He=de.title)==null?void 0:He.toLowerCase().includes(L))||((me=de.brand)==null?void 0:me.toLowerCase().includes(L))||((be=de.Type)==null?void 0:be.toLowerCase().includes(L))||String(de.season).includes(L)})},[e,Ee]),gh=()=>{r(""),s(""),l(""),c([""]),p(""),I(""),N(""),w(""),A(""),M(""),v(""),E(""),R(""),S(""),$e([]),ge(null)},Cl=async()=>{const L=[];for(const de of ve){const He=V_(Dv,`products/${Date.now()}_${de.name}`);await fD(He,de);const me=await pD(He);L.push(me)}return L},Pl=L=>{const de=L.match(/^(\d{4})/);return de?Number(de[1])<2015:!1},wo=async()=>{if(!YI.currentUser)return alert("Login required");if(!n||!o||!m)return alert("Fill all fields");if(_==="NATIONAL KITS"&&!x)return alert("Choose country");if(_!=="NATIONAL KITS"&&!P)return alert("Choose league");sr(!0);try{let L=[];ve.length&&(L=await Cl());const de=m==="__new"?y:m,He=P==="__new"?T:P,me=x==="__new"?D:x,be=o.trim(),fi={title:n,description:i,season:be,isClassic:Pl(be),price:Number(f),features:u.filter(or=>or.trim()),brand:de,league:He,name:me,continent:U||"",kitType:_,Type:k||""};if(Z){const or=e.find(pi=>pi.id===Z);await Mx(jf(Mu,"products",Z),{...fi,images:L.length>0?L:(or==null?void 0:or.images)||[]}),alert("Updated ✔")}else await Ux(BI(Mu,"products"),{...fi,images:L,imagesLabels:L.map((or,pi)=>["Front","Back","Side","Close-up"][pi]||`View ${pi+1}`),dateAdded:jx()}),alert("Added ✔");t.invalidateQueries(["products"]),gh()}catch(L){console.error(L),alert("Error")}sr(!1)},kl=async L=>{var de;if(window.confirm("Delete this item?"))try{if(await Fx(jf(Mu,"products",L.id)),(de=L.images)!=null&&de.length)for(const He of L.images)await mD(V_(Dv,He)).catch(()=>{});t.invalidateQueries(["products"]),alert("Deleted ✔")}catch(He){console.error(He),alert("Delete failed")}},yh=L=>{var de;r(L.title||""),s(L.description||""),l(L.season||""),p(L.price||""),c((de=L.features)!=null&&de.length?L.features:[""]),I(L.brand||""),N(L.league||""),w(L.name||""),A(L.kitType||""),M(L.Type||""),v(L.continent||""),$e([]),ge(L.id),X(!1)};return j.jsxs("div",{className:"upload-container",children:[j.jsxs("div",{className:"upload-card",children:[j.jsx("h2",{children:Z?"Edit Product":"Add Product"}),j.jsx("input",{placeholder:"Title",value:n,onChange:L=>r(L.target.value)}),j.jsx("input",{placeholder:"Description",value:i,onChange:L=>s(L.target.value)}),j.jsx("input",{placeholder:"Season",value:o,onChange:L=>l(L.target.value)}),j.jsx("input",{type:"number",placeholder:"Price",value:f,onChange:L=>p(L.target.value)}),j.jsx("label",{children:"Features"}),u.map((L,de)=>j.jsxs("div",{children:[j.jsx("input",{value:L,placeholder:`Feature ${de+1}`,onChange:He=>{const me=[...u];me[de]=He.target.value,c(me)}}),u.length>1&&j.jsx("button",{type:"button",onClick:()=>c(u.filter((He,me)=>me!==de)),children:"✕"})]},de)),j.jsx("button",{type:"button",onClick:()=>c([...u,""]),children:"+ Add Feature"}),j.jsx("label",{children:"Kit Type"}),j.jsxs("select",{value:_,onChange:L=>A(L.target.value),children:[j.jsx("option",{value:"",children:"Select Kit Type"}),j.jsx("option",{value:"REGULAR KITS",children:"REGULAR KITS"}),j.jsx("option",{value:"NATIONAL KITS",children:"NATIONAL KITS"}),j.jsx("option",{value:"MYSTERY BOX",children:"MYSTERY BOX"})]}),_==="NATIONAL KITS"?j.jsxs(j.Fragment,{children:[j.jsx("label",{children:"Continent"}),j.jsxs("select",{value:U,onChange:L=>v(L.target.value),children:[j.jsx("option",{value:"",children:"Select Continent"}),pn.map(L=>j.jsx("option",{children:L},L))]}),j.jsx("label",{children:"Country"}),j.jsxs("select",{value:x,onChange:L=>w(L.target.value),children:[j.jsx("option",{value:"",children:"Select Country"}),Eo.map(L=>j.jsx("option",{children:L},L)),j.jsx("option",{value:"__new",children:"+ Add New Country"})]}),x==="__new"&&j.jsx("input",{placeholder:"New Country",value:D,onChange:L=>S(L.target.value)})]}):j.jsxs(j.Fragment,{children:[j.jsx("label",{children:"League"}),j.jsxs("select",{value:P,onChange:L=>{N(L.target.value),w("")},children:[j.jsx("option",{value:"",children:"Select League"}),Fn.map(L=>j.jsx("option",{children:L},L)),j.jsx("option",{value:"__new",children:"+ Add New League"})]}),P==="__new"&&j.jsx("input",{placeholder:"New League",value:T,onChange:L=>R(L.target.value)}),j.jsx("label",{children:"Club"}),j.jsxs("select",{value:x,onChange:L=>w(L.target.value),children:[j.jsx("option",{value:"",children:"Select Club"}),Al.map(L=>j.jsx("option",{children:L},L)),j.jsx("option",{value:"__new",children:"+ Add New Club"})]}),x==="__new"&&j.jsx("input",{placeholder:"New Club",value:D,onChange:L=>S(L.target.value)})]}),j.jsx("label",{children:"Brand"}),j.jsxs("select",{value:m,onChange:L=>I(L.target.value),children:[j.jsx("option",{value:"",children:"Select Brand"}),At.map(L=>j.jsx("option",{children:L},L)),j.jsx("option",{value:"__new",children:"+ Add New Brand"})]}),m==="__new"&&j.jsx("input",{placeholder:"New Brand",value:y,onChange:L=>E(L.target.value)}),["REGULAR KITS","NATIONAL KITS","MYSTERY BOX"].includes(_)&&j.jsxs(j.Fragment,{children:[j.jsx("label",{children:"Type"}),j.jsxs("select",{value:k,onChange:L=>M(L.target.value),children:[j.jsx("option",{value:"",children:"Select Type"}),j.jsx("option",{children:"Home"}),j.jsx("option",{children:"Away"}),j.jsx("option",{children:"Third"}),j.jsx("option",{children:"Fourth"}),j.jsx("option",{children:"Goalkeeper"}),j.jsx("option",{children:"Special"}),j.jsx("option",{children:"Winter"}),j.jsx("option",{children:"Training"})]})]}),j.jsx("input",{type:"file",multiple:!0,accept:"image/*",onChange:L=>$e(Array.from(L.target.files||[]))}),j.jsx("button",{disabled:ir,onClick:wo,children:ir?"Saving...":Z?"Update Product":"Add Product"}),j.jsx("button",{onClick:()=>X(!0),children:"Show Products"})]}),$&&j.jsx("div",{className:"overlay",children:j.jsxs("div",{className:"overlay-content",children:[j.jsx("button",{className:"close-btn",onClick:()=>X(!1),children:"X"}),j.jsx("h3",{children:"All Products"}),j.jsx("input",{className:"overlay-search",placeholder:"Search",value:Ee,onChange:L=>Mn(L.target.value)}),j.jsx("div",{className:"products-grid",children:Rl.map(L=>{var de;return j.jsxs("div",{className:"product-card",children:[j.jsx("img",{src:(de=L.images)==null?void 0:de[0],alt:L.title}),j.jsx("h4",{children:L.title}),j.jsx("p",{children:L.season}),j.jsx("button",{onClick:()=>kl(L),children:"Delete"}),j.jsx("button",{onClick:()=>yh(L),children:"Edit"})]},L.id)})})]})})]})}function DV(){const[t,e]=ee.useState(!1);return j.jsx(j.Fragment,{children:t?j.jsx(NV,{}):j.jsx(zx,{onLoginSuccess:()=>e(!0)})})}const OV=new fV({defaultOptions:{queries:{staleTime:1e3*60*5,gcTime:1e3*60*30,refetchOnWindowFocus:!1,retry:1}}});h0(document.getElementById("root")).render(j.jsx(J1.StrictMode,{children:j.jsx(pV,{client:OV,children:j.jsx(DV,{})})}));
