"use strict";(self.webpackChunkreact_1=self.webpackChunkreact_1||[]).push([[110],{3110:function(s,t,e){e.r(t),e.d(t,{default:function(){return T}});var i=e(8683),a=e(5671),n=e(3144),r=e(136),o=e(2882),u=e(2791),c="AvaDescription_avaDescriptionDiv__9FjXr",l="AvaDescription_divAva__6MeIJ",p="AvaDescription_imgAva__VDBgd",d="AvaDescription_nameAva__PHnTC",h="AvaDescription_description__Byj1I",f="AvaDescription_aboutMe__3BqiF",m="AvaDescription_profileStatus__JVJ5d",v=e(3506),j=e(885),_=e(184),x=function(s){var t=(0,u.useState)(!1),e=(0,j.Z)(t,2),i=e[0],a=e[1],n=(0,u.useState)(s.status),r=(0,j.Z)(n,2),o=r[0],c=r[1];(0,u.useEffect)((function(){c(s.status)}),[s.status]);return(0,_.jsxs)("div",{children:[!i&&(0,_.jsx)("div",{children:(0,_.jsx)("span",{onDoubleClick:function(){a(!0)},children:"Status: "+s.status||0})}),i&&(0,_.jsx)("div",{children:(0,_.jsx)("input",{className:m,onChange:function(s){c(s.currentTarget.value)},autoFocus:!0,onBlur:function(){a(!1),s.updateStatus(o)},value:o})})]})},g=function(s){var t=s.profile,e=s.status,i=s.updateStatus;return t?(0,_.jsxs)("div",{className:c,children:[(0,_.jsx)("div",{className:l,children:(0,_.jsx)("img",{className:p,src:t.photos.large,alt:"Avatar"})}),(0,_.jsxs)("div",{className:h,children:[(0,_.jsx)("h2",{className:d,children:t.fullName}),(0,_.jsxs)("div",{className:f,children:[" ","Description: "+t.aboutMe&&"Description: no information"]}),(0,_.jsx)("div",{className:m,children:(0,_.jsx)(x,{status:e,updateStatus:i})}),(0,_.jsx)("div",{className:f,children:"VK: "+t.contacts.vk&&"VK: no information"})]})]}):(0,_.jsx)(v.Z,{})},P={wallpaperimg:"Wallpaper_wallpaperimg__i5Ceh"},D=function(s){return(0,_.jsx)("div",{className:P.contentImgDiv,children:(0,_.jsx)("img",{className:P.wallpaperimg,src:"https://c0.wallpaperflare.com/preview/916/504/900/lavander-flowers.jpg"})})},N="MyPosts_divMyPost__JLoMx",Z="MyPosts_postsTextarea__8Zh1z",A="MyPosts_postButton__QihVB",S={postDiv:"Post_postDiv__P7f4+",imgPost:"Post_imgPost__se9GG",massage:"Post_massage__Mqirp"},y=function(s){return(0,_.jsxs)("div",{className:S.postDiv,children:[(0,_.jsx)("div",{className:S.imgPostDiv,children:(0,_.jsx)("img",{className:S.imgPost,src:"https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg"})}),(0,_.jsx)("div",{className:S.massage,children:s.massage}),(0,_.jsxs)("div",{children:["like - ",s.likesCount]})]})},k=e(6139),C=e(704),M=e(5304),w=e(8696),b=(0,C.Z)({form:"profileAddPostForm"})((function(s){return(0,_.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,_.jsx)("div",{className:Z,children:(0,_.jsx)(k.Z,{component:w.gx,name:"newPostBody",placeholder:"Enter your post",validate:[M.C,(0,M.D)(10)]})}),(0,_.jsx)("div",{children:(0,_.jsx)("button",{className:A,children:"Add post"})})]})})),B=u.memo((function(s){var t=s.posts.map((function(s){return(0,_.jsx)(y,{massage:s.massage,likesCount:s.likesCount})}));return(0,_.jsxs)("div",{children:[(0,_.jsx)("div",{className:N,children:"My post"}),(0,_.jsx)(b,{onSubmit:function(t){s.addPost(t.newPostBody)}}),t]})})),I=e(6070),V=e(8687),q=(0,V.$j)((function(s){return{posts:s.profilePage.posts}}),(function(s){return{addPost:function(t){s((0,I.Wl)(t))}}}))(B),F=function(s){return(0,_.jsxs)("div",{children:[(0,_.jsx)(D,{profile:s.profile}),(0,_.jsx)(g,{profile:s.profile,status:s.status,updateStatus:s.updateStatus}),(0,_.jsx)(q,{})]})},J=e(3679),K=e(8277),U=e(7781),z=function(s){(0,r.Z)(e,s);var t=(0,o.Z)(e);function e(){return(0,a.Z)(this,e),t.apply(this,arguments)}return(0,n.Z)(e,[{key:"componentDidMount",value:function(){var s=this.props.match.params.userId;s||(s=this.props.autorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(s),this.props.getStatus(s)}},{key:"render",value:function(){return(0,_.jsx)(F,(0,i.Z)((0,i.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),e}(u.Component),T=(0,U.qC)((0,V.$j)((function(s){return{profile:s.profilePage.profile,status:s.profilePage.status,autorizedUserId:s.auth.userId,isAuth:s.auth.isAuth}}),{getUserProfile:I.et,getStatus:I.lR,updateStatus:I.Nf}),J.Z,K.D)(z)},8277:function(s,t,e){e.d(t,{D:function(){return h}});var i=e(8683),a=e(5671),n=e(3144),r=e(136),o=e(2882),u=e(2791),c=e(3019),l=e(8687),p=e(184),d=function(s){return{isAuth:s.auth.isAuth}},h=function(s){var t=function(t){(0,r.Z)(u,t);var e=(0,o.Z)(u);function u(){return(0,a.Z)(this,u),e.apply(this,arguments)}return(0,n.Z)(u,[{key:"render",value:function(){return this.props.isAuth?(0,p.jsx)(s,(0,i.Z)({},this.props)):(0,p.jsx)(c.Z,{to:"/login"})}}]),u}(u.Component);return(0,l.$j)(d)(t)}}}]);
//# sourceMappingURL=110.1436713a.chunk.js.map