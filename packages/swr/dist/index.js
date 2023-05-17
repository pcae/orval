"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _core = require('@orval/core');var V=[{exports:[{name:"axios",default:!0,values:!0,syntheticDefaultImport:!0},{name:"AxiosRequestConfig"},{name:"AxiosResponse"},{name:"AxiosError"}],dependency:"axios"}],M=[{exports:[{name:"useSwr",values:!0,default:!0},{name:"SWRConfiguration"},{name:"Key"}],dependency:"swr"}],N= exports.getSwrDependencies =e=>[...e?[]:V,...M],j=({headers:e,queryParams:s,operationName:i,response:o,mutator:r,body:n,props:a,verb:l,formData:y,formUrlEncoded:g,override:t},{route:u,context:w})=>{var x,E;let c=(t==null?void 0:t.requestOptions)!==!1,$=(t==null?void 0:t.formData)!==!1,p=(t==null?void 0:t.formUrlEncoded)!==!1,f=!!((E=(x=w.tsconfig)==null?void 0:x.compilerOptions)!=null&&E.exactOptionalPropertyTypes),T=_core.VERBS_WITH_BODY.includes(l),G=_core.isSyntheticDefaultImportsAllow.call(void 0, w.tsconfig),O=_core.generateFormDataAndUrlEncodedFunction.call(void 0, {formData:y,formUrlEncoded:g,body:n,isFormData:$,isFormUrlEncoded:p});if(r){let R=_core.generateMutatorConfig.call(void 0, {route:u,body:n,headers:e,queryParams:s,response:o,verb:l,isFormData:$,isFormUrlEncoded:p,hasSignal:!1,isBodyVerb:T,isExactOptionalPropertyTypes:f}),D=(r==null?void 0:r.bodyTypeName)&&n.definition?_core.toObjectString.call(void 0, a,"implementation").replace(new RegExp(`(\\w*):\\s?${n.definition}`),`$1: ${r.bodyTypeName}<${n.definition}>`):_core.toObjectString.call(void 0, a,"implementation"),q=c?_core.generateMutatorRequestOptions.call(void 0, t==null?void 0:t.requestOptions,r.hasSecondArg):"";return`export const ${i} = (
    ${D}
 ${c&&r.hasSecondArg?`options?: SecondParameter<typeof ${r.name}>`:""}) => {${O}
      return ${r.name}<${o.definition.success||"unknown"}>(
      ${R},
      ${q});
    }
  `}let P=_core.generateOptions.call(void 0, {route:u,body:n,headers:e,queryParams:s,response:o,verb:l,requestOptions:t==null?void 0:t.requestOptions,isFormData:$,isFormUrlEncoded:p,isExactOptionalPropertyTypes:f,hasSignal:!1});return`export const ${i} = (
    ${_core.toObjectString.call(void 0, a,"implementation")} ${c?`options?: AxiosRequestConfig
`:""} ): Promise<AxiosResponse<${o.definition.success||"unknown"}>> => {${O}
    return axios${G?"":".default"}.${l}(${P});
  }
`},W=({operationName:e,mutator:s,isRequestOptions:i})=>{let o=`SWRConfiguration<Awaited<ReturnType<typeof ${e}>>, TError> & { swrKey?: Key, enabled?: boolean }`;return i?`options?: { swr?:${o}, ${s?s!=null&&s.hasSecondArg?`request?: SecondParameter<typeof ${s.name}>`:"":"axios?: AxiosRequestConfig"} }
`:`swrOptions?: ${o}`},_=({operationName:e,swrKeyFnName:s,swrProperties:i,swrKeyProperties:o,params:r,mutator:n,isRequestOptions:a,response:l,swrOptions:y,props:g})=>{var $;let t=_core.toObjectString.call(void 0, g,"implementation"),u=i,w=`const isEnabled = swrOptions?.enabled !== false${r.length?` && !!(${r.map(({name:p})=>p).join(" && ")})`:""}
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? ${s}(${o}) : null);`,c=`AxiosError<${l.definition.errors||"unknown"}>`;return n&&(c=n.hasErrorType?`ErrorType<${l.definition.errors||"unknown"}>`:l.definition.errors||"unknown"),`
export type ${_core.pascal.call(void 0, e)}QueryResult = NonNullable<Awaited<ReturnType<typeof ${e}>>>
export type ${_core.pascal.call(void 0, e)}QueryError = ${c}

export const ${_core.camel.call(void 0, `use-${e}`)} = <TError = ${c}>(
 ${t} ${W({operationName:e,mutator:n,isRequestOptions:a})}
  ) => {

  ${a?`const {swr: swrOptions${n?n!=null&&n.hasSecondArg?", request: requestOptions":"":", axios: axiosOptions"}} = options ?? {}`:""}

  ${w}
  const swrFn = () => ${e}(${u}${u?", ":""}${a?n?n!=null&&n.hasSecondArg?"requestOptions":"":"axiosOptions":""});

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, ${y.options?`{
    ${($=_core.stringify.call(void 0, y.options))==null?void 0:$.slice(1,-1)}
    ...swrOptions
  }`:"swrOptions"})

  return {
    swrKey,
    ...query
  }
}
`},U=({queryParams:e,operationName:s,body:i,props:o,verb:r,params:n,override:a,mutator:l,response:y},{route:g})=>{let t=(a==null?void 0:a.requestOptions)!==!1;if(r!==_core.Verbs.GET)return"";let u=o.map(({name:p,type:f})=>f===_core.GetterPropType.BODY?i.implementation:p).join(","),w=o.filter(p=>p.type!==_core.GetterPropType.HEADER).map(({name:p,type:f})=>f===_core.GetterPropType.BODY?i.implementation:p).join(","),c=_core.camel.call(void 0, `get-${s}-key`),$=_core.toObjectString.call(void 0, o.filter(p=>p.type!==_core.GetterPropType.HEADER),"implementation");return`export const ${c} = (${$}) => [\`${g}\`${e?", ...(params ? [params]: [])":""}${i.implementation?`, ${i.implementation}`:""}] as const;

    ${_({operationName:s,swrKeyFnName:c,swrProperties:u,swrKeyProperties:w,params:n,props:o,mutator:l,isRequestOptions:t,response:y,swrOptions:a.swr})}
`},Y= exports.generateSwrHeader =({isRequestOptions:e,isMutator:s,hasAwaitedType:i})=>`
  ${i?"":`type AwaitedInput<T> = PromiseLike<T> | T;

      type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

`}
  ${e&&s?`// eslint-disable-next-line
  type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

`:""}`,Q= exports.generateSwr =(e,s)=>{let i=_core.generateVerbImports.call(void 0, e),o=j(e,s),r=U(e,s);return{implementation:`${o}

${r}`,imports:i}},L={client:Q,header:Y,dependencies:N},X= exports.builder =()=>()=>L,ae= exports.default =X;exports.builder = X; exports.default = ae; exports.generateSwr = Q; exports.generateSwrHeader = Y; exports.getSwrDependencies = N;
