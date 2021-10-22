"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1748],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(a),m=n,d=h["".concat(l,".").concat(m)]||h[m]||p[m]||o;return a?r.createElement(d,i(i({ref:t},u),{},{components:a})):r.createElement(d,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},11732:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,toc:()=>u,default:()=>h});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],s={id:"build-smart-contracts",title:"Smart Contracts",sidebar_label:"Smart Contracts",slug:"../build-smart-contracts"},l=void 0,c={unversionedId:"build/build-smart-contracts",id:"build/build-smart-contracts",isDocsHomePage:!1,title:"Smart Contracts",description:"The AXIA Relay Chain will not natively support smart contracts. However, allychains on AXIA",source:"@site/../docs/build/build-smart-contracts.md",sourceDirName:"build",slug:"/build-smart-contracts",permalink:"/docs/build-smart-contracts",editUrl:"https://github.com/axia-tech/AXIA-wiki/edit/master/docs/build/build-smart-contracts.md",tags:[],version:"current",lastUpdatedBy:"Arjun Chamyal",lastUpdatedAt:1634850687,formattedLastUpdatedAt:"10/22/2021",frontMatter:{id:"build-smart-contracts",title:"Smart Contracts",sidebar_label:"Smart Contracts",slug:"../build-smart-contracts"},sidebar:"docs",previous:{title:"Decentralised Storage",permalink:"/docs/build-storage"},next:{title:"Oracles",permalink:"/docs/build-oracle"}},u=[{value:"Resources",id:"resources",children:[],level:2},{value:"Examples",id:"examples",children:[{value:"Storage Rent: Deprecated",id:"storage-rent-deprecated",children:[],level:3}],level:2},{value:"What is the difference between developing a smart contract versus a allychain?",id:"what-is-the-difference-between-developing-a-smart-contract-versus-a-allychain",children:[{value:"Layer of Abstraction",id:"layer-of-abstraction",children:[],level:3},{value:"Gas Fees",id:"gas-fees",children:[],level:3}],level:2},{value:"Resources",id:"resources-1",children:[],level:2}],p={toc:u};function h(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The AXIA Relay Chain will not natively support smart contracts. However, allychains on AXIA\nwill support smart contracts. There are already announced projects such as\n",(0,o.kt)("a",{parentName:"p",href:"https://edgewa.re"},"Edgeware"),", and thanks to the Substrate built-in\n",(0,o.kt)("a",{parentName:"p",href:"https://substrate.dev/rustdocs/latest/pallet_contracts/index.html"},"contract pallet"),", it is likely\nthat more allychains will support WebAssembly smart contracts."),(0,o.kt)("p",null,"Additionally, there is the\n",(0,o.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/smart-contracts/evm-pallet"},"EVM Pallet"),", which allows a\nallychain to implement the Ethereum Virtual Machine, thereby supporting almost direct ports of\nEthereum contracts. Some of the projects using this approach are ",(0,o.kt)("a",{parentName:"p",href:"https://edgewa.re"},"Edgeware"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://moonbeam.network/"},"Moonbeam")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/axia-tech/frontier"},"Frontier"),"."),(0,o.kt)("p",null,"A video version of the recap of the smart contract situation on AXIA is available\n",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=fKHkFBXaUxQ"},"here"),"."),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("p",null,"Here is the list of current resources available to developers who want to get started writing smart\ncontracts to deploy on allychains based on Substrate."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://contracts.edgewa.re"},"Edgeware Contracts")," - Edgeware's documentation on Smart Contracts"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/axia-tech/ink"},"ink!")," - AXIA's ink to write smart contracts."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://substrate.dev/substrate-contracts-workshop/#/"},"Substrate Contracts Workshop")," - a\nwalkthrough of the basics of writing and deploying an ERC20 token using ",(0,o.kt)("inlineCode",{parentName:"li"},"ink!"),".")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Collected below are some community examples of smart contracts in ",(0,o.kt)("inlineCode",{parentName:"p"},"ink!"),". ",(0,o.kt)("strong",{parentName:"p"},"Are you working on a\nsmart contract example? Ask us to add it to this page!")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/JesseAbram/foRust/"},"Ownable")," - Port of the OpenZeppelin ",(0,o.kt)("inlineCode",{parentName:"li"},"Ownable")," contract.")),(0,o.kt)("h3",{id:"storage-rent-deprecated"},"Storage Rent: Deprecated"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pallet_contracts")," was originally designed to combat unbounded state growth by charging contracts for the\nstate they consume, but has since been deprecated. See the associated ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/axia-tech/substrate/pull/9669"},"pull request")," for more details."),(0,o.kt)("h2",{id:"what-is-the-difference-between-developing-a-smart-contract-versus-a-allychain"},"What is the difference between developing a smart contract versus a allychain?"),(0,o.kt)("h3",{id:"layer-of-abstraction"},"Layer of Abstraction"),(0,o.kt)("p",null,"When you write a smart contract you are creating the instructions that will be deployed and\nassociated to a specific chain address."),(0,o.kt)("p",null,"In comparison, a runtime module is the entire logic of a chain's state transitions (what's called a\nstate transition function)."),(0,o.kt)("p",null,"Smart contracts must consciously implement upgradeability while allychains will have the ability to\nswap out their code entirely through a root command or via the governance pallet."),(0,o.kt)("p",null,"When you build a smart contract, it will eventually be deployed to a target chain with its own\nenvironment. Allychains allow the developer to declare the environment of their own chain, even\nallowing others to write smart contracts for it."),(0,o.kt)("h3",{id:"gas-fees"},"Gas Fees"),(0,o.kt)("p",null,"Smart contracts must find a way to limit their own execution, or else full nodes are vulnerable to\nDOS attacks. An infinite loop in a smart contract, for example, could consume the computational\nresources of an entire chain, preventing others from using it. The\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Halting_problem"},"halting problem"),' shows that with a powerful enough\nlanguage, it is impossible to know ahead of time whether or not a program will ever cease execution.\nSome platforms, such as Bitcoin, get around this constraint by providing a very restricted scripting\nlanguage. Others, such as Ethereum, "charge" the smart contract "gas" for the rights to execute\ntheir code. If a smart contract does get into a state where execution will never halt, it eventually\nruns out of gas, ceases execution, and any state transition that would have been made by the smart\ncontract is rolled back. AXIA uses a ',(0,o.kt)("em",{parentName:"p"},"weight-fee model")," and not a ",(0,o.kt)("em",{parentName:"p"},"gas-metering model"),"."),(0,o.kt)("p",null,"Allychains can implement arbitrarily powerful programming languages and also contain no notion of\ngas for their own native logic. This means that some functionality is easier to implement for the\ndeveloper, but it also means there are some constructs, such as a loop without a terminating\ncondition, which should ",(0,o.kt)("em",{parentName:"p"},"never")," be implemented. Leaving certain logic, such as complex loops that\ncould possibly run indefinitely, to a non-smart contract layer, or even trying to eliminate it\nentirely, will often be a wiser choice. Allychains try to be proactive, while smart contract\nplatforms are event-driven."),(0,o.kt)("h2",{id:"resources-1"},"Resources"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/56041305"},"When should I build a Substrate runtime versus a Substrate smart contract"),"?\nThis post answers the question more technically of when a developer might choose to develop a\nruntime versus a smart contract."),(0,o.kt)("p",null,"Here is the list of current resources available to developers who want to get started writing smart\ncontracts to deploy on allychains based on Substrate."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://contracts.edgewa.re"},"Edgeware Contracts")," - Edgeware's documentation on Smart Contracts"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/axia-tech/ink"},"ink!")," - AXIA's ink to write smart contracts."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://substrate.dev/substrate-contracts-workshop/"},"Substrate Contracts Workshop")," - Walks you\nthrough the basics of writing and deploying an ERC20 token using ",(0,o.kt)("inlineCode",{parentName:"li"},"ink!"),".")))}h.isMDXComponent=!0}}]);