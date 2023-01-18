"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1709],{4147:(U,k,s)=>{s.d(k,{a:()=>z,b:()=>r,p:()=>_});const _=(c,...i)=>console.warn(`[Ionic Warning]: ${c}`,...i),r=(c,...i)=>console.error(`[Ionic Error]: ${c}`,...i),z=(c,...i)=>console.error(`<${c.tagName.toLowerCase()}> must be used inside ${i.join(" or ")}.`)},1709:(U,k,s)=>{s.r(k),s.d(k,{ion_range:()=>E});var _=s(5861),r=s(1308),z=s(9658),c=s(6642),i=s(5730),M=s(4147),B=s(5062),l=s(2854);const E=class{constructor(e){var t=this;(0,r.r)(this,e),this.ionChange=(0,r.e)(this,"ionChange",7),this.ionStyle=(0,r.e)(this,"ionStyle",7),this.ionFocus=(0,r.e)(this,"ionFocus",7),this.ionBlur=(0,r.e)(this,"ionBlur",7),this.ionKnobMoveStart=(0,r.e)(this,"ionKnobMoveStart",7),this.ionKnobMoveEnd=(0,r.e)(this,"ionKnobMoveEnd",7),this.didLoad=!1,this.noUpdate=!1,this.hasFocus=!1,this.inheritedAttributes={},this.contentEl=null,this.initialContentScrollY=!0,this.ratioA=0,this.ratioB=0,this.debounce=0,this.name="",this.dualKnobs=!1,this.min=0,this.max=100,this.pin=!1,this.pinFormatter=n=>Math.round(n),this.snaps=!1,this.step=1,this.ticks=!0,this.disabled=!1,this.value=0,this.clampBounds=n=>(0,i.l)(this.min,n,this.max),this.ensureValueInBounds=n=>this.dualKnobs?{lower:this.clampBounds(n.lower),upper:this.clampBounds(n.upper)}:this.clampBounds(n),this.setupGesture=(0,_.Z)(function*(){const n=t.rangeSlider;n&&(t.gesture=(yield Promise.resolve().then(s.bind(s,1911))).createGesture({el:n,gestureName:"range",gesturePriority:100,threshold:0,onStart:a=>t.onStart(a),onMove:a=>t.onMove(a),onEnd:a=>t.onEnd(a)}),t.gesture.enable(!t.disabled))}),this.handleKeyboard=(n,a)=>{const{ensureValueInBounds:o}=this;let h=this.step;h=h>0?h:1,h/=this.max-this.min,a||(h*=-1),"A"===n?this.ratioA=(0,i.l)(0,this.ratioA+h,1):this.ratioB=(0,i.l)(0,this.ratioB+h,1),this.ionKnobMoveStart.emit({value:o(this.value)}),this.updateValue(),this.ionKnobMoveEnd.emit({value:o(this.value)})},this.onBlur=()=>{this.hasFocus&&(this.hasFocus=!1,this.ionBlur.emit(),this.emitStyle())},this.onFocus=()=>{this.hasFocus||(this.hasFocus=!0,this.ionFocus.emit(),this.emitStyle())}}debounceChanged(){this.ionChange=(0,i.h)(this.ionChange,this.debounce)}minChanged(){this.noUpdate||this.updateRatio()}maxChanged(){this.noUpdate||this.updateRatio()}activeBarStartChanged(){const{activeBarStart:e}=this;void 0!==e&&(e>this.max?((0,M.p)(`Range: The value of activeBarStart (${e}) is greater than the max (${this.max}). Valid values are greater than or equal to the min value and less than or equal to the max value.`,this.el),this.activeBarStart=this.max):e<this.min&&((0,M.p)(`Range: The value of activeBarStart (${e}) is less than the min (${this.min}). Valid values are greater than or equal to the min value and less than or equal to the max value.`,this.el),this.activeBarStart=this.min))}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled),this.emitStyle()}valueChanged(e){this.noUpdate||this.updateRatio(),e=this.ensureValueInBounds(e),this.ionChange.emit({value:e})}componentWillLoad(){this.rangeId=this.el.hasAttribute("id")?this.el.getAttribute("id"):"ion-r-"+T++,this.inheritedAttributes=(0,i.i)(this.el)}componentDidLoad(){this.setupGesture(),this.didLoad=!0}connectedCallback(){this.updateRatio(),this.debounceChanged(),this.disabledChanged(),this.activeBarStartChanged(),this.didLoad&&this.setupGesture(),this.contentEl=(0,c.f)(this.el)}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}getValue(){var e;const t=null!==(e=this.value)&&void 0!==e?e:0;return this.dualKnobs?"object"==typeof t?t:{lower:0,upper:t}:"object"==typeof t?t.upper:t}emitStyle(){this.ionStyle.emit({interactive:!0,"interactive-disabled":this.disabled})}onStart(e){const{contentEl:t}=this;t&&(this.initialContentScrollY=(0,c.d)(t));const n=this.rect=this.rangeSlider.getBoundingClientRect(),a=e.currentX;let o=(0,i.l)(0,(a-n.left)/n.width,1);(0,B.i)(this.el)&&(o=1-o),this.pressedKnob=!this.dualKnobs||Math.abs(this.ratioA-o)<Math.abs(this.ratioB-o)?"A":"B",this.setFocus(this.pressedKnob),this.update(a),this.ionKnobMoveStart.emit({value:this.ensureValueInBounds(this.value)})}onMove(e){this.update(e.currentX)}onEnd(e){const{contentEl:t,initialContentScrollY:n}=this;t&&(0,c.r)(t,n),this.update(e.currentX),this.pressedKnob=void 0,this.ionKnobMoveEnd.emit({value:this.ensureValueInBounds(this.value)})}update(e){const t=this.rect;let n=(0,i.l)(0,(e-t.left)/t.width,1);(0,B.i)(this.el)&&(n=1-n),this.snaps&&(n=v(m(n,this.min,this.max,this.step),this.min,this.max)),"A"===this.pressedKnob?this.ratioA=n:this.ratioB=n,this.updateValue()}get valA(){return m(this.ratioA,this.min,this.max,this.step)}get valB(){return m(this.ratioB,this.min,this.max,this.step)}get ratioLower(){if(this.dualKnobs)return Math.min(this.ratioA,this.ratioB);const{activeBarStart:e}=this;return null==e?0:v(e,this.min,this.max)}get ratioUpper(){return this.dualKnobs?Math.max(this.ratioA,this.ratioB):this.ratioA}updateRatio(){const e=this.getValue(),{min:t,max:n}=this;this.dualKnobs?(this.ratioA=v(e.lower,t,n),this.ratioB=v(e.upper,t,n)):this.ratioA=v(e,t,n)}updateValue(){this.noUpdate=!0;const{valA:e,valB:t}=this;this.value=this.dualKnobs?{lower:Math.min(e,t),upper:Math.max(e,t)}:e,this.noUpdate=!1}setFocus(e){if(this.el.shadowRoot){const t=this.el.shadowRoot.querySelector("A"===e?".range-knob-a":".range-knob-b");t&&t.focus()}}render(){var e;const{min:t,max:n,step:a,el:o,handleKeyboard:h,pressedKnob:x,disabled:w,pin:A,ratioLower:p,ratioUpper:f,inheritedAttributes:P,rangeId:S,pinFormatter:K}=this;let{labelText:g}=(0,i.d)(o,S);null==g&&(g=P["aria-label"]);const y=(0,z.b)(this);let L=100*p+"%",O=100-100*f+"%";const D=(0,B.i)(this.el),R=D?"right":"left",V=u=>({[R]:u[R]});!1===this.dualKnobs&&(this.valA<(null!==(e=this.activeBarStart)&&void 0!==e?e:this.min)?(L=100*f+"%",O=100-100*p+"%"):(L=100*p+"%",O=100-100*f+"%"));const W={[R]:L,[D?"left":"right"]:O},$=[];if(this.snaps&&this.ticks)for(let u=t;u<=n;u+=a){const I=v(u,t,n),G=Math.min(p,f),X=Math.max(p,f),F={ratio:I,active:I>=G&&I<=X};F[R]=100*I+"%",$.push(F)}return(0,i.e)(!0,o,this.name,JSON.stringify(this.getValue()),w),(0,r.h)(r.H,{onFocusin:this.onFocus,onFocusout:this.onBlur,id:S,class:(0,l.c)(this.color,{[y]:!0,"in-item":(0,l.h)("ion-item",o),"range-disabled":w,"range-pressed":void 0!==x,"range-has-pin":A})},(0,r.h)("slot",{name:"start"}),(0,r.h)("div",{class:"range-slider",ref:u=>this.rangeSlider=u},$.map(u=>(0,r.h)("div",{style:V(u),role:"presentation",class:{"range-tick":!0,"range-tick-active":u.active},part:u.active?"tick-active":"tick"})),(0,r.h)("div",{class:"range-bar",role:"presentation",part:"bar"}),(0,r.h)("div",{class:"range-bar range-bar-active",role:"presentation",style:W,part:"bar-active"}),C(D,{knob:"A",pressed:"A"===x,value:this.valA,ratio:this.ratioA,pin:A,pinFormatter:K,disabled:w,handleKeyboard:h,min:t,max:n,labelText:g}),this.dualKnobs&&C(D,{knob:"B",pressed:"B"===x,value:this.valB,ratio:this.ratioB,pin:A,pinFormatter:K,disabled:w,handleKeyboard:h,min:t,max:n,labelText:g})),(0,r.h)("slot",{name:"end"}))}get el(){return(0,r.i)(this)}static get watchers(){return{debounce:["debounceChanged"],min:["minChanged"],max:["maxChanged"],activeBarStart:["activeBarStartChanged"],disabled:["disabledChanged"],value:["valueChanged"]}}},C=(e,{knob:t,value:n,ratio:a,min:o,max:h,disabled:x,pressed:w,pin:A,handleKeyboard:p,labelText:f,pinFormatter:P})=>{const S=e?"right":"left";return(0,r.h)("div",{onKeyDown:g=>{const y=g.key;"ArrowLeft"===y||"ArrowDown"===y?(p(t,!1),g.preventDefault(),g.stopPropagation()):("ArrowRight"===y||"ArrowUp"===y)&&(p(t,!0),g.preventDefault(),g.stopPropagation())},class:{"range-knob-handle":!0,"range-knob-a":"A"===t,"range-knob-b":"B"===t,"range-knob-pressed":w,"range-knob-min":n===o,"range-knob-max":n===h,"ion-activatable":!0,"ion-focusable":!0},style:(()=>{const g={};return g[S]=100*a+"%",g})(),role:"slider",tabindex:x?-1:0,"aria-label":f,"aria-valuemin":o,"aria-valuemax":h,"aria-disabled":x?"true":null,"aria-valuenow":n},A&&(0,r.h)("div",{class:"range-pin",role:"presentation",part:"pin"},P(n)),(0,r.h)("div",{class:"range-knob",role:"presentation",part:"knob"}))},m=(e,t,n,a)=>{let o=(n-t)*e;return a>0&&(o=Math.round(o/a)*a+t),(0,i.l)(t,o,n)},v=(e,t,n)=>(0,i.l)(0,(e-t)/(n-t),1);let T=0;E.style={ios:":host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset;right:unset;right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset;right:unset;right:0}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:#ffffff;--knob-box-shadow:0 3px 1px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.13), 0 0 0 1px rgba(0, 0, 0, 0.02);--knob-size:28px;--bar-height:2px;--bar-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);--bar-background-active:var(--ion-color-primary, #3880ff);--bar-border-radius:0;--height:42px;padding-left:16px;padding-right:16px;padding-top:8px;padding-bottom:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-tick-active{background:var(--ion-color-base)}::slotted([slot=start]){margin-left:0;margin-right:16px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}}::slotted([slot=end]){margin-left:16px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:20px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-tick{margin-left:-1px;border-radius:0;position:absolute;top:18px;width:2px;height:8px;background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-tick{margin-left:unset;-webkit-margin-start:-1px;margin-inline-start:-1px}}.range-tick-active{background:var(--bar-background-active)}.range-pin{-webkit-transform:translate3d(0,  28px,  0) scale(0.01);transform:translate3d(0,  28px,  0) scale(0.01);padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:inline-block;position:relative;top:-20px;min-width:28px;-webkit-transition:-webkit-transform 120ms ease;transition:-webkit-transform 120ms ease;transition:transform 120ms ease;transition:transform 120ms ease, -webkit-transform 120ms ease;background:transparent;color:var(--ion-text-color, #000);font-size:12px;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-pin{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.range-knob-pressed .range-pin,.range-knob-handle.ion-focused .range-pin{-webkit-transform:translate3d(0,  0,  0) scale(1);transform:translate3d(0,  0,  0) scale(1)}:host(.range-disabled){opacity:0.5}",md:':host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset;right:unset;right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset;right:unset;right:0}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:var(--bar-background-active);--knob-box-shadow:none;--knob-size:18px;--bar-height:2px;--bar-background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.26);--bar-background-active:var(--ion-color-primary, #3880ff);--bar-border-radius:0;--height:42px;--pin-background:var(--ion-color-primary, #3880ff);--pin-color:var(--ion-color-primary-contrast, #fff);padding-left:14px;padding-right:14px;padding-top:8px;padding-bottom:8px;font-size:12px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:14px;padding-inline-start:14px;-webkit-padding-end:14px;padding-inline-end:14px}}:host(.ion-color) .range-bar{background:rgba(var(--ion-color-base-rgb), 0.26)}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-knob,:host(.ion-color) .range-knob::before,:host(.ion-color) .range-pin,:host(.ion-color) .range-pin::before,:host(.ion-color) .range-tick{background:var(--ion-color-base);color:var(--ion-color-contrast)}::slotted([slot=start]){margin-left:0;margin-right:14px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:14px;margin-inline-end:14px}}::slotted([slot=end]){margin-left:14px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:28px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-knob{-webkit-transform:scale(0.67);transform:scale(0.67);-webkit-transition-duration:120ms;transition-duration:120ms;-webkit-transition-property:background-color, border, -webkit-transform;transition-property:background-color, border, -webkit-transform;transition-property:transform, background-color, border;transition-property:transform, background-color, border, -webkit-transform;-webkit-transition-timing-function:ease;transition-timing-function:ease;z-index:2}.range-knob::before{border-radius:50%;left:0;position:absolute;width:var(--knob-size);height:var(--knob-size);-webkit-transform:scale(1);transform:scale(1);-webkit-transition:0.267s cubic-bezier(0, 0, 0.58, 1);transition:0.267s cubic-bezier(0, 0, 0.58, 1);background:var(--knob-background);content:"";opacity:0.13;pointer-events:none}[dir=rtl] .range-knob::before,:host-context([dir=rtl]) .range-knob::before{left:unset;right:unset;right:0}.range-tick{position:absolute;top:calc((var(--height) - var(--bar-height)) / 2);width:var(--bar-height);height:var(--bar-height);background:var(--bar-background-active);z-index:1;pointer-events:none}.range-tick-active{background:transparent}.range-pin{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;border-radius:50%;-webkit-transform:translate3d(0,  0,  0) scale(0.01);transform:translate3d(0,  0,  0) scale(0.01);display:inline-block;position:relative;min-width:28px;height:28px;-webkit-transition:background 120ms ease, -webkit-transform 120ms ease;transition:background 120ms ease, -webkit-transform 120ms ease;transition:transform 120ms ease, background 120ms ease;transition:transform 120ms ease, background 120ms ease, -webkit-transform 120ms ease;background:var(--pin-background);color:var(--pin-color);text-align:center}.range-pin::before{left:50%;top:3px;margin-left:-13px;border-radius:50% 50% 50% 0;position:absolute;width:26px;height:26px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:background 120ms ease;transition:background 120ms ease;background:var(--pin-background);content:"";z-index:-1}[dir=rtl] .range-pin::before,:host-context([dir=rtl]) .range-pin::before{left:unset;right:unset;right:50%}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-pin::before{margin-left:unset;-webkit-margin-start:-13px;margin-inline-start:-13px}}[dir=rtl] .range-pin::before,:host-context([dir=rtl]) .range-pin::before{left:unset}.range-knob-pressed .range-pin,.range-knob-handle.ion-focused .range-pin{-webkit-transform:translate3d(0,  -24px,  0) scale(1);transform:translate3d(0,  -24px,  0) scale(1)}@media (any-hover: hover){.range-knob-handle:hover .range-knob:before{-webkit-transform:scale(2);transform:scale(2);opacity:0.13}}.range-knob-handle.ion-activated .range-knob:before,.range-knob-handle.ion-focused .range-knob:before,.range-knob-handle.range-knob-pressed .range-knob:before{-webkit-transform:scale(2);transform:scale(2)}.range-knob-handle.ion-focused .range-knob::before{opacity:0.13}.range-knob-handle.ion-activated .range-knob::before,.range-knob-handle.range-knob-pressed .range-knob::before{opacity:0.25}:host(:not(.range-has-pin)) .range-knob-pressed .range-knob,:host(:not(.range-has-pin)) .range-knob-handle.ion-focused .range-knob{-webkit-transform:scale(1);transform:scale(1)}:host(.range-disabled) .range-bar-active,:host(.range-disabled) .range-bar,:host(.range-disabled) .range-tick{background-color:var(--ion-color-step-250, #bfbfbf)}:host(.range-disabled) .range-knob{-webkit-transform:scale(0.55);transform:scale(0.55);outline:5px solid #fff;background-color:var(--ion-color-step-250, #bfbfbf)}'}},2854:(U,k,s)=>{s.d(k,{c:()=>z,g:()=>i,h:()=>r,o:()=>B});var _=s(5861);const r=(l,d)=>null!==d.closest(l),z=(l,d)=>"string"==typeof l&&l.length>0?Object.assign({"ion-color":!0,[`ion-color-${l}`]:!0},d):d,i=l=>{const d={};return(l=>void 0!==l?(Array.isArray(l)?l:l.split(" ")).filter(b=>null!=b).map(b=>b.trim()).filter(b=>""!==b):[])(l).forEach(b=>d[b]=!0),d},M=/^[a-z][a-z0-9+\-.]*:/,B=function(){var l=(0,_.Z)(function*(d,b,E,C){if(null!=d&&"#"!==d[0]&&!M.test(d)){const m=document.querySelector("ion-router");if(m)return b?.preventDefault(),m.push(d,E,C)}return!1});return function(b,E,C,m){return l.apply(this,arguments)}}()}}]);