(this["webpackJsonpreact-quiz"]=this["webpackJsonpreact-quiz"]||[]).push([[0],[,,,,,,function(e,t,s){e.exports={Quiz:"Quiz_Quiz__3X_sf",QuizWrapper:"Quiz_QuizWrapper__3vLHX",Header:"Quiz_Header__14YQV",Timer:"Quiz_Timer__11LN0"}},,function(e,t,s){e.exports={Drawer:"Drawer_Drawer__3Ix52",close:"Drawer_close__1hOg-",active:"Drawer_active__1eT7c"}},function(e,t,s){e.exports={MenuToggle:"MenuToggle_MenuToggle__3obZh",open:"MenuToggle_open__1LPUm"}},,function(e,t,s){e.exports={ActiveQuiz:"ActiveQuiz_ActiveQuiz__vGQex",Question:"ActiveQuiz_Question__Z7hlk"}},function(e,t,s){e.exports={AnswerItem:"AnswerItem_AnswerItem__2PjRY",succes:"AnswerItem_succes__2ZMEN",error:"AnswerItem_error__3ox5Q"}},function(e,t,s){e.exports={Button:"Button_Button__3PoeL",disabled:"Button_disabled__2LHrG",error:"Button_error__3oz_p",succes:"Button_succes__3Ttm_",primary:"Button_primary__2ebpH"}},function(e,t,s){e.exports={FinishedQuiz:"FinishedQuiz_FinishedQuiz__1QXqr",succes:"FinishedQuiz_succes__1gg2g",error:"FinishedQuiz_error__3JktM"}},,function(e,t,s){e.exports={Backdrop:"Backdrop_Backdrop__2AMtc"}},function(e,t,s){e.exports={Layout:"Layout_Layout__OBs9D"}},function(e,t,s){e.exports={AnswersList:"AnswersList_AnswersList__3JL60"}},,,,,,function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(0),i=s(1),r=s.n(i),a=s(15),c=s.n(a),u=(s(24),s(2)),o=s(3),l=s(5),d=s(4),h=s(16),j=s.n(h),_=function(e){return Object(n.jsx)("div",{className:j.a.Backdrop,onClick:e.onClick})},b=s(8),p=s.n(b),w=[1,2,3],O=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(u.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"renderLinks",value:function(){return w.map((function(e,t){return Object(n.jsx)("li",{children:Object(n.jsxs)("a",{children:["Link ",e]})},t)}))}},{key:"render",value:function(){var e=[p.a.Drawer];return this.props.isOpen||e.push(p.a.close),Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)("nav",{className:e.join(" "),children:Object(n.jsx)("ul",{children:this.renderLinks()})}),this.props.isOpen?Object(n.jsx)(_,{onClick:this.props.onClose}):null]})}}]),s}(i.Component),x=s(9),f=s.n(x),m=function(e){var t=[f.a.MenuToggle,"fa"];return e.isOpen?(t.push("fa-times"),t.push(f.a.open)):t.push("fa-bars"),Object(n.jsx)("i",{className:t.join(" "),onClick:e.onToggle})},v=s(17),g=s.n(v),Q=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(u.a)(this,s);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={menu:!1},e.toggleMenuHandler=function(){e.setState({menu:!e.state.menu})},e.menuCloseHandler=function(){e.setState({menu:!1})},e}return Object(o.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:g.a.Layout,children:[Object(n.jsx)(O,{isOpen:this.state.menu,onClose:this.menuCloseHandler}),Object(n.jsx)(m,{onToggle:this.toggleMenuHandler,isOpen:this.state.menu}),Object(n.jsx)("main",{children:this.props.children})]})}}]),s}(r.a.Component),z=s(10),k=s(6),A=s.n(k),y=s(11),C=s.n(y),S=s(12),L=s.n(S),q=function(e){var t=[L.a.AnswerItem];return e.answerState&&t.push(L.a[e.answerState]),Object(n.jsx)("li",{className:t.join(" "),onClick:function(){return e.onAnswerClick(e.answer.id)},children:e.answer.text})},N=s(18),F=s.n(N),T=function(e){return Object(n.jsx)("ul",{className:F.a.AnswersList,children:e.answers.map((function(t,s){return Object(n.jsx)(q,{answer:t,onAnswerClick:e.onAnswerClick,answerState:e.answerState?e.answerState[t.id]:null},s)}))})},B=function(e){return Object(n.jsxs)("div",{className:C.a.ActiveQuiz,children:[Object(n.jsxs)("p",{className:C.a.Question,children:[Object(n.jsxs)("span",{children:[Object(n.jsxs)("strong",{children:[e.answerNumber,"."]}),"\xa0",e.question]}),Object(n.jsxs)("small",{children:[e.answerNumber," out of ",e.quizLength]})]}),Object(n.jsx)(T,{answerState:e.answerState,answers:e.answers,onAnswerClick:e.onAnswerClick})]})},H=s(13),I=s.n(H),M=function(e){var t=[I.a.Button,I.a[e.type]];return Object(n.jsx)("button",{onClick:e.onClick,className:t.join(" "),disabled:e.disabled,children:e.children})},D=s(14),P=s.n(D),W=function(e){var t=Object.keys(e.results).reduce((function(t,s){return"succes"===e.results[s]&&t++,t}),0);return Object(n.jsxs)("div",{className:P.a.FinishedQuiz,children:[Object(n.jsx)("ul",{children:e.quiz.map((function(t,s){var i=["fa","error"===e.results[t.id]?"fa-times":"fa-check",P.a[e.results[t.id]]];return Object(n.jsxs)("li",{children:[Object(n.jsx)("strong",{children:s+1}),".\xa0",t.question,Object(n.jsx)("i",{className:i.join(" ")})]},s)}))}),Object(n.jsxs)("p",{children:["Correct answers: ",t," out of ",e.quiz.length]}),Object(n.jsx)(M,{onClick:e.onRetry,type:"primary",children:"Repeat"}),Object(n.jsx)(M,{type:"succes",children:"go to list of tests"})]})},J=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(u.a)(this,s);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={results:{},activeQuestion:0,isFinished:!1,answerState:null,quiz:[{id:1,question:"What color is the sky?",rightAnswerId:2,answers:[{text:"red",id:1},{text:"blue",id:2},{text:"green",id:3},{text:"white",id:4}]},{id:2,question:"What is the capital of Ukraine?",rightAnswerId:4,answers:[{text:"Lviv",id:1},{text:"Odessa",id:2},{text:"Kharkiv",id:3},{text:"Kiev",id:4}]}]},e.onAnswerClickHendler=function(t){if(e.state.answerState){var s=Object.keys(e.state.answerState)[0];if("succes"===e.state.answerState[s])return}var n=e.state.quiz[e.state.activeQuestion],i=e.state.results;if(n.rightAnswerId===t){i[n.id]||(i[n.id]="succes"),e.setState({answerState:Object(z.a)({},t,"succes"),results:i});var r=window.setTimeout((function(){e.isQuizFinished()?e.setState({isFinished:!0}):e.setState({activeQuestion:e.state.activeQuestion+1,answerState:null}),window.clearTimeout(r)}),1e3)}else i[n.id]="error",e.setState({answerState:Object(z.a)({},t,"error"),results:i})},e.retryHandler=function(){e.setState({activeQuestion:0,answerState:null,isFinished:!1,results:{}})},e}return Object(o.a)(s,[{key:"isQuizFinished",value:function(){return this.state.activeQuestion+1===this.state.quiz.length}},{key:"render",value:function(){return console.log("render",this.state),Object(n.jsx)("div",{className:A.a.Quiz,children:Object(n.jsxs)("div",{className:A.a.QuizWrapper,children:[Object(n.jsxs)("div",{className:A.a.Header,children:[Object(n.jsx)("h1",{children:"Quiz"}),Object(n.jsx)("div",{className:A.a.Timer,children:this.state.currentTime})]}),this.state.isFinished?Object(n.jsx)(W,{results:this.state.results,quiz:this.state.quiz,onRetry:this.retryHandler}):Object(n.jsx)(B,{onAnswerClick:this.onAnswerClickHendler,question:this.state.quiz[this.state.activeQuestion].question,answers:this.state.quiz[this.state.activeQuestion].answers,quizLength:this.state.quiz.length,answerNumber:this.state.activeQuestion+1,answerState:this.state.answerState})]})})}}]),s}(i.Component);var R=function(){return Object(n.jsx)(Q,{children:Object(n.jsx)(J,{})})},X=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,26)).then((function(t){var s=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;s(e),n(e),i(e),r(e),a(e)}))};c.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(R,{})}),document.getElementById("root")),X()}],[[25,1,2]]]);
//# sourceMappingURL=main.83d543cc.chunk.js.map