"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2686],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var r=n.createContext({}),c=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(r.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,h=d["".concat(r,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=d;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},84455:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>r,metadata:()=>c,toc:()=>p,default:()=>d});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),l=["components"],s={id:"claims",title:"AXIA Claims",sidebar_label:"Claims",slug:"../claims"},r=void 0,c={unversionedId:"general/claims",id:"general/claims",isDocsHomePage:!1,title:"AXIA Claims",description:"If you made a AXC purchase in one of the pre-launch sales, then you will need to claim your AXC",source:"@site/../docs/general/claims.md",sourceDirName:"general",slug:"/claims",permalink:"/ru-RU/docs/claims",editUrl:"https://github.com/axia-tech/AXIA-wiki/edit/master/docs/general/claims.md",tags:[],version:"current",lastUpdatedBy:"Arjun Chamyal",lastUpdatedAt:1634850687,formattedLastUpdatedAt:"22.10.2021",frontMatter:{id:"claims",title:"AXIA Claims",sidebar_label:"Claims",slug:"../claims"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/ru-RU/docs/getting-started"},next:{title:"Redenomination of AXC",permalink:"/ru-RU/docs/redenomination"}},p=[{value:"Making a Claim",id:"making-a-claim",children:[{value:"What You Will Need",id:"what-you-will-need",children:[{value:"Claiming your AXC with MyCrypto",id:"claiming-your-axc-with-mycrypto",children:[],level:4},{value:"Verifying your Claim",id:"verifying-your-claim",children:[],level:4}],level:3},{value:"Third Party Claims Processes",id:"third-party-claims-processes",children:[],level:3}],level:2},{value:"Attesting to a Statement",id:"attesting-to-a-statement",children:[],level:2},{value:"Using AXIA-JS Apps",id:"using-axia-js-apps",children:[{value:"What you will need",id:"what-you-will-need-1",children:[],level:3},{value:"Go to AXIA-JS Apps",id:"go-to-axia-js-apps",children:[],level:3},{value:"Make the Attestation",id:"make-the-attestation",children:[],level:3}],level:2},{value:"Using AXIA Signer",id:"using-axia-signer",children:[{value:"What you will need",id:"what-you-will-need-2",children:[],level:3},{value:"Go to AXIA-JS Apps",id:"go-to-axia-js-apps-1",children:[],level:3},{value:"Make the Attestation",id:"make-the-attestation-1",children:[],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,s=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you made a AXC purchase in one of the pre-launch sales, then you will need to claim your AXC\ntokens. For those who made a pre-genesis claim by sending a claim transaction to the Claims Contract\non Ethereum, you will still need to send a free ",(0,i.kt)("em",{parentName:"p"},"attest")," transaction that will agree to the terms\nand conditions of your allocation. If you did not make a pre-genesis claim, then you will claim and\nattest in a single transaction."),(0,i.kt)("p",null,"This guide will walk you through the steps for either making a claim or attesting to the statement."),(0,i.kt)("p",null,"If you are making a claim on AXIA for the first time, please read on below in the\n",(0,i.kt)("a",{parentName:"p",href:"#making-a-claim"},"making a claim")," section. If you've already claimed during the pre-genesis claims\nperiod, please proceed to the ",(0,i.kt)("a",{parentName:"p",href:"#attesting-to-a-statement"},"attesting to a statement")," section instead."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"To learn more on How to claim your AXC post genesis, check out our walkthrough\n",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=rjhWfKXJTCg&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=22"},"video"),"\nand our video on\n",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=AlwrM27x3As&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=16"},"Claiming AXC with an Ethereum address generated using an old mnemonic phrase"))),(0,i.kt)("h2",{id:"making-a-claim"},"Making a Claim"),(0,i.kt)("p",null,"If you did not make a claim in the pre-genesis claims period, then you are able to claim your AXC\ntokens after genesis. There is no time limit for making your claim so feel free to do this whenever\nyou are most comfortable."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'Note: When you make a claim, you will also attest to the agreement that corresponds to your AXC\nallocation. The two actions, "claim" and "attest", are done in a single transaction, but for the\nmost part this is simplified from the perspective of the user.')),(0,i.kt)("h3",{id:"what-you-will-need"},"What You Will Need"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Ethereum account that holds the AXC indicator tokens"),(0,i.kt)("li",{parentName:"ul"},"The MyCrypto wallet"),(0,i.kt)("li",{parentName:"ul"},"A AXIA account")),(0,i.kt)("p",null,"You should already have your Ethereum account that holds the AXC indicator tokens from AXIA's\nprior sales. You will need to have access to this account in order to make a signature."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://download.mycrypto.com/"},"MyCrypto")," is a versatile wallet that supports a variety of storage methods for your Ethereum\naccount. Go to their downloads page and ensure that you download the latest version for your\noperating system. This is important because the latest version will always have the latest security\npatches."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"NOTICE"),": It is much more secure to download and use the MyCrypto app locally. You can always\nfind the most up-to-date releases of the desktop app on their ",(0,i.kt)("a",{parentName:"p",href:"https://download.mycrypto.com/"},"releases page"),".")),(0,i.kt)("p",null,"You will need a AXIA account to claim your AXC. Please follow the instructions on the ",(0,i.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-account-generation"},"account\ngeneration")," page for generating a new AXIA account."),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("a",{parentName:"p",href:"https://claims.AXIA.network/"},"claims guide")," to claim AXC that were purchased in\nthe form of AXC Allocation Indicators on Ethereum before June 30, 2020. These steps are broken down\nin the remaining sections of this page."),(0,i.kt)("h4",{id:"claiming-your-axc-with-mycrypto"},"Claiming your AXC with MyCrypto"),(0,i.kt)("p",null,"The AXIA-JS ",(0,i.kt)("a",{parentName:"p",href:"https://AXIA.js.org/apps/#/claims"},"Claims app")," helps you sign a message from MyCrypto. MyCrypto is a good choice in\ncase you have stored the key to the Ethereum account holding your AXC indicator tokens on a hardware\ndevice like a Ledger Nano S or a Trezor. It also supports raw private keys, mnemonics, and AXIA\nsigner."),(0,i.kt)("p",null,'Once you\'ve downloaded MyCrypto and have it running locally (we recommend an air-gapped computer for\nmaximum security), you can start by navigating to the Claims app on AXIA-JS Apps. Select the\naccount you would like to claim the AXC into and click the blue "Continue" button to proceed. Your\nscreen should look something like this:'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"claim-1",src:a(18151).Z})),(0,i.kt)("p",null,'Now you will need to provide the Ethereum address that is associated with the AXC indicator tokens\nthat you will claim. Enter the Ethereum address into the box and click "Continue".'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"claim-2",src:a(57974).Z})),(0,i.kt)("p",null,"Next your screen should look the image below."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"claim-2-1",src:a(47978).Z})),(0,i.kt)("p",null,'The hex-encoded string that follows the sentence: "Pay AXC to the AXIA account:" is the\nhex-encoded public key of your AXIA account, minus the ',(0,i.kt)("inlineCode",{parentName:"p"},"0x")," prefix."),(0,i.kt)("p",null,'The next step is to go to the MyCrypto application and click on "Sign & Verify Message" tab.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"claim-3",src:a(40023).Z})),(0,i.kt)("p",null,"This will prompt you to select a method for unlocking your wallet."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"claim-4",src:a(54509).Z})),(0,i.kt)("p",null,'After unlocking your wallet, paste the message from AXIA-JS into the "Message" box.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"claim-5",src:a(41132).Z})),(0,i.kt)("p",null,'When you click "Sign Message" you will get a JSON output like the one below:'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"claim-6",src:a(75262).Z})),(0,i.kt)("p",null,'Copy and paste the JSON output of the signed message from MyCrypto into the input box on the\nAXIA-JS UI and click "Confirm Claim."'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"claim-7",src:a(94317).Z})," ",(0,i.kt)("img",{alt:"claim-8",src:a(17295).Z})),(0,i.kt)("p",null,'A green box will appear telling you the amount to claim with a "Claim" button to make the claim.\nClick on the "Claim" button and click "Submit (no signature)" to complete the claim.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"claim-9",src:a(48758).Z})),(0,i.kt)("p",null,"If this claim succeeded, then you will see a success message and your AXC will be in the account\nthat you claimed to."),(0,i.kt)("h4",{id:"verifying-your-claim"},"Verifying your Claim"),(0,i.kt)("p",null,"After you make an on-chain claim for AXC, your balance should be updated on the AXIA UI\nimmediately."),(0,i.kt)("p",null,"Having trouble? Get support in the AXC ",(0,i.kt)("a",{parentName:"p",href:"https://riot.im/app/#/room/!kwIkVteRpPRjjTyvTe:AXIA.org?via=AXIA.org&via=matrix.org&via=matrix.axia.io"},"Claims Support")," channel."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"claim-10",src:a(87342).Z})),(0,i.kt)("p",null,"Congratulations, you have now completed the process for claiming and signing for your AXC."),(0,i.kt)("h3",{id:"third-party-claims-processes"},"Third Party Claims Processes"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"We do not recommend using third-party apps or processes to perform your claim or acquire AXC.")),(0,i.kt)("p",null,"Claiming using a third-party process can lead to the loss of your allocation, therefore we cannot\nrecommend using any third party apps to do so. Manually specifying your transaction data, as\nspecified in our claims process, is the only way to be certain you will receive your allocation."),(0,i.kt)("h2",{id:"attesting-to-a-statement"},"Attesting to a Statement"),(0,i.kt)("p",null,"If you've already made a pre-genesis claim, you still have to agree to a statement using your\nAXIA account."),(0,i.kt)("h2",{id:"using-axia-js-apps"},"Using AXIA-JS Apps"),(0,i.kt)("h3",{id:"what-you-will-need-1"},"What you will need"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Your AXIA account unlocked on AXIA-JS Apps UI.")),(0,i.kt)("p",null,"You will be sending a free transaction from your AXIA account on the AXIA-JS Apps UI. Once\nyou make this transaction you will have the tokens available in your account."),(0,i.kt)("h3",{id:"go-to-axia-js-apps"},"Go to AXIA-JS Apps"),(0,i.kt)("p",null,"Proceed to ",(0,i.kt)("a",{parentName:"p",href:"https://AXIA.js.org/apps/#/claims"},"AXIA-js Apps"),'. You will need to grant Apps access to your account in\nsome way. One way would be to go to the Accounts page and "create" a new account, replacing the\ngenerated seed or mnemonic with the one belonging to your account. The other way is by using the\nAXIA-JS extension and entering your seed or mnemonic there, which is generally safer than\nentering it directly to the Apps page.'),(0,i.kt)("h3",{id:"make-the-attestation"},"Make the Attestation"),(0,i.kt)("p",null,'After entering your account, you should see a red counter appear on the "Claim Tokens" tab on the\nleft navigation drawer.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"claim-attest-1",src:a(36640).Z})),(0,i.kt)("p",null,'Click on the "Claim Tokens" tab and you will see a large notification at the top of the page that\ntells you that you need to sign an attestation.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"claim-attest-2",src:a(45446).Z})),(0,i.kt)("p",null,"The notification will display one or more AXIA addresses that you have loaded in AXIA-JS\nthat you need to sign. Select a AXIA account with a claim using the drop down selection. If you\ndon't see a notification or don't see the selector, please double check that the account has been\nloaded into AXIA-JS and that it has already claimed during the preclaim period. As always, feel\nfree to reach out for help in the ",(0,i.kt)("a",{parentName:"p",href:"https://riot.im/app/#/room/!kwIkVteRpPRjjTyvTe:AXIA.org?via=AXIA.org&via=matrix.org&via=matrix.axia.io"},"Claims Support")," channel."),(0,i.kt)("p",null,'Click "Continue" and you will see a green box appear on the right.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"claim-attest-3",src:a(50559).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"claim-attest-4",src:a(96602).Z})),(0,i.kt)("p",null,'Click on "I Agree" and then "Sign and Submit" to make your free attest transaction. When the\ntransaction is included in the block, you will see a green success box appear in the upper right\ncorner and the AXC will be in your account.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"claim-attest-5",src:a(98417).Z})),(0,i.kt)("h2",{id:"using-axia-signer"},"Using AXIA Signer"),(0,i.kt)("h3",{id:"what-you-will-need-2"},"What you will need"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"AXIA Signer"),(0,i.kt)("li",{parentName:"ul"},"Your AXIA account linked to AXIA-JS Apps UI")),(0,i.kt)("p",null,"Before claiming, you should import your AXIA address on AXIA Signer to the AXIA-JS Apps.\nAll operations will use AXIA Signer to sign the transaction, but will broadcast it via the\nAXIA-JS Apps remote node. If you do not have a AXIA address, please follow the instructions\non the AXIA Signer section in the ",(0,i.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-account-generation"},"account generation")," page for generating a new AXIA\naccount."),(0,i.kt)("h3",{id:"go-to-axia-js-apps-1"},"Go to AXIA-JS Apps"),(0,i.kt)("p",null,"Proceed to ",(0,i.kt)("a",{parentName:"p",href:"https://AXIA.js.org/apps/#/claims"},"AXIA-JS Apps"),". You will need to import your address on AXIA Signer to\nthe Accounts page first."),(0,i.kt)("h3",{id:"make-the-attestation-1"},"Make the Attestation"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ps-claim-1",src:a(49293).Z})),(0,i.kt)("p",null,'Click "Add via Qr" on the right side.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ps-claim-2",src:a(48210).Z})),(0,i.kt)("p",null,'Open AXIA Signer and choose "AXIA" network.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ps-1",src:a(98038).Z})),(0,i.kt)("p",null,"Select the address that you have claimed AXC to during pre-genesis."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ps-2",src:a(95473).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ps-3",src:a(23815).Z})),(0,i.kt)("p",null,"Your address will be displayed in QR code format. You can move the QR code to the camera so that the\nAXIA-JS Apps can decode it."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ps-claim-3",src:a(49048).Z})),(0,i.kt)("p",null,'Once decoded successfully, input the name for your address and click "Create".'),(0,i.kt)("p",null,'You will notice that the digit beside the "Claim Tokens" menu increased by 1. It means the number of\naddresses on the Accounts page that need to do attestations.'),(0,i.kt)("p",null,"Go to the ",(0,i.kt)("a",{parentName:"p",href:"https://AXIA.js.org/apps/#/claims"},"Claim Tokens")," page and and you will see a large\nnotification at the top of the page that tells you that you need to sign an attestation."),(0,i.kt)("p",null,"Select the AXIA account that you just have imported with a claim using the drop-down selection.\nIf you don't see a notification or don't see the selector, please double check that the account has\nbeen loaded into AXIA-JS and that it has already claimed during the pre-genesis period. As\nalways, feel free to reach out for help in the ",(0,i.kt)("a",{parentName:"p",href:"https://riot.im/app/#/room/!kwIkVteRpPRjjTyvTe:AXIA.org?via=AXIA.org&via=matrix.org&via=matrix.axia.io"},"Claims Support")," channel."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ps-claim-5",src:a(66491).Z})),(0,i.kt)("p",null,'Then click "Continue" and you will see a green box appear on the right.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ps-claim-6",src:a(2854).Z})),(0,i.kt)("p",null,'Click on "I Agree" and then "Sign via Qr".'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ps-claim-7",src:a(47698).Z})),(0,i.kt)("p",null,"Now you need to sign the transaction using the AXIA Signer with your AXIA address."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ps-claim-8",src:a(73979).Z})),(0,i.kt)("p",null,'First, you need to press the "QR Scanner" on the AXIA Signer to scan the QR code that\'s shown on\nthe authorize transaction window to generate the raw transaction. Next, you may be required to input\nthe PIN on the AXIA Signer to generate the signed transaction as a QR code. Then move the QR code\nto the camera on the AXIA-JS Apps to continue.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ps-3r",src:a(65141).Z})),(0,i.kt)("p",null,"When the transaction is included in the block, you will see a green success box appear in the upper\nright corner and the AXC will be in your account."))}d.isMDXComponent=!0},18151:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/claim-1-2b1b9ebfe8a6e336fa0a271427f212da.jpg"},87342:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/claim-10-2b8c987c3d5f7e6d2009776b3eb9e9e6.jpg"},47978:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/claim-2-1-0b9ec18aab148c1a27305bf07bc3d1ef.jpg"},57974:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/claim-2-a31287ed8e2f50daabac5be91b0c85fb.jpg"},40023:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/claim-3-16e81a0109a873f0c030034f674cec8d.png"},54509:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/claim-4-c2bf6b97beb107d4d4b98e8f2e63cb88.png"},41132:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/claim-5-053a9379095bea16399ac389244a29ab.png"},75262:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/claim-6-dd240e5c61225f6a6d4991a566866b11.png"},94317:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/claim-7-732aac209122719aab6ce6996d744ac0.jpg"},17295:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/claim-8-a6272c827574e38dc6919bc2d48db773.jpg"},48758:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/claim-9-425ae08e7e5f8462bcf8f446bbc665d0.jpg"},36640:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/new-attest-1-8324596ba63ae98e9d281c19c43232b7.jpg"},45446:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/new-attest-2-55be43b93ed9473b41111d1cdea737a5.png"},50559:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/new-attest-3-aee0f82dc1359c2a2ccaf37b386d3f3c.jpg"},96602:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/new-attest-4-e0b5ea06782bd876df25fbcc0a20c616.jpg"},98417:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/new-attest-5-6d2c3b169d9f8e9ff37d07249f98f4e8.jpg"},98038:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ps-01-a7c13ea0fa91314e90777dc5fe8edf74.jpg"},95473:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ps-02-70df8dde3da5191a7116b0d0ae74d983.jpg"},23815:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ps-03-b31de5fd3228e78d441f3987b3a18743.jpg"},65141:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ps-3r-0f56624eed5f0375b4ffd81220b0e54d.jpg"},49293:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ps-claim-1-3eaf1a2e1df70f30fae3eddfc818f0f9.jpg"},48210:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ps-claim-2-e267593abd3b21e7eb97de2c3be77249.png"},49048:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ps-claim-3-5c30cd3c6e349886b11593d42990b853.png"},66491:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ps-claim-5-cd326cc07ad3db23bbda9c25a8217852.png"},2854:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ps-claim-6-f662fe4dda3206e0d34b39e60cb1e39c.png"},47698:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ps-claim-7-f0124f9494129cb6161f4db2706c8e42.png"},73979:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ps-claim-8-31143a501887c0aae7b0b127a27488db.png"}}]);