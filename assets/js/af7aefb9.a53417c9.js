"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2796],{5680:(e,i,r)=>{r.d(i,{xA:()=>d,yg:()=>g});var n=r(6540);function a(e,i,r){return i in e?Object.defineProperty(e,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[i]=r,e}function t(e,i){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var i=1;i<arguments.length;i++){var r=null!=arguments[i]?arguments[i]:{};i%2?t(Object(r),!0).forEach((function(i){a(e,i,r[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(r,i))}))}return e}function l(e,i){if(null==e)return{};var r,n,a=function(e,i){if(null==e)return{};var r,n,a={},t=Object.keys(e);for(n=0;n<t.length;n++)r=t[n],i.indexOf(r)>=0||(a[r]=e[r]);return a}(e,i);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)r=t[n],i.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var i=n.useContext(o),r=i;return e&&(r="function"==typeof e?e(i):c(c({},i),e)),r},d=function(e){var i=s(e.components);return n.createElement(o.Provider,{value:i},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},u=n.forwardRef((function(e,i){var r=e.components,a=e.mdxType,t=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(r),u=a,g=m["".concat(o,".").concat(u)]||m[u]||p[u]||t;return r?n.createElement(g,c(c({ref:i},d),{},{components:r})):n.createElement(g,c({ref:i},d))}));function g(e,i){var r=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var t=r.length,c=new Array(t);c[0]=u;var l={};for(var o in i)hasOwnProperty.call(i,o)&&(l[o]=i[o]);l.originalType=e,l[m]="string"==typeof e?e:a,c[1]=l;for(var s=2;s<t;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},880:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>l,toc:()=>s});var n=r(8168),a=(r(6540),r(5680));r(1873);const t={},c="Icicle C++ Usage Guide",l={unversionedId:"icicle/programmers_guide/cpp",id:"icicle/programmers_guide/cpp",title:"Icicle C++ Usage Guide",description:"Overview",source:"@site/docs/icicle/programmers_guide/cpp.md",sourceDirName:"icicle/programmers_guide",slug:"/icicle/programmers_guide/cpp",permalink:"/icicle/programmers_guide/cpp",editUrl:"https://github.com/ingonyama-zk/icicle/tree/main/docs/icicle/programmers_guide/cpp.md",tags:[],version:"current",lastUpdatedBy:"Otsar",lastUpdatedAt:1730924803,formattedLastUpdatedAt:"11/6/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"Icicle Programmer's Guide",permalink:"/icicle/programmers_guide/general"},next:{title:"Icicle Rust Usage Guide",permalink:"/icicle/programmers_guide/rust"}},o={},s=[{value:"Overview",id:"overview",level:2},{value:"Device Management",id:"device-management",level:2},{value:"Loading a Backend",id:"loading-a-backend",level:3},{value:"Setting and Getting Active Device",id:"setting-and-getting-active-device",level:3},{value:"Querying Device Information",id:"querying-device-information",level:3},{value:"Memory Management",id:"memory-management",level:2},{value:"Allocating and Freeing Memory",id:"allocating-and-freeing-memory",level:3},{value:"Asynchronous Memory Operations",id:"asynchronous-memory-operations",level:3},{value:"Querying Available Memory",id:"querying-available-memory",level:3},{value:"Setting Memory Values",id:"setting-memory-values",level:3},{value:"Data Transfer",id:"data-transfer",level:2},{value:"Copying Data",id:"copying-data",level:3},{value:"Explicit Data Transfers",id:"explicit-data-transfers",level:3},{value:"Stream Management",id:"stream-management",level:2},{value:"Creating and Destroying Streams",id:"creating-and-destroying-streams",level:3},{value:"Synchronization",id:"synchronization",level:2},{value:"Synchronizing Streams and Devices",id:"synchronizing-streams-and-devices",level:3},{value:"Device Properties",id:"device-properties",level:2},{value:"Checking Device Availability",id:"checking-device-availability",level:3},{value:"Querying Device Properties",id:"querying-device-properties",level:3},{value:"Compute APIs",id:"compute-apis",level:2},{value:"Multi-Scalar Multiplication (MSM) Example",id:"multi-scalar-multiplication-msm-example",level:3},{value:"Polynomial Operations Example",id:"polynomial-operations-example",level:3},{value:"Error Handling",id:"error-handling",level:2},{value:"Checking for Errors",id:"checking-for-errors",level:3}],d={toc:s},m="wrapper";function p(e){let{components:i,...r}=e;return(0,a.yg)(m,(0,n.A)({},d,r,{components:i,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"icicle-c-usage-guide"},"Icicle C++ Usage Guide"),(0,a.yg)("h2",{id:"overview"},"Overview"),(0,a.yg)("p",null,"This guide covers the usage of ICICLE's C++ API, including device management, memory operations, data transfer, synchronization, and compute APIs."),(0,a.yg)("h2",{id:"device-management"},"Device Management"),(0,a.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.yg)("div",{parentName:"div",className:"admonition-heading"},(0,a.yg)("h5",{parentName:"div"},(0,a.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,a.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.yg)("div",{parentName:"div",className:"admonition-content"},(0,a.yg)("p",{parentName:"div"},"See all ICICLE runtime APIs in ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/blob/main/icicle/include/icicle/runtime.h"},"runtime.h")))),(0,a.yg)("h3",{id:"loading-a-backend"},"Loading a Backend"),(0,a.yg)("p",null,"The backend can be loaded from a specific path or from an environment variable. This is essential for setting up the computing environment."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'#include "icicle/runtime.h"\neIcicleError result = icicle_load_backend_from_env_or_default();\n// or load from custom install dir\neIcicleError result = icicle_load_backend("/path/to/backend/installdir", true);\n')),(0,a.yg)("h3",{id:"setting-and-getting-active-device"},"Setting and Getting Active Device"),(0,a.yg)("p",null,"You can set the active device for the current thread and retrieve it when needed:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'icicle::Device device = {"CUDA", 0}; // or other\neIcicleError result = icicle_set_device(device);\n// or query current (thread) device \neIcicleError result = icicle_get_active_device(device);\n')),(0,a.yg)("h3",{id:"querying-device-information"},"Querying Device Information"),(0,a.yg)("p",null,"Retrieve the number of available devices and check if a pointer is allocated on the host or on the active device:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"int device_count;\neIcicleError result = icicle_get_device_count(device_count);\n\nbool is_host_memory;\neIcicleError result = icicle_is_host_memory(ptr);\n\nbool is_device_memory;\neIcicleError result = icicle_is_active_device_memory(ptr);\n")),(0,a.yg)("h2",{id:"memory-management"},"Memory Management"),(0,a.yg)("h3",{id:"allocating-and-freeing-memory"},"Allocating and Freeing Memory"),(0,a.yg)("p",null,"Memory can be allocated and freed on the active device:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"void* ptr;\neIcicleError result = icicle_malloc(&ptr, 1024); // Allocate 1024 bytes\neIcicleError result = icicle_free(ptr); // Free the allocated memory\n")),(0,a.yg)("h3",{id:"asynchronous-memory-operations"},"Asynchronous Memory Operations"),(0,a.yg)("p",null,"You can perform memory allocation and deallocation asynchronously using streams:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"icicleStreamHandle stream;\neIcicleError err = icicle_create_stream(&stream);\n\nvoid* ptr;\nerr = icicle_malloc_async(&ptr, 1024, stream);\nerr = icicle_free_async(ptr, stream);\n")),(0,a.yg)("h3",{id:"querying-available-memory"},"Querying Available Memory"),(0,a.yg)("p",null,"Retrieve the total and available memory on the active device:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"size_t total_memory, available_memory;\neIcicleError err = icicle_get_available_memory(total_memory, available_memory);\n")),(0,a.yg)("h3",{id:"setting-memory-values"},"Setting Memory Values"),(0,a.yg)("p",null,"Set memory to a specific value on the active device, synchronously or asynchronously:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"eIcicleError err = icicle_memset(ptr, 0, 1024); // Set 1024 bytes to 0\neIcicleError err = icicle_memset_async(ptr, 0, 1024, stream);\n")),(0,a.yg)("h2",{id:"data-transfer"},"Data Transfer"),(0,a.yg)("h3",{id:"copying-data"},"Copying Data"),(0,a.yg)("p",null,"Data can be copied between host and device, or between devices. The location of the memory is inferred from the pointers:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"eIcicleError result = icicle_copy(dst, src, size);\neIcicleError result = icicle_copy_async(dst, src, size, stream);\n")),(0,a.yg)("h3",{id:"explicit-data-transfers"},"Explicit Data Transfers"),(0,a.yg)("p",null,"To avoid device-inference overhead, use explicit copy functions:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"eIcicleError result = icicle_copy_to_host(host_dst, device_src, size);\neIcicleError result = icicle_copy_to_host_async(host_dst, device_src, size, stream);\n\neIcicleError result = icicle_copy_to_device(device_dst, host_src, size);\neIcicleError result = icicle_copy_to_device_async(device_dst, host_src, size, stream);\n")),(0,a.yg)("h2",{id:"stream-management"},"Stream Management"),(0,a.yg)("h3",{id:"creating-and-destroying-streams"},"Creating and Destroying Streams"),(0,a.yg)("p",null,"Streams are used to manage asynchronous operations:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"icicleStreamHandle stream;\neIcicleError result = icicle_create_stream(&stream);\neIcicleError result = icicle_destroy_stream(stream);\n")),(0,a.yg)("h2",{id:"synchronization"},"Synchronization"),(0,a.yg)("h3",{id:"synchronizing-streams-and-devices"},"Synchronizing Streams and Devices"),(0,a.yg)("p",null,"Ensure all previous operations on a stream or device are completed before proceeding:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"eIcicleError result = icicle_stream_synchronize(stream);\neIcicleError result = icicle_device_synchronize();\n")),(0,a.yg)("h2",{id:"device-properties"},"Device Properties"),(0,a.yg)("h3",{id:"checking-device-availability"},"Checking Device Availability"),(0,a.yg)("p",null,"Check if a device is available and retrieve a list of registered devices:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"icicle::Device dev;\neIcicleError result = icicle_is_device_available(dev);\n")),(0,a.yg)("h3",{id:"querying-device-properties"},"Querying Device Properties"),(0,a.yg)("p",null,"Retrieve properties of the active device:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"DeviceProperties properties;\neIcicleError result = icicle_get_device_properties(properties);\n\n/******************/\n// where DeviceProperties is\nstruct DeviceProperties {\n  bool using_host_memory;      // Indicates if the device uses host memory\n  int num_memory_regions;      // Number of memory regions available on the device\n  bool supports_pinned_memory; // Indicates if the device supports pinned memory\n  // Add more properties as needed\n};\n")),(0,a.yg)("h2",{id:"compute-apis"},"Compute APIs"),(0,a.yg)("h3",{id:"multi-scalar-multiplication-msm-example"},"Multi-Scalar Multiplication (MSM) Example"),(0,a.yg)("p",null,"Icicle provides high-performance compute APIs such as the Multi-Scalar Multiplication (MSM) for cryptographic operations. Here's a simple example of how to use the MSM API."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\n#include "icicle/runtime.h"\n#include "icicle/api/bn254.h"\n\nusing namespace bn254;\n\nint main()\n{\n  // Load installed backends\n  icicle_load_backend_from_env_or_default();\n\n  // trying to choose CUDA if available, or fallback to CPU otherwise (default device)\n  const bool is_cuda_device_available = (eIcicleError::SUCCESS == icicle_is_device_available("CUDA"));\n  if (is_cuda_device_available) {\n    Device device = {"CUDA", 0};             // GPU-0\n    ICICLE_CHECK(icicle_set_device(device)); // ICICLE_CHECK asserts that the api call returns eIcicleError::SUCCESS\n  } // else we stay on CPU backend\n\n  // Setup inputs\n  int msm_size = 1024;\n  auto scalars = std::make_unique<scalar_t[]>(msm_size);\n  auto points = std::make_unique<affine_t[]>(msm_size);\n  projective_t result;\n\n  // Generate random inputs\n  scalar_t::rand_host_many(scalars.get(), msm_size);\n  projective_t::rand_host_many(points.get(), msm_size);\n\n  // (optional) copy scalars to device memory explicitly\n  scalar_t* scalars_d = nullptr;\n  auto err = icicle_malloc((void**)&scalars_d, sizeof(scalar_t) * msm_size);\n  // Note: need to test err and make sure no errors occurred\n  err = icicle_copy(scalars_d, scalars.get(), sizeof(scalar_t) * msm_size);\n\n  // MSM configuration\n  MSMConfig config = default_msm_config();\n  // tell icicle that the scalars are on device. Note that EC points and result are on host memory in this example.\n  config.are_scalars_on_device = true;\n\n  // Execute the MSM kernel (on the current device)\n  eIcicleError result_code = msm(scalars_d, points.get(), msm_size, config, &result);\n  // OR call bn254_msm(scalars_d, points.get(), msm_size, config, &result);\n\n  // Free the device memory\n  icicle_free(scalars_d);\n\n  // Check for errors\n  if (result_code == eIcicleError::SUCCESS) {\n    std::cout << "MSM result: " << projective_t::to_affine(result) << std::endl;\n  } else {\n    std::cerr << "MSM computation failed with error: " << get_error_string(result_code) << std::endl;\n  }\n\n  return 0;\n}\n')),(0,a.yg)("h3",{id:"polynomial-operations-example"},"Polynomial Operations Example"),(0,a.yg)("p",null,"Here's another example demonstrating polynomial operations using Icicle:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\n#include "icicle/runtime.h"\n#include "icicle/polynomials/polynomials.h"\n#include "icicle/api/bn254.h"\n\nusing namespace bn254;\n\n// define bn254Poly to be a polynomial over the scalar field of bn254\nusing bn254Poly = Polynomial<scalar_t>;\n\nstatic bn254Poly randomize_polynomial(uint32_t size)\n{\n  auto coeff = std::make_unique<scalar_t[]>(size);\n  for (int i = 0; i < size; i++)\n    coeff[i] = scalar_t::rand_host();\n  return bn254Poly::from_rou_evaluations(coeff.get(), size);\n}\n\nint main()\n{\n  // Load backend and set device\n  icicle_load_backend_from_env_or_default();\n\n  // trying to choose CUDA if available, or fallback to CPU otherwise (default device)\n  const bool is_cuda_device_available = (eIcicleError::SUCCESS == icicle_is_device_available("CUDA"));\n  if (is_cuda_device_available) {\n    Device device = {"CUDA", 0};             // GPU-0\n    ICICLE_CHECK(icicle_set_device(device)); // ICICLE_CHECK asserts that the API call returns eIcicleError::SUCCESS\n  } // else we stay on CPU backend\n\n  int poly_size = 1024;\n\n  // build domain for ntt is required for some polynomial ops that rely on ntt\n  ntt_init_domain(scalar_t::omega(12), default_ntt_init_domain_config());\n\n  // randomize polynomials f(x),g(x) over the scalar field of bn254\n  bn254Poly f = randomize_polynomial(poly_size);\n  bn254Poly g = randomize_polynomial(poly_size);\n\n  // Perform polynomial multiplication\n  auto result = f * g; // Executes on the current device\n\n  ICICLE_LOG_INFO << "Done";\n\n  return 0;\n}\n')),(0,a.yg)("p",null,"In this example, the polynomial multiplication is used to perform polynomial multiplication on CUDA or CPU, showcasing the flexibility and power of Icicle's compute APIs."),(0,a.yg)("h2",{id:"error-handling"},"Error Handling"),(0,a.yg)("h3",{id:"checking-for-errors"},"Checking for Errors"),(0,a.yg)("p",null,"Icicle APIs return an ",(0,a.yg)("inlineCode",{parentName:"p"},"eIcicleError")," enumeration value. Always check the returned value to ensure that operations were successful."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"if (result != eIcicleError::SUCCESS) {\n    // Handle error\n}\n")),(0,a.yg)("p",null,"This guide provides an overview of the essential APIs available in Icicle for C++. The provided examples should help you get started with integrating Icicle into your high-performance computing projects."))}p.isMDXComponent=!0},1873:(e,i,r)=>{r(6540)}}]);