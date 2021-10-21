"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9080],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,d=u["".concat(l,".").concat(m)]||u[m]||h[m]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52415:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,toc:()=>p,default:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"learn-AXIA-host",title:"AXIA Host (AH)",sidebar_label:"AXIA Host (AH)",slug:"../learn-AXIA-host"},l=void 0,c={unversionedId:"learn/learn-AXIA-host",id:"learn/learn-AXIA-host",isDocsHomePage:!1,title:"AXIA Host (AH)",description:"The architecture of AXIA can be divided into two different parts, the AXIA runtime and the",source:"@site/../docs/learn/learn-AXIA-host.md",sourceDirName:"learn",slug:"/learn-AXIA-host",permalink:"/docs/learn-AXIA-host",editUrl:"https://github.com/axia-tech/AXIA-wiki/edit/master/docs/learn/learn-AXIA-host.md",tags:[],version:"current",frontMatter:{id:"learn-AXIA-host",title:"AXIA Host (AH)",sidebar_label:"AXIA Host (AH)",slug:"../learn-AXIA-host"},sidebar:"docs",previous:{title:"Transaction Fees",permalink:"/docs/learn-transaction-fees"},next:{title:"Treasury",permalink:"/docs/learn-treasury"}},p=[{value:"Components of the AXIA host",id:"components-of-the-axia-host",children:[],level:2},{value:"Diagram",id:"diagram",children:[],level:2},{value:"Resources",id:"resources",children:[],level:2}],h={toc:p};function u(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The architecture of AXIA can be divided into two different parts, the AXIA ",(0,o.kt)("em",{parentName:"p"},"runtime")," and the\nAXIA ",(0,o.kt)("em",{parentName:"p"},"host"),". The AXIA runtime is the core state transition logic of the chain and can be\nupgraded over the course of time and without the need for a hard fork. In comparison, the AXIA\nhost is the environment in which the runtime executes and is expected to remain stable and mostly\nstatic over the lifetime of AXIA."),(0,o.kt)("p",null,"The AXIA host interacts with the AXIA runtime in limited, and well-specified ways. For this\nreason, implementation teams can build an alternative implementation of the AXIA host while\ntreating the AXIA runtime as a black box. For more details of the interactions between the host\nand the runtime, please see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/axia-tech/AXIA-spec/"},"specification"),"."),(0,o.kt)("h2",{id:"components-of-the-axia-host"},"Components of the AXIA host"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Networking components such as Libp2p that facilitates network interactions."),(0,o.kt)("li",{parentName:"ul"},"State storage and the storage trie along with the database layer."),(0,o.kt)("li",{parentName:"ul"},"Consensus engine for GRANDPA and BABE."),(0,o.kt)("li",{parentName:"ul"},"Wasm interpreter and virtual machine."),(0,o.kt)("li",{parentName:"ul"},"Low level primitives for a blockchain, such as cryptographic primitives like hash functions.")),(0,o.kt)("p",null,"A compiled AXIA runtime, a blob of Wasm code, can be uploaded into the AXIA host and used as\nthe logic for the execution of state transitions. Without a runtime, the AXIA host is unable to\nmake state transitions or produce any blocks."),(0,o.kt)("h2",{id:"diagram"},"Diagram"),(0,o.kt)("p",null,"Below is a diagram that displays the AXIA host surrounding the AXIA runtime. Think of the\nruntime (in white) as a component that can be inserted, swapped out, or removed entirely. While the\nparts in grey are stable and can not change without an explicit hard fork."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"AXIA host",src:n(46806).Z})),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/axia-tech/AXIA-spec"},"AXIA Host Protocol Specification")," - Incubator for the\nAXIA Host spec, including tests."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ChainSafeSystems/go-pre"},"ChainSafe's Go AH")," is a 25-person development team\nbased in Toronto, Canada. ChainSafe is building an implementation of the beacon chain for Ethereum\n2.0 client in TypeScript and this Go implementation of AXIA.")))}u.isMDXComponent=!0},46806:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/updated_pre-a7fc5c7840321e3fb250e0e88a8ae13a.png"}}]);