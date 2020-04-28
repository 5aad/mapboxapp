import React from 'react';
import mapboxgl from 'mapbox-gl';
import './App.css';

//env sai is mai token ka karna
mapboxgl.accessToken = 'pk.eyJ1IjoiNWFhZCIsImEiOiJjazlqeGo4YzUwMnhoM2pxYWQ3Z3gyMW1vIn0.FVlTmXS_ksLqzGwz9VTCdQ';
//https://docs.mapbox.com/mapbox-gl-js/example/setstyle/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    lng: 5,
    lat: 34,
    //Zoom ki value change karana hai 
//     0	The Earth
// 3	A continent
// 4	Large islands
// 6	Large rivers
// 10	Large roads
// 15	Buildings
    zoom: 2,
    //is ki state change karni hai 
    mapStyle:"streets-v11"
    };
    }


     
    componentDidMount() {
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
    }
    render(){
  return (
    <div>
    <div className='sidebarStyle'>
    <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
    </div>
    <div className="buttonStyle">
    <div class="btn-group" role="group" aria-label="Basic example">
  <button   type="button" class="btn btn-secondary">streets</button>
  <button  type="button" class="btn btn-secondary">satellite</button>
  <button   type="button" class="btn btn-secondary">Light</button>
  <button  type="button" class="btn btn-secondary"> +</button>
  <button   type="button" class="btn btn-secondary"> -</button>
</div>
</div>
    <div ref={el => this.mapContainer = el} className='mapContainer' />
    </div>
  );
}
}

export default App;
