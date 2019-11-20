import React, {Component} from 'react';
import {ButtonGroup, Button, ListGroup, Form, Col, Row, InputGroup, FormControl} from 'react-bootstrap';
import './App.css';
import './Make.css'

import Statistics_Friend from './Statistics_Friend';
import DragSelect from './DragSelect';

/* Icons */
import makebutton from './img/button_make_appointment.png';
import friendlist_light from './img/friend_list_tab_friend_light.png';
import friendlist_dark from './img/friend_list_tab_friend_dark.png';
import timeslot_light from './img/friend_list_tab_calendar_light.png';
import timeslot_dark from './img/friend_list_tab_calendar_dark.png';
import complete from './img/button_complete.png';
import cancel from './img/button_cancel.png';
import statistics from './img/statistics.png';
import calendar from './img/friend_list_friend_calendar.png';
import search from './img/search.png'

class Make extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stage_id: 0,
			stages: ['list', 'slot', 'choose', 'stat_friend', 'schedule_friend'],
			friends: ['Alice Oh', 'Chaeyeon Son', 'Changyeon Kim', 'Hyeonjae Gil',
					  'Hyeonju Yun', 'Jiho Jin', 'Jisu Choi', 'Juho Kim', 'Maria Kim',
					  'Sangho Lim', 'Seunghee Koh', 'Soeun Park', 'Yongbin Kwon'],
		}
		this.nextStage = this.nextStage.bind(this);
	}

	nextStage (number) {
		this.setState({stage_id: number});
	}

	render () {
		var make_stage = this.state.stages[this.state.stage_id];
		const friends_list = this.state.friends.map((friend) =>
			<ListGroup.Item>
				<img src={statistics} alt="statistics" id="friendlist_statistics"
					onClick={()=>this.nextStage(3)} />
				<img src={calendar} alt="calendar" id ="friendlist_calendar"
					 onClick={()=>this.nextStage(4)} />
				<Form.Check type='checkbox' label={friend} />
			</ListGroup.Item>);

		let button; 
		let bar;
		let header;
		let body;
		let content;

		switch (make_stage) {
			case 'list':
				button = <img className="makebutton" src={makebutton} alt="Make Appointment"
							onClick={()=>this.nextStage(2)}/>;
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
							<FormControl
								placeholder="Search"
								aria-label="Recipient's username"
      							aria-describedby="basic-addon2"
							/>
							<InputGroup.Append>
								<Button variant="search" className="search_button">
									<img src={search} alt="search" id="search"/>
								</Button>
							</InputGroup.Append>
						</InputGroup>

						{/* <Row>
						<Col>
							<input className="search form-control" type="text" placeholder="Search" />
						</Col>
						<Col xs="auto">
							<img src={search} alt="search" id="search"/>
						</Col>
						</Row> */}
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
								onClick={()=>this.props.nextStage(0)}/> </li>
						<li> <img className="cancel" src={cancel} alt="Cancel"
								onClick={()=>this.props.nextStage(0)}/> </li>
					</ul>
				bar = <div className="Bar">Choose Available Time Slots</div>;
				header = this.props.header(bar, button);
				body = <body className="Body">choose</body>;
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
