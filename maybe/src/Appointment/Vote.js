import React, {Component} from 'react';
import Popup from 'reactjs-popup';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import '../App.css';
import ChooseTable from './ChooseTable';

/* Icons */
import complete from '../img/button_complete.png';
import cancel from '../img/button_cancel.png';
import help from '../img/help.png';
import {Button} from 'react-bootstrap';

class Vote extends Component {

	constructor (props) {
		super(props);
		this.state = {
			AppointmentId: this.props.AppointmentId,
			AppointmentTime: [],
			choiceDate : []
		}
	}

	updateChoice = (updated) => {
		this.setState({choiceDate : updated})
		console.log(this.state.updated)
	}

	render () {
		const button =
			<ul>
				<li> <img className="complete" src={complete} alt="Complete"
						onClick={()=>this.props.nextStageWithAppointment(0,0)}/> </li>
				<li> <img className="cancel" src={cancel} alt="Cancel"
						onClick={()=>this.props.nextStageWithAppointment(0,0)}/> </li>
			</ul>
		const bar = 
			<div className="Bar">
				Vote Meeting Time
				<Popup
				trigger={<a href="#"><HelpRoundedIcon style={{width: "23px", position: "relative", left: "10px", top: "-1px"}}/></a>} 
				contentStyle={{width: "352px",zindex: 9999}}>
				{close => (
					<div className="instruction" style={{margin: "15px"}}>
						<b className="title">Vote Meeting Time!</b><hr/>
						When do you want to meet your friends?<br/>
						Choose desirable timeslots.<br/>
						- The more friends choose certain timeslots, the darker the color of timeslots becomes.<br/>
						- You can check friends who completed vote by clicking animal icons.<br/>
						<br/>
						<b className="title"> Warning </b><hr/>
						Once you push 'Complete' button, <b>you cannot vote again!</b> <br/>
						So please think carefully!<br/>								
					</div>
				)}
				</Popup>
			</div>;
		const header = this.props.header(bar,button);
		const body =
				<body className= "Body">
					<ChooseTable 
						type = "Vote"
						AppointmentTime = {this.props.AppointmentTime}
						AppointmentId = {this.state.AppointmentId}
						updateChoice = {this.updateChoice}
					/>
				</body>
		const content = <div>
							{header}
							{body}
						</div>;

		return content;
	}
}

export default Vote;
