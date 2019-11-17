import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './App.css';

/* Icons */
import complete from './img/button_complete.png';
import cancel from './img/button_cancel.png';

class Location extends Component {
	constructor (props) {
    super(props);
    this.state = {marker: this.props.marker};
    this.onClick = this.onClick.bind(this);
  }

	onClick(t, map, coord) {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();

		this.setState({marker: {lat, lng}});
  }

	render () {
		const button =
			<ul>
				<li> <img className="complete" src={complete} alt="Complete"
						  onClick={()=>{this.props.setMarker(this.state); this.props.nextStage(0)}}/> </li>
        <li> <img className="cancel" src={cancel} alt="Cancel"
              onClick={()=>this.props.nextStage(0)}/> </li>
			</ul>
    const bar = <div className="Bar">Choose Meeting Point</div>;
    const header = this.props.header(bar,button);
		const body = <body className= "Body">
				<Map
          google={this.props.google}
          zoom={14.2}
          style={{width: "500px", height: "400px"}}
          initialCenter={{ lat: 36.368, lng: 127.355 }}
          onClick={this.onClick}
        >
          <Marker position={this.state.marker}/>
        </Map>
			</body>
		const content = <div>{header}{body}</div>

		return content;
	}
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCAHy6pMMY8-Ef4Vjo_izrt_Zdmv_Q_7B4"
})(Location);
