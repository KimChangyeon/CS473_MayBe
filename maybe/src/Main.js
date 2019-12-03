/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import Popup from 'reactjs-popup';
import Fab from '@material-ui/core/Fab';
import EmojiEventsRoundedIcon from '@material-ui/icons/EmojiEventsRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import './App.css';

/* Classes */
import Make from './Appointment/Make.js';
import Schedule from './Schedule/Schedule.js';
import Statistics_Monthly from './Statistics/Statistics_Monthly.js';
import Vote from './Appointment/Vote.js';
import Location from './Appointment/Location.js';
import Memo from './Appointment/Memo.js';
import Rank from './Statistics/Rank.js';

/* Icons */
import timer from './img/appointment_list_timer.png';
import listbutton from './img/button_friend_list.png';
import gps from './img/appointment_list_gps_location.png';
import align from './img/align.png';
import checkbox from './img/checkbox.png';
import coins from './img/appointment_list_reward.png';
import coin from './img/coin.png';

function parse(str) {
    var y = str.substring(0,4),
        m = str.substring(4,6) - 1,
		d = str.substring(6,8);
    return new Date(y,m,d);
}

class Main extends Component {
	constructor (props) {
		super(props);
		this.state = {
			AppointmentId: 0,
			AppointmentPlace: null,
			AppointmentMemo: null,
			AppointmentTime: [],
			initialCenter: { lat: 36.368, lng: 127.355 },
			user_id: this.props.user_id,
			marker: { lat: 36.3636944, lng: 127.359529 },
			place: null,
			memo: null,
			stage_id: 0,
			stages : ['upcoming','make','schedule','statistics','vote','location', 'memo', 'rank'],
			schedule: [],
			alert1: 0,
			alert2: 0,
			early_msg: "You've arrived at your appointment on time!",
			early_min: 0,
			reward_pt: 0,
		}
		this.setMarker = this.setMarker.bind(this);
		this.setPlace = this.setPlace.bind(this);
		this.setMemo = this.setMemo.bind(this);
		this.nextStage = this.nextStage.bind(this);
		this.nextStageWithAppointment = this.nextStageWithAppointment.bind(this);
		this.update = this.update.bind(this);
	}

	componentWillMount () {
		var url_final = '/appt/'.concat(this.props.user_id);
		fetch(url_final)
			.then(res => res.json())
			.then(answer => this.setState({schedule: answer.data}))        
		.catch((error)=>{
			console.log('Error fetching man',error);
		});
	}

	update () {
		var url_final = '/appt/'.concat(this.props.user_id);
		fetch(url_final)
			.then(res => res.json())
			.then(answer => this.setState({schedule: answer.data}))        
		.catch((error)=>{
			console.log('Error fetching man',error);
		});
		this.setState({alert2: 0});
	}

	setMarker(marker) {
		this.setState(marker);
	}

	setPlace(place) {
		this.setState(place);
	}

	setMemo(memo) {
		this.setState(memo);
	}

	nextStage(number) {
		this.setState({stage_id: number});
	}

	nextStageWithAppointment(number, appId, additional) {
		console.log(appId);
		this.setState({stage_id: number, AppointmentId: appId});
		switch (number) {
			case (4):
				this.setState({AppointmentTime: additional})
				break;
			case (5):
				this.setState({AppointmentPlace: additional})
				break;
			case (6):
				this.setState({AppointmentMemo: additional})
				break;
			default:
				//pass
		}
	}

	rewarding (reward_pt) {
		var point = this.props.user_reward + reward_pt;
		var url_final = '/reward/'.concat(this.props.user_id).concat('/').concat(point);
		fetch(url_final, {method: "POST"})
			.then(answer => console.log(answer.data))        
		.catch((error)=>{
			console.log('Error fetching man',error);
		});
		this.props.setReward(point);
	}

	delete_appointment (aid) {
		var url_delete = '/delete_appt/'.concat(aid);
		fetch(url_delete, {method: "POST"})
			.then(answer => console.log(answer.data))        
		.catch((error)=>{
			console.log('Error fetching man',error);
		});
		var url_final = '/appt/'.concat(this.props.user_id);
		fetch(url_final)
			.then(res => res.json())
			.then(answer => this.setState({schedule: answer.data}))        
		.catch((error)=>{
			console.log('Error fetching man',error);
		});
	}




