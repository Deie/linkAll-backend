(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a.p+"static/media/logo-little.e42f9e12.png"},36:function(e,t,a){e.exports=a.p+"static/media/icon-1.9ec5d5fe.svg"},37:function(e,t,a){e.exports=a.p+"static/media/icon-2.d3984b39.svg"},38:function(e,t,a){e.exports=a.p+"static/media/icon-3.7da228b9.svg"},39:function(e,t,a){e.exports=a.p+"static/media/icon-4.1bdf7dd2.svg"},40:function(e,t,a){e.exports=a.p+"static/media/logo-big.0fa01917.png"},42:function(e,t,a){e.exports=a.p+"static/media/bgbg.ba9a92d6.svg"},43:function(e,t,a){e.exports=a.p+"static/media/bg-screen.2bce2da8.jpg"},46:function(e,t,a){e.exports=a(96)},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},79:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){e.exports=a.p+"static/media/searchIcon.442aee7e.svg"},84:function(e,t,a){},85:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),o=a.n(c),s=a(98),l=(a(51),a(52),a(54),a(55),a(56),a(2)),i=a(3),m=a(5),u=a(4),d=a(6),h=a(35),p=a.n(h),g=(a(57),a(97)),f=a(100),v=a(45),b=(a(58),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("h2",null,"OOPS !>"),r.a.createElement("p",null,"This page does not exist"),r.a.createElement("img",{src:"#",alt:"error"}))}}]),t}(n.Component)),E=(a(59),a(12)),y=a(25),N=a(36),O=a.n(N),C=a(37),k=a.n(C),j=a(38),S=a.n(j),U=a(39),x=a.n(U),I=a(19),w=a.n(I),A=w.a.create({baseURL:"",withCredentials:!0});function L(e){throw e.response&&e.response.data?console.log("API Error",e.response.data):console.log("React Code Error",e),alert("Sorry ! Some went wrong"),e}function M(){return A.get("/api/countries").catch(L)}function R(e){var t=new FormData;return t.append("userFile",e[0]),A.post("/api/avatar-upload",t).catch(L)}a(79);var F=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={countryArray:[],countrySearch:""},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),console.log("handleSubmit ok ?")}},{key:"genericOnChange",value:function(e){console.log(e.target.value,"TEST generic onchange event");var t=e.target,a=t.name,n=t.value;this.setState(Object(E.a)({},a,n))}},{key:"componentDidMount",value:function(){var e=this;M().then(function(t){e.setState({countryArray:t.data})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.countryArray,n=t.countrySearch,c=n.toLowerCase(),o=a.filter(function(e){return e.name.toLowerCase().includes(c)});return r.a.createElement("section",{className:"searchResult"},r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("input",{onChange:function(t){return e.genericOnChange(t)},value:this.state.oneCountry,name:"countrySearch",type:"text",className:"search-bar text-center w-100",placeholder:"Search for a country",autoComplete:"off"})),""===n?null:r.a.createElement("div",{className:"countryList container"},r.a.createElement("ul",{className:"row d-flex justify-content-center"},o.map(function(e){return r.a.createElement("li",{className:"oneCountry col-lg-4 col-md-6 col-sm-12 w-100",key:e._id},r.a.createElement("div",{className:"li-content"},r.a.createElement("img",{src:e.flag,className:"countryFlag",alt:"country flag"}),r.a.createElement("h4",null,e.name),r.a.createElement("div",{className:"iconList d-flex justify-content-center"},e.RoomsCategories.map(function(t){return r.a.createElement(y.a,{key:t._id,to:"/linkall-messenger/".concat(e.name,"/").concat(t.roomName)},"Travel in"===t.roomName?r.a.createElement("img",{src:O.a,alt:"",className:"icons"}):"Fooding"===t.roomName?r.a.createElement("img",{src:x.a,alt:"",className:"icons"}):"Culture & language"===t.roomName?r.a.createElement("img",{src:S.a,alt:"",className:"icons"}):r.a.createElement("img",{src:k.a,alt:"",className:"icons"}))}))))}))))}}]),t}(n.Component),T=(a(82),n.Component,a(40)),D=a.n(T),G=(a(83),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={countryArray:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;M().then(function(t){console.log("Countries",t.data),e.setState({countryArray:t.data})})}},{key:"render",value:function(){return r.a.createElement("section",{className:"HomePage container d-flex align-items-center justify-content-center"},r.a.createElement("div",{className:"row w-100"},r.a.createElement("div",{className:"col-12 m-auto text-center"},r.a.createElement("img",{src:D.a,alt:"logo",className:"imgLogo mt-4 "}),r.a.createElement("h6",{className:"text-uppercase text-small letter-space"},"Welcome to Link'All ! Your favorite Chat country."),r.a.createElement(F,null))))}}]),t}(n.Component)),P=a(99),Y=(a(84),a(41)),B=(a(85),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state=Object(Y.a)({},a.props.userInfo),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"genericOnChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(E.a)({},a,n))}},{key:"handleEditSubmit",value:function(e){var t,a=this;e.preventDefault(),(t=this.state,A.post("/api/account/".concat(t.name,"/edit-user"),t).catch(L)).then(function(e){a.props.editSuccess(e.data),console.log("User",e.data)})}},{key:"uploadOnChange",value:function(e){var t=this,a=e.target,n=a.name;R(a.files).then(function(e){console.log("Upload File Info",e.data),t.setState(Object(E.a)({},n,e.data.fileUrl))})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ButtonUserProfile"},r.a.createElement("div",{className:"EditBtn"},r.a.createElement("form",{onSubmit:function(t){return e.handleEditSubmit(t)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Full Name:"),r.a.createElement("input",{className:"form-control",onChange:function(t){return e.genericOnChange(t)},value:this.state.fullName,name:"fullName",type:"text",placeholder:"Your name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Age:"),r.a.createElement("input",{className:"form-control",onChange:function(t){return e.genericOnChange(t)},value:this.state.age,name:"age",type:"number",placeholder:"Your age (must be at least 18)"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Location:"),r.a.createElement("input",{className:"form-control",onChange:function(t){return e.genericOnChange(t)},value:this.state.location,name:"location",type:"text",placeholder:"Your city and country (ex: Paris, FRANCE)"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Picture:"),r.a.createElement("img",{className:"img-thumbnail rounded upImg",src:this.state.avatarURL}),r.a.createElement("input",{className:"form-control",onChange:function(t){return e.uploadOnChange(t)},name:"avatarURL",type:"file"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description:"),r.a.createElement("input",{className:"form-control",onChange:function(t){return e.genericOnChange(t)},value:this.state.description,name:"description",type:"text",placeholder:"#geek #photography #tennis #TeamDog"})),r.a.createElement("button",{type:"submit",className:"btn btn-success"},"Save"))))}}]),t}(n.Component)),W=a(42),H=a.n(W),J=a(43),q=a.n(J),_=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={userInfo:{},isDeleteOpen:!1,countryArray:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,t=this,a=this.props.match.params;(e=a.userName,A.get("/api/account/".concat(e)).catch(L)).then(function(e){console.log("User",e.data),t.setState({userInfo:e.data})}),M().then(function(e){console.log("Countries",e.data),t.setState({countryArray:e.data})})}},{key:"deleteUser",value:function(){this.setState({isDeleteOpen:!0})}},{key:"render",value:function(){var e=this,t=this.state.userInfo;return console.log(this.state),this.state.isDeleteOpen?r.a.createElement(P.a,{exact:!0,to:"/"}):r.a.createElement("div",{className:"UserAccount"},r.a.createElement("section",{className:"User-profile"},r.a.createElement("img",{src:q.a,alt:"",className:"bgScreen"}),r.a.createElement("div",{className:" container"},r.a.createElement("div",{className:"row user"},r.a.createElement("div",{className:"User-visual col-5 text-center"},r.a.createElement("img",{src:t.avatarURL,alt:"User Profile ",className:"userAvatar"}),r.a.createElement("h2",null,t.name),r.a.createElement("p",null,t.fullName),r.a.createElement("b",null,t.email),r.a.createElement("p",null,"From : ",r.a.createElement("b",null,t.location)),r.a.createElement("p",null,r.a.createElement("i",null,t.age)," years old"),r.a.createElement("p",null,r.a.createElement("i",null,t.gender)),r.a.createElement("p",null,t.description),r.a.createElement("div",{className:"buttons"},r.a.createElement(y.a,{to:"/account/".concat(t.name,"/edit")},r.a.createElement("button",{className:"btn btn-primary"},"Edit your profile")),r.a.createElement(y.a,{to:"/account/".concat(t.name,"/delete")},r.a.createElement("button",{className:"btn btn-danger"},"Delete your profile")))),r.a.createElement("div",{className:"User-info col-7"},r.a.createElement(f.a,null,r.a.createElement(v.a,{path:"/account/:userName/edit",render:function(){return r.a.createElement(B,{userInfo:e.props.currentUser,editSuccess:e.props.editSuccess})}}),r.a.createElement(v.a,{path:"/account/:userName/delete",render:function(){return r.a.createElement("div",{className:"verif-delete text-center"},r.a.createElement("h2",null,"To confirm press the delete button"),r.a.createElement("button",{className:"btn btn-dark",onClick:function(t){return e.props.deleteSuccess(t)}},"Delete"))}}),r.a.createElement(v.a,{path:"/account/:userName",render:function(){return r.a.createElement("section",{className:"Fav-channels"},r.a.createElement("img",{src:H.a,alt:"bg",className:"w-100"}))}})))))))}}]),t}(n.Component),z=a(15),V=a(8),K=a(26),Z=a.n(K);var $=function(e){return r.a.createElement("div",{className:"message"},r.a.createElement("div",{className:"message-username"},e.sender.name),r.a.createElement("div",{className:"message-avatarURL"},r.a.createElement("img",{src:e.sender.avatarURL,alt:"avatar pict",className:"imgPic"})),r.a.createElement("div",{className:"textDiv"},""===e.text?null:r.a.createElement("div",{className:"message-text"},e.text)),r.a.createElement("div",{className:"gifDiv"},e.attachment&&"image"===e.attachment.type&&r.a.createElement("img",{src:e.attachment.link,className:"gif"})))},Q=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentWillUpdate",value:function(){var e=o.a.findDOMNode(this);this.shouldScrollToBottom=e.scrollTop+e.clientHeight+100>=e.scrollHeight}},{key:"componentDidUpdate",value:function(){if(this.shouldScrollToBottom){var e=o.a.findDOMNode(this);e.scrollTop=e.scrollHeight}}},{key:"render",value:function(){return this.props.roomId?r.a.createElement("div",{className:"message-list"},this.props.messages.map(function(e,t){return r.a.createElement($,{key:e.id,sender:e.sender,text:e.text,attachment:e.attachment})})):r.a.createElement("div",{className:"message-list"},r.a.createElement("div",{className:"join-room"},"\u2191 Start to Link'All!"))}}]),t}(r.a.Component),X=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).state={message:"",selectedGif:null,selectedGifUrl:""},e.handleChange=e.handleChange.bind(Object(V.a)(Object(V.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(V.a)(Object(V.a)(e))),e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState({message:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.sendMessage(this.state.message),this.setState({message:""})}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit,className:"send-message-form"},this.props.selectedGifUrl&&r.a.createElement("img",{src:this.props.selectedGifUrl}),r.a.createElement("input",{disabled:this.props.disabled,onChange:this.handleChange,value:this.state.message,placeholder:"Type your message and hit ENTER",type:"text",className:"inputtypetext"}))}}]),t}(r.a.Component),ee=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={favorites:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.updateFavorites()}},{key:"favoriteClick",value:function(e){var t,a=this;console.log("ROOM FAVORITE",e.id),(t=e.id,A.patch("/api/account/favorite",{roomId:t}).catch(L)).then(function(){a.updateFavorites()})}},{key:"updateFavorites",value:function(){var e=this;A.get("/api/account/favorite").catch(L).then(function(t){console.log("Favorite Array",t.data),e.setState({favorites:t.data})})}},{key:"render",value:function(){var e=this;this.state.favorites,Object(z.a)(this.props.rooms).sort(function(e,t){return e.id-t.id});return r.a.createElement("div",{className:"rooms-list"},r.a.createElement("div",{className:"rooms-ul text-center"},r.a.createElement("h1",null,r.a.createElement("b",null,"Your rooms")),r.a.createElement("ul",null,this.props.rooms.map(function(t){var a=e.props.roomId===t.id?"active":"";return r.a.createElement("li",{key:t.id,className:"room"+a},r.a.createElement("a",{onClick:function(){return e.props.subscribeToRoom(t.id)},href:"#!"},"# ",t.name))}))))}}]),t}(r.a.Component),te=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.roomUsers;return r.a.createElement("div",{className:"userOnline"},r.a.createElement("h4",null,"Online user(s)"),e.map(function(e){return r.a.createElement("li",{key:e}," ",e," ")}))}}]),t}(n.Component),ae=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).state={term:""},e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"onInputChange",value:function(e){this.setState({term:e}),this.props.onTermChange(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"SearchBar"},r.a.createElement("input",{className:"SearchBarInput",placeholder:"Enter text to search for gifs!",onChange:function(t){return e.onInputChange(t.target.value)}}))}}]),t}(r.a.Component),ne=function(e){var t=e.gif,a=e.onGifSelect;return r.a.createElement("li",{className:"gif-item",onClick:function(){return a(t)}},r.a.createElement("img",{src:t.images.downsized.url}))},re=function(e){var t=e.gifs.map(function(t){return r.a.createElement(ne,{key:t.id,gif:t,onGifSelect:e.onGifSelect})});return r.a.createElement("ul",{className:"gif-list"},t)},ce=a(24),oe=a.n(ce),se=(n.Component,function(e){return e.selectedGif?r.a.createElement(oe.a,{isOpen:e.modalIsOpen,onRequestClose:function(){return e.onRequestClose()}},r.a.createElement("div",{className:"gif-modal"},r.a.createElement("img",{className:"gifimg",src:e.selectedGif.images.downsized.url}),r.a.createElement("button",{className:"btn btn-primary btnviolet",onClick:function(){return console.log("AAAAAAAAAAAAAAAAAA",e.selectedGif.images.downsized.url),e.onRequestClose(e.selectedGif.images.downsized.url)}},"Send"))):r.a.createElement("div",null)}),le=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={country:{},roomId:null,roomUsers:[],messages:[],joinableRooms:[],joinedRooms:[],gifs:[],selectedGif:null,selectedGifUrl:"",modalIsOpen:!1},a.sendMessage=a.sendMessage.bind(Object(V.a)(Object(V.a)(a))),a.subscribeToRoom=a.subscribeToRoom.bind(Object(V.a)(Object(V.a)(a))),a.getRooms=a.getRooms.bind(Object(V.a)(Object(V.a)(a))),a.handleTermChange=a.handleTermChange.bind(Object(V.a)(Object(V.a)(a))),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;new Z.a.ChatManager({instanceLocator:"v1:us1:2993d953-3ea4-49a1-a84c-3c35a9cb6cf4",userId:this.props.currentUser.name,tokenProvider:new Z.a.TokenProvider({url:"https://us1.pusherplatform.io/services/chatkit_token_provider/v1/2993d953-3ea4-49a1-a84c-3c35a9cb6cf4/token"})}).connect().then(function(t){e.currentUser=t,e.getRooms(),e.updateCountryState()}).catch(function(e){return console.log("error on connecting: ",e)})}},{key:"componentDidUpdate",value:function(e){var t=e.match.params,a=this.props.match.params;t.countryName===a.countryName&&t.roomName===a.roomName||this.updateCountryState()}},{key:"updateCountryState",value:function(){var e,t=this,a=this.props.match.params;(e=a.countryName,A.get("/api/countries/".concat(e)).catch(L)).then(function(e){console.log("Country Details",e.data),t.setState({country:e.data});var n=e.data.RoomsCategories.find(function(e){return e.roomName===a.roomName});t.subscribeToRoom(n.chatkitId)})}},{key:"getRooms",value:function(){this.setState({joinedRooms:this.currentUser.rooms})}},{key:"subscribeToRoom",value:function(e){var t=this;this.setState({messages:[]}),this.currentUser.subscribeToRoom({roomId:String(e),hooks:{onMessage:function(e){console.log("hello)-------",e),t.setState({messages:[].concat(Object(z.a)(t.state.messages),[e])})}}}).then(function(e){t.setState({roomId:e.id,roomUsers:e.userIds}),t.getRooms()}).catch(function(e){return console.log("error on subscribing to room",e)})}},{key:"sendMessage",value:function(e){var t=this;this.state.selectedGifUrl?this.currentUser.sendMultipartMessage({roomId:this.state.roomId,parts:[{type:"text/plain",content:e},{type:"image/gif",url:this.state.selectedGifUrl}]}).then(function(){return t.setState({selectedGifUrl:""})}):this.currentUser.sendMessage({text:e,roomId:this.state.roomId})}},{key:"handleTermChange",value:function(e){var t=this,a="https://api.giphy.com/v1/gifs/search?q=".concat(e.replace(/\s/g,"+"),"&api_key=").concat("3fUr3O3KAnYiu437hFaSeaM1Aip5o5Mi");w.a.get(a).then(function(e){t.setState({gifs:e.data.data})}).catch(function(e){return console.log("error on giphy",e)})}},{key:"openModal",value:function(e){this.setState({modalIsOpen:!0,selectedGif:e})}},{key:"closeModal",value:function(e){this.setState({modalIsOpen:!1,selectedGifUrl:e})}},{key:"render",value:function(){var e=this,t="AppMessenger";return"Time Out"===this.props.match.params.roomName&&(t="AppMessenger dark"),r.a.createElement("div",{className:t},r.a.createElement(ee,{subscribeToRoom:this.subscribeToRoom,rooms:Object(z.a)(this.state.joinedRooms),roomId:this.state.roomId}),r.a.createElement(te,{roomUsers:this.state.roomUsers}),r.a.createElement(Q,{roomId:this.state.roomId,messages:this.state.messages}),r.a.createElement(X,{disabled:!this.state.roomId,sendMessage:this.sendMessage,selectedGifUrl:this.state.selectedGifUrl}),r.a.createElement("div",{className:"Gif-search"},r.a.createElement(ae,{onTermChange:this.handleTermChange}),r.a.createElement(re,{gifs:this.state.gifs,onGifSelect:function(t){return e.openModal(t)}}),r.a.createElement(se,{modalIsOpen:this.state.modalIsOpen,selectedGif:this.state.selectedGif,onRequestClose:function(t){return e.closeModal(t)}})))}}]),t}(r.a.Component),ie=(a(94),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={email:"",originalPassword:""},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"genericOnChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(E.a)({},a,n))}},{key:"handleSubmit",value:function(e){var t,a=this;e.preventDefault(),(t=this.state,A.post("/api/process-login",t).catch(L)).then(function(e){a.props.loginSuccess(e.data)})}},{key:"render",value:function(){var e=this;return this.props.currentUser?r.a.createElement(n.Fragment,null,r.a.createElement("p",null,"WELCOME, let's start to CHAT"),r.a.createElement("img",{className:"img-thumbnail rounded mx-auto d-block",src:"https://media.giphy.com/media/7OVRDntHUDGpLrDpjV/giphy.gif",alt:"login okay"})):r.a.createElement("section",{className:"LoginForm"},r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email:"),r.a.createElement("input",{className:"form-control",onChange:function(t){return e.genericOnChange(t)},value:this.state.email,name:"email",type:"email",placeholder:"Your email address"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password:"),r.a.createElement("input",{className:"form-control",onChange:function(t){return e.genericOnChange(t)},value:this.state.originalPassword,name:"originalPassword",type:"password",placeholder:"Your password"})),r.a.createElement("button",{type:"submit",className:"btn btn-success",onClick:function(){return e.props.onClickLog()},id:"closeModal"},"Log In")))}}]),t}(n.Component)),me=(a(95),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={fullName:"",email:"",originalPassword:"",name:"",age:0,location:"",avatarURL:"",gender:"",description:"",id:""},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"genericOnChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(E.a)({},a,n))}},{key:"uploadOnChange",value:function(e){var t=this,a=e.target,n=a.name;R(a.files).then(function(e){console.log("Upload File Info",e.data),t.setState(Object(E.a)({},n,e.data.fileUrl))})}},{key:"handleSubmit",value:function(e){var t,a=this;e.preventDefault(),(t=this.state,A.post("/api/process-signup",t).catch(L)).then(function(e){console.log("Sign Up Result",e.data),a.props.signupSuccess(e.data)})}},{key:"render",value:function(){var e=this;return this.props.currentUser?r.a.createElement(n.Fragment,null,r.a.createElement("p",null,"GREAT, you are logged. Let chat !"),r.a.createElement("img",{className:"img-thumbnail rounded mx-auto d-block",src:"https://media.giphy.com/media/kOZ5BWKm2tMGs/giphy.gif",alt:"sign up okay"})):r.a.createElement("section",{className:"SignupForm"},r.a.createElement("div",null,r.a.createElement("h2",null,"Sign Up"),r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Name:"),r.a.createElement("input",{className:"form-control",onChange:function(t){return e.genericOnChange(t)},value:this.state.fullName,name:"fullName",type:"text",placeholder:"Your name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Pseudo:"),r.a.createElement("input",{className:"form-control",onChange:function(t){return e.genericOnChange(t)},value:this.state.name,name:"name",type:"text",placeholder:"Your pseudo"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Age:"),r.a.createElement("input",{className:"form-control",onChange:function(t){return e.genericOnChange(t)},value:this.state.age,name:"age",type:"number",placeholder:"Your age (must be at least 18)"})),r.a.createElement("div",{className:"form-check"},r.a.createElement("p",null,"Gender"),r.a.createElement("input",{className:"form-check-input",onChange:function(t){return e.genericOnChange(t)},checked:"female"===this.state.gender,value:"female",name:"gender",type:"radio",placeholder:"Your name",id:"gender-female"}),r.a.createElement("label",{className:"form-check-label",htmlFor:"gender-female"},"Female:"),r.a.createElement("input",{className:"form-check-input",onChange:function(t){return e.genericOnChange(t)},checked:"male"===this.state.gender,value:"male",name:"gender",type:"radio",placeholder:"Your name",id:"gender-male"}),r.a.createElement("label",{className:"form-check-label",htmlFor:"gender-male"},"Male:"),r.a.createElement("input",{className:"form-check-input",onChange:function(t){return e.genericOnChange(t)},checked:"neutral"===this.state.gender,value:"neutral",name:"gender",type:"radio",placeholder:"Your name",id:"gender-neutral"}),r.a.createElement("label",{className:"form-check-label",htmlFor:"gender-neutral"},"Neutral:")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Location:",r.a.createElement("input",{className:"form-control",onChange:function(t){return e.genericOnChange(t)},value:this.state.location,name:"location",type:"text",placeholder:"Your city and country (ex: Paris, FRANCE)"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email:"),r.a.createElement("input",{className:"form-control",onChange:function(t){return e.genericOnChange(t)},value:this.state.email,name:"email",type:"email",placeholder:"Your email address"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password (with 1 number minimum):"),r.a.createElement("input",{className:"form-control",onChange:function(t){return e.genericOnChange(t)},value:this.state.originalPassword,name:"originalPassword",type:"password",placeholder:"Your password"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Picture:"),r.a.createElement("input",{className:"form-control",onChange:function(t){return e.uploadOnChange(t)},name:"avatarURL",type:"file"}),r.a.createElement("img",{className:"img-thumbnail rounded mx-auto d-block",src:this.state.avatarURL})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Describe yourself in #:"),r.a.createElement("input",{className:"form-control",onChange:function(t){return e.genericOnChange(t)},value:this.state.description,name:"description",type:"text",placeholder:"#geek #photography (up to 6)"})),r.a.createElement("button",{type:"submit",className:"btn btn-success",onClick:function(){return e.props.onClickSign()}},"Sign Up"))))}}]),t}(n.Component)),ue=a(14),de=a.n(ue);var he=function(e){function t(e){var a;Object(l.a)(this,t),a=Object(m.a)(this,Object(u.a)(t).call(this,e));var n=localStorage.getItem("currentUser");return n&&(n=JSON.parse(n)),a.state={currentUser:n},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"updateUser",value:function(e){e?localStorage.setItem("currentUser",JSON.stringify(e)):localStorage.removeItem("currentUser"),this.setState({currentUser:e})}},{key:"addToFavorites",value:function(e){var t=this.state.favorites;t.push({countries:e,timestamp:Date.now()}),this.setState({favorites:t}),localStorage.favorites=JSON.stringify(t)}},{key:"removeFromFavorites",value:function(e){for(var t=this.state.favorites,a=-1,n=0;n<t.length;n++)if(t[n].countries===e){a=n;break}-1!==a&&(t.splice(a,1),this.setState({favorites:t}),localStorage.favorites=JSON.stringify(t))}},{key:"onClickLog",value:function(){de()("#closeModal").click(function(){de()("#exampleModal").modal("hide")})}},{key:"onClickSign",value:function(){de()("#closeModal").click(function(){de()("#exampleModal2").modal("hide")})}},{key:"isCountryInFavorites",value:function(e){for(var t=this.state.favorites,a=0;a<t.length;a++)if(t[a].countries===e)return!0;return!1}},{key:"LogoutClick",value:function(){var e=this;A.get("/api/logout").catch(L).then(function(t){console.log("Log Out",t.data),e.updateUser(null)})}},{key:"deleteProfile",value:function(){var e,t=this;A.post("/api/account/".concat(e.name,"/delete"),e).catch(L).then(function(e){console.log("DELETED",e.data),t.updateUser(null)})}},{key:"render",value:function(){var e,t=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"header w-100"},r.a.createElement("nav",{className:" w-100 navbar navbar-light bg-light"},r.a.createElement(g.a,{className:"navbar-brand",exact:!0,to:"/"},r.a.createElement("img",{className:"App-logo",src:p.a,alt:"Country Chat logo"})),this.state.currentUser?r.a.createElement("div",{className:"userLogged d-flex align-items-center"},r.a.createElement("div",{className:"User-out d-flex align-items-center"},r.a.createElement("p",{className:"userName"}," ","Welcome ",r.a.createElement("b",null,this.state.currentUser.name)),r.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0 btnLogout",onClick:function(){return t.LogoutClick()}},"Log Out"),r.a.createElement(g.a,{to:(e=this.state.currentUser,"/account/".concat(e.name))},r.a.createElement("img",{src:this.state.currentUser.avatarURL,alt:"User-Img",className:"userImg"})))):r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{type:"button",className:"btn btn-outline-success my-2 my-sm-0","data-toggle":"modal","data-target":"#exampleModal2"},"Sign up"),r.a.createElement("button",{type:"button",className:"btn btn-outline-success my-2 my-sm-0","data-toggle":"modal","data-target":"#exampleModal"},"Log In")),r.a.createElement("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h4",{className:"modal-title",id:"exampleModalLabel"},"You are at few steps to chat with awsome people"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},r.a.createElement(ie,{currentUser:this.state.currentUser,loginSuccess:function(e){return t.updateUser(e)},onClickLog:function(){return t.onClickLog()}}))))),r.a.createElement("div",{className:"modal fade",id:"exampleModal2",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel2","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel2"},"Hello World, but first please sign up"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},r.a.createElement(me,{currentUser:this.state.currentUser,signupSuccess:function(e){return t.updateUser(e)},onClickSign:function(){return t.onClickSign()}}))))))),r.a.createElement(f.a,null,r.a.createElement(v.a,{exact:!0,path:"/",render:function(){return r.a.createElement(G,{currentUser:t.state.currentUser,signupSuccess:function(e){return t.updateUser(e)},favListImport:function(){return t.favInitialState()},toggleFav:function(){return t.toggleFavorite()}})}}),r.a.createElement(v.a,{path:"/countries",component:F}),r.a.createElement(v.a,{path:"/account/:userName",render:function(e){return r.a.createElement(_,{currentUser:t.state.currentUser,editSuccess:function(e){return t.updateUser(e)},deleteSuccess:function(e){return t.updateUser(e)},favListImport:function(){return t.favInitialState()},toggleFav:function(){return t.toggleFavorite()},match:e.match})}}),r.a.createElement(v.a,{path:"/linkall-messenger/:countryName/:roomName",render:function(e){return r.a.createElement(le,{match:e.match,currentUser:t.state.currentUser})}}),r.a.createElement(v.a,{component:b})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(s.a,null,r.a.createElement(he,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[46,1,2]]]);
//# sourceMappingURL=main.75f0c293.chunk.js.map