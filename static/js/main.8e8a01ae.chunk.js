(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);a(64),a(89);var n=a(0),s=a.n(n),c=a(37),o=a.n(c),i=a(8),r=a.n(i),l=a(23),p=a(24),d=a(26),h=a(25),u=a(27),m=a(1),f=(a(111),a(18)),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={data:null},a.ShortLink=a.ShortLink.bind(Object(f.a)(Object(f.a)(a))),a}return Object(u.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;r.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppCallAPIMethodResult":console.log(t.detail.data.response),e.setState({data:t.detail.data.response});break;default:console.log(t.detail)}})}},{key:"ShortLink",value:function(){r.a.send("VKWebAppCallAPIMethod",{method:"utils.getLastShortenedLinks",params:{v:5.92,access_token:this.props.token}})}},{key:"render",value:function(){return s.a.createElement(m.Panel,{id:this.props.id},s.a.createElement(m.PanelHeader,null,"Example"),this.props.fetchedUser&&s.a.createElement(m.Group,{title:"User Data Fetched with VK Connect"},s.a.createElement(m.ListItem,{before:this.props.fetchedUser.photo_200?s.a.createElement(m.Avatar,{src:this.props.fetchedUser.photo_200}):null,description:this.props.fetchedUser.city&&this.props.fetchedUser.city.title?this.props.fetchedUser.city.title:""},"".concat(this.props.fetchedUser.first_name," ").concat(this.props.fetchedUser.last_name))),s.a.createElement(m.Group,{title:"Data"},s.a.createElement(m.Div,null,this.state.data&&s.a.createElement(m.Div,null,"Getted"),s.a.createElement(m.Button,{size:"xl",level:"2",onClick:this.ShortLink},"Get"))),s.a.createElement(m.Group,{title:"Navigation Example"},s.a.createElement(m.Div,null,s.a.createElement(m.Button,{size:"xl",level:"2",onClick:this.props.go,"data-to":"persik"},"Show me the Persik, please"))))}}]),t}(s.a.Component),b=a(61),E=a.n(b),v=(a(112),a(62)),g=a.n(v),U=a(38),O=a.n(U),P=Object(m.platform)(),j=function(e){return s.a.createElement(m.Panel,{id:e.id},s.a.createElement(m.PanelHeader,{left:s.a.createElement(m.HeaderButton,{onClick:e.go,"data-to":"home"},P===m.IOS?s.a.createElement(g.a,null):s.a.createElement(O.a,null))},"Persik"),s.a.createElement("img",{className:"Persik",src:E.a,alt:"Persik The Cat"}))},A=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={activePanel:"home",fetchedUser:null,access_token:null},a}return Object(u.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;r.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;case"VKWebAppAccessTokenReceived":console.log(t),e.setState({access_token:t.detail.data.access_token});break;default:console.log(t.detail)}}),r.a.send("VKWebAppGetUserInfo",{}),r.a.send("VKWebAppGetAuthToken",{app_id:6887496,scope:"stats"})}},{key:"render",value:function(){return s.a.createElement(m.View,{activePanel:this.state.activePanel},s.a.createElement(k,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go,token:this.state.access_token}),s.a.createElement(j,{id:"persik",go:this.go}))}}]),t}(s.a.Component);r.a.send("VKWebAppInit",{}),o.a.render(s.a.createElement(A,null),document.getElementById("root"))},61:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},63:function(e,t,a){e.exports=a(113)}},[[63,1,2]]]);
//# sourceMappingURL=main.8e8a01ae.chunk.js.map