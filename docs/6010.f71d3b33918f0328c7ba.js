(self.webpackChunksite=self.webpackChunksite||[]).push([[6010],{6010:(e,t,n)=>{"use strict";n.r(t),n.d(t,{startInputShims:()=>m});var o=n(6304),r=n(958),i=n(1444);const a=new WeakMap,s=(e,t,n,o=0,r=!1)=>{a.has(e)!==n&&(n?l(e,t,o,r):c(e,t))},d=e=>e===e.getRootNode().activeElement,l=(e,t,n,o=!1)=>{const r=t.parentNode,i=t.cloneNode(!1);i.classList.add("cloned-input"),i.tabIndex=-1,o&&(i.disabled=!0),r.appendChild(i),a.set(e,i);const s="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${s}px,${n}px,0) scale(0)`},c=(e,t)=>{const n=a.get(e);n&&(a.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},u="input, textarea, [no-blur], [contenteditable]",f=function(){var e=(0,o.Z)(function*(e,t,n,a,d,l=!1){if(!n&&!a)return;const c=((e,t,n)=>{var o;return((e,t,n,o)=>{const r=e.top,i=e.bottom,a=t.top,s=a+15,d=.75*Math.min(t.bottom,o-n)-i,l=s-r,c=Math.round(d<0?-d:l>0?-l:0),u=Math.min(c,r-a),f=Math.abs(u);return{scrollAmount:u,scrollDuration:Math.min(400,Math.max(150,f/.3)),scrollPadding:n,inputSafeY:4-(r-s)}})((null!==(o=e.closest("ion-item,[ion-item]"))&&void 0!==o?o:e).getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)})(e,n||a,d);if(n&&Math.abs(c.scrollAmount)<4)t.focus();else if(s(e,t,!0,c.inputSafeY,l),t.focus(),(0,i.r)(()=>e.click()),"undefined"!=typeof window){let i;const a=function(){var l=(0,o.Z)(function*(){void 0!==i&&clearTimeout(i),window.removeEventListener("ionKeyboardDidShow",d),window.removeEventListener("ionKeyboardDidShow",a),n&&(yield(0,r.c)(n,0,c.scrollAmount,c.scrollDuration)),s(e,t,!1,c.inputSafeY),t.focus()});return function(){return l.apply(this,arguments)}}(),d=()=>{window.removeEventListener("ionKeyboardDidShow",d),window.addEventListener("ionKeyboardDidShow",a)};if(n){const e=yield(0,r.g)(n);if(c.scrollAmount>e.scrollHeight-e.clientHeight-e.scrollTop)return"password"===t.type?(c.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",d)):window.addEventListener("ionKeyboardDidShow",a),void(i=setTimeout(a,1e3))}a()}});return function(t,n,o,r,i){return e.apply(this,arguments)}}(),p=(e,t)=>{var n,o;if("INPUT"!==e.tagName)return;if(e.parentElement&&"ION-INPUT"===e.parentElement.tagName)return;if("ION-SEARCHBAR"===(null===(o=null===(n=e.parentElement)||void 0===n?void 0:n.parentElement)||void 0===o?void 0:o.tagName))return;const i=(0,r.f)(e);if(null===i)return;const a=i.$ionPaddingTimer;a&&clearTimeout(a),t>0?i.style.setProperty("--keyboard-offset",`${t}px`):i.$ionPaddingTimer=setTimeout(()=>{i.style.setProperty("--keyboard-offset","0px")},120)},m=(e,t)=>{const n=document,a="ios"===t,l="android"===t,c=e.getNumber("keyboardHeight",290),m=e.getBoolean("scrollAssist",!0),v=e.getBoolean("hideCaretOnScroll",a),h=e.getBoolean("inputBlurring",a),y=e.getBoolean("scrollPadding",!0),w=Array.from(n.querySelectorAll("ion-input, ion-textarea")),g=new WeakMap,E=new WeakMap,b=function(){var e=(0,o.Z)(function*(e){yield new Promise(t=>(0,i.c)(e,t));const t=e.shadowRoot||e,n=t.querySelector("input")||t.querySelector("textarea"),o=(0,r.f)(e),a=o?null:e.closest("ion-footer");if(n){if(o&&v&&!g.has(e)){const t=((e,t,n)=>{if(!n||!t)return()=>{};const o=n=>{d(t)&&s(e,t,n)},r=()=>s(e,t,!1),a=()=>o(!0),l=()=>o(!1);return(0,i.a)(n,"ionScrollStart",a),(0,i.a)(n,"ionScrollEnd",l),t.addEventListener("blur",r),()=>{(0,i.b)(n,"ionScrollStart",a),(0,i.b)(n,"ionScrollEnd",l),t.addEventListener("ionBlur",r)}})(e,n,o);g.set(e,t)}if("date"!==n.type&&"datetime-local"!==n.type&&(o||a)&&m&&!E.has(e)){const t=((e,t,n,o,r,a=!1)=>{let s;const l=e=>{s=(0,i.p)(e)},c=l=>{if(!s)return;const c=(0,i.p)(l);((e,t,n)=>{if(t&&n){const e=t.x-n.x,o=t.y-n.y;return e*e+o*o>36}return!1})(0,s,c)||d(t)||f(e,t,n,o,r,a)};return e.addEventListener("touchstart",l,{capture:!0,passive:!0}),e.addEventListener("touchend",c,!0),()=>{e.removeEventListener("touchstart",l,!0),e.removeEventListener("touchend",c,!0)}})(e,n,o,a,c,l);E.set(e,t)}}});return function(t){return e.apply(this,arguments)}}();h&&(()=>{let e=!0,t=!1;const n=document;(0,i.a)(n,"ionScrollStart",()=>{t=!0}),n.addEventListener("focusin",()=>{e=!0},!0),n.addEventListener("touchend",o=>{if(t)return void(t=!1);const r=n.activeElement;if(!r)return;if(r.matches(u))return;const i=o.target;i!==r&&(i.matches(u)||i.closest(u)||(e=!1,setTimeout(()=>{e||r.blur()},50)))},!1)})(),y&&(e=>{const t=document;t.addEventListener("focusin",t=>{p(t.target,e)}),t.addEventListener("focusout",e=>{p(e.target,0)})})(c);for(const o of w)b(o);n.addEventListener("ionInputDidLoad",e=>{b(e.detail)}),n.addEventListener("ionInputDidUnload",e=>{(e=>{if(v){const t=g.get(e);t&&t(),g.delete(e)}if(m){const t=E.get(e);t&&t(),E.delete(e)}})(e.detail)})}}}]);