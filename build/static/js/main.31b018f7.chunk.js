(this.webpackJsonpmapbox=this.webpackJsonpmapbox||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){},17:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),l=a(4),s=a.n(l),i=(a(14),a(5)),r=a(6),c=a(1),m=a(8),u=a(7),p=a(2),d=a.n(p);a(15);d.a.accessToken="pk.eyJ1IjoiNWFhZCIsImEiOiJjazlqeGo4YzUwMnhoM2pxYWQ3Z3gyMW1vIn0.FVlTmXS_ksLqzGwz9VTCdQ";var h=function(t){Object(m.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).mapRef=o.a.createRef(),n.setstyl=function(){var t=n.state.mapStyle;console.log(t),n.map.setStyle("mapbox://styles/mapbox/"+t)},n.handleStyle=function(t){console.log(t.target.value),n.setState({mapStyle:t.target.value})},n.state={lng:5,lat:34,zoom:2,mapStyle:"streets-v11"},n.handleStyle=n.handleStyle.bind(Object(c.a)(n)),n}return Object(r.a)(a,[{key:"componentDidUpdate",value:function(){this.setstyl()}},{key:"componentDidMount",value:function(){var t=this;this.map=new d.a.Map({container:this.mapContainer,style:"mapbox://styles/mapbox/"+this.state.mapStyle,center:[this.state.lng,this.state.lat],zoom:this.state.zoom});var e=new d.a.NavigationControl({container:this.mapContainer});this.map.addControl(e),this.map.on("move",(function(){t.setState({lng:t.map.getCenter().lng.toFixed(4),lat:t.map.getCenter().lat.toFixed(4),zoom:t.map.getZoom().toFixed(2)})})),this.map.on("click",(function(){t.setState({lng:t.map.getCenter().lng.toFixed(4),lat:t.map.getCenter().lat.toFixed(4),zoom:t.map.getZoom().toFixed(2)})})),this.setstyl()}},{key:"render",value:function(){var t=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"sidebarStyle"},o.a.createElement("div",null,"Longitude: ",this.state.lng," | Latitude: ",this.state.lat," | Zoom:"," ",this.state.zoom)),o.a.createElement("div",{className:"buttonStyle"},o.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Basic example"},o.a.createElement("button",{type:"button",className:"btn btn-secondary",value:"streets-v11",onClick:function(e){t.handleStyle(e)}},"streets"),o.a.createElement("button",{type:"button",className:"btn btn-secondary",value:"satellite-v9",onClick:function(e){return t.handleStyle(e)}},"satellite"),o.a.createElement("button",{type:"button",className:"btn btn-secondary",value:"light-v10",onClick:function(e){return t.handleStyle(e)}},"Light"))),o.a.createElement("div",{ref:function(e){return t.mapContainer=e},className:"mapContainer"}))}}]),a}(o.a.Component);a(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},9:function(t,e,a){t.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.31b018f7.chunk.js.map