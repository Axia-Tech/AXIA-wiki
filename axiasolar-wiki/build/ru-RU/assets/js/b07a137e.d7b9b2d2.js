"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8332],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,y=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(y,l(l({ref:t},h),{},{components:n})):a.createElement(y,l({ref:t},h))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78953:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>r,contentTitle:()=>s,metadata:()=>c,toc:()=>h,default:()=>m});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),l=["components"],r={id:"learn-common-goods",title:"Common Good Allychains",sidebar_label:"Common Good Allychains",description:"Common Good Allychains",slug:"../learn-common-goods"},s=void 0,c={unversionedId:"learn/learn-common-goods",id:"learn/learn-common-goods",isDocsHomePage:!1,title:"Common Good Allychains",description:"Common Good Allychains",source:"@site/../docs/learn/learn-common-good-chains.md",sourceDirName:"learn",slug:"/learn-common-goods",permalink:"/ru-RU/docs/learn-common-goods",editUrl:"https://github.com/axia-tech/AXIA-wiki/edit/master/docs/learn/learn-common-good-chains.md",tags:[],version:"current",lastUpdatedBy:"Arjun Chamyal",lastUpdatedAt:1634274758,formattedLastUpdatedAt:"15.10.2021",frontMatter:{id:"learn-common-goods",title:"Common Good Allychains",sidebar_label:"Common Good Allychains",description:"Common Good Allychains",slug:"../learn-common-goods"},sidebar:"docs",previous:{title:"Bridges",permalink:"/ru-RU/docs/learn-bridges"},next:{title:"Allychain Slots Auction",permalink:"/ru-RU/docs/learn-auction"}},h=[{value:"Overview",id:"overview",children:[{value:"System Level Chains",id:"system-level-chains",children:[],level:3},{value:"Public Utility Chains",id:"public-utility-chains",children:[],level:3}],level:2},{value:"Common Good Chains in Development",id:"common-good-chains-in-development",children:[{value:"Statemint",id:"statemint",children:[],level:3},{value:"Bridges",id:"bridges",children:[],level:3}],level:2}],d={toc:h};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,'"Common Good" allychains are allychain slots reserved for functionality that benefits the ecosystem\nas a whole. By allocating a subset of allychain slots to common good chains, the entire network can\nrealize the benefit of valuable allychains that would otherwise be underfunded due to the free-rider\nproblem. They are not allocated via the allychain auction process, but by the on-chain\n',(0,o.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-governance"},"governance"),"\n"," system. Generally, a common good\nallychain's lease would not expire; it would only be removed via governance."),(0,o.kt)("p",null,"The purpose of these allychains will probably fall into one of two categories: system level chains\nor public utility chains."),(0,o.kt)("h3",{id:"system-level-chains"},"System Level Chains"),(0,o.kt)("p",null,"System level chains move functionality from the Relay Chain into allychains, minimizing the\nadministrative use of the Relay Chain. For example, a governance allychain could move all the\ngovernance processes from the Relay Chain into a allychain. Adding a system level chain is generally\nuncontroversial, because they merely move functionality that the stakeholders already agreed was\nuseful from one place (the Relay Chain) to another (a allychain)."),(0,o.kt)("p",null,"Moving the logic from the Relay Chain to a allychain is an optimization that makes the entire\nnetwork more efficient. Moving system level logic to a allychain frees capacity in the Relay Chain\nfor its primary function: validating allychains. Adding a system level chain could make the network\ncapable of processing several more allychains. Rather than taking a slice of a 100 allychain pie, a\nsystem level chain takes one slice and bakes a bigger pie."),(0,o.kt)("p",null,"The vast majority of common good chains will likely be the unopinionated system level chains."),(0,o.kt)("h3",{id:"public-utility-chains"},"Public Utility Chains"),(0,o.kt)("p",null,"Public utility chains add functionality that doesn\u2019t exist yet, but that the stakeholders believe\nwill add value to the entire network. Because public utility chains add new functionality, there is\na subjective component to their addition: the stakeholders of the network must believe that it is\nworth allocating a slot that would otherwise go to the winners of an auction, and thus would have an\nobjective expression of conviction from its backers. Governance provides the means to internalize\nthe value of the allychain slot and distribute it across all members of the network."),(0,o.kt)("p",null,"Public utility chains will always be fully aligned with their Relay Chain stakeholder base. This\nmeans that they will adopt the Relay Chain's native token (i.e. AXC or LUNAR) as their native token\nand respect any messages incoming from the Relay Chain and system level allychains at face value."),(0,o.kt)("p",null,"Some examples of potential public utility chains are bridges, AXC/LUNAR-denominated smart contract\nplatforms, and ",(0,o.kt)("a",{parentName:"p",href:"#statemint"},"generic asset chains"),"."),(0,o.kt)("p",null,"Public utility allychains would typically grant privileged business logic to AXIA\u2019s governance.\nJust as the AXIA Relay Chain has several privileged functions like setting the validator count\nor allocating AXC from the Treasury, these allychains can have privileged functions like changing\nsystem parameters or triggering an upgrade."),(0,o.kt)("p",null,"Because public utility chains add functionality beyond the scope of the Relay Chain, they will\nlikely be approved by the network stakeholders only in rare scenarios."),(0,o.kt)("h2",{id:"common-good-chains-in-development"},"Common Good Chains in Development"),(0,o.kt)("h3",{id:"statemint"},"Statemint"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/axia-tech/statemint"},"Statemint")," (and its cousin ",(0,o.kt)("em",{parentName:"p"},"Statemine")," on AXIALunar) will\nlikely be one of the first common good allychains. Statemint is a public utility chain in that it\nadds functionality not available in the Relay Chain, namely the creation and management of assets."),(0,o.kt)("p",null,"Statemint will support both fungible and non-fungible assets. The chain offers an interface similar\nto ERC-20 for fungible assets and ERC-721 for non-fungible tokens. These interfaces are in the logic\nof the chain itself; by encoding this logic directly into the Statemint runtime, token storage and\nactions do not need to be metered and can happen faster and cheaper."),(0,o.kt)("p",null,"Like most common good chains, Statemint will use the AXC token as its native token, i.e. represented\nin its instance of the Balances pallet. Statemint trusts messages about balances from the Relay\nChain, and vice versa, so users can transfer AXC from the Relay Chain to their address on Statemint\nand back."),(0,o.kt)("p",null,"Because of the efficiency of executing logic in a allychain, the transaction fees and deposits\n(including the existential deposit) are about 1/10th of their value on the Relay Chain. These low fee\nlevels mean that Statemint is well suited to handling AXC balances and transfers as well as managing\non-chain assets."),(0,o.kt)("p",null,"As a common good allychain, Statemint must stay fully aligned with the Relay Chain. Upgrades to\nStatemint will require the Relay Chain's \"root origin\", i.e. a referendum. Some of the other logic\n(like privileged asset functionality) will defer to the Relay Chain's Council."),(0,o.kt)("h3",{id:"bridges"},"Bridges"),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-bridges"},"Bridges page")," for information on the latest bridge projects."))}m.isMDXComponent=!0}}]);