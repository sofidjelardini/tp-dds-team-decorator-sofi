"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[506],{8369:function(t,e,n){n.d(e,{Ry:function(){return a}});var r=new WeakMap,i=new WeakMap,o={},l=0,u=function(t){return t&&(t.host||u(t.parentNode))},c=function(t,e,n,c){var a=(Array.isArray(t)?t:[t]).map(function(t){if(e.contains(t))return t;var n=u(t);return n&&e.contains(n)?n:(console.error("aria-hidden",t,"in not contained inside",e,". Doing nothing"),null)}).filter(function(t){return!!t});o[n]||(o[n]=new WeakMap);var f=o[n],s=[],d=new Set,p=new Set(a),h=function(t){!t||d.has(t)||(d.add(t),h(t.parentNode))};a.forEach(h);var m=function(t){!t||p.has(t)||Array.prototype.forEach.call(t.children,function(t){if(d.has(t))m(t);else try{var e=t.getAttribute(c),o=null!==e&&"false"!==e,l=(r.get(t)||0)+1,u=(f.get(t)||0)+1;r.set(t,l),f.set(t,u),s.push(t),1===l&&o&&i.set(t,!0),1===u&&t.setAttribute(n,"true"),o||t.setAttribute(c,"true")}catch(e){console.error("aria-hidden: cannot operate on ",t,e)}})};return m(e),d.clear(),l++,function(){s.forEach(function(t){var e=r.get(t)-1,o=f.get(t)-1;r.set(t,e),f.set(t,o),e||(i.has(t)||t.removeAttribute(c),i.delete(t)),o||t.removeAttribute(n)}),--l||(r=new WeakMap,r=new WeakMap,i=new WeakMap,o={})}},a=function(t,e,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(t)?t:[t]),i=e||("undefined"==typeof document?null:(Array.isArray(t)?t[0]:t).ownerDocument.body);return i?(r.push.apply(r,Array.from(i.querySelectorAll("[aria-live]"))),c(r,i,n,"aria-hidden")):function(){return null}}},1823:function(t,e,n){n.d(e,{Av:function(){return l},pF:function(){return r},xv:function(){return o},zi:function(){return i}});var r="right-scroll-bar-position",i="width-before-scroll-bar",o="with-scroll-bars-hidden",l="--removed-body-scroll-bar-size"},5973:function(t,e,n){n.d(e,{jp:function(){return m}});var r=n(2265),i=n(8039),o=n(1823),l={left:0,top:0,right:0,gap:0},u=function(t){return parseInt(t||"",10)||0},c=function(t){var e=window.getComputedStyle(document.body),n=e["padding"===t?"paddingLeft":"marginLeft"],r=e["padding"===t?"paddingTop":"marginTop"],i=e["padding"===t?"paddingRight":"marginRight"];return[u(n),u(r),u(i)]},a=function(t){if(void 0===t&&(t="margin"),"undefined"==typeof window)return l;var e=c(t),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:e[0],top:e[1],right:e[2],gap:Math.max(0,r-n+e[2]-e[0])}},f=(0,i.Ws)(),s="data-scroll-locked",d=function(t,e,n,r){var i=t.left,l=t.top,u=t.right,c=t.gap;return void 0===n&&(n="margin"),"\n  .".concat(o.xv," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(c,"px ").concat(r,";\n  }\n  body[").concat(s,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([e&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(i,"px;\n    padding-top: ").concat(l,"px;\n    padding-right: ").concat(u,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(c,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(c,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(o.pF," {\n    right: ").concat(c,"px ").concat(r,";\n  }\n  \n  .").concat(o.zi," {\n    margin-right: ").concat(c,"px ").concat(r,";\n  }\n  \n  .").concat(o.pF," .").concat(o.pF," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(o.zi," .").concat(o.zi," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(s,"] {\n    ").concat(o.Av,": ").concat(c,"px;\n  }\n")},p=function(){var t=parseInt(document.body.getAttribute(s)||"0",10);return isFinite(t)?t:0},h=function(){r.useEffect(function(){return document.body.setAttribute(s,(p()+1).toString()),function(){var t=p()-1;t<=0?document.body.removeAttribute(s):document.body.setAttribute(s,t.toString())}},[])},m=function(t){var e=t.noRelative,n=t.noImportant,i=t.gapMode,o=void 0===i?"margin":i;h();var l=r.useMemo(function(){return a(o)},[o]);return r.createElement(f,{styles:d(l,!e,o,n?"":"!important")})}},8039:function(t,e,n){n.d(e,{Ws:function(){return u}});var r,i=n(2265),o=function(){var t=0,e=null;return{add:function(i){if(0==t&&(e=function(){if(!document)return null;var t=document.createElement("style");t.type="text/css";var e=r||n.nc;return e&&t.setAttribute("nonce",e),t}())){var o,l;(o=e).styleSheet?o.styleSheet.cssText=i:o.appendChild(document.createTextNode(i)),l=e,(document.head||document.getElementsByTagName("head")[0]).appendChild(l)}t++},remove:function(){--t||!e||(e.parentNode&&e.parentNode.removeChild(e),e=null)}}},l=function(){var t=o();return function(e,n){i.useEffect(function(){return t.add(e),function(){t.remove()}},[e&&n])}},u=function(){var t=l();return function(e){return t(e.styles,e.dynamic),null}}},8215:function(t,e,n){n.d(e,{q:function(){return u}});var r=n(2265);function i(t,e){return"function"==typeof t?t(e):t&&(t.current=e),t}var o="undefined"!=typeof window?r.useLayoutEffect:r.useEffect,l=new WeakMap;function u(t,e){var n,u,c,a=(n=e||null,u=function(e){return t.forEach(function(t){return i(t,e)})},(c=(0,r.useState)(function(){return{value:n,callback:u,facade:{get current(){return c.value},set current(value){var t=c.value;t!==value&&(c.value=value,c.callback(value,t))}}}})[0]).callback=u,c.facade);return o(function(){var e=l.get(a);if(e){var n=new Set(e),r=new Set(t),o=a.current;n.forEach(function(t){r.has(t)||i(t,null)}),r.forEach(function(t){n.has(t)||i(t,o)})}l.set(a,t)},[t]),a}},8776:function(t,e,n){n.d(e,{L:function(){return l}});var r=n(1735),i=n(2265),o=function(t){var e=t.sideCar,n=(0,r._T)(t,["sideCar"]);if(!e)throw Error("Sidecar: please provide `sideCar` property to import the right car");var o=e.read();if(!o)throw Error("Sidecar medium not found");return i.createElement(o,(0,r.pi)({},n))};function l(t,e){return t.useMedium(e),o}o.isSideCarExport=!0},5411:function(t,e,n){n.d(e,{_:function(){return o}});var r=n(1735);function i(t){return t}function o(t){void 0===t&&(t={});var e,n,o,l=(void 0===e&&(e=i),n=[],o=!1,{read:function(){if(o)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:null},useMedium:function(t){var r=e(t,o);return n.push(r),function(){n=n.filter(function(t){return t!==r})}},assignSyncMedium:function(t){for(o=!0;n.length;){var e=n;n=[],e.forEach(t)}n={push:function(e){return t(e)},filter:function(){return n}}},assignMedium:function(t){o=!0;var e=[];if(n.length){var r=n;n=[],r.forEach(t),e=n}var i=function(){var n=e;e=[],n.forEach(t)},l=function(){return Promise.resolve().then(i)};l(),n={push:function(t){e.push(t),l()},filter:function(t){return e=e.filter(t),n}}}});return l.options=(0,r.pi)({async:!0,ssr:!1},t),l}},5621:function(t,e,n){n.d(e,{x7:function(){return ts},Me:function(){return to},oo:function(){return tp},RR:function(){return tc},Cp:function(){return tf},dr:function(){return td},cv:function(){return tl},uY:function(){return tu},dp:function(){return ta}});let r=["top","right","bottom","left"],i=Math.min,o=Math.max,l=Math.round,u=Math.floor,c=t=>({x:t,y:t}),a={left:"right",right:"left",bottom:"top",top:"bottom"},f={start:"end",end:"start"};function s(t,e){return"function"==typeof t?t(e):t}function d(t){return t.split("-")[0]}function p(t){return t.split("-")[1]}function h(t){return"x"===t?"y":"x"}function m(t){return"y"===t?"height":"width"}function g(t){return["top","bottom"].includes(d(t))?"y":"x"}function v(t){return t.replace(/start|end/g,t=>f[t])}function y(t){return t.replace(/left|right|bottom|top/g,t=>a[t])}function w(t){return"number"!=typeof t?{top:0,right:0,bottom:0,left:0,...t}:{top:t,right:t,bottom:t,left:t}}function b(t){let{x:e,y:n,width:r,height:i}=t;return{width:r,height:i,top:n,left:e,right:e+r,bottom:n+i,x:e,y:n}}function x(t,e,n){let r,{reference:i,floating:o}=t,l=g(e),u=h(g(e)),c=m(u),a=d(e),f="y"===l,s=i.x+i.width/2-o.width/2,v=i.y+i.height/2-o.height/2,y=i[c]/2-o[c]/2;switch(a){case"top":r={x:s,y:i.y-o.height};break;case"bottom":r={x:s,y:i.y+i.height};break;case"right":r={x:i.x+i.width,y:v};break;case"left":r={x:i.x-o.width,y:v};break;default:r={x:i.x,y:i.y}}switch(p(e)){case"start":r[u]-=y*(n&&f?-1:1);break;case"end":r[u]+=y*(n&&f?-1:1)}return r}let A=async(t,e,n)=>{let{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:l}=n,u=o.filter(Boolean),c=await (null==l.isRTL?void 0:l.isRTL(e)),a=await l.getElementRects({reference:t,floating:e,strategy:i}),{x:f,y:s}=x(a,r,c),d=r,p={},h=0;for(let n=0;n<u.length;n++){let{name:o,fn:m}=u[n],{x:g,y:v,data:y,reset:w}=await m({x:f,y:s,initialPlacement:r,placement:d,strategy:i,middlewareData:p,rects:a,platform:l,elements:{reference:t,floating:e}});f=null!=g?g:f,s=null!=v?v:s,p={...p,[o]:{...p[o],...y}},w&&h<=50&&(h++,"object"==typeof w&&(w.placement&&(d=w.placement),w.rects&&(a=!0===w.rects?await l.getElementRects({reference:t,floating:e,strategy:i}):w.rects),{x:f,y:s}=x(a,d,c)),n=-1)}return{x:f,y:s,placement:d,strategy:i,middlewareData:p}};async function E(t,e){var n;void 0===e&&(e={});let{x:r,y:i,platform:o,rects:l,elements:u,strategy:c}=t,{boundary:a="clippingAncestors",rootBoundary:f="viewport",elementContext:d="floating",altBoundary:p=!1,padding:h=0}=s(e,t),m=w(h),g=u[p?"floating"===d?"reference":"floating":d],v=b(await o.getClippingRect({element:null==(n=await (null==o.isElement?void 0:o.isElement(g)))||n?g:g.contextElement||await (null==o.getDocumentElement?void 0:o.getDocumentElement(u.floating)),boundary:a,rootBoundary:f,strategy:c})),y="floating"===d?{x:r,y:i,width:l.floating.width,height:l.floating.height}:l.reference,x=await (null==o.getOffsetParent?void 0:o.getOffsetParent(u.floating)),A=await (null==o.isElement?void 0:o.isElement(x))&&await (null==o.getScale?void 0:o.getScale(x))||{x:1,y:1},E=b(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:u,rect:y,offsetParent:x,strategy:c}):y);return{top:(v.top-E.top+m.top)/A.y,bottom:(E.bottom-v.bottom+m.bottom)/A.y,left:(v.left-E.left+m.left)/A.x,right:(E.right-v.right+m.right)/A.x}}function R(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function S(t){return r.some(e=>t[e]>=0)}async function T(t,e){let{placement:n,platform:r,elements:i}=t,o=await (null==r.isRTL?void 0:r.isRTL(i.floating)),l=d(n),u=p(n),c="y"===g(n),a=["left","top"].includes(l)?-1:1,f=o&&c?-1:1,h=s(e,t),{mainAxis:m,crossAxis:v,alignmentAxis:y}="number"==typeof h?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return u&&"number"==typeof y&&(v="end"===u?-1*y:y),c?{x:v*f,y:m*a}:{x:m*a,y:v*f}}function L(){return"undefined"!=typeof window}function O(t){return M(t)?(t.nodeName||"").toLowerCase():"#document"}function k(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function C(t){var e;return null==(e=(M(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function M(t){return!!L()&&(t instanceof Node||t instanceof k(t).Node)}function W(t){return!!L()&&(t instanceof Element||t instanceof k(t).Element)}function P(t){return!!L()&&(t instanceof HTMLElement||t instanceof k(t).HTMLElement)}function D(t){return!!L()&&"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof k(t).ShadowRoot)}function j(t){let{overflow:e,overflowX:n,overflowY:r,display:i}=B(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!["inline","contents"].includes(i)}function F(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch(t){return!1}})}function H(t){let e=N(),n=W(t)?B(t):t;return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some(t=>(n.willChange||"").includes(t))||["paint","layout","strict","content"].some(t=>(n.contain||"").includes(t))}function N(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function z(t){return["html","body","#document"].includes(O(t))}function B(t){return k(t).getComputedStyle(t)}function V(t){return W(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function _(t){if("html"===O(t))return t;let e=t.assignedSlot||t.parentNode||D(t)&&t.host||C(t);return D(e)?e.host:e}function I(t,e,n){var r;void 0===e&&(e=[]),void 0===n&&(n=!0);let i=function t(e){let n=_(e);return z(n)?e.ownerDocument?e.ownerDocument.body:e.body:P(n)&&j(n)?n:t(n)}(t),o=i===(null==(r=t.ownerDocument)?void 0:r.body),l=k(i);if(o){let t=q(l);return e.concat(l,l.visualViewport||[],j(i)?i:[],t&&n?I(t):[])}return e.concat(i,I(i,[],n))}function q(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Y(t){let e=B(t),n=parseFloat(e.width)||0,r=parseFloat(e.height)||0,i=P(t),o=i?t.offsetWidth:n,u=i?t.offsetHeight:r,c=l(n)!==o||l(r)!==u;return c&&(n=o,r=u),{width:n,height:r,$:c}}function $(t){return W(t)?t:t.contextElement}function X(t){let e=$(t);if(!P(e))return c(1);let n=e.getBoundingClientRect(),{width:r,height:i,$:o}=Y(e),u=(o?l(n.width):n.width)/r,a=(o?l(n.height):n.height)/i;return u&&Number.isFinite(u)||(u=1),a&&Number.isFinite(a)||(a=1),{x:u,y:a}}let G=c(0);function J(t){let e=k(t);return N()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:G}function K(t,e,n,r){var i;void 0===e&&(e=!1),void 0===n&&(n=!1);let o=t.getBoundingClientRect(),l=$(t),u=c(1);e&&(r?W(r)&&(u=X(r)):u=X(t));let a=(void 0===(i=n)&&(i=!1),r&&(!i||r===k(l))&&i)?J(l):c(0),f=(o.left+a.x)/u.x,s=(o.top+a.y)/u.y,d=o.width/u.x,p=o.height/u.y;if(l){let t=k(l),e=r&&W(r)?k(r):r,n=t,i=q(n);for(;i&&r&&e!==n;){let t=X(i),e=i.getBoundingClientRect(),r=B(i),o=e.left+(i.clientLeft+parseFloat(r.paddingLeft))*t.x,l=e.top+(i.clientTop+parseFloat(r.paddingTop))*t.y;f*=t.x,s*=t.y,d*=t.x,p*=t.y,f+=o,s+=l,i=q(n=k(i))}}return b({width:d,height:p,x:f,y:s})}function Q(t,e){let n=V(t).scrollLeft;return e?e.left+n:K(C(t)).left+n}function U(t,e,n){void 0===n&&(n=!1);let r=t.getBoundingClientRect();return{x:r.left+e.scrollLeft-(n?0:Q(t,r)),y:r.top+e.scrollTop}}function Z(t,e,n){let r;if("viewport"===e)r=function(t,e){let n=k(t),r=C(t),i=n.visualViewport,o=r.clientWidth,l=r.clientHeight,u=0,c=0;if(i){o=i.width,l=i.height;let t=N();(!t||t&&"fixed"===e)&&(u=i.offsetLeft,c=i.offsetTop)}return{width:o,height:l,x:u,y:c}}(t,n);else if("document"===e)r=function(t){let e=C(t),n=V(t),r=t.ownerDocument.body,i=o(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),l=o(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight),u=-n.scrollLeft+Q(t),c=-n.scrollTop;return"rtl"===B(r).direction&&(u+=o(e.clientWidth,r.clientWidth)-i),{width:i,height:l,x:u,y:c}}(C(t));else if(W(e))r=function(t,e){let n=K(t,!0,"fixed"===e),r=n.top+t.clientTop,i=n.left+t.clientLeft,o=P(t)?X(t):c(1),l=t.clientWidth*o.x;return{width:l,height:t.clientHeight*o.y,x:i*o.x,y:r*o.y}}(e,n);else{let n=J(t);r={x:e.x-n.x,y:e.y-n.y,width:e.width,height:e.height}}return b(r)}function tt(t){return"static"===B(t).position}function te(t,e){if(!P(t)||"fixed"===B(t).position)return null;if(e)return e(t);let n=t.offsetParent;return C(t)===n&&(n=n.ownerDocument.body),n}function tn(t,e){let n=k(t);if(F(t))return n;if(!P(t)){let e=_(t);for(;e&&!z(e);){if(W(e)&&!tt(e))return e;e=_(e)}return n}let r=te(t,e);for(;r&&["table","td","th"].includes(O(r))&&tt(r);)r=te(r,e);return r&&z(r)&&tt(r)&&!H(r)?n:r||function(t){let e=_(t);for(;P(e)&&!z(e);){if(H(e))return e;if(F(e))break;e=_(e)}return null}(t)||n}let tr=async function(t){let e=this.getOffsetParent||tn,n=this.getDimensions,r=await n(t.floating);return{reference:function(t,e,n){let r=P(e),i=C(e),o="fixed"===n,l=K(t,!0,o,e),u={scrollLeft:0,scrollTop:0},a=c(0);if(r||!r&&!o){if(("body"!==O(e)||j(i))&&(u=V(e)),r){let t=K(e,!0,o,e);a.x=t.x+e.clientLeft,a.y=t.y+e.clientTop}else i&&(a.x=Q(i))}let f=!i||r||o?c(0):U(i,u);return{x:l.left+u.scrollLeft-a.x-f.x,y:l.top+u.scrollTop-a.y-f.y,width:l.width,height:l.height}}(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},ti={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:n,offsetParent:r,strategy:i}=t,o="fixed"===i,l=C(r),u=!!e&&F(e.floating);if(r===l||u&&o)return n;let a={scrollLeft:0,scrollTop:0},f=c(1),s=c(0),d=P(r);if((d||!d&&!o)&&(("body"!==O(r)||j(l))&&(a=V(r)),P(r))){let t=K(r);f=X(r),s.x=t.x+r.clientLeft,s.y=t.y+r.clientTop}let p=!l||d||o?c(0):U(l,a,!0);return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-a.scrollLeft*f.x+s.x+p.x,y:n.y*f.y-a.scrollTop*f.y+s.y+p.y}},getDocumentElement:C,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:r,strategy:l}=t,u=[..."clippingAncestors"===n?F(e)?[]:function(t,e){let n=e.get(t);if(n)return n;let r=I(t,[],!1).filter(t=>W(t)&&"body"!==O(t)),i=null,o="fixed"===B(t).position,l=o?_(t):t;for(;W(l)&&!z(l);){let e=B(l),n=H(l);n||"fixed"!==e.position||(i=null),(o?!n&&!i:!n&&"static"===e.position&&!!i&&["absolute","fixed"].includes(i.position)||j(l)&&!n&&function t(e,n){let r=_(e);return!(r===n||!W(r)||z(r))&&("fixed"===B(r).position||t(r,n))}(t,l))?r=r.filter(t=>t!==l):i=e,l=_(l)}return e.set(t,r),r}(e,this._c):[].concat(n),r],c=u[0],a=u.reduce((t,n)=>{let r=Z(e,n,l);return t.top=o(r.top,t.top),t.right=i(r.right,t.right),t.bottom=i(r.bottom,t.bottom),t.left=o(r.left,t.left),t},Z(e,c,l));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:tn,getElementRects:tr,getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){let{width:e,height:n}=Y(t);return{width:e,height:n}},getScale:X,isElement:W,isRTL:function(t){return"rtl"===B(t).direction}};function to(t,e,n,r){let l;void 0===r&&(r={});let{ancestorScroll:c=!0,ancestorResize:a=!0,elementResize:f="function"==typeof ResizeObserver,layoutShift:s="function"==typeof IntersectionObserver,animationFrame:d=!1}=r,p=$(t),h=c||a?[...p?I(p):[],...I(e)]:[];h.forEach(t=>{c&&t.addEventListener("scroll",n,{passive:!0}),a&&t.addEventListener("resize",n)});let m=p&&s?function(t,e){let n,r=null,l=C(t);function c(){var t;clearTimeout(n),null==(t=r)||t.disconnect(),r=null}return!function a(f,s){void 0===f&&(f=!1),void 0===s&&(s=1),c();let{left:d,top:p,width:h,height:m}=t.getBoundingClientRect();if(f||e(),!h||!m)return;let g=u(p),v=u(l.clientWidth-(d+h)),y={rootMargin:-g+"px "+-v+"px "+-u(l.clientHeight-(p+m))+"px "+-u(d)+"px",threshold:o(0,i(1,s))||1},w=!0;function b(t){let e=t[0].intersectionRatio;if(e!==s){if(!w)return a();e?a(!1,e):n=setTimeout(()=>{a(!1,1e-7)},1e3)}w=!1}try{r=new IntersectionObserver(b,{...y,root:l.ownerDocument})}catch(t){r=new IntersectionObserver(b,y)}r.observe(t)}(!0),c}(p,n):null,g=-1,v=null;f&&(v=new ResizeObserver(t=>{let[r]=t;r&&r.target===p&&v&&(v.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var t;null==(t=v)||t.observe(e)})),n()}),p&&!d&&v.observe(p),v.observe(e));let y=d?K(t):null;return d&&function e(){let r=K(t);y&&(r.x!==y.x||r.y!==y.y||r.width!==y.width||r.height!==y.height)&&n(),y=r,l=requestAnimationFrame(e)}(),n(),()=>{var t;h.forEach(t=>{c&&t.removeEventListener("scroll",n),a&&t.removeEventListener("resize",n)}),null==m||m(),null==(t=v)||t.disconnect(),v=null,d&&cancelAnimationFrame(l)}}let tl=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var n,r;let{x:i,y:o,placement:l,middlewareData:u}=e,c=await T(e,t);return l===(null==(n=u.offset)?void 0:n.placement)&&null!=(r=u.arrow)&&r.alignmentOffset?{}:{x:i+c.x,y:o+c.y,data:{...c,placement:l}}}}},tu=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){let{x:n,y:r,placement:l}=e,{mainAxis:u=!0,crossAxis:c=!1,limiter:a={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...f}=s(t,e),p={x:n,y:r},m=await E(e,f),v=g(d(l)),y=h(v),w=p[y],b=p[v];if(u){let t="y"===y?"top":"left",e="y"===y?"bottom":"right",n=w+m[t],r=w-m[e];w=o(n,i(w,r))}if(c){let t="y"===v?"top":"left",e="y"===v?"bottom":"right",n=b+m[t],r=b-m[e];b=o(n,i(b,r))}let x=a.fn({...e,[y]:w,[v]:b});return{...x,data:{x:x.x-n,y:x.y-r,enabled:{[y]:u,[v]:c}}}}}},tc=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n,r,i,o,l;let{placement:u,middlewareData:c,rects:a,initialPlacement:f,platform:w,elements:b}=e,{mainAxis:x=!0,crossAxis:A=!0,fallbackPlacements:R,fallbackStrategy:S="bestFit",fallbackAxisSideDirection:T="none",flipAlignment:L=!0,...O}=s(t,e);if(null!=(n=c.arrow)&&n.alignmentOffset)return{};let k=d(u),C=g(f),M=d(f)===f,W=await (null==w.isRTL?void 0:w.isRTL(b.floating)),P=R||(M||!L?[y(f)]:function(t){let e=y(t);return[v(t),e,v(e)]}(f)),D="none"!==T;!R&&D&&P.push(...function(t,e,n,r){let i=p(t),o=function(t,e,n){let r=["left","right"],i=["right","left"];switch(t){case"top":case"bottom":if(n)return e?i:r;return e?r:i;case"left":case"right":return e?["top","bottom"]:["bottom","top"];default:return[]}}(d(t),"start"===n,r);return i&&(o=o.map(t=>t+"-"+i),e&&(o=o.concat(o.map(v)))),o}(f,L,T,W));let j=[f,...P],F=await E(e,O),H=[],N=(null==(r=c.flip)?void 0:r.overflows)||[];if(x&&H.push(F[k]),A){let t=function(t,e,n){void 0===n&&(n=!1);let r=p(t),i=h(g(t)),o=m(i),l="x"===i?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return e.reference[o]>e.floating[o]&&(l=y(l)),[l,y(l)]}(u,a,W);H.push(F[t[0]],F[t[1]])}if(N=[...N,{placement:u,overflows:H}],!H.every(t=>t<=0)){let t=((null==(i=c.flip)?void 0:i.index)||0)+1,e=j[t];if(e)return{data:{index:t,overflows:N},reset:{placement:e}};let n=null==(o=N.filter(t=>t.overflows[0]<=0).sort((t,e)=>t.overflows[1]-e.overflows[1])[0])?void 0:o.placement;if(!n)switch(S){case"bestFit":{let t=null==(l=N.filter(t=>{if(D){let e=g(t.placement);return e===C||"y"===e}return!0}).map(t=>[t.placement,t.overflows.filter(t=>t>0).reduce((t,e)=>t+e,0)]).sort((t,e)=>t[1]-e[1])[0])?void 0:l[0];t&&(n=t);break}case"initialPlacement":n=f}if(u!==n)return{reset:{placement:n}}}return{}}}},ta=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){var n,r;let l,u;let{placement:c,rects:a,platform:f,elements:h}=e,{apply:m=()=>{},...v}=s(t,e),y=await E(e,v),w=d(c),b=p(c),x="y"===g(c),{width:A,height:R}=a.floating;"top"===w||"bottom"===w?(l=w,u=b===(await (null==f.isRTL?void 0:f.isRTL(h.floating))?"start":"end")?"left":"right"):(u=w,l="end"===b?"top":"bottom");let S=R-y.top-y.bottom,T=A-y.left-y.right,L=i(R-y[l],S),O=i(A-y[u],T),k=!e.middlewareData.shift,C=L,M=O;if(null!=(n=e.middlewareData.shift)&&n.enabled.x&&(M=T),null!=(r=e.middlewareData.shift)&&r.enabled.y&&(C=S),k&&!b){let t=o(y.left,0),e=o(y.right,0),n=o(y.top,0),r=o(y.bottom,0);x?M=A-2*(0!==t||0!==e?t+e:o(y.left,y.right)):C=R-2*(0!==n||0!==r?n+r:o(y.top,y.bottom))}await m({...e,availableWidth:M,availableHeight:C});let W=await f.getDimensions(h.floating);return A!==W.width||R!==W.height?{reset:{rects:!0}}:{}}}},tf=function(t){return void 0===t&&(t={}),{name:"hide",options:t,async fn(e){let{rects:n}=e,{strategy:r="referenceHidden",...i}=s(t,e);switch(r){case"referenceHidden":{let t=R(await E(e,{...i,elementContext:"reference"}),n.reference);return{data:{referenceHiddenOffsets:t,referenceHidden:S(t)}}}case"escaped":{let t=R(await E(e,{...i,altBoundary:!0}),n.floating);return{data:{escapedOffsets:t,escaped:S(t)}}}default:return{}}}}},ts=t=>({name:"arrow",options:t,async fn(e){let{x:n,y:r,placement:l,rects:u,platform:c,elements:a,middlewareData:f}=e,{element:d,padding:v=0}=s(t,e)||{};if(null==d)return{};let y=w(v),b={x:n,y:r},x=h(g(l)),A=m(x),E=await c.getDimensions(d),R="y"===x,S=R?"clientHeight":"clientWidth",T=u.reference[A]+u.reference[x]-b[x]-u.floating[A],L=b[x]-u.reference[x],O=await (null==c.getOffsetParent?void 0:c.getOffsetParent(d)),k=O?O[S]:0;k&&await (null==c.isElement?void 0:c.isElement(O))||(k=a.floating[S]||u.floating[A]);let C=k/2-E[A]/2-1,M=i(y[R?"top":"left"],C),W=i(y[R?"bottom":"right"],C),P=k-E[A]-W,D=k/2-E[A]/2+(T/2-L/2),j=o(M,i(D,P)),F=!f.arrow&&null!=p(l)&&D!==j&&u.reference[A]/2-(D<M?M:W)-E[A]/2<0,H=F?D<M?D-M:D-P:0;return{[x]:b[x]+H,data:{[x]:j,centerOffset:D-j-H,...F&&{alignmentOffset:H}},reset:F}}}),td=function(t){return void 0===t&&(t={}),{options:t,fn(e){let{x:n,y:r,placement:i,rects:o,middlewareData:l}=e,{offset:u=0,mainAxis:c=!0,crossAxis:a=!0}=s(t,e),f={x:n,y:r},p=g(i),m=h(p),v=f[m],y=f[p],w=s(u,e),b="number"==typeof w?{mainAxis:w,crossAxis:0}:{mainAxis:0,crossAxis:0,...w};if(c){let t="y"===m?"height":"width",e=o.reference[m]-o.floating[t]+b.mainAxis,n=o.reference[m]+o.reference[t]-b.mainAxis;v<e?v=e:v>n&&(v=n)}if(a){var x,A;let t="y"===m?"width":"height",e=["top","left"].includes(d(i)),n=o.reference[p]-o.floating[t]+(e&&(null==(x=l.offset)?void 0:x[p])||0)+(e?0:b.crossAxis),r=o.reference[p]+o.reference[t]+(e?0:(null==(A=l.offset)?void 0:A[p])||0)-(e?b.crossAxis:0);y<n?y=n:y>r&&(y=r)}return{[m]:v,[p]:y}}}},tp=(t,e,n)=>{let r=new Map,i={platform:ti,...n},o={...i.platform,_c:r};return A(t,e,{...i,platform:o})}},4674:function(t,e,n){n.d(e,{Cp:function(){return y},RR:function(){return g},YF:function(){return s},cv:function(){return p},dp:function(){return v},dr:function(){return m},uY:function(){return h},x7:function(){return w}});var r=n(5621),i=n(2265),o=n(4887),l="undefined"!=typeof document?i.useLayoutEffect:i.useEffect;function u(t,e){let n,r,i;if(t===e)return!0;if(typeof t!=typeof e)return!1;if("function"==typeof t&&t.toString()===e.toString())return!0;if(t&&e&&"object"==typeof t){if(Array.isArray(t)){if((n=t.length)!==e.length)return!1;for(r=n;0!=r--;)if(!u(t[r],e[r]))return!1;return!0}if((n=(i=Object.keys(t)).length)!==Object.keys(e).length)return!1;for(r=n;0!=r--;)if(!({}).hasOwnProperty.call(e,i[r]))return!1;for(r=n;0!=r--;){let n=i[r];if(("_owner"!==n||!t.$$typeof)&&!u(t[n],e[n]))return!1}return!0}return t!=t&&e!=e}function c(t){return"undefined"==typeof window?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function a(t,e){let n=c(t);return Math.round(e*n)/n}function f(t){let e=i.useRef(t);return l(()=>{e.current=t}),e}function s(t){void 0===t&&(t={});let{placement:e="bottom",strategy:n="absolute",middleware:s=[],platform:d,elements:{reference:p,floating:h}={},transform:m=!0,whileElementsMounted:g,open:v}=t,[y,w]=i.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[b,x]=i.useState(s);u(b,s)||x(s);let[A,E]=i.useState(null),[R,S]=i.useState(null),T=i.useCallback(t=>{t!==C.current&&(C.current=t,E(t))},[]),L=i.useCallback(t=>{t!==M.current&&(M.current=t,S(t))},[]),O=p||A,k=h||R,C=i.useRef(null),M=i.useRef(null),W=i.useRef(y),P=null!=g,D=f(g),j=f(d),F=f(v),H=i.useCallback(()=>{if(!C.current||!M.current)return;let t={placement:e,strategy:n,middleware:b};j.current&&(t.platform=j.current),(0,r.oo)(C.current,M.current,t).then(t=>{let e={...t,isPositioned:!1!==F.current};N.current&&!u(W.current,e)&&(W.current=e,o.flushSync(()=>{w(e)}))})},[b,e,n,j,F]);l(()=>{!1===v&&W.current.isPositioned&&(W.current.isPositioned=!1,w(t=>({...t,isPositioned:!1})))},[v]);let N=i.useRef(!1);l(()=>(N.current=!0,()=>{N.current=!1}),[]),l(()=>{if(O&&(C.current=O),k&&(M.current=k),O&&k){if(D.current)return D.current(O,k,H);H()}},[O,k,H,D,P]);let z=i.useMemo(()=>({reference:C,floating:M,setReference:T,setFloating:L}),[T,L]),B=i.useMemo(()=>({reference:O,floating:k}),[O,k]),V=i.useMemo(()=>{let t={position:n,left:0,top:0};if(!B.floating)return t;let e=a(B.floating,y.x),r=a(B.floating,y.y);return m?{...t,transform:"translate("+e+"px, "+r+"px)",...c(B.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:e,top:r}},[n,m,B.floating,y.x,y.y]);return i.useMemo(()=>({...y,update:H,refs:z,elements:B,floatingStyles:V}),[y,H,z,B,V])}let d=t=>({name:"arrow",options:t,fn(e){let{element:n,padding:i}="function"==typeof t?t(e):t;return n&&({}).hasOwnProperty.call(n,"current")?null!=n.current?(0,r.x7)({element:n.current,padding:i}).fn(e):{}:n?(0,r.x7)({element:n,padding:i}).fn(e):{}}}),p=(t,e)=>({...(0,r.cv)(t),options:[t,e]}),h=(t,e)=>({...(0,r.uY)(t),options:[t,e]}),m=(t,e)=>({...(0,r.dr)(t),options:[t,e]}),g=(t,e)=>({...(0,r.RR)(t),options:[t,e]}),v=(t,e)=>({...(0,r.dp)(t),options:[t,e]}),y=(t,e)=>({...(0,r.Cp)(t),options:[t,e]}),w=(t,e)=>({...d(t),options:[t,e]})},589:function(t,e,n){n.d(e,{EW:function(){return o}});var r=n(2265),i=0;function o(){r.useEffect(()=>{var t,e;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(t=n[0])&&void 0!==t?t:l()),document.body.insertAdjacentElement("beforeend",null!==(e=n[1])&&void 0!==e?e:l()),i++,()=>{1===i&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),i--}},[])}function l(){let t=document.createElement("span");return t.setAttribute("data-radix-focus-guard",""),t.tabIndex=0,t.style.outline="none",t.style.opacity="0",t.style.position="fixed",t.style.pointerEvents="none",t}},3201:function(t,e,n){n.d(e,{M:function(){return c}});var r,i=n(2265),o=n(1336),l=(r||(r=n.t(i,2)))["useId".toString()]||(()=>void 0),u=0;function c(t){let[e,n]=i.useState(l());return(0,o.b)(()=>{t||n(t=>t??String(u++))},[t]),t||(e?`radix-${e}`:"")}},1715:function(t,e,n){n.d(e,{T:function(){return o}});var r=n(2265),i=n(5137);function o({prop:t,defaultProp:e,onChange:n=()=>{}}){let[o,l]=function({defaultProp:t,onChange:e}){let n=r.useState(t),[o]=n,l=r.useRef(o),u=(0,i.W)(e);return r.useEffect(()=>{l.current!==o&&(u(o),l.current=o)},[o,l,u]),n}({defaultProp:e,onChange:n}),u=void 0!==t,c=u?t:o,a=(0,i.W)(n);return[c,r.useCallback(e=>{if(u){let n="function"==typeof e?e(t):e;n!==t&&a(n)}else l(e)},[u,t,l,a])]}},6486:function(t,e,n){n.d(e,{e:function(){return o}});var r=n(2265),i=n(5137);function o(t,e=globalThis?.document){let n=(0,i.W)(t);r.useEffect(()=>{let t=t=>{"Escape"===t.key&&n(t)};return e.addEventListener("keydown",t,{capture:!0}),()=>e.removeEventListener("keydown",t,{capture:!0})},[n,e])}},5238:function(t,e,n){n.d(e,{t:function(){return o}});var r=n(2265),i=n(1336);function o(t){let[e,n]=r.useState(void 0);return(0,i.b)(()=>{if(t){n({width:t.offsetWidth,height:t.offsetHeight});let e=new ResizeObserver(e=>{let r,i;if(!Array.isArray(e)||!e.length)return;let o=e[0];if("borderBoxSize"in o){let t=o.borderBoxSize,e=Array.isArray(t)?t[0]:t;r=e.inlineSize,i=e.blockSize}else r=t.offsetWidth,i=t.offsetHeight;n({width:r,height:i})});return e.observe(t,{box:"border-box"}),()=>e.unobserve(t)}n(void 0)},[t]),e}},2218:function(t,e,n){n.d(e,{j:function(){return o}});let r=t=>"boolean"==typeof t?"".concat(t):0===t?"0":t,i=function(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=function t(e){var n,r,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e){if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(r=t(e[n]))&&(i&&(i+=" "),i+=r);else for(n in e)e[n]&&(i&&(i+=" "),i+=n)}return i}(t))&&(r&&(r+=" "),r+=e);return r},o=(t,e)=>n=>{var o;if((null==e?void 0:e.variants)==null)return i(t,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:l,defaultVariants:u}=e,c=Object.keys(l).map(t=>{let e=null==n?void 0:n[t],i=null==u?void 0:u[t];if(null===e)return null;let o=r(e)||r(i);return l[t][o]}),a=n&&Object.entries(n).reduce((t,e)=>{let[n,r]=e;return void 0===r||(t[n]=r),t},{});return i(t,c,null==e?void 0:null===(o=e.compoundVariants)||void 0===o?void 0:o.reduce((t,e)=>{let{class:n,className:r,...i}=e;return Object.entries(i).every(t=>{let[e,n]=t;return Array.isArray(n)?n.includes({...u,...a}[e]):({...u,...a})[e]===n})?[...t,n,r]:t},[]),null==n?void 0:n.class,null==n?void 0:n.className)}},1735:function(t,e,n){n.d(e,{_T:function(){return i},ev:function(){return o},pi:function(){return r}});var r=function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function i(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&0>e.indexOf(r)&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)0>e.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function o(t,e,n){if(n||2==arguments.length)for(var r,i=0,o=e.length;i<o;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))}"function"==typeof SuppressedError&&SuppressedError}}]);