"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6862],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>h});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(o),h=a,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||i;return o?n.createElement(m,r(r({ref:t},d),{},{components:o})):n.createElement(m,r({ref:t},d))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=o[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},71401:(e,t,o)=>{o.r(t),o.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,toc:()=>d,default:()=>u});var n=o(87462),a=o(63366),i=(o(67294),o(3905)),r=["components"],s={id:"maintain-guides-democracy",title:"Participate in Democracy",sidebar_label:"Participate in Democracy",slug:"../maintain-guides-democracy"},l=void 0,c={unversionedId:"maintain/maintain-guides-democracy",id:"maintain/maintain-guides-democracy",isDocsHomePage:!1,title:"Participate in Democracy",description:"The public referenda chamber is one of the three bodies of on-chain governance as it's instantiated",source:"@site/../docs/maintain/maintain-guides-democracy.md",sourceDirName:"maintain",slug:"/maintain-guides-democracy",permalink:"/zh-CN/docs/maintain-guides-democracy",editUrl:"https://github.com/axia-tech/AXIA-wiki/edit/master/docs/maintain/maintain-guides-democracy.md",tags:[],version:"current",lastUpdatedBy:"Arjun Chamyal",lastUpdatedAt:1634850687,formattedLastUpdatedAt:"2021/10/22",frontMatter:{id:"maintain-guides-democracy",title:"Participate in Democracy",sidebar_label:"Participate in Democracy",slug:"../maintain-guides-democracy"},sidebar:"docs",previous:{title:"Validator Community Overview",permalink:"/zh-CN/docs/maintain-guides-validator-community"},next:{title:"Join the Council",permalink:"/zh-CN/docs/maintain-guides-how-to-join-council"}},d=[{value:"Important Parameters",id:"important-parameters",children:[],level:2},{value:"Proposing an Action",id:"proposing-an-action",children:[],level:2},{value:"Submitting a Preimage",id:"submitting-a-preimage",children:[],level:2},{value:"Seconding a Proposal",id:"seconding-a-proposal",children:[],level:2},{value:"Voting on a Proposal",id:"voting-on-a-proposal",children:[],level:2},{value:"Unlocking Locked Tokens",id:"unlocking-locked-tokens",children:[{value:"With a Ledger hardware wallet or Unlocking Very Old Locks",id:"with-a-ledger-hardware-wallet-or-unlocking-very-old-locks",children:[],level:4}],level:2},{value:"Delegate a Vote",id:"delegate-a-vote",children:[],level:2},{value:"Undelegate a Vote",id:"undelegate-a-vote",children:[],level:2},{value:"Voting with a Governance Proxy",id:"voting-with-a-governance-proxy",children:[],level:2},{value:"Interpreting On-Chain Voting Data",id:"interpreting-on-chain-voting-data",children:[],level:2}],p={toc:d};function u(e){var t=e.components,s=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The public referenda chamber is one of the three bodies of on-chain governance as it's instantiated\nin AXIA. The other two bodies are the\n",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/maintain-guides-how-to-join-council"},"council")," and the\n",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-governance#technical-committee"},"technical committee"),"."),(0,i.kt)("p",null,"Public referenda can be proposed and voted on by any token holder in the system as long as they\nprovide a bond. After a proposal is made, others can agree with it by ",(0,i.kt)("em",{parentName:"p"},"seconding")," it and putting up\ntokens equal to the original bond. Every launch period, the most seconded proposal will be moved to\nthe public referenda table where it can be voted upon. Voters who are willing to lock up their\ntokens for a greater duration of time can do so and get their vote amplified. For more details on\nthe governance system please see ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-governance"},"here"),"."),(0,i.kt)("p",null,"This guide will instruct token holders how to propose and vote on public referenda using the\nDemocracy module as it's implemented in AXIA."),(0,i.kt)("h2",{id:"important-parameters"},"Important Parameters"),(0,i.kt)("p",null,"The important parameters to be aware of when voting using the Democracy module are as follow:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Launch Period")," - How often new public referenda are launched."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Voting Period")," - How often votes for referenda are tallied."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Emergency Voting Period")," - The minimum voting period for a fast-tracked emergency referendum."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Minimum Deposit")," - The minimum amount to be used as a deposit for a public referendum proposal."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Enactment Period")," - The minimum period for locking funds ",(0,i.kt)("em",{parentName:"p"},"and")," the period between a proposal\nbeing approved and enacted."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Cooloff Period")," - The period in blocks where a proposal may not be re-submitted after being\nvetoed."),(0,i.kt)("h2",{id:"proposing-an-action"},"Proposing an Action"),(0,i.kt)("p",null,'Proposing an action to be taken requires you to bond some tokens. In order to ensure you have enough\ntokens to make the minimum deposit you can check the parameter in the chain state. The bonded tokens\nwill only be released once the proposal is tabled (that is, brought to a vote); there is no way for\nthe user to "revoke" their proposal and get the bond back before it has become a referendum. Since\nit is essentially impossible to predict definitely when a proposal may become a referendum (if\never), this means that any tokens bonded will be locked for an indeterminate amount of time.'),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Proposals cannot be revoked by the proposer, even if they never turn into a referendum. It is\nimportant to realize that there is no guarantee that AXC you use for proposing or seconding a\nproposal will be returned to that account in any given timeframe.")),(0,i.kt)("p",null,'On AXIA Apps you can use the "Democracy" tab to make a new proposal. In order to submit a\nproposal, you will need to submit what\'s called the preimage hash. The preimage hash is simply the\nhash of the proposal to be enacted. The easiest way to get the preimage hash is by clicking on the\n"Submit preimage" button and configuring the action that you are proposing.'),(0,i.kt)("p",null,'For example, if you wanted to propose that the account "Dave" would have a balance of 10 tokens your\nproposal may look something like the below image. The preimage hash would be\n',(0,i.kt)("inlineCode",{parentName:"p"},"0xa50af1fadfca818feea213762d14cd198404d5496bca691294ec724be9d2a4c0"),". You can copy this preimage\nhash and save it for the next step. There is no need to click Submit Preimage at this point, though\nyou could. We'll go over that in the next section."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"submit preimage",src:o(56674).Z})),(0,i.kt)("p",null,'Now you will click on the "Submit proposal" button and enter the preimage hash in the input titled\n"preimage hash" and ',(0,i.kt)("em",{parentName:"p"},"at least"),' the minimum deposit into the "locked balance" field. Click on the\nblue "Submit proposal" button and confirm the transaction. You should now see your proposal appear\nin the "proposals" column on the page.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"submit proposal",src:o(54854).Z})),(0,i.kt)("p",null,"Now your proposal is visible by anyone who accesses the chain and others can second it or submit a\npreimage. However, it's hard to tell what exactly this proposal does since it shows the hash of the\naction. Other holders will not be able to make a judgement for whether they second it or not until\nsomeone submits the actual preimage for this proposal. In the next step you will submit the\npreimage."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"proposals",src:o(49262).Z})),(0,i.kt)("h2",{id:"submitting-a-preimage"},"Submitting a Preimage"),(0,i.kt)("p",null,"The act of making a proposal is split from submitting the preimage for the proposal since the\nstorage cost of submitting a large preimage could be pretty expensive. Allowing for the preimage\nsubmission to come as a separate transaction means that another account could submit the preimage\nfor you if you don't have the funds to do so. It also means that you don't have to pay so many funds\nright away as you can prove the preimage hash out-of-band."),(0,i.kt)("p",null,"However, at some point before the proposal passes you will need to submit the preimage or else the\nproposal cannot be enacted. The guide will now show you how to do this."),(0,i.kt)("p",null,'Click on the blue "Submit preimage" button and configure it to be the same as what you did before to\nacquire the preimage hash. This time, instead of copying the hash to another tab, you will follow\nthrough and click "Submit preimage" and confirm the transaction.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"submit preimage",src:o(56674).Z})),(0,i.kt)("p",null,"Once the transaction is included you should see the UI update with the information for your already\nsubmitted proposal."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"proposals updated",src:o(94907).Z})),(0,i.kt)("h2",{id:"seconding-a-proposal"},"Seconding a Proposal"),(0,i.kt)("p",null,"Seconding a proposal means that you are agreeing with the proposal and backing it with an equal\namount of deposit as was originally locked. The bonded tokens will be released once the proposal is\ntabled (that is, brought to a vote), just like the original proposer's bond. By seconding a proposal\nyou will move it higher up the rank of proposals. The most seconded proposal ","\u2014"," in value, not\nnumber of supporters ","\u2014"," will be brought to a referendum every launch period."),(0,i.kt)("p",null,"It is important to note that there is no way to stop or cancel seconding a proposal once it has been\ndone. Therefore, the AXC that was seconded will be reserved until the proposal is tabled as a\nreferendum. This is an indeterminate amount of time, since there is no guarantee that a proposal\nwill become a referendum for a given period, as other proposals may be proposed and tabled before\nit."),(0,i.kt)("p",null,"Note that it is possible for a single account to second a proposal multiple times. This is by\ndesign; it is the value, not the number of seconds ",(0,i.kt)("em",{parentName:"p"},"per se"),", that counts in terms of weighting. If\nthere were a limit of one second per account, it would be trivial for a user with, for example, 1000\nAXC to create ten accounts with 100 AXC instead of a single account with 1000 AXC. Thus, no\nrestrictions are made on the number of times a single account can second a proposal."),(0,i.kt)("p",null,'To second a proposal, navigate to the proposal you want to second and click on the "Second" button.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"second button",src:o(9414).Z})),(0,i.kt)("p",null,'You will be prompted with the full details of the proposal (if the preimage has been submitted!) and\ncan then broadcast the transaction by clicking the blue "Second" button.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"second confirm",src:o(56017).Z})),(0,i.kt)("p",null,"Once successful you will see your second appear in the dropdown in the proposal details."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"second result",src:o(10702).Z})),(0,i.kt)("h2",{id:"voting-on-a-proposal"},"Voting on a Proposal"),(0,i.kt)("p",null,"At the end of each launch period, the most seconded proposal will move to referendum. During this\ntime you can cast a vote for or against the proposal. You may also lock up your tokens for a greater\nlength of time to weigh your vote more strongly. During the time your tokens are locked, you are\nunable to transfer them, however they can still be used for further votes. Locks are layered on top\nof each other, so an eight week lock does not become a 15 week lock if you vote again a week later,\nrather another eight week lock is placed to extend the lock just one extra week."),(0,i.kt)("p",null,"To vote on a referendum, navigate to the\n",(0,i.kt)("a",{parentName:"p",href:"https://AXIA.js.org/apps/#/democracy/"},'"Democracy" tab of AXIA Apps'),'. Any active referendum\nwill show in the "referenda" column. Click the blue button "Vote" to cast a vote for the referendum.'),(0,i.kt)("p",null,'If you would like to cast your vote for the proposal select the "Aye, I approve" option. If you\nwould like to cast your vote against the proposal in referendum you will select "Nay, I do not\napprove" option.'),(0,i.kt)("p",null,"The second option is to select your conviction for this vote. The longer you are willing to lock\nyour tokens, the stronger your vote will be weighted. The timeline for the conviction starts after\nthe voting period ends; tokens used for voting will always be locked until the end of the voting\nperiod, no matter what conviction you vote with. Unwillingness to lock your tokens means that your\nvote only counts for 10% of the tokens that you hold, while the maximum lock up of 896 days means\nyou can make your vote count for 600% of the tokens that you hold."),(0,i.kt)("p",null,'When you are comfortable with the decision you have made, click the blue "Vote" button to submit\nyour transaction and wait for it to be included in a block.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"voting",src:o(9567).Z})),(0,i.kt)("h2",{id:"unlocking-locked-tokens"},"Unlocking Locked Tokens"),(0,i.kt)("p",null,"Like ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-AXC#lazy-vesting"},"vesting"),", the tokens that are locked in democracy are unlocked\nlazily. This means that you, the user, must explicitly call an unlock extrinsic to make your funds\navailable again after the lock expires. Unbonding is another term you hear a lot in AXIA, it\nmeans withdrawing your AXC that was used in staking. To know more about it, please see\n",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/maintain-guides-how-to-unbond"},"here"),"."),(0,i.kt)("p",null,'You can do this from the "Accounts" page in\n',(0,i.kt)("a",{parentName:"p",href:"https://AXIA.js.org/apps/#/accounts"},"AXIA-JS Apps"),', unless you use Ledger (see below).\nFirst check that your account has a "democracy" lock by opening the details on your balance. In the\nexample below the account has 150 AXC locked in democracy.'),(0,i.kt)("p",null,'Now you can click the menu button on Apps and find the option that says "Clear expired democracy\nlocks". After selecting this option you may confirm the transaction and your locks will be cleared\nwhen successful.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"democracy clear locks",src:o(73888).Z})),(0,i.kt)("h4",{id:"with-a-ledger-hardware-wallet-or-unlocking-very-old-locks"},"With a Ledger hardware wallet or Unlocking Very Old Locks"),(0,i.kt)("p",null,"If you do not see an option to clear expired democracy votes, it may be that the lock is very old.\nOr, if you are using the Ledger hardware wallet, you will not be able to issue the batch Unlock\naction from the UI."),(0,i.kt)("p",null,"Instead, you must clear the lock by directly issuing the correct extrinsics."),(0,i.kt)("p",null,"Navigate to the ",(0,i.kt)("a",{parentName:"p",href:"https://AXIA.js.org/apps/#/extrinsics"},"Extrinsics page")," and submit the\nfollowing extrinsic: ",(0,i.kt)("inlineCode",{parentName:"p"},"democracy.removeVote(index)"),' using the account that you voted with. For the\nindex number (ReferendumIndex), enter the number of the referendum for which you voted ("12" in the\nimage below).'),(0,i.kt)("p",null,"The number of the referendum for which you voted is visible in an explorer such as AXIAscan."),(0,i.kt)("p",null,'You need to press the "Submit Transaction" button to submit the extrinsic.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"democracy clear_lock_extrinsic_1",src:o(29813).Z})),(0,i.kt)("p",null,"Now submit the following extrinsic: ",(0,i.kt)("inlineCode",{parentName:"p"},"democracy.unlock(target)"),", where target is your your account\naddress."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"democracy clear_lock_extrinsic_2",src:o(84184).Z})),(0,i.kt)("p",null,"If you return to the ",(0,i.kt)("a",{parentName:"p",href:"https://AXIA.js.org/apps/#/accounts"},"Accounts page"),", you should see that\nthe democracy lock has been released."),(0,i.kt)("p",null,"Note that this applies only to locked AXC that were used for voting on referenda. In order to unlock\nAXC locked by voting for members of the AXIA Council, you need to go to the\n",(0,i.kt)("a",{parentName:"p",href:"https://AXIA.js.org/apps/#/council"},"Council"),' page, click "Vote", and then click on "Unvote\nAll".'),(0,i.kt)("h2",{id:"delegate-a-vote"},"Delegate a Vote"),(0,i.kt)("p",null,"If you are too busy to keep up and vote on upcoming referenda, there is an option to delegate your\nvote to another account whose opinion you trust. When you delegate to another account, that account\ngets the added voting power of your tokens along with the conviction that you set. The conviction\nfor delegation works just like the conviction for regular voting, except your tokens may be locked\nlonger than they would normally since locking resets when you undelegate your vote."),(0,i.kt)("p",null,"The account that is being delegated to does not make any special action once the delegation is in\nplace. They can continue to vote on referenda how they see fit. The difference is now when the\nDemocracy system tallies votes, the delegated tokens now are added to whatever vote the delegatee\nhas made."),(0,i.kt)("p",null,'You can delegate your vote to another account and even attach a "Conviction" to the delegation.\nNavigate to the "Extrinsics" tab on AXIA Apps and select the options "democracy" and "delegate".\nThis means you are accessing the democracy pallet and choosing the delegate transaction type to\nsend. Your delegation will count toward whatever the account you delegated for votes on until you\nexplicitly undelegate your vote.'),(0,i.kt)("p",null,"In the first input select the account you want to delegate to and in the second input select the\namount of your conviction. Remember, higher convictions means that your vote will be locked longer.\nSo choose wisely!"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"delegate",src:o(75718).Z})),(0,i.kt)("p",null,'After you send the delegate transaction, you can verify it went through by navigating to the "Chain\nState" tab and selecting the "democracy" and "delegations" options. You will see an output similar\nto below, showing the addresses to which you have delegated your voting power.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"delegate state",src:o(26465).Z})),(0,i.kt)("h2",{id:"undelegate-a-vote"},"Undelegate a Vote"),(0,i.kt)("p",null,'You may decide at some point in the future to remove your delegation to a target account. In this\ncase, your tokens will be locked for the maximum amount of time in accordance with the conviction\nyou set at the beginning of the delegation. For example, if you chose "2x" delegation for four weeks\nlock up time, your tokens will be locked for 4 weeks after sending the ',(0,i.kt)("inlineCode",{parentName:"p"},"undelegate")," transaction.\nOnce your vote has been undelegated, you are in control of making votes with it once again. You can\nstart to vote directly, or chose a different account to act as your delegate."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"undelegate")," transaction must be sent from the account that you wish to clear of its delegation.\nFor example, if Alice has delegated her tokens to Bob, Alice would need to be the one to call the\n",(0,i.kt)("inlineCode",{parentName:"p"},"undelegate")," transaction to clear her delegation."),(0,i.kt)("p",null,'The easiest way to do this is from the "Extrinsics" tab of AXIA Apps. Select the "democracy"\npallet and the "undelegate" transaction type. Ensure that you are sending the transaction from the\naccount you want to clear of delegations. Click "Submit transaction" and confirm.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"undelegate",src:o(50196).Z})),(0,i.kt)("h2",{id:"voting-with-a-governance-proxy"},"Voting with a Governance Proxy"),(0,i.kt)("p",null,'Making a vote on behalf of a stash requires a "proxy" transaction from the Proxy pallet. When you\nchoose this transaction from the "Extrinsics" tab, it will let you select "vote" from the Democracy\npallet, and you will specify the index of the referendum that is being voted, the judgement (i.e.\n"Aye" for approval or "Nay" for rejection), and the conviction, just like a normal vote.'),(0,i.kt)("p",null,"For more material on adding and removing Governance proxies, as well as other types, please see the\n",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-proxies"},"Proxy page"),"."),(0,i.kt)("h2",{id:"interpreting-on-chain-voting-data"},"Interpreting On-Chain Voting Data"),(0,i.kt)("p",null,"Consider the following example showcasing how votes would be displayed on a block explorer."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Nay 0.1x => 0\nNay 1x => 1\nNay 2x => 2\nNay 3x => 3\nNay 4x => 4\nNay 5x => 5\nNay 6x => 6\nAye 0.1x => 128\nAye 1x => 129\nAye 2x => 130\nAye 3x => 131\nAye 4x => 132\nAye 5x => 133\nAye 6x => 134\n")),(0,i.kt)("p",null,'At first glance, it may be difficult to interpret what you voted on. We need to take a step back and\nconsider the "voting data" at the binary level.'),(0,i.kt)("p",null,"The vote is stored as a byte using a bitfield data structure and displayed on the block explorer as\na decimal integer. The bitfield stores both the conviction and aye/nay boolean, where the boolean is\nrepresented using the MSB of the byte. This would mean that the grouping of the 7 remaining bits is\nused to store the conviction."))}u.isMDXComponent=!0},75718:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/delegate-87aa49334b5e3717f90224234050840c.png"},26465:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/delegate_state-14954aefaffe5cde3526781c42d06411.png"},49262:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/proposals-1453ca2ad6d68573c7584ce2814049d1.png"},94907:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/proposals_updated-e4d7a6c5b86dd0e099abf9ec9efbc4ef.png"},9414:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/second_button-64bc94e3b28dec52546093dded5f9121.png"},56017:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/second_confirm-fb299d5cb54285ac25cccd8f4f493bee.png"},10702:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/second_result-7b045babd1498937fa9d6912635ae7b7.png"},56674:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/submit_preimage-51b19659d7b7f380534da11938bb20ce.png"},54854:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/submit_proposal-effc817a16b7c1b9d4af5e74a52dc794.png"},50196:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/undelegate-d8109207f3344b49c79d15117cf2034c.png"},9567:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/voting-4abb1178436833648da30b63d860aa10.png"},29813:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/democracy_clear_lock_extrinsic_1-4fe5e289e2ceb2a0a634ebaa2099cef0.png"},84184:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/democracy_clear_lock_extrinsic_2-86695b4357b908af23666647bfc1d346.png"},73888:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/democracy_clear_locks-f3984af420e2c066ddc1bbe3a7d030fe.png"}}]);