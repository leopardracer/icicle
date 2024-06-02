"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[706],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var i=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),d=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(o.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=d(n),g=a,m=s["".concat(o,".").concat(g)]||s[g]||p[g]||r;return n?i.createElement(m,l(l({ref:t},u),{},{components:n})):i.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=g;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[s]="string"==typeof e?e:a,l[1]=c;for(var d=2;d<r;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},270:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=n(8168),a=(n(6540),n(5680));n(1873);const r={},l="Multi GPU APIs",c={unversionedId:"icicle/rust-bindings/multi-gpu",id:"icicle/rust-bindings/multi-gpu",title:"Multi GPU APIs",description:"To learn more about the theory of Multi GPU programming refer to this part of documentation.",source:"@site/docs/icicle/rust-bindings/multi-gpu.md",sourceDirName:"icicle/rust-bindings",slug:"/icicle/rust-bindings/multi-gpu",permalink:"/icicle/rust-bindings/multi-gpu",editUrl:"https://github.com/ingonyama-zk/icicle/tree/main/docs/icicle/rust-bindings/multi-gpu.md",tags:[],version:"current",lastUpdatedBy:"nonam3e",lastUpdatedAt:1717321078,formattedLastUpdatedAt:"6/2/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"Keccak",permalink:"/icicle/rust-bindings/keccak"},next:{title:"Rust FFI Bindings for Univariate Polynomial",permalink:"/icicle/rust-bindings/polynomials"}},o={},d=[{value:"A Multi GPU example",id:"a-multi-gpu-example",level:2},{value:"Device management API",id:"device-management-api",level:2},{value:"<code>set_device</code>",id:"set_device",level:4},{value:"<code>get_device_count</code>",id:"get_device_count",level:4},{value:"<code>get_device</code>",id:"get_device",level:4},{value:"Device context API",id:"device-context-api",level:2},{value:"<code>DeviceContext</code>",id:"devicecontext",level:4},{value:"Fields",id:"fields",level:5},{value:"Implementation Notes",id:"implementation-notes",level:5},{value:"<code>DeviceContext::default_for_device(device_id: usize) -&gt; DeviceContext&lt;&#39;static&gt;</code>",id:"devicecontextdefault_for_devicedevice_id-usize---devicecontextstatic",level:4},{value:"Returns",id:"returns",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"<code>check_device(device_id: i32)</code>",id:"check_devicedevice_id-i32",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Behavior",id:"behavior",level:4},{value:"Example",id:"example",level:4}],u={toc:d},s="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(s,(0,i.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"multi-gpu-apis"},"Multi GPU APIs"),(0,a.yg)("p",null,"To learn more about the theory of Multi GPU programming refer to ",(0,a.yg)("a",{parentName:"p",href:"/icicle/multi-gpu"},"this part")," of documentation."),(0,a.yg)("p",null,"Here we will cover the core multi GPU apis and a ",(0,a.yg)("a",{parentName:"p",href:"#a-multi-gpu-example"},"example")),(0,a.yg)("h2",{id:"a-multi-gpu-example"},"A Multi GPU example"),(0,a.yg)("p",null,"In this example we will display how you can"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Fetch the number of devices installed on a machine"),(0,a.yg)("li",{parentName:"ol"},"For every GPU launch a thread and set an active device per thread."),(0,a.yg)("li",{parentName:"ol"},"Execute a MSM on each GPU")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"\n...\n\nlet device_count = get_device_count().unwrap();\n\n(0..device_count)\n        .into_par_iter()\n        .for_each(move |device_id| {\n          set_device(device_id).unwrap();\n\n          // you can allocate points and scalars_d here\n\n          let mut cfg = MSMConfig::default_for_device(device_id);\n          cfg.ctx.stream = &stream;\n          cfg.is_async = true;\n          cfg.are_scalars_montgomery_form = true;\n          msm(&scalars_d, &HostOrDeviceSlice::on_host(points), &cfg, &mut msm_results).unwrap();\n\n          // collect and process results\n        })\n\n...\n")),(0,a.yg)("p",null,"We use ",(0,a.yg)("inlineCode",{parentName:"p"},"get_device_count")," to fetch the number of connected devices, device IDs will be ",(0,a.yg)("inlineCode",{parentName:"p"},"0, 1, 2, ..., device_count - 1")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://docs.rs/rayon/latest/rayon/iter/trait.IntoParallelIterator.html#tymethod.into_par_iter"},(0,a.yg)("inlineCode",{parentName:"a"},"into_par_iter"))," is a parallel iterator, you should expect it to launch a thread for every iteration."),(0,a.yg)("p",null,"We then call ",(0,a.yg)("inlineCode",{parentName:"p"},"set_device(device_id).unwrap();")," it should set the context of that thread to the selected ",(0,a.yg)("inlineCode",{parentName:"p"},"device_id"),"."),(0,a.yg)("p",null,"Any data you now allocate from the context of this thread will be linked to the ",(0,a.yg)("inlineCode",{parentName:"p"},"device_id"),". We create our ",(0,a.yg)("inlineCode",{parentName:"p"},"MSMConfig")," with the selected device ID ",(0,a.yg)("inlineCode",{parentName:"p"},"let mut cfg = MSMConfig::default_for_device(device_id);"),", behind the scene this will create for us a ",(0,a.yg)("inlineCode",{parentName:"p"},"DeviceContext")," configured for that specific GPU. "),(0,a.yg)("p",null,"We finally call our ",(0,a.yg)("inlineCode",{parentName:"p"},"msm")," method."),(0,a.yg)("h2",{id:"device-management-api"},"Device management API"),(0,a.yg)("p",null,"To streamline device management we offer as part of ",(0,a.yg)("inlineCode",{parentName:"p"},"icicle-cuda-runtime")," package methods for dealing with devices."),(0,a.yg)("h4",{id:"set_device"},(0,a.yg)("a",{parentName:"h4",href:"https://github.com/ingonyama-zk/icicle/blob/e6035698b5e54632f2c44e600391352ccc11cad4/wrappers/rust/icicle-cuda-runtime/src/device.rs#L6"},(0,a.yg)("inlineCode",{parentName:"a"},"set_device"))),(0,a.yg)("p",null,"Sets the current CUDA device by its ID, when calling ",(0,a.yg)("inlineCode",{parentName:"p"},"set_device")," it will set the current thread to a CUDA device."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Parameters:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"device_id: usize")),": The ID of the device to set as the current device. Device IDs start from 0.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Returns:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"CudaResult<()>")),": An empty result indicating success if the device is set successfully. In case of failure, returns a ",(0,a.yg)("inlineCode",{parentName:"li"},"CudaError"),".")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Errors:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Returns a ",(0,a.yg)("inlineCode",{parentName:"li"},"CudaError")," if the specified device ID is invalid or if a CUDA-related error occurs during the operation.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'let device_id = 0; // Device ID to set\nmatch set_device(device_id) {\n    Ok(()) => println!("Device set successfully."),\n    Err(e) => eprintln!("Failed to set device: {:?}", e),\n}\n')),(0,a.yg)("h4",{id:"get_device_count"},(0,a.yg)("a",{parentName:"h4",href:"https://github.com/ingonyama-zk/icicle/blob/e6035698b5e54632f2c44e600391352ccc11cad4/wrappers/rust/icicle-cuda-runtime/src/device.rs#L10"},(0,a.yg)("inlineCode",{parentName:"a"},"get_device_count"))),(0,a.yg)("p",null,"Retrieves the number of CUDA devices available on the machine."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Returns:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"CudaResult<usize>")),": The number of available CUDA devices. On success, contains the count of CUDA devices. On failure, returns a ",(0,a.yg)("inlineCode",{parentName:"li"},"CudaError"),".")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Errors:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Returns a ",(0,a.yg)("inlineCode",{parentName:"li"},"CudaError")," if a CUDA-related error occurs during the retrieval of the device count.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'match get_device_count() {\n    Ok(count) => println!("Number of devices available: {}", count),\n    Err(e) => eprintln!("Failed to get device count: {:?}", e),\n}\n')),(0,a.yg)("h4",{id:"get_device"},(0,a.yg)("a",{parentName:"h4",href:"https://github.com/ingonyama-zk/icicle/blob/e6035698b5e54632f2c44e600391352ccc11cad4/wrappers/rust/icicle-cuda-runtime/src/device.rs#L15"},(0,a.yg)("inlineCode",{parentName:"a"},"get_device"))),(0,a.yg)("p",null,"Retrieves the ID of the current CUDA device."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Returns:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"CudaResult<usize>")),": The ID of the current CUDA device. On success, contains the device ID. On failure, returns a ",(0,a.yg)("inlineCode",{parentName:"li"},"CudaError"),".")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Errors:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Returns a ",(0,a.yg)("inlineCode",{parentName:"li"},"CudaError")," if a CUDA-related error occurs during the retrieval of the current device ID.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'match get_device() {\n    Ok(device_id) => println!("Current device ID: {}", device_id),\n    Err(e) => eprintln!("Failed to get current device: {:?}", e),\n}\n')),(0,a.yg)("h2",{id:"device-context-api"},"Device context API"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"DeviceContext")," is embedded into ",(0,a.yg)("inlineCode",{parentName:"p"},"NTTConfig"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"MSMConfig")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"PoseidonConfig"),", meaning you can simply pass a ",(0,a.yg)("inlineCode",{parentName:"p"},"device_id")," to your existing config and the same computation will be triggered on a different device."),(0,a.yg)("h4",{id:"devicecontext"},(0,a.yg)("a",{parentName:"h4",href:"https://github.com/ingonyama-zk/icicle/blob/e6035698b5e54632f2c44e600391352ccc11cad4/wrappers/rust/icicle-cuda-runtime/src/device_context.rs#L11"},(0,a.yg)("inlineCode",{parentName:"a"},"DeviceContext"))),(0,a.yg)("p",null,"Represents the configuration a CUDA device, encapsulating the device's stream, ID, and memory pool. The default device is always ",(0,a.yg)("inlineCode",{parentName:"p"},"0"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"pub struct DeviceContext<'a> {\n    pub stream: &'a CudaStream,\n    pub device_id: usize,\n    pub mempool: CudaMemPool,\n}\n")),(0,a.yg)("h5",{id:"fields"},"Fields"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"stream: &'a CudaStream"))),(0,a.yg)("p",{parentName:"li"},"A reference to a ",(0,a.yg)("inlineCode",{parentName:"p"},"CudaStream"),". This stream is used for executing CUDA operations. By default, it points to a null stream CUDA's default execution stream.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"device_id: usize"))),(0,a.yg)("p",{parentName:"li"},"The index of the GPU currently in use. The default value is ",(0,a.yg)("inlineCode",{parentName:"p"},"0"),", indicating the first GPU in the system."),(0,a.yg)("p",{parentName:"li"},"In some cases assuming ",(0,a.yg)("inlineCode",{parentName:"p"},"CUDA_VISIBLE_DEVICES")," was configured, for example as ",(0,a.yg)("inlineCode",{parentName:"p"},"CUDA_VISIBLE_DEVICES=2,3,7")," in the system with 8 GPUs - the ",(0,a.yg)("inlineCode",{parentName:"p"},"device_id=0")," will correspond to GPU with id 2. So the mapping may not always be a direct reflection of the number of GPUs installed on a system.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"mempool: CudaMemPool"))),(0,a.yg)("p",{parentName:"li"},"Represents the memory pool used for CUDA memory allocations. The default is set to a null pointer, which signifies the use of the default CUDA memory pool."))),(0,a.yg)("h5",{id:"implementation-notes"},"Implementation Notes"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The ",(0,a.yg)("inlineCode",{parentName:"li"},"DeviceContext")," structure is cloneable and can be debugged, facilitating easier logging and duplication of contexts when needed.")),(0,a.yg)("h4",{id:"devicecontextdefault_for_devicedevice_id-usize---devicecontextstatic"},(0,a.yg)("a",{parentName:"h4",href:"https://github.com/ingonyama-zk/icicle/blob/e6035698b5e54632f2c44e600391352ccc11cad4/wrappers/rust/icicle-cuda-runtime/src/device_context.rs#L30"},(0,a.yg)("inlineCode",{parentName:"a"},"DeviceContext::default_for_device(device_id: usize) -> DeviceContext<'static>"))),(0,a.yg)("p",null,"Provides a default ",(0,a.yg)("inlineCode",{parentName:"p"},"DeviceContext")," with system-wide defaults, ideal for straightforward setups."),(0,a.yg)("h4",{id:"returns"},"Returns"),(0,a.yg)("p",null,"A ",(0,a.yg)("inlineCode",{parentName:"p"},"DeviceContext")," instance configured with:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The default stream (",(0,a.yg)("inlineCode",{parentName:"li"},"null_mut()"),")."),(0,a.yg)("li",{parentName:"ul"},"The default device ID (",(0,a.yg)("inlineCode",{parentName:"li"},"0"),")."),(0,a.yg)("li",{parentName:"ul"},"The default memory pool (",(0,a.yg)("inlineCode",{parentName:"li"},"null_mut()"),").")),(0,a.yg)("h4",{id:"parameters"},"Parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"device_id: usize")),": The ID of the device for which to create the context.")),(0,a.yg)("h4",{id:"returns-1"},"Returns"),(0,a.yg)("p",null,"A ",(0,a.yg)("inlineCode",{parentName:"p"},"DeviceContext")," instance with the provided ",(0,a.yg)("inlineCode",{parentName:"p"},"device_id")," and default settings for the stream and memory pool."),(0,a.yg)("h4",{id:"check_devicedevice_id-i32"},(0,a.yg)("a",{parentName:"h4",href:"https://github.com/vhnatyk/icicle/blob/eef6876b037a6b0797464e7cdcf9c1ecfcf41808/wrappers/rust/icicle-cuda-runtime/src/device_context.rs#L42"},(0,a.yg)("inlineCode",{parentName:"a"},"check_device(device_id: i32)"))),(0,a.yg)("p",null,"Validates that the specified ",(0,a.yg)("inlineCode",{parentName:"p"},"device_id")," matches the ID of the currently active device, ensuring operations are targeted correctly."),(0,a.yg)("h4",{id:"parameters-1"},"Parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"device_id: i32")),": The device ID to verify against the currently active device.")),(0,a.yg)("h4",{id:"behavior"},"Behavior"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"Panics"))," if the ",(0,a.yg)("inlineCode",{parentName:"li"},"device_id")," does not match the active device's ID, preventing cross-device operation errors.")),(0,a.yg)("h4",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"let device_id: i32 = 0; // Example device ID\ncheck_device(device_id);\n// Ensures that the current context is correctly set for the specified device ID.\n")))}p.isMDXComponent=!0},1873:(e,t,n)=>{n(6540)}}]);