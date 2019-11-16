import React, {Component} from 'react';
import './App.css';

/* Icons */
import complete from './img/button_complete.png';
import cancel from './img/button_cancel.png';

class Location extends Component {
	render () {
		const button =
			<ul>
				<li> <img className="complete" src={complete} onClick={()=>this.props.nextStage(0)}/> </li>
				<li> <img className="cancel" src={cancel} onClick={()=>this.props.nextStage(0)}/> </li>
			</ul>
    const bar = <div className="Bar">Choose Meeting Point</div>;
    const header = this.props.header(bar,button);
    const body =
			<body className= "Body">
				Location
			</body>
		const content = <div>{header}{body}</div>;

		return content;
	}
}

export default Location;

