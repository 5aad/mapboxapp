import React from "react";
import mapboxgl from "mapbox-gl";
import "./size.css";
import { MAPBOX_KEY } from "./MapboxAPIkey";


mapboxgl.accessToken = MAPBOX_KEY;
class Map extends React.Component {
    mapRef = React.createRef();
    map;
  
    constructor(props) {
      super(props);
      this.state = {
      lng: 5,
      lat: 34,
      zoom: 2,
      //is ki state change karni hai 
  
      mapStyle:"streets-v11"
      };
      this.handleStyle=this.handleStyle.bind(this)
      }
    //   handleIncrement=()=>{
    //     let zo = parseFloat(this.state.zoom)
        
    //     if(zo<parseFloat(22))
    //         this.setState({
    //           zoom:zo+parseFloat(1)
    //         })
    //   }
    //   handleDecrement=()=>{
    //     let zo = parseFloat(this.state.zoom)
    //     if(zo>parseFloat(2))
    //         this.setState({
    //           zoom:zo-parseFloat(1)
    //         })
    //   }
      
  
       componentDidUpdate() {
        this.setstyl()
        
      } 
      setstyl=()=>{
        const style=this.state.mapStyle
        console.log(style)
        this.map.setStyle('mapbox://styles/mapbox/'+ style)
        
      }
      // shouldComponentUpdate(nextProps,nextState){
        
      //   if(nextState.mapStyle!==this.state.mapStyle){
      //     return true
      //   }
      //   return false
      // }
      componentDidMount(){
         this.map = new mapboxgl.Map({
          container: this.mapContainer,
          //satellite-v9
          //light-v10
          style: ('mapbox://styles/mapbox/'+ this.state.mapStyle),
          center: [this.state.lng, this.state.lat],
          zoom: this.state.zoom
          });
  
          const nav = new mapboxgl.NavigationControl({
            container: this.mapContainer,
        })
        this.map.addControl(nav)
           
        this.map.on('move', () => {
          this.setState({
          lng: this.map.getCenter().lng.toFixed(4),
          lat: this.map.getCenter().lat.toFixed(4),
          zoom: this.map.getZoom().toFixed(2)
          });
          });
          this.map.on('click', () => {
            this.setState({
            lng: this.map.getCenter().lng.toFixed(4),
            lat: this.map.getCenter().lat.toFixed(4),
            zoom: this.map.getZoom().toFixed(2)
            });
            });
          this.setstyl()
      }
   
      handleStyle=(e)=>{
         console.log(e.target.value)
          this.setState({
            mapStyle:e.target.value
          })
         
      }
  render() {
    return (
      <div>
        <div className="sidebarStyle">
          <div>
            Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{" "}
            {this.state.zoom}
          </div>
        </div>
        <div className="buttonStyle">
          <div className="btn-group" role="group" aria-label="Basic example">
          <button   type="button" className="btn btn-secondary" value="streets-v11" onClick={(e)=>{this.handleStyle(e)}}>streets</button>
      <button  type="button" className="btn btn-secondary" value="satellite-v9" onClick={(e)=>this.handleStyle(e)}>satellite</button>
      <button   type="button" className="btn btn-secondary" value="light-v10" onClick={(e)=>this.handleStyle(e)}>Light</button>
     
      {/* Custom Zoom buttons */}
      {/* <button  type="button" className="btn btn-secondary" onClick={this.handleIncrement}> +</button>
      <button   type="button" className="btn btn-secondary" onClick={this.handleDecrement}> -</button> */}
          </div>
        </div>
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}

export default Map;
