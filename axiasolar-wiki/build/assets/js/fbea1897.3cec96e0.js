"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7280],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>p});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),p=o,f=d["".concat(s,".").concat(p)]||d[p]||h[p]||r;return t?a.createElement(f,i(i({ref:n},u),{},{components:t})):a.createElement(f,i({ref:n},u))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},56025:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>u,default:()=>d});var a=t(87462),o=t(63366),r=(t(67294),t(3905)),i=["components"],l={id:"learn-launch",title:"AXIA Launch Phases",sidebar_label:"AXIA Launch Phases",description:"An explanation of AXIA's launch process and its individual phases",slug:"../learn-launch"},s=void 0,c={unversionedId:"learn/learn-launch",id:"learn/learn-launch",isDocsHomePage:!1,title:"AXIA Launch Phases",description:"An explanation of AXIA's launch process and its individual phases",source:"@site/../docs/learn/learn-launch.md",sourceDirName:"learn",slug:"/learn-launch",permalink:"/docs/learn-launch",editUrl:"https://github.com/axia-tech/AXIA-wiki/edit/master/docs/learn/learn-launch.md",tags:[],version:"current",lastUpdatedBy:"Arjun Chamyal",lastUpdatedAt:1634274758,formattedLastUpdatedAt:"10/15/2021",frontMatter:{id:"learn-launch",title:"AXIA Launch Phases",sidebar_label:"AXIA Launch Phases",description:"An explanation of AXIA's launch process and its individual phases",slug:"../learn-launch"},sidebar:"docs",previous:{title:"Frequently Asked Questions (FAQs)",permalink:"/docs/faq"},next:{title:"Architecture",permalink:"/docs/learn-architecture"}},u=[{value:"The PoA Launch",id:"the-poa-launch",children:[],level:2},{value:"Nominated Proof of Stake",id:"nominated-proof-of-stake",children:[],level:2},{value:"Governance",id:"governance",children:[],level:2},{value:"Removal of Sudo",id:"removal-of-sudo",children:[],level:2},{value:"Balance Transfers",id:"balance-transfers",children:[],level:2},{value:"Redenomination",id:"redenomination",children:[],level:2},{value:"Core Functionality",id:"core-functionality",children:[],level:2},{value:"AXIA 2.0",id:"axia-20",children:[],level:2}],h={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The AXIA network has a phased roll-out plan, with important milestones toward decentralization\nmarking each phase. Keep up-to-date with the AXIA's phased roll-out plan at by viewing the\n",(0,r.kt)("a",{parentName:"p",href:"https://AXIA.network/launch-roadmap/"},"roadmap")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Current Phase: Allychain Rollout")),(0,r.kt)("h2",{id:"the-poa-launch"},"The PoA Launch"),(0,r.kt)("p",null,"The Genesis block of the AXIA network was launched on May 26, 2020, as a Proof of Authority\n(PoA) network. Governance was restricted to the single Sudo (super-user) key, which was held by Web3\nFoundation to issue the commands and upgrades necessary to complete the launch process. During this\ntime, validators started joining the network and signaling their intention to participate in\nconsensus."),(0,r.kt)("h2",{id:"nominated-proof-of-stake"},"Nominated Proof of Stake"),(0,r.kt)("p",null,"Once AXIA Foundation was confident in the stability of the network and there was a sufficient number\nof validator intentions, AXIA Foundation used ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/InekMjJpVdo"},"Sudo")," ","\u2014"," a\nsuperuser account with access to governance functions ","\u2014"," to initiate the first validator\nelection. Following this election, the network transitioned from PoA into its second phase,\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-staking"},"Nominated Proof of Stake (NPoS)"),", on June 18, 2020."),(0,r.kt)("h2",{id:"governance"},"Governance"),(0,r.kt)("p",null,"After the chain had been running well with the validator set, the Sudo key issued a runtime upgrade\nthat enabled the suite of governance modules in AXIA; namely, the modules to enable a\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-governance#council"},"Council"),", a\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-governance#technical-committee"},"Technical Committee"),", and\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-governance#public-referenda"},"public referenda"),"."),(0,r.kt)("h2",{id:"removal-of-sudo"},"Removal of Sudo"),(0,r.kt)("p",null,"The Sudo module was removed by a runtime upgrade on July 20, 2020, transitioning the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-governance"},"governance")," of the chain into the hands of the token (AXC) holders."),(0,r.kt)("p",null,"From this point, the network has been entirely in the hands of the token holders and is no longer\nunder control of any centralized authority."),(0,r.kt)("h2",{id:"balance-transfers"},"Balance Transfers"),(0,r.kt)("p",null,"To enable balance transfers, the community ",(0,r.kt)("a",{parentName:"p",href:"/docs/maintain-guides-democracy"},"made a public proposal"),"\nfor a runtime upgrade that lifted the restriction on balance transfers. Transfer functionality was\nsubsequently enabled on AXIA at block number 1_205_128 on August 18, 2020, at 16:39 UTC."),(0,r.kt)("h2",{id:"redenomination"},"Redenomination"),(0,r.kt)("p",null,"On August 21, 2020, ",(0,r.kt)("a",{parentName:"p",href:"/docs/redenomination"},"redenomination")," of AXC, the native token on AXIA,\noccurred. From this date, one AXC (old) equals 100 new AXC."),(0,r.kt)("h2",{id:"core-functionality"},"Core Functionality"),(0,r.kt)("p",null,"AXIA is now moving to the next stage of opening up its core functionality, like allychain slot\nauctions, parathreads, and cross-chain message passing. AXIA is now on track to launch several\nallychains in 2021. These upgrades will require runtime upgrades that will pass through AXIA's\nnormal governance processes. The core functionality does not have to be unlocked sequentially\n","\u2014"," several features can be unlocked with a single proposal."),(0,r.kt)("p",null,"Allychains will first roll out on AXIALunar with a common good allychain, followed by the first slot\nauction and winner's onboarding."),(0,r.kt)("h2",{id:"axia-20"},"AXIA 2.0"),(0,r.kt)("p",null,"With the release of AXIA 1.0, researchers have begun research for the next version of the\nAXIA network. With many questions yet to be answered, as of now, some big areas of research will\nbe in:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Economics and Networking (Zero-Knowledge): How will scalability work in AXIA 2.0?"),(0,r.kt)("li",{parentName:"ul"},"Horizontal vs. Vertical scalability: What is the breaking point of the maximum number of\nallychains built with horizontal scalability?"),(0,r.kt)("li",{parentName:"ul"},"Nested Relay Chain: How can multiple Relay Chains exist connected through allychains? How many\ntiers of Relay Chains can be nested? How will validators work together to validate blocks on\nvarious Relay Chains? How does ",(0,r.kt)("a",{parentName:"li",href:"/docs/learn-crosschain"},"XCM")," work in the nested setup? How is\n",(0,r.kt)("a",{parentName:"li",href:"/docs/learn-availability"},"AnV")," going to work there?")))}d.isMDXComponent=!0}}]);