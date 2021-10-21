"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2392],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>p});var n=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var r=n.createContext({}),h=function(e){var a=n.useContext(r),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=h(e.components);return n.createElement(r.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,l=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=h(t),p=o,y=u["".concat(r,".").concat(p)]||u[p]||d[p]||l;return t?n.createElement(y,i(i({ref:a},c),{},{components:t})):n.createElement(y,i({ref:a},c))}));function p(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var l=t.length,i=new Array(l);i[0]=u;var s={};for(var r in a)hasOwnProperty.call(a,r)&&(s[r]=a[r]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var h=2;h<l;h++)i[h]=t[h];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},77529:(e,a,t)=>{t.r(a),t.d(a,{frontMatter:()=>s,contentTitle:()=>r,metadata:()=>h,toc:()=>c,default:()=>u});var n=t(87462),o=t(63366),l=(t(67294),t(3905)),i=["components"],s={id:"learn-allychains",title:"Allychains",sidebar_label:"Allychains",description:"An introductory guide to AXIA Allychains.",slug:"../learn-allychains"},r=void 0,h={unversionedId:"learn/learn-allychains",id:"learn/learn-allychains",isDocsHomePage:!1,title:"Allychains",description:"An introductory guide to AXIA Allychains.",source:"@site/../docs/learn/learn-allychains.md",sourceDirName:"learn",slug:"/learn-allychains",permalink:"/zh-CN/docs/learn-allychains",editUrl:"https://github.com/axia-tech/AXIA-wiki/edit/master/docs/learn/learn-allychains.md",tags:[],version:"current",frontMatter:{id:"learn-allychains",title:"Allychains",sidebar_label:"Allychains",description:"An introductory guide to AXIA Allychains.",slug:"../learn-allychains"},sidebar:"docs",previous:{title:"Runtime Upgrades",permalink:"/zh-CN/docs/learn-runtime-upgrades"},next:{title:"Parathreads",permalink:"/zh-CN/docs/learn-parathreads"}},c=[{value:"Allychain Economies",id:"allychain-economies",children:[],level:2},{value:"Allychain Hubs",id:"allychain-hubs",children:[],level:2},{value:"Allychain Slot Acquisition",id:"allychain-slot-acquisition",children:[{value:"Slot Expiration",id:"slot-expiration",children:[],level:3}],level:2},{value:"Common Good Allychains",id:"common-good-allychains",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"FAQ",id:"faq",children:[{value:"What is &quot;allychain consensus&quot;?",id:"what-is-allychain-consensus",children:[{value:"How about allychains that are not Substrate-based?",id:"how-about-allychains-that-are-not-substrate-based",children:[],level:4}],level:3},{value:"How will allychain slots be distributed?",id:"how-will-allychain-slots-be-distributed",children:[],level:3},{value:"What happens to allychains when the number of validators drops below a certain threshold?",id:"what-happens-to-allychains-when-the-number-of-validators-drops-below-a-certain-threshold",children:[],level:3},{value:"Allychain Development Kits (PDKs)",id:"allychain-development-kits-pdks",children:[],level:3}],level:2},{value:"Resources",id:"resources",children:[],level:2}],d={toc:c};function u(e){var a=e.components,s=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,s,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: For information on how to participate in the crowdloan and allychain auction testing on\nBetaNet, please see the ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/build-pdk##testing-a-allychains:-betanet-testnet"},"BetaNet page"),":AXIA }} >\n",".")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"One allychain",src:t(41315).Z})),(0,l.kt)("p",null,"A allychain is an application-specific data structure that is globally coherent and validatable by\nthe validators of the Relay Chain. Most commonly a allychain will take the form of a blockchain, but\nthere is no specific need for them to be actual blockchains. They take their name from the concept\nof parallelized chains that run parallel to the Relay Chain. Due to their parallel nature, they are\nable to parallelize transaction processing and achieve scalability of the\nAXIA  system. They\n",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-security"},"share in the security")," of the entire network and can communicate with other\nallychains through ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-crosschain"},"XCM"),"."),(0,l.kt)("p",null,"Allychains are maintained by a network maintainer known as a ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-collator"},"collator"),". The role\nof the collator node is to maintain a full-node of the allychain, retain all necessary information\nof the allychain, and produce new block candidates to pass to the Relay Chain validators for\nverification and inclusion in the shared state of AXIA. The incentivization of a collator node\nis an implementation detail of the allychain. They are not required to be staked on the Relay Chain\nor own AXC tokens unless stipulated to do so by the allychain implementation."),(0,l.kt)("p",null,"The AXIA Host (AH) requires that the state transitions performed on allychains to be specified\nas a Wasm executable. Proofs of new state transitions that occur on a allychain must be validated\nagainst the registered state transition function (STF) that is stored on the Relay Chain by the\nvalidators before AXIA  acknowledges a\nstate transition has occurred on a allychain. The key constraint regarding the logic of a allychain\nis that it must be verifiable by the Relay Chain validators. Verification most commonly takes the\nform of a bundled proof of a state transition known as a Proof-of-Verification (PoV) block, which is\nsubmitted to the validators from one or more of the allychain collators to be checked."),(0,l.kt)("h2",{id:"allychain-economies"},"Allychain Economies"),(0,l.kt)("p",null,"Allychains may have their own economies with their own native tokens. Schemes such as Proof-of-Stake\nare usually used to select the validator set in order to handle validation and finalization;\nallychains will not be required to do either of those things. However, since\nAXIA  is not overly particular about what\nthe allychain can implement, it may be the choice of the allychain to implement a staking token, but\nit's not generally necessary."),(0,l.kt)("p",null,"Collators may be incentivized through inflation of a native allychain token. There may be other ways\nto incentivize the collator nodes that do not involve inflating the native allychain token."),(0,l.kt)("p",null,"Transaction fees in a native allychain token can also be an implementation choice of allychains.\nAXIA  makes no hard and fast rules for how\nthe allychains decide on original validity of transactions. For example, a allychain may be\nimplemented so that transactions must pay a minimum fee to collators to be valid. The Relay Chain\nwill enforce this validity. Similarly, a allychain could not include that in their implementation\nand AXIA would still enforce its validity."),(0,l.kt)("p",null,"Allychains are not required to have their own token. If they do, is up to the allychain to make the\neconomic case for their token, not AXIA ."),(0,l.kt)("h2",{id:"allychain-hubs"},"Allychain Hubs"),(0,l.kt)("p",null,"While AXIA enables crosschain functionality amongst the allychains, it necessitates that there\nis some latency between the dispatch of a message from one allychain until the destination allychain\nreceives the message. In the optimistic scenario, the latency for this message should be at least 2\nblocks - one block for the message to be dispatched and one block for the receiving allychain to\nprocess and produce a block that acts upon the message. However, in some cases we may see that the\nlatency for messages is higher if there are many messages that are in queue to be processed, or if\nthere exist no nodes that are running both of the allychain networks that can quickly gossip the\nmessage across the networks."),(0,l.kt)("p",null,"Due to the neccesary latency involved in sending crosschain messages, some allychains are planning\nto become ",(0,l.kt)("em",{parentName:"p"},"hubs")," for an entire industry. For example, a allychain project\n",(0,l.kt)("a",{parentName:"p",href:"https://acala.network"},"Acala")," is planning to become a hub for decentralized finance (DeFi)\napplications. Many DeFi applications take advantage of a property known as ",(0,l.kt)("em",{parentName:"p"},"composability")," which\nmeans that functions of one application can be composed with others in a synergistic way to create\nnew applications. One example of this include flash loans, which borrow funds to execute some\non-chain logic as long as the loan is repaid at the end of the transaction."),(0,l.kt)("p",null,"An issue with crosschain latency means that the property of composability is weakened among\nallychains compared to a single blockchain. ",(0,l.kt)("strong",{parentName:"p"},"This implication is common to all sharded blockchain\ndesigns, including AXIA, Eth2.0, and others.")," The solution to this is the introduction of\nallychain hubs which maintain the stronger property of single block composability."),(0,l.kt)("h2",{id:"allychain-slot-acquisition"},"Allychain Slot Acquisition"),(0,l.kt)("p",null,"AXIA  supports a limited number of\nallychains, currently estimated to be about 100. As the number of slots is limited, there are\nseveral ways to allocate them:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Governance granted allychains, or "common good" allychains'),(0,l.kt)("li",{parentName:"ul"},"Auction granted allychains"),(0,l.kt)("li",{parentName:"ul"},"Parathreads")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"#common-good-allychains"},'"Common Good" allychains')," are allocated by AXIA's on-chain\n",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-governance"},"governance"),"\n",' system, and are deemed as a "common\ngood" for the network, such as bridges to other networks or chains. They are usually considered\nsystem level chains or public utility chains. These typically do not have an economic model of their\nown and help remove transactions from the Relay Chain, allowing for more efficient allychain\nprocessing.'),(0,l.kt)("p",null,"",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-auction"},"Auction granted allychains"),"\n"," are granted in a\npermissionless auction. Allychain teams can either bid with their own AXC tokens, or source them\nfrom the community using the\n",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-crowdloans"},"crowdloan functionality"),"\n","."),(0,l.kt)("p",null,"",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-parathreads"},"Parathreads"),"\n"," have the same API as allychains,\nbut are scheduled for execution on a pay-as-you-go basis with an auction for each block."),(0,l.kt)("h3",{id:"slot-expiration"},"Slot Expiration"),(0,l.kt)("p",null,"When a allychain wins an auction, the tokens that it bid gets reserved until the end of the lease.\nReserved balances are non-transferrable and cannot be used for staking. At the end of the lease, the\ntokens are unreserved. Allychains that have not secured a new lease to extend their slot will\nautomatically become parathreads."),(0,l.kt)("h2",{id:"common-good-allychains"},"Common Good Allychains"),(0,l.kt)("p",null,'"Common Good" allychains are allychain slots reserved for functionality that benefits the the\necosystem as a whole. By allocating a subset of allychain slots to common good chains, the entire\nnetwork can realize the benefit of valuable allychains that would otherwise be underfunded due to\nthe free-rider problem. They are not allocated via the allychain auction process, but by the\non-chain ',(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-governance"},"governance"),"\n"," system. Generally, a common good\nallychain's lease would not expire; it would only be removed via governance."),(0,l.kt)("p",null,"See the\n",(0,l.kt)("a",{parentName:"p",href:"https://AXIA.network/common-good-allychains-an-introduction-to-governance-allocated-allychain-slots/"},"AXIA blog article"),"\nand the ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-common-goods"},"common good allychains")," page for more information."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Some examples of allychains:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Encrypted Consortium Chains"),": These are possibly private chains that do not leak any\ninformation to the public, but still can be interacted with trustlessly due to the nature of the\nXCMP protocol."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"High Frequency Chains"),": These are chains that can compute many transactions in a short amount\nof time by taking certain trade-offs or making optimizations."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Privacy Chains"),": These are chains that do not leak any information to the public through use of\nnovel cryptography."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Smart Contract Chains"),": These are chains that can have additional logic implemented on them\nthrough the deployment of code known as ",(0,l.kt)("em",{parentName:"li"},"smart contracts"),".")),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)("h3",{id:"what-is-allychain-consensus"},'What is "allychain consensus"?'),(0,l.kt)("p",null,'"Allychain consensus" is special in that it will follow the AXIA Relay Chain. Allychains cannot\nuse other consensus algorithms that provide their own finality. Only sovereign chains (that must\nbridge to the Relay Chain via a allychain) can control their own consensus. Allychains have control\nover how blocks are authored and by whom. AXIA guarantees valid state transitions. Executing a\nblock finality outside the context of the relay chain is outside the scope of trust\nthat AXIA provides.'),(0,l.kt)("h4",{id:"how-about-allychains-that-are-not-substrate-based"},"How about allychains that are not Substrate-based?"),(0,l.kt)("p",null,"Substrate provides ",(0,l.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/runtime/frame#pallets"},"FRAME Pallets")," as\npart of its framework to seamlessly build a rustic-based blockchain. Part of FRAME are pallets\nthat can be used for consensus. AXIA being a Substrate-based chain relies on BABE as the block\nproduction scheme and GRANDPA as the finality gadget as part of its consensus mechanism. Collectively,\nthis is a ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-consensus#hybrid-consensus"},"Hybrid Consensus Model"),", where block production and block finality are separate. Allychains only need to produce blocks as they can rely on the relay chain to validate the state transitions. Thus, allychains can have their own block production where the ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-collator"},"collators")," act as the block producers, even if the allychain is not Substrate-based."),(0,l.kt)("h3",{id:"how-will-allychain-slots-be-distributed"},"How will allychain slots be distributed?"),(0,l.kt)("p",null,"Allychain slots will be acquirable through auction, please see the\n",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-auction"},"allychain slots"),"\n"," article. Additionally, some\nallychain slots will be set aside to run\n",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-parathreads"},"parathreads"),"\n"," ","\u2014"," chains that bid on a\nper-block basis to be included in the Relay Chain."),(0,l.kt)("h3",{id:"what-happens-to-allychains-when-the-number-of-validators-drops-below-a-certain-threshold"},"What happens to allychains when the number of validators drops below a certain threshold?"),(0,l.kt)("p",null,"The minimal safe ratio of validators per allychain is 5:1. With a sufficiently large set of\nvalidators, the randomness of their distribution along with\n",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-availability"},"availability and validity")," will make sure security is on-par. However,\nshould there be a big outage of a popular cloud provider or another network connectivity\ncatastrophe, it is reasonable to expect that the number of validators per chain will drop."),(0,l.kt)("p",null,"Depending on how many validators went offline, the outcome differs."),(0,l.kt)("p",null,"If a few validators went offline, the allychains whose validator groups will be too small to\nvalidate a block will skip those blocks. Their block production speed will slow down to any\nincrement of 6 seconds, until the situation is resolved and the optimal number of validators is in\nthat allychain's validator group again."),(0,l.kt)("p",null,"If anywhere from 30% to 50% of the validators go offline, availability will suffer because we need\ntwo thirds of the validator set to back the allychain candidates. In other words, all allychains\nwill stop until the situation is resolved. Finality will also stop, but low-value transactions on\nthe relay chain should be safe enough to execute, despite common forks. Once the required number of\nvalidators is in the validator set again, allychains will resume block production."),(0,l.kt)("p",null,"Given that collators are full nodes of the relay chain and the allychain they are running, they will\nbe able to recognize a disruption as soon as it occurs and should stop producing block candidates.\nLikewise, it should be easy for them to recongize when it's safe to restart block production -\nperhaps based on finality delay, validator set size, or some other factor that is yet to be decided\nwithin ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/axia-tech/cumulus"},"Cumulus"),"."),(0,l.kt)("h3",{id:"allychain-development-kits-pdks"},"Allychain Development Kits (PDKs)"),(0,l.kt)("p",null,"Allychain Development Kits are a set of tools that enable developers to create their own\napplications as allychains. For more info see ",(0,l.kt)("a",{parentName:"p",href:"../build/build-allychains.md##allychain-development-kit-(PDK)"},"PDK content"),"."),(0,l.kt)("p",null,"Please see the ",(0,l.kt)("a",{parentName:"p",href:"../build/build-allychains"},"Allychain Development page")," for more information."),(0,l.kt)("h2",{id:"resources"},"Resources"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://medium.com/AXIA.network/AXIA-the-allychain-3808040a769a"},"AXIA: The Allychain"),' -\nBlog post by AXIA co-founder Rob Habermeier that introduced allychains in 2017 as "a simpler\nform of blockchain, which attaches to the security provided by a Relay Chain rather than providing\nits own. The Relay Chain provides security to attached allychains, but also provides a guarantee\nof secure message-passing between them."'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://AXIA.network/the-path-of-a-allychain-block/"},"The Path of a Allychain Block")," - A\ntechnical walkthrough of how allychains interact with the Relay Chain.")))}u.isMDXComponent=!0},41315:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/one_allychain-5fe48b5bfbcf7680a91b0f5a940b39c7.png"}}]);