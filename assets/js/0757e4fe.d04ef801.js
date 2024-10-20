"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6208],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var i=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=i.createContext({}),s=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return i.createElement(c.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=s(t),m=a,d=g["".concat(c,".").concat(m)]||g[m]||u[m]||r;return t?i.createElement(d,o(o({ref:n},p),{},{components:t})):i.createElement(d,o({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[g]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6163:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=t(8168),a=(t(6540),t(5680));t(1873);const r={},o="Vector Operations",l={unversionedId:"icicle/golang-bindings/vec-ops",id:"icicle/golang-bindings/vec-ops",title:"Vector Operations",description:"Overview",source:"@site/docs/icicle/golang-bindings/vec-ops.md",sourceDirName:"icicle/golang-bindings",slug:"/icicle/golang-bindings/vec-ops",permalink:"/icicle/golang-bindings/vec-ops",editUrl:"https://github.com/ingonyama-zk/icicle/tree/main/docs/icicle/golang-bindings/vec-ops.md",tags:[],version:"current",lastUpdatedBy:"Yuval Shekel",lastUpdatedAt:1729421899,formattedLastUpdatedAt:"10/20/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"ECNTT",permalink:"/icicle/golang-bindings/ecntt"},next:{title:"Multi GPU APIs",permalink:"/icicle/golang-bindings/multi-gpu"}},c={},s=[{value:"Overview",id:"overview",level:2},{value:"VecOps API Documentation",id:"vecops-api-documentation",level:2},{value:"Example",id:"example",level:3},{value:"Vector addition",id:"vector-addition",level:4},{value:"Vector Subtraction",id:"vector-subtraction",level:4},{value:"Vector Multiplication",id:"vector-multiplication",level:4},{value:"VecOps Method",id:"vecops-method",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Return Value",id:"return-value",level:4},{value:"VecOpsConfig",id:"vecopsconfig",level:3},{value:"Fields",id:"fields",level:4},{value:"Default Configuration",id:"default-configuration",level:4},{value:"MatrixTranspose API Documentation",id:"matrixtranspose-api-documentation",level:2},{value:"Function",id:"function",level:3},{value:"Parameters",id:"parameters-1",level:2},{value:"Return Value",id:"return-value-1",level:2},{value:"Example Usage",id:"example-usage",level:2}],p={toc:s},g="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(g,(0,i.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"vector-operations"},"Vector Operations"),(0,a.yg)("h2",{id:"overview"},"Overview"),(0,a.yg)("p",null,"Icicle exposes a number of vector operations which a user can use:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The VecOps API provides efficient vector operations such as addition, subtraction, and multiplication."),(0,a.yg)("li",{parentName:"ul"},"MatrixTranspose API allows a user to perform a transpose on a vector representation of a matrix")),(0,a.yg)("h2",{id:"vecops-api-documentation"},"VecOps API Documentation"),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("h4",{id:"vector-addition"},"Vector addition"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "github.com/ingonyama-zk/icicle/v3/wrappers/golang/core"\n    "github.com/ingonyama-zk/icicle/v3/wrappers/golang/curves/bn254"\n    "github.com/ingonyama-zk/icicle/v3/wrappers/golang/curves/bn254/vecOps"\n    "github.com/ingonyama-zk/icicle/v3/wrappers/golang/runtime"\n)\n\nfunc main() {\n    testSize := 1 << 12\n    a := bn254.GenerateScalars(testSize)\n    b := bn254.GenerateScalars(testSize)\n    out := make(core.HostSlice[bn254.ScalarField], testSize)\n    cfg := core.DefaultVecOpsConfig()\n\n    // Perform vector multiplication\n    err := vecOps.VecOp(a, b, out, cfg, core.Add)\n    if err != runtime.Success {\n        panic("Vector addition failed")\n    }\n}\n')),(0,a.yg)("h4",{id:"vector-subtraction"},"Vector Subtraction"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "github.com/ingonyama-zk/icicle/v3/wrappers/golang/core"\n    "github.com/ingonyama-zk/icicle/v3/wrappers/golang/curves/bn254"\n    "github.com/ingonyama-zk/icicle/v3/wrappers/golang/curves/bn254/vecOps"\n    "github.com/ingonyama-zk/icicle/v3/wrappers/golang/runtime"\n)\n\nfunc main() {\n    testSize := 1 << 12\n    a := bn254.GenerateScalars(testSize)\n    b := bn254.GenerateScalars(testSize)\n    out := make(core.HostSlice[bn254.ScalarField], testSize)\n    cfg := core.DefaultVecOpsConfig()\n\n    // Perform vector multiplication\n    err := vecOps.VecOp(a, b, out, cfg, core.Sub)\n    if err != runtime.Success {\n        panic("Vector subtraction failed")\n    }\n}\n')),(0,a.yg)("h4",{id:"vector-multiplication"},"Vector Multiplication"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "github.com/ingonyama-zk/icicle/v3/wrappers/golang/core"\n    "github.com/ingonyama-zk/icicle/v3/wrappers/golang/curves/bn254"\n    "github.com/ingonyama-zk/icicle/v3/wrappers/golang/curves/bn254/vecOps"\n    "github.com/ingonyama-zk/icicle/v3/wrappers/golang/runtime"\n)\n\nfunc main() {\n    testSize := 1 << 12\n    a := bn254.GenerateScalars(testSize)\n    b := bn254.GenerateScalars(testSize)\n    out := make(core.HostSlice[bn254.ScalarField], testSize)\n    cfg := core.DefaultVecOpsConfig()\n\n    // Perform vector multiplication\n    err := vecOps.VecOp(a, b, out, cfg, core.Mul)\n    if err != runtime.Success {\n        panic("Vector multiplication failed")\n    }\n}\n')),(0,a.yg)("h3",{id:"vecops-method"},"VecOps Method"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"func VecOp(a, b, out core.HostOrDeviceSlice, config core.VecOpsConfig, op core.VecOps) (ret runtime.EIcicleError)\n")),(0,a.yg)("h4",{id:"parameters"},"Parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"a")),": The first input vector."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"b")),": The second input vector."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"out")),": The output vector where the result of the operation will be stored."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"config")),": A ",(0,a.yg)("inlineCode",{parentName:"li"},"VecOpsConfig")," object containing various configuration options for the vector operations."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"op")),": The operation to perform, specified as one of the constants (",(0,a.yg)("inlineCode",{parentName:"li"},"Sub"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"Add"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"Mul"),") from the ",(0,a.yg)("inlineCode",{parentName:"li"},"VecOps")," type.")),(0,a.yg)("h4",{id:"return-value"},"Return Value"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"EIcicleError")),": A ",(0,a.yg)("inlineCode",{parentName:"li"},"runtime.EIcicleError")," value, which will be ",(0,a.yg)("inlineCode",{parentName:"li"},"runtime.Success")," if the operation was successful, or an error if something went wrong.")),(0,a.yg)("h3",{id:"vecopsconfig"},"VecOpsConfig"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"VecOpsConfig")," structure holds configuration parameters for the vector operations, allowing customization of its behavior."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"type VecOpsConfig struct {\n    StreamHandle     runtime.Stream\n    isAOnDevice      bool\n    isBOnDevice      bool\n    isResultOnDevice bool\n    IsAsync          bool\n    Ext              config_extension.ConfigExtensionHandler\n}\n")),(0,a.yg)("h4",{id:"fields"},"Fields"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"StreamHandle")),": Specifies the stream (queue) to use for async execution."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"isAOnDevice")),": Indicates if vector ",(0,a.yg)("inlineCode",{parentName:"li"},"a")," is located on the device."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"isBOnDevice")),": Indicates if vector ",(0,a.yg)("inlineCode",{parentName:"li"},"b")," is located on the device."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"isResultOnDevice")),": Specifies where the result vector should be stored (device or host memory)."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"IsAsync")),": Controls whether the vector operation runs asynchronously."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"Ext")),": Extended configuration for backend.")),(0,a.yg)("h4",{id:"default-configuration"},"Default Configuration"),(0,a.yg)("p",null,"Use ",(0,a.yg)("inlineCode",{parentName:"p"},"DefaultVecOpsConfig")," to obtain a default configuration, customizable as needed."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"func DefaultVecOpsConfig() VecOpsConfig\n")),(0,a.yg)("h2",{id:"matrixtranspose-api-documentation"},"MatrixTranspose API Documentation"),(0,a.yg)("p",null,"This section describes the functionality of the ",(0,a.yg)("inlineCode",{parentName:"p"},"TransposeMatrix")," function used for matrix transposition."),(0,a.yg)("p",null,"The function takes a matrix represented as a 1D slice and transposes it, storing the result in another 1D slice."),(0,a.yg)("h3",{id:"function"},"Function"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"func TransposeMatrix(in, out core.HostOrDeviceSlice, columnSize, rowSize int, config core.VecOpsConfig) runtime.EIcicleError\n")),(0,a.yg)("h2",{id:"parameters-1"},"Parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"in")),": The input matrix is a ",(0,a.yg)("inlineCode",{parentName:"li"},"core.HostOrDeviceSlice"),", stored as a 1D slice."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"out")),": The output matrix is a ",(0,a.yg)("inlineCode",{parentName:"li"},"core.HostOrDeviceSlice"),", which will be the transpose of the input matrix, stored as a 1D slice."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"columnSize")),": The number of columns in the input matrix."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"rowSize")),": The number of rows in the input matrix."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"config")),": A ",(0,a.yg)("inlineCode",{parentName:"li"},"VecOpsConfig")," object containing various configuration options for the vector operations.")),(0,a.yg)("h2",{id:"return-value-1"},"Return Value"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"EIcicleError")),": A ",(0,a.yg)("inlineCode",{parentName:"li"},"runtime.EIcicleError")," value, which will be ",(0,a.yg)("inlineCode",{parentName:"li"},"runtime.Success")," if the operation was successful, or an error if something went wrong.")),(0,a.yg)("h2",{id:"example-usage"},"Example Usage"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"var input = make(core.HostSlice[ScalarField], 20)\nvar output = make(core.HostSlice[ScalarField], 20)\n\n// Populate the input matrix\n// ...\n\n// Get device context\ncfg, _ := runtime.GetDefaultDeviceContext()\n\n// Transpose the matrix\nerr := TransposeMatrix(input, output, 5, 4, cfg)\nif err != runtime.Success {\n    // Handle the error\n}\n\n// Use the transposed matrix\n// ...\n")),(0,a.yg)("p",null,"In this example, the ",(0,a.yg)("inlineCode",{parentName:"p"},"TransposeMatrix")," function is used to transpose a 5x4 matrix stored in a 1D slice. The input and output slices are stored on the host (CPU), and the operation is executed synchronously."))}u.isMDXComponent=!0},1873:(e,n,t)=>{t(6540)}}]);