(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Pv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var M={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xi=Symbol.for("react.element"),xv=Symbol.for("react.portal"),Av=Symbol.for("react.fragment"),Ov=Symbol.for("react.strict_mode"),Nv=Symbol.for("react.profiler"),bv=Symbol.for("react.provider"),Lv=Symbol.for("react.context"),Dv=Symbol.for("react.forward_ref"),Mv=Symbol.for("react.suspense"),$v=Symbol.for("react.memo"),Uv=Symbol.for("react.lazy"),sd=Symbol.iterator;function zv(e){return e===null||typeof e!="object"?null:(e=sd&&e[sd]||e["@@iterator"],typeof e=="function"?e:null)}var kh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Eh=Object.assign,Ih={};function Vr(e,t,n){this.props=e,this.context=t,this.refs=Ih,this.updater=n||kh}Vr.prototype.isReactComponent={};Vr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Vr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Th(){}Th.prototype=Vr.prototype;function bu(e,t,n){this.props=e,this.context=t,this.refs=Ih,this.updater=n||kh}var Lu=bu.prototype=new Th;Lu.constructor=bu;Eh(Lu,Vr.prototype);Lu.isPureReactComponent=!0;var ad=Array.isArray,Ch=Object.prototype.hasOwnProperty,Du={current:null},Rh={key:!0,ref:!0,__self:!0,__source:!0};function Ph(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Ch.call(t,r)&&!Rh.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Xi,type:e,key:o,ref:s,props:i,_owner:Du.current}}function Fv(e,t){return{$$typeof:Xi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Mu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xi}function Bv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ld=/\/+/g;function Ma(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Bv(""+e.key):t.toString(36)}function Uo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Xi:case xv:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Ma(s,0):r,ad(i)?(n="",e!=null&&(n=e.replace(ld,"$&/")+"/"),Uo(i,t,n,"",function(u){return u})):i!=null&&(Mu(i)&&(i=Fv(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(ld,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",ad(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Ma(o,a);s+=Uo(o,t,n,l,i)}else if(l=zv(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Ma(o,a++),s+=Uo(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function go(e,t,n){if(e==null)return e;var r=[],i=0;return Uo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function jv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var He={current:null},zo={transition:null},Hv={ReactCurrentDispatcher:He,ReactCurrentBatchConfig:zo,ReactCurrentOwner:Du};G.Children={map:go,forEach:function(e,t,n){go(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return go(e,function(){t++}),t},toArray:function(e){return go(e,function(t){return t})||[]},only:function(e){if(!Mu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};G.Component=Vr;G.Fragment=Av;G.Profiler=Nv;G.PureComponent=bu;G.StrictMode=Ov;G.Suspense=Mv;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hv;G.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Eh({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Du.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Ch.call(t,l)&&!Rh.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Xi,type:e.type,key:i,ref:o,props:r,_owner:s}};G.createContext=function(e){return e={$$typeof:Lv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:bv,_context:e},e.Consumer=e};G.createElement=Ph;G.createFactory=function(e){var t=Ph.bind(null,e);return t.type=e,t};G.createRef=function(){return{current:null}};G.forwardRef=function(e){return{$$typeof:Dv,render:e}};G.isValidElement=Mu;G.lazy=function(e){return{$$typeof:Uv,_payload:{_status:-1,_result:e},_init:jv}};G.memo=function(e,t){return{$$typeof:$v,type:e,compare:t===void 0?null:t}};G.startTransition=function(e){var t=zo.transition;zo.transition={};try{e()}finally{zo.transition=t}};G.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};G.useCallback=function(e,t){return He.current.useCallback(e,t)};G.useContext=function(e){return He.current.useContext(e)};G.useDebugValue=function(){};G.useDeferredValue=function(e){return He.current.useDeferredValue(e)};G.useEffect=function(e,t){return He.current.useEffect(e,t)};G.useId=function(){return He.current.useId()};G.useImperativeHandle=function(e,t,n){return He.current.useImperativeHandle(e,t,n)};G.useInsertionEffect=function(e,t){return He.current.useInsertionEffect(e,t)};G.useLayoutEffect=function(e,t){return He.current.useLayoutEffect(e,t)};G.useMemo=function(e,t){return He.current.useMemo(e,t)};G.useReducer=function(e,t,n){return He.current.useReducer(e,t,n)};G.useRef=function(e){return He.current.useRef(e)};G.useState=function(e){return He.current.useState(e)};G.useSyncExternalStore=function(e,t,n){return He.current.useSyncExternalStore(e,t,n)};G.useTransition=function(){return He.current.useTransition()};G.version="18.2.0";(function(e){e.exports=G})(M);const Kt=Pv(M.exports);var Tl={},xh={exports:{}},ot={},Ah={exports:{}},Oh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,U){var z=T.length;T.push(U);e:for(;0<z;){var J=z-1>>>1,x=T[J];if(0<i(x,U))T[J]=U,T[z]=x,z=J;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var U=T[0],z=T.pop();if(z!==U){T[0]=z;e:for(var J=0,x=T.length,O=x>>>1;J<O;){var N=2*(J+1)-1,F=T[N],w=N+1,W=T[w];if(0>i(F,z))w<x&&0>i(W,F)?(T[J]=W,T[w]=z,J=w):(T[J]=F,T[N]=z,J=N);else if(w<x&&0>i(W,z))T[J]=W,T[w]=z,J=w;else break e}}return U}function i(T,U){var z=T.sortIndex-U.sortIndex;return z!==0?z:T.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],h=1,p=null,m=3,_=!1,y=!1,g=!1,S=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(T){for(var U=n(u);U!==null;){if(U.callback===null)r(u);else if(U.startTime<=T)r(u),U.sortIndex=U.expirationTime,t(l,U);else break;U=n(u)}}function v(T){if(g=!1,d(T),!y)if(n(l)!==null)y=!0,V(k);else{var U=n(u);U!==null&&Q(v,U.startTime-T)}}function k(T,U){y=!1,g&&(g=!1,f(I),I=-1),_=!0;var z=m;try{for(d(U),p=n(l);p!==null&&(!(p.expirationTime>U)||T&&!X());){var J=p.callback;if(typeof J=="function"){p.callback=null,m=p.priorityLevel;var x=J(p.expirationTime<=U);U=e.unstable_now(),typeof x=="function"?p.callback=x:p===n(l)&&r(l),d(U)}else r(l);p=n(l)}if(p!==null)var O=!0;else{var N=n(u);N!==null&&Q(v,N.startTime-U),O=!1}return O}finally{p=null,m=z,_=!1}}var C=!1,E=null,I=-1,D=5,b=-1;function X(){return!(e.unstable_now()-b<D)}function ee(){if(E!==null){var T=e.unstable_now();b=T;var U=!0;try{U=E(!0,T)}finally{U?te():(C=!1,E=null)}}else C=!1}var te;if(typeof c=="function")te=function(){c(ee)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,ue=he.port2;he.port1.onmessage=ee,te=function(){ue.postMessage(null)}}else te=function(){S(ee,0)};function V(T){E=T,C||(C=!0,te())}function Q(T,U){I=S(function(){T(e.unstable_now())},U)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){y||_||(y=!0,V(k))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var U=3;break;default:U=m}var z=m;m=U;try{return T()}finally{m=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,U){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var z=m;m=T;try{return U()}finally{m=z}},e.unstable_scheduleCallback=function(T,U,z){var J=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?J+z:J):z=J,T){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=z+x,T={id:h++,callback:U,priorityLevel:T,startTime:z,expirationTime:x,sortIndex:-1},z>J?(T.sortIndex=z,t(u,T),n(l)===null&&T===n(u)&&(g?(f(I),I=-1):g=!0,Q(v,z-J))):(T.sortIndex=x,t(l,T),y||_||(y=!0,V(k))),T},e.unstable_shouldYield=X,e.unstable_wrapCallback=function(T){var U=m;return function(){var z=m;m=U;try{return T.apply(this,arguments)}finally{m=z}}}})(Oh);(function(e){e.exports=Oh})(Ah);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nh=M.exports,it=Ah.exports;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bh=new Set,Ri={};function ir(e,t){br(e,t),br(e+"Capture",t)}function br(e,t){for(Ri[e]=t,e=0;e<t.length;e++)bh.add(t[e])}var Qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cl=Object.prototype.hasOwnProperty,Vv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ud={},cd={};function Wv(e){return Cl.call(cd,e)?!0:Cl.call(ud,e)?!1:Vv.test(e)?cd[e]=!0:(ud[e]=!0,!1)}function Gv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function qv(e,t,n,r){if(t===null||typeof t>"u"||Gv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ve(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){be[e]=new Ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];be[t]=new Ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){be[e]=new Ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){be[e]=new Ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){be[e]=new Ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){be[e]=new Ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){be[e]=new Ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){be[e]=new Ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){be[e]=new Ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var $u=/[\-:]([a-z])/g;function Uu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace($u,Uu);be[t]=new Ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace($u,Uu);be[t]=new Ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace($u,Uu);be[t]=new Ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){be[e]=new Ve(e,1,!1,e.toLowerCase(),null,!1,!1)});be.xlinkHref=new Ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){be[e]=new Ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function zu(e,t,n,r){var i=be.hasOwnProperty(t)?be[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(qv(t,n,i,r)&&(n=null),r||i===null?Wv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var en=Nh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vo=Symbol.for("react.element"),dr=Symbol.for("react.portal"),fr=Symbol.for("react.fragment"),Fu=Symbol.for("react.strict_mode"),Rl=Symbol.for("react.profiler"),Lh=Symbol.for("react.provider"),Dh=Symbol.for("react.context"),Bu=Symbol.for("react.forward_ref"),Pl=Symbol.for("react.suspense"),xl=Symbol.for("react.suspense_list"),ju=Symbol.for("react.memo"),sn=Symbol.for("react.lazy"),Mh=Symbol.for("react.offscreen"),dd=Symbol.iterator;function Xr(e){return e===null||typeof e!="object"?null:(e=dd&&e[dd]||e["@@iterator"],typeof e=="function"?e:null)}var ge=Object.assign,$a;function ai(e){if($a===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);$a=t&&t[1]||""}return`
`+$a+e}var Ua=!1;function za(e,t){if(!e||Ua)return"";Ua=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Ua=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ai(e):""}function Kv(e){switch(e.tag){case 5:return ai(e.type);case 16:return ai("Lazy");case 13:return ai("Suspense");case 19:return ai("SuspenseList");case 0:case 2:case 15:return e=za(e.type,!1),e;case 11:return e=za(e.type.render,!1),e;case 1:return e=za(e.type,!0),e;default:return""}}function Al(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fr:return"Fragment";case dr:return"Portal";case Rl:return"Profiler";case Fu:return"StrictMode";case Pl:return"Suspense";case xl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Dh:return(e.displayName||"Context")+".Consumer";case Lh:return(e._context.displayName||"Context")+".Provider";case Bu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ju:return t=e.displayName||null,t!==null?t:Al(e.type)||"Memo";case sn:t=e._payload,e=e._init;try{return Al(e(t))}catch{}}return null}function Qv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Al(t);case 8:return t===Fu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function xn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $h(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Yv(e){var t=$h(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yo(e){e._valueTracker||(e._valueTracker=Yv(e))}function Uh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=$h(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function rs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ol(e,t){var n=t.checked;return ge({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function fd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=xn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function zh(e,t){t=t.checked,t!=null&&zu(e,"checked",t,!1)}function Nl(e,t){zh(e,t);var n=xn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bl(e,t.type,n):t.hasOwnProperty("defaultValue")&&bl(e,t.type,xn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function hd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function bl(e,t,n){(t!=="number"||rs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var li=Array.isArray;function Tr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+xn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ll(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return ge({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function pd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(li(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:xn(n)}}function Fh(e,t){var n=xn(t.value),r=xn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function md(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _o,jh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_o=_o||document.createElement("div"),_o.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_o.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Pi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var hi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xv=["Webkit","ms","Moz","O"];Object.keys(hi).forEach(function(e){Xv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),hi[t]=hi[e]})});function Hh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||hi.hasOwnProperty(e)&&hi[e]?(""+t).trim():t+"px"}function Vh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Hh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Jv=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ml(e,t){if(t){if(Jv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function $l(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ul=null;function Hu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zl=null,Cr=null,Rr=null;function gd(e){if(e=eo(e)){if(typeof zl!="function")throw Error(R(280));var t=e.stateNode;t&&(t=Bs(t),zl(e.stateNode,e.type,t))}}function Wh(e){Cr?Rr?Rr.push(e):Rr=[e]:Cr=e}function Gh(){if(Cr){var e=Cr,t=Rr;if(Rr=Cr=null,gd(e),t)for(e=0;e<t.length;e++)gd(t[e])}}function qh(e,t){return e(t)}function Kh(){}var Fa=!1;function Qh(e,t,n){if(Fa)return e(t,n);Fa=!0;try{return qh(e,t,n)}finally{Fa=!1,(Cr!==null||Rr!==null)&&(Kh(),Gh())}}function xi(e,t){var n=e.stateNode;if(n===null)return null;var r=Bs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var Fl=!1;if(Qt)try{var Jr={};Object.defineProperty(Jr,"passive",{get:function(){Fl=!0}}),window.addEventListener("test",Jr,Jr),window.removeEventListener("test",Jr,Jr)}catch{Fl=!1}function Zv(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var pi=!1,is=null,os=!1,Bl=null,ey={onError:function(e){pi=!0,is=e}};function ty(e,t,n,r,i,o,s,a,l){pi=!1,is=null,Zv.apply(ey,arguments)}function ny(e,t,n,r,i,o,s,a,l){if(ty.apply(this,arguments),pi){if(pi){var u=is;pi=!1,is=null}else throw Error(R(198));os||(os=!0,Bl=u)}}function or(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Yh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vd(e){if(or(e)!==e)throw Error(R(188))}function ry(e){var t=e.alternate;if(!t){if(t=or(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return vd(i),e;if(o===r)return vd(i),t;o=o.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function Xh(e){return e=ry(e),e!==null?Jh(e):null}function Jh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Jh(e);if(t!==null)return t;e=e.sibling}return null}var Zh=it.unstable_scheduleCallback,yd=it.unstable_cancelCallback,iy=it.unstable_shouldYield,oy=it.unstable_requestPaint,we=it.unstable_now,sy=it.unstable_getCurrentPriorityLevel,Vu=it.unstable_ImmediatePriority,ep=it.unstable_UserBlockingPriority,ss=it.unstable_NormalPriority,ay=it.unstable_LowPriority,tp=it.unstable_IdlePriority,$s=null,Lt=null;function ly(e){if(Lt&&typeof Lt.onCommitFiberRoot=="function")try{Lt.onCommitFiberRoot($s,e,void 0,(e.current.flags&128)===128)}catch{}}var It=Math.clz32?Math.clz32:dy,uy=Math.log,cy=Math.LN2;function dy(e){return e>>>=0,e===0?32:31-(uy(e)/cy|0)|0}var wo=64,So=4194304;function ui(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function as(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=ui(a):(o&=s,o!==0&&(r=ui(o)))}else s=n&~i,s!==0?r=ui(s):o!==0&&(r=ui(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-It(t),i=1<<n,r|=e[n],t&=~i;return r}function fy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-It(o),a=1<<s,l=i[s];l===-1?((a&n)===0||(a&r)!==0)&&(i[s]=fy(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function jl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function np(){var e=wo;return wo<<=1,(wo&4194240)===0&&(wo=64),e}function Ba(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ji(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-It(t),e[t]=n}function py(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-It(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Wu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-It(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ne=0;function rp(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ip,Gu,op,sp,ap,Hl=!1,ko=[],yn=null,_n=null,wn=null,Ai=new Map,Oi=new Map,ln=[],my="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _d(e,t){switch(e){case"focusin":case"focusout":yn=null;break;case"dragenter":case"dragleave":_n=null;break;case"mouseover":case"mouseout":wn=null;break;case"pointerover":case"pointerout":Ai.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oi.delete(t.pointerId)}}function Zr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=eo(t),t!==null&&Gu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function gy(e,t,n,r,i){switch(t){case"focusin":return yn=Zr(yn,e,t,n,r,i),!0;case"dragenter":return _n=Zr(_n,e,t,n,r,i),!0;case"mouseover":return wn=Zr(wn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ai.set(o,Zr(Ai.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Oi.set(o,Zr(Oi.get(o)||null,e,t,n,r,i)),!0}return!1}function lp(e){var t=$n(e.target);if(t!==null){var n=or(t);if(n!==null){if(t=n.tag,t===13){if(t=Yh(n),t!==null){e.blockedOn=t,ap(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Vl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ul=r,n.target.dispatchEvent(r),Ul=null}else return t=eo(n),t!==null&&Gu(t),e.blockedOn=n,!1;t.shift()}return!0}function wd(e,t,n){Fo(e)&&n.delete(t)}function vy(){Hl=!1,yn!==null&&Fo(yn)&&(yn=null),_n!==null&&Fo(_n)&&(_n=null),wn!==null&&Fo(wn)&&(wn=null),Ai.forEach(wd),Oi.forEach(wd)}function ei(e,t){e.blockedOn===t&&(e.blockedOn=null,Hl||(Hl=!0,it.unstable_scheduleCallback(it.unstable_NormalPriority,vy)))}function Ni(e){function t(i){return ei(i,e)}if(0<ko.length){ei(ko[0],e);for(var n=1;n<ko.length;n++){var r=ko[n];r.blockedOn===e&&(r.blockedOn=null)}}for(yn!==null&&ei(yn,e),_n!==null&&ei(_n,e),wn!==null&&ei(wn,e),Ai.forEach(t),Oi.forEach(t),n=0;n<ln.length;n++)r=ln[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ln.length&&(n=ln[0],n.blockedOn===null);)lp(n),n.blockedOn===null&&ln.shift()}var Pr=en.ReactCurrentBatchConfig,ls=!0;function yy(e,t,n,r){var i=ne,o=Pr.transition;Pr.transition=null;try{ne=1,qu(e,t,n,r)}finally{ne=i,Pr.transition=o}}function _y(e,t,n,r){var i=ne,o=Pr.transition;Pr.transition=null;try{ne=4,qu(e,t,n,r)}finally{ne=i,Pr.transition=o}}function qu(e,t,n,r){if(ls){var i=Vl(e,t,n,r);if(i===null)Xa(e,t,r,us,n),_d(e,r);else if(gy(i,e,t,n,r))r.stopPropagation();else if(_d(e,r),t&4&&-1<my.indexOf(e)){for(;i!==null;){var o=eo(i);if(o!==null&&ip(o),o=Vl(e,t,n,r),o===null&&Xa(e,t,r,us,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Xa(e,t,r,null,n)}}var us=null;function Vl(e,t,n,r){if(us=null,e=Hu(r),e=$n(e),e!==null)if(t=or(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Yh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return us=e,null}function up(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sy()){case Vu:return 1;case ep:return 4;case ss:case ay:return 16;case tp:return 536870912;default:return 16}default:return 16}}var mn=null,Ku=null,Bo=null;function cp(){if(Bo)return Bo;var e,t=Ku,n=t.length,r,i="value"in mn?mn.value:mn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Bo=i.slice(e,1<r?1-r:void 0)}function jo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Eo(){return!0}function Sd(){return!1}function st(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Eo:Sd,this.isPropagationStopped=Sd,this}return ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Eo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Eo)},persist:function(){},isPersistent:Eo}),t}var Wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qu=st(Wr),Zi=ge({},Wr,{view:0,detail:0}),wy=st(Zi),ja,Ha,ti,Us=ge({},Zi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ti&&(ti&&e.type==="mousemove"?(ja=e.screenX-ti.screenX,Ha=e.screenY-ti.screenY):Ha=ja=0,ti=e),ja)},movementY:function(e){return"movementY"in e?e.movementY:Ha}}),kd=st(Us),Sy=ge({},Us,{dataTransfer:0}),ky=st(Sy),Ey=ge({},Zi,{relatedTarget:0}),Va=st(Ey),Iy=ge({},Wr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ty=st(Iy),Cy=ge({},Wr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ry=st(Cy),Py=ge({},Wr,{data:0}),Ed=st(Py),xy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ay={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Oy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ny(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Oy[e])?!!t[e]:!1}function Yu(){return Ny}var by=ge({},Zi,{key:function(e){if(e.key){var t=xy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ay[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yu,charCode:function(e){return e.type==="keypress"?jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ly=st(by),Dy=ge({},Us,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Id=st(Dy),My=ge({},Zi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yu}),$y=st(My),Uy=ge({},Wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),zy=st(Uy),Fy=ge({},Us,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),By=st(Fy),jy=[9,13,27,32],Xu=Qt&&"CompositionEvent"in window,mi=null;Qt&&"documentMode"in document&&(mi=document.documentMode);var Hy=Qt&&"TextEvent"in window&&!mi,dp=Qt&&(!Xu||mi&&8<mi&&11>=mi),Td=String.fromCharCode(32),Cd=!1;function fp(e,t){switch(e){case"keyup":return jy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hr=!1;function Vy(e,t){switch(e){case"compositionend":return hp(t);case"keypress":return t.which!==32?null:(Cd=!0,Td);case"textInput":return e=t.data,e===Td&&Cd?null:e;default:return null}}function Wy(e,t){if(hr)return e==="compositionend"||!Xu&&fp(e,t)?(e=cp(),Bo=Ku=mn=null,hr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return dp&&t.locale!=="ko"?null:t.data;default:return null}}var Gy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Gy[e.type]:t==="textarea"}function pp(e,t,n,r){Wh(r),t=cs(t,"onChange"),0<t.length&&(n=new Qu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var gi=null,bi=null;function qy(e){Tp(e,0)}function zs(e){var t=gr(e);if(Uh(t))return e}function Ky(e,t){if(e==="change")return t}var mp=!1;if(Qt){var Wa;if(Qt){var Ga="oninput"in document;if(!Ga){var Pd=document.createElement("div");Pd.setAttribute("oninput","return;"),Ga=typeof Pd.oninput=="function"}Wa=Ga}else Wa=!1;mp=Wa&&(!document.documentMode||9<document.documentMode)}function xd(){gi&&(gi.detachEvent("onpropertychange",gp),bi=gi=null)}function gp(e){if(e.propertyName==="value"&&zs(bi)){var t=[];pp(t,bi,e,Hu(e)),Qh(qy,t)}}function Qy(e,t,n){e==="focusin"?(xd(),gi=t,bi=n,gi.attachEvent("onpropertychange",gp)):e==="focusout"&&xd()}function Yy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zs(bi)}function Xy(e,t){if(e==="click")return zs(t)}function Jy(e,t){if(e==="input"||e==="change")return zs(t)}function Zy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:Zy;function Li(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Cl.call(t,i)||!Ct(e[i],t[i]))return!1}return!0}function Ad(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Od(e,t){var n=Ad(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ad(n)}}function vp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yp(){for(var e=window,t=rs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=rs(e.document)}return t}function Ju(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function e0(e){var t=yp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&vp(n.ownerDocument.documentElement,n)){if(r!==null&&Ju(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Od(n,o);var s=Od(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var t0=Qt&&"documentMode"in document&&11>=document.documentMode,pr=null,Wl=null,vi=null,Gl=!1;function Nd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gl||pr==null||pr!==rs(r)||(r=pr,"selectionStart"in r&&Ju(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vi&&Li(vi,r)||(vi=r,r=cs(Wl,"onSelect"),0<r.length&&(t=new Qu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=pr)))}function Io(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var mr={animationend:Io("Animation","AnimationEnd"),animationiteration:Io("Animation","AnimationIteration"),animationstart:Io("Animation","AnimationStart"),transitionend:Io("Transition","TransitionEnd")},qa={},_p={};Qt&&(_p=document.createElement("div").style,"AnimationEvent"in window||(delete mr.animationend.animation,delete mr.animationiteration.animation,delete mr.animationstart.animation),"TransitionEvent"in window||delete mr.transitionend.transition);function Fs(e){if(qa[e])return qa[e];if(!mr[e])return e;var t=mr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in _p)return qa[e]=t[n];return e}var wp=Fs("animationend"),Sp=Fs("animationiteration"),kp=Fs("animationstart"),Ep=Fs("transitionend"),Ip=new Map,bd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function On(e,t){Ip.set(e,t),ir(t,[e])}for(var Ka=0;Ka<bd.length;Ka++){var Qa=bd[Ka],n0=Qa.toLowerCase(),r0=Qa[0].toUpperCase()+Qa.slice(1);On(n0,"on"+r0)}On(wp,"onAnimationEnd");On(Sp,"onAnimationIteration");On(kp,"onAnimationStart");On("dblclick","onDoubleClick");On("focusin","onFocus");On("focusout","onBlur");On(Ep,"onTransitionEnd");br("onMouseEnter",["mouseout","mouseover"]);br("onMouseLeave",["mouseout","mouseover"]);br("onPointerEnter",["pointerout","pointerover"]);br("onPointerLeave",["pointerout","pointerover"]);ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),i0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ci));function Ld(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ny(r,t,void 0,e),e.currentTarget=null}function Tp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Ld(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Ld(i,a,u),o=l}}}if(os)throw e=Bl,os=!1,Bl=null,e}function ce(e,t){var n=t[Xl];n===void 0&&(n=t[Xl]=new Set);var r=e+"__bubble";n.has(r)||(Cp(t,e,2,!1),n.add(r))}function Ya(e,t,n){var r=0;t&&(r|=4),Cp(n,e,r,t)}var To="_reactListening"+Math.random().toString(36).slice(2);function Di(e){if(!e[To]){e[To]=!0,bh.forEach(function(n){n!=="selectionchange"&&(i0.has(n)||Ya(n,!1,e),Ya(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[To]||(t[To]=!0,Ya("selectionchange",!1,t))}}function Cp(e,t,n,r){switch(up(t)){case 1:var i=yy;break;case 4:i=_y;break;default:i=qu}n=i.bind(null,t,n,e),i=void 0,!Fl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Xa(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=$n(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Qh(function(){var u=o,h=Hu(n),p=[];e:{var m=Ip.get(e);if(m!==void 0){var _=Qu,y=e;switch(e){case"keypress":if(jo(n)===0)break e;case"keydown":case"keyup":_=Ly;break;case"focusin":y="focus",_=Va;break;case"focusout":y="blur",_=Va;break;case"beforeblur":case"afterblur":_=Va;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=ky;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=$y;break;case wp:case Sp:case kp:_=Ty;break;case Ep:_=zy;break;case"scroll":_=wy;break;case"wheel":_=By;break;case"copy":case"cut":case"paste":_=Ry;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Id}var g=(t&4)!==0,S=!g&&e==="scroll",f=g?m!==null?m+"Capture":null:m;g=[];for(var c=u,d;c!==null;){d=c;var v=d.stateNode;if(d.tag===5&&v!==null&&(d=v,f!==null&&(v=xi(c,f),v!=null&&g.push(Mi(c,v,d)))),S)break;c=c.return}0<g.length&&(m=new _(m,y,null,n,h),p.push({event:m,listeners:g}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",m&&n!==Ul&&(y=n.relatedTarget||n.fromElement)&&($n(y)||y[Yt]))break e;if((_||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,_?(y=n.relatedTarget||n.toElement,_=u,y=y?$n(y):null,y!==null&&(S=or(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(_=null,y=u),_!==y)){if(g=kd,v="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(g=Id,v="onPointerLeave",f="onPointerEnter",c="pointer"),S=_==null?m:gr(_),d=y==null?m:gr(y),m=new g(v,c+"leave",_,n,h),m.target=S,m.relatedTarget=d,v=null,$n(h)===u&&(g=new g(f,c+"enter",y,n,h),g.target=d,g.relatedTarget=S,v=g),S=v,_&&y)t:{for(g=_,f=y,c=0,d=g;d;d=lr(d))c++;for(d=0,v=f;v;v=lr(v))d++;for(;0<c-d;)g=lr(g),c--;for(;0<d-c;)f=lr(f),d--;for(;c--;){if(g===f||f!==null&&g===f.alternate)break t;g=lr(g),f=lr(f)}g=null}else g=null;_!==null&&Dd(p,m,_,g,!1),y!==null&&S!==null&&Dd(p,S,y,g,!0)}}e:{if(m=u?gr(u):window,_=m.nodeName&&m.nodeName.toLowerCase(),_==="select"||_==="input"&&m.type==="file")var k=Ky;else if(Rd(m))if(mp)k=Jy;else{k=Yy;var C=Qy}else(_=m.nodeName)&&_.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=Xy);if(k&&(k=k(e,u))){pp(p,k,n,h);break e}C&&C(e,m,u),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&bl(m,"number",m.value)}switch(C=u?gr(u):window,e){case"focusin":(Rd(C)||C.contentEditable==="true")&&(pr=C,Wl=u,vi=null);break;case"focusout":vi=Wl=pr=null;break;case"mousedown":Gl=!0;break;case"contextmenu":case"mouseup":case"dragend":Gl=!1,Nd(p,n,h);break;case"selectionchange":if(t0)break;case"keydown":case"keyup":Nd(p,n,h)}var E;if(Xu)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else hr?fp(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(dp&&n.locale!=="ko"&&(hr||I!=="onCompositionStart"?I==="onCompositionEnd"&&hr&&(E=cp()):(mn=h,Ku="value"in mn?mn.value:mn.textContent,hr=!0)),C=cs(u,I),0<C.length&&(I=new Ed(I,e,null,n,h),p.push({event:I,listeners:C}),E?I.data=E:(E=hp(n),E!==null&&(I.data=E)))),(E=Hy?Vy(e,n):Wy(e,n))&&(u=cs(u,"onBeforeInput"),0<u.length&&(h=new Ed("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=E))}Tp(p,t)})}function Mi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function cs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=xi(e,n),o!=null&&r.unshift(Mi(e,o,i)),o=xi(e,t),o!=null&&r.push(Mi(e,o,i))),e=e.return}return r}function lr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Dd(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=xi(n,o),l!=null&&s.unshift(Mi(n,l,a))):i||(l=xi(n,o),l!=null&&s.push(Mi(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var o0=/\r\n?/g,s0=/\u0000|\uFFFD/g;function Md(e){return(typeof e=="string"?e:""+e).replace(o0,`
`).replace(s0,"")}function Co(e,t,n){if(t=Md(t),Md(e)!==t&&n)throw Error(R(425))}function ds(){}var ql=null,Kl=null;function Ql(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yl=typeof setTimeout=="function"?setTimeout:void 0,a0=typeof clearTimeout=="function"?clearTimeout:void 0,$d=typeof Promise=="function"?Promise:void 0,l0=typeof queueMicrotask=="function"?queueMicrotask:typeof $d<"u"?function(e){return $d.resolve(null).then(e).catch(u0)}:Yl;function u0(e){setTimeout(function(){throw e})}function Ja(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ni(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ni(t)}function Sn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ud(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Gr=Math.random().toString(36).slice(2),Nt="__reactFiber$"+Gr,$i="__reactProps$"+Gr,Yt="__reactContainer$"+Gr,Xl="__reactEvents$"+Gr,c0="__reactListeners$"+Gr,d0="__reactHandles$"+Gr;function $n(e){var t=e[Nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Yt]||n[Nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ud(e);e!==null;){if(n=e[Nt])return n;e=Ud(e)}return t}e=n,n=e.parentNode}return null}function eo(e){return e=e[Nt]||e[Yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function gr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function Bs(e){return e[$i]||null}var Jl=[],vr=-1;function Nn(e){return{current:e}}function de(e){0>vr||(e.current=Jl[vr],Jl[vr]=null,vr--)}function ae(e,t){vr++,Jl[vr]=e.current,e.current=t}var An={},Ue=Nn(An),Qe=Nn(!1),Gn=An;function Lr(e,t){var n=e.type.contextTypes;if(!n)return An;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ye(e){return e=e.childContextTypes,e!=null}function fs(){de(Qe),de(Ue)}function zd(e,t,n){if(Ue.current!==An)throw Error(R(168));ae(Ue,t),ae(Qe,n)}function Rp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(R(108,Qv(e)||"Unknown",i));return ge({},n,r)}function hs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||An,Gn=Ue.current,ae(Ue,e),ae(Qe,Qe.current),!0}function Fd(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=Rp(e,t,Gn),r.__reactInternalMemoizedMergedChildContext=e,de(Qe),de(Ue),ae(Ue,e)):de(Qe),ae(Qe,n)}var Ft=null,js=!1,Za=!1;function Pp(e){Ft===null?Ft=[e]:Ft.push(e)}function f0(e){js=!0,Pp(e)}function bn(){if(!Za&&Ft!==null){Za=!0;var e=0,t=ne;try{var n=Ft;for(ne=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ft=null,js=!1}catch(i){throw Ft!==null&&(Ft=Ft.slice(e+1)),Zh(Vu,bn),i}finally{ne=t,Za=!1}}return null}var yr=[],_r=0,ps=null,ms=0,lt=[],ut=0,qn=null,Bt=1,jt="";function Ln(e,t){yr[_r++]=ms,yr[_r++]=ps,ps=e,ms=t}function xp(e,t,n){lt[ut++]=Bt,lt[ut++]=jt,lt[ut++]=qn,qn=e;var r=Bt;e=jt;var i=32-It(r)-1;r&=~(1<<i),n+=1;var o=32-It(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Bt=1<<32-It(t)+i|n<<i|r,jt=o+e}else Bt=1<<o|n<<i|r,jt=e}function Zu(e){e.return!==null&&(Ln(e,1),xp(e,1,0))}function ec(e){for(;e===ps;)ps=yr[--_r],yr[_r]=null,ms=yr[--_r],yr[_r]=null;for(;e===qn;)qn=lt[--ut],lt[ut]=null,jt=lt[--ut],lt[ut]=null,Bt=lt[--ut],lt[ut]=null}var nt=null,et=null,fe=!1,Et=null;function Ap(e,t){var n=ct(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Bd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,nt=e,et=Sn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,nt=e,et=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=qn!==null?{id:Bt,overflow:jt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ct(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,nt=e,et=null,!0):!1;default:return!1}}function Zl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function eu(e){if(fe){var t=et;if(t){var n=t;if(!Bd(e,t)){if(Zl(e))throw Error(R(418));t=Sn(n.nextSibling);var r=nt;t&&Bd(e,t)?Ap(r,n):(e.flags=e.flags&-4097|2,fe=!1,nt=e)}}else{if(Zl(e))throw Error(R(418));e.flags=e.flags&-4097|2,fe=!1,nt=e}}}function jd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;nt=e}function Ro(e){if(e!==nt)return!1;if(!fe)return jd(e),fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ql(e.type,e.memoizedProps)),t&&(t=et)){if(Zl(e))throw Op(),Error(R(418));for(;t;)Ap(e,t),t=Sn(t.nextSibling)}if(jd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){et=Sn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}et=null}}else et=nt?Sn(e.stateNode.nextSibling):null;return!0}function Op(){for(var e=et;e;)e=Sn(e.nextSibling)}function Dr(){et=nt=null,fe=!1}function tc(e){Et===null?Et=[e]:Et.push(e)}var h0=en.ReactCurrentBatchConfig;function St(e,t){if(e&&e.defaultProps){t=ge({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var gs=Nn(null),vs=null,wr=null,nc=null;function rc(){nc=wr=vs=null}function ic(e){var t=gs.current;de(gs),e._currentValue=t}function tu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function xr(e,t){vs=e,nc=wr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ke=!0),e.firstContext=null)}function mt(e){var t=e._currentValue;if(nc!==e)if(e={context:e,memoizedValue:t,next:null},wr===null){if(vs===null)throw Error(R(308));wr=e,vs.dependencies={lanes:0,firstContext:e}}else wr=wr.next=e;return t}var Un=null;function oc(e){Un===null?Un=[e]:Un.push(e)}function Np(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,oc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Xt(e,r)}function Xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var an=!1;function sc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function kn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(K&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Xt(e,n)}return i=r.interleaved,i===null?(t.next=t,oc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Xt(e,n)}function Ho(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wu(e,n)}}function Hd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ys(e,t,n,r){var i=e.updateQueue;an=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==s&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(o!==null){var p=i.baseState;s=0,h=u=l=null,a=o;do{var m=a.lane,_=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,g=a;switch(m=t,_=n,g.tag){case 1:if(y=g.payload,typeof y=="function"){p=y.call(_,p,m);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=g.payload,m=typeof y=="function"?y.call(_,p,m):y,m==null)break e;p=ge({},p,m);break e;case 2:an=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else _={eventTime:_,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=_,l=p):h=h.next=_,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(h===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Qn|=s,e.lanes=s,e.memoizedState=p}}function Vd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var Lp=new Nh.Component().refs;function nu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ge({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Hs={isMounted:function(e){return(e=e._reactInternals)?or(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=je(),i=In(e),o=Gt(r,i);o.payload=t,n!=null&&(o.callback=n),t=kn(e,o,i),t!==null&&(Tt(t,e,i,r),Ho(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=je(),i=In(e),o=Gt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=kn(e,o,i),t!==null&&(Tt(t,e,i,r),Ho(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=je(),r=In(e),i=Gt(n,r);i.tag=2,t!=null&&(i.callback=t),t=kn(e,i,r),t!==null&&(Tt(t,e,r,n),Ho(t,e,r))}};function Wd(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Li(n,r)||!Li(i,o):!0}function Dp(e,t,n){var r=!1,i=An,o=t.contextType;return typeof o=="object"&&o!==null?o=mt(o):(i=Ye(t)?Gn:Ue.current,r=t.contextTypes,o=(r=r!=null)?Lr(e,i):An),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Hs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Gd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Hs.enqueueReplaceState(t,t.state,null)}function ru(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Lp,sc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=mt(o):(o=Ye(t)?Gn:Ue.current,i.context=Lr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(nu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Hs.enqueueReplaceState(i,i.state,null),ys(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ni(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===Lp&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function Po(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function qd(e){var t=e._init;return t(e._payload)}function Mp(e){function t(f,c){if(e){var d=f.deletions;d===null?(f.deletions=[c],f.flags|=16):d.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=Tn(f,c),f.index=0,f.sibling=null,f}function o(f,c,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<c?(f.flags|=2,c):d):(f.flags|=2,c)):(f.flags|=1048576,c)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,d,v){return c===null||c.tag!==6?(c=sl(d,f.mode,v),c.return=f,c):(c=i(c,d),c.return=f,c)}function l(f,c,d,v){var k=d.type;return k===fr?h(f,c,d.props.children,v,d.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===sn&&qd(k)===c.type)?(v=i(c,d.props),v.ref=ni(f,c,d),v.return=f,v):(v=Qo(d.type,d.key,d.props,null,f.mode,v),v.ref=ni(f,c,d),v.return=f,v)}function u(f,c,d,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=al(d,f.mode,v),c.return=f,c):(c=i(c,d.children||[]),c.return=f,c)}function h(f,c,d,v,k){return c===null||c.tag!==7?(c=jn(d,f.mode,v,k),c.return=f,c):(c=i(c,d),c.return=f,c)}function p(f,c,d){if(typeof c=="string"&&c!==""||typeof c=="number")return c=sl(""+c,f.mode,d),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case vo:return d=Qo(c.type,c.key,c.props,null,f.mode,d),d.ref=ni(f,null,c),d.return=f,d;case dr:return c=al(c,f.mode,d),c.return=f,c;case sn:var v=c._init;return p(f,v(c._payload),d)}if(li(c)||Xr(c))return c=jn(c,f.mode,d,null),c.return=f,c;Po(f,c)}return null}function m(f,c,d,v){var k=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return k!==null?null:a(f,c,""+d,v);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case vo:return d.key===k?l(f,c,d,v):null;case dr:return d.key===k?u(f,c,d,v):null;case sn:return k=d._init,m(f,c,k(d._payload),v)}if(li(d)||Xr(d))return k!==null?null:h(f,c,d,v,null);Po(f,d)}return null}function _(f,c,d,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(d)||null,a(c,f,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case vo:return f=f.get(v.key===null?d:v.key)||null,l(c,f,v,k);case dr:return f=f.get(v.key===null?d:v.key)||null,u(c,f,v,k);case sn:var C=v._init;return _(f,c,d,C(v._payload),k)}if(li(v)||Xr(v))return f=f.get(d)||null,h(c,f,v,k,null);Po(c,v)}return null}function y(f,c,d,v){for(var k=null,C=null,E=c,I=c=0,D=null;E!==null&&I<d.length;I++){E.index>I?(D=E,E=null):D=E.sibling;var b=m(f,E,d[I],v);if(b===null){E===null&&(E=D);break}e&&E&&b.alternate===null&&t(f,E),c=o(b,c,I),C===null?k=b:C.sibling=b,C=b,E=D}if(I===d.length)return n(f,E),fe&&Ln(f,I),k;if(E===null){for(;I<d.length;I++)E=p(f,d[I],v),E!==null&&(c=o(E,c,I),C===null?k=E:C.sibling=E,C=E);return fe&&Ln(f,I),k}for(E=r(f,E);I<d.length;I++)D=_(E,f,I,d[I],v),D!==null&&(e&&D.alternate!==null&&E.delete(D.key===null?I:D.key),c=o(D,c,I),C===null?k=D:C.sibling=D,C=D);return e&&E.forEach(function(X){return t(f,X)}),fe&&Ln(f,I),k}function g(f,c,d,v){var k=Xr(d);if(typeof k!="function")throw Error(R(150));if(d=k.call(d),d==null)throw Error(R(151));for(var C=k=null,E=c,I=c=0,D=null,b=d.next();E!==null&&!b.done;I++,b=d.next()){E.index>I?(D=E,E=null):D=E.sibling;var X=m(f,E,b.value,v);if(X===null){E===null&&(E=D);break}e&&E&&X.alternate===null&&t(f,E),c=o(X,c,I),C===null?k=X:C.sibling=X,C=X,E=D}if(b.done)return n(f,E),fe&&Ln(f,I),k;if(E===null){for(;!b.done;I++,b=d.next())b=p(f,b.value,v),b!==null&&(c=o(b,c,I),C===null?k=b:C.sibling=b,C=b);return fe&&Ln(f,I),k}for(E=r(f,E);!b.done;I++,b=d.next())b=_(E,f,I,b.value,v),b!==null&&(e&&b.alternate!==null&&E.delete(b.key===null?I:b.key),c=o(b,c,I),C===null?k=b:C.sibling=b,C=b);return e&&E.forEach(function(ee){return t(f,ee)}),fe&&Ln(f,I),k}function S(f,c,d,v){if(typeof d=="object"&&d!==null&&d.type===fr&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case vo:e:{for(var k=d.key,C=c;C!==null;){if(C.key===k){if(k=d.type,k===fr){if(C.tag===7){n(f,C.sibling),c=i(C,d.props.children),c.return=f,f=c;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===sn&&qd(k)===C.type){n(f,C.sibling),c=i(C,d.props),c.ref=ni(f,C,d),c.return=f,f=c;break e}n(f,C);break}else t(f,C);C=C.sibling}d.type===fr?(c=jn(d.props.children,f.mode,v,d.key),c.return=f,f=c):(v=Qo(d.type,d.key,d.props,null,f.mode,v),v.ref=ni(f,c,d),v.return=f,f=v)}return s(f);case dr:e:{for(C=d.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){n(f,c.sibling),c=i(c,d.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=al(d,f.mode,v),c.return=f,f=c}return s(f);case sn:return C=d._init,S(f,c,C(d._payload),v)}if(li(d))return y(f,c,d,v);if(Xr(d))return g(f,c,d,v);Po(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,d),c.return=f,f=c):(n(f,c),c=sl(d,f.mode,v),c.return=f,f=c),s(f)):n(f,c)}return S}var Mr=Mp(!0),$p=Mp(!1),to={},Dt=Nn(to),Ui=Nn(to),zi=Nn(to);function zn(e){if(e===to)throw Error(R(174));return e}function ac(e,t){switch(ae(zi,t),ae(Ui,e),ae(Dt,to),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Dl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Dl(t,e)}de(Dt),ae(Dt,t)}function $r(){de(Dt),de(Ui),de(zi)}function Up(e){zn(zi.current);var t=zn(Dt.current),n=Dl(t,e.type);t!==n&&(ae(Ui,e),ae(Dt,n))}function lc(e){Ui.current===e&&(de(Dt),de(Ui))}var pe=Nn(0);function _s(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var el=[];function uc(){for(var e=0;e<el.length;e++)el[e]._workInProgressVersionPrimary=null;el.length=0}var Vo=en.ReactCurrentDispatcher,tl=en.ReactCurrentBatchConfig,Kn=0,me=null,Ee=null,Te=null,ws=!1,yi=!1,Fi=0,p0=0;function De(){throw Error(R(321))}function cc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ct(e[n],t[n]))return!1;return!0}function dc(e,t,n,r,i,o){if(Kn=o,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vo.current=e===null||e.memoizedState===null?y0:_0,e=n(r,i),yi){o=0;do{if(yi=!1,Fi=0,25<=o)throw Error(R(301));o+=1,Te=Ee=null,t.updateQueue=null,Vo.current=w0,e=n(r,i)}while(yi)}if(Vo.current=Ss,t=Ee!==null&&Ee.next!==null,Kn=0,Te=Ee=me=null,ws=!1,t)throw Error(R(300));return e}function fc(){var e=Fi!==0;return Fi=0,e}function Ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?me.memoizedState=Te=e:Te=Te.next=e,Te}function gt(){if(Ee===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=Te===null?me.memoizedState:Te.next;if(t!==null)Te=t,Ee=e;else{if(e===null)throw Error(R(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Te===null?me.memoizedState=Te=e:Te=Te.next=e}return Te}function Bi(e,t){return typeof t=="function"?t(e):t}function nl(e){var t=gt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=Ee,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var h=u.lane;if((Kn&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,s=r):l=l.next=p,me.lanes|=h,Qn|=h}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Ct(r,t.memoizedState)||(Ke=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,me.lanes|=o,Qn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function rl(e){var t=gt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Ct(o,t.memoizedState)||(Ke=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function zp(){}function Fp(e,t){var n=me,r=gt(),i=t(),o=!Ct(r.memoizedState,i);if(o&&(r.memoizedState=i,Ke=!0),r=r.queue,hc(Hp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,ji(9,jp.bind(null,n,r,i,t),void 0,null),Re===null)throw Error(R(349));(Kn&30)!==0||Bp(n,t,i)}return i}function Bp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function jp(e,t,n,r){t.value=n,t.getSnapshot=r,Vp(t)&&Wp(e)}function Hp(e,t,n){return n(function(){Vp(t)&&Wp(e)})}function Vp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ct(e,n)}catch{return!0}}function Wp(e){var t=Xt(e,1);t!==null&&Tt(t,e,1,-1)}function Kd(e){var t=Ot();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:e},t.queue=e,e=e.dispatch=v0.bind(null,me,e),[t.memoizedState,e]}function ji(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Gp(){return gt().memoizedState}function Wo(e,t,n,r){var i=Ot();me.flags|=e,i.memoizedState=ji(1|t,n,void 0,r===void 0?null:r)}function Vs(e,t,n,r){var i=gt();r=r===void 0?null:r;var o=void 0;if(Ee!==null){var s=Ee.memoizedState;if(o=s.destroy,r!==null&&cc(r,s.deps)){i.memoizedState=ji(t,n,o,r);return}}me.flags|=e,i.memoizedState=ji(1|t,n,o,r)}function Qd(e,t){return Wo(8390656,8,e,t)}function hc(e,t){return Vs(2048,8,e,t)}function qp(e,t){return Vs(4,2,e,t)}function Kp(e,t){return Vs(4,4,e,t)}function Qp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Yp(e,t,n){return n=n!=null?n.concat([e]):null,Vs(4,4,Qp.bind(null,t,e),n)}function pc(){}function Xp(e,t){var n=gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Jp(e,t){var n=gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Zp(e,t,n){return(Kn&21)===0?(e.baseState&&(e.baseState=!1,Ke=!0),e.memoizedState=n):(Ct(n,t)||(n=np(),me.lanes|=n,Qn|=n,e.baseState=!0),t)}function m0(e,t){var n=ne;ne=n!==0&&4>n?n:4,e(!0);var r=tl.transition;tl.transition={};try{e(!1),t()}finally{ne=n,tl.transition=r}}function em(){return gt().memoizedState}function g0(e,t,n){var r=In(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},tm(e))nm(t,n);else if(n=Np(e,t,n,r),n!==null){var i=je();Tt(n,e,r,i),rm(n,t,r)}}function v0(e,t,n){var r=In(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(tm(e))nm(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Ct(a,s)){var l=t.interleaved;l===null?(i.next=i,oc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Np(e,t,i,r),n!==null&&(i=je(),Tt(n,e,r,i),rm(n,t,r))}}function tm(e){var t=e.alternate;return e===me||t!==null&&t===me}function nm(e,t){yi=ws=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function rm(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wu(e,n)}}var Ss={readContext:mt,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},y0={readContext:mt,useCallback:function(e,t){return Ot().memoizedState=[e,t===void 0?null:t],e},useContext:mt,useEffect:Qd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Wo(4194308,4,Qp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wo(4,2,e,t)},useMemo:function(e,t){var n=Ot();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ot();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=g0.bind(null,me,e),[r.memoizedState,e]},useRef:function(e){var t=Ot();return e={current:e},t.memoizedState=e},useState:Kd,useDebugValue:pc,useDeferredValue:function(e){return Ot().memoizedState=e},useTransition:function(){var e=Kd(!1),t=e[0];return e=m0.bind(null,e[1]),Ot().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=me,i=Ot();if(fe){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),Re===null)throw Error(R(349));(Kn&30)!==0||Bp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Qd(Hp.bind(null,r,o,e),[e]),r.flags|=2048,ji(9,jp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ot(),t=Re.identifierPrefix;if(fe){var n=jt,r=Bt;n=(r&~(1<<32-It(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Fi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=p0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},_0={readContext:mt,useCallback:Xp,useContext:mt,useEffect:hc,useImperativeHandle:Yp,useInsertionEffect:qp,useLayoutEffect:Kp,useMemo:Jp,useReducer:nl,useRef:Gp,useState:function(){return nl(Bi)},useDebugValue:pc,useDeferredValue:function(e){var t=gt();return Zp(t,Ee.memoizedState,e)},useTransition:function(){var e=nl(Bi)[0],t=gt().memoizedState;return[e,t]},useMutableSource:zp,useSyncExternalStore:Fp,useId:em,unstable_isNewReconciler:!1},w0={readContext:mt,useCallback:Xp,useContext:mt,useEffect:hc,useImperativeHandle:Yp,useInsertionEffect:qp,useLayoutEffect:Kp,useMemo:Jp,useReducer:rl,useRef:Gp,useState:function(){return rl(Bi)},useDebugValue:pc,useDeferredValue:function(e){var t=gt();return Ee===null?t.memoizedState=e:Zp(t,Ee.memoizedState,e)},useTransition:function(){var e=rl(Bi)[0],t=gt().memoizedState;return[e,t]},useMutableSource:zp,useSyncExternalStore:Fp,useId:em,unstable_isNewReconciler:!1};function Ur(e,t){try{var n="",r=t;do n+=Kv(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function il(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function iu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var S0=typeof WeakMap=="function"?WeakMap:Map;function im(e,t,n){n=Gt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Es||(Es=!0,pu=r),iu(e,t)},n}function om(e,t,n){n=Gt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){iu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){iu(e,t),typeof r!="function"&&(En===null?En=new Set([this]):En.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Yd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new S0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=D0.bind(null,e,t,n),t.then(e,e))}function Xd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Jd(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Gt(-1,1),t.tag=2,kn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var k0=en.ReactCurrentOwner,Ke=!1;function Be(e,t,n,r){t.child=e===null?$p(t,null,n,r):Mr(t,e.child,n,r)}function Zd(e,t,n,r,i){n=n.render;var o=t.ref;return xr(t,i),r=dc(e,t,n,r,o,i),n=fc(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Jt(e,t,i)):(fe&&n&&Zu(t),t.flags|=1,Be(e,t,r,i),t.child)}function ef(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!kc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,sm(e,t,o,r,i)):(e=Qo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Li,n(s,r)&&e.ref===t.ref)return Jt(e,t,i)}return t.flags|=1,e=Tn(o,r),e.ref=t.ref,e.return=t,t.child=e}function sm(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Li(o,r)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Ke=!0);else return t.lanes=e.lanes,Jt(e,t,i)}return ou(e,t,n,r,i)}function am(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(kr,Ze),Ze|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ae(kr,Ze),Ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ae(kr,Ze),Ze|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ae(kr,Ze),Ze|=r;return Be(e,t,i,n),t.child}function lm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ou(e,t,n,r,i){var o=Ye(n)?Gn:Ue.current;return o=Lr(t,o),xr(t,i),n=dc(e,t,n,r,o,i),r=fc(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Jt(e,t,i)):(fe&&r&&Zu(t),t.flags|=1,Be(e,t,n,i),t.child)}function tf(e,t,n,r,i){if(Ye(n)){var o=!0;hs(t)}else o=!1;if(xr(t,i),t.stateNode===null)Go(e,t),Dp(t,n,r),ru(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=mt(u):(u=Ye(n)?Gn:Ue.current,u=Lr(t,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Gd(t,s,r,u),an=!1;var m=t.memoizedState;s.state=m,ys(t,r,s,i),l=t.memoizedState,a!==r||m!==l||Qe.current||an?(typeof h=="function"&&(nu(t,n,h,r),l=t.memoizedState),(a=an||Wd(t,n,a,r,m,l,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,bp(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:St(t.type,a),s.props=u,p=t.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=mt(l):(l=Ye(n)?Gn:Ue.current,l=Lr(t,l));var _=n.getDerivedStateFromProps;(h=typeof _=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||m!==l)&&Gd(t,s,r,l),an=!1,m=t.memoizedState,s.state=m,ys(t,r,s,i);var y=t.memoizedState;a!==p||m!==y||Qe.current||an?(typeof _=="function"&&(nu(t,n,_,r),y=t.memoizedState),(u=an||Wd(t,n,u,r,m,y,l)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return su(e,t,n,r,o,i)}function su(e,t,n,r,i,o){lm(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Fd(t,n,!1),Jt(e,t,o);r=t.stateNode,k0.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Mr(t,e.child,null,o),t.child=Mr(t,null,a,o)):Be(e,t,a,o),t.memoizedState=r.state,i&&Fd(t,n,!0),t.child}function um(e){var t=e.stateNode;t.pendingContext?zd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&zd(e,t.context,!1),ac(e,t.containerInfo)}function nf(e,t,n,r,i){return Dr(),tc(i),t.flags|=256,Be(e,t,n,r),t.child}var au={dehydrated:null,treeContext:null,retryLane:0};function lu(e){return{baseLanes:e,cachePool:null,transitions:null}}function cm(e,t,n){var r=t.pendingProps,i=pe.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ae(pe,i&1),e===null)return eu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=s):o=qs(s,r,0,null),e=jn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=lu(n),t.memoizedState=au,e):mc(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return E0(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(s&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Tn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Tn(a,o):(o=jn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?lu(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=au,r}return o=e.child,e=o.sibling,r=Tn(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function mc(e,t){return t=qs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xo(e,t,n,r){return r!==null&&tc(r),Mr(t,e.child,null,n),e=mc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function E0(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=il(Error(R(422))),xo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=qs({mode:"visible",children:r.children},i,0,null),o=jn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&Mr(t,e.child,null,s),t.child.memoizedState=lu(s),t.memoizedState=au,o);if((t.mode&1)===0)return xo(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(R(419)),r=il(o,r,void 0),xo(e,t,s,r)}if(a=(s&e.childLanes)!==0,Ke||a){if(r=Re,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|s))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Xt(e,i),Tt(r,e,i,-1))}return Sc(),r=il(Error(R(421))),xo(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=M0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,et=Sn(i.nextSibling),nt=t,fe=!0,Et=null,e!==null&&(lt[ut++]=Bt,lt[ut++]=jt,lt[ut++]=qn,Bt=e.id,jt=e.overflow,qn=t),t=mc(t,r.children),t.flags|=4096,t)}function rf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),tu(e.return,t,n)}function ol(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function dm(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Be(e,t,r.children,n),r=pe.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rf(e,n,t);else if(e.tag===19)rf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ae(pe,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_s(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ol(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_s(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ol(t,!0,n,null,o);break;case"together":ol(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Go(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Jt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Qn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=Tn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Tn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function I0(e,t,n){switch(t.tag){case 3:um(t),Dr();break;case 5:Up(t);break;case 1:Ye(t.type)&&hs(t);break;case 4:ac(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ae(gs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ae(pe,pe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?cm(e,t,n):(ae(pe,pe.current&1),e=Jt(e,t,n),e!==null?e.sibling:null);ae(pe,pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return dm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(pe,pe.current),r)break;return null;case 22:case 23:return t.lanes=0,am(e,t,n)}return Jt(e,t,n)}var fm,uu,hm,pm;fm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};uu=function(){};hm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,zn(Dt.current);var o=null;switch(n){case"input":i=Ol(e,i),r=Ol(e,r),o=[];break;case"select":i=ge({},i,{value:void 0}),r=ge({},r,{value:void 0}),o=[];break;case"textarea":i=Ll(e,i),r=Ll(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ds)}Ml(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ri.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ri.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ce("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};pm=function(e,t,n,r){n!==r&&(t.flags|=4)};function ri(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function T0(e,t,n){var r=t.pendingProps;switch(ec(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Ye(t.type)&&fs(),Me(t),null;case 3:return r=t.stateNode,$r(),de(Qe),de(Ue),uc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ro(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Et!==null&&(vu(Et),Et=null))),uu(e,t),Me(t),null;case 5:lc(t);var i=zn(zi.current);if(n=t.type,e!==null&&t.stateNode!=null)hm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return Me(t),null}if(e=zn(Dt.current),Ro(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Nt]=t,r[$i]=o,e=(t.mode&1)!==0,n){case"dialog":ce("cancel",r),ce("close",r);break;case"iframe":case"object":case"embed":ce("load",r);break;case"video":case"audio":for(i=0;i<ci.length;i++)ce(ci[i],r);break;case"source":ce("error",r);break;case"img":case"image":case"link":ce("error",r),ce("load",r);break;case"details":ce("toggle",r);break;case"input":fd(r,o),ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ce("invalid",r);break;case"textarea":pd(r,o),ce("invalid",r)}Ml(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Co(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Co(r.textContent,a,e),i=["children",""+a]):Ri.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ce("scroll",r)}switch(n){case"input":yo(r),hd(r,o,!0);break;case"textarea":yo(r),md(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ds)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Nt]=t,e[$i]=r,fm(e,t,!1,!1),t.stateNode=e;e:{switch(s=$l(n,r),n){case"dialog":ce("cancel",e),ce("close",e),i=r;break;case"iframe":case"object":case"embed":ce("load",e),i=r;break;case"video":case"audio":for(i=0;i<ci.length;i++)ce(ci[i],e);i=r;break;case"source":ce("error",e),i=r;break;case"img":case"image":case"link":ce("error",e),ce("load",e),i=r;break;case"details":ce("toggle",e),i=r;break;case"input":fd(e,r),i=Ol(e,r),ce("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ge({},r,{value:void 0}),ce("invalid",e);break;case"textarea":pd(e,r),i=Ll(e,r),ce("invalid",e);break;default:i=r}Ml(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Vh(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&jh(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Pi(e,l):typeof l=="number"&&Pi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ri.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ce("scroll",e):l!=null&&zu(e,o,l,s))}switch(n){case"input":yo(e),hd(e,r,!1);break;case"textarea":yo(e),md(e);break;case"option":r.value!=null&&e.setAttribute("value",""+xn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Tr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Tr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ds)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Me(t),null;case 6:if(e&&t.stateNode!=null)pm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=zn(zi.current),zn(Dt.current),Ro(t)){if(r=t.stateNode,n=t.memoizedProps,r[Nt]=t,(o=r.nodeValue!==n)&&(e=nt,e!==null))switch(e.tag){case 3:Co(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Co(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Nt]=t,t.stateNode=r}return Me(t),null;case 13:if(de(pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(fe&&et!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Op(),Dr(),t.flags|=98560,o=!1;else if(o=Ro(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(R(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(R(317));o[Nt]=t}else Dr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),o=!1}else Et!==null&&(vu(Et),Et=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(pe.current&1)!==0?Ie===0&&(Ie=3):Sc())),t.updateQueue!==null&&(t.flags|=4),Me(t),null);case 4:return $r(),uu(e,t),e===null&&Di(t.stateNode.containerInfo),Me(t),null;case 10:return ic(t.type._context),Me(t),null;case 17:return Ye(t.type)&&fs(),Me(t),null;case 19:if(de(pe),o=t.memoizedState,o===null)return Me(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)ri(o,!1);else{if(Ie!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=_s(e),s!==null){for(t.flags|=128,ri(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ae(pe,pe.current&1|2),t.child}e=e.sibling}o.tail!==null&&we()>zr&&(t.flags|=128,r=!0,ri(o,!1),t.lanes=4194304)}else{if(!r)if(e=_s(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ri(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!fe)return Me(t),null}else 2*we()-o.renderingStartTime>zr&&n!==1073741824&&(t.flags|=128,r=!0,ri(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=we(),t.sibling=null,n=pe.current,ae(pe,r?n&1|2:n&1),t):(Me(t),null);case 22:case 23:return wc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ze&1073741824)!==0&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function C0(e,t){switch(ec(t),t.tag){case 1:return Ye(t.type)&&fs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $r(),de(Qe),de(Ue),uc(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return lc(t),null;case 13:if(de(pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));Dr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(pe),null;case 4:return $r(),null;case 10:return ic(t.type._context),null;case 22:case 23:return wc(),null;case 24:return null;default:return null}}var Ao=!1,$e=!1,R0=typeof WeakSet=="function"?WeakSet:Set,L=null;function Sr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ve(e,t,r)}else n.current=null}function cu(e,t,n){try{n()}catch(r){ve(e,t,r)}}var of=!1;function P0(e,t){if(ql=ls,e=yp(),Ju(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,h=0,p=e,m=null;t:for(;;){for(var _;p!==n||i!==0&&p.nodeType!==3||(a=s+i),p!==o||r!==0&&p.nodeType!==3||(l=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(_=p.firstChild)!==null;)m=p,p=_;for(;;){if(p===e)break t;if(m===n&&++u===i&&(a=s),m===o&&++h===r&&(l=s),(_=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=_}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kl={focusedElem:e,selectionRange:n},ls=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var y=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var g=y.memoizedProps,S=y.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?g:St(t.type,g),S);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(v){ve(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return y=of,of=!1,y}function _i(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&cu(t,n,o)}i=i.next}while(i!==r)}}function Ws(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function du(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function mm(e){var t=e.alternate;t!==null&&(e.alternate=null,mm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Nt],delete t[$i],delete t[Xl],delete t[c0],delete t[d0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function gm(e){return e.tag===5||e.tag===3||e.tag===4}function sf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ds));else if(r!==4&&(e=e.child,e!==null))for(fu(e,t,n),e=e.sibling;e!==null;)fu(e,t,n),e=e.sibling}function hu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(hu(e,t,n),e=e.sibling;e!==null;)hu(e,t,n),e=e.sibling}var Oe=null,kt=!1;function rn(e,t,n){for(n=n.child;n!==null;)vm(e,t,n),n=n.sibling}function vm(e,t,n){if(Lt&&typeof Lt.onCommitFiberUnmount=="function")try{Lt.onCommitFiberUnmount($s,n)}catch{}switch(n.tag){case 5:$e||Sr(n,t);case 6:var r=Oe,i=kt;Oe=null,rn(e,t,n),Oe=r,kt=i,Oe!==null&&(kt?(e=Oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Oe.removeChild(n.stateNode));break;case 18:Oe!==null&&(kt?(e=Oe,n=n.stateNode,e.nodeType===8?Ja(e.parentNode,n):e.nodeType===1&&Ja(e,n),Ni(e)):Ja(Oe,n.stateNode));break;case 4:r=Oe,i=kt,Oe=n.stateNode.containerInfo,kt=!0,rn(e,t,n),Oe=r,kt=i;break;case 0:case 11:case 14:case 15:if(!$e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&((o&2)!==0||(o&4)!==0)&&cu(n,t,s),i=i.next}while(i!==r)}rn(e,t,n);break;case 1:if(!$e&&(Sr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ve(n,t,a)}rn(e,t,n);break;case 21:rn(e,t,n);break;case 22:n.mode&1?($e=(r=$e)||n.memoizedState!==null,rn(e,t,n),$e=r):rn(e,t,n);break;default:rn(e,t,n)}}function af(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new R0),t.forEach(function(r){var i=$0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function wt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Oe=a.stateNode,kt=!1;break e;case 3:Oe=a.stateNode.containerInfo,kt=!0;break e;case 4:Oe=a.stateNode.containerInfo,kt=!0;break e}a=a.return}if(Oe===null)throw Error(R(160));vm(o,s,i),Oe=null,kt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ve(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ym(t,e),t=t.sibling}function ym(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(wt(t,e),At(e),r&4){try{_i(3,e,e.return),Ws(3,e)}catch(g){ve(e,e.return,g)}try{_i(5,e,e.return)}catch(g){ve(e,e.return,g)}}break;case 1:wt(t,e),At(e),r&512&&n!==null&&Sr(n,n.return);break;case 5:if(wt(t,e),At(e),r&512&&n!==null&&Sr(n,n.return),e.flags&32){var i=e.stateNode;try{Pi(i,"")}catch(g){ve(e,e.return,g)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&zh(i,o),$l(a,s);var u=$l(a,o);for(s=0;s<l.length;s+=2){var h=l[s],p=l[s+1];h==="style"?Vh(i,p):h==="dangerouslySetInnerHTML"?jh(i,p):h==="children"?Pi(i,p):zu(i,h,p,u)}switch(a){case"input":Nl(i,o);break;case"textarea":Fh(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var _=o.value;_!=null?Tr(i,!!o.multiple,_,!1):m!==!!o.multiple&&(o.defaultValue!=null?Tr(i,!!o.multiple,o.defaultValue,!0):Tr(i,!!o.multiple,o.multiple?[]:"",!1))}i[$i]=o}catch(g){ve(e,e.return,g)}}break;case 6:if(wt(t,e),At(e),r&4){if(e.stateNode===null)throw Error(R(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(g){ve(e,e.return,g)}}break;case 3:if(wt(t,e),At(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ni(t.containerInfo)}catch(g){ve(e,e.return,g)}break;case 4:wt(t,e),At(e);break;case 13:wt(t,e),At(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(yc=we())),r&4&&af(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?($e=(u=$e)||h,wt(t,e),$e=u):wt(t,e),At(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&(e.mode&1)!==0)for(L=e,h=e.child;h!==null;){for(p=L=h;L!==null;){switch(m=L,_=m.child,m.tag){case 0:case 11:case 14:case 15:_i(4,m,m.return);break;case 1:Sr(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(g){ve(r,n,g)}}break;case 5:Sr(m,m.return);break;case 22:if(m.memoizedState!==null){uf(p);continue}}_!==null?(_.return=m,L=_):uf(p)}h=h.sibling}e:for(h=null,p=e;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,l=p.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Hh("display",s))}catch(g){ve(e,e.return,g)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(g){ve(e,e.return,g)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:wt(t,e),At(e),r&4&&af(e);break;case 21:break;default:wt(t,e),At(e)}}function At(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(gm(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Pi(i,""),r.flags&=-33);var o=sf(e);hu(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=sf(e);fu(e,a,s);break;default:throw Error(R(161))}}catch(l){ve(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function x0(e,t,n){L=e,_m(e)}function _m(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var i=L,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Ao;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||$e;a=Ao;var u=$e;if(Ao=s,($e=l)&&!u)for(L=i;L!==null;)s=L,l=s.child,s.tag===22&&s.memoizedState!==null?cf(i):l!==null?(l.return=s,L=l):cf(i);for(;o!==null;)L=o,_m(o),o=o.sibling;L=i,Ao=a,$e=u}lf(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,L=o):lf(e)}}function lf(e){for(;L!==null;){var t=L;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:$e||Ws(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!$e)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:St(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Vd(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Vd(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Ni(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}$e||t.flags&512&&du(t)}catch(m){ve(t,t.return,m)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function uf(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function cf(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ws(4,t)}catch(l){ve(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ve(t,i,l)}}var o=t.return;try{du(t)}catch(l){ve(t,o,l)}break;case 5:var s=t.return;try{du(t)}catch(l){ve(t,s,l)}}}catch(l){ve(t,t.return,l)}if(t===e){L=null;break}var a=t.sibling;if(a!==null){a.return=t.return,L=a;break}L=t.return}}var A0=Math.ceil,ks=en.ReactCurrentDispatcher,gc=en.ReactCurrentOwner,ft=en.ReactCurrentBatchConfig,K=0,Re=null,Se=null,Ne=0,Ze=0,kr=Nn(0),Ie=0,Hi=null,Qn=0,Gs=0,vc=0,wi=null,qe=null,yc=0,zr=1/0,zt=null,Es=!1,pu=null,En=null,Oo=!1,gn=null,Is=0,Si=0,mu=null,qo=-1,Ko=0;function je(){return(K&6)!==0?we():qo!==-1?qo:qo=we()}function In(e){return(e.mode&1)===0?1:(K&2)!==0&&Ne!==0?Ne&-Ne:h0.transition!==null?(Ko===0&&(Ko=np()),Ko):(e=ne,e!==0||(e=window.event,e=e===void 0?16:up(e.type)),e)}function Tt(e,t,n,r){if(50<Si)throw Si=0,mu=null,Error(R(185));Ji(e,n,r),((K&2)===0||e!==Re)&&(e===Re&&((K&2)===0&&(Gs|=n),Ie===4&&un(e,Ne)),Xe(e,r),n===1&&K===0&&(t.mode&1)===0&&(zr=we()+500,js&&bn()))}function Xe(e,t){var n=e.callbackNode;hy(e,t);var r=as(e,e===Re?Ne:0);if(r===0)n!==null&&yd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&yd(n),t===1)e.tag===0?f0(df.bind(null,e)):Pp(df.bind(null,e)),l0(function(){(K&6)===0&&bn()}),n=null;else{switch(rp(r)){case 1:n=Vu;break;case 4:n=ep;break;case 16:n=ss;break;case 536870912:n=tp;break;default:n=ss}n=Rm(n,wm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function wm(e,t){if(qo=-1,Ko=0,(K&6)!==0)throw Error(R(327));var n=e.callbackNode;if(Ar()&&e.callbackNode!==n)return null;var r=as(e,e===Re?Ne:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Ts(e,r);else{t=r;var i=K;K|=2;var o=km();(Re!==e||Ne!==t)&&(zt=null,zr=we()+500,Bn(e,t));do try{b0();break}catch(a){Sm(e,a)}while(1);rc(),ks.current=o,K=i,Se!==null?t=0:(Re=null,Ne=0,t=Ie)}if(t!==0){if(t===2&&(i=jl(e),i!==0&&(r=i,t=gu(e,i))),t===1)throw n=Hi,Bn(e,0),un(e,r),Xe(e,we()),n;if(t===6)un(e,r);else{if(i=e.current.alternate,(r&30)===0&&!O0(i)&&(t=Ts(e,r),t===2&&(o=jl(e),o!==0&&(r=o,t=gu(e,o))),t===1))throw n=Hi,Bn(e,0),un(e,r),Xe(e,we()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:Dn(e,qe,zt);break;case 3:if(un(e,r),(r&130023424)===r&&(t=yc+500-we(),10<t)){if(as(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Yl(Dn.bind(null,e,qe,zt),t);break}Dn(e,qe,zt);break;case 4:if(un(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-It(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*A0(r/1960))-r,10<r){e.timeoutHandle=Yl(Dn.bind(null,e,qe,zt),r);break}Dn(e,qe,zt);break;case 5:Dn(e,qe,zt);break;default:throw Error(R(329))}}}return Xe(e,we()),e.callbackNode===n?wm.bind(null,e):null}function gu(e,t){var n=wi;return e.current.memoizedState.isDehydrated&&(Bn(e,t).flags|=256),e=Ts(e,t),e!==2&&(t=qe,qe=n,t!==null&&vu(t)),e}function vu(e){qe===null?qe=e:qe.push.apply(qe,e)}function O0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ct(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function un(e,t){for(t&=~vc,t&=~Gs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-It(t),r=1<<n;e[n]=-1,t&=~r}}function df(e){if((K&6)!==0)throw Error(R(327));Ar();var t=as(e,0);if((t&1)===0)return Xe(e,we()),null;var n=Ts(e,t);if(e.tag!==0&&n===2){var r=jl(e);r!==0&&(t=r,n=gu(e,r))}if(n===1)throw n=Hi,Bn(e,0),un(e,t),Xe(e,we()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dn(e,qe,zt),Xe(e,we()),null}function _c(e,t){var n=K;K|=1;try{return e(t)}finally{K=n,K===0&&(zr=we()+500,js&&bn())}}function Yn(e){gn!==null&&gn.tag===0&&(K&6)===0&&Ar();var t=K;K|=1;var n=ft.transition,r=ne;try{if(ft.transition=null,ne=1,e)return e()}finally{ne=r,ft.transition=n,K=t,(K&6)===0&&bn()}}function wc(){Ze=kr.current,de(kr)}function Bn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,a0(n)),Se!==null)for(n=Se.return;n!==null;){var r=n;switch(ec(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fs();break;case 3:$r(),de(Qe),de(Ue),uc();break;case 5:lc(r);break;case 4:$r();break;case 13:de(pe);break;case 19:de(pe);break;case 10:ic(r.type._context);break;case 22:case 23:wc()}n=n.return}if(Re=e,Se=e=Tn(e.current,null),Ne=Ze=t,Ie=0,Hi=null,vc=Gs=Qn=0,qe=wi=null,Un!==null){for(t=0;t<Un.length;t++)if(n=Un[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Un=null}return e}function Sm(e,t){do{var n=Se;try{if(rc(),Vo.current=Ss,ws){for(var r=me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ws=!1}if(Kn=0,Te=Ee=me=null,yi=!1,Fi=0,gc.current=null,n===null||n.return===null){Ie=1,Hi=t,Se=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=Ne,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,p=h.tag;if((h.mode&1)===0&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var _=Xd(s);if(_!==null){_.flags&=-257,Jd(_,s,a,o,t),_.mode&1&&Yd(o,u,t),t=_,l=u;var y=t.updateQueue;if(y===null){var g=new Set;g.add(l),t.updateQueue=g}else y.add(l);break e}else{if((t&1)===0){Yd(o,u,t),Sc();break e}l=Error(R(426))}}else if(fe&&a.mode&1){var S=Xd(s);if(S!==null){(S.flags&65536)===0&&(S.flags|=256),Jd(S,s,a,o,t),tc(Ur(l,a));break e}}o=l=Ur(l,a),Ie!==4&&(Ie=2),wi===null?wi=[o]:wi.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=im(o,l,t);Hd(o,f);break e;case 1:a=l;var c=o.type,d=o.stateNode;if((o.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(En===null||!En.has(d)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=om(o,a,t);Hd(o,v);break e}}o=o.return}while(o!==null)}Im(n)}catch(k){t=k,Se===n&&n!==null&&(Se=n=n.return);continue}break}while(1)}function km(){var e=ks.current;return ks.current=Ss,e===null?Ss:e}function Sc(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),Re===null||(Qn&268435455)===0&&(Gs&268435455)===0||un(Re,Ne)}function Ts(e,t){var n=K;K|=2;var r=km();(Re!==e||Ne!==t)&&(zt=null,Bn(e,t));do try{N0();break}catch(i){Sm(e,i)}while(1);if(rc(),K=n,ks.current=r,Se!==null)throw Error(R(261));return Re=null,Ne=0,Ie}function N0(){for(;Se!==null;)Em(Se)}function b0(){for(;Se!==null&&!iy();)Em(Se)}function Em(e){var t=Cm(e.alternate,e,Ze);e.memoizedProps=e.pendingProps,t===null?Im(e):Se=t,gc.current=null}function Im(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=T0(n,t,Ze),n!==null){Se=n;return}}else{if(n=C0(n,t),n!==null){n.flags&=32767,Se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ie=6,Se=null;return}}if(t=t.sibling,t!==null){Se=t;return}Se=t=e}while(t!==null);Ie===0&&(Ie=5)}function Dn(e,t,n){var r=ne,i=ft.transition;try{ft.transition=null,ne=1,L0(e,t,n,r)}finally{ft.transition=i,ne=r}return null}function L0(e,t,n,r){do Ar();while(gn!==null);if((K&6)!==0)throw Error(R(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(py(e,o),e===Re&&(Se=Re=null,Ne=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Oo||(Oo=!0,Rm(ss,function(){return Ar(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=ft.transition,ft.transition=null;var s=ne;ne=1;var a=K;K|=4,gc.current=null,P0(e,n),ym(n,e),e0(Kl),ls=!!ql,Kl=ql=null,e.current=n,x0(n),oy(),K=a,ne=s,ft.transition=o}else e.current=n;if(Oo&&(Oo=!1,gn=e,Is=i),o=e.pendingLanes,o===0&&(En=null),ly(n.stateNode),Xe(e,we()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Es)throw Es=!1,e=pu,pu=null,e;return(Is&1)!==0&&e.tag!==0&&Ar(),o=e.pendingLanes,(o&1)!==0?e===mu?Si++:(Si=0,mu=e):Si=0,bn(),null}function Ar(){if(gn!==null){var e=rp(Is),t=ft.transition,n=ne;try{if(ft.transition=null,ne=16>e?16:e,gn===null)var r=!1;else{if(e=gn,gn=null,Is=0,(K&6)!==0)throw Error(R(331));var i=K;for(K|=4,L=e.current;L!==null;){var o=L,s=o.child;if((L.flags&16)!==0){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(L=u;L!==null;){var h=L;switch(h.tag){case 0:case 11:case 15:_i(8,h,o)}var p=h.child;if(p!==null)p.return=h,L=p;else for(;L!==null;){h=L;var m=h.sibling,_=h.return;if(mm(h),h===u){L=null;break}if(m!==null){m.return=_,L=m;break}L=_}}}var y=o.alternate;if(y!==null){var g=y.child;if(g!==null){y.child=null;do{var S=g.sibling;g.sibling=null,g=S}while(g!==null)}}L=o}}if((o.subtreeFlags&2064)!==0&&s!==null)s.return=o,L=s;else e:for(;L!==null;){if(o=L,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:_i(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,L=f;break e}L=o.return}}var c=e.current;for(L=c;L!==null;){s=L;var d=s.child;if((s.subtreeFlags&2064)!==0&&d!==null)d.return=s,L=d;else e:for(s=c;L!==null;){if(a=L,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Ws(9,a)}}catch(k){ve(a,a.return,k)}if(a===s){L=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,L=v;break e}L=a.return}}if(K=i,bn(),Lt&&typeof Lt.onPostCommitFiberRoot=="function")try{Lt.onPostCommitFiberRoot($s,e)}catch{}r=!0}return r}finally{ne=n,ft.transition=t}}return!1}function ff(e,t,n){t=Ur(n,t),t=im(e,t,1),e=kn(e,t,1),t=je(),e!==null&&(Ji(e,1,t),Xe(e,t))}function ve(e,t,n){if(e.tag===3)ff(e,e,n);else for(;t!==null;){if(t.tag===3){ff(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(En===null||!En.has(r))){e=Ur(n,e),e=om(t,e,1),t=kn(t,e,1),e=je(),t!==null&&(Ji(t,1,e),Xe(t,e));break}}t=t.return}}function D0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=je(),e.pingedLanes|=e.suspendedLanes&n,Re===e&&(Ne&n)===n&&(Ie===4||Ie===3&&(Ne&130023424)===Ne&&500>we()-yc?Bn(e,0):vc|=n),Xe(e,t)}function Tm(e,t){t===0&&((e.mode&1)===0?t=1:(t=So,So<<=1,(So&130023424)===0&&(So=4194304)));var n=je();e=Xt(e,t),e!==null&&(Ji(e,t,n),Xe(e,n))}function M0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Tm(e,n)}function $0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),Tm(e,n)}var Cm;Cm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Qe.current)Ke=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ke=!1,I0(e,t,n);Ke=(e.flags&131072)!==0}else Ke=!1,fe&&(t.flags&1048576)!==0&&xp(t,ms,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Go(e,t),e=t.pendingProps;var i=Lr(t,Ue.current);xr(t,n),i=dc(null,t,r,e,i,n);var o=fc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ye(r)?(o=!0,hs(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,sc(t),i.updater=Hs,t.stateNode=i,i._reactInternals=t,ru(t,r,e,n),t=su(null,t,r,!0,o,n)):(t.tag=0,fe&&o&&Zu(t),Be(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Go(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=z0(r),e=St(r,e),i){case 0:t=ou(null,t,r,e,n);break e;case 1:t=tf(null,t,r,e,n);break e;case 11:t=Zd(null,t,r,e,n);break e;case 14:t=ef(null,t,r,St(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),ou(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),tf(e,t,r,i,n);case 3:e:{if(um(t),e===null)throw Error(R(387));r=t.pendingProps,o=t.memoizedState,i=o.element,bp(e,t),ys(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ur(Error(R(423)),t),t=nf(e,t,r,n,i);break e}else if(r!==i){i=Ur(Error(R(424)),t),t=nf(e,t,r,n,i);break e}else for(et=Sn(t.stateNode.containerInfo.firstChild),nt=t,fe=!0,Et=null,n=$p(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Dr(),r===i){t=Jt(e,t,n);break e}Be(e,t,r,n)}t=t.child}return t;case 5:return Up(t),e===null&&eu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Ql(r,i)?s=null:o!==null&&Ql(r,o)&&(t.flags|=32),lm(e,t),Be(e,t,s,n),t.child;case 6:return e===null&&eu(t),null;case 13:return cm(e,t,n);case 4:return ac(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Mr(t,null,r,n):Be(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),Zd(e,t,r,i,n);case 7:return Be(e,t,t.pendingProps,n),t.child;case 8:return Be(e,t,t.pendingProps.children,n),t.child;case 12:return Be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,ae(gs,r._currentValue),r._currentValue=s,o!==null)if(Ct(o.value,s)){if(o.children===i.children&&!Qe.current){t=Jt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Gt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),tu(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(R(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),tu(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Be(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,xr(t,n),i=mt(i),r=r(i),t.flags|=1,Be(e,t,r,n),t.child;case 14:return r=t.type,i=St(r,t.pendingProps),i=St(r.type,i),ef(e,t,r,i,n);case 15:return sm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),Go(e,t),t.tag=1,Ye(r)?(e=!0,hs(t)):e=!1,xr(t,n),Dp(t,r,i),ru(t,r,i,n),su(null,t,r,!0,e,n);case 19:return dm(e,t,n);case 22:return am(e,t,n)}throw Error(R(156,t.tag))};function Rm(e,t){return Zh(e,t)}function U0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(e,t,n,r){return new U0(e,t,n,r)}function kc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function z0(e){if(typeof e=="function")return kc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Bu)return 11;if(e===ju)return 14}return 2}function Tn(e,t){var n=e.alternate;return n===null?(n=ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Qo(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")kc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case fr:return jn(n.children,i,o,t);case Fu:s=8,i|=8;break;case Rl:return e=ct(12,n,t,i|2),e.elementType=Rl,e.lanes=o,e;case Pl:return e=ct(13,n,t,i),e.elementType=Pl,e.lanes=o,e;case xl:return e=ct(19,n,t,i),e.elementType=xl,e.lanes=o,e;case Mh:return qs(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Lh:s=10;break e;case Dh:s=9;break e;case Bu:s=11;break e;case ju:s=14;break e;case sn:s=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=ct(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function jn(e,t,n,r){return e=ct(7,e,r,t),e.lanes=n,e}function qs(e,t,n,r){return e=ct(22,e,r,t),e.elementType=Mh,e.lanes=n,e.stateNode={isHidden:!1},e}function sl(e,t,n){return e=ct(6,e,null,t),e.lanes=n,e}function al(e,t,n){return t=ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function F0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ba(0),this.expirationTimes=Ba(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ba(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ec(e,t,n,r,i,o,s,a,l){return e=new F0(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ct(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sc(o),e}function B0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:dr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Pm(e){if(!e)return An;e=e._reactInternals;e:{if(or(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(Ye(n))return Rp(e,n,t)}return t}function xm(e,t,n,r,i,o,s,a,l){return e=Ec(n,r,!0,e,i,o,s,a,l),e.context=Pm(null),n=e.current,r=je(),i=In(n),o=Gt(r,i),o.callback=t!=null?t:null,kn(n,o,i),e.current.lanes=i,Ji(e,i,r),Xe(e,r),e}function Ks(e,t,n,r){var i=t.current,o=je(),s=In(i);return n=Pm(n),t.context===null?t.context=n:t.pendingContext=n,t=Gt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=kn(i,t,s),e!==null&&(Tt(e,i,s,o),Ho(e,i,s)),s}function Cs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ic(e,t){hf(e,t),(e=e.alternate)&&hf(e,t)}function j0(){return null}var Am=typeof reportError=="function"?reportError:function(e){console.error(e)};function Tc(e){this._internalRoot=e}Qs.prototype.render=Tc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));Ks(e,t,null,null)};Qs.prototype.unmount=Tc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Yn(function(){Ks(null,e,null,null)}),t[Yt]=null}};function Qs(e){this._internalRoot=e}Qs.prototype.unstable_scheduleHydration=function(e){if(e){var t=sp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ln.length&&t!==0&&t<ln[n].priority;n++);ln.splice(n,0,e),n===0&&lp(e)}};function Cc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ys(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function pf(){}function H0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Cs(s);o.call(u)}}var s=xm(t,r,e,0,null,!1,!1,"",pf);return e._reactRootContainer=s,e[Yt]=s.current,Di(e.nodeType===8?e.parentNode:e),Yn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Cs(l);a.call(u)}}var l=Ec(e,0,!1,null,null,!1,!1,"",pf);return e._reactRootContainer=l,e[Yt]=l.current,Di(e.nodeType===8?e.parentNode:e),Yn(function(){Ks(t,l,n,r)}),l}function Xs(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Cs(s);a.call(l)}}Ks(t,s,e,i)}else s=H0(n,t,e,i,r);return Cs(s)}ip=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ui(t.pendingLanes);n!==0&&(Wu(t,n|1),Xe(t,we()),(K&6)===0&&(zr=we()+500,bn()))}break;case 13:Yn(function(){var r=Xt(e,1);if(r!==null){var i=je();Tt(r,e,1,i)}}),Ic(e,1)}};Gu=function(e){if(e.tag===13){var t=Xt(e,134217728);if(t!==null){var n=je();Tt(t,e,134217728,n)}Ic(e,134217728)}};op=function(e){if(e.tag===13){var t=In(e),n=Xt(e,t);if(n!==null){var r=je();Tt(n,e,t,r)}Ic(e,t)}};sp=function(){return ne};ap=function(e,t){var n=ne;try{return ne=e,t()}finally{ne=n}};zl=function(e,t,n){switch(t){case"input":if(Nl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Bs(r);if(!i)throw Error(R(90));Uh(r),Nl(r,i)}}}break;case"textarea":Fh(e,n);break;case"select":t=n.value,t!=null&&Tr(e,!!n.multiple,t,!1)}};qh=_c;Kh=Yn;var V0={usingClientEntryPoint:!1,Events:[eo,gr,Bs,Wh,Gh,_c]},ii={findFiberByHostInstance:$n,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},W0={bundleType:ii.bundleType,version:ii.version,rendererPackageName:ii.rendererPackageName,rendererConfig:ii.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:en.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Xh(e),e===null?null:e.stateNode},findFiberByHostInstance:ii.findFiberByHostInstance||j0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var No=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!No.isDisabled&&No.supportsFiber)try{$s=No.inject(W0),Lt=No}catch{}}ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V0;ot.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cc(t))throw Error(R(200));return B0(e,t,null,n)};ot.createRoot=function(e,t){if(!Cc(e))throw Error(R(299));var n=!1,r="",i=Am;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ec(e,1,!1,null,null,n,!1,r,i),e[Yt]=t.current,Di(e.nodeType===8?e.parentNode:e),new Tc(t)};ot.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=Xh(t),e=e===null?null:e.stateNode,e};ot.flushSync=function(e){return Yn(e)};ot.hydrate=function(e,t,n){if(!Ys(t))throw Error(R(200));return Xs(null,e,t,!0,n)};ot.hydrateRoot=function(e,t,n){if(!Cc(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Am;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=xm(t,null,e,1,n!=null?n:null,i,!1,o,s),e[Yt]=t.current,Di(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Qs(t)};ot.render=function(e,t,n){if(!Ys(t))throw Error(R(200));return Xs(null,e,t,!1,n)};ot.unmountComponentAtNode=function(e){if(!Ys(e))throw Error(R(40));return e._reactRootContainer?(Yn(function(){Xs(null,null,e,!1,function(){e._reactRootContainer=null,e[Yt]=null})}),!0):!1};ot.unstable_batchedUpdates=_c;ot.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ys(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return Xs(e,t,n,!1,r)};ot.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=ot})(xh);var mf=xh.exports;Tl.createRoot=mf.createRoot,Tl.hydrateRoot=mf.hydrateRoot;/**
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
 */const Om=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},G0=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},Nm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,h=o>>2,p=(o&3)<<4|a>>4;let m=(a&15)<<2|u>>6,_=u&63;l||(_=64,s||(m=64)),r.push(n[h],n[p],n[m],n[_])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Om(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):G0(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const p=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||p==null)throw Error();const m=o<<2|a>>4;if(r.push(m),u!==64){const _=a<<4&240|u>>2;if(r.push(_),p!==64){const y=u<<6&192|p;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},q0=function(e){const t=Om(e);return Nm.encodeByteArray(t,!0)},bm=function(e){return q0(e).replace(/\./g,"")},K0=function(e){try{return Nm.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */class Q0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Y0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function Lm(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function X0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function J0(){const e=ze();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Dm(){return typeof indexedDB=="object"}function Mm(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function Z0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const e1="FirebaseError";class xt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=e1,Object.setPrototypeOf(this,xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sr.prototype.create)}}class sr{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?t1(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new xt(i,a,r)}}function t1(e,t){return e.replace(n1,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const n1=/\{\$([^}]+)}/g;function r1(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Vi(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(gf(o)&&gf(s)){if(!Vi(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function gf(e){return e!==null&&typeof e=="object"}/**
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
 */function no(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function di(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function fi(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function i1(e,t){const n=new o1(e,t);return n.subscribe.bind(n)}class o1{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");s1(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=ll),i.error===void 0&&(i.error=ll),i.complete===void 0&&(i.complete=ll);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function s1(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function ll(){}/**
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
 */const a1=1e3,l1=2,u1=4*60*60*1e3,c1=.5;function vf(e,t=a1,n=l1){const r=t*Math.pow(n,e),i=Math.round(c1*r*(Math.random()-.5)*2);return Math.min(u1,r+i)}/**
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
 */function vt(e){return e&&e._delegate?e._delegate:e}class Rt{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Mn="[DEFAULT]";/**
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
 */class d1{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Q0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(h1(t))try{this.getOrInitializeService({instanceIdentifier:Mn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Mn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Mn){return this.instances.has(t)}getOptions(t=Mn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:f1(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Mn){return this.component?this.component.multipleInstances?t:Mn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function f1(e){return e===Mn?void 0:e}function h1(e){return e.instantiationMode==="EAGER"}/**
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
 */class p1{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new d1(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(se||(se={}));const m1={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},g1=se.INFO,v1={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},y1=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=v1[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Rc{constructor(t){this.name=t,this._logLevel=g1,this._logHandler=y1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in se))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?m1[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...t),this._logHandler(this,se.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...t),this._logHandler(this,se.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,se.INFO,...t),this._logHandler(this,se.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,se.WARN,...t),this._logHandler(this,se.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...t),this._logHandler(this,se.ERROR,...t)}}const _1=(e,t)=>t.some(n=>e instanceof n);let yf,_f;function w1(){return yf||(yf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function S1(){return _f||(_f=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $m=new WeakMap,yu=new WeakMap,Um=new WeakMap,ul=new WeakMap,Pc=new WeakMap;function k1(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(Cn(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&$m.set(n,e)}).catch(()=>{}),Pc.set(t,e),t}function E1(e){if(yu.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});yu.set(e,t)}let _u={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return yu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Um.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function I1(e){_u=e(_u)}function T1(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(cl(this),t,...n);return Um.set(r,t.sort?t.sort():[t]),Cn(r)}:S1().includes(e)?function(...t){return e.apply(cl(this),t),Cn($m.get(this))}:function(...t){return Cn(e.apply(cl(this),t))}}function C1(e){return typeof e=="function"?T1(e):(e instanceof IDBTransaction&&E1(e),_1(e,w1())?new Proxy(e,_u):e)}function Cn(e){if(e instanceof IDBRequest)return k1(e);if(ul.has(e))return ul.get(e);const t=C1(e);return t!==e&&(ul.set(e,t),Pc.set(t,e)),t}const cl=e=>Pc.get(e);function zm(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=Cn(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Cn(s.result),l.oldVersion,l.newVersion,Cn(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const R1=["get","getKey","getAll","getAllKeys","count"],P1=["put","add","delete","clear"],dl=new Map;function wf(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(dl.get(t))return dl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=P1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||R1.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return dl.set(t,o),o}I1(e=>({...e,get:(t,n,r)=>wf(t,n)||e.get(t,n,r),has:(t,n)=>!!wf(t,n)||e.has(t,n)}));/**
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
 */class x1{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(A1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function A1(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const wu="@firebase/app",Sf="0.7.32";/**
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
 */const Xn=new Rc("@firebase/app"),O1="@firebase/app-compat",N1="@firebase/analytics-compat",b1="@firebase/analytics",L1="@firebase/app-check-compat",D1="@firebase/app-check",M1="@firebase/auth",$1="@firebase/auth-compat",U1="@firebase/database",z1="@firebase/database-compat",F1="@firebase/functions",B1="@firebase/functions-compat",j1="@firebase/installations",H1="@firebase/installations-compat",V1="@firebase/messaging",W1="@firebase/messaging-compat",G1="@firebase/performance",q1="@firebase/performance-compat",K1="@firebase/remote-config",Q1="@firebase/remote-config-compat",Y1="@firebase/storage",X1="@firebase/storage-compat",J1="@firebase/firestore",Z1="@firebase/firestore-compat",e_="firebase",t_="9.9.4";/**
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
 */const Fm="[DEFAULT]",n_={[wu]:"fire-core",[O1]:"fire-core-compat",[b1]:"fire-analytics",[N1]:"fire-analytics-compat",[D1]:"fire-app-check",[L1]:"fire-app-check-compat",[M1]:"fire-auth",[$1]:"fire-auth-compat",[U1]:"fire-rtdb",[z1]:"fire-rtdb-compat",[F1]:"fire-fn",[B1]:"fire-fn-compat",[j1]:"fire-iid",[H1]:"fire-iid-compat",[V1]:"fire-fcm",[W1]:"fire-fcm-compat",[G1]:"fire-perf",[q1]:"fire-perf-compat",[K1]:"fire-rc",[Q1]:"fire-rc-compat",[Y1]:"fire-gcs",[X1]:"fire-gcs-compat",[J1]:"fire-fst",[Z1]:"fire-fst-compat","fire-js":"fire-js",[e_]:"fire-js-all"};/**
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
 */const Rs=new Map,Su=new Map;function r_(e,t){try{e.container.addComponent(t)}catch(n){Xn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ut(e){const t=e.name;if(Su.has(t))return Xn.debug(`There were multiple attempts to register component ${t}.`),!1;Su.set(t,e);for(const n of Rs.values())r_(n,e);return!0}function ar(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const i_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Jn=new sr("app","Firebase",i_);/**
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
 */class o_{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Jn.create("app-deleted",{appName:this._name})}}/**
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
 */const ro=t_;function s_(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:Fm,automaticDataCollectionEnabled:!1},t),r=n.name;if(typeof r!="string"||!r)throw Jn.create("bad-app-name",{appName:String(r)});const i=Rs.get(r);if(i){if(Vi(e,i.options)&&Vi(n,i.config))return i;throw Jn.create("duplicate-app",{appName:r})}const o=new p1(r);for(const a of Su.values())o.addComponent(a);const s=new o_(e,n,o);return Rs.set(r,s),s}function xc(e=Fm){const t=Rs.get(e);if(!t)throw Jn.create("no-app",{appName:e});return t}function ht(e,t,n){var r;let i=(r=n_[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Xn.warn(a.join(" "));return}Ut(new Rt(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const a_="firebase-heartbeat-database",l_=1,Wi="firebase-heartbeat-store";let fl=null;function Bm(){return fl||(fl=zm(a_,l_,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Wi)}}}).catch(e=>{throw Jn.create("idb-open",{originalErrorMessage:e.message})})),fl}async function u_(e){var t;try{return(await Bm()).transaction(Wi).objectStore(Wi).get(jm(e))}catch(n){if(n instanceof xt)Xn.warn(n.message);else{const r=Jn.create("idb-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message});Xn.warn(r.message)}}}async function kf(e,t){var n;try{const i=(await Bm()).transaction(Wi,"readwrite");return await i.objectStore(Wi).put(t,jm(e)),i.done}catch(r){if(r instanceof xt)Xn.warn(r.message);else{const i=Jn.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Xn.warn(i.message)}}}function jm(e){return`${e.name}!${e.options.appId}`}/**
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
 */const c_=1024,d_=30*24*60*60*1e3;class f_{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new p_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ef();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=d_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ef(),{heartbeatsToSend:n,unsentEntries:r}=h_(this._heartbeatsCache.heartbeats),i=bm(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ef(){return new Date().toISOString().substring(0,10)}function h_(e,t=c_){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),If(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),If(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class p_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dm()?Mm().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await u_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return kf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return kf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function If(e){return bm(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function m_(e){Ut(new Rt("platform-logger",t=>new x1(t),"PRIVATE")),Ut(new Rt("heartbeat",t=>new f_(t),"PRIVATE")),ht(wu,Sf,e),ht(wu,Sf,"esm2017"),ht("fire-js","")}m_("");var g_="firebase",v_="9.9.4";/**
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
 */ht(g_,v_,"app");const Hm="@firebase/installations",Ac="0.5.12";/**
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
 */const Vm=1e4,Wm=`w:${Ac}`,Gm="FIS_v2",y_="https://firebaseinstallations.googleapis.com/v1",__=60*60*1e3,w_="installations",S_="Installations";/**
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
 */const k_={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Zn=new sr(w_,S_,k_);function qm(e){return e instanceof xt&&e.code.includes("request-failed")}/**
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
 */function Km({projectId:e}){return`${y_}/projects/${e}/installations`}function Qm(e){return{token:e.token,requestStatus:2,expiresIn:I_(e.expiresIn),creationTime:Date.now()}}async function Ym(e,t){const r=(await t.json()).error;return Zn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Xm({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function E_(e,{refreshToken:t}){const n=Xm(e);return n.append("Authorization",T_(t)),n}async function Jm(e){const t=await e();return t.status>=500&&t.status<600?e():t}function I_(e){return Number(e.replace("s","000"))}function T_(e){return`${Gm} ${e}`}/**
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
 */async function C_({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Km(e),i=Xm(e),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:n,authVersion:Gm,appId:e.appId,sdkVersion:Wm},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await Jm(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Qm(u.authToken)}}else throw await Ym("Create Installation",l)}/**
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
 */function Zm(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function R_(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const P_=/^[cdef][\w-]{21}$/,ku="";function x_(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=A_(e);return P_.test(n)?n:ku}catch{return ku}}function A_(e){return R_(e).substr(0,22)}/**
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
 */function Js(e){return`${e.appName}!${e.appId}`}/**
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
 */const eg=new Map;function tg(e,t){const n=Js(e);ng(n,t),O_(n,t)}function ng(e,t){const n=eg.get(e);if(!!n)for(const r of n)r(t)}function O_(e,t){const n=N_();n&&n.postMessage({key:e,fid:t}),b_()}let Fn=null;function N_(){return!Fn&&"BroadcastChannel"in self&&(Fn=new BroadcastChannel("[Firebase] FID Change"),Fn.onmessage=e=>{ng(e.data.key,e.data.fid)}),Fn}function b_(){eg.size===0&&Fn&&(Fn.close(),Fn=null)}/**
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
 */const L_="firebase-installations-database",D_=1,er="firebase-installations-store";let hl=null;function Oc(){return hl||(hl=zm(L_,D_,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(er)}}})),hl}async function Ps(e,t){const n=Js(e),i=(await Oc()).transaction(er,"readwrite"),o=i.objectStore(er),s=await o.get(n);return await o.put(t,n),await i.done,(!s||s.fid!==t.fid)&&tg(e,t.fid),t}async function rg(e){const t=Js(e),r=(await Oc()).transaction(er,"readwrite");await r.objectStore(er).delete(t),await r.done}async function Zs(e,t){const n=Js(e),i=(await Oc()).transaction(er,"readwrite"),o=i.objectStore(er),s=await o.get(n),a=t(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&tg(e,a.fid),a}/**
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
 */async function Nc(e){let t;const n=await Zs(e.appConfig,r=>{const i=M_(r),o=$_(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===ku?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function M_(e){const t=e||{fid:x_(),registrationStatus:0};return ig(t)}function $_(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Zn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=U_(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:z_(e)}:{installationEntry:t}}async function U_(e,t){try{const n=await C_(e,t);return Ps(e.appConfig,n)}catch(n){throw qm(n)&&n.customData.serverCode===409?await rg(e.appConfig):await Ps(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function z_(e){let t=await Tf(e.appConfig);for(;t.registrationStatus===1;)await Zm(100),t=await Tf(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Nc(e);return r||n}return t}function Tf(e){return Zs(e,t=>{if(!t)throw Zn.create("installation-not-found");return ig(t)})}function ig(e){return F_(e)?{fid:e.fid,registrationStatus:0}:e}function F_(e){return e.registrationStatus===1&&e.registrationTime+Vm<Date.now()}/**
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
 */async function B_({appConfig:e,heartbeatServiceProvider:t},n){const r=j_(e,n),i=E_(e,n),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:Wm,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await Jm(()=>fetch(r,a));if(l.ok){const u=await l.json();return Qm(u)}else throw await Ym("Generate Auth Token",l)}function j_(e,{fid:t}){return`${Km(e)}/${t}/authTokens:generate`}/**
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
 */async function bc(e,t=!1){let n;const r=await Zs(e.appConfig,o=>{if(!og(o))throw Zn.create("not-registered");const s=o.authToken;if(!t&&W_(s))return o;if(s.requestStatus===1)return n=H_(e,t),o;{if(!navigator.onLine)throw Zn.create("app-offline");const a=q_(o);return n=V_(e,a),a}});return n?await n:r.authToken}async function H_(e,t){let n=await Cf(e.appConfig);for(;n.authToken.requestStatus===1;)await Zm(100),n=await Cf(e.appConfig);const r=n.authToken;return r.requestStatus===0?bc(e,t):r}function Cf(e){return Zs(e,t=>{if(!og(t))throw Zn.create("not-registered");const n=t.authToken;return K_(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function V_(e,t){try{const n=await B_(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Ps(e.appConfig,r),n}catch(n){if(qm(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await rg(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Ps(e.appConfig,r)}throw n}}function og(e){return e!==void 0&&e.registrationStatus===2}function W_(e){return e.requestStatus===2&&!G_(e)}function G_(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+__}function q_(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function K_(e){return e.requestStatus===1&&e.requestTime+Vm<Date.now()}/**
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
 */async function Q_(e){const t=e,{installationEntry:n,registrationPromise:r}=await Nc(t);return r?r.catch(console.error):bc(t).catch(console.error),n.fid}/**
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
 */async function Y_(e,t=!1){const n=e;return await X_(n),(await bc(n,t)).token}async function X_(e){const{registrationPromise:t}=await Nc(e);t&&await t}/**
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
 */function J_(e){if(!e||!e.options)throw pl("App Configuration");if(!e.name)throw pl("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw pl(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function pl(e){return Zn.create("missing-app-config-values",{valueName:e})}/**
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
 */const sg="installations",Z_="installations-internal",ew=e=>{const t=e.getProvider("app").getImmediate(),n=J_(t),r=ar(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},tw=e=>{const t=e.getProvider("app").getImmediate(),n=ar(t,sg).getImmediate();return{getId:()=>Q_(n),getToken:i=>Y_(n,i)}};function nw(){Ut(new Rt(sg,ew,"PUBLIC")),Ut(new Rt(Z_,tw,"PRIVATE"))}nw();ht(Hm,Ac);ht(Hm,Ac,"esm2017");/**
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
 */const xs="analytics",rw="firebase_id",iw="origin",ow=60*1e3,sw="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ag="https://www.googletagmanager.com/gtag/js";/**
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
 */const rt=new Rc("@firebase/analytics");/**
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
 */function lg(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function aw(e,t){const n=document.createElement("script");n.src=`${ag}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function lw(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function uw(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const l=(await lg(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){rt.error(a)}e("config",i,o)}async function cw(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await lg(n);for(const l of s){const u=a.find(p=>p.measurementId===l),h=u&&t[u.appId];if(h)o.push(h);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){rt.error(o)}}function dw(e,t,n,r){async function i(o,s,a){try{o==="event"?await cw(e,t,n,s,a):o==="config"?await uw(e,t,n,r,s,a):o==="consent"?e("consent","update",a):e("set",s)}catch(l){rt.error(l)}}return i}function fw(e,t,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=dw(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function hw(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(ag))return t;return null}/**
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
 */const pw={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},pt=new sr("analytics","Analytics",pw);/**
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
 */const mw=30,gw=1e3;class vw{constructor(t={},n=gw){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const ug=new vw;function yw(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function _w(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:yw(r)},o=sw.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw pt.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function ww(e,t=ug,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw pt.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw pt.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Ew;return setTimeout(async()=>{a.abort()},n!==void 0?n:ow),cg({appId:r,apiKey:i,measurementId:o},s,a,t)}async function cg(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=ug){var o,s;const{appId:a,measurementId:l}=e;try{await Sw(r,t)}catch(u){if(l)return rt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${(o=u)===null||o===void 0?void 0:o.message}]`),{appId:a,measurementId:l};throw u}try{const u=await _w(e);return i.deleteThrottleMetadata(a),u}catch(u){const h=u;if(!kw(h)){if(i.deleteThrottleMetadata(a),l)return rt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:l};throw u}const p=Number((s=h==null?void 0:h.customData)===null||s===void 0?void 0:s.httpStatus)===503?vf(n,i.intervalMillis,mw):vf(n,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+p,backoffCount:n+1};return i.setThrottleMetadata(a,m),rt.debug(`Calling attemptFetch again in ${p} millis`),cg(e,m,r,i)}}function Sw(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(pt.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function kw(e){if(!(e instanceof xt)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Ew{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Iw(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const o=await t,s=Object.assign(Object.assign({},r),{send_to:o});e("event",n,s)}}/**
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
 */async function Tw(){var e;if(Dm())try{await Mm()}catch(t){return rt.warn(pt.create("indexeddb-unavailable",{errorInfo:(e=t)===null||e===void 0?void 0:e.toString()}).message),!1}else return rt.warn(pt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Cw(e,t,n,r,i,o,s){var a;const l=ww(e);l.then(_=>{n[_.measurementId]=_.appId,e.options.measurementId&&_.measurementId!==e.options.measurementId&&rt.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>rt.error(_)),t.push(l);const u=Tw().then(_=>{if(_)return r.getId()}),[h,p]=await Promise.all([l,u]);hw()||aw(o,h.measurementId),i("js",new Date);const m=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return m[iw]="firebase",m.update=!0,p!=null&&(m[rw]=p),i("config",h.measurementId,m),h.measurementId}/**
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
 */class Rw{constructor(t){this.app=t}_delete(){return delete ki[this.app.options.appId],Promise.resolve()}}let ki={},Rf=[];const Pf={};let ml="dataLayer",Pw="gtag",xf,dg,Af=!1;function xw(){const e=[];if(Lm()&&e.push("This is a browser extension environment."),Z0()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=pt.create("invalid-analytics-context",{errorInfo:t});rt.warn(n.message)}}function Aw(e,t,n){xw();const r=e.options.appId;if(!r)throw pt.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)rt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw pt.create("no-api-key");if(ki[r]!=null)throw pt.create("already-exists",{id:r});if(!Af){lw(ml);const{wrappedGtag:o,gtagCore:s}=fw(ki,Rf,Pf,ml,Pw);dg=o,xf=s,Af=!0}return ki[r]=Cw(e,Rf,Pf,t,xf,ml,n),new Rw(e)}function Ow(e=xc()){e=vt(e);const t=ar(e,xs);return t.isInitialized()?t.getImmediate():Nw(e)}function Nw(e,t={}){const n=ar(e,xs);if(n.isInitialized()){const i=n.getImmediate();if(Vi(t,n.getOptions()))return i;throw pt.create("already-initialized")}return n.initialize({options:t})}function bw(e,t,n,r){e=vt(e),Iw(dg,ki[e.app.options.appId],t,n,r).catch(i=>rt.error(i))}const Of="@firebase/analytics",Nf="0.8.0";function Lw(){Ut(new Rt(xs,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return Aw(r,i,n)},"PUBLIC")),Ut(new Rt("analytics-internal",e,"PRIVATE")),ht(Of,Nf),ht(Of,Nf,"esm2017");function e(t){try{const n=t.getProvider(xs).getImmediate();return{logEvent:(r,i,o)=>bw(n,r,i,o)}}catch(n){throw pt.create("interop-component-reg-failed",{reason:n})}}}Lw();function Lc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function fg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Dw=fg,hg=new sr("auth","Firebase",fg());/**
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
 */const bf=new Rc("@firebase/auth");function Yo(e,...t){bf.logLevel<=se.ERROR&&bf.error(`Auth (${ro}): ${e}`,...t)}/**
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
 */function Pt(e,...t){throw Dc(e,...t)}function Mt(e,...t){return Dc(e,...t)}function Mw(e,t,n){const r=Object.assign(Object.assign({},Dw()),{[t]:n});return new sr("auth","Firebase",r).create(t,{appName:e.name})}function Dc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return hg.create(e,...t)}function B(e,t,...n){if(!e)throw Dc(t,...n)}function Ht(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Yo(t),new Error(t)}function Zt(e,t){e||Ht(t)}/**
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
 */const Lf=new Map;function Vt(e){Zt(e instanceof Function,"Expected a class definition");let t=Lf.get(e);return t?(Zt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Lf.set(e,t),t)}/**
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
 */function $w(e,t){const n=ar(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Vi(o,t!=null?t:{}))return i;Pt(i,"already-initialized")}return n.initialize({options:t})}function Uw(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Vt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
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
 */function Eu(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function zw(){return Df()==="http:"||Df()==="https:"}function Df(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function Fw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zw()||Lm()||"connection"in navigator)?navigator.onLine:!0}function Bw(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class io{constructor(t,n){this.shortDelay=t,this.longDelay=n,Zt(n>t,"Short delay should be less than long delay!"),this.isMobile=Y0()||X0()}get(){return Fw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Mc(e,t){Zt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class pg{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const jw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Hw=new io(3e4,6e4);function ea(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function oo(e,t,n,r,i={}){return mg(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=no(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),pg.fetch()(gg(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function mg(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},jw),t);try{const i=new Vw(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw bo(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw bo(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw bo(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw bo(e,"user-disabled",s);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Mw(e,h,u);Pt(e,h)}}catch(i){if(i instanceof xt)throw i;Pt(e,"network-request-failed")}}async function ta(e,t,n,r,i={}){const o=await oo(e,t,n,r,i);return"mfaPendingCredential"in o&&Pt(e,"multi-factor-auth-required",{_serverResponse:o}),o}function gg(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Mc(e.config,i):`${e.config.apiScheme}://${i}`}class Vw{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Mt(this.auth,"network-request-failed")),Hw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bo(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Mt(e,t,r);return i.customData._tokenResponse=n,i}/**
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
 */async function Ww(e,t){return oo(e,"POST","/v1/accounts:delete",t)}async function Gw(e,t){return oo(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Ei(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function qw(e,t=!1){const n=vt(e),r=await n.getIdToken(t),i=$c(r);B(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Ei(gl(i.auth_time)),issuedAtTime:Ei(gl(i.iat)),expirationTime:Ei(gl(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function gl(e){return Number(e)*1e3}function $c(e){var t;const[n,r,i]=e.split(".");if(n===void 0||r===void 0||i===void 0)return Yo("JWT malformed, contained fewer than 3 sections"),null;try{const o=K0(r);return o?JSON.parse(o):(Yo("Failed to decode base64 JWT payload"),null)}catch(o){return Yo("Caught error parsing JWT payload as JSON",(t=o)===null||t===void 0?void 0:t.toString()),null}}function Kw(e){const t=$c(e);return B(t,"internal-error"),B(typeof t.exp<"u","internal-error"),B(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Gi(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof xt&&Qw(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Qw({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class Yw{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var t;try{await this.user.getIdToken(!0)}catch(n){((t=n)===null||t===void 0?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class vg{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ei(this.lastLoginAt),this.creationTime=Ei(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function As(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Gi(e,Gw(n,{idToken:r}));B(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?Zw(o.providerUserInfo):[],a=Jw(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new vg(o.createdAt,o.lastLoginAt),isAnonymous:h};Object.assign(e,p)}async function Xw(e){const t=vt(e);await As(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Jw(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Zw(e){return e.map(t=>{var{providerId:n}=t,r=Lc(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function eS(e,t){const n=await mg(e,{},async()=>{const r=no({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=gg(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",pg.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class qi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){B(t.idToken,"internal-error"),B(typeof t.idToken<"u","internal-error"),B(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Kw(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return B(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await eS(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new qi;return r&&(B(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(B(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(B(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new qi,this.toJSON())}_performRefresh(){return Ht("not implemented")}}/**
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
 */function on(e,t){B(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Hn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=Lc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Yw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new vg(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Gi(this,this.stsTokenManager.getToken(this.auth,t));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return qw(this,t)}reload(){return Xw(this)}_assign(t){this!==t&&(B(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Hn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await As(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Gi(this,Ww(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,h;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,_=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,y=(s=n.photoURL)!==null&&s!==void 0?s:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,f=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:d,emailVerified:v,isAnonymous:k,providerData:C,stsTokenManager:E}=n;B(d&&E,t,"internal-error");const I=qi.fromJSON(this.name,E);B(typeof d=="string",t,"internal-error"),on(p,t.name),on(m,t.name),B(typeof v=="boolean",t,"internal-error"),B(typeof k=="boolean",t,"internal-error"),on(_,t.name),on(y,t.name),on(g,t.name),on(S,t.name),on(f,t.name),on(c,t.name);const D=new Hn({uid:d,auth:t,email:m,emailVerified:v,displayName:p,isAnonymous:k,photoURL:y,phoneNumber:_,tenantId:g,stsTokenManager:I,createdAt:f,lastLoginAt:c});return C&&Array.isArray(C)&&(D.providerData=C.map(b=>Object.assign({},b))),S&&(D._redirectEventId=S),D}static async _fromIdTokenResponse(t,n,r=!1){const i=new qi;i.updateFromServerResponse(n);const o=new Hn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await As(o),o}}/**
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
 */class yg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}yg.type="NONE";const Mf=yg;/**
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
 */function Xo(e,t,n){return`firebase:${e}:${t}:${n}`}class Or{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Xo(this.userKey,i.apiKey,o),this.fullPersistenceKey=Xo("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Hn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Or(Vt(Mf),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Vt(Mf);const s=Xo(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const h=await u._get(s);if(h){const p=Hn._fromJSON(t,h);u!==o&&(a=p),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Or(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Or(o,t,r))}}/**
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
 */function $f(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Sg(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(_g(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Eg(t))return"Blackberry";if(Ig(t))return"Webos";if(Uc(t))return"Safari";if((t.includes("chrome/")||wg(t))&&!t.includes("edge/"))return"Chrome";if(kg(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function _g(e=ze()){return/firefox\//i.test(e)}function Uc(e=ze()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function wg(e=ze()){return/crios\//i.test(e)}function Sg(e=ze()){return/iemobile/i.test(e)}function kg(e=ze()){return/android/i.test(e)}function Eg(e=ze()){return/blackberry/i.test(e)}function Ig(e=ze()){return/webos/i.test(e)}function na(e=ze()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function tS(e=ze()){var t;return na(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function nS(){return J0()&&document.documentMode===10}function Tg(e=ze()){return na(e)||kg(e)||Ig(e)||Eg(e)||/windows phone/i.test(e)||Sg(e)}function rS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Cg(e,t=[]){let n;switch(e){case"Browser":n=$f(ze());break;case"Worker":n=`${$f(ze())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ro}/${r}`}/**
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
 */class iS{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){var n;if(this.auth.currentUser===t)return;const r=[];try{for(const i of this.queue)await i(t),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const o of r)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class oS{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Uf(this),this.idTokenSubscription=new Uf(this),this.beforeStateQueue=new iS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hg,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Vt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Or.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l==null?void 0:l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){var n;try{await As(t)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Bw()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?vt(t):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&B(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Vt(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new sr("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Vt(t)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await Or.create(this,[Vt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return B(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Cg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function zc(e){return vt(e)}class Uf{constructor(t){this.auth=t,this.observer=null,this.addObserver=i1(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Fc{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Ht("not implemented")}_getIdTokenResponse(t){return Ht("not implemented")}_linkToIdToken(t,n){return Ht("not implemented")}_getReauthenticationResolver(t){return Ht("not implemented")}}async function sS(e,t){return oo(e,"POST","/v1/accounts:update",t)}/**
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
 */async function aS(e,t){return ta(e,"POST","/v1/accounts:signInWithPassword",ea(e,t))}/**
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
 */async function lS(e,t){return ta(e,"POST","/v1/accounts:signInWithEmailLink",ea(e,t))}async function uS(e,t){return ta(e,"POST","/v1/accounts:signInWithEmailLink",ea(e,t))}/**
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
 */class Ki extends Fc{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Ki(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Ki(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return aS(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return lS(t,{email:this._email,oobCode:this._password});default:Pt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return sS(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return uS(t,{idToken:n,email:this._email,oobCode:this._password});default:Pt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Nr(e,t){return ta(e,"POST","/v1/accounts:signInWithIdp",ea(e,t))}/**
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
 */const cS="http://localhost";class tr extends Fc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new tr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Pt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=Lc(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new tr(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return Nr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Nr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Nr(t,n)}buildRequest(){const t={requestUri:cS,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=no(n)}return t}}/**
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
 */function dS(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fS(e){const t=di(fi(e)).link,n=t?di(fi(t)).deep_link_id:null,r=di(fi(e)).deep_link_id;return(r?di(fi(r)).link:null)||r||n||t||e}class Bc{constructor(t){var n,r,i,o,s,a;const l=di(fi(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,p=dS((i=l.mode)!==null&&i!==void 0?i:null);B(u&&h&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=h,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=fS(t);try{return new Bc(n)}catch{return null}}}/**
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
 */class qr{constructor(){this.providerId=qr.PROVIDER_ID}static credential(t,n){return Ki._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Bc.parseLink(n);return B(r,"argument-error"),Ki._fromEmailAndCode(t,r.code,r.tenantId)}}qr.PROVIDER_ID="password";qr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Rg{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class so extends Rg{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class cn extends so{constructor(){super("facebook.com")}static credential(t){return tr._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return cn.credentialFromTaggedObject(t)}static credentialFromError(t){return cn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return cn.credential(t.oauthAccessToken)}catch{return null}}}cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";cn.PROVIDER_ID="facebook.com";/**
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
 */class dn extends so{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return tr._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return dn.credentialFromTaggedObject(t)}static credentialFromError(t){return dn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return dn.credential(n,r)}catch{return null}}}dn.GOOGLE_SIGN_IN_METHOD="google.com";dn.PROVIDER_ID="google.com";/**
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
 */class fn extends so{constructor(){super("github.com")}static credential(t){return tr._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return fn.credentialFromTaggedObject(t)}static credentialFromError(t){return fn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return fn.credential(t.oauthAccessToken)}catch{return null}}}fn.GITHUB_SIGN_IN_METHOD="github.com";fn.PROVIDER_ID="github.com";/**
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
 */class hn extends so{constructor(){super("twitter.com")}static credential(t,n){return tr._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return hn.credentialFromTaggedObject(t)}static credentialFromError(t){return hn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return hn.credential(n,r)}catch{return null}}}hn.TWITTER_SIGN_IN_METHOD="twitter.com";hn.PROVIDER_ID="twitter.com";/**
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
 */class Fr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await Hn._fromIdTokenResponse(t,r,i),s=zf(r);return new Fr({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=zf(r);return new Fr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function zf(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Os extends xt{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Os.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Os(t,n,r,i)}}function Pg(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Os._fromErrorAndOperation(e,o,t,r):o})}async function hS(e,t,n=!1){const r=await Gi(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Fr._forOperation(e,"link",r)}/**
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
 */async function pS(e,t,n=!1){var r;const{auth:i}=e,o="reauthenticate";try{const s=await Gi(e,Pg(i,o,t,e),n);B(s.idToken,i,"internal-error");const a=$c(s.idToken);B(a,i,"internal-error");const{sub:l}=a;return B(e.uid===l,i,"user-mismatch"),Fr._forOperation(e,o,s)}catch(s){throw((r=s)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Pt(i,"user-mismatch"),s}}/**
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
 */async function xg(e,t,n=!1){const r="signIn",i=await Pg(e,r,t),o=await Fr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function mS(e,t){return xg(zc(e),t)}function gS(e,t,n){return mS(vt(e),qr.credential(t,n))}function vS(e){return vt(e).signOut()}const Ns="__sak";/**
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
 */class Ag{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ns,"1"),this.storage.removeItem(Ns),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function yS(){const e=ze();return Uc(e)||na(e)}const _S=1e3,wS=10;class Og extends Ag{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=yS()&&rS(),this.fallbackToPolling=Tg(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);nS()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,wS):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},_S)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Og.type="LOCAL";const SS=Og;/**
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
 */class Ng extends Ag{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Ng.type="SESSION";const bg=Ng;/**
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
 */function kS(e){return Promise.all(e.map(async t=>{try{const n=await t;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ra{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new ra(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await kS(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ra.receivers=[];/**
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
 */function jc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class ES{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=jc("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(h),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(m.data.response);break;default:clearTimeout(h),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function $t(){return window}function IS(e){$t().location.href=e}/**
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
 */function Lg(){return typeof $t().WorkerGlobalScope<"u"&&typeof $t().importScripts=="function"}async function TS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function CS(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function RS(){return Lg()?self:null}/**
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
 */const Dg="firebaseLocalStorageDb",PS=1,bs="firebaseLocalStorage",Mg="fbase_key";class ao{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ia(e,t){return e.transaction([bs],t?"readwrite":"readonly").objectStore(bs)}function xS(){const e=indexedDB.deleteDatabase(Dg);return new ao(e).toPromise()}function Iu(){const e=indexedDB.open(Dg,PS);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(bs,{keyPath:Mg})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(bs)?t(r):(r.close(),await xS(),t(await Iu()))})})}async function Ff(e,t,n){const r=ia(e,!0).put({[Mg]:t,value:n});return new ao(r).toPromise()}async function AS(e,t){const n=ia(e,!1).get(t),r=await new ao(n).toPromise();return r===void 0?null:r.value}function Bf(e,t){const n=ia(e,!0).delete(t);return new ao(n).toPromise()}const OS=800,NS=3;class $g{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Iu(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>NS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Lg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ra._getInstance(RS()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await TS(),!this.activeServiceWorker)return;this.sender=new ES(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((t=r[0])===null||t===void 0?void 0:t.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||CS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Iu();return await Ff(t,Ns,"1"),await Bf(t,Ns),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ff(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>AS(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bf(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=ia(i,!1).getAll();return new ao(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),OS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$g.type="LOCAL";const bS=$g;/**
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
 */function LS(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function DS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=Mt("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",LS().appendChild(r)})}function MS(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new io(3e4,6e4);/**
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
 */function $S(e,t){return t?Vt(t):(B(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Hc extends Fc{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Nr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Nr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Nr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function US(e){return xg(e.auth,new Hc(e),e.bypassAuthState)}function zS(e){const{auth:t,user:n}=e;return B(n,t,"internal-error"),pS(n,new Hc(e),e.bypassAuthState)}async function FS(e){const{auth:t,user:n}=e;return B(n,t,"internal-error"),hS(n,new Hc(e),e.bypassAuthState)}/**
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
 */class Ug{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return US;case"linkViaPopup":case"linkViaRedirect":return FS;case"reauthViaPopup":case"reauthViaRedirect":return zS;default:Pt(this.auth,"internal-error")}}resolve(t){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const BS=new io(2e3,1e4);class Er extends Ug{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Er.currentPopupAction&&Er.currentPopupAction.cancel(),Er.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return B(t,this.auth,"internal-error"),t}async onExecution(){Zt(this.filter.length===1,"Popup operations only handle one event");const t=jc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Er.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,BS.get())};t()}}Er.currentPopupAction=null;/**
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
 */const jS="pendingRedirect",Jo=new Map;class HS extends Ug{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Jo.get(this.auth._key());if(!t){try{const r=await VS(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Jo.set(this.auth._key(),t)}return this.bypassAuthState||Jo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function VS(e,t){const n=qS(t),r=GS(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function WS(e,t){Jo.set(e._key(),t)}function GS(e){return Vt(e._redirectPersistence)}function qS(e){return Xo(jS,e.config.apiKey,e.name)}async function KS(e,t,n=!1){const r=zc(e),i=$S(r,t),s=await new HS(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
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
 */const QS=10*60*1e3;class YS{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!XS(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!zg(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Mt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=QS&&this.cachedEventUids.clear(),this.cachedEventUids.has(jf(t))}saveEventToCache(t){this.cachedEventUids.add(jf(t)),this.lastProcessedEventTime=Date.now()}}function jf(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function zg({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function XS(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zg(e);default:return!1}}/**
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
 */async function JS(e,t={}){return oo(e,"GET","/v1/projects",t)}/**
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
 */const ZS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ek=/^https?/;async function tk(e){if(e.config.emulator)return;const{authorizedDomains:t}=await JS(e);for(const n of t)try{if(nk(n))return}catch{}Pt(e,"unauthorized-domain")}function nk(e){const t=Eu(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!ek.test(n))return!1;if(ZS.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const rk=new io(3e4,6e4);function Hf(){const e=$t().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function ik(e){return new Promise((t,n)=>{var r,i,o;function s(){Hf(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Hf(),n(Mt(e,"network-request-failed"))},timeout:rk.get()})}if(!((i=(r=$t().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=$t().gapi)===null||o===void 0)&&o.load)s();else{const a=MS("iframefcb");return $t()[a]=()=>{gapi.load?s():n(Mt(e,"network-request-failed"))},DS(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Zo=null,t})}let Zo=null;function ok(e){return Zo=Zo||ik(e),Zo}/**
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
 */const sk=new io(5e3,15e3),ak="__/auth/iframe",lk="emulator/auth/iframe",uk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ck=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dk(e){const t=e.config;B(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Mc(t,lk):`https://${e.config.authDomain}/${ak}`,r={apiKey:t.apiKey,appName:e.name,v:ro},i=ck.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${no(r).slice(1)}`}async function fk(e){const t=await ok(e),n=$t().gapi;return B(n,e,"internal-error"),t.open({where:document.body,url:dk(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uk,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Mt(e,"network-request-failed"),a=$t().setTimeout(()=>{o(s)},sk.get());function l(){$t().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const hk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pk=500,mk=600,gk="_blank",vk="http://localhost";class Vf{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yk(e,t,n,r=pk,i=mk){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},hk),{width:r.toString(),height:i.toString(),top:o,left:s}),u=ze().toLowerCase();n&&(a=wg(u)?gk:n),_g(u)&&(t=t||vk,l.scrollbars="yes");const h=Object.entries(l).reduce((m,[_,y])=>`${m}${_}=${y},`,"");if(tS(u)&&a!=="_self")return _k(t||"",a),new Vf(null);const p=window.open(t||"",a,h);B(p,e,"popup-blocked");try{p.focus()}catch{}return new Vf(p)}function _k(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const wk="__/auth/handler",Sk="emulator/auth/handler";function Wf(e,t,n,r,i,o){B(e.config.authDomain,e,"auth-domain-config-required"),B(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:ro,eventId:i};if(t instanceof Rg){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",r1(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))s[l]=u}if(t instanceof so){const l=t.getScopes().filter(u=>u!=="");l.length>0&&(s.scopes=l.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${kk(e)}?${no(a).slice(1)}`}function kk({config:e}){return e.emulator?Mc(e,Sk):`https://${e.authDomain}/${wk}`}/**
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
 */const vl="webStorageSupport";class Ek{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bg,this._completeRedirectFn=KS,this._overrideRedirectResult=WS}async _openPopup(t,n,r,i){var o;Zt((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=Wf(t,n,r,Eu(),i);return yk(t,s,jc())}async _openRedirect(t,n,r,i){return await this._originValidation(t),IS(Wf(t,n,r,Eu(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Zt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await fk(t),r=new YS(t);return n.register("authEvent",i=>(B(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(vl,{type:vl},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[vl];s!==void 0&&n(!!s),Pt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=tk(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Tg()||Uc()||na()}}const Ik=Ek;var Gf="@firebase/auth",qf="0.20.6";/**
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
 */class Tk{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{var i;t(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ck(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Rk(e){Ut(new Rt("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((a,l)=>{B(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),B(!(s!=null&&s.includes(":")),"argument-error",{appName:a.name});const u={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cg(e)},h=new oS(a,l,u);return Uw(h,n),h})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Ut(new Rt("auth-internal",t=>{const n=zc(t.getProvider("auth").getImmediate());return(r=>new Tk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ht(Gf,qf,Ck(e)),ht(Gf,qf,"esm2017")}/**
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
 */function Pk(e=xc()){const t=ar(e,"auth");return t.isInitialized()?t.getImmediate():$w(e,{popupRedirectResolver:Ik,persistence:[bS,SS,bg]})}Rk("Browser");/**
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
 */const Fg="firebasestorage.googleapis.com",Bg="storageBucket",xk=2*60*1e3,Ak=10*60*1e3;/**
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
 */class ye extends xt{constructor(t,n){super(yl(t),`Firebase Storage: ${n} (${yl(t)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ye.prototype)}_codeEquals(t){return yl(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function yl(e){return"storage/"+e}function Vc(){const e="An unknown error occurred, please check the error payload for server response.";return new ye("unknown",e)}function Ok(e){return new ye("object-not-found","Object '"+e+"' does not exist.")}function Nk(e){return new ye("quota-exceeded","Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function bk(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ye("unauthenticated",e)}function Lk(){return new ye("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function Dk(e){return new ye("unauthorized","User does not have permission to access '"+e+"'.")}function Mk(){return new ye("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function jg(){return new ye("canceled","User canceled the upload/download.")}function $k(e){return new ye("invalid-url","Invalid URL '"+e+"'.")}function Uk(e){return new ye("invalid-default-bucket","Invalid default bucket '"+e+"'.")}function zk(){return new ye("no-default-bucket","No default bucket found. Did you set the '"+Bg+"' property when initializing the app?")}function Hg(){return new ye("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function Fk(){return new ye("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function Bk(){return new ye("no-download-url","The given file does not have any download URLs.")}function Tu(e){return new ye("invalid-argument",e)}function Vg(){return new ye("app-deleted","The Firebase app was deleted.")}function jk(e){return new ye("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ii(e,t){return new ye("invalid-format","String does not match format '"+e+"': "+t)}function oi(e){throw new ye("internal-error","Internal error: "+e)}/**
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
 */class tt{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=tt.makeFromUrl(t,n)}catch{return new tt(t,"")}if(r.path==="")return r;throw Uk(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(v){v.path.charAt(v.path.length-1)==="/"&&(v.path_=v.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+i+s,"i"),l={bucket:1,path:3};function u(v){v.path_=decodeURIComponent(v.path)}const h="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",_=new RegExp(`^https?://${p}/${h}/b/${i}/o${m}`,"i"),y={bucket:1,path:3},g=n===Fg?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",f=new RegExp(`^https?://${g}/${i}/${S}`,"i"),d=[{regex:a,indices:l,postModify:o},{regex:_,indices:y,postModify:u},{regex:f,indices:{bucket:1,path:2},postModify:u}];for(let v=0;v<d.length;v++){const k=d[v],C=k.regex.exec(t);if(C){const E=C[k.indices.bucket];let I=C[k.indices.path];I||(I=""),r=new tt(E,I),k.postModify(r);break}}if(r==null)throw $k(t);return r}}class Hk{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function Vk(e,t,n){let r=1,i=null,o=null,s=!1,a=0;function l(){return a===2}let u=!1;function h(...S){u||(u=!0,t.apply(null,S))}function p(S){i=setTimeout(()=>{i=null,e(_,l())},S)}function m(){o&&clearTimeout(o)}function _(S,...f){if(u){m();return}if(S){m(),h.call(null,S,...f);return}if(l()||s){m(),h.call(null,S,...f);return}r<64&&(r*=2);let d;a===1?(a=2,d=0):d=(r+Math.random())*1e3,p(d)}let y=!1;function g(S){y||(y=!0,m(),!u&&(i!==null?(S||(a=2),clearTimeout(i),p(0)):S||(a=1)))}return p(0),o=setTimeout(()=>{s=!0,g(!0)},n),g}function Wk(e){e(!1)}/**
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
 */function Gk(e){return e!==void 0}function qk(e){return typeof e=="function"}function Kk(e){return typeof e=="object"&&!Array.isArray(e)}function oa(e){return typeof e=="string"||e instanceof String}function Kf(e){return Wc()&&e instanceof Blob}function Wc(){return typeof Blob<"u"}function Qf(e,t,n,r){if(r<t)throw Tu(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw Tu(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function lo(e,t,n){let r=t;return n==null&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function Wg(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Vn;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(Vn||(Vn={}));/**
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
 */class Qk{constructor(t,n,r,i,o,s,a,l,u,h,p){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=s,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,_)=>{this.resolve_=m,this.reject_=_,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new Lo(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const s=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&o.addUploadProgressListener(s),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(s),this.pendingConnection_=null;const a=o.getErrorCode()===Vn.NO_ERROR,l=o.getStatus();if(!a||this.isRetryStatusCode_(l)){const h=o.getErrorCode()===Vn.ABORT;r(!1,new Lo(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Lo(u,o))})},n=(r,i)=>{const o=this.resolve_,s=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Gk(l)?o(l):o()}catch(l){s(l)}else if(a!==null){const l=Vc();l.serverResponse=a.getErrorText(),this.errorCallback_?s(this.errorCallback_(a,l)):s(l)}else if(i.canceled){const l=this.appDelete_?Vg():jg();s(l)}else{const l=Mk();s(l)}};this.canceled_?n(!1,new Lo(!1,null,!0)):this.backoffId_=Vk(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Wk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(t){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,o=this.additionalRetryCodes_.indexOf(t)!==-1;return n||i||o}}class Lo{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function Yk(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Xk(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t!=null?t:"AppManager")}function Jk(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Zk(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function eE(e,t,n,r,i,o){const s=Wg(e.urlParams),a=e.url+s,l=Object.assign({},e.headers);return Jk(l,t),Yk(l,n),Xk(l,o),Zk(l,r),new Qk(a,e.method,l,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i)}/**
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
 */function tE(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function nE(...e){const t=tE();if(t!==void 0){const n=new t;for(let r=0;r<e.length;r++)n.append(e[r]);return n.getBlob()}else{if(Wc())return new Blob(e);throw new ye("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function rE(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function iE(e){return atob(e)}/**
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
 */const bt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class _l{constructor(t,n){this.data=t,this.contentType=n||null}}function oE(e,t){switch(e){case bt.RAW:return new _l(Gg(t));case bt.BASE64:case bt.BASE64URL:return new _l(qg(e,t));case bt.DATA_URL:return new _l(aE(t),lE(t))}throw Vc()}function Gg(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const o=r,s=e.charCodeAt(++n);r=65536|(o&1023)<<10|s&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function sE(e){let t;try{t=decodeURIComponent(e)}catch{throw Ii(bt.DATA_URL,"Malformed data URL.")}return Gg(t)}function qg(e,t){switch(e){case bt.BASE64:{const i=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(i||o)throw Ii(e,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case bt.BASE64URL:{const i=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(i||o)throw Ii(e,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=iE(t)}catch{throw Ii(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class Kg{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw Ii(bt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=uE(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function aE(e){const t=new Kg(e);return t.base64?qg(bt.BASE64,t.rest):sE(t.rest)}function lE(e){return new Kg(e).contentType}function uE(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class pn{constructor(t,n){let r=0,i="";Kf(t)?(this.data_=t,r=t.size,i=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,n){if(Kf(this.data_)){const r=this.data_,i=rE(r,t,n);return i===null?null:new pn(i)}else{const r=new Uint8Array(this.data_.buffer,t,n-t);return new pn(r,!0)}}static getBlob(...t){if(Wc()){const n=t.map(r=>r instanceof pn?r.data_:r);return new pn(nE.apply(null,n))}else{const n=t.map(s=>oa(s)?oE(bt.RAW,s).data:s.data_);let r=0;n.forEach(s=>{r+=s.byteLength});const i=new Uint8Array(r);let o=0;return n.forEach(s=>{for(let a=0;a<s.length;a++)i[o++]=s[a]}),new pn(i,!0)}}uploadData(){return this.data_}}/**
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
 */function Qg(e){let t;try{t=JSON.parse(e)}catch{return null}return Kk(t)?t:null}/**
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
 */function cE(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function dE(e,t){const n=t.split("/").filter(r=>r.length>0).join("/");return e.length===0?n:e+"/"+n}function Yg(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function fE(e,t){return t}class Fe{constructor(t,n,r,i){this.server=t,this.local=n||t,this.writable=!!r,this.xform=i||fE}}let Do=null;function hE(e){return!oa(e)||e.length<2?e:Yg(e)}function Xg(){if(Do)return Do;const e=[];e.push(new Fe("bucket")),e.push(new Fe("generation")),e.push(new Fe("metageneration")),e.push(new Fe("name","fullPath",!0));function t(o,s){return hE(s)}const n=new Fe("name");n.xform=t,e.push(n);function r(o,s){return s!==void 0?Number(s):s}const i=new Fe("size");return i.xform=r,e.push(i),e.push(new Fe("timeCreated")),e.push(new Fe("updated")),e.push(new Fe("md5Hash",null,!0)),e.push(new Fe("cacheControl",null,!0)),e.push(new Fe("contentDisposition",null,!0)),e.push(new Fe("contentEncoding",null,!0)),e.push(new Fe("contentLanguage",null,!0)),e.push(new Fe("contentType",null,!0)),e.push(new Fe("metadata","customMetadata",!0)),Do=e,Do}function pE(e,t){function n(){const r=e.bucket,i=e.fullPath,o=new tt(r,i);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:n})}function mE(e,t,n){const r={};r.type="file";const i=n.length;for(let o=0;o<i;o++){const s=n[o];r[s.local]=s.xform(r,t[s.server])}return pE(r,e),r}function Jg(e,t,n){const r=Qg(t);return r===null?null:mE(e,r,n)}function gE(e,t,n,r){const i=Qg(t);if(i===null||!oa(i.downloadTokens))return null;const o=i.downloadTokens;if(o.length===0)return null;const s=encodeURIComponent;return o.split(",").map(u=>{const h=e.bucket,p=e.fullPath,m="/b/"+s(h)+"/o/"+s(p),_=lo(m,n,r),y=Wg({alt:"media",token:u});return _+y})[0]}function Zg(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const o=t[i];o.writable&&(n[o.server]=e[o.local])}return JSON.stringify(n)}class Kr{constructor(t,n,r,i){this.url=t,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function qt(e){if(!e)throw Vc()}function Gc(e,t){function n(r,i){const o=Jg(e,i,t);return qt(o!==null),o}return n}function vE(e,t){function n(r,i){const o=Jg(e,i,t);return qt(o!==null),gE(o,i,e.host,e._protocol)}return n}function uo(e){function t(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=Lk():i=bk():n.getStatus()===402?i=Nk(e.bucket):n.getStatus()===403?i=Dk(e.path):i=r,i.serverResponse=r.serverResponse,i}return t}function ev(e){const t=uo(e);function n(r,i){let o=t(r,i);return r.getStatus()===404&&(o=Ok(e.path)),o.serverResponse=i.serverResponse,o}return n}function yE(e,t,n){const r=t.fullServerUrl(),i=lo(r,e.host,e._protocol),o="GET",s=e.maxOperationRetryTime,a=new Kr(i,o,Gc(e,n),s);return a.errorHandler=ev(t),a}function _E(e,t,n){const r=t.fullServerUrl(),i=lo(r,e.host,e._protocol),o="GET",s=e.maxOperationRetryTime,a=new Kr(i,o,vE(e,n),s);return a.errorHandler=ev(t),a}function wE(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function tv(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=wE(null,t)),r}function SE(e,t,n,r,i){const o=t.bucketOnlyServerUrl(),s={"X-Goog-Upload-Protocol":"multipart"};function a(){let d="";for(let v=0;v<2;v++)d=d+Math.random().toString().slice(2);return d}const l=a();s["Content-Type"]="multipart/related; boundary="+l;const u=tv(t,r,i),h=Zg(u,n),p="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,m=`\r
--`+l+"--",_=pn.getBlob(p,r,m);if(_===null)throw Hg();const y={name:u.fullPath},g=lo(o,e.host,e._protocol),S="POST",f=e.maxUploadRetryTime,c=new Kr(g,S,Gc(e,n),f);return c.urlParams=y,c.headers=s,c.body=_.uploadData(),c.errorHandler=uo(t),c}class Ls{constructor(t,n,r,i){this.current=t,this.total=n,this.finalized=!!r,this.metadata=i||null}}function qc(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch{qt(!1)}return qt(!!n&&(t||["active"]).indexOf(n)!==-1),n}function kE(e,t,n,r,i){const o=t.bucketOnlyServerUrl(),s=tv(t,r,i),a={name:s.fullPath},l=lo(o,e.host,e._protocol),u="POST",h={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":s.contentType,"Content-Type":"application/json; charset=utf-8"},p=Zg(s,n),m=e.maxUploadRetryTime;function _(g){qc(g);let S;try{S=g.getResponseHeader("X-Goog-Upload-URL")}catch{qt(!1)}return qt(oa(S)),S}const y=new Kr(l,u,_,m);return y.urlParams=a,y.headers=h,y.body=p,y.errorHandler=uo(t),y}function EE(e,t,n,r){const i={"X-Goog-Upload-Command":"query"};function o(u){const h=qc(u,["active","final"]);let p=null;try{p=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{qt(!1)}p||qt(!1);const m=Number(p);return qt(!isNaN(m)),new Ls(m,r.size(),h==="final")}const s="POST",a=e.maxUploadRetryTime,l=new Kr(n,s,o,a);return l.headers=i,l.errorHandler=uo(t),l}const Yf=256*1024;function IE(e,t,n,r,i,o,s,a){const l=new Ls(0,0);if(s?(l.current=s.current,l.total=s.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw Fk();const u=l.total-l.current;let h=u;i>0&&(h=Math.min(h,i));const p=l.current,m=p+h,y={"X-Goog-Upload-Command":h===u?"upload, finalize":"upload","X-Goog-Upload-Offset":`${l.current}`},g=r.slice(p,m);if(g===null)throw Hg();function S(v,k){const C=qc(v,["active","final"]),E=l.current+h,I=r.size();let D;return C==="final"?D=Gc(t,o)(v,k):D=null,new Ls(E,I,C==="final",D)}const f="POST",c=t.maxUploadRetryTime,d=new Kr(n,f,S,c);return d.headers=y,d.body=g.uploadData(),d.progressCallback=a||null,d.errorHandler=uo(e),d}const Ge={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function wl(e){switch(e){case"running":case"pausing":case"canceling":return Ge.RUNNING;case"paused":return Ge.PAUSED;case"success":return Ge.SUCCESS;case"canceled":return Ge.CANCELED;case"error":return Ge.ERROR;default:return Ge.ERROR}}/**
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
 */class TE{constructor(t,n,r){if(qk(t)||n!=null||r!=null)this.next=t,this.error=n!=null?n:void 0,this.complete=r!=null?r:void 0;else{const o=t;this.next=o.next,this.error=o.error,this.complete=o.complete}}}/**
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
 */function ur(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}class CE{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Vn.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Vn.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Vn.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,r,i){if(this.sent_)throw oi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw oi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw oi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw oi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw oi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class RE extends CE{initXhr(){this.xhr_.responseType="text"}}function cr(){return new RE}/**
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
 */class PE{constructor(t,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=n,this._metadata=r,this._mappings=Xg(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{this._request=void 0,this._chunkMultiplier=1,i._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=i,this._transition("error"))},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals("canceled")?this.completeTransitions_():(this._error=i,this._transition("error"))},this._promise=new Promise((i,o)=>{this._resolve=i,this._reject=o,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const t=this._transferred;return n=>this._updateProgress(t+n)}_shouldDoResumable(t){return t.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":t(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,n)=>{const r=kE(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,cr,t,n);this._request=i,i.getPromise().then(o=>{this._request=void 0,this._uploadUrl=o,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const t=this._uploadUrl;this._resolveToken((n,r)=>{const i=EE(this._ref.storage,this._ref._location,t,this._blob),o=this._ref.storage._makeRequest(i,cr,n,r);this._request=o,o.getPromise().then(s=>{s=s,this._request=void 0,this._updateProgress(s.current),this._needToFetchStatus=!1,s.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const t=Yf*this._chunkMultiplier,n=new Ls(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,o)=>{let s;try{s=IE(this._ref._location,this._ref.storage,r,this._blob,t,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(s,cr,i,o);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Yf*this._chunkMultiplier<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,n)=>{const r=yE(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,cr,t,n);this._request=i,i.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,n)=>{const r=SE(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,cr,t,n);this._request=i,i.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){const n=this._transferred;this._transferred=t,this._transferred!==n&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":this._state=t,this._request!==void 0&&this._request.cancel();break;case"pausing":this._state=t,this._request!==void 0&&this._request.cancel();break;case"running":const n=this._state==="paused";this._state=t,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=jg(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=wl(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,n,r,i){const o=new TE(n||void 0,r||void 0,i||void 0);return this._addObserver(o),()=>{this._removeObserver(o)}}then(t,n){return this._promise.then(t,n)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const n=this._observers.indexOf(t);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let t=!0;switch(wl(this._state)){case Ge.SUCCESS:ur(this._resolve.bind(null,this.snapshot))();break;case Ge.CANCELED:case Ge.ERROR:const n=this._reject;ur(n.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){switch(wl(this._state)){case Ge.RUNNING:case Ge.PAUSED:t.next&&ur(t.next.bind(t,this.snapshot))();break;case Ge.SUCCESS:t.complete&&ur(t.complete.bind(t))();break;case Ge.CANCELED:case Ge.ERROR:t.error&&ur(t.error.bind(t,this._error))();break;default:t.error&&ur(t.error.bind(t,this._error))()}}resume(){const t=this._state==="paused"||this._state==="pausing";return t&&this._transition("running"),t}pause(){const t=this._state==="running";return t&&this._transition("pausing"),t}cancel(){const t=this._state==="running"||this._state==="pausing";return t&&this._transition("canceling"),t}}/**
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
 */class nr{constructor(t,n){this._service=t,n instanceof tt?this._location=n:this._location=tt.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new nr(t,n)}get root(){const t=new tt(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Yg(this._location.path)}get storage(){return this._service}get parent(){const t=cE(this._location.path);if(t===null)return null;const n=new tt(this._location.bucket,t);return new nr(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw jk(t)}}function xE(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new PE(e,new pn(t),n)}function AE(e){e._throwIfRoot("getDownloadURL");const t=_E(e.storage,e._location,Xg());return e.storage.makeRequestWithTokens(t,cr).then(n=>{if(n===null)throw Bk();return n})}function OE(e,t){const n=dE(e._location.path,t),r=new tt(e._location.bucket,n);return new nr(e.storage,r)}/**
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
 */function NE(e){return/^[A-Za-z]+:\/\//.test(e)}function bE(e,t){return new nr(e,t)}function nv(e,t){if(e instanceof Kc){const n=e;if(n._bucket==null)throw zk();const r=new nr(n,n._bucket);return t!=null?nv(r,t):r}else return t!==void 0?OE(e,t):e}function LE(e,t){if(t&&NE(t)){if(e instanceof Kc)return bE(e,t);throw Tu("To use ref(service, url), the first argument must be a Storage instance.")}else return nv(e,t)}function Xf(e,t){const n=t==null?void 0:t[Bg];return n==null?null:tt.makeFromBucketSpec(n,e)}class Kc{constructor(t,n,r,i,o){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=Fg,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=xk,this._maxUploadRetryTime=Ak,this._requests=new Set,i!=null?this._bucket=tt.makeFromBucketSpec(i,this._host):this._bucket=Xf(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=tt.makeFromBucketSpec(this._url,t):this._bucket=Xf(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Qf("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Qf("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new nr(this,t)}_makeRequest(t,n,r,i){if(this._deleted)return new Hk(Vg());{const o=eE(t,this._appId,r,i,n,this._firebaseVersion);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const Jf="@firebase/storage",Zf="0.9.9";/**
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
 */const rv="storage";function DE(e,t,n){return e=vt(e),xE(e,t,n)}function ME(e){return e=vt(e),AE(e)}function $E(e,t){return e=vt(e),LE(e,t)}function UE(e=xc(),t){return e=vt(e),ar(e,rv).getImmediate({identifier:t})}function zE(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new Kc(n,r,i,t,ro)}function FE(){Ut(new Rt(rv,zE,"PUBLIC").setMultipleInstances(!0)),ht(Jf,Zf,""),ht(Jf,Zf,"esm2017")}FE();const BE={apiKey:"AIzaSyCvE0_BSbFh0MvPqF4KpWrM5fG5FYmNWNU",authDomain:"lavozdeguanacaste-app.firebaseapp.com",databaseURL:"https://lavozdeguanacaste-app-default-rtdb.firebaseio.com",projectId:"lavozdeguanacaste-app",storageBucket:"lavozdeguanacaste-app.appspot.com",messagingSenderId:"670473558994",appId:"1:670473558994:web:03fc9dd327a5d882e3c60b",measurementId:"G-HD7BVEGEE9"},sa=s_(BE),jE=Ow(sa),HE=Pk(sa),VE=UE(sa),aa={app:sa,analytics:jE,auth:HE,storage:VE},iv="/assets/logo_white.c03745a5.png";var la={exports:{}},ua={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WE=M.exports,GE=Symbol.for("react.element"),qE=Symbol.for("react.fragment"),KE=Object.prototype.hasOwnProperty,QE=WE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,YE={key:!0,ref:!0,__self:!0,__source:!0};function ov(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)KE.call(t,r)&&!YE.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:GE,type:e,key:o,ref:s,props:i,_owner:QE.current}}ua.Fragment=qE;ua.jsx=ov;ua.jsxs=ov;(function(e){e.exports=ua})(la);const Ti=la.exports.Fragment,A=la.exports.jsx,Ce=la.exports.jsxs;var Qc={exports:{}},re={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yc=Symbol.for("react.element"),Xc=Symbol.for("react.portal"),ca=Symbol.for("react.fragment"),da=Symbol.for("react.strict_mode"),fa=Symbol.for("react.profiler"),ha=Symbol.for("react.provider"),pa=Symbol.for("react.context"),XE=Symbol.for("react.server_context"),ma=Symbol.for("react.forward_ref"),ga=Symbol.for("react.suspense"),va=Symbol.for("react.suspense_list"),ya=Symbol.for("react.memo"),_a=Symbol.for("react.lazy"),JE=Symbol.for("react.offscreen"),sv;sv=Symbol.for("react.module.reference");function yt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Yc:switch(e=e.type,e){case ca:case fa:case da:case ga:case va:return e;default:switch(e=e&&e.$$typeof,e){case XE:case pa:case ma:case _a:case ya:case ha:return e;default:return t}}case Xc:return t}}}re.ContextConsumer=pa;re.ContextProvider=ha;re.Element=Yc;re.ForwardRef=ma;re.Fragment=ca;re.Lazy=_a;re.Memo=ya;re.Portal=Xc;re.Profiler=fa;re.StrictMode=da;re.Suspense=ga;re.SuspenseList=va;re.isAsyncMode=function(){return!1};re.isConcurrentMode=function(){return!1};re.isContextConsumer=function(e){return yt(e)===pa};re.isContextProvider=function(e){return yt(e)===ha};re.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yc};re.isForwardRef=function(e){return yt(e)===ma};re.isFragment=function(e){return yt(e)===ca};re.isLazy=function(e){return yt(e)===_a};re.isMemo=function(e){return yt(e)===ya};re.isPortal=function(e){return yt(e)===Xc};re.isProfiler=function(e){return yt(e)===fa};re.isStrictMode=function(e){return yt(e)===da};re.isSuspense=function(e){return yt(e)===ga};re.isSuspenseList=function(e){return yt(e)===va};re.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ca||e===fa||e===da||e===ga||e===va||e===JE||typeof e=="object"&&e!==null&&(e.$$typeof===_a||e.$$typeof===ya||e.$$typeof===ha||e.$$typeof===pa||e.$$typeof===ma||e.$$typeof===sv||e.getModuleId!==void 0)};re.typeOf=yt;(function(e){e.exports=re})(Qc);function ZE(e){function t(x,O,N,F,w){for(var W=0,P=0,oe=0,$=0,q,j,ke=0,We=0,Y,Le=Y=q=0,Z=0,xe=0,Qr=0,Ae=0,mo=N.length,Yr=mo-1,_t,H="",_e="",La="",Da="",nn;Z<mo;){if(j=N.charCodeAt(Z),Z===Yr&&P+$+oe+W!==0&&(P!==0&&(j=P===47?10:47),$=oe=W=0,mo++,Yr++),P+$+oe+W===0){if(Z===Yr&&(0<xe&&(H=H.replace(m,"")),0<H.trim().length)){switch(j){case 32:case 9:case 59:case 13:case 10:break;default:H+=N.charAt(Z)}j=59}switch(j){case 123:for(H=H.trim(),q=H.charCodeAt(0),Y=1,Ae=++Z;Z<mo;){switch(j=N.charCodeAt(Z)){case 123:Y++;break;case 125:Y--;break;case 47:switch(j=N.charCodeAt(Z+1)){case 42:case 47:e:{for(Le=Z+1;Le<Yr;++Le)switch(N.charCodeAt(Le)){case 47:if(j===42&&N.charCodeAt(Le-1)===42&&Z+2!==Le){Z=Le+1;break e}break;case 10:if(j===47){Z=Le+1;break e}}Z=Le}}break;case 91:j++;case 40:j++;case 34:case 39:for(;Z++<Yr&&N.charCodeAt(Z)!==j;);}if(Y===0)break;Z++}switch(Y=N.substring(Ae,Z),q===0&&(q=(H=H.replace(p,"").trim()).charCodeAt(0)),q){case 64:switch(0<xe&&(H=H.replace(m,"")),j=H.charCodeAt(1),j){case 100:case 109:case 115:case 45:xe=O;break;default:xe=V}if(Y=t(O,xe,Y,j,w+1),Ae=Y.length,0<T&&(xe=n(V,H,Qr),nn=a(3,Y,xe,O,te,ee,Ae,j,w,F),H=xe.join(""),nn!==void 0&&(Ae=(Y=nn.trim()).length)===0&&(j=0,Y="")),0<Ae)switch(j){case 115:H=H.replace(C,s);case 100:case 109:case 45:Y=H+"{"+Y+"}";break;case 107:H=H.replace(c,"$1 $2"),Y=H+"{"+Y+"}",Y=ue===1||ue===2&&o("@"+Y,3)?"@-webkit-"+Y+"@"+Y:"@"+Y;break;default:Y=H+Y,F===112&&(Y=(_e+=Y,""))}else Y="";break;default:Y=t(O,n(O,H,Qr),Y,F,w+1)}La+=Y,Y=Qr=xe=Le=q=0,H="",j=N.charCodeAt(++Z);break;case 125:case 59:if(H=(0<xe?H.replace(m,""):H).trim(),1<(Ae=H.length))switch(Le===0&&(q=H.charCodeAt(0),q===45||96<q&&123>q)&&(Ae=(H=H.replace(" ",":")).length),0<T&&(nn=a(1,H,O,x,te,ee,_e.length,F,w,F))!==void 0&&(Ae=(H=nn.trim()).length)===0&&(H="\0\0"),q=H.charCodeAt(0),j=H.charCodeAt(1),q){case 0:break;case 64:if(j===105||j===99){Da+=H+N.charAt(Z);break}default:H.charCodeAt(Ae-1)!==58&&(_e+=i(H,q,j,H.charCodeAt(2)))}Qr=xe=Le=q=0,H="",j=N.charCodeAt(++Z)}}switch(j){case 13:case 10:P===47?P=0:1+q===0&&F!==107&&0<H.length&&(xe=1,H+="\0"),0<T*z&&a(0,H,O,x,te,ee,_e.length,F,w,F),ee=1,te++;break;case 59:case 125:if(P+$+oe+W===0){ee++;break}default:switch(ee++,_t=N.charAt(Z),j){case 9:case 32:if($+W+P===0)switch(ke){case 44:case 58:case 9:case 32:_t="";break;default:j!==32&&(_t=" ")}break;case 0:_t="\\0";break;case 12:_t="\\f";break;case 11:_t="\\v";break;case 38:$+P+W===0&&(xe=Qr=1,_t="\f"+_t);break;case 108:if($+P+W+he===0&&0<Le)switch(Z-Le){case 2:ke===112&&N.charCodeAt(Z-3)===58&&(he=ke);case 8:We===111&&(he=We)}break;case 58:$+P+W===0&&(Le=Z);break;case 44:P+oe+$+W===0&&(xe=1,_t+="\r");break;case 34:case 39:P===0&&($=$===j?0:$===0?j:$);break;case 91:$+P+oe===0&&W++;break;case 93:$+P+oe===0&&W--;break;case 41:$+P+W===0&&oe--;break;case 40:if($+P+W===0){if(q===0)switch(2*ke+3*We){case 533:break;default:q=1}oe++}break;case 64:P+oe+$+W+Le+Y===0&&(Y=1);break;case 42:case 47:if(!(0<$+W+oe))switch(P){case 0:switch(2*j+3*N.charCodeAt(Z+1)){case 235:P=47;break;case 220:Ae=Z,P=42}break;case 42:j===47&&ke===42&&Ae+2!==Z&&(N.charCodeAt(Ae+2)===33&&(_e+=N.substring(Ae,Z+1)),_t="",P=0)}}P===0&&(H+=_t)}We=ke,ke=j,Z++}if(Ae=_e.length,0<Ae){if(xe=O,0<T&&(nn=a(2,_e,xe,x,te,ee,Ae,F,w,F),nn!==void 0&&(_e=nn).length===0))return Da+_e+La;if(_e=xe.join(",")+"{"+_e+"}",ue*he!==0){switch(ue!==2||o(_e,2)||(he=0),he){case 111:_e=_e.replace(v,":-moz-$1")+_e;break;case 112:_e=_e.replace(d,"::-webkit-input-$1")+_e.replace(d,"::-moz-$1")+_e.replace(d,":-ms-input-$1")+_e}he=0}}return Da+_e+La}function n(x,O,N){var F=O.trim().split(S);O=F;var w=F.length,W=x.length;switch(W){case 0:case 1:var P=0;for(x=W===0?"":x[0]+" ";P<w;++P)O[P]=r(x,O[P],N).trim();break;default:var oe=P=0;for(O=[];P<w;++P)for(var $=0;$<W;++$)O[oe++]=r(x[$]+" ",F[P],N).trim()}return O}function r(x,O,N){var F=O.charCodeAt(0);switch(33>F&&(F=(O=O.trim()).charCodeAt(0)),F){case 38:return O.replace(f,"$1"+x.trim());case 58:return x.trim()+O.replace(f,"$1"+x.trim());default:if(0<1*N&&0<O.indexOf("\f"))return O.replace(f,(x.charCodeAt(0)===58?"":"$1")+x.trim())}return x+O}function i(x,O,N,F){var w=x+";",W=2*O+3*N+4*F;if(W===944){x=w.indexOf(":",9)+1;var P=w.substring(x,w.length-1).trim();return P=w.substring(0,x).trim()+P+";",ue===1||ue===2&&o(P,1)?"-webkit-"+P+P:P}if(ue===0||ue===2&&!o(w,1))return w;switch(W){case 1015:return w.charCodeAt(10)===97?"-webkit-"+w+w:w;case 951:return w.charCodeAt(3)===116?"-webkit-"+w+w:w;case 963:return w.charCodeAt(5)===110?"-webkit-"+w+w:w;case 1009:if(w.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+w+w;case 978:return"-webkit-"+w+"-moz-"+w+w;case 1019:case 983:return"-webkit-"+w+"-moz-"+w+"-ms-"+w+w;case 883:if(w.charCodeAt(8)===45)return"-webkit-"+w+w;if(0<w.indexOf("image-set(",11))return w.replace(X,"$1-webkit-$2")+w;break;case 932:if(w.charCodeAt(4)===45)switch(w.charCodeAt(5)){case 103:return"-webkit-box-"+w.replace("-grow","")+"-webkit-"+w+"-ms-"+w.replace("grow","positive")+w;case 115:return"-webkit-"+w+"-ms-"+w.replace("shrink","negative")+w;case 98:return"-webkit-"+w+"-ms-"+w.replace("basis","preferred-size")+w}return"-webkit-"+w+"-ms-"+w+w;case 964:return"-webkit-"+w+"-ms-flex-"+w+w;case 1023:if(w.charCodeAt(8)!==99)break;return P=w.substring(w.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+P+"-webkit-"+w+"-ms-flex-pack"+P+w;case 1005:return y.test(w)?w.replace(_,":-webkit-")+w.replace(_,":-moz-")+w:w;case 1e3:switch(P=w.substring(13).trim(),O=P.indexOf("-")+1,P.charCodeAt(0)+P.charCodeAt(O)){case 226:P=w.replace(k,"tb");break;case 232:P=w.replace(k,"tb-rl");break;case 220:P=w.replace(k,"lr");break;default:return w}return"-webkit-"+w+"-ms-"+P+w;case 1017:if(w.indexOf("sticky",9)===-1)break;case 975:switch(O=(w=x).length-10,P=(w.charCodeAt(O)===33?w.substring(0,O):w).substring(x.indexOf(":",7)+1).trim(),W=P.charCodeAt(0)+(P.charCodeAt(7)|0)){case 203:if(111>P.charCodeAt(8))break;case 115:w=w.replace(P,"-webkit-"+P)+";"+w;break;case 207:case 102:w=w.replace(P,"-webkit-"+(102<W?"inline-":"")+"box")+";"+w.replace(P,"-webkit-"+P)+";"+w.replace(P,"-ms-"+P+"box")+";"+w}return w+";";case 938:if(w.charCodeAt(5)===45)switch(w.charCodeAt(6)){case 105:return P=w.replace("-items",""),"-webkit-"+w+"-webkit-box-"+P+"-ms-flex-"+P+w;case 115:return"-webkit-"+w+"-ms-flex-item-"+w.replace(I,"")+w;default:return"-webkit-"+w+"-ms-flex-line-pack"+w.replace("align-content","").replace(I,"")+w}break;case 973:case 989:if(w.charCodeAt(3)!==45||w.charCodeAt(4)===122)break;case 931:case 953:if(b.test(x)===!0)return(P=x.substring(x.indexOf(":")+1)).charCodeAt(0)===115?i(x.replace("stretch","fill-available"),O,N,F).replace(":fill-available",":stretch"):w.replace(P,"-webkit-"+P)+w.replace(P,"-moz-"+P.replace("fill-",""))+w;break;case 962:if(w="-webkit-"+w+(w.charCodeAt(5)===102?"-ms-"+w:"")+w,N+F===211&&w.charCodeAt(13)===105&&0<w.indexOf("transform",10))return w.substring(0,w.indexOf(";",27)+1).replace(g,"$1-webkit-$2")+w}return w}function o(x,O){var N=x.indexOf(O===1?":":"{"),F=x.substring(0,O!==3?N:10);return N=x.substring(N+1,x.length-1),U(O!==2?F:F.replace(D,"$1"),N,O)}function s(x,O){var N=i(O,O.charCodeAt(0),O.charCodeAt(1),O.charCodeAt(2));return N!==O+";"?N.replace(E," or ($1)").substring(4):"("+O+")"}function a(x,O,N,F,w,W,P,oe,$,q){for(var j=0,ke=O,We;j<T;++j)switch(We=Q[j].call(h,x,ke,N,F,w,W,P,oe,$,q)){case void 0:case!1:case!0:case null:break;default:ke=We}if(ke!==O)return ke}function l(x){switch(x){case void 0:case null:T=Q.length=0;break;default:if(typeof x=="function")Q[T++]=x;else if(typeof x=="object")for(var O=0,N=x.length;O<N;++O)l(x[O]);else z=!!x|0}return l}function u(x){return x=x.prefix,x!==void 0&&(U=null,x?typeof x!="function"?ue=1:(ue=2,U=x):ue=0),u}function h(x,O){var N=x;if(33>N.charCodeAt(0)&&(N=N.trim()),J=N,N=[J],0<T){var F=a(-1,O,N,N,te,ee,0,0,0,0);F!==void 0&&typeof F=="string"&&(O=F)}var w=t(V,N,O,0,0);return 0<T&&(F=a(-2,w,N,N,te,ee,w.length,0,0,0),F!==void 0&&(w=F)),J="",he=0,ee=te=1,w}var p=/^\0+/g,m=/[\0\r\f]/g,_=/: */g,y=/zoo|gra/,g=/([,: ])(transform)/g,S=/,\r+?/g,f=/([\t\r\n ])*\f?&/g,c=/@(k\w+)\s*(\S*)\s*/,d=/::(place)/g,v=/:(read-only)/g,k=/[svh]\w+-[tblr]{2}/,C=/\(\s*(.*)\s*\)/g,E=/([\s\S]*?);/g,I=/-self|flex-/g,D=/[^]*?(:[rp][el]a[\w-]+)[^]*/,b=/stretch|:\s*\w+\-(?:conte|avail)/,X=/([^-])(image-set\()/,ee=1,te=1,he=0,ue=1,V=[],Q=[],T=0,U=null,z=0,J="";return h.use=l,h.set=u,e!==void 0&&u(e),h}var eI={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function tI(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var nI=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,eh=tI(function(e){return nI.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),av={exports:{}},ie={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pe=typeof Symbol=="function"&&Symbol.for,Jc=Pe?Symbol.for("react.element"):60103,Zc=Pe?Symbol.for("react.portal"):60106,wa=Pe?Symbol.for("react.fragment"):60107,Sa=Pe?Symbol.for("react.strict_mode"):60108,ka=Pe?Symbol.for("react.profiler"):60114,Ea=Pe?Symbol.for("react.provider"):60109,Ia=Pe?Symbol.for("react.context"):60110,ed=Pe?Symbol.for("react.async_mode"):60111,Ta=Pe?Symbol.for("react.concurrent_mode"):60111,Ca=Pe?Symbol.for("react.forward_ref"):60112,Ra=Pe?Symbol.for("react.suspense"):60113,rI=Pe?Symbol.for("react.suspense_list"):60120,Pa=Pe?Symbol.for("react.memo"):60115,xa=Pe?Symbol.for("react.lazy"):60116,iI=Pe?Symbol.for("react.block"):60121,oI=Pe?Symbol.for("react.fundamental"):60117,sI=Pe?Symbol.for("react.responder"):60118,aI=Pe?Symbol.for("react.scope"):60119;function at(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Jc:switch(e=e.type,e){case ed:case Ta:case wa:case ka:case Sa:case Ra:return e;default:switch(e=e&&e.$$typeof,e){case Ia:case Ca:case xa:case Pa:case Ea:return e;default:return t}}case Zc:return t}}}function lv(e){return at(e)===Ta}ie.AsyncMode=ed;ie.ConcurrentMode=Ta;ie.ContextConsumer=Ia;ie.ContextProvider=Ea;ie.Element=Jc;ie.ForwardRef=Ca;ie.Fragment=wa;ie.Lazy=xa;ie.Memo=Pa;ie.Portal=Zc;ie.Profiler=ka;ie.StrictMode=Sa;ie.Suspense=Ra;ie.isAsyncMode=function(e){return lv(e)||at(e)===ed};ie.isConcurrentMode=lv;ie.isContextConsumer=function(e){return at(e)===Ia};ie.isContextProvider=function(e){return at(e)===Ea};ie.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Jc};ie.isForwardRef=function(e){return at(e)===Ca};ie.isFragment=function(e){return at(e)===wa};ie.isLazy=function(e){return at(e)===xa};ie.isMemo=function(e){return at(e)===Pa};ie.isPortal=function(e){return at(e)===Zc};ie.isProfiler=function(e){return at(e)===ka};ie.isStrictMode=function(e){return at(e)===Sa};ie.isSuspense=function(e){return at(e)===Ra};ie.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===wa||e===Ta||e===ka||e===Sa||e===Ra||e===rI||typeof e=="object"&&e!==null&&(e.$$typeof===xa||e.$$typeof===Pa||e.$$typeof===Ea||e.$$typeof===Ia||e.$$typeof===Ca||e.$$typeof===oI||e.$$typeof===sI||e.$$typeof===aI||e.$$typeof===iI)};ie.typeOf=at;(function(e){e.exports=ie})(av);var td=av.exports,lI={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},uI={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},cI={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},uv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},nd={};nd[td.ForwardRef]=cI;nd[td.Memo]=uv;function th(e){return td.isMemo(e)?uv:nd[e.$$typeof]||lI}var dI=Object.defineProperty,fI=Object.getOwnPropertyNames,nh=Object.getOwnPropertySymbols,hI=Object.getOwnPropertyDescriptor,pI=Object.getPrototypeOf,rh=Object.prototype;function cv(e,t,n){if(typeof t!="string"){if(rh){var r=pI(t);r&&r!==rh&&cv(e,r,n)}var i=fI(t);nh&&(i=i.concat(nh(t)));for(var o=th(e),s=th(t),a=0;a<i.length;++a){var l=i[a];if(!uI[l]&&!(n&&n[l])&&!(s&&s[l])&&!(o&&o[l])){var u=hI(t,l);try{dI(e,l,u)}catch{}}}}return e}var mI=cv;function Wt(){return(Wt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var ih=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Cu=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Qc.exports.typeOf(e)},Ds=Object.freeze([]),Rn=Object.freeze({});function Qi(e){return typeof e=="function"}function oh(e){return e.displayName||e.name||"Component"}function rd(e){return e&&typeof e.styledComponentId=="string"}var Br=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",id=typeof window<"u"&&"HTMLElement"in window,gI=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1);function co(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var vI=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,s=o;n>=s;)(s<<=1)<0&&co(16,""+n);this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var a=o;a<s;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,h=r.length;u<h;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var s=i;s<o;s++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),s=o+i,a=o;a<s;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),es=new Map,Ms=new Map,Ci=1,Mo=function(e){if(es.has(e))return es.get(e);for(;Ms.has(Ci);)Ci++;var t=Ci++;return es.set(e,t),Ms.set(t,e),t},yI=function(e){return Ms.get(e)},_I=function(e,t){t>=Ci&&(Ci=t+1),es.set(e,t),Ms.set(t,e)},wI="style["+Br+'][data-styled-version="5.3.5"]',SI=new RegExp("^"+Br+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),kI=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},EI=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var s=n[i].trim();if(s){var a=s.match(SI);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(_I(u,l),kI(e,u,a[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(s)}}},II=function(){return typeof window<"u"&&window.__webpack_nonce__!==void 0?window.__webpack_nonce__:null},dv=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var h=l[u];if(h&&h.nodeType===1&&h.hasAttribute(Br))return h}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Br,"active"),r.setAttribute("data-styled-version","5.3.5");var s=II();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},TI=function(){function e(n){var r=this.element=dv(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,s=0,a=o.length;s<a;s++){var l=o[s];if(l.ownerNode===i)return l}co(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),CI=function(){function e(n){var r=this.element=dv(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),RI=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),sh=id,PI={isServer:!id,useCSSOMInjection:!gI},fv=function(){function e(n,r,i){n===void 0&&(n=Rn),r===void 0&&(r={}),this.options=Wt({},PI,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&id&&sh&&(sh=!1,function(o){for(var s=document.querySelectorAll(wI),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(Br)!=="active"&&(EI(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return Mo(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Wt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,s=r.target,n=i?new RI(s):o?new TI(s):new CI(s),new vI(n)));var n,r,i,o,s},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Mo(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Mo(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Mo(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",s=0;s<i;s++){var a=yI(s);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(s);if(l&&u&&l.size){var h=Br+".g"+s+'[id="'+a+'"]',p="";l!==void 0&&l.forEach(function(m){m.length>0&&(p+=m+",")}),o+=""+u+h+'{content:"'+p+`"}/*!sc*/
`}}}return o}(this)},e}(),xI=/(a)(d)/gi,ah=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ru(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=ah(t%52)+n;return(ah(t%52)+n).replace(xI,"$1-$2")}var Ir=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},hv=function(e){return Ir(5381,e)};function AI(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Qi(n)&&!rd(n))return!1}return!0}var OI=hv("5.3.5"),NI=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&AI(t),this.componentId=n,this.baseHash=Ir(OI,n),this.baseStyle=r,fv.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var s=jr(this.rules,t,n,r).join(""),a=Ru(Ir(this.baseHash,s)>>>0);if(!n.hasNameForId(i,a)){var l=r(s,"."+a,void 0,i);n.insertRules(i,a,l)}o.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,h=Ir(this.baseHash,r.hash),p="",m=0;m<u;m++){var _=this.rules[m];if(typeof _=="string")p+=_;else if(_){var y=jr(_,t,n,r),g=Array.isArray(y)?y.join(""):y;h=Ir(h,g+m),p+=g}}if(p){var S=Ru(h>>>0);if(!n.hasNameForId(i,S)){var f=r(p,"."+S,void 0,i);n.insertRules(i,S,f)}o.push(S)}}return o.join(" ")},e}(),bI=/^\s*\/\/.*$/gm,LI=[":","[",".","#"];function DI(e){var t,n,r,i,o=e===void 0?Rn:e,s=o.options,a=s===void 0?Rn:s,l=o.plugins,u=l===void 0?Ds:l,h=new ZE(a),p=[],m=function(g){function S(f){if(f)try{g(f+"}")}catch{}}return function(f,c,d,v,k,C,E,I,D,b){switch(f){case 1:if(D===0&&c.charCodeAt(0)===64)return g(c+";"),"";break;case 2:if(I===0)return c+"/*|*/";break;case 3:switch(I){case 102:case 112:return g(d[0]+c),"";default:return c+(b===0?"/*|*/":"")}case-2:c.split("/*|*/}").forEach(S)}}}(function(g){p.push(g)}),_=function(g,S,f){return S===0&&LI.indexOf(f[n.length])!==-1||f.match(i)?g:"."+t};function y(g,S,f,c){c===void 0&&(c="&");var d=g.replace(bI,""),v=S&&f?f+" "+S+" { "+d+" }":d;return t=c,n=S,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),h(f||!S?"":S,v)}return h.use([].concat(u,[function(g,S,f){g===2&&f.length&&f[0].lastIndexOf(n)>0&&(f[0]=f[0].replace(r,_))},m,function(g){if(g===-2){var S=p;return p=[],S}}])),y.hash=u.length?u.reduce(function(g,S){return S.name||co(15),Ir(g,S.name)},5381).toString():"",y}var pv=Kt.createContext();pv.Consumer;var mv=Kt.createContext(),MI=(mv.Consumer,new fv),Pu=DI();function $I(){return M.exports.useContext(pv)||MI}function UI(){return M.exports.useContext(mv)||Pu}var zI=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Pu);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.toString=function(){return co(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Pu),this.name+t.hash},e}(),FI=/([A-Z])/,BI=/([A-Z])/g,jI=/^ms-/,HI=function(e){return"-"+e.toLowerCase()};function lh(e){return FI.test(e)?e.replace(BI,HI).replace(jI,"-ms-"):e}var uh=function(e){return e==null||e===!1||e===""};function jr(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],s=0,a=e.length;s<a;s+=1)(i=jr(e[s],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(uh(e))return"";if(rd(e))return"."+e.styledComponentId;if(Qi(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var l=e(t);return jr(l,t,n,r)}var u;return e instanceof zI?n?(e.inject(n,r),e.getName(r)):e:Cu(e)?function h(p,m){var _,y,g=[];for(var S in p)p.hasOwnProperty(S)&&!uh(p[S])&&(Array.isArray(p[S])&&p[S].isCss||Qi(p[S])?g.push(lh(S)+":",p[S],";"):Cu(p[S])?g.push.apply(g,h(p[S],S)):g.push(lh(S)+": "+(_=S,(y=p[S])==null||typeof y=="boolean"||y===""?"":typeof y!="number"||y===0||_ in eI?String(y).trim():y+"px")+";"));return m?[m+" {"].concat(g,["}"]):g}(e):e.toString()}var ch=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function gv(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Qi(e)||Cu(e)?ch(jr(ih(Ds,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:ch(jr(ih(e,n)))}var VI=function(e,t,n){return n===void 0&&(n=Rn),e.theme!==n.theme&&e.theme||t||n.theme},WI=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,GI=/(^-|-$)/g;function Sl(e){return e.replace(WI,"-").replace(GI,"")}var qI=function(e){return Ru(hv(e)>>>0)};function $o(e){return typeof e=="string"&&!0}var xu=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},KI=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function QI(e,t,n){var r=e[n];xu(t)&&xu(r)?vv(r,t):e[n]=t}function vv(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var s=o[i];if(xu(s))for(var a in s)KI(a)&&QI(e,s[a],a)}return e}var yv=Kt.createContext();yv.Consumer;var kl={};function _v(e,t,n){var r=rd(e),i=!$o(e),o=t.attrs,s=o===void 0?Ds:o,a=t.componentId,l=a===void 0?function(c,d){var v=typeof c!="string"?"sc":Sl(c);kl[v]=(kl[v]||0)+1;var k=v+"-"+qI("5.3.5"+v+kl[v]);return d?d+"-"+k:k}(t.displayName,t.parentComponentId):a,u=t.displayName,h=u===void 0?function(c){return $o(c)?"styled."+c:"Styled("+oh(c)+")"}(e):u,p=t.displayName&&t.componentId?Sl(t.displayName)+"-"+t.componentId:t.componentId||l,m=r&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,_=t.shouldForwardProp;r&&e.shouldForwardProp&&(_=t.shouldForwardProp?function(c,d,v){return e.shouldForwardProp(c,d,v)&&t.shouldForwardProp(c,d,v)}:e.shouldForwardProp);var y,g=new NI(n,p,r?e.componentStyle:void 0),S=g.isStatic&&s.length===0,f=function(c,d){return function(v,k,C,E){var I=v.attrs,D=v.componentStyle,b=v.defaultProps,X=v.foldedComponentIds,ee=v.shouldForwardProp,te=v.styledComponentId,he=v.target,ue=function(F,w,W){F===void 0&&(F=Rn);var P=Wt({},w,{theme:F}),oe={};return W.forEach(function($){var q,j,ke,We=$;for(q in Qi(We)&&(We=We(P)),We)P[q]=oe[q]=q==="className"?(j=oe[q],ke=We[q],j&&ke?j+" "+ke:j||ke):We[q]}),[P,oe]}(VI(k,M.exports.useContext(yv),b)||Rn,k,I),V=ue[0],Q=ue[1],T=function(F,w,W,P){var oe=$I(),$=UI(),q=w?F.generateAndInjectStyles(Rn,oe,$):F.generateAndInjectStyles(W,oe,$);return q}(D,E,V),U=C,z=Q.$as||k.$as||Q.as||k.as||he,J=$o(z),x=Q!==k?Wt({},k,{},Q):k,O={};for(var N in x)N[0]!=="$"&&N!=="as"&&(N==="forwardedAs"?O.as=x[N]:(ee?ee(N,eh,z):!J||eh(N))&&(O[N]=x[N]));return k.style&&Q.style!==k.style&&(O.style=Wt({},k.style,{},Q.style)),O.className=Array.prototype.concat(X,te,T!==te?T:null,k.className,Q.className).filter(Boolean).join(" "),O.ref=U,M.exports.createElement(z,O)}(y,c,d,S)};return f.displayName=h,(y=Kt.forwardRef(f)).attrs=m,y.componentStyle=g,y.displayName=h,y.shouldForwardProp=_,y.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Ds,y.styledComponentId=p,y.target=r?e.target:e,y.withComponent=function(c){var d=t.componentId,v=function(C,E){if(C==null)return{};var I,D,b={},X=Object.keys(C);for(D=0;D<X.length;D++)I=X[D],E.indexOf(I)>=0||(b[I]=C[I]);return b}(t,["componentId"]),k=d&&d+"-"+($o(c)?c:Sl(oh(c)));return _v(c,Wt({},v,{attrs:m,componentId:k}),n)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(c){this._foldedDefaultProps=r?vv({},e.defaultProps,c):c}}),y.toString=function(){return"."+y.styledComponentId},i&&mI(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var Au=function(e){return function t(n,r,i){if(i===void 0&&(i=Rn),!Qc.exports.isValidElementType(r))return co(1,String(r));var o=function(){return n(r,i,gv.apply(void 0,arguments))};return o.withConfig=function(s){return t(n,r,Wt({},i,{},s))},o.attrs=function(s){return t(n,r,Wt({},i,{attrs:Array.prototype.concat(i.attrs,s).filter(Boolean)}))},o}(_v,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Au[e]=Au(e)});const Aa=Au;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Hr=function(){return Hr=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Hr.apply(this,arguments)};function fo(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var dh,fh,hh,ph,mh,YI=gv(dh||(dh=fo([`
  display: flex;
  align-items: center;
  min-width: 322px;
  max-width: 508px;
  height: 48px;
  border: dashed 2px `,`;
  padding: 8px 16px 8px 8px;
  border-radius: 5px;
  cursor: pointer;
  flex-grow: 0;
`],[`
  display: flex;
  align-items: center;
  min-width: 322px;
  max-width: 508px;
  height: 48px;
  border: dashed 2px `,`;
  padding: 8px 16px 8px 8px;
  border-radius: 5px;
  cursor: pointer;
  flex-grow: 0;
`])),"#0658c2"),XI=Aa.label(fh||(fh=fo([`
  position: relative;
  `,`;
  &.is-disabled {
    border: dashed 2px `,`;
    cursor: no-drop;
    svg {
      fill: `,`;
      color: `,`;
      path {
        fill: `,`;
        color: `,`;
      }
    }
  }
  & > input {
    display: none;
  }
`],[`
  position: relative;
  `,`;
  &.is-disabled {
    border: dashed 2px `,`;
    cursor: no-drop;
    svg {
      fill: `,`;
      color: `,`;
      path {
        fill: `,`;
        color: `,`;
      }
    }
  }
  & > input {
    display: none;
  }
`])),function(e){return e.overRide?"":YI},"#666","#666","#666","#666","#666"),JI=Aa.div(hh||(hh=fo([`
  border: dashed 2px `,`;
  border-radius: 5px;
  background-color: `,`;
  opacity: 0.5;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  & > span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`],[`
  border: dashed 2px `,`;
  border-radius: 5px;
  background-color: `,`;
  opacity: 0.5;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  & > span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`])),"#666","#999"),ZI=Aa.div(ph||(ph=fo([`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  & > span {
    font-size: 12px;
    color: `,`;
  }
  .file-types {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 100px;
  }
`],[`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  & > span {
    font-size: 12px;
    color: `,`;
  }
  .file-types {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 100px;
  }
`])),function(e){return e.error?"red":"#666"}),eT=Aa.span(mh||(mh=fo([`
  font-size: 14px;
  color: `,`;
  span {
    text-decoration: underline;
  }
`],[`
  font-size: 14px;
  color: `,`;
  span {
    text-decoration: underline;
  }
`])),"#666"),gh=function(e){return e/1e3/1e3},tT=function(e){return e===void 0?"":e.map(function(t){return".".concat(t.toLowerCase())}).join(",")};function nT(e){var t=e.types,n=e.minSize,r=e.maxSize;if(t){var i=t.toString(),o="";return r&&(o+="size >= ".concat(r,", ")),n&&(o+="size <= ".concat(n,", ")),A("span",Hr({title:"".concat(o,"types: ").concat(i),className:"file-types"},{children:i}),void 0)}return null}function rT(){return Ce("svg",Hr({width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[A("path",{d:"M5.33317 6.66667H22.6665V16H25.3332V6.66667C25.3332 5.196 24.1372 4 22.6665 4H5.33317C3.8625 4 2.6665 5.196 2.6665 6.66667V22.6667C2.6665 24.1373 3.8625 25.3333 5.33317 25.3333H15.9998V22.6667H5.33317V6.66667Z",fill:"#0658C2"},void 0),A("path",{d:"M10.6665 14.6667L6.6665 20H21.3332L15.9998 12L11.9998 17.3333L10.6665 14.6667Z",fill:"#0658C2"},void 0),A("path",{d:"M25.3332 18.6667H22.6665V22.6667H18.6665V25.3333H22.6665V29.3333H25.3332V25.3333H29.3332V22.6667H25.3332V18.6667Z",fill:"#0658C2"},void 0)]}),void 0)}var El=0,iT=function(e,t,n,r,i){return n?A("span",{children:"File type/size error, Hovered on types!"},void 0):A(eT,{children:r?A("span",{children:"Upload disabled"},void 0):e||t?Ce(Ti,{children:[A("span",{children:"Uploaded Successfully!."},void 0)," Upload another?"]},void 0):A(Ti,{children:Ce(Ti,i?{children:[A("span",{children:i.split(" ")[0]},void 0)," ",i.substr(i.indexOf(" ")+1)]}:{children:[A("span",{children:"Upload"},void 0)," or drop a file right here"]},void 0)},void 0)},void 0)},oT=function(e){var t=e.name,n=e.hoverTitle,r=e.types,i=e.handleChange,o=e.classes,s=e.children,a=e.maxSize,l=e.minSize,u=e.fileOrFiles,h=e.onSizeError,p=e.onTypeError,m=e.onSelect,_=e.onDrop,y=e.disabled,g=e.label,S=e.multiple,f=e.onDraggingStateChange,c=M.exports.useRef(null),d=M.exports.useRef(null),v=M.exports.useState(!1),k=v[0],C=v[1],E=M.exports.useState(null),I=E[0],D=E[1],b=M.exports.useState(!1),X=b[0],ee=b[1],te=function(V){return r&&!function(Q,T){var U=Q.name.split(".").pop();return T.map(function(z){return z.toLowerCase()}).includes(U.toLowerCase())}(V,r)?(ee(!0),p&&p("File type is not supported"),!1):a&&gh(V.size)>a?(ee(!0),h&&h("File size is too big"),!1):!(l&&gh(V.size)<l)||(ee(!0),h&&h("File size is too small"),!1)},he=function(V){var Q=!1;if(V){if(V instanceof File)Q=!te(V);else for(var T=0;T<V.length;T++){var U=V[T];Q=!te(U)||Q}return!Q&&(i&&i(V),D(V),C(!0),ee(!1),!0)}return!1},ue=function(V){var Q=V.labelRef,T=V.inputRef,U=V.multiple,z=V.handleChanges,J=V.onDrop,x=M.exports.useState(!1),O=x[0],N=x[1],F=M.exports.useCallback(function(){T.current.click()},[T]),w=M.exports.useCallback(function($){$.preventDefault(),$.stopPropagation(),El++,$.dataTransfer.items&&$.dataTransfer.items.length!==0&&N(!0)},[]),W=M.exports.useCallback(function($){$.preventDefault(),$.stopPropagation(),--El>0||N(!1)},[]),P=M.exports.useCallback(function($){$.preventDefault(),$.stopPropagation()},[]),oe=M.exports.useCallback(function($){$.preventDefault(),$.stopPropagation(),N(!1),El=0;var q=$.dataTransfer.files;if(q&&q.length>0){var j=U?q:q[0],ke=z(j);J&&ke&&J(j)}},[z]);return M.exports.useEffect(function(){var $=Q.current;return $.addEventListener("click",F),$.addEventListener("dragenter",w),$.addEventListener("dragleave",W),$.addEventListener("dragover",P),$.addEventListener("drop",oe),function(){$.removeEventListener("click",F),$.removeEventListener("dragenter",w),$.removeEventListener("dragleave",W),$.removeEventListener("dragover",P),$.removeEventListener("drop",oe)}},[F,w,W,P,oe,Q]),O}({labelRef:c,inputRef:d,multiple:S,handleChanges:he,onDrop:_});return M.exports.useEffect(function(){f==null||f(ue)},[ue]),M.exports.useEffect(function(){u?(C(!0),D(u)):(d.current&&(d.current.value=""),C(!1),D(null))},[u]),Ce(XI,Hr({overRide:s,className:"".concat(o||""," ").concat(y?"is-disabled":""),ref:c,htmlFor:t,onClick:function(V){V.preventDefault(),V.stopPropagation()}},{children:[A("input",{onClick:function(V){V.stopPropagation(),d&&d.current&&d.current.click()},onChange:function(V){var Q=V.target.files,T=S?Q:Q[0],U=he(T);m&&U&&m(T)},accept:tT(r),ref:d,type:"file",name:t,disabled:y,multiple:S},void 0),ue&&A(JI,{children:A("span",{children:n||"Drop Here"},void 0)},void 0),!s&&Ce(Ti,{children:[A(rT,{},void 0),Ce(ZI,Hr({error:X},{children:[iT(I,k,X,y,g),A(nT,{types:r,minSize:l,maxSize:a},void 0)]}),void 0)]},void 0),s]}),void 0)};function wv(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=wv(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function vn(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=wv(e))&&(r&&(r+=" "),r+=t);return r}function ho(e){return typeof e=="number"&&!isNaN(e)}function si(e){return typeof e=="boolean"}function rr(e){return typeof e=="string"}function Je(e){return typeof e=="function"}function ts(e){return rr(e)||Je(e)?e:null}function ns(e){return e!=null}function sT(e,t){return e===!1||ho(e)&&e>0?e:t}function Il(e){return M.exports.isValidElement(e)||rr(e)||Je(e)||ho(e)}const Sv={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},tn={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function aT(e,t,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition="all "+n+"ms",requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function lT(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:o=300}=e;return function(a){let{children:l,position:u,preventExitTransition:h,done:p,nodeRef:m,isIn:_}=a;const y=r?t+"--"+u:t,g=r?n+"--"+u:n,S=M.exports.useRef(0);return M.exports.useLayoutEffect(()=>{const f=m.current,c=y.split(" "),d=k=>{k.target===m.current&&(f.dispatchEvent(new Event("d")),f.removeEventListener("animationend",d),f.removeEventListener("animationcancel",d),S.current===0&&k.type!=="animationcancel"&&f.classList.remove(...c))};(()=>{f.classList.add(...c),f.addEventListener("animationend",d),f.addEventListener("animationcancel",d)})()},[]),M.exports.useEffect(()=>{const f=m.current,c=()=>{f.removeEventListener("animationend",c),i?aT(f,p,o):p()};_||(h?c():(()=>{S.current=1,f.className+=" "+g,f.addEventListener("animationend",c)})())},[_]),A(Ti,{children:l})}}function vh(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}const dt={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter(r=>r!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},Oa=e=>{let{theme:t,type:n,...r}=e;return A("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":"var(--toastify-icon-color-"+n+")",...r})};function uT(e){return A(Oa,{...e,children:A("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"})})}function cT(e){return A(Oa,{...e,children:A("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"})})}function dT(e){return A(Oa,{...e,children:A("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"})})}function fT(e){return A(Oa,{...e,children:A("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"})})}function hT(){return A("div",{className:"Toastify__spinner"})}const Ou={info:cT,warning:uT,success:dT,error:fT,spinner:hT},pT=e=>e in Ou;function mT(e){let{theme:t,type:n,isLoading:r,icon:i}=e,o=null;const s={theme:t,type:n};return i===!1||(Je(i)?o=i(s):M.exports.isValidElement(i)?o=M.exports.cloneElement(i,s):rr(i)||ho(i)?o=i:r?o=Ou.spinner():pT(n)&&(o=Ou[n](s))),o}function gT(e){const[,t]=M.exports.useReducer(g=>g+1,0),[n,r]=M.exports.useState([]),i=M.exports.useRef(null),o=M.exports.useRef(new Map).current,s=g=>n.indexOf(g)!==-1,a=M.exports.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:s,getToast:g=>o.get(g)}).current;M.exports.useEffect(()=>(a.containerId=e.containerId,dt.cancelEmit(3).on(0,m).on(1,g=>i.current&&u(g)).on(5,l).emit(2,a),()=>{o.clear(),dt.emit(3,a)}),[]),M.exports.useEffect(()=>{a.props=e,a.isToastActive=s,a.displayedToast=n.length});function l(g){let{containerId:S}=g;const{limit:f}=a.props;f&&(!S||a.containerId===S)&&(a.count-=a.queue.length,a.queue=[])}function u(g){r(S=>ns(g)?S.filter(f=>f!==g):[])}function h(){const{toastContent:g,toastProps:S,staleId:f}=a.queue.shift();_(g,S,f)}function p(g){return!i.current||a.props.enableMultiContainer&&g.containerId!==a.props.containerId||o.has(g.toastId)&&g.updateId==null}function m(g,S){let{delay:f,staleId:c,...d}=S;if(!Il(g)||p(d))return;const{toastId:v,updateId:k,data:C}=d,{props:E}=a,I=()=>u(v),D=k==null;D&&a.count++;const b={toastId:v,updateId:k,data:C,containerId:d.containerId,isLoading:d.isLoading,theme:d.theme||E.theme,icon:d.icon!=null?d.icon:E.icon,isIn:!1,key:d.key||a.toastKey++,type:d.type,closeToast:I,closeButton:d.closeButton,rtl:E.rtl,position:d.position||E.position,transition:d.transition||E.transition,className:ts(d.className||E.toastClassName),bodyClassName:ts(d.bodyClassName||E.bodyClassName),style:d.style||E.toastStyle,bodyStyle:d.bodyStyle||E.bodyStyle,onClick:d.onClick||E.onClick,pauseOnHover:si(d.pauseOnHover)?d.pauseOnHover:E.pauseOnHover,pauseOnFocusLoss:si(d.pauseOnFocusLoss)?d.pauseOnFocusLoss:E.pauseOnFocusLoss,draggable:si(d.draggable)?d.draggable:E.draggable,draggablePercent:d.draggablePercent||E.draggablePercent,draggableDirection:d.draggableDirection||E.draggableDirection,closeOnClick:si(d.closeOnClick)?d.closeOnClick:E.closeOnClick,progressClassName:ts(d.progressClassName||E.progressClassName),progressStyle:d.progressStyle||E.progressStyle,autoClose:d.isLoading?!1:sT(d.autoClose,E.autoClose),hideProgressBar:si(d.hideProgressBar)?d.hideProgressBar:E.hideProgressBar,progress:d.progress,role:d.role||E.role,deleteToast(){const ee=vh(o.get(v),"removed");o.delete(v),dt.emit(4,ee);const te=a.queue.length;if(a.count=ns(v)?a.count-1:a.count-a.displayedToast,a.count<0&&(a.count=0),te>0){const he=ns(v)?1:a.props.limit;if(te===1||he===1)a.displayedToast++,h();else{const ue=he>te?te:he;a.displayedToast=ue;for(let V=0;V<ue;V++)h()}}else t()}};b.iconOut=mT(b),Je(d.onOpen)&&(b.onOpen=d.onOpen),Je(d.onClose)&&(b.onClose=d.onClose),b.closeButton=E.closeButton,d.closeButton===!1||Il(d.closeButton)?b.closeButton=d.closeButton:d.closeButton===!0&&(b.closeButton=Il(E.closeButton)?E.closeButton:!0);let X=g;M.exports.isValidElement(g)&&!rr(g.type)?X=M.exports.cloneElement(g,{closeToast:I,toastProps:b,data:C}):Je(g)&&(X=g({closeToast:I,toastProps:b,data:C})),E.limit&&E.limit>0&&a.count>E.limit&&D?a.queue.push({toastContent:X,toastProps:b,staleId:c}):ho(f)?setTimeout(()=>{_(X,b,c)},f):_(X,b,c)}function _(g,S,f){const{toastId:c}=S;f&&o.delete(f);const d={content:g,props:S};o.set(c,d),r(v=>[...v,c].filter(k=>k!==f)),dt.emit(4,vh(d,d.props.updateId==null?"added":"updated"))}function y(g){const S=new Map,f=Array.from(o.values());return e.newestOnTop&&f.reverse(),f.forEach(c=>{const{position:d}=c.props;S.has(d)||S.set(d,[]),S.get(d).push(c)}),Array.from(S,c=>g(c[0],c[1]))}return{getToastToRender:y,containerRef:i,isToastActive:s}}function yh(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function _h(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function vT(e){const[t,n]=M.exports.useState(!1),[r,i]=M.exports.useState(!1),o=M.exports.useRef(null),s=M.exports.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=M.exports.useRef(e),{autoClose:l,pauseOnHover:u,closeToast:h,onClick:p,closeOnClick:m}=e;M.exports.useEffect(()=>{a.current=e}),M.exports.useEffect(()=>(o.current&&o.current.addEventListener("d",g,{once:!0}),Je(e.onOpen)&&e.onOpen(M.exports.isValidElement(e.children)&&e.children.props),()=>{const I=a.current;Je(I.onClose)&&I.onClose(M.exports.isValidElement(I.children)&&I.children.props)}),[]),M.exports.useEffect(()=>(e.pauseOnFocusLoss&&f(),()=>{e.pauseOnFocusLoss&&c()}),[e.pauseOnFocusLoss]);function _(I){if(e.draggable){d();const D=o.current;s.canCloseOnClick=!0,s.canDrag=!0,s.boundingRect=D.getBoundingClientRect(),D.style.transition="",s.x=yh(I.nativeEvent),s.y=_h(I.nativeEvent),e.draggableDirection==="x"?(s.start=s.x,s.removalDistance=D.offsetWidth*(e.draggablePercent/100)):(s.start=s.y,s.removalDistance=D.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent/100))}}function y(){if(s.boundingRect){const{top:I,bottom:D,left:b,right:X}=s.boundingRect;e.pauseOnHover&&s.x>=b&&s.x<=X&&s.y>=I&&s.y<=D?S():g()}}function g(){n(!0)}function S(){n(!1)}function f(){document.hasFocus()||S(),window.addEventListener("focus",g),window.addEventListener("blur",S)}function c(){window.removeEventListener("focus",g),window.removeEventListener("blur",S)}function d(){s.didMove=!1,document.addEventListener("mousemove",k),document.addEventListener("mouseup",C),document.addEventListener("touchmove",k),document.addEventListener("touchend",C)}function v(){document.removeEventListener("mousemove",k),document.removeEventListener("mouseup",C),document.removeEventListener("touchmove",k),document.removeEventListener("touchend",C)}function k(I){const D=o.current;s.canDrag&&D&&(s.didMove=!0,t&&S(),s.x=yh(I),s.y=_h(I),e.draggableDirection==="x"?s.delta=s.x-s.start:s.delta=s.y-s.start,s.start!==s.x&&(s.canCloseOnClick=!1),D.style.transform="translate"+e.draggableDirection+"("+s.delta+"px)",D.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function C(){v();const I=o.current;if(s.canDrag&&s.didMove&&I){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance){i(!0),e.closeToast();return}I.style.transition="transform 0.2s, opacity 0.2s",I.style.transform="translate"+e.draggableDirection+"(0)",I.style.opacity="1"}}const E={onMouseDown:_,onTouchStart:_,onMouseUp:y,onTouchEnd:y};return l&&u&&(E.onMouseEnter=S,E.onMouseLeave=g),m&&(E.onClick=I=>{p&&p(I),s.canCloseOnClick&&h()}),{playToast:g,pauseToast:S,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:E}}function kv(e){let{closeToast:t,theme:n,ariaLabel:r="close"}=e;return A("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:i=>{i.stopPropagation(),t(i)},"aria-label":r,children:A("svg",{"aria-hidden":"true",viewBox:"0 0 14 16",children:A("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})})})}function Ev(e){let{delay:t,isRunning:n,closeToast:r,type:i,hide:o,className:s,style:a,controlledProgress:l,progress:u,rtl:h,isIn:p,theme:m}=e;const _={...a,animationDuration:t+"ms",animationPlayState:n?"running":"paused",opacity:o?0:1};l&&(_.transform="scaleX("+u+")");const y=vn("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+m,"Toastify__progress-bar--"+i,{["Toastify__progress-bar--rtl"]:h}),g=Je(s)?s({rtl:h,type:i,defaultClassName:y}):vn(y,s),S={[l&&u>=1?"onTransitionEnd":"onAnimationEnd"]:l&&u<1?null:()=>{p&&r()}};return A("div",{role:"progressbar","aria-hidden":o?"true":"false","aria-label":"notification timer",className:g,style:_,...S})}Ev.defaultProps={type:tn.DEFAULT,hide:!1};const yT=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i}=vT(e),{closeButton:o,children:s,autoClose:a,onClick:l,type:u,hideProgressBar:h,closeToast:p,transition:m,position:_,className:y,style:g,bodyClassName:S,bodyStyle:f,progressClassName:c,progressStyle:d,updateId:v,role:k,progress:C,rtl:E,toastId:I,deleteToast:D,isIn:b,isLoading:X,iconOut:ee,theme:te}=e,he=vn("Toastify__toast","Toastify__toast-theme--"+te,"Toastify__toast--"+u,{["Toastify__toast--rtl"]:E}),ue=Je(y)?y({rtl:E,position:_,type:u,defaultClassName:he}):vn(he,y),V=!!C,Q={closeToast:p,type:u,theme:te};let T=null;return o===!1||(Je(o)?T=o(Q):Kt.isValidElement(o)?T=Kt.cloneElement(o,Q):T=kv(Q)),A(m,{isIn:b,done:D,position:_,preventExitTransition:n,nodeRef:r,children:Ce("div",{id:I,onClick:l,className:ue,...i,style:g,ref:r,children:[Ce("div",{...b&&{role:k},className:Je(S)?S({type:u}):vn("Toastify__toast-body",S),style:f,children:[ee!=null&&A("div",{className:vn("Toastify__toast-icon",{["Toastify--animate-icon Toastify__zoom-enter"]:!X}),children:ee}),A("div",{children:s})]}),T,(a||V)&&A(Ev,{...v&&!V?{key:"pb-"+v}:{},rtl:E,theme:te,delay:a,isRunning:t,isIn:b,closeToast:p,hide:h,type:u,style:d,className:c,controlledProgress:V,progress:C})]})})},_T=lT({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),od=M.exports.forwardRef((e,t)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=gT(e),{className:o,style:s,rtl:a,containerId:l}=e;function u(h){const p=vn("Toastify__toast-container","Toastify__toast-container--"+h,{["Toastify__toast-container--rtl"]:a});return Je(o)?o({position:h,rtl:a,defaultClassName:p}):vn(p,ts(o))}return M.exports.useEffect(()=>{t&&(t.current=r.current)},[]),A("div",{ref:r,className:"Toastify",id:l,children:n((h,p)=>{const m=p.length?{...s}:{...s,pointerEvents:"none"};return A("div",{className:u(h),style:m,children:p.map((_,y)=>{let{content:g,props:S}=_;return M.exports.createElement(yT,{...S,isIn:i(S.toastId),style:{...S.style,"--nth":y+1,"--len":p.length},key:"toast-"+S.key},g)})},"container-"+h)})})});od.displayName="ToastContainer";od.defaultProps={position:Sv.TOP_RIGHT,transition:_T,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:kv,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let Wn=new Map,Nu,Yi=[];function wT(e,t){let{containerId:n}=t;const r=Wn.get(n||Nu);return r?r.getToast(e):null}function Iv(){return Math.random().toString(36).substring(2,9)}function ST(e){return e&&(rr(e.toastId)||ho(e.toastId))?e.toastId:Iv()}function po(e,t){return Wn.size>0?dt.emit(0,e,t):Yi.push({content:e,options:t}),t.toastId}function Na(e,t){return{...t,type:t&&t.type||e,toastId:ST(t)}}function ba(e){return(t,n)=>po(t,Na(e,n))}function le(e,t){return po(e,Na(tn.DEFAULT,t))}le.loading=(e,t)=>po(e,Na(tn.DEFAULT,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function kT(e,t,n){let{pending:r,error:i,success:o}=t,s;r&&(s=rr(r)?le.loading(r,n):le.loading(r.render,{...n,...r}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},l=(h,p,m)=>{if(p==null){le.dismiss(s);return}const _={type:h,...a,...n,data:m},y=rr(p)?{render:p}:p;return s?le.update(s,{..._,...y}):le(y.render,{..._,...y}),m},u=Je(e)?e():e;return u.then(h=>l("success",o,h)).catch(h=>l("error",i,h)),u}le.promise=kT;le.success=ba(tn.SUCCESS);le.info=ba(tn.INFO);le.error=ba(tn.ERROR);le.warning=ba(tn.WARNING);le.warn=le.warning;le.dark=(e,t)=>po(e,Na(tn.DEFAULT,{theme:"dark",...t}));le.dismiss=e=>{Wn.size>0?dt.emit(1,e):Yi=Yi.filter(t=>ns(e)&&t.options.toastId!==e)};le.clearWaitingQueue=function(e){return e===void 0&&(e={}),dt.emit(5,e)};le.isActive=e=>{let t=!1;return Wn.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t};le.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const n=wT(e,t);if(n){const{props:r,content:i}=n,o={...r,...t,toastId:t.toastId||e,updateId:Iv()};o.toastId!==e&&(o.staleId=e);const s=o.render||i;delete o.render,po(s,o)}},0)};le.done=e=>{le.update(e,{progress:1})};le.onChange=e=>(dt.on(4,e),()=>{dt.off(4,e)});le.POSITION=Sv;le.TYPE=tn;dt.on(2,e=>{Nu=e.containerId||e,Wn.set(Nu,e),Yi.forEach(t=>{dt.emit(0,t.content,t.options)}),Yi=[]}).on(3,e=>{Wn.delete(e.containerId||e),Wn.size===0&&dt.off(0).off(1).off(5)});const wh=({banner:e})=>{const[t,n]=M.exports.useState(null),[r,i]=M.exports.useState(null),[o,s]=M.exports.useState(""),[a,l]=M.exports.useState(0),[u,h]=M.exports.useState(!1),p=g=>{g.arrayBuffer().then(S=>{const f=new Blob([S],{type:g.type}),c=URL.createObjectURL(f);i(c)}),n(g)},m=g=>{s(g.target.value)},_=async()=>{h(!0);const g=$E(aa.storage,`/${e}/${t.name}`),S=DE(g,t);S.on("state_changed",f=>{const c=Math.round(f.bytesTransferred/f.totalBytes*100);l(c)},f=>{le.error(f.message),h(!1)},()=>{ME(S.snapshot.ref).then(f=>{y(f)})})},y=async g=>{const S={[e]:{image:g,url:o}};await fetch("https://lavozdeguanacaste-app-default-rtdb.firebaseio.com/ads.json",{method:"PATCH",body:JSON.stringify(S)}),i(g),l(0),h(!1),le.success("Los datos se han guardado correctamente")};return Ce("div",{className:"upload-image-container",children:[A(oT,{handleChange:p,name:"file",types:["JPG","PNG","JPEG"]}),r&&A("img",{src:r,alt:"imagen"}),A("input",{onChange:m,type:"text",placeholder:"https://url.destino.com/"}),A("button",{onClick:_,disabled:u,children:u?`Subiendo... ${a} %`:"Guardar cambios"})]})},ET=()=>A("div",{className:"page",children:A("div",{className:"container",children:Ce("div",{className:"container-info",children:[A("div",{className:"logo",children:A("img",{src:iv,alt:"logo"})}),A("h2",{children:"La Voz de Guanacaste | Dashboard App"}),A("p",{children:"Sube las imagenes que se muestran como banner en la aplicaci\xF3n m\xF3vil."}),Ce("section",{className:"image-element",children:[A("h3",{children:"Banner 01"}),A(wh,{banner:"banner01"})]}),Ce("section",{className:"image-element",children:[A("h3",{children:"Banner 02"}),A(wh,{banner:"banner02"})]}),A("button",{onClick:()=>{vS(aa.auth)},children:"Logout"})]})})});var Tv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Sh=Kt.createContext&&Kt.createContext(Tv),Pn=globalThis&&globalThis.__assign||function(){return Pn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Pn.apply(this,arguments)},IT=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Cv(e){return e&&e.map(function(t,n){return Kt.createElement(t.tag,Pn({key:n},t.attr),Cv(t.child))})}function Rv(e){return function(t){return A(TT,{...Pn({attr:Pn({},e.attr)},t),children:Cv(e.child)})}}function TT(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,s=IT(e,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),Ce("svg",{...Pn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:Pn(Pn({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),children:[o&&A("title",{children:o}),e.children]})};return Sh!==void 0?A(Sh.Consumer,{children:function(n){return t(n)}}):t(Tv)}function CT(e){return Rv({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"}}]})(e)}function RT(e){return Rv({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"}}]})(e)}const PT=()=>{const[e,t]=M.exports.useState(!1);return Ce("div",{className:"login-form",children:[A("p",{className:"image-logo",children:A("img",{src:iv,alt:"logo"})}),A("h2",{children:"Inciar sesi\xF3n"}),Ce("form",{onSubmit:r=>{r.preventDefault(),t(!0);const i=r.target.email.value,o=r.target.password.value;gS(aa.auth,i,o).then(s=>{t(!1)}).catch(s=>{console.log(s),le.error(s.message,{position:"bottom-center"}),t(!1)})},children:[A("p",{children:A("input",{type:"email",name:"email",id:"email",placeholder:"Correo electr\xF3nico",required:!0})}),A("p",{children:A("input",{type:"password",name:"password",id:"password",minLength:6,placeholder:"Contrase\xF1a",required:!0})}),A("p",{children:A("button",{type:"submit",disabled:e,children:e?Ce("span",{children:[" ",A(RT,{})," Cargando..."]}):Ce("span",{children:[" ",A(CT,{})," Entrar"]})})})]})]})};const xT=()=>A("div",{className:"page",children:A("div",{className:"form",children:A(PT,{})})});function AT(){const[e,t]=M.exports.useState(!1),[n,r]=M.exports.useState(!0);return M.exports.useEffect(()=>{aa.auth.onAuthStateChanged(i=>{i?(t(!0),r(!1)):(t(!1),r(!1))})},[]),n?A("div",{className:"loading",children:"Loading"}):Ce("div",{children:[e?A(ET,{}):A(xT,{}),A(od,{})]})}Tl.createRoot(document.getElementById("root")).render(A(AT,{}));
