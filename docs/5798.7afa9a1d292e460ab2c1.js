(self.webpackChunksite=self.webpackChunksite||[]).push([[5798],{5798:(e,t,i)=>{"use strict";i.r(t),i.d(t,{ion_nav:()=>v,ion_nav_link:()=>m});var n=i(6304),s=i(1429),r=i(7258),o=i(7572),a=i(1444),l=i(7461),c=i(2435);class u{constructor(e,t){this.component=e,this.params=t,this.state=1}init(e){var t=this;return(0,n.Z)(function*(){if(t.state=2,!t.element){const i=t.component;t.element=yield(0,c.a)(t.delegate,e,i,["ion-page","ion-page-invisible"],t.params)}})()}_destroy(){(0,a.n)(3!==this.state,"view state must be ATTACHED");const e=this.element;e&&(this.delegate?this.delegate.removeViewFromDom(e.parentElement,e):e.remove()),this.nav=void 0,this.state=3}}const d=(e,t,i)=>!!e&&e.component===t&&(0,a.s)(e.params,i),h=(e,t)=>e?e instanceof u?e:new u(e,t):null,v=class{constructor(e){(0,s.r)(this,e),this.ionNavWillLoad=(0,s.e)(this,"ionNavWillLoad",7),this.ionNavWillChange=(0,s.e)(this,"ionNavWillChange",3),this.ionNavDidChange=(0,s.e)(this,"ionNavDidChange",3),this.transInstr=[],this.animationEnabled=!0,this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0}swipeGestureChanged(){this.gesture&&this.gesture.enable(!0===this.swipeGesture)}rootChanged(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))}componentWillLoad(){if(this.useRouter=null!==document.querySelector("ion-router")&&null===this.el.closest("[no-router]"),void 0===this.swipeGesture){const e=(0,r.b)(this);this.swipeGesture=r.c.getBoolean("swipeBackEnabled","ios"===e)}this.ionNavWillLoad.emit()}componentDidLoad(){var e=this;return(0,n.Z)(function*(){e.rootChanged(),e.gesture=(yield i.e(8592).then(i.bind(i,308))).createSwipeBackGesture(e.el,e.canStart.bind(e),e.onStart.bind(e),e.onMove.bind(e),e.onEnd.bind(e)),e.swipeGestureChanged()})()}connectedCallback(){this.destroyed=!1}disconnectedCallback(){for(const e of this.views)(0,l.l)(e.element,l.d),e._destroy();this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=0,this.views.length=0,this.destroyed=!0}push(e,t,i,n){return this.insert(-1,e,t,i,n)}insert(e,t,i,n,s){return this.insertPages(e,[{component:t,componentProps:i}],n,s)}insertPages(e,t,i,n){return this.queueTrns({insertStart:e,insertViews:t,opts:i},n)}pop(e,t){return this.removeIndex(-1,1,e,t)}popTo(e,t,i){const n={removeStart:-1,removeCount:-1,opts:t};return"object"==typeof e&&e.component?(n.removeView=e,n.removeStart=1):"number"==typeof e&&(n.removeStart=e+1),this.queueTrns(n,i)}popToRoot(e,t){return this.removeIndex(1,-1,e,t)}removeIndex(e,t=1,i,n){return this.queueTrns({removeStart:e,removeCount:t,opts:i},n)}setRoot(e,t,i,n){return this.setPages([{component:e,componentProps:t}],i,n)}setPages(e,t,i){return null!=t||(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},i)}setRouteId(e,t,i,s){const r=this.getActiveSync();if(d(r,e,t))return Promise.resolve({changed:!1,element:r.element});let o;const a=new Promise(e=>o=e);let l;const c={updateURL:!1,viewIsReady:e=>{let t;const i=new Promise(e=>t=e);var s;return o({changed:!0,element:e,markVisible:(s=(0,n.Z)(function*(){t(),yield l}),function(){return s.apply(this,arguments)})}),i}};if("root"===i)l=this.setRoot(e,t,c);else{const n=this.views.find(i=>d(i,e,t));n?l=this.popTo(n,Object.assign(Object.assign({},c),{direction:"back",animationBuilder:s})):"forward"===i?l=this.push(e,t,Object.assign(Object.assign({},c),{animationBuilder:s})):"back"===i&&(l=this.setRoot(e,t,Object.assign(Object.assign({},c),{direction:"back",animated:!0,animationBuilder:s})))}return a}getRouteId(){var e=this;return(0,n.Z)(function*(){const t=e.getActiveSync();if(t)return{id:t.element.tagName,params:t.params,element:t.element}})()}getActive(){var e=this;return(0,n.Z)(function*(){return e.getActiveSync()})()}getByIndex(e){var t=this;return(0,n.Z)(function*(){return t.views[e]})()}canGoBack(e){var t=this;return(0,n.Z)(function*(){return t.canGoBackSync(e)})()}getPrevious(e){var t=this;return(0,n.Z)(function*(){return t.getPreviousSync(e)})()}getLength(){return this.views.length}getActiveSync(){return this.views[this.views.length-1]}canGoBackSync(e=this.getActiveSync()){return!(!e||!this.getPreviousSync(e))}getPreviousSync(e=this.getActiveSync()){if(!e)return;const t=this.views,i=t.indexOf(e);return i>0?t[i-1]:void 0}queueTrns(e,t){var i=this;return(0,n.Z)(function*(){var n,s;if(i.isTransitioning&&(null===(n=e.opts)||void 0===n?void 0:n.skipIfBusy))return!1;const r=new Promise((t,i)=>{e.resolve=t,e.reject=i});if(e.done=t,e.opts&&!1!==e.opts.updateURL&&i.useRouter){const t=document.querySelector("ion-router");if(t){const i=yield t.canTransition();if(!1===i)return!1;if("string"==typeof i)return t.push(i,e.opts.direction||"back"),!1}}return 0===(null===(s=e.insertViews)||void 0===s?void 0:s.length)&&(e.insertViews=void 0),i.transInstr.push(e),i.nextTrns(),r})()}success(e,t){if(this.destroyed)this.fireError("nav controller was destroyed",t);else if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){const t=document.querySelector("ion-router");t&&t.navChanged("back"===e.direction?"back":"forward")}}failed(e,t){this.destroyed?this.fireError("nav controller was destroyed",t):(this.transInstr.length=0,this.fireError(e,t))}fireError(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)}nextTrns(){if(this.isTransitioning)return!1;const e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)}runTransition(e){var t=this;return(0,n.Z)(function*(){try{t.ionNavWillChange.emit(),t.isTransitioning=!0,t.prepareTI(e);const i=t.getActiveSync(),n=t.getEnteringView(e,i);if(!i&&!n)throw new Error("no views in the stack to be removed");n&&1===n.state&&(yield n.init(t.el)),t.postViewInit(n,i,e);const s=(e.enteringRequiresTransition||e.leavingRequiresTransition)&&n!==i;let r;s&&e.opts&&i&&("back"===e.opts.direction&&(e.opts.animationBuilder=e.opts.animationBuilder||(null==n?void 0:n.animationBuilder)),i.animationBuilder=e.opts.animationBuilder),r=s?yield t.transition(n,i,e):{hasCompleted:!0,requiresTransition:!1},t.success(r,e),t.ionNavDidChange.emit()}catch(i){t.failed(i,e)}t.isTransitioning=!1,t.nextTrns()})()}prepareTI(e){var t,i,n;const s=this.views.length;if(null!==(t=e.opts)&&void 0!==t||(e.opts={}),null!==(i=(n=e.opts).delegate)&&void 0!==i||(n.delegate=this.delegate),void 0!==e.removeView){(0,a.n)(void 0!==e.removeStart,"removeView needs removeStart"),(0,a.n)(void 0!==e.removeCount,"removeView needs removeCount");const t=this.views.indexOf(e.removeView);if(t<0)throw new Error("removeView was not found");e.removeStart+=t}void 0!==e.removeStart&&(e.removeStart<0&&(e.removeStart=s-1),e.removeCount<0&&(e.removeCount=s-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===s),e.insertViews&&((e.insertStart<0||e.insertStart>s)&&(e.insertStart=s),e.enteringRequiresTransition=e.insertStart===s);const r=e.insertViews;if(!r)return;(0,a.n)(r.length>0,"length can not be zero");const o=r.map(e=>e instanceof u?e:"component"in e?h(e.component,null===e.componentProps?void 0:e.componentProps):h(e,void 0)).filter(e=>null!==e);if(0===o.length)throw new Error("invalid views to insert");for(const a of o){a.delegate=e.opts.delegate;const t=a.nav;if(t&&t!==this)throw new Error("inserted view was already inserted");if(3===a.state)throw new Error("inserted view was already destroyed")}e.insertViews=o}getEnteringView(e,t){const i=e.insertViews;if(void 0!==i)return i[i.length-1];const n=e.removeStart;if(void 0!==n){const i=this.views,s=n+e.removeCount;for(let e=i.length-1;e>=0;e--){const r=i[e];if((e<n||e>=s)&&r!==t)return r}}}postViewInit(e,t,i){var n,s,r;(0,a.n)(t||e,"Both leavingView and enteringView are null"),(0,a.n)(i.resolve,"resolve must be valid"),(0,a.n)(i.reject,"reject must be valid");const o=i.opts,{insertViews:c,removeStart:u,removeCount:d}=i;let h;if(void 0!==u&&void 0!==d){(0,a.n)(u>=0,"removeStart can not be negative"),(0,a.n)(d>=0,"removeCount can not be negative"),h=[];for(let i=u;i<u+d;i++){const n=this.views[i];void 0!==n&&n!==e&&n!==t&&h.push(n)}null!==(n=o.direction)&&void 0!==n||(o.direction="back")}const v=this.views.length+(null!==(s=null==c?void 0:c.length)&&void 0!==s?s:0)-(null!=d?d:0);if((0,a.n)(v>=0,"final balance can not be negative"),0===v)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(c){let e=i.insertStart;for(const t of c)this.insertViewAt(t,e),e++;i.enteringRequiresTransition&&(null!==(r=o.direction)&&void 0!==r||(o.direction="forward"))}if(h&&h.length>0){for(const e of h)(0,l.l)(e.element,l.b),(0,l.l)(e.element,l.c),(0,l.l)(e.element,l.d);for(const e of h)this.destroyView(e)}}transition(e,t,i){var s=this;return(0,n.Z)(function*(){const n=i.opts,o=n.progressAnimation?e=>s.sbAni=e:void 0,a=(0,r.b)(s),c=e.element,u=t&&t.element,d=Object.assign(Object.assign({mode:a,showGoBack:s.canGoBackSync(e),baseEl:s.el,progressCallback:o,animated:s.animated&&r.c.getBoolean("animated",!0),enteringEl:c,leavingEl:u},n),{animationBuilder:n.animationBuilder||s.animation||r.c.get("navAnimation")}),{hasCompleted:h}=yield(0,l.t)(d);return s.transitionFinish(h,e,t,n)})()}transitionFinish(e,t,i,n){const s=e?t:i;return s&&this.unmountInactiveViews(s),{hasCompleted:e,requiresTransition:!0,enteringView:t,leavingView:i,direction:n.direction}}insertViewAt(e,t){const i=this.views,n=i.indexOf(e);n>-1?((0,a.n)(e.nav===this,"view is not part of the nav"),i.splice(n,1),i.splice(t,0,e)):((0,a.n)(!e.nav,"nav is used"),e.nav=this,i.splice(t,0,e))}removeView(e){(0,a.n)(2===e.state||3===e.state,"view state should be loaded or destroyed");const t=this.views,i=t.indexOf(e);(0,a.n)(i>-1,"view must be part of the stack"),i>=0&&t.splice(i,1)}destroyView(e){e._destroy(),this.removeView(e)}unmountInactiveViews(e){if(this.destroyed)return;const t=this.views,i=t.indexOf(e);for(let n=t.length-1;n>=0;n--){const e=t[n],s=e.element;s&&(n>i?((0,l.l)(s,l.d),this.destroyView(e)):n<i&&(0,l.s)(s,!0))}}canStart(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.animationEnabled&&this.canGoBackSync()}onStart(){this.pop({direction:"back",progressAnimation:!0})}onMove(e){this.sbAni&&this.sbAni.progressStep(e)}onEnd(e,t,i){if(this.sbAni){this.animationEnabled=!1,this.sbAni.onFinish(()=>{this.animationEnabled=!0},{oneTimeCallback:!0});let n=e?-.001:.001;e?n+=(0,o.g)([0,0],[.32,.72],[0,1],[1,1],t)[0]:(this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),n+=(0,o.g)([0,0],[1,0],[.68,.28],[1,1],t)[0]),this.sbAni.progressEnd(e?1:0,n,i)}}render(){return(0,s.h)("slot",null)}get el(){return(0,s.i)(this)}static get watchers(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}}};v.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";const m=class{constructor(e){(0,s.r)(this,e),this.routerDirection="forward",this.onClick=()=>((e,t,i,n,s)=>{const r=this.el.closest("ion-nav");if(r)if("forward"===t){if(void 0!==i)return r.push(i,n,{skipIfBusy:!0,animationBuilder:s})}else if("root"===t){if(void 0!==i)return r.setRoot(i,n,{skipIfBusy:!0,animationBuilder:s})}else if("back"===t)return r.pop({skipIfBusy:!0,animationBuilder:s});return Promise.resolve(!1)})(0,this.routerDirection,this.component,this.componentProps,this.routerAnimation)}render(){return(0,s.h)(s.H,{onClick:this.onClick})}get el(){return(0,s.i)(this)}}}}]);