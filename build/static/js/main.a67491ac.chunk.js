(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{cardvalue:"bulldog",image:"img/2S.jpg"},{cardvalue:"beagle",image:"img/QS.jpg"},{cardvalue:"husky",image:"img/3D.jpg"},{cardvalue:"maltese",image:"img/QC.jpg"},{cardvalue:"pomeranian",image:"img/4C.jpg"},{cardvalue:"poodle",image:"img/KS.jpg"},{cardvalue:"pyrenees",image:"img/5H.jpg"},{cardvalue:"chihuahua",image:"img/KH.jpg"},{cardvalue:"boxer",image:"img/6S.jpg"},{cardvalue:"chow",image:"img/JD.jpg"},{cardvalue:"corgi",image:"img/7C.jpg"},{cardvalue:"mastiff",image:"img/AC.jpg"},{cardvalue:"sheepdog",image:"img/8H.jpg"},{cardvalue:"terrier",image:"img/10H.jpg"},{cardvalue:"shihtzu",image:"img/9S.jpg"}]},,,,,,,,function(e,a,t){e.exports=t(26)},,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var c=t(0),r=t.n(c),n=t(3),l=t.n(n),i=(t(14),t(4)),o=t(5),s=t(7),u=t(6),m=t(8),g=(t(16),t(1)),d=(t(18),function(e){return r.a.createElement("div",{className:"wrapper"},e.children)}),p=(t(20),function(e){return r.a.createElement("div",null,r.a.createElement("ul",{className:"nav nav-pills nav-justified"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://syin1.github.io/ReactMemoryGame/"},r.a.createElement("i",{class:"fab fa-react"})," Cards Clicky Game")),r.a.createElement("li",{className:-1!==e.message.indexOf("incorrectly")?"desc-incorrect":-1!==e.message.indexOf("correctly")?"desc-correct":"desc-normal"},e.message),r.a.createElement("li",null,"Score: ",r.a.createElement("span",{style:{color:"yellow"}},e.curScore)," | Top Score: ",e.topScore)))}),v=(t(22),function(e){return r.a.createElement("div",{className:"titlebox"},r.a.createElement("h1",null,"Cards Clicky Game!"),r.a.createElement("p",null,"Click on an image to earn points, but don't click on any more than once!"))}),f=(t(24),function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"img-container"},r.a.createElement("a",{onClick:function(){return e.selectDog(e.cardvalue)},className:0===e.curScore?"style_prevu_kit style_prevu_kit_ex":"style_prevu_kit"},r.a.createElement("img",{alt:e.cardvalue,src:e.image}))))}),h=function(e){function a(){var e,t;Object(i.a)(this,a);for(var c=arguments.length,r=new Array(c),n=0;n<c;n++)r[n]=arguments[n];return(t=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={message:"Click an image to begin!",topScore:0,curScore:0,cards:g,unselectedcards:g},t.shuffleArray=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),c=[e[t],e[a]];e[a]=c[0],e[t]=c[1]}},t.selectDog=function(e){if(void 0===t.state.unselectedcards.find(function(a){return a.cardvalue===e}))t.setState({message:"You guessed incorrectly!",topScore:t.state.curScore>t.state.topScore?t.state.curScore:t.state.topScore,curScore:0,cards:g,unselectedcards:g});else{var a=t.state.unselectedcards.filter(function(a){return a.cardvalue!==e});t.setState({message:"You guessed correctly!",curScore:t.state.curScore+1,cards:g,unselectedcards:a})}t.shuffleArray(g)},t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement(d,null,r.a.createElement(p,{message:this.state.message,curScore:this.state.curScore,topScore:this.state.topScore}),r.a.createElement(v,null),this.state.cards.map(function(a){return r.a.createElement(f,{cardvalue:a.cardvalue,image:a.image,selectDog:e.selectDog,curScore:e.state.curScore})}))}}]),a}(c.Component);l.a.render(r.a.createElement(h,null),document.getElementById("root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.a67491ac.chunk.js.map