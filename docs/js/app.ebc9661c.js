(function(n){function e(e){for(var o,u,i=e[0],a=e[1],l=e[2],f=0,b=[];f<i.length;f++)u=i[f],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&b.push(r[u][0]),r[u]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(n[o]=a[o]);s&&s(e);while(b.length)b.shift()();return c.push.apply(c,l||[]),t()}function t(){for(var n,e=0;e<c.length;e++){for(var t=c[e],o=!0,i=1;i<t.length;i++){var a=t[i];0!==r[a]&&(o=!1)}o&&(c.splice(e--,1),n=u(u.s=t[0]))}return n}var o={},r={app:0},c=[];function u(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=n,u.c=o,u.d=function(n,e,t){u.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},u.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(n,e){if(1&e&&(n=u(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)u.d(t,o,function(e){return n[e]}.bind(null,o));return t},u.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return u.d(e,"a",e),e},u.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},u.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var s=a;c.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"0d30":function(n,e,t){"use strict";t("d040")},1:function(n,e){},10:function(n,e){},11:function(n,e){},12:function(n,e){},13:function(n,e){},14:function(n,e){},15:function(n,e){},16:function(n,e){},2:function(n,e){},3:function(n,e){},4:function(n,e){},5:function(n,e){},"56d7":function(n,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("7a23");function r(n,e,t,r,c,u){var i=Object(o["k"])("demo");return Object(o["i"])(),Object(o["c"])(i)}var c={class:"container"},u={class:"row"},i={class:"col-md-12 my-3"},a=Object(o["e"])("h2",null,"Room",-1),l={class:"row"},s={class:"col-md-12"},f={class:""},b={class:"row"},p={class:"col-md-12 my-3"},d={class:"row"},m={class:"col-md-12"},v=Object(o["e"])("h2",null,"Captured Image",-1),O={class:"figure"},h=["src"];function j(n,e,t,r,j,y){var g=Object(o["k"])("vue-webrtc");return Object(o["i"])(),Object(o["d"])("div",c,[Object(o["e"])("div",u,[Object(o["e"])("div",i,[a,Object(o["n"])(Object(o["e"])("input",{"onUpdate:modelValue":e[0]||(e[0]=function(n){return j.roomId=n})},null,512),[[o["m"],j.roomId]])])]),Object(o["e"])("div",l,[Object(o["e"])("div",s,[Object(o["e"])("div",f,[Object(o["g"])(g,{ref:"webrtc",width:"100%",roomId:j.roomId,onJoinedRoom:y.logEvent,onLeftRoom:y.logEvent,onOpenedRoom:y.logEvent,onShareStarted:y.logEvent,onShareStopped:y.logEvent,onError:y.onError},null,8,["roomId","onJoinedRoom","onLeftRoom","onOpenedRoom","onShareStarted","onShareStopped","onError"])]),Object(o["e"])("div",b,[Object(o["e"])("div",p,[Object(o["e"])("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=function(){return y.onJoin&&y.onJoin.apply(y,arguments)})},"Join"),Object(o["e"])("button",{type:"button",class:"btn btn-primary",onClick:e[2]||(e[2]=function(){return y.onLeave&&y.onLeave.apply(y,arguments)})},"Leave"),Object(o["e"])("button",{type:"button",class:"btn btn-primary",onClick:e[3]||(e[3]=function(){return y.onCapture&&y.onCapture.apply(y,arguments)})},"Capture Photo"),Object(o["e"])("button",{type:"button",class:"btn btn-primary",onClick:e[4]||(e[4]=function(){return y.onShareScreen&&y.onShareScreen.apply(y,arguments)})},"Share Screen")])])])]),Object(o["e"])("div",d,[Object(o["e"])("div",m,[v,Object(o["e"])("figure",O,[Object(o["e"])("img",{src:j.img,class:"img-responsive"},null,8,h)])])])])}t("a15b");var y=t("0c08"),g={name:"demo",components:{"vue-webrtc":y["a"]},data:function(){return{img:null,roomId:"public-room-v3"}},mounted:function(){},computed:{},watch:{},methods:{onCapture:function(){this.img=this.$refs.webrtc.capture()},onJoin:function(){this.$refs.webrtc.join()},onLeave:function(){this.$refs.webrtc.leave()},onShareScreen:function(){this.img=this.$refs.webrtc.shareScreen()},onError:function(n,e){console.log("On Error Event",n,e)},logEvent:function(n){console.log("Event : ",n)}}},w=(t("95ff"),t("6b0d")),S=t.n(w);const E=S()(g,[["render",j]]);var k=E,C={name:"App",components:{demo:k}};t("0d30");const J=S()(C,[["render",r]]);var P=J;Object(o["b"])(P).mount("#app")},6:function(n,e){},7:function(n,e){},8:function(n,e){},9:function(n,e){},"95ff":function(n,e,t){"use strict";t("b5bb")},b5bb:function(n,e,t){},d040:function(n,e,t){}});
//# sourceMappingURL=app.ebc9661c.js.map