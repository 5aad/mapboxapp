(this.webpackJsonpmapbox=this.webpackJsonpmapbox||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){},17:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),l=a(4),s=a.n(l),i=(a(14),a(5)),r=a(6),c=a(1),m=a(8),u=a(7),d=a(2),h=a.n(d);a(15);h.a.accessToken="pk.eyJ1IjoiNWFhZCIsImEiOiJjazlqeGo4YzUwMnhoM2pxYWQ3Z3gyMW1vIn0.FVlTmXS_ksLqzGwz9VTCdQ";var p=function(t){Object(m.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).handleIncrement=function(){var t=parseFloat(n.state.zoom);t<parseFloat(22)&&n.setState({zoom:t+parseFloat(1)})},n.handleDecrement=function(){var t=parseFloat(n.state.zoom);t>parseFloat(2)&&n.setState({zoom:t-parseFloat(1)})},n.handleStyle=function(t){n.setState({mapStyle:t.target.value})},n.state={lng:5,lat:34,zoom:2,mapStyle:"streets-v11"},n.handleStyle=n.handleStyle.bind(Object(c.a)(n)),n}return Object(r.a)(a,[{key:"componentDidUpdate",value:function(){var t=this;console.log("update");var e=new h.a.Map({container:this.mapContainer,style:"mapbox://styles/mapbox/"+this.state.mapStyle,center:[this.state.lng,this.state.lat],zoom:this.state.zoom});e.on("move",(function(){t.setState({lng:e.getCenter().lng.toFixed(4),lat:e.getCenter().lat.toFixed(4),zoom:e.getZoom().toFixed(2)})}))}},{key:"shouldComponentUpdate",value:function(t,e){return e.zoom!==this.state.zoom||e.mapStyle!==this.state.mapStyle}},{key:"componentDidMount",value:function(){var t=this,e=new h.a.Map({container:this.mapContainer,style:"mapbox://styles/mapbox/"+this.state.mapStyle,center:[this.state.lng,this.state.lat],zoom:this.state.zoom});e.on("move",(function(){t.setState({lng:e.getCenter().lng.toFixed(4),lat:e.getCenter().lat.toFixed(4),zoom:e.getZoom().toFixed(2)})}))}},{key:"render",value:function(){var t=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"sidebarStyle"},o.a.createElement("div",null,"Longitude: ",this.state.lng," | Latitude: ",this.state.lat," | Zoom:"," ",this.state.zoom)),o.a.createElement("div",{className:"buttonStyle"},o.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Basic example"},o.a.createElement("button",{type:"button",className:"btn btn-secondary",value:"streets-v11",onClick:function(e){t.handleStyle(e)}},"streets"),o.a.createElement("button",{type:"button",className:"btn btn-secondary",value:"satellite-v9",onClick:function(e){return t.handleStyle(e)}},"satellite"),o.a.createElement("button",{type:"button",className:"btn btn-secondary",value:"light-v10",onClick:function(e){return t.handleStyle(e)}},"Light"),o.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:this.handleIncrement}," +"),o.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:this.handleDecrement}," -"))),o.a.createElement("div",{ref:function(e){return t.mapContainer=e},className:"mapContainer"}))}}]),a}(o.a.Component);a(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},9:function(t,e,a){t.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.cb19b4ad.chunk.js.map