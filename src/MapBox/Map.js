import React from "react";
import mapboxgl from "mapbox-gl";
import "./size.css";
import firebase from "./Firebase";
import moment from "moment";
// import ReactDOM from "react-dom";
import { MAPBOX_KEY } from "./MapboxAPIkey";

mapboxgl.accessToken = MAPBOX_KEY;

// const el = document.createElement("div");
// el.className = "marker";
// ReactDOM.render(<div className="marker" />, el);

class Map extends React.Component {
  mapRef = React.createRef();
  map;mapMarker;

  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      buttonClick:false,
      lng: 5,
      lat: 34,
      zoom: 2,
      mapStyle: "streets-v11",
      data: null,
      collName: "youtubeLinks",
      docName: "IjNLTwdUDVxPafFFRABO",
    };
    this.handleStyle = this.handleStyle.bind(this);
    this.handleCollName = this.handleCollName.bind(this);
  }

  async componentDidUpdate() {
    this.setstyl();
    if(this.state.buttonClick===true){
      this.setState({
        buttonClick:false
      })
      console.log("CDidM",this.state.collName,this.state.docName)
      const collectionName = this.state.collName;
      const docName = this.state.docName;
     
      
      console.log(this.mapMarker)
      //this.mapMarker.remove()
       // this.mapMarker.remove()
       if (this.mapMarker!==null) {
        for (var i = this.mapMarker.length - 1; i >= 0; i--) {
          this.mapMarker[i].remove();
        }
    }
        firebase
        .firestore()
        .collection(collectionName) //GeoData your collection name IjNLTwdUDVxPafFFRABO
        .doc(docName) //b3f71fd0-9687-11ea-8845-ab92e09d1e9d & 17305fa096b3-11a-b477-03342e794c0b your document ID
        .get()
        .then((doc) => {
          if (doc.exists) {
            let data = doc.data();
            console.log()
            this.setState({ data: data });
            console.log("Document data:", this.state.data);
            let markers;
            let m=[]
            data.features.forEach((marker) => {
            
              const c = marker.properties.CreateDate;
              const o = marker.properties.OpenDate;
              // console.log("Doc:", moment(o, "YYYYMMDD").toDate().toDateString());
             markers= new mapboxgl.Marker(this.mapMarker)
                .setLngLat(marker.geometry.coordinates)
                .setPopup(
                  new mapboxgl.Popup({ offset: 25 }) // add popups
                    .setHTML(
                      "<p>" +
                        marker.properties.Id +
                        "</p>" +
                        "<p>" +
                        marker.properties.Name +
                        "</p>" +
                        "<p>" +
                        marker.properties.OpenStat +
                        "</p>" +
                        "<p>" +
                        marker.properties.MaxJoinNum +
                        "</p>" +
                        "<p>" +
                        marker.properties.MinJoinNum +
                        "</p>" +
                        "<p>" +
                        moment(c, "YYYYMMDD").toDate().toDateString() +
                        "</p>" +
                        "<p>" +
                        moment(o, "YYYYMMDD").toDate().toDateString() +
                        "</p>"
                    )
                )
                .addTo(this.map);
                m.push(markers)
                
            });
           this.mapMarker=m
          } else {
            // doc.data() will be undefined in this case
            this.setState({ data: null });
            console.log("No such document!");
          }
        })
        .catch((error) => {
          this.setState({ data: null });
          console.log("Error getting document:", error);
        });
      
    }
  }
  setstyl = () => {
    const style = this.state.mapStyle;
    // console.log(style);
    this.map.setStyle("mapbox://styles/mapbox/" + style);
  };


  async componentDidMount() {

    console.log("CDidM",this.state.collName)
    
    const collectionName = this.state.collName;
    const docName = this.state.docName;
    firebase
      .firestore()
      .collection(collectionName) //GeoData your collection name IjNLTwdUDVxPafFFRABO
      .doc(docName) //b3f71fd0-9687-11ea-8845-ab92e09d1e9d & 17305fa096b3-11a-b477-03342e794c0b your document ID
      .get()
      .then((doc) => {
        if (doc.exists) {
          let data = doc.data();

          this.setState({ data: data });
          console.log("Document data:", this.state.data);
          let markers;
          let m=[]
          this.state.data.features.forEach((marker) => {
            const c = marker.properties.CreateDate;
            const o = marker.properties.OpenDate;
            // console.log("Doc:", moment(o, "YYYYMMDD").toDate().toDateString());
            markers=new mapboxgl.Marker(this.mapMarker)
              .setLngLat(marker.geometry.coordinates)
              .setPopup(
                new mapboxgl.Popup({ offset: 25 }) // add popups
                  .setHTML(
                    "<p>" +
                      marker.properties.Id +
                      "</p>" +
                      "<p>" +
                      marker.properties.Name +
                      "</p>" +
                      "<p>" +
                      marker.properties.OpenStat +
                      "</p>" +
                      "<p>" +
                      marker.properties.MaxJoinNum +
                      "</p>" +
                      "<p>" +
                      marker.properties.MinJoinNum +
                      "</p>" +
                      "<p>" +
                      moment(c, "YYYYMMDD").toDate().toDateString() +
                      "</p>" +
                      "<p>" +
                      moment(o, "YYYYMMDD").toDate().toDateString() +
                      "</p>"
                  )
              )
              .addTo(this.map);
              m.push(markers)
              
          });
         this.mapMarker=m
        } else {
          // doc.data() will be undefined in this case
          this.setState({ data: null });
          console.log("No such document!");
        }
      })
      .catch((error) => {
        this.setState({ data: null });
        console.log("Error getting document:", error);
      });
    

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      //satellite-v9
      //light-v10
      style: "mapbox://styles/mapbox/" + this.state.mapStyle,
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    const nav = new mapboxgl.NavigationControl();
    this.map.addControl(nav);

    this.setstyl();
  }

  handleStyle = (e) => {
    this.setState({
      mapStyle: e.target.value,
    });
  };

  handleCollName = (e) => {
    console.log("e.target",e.target.value);
    const colName = e.target.value.split('/')[0]
    const docName = e.target.value.split('/')[1]
    this.setState({
      collName: colName,
      docName: docName,
      buttonClick:true
    });
  };



  render() {
    console.log("render",this.state.collName)
    return (
      <div>
        <div className="buttonStyle">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-secondary"
              value="streets-v11"
              onClick={(e) => {
                this.handleStyle(e);
              }}
            >
              streets
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              value="satellite-v9"
              onClick={(e) => this.handleStyle(e)}
            >
              satellite
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              value="light-v10"
              onClick={(e) => this.handleStyle(e)}
            >
              Light
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              value="anotherPins/gfXLsVKg0v4gK6R4JUZ8"
              onClick={(e) => this.handleCollName(e)}
            >
              new pin
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              value="youtubeLinks/IjNLTwdUDVxPafFFRABO"
              onClick={(e) => this.handleCollName(e)}
            >
              previous pins
            </button>
          </div>
        </div>
        {/* <div ref={(el) => (this.mapMarker = el)} className="marker" /> */}
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}

export default Map;