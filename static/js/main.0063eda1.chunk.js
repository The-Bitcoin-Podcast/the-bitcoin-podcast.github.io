(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,t,n){e.exports=n(341)},136:function(e,t,n){},140:function(e,t,n){},185:function(e,t){},216:function(e,t){},218:function(e,t){},250:function(e,t){},341:function(e,t,n){"use strict";n.r(t);var a,o,s=n(0),r=n.n(s),c=n(121),i=n.n(c),l=(n(136),n(126)),u=n(11),m=n(60),p=n.n(m),d=n(122),h=n(61),f=n(123),y=n(64),b=n(62),w=n(63),g=(n(140),n(40)),v=n(41),E=n.n(v),k=n(124),x=n.n(k),N=n(125),O=n.n(N),S=Object(g.css)({padding:"1rem",width:"300",height:"300",justifySelf:"end"}),j=1,A="0x0Ab4d7d50f36A168EbA567b07BbB7D1Ad3372A86",T="SC1H6JHAK19WC1D3BGV3JWIFD983E7BS58",C={extTx:"https://api.etherscan.io/api?module=account&action=txlistinternal&address="+A+"&startblock=0&endblock=99999999&sort=asc&apikey="+T,intTx:"https://api.etherscan.io/api?module=account&action=txlist&address="+A+"&startblock=0&endblock=99999999&sort=asc&apikey="+T},D=function(e){return function(t){return t.from.toLowerCase().includes(e.toLowerCase())}},B=[{constant:!1,inputs:[{name:"owner_",type:"address"}],name:"setOwner",outputs:[],payable:!1,type:"function"},{constant:!1,inputs:[{name:"",type:"bytes32"}],name:"poke",outputs:[],payable:!1,type:"function"},{constant:!1,inputs:[],name:"poke",outputs:[],payable:!1,type:"function"},{constant:!0,inputs:[],name:"compute",outputs:[{name:"",type:"bytes32"},{name:"",type:"bool"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"wat",type:"address"}],name:"set",outputs:[],payable:!1,type:"function"},{constant:!1,inputs:[{name:"wat",type:"address"}],name:"unset",outputs:[],payable:!1,type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"indexes",outputs:[{name:"",type:"bytes12"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"next",outputs:[{name:"",type:"bytes12"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"read",outputs:[{name:"",type:"bytes32"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"peek",outputs:[{name:"",type:"bytes32"},{name:"",type:"bool"}],payable:!1,type:"function"},{constant:!0,inputs:[{name:"",type:"bytes12"}],name:"values",outputs:[{name:"",type:"address"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"min_",type:"uint96"}],name:"setMin",outputs:[],payable:!1,type:"function"},{constant:!1,inputs:[{name:"authority_",type:"address"}],name:"setAuthority",outputs:[],payable:!1,type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,type:"function"},{constant:!1,inputs:[],name:"void",outputs:[],payable:!1,type:"function"},{constant:!1,inputs:[{name:"pos",type:"bytes12"},{name:"wat",type:"address"}],name:"set",outputs:[],payable:!1,type:"function"},{constant:!0,inputs:[],name:"authority",outputs:[{name:"",type:"address"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"pos",type:"bytes12"}],name:"unset",outputs:[],payable:!1,type:"function"},{constant:!1,inputs:[{name:"next_",type:"bytes12"}],name:"setNext",outputs:[],payable:!1,type:"function"},{constant:!0,inputs:[],name:"min",outputs:[{name:"",type:"uint96"}],payable:!1,type:"function"},{anonymous:!0,inputs:[{indexed:!0,name:"sig",type:"bytes4"},{indexed:!0,name:"guy",type:"address"},{indexed:!0,name:"foo",type:"bytes32"},{indexed:!0,name:"bar",type:"bytes32"},{indexed:!1,name:"wad",type:"uint256"},{indexed:!1,name:"fax",type:"bytes"}],name:"LogNote",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"authority",type:"address"}],name:"LogSetAuthority",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"}],name:"LogSetOwner",type:"event"}],P=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=Object(y.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(s)))).state={price:0},n.getPrice=Object(d.a)(p.a.mark(function e(){var t,a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(o=new E.a(window.web3.currentProvider)).eth.defaultAccount=window.web3.eth.defaultAccount,t=new o.eth.Contract(B,"0x729D19f657BD0614b4985Cf1D82531c67569197B"),e.next=5,t.methods.peek().call().then(function(e){return e});case 5:if(a=e.sent,console.log(a),!0!==a[1]){e.next=11;break}return e.abrupt("return",n.setState({price:parseFloat(o.utils.fromWei(parseInt(a[0]).toString(),"ether"))}));case 11:alert("The Maker Oracle price is invalid! Please reload for valid price later");case 12:case"end":return e.stop()}},e,this)})),n.componentDidMount=function(){n.getPrice()},n}return Object(w.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=parseFloat(this.state.price)*parseFloat(this.props.amount);return r.a.createElement("div",null,e.toFixed(2)," USD")}}]),t}(r.a.PureComponent),M=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(y.a)(this,Object(b.a)(t).call(this,e))).onSearchChange=function(e){n.setState({searchTerm:e.target.value})},n.subscribe=function(e){var t=new WebSocket("wss://socket.etherscan.io/wshandler");t.onopen=function(){this.setState({socketconnected:!0}),function(e){var t=setInterval(function(){1===e.readyState&&e.send(JSON.stringify({event:"ping"}))},2e4)}(t),t.send(JSON.stringify({event:"txlist",address:e}))}.bind(Object(u.a)(Object(u.a)(n))),t.onmessage=function(e){var t=this,n=JSON.parse(e.data);if(console.log(n),"txlist"===n.event){var a=this.state.transactionsArray.concat(n.result);this.setState({transactionsArray:a},function(){t.processEthList(a)})}}.bind(Object(u.a)(Object(u.a)(n))),t.onerror=function(e){this.setState({socketerror:e.message,socketconnected:!1})}.bind(Object(u.a)(Object(u.a)(n))),t.onclose=function(){this.setState({socketerror:"socket closed",socketconnected:!1})}.bind(Object(u.a)(Object(u.a)(n)))},n.getAccountData=function(){var e=[fetch("".concat(C.extTx)),fetch("".concat(C.intTx))];return Promise.all(e).then(function(e){return Promise.all(e.map(function(e){return e.json()}))}).then(function(e){var t;return(t=[].concat).apply.apply(t,Object(l.a)(e.map(function(e){return e.result})))})},n.handleDonate=function(e){e.preventDefault();var t=e.target,o=new a.utils.BN(a.utils.toWei(t.elements.amount.value,"ether")),s=a.utils.toHex(t.elements.message.value),r=68*t.elements.message.value.length;a.eth.net.getId().then(function(e){switch(e){case 1:console.log("Metamask is on mainnet");break;case 2:console.log("Metamask is on the deprecated Morden test network.");break;case 3:console.log("Metamask is on the ropsten test network.");break;case 4:console.log("Metamask is on the Rinkeby test network.");break;case 42:console.log("Metamask is on the Kovan test network.");break;default:console.log("Metamask is on an unknown network.")}if(e===j)return a.eth.getAccounts().then(function(e){return a.eth.sendTransaction({from:e[0],to:A,value:o,gas:15e4+r,data:s}).catch(function(e){console.log(e)})});console.log("no donation allowed on this network"),n.setState({donateenabled:!1})})},n.processEthList=function(e){var t=e.map(function(e){return e.value=new a.utils.BN(e.value),e}).reduce(function(e,t){return"0"!==t.isError?e:t.from===A.toLowerCase()?e:("undefined"===typeof e[t.from]&&(e[t.from]={from:t.from,value:new a.utils.BN(0),input:t.input,hash:[]}),e[t.from].value=t.value.add(e[t.from].value),e[t.from].input="0x"!==t.input&&"0x00"!==t.input?t.input:e[t.from].input,e[t.from].hash.push(t.hash),e)},{}),o=(t=Object.keys(t).map(function(e){return t[e]}).sort(function(e,t){return t.value.cmp(e.value)}).map(function(e,t){return e.rank=t+1,e})).reduce(function(e,t){return e.add(t.value)},new a.utils.BN(0));return n.setState({ethlist:t,totalAmount:parseFloat(a.utils.fromWei(o)).toFixed(2)})},n.componentDidMount=function(){"undefined"!==typeof window.web3&&"undefined"!==typeof window.web3.currentProvider?((a=new E.a(window.web3.currentProvider)).eth.defaultAccount=window.web3.eth.defaultAccount,n.setState({candonate:!0})):(n.setState({candonate:!1}),a=new E.a),n.getAccountData().then(function(e){n.setState({transactionsArray:e},function(){n.processEthList(e),n.subscribe(A)})})},n.render=function(){var e=n.state.candonate,t=Object(g.css)({"@media(max-width: 700px)":{"flex-wrap":"wrap"}}),o=Object(g.css)({"@media(max-width: 700px)":{display:"none"}});return r.a.createElement("div",{className:"App container-fluid"},r.a.createElement("div",Object.assign({},t,{className:"flex-row d-flex justify-content-around"}),r.a.createElement("div",{className:"flex-column introColumn"},r.a.createElement("div",{className:"introContainer"},r.a.createElement("h1",null,"Donate to The Bitcoin Podcast Network"),r.a.createElement("h4",null,"Welcome to The Bitcoin Podcast Donation Page.  We have done this as a hobby for many years and appreciate any \n                contribution you can make to help us continue delivering quality content. "),r.a.createElement("h4",null,"Keep your eyes peeled to this website, this is the first of many improvements on how you can throw money at us!  \n                We'll be incorporating other chains and functionalities to allow you to play with new capabilities of blockchain tech, \n                all while helping TBPN grow.  "),r.a.createElement("h4",null,"Thank you for your support and making \n                The Bitcoin Podcast Network grow! "),r.a.createElement("hr",null),r.a.createElement("h6",null,r.a.createElement("strong",null,"DISCLAIMERS:")),r.a.createElement("h6",null,"ERC20 tokens will be accepted but will not show up on the leaderboard."),r.a.createElement("h6",null,"For questions, comments, concerns please contact ",r.a.createElement("a",{href:"mailto:corey@thebitcoinpodcast.com"},"Corey")),r.a.createElement("hr",null),r.a.createElement("h6",null,"Forked with <3 from the Unicorns at ",r.a.createElement("a",{href:"https://giveth.io"},"Giveth")),r.a.createElement("h6",null,"NOTE: Leaderboard does not hotload, refresh page after txn confirmation to see it.")),r.a.createElement("div",Object.assign({},t,{className:"flex-row d-flex amount"}),r.a.createElement("div",{className:"flex-column margin"},r.a.createElement("strong",null,"Amount donated "),r.a.createElement("h3",null,n.state.totalAmount," ETH ",r.a.createElement(P,{amount:n.state.totalAmount,web3:a}))),r.a.createElement("div",{className:"flex-column margin"},r.a.createElement("form",{className:"Search"},r.a.createElement("input",{type:"text",onChange:n.onSearchChange,placeholder:"filter leaderboard"}))))),r.a.createElement("div",{className:"flex-column donationColumn"},r.a.createElement("img",{src:"/img/ways-to-donate.svg",className:"typelogo img-fluid"}),e?r.a.createElement("div",{className:"donation"},r.a.createElement("h4",o,"Publicly: Send a transaction via ",r.a.createElement("a",{href:"https://metamask.io"},"Metamask")," with your name (or something else) as a message "),r.a.createElement("h4",null,"All donations with the same address will be added together."),r.a.createElement("form",Object.assign({},o,{onSubmit:n.handleDonate}),r.a.createElement("input",{type:"text",placeholder:"ETH to donate",name:"amount"}),r.a.createElement("input",{type:"text",placeholder:"message",name:"message"}),r.a.createElement("button",{className:"btn btn-primary donation-button"},"Send"))):r.a.createElement("br",null),r.a.createElement("p",null,"NOTE: The Message field is pulled from the latest transaction.  Sending zero-value transactions will update the field"),r.a.createElement("hr",null),r.a.createElement("h4",null,"Privately: Send directly to the donation address"),r.a.createElement(O.a,{className:"".concat(S),renderAs:"svg",fgColor:"#ffffff",bgColor:"#89e5ff00",value:A}),r.a.createElement("div",{className:"word-wrap"},r.a.createElement("strong",null,A)),r.a.createElement("hr",null))),r.a.createElement("div",{className:"flex-column leaderboard"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"pagination-centered"},r.a.createElement("tr",null,r.a.createElement("th",null,"Rank"),r.a.createElement("th",null,"Address"),r.a.createElement("th",null,"Value"),r.a.createElement("th",null,"Message"),r.a.createElement("th",null,"Tx Link"))),r.a.createElement("tbody",null,n.state.ethlist.filter(D(n.state.searchTerm)).map(function(e){return r.a.createElement("tr",{key:e.hash,className:"Entry"},r.a.createElement("td",null,e.rank," "),r.a.createElement("td",null,e.from," "),r.a.createElement("td",null,a.utils.fromWei(e.value)," ETH"),r.a.createElement("td",null,r.a.createElement(x.a,null,e.input.length&&a.utils.hexToAscii(e.input))),r.a.createElement("td",{className:"table-tx-header"},e.hash.map(function(e,t){return r.a.createElement("a",{key:t,href:"https://etherscan.io/tx/"+e},"[",t+1,"]")})))})))))},n.state={ethlist:[],searchTerm:"",donateenabled:!0,socketconnected:!1,totalAmount:0},n}return Object(w.a)(t,e),t}(s.Component),W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(M,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");W?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):L(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):L(e)})}}()}},[[127,2,1]]]);
//# sourceMappingURL=main.0063eda1.chunk.js.map