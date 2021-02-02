(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var r,a=n(0),o=n(12),i=n.n(o),l=n(13),c=n(14),s=n(4),f=n(17),u=n(15),d=n(1),O=100,b=14.285714285714286,y=Object.freeze({TILE_WIDTH:O,TILE_HEIGHT:100,TILE_PADDING:b,TILE_CORNER_RADIUS:2.857142857142857}),h=471.42857142857144,j=471.42857142857144,x=Object.freeze({BOARD_ROWS:4,BOARD_COLS:4,BOARD_WIDTH:h,BOARD_HEIGHT:j,BOARD_CORNER_RADIUS:5.892857142857143}),v=157.14285714285714,m=10,E=157.14285714285714,D=Object.freeze({LABEL_WIDTH:150,LABEL_HEIGHT:75,LABEL_CORNER_RADIUS:5}),p=Object.freeze({LEFT:1,RIGHT:2,UP:3,DOWN:4}),R=Object.freeze({ArrowLeft:p.LEFT,ArrowRight:p.RIGHT,ArrowUp:p.UP,ArrowDown:p.DOWN}),T=Object.freeze({ENTER_DURATION:125,MOVE_DURATION:150,SCORE_INCREASE_DURATION:200}),A="#bbada0",I=Object.freeze((r={},Object(d.a)(r,0,{fillColor:"#cdc1b4",textColor:"#cdc1b4",fontSize:0}),Object(d.a)(r,2,{fillColor:"#eee4da",textColor:"#776e65",fontSize:3}),Object(d.a)(r,4,{fillColor:"#ede0c8",textColor:"#776e65",fontSize:3}),Object(d.a)(r,8,{fillColor:"f2b179",textColor:"#f9f6f2",fontSize:3}),Object(d.a)(r,16,{fillColor:"#f59563",textColor:"#f9f6f2",fontSize:2.8}),Object(d.a)(r,32,{fillColor:"#f67c5f",textColor:"#f9f6f2",fontSize:2.8}),Object(d.a)(r,64,{fillColor:"#f65e3b",textColor:"#f9f6f2",fontSize:2.8}),Object(d.a)(r,128,{fillColor:"#edcf72",textColor:"#f9f6f2",fontSize:2.6}),Object(d.a)(r,256,{fillColor:"#edcc61",textColor:"#f9f6f2",fontSize:2.6}),Object(d.a)(r,512,{fillColor:"#edc850",textColor:"#f9f6f2",fontSize:2.6}),Object(d.a)(r,1024,{fillColor:"#edc53f",textColor:"#f9f6f2",fontSize:2.2}),Object(d.a)(r,2048,{fillColor:"#edc22e",textColor:"#f9f6f2",fontSize:2.2}),Object(d.a)(r,4096,{fillColor:"#3c3a32",textColor:"#f9f6f2",fontSize:2.2}),Object(d.a)(r,8192,{fillColor:"#3c3a32",textColor:"#f9f6f2",fontSize:2.2}),Object(d.a)(r,16384,{fillColor:"#3c3a32",textColor:"#f9f6f2",fontSize:2}),Object(d.a)(r,32768,{fillColor:"#3c3a32",textColor:"#f9f6f2",fontSize:2}),Object(d.a)(r,65536,{fillColor:"#3c3a32",textColor:"#f9f6f2",fontSize:2}),r)),_=n(10),S=n(16),C=n(9),g=x.BOARD_ROWS,L=x.BOARD_COLS;function N(e,t){var n,r=function(e){for(var t=[],n=0;n<g;n++)t.push(Array(L).fill({value:0,position:0,id:"0"}));var r,a=Object(C.a)(e);try{for(a.s();!(r=a.n()).done;){var o=r.value,i=o.position,l=Math.floor(i/L),c=i%L;t[l][c]=o}}catch(s){a.e(s)}finally{a.f()}return t}(e);switch(t){case p.LEFT:case p.RIGHT:n=r;break;case p.UP:case p.DOWN:n=G(r);break;default:n=null}return n.map((function(e,n){return function(e,t,n){var r=e.filter((function(e){return 0!==e.value}));if(0===r.length)return{collapsedRow:[],additionalScore:0};n!==p.RIGHT&&n!==p.DOWN||(r=r.reverse());var a,o,i=r,l=Object(_.a)(i),c=l[0],s=l.slice(1);switch(n){case p.LEFT:a=t*L,o=1;break;case p.RIGHT:a=(t+1)*L-1,o=-1;break;case p.UP:a=t,o=g;break;case p.DOWN:a=t+(g-1)*L,o=-g}var f={collapsedRow:[{value:c.value,position:a,id:c.id}],additionalScore:0};return s.reduce((function(e,t){var n,r=e.collapsedRow,a=r[r.length-1];return a.value===t.value?(a.value*=2,n=a.value,t.position=a.position):(n=0,t.position=a.position+o,r.push(t)),{collapsedRow:r,additionalScore:e.additionalScore+n}}),f)}(e,n,t)})).reduce((function(e,t){var n=t.collapsedRow,r=t.additionalScore;return{filledData:e.filledData.concat(n),additionalScore:e.additionalScore+r}}),{filledData:[],additionalScore:0})}function k(e,t){for(var n=[],r=0;r<g;r++)n.push(Array(L).fill(0));var a,o=Object(C.a)(e);try{for(o.s();!(a=o.n()).done;){var i=a.value,l=i.position,c=Math.floor(l/L),s=l%L;n[c][s]=i.value}}catch(y){o.e(y)}finally{o.f()}var f,u,d,O=n.map((function(e){return e.slice()}));switch(t){case p.LEFT:f=U(O);break;case p.RIGHT:f=U(O.map((function(e){return e.reverse()}))).map((function(e){return e.reverse()}));break;case p.UP:f=G(U(G(O)));break;case p.DOWN:var b=U(G(O).map((function(e){return e.reverse()})));f=G(b.map((function(e){return e.reverse()})))}return d=f,!((u=n).length===d.length&&u.every((function(e,t){var n=d[t];return e.length===n.length&&e.every((function(e,t){return e===n[t]}))})))}function H(e,t){var n=y.TILE_WIDTH,r=y.TILE_HEIGHT,a=y.TILE_PADDING;return{x:t*(n+a)+a/2,y:e*(r+a)+a/2}}function w(e){return H(Math.floor(e/L),e%L)}function z(e){return e.length===g*L&&!k(e,p.LEFT)&&!k(e,p.RIGHT)&&!k(e,p.UP)&&!k(e,p.DOWN)}function B(e,t){var n=e.map((function(e){return e.position})),r=Object(S.a)(Array(g*L).keys()).filter((function(e){return!n.includes(e)})),a=Math.random()<.8?2:4,o=Math.floor(Math.random()*r.length);return e.concat([{value:a,position:r[o],id:String(t)}])}function U(e){return e.map((function(e){var t=e.filter((function(e){return 0!==e})),n=[];if(t.length>0){var r=Object(_.a)(t),a=r[0];n=r.slice(1).reduce((function(e,t){return e[e.length-1]===t?e[e.length-1]*=2:e.push(t),e}),[a])}return n.concat(Array(L-n.length).fill(0))}))}function G(e){return e[0].map((function(t,n){return e.map((function(e){return e[n]}))}))}function W(e){var t=x.BOARD_ROWS,n=x.BOARD_COLS,r=x.BOARD_WIDTH,o=x.BOARD_HEIGHT,i=x.BOARD_CORNER_RADIUS,l=Array.from(Array(t).keys(),(function(e){return Array.from(Array(n).keys(),(function(t){var n=H(e,t),r=n.x,o=n.y;return Object(a.jsx)(F,{x:r,y:o},"<EmptyTile>(".concat(e,",").concat(t,")"))}))})),c=e.x,s=e.y;return Object(a.jsxs)("g",{transform:"translate(".concat(c,", ").concat(s,")"),children:[Object(a.jsx)("rect",{x:0,y:0,width:r,height:o,rx:i,style:{fill:A}}),l]})}function P(e){var t=e.data.value,n=e.state,r=n.x,o=n.y,i=n.scale,l=I[t],c=l.fillColor,s=l.textColor,f=l.fontSize,u=y.TILE_WIDTH,d=y.TILE_HEIGHT,O=y.TILE_PADDING,b=y.TILE_CORNER_RADIUS;return Object(a.jsxs)("g",{transform:"translate(".concat(r,", ").concat(o,")"),children:[Object(a.jsx)("rect",{x:O/2+(1-i)*u/2,y:O/2+(1-i)*d/2,rx:b,width:i*u,height:i*d,style:{fill:c}}),Object(a.jsx)("text",{textAnchor:"middle",x:u/2+O/2,y:d/2+O/2,alignmentBaseline:"central",style:{fontSize:"".concat(f*i,"em"),fontFamily:"clear_sansbold",fill:s},children:t})]})}function F(e){var t=e.x,n=e.y,r=I[0].fillColor,o=y.TILE_WIDTH,i=y.TILE_HEIGHT,l=y.TILE_PADDING,c=y.TILE_CORNER_RADIUS;return Object(a.jsx)("g",{transform:"translate(".concat(t,", ").concat(n,")"),children:Object(a.jsx)("rect",{x:l/2,y:l/2,rx:c,width:o,height:i,style:{fill:r}})})}function M(e){return Object(a.jsx)("g",{children:Object(a.jsx)("text",{textAnchor:"start",x:m,y:m,alignmentBaseline:"hanging",style:{fontSize:"4.0em",fontFamily:"clear_sansbold",fill:"#776e65"},children:"2048"})})}function K(e){var t=e.score;t=Math.round(t);var n=D.LABEL_WIDTH,r=D.LABEL_HEIGHT,o=D.LABEL_CORNER_RADIUS,i=x.BOARD_WIDTH;return Object(a.jsxs)("g",{children:[Object(a.jsx)("rect",{x:i-m-n,y:m,rx:o,width:n,height:r,style:{fill:"#bbad9f"}}),Object(a.jsx)("text",{textAnchor:"middle",x:i-m-n/2,y:m+.23*r,alignmentBaseline:"baseline",style:{fontSize:"0.8em",fontFamily:"clear_sansbold",fill:"#ebe2d7"},children:"SCORE"}),Object(a.jsx)("text",{textAnchor:"middle",x:i-m-n/2,y:m+.7*r,alignmentBaseline:"baseline",style:{fontSize:"".concat(1.8-.07*(String(t).length-1),"em"),fontFamily:"clear_sansbold",fill:"#ffffff"},children:t})]})}function V(e){return Object(a.jsxs)("g",{children:[Object(a.jsx)("text",{textAnchor:"middle",x:0,y:E/3,alignmentBaseline:"central",style:{fontSize:"1.0em",fontFamily:"clear_sansbold",fill:"#776e65"},children:"A simple clone of 2048,"}),Object(a.jsx)("a",{href:"https://play2048.co",children:Object(a.jsx)("text",{textAnchor:"middle",x:0,y:E/2,alignmentBaseline:"central",style:{fontSize:"1.0em",fontFamily:"clear_sansbold",fill:"#776e65"},children:"based off of Gabriele Cirulli's game."})}),Object(a.jsx)("text",{textAnchor:"middle",x:0,y:2*E/3,alignmentBaseline:"central",style:{fontSize:"1.0em",fontFamily:"clear_sansbold",fill:"#776e65"},children:"Implemented with React."})]})}var J=n(2),Y=n.n(J),q=n(7),Q=(n(26),function(e){Object(f.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).state={filledData:[],tileNumber:0,score:0},r.addNewEntry=r.addNewEntry.bind(Object(s.a)(r)),r.processKeyPress=r.processKeyPress.bind(Object(s.a)(r)),r.keyOfEntry=r.keyOfEntry.bind(Object(s.a)(r)),r}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.addNewEntry(),document.addEventListener("keydown",this.processKeyPress,!1),setTimeout(this.addNewEntry,200)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.processKeyPress,!1)}},{key:"processKeyPress",value:function(e){var t=this,n=R[e.key];void 0!==n&&(this.setState((function(e){var r=e.filledData;if(!k(r,n))return{};var a=N(r,n),o=a.filledData,i=a.additionalScore;return setTimeout(t.addNewEntry,T.MOVE_DURATION),{filledData:o,score:e.score+i}})),z(this.state.filledData)&&document.removeEventListener("keydown",this.processKeyPress,!1))}},{key:"keyOfEntry",value:function(e){return String(e.id)}},{key:"addNewEntry",value:function(){this.setState((function(e){return{filledData:B(e.filledData,e.tileNumber),tileNumber:e.tileNumber+1}}))}},{key:"startTransition",value:function(e,t){var n=w(e.position);return{x:n.x,y:n.y,scale:0}}},{key:"enterTransition",value:function(e,t){return{scale:[1],timing:{duration:T.ENTER_DURATION}}}},{key:"updateTransition",value:function(e,t){var n=w(e.position);return{x:[n.x],y:[n.y],timing:{duration:T.MOVE_DURATION}}}},{key:"updateLeave",value:function(e,t){var n=w(e.position);return{x:[n.x],y:[n.y],timing:{duration:T.MOVE_DURATION/1.35}}}},{key:"render",value:function(){var e=x.BOARD_WIDTH,t=x.BOARD_HEIGHT;return document.body.style="background: #faf8ef;",Object(a.jsx)("div",{children:Object(a.jsxs)("svg",{width:e,height:v+t+E,align:"center",children:[Object(a.jsx)(M,{}),Object(a.jsx)(q.a,{show:!0,start:{value:0},update:{value:[this.state.score],timing:{duration:T.SCORE_INCREASE_DURATION}},children:function(e){var t=e.value;return Object(a.jsx)(K,{score:t})}}),Object(a.jsxs)("g",{transform:"translate(".concat(0,",",v,")"),children:[Object(a.jsx)(W,{x:0,y:0}),Object(a.jsx)(q.b,{data:this.state.filledData,keyAccessor:this.keyOfEntry,start:this.startTransition,enter:this.enterTransition,update:this.updateTransition,leave:this.updateLeave,children:function(e){return Object(a.jsx)("g",{children:e.map((function(e){e.key;var t=e.data,n=e.state;return Object(a.jsx)(P,{data:t,state:n},t.id)}))})}}),Object(a.jsx)(q.a,{show:z(this.state.filledData),start:{opacity:0,backgroundColor:A},enter:{opacity:[.7],timing:{duration:1e3}},children:function(n){var r=n.backgroundColor,o=n.opacity;return Object(a.jsxs)("g",{children:[Object(a.jsx)("rect",{x:0,y:0,width:e,height:t,style:{opacity:o,fill:r}}),Object(a.jsx)("text",{textAnchor:"middle",x:e/2,y:t/2,alignmentBaseline:"central",style:{fontSize:"4em",fontFamily:"clear_sansbold",fill:"#776e65",opacity:o},children:"You Lose!"})]})}})]}),Object(a.jsx)("g",{transform:"translate(".concat(e/2,",").concat(v+t,")"),children:Object(a.jsx)(V,{})})]})})}}]),n}(Y.a.Component));i.a.render(Object(a.jsx)(Q,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.0f94ed35.chunk.js.map