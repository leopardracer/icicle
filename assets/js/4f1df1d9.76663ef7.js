"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[712],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var r=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8906:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(8168),i=(n(6540),n(5680));n(1873);const a={},o="ECNTT",l={unversionedId:"icicle/rust-bindings/ecntt",id:"icicle/rust-bindings/ecntt",title:"ECNTT",description:"ECNTT Method",source:"@site/docs/icicle/rust-bindings/ecntt.md",sourceDirName:"icicle/rust-bindings",slug:"/icicle/rust-bindings/ecntt",permalink:"/icicle/rust-bindings/ecntt",editUrl:"https://github.com/ingonyama-zk/icicle/tree/main/docs/icicle/rust-bindings/ecntt.md",tags:[],version:"current",lastUpdatedBy:"nonam3e",lastUpdatedAt:1717321078,formattedLastUpdatedAt:"6/2/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"NTT",permalink:"/icicle/rust-bindings/ntt"},next:{title:"Vector Operations API",permalink:"/icicle/rust-bindings/vec-ops"}},c={},s=[{value:"ECNTT Method",id:"ecntt-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"ecntt"},"ECNTT"),(0,i.yg)("h2",{id:"ecntt-method"},"ECNTT Method"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"ecntt")," function computes the Elliptic Curve Number Theoretic Transform (EC-NTT) or its inverse on a batch of points of a curve."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-rust"},"pub fn ecntt<C: Curve>(\n    input: &(impl HostOrDeviceSlice<Projective<C>> + ?Sized),\n    dir: NTTDir,\n    cfg: &NTTConfig<C::ScalarField>,\n    output: &mut (impl HostOrDeviceSlice<Projective<C>> + ?Sized),\n) -> IcicleResult<()>\nwhere\n    C::ScalarField: FieldImpl,\n    <C::ScalarField as FieldImpl>::Config: ECNTT<C>,\n{\n    // ... function implementation ...\n}\n")),(0,i.yg)("h2",{id:"parameters"},"Parameters"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"input")),": The input data as a slice of ",(0,i.yg)("inlineCode",{parentName:"li"},"Projective<C>"),". This represents points on a specific elliptic curve ",(0,i.yg)("inlineCode",{parentName:"li"},"C"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"dir")),": The direction of the NTT. It can be ",(0,i.yg)("inlineCode",{parentName:"li"},"NTTDir::kForward")," for forward NTT or ",(0,i.yg)("inlineCode",{parentName:"li"},"NTTDir::kInverse")," for inverse NTT."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"cfg")),": The NTT configuration object of type ",(0,i.yg)("inlineCode",{parentName:"li"},"NTTConfig<C::ScalarField>"),". This object specifies parameters for the NTT computation, such as the batch size and algorithm to use."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"output")),": The output buffer to write the results into. This should be a slice of ",(0,i.yg)("inlineCode",{parentName:"li"},"Projective<C>")," with the same size as the input.")),(0,i.yg)("h2",{id:"return-value"},"Return Value"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"IcicleResult<()>")),": This function returns an ",(0,i.yg)("inlineCode",{parentName:"li"},"IcicleResult")," which is a wrapper type that indicates success or failure of the NTT computation. On success, it contains ",(0,i.yg)("inlineCode",{parentName:"li"},"Ok(())"),".")))}d.isMDXComponent=!0},1873:(e,t,n)=>{n(6540)}}]);