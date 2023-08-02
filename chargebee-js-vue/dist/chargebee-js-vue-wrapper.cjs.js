"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});var s=require("vue");function c(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=Math.random()*16|0,n=e=="x"?t:t&3|8;return n.toString(16)})}function f(e){if(e){const t=e.site,n=e.publishableKey;return!(!(t&&typeof t=="string"&&t.length>0)||!(n&&typeof n=="string"&&n.length>0))}else return!1}const d={props:{class:{type:String,default:""},fonts:{type:Array,default:[]},classes:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})},placeholder:{type:Object,default:()=>({})},icon:{type:Boolean,default:!0},locale:{type:String,default:"en"},currency:{type:String,default:"USD"}},data(){return{cbInstance:null,cbComponent:null,moduleLoaded:!1,elementId:""}},computed:{componentOptions:function(){return{fonts:this.fonts,classes:this.classes,locale:this.locale,style:this.styles,placeholder:this.placeholder,icon:this.icon,currency:this.currency}}},provide(){return{cbComponent:s.computed(()=>this.cbComponent)}},methods:{tokenize(e){return this.cbComponent.tokenize(e)},authorizeWith3ds(e,t,n){return this.cbComponent.authorizeWith3ds(e,t,n)},focus(){this.cbComponent.focus()},blur(){this.cbComponent.blur()},clear(){this.cbComponent.clear()},setCbComponent(e){this.cbComponent=e}},mounted(){this.$nextTick(()=>{this.elementId=`card-component-${c()}`;let e=Chargebee.getInstance(),t=this.componentOptions;e.load("components").then(()=>{this.cbInstance=e;const n=this.cbInstance.createComponent("card",t);this.setCbComponent(n),this.moduleLoaded=!0,["ready","focus","blur","change"].map(o=>{this.cbComponent.on(o,i=>{this.$emit(o,i)})}),this.$nextTick(()=>{this.cbComponent.mount(`#${this.elementId}`)})})})},watch:{componentOptions(){this.cbComponent&&this.cbComponent.update(this.componentOptions)}},render(){let e=this.$slots.default?this.$slots.default():[];return s.h("div",{id:this.elementId,class:this.class},e)}},r={data(){return{field:null,initialized:!1}},props:{class:{type:String,default:""},styles:{type:Object,default:()=>({})},placeholder:{type:String,default:()=>""}},computed:{fieldOptions:function(){return{style:this.styles||{},placeholder:this.placeholder}},elementId:function(){return`card-${this.id}-${c()}`}},methods:{getField(){return this.field},attachListener(e){this.field.on(e,t=>{this.$emit(e,t)})},initializeField(e){if(e){const t=this.fieldOptions;this.field=e.createField(this.id,t).at(`#${this.elementId}`),this.$parent.onMount&&this.$parent.onMount(),this.attachListener("ready"),this.attachListener("focus"),this.attachListener("blur"),this.attachListener("change"),this.initialized=!0}},focus(){this.field.focus()},blur(){this.field.blur()},clear(){this.field.clear()}},watch:{fieldOptions(){if(this.field){const e=this.fieldOptions;this.field.update(e)}},cbComponent(e,t){!t&&e&&(this.initialized||this.initializeField(e))}},inject:["cbComponent"],mounted(){this.initializeField()}};var a=(e,t)=>{const n=e.__vccOpts||e;for(const[o,i]of t)n[o]=i;return n};const b={name:"CardNumber",mixins:[r],data(){return{id:"number",loaded:!1,classname:this.class}}},x=["id"];function C(e,t,n,o,i,l){return s.openBlock(),s.createElementBlock("div",{id:e.elementId,class:s.normalizeClass(i.classname)},[s.renderSlot(e.$slots,"default")],10,x)}var u=a(b,[["render",C]]);const y={name:"CardExpiry",data(){return{id:"expiry",loaded:!1,classname:this.class}},mixins:[r]},$=["id"];function v(e,t,n,o,i,l){return s.openBlock(),s.createElementBlock("div",{id:e.elementId,class:s.normalizeClass(i.classname)},[s.renderSlot(e.$slots,"default")],10,$)}var h=a(y,[["render",v]]);const _={name:"CardCvv",data(){return{id:"cvv",loaded:!1,classname:this.class}},mixins:[r]},g=["id"];function I(e,t,n,o,i,l){return s.openBlock(),s.createElementBlock("div",{id:e.elementId,class:s.normalizeClass(i.classname)},[s.renderSlot(e.$slots,"default")],10,g)}var p=a(_,[["render",I]]);const m={name:"Provider",props:{cbInstance:{type:Object,default:null}},render(){return f(this.cbInstance)?this.$slots.default():null}};var O={install(e){e.component("card-component",d),e.component("card-number",u),e.component("card-expiry",h),e.component("card-cvv",p),e.component("provider",m)}};exports.CardComponent=d;exports.CardCvv=p;exports.CardExpiry=h;exports.CardNumber=u;exports.Provider=m;exports.default=O;
//# sourceMappingURL=chargebee-js-vue-wrapper.cjs.js.map