	header(bar, button) {
		return (
			<header>
				<div className = "wrapper">
						<h1 className="Darkblue" onClick={()=>this.nextStage(0)}><a href="#">MayBe</a></h1>
						<nav>
							<ul className="menu">
								<li>
									<Fab className="fab" onClick={()=>this.nextStage(7)}>
										<EmojiEventsRoundedIcon className="White"/>
									</Fab>
								</li>
								<li>
									<Fab className="fab" onClick={()=>this.nextStage(3)}>
										<PeopleAltRoundedIcon className="White"/>
									</Fab>
								</li>
								<li>
									<Fab className="fab" onClick={()=>this.nextStage(2)}>
										<EventNoteRoundedIcon className="White"/>
									</Fab>
								</li>
							</ul>
						</nav>
				</div>
				{bar}
				<a href="#">{button}</a>
			</header>
		);
	}

	early_cal(info, diffDays) {
		var today = new Date();
		const min = 60 * today.getHours() + today.getMinutes();
		const start_hour2min = 60 * info.StartTime;
		var early_min = start_hour2min - min;
		var reward_pt = 0;
		var msg = "You've arrived at your appointment on time!";

		if (info.DateId === null) {
			early_min = 0;
			msg = "The appointment time has not yet determined.";
		} else if (diffDays > 0) {
			early_min = 0;
			reward_pt = 50;
			msg += "\n(" + String(diffDays) + " days early)";
		} else if (diffDays < 0) {
			early_min = 0;
			msg = "You are late!";
		} else if (early_min >= 0) {
			reward_pt = early_min >= 10 ? 50 : 5 * early_min + 5;
			msg += "\n(" + String(early_min) + " minutes early)";
		} else {
			early_min = 0;
			msg = "You are late!"
		}
	
		this.state.early_min = early_min;
		this.state.reward_pt = reward_pt;
		this.state.early_msg = msg;
	}

	appointment_list(info) {
				const date = parse(String(info.DateId));
				var today = new Date();
				const diffTime = date - today;
				const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) ;
				const D_day = diffDays > 0 ? "D-" + String(diffDays) :
							 diffDays === 0 ? "D-Day" :
							 "D+" + String(-diffDays); 

				const vote = info.DateId === null ?
							<div>
								<a href="#">
									<img src={checkbox} style={{width: "50%", marginLeft: "12px", marginTop: "5px"}}
										onClick={()=>this.nextStageWithAppointment(4, info.AppointmentId, [info.StartTime, info.EndTime])}
										alt="When"/>
								</a>
							</div>
							: <div className="edit">
								{parseInt(info.DateId/10000)}/{parseInt((info.DateId%10000)/100)}/{(info.DateId%100)}<br/>
								{info.StartTime}:00 ~ {info.EndTime}:00
							</div>

				const Title = info.What;
				const participants = info.participants.split(',');
				const participants_list = participants.map((person) => <li key={person}><span>{person}</span></li>)

				const header = info.DateId === null ?
				<b>TBD &nbsp;&nbsp; {Title} <CloseRoundedIcon style={{float: "right"}} onClick = {()=>{this.delete_appointment(info.AppointmentId)}}/></b> : <b> {D_day} &nbsp;&nbsp; {Title} <CloseRoundedIcon style={{float: "right"}} onClick = {()=>{this.delete_appointment(info.AppointmentId)}}/></b>
				
				const place = info.Place === '' ?
					<img src={gps} style={{width: "65%"}}
						onClick={()=>this.nextStageWithAppointment(5, info.AppointmentId, '')} alt="Where"/> :
					<div className="edit">
						{info.Place} <br/>
						<Button variant="outlineflat" onClick={()=>this.nextStageWithAppointment(5, info.AppointmentId, info.Place)}>Edit</Button>
					</div>;

				const memo = info.Memo === '' ?
					<img src={align} style={{width: "45%", marginTop: "8px"}}
						onClick={()=>this.nextStageWithAppointment(6, info.AppointmentId, '')}
						alt="Memo"/> :
					<div className="edit">
						{info.Memo} <br/>
						<Button variant="outlineflat" onClick={()=>this.nextStageWithAppointment(6, info.AppointmentId, info.Memo)}>Edit</Button>
					</div>;

				const reward = info.Place === '' ?
					<div style={{fontSize: "11pt", lineHeight: "20px", marginTop: "2px"}}> Please choose the location </div> :
					<Popup trigger={<img src={coins} style={{width: "60%", marginTop: "2px", zindex :9999}} alt="reward"/>} contentStyle={{width: "250px",zindex :9999}}>
						{close => (
							<div style={{margin: "5px"}}>
								{this.early_cal(info, diffDays)}
								<img src={coin} style={{float: "right", width: "50px"}} onClick={()=>{this.rewarding(this.state.reward_pt); close()}} alt="reward"/>
								{this.state.early_msg}<br/>
								<u>+ {this.state.reward_pt}pt</u><br/>
								<Button variant="outlineflat" onClick={()=>{this.rewarding(this.state.reward_pt); close()}}>OK</Button>
							</div>
						)}
					</Popup>;
		
