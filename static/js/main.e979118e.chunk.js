(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},125:function(e,t,n){},126:function(e,t,n){},127:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),o=n(28),i=n.n(o),l=n(6),s=n(23),u=n(44),d=n(45),j=n(2);!function(e){e.INCOMES_DEFAULT="INCOMES_DEFAULT",e.EXPENSES_DEFAULT="EXPENSES_DEFAULT"}(a||(a={}));var b,m={incomesDefault:[{id:"income1",placeholder:"calc.salary",value:0},{id:"income2",placeholder:"calc.part-time_job",value:0},{id:"income3",placeholder:"calc.additional_income",value:0},{id:"income4",placeholder:"calc.additional_income",value:0}],expensesDefault:[{id:"expense1",placeholder:"calc.HCS",value:0},{id:"expense2",placeholder:"calc.mobile_connection",value:0},{id:"expense3",placeholder:"calc.home_internet",value:0},{id:"expense4",placeholder:"calc.credit",value:0}]};!function(e){e.DOWNLOADS="DOWNLOADS",e.DOWNLOADS_INCOMES="DOWNLOADS_INCOMES",e.DOWNLOADS_EXPENSES="DOWNLOADS_EXPENSES",e.PERCENT="PERCENT",e.LOADED="LOADED",e.ERROR="ERROR"}(b||(b={}));var O,f={incomes:[],expenses:[],percent:0,loaded:!1,error:""},p=function(e,t,n){return{type:b.DOWNLOADS,payloadIncomes:e,payloadExpenses:t,payloadPercent:n}},v=function(e){return{type:b.DOWNLOADS_INCOMES,payload:e}},h=function(e){return{type:b.DOWNLOADS_EXPENSES,payload:e}},_=function(e){return{type:b.LOADED,payload:e}},x=function(e){return{type:b.ERROR,payload:e}};!function(e){e.NEW_ID="NEW_ID",e.DELETE_ID="DELETE_ID"}(O||(O={}));var N,y={newId:"",deleteId:""},E=function(e){return{type:O.NEW_ID,payload:e}},g=function(e){return{type:O.DELETE_ID,payload:e}};!function(e){e.NEW_ROUTE="NEW_ROUTE",e.CURRENT_ROUTE="CURRENT_ROUTE"}(N||(N={}));var S,D={newRoute:"new",currentRoute:""},L=function(e){return{type:N.CURRENT_ROUTE,payload:e}},w=n(19),R=function(e,t){return Math.ceil(e/t)};!function(e){e.LIST="LIST",e.LIST_OBSERVER="LIST_OBSERVER",e.LIST_DELETE="LIST_DELETE",e.LIST_SAVE="LIST_SAVE",e.LIST_LOADED="LIST_LOADED",e.LIST_ERROR="LIST_ERROR",e.TOTAL_PAGE="TOTAL_PAGE",e.LIMITL_PAGE="LIMITL_PAGE",e.PAGE_NUMBER="PAGE_NUMBER"}(S||(S={}));var I={listSave:[],totalPage:0,pageNumber:1,limitPage:5,listLoaded:!1,listError:!1},T=function(e){return{type:S.LIST_LOADED,payload:e}},C=function(e){return{type:S.LIST_ERROR,payload:e}},k=Object(s.combineReducers)({downloads:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.DOWNLOADS:return Object(j.a)(Object(j.a)({},e),{},{incomes:t.payloadIncomes,expenses:t.payloadExpenses,percent:Number(t.payloadPercent)});case b.DOWNLOADS_INCOMES:return Object(j.a)(Object(j.a)({},e),{},{incomes:t.payload});case b.DOWNLOADS_EXPENSES:return Object(j.a)(Object(j.a)({},e),{},{expenses:t.payload});case b.PERCENT:return Object(j.a)(Object(j.a)({},e),{},{percent:Number(t.payload)});case b.LOADED:return Object(j.a)(Object(j.a)({},e),{},{loaded:t.payload});case b.ERROR:return Object(j.a)(Object(j.a)({},e),{},{error:t.payload});default:return e}},defaultCalc:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.INCOMES_DEFAULT:return Object(j.a)(Object(j.a)({},e),{},{incomesDefault:t.payload});case a.EXPENSES_DEFAULT:return Object(j.a)(Object(j.a)({},e),{},{expensesDefault:t.payload});default:return e}},route:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.NEW_ROUTE:return Object(j.a)(Object(j.a)({},e),{},{newRoute:t.payload});case N.CURRENT_ROUTE:return Object(j.a)(Object(j.a)({},e),{},{currentRoute:t.payload});default:return e}},id:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.NEW_ID:return Object(j.a)(Object(j.a)({},e),{},{newId:t.payload});case O.DELETE_ID:return Object(j.a)(Object(j.a)({},e),{},{deleteId:t.payload});default:return e}},list:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S.LIST:return Object(j.a)(Object(j.a)({},e),{},{listSave:t.payloadListSave,totalPage:t.payloadTotalPage,pageNumber:t.payloadPageNumber});case S.LIST_OBSERVER:return Object(j.a)(Object(j.a)({},e),{},{listSave:[].concat(Object(w.a)(e.listSave),Object(w.a)(t.payloadResponse.data.map((function(e){return{name:e.name,id:e.id}})))),totalPage:R(t.payloadTotalCount,e.limitPage)});case S.LIST_DELETE:return Object(j.a)(Object(j.a)({},e),{},{listSave:e.listSave.filter((function(e){return e.id!==t.payload}))});case S.LIST_SAVE:return Object(j.a)(Object(j.a)({},e),{},{listSave:t.payload});case S.LIST_LOADED:return Object(j.a)(Object(j.a)({},e),{},{listLoaded:t.payload});case S.LIST_ERROR:return Object(j.a)(Object(j.a)({},e),{},{listError:t.payload});case S.TOTAL_PAGE:return Object(j.a)(Object(j.a)({},e),{},{totalPage:t.payload});case S.LIMITL_PAGE:return Object(j.a)(Object(j.a)({},e),{},{limitPage:t.payload});case S.PAGE_NUMBER:return Object(j.a)(Object(j.a)({},e),{},{pageNumber:t.payload});default:return e}}}),A=Object(s.createStore)(k,Object(u.composeWithDevTools)(Object(s.applyMiddleware)(d.a))),P=(n(68),n(15)),M=n(4),B=n.n(M),U=(n(69),n(3)),W=n(46),F=n.n(W),V=n(1),G=function(e){return Object(V.jsx)("button",{className:B()(F.a.myBtn,e.className),type:e.type||"button",onClick:e.onClick,title:e.title,children:e.children})},q=n(5),X=n.n(q),$=n(10),z=n(47),H=n(48),J=n(21),Y=n.n(J),Z=function(e,t){for(var n=0,a=0,c=0;c<e.length;c+=1)n+=e[c].value;for(var r=0;r<t.length;r+=1)a+=t[r].value;return(n-a).toFixed()},K=function(e,t){return((+e-t/100*+e)/function(){var e=new Date;return new Date(e.getFullYear(),e.getMonth()+1,0).getDate()}()).toFixed()},Q=function(){return(new Date).toISOString()},ee=function(e){var t,n=[{value:1,symbol:""},{value:1e3,symbol:"k"},{value:1e6,symbol:"M"},{value:1e9,symbol:"G"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"},{value:1e18,symbol:"E"}];for(t=n.length-1;t>0&&!(e>=n[t].value);t-=1);return(e/n[t].value).toFixed(1).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1")+n[t].symbol},te=function(){function e(){Object(z.a)(this,e)}return Object(H.a)(e,null,[{key:"getAll",value:function(){var e=Object($.a)(X.a.mark((function e(){var t,n,a,c=arguments;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:10,n=c.length>1&&void 0!==c[1]?c[1]:1,e.next=4,Y.a.get("http://localhost:4000/inquiry",{params:{_limit:t,_page:n}});case 4:return a=e.sent,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getItem",value:function(){var e=Object($.a)(X.a.mark((function e(t){var n;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.a.get("http://localhost:4000/inquiry/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"deleteItem",value:function(){var e=Object($.a)(X.a.mark((function e(t){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.a.delete("http://localhost:4000/inquiry/".concat(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"putItem",value:function(){var e=Object($.a)(X.a.mark((function e(t,n,a,c){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.a.put("http://localhost:4000/inquiry/".concat(t),{incomes:n,expenses:a,name:Q(),percent:c});case 2:case"end":return e.stop()}}),e)})));return function(t,n,a,c){return e.apply(this,arguments)}}()},{key:"postItem",value:function(){var e=Object($.a)(X.a.mark((function e(t,n,a,c){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.a.post("http://localhost:4000/inquiry",{incomes:t,expenses:n,name:Q(),id:a,percent:c});case 2:case"end":return e.stop()}}),e)})));return function(t,n,a,c){return e.apply(this,arguments)}}()}]),e}(),ne=l.c,ae=function(){var e=Object(l.b)(),t=Object(U.f)(),n=ne((function(e){return e.downloads})),a=n.incomes,c=n.expenses,r=n.loaded,o=n.percent,i=ne((function(e){return e.route})),s=i.newRoute,u=i.currentRoute,d=ne((function(e){return e.id})).newId;return u&&Object(V.jsx)("div",{children:Object(V.jsx)(G,{type:"button",title:"save",onClick:r?function(){}:function(){return e(function(e,t,n,a,c,r,o){return function(){var i=Object($.a)(X.a.mark((function i(l){return X.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(i.prev=0,l(_(!0)),!e||e===t){i.next=7;break}return i.next=5,te.putItem(e,n,a,c);case 5:i.next=12;break;case 7:if(e!==t){i.next=12;break}return i.next=10,te.postItem(n,a,r,c);case 10:l(L(r)),o("/incomeCalculator/".concat(r));case 12:i.next=17;break;case 14:i.prev=14,i.t0=i.catch(0),l(x("Error save"));case 17:return i.prev=17,setTimeout((function(){l(_(!1))}),500),i.finish(17);case 20:case"end":return i.stop()}}),i,null,[[0,14,17,20]])})));return function(e){return i.apply(this,arguments)}}()}(u,s,a,c,o,d,t))},children:Object(V.jsx)("i",{className:"material-icons",children:"save"})})})},ce=(n(90),function(){var e=Object(l.b)(),t=ne((function(e){return e.route})),n=t.newRoute,a=t.currentRoute;return a&&a!==n&&Object(V.jsx)("div",{children:Object(V.jsx)(G,{className:"delete-save",type:"button",title:"delete",onClick:function(){return e(g(a))},children:Object(V.jsx)("i",{className:"material-icons",children:"delete"})})})}),re=function(){var e=Object(U.f)();return Object(V.jsx)(G,{type:"button",title:"home",onClick:function(){return e("/incomeCalculator")},children:Object(V.jsx)("i",{className:"material-icons",children:"home"})})},oe=function(){var e=Object(U.f)(),t=ne((function(e){return e.route})).newRoute;return Object(V.jsx)(G,{type:"button",title:"new calculate",onClick:function(){return e("/incomeCalculator/".concat(t))},children:Object(V.jsx)("i",{className:"material-icons",children:"calculate"})})},ie=n(7),le=n(17),se=n(24),ue=n.n(se),de=["visible","setVisible"],je=function(e){var t=e.visible,n=e.setVisible,a=Object(le.a)(e,de),c=[ue.a.myModal];return t&&c.push(ue.a.active),Object(V.jsx)("div",{className:B()(c,a.className),onClick:function(){return n(!1)},"aria-hidden":"true",role:"button",tabIndex:0,children:Object(V.jsxs)("div",{className:ue.a.myModalContent,onClick:function(e){return e.stopPropagation()},"aria-hidden":"true",role:"button",tabIndex:0,children:[Object(V.jsx)(G,{className:ue.a.myModalBtn,title:"close",type:"button",onClick:function(){return n(!1)},children:Object(V.jsx)("i",{className:"material-icons",children:"close"})}),a.children]})})},be=n(130),me=(n(91),n(49)),Oe=n.n(me),fe=["options","defaultName","onChange"],pe=function(e){var t=e.options,n=e.defaultName,a=e.onChange,c=Object(le.a)(e,fe);return Object(V.jsxs)("select",{className:B()(Oe.a.mySelect,c.className),value:c.value,onChange:a,children:[Object(V.jsx)("option",{value:c.defaultValue,children:n}),t.map((function(e){return Object(V.jsx)("option",{value:e.value,children:e.name},e.name)}))]})},ve=n(34),he=n(51),_e=n(53),xe=n(25);ve.a.use(he.a).use(_e.a).use(xe.e).init({backend:{loadPath:"".concat("/incomeCalculator","/locales/{{lng}}/{{ns}}.json")},fallbackLng:"ru",whitelist:["ru","en","de"],debug:!0,detection:{order:["localStorage","cookie"],caches:["localStorage","cookie"]},interpolation:{escapeValue:!1}});ve.a;var Ne=function(e,t){for(var n=0;n<e.length;n+=1)if(e[n]===t)return e[n]},ye=function(e,t){for(var n=0;n<e.length;n+=1)if(e[n].value===t.resolvedLanguage)return e[n].name},Ee=function(){var e=Object(be.a)().i18n,t=[{value:"ru",name:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"},{value:"en",name:"English"},{value:"de",name:"Deutsch"}];return Object(V.jsxs)("div",{className:"menu__row",children:[Object(V.jsx)("div",{className:"menu__icon",children:Object(V.jsx)("i",{className:"material-icons",children:"translate"})}),Object(V.jsx)(pe,{className:"menu__select",defaultName:ye(t,e),onChange:function(t){return n=t.target.value,void e.changeLanguage(n);var n},options:t,defaultValue:e.resolvedLanguage})]})},ge=function(){var e=Object(c.useState)(!1),t=Object(ie.a)(e,2),n=t[0],a=t[1];return Object(V.jsxs)("div",{children:[Object(V.jsx)(G,{type:"button",title:"translate",onClick:function(){return a(!0)},children:Object(V.jsx)("i",{className:"material-icons",children:"translate"})}),Object(V.jsx)(je,{className:"menu__modal",visible:n,setVisible:a,children:Object(V.jsx)(Ee,{})})]})},Se=function(e){return Object(V.jsx)("div",{className:B()("menu",e.className),children:Object(V.jsx)("div",{className:"menu__container container",children:Object(V.jsxs)("div",{className:"menu__settings",children:[Object(V.jsxs)("div",{className:"menu__row-button",children:[Object(V.jsx)(re,{}),Object(V.jsx)(ae,{}),Object(V.jsx)(ce,{})]}),Object(V.jsxs)("div",{className:"menu__row-button menu__row-button-right",children:[Object(V.jsx)(oe,{}),Object(V.jsx)(ge,{})]})]})})})},De=(n(98),function(e){var t=Object(be.a)().t;return Object(V.jsx)("div",{className:B()("header",e.className),children:Object(V.jsx)("div",{className:"header__container container",children:Object(V.jsx)("h1",{className:"header__title",children:t("calc.calculator")})})})}),Le=(n(99),function(){var e=Object(c.useState)(!1),t=Object(ie.a)(e,2),n=t[0],a=t[1],r=Object(l.b)(),o=ne((function(e){return e.downloads.error}));return Object(c.useEffect)((function(){o&&a(!0)}),[o]),Object(c.useEffect)((function(){n||r(x(""))}),[n]),Object(V.jsx)(je,{className:"modal__error",visible:n,setVisible:a,children:Object(V.jsx)("div",{children:o})})}),we=(n(100),function(){var e=Object(c.useState)(!1),t=Object(ie.a)(e,2),n=t[0],a=t[1],r=Object(l.b)(),o=Object(U.f)(),i=ne((function(e){return e.id})).deleteId,s=ne((function(e){return e.route})),u=s.newRoute,d=s.currentRoute,j=ne((function(e){return e.downloads})).loaded,b=function(){r(function(e,t,n,a){return function(){var c=Object($.a)(X.a.mark((function c(r){return X.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,r(_(!0)),c.next=4,te.deleteItem(e);case 4:r((o=e,{type:S.LIST_DELETE,payload:o})),t&&a("/incomeCalculator/".concat(n)),c.next=11;break;case 8:c.prev=8,c.t0=c.catch(0),r(x("delete error"));case 11:return c.prev=11,setTimeout((function(){r(_(!1))}),500),c.finish(11);case 14:case"end":return c.stop()}var o}),c,null,[[0,8,11,14]])})));return function(e){return c.apply(this,arguments)}}()}(i,d,u,o)),a(!1)};return Object(c.useEffect)((function(){i&&a(!0)}),[i]),Object(c.useEffect)((function(){n||r(g(""))}),[n]),Object(V.jsxs)(je,{visible:n,setVisible:a,children:[Object(V.jsx)("h3",{className:"delete__confirmation-title",children:"\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435?"}),Object(V.jsxs)("div",{className:"delete__confirmation",children:[Object(V.jsx)(G,{className:"delete__confirmation-button",type:"button",title:"\u0414\u0430",onClick:j?function(){}:function(){return b()},children:"\u0414\u0430"}),Object(V.jsx)(G,{className:"delete__confirmation-button",title:"\u041d\u0435\u0442",type:"button",onClick:function(){return a(!1)},children:"\u041d\u0435\u0442"})]})]})}),Re=(n(101),function(e){return Object(V.jsx)("input",{className:e.className,type:e.type,id:e.id,value:e.value,onChange:e.onChange,min:e.min,max:e.max})}),Ie=function(e){var t=Object(be.a)().t,n=Object(l.b)(),a=ne((function(e){return e.downloads})).percent;return Object(V.jsx)("div",{className:B()("percent",e.className),children:Object(V.jsx)("div",{className:"percent__container container",children:Object(V.jsx)("div",{className:"percent__body",children:Object(V.jsxs)("div",{className:"percent__column",children:[Object(V.jsx)("h3",{className:"percent__title text",children:t("calc.percent")}),Object(V.jsx)("div",{className:"percent__range",children:Object(V.jsx)(Re,{className:"percent__input",type:"range",min:"0",max:"100",value:a,onChange:function(e){return n((t=e.target.value,{type:b.PERCENT,payload:t}));var t}})}),Object(V.jsxs)("div",{className:"percent__text text",children:[a," ","%"]})]})})})})},Te=(n(102),n(103),function(e){return Object(V.jsx)("div",{className:B()("column",e.className),children:Object(V.jsxs)("div",{className:"column__item",children:[Object(V.jsx)("div",{className:"column__icon",children:Object(V.jsx)("img",{className:"column__image",src:e.icon,alt:e.id})}),Object(V.jsx)("h3",{className:"column__title text",children:e.title}),Object(V.jsxs)("div",{className:"column__value text",children:[e.value," ",e.currency]})]})})}),Ce=n.p+"static/media/month.380103d5.png",ke=n.p+"static/media/day.a31851ad.png",Ae=n.p+"static/media/money-box.3ebd1225.png",Pe=function(e){var t=Object(be.a)().t,n=ne((function(e){return e.downloads})),a=n.incomes,c=n.expenses,r=n.percent,o=Z(a,c),i=K(o,r),l=function(e,t){return(t/100*+e*12).toFixed()}(o,r),s=[{id:"Month",icon:Ce,title:"calc.month",value:ee(o)},{id:"Day",icon:ke,title:"calc.day",value:ee(i)},{id:"MoneyBox",icon:Ae,title:"calc.money_box",value:ee(l)}];return Object(V.jsx)("div",{className:B()("sum",e.className),children:Object(V.jsx)("div",{className:"sum__container container",children:Object(V.jsx)("div",{className:"sum__body",children:s.map((function(e){return Object(V.jsx)(Te,{className:"sum__column",icon:e.icon,title:t(e.title),value:e.value,id:e.id,currency:t("calc.currency")},e.id)}))})})})},Me=(n(104),n(105),n(57)),Be=n.n(Me),Ue=function(e){return Object(V.jsx)("input",{className:B()(Be.a.myInput,e.className),autoComplete:e.auto\u0441omplete,type:e.type,placeholder:e.placeholder,id:e.id,value:e.value,onChange:e.onChange,onFocus:e.onFocus,onBlur:e.onBlur})},We=function(e,t,n,a){var r=Object(c.useState)(t.NumberError),o=Object(ie.a)(r,2),i=o[0],l=o[1];Object(c.useEffect)((function(){l(!(e>=0))}),[e]);return{NumberError:i,NumError:function(){return(a||n)&&i?Object(V.jsx)("div",{style:{color:"red"},children:"\u041d\u0435\u0432\u0435\u0440\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"}):""}}},Fe=function(e,t,n,a,r){var o=Object(c.useState)(!1),i=Object(ie.a)(o,2),l=i[0],s=i[1],u=Object(c.useState)(!1),d=Object(ie.a)(u,2),b=d[0],m=d[1],O=Object(c.useState)(""),f=Object(ie.a)(O,2),p=f[0],v=f[1],h=We(e,t,l,b),_=ne((function(e){return e.route})),x=_.newRoute,N=_.currentRoute;return Object(c.useEffect)((function(){e&&v(n)}),[e]),Object(c.useEffect)((function(){a&&(v(""),r(!1))}),[a]),Object(c.useEffect)((function(){e&&N!==x||v("")}),[N]),Object(j.a)({onBlur:function(e){s(!0),m(!1),e.target.value||v("")},onFocus:function(){v(n),m(!0)},isDirty:l,classLabelFocus:p},h)},Ve=["onChange","onClick"],Ge=function(e){var t=e.onChange,n=e.onClick,a=Object(le.a)(e,Ve),c=Object(be.a)().t,r=Fe(a.value,{NumberError:!1},"floating-label-focus",a.resetLabel,a.setResetLabel);return Object(V.jsxs)("div",{className:B()("item",a.className),children:[Object(V.jsx)(Ue,{className:"item__input","auto\u0441omplete":a.auto\u0441omplete,type:a.typeInput,value:0!==a.value?a.value:"",onChange:function(e){return t(a.id,e.target.value)},onFocus:function(){return r.onFocus()},onBlur:function(e){return r.onBlur(e)}}),Object(V.jsx)("span",{className:B()("floating-label",r.classLabelFocus),children:r.NumberError?r.NumError():c(a.placeholder)}),Object(V.jsx)(G,{className:"item__button",type:a.typeButton,title:"delete",onClick:n,children:a.icon})]})},qe=["setDownloadsAction"],Xe=function(e){var t=e.setDownloadsAction,n=Object(le.a)(e,qe),a=Object(be.a)().t,r=Object(c.useState)(!1),o=Object(ie.a)(r,2),i=o[0],s=o[1],u=Object(l.b)();return Object(V.jsxs)("div",{className:B()("block",n.className),children:[Object(V.jsx)("h2",{className:"block__title",children:n.title}),Object(V.jsxs)("form",{className:"block__form",children:[n.values.map((function(e){return Object(V.jsx)(Ge,{className:"block__item","auto\u0441omplete":"off",typeInput:"number",id:e.id,placeholder:e.placeholder,onChange:function(e,a){return function(e,a){u(t(n.values.map((function(t){return t.id!==e?t:Object(j.a)(Object(j.a)({},t),{},{value:+a})}))))}(e,a)},value:e.value,typeButton:"button",icon:Object(V.jsx)("i",{className:"material-icons",children:"delete"}),onClick:function(){return function(e){u(t(n.values.filter((function(t){return t.id!==e.id}))))}(e)},resetLabel:i,setResetLabel:s},e.id)})),Object(V.jsxs)("div",{className:"block__buttons",children:[Object(V.jsx)(G,{className:"block__button",type:"reset",onClick:function(){u(t(n.values.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{value:0})})))),s(!0)},children:a("calc.reset")}),Object(V.jsx)(G,{className:"block__button",type:"button",onClick:function(){u(t([].concat(Object(w.a)(n.values),[{id:String(Date.now()),placeholder:Ne(n.additional,n.id),value:0}])))},children:a("calc.add_field")})]})]})]})},$e=(n(106),n(58)),ze=n.n($e),He=function(e){return Object(V.jsx)("div",{className:e.className,children:Object(V.jsx)(ze.a,{type:"Puff",color:"#ff4400",height:100,width:100})})},Je=function(e){var t=Object(be.a)().t,n=Object(l.b)(),a=Object(U.g)().invoiceId,r=ne((function(e){return e.defaultCalc})),o=r.incomesDefault,i=r.expensesDefault,s=ne((function(e){return e.downloads})),u=s.incomes,d=s.expenses,j=s.loaded,b=ne((function(e){return e.route})).newRoute,m=["calc.additional_income","calc.additional_expenses"];return Object(c.useEffect)((function(){var e,t,c,r;a&&a!==b&&n((e=a,function(){var t=Object($.a)(X.a.mark((function t(n){var a;return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(_(!0)),t.next=4,te.getItem(e);case 4:a=t.sent,setTimeout((function(){n(p(a.incomes,a.expenses,a.percent)),n(L(e))}),500),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),n(x("downloads error"));case 11:return t.prev=11,setTimeout((function(){n(_(!1))}),500),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(e){return t.apply(this,arguments)}}())),a===b&&(n(p(o,i,0)),n(L(a)),n(E("inquiry".concat(Math.floor(1e5*Math.random()))))),n((t=[],c=0,r=1,{type:S.LIST,payloadListSave:t,payloadTotalPage:c,payloadPageNumber:r}))}),[a]),Object(V.jsx)("div",{className:B()("calc",e.className),children:Object(V.jsx)("div",{className:"calc__container container",children:j?Object(V.jsx)(He,{className:"calc__loader"}):Object(V.jsxs)("div",{className:"calc__body",children:[Object(V.jsx)(Xe,{className:"calc__block",title:t("calc.incomes"),values:u,setDownloadsAction:v,id:"calc.additional_income",additional:m}),Object(V.jsx)(Xe,{className:"calc__block",title:t("calc.expenses"),values:d,setDownloadsAction:h,id:"calc.additional_expenses",additional:m})]})})})},Ye=(n(125),n.p+"static/media/spend.1fcb6773.png"),Ze=n.p+"static/media/safe.076f362a.png",Ke=function(e){var t=Object(be.a)().t,n=ne((function(e){return e.downloads})),a=n.incomes,c=n.expenses,r=n.percent,o=Z(a,c),i=function(e,t){return(+e-t/100*+e).toFixed()}(o,r),l=function(e,t){return(t/100*+e).toFixed()}(o,r),s=[{id:"Month",icon:Ye,title:"\u0422\u0440\u0430\u0442\u0438\u043c \u0432 \u043c\u0435\u0441\u044f\u0446",value:ee(i)},{id:"Day",icon:Ze,title:"\u041e\u0442\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0435\u043c \u0432 \u043c\u0435\u0441\u044f\u0446",value:ee(l)}];return Object(V.jsx)("div",{className:B()("result",e.className),children:Object(V.jsx)("div",{className:"result__container container",children:Object(V.jsx)("div",{className:"result__body",children:s.map((function(e){return Object(V.jsx)(Te,{className:"result__column",icon:e.icon,title:e.title,value:e.value,id:e.id,currency:t("calc.currency")},e.id)}))})})})},Qe=function(){return Object(V.jsxs)("div",{children:[Object(V.jsx)(Je,{className:"main__calc"}),Object(V.jsx)(Pe,{className:"main__sum"}),Object(V.jsx)(Ie,{className:"main__percent"}),Object(V.jsx)(Ke,{className:"main__result"})]})},et=(n(126),n(127),function(e){var t=Object(U.f)(),n=Object(l.b)();return Object(V.jsxs)("div",{className:"downloads-list__row download",children:[Object(V.jsx)("div",{className:"download__title",children:e.name}),Object(V.jsx)(G,{className:"download__button",type:"button",title:"download",onClick:function(){return t("/incomeCalculator/".concat(e.id))},children:Object(V.jsx)("i",{className:"material-icons",children:"download"})}),Object(V.jsx)(G,{className:"download-delete__button material-icons",type:"button",title:"delete",onClick:function(){return n(g(e.id))},children:Object(V.jsx)("i",{className:"material-icons",children:"delete"})})]})}),tt=function(e){var t,n,a=Object(l.b)(),r=Object(c.useRef)(),o=Object(U.g)().incomeCalculator,i=ne((function(e){return e.list})),s=i.listSave,u=i.listLoaded,d=i.listError,j=i.totalPage,b=i.limitPage,m=i.pageNumber,O=ne((function(e){return e.defaultCalc})),f=O.incomesDefault,v=O.expensesDefault;return Object(c.useEffect)((function(){a(p(f,v,0)),a(L("")),a(E(""))}),[o]),function(e,t,n,a){var r=Object(c.useRef)();Object(c.useEffect)((function(){n||(r.current&&r.current.disconnect(),r.current=new IntersectionObserver((function(e){e[0].isIntersecting&&t&&a()})),r.current.observe(e.current))}),[n])}(r,m<j,u,(function(){var e;a((e=m+1,{type:S.PAGE_NUMBER,payload:e}))})),Object(c.useEffect)((function(){var e,t;a((e=b,t=m,function(){var n=Object($.a)(X.a.mark((function n(a){var c,r;return X.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a(T(!0)),n.next=4,te.getAll(e,t);case 4:c=n.sent,r=c.headers["x-total-count"],a((o=c,i=r,{type:S.LIST_OBSERVER,payloadResponse:o,payloadTotalCount:i})),a(C(!1)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),a(C(!0));case 13:return n.prev=13,a(T(!1)),n.finish(13);case 16:case"end":return n.stop()}var o,i}),n,null,[[0,10,13,16]])})));return function(e){return n.apply(this,arguments)}}()))}),[m]),Object(V.jsx)("div",{className:B()("downloads__list",e.className),children:Object(V.jsxs)("div",{className:"downloads-list__container container",children:[Object(V.jsx)("h1",{className:"downloads-list__title",children:(t=d,n=u,t?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0439 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e":n?"\u0418\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f")}),Object(V.jsxs)("div",{className:"downloads-list__column",children:[s.map((function(e){return Object(V.jsx)(et,{name:e.name,id:e.id},e.id)})),Object(V.jsx)("div",{className:"observer",ref:r})]})]})})},nt=(n(128),function(e){return Object(V.jsx)("div",{className:B()("error-page",e.className),children:Object(V.jsx)("div",{className:"error-page__container container",children:Object(V.jsx)("h1",{className:"error-page__title",children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"})})})}),at=function(){return Object(V.jsxs)(U.c,{children:[Object(V.jsx)(U.a,{path:"/incomeCalculator",element:Object(V.jsx)(tt,{className:"main__downloads"})}),Object(V.jsx)(U.a,{path:"/incomeCalculator/:invoiceId",element:Object(V.jsx)(Qe,{})}),Object(V.jsx)(U.a,{path:"*",element:Object(V.jsx)(nt,{})})]})},ct=function(){return Object(V.jsx)("div",{className:"main",children:Object(V.jsxs)(P.a,{children:[Object(V.jsx)(Se,{className:"main__menu"}),Object(V.jsx)(De,{className:"main__header"}),Object(V.jsx)(Le,{}),Object(V.jsx)(we,{}),Object(V.jsx)(at,{})]})})};i.a.render(Object(V.jsx)(r.a.StrictMode,{children:Object(V.jsx)(l.a,{store:A,children:Object(V.jsx)(c.Suspense,{fallback:Object(V.jsx)(He,{className:"calc__loader"}),children:Object(V.jsx)(ct,{})})})}),document.getElementById("root"))},24:function(e,t,n){e.exports={myModal:"Modal_myModal__2ME5Z",myModalContent:"Modal_myModalContent__3LkzC",active:"Modal_active__3zcdH",myModalBtn:"Modal_myModalBtn__3-fsW"}},46:function(e,t,n){e.exports={myBtn:"Button_myBtn__2Nlkf"}},49:function(e,t,n){e.exports={mySelect:"Select_mySelect__1rqB9"}},57:function(e,t,n){e.exports={myInput:"Input_myInput__1U_yM"}},68:function(e,t,n){},69:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[129,1,2]]]);
//# sourceMappingURL=main.e979118e.chunk.js.map