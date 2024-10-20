"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8125],{5680:(e,t,i)=>{i.d(t,{xA:()=>u,yg:()=>v});var a=i(6540);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(i),m=r,v=d["".concat(l,".").concat(m)]||d[m]||p[m]||n;return i?a.createElement(v,o(o({ref:t},u),{},{components:i})):a.createElement(v,o({ref:t},u))}));function v(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,o=new Array(n);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:r,o[1]=c;for(var s=2;s<n;s++)o[s]=i[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},1800:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>c,toc:()=>s});var a=i(8168),r=(i(6540),i(5680));i(1873);const n={},o="Multi-Device with ICICLE",c={unversionedId:"icicle/multi-device",id:"icicle/multi-device",title:"Multi-Device with ICICLE",description:"If you are looking for the Multi-Device API documentation refer here for Rust and here for Golang.",source:"@site/docs/icicle/multi-device.md",sourceDirName:"icicle",slug:"/icicle/multi-device",permalink:"/icicle/multi-device",editUrl:"https://github.com/ingonyama-zk/icicle/tree/main/docs/icicle/multi-device.md",tags:[],version:"current",lastUpdatedBy:"Yuval Shekel",lastUpdatedAt:1729421899,formattedLastUpdatedAt:"10/20/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"CUDA Backend",permalink:"/icicle/install_cuda_backend"},next:{title:"Build Your Own Backend",permalink:"/icicle/build_your_own_backend"}},l={},s=[{value:"Approaches to Multi-Device Programming",id:"approaches-to-multi-device-programming",level:2},{value:"Device Server Approach",id:"device-server-approach",level:3},{value:"Inter-Device Approach",id:"inter-device-approach",level:3},{value:"Writing ICICLE Code for Multi-Device Setups",id:"writing-icicle-code-for-multi-device-setups",level:2},{value:"C++",id:"c",level:3},{value:"Rust",id:"rust",level:3},{value:"Go (TODO)",id:"go-todo",level:3},{value:"Best Practices",id:"best-practices",level:2}],u={toc:s},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"multi-device-with-icicle"},"Multi-Device with ICICLE"),(0,r.yg)("div",{className:"admonition admonition-info alert alert--info"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"If you are looking for the Multi-Device API documentation refer ",(0,r.yg)("a",{parentName:"p",href:"/icicle/rust-bindings/multi-gpu"},"here")," for Rust and ",(0,r.yg)("a",{parentName:"p",href:"/icicle/golang-bindings/multi-gpu"},"here")," for Golang."))),(0,r.yg)("p",null,"One common challenge with Zero-Knowledge (ZK) computation is managing large input sizes. It's not uncommon to encounter circuits surpassing 2^25 constraints, which can push even the most advanced compute devices to their limits. To effectively scale and process such large circuits, leveraging multiple devices becomes a necessity."),(0,r.yg)("p",null,"Multi-Device programming involves developing software to operate across multiple GPUs, CPUs, or other specialized hardware devices. Let's first explore different approaches to Multi-Device programming, then we will cover how ICICLE allows you to easily develop your ZK computations to run across many devices."),(0,r.yg)("h2",{id:"approaches-to-multi-device-programming"},"Approaches to Multi-Device Programming"),(0,r.yg)("p",null,"There are many ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/NVIDIA/multi-gpu-programming-models"},"different strategies")," available for implementing multi-device systems, but they can generally be split into two categories:"),(0,r.yg)("h3",{id:"device-server-approach"},"Device Server Approach"),(0,r.yg)("p",null,"This approach typically involves a single or multiple CPUs managing threads that read from and write to multiple devices, such as GPUs, CPUs, or accelerators. You can think of it as a scaled-up HOST-Device model."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Multi-Device Server Approach",src:i(4094).A,width:"600",height:"552"})),(0,r.yg)("p",null,"This approach doesn't necessarily allow for tackling larger computation sizes, but it does enable the simultaneous computation of tasks that wouldn't fit on a single device."),(0,r.yg)("p",null,"For example, if you needed to compute two MSMs of size 2^26 on a GPU with 16GB of VRAM, you would normally have to perform these tasks asynchronously. However, by doubling the number of GPUs or other devices in your system, you can now run these computations in parallel."),(0,r.yg)("h3",{id:"inter-device-approach"},"Inter-Device Approach"),(0,r.yg)("p",null,"This more sophisticated approach involves leveraging technologies such as ",(0,r.yg)("a",{parentName:"p",href:"https://www.nvidia.com/en-us/on-demand/session/gtcspring21-cwes1084/"},"GPUDirect, NCCL, NVSHMEM"),", NVLink, or other interconnect technologies to combine multiple devices and split a computation across different hardware."),(0,r.yg)("p",null,"This approach requires redesigning the algorithm at the software level to be compatible with splitting tasks among devices. In some cases, to minimize latency, special inter-device connections can be installed on a server to allow direct communication between multiple devices."),(0,r.yg)("h2",{id:"writing-icicle-code-for-multi-device-setups"},"Writing ICICLE Code for Multi-Device Setups"),(0,r.yg)("p",null,"Currently, ICICLE adopts a Device Server approach, where we assume you have a machine with multiple devices (GPUs, CPUs, etc.) and wish to run computations on each device."),(0,r.yg)("p",null,"Each thread needs to set a device. Following API calls (including memory management and compute APIs) will execute on that device, for this thread."),(0,r.yg)("h3",{id:"c"},"C++"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'// Set the device to CPU\nDevice device = "CPU"; \nicicle_set_device(device);\n')),(0,r.yg)("h3",{id:"rust"},"Rust"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},'// Set the device to the first CUDA GPU (GPU-0)\nlet device = icicle_runtime::Device::new("CUDA", 0 /* =device_id*/);\nicicle_runtime::set_device(&device).unwrap();\n')),(0,r.yg)("h3",{id:"go-todo"},"Go (TODO)"),(0,r.yg)("h2",{id:"best-practices"},"Best Practices"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Avoid Hardcoding Device IDs:")," If you want your software to take full advantage of all available devices on a machine, use methods such as ",(0,r.yg)("inlineCode",{parentName:"li"},"icicle_get_device_count()")," to support an arbitrary number of devices.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'/**\n * @brief Checks if the specified device is available.\n *\n * @param dev The device to check for availability.\n * @return eIcicleError Status of the device availability check.\n *         - `SUCCESS` if the device is available.\n *         - `INVALID_DEVICE` if the device is not available.\n */\nextern "C" eIcicleError icicle_is_device_available(const Device& dev);\n\n  /**\n * @brief Get number of available devices active device for thread\n *\n\n * @return eIcicleError Status of the device set\n */\nextern "C" eIcicleError icicle_get_device_count(int& device_count /*OUT*/);\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Launch One CPU Thread per Device:")," To avoid ",(0,r.yg)("a",{parentName:"li",href:"https://developer.nvidia.com/blog/cuda-pro-tip-always-set-current-device-avoid-multithreading-bugs/"},"common errors")," and ensure code readability, we recommend creating a dedicated thread for each device. Within each CPU thread, you can launch as many tasks as you like for a device, as long as they all run on the same device ID. This will make your code more manageable, easier to read, and performant.")),(0,r.yg)("hr",null),(0,r.yg)("p",null,"This guide provides an overview of multi-device support in ICICLE, explaining the approaches and best practices for efficiently scaling ZK computations across multiple devices. For further information or support, please refer to our ",(0,r.yg)("a",{parentName:"p",href:"./"},"documentation")," or join the discussion on ",(0,r.yg)("a",{parentName:"p",href:"https://discord.gg/6vYrE7waPj"},"Discord"),"."))}p.isMDXComponent=!0},4094:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/image-18256543a80eeb7c54cd4680b5ee5ddb.png"},1873:(e,t,i)=>{i(6540)}}]);