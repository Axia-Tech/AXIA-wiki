"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2909],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79443:(e,t,n)=>{n.d(t,{Z:()=>a});const a=(0,n(67294).createContext)(void 0)},72352:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>g,default:()=>A,frontMatter:()=>f,metadata:()=>N,toc:()=>y});var a=n(87462),r=n(63366),o=n(67294),l=n(3905),i=n(72389),s=n(79443);const u=function(){var e=(0,o.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var p=n(83039),c=n(86010);const d="tabItem_1uMI";function m(e){var t,n,a,r=e.lazy,l=e.block,i=e.defaultValue,s=e.values,m=e.groupId,h=e.className,k=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=s?s:k.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),f=(0,p.lx)(b,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===i?i:null!=(t=null!=i?i:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=k[0])?void 0:a.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=u(),y=N.tabGroupChoices,v=N.setTabGroupChoices,A=(0,o.useState)(g),w=A[0],I=A[1],x=[],X=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var T=y[m];null!=T&&T!==w&&b.some((function(e){return e.value===T}))&&I(T)}var C=function(e){var t=e.currentTarget,n=x.indexOf(t),a=b[n].value;a!==w&&(X(t),I(a),null!=m&&v(m,a))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;n=x[r]||x[x.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":l},h)},b.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,c.Z)("tabs__item",d,{"tabs__item--active":w===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:O,onFocus:C,onClick:C},null!=n?n:t)}))),r?(0,o.cloneElement)(k.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function h(e){var t=(0,i.Z)();return o.createElement(m,(0,a.Z)({key:String(t)},e))}const k=function(e){var t=e.children,n=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:a},t)};var b=["components"],f={id:"maintain-sync",title:"Set up a Full Node",sidebar_label:"Set up a Full Node",slug:"../maintain-sync"},g=void 0,N={unversionedId:"maintain/maintain-sync",id:"maintain/maintain-sync",isDocsHomePage:!1,title:"Set up a Full Node",description:"If you're building dapps or products on a Substrate-based chain like AXIA, AXIALunar or a custom",source:"@site/../docs/maintain/maintain-sync.md",sourceDirName:"maintain",slug:"/maintain-sync",permalink:"/zh-CN/docs/maintain-sync",editUrl:"https://github.com/axia-tech/AXIA-wiki/edit/master/docs/maintain/maintain-sync.md",tags:[],version:"current",lastUpdatedBy:"Arjun Chamyal",lastUpdatedAt:1634274758,formattedLastUpdatedAt:"2021/10/15",frontMatter:{id:"maintain-sync",title:"Set up a Full Node",sidebar_label:"Set up a Full Node",slug:"../maintain-sync"},sidebar:"docs",previous:{title:"Parameters",permalink:"/zh-CN/docs/maintain-AXIA-parameters"},next:{title:"Networks",permalink:"/zh-CN/docs/maintain-networks"}},y=[{value:"Types of Nodes",id:"types-of-nodes",children:[],level:3},{value:"Setup Instructions",id:"setup-instructions",children:[],level:2},{value:"Get Substrate",id:"get-substrate",children:[],level:2},{value:"Clone and Build",id:"clone-and-build",children:[],level:2},{value:"Run",id:"run",children:[],level:2},{value:"Running an Archive Node",id:"running-an-archive-node",children:[],level:2},{value:"Using Docker",id:"using-docker",children:[],level:2}],v={toc:y};function A(e){var t=e.components,n=(0,r.Z)(e,b);return(0,l.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"If you're building dapps or products on a Substrate-based chain like AXIA, AXIALunar or a custom\nSubstrate implementation, you probably want the ability to run a node-as-a-back-end. After all, it's\nalways better to rely on your own infrastructure than on a third-party-hosted one in this brave new\ndecentralized world."),(0,l.kt)("p",null,"This guide will show you how to connect to ",(0,l.kt)("a",{parentName:"p",href:"https://AXIA.network/"},"AXIA network"),", but the\nsame process applies to any other ",(0,l.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/"},"Substrate"),"-based chain. First,\nlet's clarify the term ",(0,l.kt)("em",{parentName:"p"},"full node"),"."),(0,l.kt)("h3",{id:"types-of-nodes"},"Types of Nodes"),(0,l.kt)("p",null,"A blockchain's growth comes from a ",(0,l.kt)("em",{parentName:"p"},"genesis block"),", ",(0,l.kt)("em",{parentName:"p"},"extrinsics"),", and ",(0,l.kt)("em",{parentName:"p"},"events"),"."),(0,l.kt)("p",null,"When a validator seals block 1, it takes the blockchain's state at block 0. It then applies all\npending changes on top of it, and emits the events that are the result of these changes. Later, the\nstate of the chain at block 1 is used in the same way to build the state of the chain at block 2,\nand so on. Once two thirds of the validators agree on a specific block being valid, it is finalized."),(0,l.kt)("p",null,"An ",(0,l.kt)("strong",{parentName:"p"},"archive node")," keeps all the past blocks. An archive node makes it convenient to query the past\nstate of the chain at any point in time. Finding out what an account's balance at a certain block\nwas, or which extrinsics resulted in a certain state change are fast operations when using an\narchive node. However, an archive node takes up a lot of disk space - around AXIALunar's 1.6 millionth\nblock this was around 15 to 20GB."),(0,l.kt)("p",null,"Archive nodes are used by utilities that need past information - like block explorers, council\nscanners, discussion platforms like ",(0,l.kt)("a",{parentName:"p",href:"https://axiassembly.io"},"AXIAssembly"),", and others. They need\nto be able to look at past on-chain data."),(0,l.kt)("p",null,"A ",(0,l.kt)("strong",{parentName:"p"},"full node")," is ",(0,l.kt)("em",{parentName:"p"},"pruned"),": it discards all finalized blocks older than a configurable number\nexcept the genesis block: This is 256 blocks from the last finalized one, by default. A node that is\npruned this way requires much less space than an archive node."),(0,l.kt)("p",null,"A full node may eventually be able to rebuild the entire chain with no additional information, and\nbecome an archive node, but at the time of writing, this is not implemented. If you need to query\nhistorical blocks past what you pruned, you need to purge your database and resync your node\nstarting in archive mode. Alternatively you can use a backup or snapshot of a trusted source to\navoid needing to sync from genesis with the network, and only need the blocks past that snapshot."),(0,l.kt)("p",null,"Full nodes allow you to read the current state of the chain and to submit and validate extrinsics\ndirectly on the network without relying on a centralized infrastructure provider."),(0,l.kt)("p",null,"Another type of node is a ",(0,l.kt)("strong",{parentName:"p"},"light node"),". A light node has only the runtime and the current state,\nbut does not store past blocks and so cannot read historical data without requesting it from a node\nthat has it. Light nodes are useful for resource restricted devices. An interesting use-case of\nlight nodes is a Chrome extension, which is a node in its own right, running the runtime in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/axia-tech/substrate-light-ui"},"WASM\nformat")," as well as a full or light node that is\ncompletely encapsulated in WASM and can be integrated into webapps:\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/axia-tech/smoldot#wasm-light-node"},"https://github.com/axia-tech/smoldot#wasm-light-node")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"setup-instructions"},"Setup Instructions"),(0,l.kt)("p",null,"This is not recommended if you're a validator. Please see the\n",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/maintain-guides-secure-validator"},"secure validator setup")," if you are running validator."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"NOTE: The bash commands that are provided to run against ",(0,l.kt)("strong",{parentName:"p"},"your node")," use\n",(0,l.kt)("inlineCode",{parentName:"p"},"AXIA")," as the default chain.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--chain")," flag if you are\nfollowing the setup instructions to setup a ",(0,l.kt)("inlineCode",{parentName:"p"},"AXIALunar")," node.\nFor example:"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/AXIA --name "Your Node\'s Name" --chain axialunar\n'))),(0,l.kt)(h,{groupId:"operating-systems",values:[{label:"macOS",value:"mac"},{label:"Windows",value:"win"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,l.kt)(k,{value:"mac",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Install Homebrew within the terminal by running:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Then, run:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install openssl cmake llvm`\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Install Rust in your terminal by running:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Once Rust is installed, run the following command to clone and build the AXIA code:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/axia-tech/AXIA AXIA\ncd AXIA\n./scripts/init.sh\ncargo build --release\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Start your node:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/AXIA --name "Your Node\'s Name"\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Find your node on ",(0,l.kt)("a",{parentName:"p",href:"https://telemetry.AXIA.io/#list/AXIA"},"Telemetry"))))),(0,l.kt)(k,{value:"win",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Install ",(0,l.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},"WSL"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Install ",(0,l.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},"Ubuntu")," (same webpage).")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Determine the latest version of the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/axia-tech/AXIA/releases"},"AXIA binary"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Download the correct AXIA binary within Ubuntu by running the following command. Replace\n",(0,l.kt)("inlineCode",{parentName:"p"},"*VERSION*")," with the tag of the latest version from the last step (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"v0.8.22"),"):"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sL https://github.com/axia-tech/AXIA/releases/download/*VERSION*/AXIA -o AXIA\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Then, run the following:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chmod +x AXIA\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Start your node:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/AXIA --name "Your Node\'s Name"\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Find your node on ",(0,l.kt)("a",{parentName:"p",href:"https://telemetry.AXIA.io/#list/AXIA"},"Telemetry"))))),(0,l.kt)(k,{value:"linux",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Determine the latest version of the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/axia-tech/AXIA/releases"},"AXIA binary"),".")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The nature of pre-built binaries means that they may not work on your particular architecture or Linux distribution.\nIf you see an error like ",(0,l.kt)("inlineCode",{parentName:"p"},"cannot execute binary file: Exec format error")," it likely means the binary is not compatible\nwith your system. You will either need to compile the ",(0,l.kt)("a",{parentName:"p",href:"#clone-and-build"},(0,l.kt)("strong",{parentName:"a"},"source code"))," or use ",(0,l.kt)("a",{parentName:"p",href:"#using-docker"},(0,l.kt)("strong",{parentName:"a"},"Docker")),".")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Download the correct AXIA binary within Ubuntu by running the following command. Replace\n",(0,l.kt)("inlineCode",{parentName:"p"},"*VERSION*")," with the tag of the latest version from the last step (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"v0.8.22"),"):"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sL https://github.com/axia-tech/AXIA/releases/download/*VERSION*/AXIA -o AXIA\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Run the following: ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo chmod +x AXIA"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Run the following:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/AXIA --name "Your Node\'s Name"\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Find your node on ",(0,l.kt)("a",{parentName:"p",href:"https://telemetry.AXIA.io/#list/AXIA"},"Telemetry")))))),(0,l.kt)("h2",{id:"get-substrate"},"Get Substrate"),(0,l.kt)("p",null,"Follow instructions as outlined\n",(0,l.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/getting-started"},"here")," - note that Windows users will\nhave their work cut out for them. It's better to use a virtual machine instead."),(0,l.kt)("p",null,"Test if the installation was successful by running ",(0,l.kt)("inlineCode",{parentName:"p"},"cargo --version"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u03bb cargo --version\ncargo 1.41.0 (626f0f40e 2019-12-03)\n")),(0,l.kt)("h2",{id:"clone-and-build"},"Clone and Build"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/axia-tech/AXIA"},"axia-tech/AXIA")," repo's master branch contains the\nlatest AXIA code."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/axia-tech/AXIA AXIA\ncd AXIA\n./scripts/init.sh\ncargo build --release\n")),(0,l.kt)("p",null,"Alternatively, if you wish to use a specific release, you can check out a specific tag (",(0,l.kt)("inlineCode",{parentName:"p"},"v0.8.3")," in\nthe example below):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/axia-tech/AXIA AXIA\ncd AXIA\ngit checkout tags/v0.8.3\n./scripts/init.sh\ncargo build --release\n")),(0,l.kt)("h2",{id:"run"},"Run"),(0,l.kt)("p",null,"The built binary will be in the ",(0,l.kt)("inlineCode",{parentName:"p"},"target/release")," folder, called ",(0,l.kt)("inlineCode",{parentName:"p"},"AXIA"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"AXIA"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/AXIA --name "Your Node\'s Name"\n')),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--help")," flag to find out which flags you can use when running the node. For example, if\n",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/maintain-wss"},"connecting to your node remotely"),", you'll probably want to use ",(0,l.kt)("inlineCode",{parentName:"p"},"--ws-external")," and\n",(0,l.kt)("inlineCode",{parentName:"p"},"--rpc-cors all"),"."),(0,l.kt)("p",null,"The syncing process will take a while depending on your bandwidth, processing power, disk speed and\nRAM. On a \\$10 DigitalOcean droplet, the process can complete in some 36 hours."),(0,l.kt)("p",null,"Congratulations, you're now syncing with AXIA. Keep in mind that the process is identical when\nusing any other Substrate chain."),(0,l.kt)("h2",{id:"running-an-archive-node"},"Running an Archive Node"),(0,l.kt)("p",null,"When running as a simple sync node (above), only the state of the past 256 blocks will be kept. When\nvalidating, it defaults to ",(0,l.kt)("a",{parentName:"p",href:"#types-of-nodes"},"archive mode"),". To keep the full state use the\n",(0,l.kt)("inlineCode",{parentName:"p"},"--pruning")," flag:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"AXIA"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/AXIA --name "My node\'s name" --pruning archive\n')),(0,l.kt)("p",null,"It is possible to almost quadruple synchronization speed by using an additional flag:\n",(0,l.kt)("inlineCode",{parentName:"p"},"--wasm-execution Compiled"),". Note that this uses much more CPU and RAM, so it should be turned off\nafter the node is in sync."),(0,l.kt)("h2",{id:"using-docker"},"Using Docker"),(0,l.kt)("p",null,"Finally, you can use Docker to run your node in a container. Doing this is a bit more advanced so\nit's best left up to those that either already have familiarity with docker, or have completed the\nother set-up instructions in this guide. If you would like to connect to your node's WebSockets\nensure that you run you node with the ",(0,l.kt)("inlineCode",{parentName:"p"},"--rpc-external")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"--ws-external")," commands."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-zsh"},'docker run -p 9944:9944 axia/AXIA:v0.8.24 --name "calling_home_from_a_docker_container" --rpc-external --ws-external\n')))}A.isMDXComponent=!0}}]);