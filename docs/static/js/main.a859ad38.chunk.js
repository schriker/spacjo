(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,t,a){e.exports={wrapper:"Battleship_wrapper__2_8uC",body:"Battleship_body__1rrzM",shadow:"Battleship_shadow__1XrVm",flyleft:"Battleship_flyleft__afY-t",flyright:"Battleship_flyright__K622e",blue:"Battleship_blue__3MUfr",red:"Battleship_red__gkla5",exhaust:"Battleship_exhaust__3liZ_",exhaustleft:"Battleship_exhaustleft__2VKy4",exhaustanimation:"Battleship_exhaustanimation__1iTXX",exhaustright:"Battleship_exhaustright__2wiR1"}},,,function(e,t,a){e.exports={wrapper:"Start_wrapper__2Xgkd",logo:"Start_logo__2qf6O",platform:"Start_platform__2GsjG"}},,function(e,t,a){e.exports={wrapper:"Stats_wrapper__2mtSa",lives:"Stats_lives__d7PlC"}},function(e,t,a){e.exports={body:"Bullets_body__21_0p","bullet-animation":"Bullets_bullet-animation__Tgc8H",laser:"Bullets_laser__1LGwy",minigun:"Bullets_minigun__2yMcu",plasma:"Bullets_plasma__BL8J-"}},function(e,t,a){e.exports={body:"Asteroid_body__2qqba",type1:"Asteroid_type1__2DJoJ",type2:"Asteroid_type2__2n1Ir",type3:"Asteroid_type3__13OPq",type4:"Asteroid_type4__3MDjK"}},,,function(e,t,a){e.exports={wrapper:"Layout_wrapper__2fKuD"}},function(e,t,a){e.exports=a.p+"static/media/logo.843abc67.png"},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAVCAYAAABc6S4mAAAAkklEQVQ4jWNkQAX/GbADdHUwQFA9E4YUlQHNLWBE9uaLOF8MBSAgsWgzhhgI3JNAsI/+QrBj3yHYQz+IWDBEoODbLkSwIAcFqWCYBRFysFALDI+MhgzgmY6YlIMrcw2/sggO/v9HlL6MjIxYgwtXsNTwMTA2f/wP0wsXHzpBBHM9OsBVU6EDUms6OBjiqYiBgQEA5FojWIvrN38AAAAASUVORK5CYII="},function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),l=a.n(i),c=(a(21),a(3)),s=a(4),o=a(1),u={player:{lives:4,score:0,gun:"laser",userName:"Player name",selectedShip:"blue"},game:{isStarted:!1,arenaHeight:0,arenaWidth:0,playerPosition:{x:0,y:0},playerBullets:[]},enemies:[]},p=function(e,t){switch(t.type){case"INIT_GAME":return Object(o.a)({},e,{game:Object(o.a)({},e.game,{arenaHeight:t.payload.arenaHeight,arenaWidth:t.payload.arenaWidth,playerPosition:Object(o.a)({},e.game.playerPosition,{x:t.payload.playerPosition.x,y:t.payload.playerPosition.y})})});case"SET_USERNAME":return Object(o.a)({},e,{player:Object(o.a)({},e.player,{userName:t.userName})});case"SET_BATTLESHIP":return Object(o.a)({},e,{player:Object(o.a)({},e.player,{selectedShip:t.selectedShip})});case"START_GAME":return Object(o.a)({},e,{player:Object(o.a)({},e.player,{userName:t.userName}),game:Object(o.a)({},e.game,{isStarted:!0})});case"MOVE_LEFT":return Object(o.a)({},e,{game:Object(o.a)({},e.game,{playerPosition:Object(o.a)({},e.game.playerPosition,{x:e.game.playerPosition.x-10})})});case"MOVE_RIGHT":return Object(o.a)({},e,{game:Object(o.a)({},e.game,{playerPosition:Object(o.a)({},e.game.playerPosition,{x:e.game.playerPosition.x+10})})});case"BULLET_CREATE":return Object(o.a)({},e,{game:Object(o.a)({},e.game,{playerBullets:[].concat(Object(s.a)(e.game.playerBullets),[t.payload])})});case"BULLET_REMOVE":var a=e.game.playerBullets.filter(function(e){return e.id!==t.id});return Object(o.a)({},e,{game:Object(o.a)({},e.game,{playerBullets:Object(s.a)(a)})});case"ENEMY_ADD":return Object(o.a)({},e,{enemies:[].concat(Object(s.a)(e.enemies),[t.payload])});case"ENEMY_REMOVE":var n=e.enemies.filter(function(e){return e.id!==t.id});return Object(o.a)({},e,{enemies:Object(s.a)(n)});default:return e}},m=r.a.createContext(),d=a(12),y=a.n(d),f=a(5),g=a.n(f),h=a(2),_=a.n(h),E=function(e){var t={left:e.x+"px",top:e.y+"px",transition:"all linear ".concat(e.animationTime,"ms")},a=null,n=null,i=e.flyingRight?_.a.flyright:e.flyingLeft?_.a.flyleft:null;return e.selected&&(a=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"".concat(_.a.exhaust," ").concat(_.a.exhaustleft)}),r.a.createElement("div",{className:"".concat(_.a.exhaust," ").concat(_.a.exhaustright)}))),e.withShadow&&(n=r.a.createElement("div",{className:_.a.shadow})),r.a.createElement("div",{style:t,className:_.a.wrapper},r.a.createElement("div",{className:"".concat(_.a.body," ").concat(_.a[e.color]," ").concat(i)}),a,n)},b=function(e){var t=Object(n.useContext)(m);return r.a.createElement("div",null,r.a.createElement("p",null,"Choose your battle ship!"),r.a.createElement("div",{className:g.a.platform},e.ships.map(function(e,a){var n=e===t.state.player.selectedShip;return r.a.createElement("div",{key:a,onClick:function(){return t.dispatch({type:"SET_BATTLESHIP",selectedShip:e})}},r.a.createElement(E,{animationTime:200,x:0===a?"105":"200",y:n?"40":"60",color:e,selected:n,withShadow:n}))})))},O=a(13),v=a.n(O),w=function(){var e=Object(n.useContext)(m),t=Object(n.useState)(""),a=Object(c.a)(t,2),i=a[0],l=a[1],s=Object(n.useState)({touched:!1,valid:!1}),o=Object(c.a)(s,2),u=o[0],p=o[1];Object(n.useEffect)(function(){u.valid&&e.dispatch({type:"START_GAME",userName:i})},[u]);return r.a.createElement("div",{className:g.a.wrapper},r.a.createElement("div",null,r.a.createElement("img",{className:g.a.logo,src:v.a,alt:"The Spacjo Strzelec"})),r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),p(""===i?{touched:!0,valid:!1}:{touched:!0,valid:!0})}(e)}},r.a.createElement("div",{className:!u.valid&&u.touched?"form-row form-row__input form-row__input--invalid":"form-row form-row__input"},r.a.createElement("input",{placeholder:"Player name",onChange:function(e){return l(e.target.value)},type:"text",value:i})),r.a.createElement("div",{className:"form-row"},r.a.createElement("button",{type:"submit"},"Start Game"))),r.a.createElement(b,{ships:["blue","red"]}))},j=a(7),x=a.n(j),A=a(14),B=a.n(A),S=function(){var e=Object(n.useContext)(m);return r.a.createElement("div",{className:x.a.wrapper},r.a.createElement("ul",{className:x.a.lives},Object(s.a)(Array(e.state.player.lives)).map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("img",{src:B.a,alt:"Heart"}))})),r.a.createElement("div",null,"SCORE: ",e.state.player.score))},N=a(8),T=a.n(N),k=a(6),M=function(e,t){return e.x<t.x+30+t.width&&e.x+e.width>t.x+30&&e.y<t.y+t.height&&e.height+e.y>t.y},L=function(e){var t=Object(n.useRef)(),a=Object(n.useContext)(m);Object(n.useEffect)(function(){Object(k.a)({targets:t.current,translateY:-a.state.game.arenaHeight+(a.state.game.arenaHeight-e.y)-28,duration:1500,easing:"linear",change:function(){if(a.state.enemies.length>0){var e=a.state.enemies[0],n=t.current.getBoundingClientRect();M(n,e)&&console.log("trafion!")}},complete:function(t){t.completed&&a.dispatch({type:"BULLET_REMOVE",id:e.id})}})},[]);var i={left:e.x+"px",top:e.y+"px"},l=null;return e.y>0&&(l=r.a.createElement("div",{ref:t,style:i,className:"".concat(T.a.body," ").concat(T.a[e.type])})),l},P=a(9),H=a.n(P),C=function(e){var t=Object(n.useRef)(),a=Object(n.useContext)(m);Object(n.useEffect)(function(){a.state.game.arenaHeight>0&&Object(k.a)({targets:t.current,translateY:a.state.game.arenaHeight+e.elementHeight,rotate:360,duration:5e3,easing:"linear",change:function(){console.log("Update asteroid position")},complete:function(t){t.completed&&a.dispatch({type:"ENEMY_REMOVE",id:e.id})}})},[a.state.game.arenaHeight]);var i={left:e.x+"px",top:e.y+"px"},l="type1";switch(e.type){case 1:l="type1";break;case 2:l="type2";break;case 3:l="type3";break;case 4:l="type4";break;default:l="type1"}return r.a.createElement("div",{ref:t,style:i,className:"".concat(H.a.body," ").concat(H.a[l])})},R=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},I=function(){return Date.now()+Math.random()},Y=function(){var e=Object(n.useContext)(m);return Object(n.useEffect)(function(){var t=setInterval(function(){var t=R(1,4),a=R(0,e.state.game.arenaHeight),n=0,r=0;switch(t){case 1:n=37,r=39;break;case 2:n=26,r=26;break;case 3:n=36,r=37;break;case 4:n=35,r=44;break;default:n=0,r=0}var i={id:I(),type:"asteroid",style:t,x:a,y:-n,width:r,height:n};e.dispatch({type:"ENEMY_ADD",payload:i})},2e3);return function(){return clearInterval(t)}},[e.state.game.arenaWidth]),r.a.createElement(r.a.Fragment,null,e.state.enemies.map(function(e){return r.a.createElement(C,{key:e.id,id:e.id,x:e.x,y:e.y,elementHeight:e.height,type:e.style})}))},V=function(e){var t=Object(n.useContext)(m),a=Object(n.useState)(!0),i=Object(c.a)(a,2),l=i[0],s=i[1],o=Object(n.useState)(!1),u=Object(c.a)(o,2),p=u[0],d=u[1],y=Object(n.useState)(!1),f=Object(c.a)(y,2),g=f[0],h=f[1];return Object(n.useEffect)(function(){if(t.state.game.isStarted){var a=e.arena.current.clientWidth,n=e.arena.current.clientHeight,r={arenaHeight:n,arenaWidth:a,playerPosition:{x:a/2-32,y:n-120}};t.dispatch({type:"INIT_GAME",payload:r})}setTimeout(function(){return s(!1)},1200)},[]),Object(n.useEffect)(function(){var e=function(e){39===e.keyCode&&t.state.game.playerPosition.x+84<t.state.game.arenaWidth?(t.dispatch({type:"MOVE_RIGHT"}),g||(h(!0),d(!1))):37===e.keyCode&&t.state.game.playerPosition.x-20>0?(t.dispatch({type:"MOVE_LEFT"}),p||(h(!1),d(!0))):a()},a=function(e){h(!1),d(!1)},n=function(){var e={id:I(),type:t.state.player.gun,position:{x:t.state.game.playerPosition.x+28,y:t.state.game.playerPosition.y-28}};t.dispatch({type:"BULLET_CREATE",payload:e})};return window.addEventListener("keydown",e),window.addEventListener("keyup",a),window.addEventListener("click",n),function(){window.removeEventListener("keydown",e),window.removeEventListener("keyup",a),window.removeEventListener("click",n)}},[p,g,t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(Y,null),t.state.game.playerBullets.map(function(e){return r.a.createElement(L,{key:e.id,id:e.id,type:e.type,x:e.position.x,y:e.position.y})}),r.a.createElement(E,{color:t.state.player.selectedShip,animationTime:l?900:0,flyingLeft:p,flyingRight:g,x:0===t.state.game.playerPosition.x?null:t.state.game.playerPosition.x,y:0===t.state.game.playerPosition.y?null:t.state.game.playerPosition.y,selected:!0}))},W=function(){var e=Object(n.useContext)(m),t=Object(n.useRef)(null),a=null;return e.state.game.isStarted||(a=r.a.createElement(w,null)),e.state.game.isStarted&&(a=r.a.createElement(V,{arena:t})),r.a.createElement("div",{ref:t,className:y.a.wrapper},r.a.createElement(S,null),a)},D=function(){var e=Object(n.useReducer)(p,u),t=Object(c.a)(e,2),a=t[0],i=t[1];return r.a.createElement(m.Provider,{value:{state:a,dispatch:i}},r.a.createElement(W,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[15,1,2]]]);
//# sourceMappingURL=main.a859ad38.chunk.js.map