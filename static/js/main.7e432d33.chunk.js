(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);a(64),a(89);var n=a(0),s=a.n(n),l=a(37),r=a.n(l),i=a(7),o=a.n(i),c=a(23),u=a(24),p=a(26),d=a(25),h=a(27),m=a(1),f=(a(111),a(9)),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={data:null,inputValue:null,url:null},a.ShortLinkList=a.ShortLinkList.bind(Object(f.a)(Object(f.a)(a))),a.ShortLink=a.ShortLink.bind(Object(f.a)(Object(f.a)(a))),a.updateInput=a.updateInput.bind(Object(f.a)(Object(f.a)(a))),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;o.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppCallAPIMethodResult":console.log(t.detail.data.response),t.detail.data.response.items?e.setState({data:t.detail.data.response}):t.detail.data.response.short_url&&e.setState({url:t.detail.data.response.short_url});break;default:console.log(t.detail)}}),this.ShortLinkList()}},{key:"ShortLinkList",value:function(){o.a.send("VKWebAppCallAPIMethod",{method:"utils.getLastShortenedLinks",params:{v:5.92,access_token:this.props.token}})}},{key:"ShortLink",value:function(){o.a.send("VKWebAppCallAPIMethod",{method:"utils.getShortLink",params:{v:5.92,url:this.state.inputValue,access_token:this.props.token}}),this.setState({inputValue:null})}},{key:"updateInput",value:function(e){this.setState({inputValue:e.target.value})}},{key:"render",value:function(){return s.a.createElement(m.Panel,{id:this.props.id},s.a.createElement(m.PanelHeader,null,"\u0421\u0441\u044b\u043b\u043a\u0438"),s.a.createElement(m.FormLayout,null,s.a.createElement(m.FormLayoutGroup,{top:"\u0421\u0441\u044b\u043b\u043a\u0430"},s.a.createElement(m.Input,{type:"text",value:this.state.inputValue,onChange:this.updateInput}),s.a.createElement(m.Button,{size:"xl",level:"secondary",onClick:this.ShortLink},"\u0421\u043e\u043a\u0440\u0430\u0442\u0438\u0442\u044c"))),this.props.fetchedUser&&s.a.createElement(m.Group,null,s.a.createElement(m.ListItem,{before:this.props.fetchedUser.photo_200?s.a.createElement(m.Avatar,{src:this.props.fetchedUser.photo_200}):null,description:this.props.fetchedUser.city&&this.props.fetchedUser.city.title?this.props.fetchedUser.city.title:""},"".concat(this.props.fetchedUser.first_name," ").concat(this.props.fetchedUser.last_name))),s.a.createElement(m.Group,{title:"\u0421\u0441\u044b\u043b\u043a\u0438"},s.a.createElement(m.Div,null,this.state.data?s.a.createElement(m.Group,null,s.a.createElement(m.List,null,this.state.url?s.a.createElement(m.Cell,null,s.a.createElement(m.Link,{href:this.state.url},this.state.url)):null,this.state.data.items.map(function(e,t){return s.a.createElement(m.Cell,{key:t},s.a.createElement(m.Link,{href:e.short_url},e.short_url))}))):s.a.createElement(m.Group,null,s.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},s.a.createElement(m.Spinner,{size:"large",style:{marginTop:20}}))))))}}]),t}(s.a.Component),b=a(61),E=a.n(b),v=(a(112),a(62)),g=a.n(v),y=a(38),L=a.n(y),S=Object(m.platform)(),O=function(e){return s.a.createElement(m.Panel,{id:e.id},s.a.createElement(m.PanelHeader,{left:s.a.createElement(m.HeaderButton,{onClick:e.go,"data-to":"home"},S===m.IOS?s.a.createElement(g.a,null):s.a.createElement(L.a,null))},"Persik"),s.a.createElement("img",{className:"Persik",src:E.a,alt:"Persik The Cat"}))},j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={activePanel:"home",fetchedUser:null,access_token:null},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;o.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;case"VKWebAppAccessTokenReceived":console.log(t),e.setState({access_token:t.detail.data.access_token});break;default:console.log(t.detail)}}),o.a.send("VKWebAppGetUserInfo",{}),o.a.send("VKWebAppGetAuthToken",{app_id:6887496,scope:"stats"})}},{key:"render",value:function(){return s.a.createElement(m.View,{activePanel:this.state.activePanel},s.a.createElement(k,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go,token:this.state.access_token}),s.a.createElement(O,{id:"persik",go:this.go}))}}]),t}(s.a.Component);o.a.send("VKWebAppInit",{}),r.a.render(s.a.createElement(j,null),document.getElementById("root"))},61:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},63:function(e,t,a){e.exports=a(113)}},[[63,1,2]]]);
//# sourceMappingURL=main.7e432d33.chunk.js.map