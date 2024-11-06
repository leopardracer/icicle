"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8574],{5680:(e,n,a)=>{a.d(n,{xA:()=>g,yg:()=>m});var t=a(6540);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=t.createContext({}),l=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},g=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),h=l(a),u=i,m=h["".concat(c,".").concat(u)]||h[u]||p[u]||r;return a?t.createElement(m,o(o({ref:n},g),{},{components:a})):t.createElement(m,o({ref:n},g))}));function m(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[h]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7602:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var t=a(8168),i=(a(6540),a(5680));a(1873);const r={},o="ICICLE Hashing in Golang",s={unversionedId:"icicle/golang-bindings/hash",id:"icicle/golang-bindings/hash",title:"ICICLE Hashing in Golang",description:"For a general overview of ICICLE's hashing logic and supported algorithms, check out the ICICLE Hashing Overview.",source:"@site/docs/icicle/golang-bindings/hash.md",sourceDirName:"icicle/golang-bindings",slug:"/icicle/golang-bindings/hash",permalink:"/icicle/golang-bindings/hash",editUrl:"https://github.com/ingonyama-zk/icicle/tree/main/docs/icicle/golang-bindings/hash.md",tags:[],version:"current",lastUpdatedBy:"Otsar",lastUpdatedAt:1730924803,formattedLastUpdatedAt:"11/6/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"Multi GPU APIs",permalink:"/icicle/golang-bindings/multi-gpu"},next:{title:"Merkle Tree API Documentation (Golang)",permalink:"/icicle/golang-bindings/merkle"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Importing Hash Functions",id:"importing-hash-functions",level:2},{value:"API Usage",id:"api-usage",level:2},{value:"1. Creating a Hasher Instance",id:"1-creating-a-hasher-instance",level:3},{value:"2. Hashing a Simple String",id:"2-hashing-a-simple-string",level:3}],g={toc:l},h="wrapper";function p(e){let{components:n,...a}=e;return(0,i.yg)(h,(0,t.A)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"icicle-hashing-in-golang"},"ICICLE Hashing in Golang"),(0,i.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("p",{parentName:"div"},"For a general overview of ICICLE's hashing logic and supported algorithms, check out the ",(0,i.yg)("a",{parentName:"p",href:"/icicle/primitives/hash"},"ICICLE Hashing Overview"),"."))),(0,i.yg)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Warning")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("p",{parentName:"div"},"Using the Hash package requires ",(0,i.yg)("inlineCode",{parentName:"p"},"go")," version 1.22"))),(0,i.yg)("h2",{id:"overview"},"Overview"),(0,i.yg)("p",null,"The ICICLE library provides Golang bindings for hashing using a variety of cryptographic hash functions. These hash functions are optimized for both general-purpose data and cryptographic operations such as multi-scalar multiplication, commitment generation, and Merkle tree construction."),(0,i.yg)("p",null,"This guide will show you how to use the ICICLE hashing API in Golang with examples for common hash algorithms, such as Keccak-256, Keccak-512, SHA3-256, SHA3-512, and Blake2s."),(0,i.yg)("h2",{id:"importing-hash-functions"},"Importing Hash Functions"),(0,i.yg)("p",null,"To use the hashing functions in Golang, you only need to import the hash package from the ICICLE Golang bindings. For example:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/ingonyama-zk/icicle/v3/wrappers/golang/hash"\n)\n')),(0,i.yg)("h2",{id:"api-usage"},"API Usage"),(0,i.yg)("h3",{id:"1-creating-a-hasher-instance"},"1. Creating a Hasher Instance"),(0,i.yg)("p",null,"Each hash algorithm can be instantiated by calling its respective constructor. The ",(0,i.yg)("inlineCode",{parentName:"p"},"New<Hash>Hasher")," function takes an optional default input size, which can be set to 0 unless required for a specific use case."),(0,i.yg)("p",null,"Example for Keccak-256:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"keccakHasher := hash.NewKeccak256Hasher(0 /* default input size */)\n")),(0,i.yg)("h3",{id:"2-hashing-a-simple-string"},"2. Hashing a Simple String"),(0,i.yg)("p",null,"Once you have created a hasher instance, you can hash any input data, such as strings or byte arrays, and store the result in an output buffer.\nHere\u2019s how to hash a simple string using Keccak-256:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'import (\n  "encoding/hex"\n\n  "github.com/ingonyama-zk/icicle/v3/wrappers/golang/hash"\n)\n\ninputStrAsBytes := []bytes("I like ICICLE! It\'s so fast and simple")\nkeccakHasher, error := hash.NewKeccak256Hasher(0 /*default chunk size*/)\nif error != runtime.Success {\n  fmt.Println("error:", error)\n  return\n}\n\noutputRef := make([]byte, 32)\nkeccakHasher.Hash(\n  core.HostSliceFromElements(inputStrAsBytes),\n  core.HostSliceFromElements(outputRef),\n  core.GetDefaultHashConfig(),\n)\n\n// convert the output to a hex string for easy readability\noutputAsHexStr = hex.EncodeToString(outputRef)\nfmt.Println!("Hash(`", input_str, "`) =", &outputAsHexStr)\n')),(0,i.yg)("p",null,"Using other hash algorithms is similar and only requires replacing the Hasher constructor with the relevant hashing algorithm."))}p.isMDXComponent=!0},1873:(e,n,a)=>{a(6540)}}]);