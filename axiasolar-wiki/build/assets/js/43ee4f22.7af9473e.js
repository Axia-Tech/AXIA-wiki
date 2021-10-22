"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4672],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>p});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),d=c(a),p=o,m=d["".concat(s,".").concat(p)]||d[p]||u[p]||r;return a?n.createElement(m,i(i({ref:t},h),{},{components:a})):n.createElement(m,i({ref:t},h))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},24567:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>h,default:()=>d});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=["components"],l={id:"build-guide",title:"AXIA Builders Starter's Guide",sidebar_label:"AXIA Builders Starter's Guide",slug:"../build-build-with-AXIA"},s=void 0,c={unversionedId:"build/build-guide",id:"build/build-guide",isDocsHomePage:!1,title:"AXIA Builders Starter's Guide",description:"AXIA is a blockchain protocol with two goals: providing shared security among all connected",source:"@site/../docs/build/build-guide.md",sourceDirName:"build",slug:"/build-build-with-AXIA",permalink:"/docs/build-build-with-AXIA",editUrl:"https://github.com/axia-tech/AXIA-wiki/edit/master/docs/build/build-guide.md",tags:[],version:"current",lastUpdatedBy:"Arjun Chamyal",lastUpdatedAt:1634850687,formattedLastUpdatedAt:"10/22/2021",frontMatter:{id:"build-guide",title:"AXIA Builders Starter's Guide",sidebar_label:"AXIA Builders Starter's Guide",slug:"../build-build-with-AXIA"},sidebar:"docs",previous:{title:"Builder's Guides",permalink:"/docs/build-index"},next:{title:"Allychain Implementer's Guide",permalink:"/docs/learn-implementers-guide"}},h=[{value:"AXIA Ecosystem Networks",id:"axia-ecosystem-networks",children:[],level:2},{value:"What is the difference between building a allychain, a parathread, or a smart contract?",id:"what-is-the-difference-between-building-a-allychain-a-parathread-or-a-smart-contract",children:[{value:"Allychains &amp; Parathreads",id:"allychains--parathreads",children:[],level:3},{value:"Smart Contracts",id:"smart-contracts",children:[],level:3}],level:2},{value:"So you want to build a allychain or parathread...",id:"so-you-want-to-build-a-allychain-or-parathread",children:[{value:"Get started with Substrate",id:"get-started-with-substrate",children:[],level:3},{value:"How to set up your allychain",id:"how-to-set-up-your-allychain",children:[{value:"Cumulus",id:"cumulus",children:[],level:4}],level:3},{value:"How to deploy your allychain or parathread in AXIA",id:"how-to-deploy-your-allychain-or-parathread-in-axia",children:[{value:"Allychain",id:"allychain",children:[],level:4},{value:"Parathread",id:"parathread",children:[],level:4}],level:3}],level:2},{value:"So you want to build a smart contract...",id:"so-you-want-to-build-a-smart-contract",children:[{value:"Frontier EVM Contracts",id:"frontier-evm-contracts",children:[],level:3},{value:"Contracts Pallet",id:"contracts-pallet",children:[],level:3},{value:"Ink",id:"ink",children:[],level:3},{value:"It is still early",id:"it-is-still-early",children:[{value:"AXIA Tech",id:"axia-tech",children:[],level:4},{value:"Allychains",id:"allychains",children:[],level:4}],level:3},{value:"Edgeware",id:"edgeware",children:[],level:3},{value:"Moonbeam",id:"moonbeam",children:[],level:3},{value:"Astar",id:"astar",children:[],level:3},{value:"Acala",id:"acala",children:[],level:3},{value:"Phala",id:"phala",children:[],level:3}],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2}],u={toc:h};function d(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"AXIA is a blockchain protocol with two goals: providing ",(0,r.kt)("strong",{parentName:"p"},"shared security")," among all connected\nallychains and allowing all connected chains to ",(0,r.kt)("strong",{parentName:"p"},"interoperate")," by using\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-crosschain"},"XCM"),". With the advent of ",(0,r.kt)("a",{parentName:"p",href:"build-allychains.md##allychain-development-kit-(PDK)"},"PDKs")," like AXIA Substrate and\nCumulus, the time it takes to develop and launch a new chain has dropped significantly. While before\nit would take years to launch a new chain, now it may only take weeks or even days."),(0,r.kt)("p",null,"This guide will walk you through the steps you can take today to get started building your vision\nwith AXIA. It will explain the difference between a allychain and a smart contract (and why one\nmay be better suited for your application over the other)."),(0,r.kt)("h2",{id:"axia-ecosystem-networks"},"AXIA Ecosystem Networks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mainnet: ",(0,r.kt)("strong",{parentName:"li"},"AXIA")),(0,r.kt)("li",{parentName:"ul"},"Official testnets:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"AlphaNet")," - Functionality equal to the current AXIA mainnet, with possible next-generation\ntesting of features from time to time that will eventually migrate onto AXIA. Perma-testnet (is not reset back to genesis block)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Canvas")," - Wasm based Smart Contract enabled testnet, primarily for ",(0,r.kt)("inlineCode",{parentName:"li"},"ink!")," development."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"BetaNet")," - Allychains and XCM testnet. Occasionally reset (started over again with a new genesis block).")))),(0,r.kt)("p",null,"AXIA mainnet has been running since May 2020 and has\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-implementations"},"implementations in various programming languages")," ranging from Rust to\nJavaScript. Currently, the leading implementation is built in Rust and built using the Substrate\nframework."),(0,r.kt)("p",null,"Tooling is rapidly evolving to interact with the network; there are so many ways to get started!"),(0,r.kt)("p",null,"But before you jump head-first into the code, you should consider the ",(0,r.kt)("em",{parentName:"p"},"kind")," of decentralized\napplication you want to make and understand the different paradigms available to developers who want\nto build on AXIA."),(0,r.kt)("h2",{id:"what-is-the-difference-between-building-a-allychain-a-parathread-or-a-smart-contract"},"What is the difference between building a allychain, a parathread, or a smart contract?"),(0,r.kt)("p",null,"AXIA provides several ways for you to deploy your application: as a smart contract on an existing\nallychain, as your own allychain, or as a parathread. There are trade-offs when working with each of\nthese and reading this section will help you understand them."),(0,r.kt)("h3",{id:"allychains--parathreads"},"Allychains & Parathreads"),(0,r.kt)("p",null,'Allychains are "parallel" chains containing their own runtime logic and benefit from the shared\nsecurity and the cross-chain messaging provided by the AXIA Relay Chain. Allychains permit a\nhigh degree of flexibility and customization but require more effort to create and maintain over\ntime.'),(0,r.kt)("p",null,"Parathreads are like allychains and enable the developer to have lower-level control of the logic of\ntheir application. The main difference between the two is economic since parathreads will be much\nless expensive to secure than a allychain. The lower costs of parathreads are due to the fact that\nparathreads will only produce a block when they need to, unlike allychains, which have secured a\nslot to produce a block at every block of the Relay Chain. When building a parathread, you will use\nthe same tools (like PDKs) and you get all of the benefits of building a allychain, without the\ndrawback of the cost."),(0,r.kt)("p",null,"Allychains grant the creators more space to build the monetary system and other aspects of the chain\nfrom the ground up. They will allow for more succinct and efficient execution of complex logic than\ncould ever be offered by a smart contract platform. Allychains also offer more flexibility in the\nform of governance and can perform complete upgrades in a less controversial way than the current\nprocess of hard-forks."),(0,r.kt)("p",null,"Some examples of features you can have on a allychain or parathread:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Custom fee structure (for example, pay a flat fee for transactions or pay per byte)."),(0,r.kt)("li",{parentName:"ul"},"Custom monetary policy for the native token and local economy."),(0,r.kt)("li",{parentName:"ul"},"Treasury to be funded through transitions in your state function."),(0,r.kt)("li",{parentName:"ul"},"A governance mechanism that could manage a DAO that is responsible for allocating your on-chain\ntreasury.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"build 1",src:a(74722).Z})),(0,r.kt)("p",null,"Allychains open possibilities to construct complex runtime logic that would be too expensive to\nexecute with smart contracts. However, unlike smart contracts, allychains lack a mandatory gas\nmetering system entirely and could potentially be vulnerable to bugs that cause infinite loops\n(something that is prevented by design in smart contracts). This vulnerability is mitigated by the\nweight system that is implemented in Substrate -- although it places more of a burden on the\ndeveloper of the allychain to properly perform benchmarks."),(0,r.kt)("p",null,"You may also decide to harness a combination of allychain, parathread, and smart contract. If you\nhave certain logic that requires loops and it cannot be removed, use the native allychain runtime to\nhandle all complex logic and the smart contract to call iteration. If you require off-chain data\nfrom an oracle, you may want to use a parathread as an oracle feed that only triggers once every 24\nhours (this makes the most sense if the data is useful to other players in the AXIA ecosystem\ntoo)."),(0,r.kt)("p",null,"Most likely you\u2019ve already realized that your application is better suited to be one or the other\n(or a hybrid of them both), but if you need a quick recap to digest the information, you can use\nthis comparison chart as a cheat sheet:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"build 2",src:a(46347).Z})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," The image above does not include parathreads, but as we mentioned before all the\nbenefits of allychains apply just as well to parathreads. Parathreads, however, ",(0,r.kt)("em",{parentName:"p"},"are"),' cheaper to\ndeploy and maintain. So if they had a column on the table above, it would look like the allychain\ncolumn with "Ease of deployment" and "Maintenance overhead" changed to ',(0,r.kt)("inlineCode",{parentName:"p"},"+"),".")),(0,r.kt)("h3",{id:"smart-contracts"},"Smart Contracts"),(0,r.kt)("p",null,"A smart contract is simply some code that exists at an address on a chain and is callable by\nexternal actors. The key part is that you actually have to put the code on chain before anyone can\nstart executing it!"),(0,r.kt)("p",null,"Deploying your smart contract on chain will vary slightly for whichever specific allychain you will\nuse, but generally you will send a special transaction that will create the smart contract on the\nledger. You will likely need to pay an associated fee for the initialization logic and any storage\nthat your contract consumes."),(0,r.kt)("p",null,"On the AXIA mainnet, there will be allychains that act as smart contract platforms. Smart\ncontracts are executable programs that exist on only a single chain and are limited in complexity.\nBecause they exist on a single chain, they can have smooth interoperability with other smart\ncontracts on the same chain. However, they will always be constrained and limited by the inherent\ncharacteristics of their host chain."),(0,r.kt)("p",null,"If there is a need to have a large amount of control over the design and features of your\napplication, a allychain is a better choice. Keep in mind, smart contracts can be used as a testing\nground before later being turned into full-fledged allychains. Smart contract platforms will usually\nhave convenient tooling like IDEs to facilitate quick iterations. A smart contract MVP could be\ncreated to gauge user interest before putting in the work to build out a allychain."),(0,r.kt)("p",null,"Each platform will have a different way of paying for and maintaining the state of your smart\ncontract. The different patterns you may see for paying for your smart contract include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A transaction fee associated with deploying each transaction."),(0,r.kt)("li",{parentName:"ul"},"A subscription model in which you pay some chain entity routinely for the usage of the platform."),(0,r.kt)("li",{parentName:"ul"},"An access token model for which you need to hold a threshold of native tokens to use the platform\n(EOS has something similar). Storage rent."),(0,r.kt)("li",{parentName:"ul"},"Free trial or developer promotion."),(0,r.kt)("li",{parentName:"ul"},"Most smart contract platforms use some form of gas to limit the number of operations a user can\nperform. Users will be required to pay for the gas upfront and will be refunded for what they\ndon\u2019t use.")),(0,r.kt)("p",null,"You will need to consider the storage and complexity of your smart contract to ensure that gas usage\nstays within reasonable bounds. Storage will likely be expensive for whichever smart contract\nplatform you use, so it is necessary to keep as much data off-chain as possible. You may consider\nusing ",(0,r.kt)("a",{parentName:"p",href:"https://ipfs.io/"},"IPFS")," or ",(0,r.kt)("a",{parentName:"p",href:"https://storj.io/"},"Storj")," to keep the data and submitting only\nthe content address on chain."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"This guide now splits into two sections depending on whether you\u2019ve decided on a smart contract or a\nallychain to build your application. Feel free to read both sections or just the one that is\napplicable to you."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#so-you-want-to-build-a-allychain-or-parathread"},"I want to build a allychain or parathread!")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#so-you-want-to-build-a-smart-contract"},"I want to build a smart contract!"))),(0,r.kt)("h2",{id:"so-you-want-to-build-a-allychain-or-parathread"},"So you want to build a allychain or parathread..."),(0,r.kt)("p",null,"Now that you have determined that building a allychain or parathread is the right approach for your\nnew project, the next step is to decide which framework to use. Frameworks for building a allychain\nor parathread are known as allychain development kits (",(0,r.kt)("a",{parentName:"p",href:"build-allychains.md##allychain-development-kit-(PDK)"},"PDKs"),". Currently, the only\nPDK available is Substrate and Cumulus from AXIA Technologies."),(0,r.kt)("p",null,"In the future, there will be many different PDKs available in different programming languages, just\nlike there are multiple ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-implementations"},"implementations of the AXIA Host"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Call to Action:")," Do you want to build a Allychain Development Kit from scratch? The Web3\nFoundation is giving grants to teams who are doing this, learn more and apply on the\n",(0,r.kt)("a",{parentName:"p",href:"https://grants.AXIA.org"},"W3F grants page"),".")),(0,r.kt)("h3",{id:"get-started-with-substrate"},"Get started with Substrate"),(0,r.kt)("p",null,"Substrate is the underlying framework on which AXIA itself is built. It is a toolset for\nblockchain innovators that provides the necessary building blocks for constructing a chain. It\nincludes a library of modular runtime plug-ins from which you can compose your chain logic."),(0,r.kt)("p",null,"The best way to get started with Substrate is to explore the\n",(0,r.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/"},"Substrate Developer Hub"),", an online resource built and maintained\nby ",(0,r.kt)("a",{parentName:"p",href:"https://axia.io"},"AXIA Technologies"),"."),(0,r.kt)("h3",{id:"how-to-set-up-your-allychain"},"How to set up your allychain"),(0,r.kt)("p",null,"After creating your chain runtime logic with Substrate, you will be able to compile it down to a\nWasm executable. This Wasm code blob will contain the entire state transition function of your\nchain, and is what you will need to deploy your project to AXIA as either a allychain or\nparathread."),(0,r.kt)("p",null,"Validators on AXIA will use the submitted Wasm code to validate the state transitions of your\nchain or thread, but doing this requires some additional infrastructure. A validator needs some way\nto stay up to date with the most recent state transitions, since AXIA nodes will not be required\nto also be nodes of your chain."),(0,r.kt)("p",null,"This is where the collator node comes into play. A collator is a maintainer of your allychain and\nperforms the critical action of producing new block candidates for your chain and passing them to\nAXIA validators for inclusion in the AXIA relay chain."),(0,r.kt)("p",null,"Substrate comes with its own networking layer built-in but unfortunately only supports solo chains\n(that is, chains that do not connect to the relay chain). However, there is the Cumulus extension\nthat includes a collator node and allows for your Substrate-built logic to be compatible with\nAXIA as either a allychain or parathread."),(0,r.kt)("h4",{id:"cumulus"},"Cumulus"),(0,r.kt)("p",null,"The goal of ",(0,r.kt)("a",{parentName:"p",href:"/docs/build-pdk###cumulus"},"Cumulus")," is to be an extension of Substrate that will make any\nSubstrate runtime compatible with AXIA."),(0,r.kt)("p",null,"It handles the network compatibility overhead that any allychain would need to implement to be\nconnected to AXIA. This includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cross-chain message passing (XCMP)."),(0,r.kt)("li",{parentName:"ul"},"Out-of-the-box Collator node setup."),(0,r.kt)("li",{parentName:"ul"},"An embedded full client of the Relay Chain."),(0,r.kt)("li",{parentName:"ul"},"AXIA block authorship compatibility.")),(0,r.kt)("p",null,"Integrating Cumulus with your Substrate chain will port it into a allychain capable of working on\nAXIA with minimal modification, possibly as little work as importing a crate and adding a few\nlines!"),(0,r.kt)("h3",{id:"how-to-deploy-your-allychain-or-parathread-in-axia"},"How to deploy your allychain or parathread in AXIA"),(0,r.kt)("h4",{id:"allychain"},"Allychain"),(0,r.kt)("p",null,"In order to include your allychain into the AXIA network, you will need to acquire a allychain\nslot."),(0,r.kt)("p",null,"Allychain slots will be sold in open auctions, the mechanics of which can be found on the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-auction"},"allychain auction")," page of the wiki."),(0,r.kt)("h4",{id:"parathread"},"Parathread"),(0,r.kt)("p",null,"Parathreads will not require a allychain slot, so you will not need to engage in the candle auction\nmechanism. Instead, you will be able to register your parathread code to the relay chain for a fee\nand from then be able to start participating in the per-block auctions for inclusion of your state\ntransition into the relay chain."),(0,r.kt)("p",null,"For more information on how parathread per-block auctions work, see the more detailed\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-parathreads"},"parathread")," page."),(0,r.kt)("h2",{id:"so-you-want-to-build-a-smart-contract"},"So you want to build a smart contract..."),(0,r.kt)("p",null,"The AXIA relay chain itself will not support smart contracts. However, since the allychains that\nconnect to AXIA can support arbitrary state transitions, they can support smart contracts."),(0,r.kt)("p",null,"Substrate presently supports smart contracts out-of-the-box in two ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The EVM pallet offered by ",(0,r.kt)("a",{parentName:"li",href:"(https://github.com/axia-tech/frontier)"},"Frontier"),"."),(0,r.kt)("li",{parentName:"ul"},"The ","[Contracts pallet][substrate contracts]"," in the FRAME library for Wasm based contracts.")),(0,r.kt)("h3",{id:"frontier-evm-contracts"},"Frontier EVM Contracts"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"(https://github.com/axia-tech/frontier)"},"Frontier")," is the suite of tools that enables a Substrate chain to run Ethereum contacts\n(EVM) natively with the same API/RPC interface Ethereum exposes on Substrate. Ethereum Addresses\ncan also be mapped directly to and from Substrate's SS58 scheme from existing accounts."),(0,r.kt)("h3",{id:"contracts-pallet"},"Contracts Pallet"),(0,r.kt)("p",null,"The experience of deploying to an EVM-based chain may be more familiar to developers that have\nwritten smart contracts before. However, the Contracts pallet makes some notable improvements to the\ndesign of the EVM:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Wasm"),". The Contracts pallet uses WebAssembly as its compilation target. Any language that\ncompiles to Wasm can potentially be used to write smart contracts. Nevertheless, it is better to have a dedicated domain-specific language, and for that reason AXIA offers the ",(0,r.kt)("a",{parentName:"p",href:"#ink"},"ink!")," language.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Rent"),". Contracts must pay rent or else hold a deposit suitably large enough in order to\njustify its existence on-chain. When a contract does not uphold this, it may create what's called\na ",(0,r.kt)("em",{parentName:"p"},"tombstone")," which is a reference to the contract. In some conditions, the contract will be\ndeleted outright along with its storage if it does not maintain these requirements.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Caching"),". Contracts are cached by default and therefore means they only need to be deployed\nonce and afterward be instantiated as many times as you want. This helps to keep the storage load\non the chain down to the minimum. On top of this, when a contract is no longer being used and the\n",(0,r.kt)("em",{parentName:"p"},"existential deposit")," is drained, the code will be erased from storage (known as reaping)."))),(0,r.kt)("h3",{id:"ink"},"Ink"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/axia-tech/ink"},"ink!")," is a domain specific language for writing smart contracts\nin Rust and compiles to Wasm code. As it states in its README, it is still in an experimental phase\nso brave developers should be aware that they might have a bumpy - but workable - development\nexperience. There are some projects that have built projects in ink! with a decent level of\ncomplexity such as Plasm's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/staketechnologies/Plasm"},"Plasma contracts"),", so it is mature enough to start\nbuilding interesting things."),(0,r.kt)("p",null,"For interested developers, they can get started writing smart contracts using ink! by studying the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/axia-tech/ink/tree/master/examples"},"examples")," that were already written. These\ncan be used as guideposts to writing more complex logic that will be deployable on smart contract\nallychains."),(0,r.kt)("p",null,"ink! has laid much of the groundwork for a new smart contract stack that is based on a Wasm virtual\nmachine and compatible with Substrate chains."),(0,r.kt)("h3",{id:"it-is-still-early"},"It is still early"),(0,r.kt)("p",null,"It is still very early for smart contracts on AXIA and the development is only now stabilizing.\nWe are actively producing content to help developers get up to speed and will maintain the wiki with\nthe latest resources. You should also keep up to date with the following links:"),(0,r.kt)("h4",{id:"axia-tech"},"AXIA Tech"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/axia-tech/ink"},"ink!")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/axia-tech/substrate/tree/master/frame/contracts"},"Substrate contracts pallet"))),(0,r.kt)("h4",{id:"allychains"},"Allychains"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://edgewa.re"},"Edgeware")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://moonbeam.network"},"Moonbeam")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://astar.network/"},"Astar")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://acala.network/"},"Acala")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://phala.network"},"Phala"))),(0,r.kt)("p",null,"There are many smart contract platforms being built with the intent of becoming a allychain on the AXIA networks. A community created and maintained list of different smart contract platforms building on AXIA can be found at ",(0,r.kt)("a",{parentName:"p",href:"https://www.axiaproject.com/#/projects?cateID=1&tagID=6"},"AXIAProjects"),"."),(0,r.kt)("h3",{id:"edgeware"},"Edgeware"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://edgewa.re"},"Edgeware")," is a permissionless smart contract platform. It is an option for smart contract developers and want to deploy to a live environment. Users can deploy both EVM and WASM smart contracts on Edgeware. Edgeware intends to connect to AXIA as a smart contract allychain."),(0,r.kt)("p",null,"Try deploying a smart contract on Edgeware by following their ",(0,r.kt)("a",{parentName:"p",href:"https://main.edgeware.wiki/development/develop/smart-contracts"},"documentation"),"."),(0,r.kt)("h3",{id:"moonbeam"},"Moonbeam"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://moonbeam.network"},"Moonbeam")," is another project that is planning to deploy to AXIA as a allychain and will\nsupport Ethereum compatible smart contracts. Since Moonbeam uses ",(0,r.kt)("a",{parentName:"p",href:"(https://github.com/axia-tech/frontier)"},"Frontier"),", an interoperability layer with existing Ethereum tooling, it will support all applications that are written to target the EVM environment with little friction."),(0,r.kt)("p",null,"Try deploying a smart contract to Moonbeam by following their ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moonbeam.network/"},"documentation"),"."),(0,r.kt)("h3",{id:"astar"},"Astar"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://astar.network/"},"Astar")," (formerly Plasm) is built on Substrate as a smart contract platform and intends to integrate with AXIA as a allychain. Astar aims to house all layer 2 scaling solutions and support all layer 2 protocols through the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.astar.network/learn/layer2/optimistic-virtual-machine"},"OVM")," (Optimistic Virtual Machine)."),(0,r.kt)("p",null,"Try deploying an Ethereum or ink! smart contract by following their ",(0,r.kt)("a",{parentName:"p",href:"https://docs.astar.network/build/smart-contracts"},"documentation"),"."),(0,r.kt)("h3",{id:"acala"},"Acala"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://acala.network/"},"Acala")," is a decentralized finance consortium and DeFi infrastructure chain delivering a set of protocols to serve as the DeFi hub on AXIA. Interested teams are now able to deploy DApps and smart contracts on Karura's platform. Acala is also implementing the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.acala.network/learn/acala-evm/why-acala-evm"},"Acala EVM"),"."),(0,r.kt)("p",null,"Try deploying an Acala EVM smart contract by following their ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.acala.network/build/development-guide/smart-contracts"},"documentation"),"."),(0,r.kt)("h3",{id:"phala"},"Phala"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://phala.network"},"Phala")," is a privacy-preserving cloud compute platform and aims to provide strong guarantees of confidentiality as a cross-chain platform. As a smart contract platform, Phala will enable the use of confidential smart contracts on AXIA."),(0,r.kt)("p",null,"Try deploying a confidential smart contract by following their ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.phala.network/en-us/docs/developer/your-first-confidential-contract/"},"documentation"),"."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"This guide has given you a mental model and shown the requisite resources to help you determine and\nstart building your project as a allychain or smart contract today. Even though the tooling is still\nmaturing, the advantage of being early will be the familiarity and head start on your project,\nallowing you to innovate and create something truly new."),(0,r.kt)("p",null,"If you have interesting ideas for allychains or smart contracts on AXIA feel free to drop into\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://matrix.to/#/#AXIA-watercooler:matrix.org"},"AXIA Watercooler")," to talk about them.\nDevelopers may be interested in joining the\n",(0,r.kt)("a",{parentName:"p",href:"https://matrix.to/#/#AXIAnoobs:matrix.org"},"AXIA Beginners Lounge")," or\n",(0,r.kt)("a",{parentName:"p",href:"https://matrix.to/#/#substrate-technical:matrix.org"},"Substrate Technical")," to ask their questions.\nAs always, keep up to date with AXIA by following the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/community"},"social channels"),"."),(0,r.kt)("p",null,"Good luck!"))}d.isMDXComponent=!0},74722:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/build-1-57cc2ef9347abbc7dafc04b11b8b4425.png"},46347:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/build-2-f1928681ca29b5e66209ff67f882f556.png"}}]);