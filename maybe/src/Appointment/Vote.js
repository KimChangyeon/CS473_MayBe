import React, {Component} from 'react';
import Popup from 'reactjs-popup';
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
			vote_result: [
				{
					DateId : 20191128,
					EndTime : 14,
					StartTime : 13,
					UserName : "guest"
				}
			],
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
		const bar = <div className="Bar">
                        Vote Meeting Time
                        <Popup
                        trigger={<img id="help" src={help} alt="help" style = {{
							height: 35,
							width: 35,
							position: 'relative',
							left: 430,
							top: -30,
						}
						}/>} 
                        position = "left top"
                        contentStyle={{width: "270px",zindex: 9999}}>
						{close => (
							<div className="instruction" style={{margin: "15px"}}>
								<b>Vote Meeting Time!</b><hr/>
                                When do you want to meet your friends?<br/>
                                Choose desirable timeslots <br/>
								- The more friends choose certain timeslots, <br/>
								  the darker the color of timeslots becomes<br/>
								- You can check friends  <br/>
								  who completed vote by clicking animal icons <br/>
								<b> Warning </b><hr/>
								Once you push 'Complete' button, you cannot vote again! <br/>
								So please think carefully!<br/>								
                                <br/>
                                <Button variant="outlineflat" style={{float: "right"}}
                                    onClick={()=>{close()}}>OK</Button>
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
						vote_result = {this.state.vote_result}
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
