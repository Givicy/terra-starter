(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{117:function(e,t){},322:function(e){e.exports=JSON.parse('{"localterra":{"counter":{"codeId":"6","contractAddresses":{"default":"terra1kyl8f2xkd63cga8szgkejdyvxay7mc7qpdc3c5"}},"clicker":{"codeId":"1","contractAddresses":{"default":"terra18vd8fpwxzck93qlwghaj6arh4p7c5n896xzem5"}}},"testnet":{"clicker":{"codeId":"67373","contractAddresses":{"default":"terra1g4dtqttpceqhf2vfesms76h78mg0tlxrguly9c"}}}}')},325:function(e,t,n){},445:function(e,t){},447:function(e,t){},457:function(e,t){},459:function(e,t){},472:function(e,t){},474:function(e,t){},559:function(e,t){},561:function(e,t){},570:function(e,t){},612:function(e,t,n){},613:function(e,t,n){},614:function(e,t,n){"use strict";n.r(t);var c=n(21),r=(n(325),n(42)),a=n(65),s=n(3),i=[{name:"Play",link:"/terra-starter/play"},{name:"Leaderboard",link:"/terra-starter/leaderboard"},{name:"How to play",link:"/terra-starter/guide"}],o=function(){return Object(s.jsx)("div",{className:"game-menu",children:i.map((function(e,t){var n=e.name,c=e.link;return Object(s.jsx)(a.b,{to:c,className:"menu-item",children:Object(s.jsx)("span",{className:"item-text",children:n})},t)}))})},l=function(){var e=Object(r.d)(),t=Object(c.a)({},e).terraAddress;return Object(s.jsx)("div",{children:t&&Object(s.jsx)("button",{className:"wallet-address",children:t.slice(0,5)+"..."+t.slice(-4)})})};var u=function(){var e=Object(r.e)(),t=e.status,n=e.connect,c=e.disconnect,a=e.availableConnectTypes;return console.log("Wallet status is ",t),console.log("Available connection types:",a),Object(s.jsxs)("main",{className:"App",children:[Object(s.jsxs)("header",{children:[Object(s.jsxs)("div",{className:"header-titles",children:[Object(s.jsx)("h1",{children:"\u2694 Goblin War \u2694"}),Object(s.jsx)("p",{children:"Only you can save us from Goblin town"})]}),Object(s.jsx)(l,{})]}),t===r.b.WALLET_NOT_CONNECTED&&Object(s.jsx)("div",{children:Object(s.jsx)("img",{src:"https://media.giphy.com/media/B19AYwNXoXtcs/giphy.gif",alt:"Goblin gif"})}),t===r.b.WALLET_CONNECTED&&Object(s.jsx)("div",{className:"game-menu-container",children:Object(s.jsx)(o,{})}),t===r.b.WALLET_NOT_CONNECTED?Object(s.jsx)("div",{className:"connect-wallet-div",children:Object(s.jsx)("button",{type:"button",onClick:function(){window.confirm("Click OK only if you are sure you are connected to Bombay test net!")&&n("EXTENSION")},className:"cta-button connect-wallet-button",children:"Connect wallet"},"connect-EXTENSION")}):t===r.b.WALLET_CONNECTED?Object(s.jsx)("button",{type:"button",onClick:function(){return c()},className:"cta-button connect-wallet-button",children:"Disconnect"}):void 0]})},j=n(1),d=n.n(j),b=n(321),h=n.n(b),O=n(17),x=(n(612),n(7)),f=n(19),p=n(0),m=n.n(p),v=n(24),w=n(322),g=function(e){return w[e.network.name].clicker.contractAddresses.default},N=function(e){return new Promise((function(t){return setTimeout(t,e)}))},k=Date.now()+36e5,y=Date.now()+6e4,E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new v.Fee(2e5,{uusd:3e4});return function(){var n=Object(x.a)(m.a.mark((function n(c){var r,a,s;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=new v.LCDClient({URL:c.network.lcd,chainID:c.network.chainID}),n.next=3,c.post({fee:t,msgs:[new v.MsgExecuteContract(c.walletAddress,g(c),e)]});case 3:a=n.sent,s=a.result;case 5:return n.prev=6,n.next=9,r.tx.txInfo(s.txhash);case 9:return n.abrupt("return",n.sent);case 12:if(n.prev=12,n.t0=n.catch(6),!(Date.now()<y)){n.next=19;break}return n.next=17,N(500);case 17:n.next=25;break;case 19:if(!(Date.now()<k)){n.next=24;break}return n.next=22,N(1e4);case 22:n.next=25;break;case 24:throw new Error("Transaction queued. To verify the status, please check the transaction hash: ".concat(s.txhash));case 25:n.next=5;break;case 27:case"end":return n.stop()}}),n,null,[[6,12]])})));return function(e){return n.apply(this,arguments)}}()},C=function(){var e=Object(x.a)(m.a.mark((function e(t,n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",E({upsert_score:{score:n}})(t));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),T=(n(613),function(){return Object(s.jsxs)("div",{className:"lds-ring",children:[Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{})]})}),A=function(){var e=Object(r.d)(),t=Object(j.useState)(15),n=Object(f.a)(t,2),a=n[0],i=n[1],o=Object(j.useState)(!1),l=Object(f.a)(o,2),u=(l[0],l[1],Object(j.useState)({top:"15%",left:"50%",width:"100px",height:"100px"})),d=Object(f.a)(u,2),b=d[0],h=d[1],O=Object(j.useState)(!1),p=Object(f.a)(O,2),v=p[0],w=p[1],g=Object(j.useState)(0),N=Object(f.a)(g,2),k=N[0],y=N[1];Object(j.useEffect)((function(){var e=setInterval((function(){i((function(e){return e>0?e-1:0}))}),1e3);return e}),[]),Object(j.useEffect)((function(){0===a&&(h({display:"none"}),alert("Game Over! Your score is ".concat(k,". Please confirm transaction to submit score.")),E())}),[a]);var E=function(){var t=Object(x.a)(m.a.mark((function t(){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e||"testnet"!==e.network.name){t.next=9;break}return w(!0),t.next=4,C(e,k);case 4:n=t.sent,console.log(n),alert("Score submitted!"),w(!1),window.location.href="/terra-starter/leaderboard";case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(s.jsxs)("div",{className:"score-board-container",children:[Object(s.jsxs)("div",{className:"play-container",children:[Object(s.jsxs)("span",{children:["Score: ",k]}),Object(s.jsx)("span",{children:"Fight!"}),Object(s.jsxs)("span",{children:["Time left: ",a," s"]})]}),Object(s.jsx)("div",{children:"Easy Mode"}),v?Object(s.jsx)(T,{}):Object(s.jsxs)("div",{className:"game-container",children:[Object(s.jsx)("img",{src:"/terra-starter/cute-zergling.png",id:"target",alt:"Target",style:Object(c.a)({},b),onClick:function(){var e=new Audio("/terra-starter/Zergling_explodes.mp3");e.volume=.2,e.play(),y((function(e){return e+1})),h({top:"".concat(Math.floor(80*Math.random()),"%"),left:"".concat(Math.floor(80*Math.random()),"%"),width:"100px",height:"100px"})}}),Object(s.jsx)("img",{src:"Marine.png",id:"marine-img",alt:"Marine"})]})]})},S=function(){return Object(s.jsxs)("main",{className:"App",children:[Object(s.jsx)("header",{children:Object(s.jsx)(a.b,{to:"/terra-starter",className:"home-link",children:Object(s.jsxs)("div",{className:"header-titles",children:[Object(s.jsx)("h1",{children:"\u2694 Goblin War \u2694\ufe0f"}),Object(s.jsx)("p",{children:"Only you can save us from Goblin town"})]})})}),Object(s.jsxs)("div",{className:"score-board-container",children:[Object(s.jsx)("h3",{children:"How to play"}),Object(s.jsx)("div",{children:Object(s.jsx)("span",{className:"help",children:"Click as many goblins as you can within 15 seconds!"})})]})]})},D=function(){var e=Object(x.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Contract address is ",g(t)),n=new v.LCDClient({URL:t.network.lcd,chainID:t.network.chainID}),e.abrupt("return",n.wasm.contractQuery(g(t),{get_scores:{}}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(j.useState)(),t=Object(f.a)(e,2),n=t[0],c=t[1],i=Object(j.useState)(!0),o=Object(f.a)(i,2),l=o[0],u=o[1],d=Object(r.d)();Object(j.useEffect)((function(){u(!0);var e=function(){var e=Object(x.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!d||"testnet"!==d.network.name){e.next=4;break}return e.next=3,D(d);case 3:return e.abrupt("return",e.sent.scores);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().then((function(e){c(e),u(!1)}))}),[d]);return Object(s.jsxs)("main",{className:"App",children:[Object(s.jsx)("header",{children:Object(s.jsx)(a.b,{to:"/terra-starter",className:"home-link",children:Object(s.jsxs)("div",{className:"header-titles",children:[Object(s.jsx)("h1",{children:"\u2694 Goblin War \u2694\ufe0f"}),Object(s.jsx)("p",{children:"Only you can save us from Goblin town"})]})})}),Object(s.jsxs)("div",{className:"score-board-container",children:[Object(s.jsx)("h3",{children:"Scoreboard"}),l?Object(s.jsx)("div",{children:"Loading..."}):function(e){return!e||e.length<1?Object(s.jsx)("div",{children:" No scores available :( "}):e.map((function(e,t){return Object(s.jsx)("div",{className:"score",children:Object(s.jsxs)("span",{children:[e[0].slice(0,5)+"..."+e[0].slice(-4),":"," ",e[1].toString().padStart(2,"0")]})},t)}))}(n),Object(s.jsx)("div",{})]})]})},I="_buildspace",_="https://twitter.com/".concat(I);Object(r.c)().then((function(e){h.a.render(Object(s.jsx)(d.a.StrictMode,{children:Object(s.jsx)(r.a,Object(c.a)(Object(c.a)({},e),{},{children:Object(s.jsxs)("div",{className:"App-header",children:[Object(s.jsx)(a.a,{children:Object(s.jsxs)(O.c,{children:[Object(s.jsx)(O.a,{path:"/terra-starter/",element:Object(s.jsx)(u,{})}),Object(s.jsx)(O.a,{path:"/terra-starter/play",element:Object(s.jsx)(A,{})}),Object(s.jsx)(O.a,{path:"/terra-starter/leaderboard",element:Object(s.jsx)(L,{})}),Object(s.jsx)(O.a,{path:"/terra-starter/guide",element:Object(s.jsx)(S,{})})]})}),Object(s.jsxs)("div",{className:"footer-container",children:[Object(s.jsx)("img",{alt:"Twitter Logo",className:"twitter-logo",src:"/terra-starter/twitter-logo.svg"}),Object(s.jsx)("a",{className:"footer-text",href:_,target:"_blank",rel:"noreferrer",children:"Made with @".concat(I)})]})]})}))}),document.getElementById("root"))}))}},[[614,1,2]]]);
//# sourceMappingURL=main.78bc55c8.chunk.js.map