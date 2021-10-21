"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7596],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>h});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=t.createContext({}),s=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},d=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(a),h=r,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||o;return a?t.createElement(m,i(i({ref:n},d),{},{components:a})):t.createElement(m,i({ref:n},d))}));function h(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},54569:(e,n,a)=>{a.r(n),a.d(n,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>s,toc:()=>d,default:()=>u});var t=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={id:"mirror-learn-crowdloans",title:"Allychain Crowdloans",sidebar_label:"Allychain Crowdloans",slug:"../learn-crowdloans"},c=void 0,s={unversionedId:"learn/mirror-learn-crowdloans",id:"learn/mirror-learn-crowdloans",isDocsHomePage:!1,title:"Allychain Crowdloans",description:"{{ AXIAAXIA }} {{ axialunaraxialunar }} allows allychains to source tokens",source:"@site/../docs/learn/mirror-learn-crowdloans.md",sourceDirName:"learn",slug:"/learn-crowdloans",permalink:"/ru-RU/docs/learn-crowdloans",editUrl:"https://github.com/axia-tech/AXIA-wiki/edit/master/docs/learn/mirror-learn-crowdloans.md",tags:[],version:"current",frontMatter:{id:"mirror-learn-crowdloans",title:"Allychain Crowdloans",sidebar_label:"Allychain Crowdloans",slug:"../learn-crowdloans"}},d=[{value:"Starting a crowdloan campaign",id:"starting-a-crowdloan-campaign",children:[],level:2},{value:"Supporting a crowdloan campaign",id:"supporting-a-crowdloan-campaign",children:[],level:2}],p={toc:d};function u(e){var n=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"AXIA  allows allychains to source tokens\nfor their allychain bids in a decentralized crowdloan."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: For information on how to participate in the crowdloan and allychain auction testing on\nBetaNet, please see the ",(0,o.kt)("a",{parentName:"p",href:"/ru-RU/docs/build-pdk##testing-a-allychains:-betanet-testnet"},"BetaNet content")," >\n",".")),(0,o.kt)("h2",{id:"starting-a-crowdloan-campaign"},"Starting a crowdloan campaign"),(0,o.kt)("p",null,"Anyone who has registered a allychain can create a new crowdloan campaign for a slot\n. A campaign is configured as a\nrange of slots (i.e. the duration of the ",(0,o.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-allychains"},"allychain"),"\n"," will bid for), a cap, and a duration.\nThe duration can last over several auctions, meaning that the team will not need to restart the\ncampaign just because they do not secure a slot on their first attempt."),(0,o.kt)("p",null,"When setting the parameters of a crowdloan campaign, consider the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The campaign creation form requires setting a crowdloan cap ","\u2014"," the maximum amount a campaign\ncan collect. A team can still win an ",(0,o.kt)("a",{parentName:"li",href:"/ru-RU/docs/learn-auction"},"auction")," if the cap has not been reached."),(0,o.kt)("li",{parentName:"ul"},'Set the desired end of the crowdloan in the "Ending block" field. This helps to ensure that the\ncrowdloan is live during the entire duration of the auction. For example, if an auction starts in\nthree days and will last for five days, you may want to set your crowdloan to end in 10 days, or a\nsimilar timescale. One way of calculating the ending block number is adding\n',(0,o.kt)("inlineCode",{parentName:"li"},"(10 * 60 * 24 * 7) * (x * 6) + y"),", ","\u2014"," where ",(0,o.kt)("inlineCode",{parentName:"li"},"x")," is the number of auction periods you want\nthe crowdloan to continue for and ",(0,o.kt)("inlineCode",{parentName:"li"},"y")," is the current block number\n(",(0,o.kt)("inlineCode",{parentName:"li"},"(Blocks/Min * Hour/Min * Day/Hour * Week/Day) * (x * Week/Period)"),")."),(0,o.kt)("li",{parentName:"ul"},'"First period" field refers to the first period you want to bid for. If the current auction\nencompasses periods ',(0,o.kt)("inlineCode",{parentName:"li"},"(3, 4, 5, 6)"),", your first period can be at least ",(0,o.kt)("inlineCode",{parentName:"li"},"3"),". The last slot must also\nbe within that range."),(0,o.kt)("li",{parentName:"ul"},"You can only cancel an ongoing crowdloan if no contributions have been made. Your deposit will be\nreturned to you.")),(0,o.kt)("p",null,"Prior to the start of the crowdloan campaign, the owner will upload the allychain data. Once the\ncrowdloan is live, ",(0,o.kt)("strong",{parentName:"p"},"the allychain configuration will be locked")," and it will be what is deployed as\nthe allychain's runtime. Of course, once the allychain is running it can always change via runtime\nupgrades (as determined through its own local governance)."),(0,o.kt)("h2",{id:"supporting-a-crowdloan-campaign"},"Supporting a crowdloan campaign"),(0,o.kt)("p",null,"Each created campaign will have an index. Once a crowdloan campaign is open, anyone can participate\nby sending a special transaction that references the campaign's index. Tokens used to participate\nmust be transferable ","\u2014"," that is, not locked for any reason, including staking, vesting, and\ngovernance ","\u2014"," because they will be moved into a module-controlled account that was generated\nuniquely for this campaign."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Important: All crowdloan contributions are handled by the Crowdloan module\u2019s logic where a\ncampaign is identified by index, not by address. ",(0,o.kt)("strong",{parentName:"p"},"Never transfer tokens to an address in support\nof a campaign."))),(0,o.kt)("p",null,"It is up to individual allychain teams to decide if and how they want to reward participants who\nforgo staking and choose to lock their tokens in support of the allychain\u2019s campaign. As one can\nimagine, rewards will take many forms and may vary widely among projects."),(0,o.kt)("p",null,"If a crowdloan campaign is successful, that allychain will be on-boarded to the Relay Chain. The\ncollective tokens will be locked in that allychain's account for the entire duration that it is\nactive."),(0,o.kt)("p",null,"Participants will be able to reclaim their tokens in one of two ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the campaign was successful, then the allychain will enter a retirement phase at the end of its\nlease. During this phase, participants can withdraw the tokens with which they participated."),(0,o.kt)("li",{parentName:"ul"},"If the campaign was not successful, then this retirement phase will begin at the campaign's\nconfigured end, and participants can likewise withdraw their tokens.")),(0,o.kt)("p",null,"Note: When the lease periods won by the crowdloan have finished, or the crowdloan has ended without\nwinning a slot, anyone can trigger the refund of crowdloan contributions back to their original\nowners. All contributions must be returned before the crowdloan is fully deleted from the system."),(0,o.kt)("p",null,"Many projects will have dashboards available that allow users to participate in their crowdloans.\nAXIAJS apps also offers a breakdown of ongoing crowdloans on the\n",(0,o.kt)("a",{parentName:"p",href:"https://AXIA.js.org/apps/?rpc=wss%3A%2F%2Faxialunar-rpc.AXIA.io#/allychains/crowdloan"},"Apps page"),"."),(0,o.kt)("p",null,"Here is an example of the crowdloans in play during the very first AXIALunar auction."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"crowdloan dashboard",src:a(4635).Z})),(0,o.kt)("p",null,"Furthermore, check out this video on\n",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=YrTxDufrcQM"},"How to Participate in Crowdloans")," for steps on how to\naccess available crowdloans on AXIAJS apps."))}u.isMDXComponent=!0},4635:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/axialunar-crowdloans-06741dc57f4196055b0d4fee96156b9a.png"}}]);