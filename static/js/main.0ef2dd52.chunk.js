(this.webpackJsonpmapbox=this.webpackJsonpmapbox||[]).push([[0],{21:function(t,e,a){t.exports=a(42)},26:function(t,e,a){},28:function(t,e,a){},42:function(t,e,a){"use strict";a.r(e);var n=a(2),o=a.n(n),r=a(16),s=a.n(r),l=(a(26),a(9)),i=a.n(l),c=a(13),p=a(17),u=a(18),m=a(8),d=a(20),h=a(19),f=a(6),b=a.n(f),g=(a(28),a(14));g.initializeApp({apiKey:"AIzaSyAWCoub6quvjEY-I4sAO3hcTlBEAfaDcc8",authDomain:"app-6d62c.firebaseapp.com",databaseURL:"https://app-6d62c.firebaseio.com",projectId:"app-6d62c",storageBucket:"app-6d62c.appspot.com",messagingSenderId:"1075551474912",appId:"1:1075551474912:web:776b6d2da0cf2d8392ac85",measurementId:"G-8V8W0JLNRE"});var v=g,y=a(10),N=a.n(y);b.a.accessToken="pk.eyJ1IjoiNWFhZCIsImEiOiJjazlqeGo4YzUwMnhoM2pxYWQ3Z3gyMW1vIn0.FVlTmXS_ksLqzGwz9VTCdQ";var k=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(p.a)(this,a),(n=e.call(this,t)).mapRef=o.a.createRef(),n.setstyl=function(){var t=n.state.mapStyle;n.map.setStyle("mapbox://styles/mapbox/"+t)},n.handleStyle=function(t){n.setState({mapStyle:t.target.value})},n.handleCollName=function(t){console.log("e.target",t.target.value);var e=t.target.value.split("/")[0],a=t.target.value.split("/")[1];n.setState({collName:e,docName:a,buttonClick:!0})},n.unsubscribe=null,n.state={buttonClick:!1,lng:5,lat:34,zoom:2,mapStyle:"streets-v11",data:null,collName:"youtubeLinks",docName:"IjNLTwdUDVxPafFFRABO"},n.handleStyle=n.handleStyle.bind(Object(m.a)(n)),n.handleCollName=n.handleCollName.bind(Object(m.a)(n)),n}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(){var t=Object(c.a)(i.a.mark((function t(){var e,a,n,o=this;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.setstyl(),!0===this.state.buttonClick){if(this.setState({buttonClick:!1}),console.log("CDidM",this.state.collName,this.state.docName),e=this.state.collName,a=this.state.docName,console.log(this.mapMarker),null!==this.mapMarker)for(n=this.mapMarker.length-1;n>=0;n--)this.mapMarker[n].remove();v.firestore().collection(e).doc(a).get().then((function(t){if(t.exists){var e,a=t.data();console.log(),o.setState({data:a}),console.log("Document data:",o.state.data);var n=[];a.features.forEach((function(t){var a=t.properties.CreateDate,r=t.properties.OpenDate;e=new b.a.Marker(o.mapMarker).setLngLat(t.geometry.coordinates).setPopup(new b.a.Popup({offset:25}).setHTML("<p>"+t.properties.Id+"</p><p>"+t.properties.Name+"</p><p>"+t.properties.OpenStat+"</p><p>"+t.properties.MaxJoinNum+"</p><p>"+t.properties.MinJoinNum+"</p><p>"+N()(a,"YYYYMMDD").toDate().toDateString()+"</p><p>"+N()(r,"YYYYMMDD").toDate().toDateString()+"</p>")).addTo(o.map),n.push(e)})),o.mapMarker=n}else o.setState({data:null}),console.log("No such document!")})).catch((function(t){o.setState({data:null}),console.log("Error getting document:",t)}))}case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var t=Object(c.a)(i.a.mark((function t(){var e,a,n,o=this;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("CDidM",this.state.collName),e=this.state.collName,a=this.state.docName,v.firestore().collection(e).doc(a).get().then((function(t){if(t.exists){var e,a=t.data();o.setState({data:a}),console.log("Document data:",o.state.data);var n=[];o.state.data.features.forEach((function(t){var a=t.properties.CreateDate,r=t.properties.OpenDate;e=new b.a.Marker(o.mapMarker).setLngLat(t.geometry.coordinates).setPopup(new b.a.Popup({offset:25}).setHTML("<p>"+t.properties.Id+"</p><p>"+t.properties.Name+"</p><p>"+t.properties.OpenStat+"</p><p>"+t.properties.MaxJoinNum+"</p><p>"+t.properties.MinJoinNum+"</p><p>"+N()(a,"YYYYMMDD").toDate().toDateString()+"</p><p>"+N()(r,"YYYYMMDD").toDate().toDateString()+"</p>")).addTo(o.map),n.push(e)})),o.mapMarker=n}else o.setState({data:null}),console.log("No such document!")})).catch((function(t){o.setState({data:null}),console.log("Error getting document:",t)})),this.map=new b.a.Map({container:this.mapContainer,style:"mapbox://styles/mapbox/"+this.state.mapStyle,center:[this.state.lng,this.state.lat],zoom:this.state.zoom}),n=new b.a.NavigationControl,this.map.addControl(n),this.setstyl();case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return console.log("render",this.state.collName),o.a.createElement("div",null,o.a.createElement("div",{className:"buttonStyle"},o.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Basic example"},o.a.createElement("button",{type:"button",className:"btn btn-secondary",value:"streets-v11",onClick:function(e){t.handleStyle(e)}},"streets"),o.a.createElement("button",{type:"button",className:"btn btn-secondary",value:"satellite-v9",onClick:function(e){return t.handleStyle(e)}},"satellite"),o.a.createElement("button",{type:"button",className:"btn btn-secondary",value:"light-v10",onClick:function(e){return t.handleStyle(e)}},"Light"),o.a.createElement("button",{type:"button",className:"btn btn-secondary",value:"anotherPins/gfXLsVKg0v4gK6R4JUZ8",onClick:function(e){return t.handleCollName(e)}},"new pin"),o.a.createElement("button",{type:"button",className:"btn btn-secondary",value:"youtubeLinks/IjNLTwdUDVxPafFFRABO",onClick:function(e){return t.handleCollName(e)}},"previous pins"))),o.a.createElement("div",{ref:function(e){return t.mapContainer=e},className:"mapContainer"}))}}]),a}(o.a.Component);a(41),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.0ef2dd52.chunk.js.map