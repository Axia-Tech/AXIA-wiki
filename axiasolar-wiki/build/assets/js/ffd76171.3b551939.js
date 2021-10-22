"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8236],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>p});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),u=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(a),p=i,h=m["".concat(d,".").concat(p)]||m[p]||c[p]||o;return a?n.createElement(h,r(r({ref:t},s),{},{components:a})):n.createElement(h,r({ref:t},s))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},88559:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>l,contentTitle:()=>d,metadata:()=>u,toc:()=>s,default:()=>m});var n=a(87462),i=a(63366),o=(a(67294),a(3905)),r=["components"],l={id:"maintain-index",title:"Network Maintainers",sidebar_label:"Network Maintainers",slug:"../maintain-index"},d=void 0,u={unversionedId:"maintain/maintain-index",id:"maintain/maintain-index",isDocsHomePage:!1,title:"Network Maintainers",description:"Welcome to the network maintainers section of the AXIA wiki. Here you will find information and",source:"@site/../docs/maintain/maintain-index.md",sourceDirName:"maintain",slug:"/maintain-index",permalink:"/docs/maintain-index",editUrl:"https://github.com/axia-tech/AXIA-wiki/edit/master/docs/maintain/maintain-index.md",tags:[],version:"current",lastUpdatedBy:"Arjun Chamyal",lastUpdatedAt:1634850687,formattedLastUpdatedAt:"10/22/2021",frontMatter:{id:"maintain-index",title:"Network Maintainers",sidebar_label:"Network Maintainers",slug:"../maintain-index"},sidebar:"docs",previous:{title:"Tool Index",permalink:"/docs/build-tools-index"},next:{title:"Parameters",permalink:"/docs/maintain-AXIA-parameters"}},s=[{value:"Node",id:"node",children:[],level:2},{value:"Collator",id:"collator",children:[],level:2},{value:"Nominator",id:"nominator",children:[],level:2},{value:"Validator",id:"validator",children:[],level:2},{value:"Governance",id:"governance",children:[],level:2}],c={toc:s};function m(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Welcome to the network maintainers section of the AXIA wiki. Here you will find information and\nguides to set up a node and run the network."),(0,o.kt)("h2",{id:"node"},"Node"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/maintain-networks"},"Networks Guide")," - A list of the available AXIA networks that you can\nconnect to with a node."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/maintain-sync"},"Set up a Full Node")," - Get up and started by syncing a full node for the AXIALunar\nnetwork. The steps in the guide will broadly apply also to any Substrate-based network (like\nAXIA)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/maintain-wss"},"Set up WSS using Nginx")," - Set up a Secure WebSockets server for your node's\nWebSockets connection.")),(0,o.kt)("h2",{id:"collator"},"Collator"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/learn-collator"},"Learn about Collators")," - High level overview of collators and related links.")),(0,o.kt)("h2",{id:"nominator"},"Nominator"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/learn-nominator"},"Learn about Nominators")," - High level overview of nominators and related\nlinks."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-nominate-AXIA"},"Nomination Guide (AXIA)")," - Walkthrough on how to\nnominate on the AXIA network."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-nominate-axialunar"},"Nomination Guide (AXIALunar)")," - Walkthrough on how to\nnominate on the AXIALunar canary network."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-unbond"},"How to stop being a Nominator")," - Guide on how to stop\nnominating.")),(0,o.kt)("h2",{id:"validator"},"Validator"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/learn-validator"},"Learn about Validators")," - High level overview of validator and related links."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/maintain-guides-validator-payout"},"Validator Payouts")," - Overview on how validator rewards are\ncalculated and paid."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-validate-AXIA"},"Validation Guide (AXIA)")," - Walkthrough on how to\nvalidate on the AXIA network."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-validate-axialunar"},"Validation Guide (AXIALunar)")," - Walkthrough on how to\nvalidate on the AXIALunar canary network."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-systemd"},"Using systemmd for the Validator Node")," - Configuring systemmd\nwith the Validator node."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/maintain-guides-secure-validator"},"Secure Validator")," - Best tips and practices for validating."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-use-AXIA-validator-setup"},"How to use AXIA Validator Setup")," -\nWalkthrough on how to set up a validator securely."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-upgrade"},"How to upgrade a Validator Node")," - Guide on upgrading your\nvalidator node."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-chill"},"How to Chill")," - Walkthrough on how to chill as a validator."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-stop-validating"},"How to Stop Validating")," - Proper way to stop\nvalidating.")),(0,o.kt)("h2",{id:"governance"},"Governance"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/maintain-guides-democracy"},"How to pariticipate in Governance")," - Walkthrough on how to\nparticipate in governance."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-join-council"},"How to join the Council")," - Step by step guide for running for the Council."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-vote-councillor"},"How to vote for a Councillor")," - Step by step guide for voting for your\nfavorite councillors.")))}m.isMDXComponent=!0}}]);