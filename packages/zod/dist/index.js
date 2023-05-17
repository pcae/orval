"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _core = require('@orval/core');var _lodashuniq = require('lodash.uniq'); var _lodashuniq2 = _interopRequireDefault(_lodashuniq);var V=[{exports:[{name:"z",alias:"zod",values:!0}],dependency:"zod"}],_= exports.getZodDependencies =()=>V,T=e=>{switch(e){case"integer":return"number";case"null":return"mixed";default:return e!=null?e:"any"}},x=(e,a,r)=>{var c,Z,B,z,O,C,k,S,$,g;if(!e)return{functions:[],consts:[]};let b=[],n=[],t=T(e.type),o=e.default!==void 0?!1:(c=a!=null?a:!e.nullable)!=null?c:!1,s=(z=(B=(Z=e.minimum)!=null?Z:e.exclusiveMinimum)!=null?B:e.minLength)!=null?z:void 0,m=(k=(C=(O=e.maximum)!=null?O:e.exclusiveMaximum)!=null?C:e.maxLength)!=null?k:void 0,u=(S=e.pattern)!=null?S:void 0;switch(t){case"array":let l=e.items;n.push(["array",x(l,!0,_core.camel.call(void 0, r))]);break;case"string":{if(e.enum&&t==="string")break;if(n.push([t,void 0]),e.format==="date-time"||e.format==="date"){n.push(["datetime",void 0]);break}if(e.format==="email"){n.push(["email",void 0]);break}if(e.format==="uri"||e.format==="hostname"){n.push(["url",void 0]);break}if(e.format==="uuid"){n.push(["uuid",void 0]);break}break}case"object":default:{if(e.allOf||e.oneOf||e.anyOf){let d=e.allOf?"allOf":e.oneOf?"oneOf":"anyOf",p=(g=($=e.allOf)!=null?$:e.oneOf)!=null?g:e.anyOf;n.push([d,p.map(h=>x(h,!0,_core.camel.call(void 0, r)))]);break}if(e.properties){n.push(["object",Object.keys(e.properties).map(d=>{var p,h;return{[d]:x((p=e.properties)==null?void 0:p[d],(h=e.required)==null?void 0:h.includes(d),_core.camel.call(void 0, `${r}-${d}`))}}).reduce((d,p)=>({...d,...p}),{})]);break}if(e.additionalProperties){n.push(["additionalProperties",_core.isBoolean.call(void 0, e.additionalProperties)?e.additionalProperties:x(e.additionalProperties,!0,r)]);break}n.push([t,void 0]);break}}if(s!==void 0&&(b.push(`export const ${r}Min = ${s};`),n.push(["min",`${r}Min`])),m!==void 0&&(b.push(`export const ${r}Max = ${m};`),n.push(["max",`${r}Max`])),u){let l=u.startsWith("/"),d=u.endsWith("/"),p=`new RegExp('${_core.escape.call(void 0, u.slice(l?1:0,d?-1:void 0))}')`;b.push(`export const ${r}RegExp = ${p};`),n.push(["regex",`${r}RegExp`])}return e.enum&&t!=="number"&&n.push(["enum",[`[${e.enum.map(l=>_core.isString.call(void 0, l)?`'${_core.escape.call(void 0, l)}'`:`${l}`).join(", ")}]`]]),o||n.push(["optional",void 0]),{functions:n,consts:_lodashuniq2.default.call(void 0, b)}},D=e=>{if(!Object.keys(e).length)return{zod:"",consts:""};let a="",r=n=>{let[t,o=""]=n;if(t==="allOf")return o.reduce((s,{functions:m})=>{let u=m.map(r).join(""),c=`${u.startsWith(".")?"zod":""}${u}`;return s?(s+=`.and(${c})`,s):(s+=c,s)},"");if(t==="oneOf"||t==="anyOf")return o.reduce((s,{functions:m})=>{let u=m.map(r).join(""),c=`${u.startsWith(".")?"zod":""}${u}`;return s?(s+=`.or(${c})`,s):(s+=c,s)},"");if(t==="additionalProperties"){let s=o.functions.map(r).join("");return`zod.record(zod.string(), ${`${s.startsWith(".")?"zod":""}${s}`})`}if(t==="object"){let s=D(o);return a+=s.consts,` ${s.zod}`}if(t==="array"){let s=o.functions.map(r).join("");return`.array(${s.startsWith(".")?"zod":""}${s})`}return`.${t}(${o})`};return a+=Object.entries(e).reduce((n,[t,o])=>n+o.consts.join(`
`),""),{zod:`zod.object({
  ${Object.entries(e).map(([n,t])=>{let o=t.functions.map(r).join("");return`"${n}": ${o.startsWith(".")?"zod":""}${o}`}).join(",")}
})`,consts:a}},F=(e,a)=>_core.isObject.call(void 0, e)?q(e,a):Array.isArray(e)?e.map(r=>F(r,a)):e,q=(e,a)=>{let{schema:r}=_core.resolveRef.call(void 0, e,a);return Object.entries(r).reduce((b,[n,t])=>(b[n]=F(t,a),b),{})},N=({operationName:e,body:a,verb:r},{pathRoute:b,context:n})=>{var h,E,G,M,w,I,A,H,L,Q;let t=n.specs[n.specKey].paths[b],o=(h=t==null?void 0:t[r])==null?void 0:h.parameters,s=(E=t==null?void 0:t[r])==null?void 0:E.requestBody,m=(M=(G=t==null?void 0:t[r])==null?void 0:G.responses)==null?void 0:M["200"],u=m?_core.resolveRef.call(void 0, m,n).schema:void 0,c=(I=(w=u==null?void 0:u.content)==null?void 0:w["application/json"])!=null&&I.schema?_core.resolveRef.call(void 0, u.content["application/json"].schema,n).schema:void 0,Z=(A=c==null?void 0:c.properties)!=null?A:{},B=Object.entries(Z).map(([i,j])=>{var y;let f=q(j,n);return{[i]:x(f,!!((y=c==null?void 0:c.required)!=null&&y.find(P=>P===i)),_core.camel.call(void 0, `${e}-response-${i}`))}}).reduce((i,j)=>({...i,...j}),{}),z=s?_core.resolveRef.call(void 0, s,n).schema:void 0,O=(L=(H=z==null?void 0:z.content)==null?void 0:H["application/json"])!=null&&L.schema?_core.resolveRef.call(void 0, z.content["application/json"].schema,n).schema:void 0,C=(Q=O==null?void 0:O.properties)!=null?Q:{},k=Object.entries(C).map(([i,j])=>{var y;let f=q(j,n);return{[i]:x(f,!!((y=O==null?void 0:O.required)!=null&&y.find(P=>P===i)),_core.camel.call(void 0, `${e}-body-${i}`))}}).reduce((i,j)=>({...i,...j}),{}),S=(o!=null?o:[]).reduce((i,j)=>{let{schema:f}=_core.resolveRef.call(void 0, j,n);if(!f.schema)return i;let y=q(f.schema,n),P=x(y,f.required,_core.camel.call(void 0, `${e}-${f.in}-${f.name}`));return f.in==="header"?{...i,headers:{...i.headers,[f.name]:P}}:f.in==="query"?{...i,queryParams:{...i.queryParams,[f.name]:P}}:f.in==="path"?{...i,params:{...i.params,[f.name]:P}}:i},{headers:{},queryParams:{},params:{}}),$=D(S.params),g=D(S.queryParams),l=D(S.headers),d=D(k),p=D(B);return!$.zod&&!g.zod&&!l.zod&&!d.zod&&!p.zod?"":[...$.consts?[$.consts]:[],...$.zod?[`export const ${e}Params = ${$.zod}`]:[],...g.consts?[g.consts]:[],...g.zod?[`export const ${e}QueryParams = ${g.zod}`]:[],...l.consts?[l.consts]:[],...l.zod?[`export const ${e}Header = ${l.zod}`]:[],...d.consts?[d.consts]:[],...d.zod?[`export const ${e}Body = ${d.zod}`]:[],...p.consts?[p.consts]:[],...p.zod?[`export const ${e}Response = ${p.zod}`]:[]].join(`

`)},J= exports.generateZod =(e,a)=>{let r=N(e,a);return{implementation:r?`${r}

`:"",imports:[]}},ee={client:J,dependencies:_},ne= exports.builder =()=>()=>ee,ce= exports.default =ne;exports.builder = ne; exports.default = ce; exports.generateZod = J; exports.getZodDependencies = _;
