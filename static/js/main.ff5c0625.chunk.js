(this.webpackJsonpsocial_network=this.webpackJsonpsocial_network||[]).push([[0],{132:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__2LLRm",selectedPage:"Users_selectedPage__3_0gK"}},133:function(e,t,n){e.exports=n.p+"static/media/user.35c99376.jpg"},134:function(e,t,n){e.exports=n.p+"static/media/preloader.4d08320c.svg"},136:function(e,t,n){e.exports={item:"Post_item__1kisa"}},14:function(e,t,n){e.exports={nav:"Navbar_nav__2IJ4G",item:"Navbar_item__lm1mq",activeLink:"Navbar_activeLink__mBGrJ"}},165:function(e,t,n){e.exports=n(294)},170:function(e,t,n){},171:function(e,t,n){},176:function(e,t,n){},177:function(e,t,n){},178:function(e,t,n){},28:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__2OZ4t",dialogsItems:"Dialogs_dialogsItems__2GOj4",active:"Dialogs_active__F2e41",messages:"Dialogs_messages__BLXj4",message:"Dialogs_message__2de-R"}},294:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(63),s=n.n(o),i=(n(170),n(20)),c=n(21),u=n(23),l=n(22),m=(n(171),n(14)),p=n.n(m),f=n(12),d=function(){return r.a.createElement("nav",{className:p.a.nav},r.a.createElement("div",{className:p.a.item},r.a.createElement(f.b,{to:"/profile",activeClassName:p.a.activeLink},"Profile")),r.a.createElement("div",{className:"".concat(p.a.item," ").concat(p.a.active," ")},r.a.createElement(f.b,{to:"/dialogs",activeClassName:p.a.activeLink},"Messages")),r.a.createElement("div",{className:p.a.item},r.a.createElement(f.b,{to:"/news",activeClassName:p.a.activeLink},"News")),r.a.createElement("div",{className:p.a.item},r.a.createElement(f.b,{to:"/music",activeClassName:p.a.activeLink},"Music")),r.a.createElement("div",{className:"".concat(p.a.item," ").concat(p.a.active," ")},r.a.createElement(f.b,{to:"/users",activeClassName:p.a.activeLink},"Users")),r.a.createElement("div",{className:p.a.item},r.a.createElement(f.b,{to:"settings",activeClassName:p.a.activeLink},"Settings")))},g=n(9),E=(n(176),function(e){return r.a.createElement("div",null,"News")}),h=(n(177),function(e){return r.a.createElement("div",null,"Music")}),v=(n(178),function(e){return r.a.createElement("div",null,"Settings")}),b=n(37),O=n(5),j={dialogs:[{id:1,name:"Kikita"},{id:2,name:"Stas"},{id:3,name:"Gena"},{id:4,name:"Turbo"},{id:5,name:"DushaMetelkin"}],messages:[{id:1,message:"Hi"},{id:2,message:"How are you"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n=t.newMessageBody;return Object(O.a)(Object(O.a)({},e),{},{messages:[].concat(Object(b.a)(e.messages),[{id:6,message:n}])});default:return e}},_=n(28),P=n.n(_),S=function(e){var t="/dialogs/"+e.id;return r.a.createElement("div",{className:P.a.d+" "+P.a.active},r.a.createElement(f.b,{to:t},e.name))},y=function(e){return r.a.createElement("div",{className:P.a.message},e.message)},k=n(125),C=n(126),N=n(43),I=n(51),T=n.n(I),x=function(e){e.input;var t=e.meta,n=(e.child,Object(N.a)(e,["input","meta","child"])),a=t.touched&&t.error;return r.a.createElement("div",{className:T.a.formControl+" "+(a?T.a.error:"")},r.a.createElement("div",null,n.children),a&&r.a.createElement("span",null,t.error))},L=function(e){var t=e.input,n=(e.meta,e.child,Object(N.a)(e,["input","meta","child"]));return r.a.createElement(x,e,r.a.createElement("textarea",Object.assign({},t,n)))},A=function(e){var t=e.input,n=(e.meta,e.child,Object(N.a)(e,["input","meta","child"]));return r.a.createElement(x,e,r.a.createElement("input",Object.assign({},t,n)))},U=function(e){if(!e)return"Field is required"},F=function(e){return function(t){if(t.length>10)return"Max length is ".concat(e," symbols")}},M=F(50),R=Object(C.a)({form:"dialogAddMessageForm"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(k.a,{component:L,validate:[U,M],name:"newMessageBody",placeholder:"Enter your message"})),r.a.createElement("div",null,r.a.createElement("button",null,"Send")))})),G=function(e){var t=e.dialogsPage,n=t.dialogs.map((function(e){return r.a.createElement(S,{name:e.name,key:e.id,id:e.id})})),a=t.messages.map((function(e){return r.a.createElement(y,{key:e.id,message:e.message})}));t.newMessageBody;return e.isAuth?r.a.createElement("div",{className:P.a.dialogs},r.a.createElement("div",{className:P.a.dialogsItems},n),r.a.createElement("div",{className:P.a.message},r.a.createElement("div",null,a)),r.a.createElement(R,{onSubmit:function(t){e.sendMessage(t.newMessageBody)}})):r.a.createElement(g.a,{to:"/login"})},D=n(11),B=function(e){return{isAuth:e.auth.isAuth}},z=n(7),W=Object(z.d)(Object(D.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(t){e(function(e){return{type:"SEND-MESSAGE",newMessageBody:e}}(t))}}})),(function(e){var t=function(t){Object(u.a)(a,t);var n=Object(l.a)(a);function a(){return Object(i.a)(this,a),n.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return this.props.isAuth?r.a.createElement(e,this.props):r.a.createElement(g.a,{to:"/login"})}}]),a}(r.a.Component);return Object(D.b)(B)(t)}))(G),H=n(10),Y=n.n(H),Z=n(19),J=n(130).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"48b0b2e2-e712-4519-b164-1ebd94cf1919"}}),K={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return J.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return J.post("follow/".concat(e))},unfollow:function(e){return J.delete("follow/".concat(e))},getProfile:function(e){return V.getProfile(e)}},V={getProfile:function(e){return J.get("profile/"+e)},getStatus:function(e){return J.get("profile/status/"+e)},updateStatus:function(e){return J.put("profile/status",{status:e})}},q=function(){return J.get("auth/me")},Q=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return J.post("auth/login",{email:e,password:t,rememberMe:n})},X=function(){return J.delete("auth/login")},$=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(O.a)(Object(O.a)({},e),a):e}))},ee={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},te=function(e){return{type:"FOLLOW",userId:e}},ne=function(e){return{type:"UNFOLLOW",userId:e}},ae=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},re=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},oe=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},se=function(){var e=Object(Z.a)(Y.a.mark((function e(t,n,a,r){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(oe(!0,n)),e.next=3,a(n);case 3:0===e.sent.data.resultCode&&t(r(n)),t(oe(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(O.a)(Object(O.a)({},e),{},{users:$(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(O.a)(Object(O.a)({},e),{},{users:$(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(O.a)(Object(O.a)({},e),{},{users:Object(b.a)(t.users)});case"SET_CURRENT_PAGE":return Object(O.a)(Object(O.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(O.a)(Object(O.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(O.a)(Object(O.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(O.a)(Object(O.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(b.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},ce=n(67),ue=n(54),le=n(71),me=n.n(le),pe=n(131),fe=n.n(pe),de=function(e,t,n,o){for(var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:10,i=Math.ceil(e/t),c=[],u=1;u<=i;u++)c.push(u);var l=Math.ceil(i/s),m=Object(a.useState)(1),p=Object(ue.a)(m,2),f=p[0],d=p[1],g=(f-1)*s+1,E=f*s;return r.a.createElement("div",{className:me.a.paginator},f>1&&r.a.createElement("button",{onClick:function(){d(f-1)}},"PREV"),c.filter((function(e){return e>=g&&e<=E})).map((function(e){return r.a.createElement("span",{className:fe()(Object(ce.a)({},me.a.selectedPage,n===e),me.a.pageNumber),key:e,onClick:function(t){o(e)}},e)})),l>f&&r.a.createElement("button",{onClick:function(){d(f+1)}},"NEXT"))},ge=n(132),Ee=n.n(ge),he=n(133),ve=n.n(he),be=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,o=e.follow;return r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(f.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:null!=t.photos.small?t.photos.small:ve.a,className:Ee.a.userPhoto,alt:""}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"Unfollow"):r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){o(t.id)}},"Follow"))),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status)),r.a.createElement("span",null,r.a.createElement("div",null,"user.location.country"),r.a.createElement("div",null,"user.location.city"))))},Oe=function(e){var t=e.currentPage,n=e.totalUsersCount,a=e.pageSize,o=e.onPageChanged,s=e.users,i=Object(N.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return r.a.createElement("div",null,r.a.createElement(de,{currentPage:t,onPageChanged:o,totalItemsCount:n,pageSize:a}),r.a.createElement("div",null,s.map((function(e){return r.a.createElement(be,{user:e,followingInProgress:i.followingInProgress,key:e.id,follow:i.follow,unfollow:i.unfollow})}))))},je=n(134),we=n.n(je),_e=function(e){return r.a.createElement("div",{style:{backgroundColor:"white"}},r.a.createElement("img",{src:we.a}))},Pe=n(135),Se=Object(Pe.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),ye=function(e){return e.usersPage.pageSize},ke=function(e){return e.usersPage.totalUsersCount},Ce=function(e){return e.usersPage.currentPage},Ne=function(e){return e.usersPage.isFetching},Ie=function(e){return e.usersPage.followingInProgress},Te=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(_e,null):null,r.a.createElement(Oe,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),n}(r.a.Component),xe=Object(z.d)(Object(D.b)((function(e){return{users:Se(e),pageSize:ye(e),totalUsersCount:ke(e),currentPage:Ce(e),isFetching:Ne(e),followingInProgress:Ie(e)}}),{follow:function(e){return function(){var t=Object(Z.a)(Y.a.mark((function t(n){return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,se(n,e,K.follow.bind(e),te);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(Z.a)(Y.a.mark((function t(n){return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,se(n,e,K.unfollow.bind(e),ne);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:ae,toggleFollowingProgress:oe,getUsers:function(e,t){return function(){var n=Object(Z.a)(Y.a.mark((function n(a){var r;return Y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(re(!0)),a(ae(e)),n.next=4,K.getUsers(e,t);case 4:r=n.sent,a(re(!1)),a({type:"SET_USERS",users:r.items}),a({type:"SET_TOTAL_USERS_COUNT",count:r.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(Te),Le=n(65),Ae=n.n(Le),Ue=(r.a.Component,function(e){var t=Object(a.useState)(!1),n=Object(ue.a)(t,2),o=n[0],s=n[1],i=Object(a.useState)(e.status),c=Object(ue.a)(i,2),u=c[0],l=c[1];Object(a.useEffect)((function(){l(e.status)}),[e.status]);return r.a.createElement("div",null,!o&&r.a.createElement("div",null,r.a.createElement("span",{onDoubleClick:function(){s(!0)}},e.status||"-------")),o&&r.a.createElement("div",null,r.a.createElement("input",{onChange:function(e){l(e.currentTarget.value)},autoFocus:!0,onBlur:function(){s(!1),e.updateStatus(u)},value:u})))}),Fe=function(e){return e.profile?r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("img",{src:"https://sun2.48276.userapi.com/ZW1LARB0RnVkJBKzNnvNDpifTc1i6GH7p4eOUw/nS9wAdDm0ZQ.jpg"})),r.a.createElement("div",{className:Ae.a.descriptionBlock},r.a.createElement("img",{src:e.profile.photos.large}),r.a.createElement(Ue,{status:e.status,updateStatus:e.updateStatus}))):r.a.createElement(_e,null)},Me={posts:[{id:1,message:"Hi, how are you?",likesCount:4},{id:2,message:"It's my first post",likesCount:23},{id:3,message:"Yo",likesCount:0},{id:4,message:"Yo",likesCount:0},{id:5,message:"Yo",likesCount:0}],profile:null,status:""},Re=function(e){return{type:"SET_STATUS",status:e}},Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(O.a)(Object(O.a)({},e),{},{posts:[].concat(Object(b.a)(e.posts),[n]),newPostText:""});case"SET_STATUS":return Object(O.a)(Object(O.a)({},e),{},{status:t.status});case"SET_USER_PROFILE":return Object(O.a)(Object(O.a)({},e),{},{profile:t.profile});case"DELETE_POST":return Object(O.a)(Object(O.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}},De=n(93),Be=n.n(De),ze=n(136),We=n.n(ze),He=function(e){return r.a.createElement("div",{className:We.a.item},r.a.createElement("img",{src:"https://sun9-40.userapi.com/axvAEVRAAX3HFpfjziZyrN-tYMr9VGQDLfLJbA/KgZ-2P6ZbBc.jpg"}),e.message,r.a.createElement("div",null,r.a.createElement("span",null,"like")," ",e.likesCount))},Ye=F(10),Ze=Object(C.a)({form:"ProfileAddNewPostForm"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(k.a,{name:"newPostText",component:L,validate:[U,Ye]})),r.a.createElement("div",null,r.a.createElement("button",null,"Add posts")))})),Je=r.a.memo((function(e){var t=e.posts.map((function(e){return r.a.createElement(He,{message:e.message,likesCount:e.likesCount})}));return r.a.createElement("div",{className:Be.a.postsBlock},r.a.createElement("h3",null,"My posts"),r.a.createElement(Ze,{onSubmit:function(t){e.addPost(t.newPostText)}}),r.a.createElement("div",{className:Be.a.posts},t))})),Ke=Object(D.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(function(e){return{type:"ADD-POST",newPostText:e}}(t))}}}))(Je),Ve=function(e){return r.a.createElement("div",null,r.a.createElement(Fe,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),r.a.createElement(Ke,null))},qe=n(137),Qe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return r.a.createElement(Ve,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),n}(r.a.Component),Xe=Object(z.d)(Object(D.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:function(e){return function(){var t=Object(Z.a)(Y.a.mark((function t(n){var a;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,K.getProfile(e);case 2:a=t.sent,n({type:"SET_USER_PROFILE",profile:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(Z.a)(Y.a.mark((function t(n){var a;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,V.getStatus(e);case 2:a=t.sent,n(Re(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(Z.a)(Y.a.mark((function t(n){return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,V.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(Re(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),qe.a)(Qe),$e=n(94),et=n.n($e),tt=function(e){return r.a.createElement("header",{className:et.a.header},r.a.createElement("img",{src:"https://www.freelogodesign.org/Content/img/logo-ex-7.png"}),r.a.createElement("div",{className:et.a.loginBlock},e.isAuth?r.a.createElement("div",null,e.login," ",r.a.createElement("button",{onClick:e.logout},"Log out")):r.a.createElement(f.b,{to:"/login"},"Login")))},nt=n(35),at="samurai-network/auth/SET_USER_DATA",rt={id:null,email:null,login:null,isAuth:!1},ot=function(e,t,n,a){return{type:at,payload:{userId:e,email:t,login:n,isAuth:a}}},st=function(){return function(){var e=Object(Z.a)(Y.a.mark((function e(t){var n,a,r,o,s;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,o=a.email,s=a.login,t(ot(r,o,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},it=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case at:return Object(O.a)(Object(O.a)({},e),t.payload);default:return e}},ct=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(tt,this.props)}}]),n}(r.a.Component),ut=Object(D.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(Z.a)(Y.a.mark((function e(t){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X();case 2:0===e.sent.data.resultCode&&t(st());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ct),lt=n(138),mt=Object(C.a)({form:"login"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(k.a,{placeholder:"Email",validate:[U],name:"email",component:A})),r.a.createElement("div",null,r.a.createElement(k.a,{placeholder:"Password",validate:[U],type:"password",name:"password",component:A})),r.a.createElement("div",null,r.a.createElement(k.a,{component:A,name:"rememberMe",type:"checkbox"})," remember me"),e.error&&r.a.createElement("div",{className:T.a.formSummaryError},e.error),r.a.createElement("div",null,r.a.createElement("button",null,"Login")))})),pt=Object(D.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var a=Object(Z.a)(Y.a.mark((function a(r){var o,s;return Y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Q(e,t,n);case 2:0===(o=a.sent).data.resultCode?r(st()):(s=o.data.messages.length>0?o.data.messages[0]:"Some error",r(Object(nt.a)("login",{_error:s})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?r.a.createElement(lt.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(mt,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))})),ft={initialized:!1},dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ft,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(O.a)(Object(O.a)({},e),{},{initialized:!0});default:return e}},gt=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(ut,null),r.a.createElement(d,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(g.b,{path:"/dialogs",render:function(){return r.a.createElement(W,null)}}),r.a.createElement(g.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(Xe,null)}}),r.a.createElement(g.b,{path:"/news",render:function(){return r.a.createElement(E,null)}}),r.a.createElement(g.b,{path:"/music",render:function(){return r.a.createElement(h,null)}}),r.a.createElement(g.b,{path:"/users",render:function(){return r.a.createElement(xe,null)}}),r.a.createElement(g.b,{path:"/settings",render:function(){return r.a.createElement(v,null)}}),r.a.createElement(g.b,{path:"/login",render:function(){return r.a.createElement(pt,null)}}))):r.a.createElement(_e,null)}}]),n}(a.Component),Et=Object(z.d)(g.f,Object(D.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(st());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(gt);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ht={},vt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ht;return e},bt=n(139),Ot=n(127),jt=Object(z.c)({profilePage:Ge,dialogsPage:w,sidebar:vt,usersPage:ie,auth:it,form:Ot.a,app:dt}),wt=Object(z.e)(jt,Object(z.a)(bt.a));window.store=wt;var _t=wt;s.a.render(r.a.createElement(f.a,null,r.a.createElement(D.a,{store:_t},r.a.createElement(Et,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},51:function(e,t,n){e.exports={formControl:"FormsControls_formControl__2yG5I",error:"FormsControls_error__2Nvha",formSummaryError:"FormsControls_formSummaryError__1Rvpg"}},65:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__2nLhE"}},71:function(e,t,n){e.exports={paginator:"Paginator_paginator__4e_q0",pageNumber:"Paginator_pageNumber__Qr28W",selectedPage:"Paginator_selectedPage__2r5jP"}},93:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__hquOd",posts:"MyPosts_posts__oOVub"}},94:function(e,t,n){e.exports={header:"Header_header__3DWj9",loginBlock:"Header_loginBlock__10NRs"}}},[[165,1,2]]]);
//# sourceMappingURL=main.ff5c0625.chunk.js.map