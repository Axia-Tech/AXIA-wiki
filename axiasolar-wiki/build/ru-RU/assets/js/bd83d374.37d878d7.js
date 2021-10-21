"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6033],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>h});var o=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,o,i=function(n,e){if(null==n)return{};var t,o,i={},a=Object.keys(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var l=o.createContext({}),d=function(n){var e=o.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},u=function(n){var e=d(n.components);return o.createElement(l.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(n,e){var t=n.components,i=n.mdxType,a=n.originalType,l=n.parentName,u=s(n,["components","mdxType","originalType","parentName"]),p=d(t),h=i,b=p["".concat(l,".").concat(h)]||p[h]||c[h]||a;return t?o.createElement(b,r(r({ref:e},u),{},{components:t})):o.createElement(b,r({ref:e},u))}));function h(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var a=t.length,r=new Array(a);r[0]=p;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s.mdxType="string"==typeof n?n:i,r[1]=s;for(var d=2;d<a;d++)r[d]=t[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},97422:(n,e,t)=>{t.r(e),t.d(e,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>d,toc:()=>u,default:()=>p});var o=t(87462),i=t(63366),a=(t(67294),t(3905)),r=["components"],s={id:"maintain-guides-how-to-unbond",title:"Unbonding and Rebonding",sidebar_label:"Unbonding and Rebonding",slug:"../maintain-guides-how-to-unbond"},l=void 0,d={unversionedId:"maintain/maintain-guides-how-to-unbond",id:"maintain/maintain-guides-how-to-unbond",isDocsHomePage:!1,title:"Unbonding and Rebonding",description:"The following describes how to stop nominating or validating and retrieve your stake. Please note",source:"@site/../docs/maintain/maintain-guides-how-to-unbond.md",sourceDirName:"maintain",slug:"/maintain-guides-how-to-unbond",permalink:"/ru-RU/docs/maintain-guides-how-to-unbond",editUrl:"https://github.com/axia-tech/AXIA-wiki/edit/master/docs/maintain/maintain-guides-how-to-unbond.md",tags:[],version:"current",lastUpdatedBy:"Arjun Chamyal",lastUpdatedAt:1634274758,formattedLastUpdatedAt:"15.10.2021",frontMatter:{id:"maintain-guides-how-to-unbond",title:"Unbonding and Rebonding",sidebar_label:"Unbonding and Rebonding",slug:"../maintain-guides-how-to-unbond"},sidebar:"docs",previous:{title:"How to Nominate on AXIA",permalink:"/ru-RU/docs/maintain-guides-how-to-nominate-AXIA"},next:{title:"How to run a Validator on AXIA",permalink:"/ru-RU/docs/maintain-guides-how-to-validate-AXIA"}},u=[{value:"Step 1: Stop Nominating",id:"step-1-stop-nominating",children:[],level:3},{value:"Step 2: Unbonding an amount",id:"step-2-unbonding-an-amount",children:[],level:3},{value:"Rebonding before the end of the unbonding period",id:"rebonding-before-the-end-of-the-unbonding-period",children:[],level:2}],c={toc:u};function p(n){var e=n.components,s=(0,i.Z)(n,r);return(0,a.kt)("wrapper",(0,o.Z)({},c,s,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The following describes how to stop nominating or validating and retrieve your stake. Please note\nthat all networks on which you can nominate have a delayed exit period, called the ",(0,a.kt)("em",{parentName:"p"},"unbonding\nperiod"),", which serves as a cooldown. You will not be able to transfer your tokens before this period\nhas elapsed, and you will not receive any staking rewards during this period (as you are not\nnominating any validators)."),(0,a.kt)("h3",{id:"step-1-stop-nominating"},"Step 1: Stop Nominating"),(0,a.kt)("p",null,"On the ",(0,a.kt)("a",{parentName:"p",href:"https://AXIA.js.org/apps"},"AXIA-JS Apps"),' navigate to the "Staking" tab.'),(0,a.kt)("p",null,'On this tab click on the "Account Actions" tab at the top of the screen.'),(0,a.kt)("p",null,'Here, click "Stop Nominating" or "Stop Validating" (depending on your role) on an account you\'re\nstaking with and would like to free the funds for. This will "chill" the tokens.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Stop Nominating Button",src:t(7558).Z})),(0,a.kt)("p",null,"After you confirm this transaction, your tokens will remain ",(0,a.kt)("em",{parentName:"p"},"bonded"),". This means they stay ready to\nbe distributed among nominees or used as validator self-stake again. To actually withdraw them, you\nneed to unbond."),(0,a.kt)("h3",{id:"step-2-unbonding-an-amount"},"Step 2: Unbonding an amount"),(0,a.kt)("p",null,'To unbond the amount, click the three dots next to the account you want to unbond tokens for, and\nselect "Unbond funds".'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Unbonding",src:t(61757).Z})),(0,a.kt)("p",null,'Select the amount you wish to unbond and click Unbond, then confirm the transaction. If successful,\nyour balance will show as "unbonding" with an indicator of how many more blocks remain until the\namount is fully unlocked.'),(0,a.kt)("p",null,"This duration varies depending on the network you're on and will typically be four times as fast on\nAXIALunar as it is on AXIA. The unbounding period is 28 days on AXIA, and 7 on AXIALunar."),(0,a.kt)("p",null,"Once this process is complete, you will have to issue another, final transaction: Withdraw Unbonded,\nwhich will be available in the same pop-up. You can also check how long you have to wait in order to\nwithdraw your stake in the\n",(0,a.kt)("a",{parentName:"p",href:"https://AXIA.js.org/apps/?rpc=wss%3A%2F%2Frpc.AXIA.io#/accounts"},"Accounts"),' page by\nexpanding your account balance. There is a tiny icon beside the word "unbonding" that will\neventually become an unlock icon once the remaning blocks get passed.'),(0,a.kt)("p",null,"Then, you can click that icon directly to submit the withdraw transaction. Finally, your\ntransferrable balance will increase by the amount of tokens you've just fully unbonded."),(0,a.kt)("h2",{id:"rebonding-before-the-end-of-the-unbonding-period"},"Rebonding before the end of the unbonding period"),(0,a.kt)("p",null,"If you want to rebond your tokens before the unbonding period is over, you can do this by issuing a\n",(0,a.kt)("inlineCode",{parentName:"p"},"rebond")," extrinsic. This allows you to bond your tokens that are still locked without waiting until\nthe end of the unbonding period."),(0,a.kt)("p",null,"In order to do this, you will need to issue an extrinsic manually from ",(0,a.kt)("a",{parentName:"p",href:"https://AXIA.js.org/apps"},"AXIA-JS Apps"),"."),(0,a.kt)("p",null,'Go to the "Extrinsics" option that\'s located in the "Developer" dropdown in the top menu.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"extrinsic menu",src:t(4643).Z})),(0,a.kt)("p",null,'Select the "staking" pallet and the "rebond" extrinsic. Enter the amount of tokens that are\ncurrently locked in unbonding that you want to rebond. Then click "Submit Transaction".'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"confirm",src:t(41289).Z})),(0,a.kt)("p",null,"Confirm the transaction in the next pop-up. Once the transaction is included in the next block your\ntokens will be rebonded again and you can start staking with them."))}p.isMDXComponent=!0},7558:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/unbond1-ac28fd601eaf5d80c62e08b5c2f03d9a.png"},61757:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/unbond2-c9c1b233e1b19c9981ee70dccb8d345c.png"},4643:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/rebonding-1-8e09e2666bdb7b018d89497290727242.png"},41289:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/rebonding-2-28464978a711b44c1904f46a10c228bb.png"}}]);