"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6943],{5680:(e,n,r)=>{r.d(n,{xA:()=>m,yg:()=>d});var a=r(6540);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function t(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,a,i=function(e,n){if(null==e)return{};var r,a,i={},t=Object.keys(e);for(a=0;a<t.length;a++)r=t[a],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)r=t[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=a.createContext({}),s=function(e){var n=a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},m=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var r=e.components,i=e.mdxType,t=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),g=s(r),p=i,d=g["".concat(c,".").concat(p)]||g[p]||u[p]||t;return r?a.createElement(d,o(o({ref:n},m),{},{components:r})):a.createElement(d,o({ref:n},m))}));function d(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var t=r.length,o=new Array(t);o[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[g]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<t;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},479:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>s});var a=r(8168),i=(r(6540),r(5680));r(1873);const t={},o="ICICLE Golang Usage Guide",l={unversionedId:"icicle/programmers_guide/go",id:"icicle/programmers_guide/go",title:"ICICLE Golang Usage Guide",description:"Overview",source:"@site/docs/icicle/programmers_guide/go.md",sourceDirName:"icicle/programmers_guide",slug:"/icicle/programmers_guide/go",permalink:"/icicle/programmers_guide/go",editUrl:"https://github.com/ingonyama-zk/icicle/tree/main/docs/icicle/programmers_guide/go.md",tags:[],version:"current",lastUpdatedBy:"Otsar",lastUpdatedAt:1730924803,formattedLastUpdatedAt:"11/6/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"Icicle Rust Usage Guide",permalink:"/icicle/programmers_guide/rust"},next:{title:"Architecture Overview",permalink:"/icicle/arch_overview"}},c={},s=[{value:"Overview",id:"overview",level:2},{value:"Device Management",id:"device-management",level:2},{value:"Loading a Backend",id:"loading-a-backend",level:3},{value:"Setting and Getting Active Device",id:"setting-and-getting-active-device",level:3},{value:"Querying Device Information",id:"querying-device-information",level:3},{value:"Memory Management",id:"memory-management",level:2},{value:"Allocating and Freeing Memory",id:"allocating-and-freeing-memory",level:3},{value:"Asynchronous Memory Operations",id:"asynchronous-memory-operations",level:3},{value:"Querying Available Memory",id:"querying-available-memory",level:3},{value:"Setting Memory Values",id:"setting-memory-values",level:3},{value:"Data Transfer",id:"data-transfer",level:2},{value:"Explicit Data Transfers",id:"explicit-data-transfers",level:3},{value:"Stream Management",id:"stream-management",level:2},{value:"Creating and Destroying Streams",id:"creating-and-destroying-streams",level:3},{value:"Synchronization",id:"synchronization",level:2},{value:"Synchronizing Streams and Devices",id:"synchronizing-streams-and-devices",level:3},{value:"Device Properties",id:"device-properties",level:2},{value:"Checking Device Availability",id:"checking-device-availability",level:3},{value:"Querying Device Properties",id:"querying-device-properties",level:3},{value:"Compute APIs",id:"compute-apis",level:2},{value:"Multi-Scalar Multiplication (MSM) Example",id:"multi-scalar-multiplication-msm-example",level:3},{value:"Polynomial Operations Example",id:"polynomial-operations-example",level:3},{value:"Error Handling",id:"error-handling",level:2},{value:"Checking for Errors",id:"checking-for-errors",level:3}],m={toc:s},g="wrapper";function u(e){let{components:n,...r}=e;return(0,i.yg)(g,(0,a.A)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"icicle-golang-usage-guide"},"ICICLE Golang Usage Guide"),(0,i.yg)("h2",{id:"overview"},"Overview"),(0,i.yg)("p",null,"This guide covers the usage of ICICLE's Golang API, including device management, memory operations, data transfer, synchronization, and compute APIs."),(0,i.yg)("h2",{id:"device-management"},"Device Management"),(0,i.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("p",{parentName:"div"},"See all ICICLE runtime APIs in ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/blob/main/wrappers/golang/runtime/runtime.go"},"runtime.go")))),(0,i.yg)("h3",{id:"loading-a-backend"},"Loading a Backend"),(0,i.yg)("p",null,"The backend can be loaded from a specific path or from an environment variable. This is essential for setting up the computing environment."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'import "github.com/ingonyama-zk/icicle/v3/wrappers/golang/runtime"\n\nresult := runtime.LoadBackendFromEnvOrDefault()\n// or load from custom install dir\nresult := runtime.LoadBackend("/path/to/backend/installdir", true)\n')),(0,i.yg)("h3",{id:"setting-and-getting-active-device"},"Setting and Getting Active Device"),(0,i.yg)("p",null,"You can set the active device for the current thread and retrieve it when needed:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'device = runtime.CreateDevice("CUDA", 0) // or other\nresult := runtime.SetDevice(device)\n// or query current (thread) device \nactiveDevice := runtime.GetActiveDevice()\n')),(0,i.yg)("h3",{id:"querying-device-information"},"Querying Device Information"),(0,i.yg)("p",null,"Retrieve the number of available devices and check if a pointer is allocated on the host or on the active device:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"numDevices := runtime.GetDeviceCount()\n\nvar ptr unsafe.Pointer\nisHostMemory = runtime.IsHostMemory(ptr)\nisDeviceMemory = runtime.IsActiveDeviceMemory(ptr)\n")),(0,i.yg)("h2",{id:"memory-management"},"Memory Management"),(0,i.yg)("h3",{id:"allocating-and-freeing-memory"},"Allocating and Freeing Memory"),(0,i.yg)("p",null,"Memory can be allocated and freed on the active device:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"ptr, err := runtime.Malloc(1024) // Allocate 1024 bytes\nerr := runtime.Free(ptr) // Free the allocated memory\n")),(0,i.yg)("h3",{id:"asynchronous-memory-operations"},"Asynchronous Memory Operations"),(0,i.yg)("p",null,"You can perform memory allocation and deallocation asynchronously using streams:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"stream, err := runtime.CreateStream()\n\nptr, err := runtime.MallocAsync(1024, stream)\nerr = runtime.FreeAsync(ptr, stream)\n")),(0,i.yg)("h3",{id:"querying-available-memory"},"Querying Available Memory"),(0,i.yg)("p",null,"Retrieve the total and available memory on the active device:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"size_t total_memory, available_memory;\navailableMemory, err := runtime.GetAvailableMemory()\nfreeMemory := availableMemory.Free\ntotalMemory := availableMemory.Total\n")),(0,i.yg)("h3",{id:"setting-memory-values"},"Setting Memory Values"),(0,i.yg)("p",null,"Set memory to a specific value on the active device, synchronously or asynchronously:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"err := runtime.Memset(ptr, 0, 1024) // Set 1024 bytes to 0\nerr := runtime.MemsetAsync(ptr, 0, 1024, stream)\n")),(0,i.yg)("h2",{id:"data-transfer"},"Data Transfer"),(0,i.yg)("h3",{id:"explicit-data-transfers"},"Explicit Data Transfers"),(0,i.yg)("p",null,"To avoid device-inference overhead, use explicit copy functions:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"result := runtime.CopyToHost(host_dst, device_src, size)\nresult := runtime.CopyToHostAsync(host_dst, device_src, size, stream)\nresult := runtime.CopyToDevice(device_dst, host_src, size)\nresult := runtime.CopyToDeviceAsync(device_dst, host_src, size, stream)\n")),(0,i.yg)("h2",{id:"stream-management"},"Stream Management"),(0,i.yg)("h3",{id:"creating-and-destroying-streams"},"Creating and Destroying Streams"),(0,i.yg)("p",null,"Streams are used to manage asynchronous operations:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"stream, err := runtime.CreateStream()\nerr = runtime.DestroyStream(stream)\n")),(0,i.yg)("h2",{id:"synchronization"},"Synchronization"),(0,i.yg)("h3",{id:"synchronizing-streams-and-devices"},"Synchronizing Streams and Devices"),(0,i.yg)("p",null,"Ensure all previous operations on a stream or device are completed before proceeding:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"err := runtime.StreamSynchronize(stream)\nerr := runtime.DeviceSynchronize()\n")),(0,i.yg)("h2",{id:"device-properties"},"Device Properties"),(0,i.yg)("h3",{id:"checking-device-availability"},"Checking Device Availability"),(0,i.yg)("p",null,"Check if a device is available and retrieve a list of registered devices:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'dev := runtime.CreateDevice("CPU", 0)\nisCPUAvail := runtime.IsDeviceAvailable(dev)\n')),(0,i.yg)("h3",{id:"querying-device-properties"},"Querying Device Properties"),(0,i.yg)("p",null,"Retrieve properties of the active device:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"properties, err := runtime.GetDeviceProperties(properties);\n\n/******************/\n// where DeviceProperties is\ntype DeviceProperties struct {\n  UsingHostMemory      bool   // Indicates if the device uses host memory\n  NumMemoryRegions     int32  // Number of memory regions available on the device\n  SupportsPinnedMemory bool   // Indicates if the device supports pinned memory\n}\n")),(0,i.yg)("h2",{id:"compute-apis"},"Compute APIs"),(0,i.yg)("h3",{id:"multi-scalar-multiplication-msm-example"},"Multi-Scalar Multiplication (MSM) Example"),(0,i.yg)("p",null,"Icicle provides high-performance compute APIs such as the Multi-Scalar Multiplication (MSM) for cryptographic operations. Here's a simple example of how to use the MSM API."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n\n    "github.com/ingonyama-zk/icicle/v3/wrappers/golang/core"\n    "github.com/ingonyama-zk/icicle/v3/wrappers/golang/runtime"\n\n    "github.com/ingonyama-zk/icicle/v3/wrappers/golang/curves/bn254"\n    bn254Msm "github.com/ingonyama-zk/icicle/v3/wrappers/golang/curves/bn254/msm"\n)\n\nfunc main() {\n\n    // Load installed backends\n    runtime.LoadBackendFromEnvOrDefault()\n\n    // trying to choose CUDA if available, or fallback to CPU otherwise (default device)\n    deviceCuda := runtime.CreateDevice("CUDA", 0) // GPU-0\n    if runtime.IsDeviceAvailable(&deviceCuda) {\n        runtime.SetDevice(&deviceCuda)\n    } // else we stay on CPU backend\n\n    // Setup inputs\n    const size = 1 << 18\n\n    // Generate random inputs\n    scalars := bn254.GenerateScalars(size)\n    points := bn254.GenerateAffinePoints(size)\n\n    // (optional) copy scalars to device memory explicitly\n    var scalarsDevice core.DeviceSlice\n    scalars.CopyToDevice(&scalarsDevice, true)\n\n    // MSM configuration\n    cfgBn254 := core.GetDefaultMSMConfig()\n\n    // allocate memory for the result\n    result := make(core.HostSlice[bn254.Projective], 1)\n\n    // execute bn254 MSM on device\n    err := bn254Msm.Msm(scalarsDevice, points, &cfgBn254, result)\n\n    // Check for errors\n    if err != runtime.Success {\n        errorString := fmt.Sprint(\n            "bn254 Msm failed: ", err)\n        panic(errorString)\n    }\n\n    // free explicitly allocated device memory\n    scalarsDevice.Free()\n}\n')),(0,i.yg)("h3",{id:"polynomial-operations-example"},"Polynomial Operations Example"),(0,i.yg)("p",null,"Here's another example demonstrating polynomial operations using Icicle:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n\n    "github.com/ingonyama-zk/icicle/v3/wrappers/golang/core"\n    "github.com/ingonyama-zk/icicle/v3/wrappers/golang/runtime"\n\n    "github.com/ingonyama-zk/icicle/v3/wrappers/golang/fields/babybear"\n    "github.com/ingonyama-zk/icicle/v3/wrappers/golang/fields/babybear/ntt"\n    "github.com/ingonyama-zk/icicle/v3/wrappers/golang/fields/babybear/polynomial"\n)\n\nfunc initBabybearDomain() runtime.EIcicleError {\n    cfgInitDomain := core.GetDefaultNTTInitDomainConfig()\n    rouIcicle := babybear.ScalarField{}\n    rouIcicle.FromUint32(1461624142)\n    return ntt.InitDomain(rouIcicle, cfgInitDomain)\n}\n\nfunc init() {\n    // Load installed backends\n    runtime.LoadBackendFromEnvOrDefault()\n\n    // trying to choose CUDA if available, or fallback to CPU otherwise (default device)\n    deviceCuda := runtime.CreateDevice("CUDA", 0) // GPU-0\n    if runtime.IsDeviceAvailable(&deviceCuda) {\n        runtime.SetDevice(&deviceCuda)\n    } // else we stay on CPU backend\n\n    // build domain for ntt is required for some polynomial ops that rely on ntt\n    err := initBabybearDomain()\n    if err != runtime.Success {\n        errorString := fmt.Sprint(\n            "Babybear Domain initialization failed: ", err)\n        panic(errorString)\n    }\n}\n\nfunc main() {\n\n    // Setup inputs\n    const polySize = 1 << 10\n\n    // randomize two polynomials over babybear field\n    var fBabybear polynomial.DensePolynomial\n    defer fBabybear.Delete()\n    var gBabybear polynomial.DensePolynomial\n    defer gBabybear.Delete()\n    fBabybear.CreateFromCoeffecitients(babybear.GenerateScalars(polySize))\n    gBabybear.CreateFromCoeffecitients(babybear.GenerateScalars(polySize / 2))\n\n    // Perform polynomial multiplication\n    rBabybear := fBabybear.Multiply(&gBabybear) // Executes on the current device\n    defer rBabybear.Delete()\n    rDegree := rBabybear.Degree()\n\n    fmt.Println("f Degree: ", fBabybear.Degree())\n    fmt.Println("g Degree: ", gBabybear.Degree())\n    fmt.Println("r Degree: ", rDegree)\n}\n')),(0,i.yg)("p",null,"In this example, the polynomial multiplication is used to perform polynomial multiplication on CUDA or CPU, showcasing the flexibility and power of Icicle's compute APIs."),(0,i.yg)("h2",{id:"error-handling"},"Error Handling"),(0,i.yg)("h3",{id:"checking-for-errors"},"Checking for Errors"),(0,i.yg)("p",null,"Icicle APIs return an ",(0,i.yg)("inlineCode",{parentName:"p"},"EIcicleError")," enumeration value. Always check the returned value to ensure that operations were successful."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"if result != runtime.SUCCESS {\n    // Handle error\n}\n")),(0,i.yg)("p",null,"This guide provides an overview of the essential APIs available in Icicle for C++. The provided examples should help you get started with integrating Icicle into your high-performance computing projects."))}u.isMDXComponent=!0},1873:(e,n,r)=>{r(6540)}}]);