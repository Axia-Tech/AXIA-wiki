"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4800],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),l=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),h=a,g=p["".concat(i,".").concat(h)]||p[h]||d[h]||r;return n?o.createElement(g,s(s({ref:t},u),{},{components:n})):o.createElement(g,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<r;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},13392:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>i,metadata:()=>l,toc:()=>u,default:()=>p});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),s=["components"],c={id:"learn-account-restore",title:"Backing up and Restoring Accounts",sidebar_label:"Backing up and Restoring Accounts",description:"Step-by-step guides on backing up and restoring a AXIA account.",slug:"../learn-account-restore"},i=void 0,l={unversionedId:"learn/learn-account-restore",id:"learn/learn-account-restore",isDocsHomePage:!1,title:"Backing up and Restoring Accounts",description:"Step-by-step guides on backing up and restoring a AXIA account.",source:"@site/../docs/learn/learn-account-restore.md",sourceDirName:"learn",slug:"/learn-account-restore",permalink:"/zh-CN/docs/learn-account-restore",editUrl:"https://github.com/axia-tech/AXIA-wiki/edit/master/docs/learn/learn-account-restore.md",tags:[],version:"current",lastUpdatedBy:"Arjun Chamyal",lastUpdatedAt:1634274758,formattedLastUpdatedAt:"2021/10/15",frontMatter:{id:"learn-account-restore",title:"Backing up and Restoring Accounts",sidebar_label:"Backing up and Restoring Accounts",description:"Step-by-step guides on backing up and restoring a AXIA account.",slug:"../learn-account-restore"},sidebar:"docs",previous:{title:"Account Generation",permalink:"/zh-CN/docs/learn-account-generation"},next:{title:"AXC",permalink:"/zh-CN/docs/learn-AXC"}},u=[{value:"AXIA{.js} Browser Plugin",id:"axiajs-browser-plugin",children:[],level:2},{value:"AXIA-JS",id:"axia-js",children:[{value:"Using an Existing Mnemonic Seed to Restore an Account",id:"using-an-existing-mnemonic-seed-to-restore-an-account",children:[],level:3}],level:2},{value:"AXIA Signer",id:"axia-signer",children:[],level:2}],d={toc:u};function p(e){var t=e.components,c=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Depending on what software you are using to access your account, there are various ways to back up\nand restore your account. It is a good idea to back your information up and keep it in a secure\nplace.. Note that in order to recover an account, you should create your account according to the\ninstructions ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-account-generation"},"here"),". In general, however, as long as you know how you\ncreated your account, and have the seed phrase (mnemonic phrase) or JSON file (and password) stored\nsecurely, you will be able to restore your account."),(0,r.kt)("p",null,"This page covers backing up and restoring accounts in AXIA{.js} Browser Plugin, AXIA-JS UI,\nand AXIA Signer. For other wallet applications, please see their specific documentation."),(0,r.kt)("h2",{id:"axiajs-browser-plugin"},"AXIA{.js} Browser Plugin"),(0,r.kt)("p",null,"To back up an account using the AXIA{.js} browser plugin, open the extension and select the\ndesired account to back up. Click on the three dots beside the address to open up the account\noptions menu."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"list-accounts-plugin",src:n(18491).Z})),(0,r.kt)("p",null,"Click on the Export Account button, which will then ask you for the password for that specific\naccount. Once you enter the correct password, the browser will automatically download a ",(0,r.kt)("inlineCode",{parentName:"p"},".json")," file\nthat will hold all the account restoration details that will be used when you restore your account.\nYou should store this file securely. Note that you will need the password for this account to\nrestore it."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"enter-password-plugin",src:n(13500).Z})),(0,r.kt)("p",null,'To restore the account from this JSON file, once again open the AXIA{.js} browser plugin. Click\non the + button at the top. This will open up a menu wih several choices - select "Restore account\nfrom backup JSON file". The program then prompts you for the ',(0,r.kt)("inlineCode",{parentName:"p"},".json")," file which was download earlier\nand the password for that account."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"restore-account-plugin",src:n(8105).Z})),(0,r.kt)("p",null,'Once these are filled out, and the "Restore" button has been pressed, you\'ll be taken back to the\nmain page of the plugin. This account will now be listed with the rest of your accounts.'),(0,r.kt)("h2",{id:"axia-js"},"AXIA-JS"),(0,r.kt)("p",null,"If you're using the main AXIA-JS UI, restoring an account will feel similar to restoring an\naccount on AXIA-JS browser plugin. Navigate to the\n",(0,r.kt)("a",{parentName:"p",href:"https://AXIA.js.org/apps/#/accounts"},"Accounts page")," of AXIA-JS."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"click-account-restore-AXIA",src:n(30278).Z})),(0,r.kt)("p",null,'Click on the "Restore JSON" button, which will let you upload your ',(0,r.kt)("inlineCode",{parentName:"p"},".json")," file that you downloaded\nand enter your password for that account. This ",(0,r.kt)("inlineCode",{parentName:"p"},".json")," file holds all relevant data about the\naccount to be used in account restoration. Note that you will need to enter your password here; the\nfile cannot be unencrypted without it."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"restore-account-AXIA",src:n(32541).Z})),(0,r.kt)("p",null,'After you press the "Restore" button, you should see a green notification letting you know that your\naccount has been restored. It will now be included in your accounts list on this browser.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"restore-complete-AXIA",src:n(22997).Z})),(0,r.kt)("h3",{id:"using-an-existing-mnemonic-seed-to-restore-an-account"},"Using an Existing Mnemonic Seed to Restore an Account"),(0,r.kt)("p",null,"You can also always restore an account by using the mnemonic phrase (seed words)."),(0,r.kt)("p",null,"To do this with AXIA-JS, navigate to the\n",(0,r.kt)("a",{parentName:"p",href:"https://AXIA.js.org/apps/#/accounts"},"AXIA-JS Accounts Page"),'. Click on the "Add Account"\nbutton, and enter a name and password for the account. The name and the password of this added\naccount can be set to whatever you\'d like, it does not need to be the same name and password as when\nthis account was initially created.'),(0,r.kt)("p",null,"After this, delete the generated mnemonic phrase (seed words) and replace them with your ",(0,r.kt)("em",{parentName:"p"},"existing\nseed words"),". When you replace the generated mnemonic seed with your existing one, you are not\ncreating a new account, rather adding that account onto the AXIA-JS UI. Any account using the\nsame seed words will have control over that account on-chain. This is why it is so important to keep\nyour seed words secret and safe."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"restore-using-json",src:n(45395).Z})),(0,r.kt)("p",null,'Finally, click the "Save" button, then click the "Create and backup account" button. This will\ndownload the ',(0,r.kt)("inlineCode",{parentName:"p"},".json")," file which contains the data to be used in account restoration. You can use\nthis JSON file to restore this account in the future using the instructions above, or simply delete\nthe file and continue to use the mnemonic phrase to restore the account if necessary."),(0,r.kt)("h2",{id:"axia-signer"},"AXIA Signer"),(0,r.kt)("p",null,"If you've created an account with AXIA Signer, you can recover that account with your seed words.\nIf you generated the account with another wallet, there may be additional steps necessary, including\nsetting the derivation path: see\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/axia-tech/axia-signer/blob/master/docs/tutorials/Recover-Account-AXIAjs.md"},"this document"),"\nfor details."),(0,r.kt)("p",null,'On AXIA Signer, click on the top-right user icon on the screen. Proceed to "+ Add Identity". On\nthis screen, tap on the "recover existing identity" button.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"restore-using-axia",src:n(88529).Z})),(0,r.kt)("p",null,"Enter in the identity name and the mnemonic seed phrase from the account you'd like to restore."),(0,r.kt)("p",null,"Set an identity PIN that will be used to unlock this account when you need to."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"restore-using-axia",src:n(8327).Z})),(0,r.kt)("p",null,"The identity has now been recovered and you can select a network to create the first account."))}p.isMDXComponent=!0},45395:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/AXIA-js-existing-json-07c2209db212d4202757db16b523d72f.png"},13500:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/AXIA.js_enter_password-abb38a2301e372e2e3afdde709d4056a.png"},18491:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/AXIA.js_list_accounts-c3d1bd4fd5badb53390f3b4eb1811a52.png"},8105:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/AXIA.js_restore_account-4cf6118fb5b89a03bf0c8a9168f6a9c5.png"},30278:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/AXIA_click_restore-858c9546cbc2fb30a8ae2abb0997ff5b.png"},32541:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/AXIA_restore_account-eef96d791311ab4bbf64fe35b38f9714.png"},22997:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/AXIA_restore_complete-5393329c8aaf238ff34395ea080650e4.png"},88529:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/axia_Signer_restore1-9157480e755d852dc5a965b12228b98d.PNG"},8327:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/axia_Signer_restore2-f09f4cfba31cc5e70a5717b59c9fb225.PNG"}}]);