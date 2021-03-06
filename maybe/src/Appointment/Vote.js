import React, {Component} from 'react';
import Popup from 'reactjs-popup';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import '../App.css';
import ChooseTable from './ChooseTable';

/* Icons */
import complete from '../img/button_complete.png';
import cancel from '../img/button_cancel.png';


let fakeData = [
    {
        DateId : 20191202,
        EndTime : 14,
        StartTime : 13,
		name : "guest",
	},
	{
		DateId : 20191203,
        EndTime : 15,
        StartTime : 13,
		name : "jisu",
	}
]

class Vote extends Component {

	constructor (props) {
		super(props);
		this.state = {
			AppointmentId: this.props.AppointmentId,
			AppointmentTime: [],
			choiceDate : [],
			l: 1,
			vote_result : [],
			decision: '',
		}
	}

	updateChoice = (updated) => {
		this.setState({choiceDate : updated})
		console.log(this.state.updated)
	}

	voting (slot) {
		var UserId = this.props.user_id;
		var DateId = slot.DateId;
		var StartTime = slot.StartTime;
		var EndTime = slot.EndTime;
		var url_vote = '/votee/'.concat(this.props.AppointmentId).concat('/').concat(UserId).concat('/').concat(DateId).concat('/').concat(StartTime).concat('/').concat(EndTime);
		console.log(url_vote);
		fetch(url_vote, {method: "POST"})
			.then(res => res.json())
			.then(answer => console.log(answer.data))
	}

	componentWillMount () {
		var url_vote = '/vote_result/'.concat(this.state.AppointmentId);
		fetch(url_vote)
			.then(res => res.json())
			.then(answer => this.setState({ vote_result : answer.data }))   
		.catch((error)=>{
			console.log('Error fetching man',error);
			// this.setState({ vote_result :  fakeData})
		});
	}

	Complete () {
		var promises = [];
		var candidates = [];
		var slot = this.state.choiceDate;
		if (slot.length > 0) {
			for (var i = 0 ; i < slot.length ; i++) {
				var answer = {};
				var day = slot[i];
				if (day.time.length > 0) {
					answer.DateId = day.id;
					answer.StartTime = day.time[0].slice(0,2);
					answer.EndTime = day.time[0].slice(3,5);
					candidates.push(answer);
				}
			}
		}
		console.log(candidates);
		for (var j = 0 ; j < candidates.length ; j ++) {
			var cand = candidates[j];
			var UserId = this.props.user_id;
			var DateId = cand.DateId;
			var StartTime = cand.StartTime;
			var EndTime = cand.EndTime;
			var url_vote = '/vote2/'.concat(this.props.AppointmentId).concat('/').concat(UserId).concat('/').concat(DateId).concat('/').concat(StartTime).concat('/').concat(EndTime);
			console.log(url_vote);
			promises.push(
			fetch(url_vote, {method: "POST"})
			.then(res => res.json())
			.then(answer => console.log(answer.data))
				)
		}

		var url_decision = '/vote_decision/'.concat(this.props.AppointmentId);
		promises.push(
		fetch(url_decision)
		.then(res => res.json())
		.then(answer => this.setState({decision: answer.data[0].decision}))
			)

		Promise
			.all(promises)
			.then(this.setState({l: 0}))

	}

	render () {

		if (this.state.l === 0){
			if (this.state.decision === 'true') {
				var url_time = '/modify_time/'.concat(this.props.AppointmentId);
				console.log(url_time);
				fetch(url_time, {method: "POST"})
					.then(answer => console.log(answer.data))
				alert('MAKING APPOINTMENT COMPLETED.');
				this.setState({decision: ""});
				this.props.nextStageWithAppointment(0,0)
			}

			else if (this.state.decision === 'false') {
				alert('VOTING COMPLETED.');
				this.setState({decision: ""});
				this.props.nextStageWithAppointment(0,0)
			}
		}
		console.log("vote result in vote.js : ", this.state.vote_result)
		const button =
			<div style={{textAlign: "center", marginTop: "20px"}}>
				<img className="cancel" src={cancel} alt="Cancel"
						onClick={()=>this.props.nextStageWithAppointment(0,0)}/>
				<img className="complete" src={complete} alt="Complete"
						onClick={()=>this.Complete()}/>
			</div>
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
						<br/>
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
		const header = this.props.header(bar, null);
		const body =
				<body className= "Body2">
					<ChooseTable 
						type = "Vote"
						AppointmentTime = {this.props.AppointmentTime}
						AppointmentId = {this.state.AppointmentId}
						updateChoice = {this.updateChoice}
						vote_result = {this.state.vote_result}
					/>
					{button}
				</body>
		const content = <div>
							{header}
							{body}
						</div>;

		return content;
	}
}

export default Vote;
