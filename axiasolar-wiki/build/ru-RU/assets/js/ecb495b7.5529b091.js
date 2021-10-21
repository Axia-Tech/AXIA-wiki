"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2136],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},82956:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,toc:()=>d,default:()=>p});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={id:"maintain-guides-how-to-systemd",title:"Using systemd for the Validator Node",sidebar_label:"Using systemd for the Validator Node",slug:"../maintain-guides-how-to-systemd"},l=void 0,c={unversionedId:"maintain/maintain-guides-how-to-systemd",id:"maintain/maintain-guides-how-to-systemd",isDocsHomePage:!1,title:"Using systemd for the Validator Node",description:"You can run your validator as a systemd process so that it",source:"@site/../docs/maintain/maintain-guides-how-to-systemd.md",sourceDirName:"maintain",slug:"/maintain-guides-how-to-systemd",permalink:"/ru-RU/docs/maintain-guides-how-to-systemd",editUrl:"https://github.com/axia-tech/AXIA-wiki/edit/master/docs/maintain/maintain-guides-how-to-systemd.md",tags:[],version:"current",lastUpdatedBy:"Arjun Chamyal",lastUpdatedAt:1634274758,formattedLastUpdatedAt:"15.10.2021",frontMatter:{id:"maintain-guides-how-to-systemd",title:"Using systemd for the Validator Node",sidebar_label:"Using systemd for the Validator Node",slug:"../maintain-guides-how-to-systemd"},sidebar:"docs",previous:{title:"Validator Payout Overview",permalink:"/ru-RU/docs/maintain-guides-validator-payout"},next:{title:"Secure Validator",permalink:"/ru-RU/docs/maintain-guides-secure-validator"}},d=[],u={toc:d};function p(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can run your validator as a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Systemd"},"systemd")," process so that it\nwill automatically restart on server reboots or crashes (and helps to avoid getting slashed!)."),(0,o.kt)("p",null,"Before following this guide you should have already set up your validator by following the\n",(0,o.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-validator"},"How to validate")," article."),(0,o.kt)("p",null,"First create a new unit file called ",(0,o.kt)("inlineCode",{parentName:"p"},"AXIA-validator.service")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"touch /etc/systemd/system/AXIA-validator.service\n")),(0,o.kt)("p",null,"In this unit file you will write the commands that you want to run on server boot / restart."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[Unit]\nDescription=AXIA Validator\n\n[Service]\nExecStart=PATH_TO_AXIA_BIN --validator --name SHOW_ON_TELEMETRY\nRestart=always\nRestartSec=120\n\n[Install]\nWantedBy=multi-user.target\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"WARNING:")," It's recommended to delay the restart of a node with ",(0,o.kt)("inlineCode",{parentName:"p"},"RestartSec")," in the case of node\ncrashes. It's possible that when a node crashes, consensus votes in GRANDPA aren't persisted to\ndisk. In this case, there is potential to equivocate when immediately restarting. What can happen\nis the node will not recognize votes that didn't make it to disk, and will then cast conflicting\nvotes. Delaying the restart will allow the network to progress past potentially conflicting votes,\nat which point other nodes will not accept them.")),(0,o.kt)("p",null,"To enable this to autostart on bootup run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl enable AXIA-validator.service\n")),(0,o.kt)("p",null,"Start it manually with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl start AXIA-validator.service\n")),(0,o.kt)("p",null,"You can check that it's working with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl status AXIA-validator.service\n")),(0,o.kt)("p",null,"You can tail the logs with ",(0,o.kt)("inlineCode",{parentName:"p"},"journalctl")," like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"journalctl -f -u AXIA-validator\n")))}p.isMDXComponent=!0}}]);