		return (
				<Card className='app_list'>

					<Card.Header><img src={timer} style={{width: "20px", marginRight: "10px", textcolor: "white"}} alt="appointment" />
					{header}
					</Card.Header>

					<Card.Body>
						<div className="row">
							<div className="content-left"><b>When</b><hr/>
								{vote}
							</div>
							<div className="content-left"><b>Who</b><hr/>
								<ul>
									{participants_list}
								</ul>
							</div>
							<div className="content-left"><b>Where</b><hr/>
									{place}
							</div>
							<div className="content-left"><b>Memo</b><hr/>
									{memo}
							</div>
							<div className="content-right"><b>Reward</b><hr/>
								{reward}
							</div>
						</div>
					</Card.Body>

				</Card>
		);
	}

  render () {
		
    var main_stage = this.state.stages[this.state.stage_id];
		let button;
		let bar;
		let header;
		let body;
		let content;

	const upcoming_list = this.state.schedule.map((sch) => <li key={sch}>{this.appointment_list(sch)}</li>)

	if (this.state.schedule.length > 0 && this.state.alert2 === 0) {
		var schedule = this.state.schedule;
		for (var i = 0; i < schedule.length; i++) {
			var sch = schedule[i];
			console.log(sch);
			if (sch.DateId === null) {
				this.setState({alert1: 1});
			}
		}
		if (this.state.alert1 === 1){
			alert("YOU HAVE TO VOTE FOR NEW APPOINTMENTS.");
			this.setState({alert2: 1});
		}
	}
    
    switch (main_stage) {
      case ('upcoming'):
				button = <img className="listbutton" src={listbutton} alt="Go to List"
							onClick={() => this.nextStage(1)} />;
				bar = <div className="Bar">Upcoming Schedules</div>;
				header = this.header(bar, button);
        body =
					<body className="Body"> 
					{/* <li>{this.appointment_list({DateId: "20191203"})}</li>
						<li>{this.appointment_list({DateId: "20191206"})}</li>
						<li>{this.appointment_list(4, this.state.schedule[0])}</li>
						<li>{this.appointment_list(5, this.state.schedule[0])}</li>
						<li>{this.appointment_list(6, this.state.schedule[0])}</li> */}
						{upcoming_list}
					</body>
				content = <div>{header}{body}</div>;
        break;

      case ('make'):
        content = <Make nextStage = {this.nextStage} header = {this.header} user_id = {this.state.user_id} update = {this.update}/>;
        break;

      case ('schedule'):
      	content = <Schedule nextStage = {this.nextStage} header = {this.header} user_id = {this.state.user_id} AppointmentId = {this.state.AppointmentId}/>;
        break;

      case ('statistics'):
        content = <Statistics_Monthly nextStage = {this.nextStage} header = {this.header} user_reward = {this.props.user_reward}/>;
				break;

	  case ('vote'):
		content = <Vote 
					nextStage = {this.nextStage} nextStageWithAppointment = {this.nextStageWithAppointment}
					header = {this.header} AppointmentId = {this.state.AppointmentId} AppointmentTime = {this.state.AppointmentTime}
					user_id = {this.state.user_id}
					update = {this.update} />;
		break;

	  case ('location'):
		content =
			<Location
				nextStage = {this.nextStage}
				nextStageWithAppointment = {this.nextStageWithAppointment}
				header = {this.header}
				initialCenter = {this.state.initialCenter}
				marker = {this.state.marker}
				setMarker = {this.setMarker}
				setPlace = {this.setPlace}
				AppointmentId = {this.state.AppointmentId}
				AppointmentPlace = {this.state.AppointmentPlace}
				update = {this.update}
			/>;
		break;

	  case ('memo'):
		content = <Memo
			nextStage = {this.nextStage}
			nextStageWithAppointment = {this.nextStageWithAppointment}
			header = {this.header}
			setMemo = {this.setMemo}
			AppointmentId = {this.state.AppointmentId}
			AppointmentMemo = {this.state.AppointmentMemo}
			update = {this.update}
		/>;
		break;
	
	case ('rank'):
		content = <Rank nextStage = {this.nextStage} header = {this.header} user_reward = {this.props.user_reward} user_id = {this.state.user_id} />;
		break;

      default:
        alert('YOU SHOULD NOT BE HERE IN MAIN PAGE.');
    }

    return (content);
  }
}

export default Main
