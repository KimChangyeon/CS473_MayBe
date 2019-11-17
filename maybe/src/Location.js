import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { InputGroup, FormControl } from 'react-bootstrap';
import './App.css';

/* Icons */
import complete from './img/button_complete.png';
import cancel from './img/button_cancel.png';

class Location extends Component {
	constructor (props) {
    super(props);
    this.state = {
			initialCenter: this.props.initialCenter,
			marker: this.props.marker,
			place: null
		};
    this.onClick = this.onClick.bind(this);
		this.onChange = this.onChange.bind(this);
  }

	onClick(t, map, coord) {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();

		this.setState({
			marker: {lat, lng},
			initialCenter: {lat, lng}
		});
  }

	onChange (e) {
		const value = e.target.value == "" ? null : e.target.value;
		this.setState({
			place: value
		});
	}

	render () {
		const button =
			<ul>
				<li>
						<img className="complete" src={complete} alt="Complete"
						  onClick={() => {
								this.props.setMarker({marker: this.state.marker});
								this.props.setPlace({place: this.state.place});
								this.props.nextStage(0);
							}}/>
				</li>
        <li>
						<img className="cancel" src={cancel} alt="Cancel"
              onClick={() => this.props.nextStage(0)}/>
				</li>
			</ul>
    const bar = <div className="Bar">Choose Meeting Point</div>;
    const header = this.props.header(bar,button);
		const body = <body className= "Body">
				<InputGroup className="mb-3">
					<InputGroup.Prepend>
						<InputGroup.Text id="basic-addon1">Place</InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl
						placeholder="Enter where to meet"
						onChange={this.onChange}
						// aria-label="Place"
						// aria-describedby="basic-addon1"
					/>
				</InputGroup>
				<Map
          google={this.props.google}
          zoom={14.2}
          style={{width: "500px", height: "380px"}}
          initialCenter={this.state.initialCenter}
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
