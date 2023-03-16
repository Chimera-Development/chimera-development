"use strict";(self.webpackChunkchimera=self.webpackChunkchimera||[]).push([[194],{8549:(_t,E,l)=>{l.d(E,{w:()=>h});var o=l(8256);class h{constructor(){this.alertClosed=new o.vpe}onClose(){this.alertClosed.emit()}}h.\u0275fac=function(g){return new(g||h)},h.\u0275cmp=o.Xpm({type:h,selectors:[["app-alert"]],inputs:{message:"message"},outputs:{alertClosed:"alertClosed"},decls:11,vars:1,consts:[[1,"backdrop",3,"click"],[1,"alert-box","rounded","bg-dark"],[1,"text-center"],[1,"alert-box-actions"],["type","button",1,"btn","btn-outline-light",3,"click"]],template:function(g,v){1&g&&(o.TgZ(0,"div",0),o.NdJ("click",function(){return v.onClose()}),o.TgZ(1,"div",1)(2,"h5"),o._uU(3,"Info"),o.qZA(),o._UZ(4,"hr"),o.TgZ(5,"div",2)(6,"p"),o._uU(7),o.qZA()(),o.TgZ(8,"div",3)(9,"button",4),o.NdJ("click",function(){return v.onClose()}),o._uU(10,"Close"),o.qZA()()()()),2&g&&(o.xp6(7),o.Oqu(v.message))},styles:[".backdrop[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.7);z-index:50}.alert-box[_ngcontent-%COMP%]{position:fixed;top:30vh;left:30vw;width:40vw;padding:16px;z-index:100;background:white;box-shadow:0 2px #0003}.alert-box-actions[_ngcontent-%COMP%]{text-align:right}"]})},4466:(_t,E,l)=>{l.d(E,{m:()=>f});var o=l(6895),h=l(8256);class f{}f.\u0275fac=function(v){return new(v||f)},f.\u0275mod=h.oAB({type:f}),f.\u0275inj=h.cJS({imports:[o.ez,o.ez]})},433:(_t,E,l)=>{l.d(E,{Fj:()=>G,on:()=>pt,NI:()=>at,u:()=>ct,cw:()=>T,sg:()=>q,x0:()=>Y,u5:()=>En,wO:()=>gt,JJ:()=>Lt,JL:()=>qt,F:()=>L,On:()=>lt,UX:()=>Fn,Q7:()=>W,kI:()=>Ge,_Y:()=>re});var o=l(8256),h=l(6895),f=l(2076),g=l(9751),v=l(4742),z=l(8421),Ce=l(7669),Ve=l(5403),Ae=l(3268),be=l(1810),Me=l(4004);let yt=(()=>{class n{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(o.Qsj),o.Y36(o.SBq))},n.\u0275dir=o.lG2({type:n}),n})(),C=(()=>{class n extends yt{}return n.\u0275fac=function(){let e;return function(r){return(e||(e=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();const p=new o.OlP("NgValueAccessor"),Fe={provide:p,useExisting:(0,o.Gpc)(()=>G),multi:!0},we=new o.OlP("CompositionEventMode");let G=(()=>{class n extends yt{constructor(t,r,i){super(t,r),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Oe(){const n=(0,h.q)()?(0,h.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(t){this.setProperty("value",t??"")}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(we,8))},n.\u0275dir=o.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,r){1&t&&o.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[o._Bn([Fe]),o.qOj]}),n})();const Ne=!1;function m(n){return null==n||("string"==typeof n||Array.isArray(n))&&0===n.length}function Ct(n){return null!=n&&"number"==typeof n.length}const u=new o.OlP("NgValidators"),_=new o.OlP("NgAsyncValidators"),Se=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class Ge{static min(e){return function Vt(n){return e=>{if(m(e.value)||m(n))return null;const t=parseFloat(e.value);return!isNaN(t)&&t<n?{min:{min:n,actual:e.value}}:null}}(e)}static max(e){return function At(n){return e=>{if(m(e.value)||m(n))return null;const t=parseFloat(e.value);return!isNaN(t)&&t>n?{max:{max:n,actual:e.value}}:null}}(e)}static required(e){return bt(e)}static requiredTrue(e){return function Dt(n){return!0===n.value?null:{required:!0}}(e)}static email(e){return Mt(e)}static minLength(e){return Et(e)}static maxLength(e){return function Ft(n){return e=>Ct(e.value)&&e.value.length>n?{maxlength:{requiredLength:n,actualLength:e.value.length}}:null}(e)}static pattern(e){return function Ot(n){if(!n)return x;let e,t;return"string"==typeof n?(t="","^"!==n.charAt(0)&&(t+="^"),t+=n,"$"!==n.charAt(n.length-1)&&(t+="$"),e=new RegExp(t)):(t=n.toString(),e=n),r=>{if(m(r.value))return null;const i=r.value;return e.test(i)?null:{pattern:{requiredPattern:t,actualValue:i}}}}(e)}static nullValidator(e){return null}static compose(e){return Bt(e)}static composeAsync(e){return kt(e)}}function bt(n){return m(n.value)?{required:!0}:null}function Mt(n){return m(n.value)||Se.test(n.value)?null:{email:!0}}function Et(n){return e=>m(e.value)||!Ct(e.value)?null:e.value.length<n?{minlength:{requiredLength:n,actualLength:e.value.length}}:null}function x(n){return null}function wt(n){return null!=n}function Nt(n){const e=(0,o.QGY)(n)?(0,f.D)(n):n;if(Ne&&!(0,o.CqO)(e)){let t="Expected async validator to return Promise or Observable.";throw"object"==typeof n&&(t+=" Are you using a synchronous validator where an async validator is expected?"),new o.vHH(-1101,t)}return e}function St(n){let e={};return n.forEach(t=>{e=null!=t?{...e,...t}:e}),0===Object.keys(e).length?null:e}function Gt(n,e){return e.map(t=>t(n))}function xt(n){return n.map(e=>function xe(n){return!n.validate}(e)?e:t=>e.validate(t))}function Bt(n){if(!n)return null;const e=n.filter(wt);return 0==e.length?null:function(t){return St(Gt(t,e))}}function J(n){return null!=n?Bt(xt(n)):null}function kt(n){if(!n)return null;const e=n.filter(wt);return 0==e.length?null:function(t){return function De(...n){const e=(0,Ce.jO)(n),{args:t,keys:r}=(0,v.D)(n),i=new g.y(s=>{const{length:a}=t;if(!a)return void s.complete();const c=new Array(a);let b=a,M=a;for(let $=0;$<a;$++){let mt=!1;(0,z.Xf)(t[$]).subscribe((0,Ve.x)(s,On=>{mt||(mt=!0,M--),c[$]=On},()=>b--,void 0,()=>{(!b||!mt)&&(M||s.next(r?(0,be.n)(r,c):c),s.complete())}))}});return e?i.pipe((0,Ae.Z)(e)):i}(Gt(t,e).map(Nt)).pipe((0,Me.U)(St))}}function Z(n){return null!=n?kt(xt(n)):null}function Pt(n,e){return null===n?[e]:Array.isArray(n)?[...n,e]:[n,e]}function It(n){return n._rawValidators}function Tt(n){return n._rawAsyncValidators}function Q(n){return n?Array.isArray(n)?n:[n]:[]}function B(n,e){return Array.isArray(n)?n.includes(e):n===e}function Ht(n,e){const t=Q(e);return Q(n).forEach(i=>{B(t,i)||t.push(i)}),t}function Ut(n,e){return Q(e).filter(t=>!B(n,t))}class Rt{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=J(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Z(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e){this.control&&this.control.reset(e)}hasError(e,t){return!!this.control&&this.control.hasError(e,t)}getError(e,t){return this.control?this.control.getError(e,t):null}}class d extends Rt{get formDirective(){return null}get path(){return null}}class y extends Rt{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class jt{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let Lt=(()=>{class n extends jt{constructor(t){super(t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(y,2))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,r){2&t&&o.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[o.qOj]}),n})(),qt=(()=>{class n extends jt{constructor(t){super(t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(d,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,r){2&t&&o.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[o.qOj]}),n})();function Yt(n,e){return n?`with name: '${e}'`:`at index: ${e}`}const tt=!1,F="VALID",P="INVALID",D="PENDING",O="DISABLED";function et(n){return(I(n)?n.validators:n)||null}function nt(n,e){return(I(e)?e.asyncValidators:n)||null}function I(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}class zt{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===F}get invalid(){return this.status===P}get pending(){return this.status==D}get disabled(){return this.status===O}get enabled(){return this.status!==O}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ht(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ht(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ut(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ut(e,this._rawAsyncValidators))}hasValidator(e){return B(this._rawValidators,e)}hasAsyncValidator(e){return B(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=D,!1!==e.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){const t=this._parentMarkedDirty(e.onlySelf);this.status=O,this.errors=null,this._forEachChild(r=>{r.disable({...e,onlySelf:!0})}),this._updateValue(),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...e,skipPristineCheck:t}),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){const t=this._parentMarkedDirty(e.onlySelf);this.status=F,this._forEachChild(r=>{r.enable({...e,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors({...e,skipPristineCheck:t}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===F||this.status===D)&&this._runAsyncValidator(e.emitEvent)),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?O:F}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=D,this._hasOwnPendingAsyncValidator=!0;const t=Nt(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(!1!==t.emitEvent)}get(e){let t=e;return null==t||(Array.isArray(t)||(t=t.split(".")),0===t.length)?null:t.reduce((r,i)=>r&&r._find(i),this)}getError(e,t){const r=t?this.get(t):this;return r&&r.errors?r.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?O:this.errors?P:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(D)?D:this._anyControlsHaveStatus(P)?P:F}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){I(e)&&null!=e.updateOn&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){return!e&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=function Ue(n){return Array.isArray(n)?J(n):n||null}(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=function Re(n){return Array.isArray(n)?Z(n):n||null}(this._rawAsyncValidators)}}class T extends zt{constructor(e,t,r){super(et(t),nt(r,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,r={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,r={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){(function $t(n,e,t){n._forEachChild((r,i)=>{if(void 0===t[i])throw new o.vHH(1002,tt?function He(n,e){return`Must supply a value for form control ${Yt(n,e)}`}(e,i):"")})})(this,!0,e),Object.keys(e).forEach(r=>{(function Wt(n,e,t){const r=n.controls;if(!(e?Object.keys(r):r).length)throw new o.vHH(1e3,tt?function Ie(n){return`\n    There are no form controls registered with this ${n?"group":"array"} yet. If you're using ngModel,\n    you may want to check next tick (e.g. use setTimeout).\n  `}(e):"");if(!r[t])throw new o.vHH(1001,tt?function Te(n,e){return`Cannot find form control ${Yt(n,e)}`}(e,t):"")})(this,!0,r),this.controls[r].setValue(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){null!=e&&(Object.keys(e).forEach(r=>{const i=this.controls[r];i&&i.patchValue(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((r,i)=>{r.reset(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,r)=>(e[r]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,r)=>!!r._syncPendingControls()||t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{const r=this.controls[t];r&&e(r,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(const[t,r]of Object.entries(this.controls))if(this.contains(t)&&e(r))return!0;return!1}_reduceValue(){return this._reduceChildren({},(t,r,i)=>((r.enabled||this.disabled)&&(t[i]=r.value),t))}_reduceChildren(e,t){let r=e;return this._forEachChild((i,s)=>{r=t(r,i,s)}),r}_allControlsDisabled(){for(const e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}}const V=new o.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>w}),w="always";function H(n,e){return[...e.path,n]}function N(n,e,t=w){rt(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||"always"===t)&&e.valueAccessor.setDisabledState?.(n.disabled),function qe(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&Jt(n,e)})}(n,e),function We(n,e){const t=(r,i)=>{e.valueAccessor.writeValue(r),i&&e.viewToModelUpdate(r)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}(n,e),function Ye(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&Jt(n,e),"submit"!==n.updateOn&&n.markAsTouched()})}(n,e),function Le(n,e){if(e.valueAccessor.setDisabledState){const t=r=>{e.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}(n,e)}function U(n,e,t=!0){const r=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(r),e.valueAccessor.registerOnTouched(r)),j(n,e),n&&(e._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function R(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function rt(n,e){const t=It(n);null!==e.validator?n.setValidators(Pt(t,e.validator)):"function"==typeof t&&n.setValidators([t]);const r=Tt(n);null!==e.asyncValidator?n.setAsyncValidators(Pt(r,e.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const i=()=>n.updateValueAndValidity();R(e._rawValidators,i),R(e._rawAsyncValidators,i)}function j(n,e){let t=!1;if(null!==n){if(null!==e.validator){const i=It(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(a=>a!==e.validator);s.length!==i.length&&(t=!0,n.setValidators(s))}}if(null!==e.asyncValidator){const i=Tt(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(a=>a!==e.asyncValidator);s.length!==i.length&&(t=!0,n.setAsyncValidators(s))}}}const r=()=>{};return R(e._rawValidators,r),R(e._rawAsyncValidators,r),t}function Jt(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Zt(n,e){rt(n,e)}function it(n,e){if(!n.hasOwnProperty("model"))return!1;const t=n.model;return!!t.isFirstChange()||!Object.is(e,t.currentValue)}function Qt(n,e){n._syncPendingControls(),e.forEach(t=>{const r=t.control;"submit"===r.updateOn&&r._pendingChange&&(t.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}function st(n,e){if(!e)return null;let t,r,i;return Array.isArray(e),e.forEach(s=>{s.constructor===G?t=s:function Je(n){return Object.getPrototypeOf(n.constructor)===C}(s)?r=s:i=s}),i||r||t||null}const Qe={provide:d,useExisting:(0,o.Gpc)(()=>L)},S=(()=>Promise.resolve())();let L=(()=>{class n extends d{constructor(t,r,i){super(),this.callSetDisabledState=i,this.submitted=!1,this._directives=new Set,this.ngSubmit=new o.vpe,this.form=new T({},J(t),Z(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){S.then(()=>{const r=this._findContainer(t.path);t.control=r.registerControl(t.name,t.control),N(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){S.then(()=>{const r=this._findContainer(t.path);r&&r.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){S.then(()=>{const r=this._findContainer(t.path),i=new T({});Zt(i,t),r.registerControl(t.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){S.then(()=>{const r=this._findContainer(t.path);r&&r.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,r){S.then(()=>{this.form.get(t.path).setValue(r)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submitted=!0,Qt(this.form,this._directives),this.ngSubmit.emit(t),"dialog"===t?.target?.method}onReset(){this.resetForm()}resetForm(t){this.form.reset(t),this.submitted=!1}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(u,10),o.Y36(_,10),o.Y36(V,8))},n.\u0275dir=o.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,r){1&t&&o.NdJ("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[o._Bn([Qe]),o.qOj]}),n})();function Xt(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}function Kt(n){return"object"==typeof n&&null!==n&&2===Object.keys(n).length&&"value"in n&&"disabled"in n}const at=class extends zt{constructor(e=null,t,r){super(et(t),nt(r,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),I(t)&&(t.nonNullable||t.initialValueIsDefault)&&(this.defaultValue=Kt(e)?e.value:e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&!1!==t.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==t.emitViewToModelChange)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Xt(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Xt(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(e){Kt(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};let te=(()=>{class n extends d{ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return H(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}}return n.\u0275fac=function(){let e;return function(r){return(e||(e=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();const tn={provide:y,useExisting:(0,o.Gpc)(()=>lt)},ne=(()=>Promise.resolve())();let lt=(()=>{class n extends y{constructor(t,r,i,s,a,c){super(),this._changeDetectorRef=a,this.callSetDisabledState=c,this.control=new at,this._registered=!1,this.update=new o.vpe,this._parent=t,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=st(0,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){const r=t.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),it(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){N(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(t){ne.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){const r=t.isDisabled.currentValue,i=0!==r&&(0,o.D6c)(r);ne.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?H(t,this._parent):[t]}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(d,9),o.Y36(u,10),o.Y36(_,10),o.Y36(p,10),o.Y36(o.sBO,8),o.Y36(V,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[o._Bn([tn]),o.qOj,o.TTD]}),n})(),re=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=o.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),n})(),ie=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({}),n})();const ut=new o.OlP("NgModelWithFormControlWarning"),an={provide:d,useExisting:(0,o.Gpc)(()=>q)};let q=(()=>{class n extends d{constructor(t,r,i){super(),this.callSetDisabledState=i,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new o.vpe,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(j(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){const r=this.form.get(t.path);return N(r,t,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),r}getControl(t){return this.form.get(t.path)}removeControl(t){U(t.control||null,t,!1),function Ze(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,r){this.form.get(t.path).setValue(r)}onSubmit(t){return this.submitted=!0,Qt(this.form,this.directives),this.ngSubmit.emit(t),"dialog"===t?.target?.method}onReset(){this.resetForm()}resetForm(t){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{const r=t.control,i=this.form.get(t.path);r!==i&&(U(r||null,t),(n=>n instanceof at)(i)&&(N(i,t,this.callSetDisabledState),t.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){const r=this.form.get(t.path);Zt(r,t),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){const r=this.form.get(t.path);r&&function $e(n,e){return j(n,e)}(r,t)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){rt(this.form,this),this._oldForm&&j(this._oldForm,this)}_checkFormPresent(){}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(u,10),o.Y36(_,10),o.Y36(V,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroup",""]],hostBindings:function(t,r){1&t&&o.NdJ("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[o._Bn([an]),o.qOj,o.TTD]}),n})();const ln={provide:d,useExisting:(0,o.Gpc)(()=>Y)};let Y=(()=>{class n extends te{constructor(t,r,i){super(),this._parent=t,this._setValidators(r),this._setAsyncValidators(i)}_checkParentType(){ue(this._parent)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(d,13),o.Y36(u,10),o.Y36(_,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroupName",""]],inputs:{name:["formGroupName","name"]},features:[o._Bn([ln]),o.qOj]}),n})();const un={provide:d,useExisting:(0,o.Gpc)(()=>dt)};let dt=(()=>{class n extends d{constructor(t,r,i){super(),this._parent=t,this._setValidators(r),this._setAsyncValidators(i)}ngOnInit(){this._checkParentType(),this.formDirective.addFormArray(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormArray(this)}get control(){return this.formDirective.getFormArray(this)}get formDirective(){return this._parent?this._parent.formDirective:null}get path(){return H(null==this.name?this.name:this.name.toString(),this._parent)}_checkParentType(){ue(this._parent)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(d,13),o.Y36(u,10),o.Y36(_,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formArrayName",""]],inputs:{name:["formArrayName","name"]},features:[o._Bn([un]),o.qOj]}),n})();function ue(n){return!(n instanceof Y||n instanceof q||n instanceof dt)}const dn={provide:y,useExisting:(0,o.Gpc)(()=>ct)};let ct=(()=>{class n extends y{set isDisabled(t){}constructor(t,r,i,s,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.update=new o.vpe,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=st(0,s)}ngOnChanges(t){this._added||this._setUpControl(),it(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return H(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}}return n._ngModelWarningSentOnce=!1,n.\u0275fac=function(t){return new(t||n)(o.Y36(d,13),o.Y36(u,10),o.Y36(_,10),o.Y36(p,10),o.Y36(ut,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[o._Bn([dn]),o.qOj,o.TTD]}),n})();let A=(()=>{class n{constructor(){this._validator=x}ngOnChanges(t){if(this.inputName in t){const r=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):x,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return null!=t}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=o.lG2({type:n,features:[o.TTD]}),n})();const vn={provide:u,useExisting:(0,o.Gpc)(()=>W),multi:!0};let W=(()=>{class n extends A{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=o.D6c,this.createValidator=t=>bt}enabled(t){return t}}return n.\u0275fac=function(){let e;return function(r){return(e||(e=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(t,r){2&t&&o.uIk("required",r._enabled?"":null)},inputs:{required:"required"},features:[o._Bn([vn]),o.qOj]}),n})();const Vn={provide:u,useExisting:(0,o.Gpc)(()=>pt),multi:!0};let pt=(()=>{class n extends A{constructor(){super(...arguments),this.inputName="email",this.normalizeInput=o.D6c,this.createValidator=t=>Mt}enabled(t){return t}}return n.\u0275fac=function(){let e;return function(r){return(e||(e=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["","email","","formControlName",""],["","email","","formControl",""],["","email","","ngModel",""]],inputs:{email:"email"},features:[o._Bn([Vn]),o.qOj]}),n})();const An={provide:u,useExisting:(0,o.Gpc)(()=>gt),multi:!0};let gt=(()=>{class n extends A{constructor(){super(...arguments),this.inputName="minlength",this.normalizeInput=t=>function he(n){return"number"==typeof n?n:parseInt(n,10)}(t),this.createValidator=t=>Et(t)}}return n.\u0275fac=function(){let e;return function(r){return(e||(e=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["","minlength","","formControlName",""],["","minlength","","formControl",""],["","minlength","","ngModel",""]],hostVars:1,hostBindings:function(t,r){2&t&&o.uIk("minlength",r._enabled?r.minlength:null)},inputs:{minlength:"minlength"},features:[o._Bn([An]),o.qOj]}),n})(),ve=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[ie]}),n})(),En=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:V,useValue:t.callSetDisabledState??w}]}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[ve]}),n})(),Fn=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:ut,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:V,useValue:t.callSetDisabledState??w}]}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[ve]}),n})()}}]);