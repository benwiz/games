(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(28)},22:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(11),i=a.n(r),c=(a(22),a(1)),o=a.n(c),u=a(14),l=a(9),m=a(2),h=a(3),p=a(4),d=a(6),v=a(5),f=a(7),b=a(12),g=a.n(b),k=a(15),y=a(13),w=a.n(y),O=function(e){var t=new k.a;if(window.location.hash.length>1){var a=window.location.hash.slice(1),n=w.a.parse(a);n.access_token&&(t.set("spotify-access-token",n.access_token,{maxAge:3595}),window.location=window.location.href.split("#")[0])}var s=t.get("spotify-access-token");if(s)e.setAccessToken(s);else{var r=encodeURIComponent("user-read-playback-state user-modify-playback-state"),i=window.location.origin,c="https://accounts.spotify.com/authorize?response_type=token&client_id=".concat("ff53948d58f1491baa6169d34bc4179a","&scope=").concat(r,"&redirect_uri=").concat(i);window.location=c}},j=(a(27),new g.a);O(j);var C=function(e){function t(){return Object(h.a)(this,t),Object(d.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"createOptions",value:function(){var e=[],t=!0,a=!1,n=void 0;try{for(var r,i=this.props.devices[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){var c=r.value,o=s.a.createElement("option",{key:c.id,value:c.id},c.name);e.push(o)}}catch(u){a=!0,n=u}finally{try{t||null==i.return||i.return()}finally{if(a)throw n}}return e}},{key:"render",value:function(){return s.a.createElement("select",{value:this.props.value,onChange:this.props.onChange},this.createOptions())}}]),t}(s.a.Component),I=function(e){function t(){return Object(h.a)(this,t),Object(d.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.gameHasStarted?this.props.gameIsPaused?"Resume":"Pause":"Play";return s.a.createElement("button",{onClick:this.props.onClick},e)}}]),t}(s.a.Component),S=function(e){function t(){return Object(h.a)(this,t),Object(d.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.minutes.toString().padStart(2,"0"),t=this.props.seconds.toString().padStart(2,"0");return s.a.createElement("span",null,e,":",t)}}]),t}(s.a.Component),H=function(e){function t(){return Object(h.a)(this,t),Object(d.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"track-information"},s.a.createElement("img",{src:this.props.albumImage,alt:this.props.albumName,width:"175",height:"175"}),s.a.createElement("p",{className:"song-name"},this.props.songName),s.a.createElement("p",{className:"artists"},this.props.artists))}}]),t}(s.a.Component),x=function(e){function t(){return Object(h.a)(this,t),Object(d.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e={visibility:this.props.gameHasStarted?"visible":"hidden"};return s.a.createElement("button",{style:e,className:"restart-button",onClick:this.props.onClick},"Restart")}}]),t}(s.a.Component),D=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(d.a)(this,Object(v.a)(t).call(this,e))).state=a.getInitialState(),a.deviceSelectChangeHandler=a.deviceSelectChangeHandler.bind(Object(m.a)(Object(m.a)(a))),a.startButtonClickHandler=a.startButtonClickHandler.bind(Object(m.a)(Object(m.a)(a))),a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"getInitialState",value:function(){return{devices:[],currentDeviceID:"",minutes:0,seconds:0,gameIsPaused:!0,gameHasStarted:!1,tickIntervalID:null,songName:null,artists:null,albumImage:null,albumName:null}}},{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark(function e(){var t,a,n,s,r=this;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([j.getMyDevices(),j.getMyCurrentPlaybackState()]);case 2:t=e.sent,a=Object(u.a)(t,2),n=a[0].devices,s=a[1].device,this.setState({devices:n,currentDeviceID:s.id}),setInterval(function(){return r.getDevices()},5e3),setInterval(function(){return r.getCurrentTrack()},900);case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getDevices",value:function(){var e=Object(l.a)(o.a.mark(function e(){var t,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.getMyDevices();case 2:t=e.sent,a=t.devices,this.setState({devices:a});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getCurrentTrack",value:function(){var e=Object(l.a)(o.a.mark(function e(){var t,a,n,s,r,i,c,u;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.getMyCurrentPlayingTrack();case 2:for(t=e.sent,a=this.state.gameIsPaused,this.state.gameHasStarted&&(a=!t.is_playing),n=t.item.name,s="",r=0;r<t.item.artists.length;r++)i=t.item.artists[r],s+=i.name,r<t.item.artists.length-1&&(s+=", ");c=t.item.album.images[t.item.album.images.length-2].url,u="",t&&t.item&&t.item.album&&t.item.album.name&&(u=t.item.album.name),this.setState({gameIsPaused:a,songName:n,artists:s,albumImage:c,albumName:u});case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"deviceSelectChangeHandler",value:function(){var e=Object(l.a)(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({currentDeviceID:t.target.value}),e.next=3,j.transferMyPlayback([t.target.value]);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"startButtonClickHandler",value:function(){var e=Object(l.a)(o.a.mark(function e(){var t,a=this;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.gameHasStarted||(t=setInterval(function(){return a.tick()},1e3),this.setState({gameHasStarted:!0,tickIntervalID:t})),!this.state.gameIsPaused){e.next=6;break}return e.next=4,j.play({device_id:this.state.currentDeviceID});case 4:e.next=8;break;case 6:return e.next=8,j.pause();case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"tick",value:function(){if(!this.state.gameIsPaused){var e=this.state.seconds+1,t=this.state.minutes;e>=60&&(e=0,t+=1),this.setState({seconds:e,minutes:t}),0===e&&j.skipToNext()}}},{key:"restartButtonClickHandler",value:function(){window.location=window.location.href}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(C,{value:this.state.currentDeviceID,onChange:this.deviceSelectChangeHandler,devices:this.state.devices}),s.a.createElement(I,{onClick:this.startButtonClickHandler,gameHasStarted:this.state.gameHasStarted,gameIsPaused:this.state.gameIsPaused}),s.a.createElement(S,{minutes:this.state.minutes,seconds:this.state.seconds}),s.a.createElement(H,{songName:this.state.songName,artists:this.state.artists,albumImage:this.state.albumImage,albumName:this.state.albumName}),s.a.createElement(x,{onClick:this.restartButtonClickHandler,gameHasStarted:this.state.gameHasStarted}))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.779ad5b6.chunk.js.map