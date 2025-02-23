"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[9682],{9983:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"icicle/golang-bindings/ecntt","title":"ECNTT","description":"ECNTT Method","source":"@site/versioned_docs/version-3.4.0/icicle/golang-bindings/ecntt.md","sourceDirName":"icicle/golang-bindings","slug":"/icicle/golang-bindings/ecntt","permalink":"/3.4.0/icicle/golang-bindings/ecntt","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-3.4.0/icicle/golang-bindings/ecntt.md","tags":[],"version":"3.4.0","lastUpdatedBy":"danny-shterman","lastUpdatedAt":1740318793000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"NTT","permalink":"/3.4.0/icicle/golang-bindings/ntt"},"next":{"title":"Vector operations","permalink":"/3.4.0/icicle/golang-bindings/vec-ops"}}');var r=t(74848),o=t(28453);const c={},s="ECNTT",l={},d=[{value:"ECNTT Method",id:"ecntt-method",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"NTT Configuration (NTTConfig)",id:"ntt-configuration-nttconfig",level:2},{value:"Fields",id:"fields",level:3},{value:"Default Configuration",id:"default-configuration",level:3},{value:"ECNTT Example",id:"ecntt-example",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"ecntt",children:"ECNTT"})}),"\n",(0,r.jsx)(n.h2,{id:"ecntt-method",children:"ECNTT Method"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"ECNtt[T any]()"})," function performs the Elliptic Curve Number Theoretic Transform (EC-NTT) on the input points slice, using the provided dir (direction), cfg (configuration), and stores the results in the results slice."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func ECNtt[T any](points core.HostOrDeviceSlice, dir core.NTTDir, cfg *core.NTTConfig[T], results core.HostOrDeviceSlice) runtime.EIcicleError\n"})}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"points"})}),": A slice of elliptic curve points (in projective coordinates) that will be transformed. The slice can be stored on the host or the device, as indicated by the ",(0,r.jsx)(n.code,{children:"core.HostOrDeviceSlice"})," type."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"dir"})}),": The direction of the EC-NTT transform, either ",(0,r.jsx)(n.code,{children:"core.KForward"})," or ",(0,r.jsx)(n.code,{children:"core.KInverse"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"cfg"})}),": A pointer to an ",(0,r.jsx)(n.code,{children:"NTTConfig"})," object, containing configuration options for the NTT operation."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"results"})}),": A slice that will store the transformed elliptic curve points (in projective coordinates). The slice can be stored on the host or the device, as indicated by the ",(0,r.jsx)(n.code,{children:"core.HostOrDeviceSlice"})," type."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"EIcicleError"})}),": A ",(0,r.jsx)(n.code,{children:"runtime.EIcicleError"})," value, which will be ",(0,r.jsx)(n.code,{children:"runtime.Success"})," if the EC-NTT operation was successful, or an error if something went wrong."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"ntt-configuration-nttconfig",children:"NTT Configuration (NTTConfig)"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"NTTConfig"})," structure holds configuration parameters for the NTT operation, allowing customization of its behavior to optimize performance based on the specifics of your protocol."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"type NTTConfig[T any] struct {\n\tStreamHandle       runtime.Stream\n\tCosetGen           T\n\tBatchSize          int32\n\tColumnsBatch       bool\n\tOrdering           Ordering\n\tareInputsOnDevice  bool\n\tareOutputsOnDevice bool\n\tIsAsync            bool\n\tExt                config_extension.ConfigExtensionHandler\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"StreamHandle"})}),": Specifies the stream (queue) to use for async execution."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"CosetGen"})}),": Coset generator. Used to perform coset (i)NTTs."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"BatchSize"})}),": The number of NTTs to compute in one operation, defaulting to 1."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"ColumnsBatch"})}),": If true the function will compute the NTTs over the columns of the input matrix and not over the rows."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Ordering"})}),": Ordering of inputs and outputs (",(0,r.jsx)(n.code,{children:"KNN"}),", ",(0,r.jsx)(n.code,{children:"KNR"}),", ",(0,r.jsx)(n.code,{children:"KRN"}),", ",(0,r.jsx)(n.code,{children:"KRR"}),"), affecting how data is arranged."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"areInputsOnDevice"})}),": Indicates if input scalars are located on the device."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"areOutputsOnDevice"})}),": Indicates if results are stored on the device."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"IsAsync"})}),": Controls whether the NTT operation runs asynchronously."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Ext"})}),": Extended configuration for backend."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"default-configuration",children:"Default Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.code,{children:"GetDefaultNTTConfig"})," to obtain a default configuration, customizable as needed."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func GetDefaultNTTConfig[T any](cosetGen T) NTTConfig[T]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"ecntt-example",children:"ECNTT Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/core"\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/curves/bn254"\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/curves/bn254/ecntt"\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/curves/bn254/ntt"\n\t"github.com/ingonyama-zk/icicle/v3/wrappers/golang/runtime"\n)\n\nfunc Main() {\n\t// Load backend using env path\n\truntime.LoadBackendFromEnvOrDefault()\n\t// Set Cuda device to perform\n\tdevice := runtime.CreateDevice("CUDA", 0)\n\truntime.SetDevice(&device)\n\t// Obtain the default NTT configuration with a predefined coset generator.\n\tcfg := ntt.GetDefaultNttConfig()\n\n\t// Define the size of the input scalars.\n\tsize := 1 << 18\n\n\t// Generate Points for the ECNTT operation.\n\tpoints := bn254.GenerateProjectivePoints(size)\n\n\t// Set the direction of the NTT (forward or inverse).\n\tdir := core.KForward\n\n\t// Allocate memory for the results of the NTT operation.\n\tresults := make(core.HostSlice[bn254.Projective], size)\n\n\t// Perform the NTT operation.\n\terr := ecntt.ECNtt(points, dir, &cfg, results)\n\tif err != runtime.Success {\n\t\tpanic("ECNTT operation failed")\n\t}\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>s});var i=t(96540);const r={},o=i.createContext(r);function c(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);