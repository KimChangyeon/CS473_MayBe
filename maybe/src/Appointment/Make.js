import React, {Component} from 'react';
import {ButtonGroup, Button, ListGroup, Form, InputGroup, FormControl} from 'react-bootstrap';
import '../App.css';
import './Make.css'

import Statistics_Friend from '../Statistics/Statistics_Friend';
import DragSelect from './DragSelect';
import Choose from './choose.js';

/* Icons */
import makebutton from '../img/button_make_appointment.png';
import friendlist_light from '../img/friend_list_tab_friend_light.png';
import friendlist_dark from '../img/friend_list_tab_friend_dark.png';
import timeslot_light from '../img/friend_list_tab_calendar_light.png';
import timeslot_dark from '../img/friend_list_tab_calendar_dark.png';
import complete from '../img/button_complete.png';
import cancel from '../img/button_cancel.png';
import statistics from '../img/statistics.png';
import calendar from '../img/friend_list_friend_calendar.png';
import search from '../img/search.png'
import xmark from '../img/x_mark.png'

function make_friends(answer){
	var friend_list = [];
	for (var i = 0 ; i < answer.length ; i++)
		friend_list.push(answer[i]['name']);
	return friend_list
}

function make_dict (friends) {
	var dict = {}
	for (var i = 0 ; i < friends.length ; i++){
		dict[friends[i]] = false;
	}

	return dict;
}

