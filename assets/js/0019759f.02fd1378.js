"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1700],{5680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var r=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=i,d=c["".concat(s,".").concat(m)]||c[m]||g[m]||a;return t?r.createElement(d,o(o({ref:n},u),{},{components:t})):r.createElement(d,o({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1890:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(8168),i=(t(6540),t(5680));t(1873);const a={},o="NTT",l={unversionedId:"icicle/rust-bindings/ntt",id:"icicle/rust-bindings/ntt",title:"NTT",description:"NTT API overview",source:"@site/docs/icicle/rust-bindings/ntt.md",sourceDirName:"icicle/rust-bindings",slug:"/icicle/rust-bindings/ntt",permalink:"/icicle/rust-bindings/ntt",editUrl:"https://github.com/ingonyama-zk/icicle/tree/main/docs/icicle/rust-bindings/ntt.md",tags:[],version:"current",lastUpdatedBy:"Yuval Shekel",lastUpdatedAt:1729421899,formattedLastUpdatedAt:"10/20/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"MSM",permalink:"/icicle/rust-bindings/msm"},next:{title:"ECNTT",permalink:"/icicle/rust-bindings/ecntt"}},s={},p=[{value:"NTT API overview",id:"ntt-api-overview",level:2},{value:"NTT Config",id:"ntt-config",level:3},{value:"Fields",id:"fields",level:4},{value:"Example",id:"example",level:4},{value:"NTT Domain",id:"ntt-domain",level:3}],u={toc:p},c="wrapper";function g(e){let{components:n,...t}=e;return(0,i.yg)(c,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"ntt"},"NTT"),(0,i.yg)("h2",{id:"ntt-api-overview"},"NTT API overview"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-rust"},"pub fn ntt<T, F>(\n    input: &(impl HostOrDeviceSlice<T> + ?Sized),\n    dir: NTTDir,\n    cfg: &NTTConfig<F>,\n    output: &mut (impl HostOrDeviceSlice<T> + ?Sized),\n) -> Result<(), eIcicleError>;\n\npub fn ntt_inplace<T, F>(\n    inout: &mut (impl HostOrDeviceSlice<T> + ?Sized),\n    dir: NTTDir,\n    cfg: &NTTConfig<F>,\n) -> Result<(), eIcicleError>\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"input"))," - buffer to read the inputs of the NTT from."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"dir"))," - whether to compute forward or inverse NTT."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"cfg"))," - config used to specify extra arguments of the NTT."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"output"))," - buffer to write the NTT outputs into. Must be of the same  size as input.")),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"input")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"output")," buffers can be on device or on host. Being on host means that they will be transferred to device during runtime."),(0,i.yg)("h3",{id:"ntt-config"},"NTT Config"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-rust"},"pub struct NTTConfig<S> {\n    pub stream_handle: IcicleStreamHandle,\n    pub coset_gen: S,\n    pub batch_size: i32,\n    pub columns_batch: bool,\n    pub ordering: Ordering,\n    pub are_inputs_on_device: bool,\n    pub are_outputs_on_device: bool,\n    pub is_async: bool,\n    pub ext: ConfigExtension,\n}\n")),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"NTTConfig")," struct is a configuration object used to specify parameters for an NTT instance."),(0,i.yg)("h4",{id:"fields"},"Fields"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"stream_handle: IcicleStreamHandle")),": Specifies the stream (queue) to use for async execution")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"coset_gen: S")),": Defines the coset generator used for coset (i)NTTs. By default, this is set to ",(0,i.yg)("inlineCode",{parentName:"p"},"S::one()"),", indicating that no coset is being used.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"batch_size: i32")),": Determines the number of NTTs to compute in a single batch. The default value is 1, meaning that operations are performed on individual inputs without batching. Batch processing can significantly improve performance by leveraging parallelism in GPU computations.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"columns_batch")),": If true the function will compute the NTTs over the columns of the input matrix and not over the rows. Defaults to ",(0,i.yg)("inlineCode",{parentName:"p"},"false"),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"ordering: Ordering")),": Controls the ordering of inputs and outputs for the NTT operation. This field can be used to specify decimation strategies (in time or in frequency) and the type of butterfly algorithm (Cooley-Tukey or Gentleman-Sande). The ordering is crucial for compatibility with various algorithmic approaches and can impact the efficiency of the NTT.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"are_inputs_on_device: bool")),": Indicates whether the input data has been preloaded on the device memory. If ",(0,i.yg)("inlineCode",{parentName:"p"},"false")," inputs will be copied from host to device.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"are_outputs_on_device: bool")),": Indicates whether the output data is preloaded in device memory. If ",(0,i.yg)("inlineCode",{parentName:"p"},"false")," outputs will be copied from host to device. If the inputs and outputs are the same pointer NTT will be computed in place.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"is_async: bool")),": Specifies whether the NTT operation should be performed asynchronously. When set to ",(0,i.yg)("inlineCode",{parentName:"p"},"true"),", the NTT function will not block the CPU, allowing other operations to proceed concurrently. Asynchronous execution requires careful synchronization to ensure data integrity and correctness.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"ext: ConfigExtension")),": extended configuration for backend."))),(0,i.yg)("h4",{id:"example"},"Example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-rust"},'// Setting Bn254 points and scalars\nprintln!("Generating random inputs on host for bn254...");\nlet scalars = Bn254ScalarCfg::generate_random(size);\nlet mut ntt_results = DeviceVec::<Bn254ScalarField>::device_malloc(size).unwrap();\n\n// constructing NTT domain\ninitialize_domain(\n    ntt::get_root_of_unity::<Bn254ScalarField>(\n        size.try_into()\n            .unwrap(),\n    ),\n    &ntt::NTTInitDomainConfig::default(),\n)\n.unwrap();\n\n// Using default config\nlet cfg = ntt::NTTConfig::<Bn254ScalarField>::default();\n\n// Computing NTT\nntt::ntt(\n    HostSlice::from_slice(&scalars),\n    ntt::NTTDir::kForward,\n    &cfg,\n    &mut ntt_results[..],\n)\n.unwrap();\n')),(0,i.yg)("h3",{id:"ntt-domain"},"NTT Domain"),(0,i.yg)("p",null,"Before performing NTT operations, it is mandatory to construct the domain as ",(0,i.yg)("a",{parentName:"p",href:"/icicle/primitives/ntt#ntt-domain"},"explained here"),".\nIn rust, we have the following functions to construct, destruct the domain and retrieve a root of unity from it:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-rust"},"pub trait NTTDomain<F: FieldImpl> {\n    pub fn initialize_domain<F>(primitive_root: F, config: &NTTInitDomainConfig) -> Result<(), eIcicleError>;\n    pub fn release_domain<F>() -> Result<(), eIcicleError>;\n    pub fn get_root_of_unity<F>(max_size: u64) -> F;\n}\n")))}g.isMDXComponent=!0},1873:(e,n,t)=>{t(6540)}}]);