"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[654],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),h=o,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var u=2;u<i;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},69956:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>u,toc:()=>c,default:()=>d});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),r=["components"],s={id:"maintain-guides-how-to-nominate-axialunar",title:"Be a Nominator (AXIALunar)",sidebar_label:"Nominator Guide",slug:"../../maintain-guides-how-to-nominate-axialunar"},l=void 0,u={unversionedId:"maintain/axialunar/maintain-guides-how-to-nominate-axialunar",id:"maintain/axialunar/maintain-guides-how-to-nominate-axialunar",isDocsHomePage:!1,title:"Be a Nominator (AXIALunar)",description:"The following information applies to the AXIALunar network. If you want to nominate on AXIA,",source:"@site/../docs/maintain/axialunar/maintain-guides-how-to-nominate-axialunar.md",sourceDirName:"maintain/axialunar",slug:"/maintain-guides-how-to-nominate-axialunar",permalink:"/ru-RU/docs/maintain-guides-how-to-nominate-axialunar",editUrl:"https://github.com/axia-tech/AXIA-wiki/edit/master/docs/maintain/axialunar/maintain-guides-how-to-nominate-axialunar.md",tags:[],version:"current",lastUpdatedBy:"Arjun Chamyal",lastUpdatedAt:1634274758,formattedLastUpdatedAt:"15.10.2021",frontMatter:{id:"maintain-guides-how-to-nominate-axialunar",title:"Be a Nominator (AXIALunar)",sidebar_label:"Nominator Guide",slug:"../../maintain-guides-how-to-nominate-axialunar"}},c=[{value:"Setting up Stash and Controller keys",id:"setting-up-stash-and-controller-keys",children:[],level:2},{value:"Using AXIA-JS UI",id:"using-axia-js-ui",children:[{value:"Step 1: Bond your tokens",id:"step-1-bond-your-tokens",children:[],level:3},{value:"Step 2: Nominate a validator",id:"step-2-nominate-a-validator",children:[],level:3},{value:"Step 3: Stop nominating",id:"step-3-stop-nominating",children:[],level:3}],level:2},{value:"Using Command-Line Interface (CLI)",id:"using-command-line-interface-cli",children:[{value:"Step 1: Install @AXIA-js/api-cli",id:"step-1-install-axia-jsapi-cli",children:[],level:3},{value:"Step 2. Bond your LUNAR",id:"step-2-bond-your-lunar",children:[],level:3},{value:"Step 3. Nominate a validator",id:"step-3-nominate-a-validator",children:[],level:3}],level:2}],p={toc:c};function d(e){var t=e.components,s=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The following information applies to the AXIALunar network. If you want to nominate on AXIA,\ncheck out the ",(0,i.kt)("a",{parentName:"p",href:"/ru-RU/docs/maintain-guides-how-to-validate-AXIA"},"AXIA guide")," instead.")),(0,i.kt)("p",null,"Nominators are one type of participant in the staking subsystem of AXIA. They are responsible\nfor appointing their stake to the validators who are the second type of participant. By appointing\ntheir stake, they are able to elect the active set of validators and share in the rewards that are\npaid out."),(0,i.kt)("p",null,"While the ",(0,i.kt)("a",{parentName:"p",href:"/ru-RU/docs/maintain-guides-how-to-validate-axialunar"},"validators"),' are active participants in the network that engage in the block production\nand finality mechanisms, nominators take a more passive role with a "set-it-and-forget-it" approach.\nBeing a nominator does not require running a node of your own or worrying about online uptime.\nHowever, a good nominator performs due diligence on the validators that they elect. When looking for\nvalidators to nominate, a nominator should pay attention to their own reward percentage for\nnominating a specific validator - as well as the risk that they bear of being slashed if the\nvalidator gets slashed.'),(0,i.kt)("h2",{id:"setting-up-stash-and-controller-keys"},"Setting up Stash and Controller keys"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you prefer a video format, the following videos related to staking are available:"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=VN4S8MofEW8"},"Staking with a Ledger and AXIAJS Apps")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=obZyGeHrm_M&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=43"},"Staking with a Ledger and Ledger Live")))),(0,i.kt)("p",null,"Nominators are recommended to set up two separate stash and controller accounts. Explanation and\nreasoning for generating distinct accounts for this purpose is elaborated in the ",(0,i.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-keys###%22controller%22-and-%22stash%22-keys"},"keys")," section of\nthe Wiki."),(0,i.kt)("p",null,"You can generate your stash and controller account via any of the recommended methods that are\ndetailed on the ",(0,i.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-account-generation"},"account generation")," page."),(0,i.kt)("p",null,"Starting with runtime version v2023 natively included in client version\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/axia-tech/AXIA/releases/tag/v0.8.23"},"0.8.23"),", payouts can go to any custom\naddress. If you'd like to redirect payments to an account that is neither the controller nor the\nstash account, set one up. Note that it is extremely unsafe to set an exchange address as the\nrecipient of the staking rewards."),(0,i.kt)("h2",{id:"using-axia-js-ui"},"Using AXIA-JS UI"),(0,i.kt)("h3",{id:"step-1-bond-your-tokens"},"Step 1: Bond your tokens"),(0,i.kt)("p",null,"On the ",(0,i.kt)("a",{parentName:"p",href:"https://AXIA.js.org/apps"},"AXIA-JS UI"),' navigate to the "Staking" tab (within the\n"Network" menu).'),(0,i.kt)("p",null,'The "Staking Overview" subsection will show you all the active validators and their information -\ntheir identities, the amount of LUNAR that are staking for them, amount that is their own provided\nstake, how much they charge in commission, the era points they\'ve earned in the current era, and the\nlast block number that they produced. If you click on the chart button it will take you to the\n"Validator Stats" page for that validator that shows you more detailed and historical information\nabout the validator\'s stake, rewards and slashes.'),(0,i.kt)("p",null,'The "Account actions" subsection (',(0,i.kt)("a",{parentName:"p",href:"https://AXIA.js.org/apps/#/staking/actions"},"link"),") allows you\nto stake and nominate."),(0,i.kt)("p",null,'The "Payouts" subsection (',(0,i.kt)("a",{parentName:"p",href:"https://AXIA.js.org/apps/#/staking/payouts"},"link"),") allows you to\nclaim rewards from staking."),(0,i.kt)("p",null,'The "Targets" subsection (',(0,i.kt)("a",{parentName:"p",href:"https://AXIA.js.org/apps/#/staking/targets"},"link"),") will help you\nestimate your earnings and this is where it's good to start picking favorites."),(0,i.kt)("p",null,'The "Waiting" subsection (',(0,i.kt)("a",{parentName:"p",href:"https://AXIA.js.org/apps/#/staking/waiting"},"link"),") lists all pending\nvalidators that are awaiting more nominations to enter the active validator set. Validators will\nstay in the waiting queue until they have enough LUNAR backing them (as allocated through the\n",(0,i.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-phragmen"},"Phragm\xe9n election mechanism"),"). It is possible validator can remain in the queue\nfor a very long time if they never get enough backing."),(0,i.kt)("p",null,'The "Validator Stats" subsection (',(0,i.kt)("a",{parentName:"p",href:"https://AXIA.js.org/apps/#/staking/query"},"link"),") allows you\nto query a validator's stash address and see historical charts on era points, elected stake,\nrewards, and slashes."),(0,i.kt)("p",null,'Pick "Account actions" underneath "Network" > "Staking", then click the "+ Nominator" button.'),(0,i.kt)("p",null,"You will see a modal window that looks like the below:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"nominator-update-1",src:a(80786).Z})),(0,i.kt)("p",null,'Select a "value bonded" that is ',(0,i.kt)("strong",{parentName:"p"},"less")," than the total amount of LUNAR you have, so you have some\nleft over to pay transaction fees. Transaction fees are currently at least 0.01 LUNAR, but they are\ndynamic based on a variety of factors including the load of recent blocks."),(0,i.kt)("p",null,"Also be mindful of the reaping threshold - the amount that must remain in an account lest it be\nburned. That amount is 0.01 in AXIALunar, so it's recommended to keep at least 0.1 LUNAR in your account\nto be on the safe side."),(0,i.kt)("p",null,"Choose whatever payment destination that makes sense to you. If you're unsure, you can choose \"Stash\naccount (increase amount at stake)\" to simply accrue the rewards into the amount you're staking and\nearn compound interest."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Payout account selection dropdown with the custom account option highlighted",src:a(62585).Z})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"These concepts have been further explained in AXIA's\n",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=mNStMPZjiHM&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8"},"UI Walkthrough Video"))),(0,i.kt)("h3",{id:"step-2-nominate-a-validator"},"Step 2: Nominate a validator"),(0,i.kt)("p",null,"You are now bonded. Being bonded means your tokens are locked and could be\n",(0,i.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-staking#slashing"},"slashed")," if the validators you nominate misbehave. All bonded funds can\nnow be distributed to up to 16 validators. Be careful about the validators you choose since you will\nbe slashed if your validator commits an offence."),(0,i.kt)("p",null,'Click on "Nominate" on an account you\'ve bonded and you will be presented with another popup asking\nyou to select some validators.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Nominating validators",src:a(26782).Z})),(0,i.kt)("p",null,"Select them, confirm the transaction, and you're done - you are now nominating. Your nominations\nwill become active in the next era. Eras last six hours on AXIALunar - depending on when you do this,\nyour nominations may become active almost immediately, or you may have to wait almost the entire six\nhours before your nominations are active. You can check how far along AXIALunar is in the current era\non the ",(0,i.kt)("a",{parentName:"p",href:"https://AXIA.js.org/apps/#/staking"},"Staking page"),"."),(0,i.kt)("p",null,"Assuming at least one of your nominations ends up in the active validator set, you will start to get\nrewards allocated to you. In order to claim them (i.e., add them to your account), you must manually\nclaim them. To initiate a claim, you can do it yourself or have the validator that you staked for\ninitiate a claim. This is to help optimize the effectiveness and storage of payouts on AXIALunar. See\nthe ",(0,i.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-staking#claiming-rewards"},"Claiming Rewards")," section of the Staking wiki page for more\ndetails."),(0,i.kt)("h3",{id:"step-3-stop-nominating"},"Step 3: Stop nominating"),(0,i.kt)("p",null,"At some point, you might decide to stop nominating one or more validators. You can always change who\nyou're nominating, but you cannot withdraw your tokens unless you unbond them. Detailed instructions\nare available ",(0,i.kt)("a",{parentName:"p",href:"/ru-RU/docs/maintain-guides-how-to-unbond"},"here"),"."),(0,i.kt)("h2",{id:"using-command-line-interface-cli"},"Using Command-Line Interface (CLI)"),(0,i.kt)("p",null,"Apart from using the AXIA-JS UI to participate in the staking, you can do all these things in\nCLI instead. The CLI approach allows you to interact with the AXIA / AXIALunar network without\ngoing to the AXIAdoJS dashboard."),(0,i.kt)("h3",{id:"step-1-install-axia-jsapi-cli"},"Step 1: Install @AXIA-js/api-cli"),(0,i.kt)("p",null,"We assume you have installed ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org"},"NodeJS with npm"),". Run the following command to\ninstall the ",(0,i.kt)("inlineCode",{parentName:"p"},"@AXIA-js/api-cli")," globally:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g @AXIA-js/api-cli\n")),(0,i.kt)("h3",{id:"step-2-bond-your-lunar"},"Step 2. Bond your LUNAR"),(0,i.kt)("p",null,"Executing the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'AXIA-js-api --seed "MNEMONIC_AHRASE" tx.staking.bond CONTROLLER_ADDRESS NUMBER_OF_TOKENS REWARD_DESTINATION --ws WEBSOCKET_ENDPOINT\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CONTROLLER_ADDRESS"),": An address you would like to bond to the stash account. Stash and Controller\ncan be the same address but it is not recommended since it defeats the security of the two-account\nstaking model."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"NUMBER_OF_TOKENS"),": The number of LUNAR / AXC you would like to stake to the network. ",(0,i.kt)("strong",{parentName:"p"},"Note"),": LUNAR\nhas twelve decimal places and is always represented as an integer with zeroes at the end. So 1 LUNAR =\n1_000_000_000_000 Plancks."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"REWARD_DESTINATION"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Staked")," - Pay into the stash account, increasing the amount at stake accordingly."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Stash")," - Pay into the stash account, not increasing the amount at stake."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Account")," - Pay into a custom account, like so:\n",(0,i.kt)("inlineCode",{parentName:"li"},"Account DMTHrNcmA8QbqRS4rBq8LXn8ipyczFoNMb1X4cY2WD9tdBX"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Controller")," - Pay into the controller account.")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'AXIA-js-api --seed "xxxx xxxxx xxxx xxxxx" tx.staking.bond DMTHrNcmA8QbqRS4rBq8LXn8ipyczFoNMb1X4cY2WD9tdBX 1000000000000 Staked --ws wss://axialunar-rpc.AXIA.io/\n')),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'...\n...\n    "status": {\n      "InBlock": "0x0ed1ec0ba69564e8f98958d69f826adef895b5617366a32a3aa384290e98514e"\n    }\n')),(0,i.kt)("p",null,"You can check the transaction status by using the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"InBlock")," in\n",(0,i.kt)("a",{parentName:"p",href:"https://axiascan.io/pre/axialunar"},"AXIAscan"),". Also, you can verify the bonding state under the\n",(0,i.kt)("a",{parentName:"p",href:"https://AXIA.js.org/apps/#/staking/actions"},"Staking")," page on the AXIA-JS Apps Dashboard."),(0,i.kt)("h3",{id:"step-3-nominate-a-validator"},"Step 3. Nominate a validator"),(0,i.kt)("p",null,"To nominate a validator, you can execute the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'AXIA-js-api --seed "MNEMONIC_AHRASE" tx.staking.nominate \'["VALIDATOR_ADDRESS"]\' --ws WS_ENDPOINT\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'AXIA-js-api --seed "xxxx xxxxx xxxx xxxxx" tx.staking.nominate \'["CmD9vaMYoiKe7HiFnfkftwvhKbxN9bhyjcDrfFRGbifJEG8","E457XaKbj2yTB2URy8N4UuzmyuFRkcdxYs67UvSgVr7HyFb"]\' --ws wss://axialunar-rpc.AXIA.io/\n')),(0,i.kt)("p",null,"After a few seconds, you should see the hash of the transaction and if you would like to verify the\nnomination status, you can check that on the AXIA-JS UI as well."))}d.isMDXComponent=!0},80786:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/axialunar_nominator_popup-9ffc9136d077f04a74b8cabab3f019e8.png"},26782:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/axialunar_nominator_selection-44eb6e4caacefe9e4b54b255e1990022.png"},62585:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/01-d547392c24aaf9c82ef19f735f54e5c4.png"}}]);