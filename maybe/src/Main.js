/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import Popup from 'reactjs-popup';
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
import calendar from './img/hamburger_calendar.png';
import statistics from './img/hamburger_statistics.png';
import timer from './img/appointment_list_timer.png';
import listbutton from './img/button_friend_list.png';
import gps from './img/appointment_list_gps_location.png';
import align from './img/align.png';
import checkbox from './img/checkbox.png';
import coins from './img/appointment_list_reward.png';
import coin from './img/coin.png';
import rank from './img/rank.png';
import { thisExpression } from '@babel/types';

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

	rewarding () {
		var point = this.props.user_reward + 20;
		var url_final = '/reward/'.concat(this.props.user_id).concat('/').concat(point);
		fetch(url_final, {method: "POST"})
			.then(answer => console.log(answer.data))        
		.catch((error)=>{
			console.log('Error fetching man',error);
		});
		this.props.setReward(point);
	}


	header(bar, button) {
		return (
			<header>
				<div className = "wrapper">
						<h1 className="Darkblue" onClick={()=>this.nextStage(0)}><a href="#">MayBe</a></h1>
						<nav>
							<ul className="menu">
								<li><a href="#">
									<img src={rank} onClick={()=>this.nextStage(7)} alt="rank" />
								</a></li>
								<li><a href="#">
									<img src={statistics} onClick={()=>this.nextStage(3)} alt="statistics" />
								</a></li>
								<li><a href="#">
									<img src={calendar} onClick={()=>this.nextStage(2)} alt="schedule" />
								</a></li>
							</ul>
						</nav>
				</div>
				{bar}
				<a href="#">{button}</a>
			</header>
		);
	}

	appointment_list(info) {

				const date = parse(String(info.DateId));
				var today = new Date();
				const diffTime = date - today;
				const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) ; 

				const Title = info.What;
				const participants = info.participants.split(',');
				const participants_list = participants.map((person) => <li key={person}><span>{person}</span></li>)
				
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
								<img src={coin} style={{float: "right", width: "50px"}} onClick={()=>{this.rewarding(); close()}} alt="reward"/>
								You've arrived at your appointment on time! <br/>
								<u>3 min</u> earlier <br/>
								<Button variant="outlineflat" onClick={()=>{this.rewarding(); close()}}>OK</Button>
							</div>
						)}
					</Popup>;
		
		return (
				<Card className='app_list'>

					<Card.Header><img src={timer} style={{width: "20px", marginRight: "10px", textcolor: "white"}} alt="appointment" />
					<b> D-{diffDays} &nbsp;&nbsp; {Title}</b>
					</Card.Header>

					<Card.Body>
						<div className="row">
							<div className="content-left"><b>When</b><hr/>
								<a href="#">
									<img src={checkbox} style={{width: "50%", marginLeft: "12px", marginTop: "5px"}}
										onClick={()=>this.nextStageWithAppointment(4, info.AppointmentId, [info.StartTime, info.EndTime])}
										alt="When"/>
								</a>
							</div>
							<div className="content-left"><b>Who</b><hr/>
								<ul>
									{/* <li><span>Sangho</span></li> */}
									{/* <li><span>Chang-yeon Kim</span></li> */}
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
    
    switch (main_stage) {
      case ('upcoming'):
				button = <img className="listbutton" src={listbutton} alt="Go to List"
							onClick={() => this.nextStage(1)} />;
				bar = <div className="Bar">Upcoming Schedules</div>;
				header = this.header(bar, button);
        body =
					<body className="Body"> 
						{/* <li>{this.appointment_list(2, this.state.schedule[0])}</li>
						<li>{this.appointment_list(3, this.state.schedule[0])}</li>
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
		content = <Rank nextStage = {this.nextStage} header = {this.header} user_reward = {this.props.user_reward} />;
		break;

      default:
        alert('YOU SHOULD NOT BE HERE IN MAIN PAGE.');
    }

    return (content);
  }
}

export default Main
