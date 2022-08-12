var z=Object.defineProperty,L=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var S=(e,t,s)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,o=(e,t)=>{for(var s in t||(t={}))q.call(t,s)&&S(e,s,t[s]);if(w)for(var s of w(t))F.call(t,s)&&S(e,s,t[s]);return e},b=(e,t)=>L(e,R(t));import{a as G,ae as H,r as _,af as J,ag as K,ah as Q,ad as T}from"./index.afd9fa0a.js";import{B as U,r as x,j as m,u as n,w as d,bh as E,bi as X,a5 as Y,bj as Z,ai as ee}from"./vendor.bf608252.js";function te(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!X(e)}const ne={useCollapse:{type:Boolean,default:!0},title:{type:String,default:""},size:{type:String,validator:e=>["small","default","middle",void 0].includes(e),default:"small"},bordered:{type:Boolean,default:!0},column:{type:[Number,Object],default:()=>({xxl:4,xl:3,lg:3,md:3,sm:2,xs:1})},collapseOptions:{type:Object,default:null},schema:{type:Array,default:()=>[]},data:{type:Object}};var se=U({name:"Description",props:ne,emits:["register"],setup(e,{slots:t,emit:s}){const p=x(null),{prefixCls:C}=G("description"),i=H(),l=m(()=>o(o({},e),n(p))),g=m(()=>b(o({},n(l)),{title:void 0})),I=m(()=>!!n(l).title),M=m(()=>o({canExpand:!1},n(g).collapseOptions)),B=m(()=>o(o({},n(i)),n(g)));function N(r){p.value=o(o({},n(p)),r)}function W({label:r,labelMinWidth:c,labelStyle:a}){if(!a&&!c)return r;const u=b(o({},a),{minWidth:`${c}px `});return d("div",{style:u},[r])}function $(){const{schema:r,data:c}=n(g);return n(r).map(a=>{const{render:u,field:v,span:V,show:D,contentMinWidth:P}=a;if(D&&_(D)&&!D(c))return null;const j=()=>{var O;const f=(O=n(g))==null?void 0:O.data;if(!f)return null;const h=Z(f,v);return _(u)?u(h,f):h!=null?h:""},k=P;return d(E.Item,{label:W(a),key:v,span:V},{default:()=>{if(!P)return j();const f={minWidth:`${k}px`};return d("div",{style:f},[j()])}})}).filter(a=>!!a)}const y=()=>{let r;return d(E,Y({class:`${C}`},n(B)),te(r=$())?r:{default:()=>[r]})},A=()=>{const r=e.useCollapse?y():d("div",null,[y()]);if(!e.useCollapse)return r;const{canExpand:c,helpMessage:a}=n(M),{title:u}=n(l);return d(K,{title:u,canExpan:c,helpMessage:a},{default:()=>r,action:()=>J(t,"action")})};return s("register",{setDescProps:N}),()=>n(I)?A():y()}});function le(e){if(!ee())throw new Error("useDescription() can only be used inside setup() or functional components!");const t=x(null),s=x(!1);function p(i){n(s)&&Q()||(t.value=i,e&&i.setDescProps(e),s.value=!0)}return[p,{setDescProps:i=>{var l;(l=n(t))==null||l.setDescProps(i)}}]}const ce=T(se);export{ce as D,le as u};
