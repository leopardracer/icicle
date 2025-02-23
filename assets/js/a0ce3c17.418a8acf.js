"use strict";(self.webpackChunkicicle_docs=self.webpackChunkicicle_docs||[]).push([[9562],{5858:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"icicle/golang-bindings/ecntt","title":"ECNTT","description":"ECNTT Method","source":"@site/versioned_docs/version-2.8.0/icicle/golang-bindings/ecntt.md","sourceDirName":"icicle/golang-bindings","slug":"/icicle/golang-bindings/ecntt","permalink":"/2.8.0/icicle/golang-bindings/ecntt","draft":false,"unlisted":false,"editUrl":"https://github.com/ingonyama-zk/icicle/tree/main/docs/versioned_docs/version-2.8.0/icicle/golang-bindings/ecntt.md","tags":[],"version":"2.8.0","lastUpdatedBy":"leopardracer","lastUpdatedAt":1740336132000,"frontMatter":{},"sidebar":"GettingStartedSidebar","previous":{"title":"NTT","permalink":"/2.8.0/icicle/golang-bindings/ntt"},"next":{"title":"Vector operations","permalink":"/2.8.0/icicle/golang-bindings/vec-ops"}}');var r=i(74848),o=i(28453);const c={},s="ECNTT",l={},d=[{value:"ECNTT Method",id:"ecntt-method",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"NTT Configuration (NTTConfig)",id:"ntt-configuration-nttconfig",level:2},{value:"Fields",id:"fields",level:3},{value:"Default Configuration",id:"default-configuration",level:3},{value:"ECNTT Example",id:"ecntt-example",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"ecntt",children:"ECNTT"})}),"\n",(0,r.jsx)(n.h2,{id:"ecntt-method",children:"ECNTT Method"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"ECNtt[T any]()"})," function performs the Elliptic Curve Number Theoretic Transform (EC-NTT) on the input points slice, using the provided dir (direction), cfg (configuration), and stores the results in the results slice."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func ECNtt[T any](points core.HostOrDeviceSlice, dir core.NTTDir, cfg *core.NTTConfig[T], results core.HostOrDeviceSlice) core.IcicleError\n"})}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"points"})}),": A slice of elliptic curve points (in projective coordinates) that will be transformed. The slice can be stored on the host or the device, as indicated by the ",(0,r.jsx)(n.code,{children:"core.HostOrDeviceSlice"})," type."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"dir"})}),": The direction of the EC-NTT transform, either ",(0,r.jsx)(n.code,{children:"core.KForward"})," or ",(0,r.jsx)(n.code,{children:"core.KInverse"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"cfg"})}),": A pointer to an ",(0,r.jsx)(n.code,{children:"NTTConfig"})," object, containing configuration options for the NTT operation."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"results"})}),": A slice that will store the transformed elliptic curve points (in projective coordinates). The slice can be stored on the host or the device, as indicated by the ",(0,r.jsx)(n.code,{children:"core.HostOrDeviceSlice"})," type."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"CudaError"})}),": A ",(0,r.jsx)(n.code,{children:"core.IcicleError"})," value, which will be ",(0,r.jsx)(n.code,{children:"core.IcicleErrorCode(0)"})," if the EC-NTT operation was successful, or an error if something went wrong."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"ntt-configuration-nttconfig",children:"NTT Configuration (NTTConfig)"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"NTTConfig"})," structure holds configuration parameters for the NTT operation, allowing customization of its behavior to optimize performance based on the specifics of your protocol."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"type NTTConfig[T any] struct {\n    Ctx cr.DeviceContext\n    CosetGen T\n    BatchSize int32\n    ColumnsBatch bool\n    Ordering Ordering\n    areInputsOnDevice  bool\n    areOutputsOnDevice bool\n    IsAsync bool\n    NttAlgorithm NttAlgorithm\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Ctx"})}),": Device context containing details like device ID and stream ID."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"CosetGen"})}),": Coset generator used for coset (i)NTTs, defaulting to no coset being used."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"BatchSize"})}),": The number of NTTs to compute in one operation, defaulting to 1."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"ColumnsBatch"})}),": If true the function will compute the NTTs over the columns of the input matrix and not over the rows. Defaults to ",(0,r.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Ordering"})}),": Ordering of inputs and outputs (",(0,r.jsx)(n.code,{children:"KNN"}),", ",(0,r.jsx)(n.code,{children:"KNR"}),", ",(0,r.jsx)(n.code,{children:"KRN"}),", ",(0,r.jsx)(n.code,{children:"KRR"}),"), affecting how data is arranged."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"areInputsOnDevice"})}),": Indicates if input scalars are located on the device."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"areOutputsOnDevice"})}),": Indicates if results are stored on the device."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"IsAsync"})}),": Controls whether the NTT operation runs asynchronously."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"NttAlgorithm"})}),": Explicitly select the NTT algorithm. ECNTT supports running on ",(0,r.jsx)(n.code,{children:"Radix2"})," algoruithm."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"default-configuration",children:"Default Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.code,{children:"GetDefaultNTTConfig"})," to obtain a default configuration, customizable as needed."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func GetDefaultNTTConfig[T any](cosetGen T) NTTConfig[T]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"ecntt-example",children:"ECNTT Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/ingonyama-zk/icicle/v2/wrappers/golang/core"\n    cr "github.com/ingonyama-zk/icicle/v2/wrappers/golang/cuda_runtime"\n)\n\nfunc Main() {\n    // Obtain the default NTT configuration with a predefined coset generator.\n    cfg := GetDefaultNttConfig()\n    \n    // Define the size of the input scalars.\n    size := 1 << 18\n\n    // Generate Points for the ECNTT operation.\n    points := GenerateProjectivePoints(size)\n    \n    // Set the direction of the NTT (forward or inverse).\n    dir := core.KForward\n\n    // Allocate memory for the results of the NTT operation.\n    results := make(core.HostSlice[Projective], size)\n\n    // Perform the NTT operation.\n    err := ECNtt(points, dir, &cfg, results)\n    if err != cr.CudaSuccess {\n        panic("ECNTT operation failed")\n    }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>s});var t=i(96540);const r={},o=t.createContext(r);function c(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);