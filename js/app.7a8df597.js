(function(t){function e(e){for(var r,i,c=e[0],o=e[1],l=e[2],p=0,d=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,c=1;c<a.length;c++){var o=a[c];0!==n[o]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},s=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/frontend-test/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"055e":function(t,e,a){},1167:function(t,e,a){"use strict";var r=a("e99b"),n=a.n(r);n.a},"21a5":function(t,e,a){},"2f5a":function(t,e,a){},"374e":function(t,e,a){},"40e0":function(t,e,a){},4357:function(t,e,a){"use strict";var r=a("055e"),n=a.n(r);n.a},"4ce9":function(t,e,a){},"50aa":function(t,e,a){},"55b6":function(t,e,a){"use strict";var r=a("2f5a"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("transition",{attrs:{mode:"out-in",name:"slide"}},[a("router-view",{key:t.$route.fullPath})],1)],1)},s=[],i=a("2877"),c={},o=Object(i["a"])(c,n,s,!1,null,"70e409e8",null),l=o.exports,u=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("SectionTitle",{attrs:{sectionTitle:"Popular Starships"}}),a("StarshipComponent",{attrs:{totalNumber:6}}),a("ViewMoreButton",{attrs:{routeTo:"/starships"}}),a("SectionTitle",{attrs:{sectionTitle:"Popular Planets"}}),a("Planet",{attrs:{numToShow:3}}),a("PaginationDots"),a("ViewMoreButton",{attrs:{routeTo:"/planets"}}),a("SectionTitle",{attrs:{sectionTitle:"Popular Characters"}}),a("Characters",{attrs:{totalNumber:4}}),a("ViewMoreButton",{attrs:{routeTo:"/characters"}})],1)},d=[],h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-container"},[t.isFetching?a("Loader",{attrs:{itemToShow:t.totalNumber,widthSize:"33.3%"}}):t._l(t.starShips,(function(t,e){return[a("StarshipsCard",{key:e,attrs:{starShip:t,index:e}})]}))],2)},m=[],f=(a("4de4"),a("caad"),a("fb6a"),a("a434"),a("b0c0"),a("a9e3"),a("2532"),a("4f96")),v=(a("96cf"),a("1da1")),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"cardTop",style:"backgroundImage: url(assets/images/starship-"+(t.index<=5?1+t.index:Math.ceil(4*Math.random()))+".jpg)"}),a("div",{staticClass:"cardBottom"},[a("div",{staticClass:"cardText"},[a("p",{staticClass:"cardTitle"},[t._v(t._s(t.starShip.name))]),a("p",[t._v("model : "+t._s(t.starShip.model))]),a("p",[t._v("capacity : "+t._s(t.starShip.cargo_capacity))]),a("div",{staticClass:"stage"},[a("router-link",{attrs:{tag:"a",to:"/starship/"+t.starShip.name}},[t._v("Read More")])],1)])])])])},g=[],b={props:{starShip:{type:Object},index:{type:Number}}},x=b,C=Object(i["a"])(x,_,g,!1,null,null,null),S=C.exports,w={components:{StarshipsCard:S},props:{totalNumber:{type:Number}},data:function(){return{filteredData:[],isFetching:!0}},watch:{$route:{immediate:!0,handler:function(){this.$store.dispatch("seachField","")}}},computed:{starShips:{get:function(){var t=this,e=this.$store.state,a=e.starShips,r=e.filteredText;return r?(a=a.filter((function(t){return t.name.toLowerCase().includes(r.toLowerCase())})),a):this.gender?(a=a.filter((function(e){return e.gender==t.gender})),a):this.filteredData},set:function(t){return t}}},methods:{getStarShips:function(t){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function a(){var r,n,s,i,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(a.prev=0,e.isFetching=!0,!t){a.next=10;break}return a.next=5,e.$store.dispatch("getStarships",t);case 5:n=a.sent,s=Object(f["a"])(n),r=s.slice(0),a.next=20;break;case 10:if(!e.$store.state.starShips.length){a.next=14;break}a.t0=e.$store.state.starShips,a.next=17;break;case 14:return a.next=16,e.$store.dispatch("getStarships");case 16:a.t0=a.sent;case 17:i=a.t0,c=Object(f["a"])(i),r=c.slice(0);case 20:e.filteredData=r.splice(0,e.totalNumber),e.isFetching=!1,a.next=28;break;case 24:a.prev=24,a.t1=a["catch"](0),e.isFetching=!1,console.log(a.t1);case 28:case"end":return a.stop()}}),a,null,[[0,24]])})))()}},mounted:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getStarShips();case 2:case"end":return e.stop()}}),e)})))()}},k=w,T=Object(i["a"])(k,h,m,!1,null,null,null),y=T.exports,$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"owl-dots"},[a("button",{staticClass:"owl-dot",attrs:{role:"button"}},[a("span")]),a("button",{staticClass:"owl-dot active",attrs:{role:"button"}},[a("span")]),a("button",{staticClass:"owl-dot",attrs:{role:"button"}},[a("span")])])}],O=(a("e20b"),{}),P=Object(i["a"])(O,$,j,!1,null,"435c0eda",null),R=P.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-link",{staticClass:"btn btn-lg",attrs:{tag:"div",to:t.routeTo}},[t._v(" View More ")])},F=[],L={props:{routeTo:{type:String}}},M=L,N=(a("c2fa"),Object(i["a"])(M,E,F,!1,null,"0baf3cc5",null)),D=N.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"gtco-testimonials card-container"},[t.isFetching?a("Loader",{attrs:{itemToShow:t.numToShow,widthSize:"33.3%"}}):t._e(),t._l(t.planets,(function(t,e){return[a("PlanetCard",{key:e,attrs:{planet:t,index:e}})]}))],2)},B=[],H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-4"},["/planets"!==t.$route.fullPath?a("div",{staticClass:"card-content",staticStyle:{height:"350px"},style:"backgroundImage : url(assets/images/planet-"+(t.index<=2?1+t.index:Math.ceil(2*Math.random()))+".jpg)"},[a("h5",[t._v(" "+t._s(t.planet.name)+" ")])]):t._e(),"/planets"==t.$route.fullPath?a("div",{staticClass:"card"},[a("div",{staticClass:"cardTop",style:"backgroundImage : url(assets/images/planet-"+(t.index<=2?1+t.index:Math.ceil(2*Math.random()))+".jpg)"}),a("div",{staticClass:"cardBottom"},[a("div",{staticClass:"cardText"},[a("p",{staticClass:"cardTitle"},[t._v(t._s(t.planet.name))]),a("p",[t._v("Temerature : "+t._s(t.planet.climate))]),a("p",[t._v("Population : "+t._s(t.planet.population))]),a("div",{staticClass:"stage"},[a("router-link",{attrs:{tag:"a",to:"/planet/"+t.planet.name}},[t._v("Read More")])],1)])])]):t._e()])},I=[],G={props:{planet:{type:Object},index:{type:Number}}},V=G,U=(a("4357"),Object(i["a"])(V,H,I,!1,null,"79e7215a",null)),z=U.exports,J={data:function(){return{isFetching:!0,filteredData:[]}},props:{numToShow:{type:Number}},components:{PlanetCard:z},watch:{$route:{immediate:!0,handler:function(){this.$store.dispatch("seachField","")}}},computed:{planets:{get:function(){var t=this.$store.state,e=t.planets,a=t.filteredText;return a?(e=e.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())})),e):this.filteredData},set:function(t){return t}}},methods:{getPlanets:function(t){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function a(){var r,n,s,i,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(a.prev=0,e.isFetching=!0,!t){a.next=10;break}return a.next=5,e.$store.dispatch("getPlanets",t);case 5:n=a.sent,s=Object(f["a"])(n),r=s.slice(0),a.next=20;break;case 10:if(!e.$store.state.planets.length){a.next=14;break}a.t0=e.$store.state.planets,a.next=17;break;case 14:return a.next=16,e.$store.dispatch("getPlanets");case 16:a.t0=a.sent;case 17:i=a.t0,c=Object(f["a"])(i),r=c.slice(0);case 20:e.filteredData=r.splice(0,e.numToShow),e.isFetching=!1,a.next=28;break;case 24:a.prev=24,a.t1=a["catch"](0),e.isFetching=!1,console.log(a.t1);case 28:case"end":return a.stop()}}),a,null,[[0,24]])})))()}},mounted:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getPlanets();case 2:case"end":return e.stop()}}),e)})))()}},q=J,W=(a("d78d"),Object(i["a"])(q,A,B,!1,null,"7fccc2d2",null)),Y=W.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",[t._v(t._s(t.sectionTitle))])},Q=[],X={props:{sectionTitle:{type:String}}},Z=X,tt=(a("7597"),Object(i["a"])(Z,K,Q,!1,null,"7201524c",null)),et=tt.exports,at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-container"},[t.isFetching?a("Loader",{attrs:{itemToShow:t.totalNumber}}):t._l(t.characters,(function(t,e){return[a("CharacterCard",{key:e,attrs:{character:t,index:e}})]}))],2)},rt=[],nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-6 movie-card",attrs:{"data-movie":"Blade Runner"}},[a("div",{staticClass:"movie-card-container"},[a("div",{staticClass:"movie-card__overlay",style:"backgroundImage : url(assets/images/character-"+(1+t.index<=3?1+t.index:Math.ceil(4*Math.random()))+".jpg)"}),a("div",{staticClass:"movie-card__content"},[a("h2",[t._v(t._s(t.character.name))]),a("p",{staticClass:"movie-card__desc"},[t._v("Gender : "+t._s(t.character.gender))]),a("p",{staticClass:"movie-card__desc"},[t._v("Birth Year : "+t._s(t.character.birth_year))]),a("p",{staticClass:"movie-card__desc"},[t._v("Hair Color : "+t._s(t.character.hair_color))]),a("router-link",{attrs:{to:"/character/"+t.character.name}},[t._v("Read More")])],1)])])},st=[],it={props:{character:{type:Object},index:{type:Number}}},ct=it,ot=(a("ade5"),Object(i["a"])(ct,nt,st,!1,null,"28ecfcc6",null)),lt=ot.exports,ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},t._l(t.itemToShow,(function(e){return a("div",{key:e,staticClass:"card-skeleton",style:"width : "+(t.widthSize||"50%")},[t._m(0,!0)])})),0)},pt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"animated-background"},[a("div",{staticClass:"card-skeleton-img"}),a("div",{staticClass:"skel-mask-container"},[a("div",{staticClass:"skel-mask skel-mask-1"}),a("div",{staticClass:"skel-mask skel-mask-2"}),a("div",{staticClass:"skel-mask skel-mask-3"}),a("div",{staticClass:"skel-mask skel-mask-4"}),a("div",{staticClass:"skel-mask skel-mask-5"}),a("div",{staticClass:"skel-mask skel-mask-6"})])])}],dt={props:{itemToShow:{type:Number},widthSize:{type:String}}},ht=dt,mt=(a("9f6a"),Object(i["a"])(ht,ut,pt,!1,null,"77f54777",null)),ft=mt.exports,vt={components:{CharacterCard:lt,Loader:ft},props:{totalNumber:{type:Number}},data:function(){return{filteredData:[],gender:"",isFetching:!0}},watch:{$route:{immediate:!0,handler:function(){this.$store.dispatch("seachField","")}}},computed:{characters:{get:function(){var t=this,e=this.$store.state,a=e.characters,r=e.filteredText;return r?(a=a.filter((function(t){return t.name.toLowerCase().includes(r.toLowerCase())})),a):this.gender?(a=a.filter((function(e){return e.gender==t.gender})),a):this.filteredData},set:function(t){return t}}},methods:{getCharacters:function(t){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function a(){var r,n,s,i,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(a.prev=0,e.isFetching=!0,!t){a.next=10;break}return a.next=5,e.$store.dispatch("getCharacters",t);case 5:n=a.sent,s=Object(f["a"])(n),r=s.slice(0),a.next=20;break;case 10:if(!e.$store.state.characters.length){a.next=14;break}a.t0=e.$store.state.characters,a.next=17;break;case 14:return a.next=16,e.$store.dispatch("getCharacters");case 16:a.t0=a.sent;case 17:i=a.t0,c=Object(f["a"])(i),r=c.slice(0);case 20:e.filteredData=r.splice(0,e.totalNumber),e.isFetching=!1,a.next=28;break;case 24:a.prev=24,a.t1=a["catch"](0),e.isFetching=!1,console.log(a.t1);case 28:case"end":return a.stop()}}),a,null,[[0,24]])})))()}},mounted:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getCharacters();case 2:case"end":return e.stop()}}),e)})))()}},_t=vt,gt=Object(i["a"])(_t,at,rt,!1,null,"c31d7ca0",null),bt=gt.exports,xt={name:"Home",components:{StarshipComponent:y,ViewMoreButton:D,PaginationDots:R,Planet:Y,Characters:bt,SectionTitle:et}},Ct=xt,St=Object(i["a"])(Ct,p,d,!1,null,"106dc038",null),wt=St.exports,kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("SectionTitle",{attrs:{sectionTitle:"Starwars Characters"}}),a("div",{staticStyle:{"margin-bottom":"20px"}},[a("SearchField",{attrs:{searchText:"FILTER"},on:{getSelectedData:t.filterCharacter}})],1),a("Characters",{ref:"characters",attrs:{totalNumber:8}}),a("PaginationButton",{on:{next:t.nextCharacters}})],1)},Tt=[],yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-4"},[t._v(" "+t._s(t.searchText)+" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selected=e.target.multiple?a:a[0]},t.selectFile]}},[a("option",{attrs:{value:""}},[t._v("choose option")]),a("option",{attrs:{value:"male"}},[t._v("Male")]),a("option",{attrs:{value:"female"}},[t._v("Female")]),a("option",{attrs:{value:"n/a"}},[t._v("Robot")])])])},$t=[],jt={data:function(){return{selected:""}},props:{searchText:{type:String}},methods:{selectFile:function(){this.$emit("getSelectedData",this.selected)}}},Ot=jt,Pt=(a("ae11"),Object(i["a"])(Ot,yt,$t,!1,null,"ad39fa06",null)),Rt=Pt.exports,Et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"page"},[a("p",[t._v(t._s(t.start)+"-"+t._s(t.end)+" of 50")]),a("li",{staticClass:"page__btn",on:{click:t.previous}},[a("a",{staticClass:"previous"},[t._v("‹")])]),a("li",{staticClass:"page__btn",on:{click:t.next}},[a("a",{staticClass:"next"},[t._v("›")])])])},Ft=[],Lt={data:function(){return{start:1,end:8,endNumber:7,endStart:1}},methods:{previous:function(){this.start>this.endStart&&(this.start=this.start-1,this.end=this.end-8,this.$emit("next",this.start))},next:function(){this.start<this.endNumber&&(this.start=this.start+1,this.end=this.end+8,this.$emit("next",this.start))}}},Mt=Lt,Nt=(a("c284"),Object(i["a"])(Mt,Et,Ft,!1,null,"620501fb",null)),Dt=Nt.exports,At={components:{SectionTitle:et,Characters:bt,SearchField:Rt,PaginationButton:Dt},methods:{filterCharacter:function(t){this.$refs.characters.gender=t},nextCharacters:function(t){this.$refs.characters.getCharacters(t)}}},Bt=At,Ht=Object(i["a"])(Bt,kt,Tt,!1,null,null,null),It=Ht.exports,Gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("SingleStarShipHeader",{attrs:{imageUrl:"assets/images/character-1.jpg"}}),a("div",{staticClass:"container-fluid"},[a("div",{staticStyle:{width:"50%",margin:"0 auto"}},[a("h2",[t._v(t._s(t.$route.params.name))]),t.character?a("div",[a("p",[t._v("Birth Color : "+t._s(t.character.birth_year))]),a("p",[t._v("Diameter : "+t._s(t.character.eye_color))]),a("p",[t._v("Gender : "+t._s(t.character.gender))]),a("p",[t._v("Hair Color : "+t._s(t.character.hair_color))]),a("p",[t._v("Height : "+t._s(t.character.height))]),a("p",[t._v("Mass : "+t._s(t.character.mass))]),a("p",[t._v("Skin Color : "+t._s(t.character.skin_color))])]):t._e(),a("div",{staticClass:"recently-viewed"},[t._v(" Recently Viewed Characters ")])]),a("hr"),a("CharactersComponent",{attrs:{totalNumber:2}}),a("PaginationDots")],1)],1)},Vt=[],Ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"nav",style:"backgroundImage: linear-gradient(transparent,transparent), url("+t.imageUrl+"),url(assets/images/hero-banner.jpg)"},[a("div",[t._m(0),a("div",{staticClass:"content-header"},[a("div",{staticClass:"bordered bordered-right"}),a("div",{staticStyle:{"margin-left":"auto","margin-right":"auto"}},[a("h2",[t._v(t._s(t.$route.params.name))])]),a("div",{staticClass:"bordered bordered-left"})])])])])},zt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("nav",{staticClass:"navbar fixed-top"},[a("div",{staticClass:"container"},[a("img",{attrs:{src:"assets/images/logo.png",alt:""}})])])])}],Jt={props:{imageUrl:{type:String}}},qt=Jt,Wt=(a("a889"),Object(i["a"])(qt,Ut,zt,!1,null,"727fafdb",null)),Yt=Wt.exports,Kt={components:{SingleStarShipHeader:Yt,CharactersComponent:bt,PaginationDots:R},data:function(){return{filteredText:"",character:{}}},mounted:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=Object(f["a"])(t.$store.state.characters),r=a.slice(0),t.character=r.filter((function(e){return e.name==t.$route.params.name}))[0];case 2:case"end":return e.stop()}}),e)})))()}},Qt=Kt,Xt=(a("55b6"),Object(i["a"])(Qt,Gt,Vt,!1,null,"c28a4a2e",null)),Zt=Xt.exports,te=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"nav"},[a("div",[t._m(0),a("div",{staticClass:"content"},[t._m(1),a("p",[t._v(" Find your favourites Characters, Films, Species, Starships and Planets ")]),a("div",{staticClass:"search-container"},[a("div",{staticClass:"element-container"},[a("div",{staticClass:"input-container"},[a("div",{staticClass:"icon-container"},[t._v(" 🔍 ")]),a("div",{staticClass:"input-field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.filteredText,expression:"filteredText"}],attrs:{type:"text",name:"",id:"",placeholder:"Enter a search item"},domProps:{value:t.filteredText},on:{input:[function(e){e.target.composing||(t.filteredText=e.target.value)},t.searchField]}})])])])])])])]),a("div",{staticClass:"container-fluid"},[a("transition",{attrs:{mode:"out-in",name:"slide"}},[a("router-view")],1)],1)])},ee=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("nav",{staticClass:"navbar fixed-top"},[a("div",{staticClass:"container"},[a("img",{attrs:{src:"assets/images/logo.png",alt:""}})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-left":"auto","margin-right":"auto"}},[a("div",{staticStyle:{display:"flex"}},[a("img",{attrs:{src:"assets/images/logo.png",alt:""}}),a("h1",{staticClass:"content-text"},[t._v("Directory")])]),a("hr")])}],ae={data:function(){return{filteredText:""}},watch:{$route:{immediate:!0,handler:function(){this.filteredText=""}}},methods:{searchField:function(){var t=this.filteredText;this.$store.dispatch("seachField",t)}}},re=ae,ne=(a("f5f0"),Object(i["a"])(re,te,ee,!1,null,"532410ce",null)),se=ne.exports,ie=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"starships"},[a("SectionTitle",{attrs:{sectionTitle:"Popular Starships"}}),a("SpaceshipComponent",{ref:"starships",attrs:{totalNumber:9}}),a("PaginationButton",{on:{next:t.nextCharacters}})],1)},ce=[],oe={components:{SectionTitle:et,SpaceshipComponent:y,PaginationButton:Dt},methods:{nextCharacters:function(t){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.$refs.starships.getStarShips(t);case 1:case"end":return a.stop()}}),a)})))()}}},le=oe,ue=Object(i["a"])(le,ie,ce,!1,null,null,null),pe=ue.exports,de=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("SingleStarShipHeader",{attrs:{imageUrl:"assets/images/starship-1.jpg"}}),a("div",{staticClass:"container-fluid"},[a("div",{staticStyle:{width:"50%",margin:"0 auto"}},[a("h2",[t._v(t._s(t.$route.params.name))]),t.starShip?a("div",[a("p",[t._v("Cargo Capacity : "+t._s(t.starShip.cargo_capacity))]),a("p",[t._v("consumables : "+t._s(t.starShip.consumables))]),a("p",[t._v("Cost in Credit : "+t._s(t.starShip.cost_in_credits))]),a("p",[t._v("Crew : "+t._s(t.starShip.crew))]),a("p",[t._v("hyperdrive Rating : "+t._s(t.starShip.hyperdrive_rating))]),a("p",[t._v("Manufacturer : "+t._s(t.starShip.manufacturer))]),a("p",[t._v("Max Atmosphering Speed : "+t._s(t.starShip.max_atmosphering_speed))]),a("p",[t._v("Model : "+t._s(t.starShip.model))]),a("p",[t._v("Passengers : "+t._s(t.starShip.passengers))]),a("p",[t._v("Starship Class : "+t._s(t.starShip.starship_class))])]):t._e(),a("div",{staticClass:"recently-viewed"},[t._v(" Recently Viewed Starships ")])]),a("hr"),a("StarshipComponent",{attrs:{totalNumber:3}}),a("PaginationDots")],1)],1)},he=[],me={components:{SingleStarShipHeader:Yt,StarshipComponent:y,PaginationDots:R},data:function(){return{filteredText:"",starShip:{}}},mounted:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=Object(f["a"])(t.$store.state.starShips),r=a.slice(0),t.starShip=r.filter((function(e){return e.name==t.$route.params.name}))[0];case 2:case"end":return e.stop()}}),e)})))()}},fe=me,ve=(a("1167"),Object(i["a"])(fe,de,he,!1,null,"6fc1a5bc",null)),_e=ve.exports,ge=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("SingleStarShipHeader",{attrs:{imageUrl:"assets/images/planet-1.jpg"}}),a("div",{staticClass:"container-fluid"},[a("div",{staticStyle:{width:"50%",margin:"0 auto"}},[a("h2",[t._v(t._s(t.$route.params.name))]),t.planet?a("div",[a("p",[t._v("climate : "+t._s(t.planet.climate))]),a("p",[t._v("Diameter : "+t._s(t.planet.diameter))]),a("p",[t._v("Gravity : "+t._s(t.planet.gravity))]),a("p",[t._v("Orbital Period : "+t._s(t.planet.orbital_period))]),a("p",[t._v("Population : "+t._s(t.planet.population))]),a("p",[t._v("Rotation Period : "+t._s(t.planet.rotation_period))]),a("p",[t._v("Surface Water : "+t._s(t.planet.surface_water))]),a("p",[t._v("Terrain : "+t._s(t.planet.terrain))])]):t._e(),a("div",{staticClass:"recently-viewed"},[t._v(" Recently Viewed Planets ")])]),a("hr"),a("PlanetComponent",{attrs:{numToShow:3}}),a("PaginationDots")],1)],1)},be=[],xe={components:{SingleStarShipHeader:Yt,PlanetComponent:Y,PaginationDots:R},data:function(){return{filteredText:"",planet:{}}},mounted:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=Object(f["a"])(t.$store.state.planets),r=a.slice(0),t.planet=r.filter((function(e){return e.name==t.$route.params.name}))[0];case 2:case"end":return e.stop()}}),e)})))()}},Ce=xe,Se=(a("d64d"),Object(i["a"])(Ce,ge,be,!1,null,"4d9105d7",null)),we=Se.exports,ke=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("SectionTitle",{attrs:{sectionTitle:"Popular Planets"}}),a("Planet",{ref:"planet",attrs:{numToShow:9}}),a("PaginationButton",{on:{next:t.nextPlanet}})],1)},Te=[],ye={components:{Planet:Y,PaginationButton:Dt,SectionTitle:et},methods:{nextPlanet:function(t){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.$refs.planet.getPlanets(t);case 1:case"end":return a.stop()}}),a)})))()}}},$e=ye,je=(a("71dd"),Object(i["a"])($e,ke,Te,!1,null,"3be433b9",null)),Oe=je.exports;r["a"].use(u["a"]);var Pe=[{path:"/",component:se,children:[{path:"",component:wt},{path:"characters",component:It},{path:"starships",component:pe},{path:"planets",component:Oe}]},{path:"/starship/:name",component:_e},{path:"/planet/:name",component:we},{path:"/character/:name",component:Zt}],Re=new u["a"]({mode:"hash",scrollBehavior:function(){return{x:0,y:0}},base:"/frontend-test/",routes:Pe}),Ee=Re,Fe=a("2f62"),Le=a("bc3a"),Me=a.n(Le),Ne=Me.a.create({baseURL:"https://swapi.dev/api/",headers:{Accept:"application/json"}});Ne.interceptors.request.use((function(t){return t})),Ne.interceptors.response.use((function(t){return t.data}));var De=Ne;r["a"].use(Fe["a"]);var Ae=new Fe["a"].Store({state:{starShips:[],planets:[],characters:[],filteredText:""},mutations:{GET_ALL_STARTSHIPS:function(t,e){t.starShips=e},GET_ALL_PLANETS:function(t,e){t.planets=e},GET_ALL_CHARACTERS:function(t,e){t.characters=e},SEARCH_FIELD:function(t,e){t.filteredText=e}},actions:{getStarships:function(t,e){return Object(v["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r=t.commit,a.prev=1,!e){a.next=8;break}return a.next=5,De.get("/starships/?page=".concat(e));case 5:n=a.sent,a.next=11;break;case 8:return a.next=10,De.get("/starships/");case 10:n=a.sent;case 11:return r("GET_ALL_STARTSHIPS",n.results),a.abrupt("return",n.results);case 15:a.prev=15,a.t0=a["catch"](1),console.log(a.t0);case 18:case"end":return a.stop()}}),a,null,[[1,15]])})))()},getPlanets:function(t,e){return Object(v["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r=t.commit,a.prev=1,!e){a.next=8;break}return a.next=5,De.get("/planets/?page=".concat(e));case 5:n=a.sent,a.next=11;break;case 8:return a.next=10,De.get("/planets/");case 10:n=a.sent;case 11:return r("GET_ALL_PLANETS",n.results),a.abrupt("return",n.results);case 15:a.prev=15,a.t0=a["catch"](1),console.log(a.t0);case 18:case"end":return a.stop()}}),a,null,[[1,15]])})))()},getCharacters:function(t,e){return Object(v["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r=t.commit,a.prev=1,!e){a.next=8;break}return a.next=5,De.get("/people/?page=".concat(e));case 5:n=a.sent,a.next=11;break;case 8:return a.next=10,De.get("/people/");case 10:n=a.sent;case 11:return r("GET_ALL_CHARACTERS",n.results),a.abrupt("return",n.results);case 15:a.prev=15,a.t0=a["catch"](1),console.log(a.t0);case 18:case"end":return a.stop()}}),a,null,[[1,15]])})))()},seachField:function(t,e){var a=t.commit;a("SEARCH_FIELD",e)}},modules:{}});r["a"].component("Loader",ft),r["a"].config.productionTip=!1,new r["a"]({router:Ee,store:Ae,render:function(t){return t(l)}}).$mount("#app")},"5e73":function(t,e,a){},"5fc5":function(t,e,a){},"64da":function(t,e,a){},"71dd":function(t,e,a){"use strict";var r=a("374e"),n=a.n(r);n.a},"74a8":function(t,e,a){},7597:function(t,e,a){"use strict";var r=a("77b6"),n=a.n(r);n.a},"77b6":function(t,e,a){},"8f0c":function(t,e,a){},"9f6a":function(t,e,a){"use strict";var r=a("e3e6"),n=a.n(r);n.a},a889:function(t,e,a){"use strict";var r=a("40e0"),n=a.n(r);n.a},ade5:function(t,e,a){"use strict";var r=a("8f0c"),n=a.n(r);n.a},ae11:function(t,e,a){"use strict";var r=a("74a8"),n=a.n(r);n.a},c284:function(t,e,a){"use strict";var r=a("64da"),n=a.n(r);n.a},c2fa:function(t,e,a){"use strict";var r=a("4ce9"),n=a.n(r);n.a},d64d:function(t,e,a){"use strict";var r=a("50aa"),n=a.n(r);n.a},d78d:function(t,e,a){"use strict";var r=a("21a5"),n=a.n(r);n.a},e20b:function(t,e,a){"use strict";var r=a("5fc5"),n=a.n(r);n.a},e3e6:function(t,e,a){},e99b:function(t,e,a){},f5f0:function(t,e,a){"use strict";var r=a("5e73"),n=a.n(r);n.a}});
//# sourceMappingURL=app.7a8df597.js.map