(this["webpackJsonpjs-band-final-task"]=this["webpackJsonpjs-band-final-task"]||[]).push([[0],{54:function(e,t,a){e.exports=a.p+"static/media/logo.a813330e.svg"},56:function(e,t,a){e.exports=a(88)},86:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),l=a.n(c),o=a(5),s=a(15),i=a(48),u=a(10),m=a(49),d=a(36),f=a(50),p=a.n(f),h=a(51),b=a(1),v=a(3),E=a(89),g=a(13),O=a.n(g),j=a(91),C=a(52),N=a.n(C),k=a(17),y=a(18),S=function(){function e(){Object(k.a)(this,e)}return Object(y.a)(e,null,[{key:"setItem",value:function(e,t){localStorage.setItem(e,JSON.stringify(t))}},{key:"getItem",value:function(e){return JSON.parse(localStorage.getItem(e))}},{key:"removeItem",value:function(e){localStorage.removeItem(e)}}]),e}(),x=N.a.create({baseURL:"https://js-band-api.glitch.me",headers:{"Content-Type":"application/json"}});x.interceptors.request.use((function(e){var t=Object(v.a)({},e),a=S.getItem("jsBandAuthToken");return a&&(t.headers.Authorization=a),t}),(function(e){return Promise.reject(e)})),x.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status&&(It.dispatch(R()),S.removeItem("jsBandAuthToken")),Promise.reject(e)})),x.setAuthHeader=function(e){x.defaults.headers.common={Authorization:e}};var T,w,P,A=x,L=function(e){return A({url:"/signin",method:"POST",data:e})},B=Object(j.a)("SET_AUTH_REQUEST"),F=Object(j.a)("SET_AUTH_SUCCESS"),_=Object(j.a)("SET_AUTH_FAILURE"),I=function(e){return function(t){var a,n,r,c,l,o,s;return O.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return t(B(!0)),i.prev=1,i.next=4,O.a.awrap(L(e));case 4:a=i.sent,n=a.data,r=n.token,c=n.avatar,l=n.username,r&&(S.setItem("jsBandAuthToken",r),A.setAuthHeader(r)),t(F({username:l,avatar:c})),i.next=19;break;case 13:i.prev=13,i.t0=i.catch(1),o=i.t0.response,s=(o=void 0===o?{}:o).data,t(_(s));case 19:return i.prev=19,t(B(!1)),i.finish(19);case 22:case"end":return i.stop()}}),null,null,[[1,13,19,22]])}},R=Object(j.a)("SIGN_OUT"),U={isAuthenticated:!1,isLoading:!1,errors:{},user:{}},H=Object(E.a)((T={},Object(b.a)(T,B,(function(e,t){var a=t.payload;return Object(v.a)({},e,{isLoading:a})})),Object(b.a)(T,F,(function(e,t){var a=t.payload;return Object(v.a)({},e,{isAuthenticated:!0,user:a,errors:{}})})),Object(b.a)(T,_,(function(e,t){var a=t.payload;return Object(v.a)({},e,{errors:a})})),Object(b.a)(T,R,(function(){return U})),T),U),G=a(55),D=a(90),J=function(){return A({url:"/books",method:"GET"})},K=function(e){return A({url:"/books/".concat(e),method:"GET"})},M=Object(j.a)("FETCH_BOOKS_REQUEST"),q=Object(j.a)("FETCH_BOOKS_SUCCESS"),z=Object(j.a)("FETCH_BOOKS_FAILURE"),Q=Object(j.a)("FETCH_SINGLE_BOOK_REQUEST"),$=Object(j.a)("FETCH_SINGLE_BOOK_SUCCESS"),W=Object(j.a)("FETCH_SINGLE_BOOK_FAILURE"),V=function(e){return function(t){var a,n;return O.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,O.a.awrap(K(e));case 3:a=r.sent,n=a.data,t($(n)),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),t(W(r.t0.response.data));case 11:return r.prev=11,t(Q(!1)),r.finish(11);case 14:case"end":return r.stop()}}),null,null,[[0,8,11,14]])}},X={fetchBooks:function(){return function(e){var t,a;return O.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,O.a.awrap(J());case 3:t=n.sent,a=t.data,e(q(a)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),e(z(n.t0.response.data));case 11:return n.prev=11,e(M(!1)),n.finish(11);case 14:case"end":return n.stop()}}),null,null,[[0,8,11,14]])}},fetchBooksRequest:M,fetchBooksSuccess:q,fetchBooksFailure:z,fetchSingleBook:V,fetchSingleBookRequest:Q,fetchSingleBookSuccess:$,fetchSingleBookFailure:W},Y=Object(E.a)((w={},Object(b.a)(w,M,(function(e,t){var a=t.payload;return Object(v.a)({},e,{isLoading:a})})),Object(b.a)(w,q,(function(e,t){var a=t.payload;return Object(v.a)({},e,{books:a,errors:{}})})),Object(b.a)(w,Object(D.a)(z,W),(function(e,t){var a=t.payload;return Object(v.a)({},e,{errors:a})})),Object(b.a)(w,Q,(function(e,t){var a=t.payload;return Object(v.a)({},e,{isSingleLoading:a})})),Object(b.a)(w,$,(function(e,t){var a=t.payload;return Object(v.a)({},e,{books:[].concat(Object(G.a)(e.books),[a]),errors:{}})})),w),{isLoading:!0,isSingleLoading:!0,errors:{},books:[]}),Z=a(23),ee=function(e){return A({url:"/purchase",method:"POST",data:e})},te=Object(j.a)("ADD_TO_CART"),ae=Object(j.a)("PURCHASE_REQUEST"),ne=Object(j.a)("PURCHASE_SUCCESS"),re=Object(j.a)("PURCHASE_FAILURE"),ce={addToCart:te,purchase:function(e){var t=e.books,a=void 0===t?[]:t;return function(e){var t,n;return O.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(a.length){r.next=2;break}return r.abrupt("return");case 2:return e(ae(!0)),r.prev=3,r.next=6,O.a.awrap(ee({books:a}));case 6:t=r.sent,n=t.data.message,alert(n),e(ne()),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(3),e(re());case 15:return r.prev=15,e(ae(!1)),r.finish(15);case 18:case"end":return r.stop()}}),null,null,[[3,12,15,18]])}},purchaseRequest:ae,purchaseSuccess:ne,purchaseFailure:re},le={isLoading:!1,items:{}},oe=Object(E.a)((P={},Object(b.a)(P,ce.addToCart,(function(e,t){var a=t.payload,n=a.id,r=a.count,c=Object(Z.a)(a,["id","count"]);return Object(v.a)({},e,{items:Object(v.a)({},e.items,Object(b.a)({},n,e.items[n]?Object(v.a)({},c,{count:+e.items[n].count+ +r}):Object(v.a)({count:r},c)))})})),Object(b.a)(P,ce.purchaseRequest,(function(e,t){var a=t.payload;return Object(v.a)({},e,{isLoading:a})})),Object(b.a)(P,ce.purchaseSuccess,(function(){return le})),P),le),se=Object(u.combineReducers)({auth:H,books:Y,cart:oe}),ie=function(){return function(e){return function(t){"SIGN_OUT"===t.type&&S.removeItem("jsBandAuthToken"),e(t)}}},ue={key:"JSBandInternship",storage:p.a,blacklist:["books"]},me=Object(d.a)(ue,se);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(85),a(86);var de=a(20),fe=function(e){return e.auth.isAuthenticated},pe=function(e){return e.auth.isLoading},he=function(e){return e.auth.errors},be=function(e){return e.auth.user},ve=a(21),Ee=function(e){return e.cart.items},ge=function(e){return e.cart.isLoading},Oe=Object(ve.a)(Ee,(function(e){return Object.keys(e).map((function(t){return Object(v.a)({},e[t],{id:t,total:+(+e[t].count*+e[t].price).toFixed(2)})}))})),je=Object(ve.a)(Oe,(function(e){return e.reduce((function(e,t){var a=t.count;return e+(void 0===a?0:a)}),0)})),Ce=Object(ve.a)(Oe,(function(e){return+e.reduce((function(e,t){var a=t.total;return e+(void 0===a?0:a)}),0).toFixed(2)})),Ne=Object(ve.a)(Ee,(function(e){return Object.keys(e)})),ke=function(e){return Object(ve.a)(Ee,(function(t){return t[e]}))},ye=a(7),Se=a.n(ye),xe=function(e){var t,a=e.color,n=e.size,c=e.growing,l=e.text,o=Se()((t={"spinner-border":!c,"spinner-grow":c},Object(b.a)(t,"text-".concat(a),a),Object(b.a)(t,"spinner-border-".concat(n),n),t));return r.a.createElement("div",{className:"d-flex align-items-center justify-content-center"},r.a.createElement("div",{className:o,role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")),r.a.createElement("span",{className:"ml-3"},l))};xe.defaultProps={color:"",size:"",text:"",growing:!1};var Te=xe,we=function(e){var t,a=e.children,n=e.value,c=e.to,l=e.loading,o=e.disabled,i=e.type,u=e.color,m=e.block,d=e.className,f=e.onClick,p=Se()("btn",(t={"btn-block":m},Object(b.a)(t,"btn-".concat(u),u),Object(b.a)(t,d,d),t));return c?r.a.createElement(s.b,{to:c,className:p},a):r.a.createElement("button",{type:i,value:n,disabled:o,className:p,onClick:f},l?r.a.createElement(Te,{size:"sm"}):a)};we.defaultProps={children:null,color:"",block:!1,type:"button",loading:!1,to:"",value:"",disabled:!1,className:"",onClick:function(e){return e}};var Pe=we,Ae=function(e){var t=e.src,a=e.alt;return r.a.createElement("img",{src:t,alt:a,className:"rounded-circle",width:"38",height:"38"})};Ae.defaultProps={src:"",alt:""};var Le=Ae,Be=a(54),Fe=a.n(Be),_e=function(e){var t=e.isAuthenticated,a=e.user,n=e.cartCount,c=e.signOut;return r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar navbar-dark bg-light mb-3 fixed-top"},r.a.createElement(s.b,{className:"navbar-brand",to:"/"},r.a.createElement("img",{alt:"",src:Fe.a,className:"mr-4"}),"JS Band Store"),r.a.createElement("div",{className:"d-flex align-item-center ml-auto"},t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Pe,{to:"/cart",color:"primary"},"Cart (",n,")"),r.a.createElement(Pe,{color:"primary",className:"ml-2",onClick:function(){return c()}},"Sign out")),a&&r.a.createElement("div",{className:"d-inline-flex align-items-center ml-3"},r.a.createElement(Le,{src:a.avatar,alt:a.username}),r.a.createElement("b",{className:"ml-2"},a.username)))))};_e.defaultProps={isAuthenticated:!1,user:{username:"",avatar:""},cartCount:0,signOut:function(){return!0}};var Ie=_e,Re={signOut:R},Ue=Object(o.b)((function(e){return{isAuthenticated:fe(e),user:be(e),cartCount:je(e)}}),Re)(Ie),He=function(e){var t=e.isGuest,a=e.component,n=Object(Z.a)(e,["isGuest","component"]);return r.a.createElement(de.b,Object.assign({},n,{render:function(e){return t?r.a.createElement(a,e):r.a.createElement(de.a,{to:"/"})}}))};He.defaultProps={isGuest:!1};var Ge=He,De=Object(o.b)((function(e){return{isGuest:!fe(e)}}))(Ge),Je=function(e){var t=e.isAuthenticated,a=e.component,n=Object(Z.a)(e,["isAuthenticated","component"]);return r.a.createElement(de.b,Object.assign({},n,{render:function(e){return t?r.a.createElement(a,e):r.a.createElement(de.a,{to:"/signin"})}}))};Je.defaultProps={isAuthenticated:!1};var Ke=Je,Me=Object(o.b)((function(e){return{isAuthenticated:fe(e)}}))(Ke),qe=a(25),ze=a(24),Qe=a(26),$e=function(e){var t=e.children,a=e.className,n=Se()("row",Object(b.a)({},a,a));return r.a.createElement("div",{className:n},t)},We=function(e){var t=e.children,a=e.className,n=Se()("col",Object(b.a)({},a,a));return r.a.createElement("div",{className:n},t)},Ve=function(e){var t=e.children,a=e.fluid,n=e.className,c=Se()("container",Object(b.a)({"container-fluid":a},n,n));return r.a.createElement("div",{className:c},t)};Ve.Row=$e,Ve.Col=We,Ve.defaultProps={children:null,className:"",fluid:!1},$e.defaultProps={children:null,className:""},We.defaultProps={children:null,className:""};var Xe=Ve,Ye=function(e){var t=e.type,a=e.value,n=e.name,c=e.placeholder,l=e.disabled,o=e.min,s=e.max,i=e.onChange;return r.a.createElement("input",{type:t,value:a,name:n,placeholder:c,min:o,max:s,disabled:l,className:"form-control",onChange:function(e){s&&e.target.value>s||o&&e.target.value<o||i(e)}})};Ye.defaultProps={type:"text",value:"",name:"",placeholder:"",min:0,max:1e3,disabled:!1};var Ze=Ye,et=function(e){var t=e.children,a=e.text,n=e.show,c=e.type,l=Se()({"d-block":n,"invalid-feedback":"error"===c,"valid-feedback":"success"===c});return r.a.createElement("div",{className:l},a,t)};et.defaultProps={show:!1,text:"",children:null,type:"success"};var tt=et,at=function(e){var t=e.children;return r.a.createElement("div",{className:"form-group"},t)};at.defaultProps={children:null};var nt=at,rt=function(e){var t=e.children,a=e.onSubmit;return r.a.createElement("form",{className:"form w-100",onSubmit:function(e){e.preventDefault(),a(e)}},t)};rt.Input=Ze,rt.Hint=tt,rt.Button=Pe,rt.FormGroup=nt,rt.defaultProps={children:null};var ct=rt,lt=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(qe.a)(this,Object(ze.a)(t).call(this,e))).handleOnChange=function(e){var t=e.target.value;return a.setState({username:t})},a.handleOnSubmit=function(){var e=a.props.onSubmit,t=a.state.username;return!t||t.length<4||t.length>16?a.setState((function(){return{errorMessage:"Field is not valid"}})):(e({username:t}),null)},a.state={username:"",errorMessage:""},a}return Object(Qe.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isLoading,a=e.errors.message,n=this.state,c=n.username,l=n.errorMessage,o=0!==l.length||a&&0!==a.length;return r.a.createElement(Xe,{className:"h-100 d-flex align-items-center justify-content-center"},r.a.createElement(Xe.Col,{className:"col-5"},r.a.createElement(ct,{onSubmit:this.handleOnSubmit},r.a.createElement(ct.FormGroup,null,r.a.createElement(ct.Input,{value:c,placeholder:"Type Username",onChange:this.handleOnChange}),r.a.createElement(ct.Hint,{show:o,text:l||a,type:"error"})),r.a.createElement(ct.FormGroup,null,r.a.createElement(ct.Button,{loading:t,disabled:!c,type:"submit",color:"primary",block:!0},"Sign-In")))))}}]),t}(n.Component);lt.defaultProps={isLoading:!1,errors:{}};var ot={onSubmit:I},st=Object(o.b)((function(e){return{isLoading:pe(e),errors:he(e)}}),ot)(lt),it=function(e){return e.books.isLoading},ut=function(e){return e.books.isSingleLoading},mt=function(e){return e.books.books},dt=function(e){return Object(ve.a)(mt,(function(t){return t.find((function(t){return t.id===e}))}))},ft=function(e){var t=e.children;return r.a.createElement("h2",{className:"card-title h5"},t)},pt=function(e){var t=e.children;return r.a.createElement("div",{className:"card-body"},t)},ht=function(e){var t=e.children,a=e.className;return r.a.createElement("div",{className:Se()("col",Object(b.a)({},a,a))},t)},bt=function(e){var t=e.children,a=e.className;return r.a.createElement("div",{className:Se()("row",Object(b.a)({},a,a))},t)},vt=function(e){var t=e.children,a=e.className;return r.a.createElement("div",{className:Se()("card-text",Object(b.a)({},a,a))},t)},Et=function(e){var t=e.src,a=e.alt;return r.a.createElement("img",{src:t,className:"card-img-top img-fluid",alt:a})},gt=function(e){var t=e.children;return r.a.createElement("div",{className:"card-footer"},t)},Ot=function(e){var t=e.children,a=e.className;return r.a.createElement("div",{className:Se()("card",Object(b.a)({},a,a))},t)};Ot.Title=ft,Ot.Text=vt,Ot.Body=pt,Ot.Cover=Et,Ot.Footer=gt,Ot.Col=ht,Ot.Row=bt,ft.defaultProps={children:null},pt.defaultProps={children:null},vt.defaultProps={children:null,className:""},Et.defaultProps={src:"",alt:""},gt.defaultProps={children:null},ht.defaultProps={children:null,className:""},bt.defaultProps={children:null,className:""},Ot.defaultProps={children:null,className:""};var jt=Ot,Ct=function(e){var t=e.type,a=e.value,n=e.name,c=e.placeholder,l=e.disabled,o=e.options,s=e.onBlur,i=e.onChange;return r.a.createElement("select",{type:t,value:a,name:n,placeholder:c,disabled:l,className:"form-control",onBlur:s,onChange:function(e){return i(e)}},o.map((function(e){return r.a.createElement("option",{key:e.label,value:e.value},e.label)})))};Ct.defaultProps={type:"text",value:"",name:"",placeholder:"",disabled:!1,onChange:function(e){return e},onBlur:function(e){return e}};var Nt=Ct,kt=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(qe.a)(this,Object(ze.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState((function(){return Object(b.a)({},r,n)}))},a.addToCart=function(e){var t=e.target.value,n=a.props.addToCart,r=JSON.parse(t),c=r.id,l=void 0===c?"":c,o=r.title,s=void 0===o?"":o,i=r.price,u=void 0===i?0:i;a.setState((function(){return{cart:l}}),(function(){n({id:l,count:1,title:s,price:u}),setTimeout((function(){return a.setState((function(){return{cart:null}}))}),1e3)}))},a.state={items:[],cart:null,search:"",price:"all"},a}return Object(Qe.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.fetchData)()}},{key:"render",value:function(){var e=this,t=this.props.isLoading,a=this.state,n=a.cart,c=a.search,l=a.price,o=a.items,s=[{label:"All",value:"all",filter:function(e){return e}},{label:"0 < price < 15",value:"l1",filter:function(e){return e.price<15}},{label:"15 < price < 30",value:"15to30",filter:function(e){return e.price>=15&&e.price<30}},{label:"price > 30",value:"m30",filter:function(e){return e.price>=30}}],i=o.filter((function(e){return s.find((function(e){return e.value===l})).filter(e)&&e.title.includes(c)}));return t?r.a.createElement(Xe,null,r.a.createElement(Te,{growing:!0})):r.a.createElement(r.a.Fragment,null,r.a.createElement(Xe,{className:"mb-3"},r.a.createElement(Xe.Row,null,r.a.createElement(Xe.Col,{className:"col-3"},r.a.createElement(Ze,{value:c,name:"search",placeholder:"Search by book name",onChange:this.handleChange})),r.a.createElement(Xe.Col,{className:"col-3"},r.a.createElement(Nt,{value:l,options:s,name:"price",onChange:this.handleChange})))),r.a.createElement(Xe,null,r.a.createElement(Xe.Row,null,0!==i.length?i.map((function(t){return r.a.createElement("div",{key:t.id,className:"col-12 col-md-6 col-lg-4 col-xl-3 mb-5"},r.a.createElement(jt,{className:"h-100"},r.a.createElement(jt.Cover,{src:t.cover,alt:t.title}),r.a.createElement(jt.Body,null,r.a.createElement(jt.Title,null,t.title),r.a.createElement(jt.Text,null,t.author)),r.a.createElement(jt.Footer,null,r.a.createElement(jt.Row,{className:"align-items-center"},r.a.createElement(jt.Col,{className:"col-3 text-nowrap"},"$",t.price),r.a.createElement(jt.Col,{className:"text-right col-9"},r.a.createElement(Pe,{color:"primary",value:JSON.stringify(t),onClick:e.addToCart,className:"text-nowrap mt-2"},n===t.id?"Added":"Add to cart"),r.a.createElement(Pe,{to:"/books/".concat(t.id),color:"primary",className:"ml-2 text-nowrap mt-2"},"View"))))))})):r.a.createElement(Xe.Col,{className:"text-center"},r.a.createElement("h1",null,"No books")))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.items!==t.items?{items:e.items}:null}}]),t}(n.Component);kt.defaultProps={isLoading:!0,items:[]};var yt={fetchData:X.fetchBooks,setFilterField:X.setFilterField,addToCart:ce.addToCart},St=Object(o.b)((function(e){return{isLoading:it(e),items:mt(e)}}),yt)(kt),xt=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(qe.a)(this,Object(ze.a)(t).call(this,e))).handleCountChange=function(e){var t=e.target.value;return a.setState((function(){return{count:t}}))},a.handleAddToCart=function(e){var t=e.target.value,n=a.props,r=n.addToCart,c=n.item,l=c.title,o=c.price;r({id:t,count:a.state.count,title:l,price:o})},a.state={count:1},a}return Object(Qe.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.fetchData,a=e.match.params.id;t(void 0===a?"":a)}},{key:"render",value:function(){var e=this.state.count,t=this.props,a=t.isLoading,n=t.item,c=t.cartCount,l=+(e*n.price).toFixed(2),o=+c>=+n.count;return a?r.a.createElement(Xe,null,r.a.createElement(Te,{growing:!0})):r.a.createElement(Xe,null,r.a.createElement(jt.Row,{className:"d-flex justify-content-center"},r.a.createElement(jt.Col,{className:"col-12 col-sm-10 col-lg-8 col-xl-6"},r.a.createElement(jt,{className:"p-4"},r.a.createElement(jt.Row,null,r.a.createElement(jt.Col,{className:"col-12 col-md-4"},r.a.createElement(jt.Cover,{src:n.cover}),r.a.createElement(jt.Text,{className:"p-4"},n.description)),r.a.createElement(jt.Col,{className:"col-12 col-md-4 pt-5"},r.a.createElement(jt.Title,null,n.title),r.a.createElement(jt.Text,null,n.author),r.a.createElement(jt.Text,null,n.level),r.a.createElement(jt.Text,null,n.tags.join(", "))),r.a.createElement(jt.Col,{className:"col-12 col-md-4 pt-5"},r.a.createElement(nt,null,r.a.createElement(jt.Text,{className:"d-flex"},r.a.createElement(jt.Col,null,"Price, $"),r.a.createElement(jt.Col,{className:"text-right"},n.price))),r.a.createElement(nt,null,r.a.createElement(jt.Text,{className:"d-flex"},r.a.createElement(jt.Col,null,"Count"),r.a.createElement(jt.Col,{className:"d-flex justify-content-end"},r.a.createElement(Ze,{value:e,min:0,max:n.count,type:"number",disabled:o,onChange:this.handleCountChange})))),r.a.createElement(nt,null,r.a.createElement(jt.Text,{className:"d-flex"},r.a.createElement(jt.Col,null,"Total Price"),r.a.createElement(jt.Col,{className:"text-right"},l))),r.a.createElement(nt,null,r.a.createElement(jt.Text,{className:"text-right"},r.a.createElement(jt.Col,null,r.a.createElement(Pe,{color:"primary",value:n.id,disabled:o,onClick:this.handleAddToCart},"Add to cart"))))))))))}}]),t}(n.Component);xt.defaultProps={isLoading:!0,item:{tags:[],price:0}};var Tt={fetchData:V,addToCart:ce.addToCart},wt=Object(o.b)((function(e,t){var a=t.match.params.id;return{isLoading:ut(e),item:dt(a)(e),cartCount:ke(a)(e)}}),Tt)(xt),Pt=function(e){var t=e.isLoading,a=e.isCartEmpty,n=e.items,c=e.total,l=e.itemsIds,o=e.purchase;return t?r.a.createElement(Xe,null,r.a.createElement(Te,{text:"Purchasing",growing:!0})):r.a.createElement(r.a.Fragment,null,r.a.createElement(Xe,{className:"text-right mb-3"},r.a.createElement(Pe,{disabled:a||t,color:"primary",onClick:function(){return o({books:l})}},"Purchase")),a&&!t?r.a.createElement(Xe,{className:"text-center"},"Cart Empty..."):r.a.createElement(Xe,null,r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Book name"),r.a.createElement("th",{scope:"col"},"Count"),r.a.createElement("th",{scope:"col"},"Total"))),r.a.createElement("tbody",null,n.map((function(e){return r.a.createElement("tr",{key:e.title},r.a.createElement("td",null,e.title),r.a.createElement("td",null,e.count),r.a.createElement("td",{align:"right"},e.total))})),r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"3",align:"right"},r.a.createElement("b",null,"Total price $ ",c)))))))};Pt.defaultProps={isLoading:!1,items:[],total:0,isCartEmpty:!1,itemsIds:[]};var At={purchase:ce.purchase},Lt=Object(o.b)((function(e){return{isLoading:ge(e),items:Oe(e),total:Ce(e),isCartEmpty:0===Oe(e).length,itemsIds:Ne(e)}}),At)(Pt),Bt=function(){return r.a.createElement(Xe,{className:"text-center pt-5"},r.a.createElement("h1",null,"Not Found"),r.a.createElement(Pe,{to:"/",color:"primary"},"Back to home page"))},Ft=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ue,null),r.a.createElement(de.d,null,r.a.createElement(De,{path:"/signin",exact:!0,component:st}),r.a.createElement(Me,{path:"/books/:id",exact:!0,component:wt}),r.a.createElement(Me,{path:"/",exact:!0,component:St}),r.a.createElement(Me,{path:"/cart",exact:!0,component:Lt}),r.a.createElement(de.b,{path:"*",exact:!0,component:Bt})))};a.d(t,"store",(function(){return It})),a.d(t,"persistor",(function(){return Rt}));var _t=function(){var e=Object(u.createStore)(me,Object(h.composeWithDevTools)(Object(u.applyMiddleware)(m.a,ie)));return{store:e,persistor:Object(d.b)(e)}}(),It=_t.store,Rt=_t.persistor;l.a.render(r.a.createElement(o.a,{store:It},r.a.createElement(i.a,{persistor:Rt},r.a.createElement(s.a,null,r.a.createElement(Ft,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[56,1,2]]]);
//# sourceMappingURL=main.e7f9a301.chunk.js.map