class Make extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stage_id: 0,
			user_id: this.props.user_id,
			stages: ['list', 'slot', 'choose', 'stat_friend', 'schedule_friend'],
			friends: ['Alice Oh', 'Chaeyeon Son', 'Changyeon Kim', 'Hyeonjae Gil',
			'Hyeonju Yun', 'Jiho Jin', 'Jisu Choi', 'Juho Kim', 'Maria Kim',
			'Sangho Lim', 'Seunghee Koh', 'Soeun Park', 'Yongbin Kwon'],
			friends_original: ['Alice Oh', 'Chaeyeon Son', 'Changyeon Kim', 'Hyeonjae Gil',
			'Hyeonju Yun', 'Jiho Jin', 'Jisu Choi', 'Juho Kim', 'Maria Kim',
			'Sangho Lim', 'Seunghee Koh', 'Soeun Park', 'Yongbin Kwon'],
			search: '',
			onSearch: false,
			AppointmentId: 0,
			AppointmentName: '',
			timeSlot: [],
			friends_in_appointment: [],
		}
		this.nextStage = this.nextStage.bind(this);
		this.search = React.createRef(); 
		this.setAppointmnentName = this.setAppointmnentName.bind(this);
		this.setTimeSlot = this.setTimeSlot.bind(this);
	}

	componentWillMount () {
		var url_final = '/fri/'.concat(this.props.user_id);
		console.log(url_final);
		fetch(url_final)
			.then(res => res.json())
			.then(answer => this.setState({friends: make_friends(answer.data), friends_original: make_friends(answer.data)}))        
		.catch((error)=>{
			console.log('Error fetching man',error);
		});
		this.setState({friends_check: make_dict(this.state.friends_original)});
	}

	setAppointmnentName (name) {
		this.setState({AppointmentName: name});
	}

	setTimeSlot (slot) {
		this.setState({timeSlot: slot});
	}

	handleSearch = (e) => {
		this.setState({search: e.target.value});
	}
	
	onCheck = (name, e) => {
		var f_check = this.state.friends_check;
		f_check[name] = e.target.checked;
		this.setState({friends_check: f_check})
	}


	nextStage (number) {
		this.setState({stage_id: number});
	}

	appointment_friends () {
		var answer = [];
		var f_check = this.state.friends_check;
		var friends = Object.keys(f_check);
		for (var i = 0 ; i < friends.length ; i++){
			var f_name = friends[i];
			if (f_check[f_name])
				answer.push(f_name)
		}
		this.setState({friends_in_appointment: answer});
	}

	submit () {
		// '/make/:DateId/:StartTime/:EndTime/:What'
		var url_make = '/make/'.concat(this.state.DateId).concat('/').concat(this.state.DateId).concat('/').concat(this.state.DateId).concat('/').concat(this.state.AppointmentName);
		fetch(url_make, {method: "POST"})
			.then(res => res.json())
			.then(answer => console.log(answer.data))
		.catch((error)=>{
			console.log('Error fetching man',error);
		});

		// Get Last Appointment Id.
		fetch('/AppId/')
			.then(res => res.json())
			.then(answer => {this.setState({AppointmentId: answer.data.AppointmentId})})
		.catch((error)=>{
			console.log('Error fetching man',error);
		});

		// Participant registration.
		for (var k = 0 ; k < this.state.friends_in_appointment.length ; k++){
			var p = this.state.friends_in_appointment[k];
			var url_participants = 'register'.concat(this.state.AppointmentId).concat('/').concat(p)
			fetch(url_participants, {method: "POST"})
				.then(res => res.json())
				.then(answer => console.log(answer.data))
			.catch((error)=>{
				console.log('Error fetching man',error);
			});
		}
	}

	render () {
		var make_stage = this.state.stages[this.state.stage_id];
		const friends_list = this.state.friends.map((friend) =>
			<ListGroup.Item>
				<img src={statistics} alt="statistics" id="friendlist_statistics"
					onClick={()=>this.nextStage(3)} />
				<img src={calendar} alt="calendar" id ="friendlist_calendar"
					 onClick={()=>this.nextStage(4)} />
				<Form.Check type='checkbox' label={friend} 
					defaultValue={this.state.friends_check[friend]}
					onChange={(e) => this.onCheck(friend, e)} />
			</ListGroup.Item>);

		let button; 
		let bar;
		let header;
		let body;
		let content;

		switch (make_stage) {
			case 'list':
				button = <img className="makebutton" src={makebutton} alt="Make Appointment"
							onClick={()=>{
								this.appointment_friends();
								this.nextStage(2)
							}}/>;
				bar =
					<ButtonGroup id="Tap" size='lg' style={{top: "-12px", width: "100%", height: "50px"}}>
						<Button id="Button1" onClick={() => this.nextStage(0)}>
							<img src={friendlist_light} alt="friend list" /></Button>
						<Button id="Button2" onClick={() => this.nextStage(1)}>
							<img src={timeslot_dark} alt="time slot" /></Button>
					</ButtonGroup>
				header = this.props.header(bar, button);
				body = <body className="Body">
						<InputGroup className="search">
							<input
								style = {{width: "455px"}}
								placeholder="Search"
								aria-label="Recipient's username"
								aria-describedby="basic-addon2"
								// ref = {this.search}
								value = {this.state.search}
								onChange={this.handleSearch}
								
							/>
							<InputGroup.Append>
								{/* <Button variant="xmark" className="search_button">
									<img style={{width: 10, height: 10}} src={xmark} alt="xmark" id="xmark"/>
								</Button> */}
								<Button variant="search" className="search_button">
									<img src={search} alt="search" id="search"/>
								</Button>
							</InputGroup.Append>
						</InputGroup>
						<ListGroup><Form>{friends_list}</Form></ListGroup>
				</body>
				content = <div>{header}{body}</div>
				break;

			case 'slot':
				button = <img className="makebutton" src={makebutton} alt="Make Appointment"
							onClick={()=>this.nextStage(2)}/>;
				bar =
					<ButtonGroup id="Tap" size='lg' style={{top: "-12px", width: "100%", height: "50px"}}>
						<Button id="Button2" onClick={() => this.nextStage(0)}>
							<img src={friendlist_dark} alt="friend list" /></Button>
						<Button id="Button1" onClick={() => this.nextStage(1)}>
							<img src={timeslot_light} alt="time slot" /></Button>
					</ButtonGroup>
				header = this.props.header(bar, button);
				body = <body className="Body"><DragSelect /></body>
				content = <div>{header}{body}</div>
				break;

			case 'choose':
				button =
					<ul>
						<li> <img className="complete" src={complete} alt="Complete"
								onClick={()=>{
									// this.submit()
									this.props.nextStage(0)
									}}/> </li>
						<li> <img className="cancel" src={cancel} alt="Cancel"
								onClick={()=>this.props.nextStage(0)}/> </li>
					</ul>
				bar = <div className="Bar">Choose Available Time Slots</div>;
				header = this.props.header(bar, button);
				body = <body className="Body"><Choose setAppointmnentName = {this.setAppointmnentName} setTimeSlot = {this.setTimeSlot}/></body>;
				content = <div>{header}{body}</div>;
				break;

			case 'stat_friend':
				bar =
					<ButtonGroup id="Tap" size='lg' style={{top: "-12px", width: "100%", height: "50px"}}>
						<Button id="Button1" onClick={() => this.nextStage(0)}>
							<img src={friendlist_light} alt="friend list" /></Button>
						<Button id="Button2" onClick={() => this.nextStage(1)}>
							<img src={timeslot_dark} alt="time slot" /></Button>
					</ButtonGroup>
				header = this.props.header(bar, button);
				content = <div>{header}<Statistics_Friend/></div>;
				break;

			case 'schedule_friend':
				bar = 
					<ButtonGroup id="Tap" size='lg' style={{top: "-12px", width: "100%", height: "50px"}}>
						<Button id="Button1" onClick={() => this.nextStage(0)}>
							<img src={friendlist_light} alt="friend list" /></Button>
						<Button id="Button2" onClick={() => this.nextStage(1)}>
							<img src={timeslot_dark} alt="time slot" /></Button>
					</ButtonGroup>
				header = this.props.header(bar, button);
				content = <div>{header}<div className="Body">friend schedule</div></div>
				break;

    		default:
        		alert('YOU SHOULD NOT BE HERE IN MAIN PAGE.');
			}

		return (content);
	}
}

export default Make;
