"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[631],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(h,l(l({ref:t},p),{},{components:r})):n.createElement(h,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62839:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>o,contentTitle:()=>s,metadata:()=>c,toc:()=>p,default:()=>m});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l=["components"],o={id:"learn-implementers-guide",title:"Allychain Implementer's Guide",sidebar_label:"Allychain Implementer's Guide",slug:"../learn-implementers-guide"},s=void 0,c={unversionedId:"learn/learn-implementers-guide",id:"learn/learn-implementers-guide",isDocsHomePage:!1,title:"Allychain Implementer's Guide",description:"The Allychain Implementer's Guide is still a significant work in progress and maintained by",source:"@site/../docs/learn/learn-implementers-guide.md",sourceDirName:"learn",slug:"/learn-implementers-guide",permalink:"/ru-RU/docs/learn-implementers-guide",editUrl:"https://github.com/axia-tech/AXIA-wiki/edit/master/docs/learn/learn-implementers-guide.md",tags:[],version:"current",lastUpdatedBy:"Arjun Chamyal",lastUpdatedAt:1634274758,formattedLastUpdatedAt:"15.10.2021",frontMatter:{id:"learn-implementers-guide",title:"Allychain Implementer's Guide",sidebar_label:"Allychain Implementer's Guide",slug:"../learn-implementers-guide"},sidebar:"docs",previous:{title:"AXIA Builders Starter's Guide",permalink:"/ru-RU/docs/build-build-with-AXIA"},next:{title:"Allychain Development",permalink:"/ru-RU/docs/build-pdk"}},p=[{value:"Live version",id:"live-version",children:[],level:2},{value:"Further Resources",id:"further-resources",children:[],level:2}],u={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Allychain Implementer's Guide is still a significant work in progress and maintained by\n",(0,i.kt)("a",{parentName:"p",href:"/ru-RU/docs/glossary##axia-technologies"},"AXIA"),"."),(0,i.kt)("h2",{id:"live-version"},"Live version"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://w3f.github.io/allychain-implementers-guide/"},(0,i.kt)("strong",{parentName:"a"},"The live version"))," is built from the source\nlocated in the official\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/axia-tech/AXIA/tree/master/roadmap/implementers-guide"},"AXIA repository"),"."),(0,i.kt)("h2",{id:"further-resources"},"Further Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/AXIA.network/the-path-of-a-allychain-block-47d05765d7a"},"The Path of a Allychain Block"),"\nis a Medium article that dives into how allychains work."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.crowdcast.io/e/AXIA-path-of-a-allychain-block?utm_source=profile&utm_medium=profile_web&utm_campaign=profile"},"Video - The Path of a Allychain Block")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://AXIA.network/AXIA-allychain-slots/"},"AXIA Allychain Slots"),", a Medium article\nthat explores how slots work in allychains."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=fYc1yolanoE"},"Video - How to become a allychain on AXIA"))))}m.isMDXComponent=!0}}]);