import React, {Component} from 'react';
import '../App.css';
import ChooseTable from './ChooseTable';

/* Icons */
import complete from '../img/button_complete.png';
import cancel from '../img/button_cancel.png';

class Vote extends Component {

	constructor (props) {
		super(props);
		this.state = {
			AppointmentId: this.props.AppointmentId,
			AppointmentTime: [],
			vote_result: [],
		}
	}

	componentWillMount () {
		var url_vote = '/vote_result/'.concat(this.props.AppointmentId);
		fetch(url_vote)
			.then(res => res.json())
			.then(answer => this.setState({vote_result: answer.data}))        
		.catch((error)=>{
			console.log('Error fetching man',error);
		});
		console.log(this.state.vote_result);
	}

	render () {
		const button =
			<ul>
				<li> <img className="complete" src={complete} alt="Complete"
						onClick={()=>this.props.nextStageWithAppointment(0,0)}/> </li>
				<li> <img className="cancel" src={cancel} alt="Cancel"
						onClick={()=>this.props.nextStageWithAppointment(0,0)}/> </li>
			</ul>
    const bar = <div className="Bar">Vote Meeting Time</div>;
    const header = this.props.header(bar,button);
    const body =
			<body className= "Body">
				<ChooseTable 
					type = "Vote"
					AppointmentTime = {this.props.AppointmentTime}
				/>
			</body>
		const content = <div>{header}{body}</div>;

		return content;
	}
}

export default Vote;
