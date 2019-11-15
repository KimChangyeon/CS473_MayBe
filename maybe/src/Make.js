import React, {Component} from 'react';
import {ButtonGroup, Button} from 'react-bootstrap';
import './App.css';

/* Icons */
import makebutton from './img/button_make_appointment.png';
import friendlist_light from './img/friend_list_tab_friend_light.png';
import friendlist_dark from './img/friend_list_tab_friend_dark.png';
import timeslot_light from './img/friend_list_tab_calendar_light.png';
import timeslot_dark from './img/friend_list_tab_calendar_dark.png';
import complete from './img/button_complete.png';

class Make extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stage_id: 0,
			stages: ['list','slot','choose','vote']
		}
		this.nextStage = this.nextStage.bind(this);
	}

	nextStage (number) {
		this.setState({stage_id: number});
	}

	render () {
		var make_stage = this.state.stages[this.state.stage_id];
		let button; 
		let bar;
		let header;
		let body;
		let content;

		switch (make_stage) {
			case 'list':
				button = <img className="makebutton" src={makebutton} onClick={()=>this.nextStage(2)}/>;
				bar =
					<ButtonGroup id="Tap" size='lg' style={{top: "-12px", width: "100%", height: "50px"}}>
						<Button id="Button1" onClick={() => this.nextStage(0)}><img src={friendlist_light}/></Button>
						<Button id="Button2" onClick={() => this.nextStage(1)}><img src={timeslot_dark}/></Button>
					</ButtonGroup>
				header = this.props.header(bar, button);
				body = <body className="Body">abc</body>
				content = <div>{header}{body}</div>
				break;

			case 'slot':
				button = <img className="makebutton" src={makebutton} onClick={()=>this.nextStage(2)}/>;
				bar =
					<ButtonGroup id="Tap" size='lg' style={{top: "-12px", width: "100%", height: "50px"}}>
						<Button id="Button2" onClick={() => this.nextStage(0)}><img src={friendlist_dark}/></Button>
						<Button id="Button1" onClick={() => this.nextStage(1)}><img src={timeslot_light}/></Button>
					</ButtonGroup>
				header = this.props.header(bar, button);
				body = <body className="Body">def</body>
				content = <div>{header}{body}</div>
				break;

			case 'choose':
				button = <img className="complete" src={complete} onClick={()=>this.props.nextStage(0)}/>;
				bar = <div className="Bar">Choose Available Time Slots</div>;
				header = this.props.header(bar, button);
				body = <body className="Body">choose</body>;
				content = <div>{header}{body}</div>;
				break;

			case 'vote':
				content = <body className="Body">vote</body>
				break;

      default:
        alert('YOU SHOULD NOT BE HERE IN MAIN PAGE.');
		}

		return (content);
	}
}

export default Make;
