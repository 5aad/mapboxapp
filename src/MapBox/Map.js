import React from "react";
import mapboxgl from "mapbox-gl";
import "./size.css";
import { MAPBOX_KEY } from "./MapboxAPIkey";


mapboxgl.accessToken = MAPBOX_KEY;
class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        lng: 5,
        lat: 34,
        zoom: 2, 
    
        mapStyle:"streets-v11"
        };
        this.handleStyle=this.handleStyle.bind(this)
        }

        //Custom Zoom Logic
        // handleIncrement=()=>{
        //   let zo = parseFloat(this.state.zoom)
          
        //   if(zo<parseFloat(22))
        //       this.setState({
        //         zoom:zo+parseFloat(1)
        //       })
        // }
        // handleDecrement=()=>{
        //   let zo = parseFloat(this.state.zoom)
        //   if(zo>parseFloat(2))
        //       this.setState({
        //         zoom:zo-parseFloat(1)
        //       })
        // }
        

    
        componentDidUpdate() {
          console.log('update')
        const map = new mapboxgl.Map({
        container: this.mapContainer,
        //satellite-v9
        //light-v10
        style: ('mapbox://styles/mapbox/'+ this.state.mapStyle),
        center: [this.state.lng, this.state.lat],
        zoom: this.state.zoom
        });
        
 
        const nav = new mapboxgl.NavigationControl()
        map.addControl(nav)
        
        map.on('move', () => {
        this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        // zoom: map.getZoom().toFixed(2)
        });
        });
        }
        
        shouldComponentUpdate(nextProps,nextState){
          
          if( nextState.zoom!==this.state.zoom)
              return true
          if(nextState.mapStyle!==this.state.mapStyle){
            return true
          }
          return false
        }
        componentDidMount(){
          const map = new mapboxgl.Map({
            container: this.mapContainer,
            //satellite-v9
            //light-v10
            style: ('mapbox://styles/mapbox/'+ this.state.mapStyle),
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
            });
             
            map.on('move', () => {
            this.setState({
            lng: map.getCenter().lng.toFixed(4),
            lat: map.getCenter().lat.toFixed(4),
            zoom: map.getZoom().toFixed(2)

            });
            });
            const nav = new mapboxgl.NavigationControl()
            map.addControl(nav)
        }
     
        handleStyle=(e)=>{
            this.setState({
              mapStyle:e.target.value
            })
           
        }
  render() {
    return (
      <div>
        {/* <div className="sidebarStyle">
          <div>
            Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{" "}
            {this.state.zoom}
          </div>
        </div> */}
        <div className="buttonStyle">
          <div className="btn-group" role="group" aria-label="Basic example">
          <button   type="button" className="btn btn-secondary" value="streets-v11" onClick={(e)=>{this.handleStyle(e)}}>streets</button>
      <button  type="button" className="btn btn-secondary" value="satellite-v9" onClick={(e)=>this.handleStyle(e)}>satellite</button>
      <button   type="button" className="btn btn-secondary" value="light-v10" onClick={(e)=>this.handleStyle(e)}>Light</button>
      <button   type="button" className="btn btn-secondary" value="dark-v10" onClick={(e)=>this.handleStyle(e)}>Dark</button>
      <button   type="button" className="btn btn-secondary" value="outdoors-v11" onClick={(e)=>this.handleStyle(e)}>Outdoors</button>
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
