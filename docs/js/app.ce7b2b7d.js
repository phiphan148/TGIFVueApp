(function(e){function t(t){for(var n,o,i=t[0],c=t[1],l=t[2],u=0,h=[];u<i.length;u++)o=i[u],r[o]&&h.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(h.length)h.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},s=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("c21b"),r=a.n(n);r.a},3445:function(e,t,a){},"492c":function(e,t,a){"use strict";var n=a("5fe6"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Header"),a("Footer")],1)},s=[],o=(a("a481"),a("ac6a"),a("6762"),a("2fdb"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",[n("div",{staticClass:"container-fluid h-100"},[n("div",{staticClass:"row h-100"},[n("div",{staticClass:"col-1 img-home"},[n("router-link",{staticClass:"nav-link text-body",attrs:{to:"/"}},[n("img",{staticClass:"img-fluid",attrs:{src:a("cf05"),alt:"logo"}})])],1),n("div",{staticClass:"col-1 align-self-center"},[n("router-link",{staticClass:"nav-link text-body",attrs:{to:"/"}},[e._v("TGIF")])],1),e._m(0)])]),n("nav",{staticClass:"card-header navbar navbar-expand-lg navbar-light bg-light"},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}}),e._m(1),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav mr-auto black"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link text-body",attrs:{to:"/"}},[e._v("Home")])],1),n("li",{staticClass:"nav-item dropdown"},[n("a",{staticClass:"nav-link text-body",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e._v("Congress\n                            113\n                        ")]),n("span",{staticClass:"caret"}),n("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[n("router-link",{staticClass:"dropdown-item",attrs:{to:"/senate-data"}},[e._v("Senate")]),n("router-link",{staticClass:"dropdown-item",attrs:{to:"/house-data"}},[e._v("House")])],1)]),e._m(2),e._m(3)])])]),n("router-view")],1)])}),i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col text-right align-self-center"},[a("i",{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}}),a("a",[e._v("Email")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link text-body",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e._v("Attendance")]),a("span",{staticClass:"caret"}),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link text-body",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e._v("Party\n                            Loyalty\n                        ")]),a("span",{staticClass:"caret"}),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}})])}],c={name:"Header",data:function(){return{}}},l=c,d=(a("6d9e"),a("2877")),u=Object(d["a"])(l,o,i,!1,null,"1a9b9590",null);u.options.__file="Header.vue";var h=u.exports,p=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},f=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card-footer text-center"},[a("p",[e._v("2016 TGIF")])])}],m={name:"Footer",data:function(){return{}}},v=m,b=(a("b2e3"),Object(d["a"])(v,p,f,!1,null,"cffffe6e",null));b.options.__file="Footer.vue";var g=b.exports,y={components:{Header:h,Footer:g},data:function(){return{senatorA:[]}},created:function(){this.getData()},methods:{getData:function(){var e=this,t="senate",a="",n=window.location.href;a=n.includes(t)?"https://api.myjson.com/bins/1eja30":"https://api.myjson.com/bins/j83do",fetch(a).then(function(e){return e.json()}).then(function(t){var a=t;e.senatorA=a.results[0].members,e.senatorA.forEach(function(e){e.fullname=(e.first_name+" "+e.middle_name+" "+e.last_name).replace(null,"")}),e.$store.state.senator=e.senatorA,console.log(e.$store.state.senator)})}}},_=y,w=(a("034f"),Object(d["a"])(_,r,s,!1,null,null,null));w.options.__file="App.vue";var k=w.exports,C=a("8c4f"),x=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},S=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card-body container",staticStyle:{height:"100%"}},[n("div",{staticClass:"row h-100"},[n("div",{staticClass:"col-md-8 col-sm-12 col-12"},[n("h2",[e._v("About Us")]),n("p",[e._v("Openness, accountability, and honesty define government transparency. In a free society, transparency\n                is government's obligation to share information with citizens. It is at the heart of how citizens\n                hold their public officials accountable. Here at TGIF we believe that government should be transparent.")]),n("p",[e._v("Governments exist to serve the people. Information on how officials conduct the public business and\n                spend taxpayer money must be readily available and easily understood. This transparency allows good\n                and just governance. Transparency promotes accountability and provides information for citizens about\n                what their Government is doing.\n            ")]),n("p",[e._v("\n                We also believe that government should be participatory. Public engagement enhances the Government's effectiveness and improves\n                the quality of its decisions. Knowledge is widely dispersed in society, and public officials benefit\n                from having access to that dispersed knowledge. We invite you to use our site to become actively\n                engaged in American government.\n            ")]),n("p",[e._v("TGIF works to disclose information in forms that the public can readily find and use. We solicit public\n                feedback to identify information of greatest use to the public.")]),n("div",{attrs:{id:"summary"}},[n("div",{staticClass:"collapse",attrs:{id:"collapseSummary"}},[n("h3",[e._v("Background History of Government Transparency")]),n("p",[e._v("In the West, the idea that government should be open to public scrutiny and susceptible to\n                        public opinion dates back at least to the time of the Enlightenment, when many philosophes\n                        made an attack on absolutist doctrine of state secrecy, a core part of their intellectual\n                        project. The passage of formal legislative instruments to this end can also be traced to\n                        this time with Sweden, for example, (which then included Finland as a Swedish-governed territory)\n                        enacting free press legislation as part of its constitution (Freedom of the Press Act, 1766).\n                        This approach, and that of the philosophes more broadly, is strongly related to recent historiography\n                        on the eighteenth-century public sphere.")]),n("p",[e._v("Influenced by Enlightenment thought, the revolutions in America (1776) and France (1789),\n                        freedom of the press enshrined provisions and requirements for public budgetary accounting\n                        and freedom of the press in constitutional articles. In the nineteenth century, attempts\n                        by Metternichean statesmen to row back on these measures were vigorously opposed by a number\n                        of eminent liberal politicians and writers, Bentham, Mill and Acton prominent among the latter.")]),n("p",[e._v("Open government is widely seen to be a key hallmark of contemporary democratic practice and\n                        is often linked to the passing of freedom of information legislation. Scandinavian countries\n                        claim to have adopted the first freedom of information legislation, dating the origins of\n                        its modern provisions to the eighteenth century and Finland continuing the presumption of\n                        openness after gaining independence in 1917, passing its Act on Publicity of Official Documents\n                        in 1951 (superseded by new legislation in 1999).")]),n("p",[e._v("The United States passed its Freedom of Information Act (FOIA) in 1966, FOIAs, Access to Information\n                        Acts (AIAs) or equivalent laws were passed in Denmark and Norway in 1970.")])]),n("a",{staticClass:"collapsed text-info",attrs:{"data-toggle":"collapse",href:"#collapseSummary","aria-expanded":"false","aria-controls":"collapseSummary"}})])]),n("div",{staticClass:"img-home col-md-4 col-sm-12 col-12 text-center justify-content-center align-self-center"},[n("img",{staticClass:"img-fluid",attrs:{src:a("7a562"),alt:"logo"}})])])])}],A={name:"Home"},D=A,F=(a("a0d5"),Object(d["a"])(D,x,S,!1,null,"2e5bccd2",null));F.options.__file="Home.vue";var j=F.exports,E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card-body container"},[a("h2",[e._v("Senators")]),a("p",[e._v("First convened in 1789, the composition and powers of the Senate are established in Article One of the U.S.\n        Constitution. Each state is represented by two senators, regardless of population, who serve staggered\n        six-year\n        terms. The Senate has several exclusive powers not granted to the House, including consenting to treaties\n        as a precondition to their ratification and consenting to or confirming appointments of Cabinet secretaries,\n        federal judges, other federal executive officials, military officers, regulatory officials, ambassadors,\n        and other federal uniformed officers, as well as trial of federal officials impeached by the House.")]),a("div",{attrs:{id:"main-table"}},[a("FilterData")],1)])},O=[],T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"main-table"}},[a("table",{staticClass:"mt-4 table table-fixed",attrs:{responsive:"",hover:""}},[a("thead",{staticClass:"thead-dark"},[a("tr",e._l(e.headerArray,function(t){return a("th",[e._v(e._s(t))])}))]),a("tbody",e._l(e.senator,function(t){return a("tr",[a("td",[e._v(e._s(t.fullname))]),a("td",[e._v(e._s(t.party))]),a("td",[e._v(e._s(t.state))]),a("td",[e._v(e._s(t.seniority))]),a("td",[e._v(e._s(t.votes_with_party_pct)+"%")])])}))])])},P=[],$={name:"DataTable",data:function(){return{headerArray:["Full Name","Party","State","Seniority","Percentage of vote"]}},props:{senator:{type:Array,required:!0}}},I=$,H=(a("492c"),Object(d["a"])(I,T,P,!1,null,"06d91056",null));H.options.__file="DataTable.vue";var N=H.exports,G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"filter-all-data"},[a("div",{staticClass:"row"},[a("div",{staticClass:"row col-lg-7 col-md-12 col-sm-12 col-12 mt-2"},[a("span",{staticClass:"col"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkarr,expression:"checkarr"}],attrs:{type:"checkbox",value:"D"},domProps:{checked:Array.isArray(e.checkarr)?e._i(e.checkarr,"D")>-1:e.checkarr},on:{change:function(t){var a=e.checkarr,n=t.target,r=!!n.checked;if(Array.isArray(a)){var s="D",o=e._i(a,s);n.checked?o<0&&(e.checkarr=a.concat([s])):o>-1&&(e.checkarr=a.slice(0,o).concat(a.slice(o+1)))}else e.checkarr=r}}}),e._v(" Democrat")]),a("span",{staticClass:"col"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkarr,expression:"checkarr"}],attrs:{type:"checkbox",value:"R"},domProps:{checked:Array.isArray(e.checkarr)?e._i(e.checkarr,"R")>-1:e.checkarr},on:{change:function(t){var a=e.checkarr,n=t.target,r=!!n.checked;if(Array.isArray(a)){var s="R",o=e._i(a,s);n.checked?o<0&&(e.checkarr=a.concat([s])):o>-1&&(e.checkarr=a.slice(0,o).concat(a.slice(o+1)))}else e.checkarr=r}}}),e._v(" Repbulic")]),a("span",{staticClass:"col"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkarr,expression:"checkarr"}],attrs:{type:"checkbox",value:"I"},domProps:{checked:Array.isArray(e.checkarr)?e._i(e.checkarr,"I")>-1:e.checkarr},on:{change:function(t){var a=e.checkarr,n=t.target,r=!!n.checked;if(Array.isArray(a)){var s="I",o=e._i(a,s);n.checked?o<0&&(e.checkarr=a.concat([s])):o>-1&&(e.checkarr=a.slice(0,o).concat(a.slice(o+1)))}else e.checkarr=r}}}),e._v(" Independent")])]),a("div",{staticClass:"col-lg-2 col-md-6 col-sm-12 col-9 mt-2"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.selectarr,expression:"selectarr"}],staticClass:"container-fluid",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.selectarr=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[e._v("Choose state")]),e._l(e.statearr,function(t){return a("option",[e._v(e._s(t))])})],2)]),a("div",{staticClass:"input-group col-lg-3 col-md-6 col-sm-12 col-9"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.searchName,expression:"searchName"}],staticClass:"form-control py-2",attrs:{id:"search-data",type:"search",placeholder:"Search name"},domProps:{value:e.searchName},on:{input:function(t){t.target.composing||(e.searchName=t.target.value)}}}),e._m(0)])]),a("DataTable",{attrs:{senator:e.displayParty}})],1)},M=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"}},[a("i",{staticClass:"fa fa-search"})])])}],U=(a("6b54"),{name:"FilterData",components:{DataTable:N},data:function(){return{senatorF:[],checkarr:[],selectarr:"",statearr:[],searchName:"",tempt:[]}},created:function(){this.getStates()},computed:{displayParty:function(){var e=this;if(0==this.checkarr.length&&""==this.selectarr)return this.searchData(this.senatorF);if(0!=this.checkarr.length&&""==this.selectarr)return this.tempt=this.senatorF.filter(function(t){return e.checkarr.includes(t.party)}),this.searchData(this.tempt);if(""!=this.selectarr&&0==this.checkarr.length)return this.tempt=this.senatorF.filter(function(t){return e.selectarr.includes(t.state)}),this.searchData(this.tempt);for(var t=[],a=0;a<this.senatorF.length;a++)for(var n=0;n<this.checkarr.length;n++)this.senatorF[a].party==this.checkarr[n]&&this.senatorF[a].state==this.selectarr&&t.push(this.senatorF[a]);return this.searchData(t)}},methods:{getStates:function(){var e=this;this.senatorF=this.$store.state.senator,this.senatorF.forEach(function(t){e.statearr.includes(t.state)||(e.statearr.push(t.state),console.log("addrow"))})},searchData:function(e){var t=this;return e.filter(function(e){return e.fullname.toLowerCase().includes(t.searchName.toLowerCase())||e.votes_with_party_pct.toString().includes(t.searchName.toLowerCase())})}}}),q=U,L=(a("a14c"),Object(d["a"])(q,G,M,!1,null,"363920d0",null));L.options.__file="FilterData.vue";var R=L.exports,W={name:"SenateData",components:{DataTable:N,FilterData:R},data:function(){return{senator:[]}},create:function(){this.getDataSenate()},methods:{getDataSenate:function(){this.senator=this.$store.state.senator}}},z=W,B=(a("5d80"),Object(d["a"])(z,E,O,!1,null,"7188f04d",null));B.options.__file="SenateData.vue";var J=B.exports,K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card-body container"},[a("h2",[e._v("Congressmen")]),a("p",[e._v("The major power of the House is to pass federal legislation that affects the entire country, although its\n        bills must also be passed by the Senate and further agreed to by the U.S. President before becoming law (unless\n        both the House and Senate re-pass the legislation with a two-thirds majority in each chamber). The House\n        has some exclusive powers: the power to initiate revenue bills, to impeach officials (impeached officials\n        are subsequently tried in the Senate), and to elect the U.S. President in case there is no majority in the\n        Electoral College.")]),a("p",[e._v("Each U.S. state is represented in the House in proportion to its population as measured in the census, but\n        every state is entitled to at least one representative. ")]),a("div",{attrs:{id:"main-table"}},[a("FilterData")],1)])},Q=[],V={name:"HouseData",components:{FilterData:R}},X=V,Y=(a("5e59"),Object(d["a"])(X,K,Q,!1,null,"18d8b3bb",null));Y.options.__file="HouseData.vue";var Z=Y.exports;n["a"].use(C["a"]);var ee=new C["a"]({routes:[{path:"/",name:"home",component:j},{path:"/senate-data",name:"senate",component:J},{path:"/house-data",name:"house-data",component:Z}]}),te=a("2f62");n["a"].use(te["a"]);var ae=new te["a"].Store({state:{senator:[]},mutations:{},actions:{}});n["a"].config.productionTip=!1,new n["a"]({router:ee,store:ae,render:function(e){return e(k)}}).$mount("#app")},"5d80":function(e,t,a){"use strict";var n=a("9668"),r=a.n(n);r.a},"5e59":function(e,t,a){"use strict";var n=a("aaec"),r=a.n(n);r.a},"5fe6":function(e,t,a){},"6d9e":function(e,t,a){"use strict";var n=a("e2a4"),r=a.n(n);r.a},"7a562":function(e,t,a){e.exports=a.p+"img/body.bc9438f9.png"},9668:function(e,t,a){},a0c1:function(e,t,a){},a0d5:function(e,t,a){"use strict";var n=a("fd08"),r=a.n(n);r.a},a14c:function(e,t,a){"use strict";var n=a("a0c1"),r=a.n(n);r.a},aaec:function(e,t,a){},b2e3:function(e,t,a){"use strict";var n=a("3445"),r=a.n(n);r.a},c21b:function(e,t,a){},cf05:function(e,t,a){e.exports=a.p+"img/logo.3a4bd7ed.png"},e2a4:function(e,t,a){},fd08:function(e,t,a){}});
//# sourceMappingURL=app.ce7b2b7d.js.map