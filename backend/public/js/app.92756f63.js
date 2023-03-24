(function(){"use strict";var n={2347:function(n,e,t){var o=t(9242),a=t(3396);function r(n,e,t,o,r,l){const c=(0,a.up)("Router-view");return(0,a.wg)(),(0,a.j4)(c)}var l={name:"App",components:{}},c=t(89);const s=(0,c.Z)(l,[["render",r]]);var i=s,u=t(7387),p=t.n(u),d=(t(2166),t(2483));const m=n=>((0,a.dD)("data-v-1148b2f2"),n=n(),(0,a.Cn)(),n),v=m((()=>(0,a._)("div",{id:"root"},null,-1)));function f(n,e,t,o,r,l){const c=(0,a.up)("NavComp");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(c),v],64)}const b={class:"navbar navbar-expand-lg bg-light"},_=(0,a._)("div",{class:"container-fluid"},[(0,a._)("a",{class:"navbar-brand",href:"/"},"금수의 왕국"),(0,a._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,a._)("span",{class:"navbar-toggler-icon"})]),(0,a._)("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},[(0,a._)("ul",{class:"navbar-nav me-auto mb-2 mb-lg-0"},[(0,a._)("li",{class:"nav-item"},[(0,a._)("a",{class:"nav-link","aria-current":"page",href:"/board/notice"},"공지사항")]),(0,a._)("li",{class:"nav-item dropdown"},[(0,a._)("a",{class:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," 장터 "),(0,a._)("ul",{class:"dropdown-menu"},[(0,a._)("li",null,[(0,a._)("a",{class:"dropdown-item",href:"/product/keyboard"},"키보드")]),(0,a._)("li",null,[(0,a._)("a",{class:"dropdown-item",href:"/product/keycap"},"키캡")]),(0,a._)("li",null,[(0,a._)("a",{class:"dropdown-item",href:"/product/artisan"},"아티산")]),(0,a._)("li",null,[(0,a._)("a",{class:"dropdown-item",href:"/product/etc"},"기타용품")])])]),(0,a._)("li",{class:"nav-item"},[(0,a._)("a",{class:"nav-link","aria-current":"page",href:"/board/community"},"커뮤니티")])])])],-1),g=[_];function h(n,e,t,o,r,l){return(0,a.wg)(),(0,a.iD)("nav",b,g)}var y={name:"NavComp",props:{}};const P=(0,c.Z)(y,[["render",h]]);var w=P,C={name:"MainPage",components:{NavComp:w},props:{}};const N=(0,c.Z)(C,[["render",f],["__scopeId","data-v-1148b2f2"]]);var x=N;const D=(0,a._)("div",null,"공지사항 게시판",-1),H=(0,a._)("p",null,"공지사항 글은 어드민 페이지에서 작성 가능합니다.",-1);function k(n,e,t,o,r,l){const c=(0,a.up)("NavComp");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(c),D,H],64)}var O={name:"NoticeBoardPage",components:{NavComp:w}};const S=(0,c.Z)(O,[["render",k]]);var Z=S;const W=(0,a._)("div",null,"커뮤니티 게시판",-1),Y=(0,a._)("a",{href:"/board/community/post"},"글 작성하기",-1);function j(n,e,t,o,r,l){const c=(0,a.up)("NavComp");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(c),W,Y],64)}var T={name:"EventBoardPage",components:{NavComp:w}};const q=(0,c.Z)(T,[["render",j]]);var M=q;const U=(0,a._)("div",null,"키보드",-1),B=(0,a._)("a",{href:"/product/post"},"글 작성하기",-1);function E(n,e,t,o,r,l){const c=(0,a.up)("NavComp");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(c),U,B],64)}var A={name:"KeyboardProductPage",components:{NavComp:w}};const K=(0,c.Z)(A,[["render",E]]);var F=K;const I=(0,a._)("div",null,"키캡",-1),R=(0,a._)("a",{href:"/product/post"},"글 작성하기",-1);function $(n,e,t,o,r,l){const c=(0,a.up)("NavComp");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(c),I,R],64)}var z={name:"KeycapProductPage",components:{NavComp:w}};const G=(0,c.Z)(z,[["render",$]]);var J=G;const L=(0,a._)("div",null,"아티산",-1),Q=(0,a._)("a",{href:"/product/post"},"글 작성하기",-1);function V(n,e,t,o,r,l){const c=(0,a.up)("NavComp");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(c),L,Q],64)}var X={name:"ArtisanProductPage",components:{NavComp:w}};const nn=(0,c.Z)(X,[["render",V]]);var en=nn;const tn=(0,a._)("div",null,"기타용품",-1),on=(0,a._)("a",{href:"/product/post"},"글 작성하기",-1);function an(n,e,t,o,r,l){const c=(0,a.up)("NavComp");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(c),tn,on],64)}var rn={name:"EtcProductPage",components:{NavComp:w}};const ln=(0,c.Z)(rn,[["render",an]]);var cn=ln;const sn=(0,a._)("br",null,null,-1),un=(0,a._)("div",null,"게시글 작성",-1),pn=(0,a._)("br",null,null,-1),dn=(0,a._)("br",null,null,-1),mn=(0,a._)("form",{method:"post",action:"/board/community/post/upload"},[(0,a._)("div",{class:"mb-3"},[(0,a._)("label",{for:"selectPostSort",class:"form-label"},"게시판을 선택해주세요"),(0,a._)("select",{id:"selectPostSort",class:"form-select","aria-label":"Default select example",name:"sort",required:""},[(0,a._)("option",{selected:""},"게시판 선택"),(0,a._)("option",{value:"자유게시판"},"자유게시판"),(0,a._)("option",{value:"정보/리뷰"},"정보/리뷰"),(0,a._)("option",{value:"나눔"},"나눔")])]),(0,a._)("div",{class:"mb-3"},[(0,a._)("label",{for:"inputPostName",class:"form-label"},"제목"),(0,a._)("input",{type:"text",class:"form-control",id:"inputPostName","aria-describedby":"emailHelp",name:"title",required:""}),(0,a._)("div",{id:"emailHelp",class:"form-text"},"제목이나 내용에 비속어가 포함되어 있을 경우, 제재를 받으실 수 있습니다.")]),(0,a._)("div",{class:"mb-3"},[(0,a._)("label",{for:"textPostDetail",class:"form-label"},"내용"),(0,a._)("textarea",{class:"form-control",id:"textPostDetail",rows:"10",name:"detail"})]),(0,a._)("br"),(0,a._)("br"),(0,a._)("br"),(0,a._)("div",null,[(0,a._)("button",{type:"submit",class:"btn btn-primary"},"등록")])],-1);function vn(n,e,t,o,r,l){const c=(0,a.up)("NavComp");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(c),sn,un,pn,dn,mn],64)}var fn={name:"BoardPostPage",components:{NavComp:w}};const bn=(0,c.Z)(fn,[["render",vn]]);var _n=bn;const gn=(0,a._)("div",null,"User Post",-1);function hn(n,e,t,o,r,l){const c=(0,a.up)("NavComp");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(c),gn],64)}var yn={name:"UserPostPage",components:{NavComp:w}};const Pn=(0,c.Z)(yn,[["render",hn]]);var wn=Pn;const Cn=(0,a._)("div",null,"User Detail",-1);function Nn(n,e,t,o,r,l){const c=(0,a.up)("NavComp");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(c),Cn],64)}var xn={name:"UserDetailPage",components:{NavComp:w}};const Dn=(0,c.Z)(xn,[["render",Nn]]);var Hn=Dn;const kn=(0,a._)("br",null,null,-1),On=(0,a._)("div",null,"상품 등록",-1),Sn=(0,a._)("br",null,null,-1),Zn=(0,a._)("br",null,null,-1),Wn=(0,a._)("form",{method:"post",action:"/product/keyboard/post/upload"},[(0,a._)("div",{class:"mb-3"},[(0,a._)("label",{for:"selectTradeSort",class:"form-label"},"매매 형식을 선택해주세요"),(0,a._)("select",{id:"selectTradeSort",class:"form-select","aria-label":"Default select example",name:"sort",required:""},[(0,a._)("option",{selected:""},"매매 형식"),(0,a._)("option",{value:"buy"},"삽니다"),(0,a._)("option",{value:"sell"},"팝니다"),(0,a._)("option",{value:"trade"},"교환합니다")])]),(0,a._)("br"),(0,a._)("div",{class:"mb-3"},[(0,a._)("label",{for:"selectProductSort",class:"form-label"},"상품 종류를 선택해주세요"),(0,a._)("select",{id:"selectProductSort",class:"form-select","aria-label":"Default select example",name:"sort",required:""},[(0,a._)("option",{selected:""},"상품 종류"),(0,a._)("option",{value:"keyboard"},"키보드"),(0,a._)("option",{value:"keycap"},"키캡"),(0,a._)("option",{value:"artisan"},"아티산"),(0,a._)("option",{value:"etc"},"기타용품")])]),(0,a._)("div",{class:"mb-3"},[(0,a._)("label",{for:"inputProductName",class:"form-label"},"상품명"),(0,a._)("input",{type:"text",class:"form-control",id:"inputProductName","aria-describedby":"emailHelp",name:"name",required:""}),(0,a._)("div",{id:"emailHelp",class:"form-text"},"정확한 상품명을 기재해주세요")]),(0,a._)("div",null,[(0,a._)("label",{for:"inputProductPrice",class:"form-label"},"가격"),(0,a._)("input",{type:"text",class:"form-control",id:"inputProductPrice","aria-describedby":"emailHelp",name:"price",required:""})]),(0,a._)("br"),(0,a._)("br"),(0,a._)("div",{class:"mb-3"},[(0,a._)("label",{for:"textProductDetail",class:"form-label"},"내용"),(0,a._)("textarea",{class:"form-control",id:"textProductDetail",rows:"10",name:"detail"})]),(0,a._)("br"),(0,a._)("br"),(0,a._)("br"),(0,a._)("div",null,[(0,a._)("button",{type:"submit",class:"btn btn-primary"},"등록")])],-1);function Yn(n,e,t,o,r,l){const c=(0,a.up)("NavComp");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(c),kn,On,Sn,Zn,Wn],64)}var jn={name:"ProductPostPage",components:{NavComp:w}};const Tn=(0,c.Z)(jn,[["render",Yn]]);var qn=Tn;const Mn=[{path:"/",name:x,component:x},{path:"/board/community/post",name:_n,component:_n},{path:"/board/notice",name:Z,component:Z},{path:"/board/community",name:M,component:M},{path:"/product/keyboard",name:F,component:F},{path:"/product/post",name:qn,component:qn},{path:"/product/keycap",name:J,component:J},{path:"/product/artisan",component:en},{path:"/product/etc",component:cn},{path:"/user/post",component:wn},{path:"/user/detail",component:Hn}],Un=(0,d.p7)({history:(0,d.PO)(),routes:Mn});var Bn=Un;(0,o.ri)(i).use(Bn).mount("#app"),t.g.$=p()}},e={};function t(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={exports:{}};return n[o].call(r.exports,r,r.exports,t),r.exports}t.m=n,function(){var n=[];t.O=function(e,o,a,r){if(!o){var l=1/0;for(u=0;u<n.length;u++){o=n[u][0],a=n[u][1],r=n[u][2];for(var c=!0,s=0;s<o.length;s++)(!1&r||l>=r)&&Object.keys(t.O).every((function(n){return t.O[n](o[s])}))?o.splice(s--,1):(c=!1,r<l&&(l=r));if(c){n.splice(u--,1);var i=a();void 0!==i&&(e=i)}}return e}r=r||0;for(var u=n.length;u>0&&n[u-1][2]>r;u--)n[u]=n[u-1];n[u]=[o,a,r]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,o){var a,r,l=o[0],c=o[1],s=o[2],i=0;if(l.some((function(e){return 0!==n[e]}))){for(a in c)t.o(c,a)&&(t.m[a]=c[a]);if(s)var u=s(t)}for(e&&e(o);i<l.length;i++)r=l[i],t.o(n,r)&&n[r]&&n[r][0](),n[r]=0;return t.O(u)},o=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(2347)}));o=t.O(o)})();
//# sourceMappingURL=app.92756f63.js.map