/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import {CardGroup, Card} from 'react-bootstrap';
import {ListGroup} from 'react-bootstrap';
import './App.css';

/* Classes */
import Make from './Make.js';
import Schedule from './Schedule.js';
import Statistics_Monthly from './Statistics_Monthly.js';
import Vote from './Vote.js';
import Location from './Location.js';

/* Icons */
import calendar from './img/hamburger_calendar.png';
import statistics from './img/hamburger_statistics.png';
import timer from './img/appointment_list_timer.png';
import listbutton from './img/button_friend_list.png';
import gps from './img/appointment_list_gps_location.png';
import align from './img/align.png';
import checkbox from './img/checkbox.png';

class Main extends Component {
	constructor (props) {
		super(props);
		this.state = {
				marker: { lat: 36.3636944, lng: 127.359529 },
				stage_id: 0,
				stages : ['upcoming','make','schedule','statistics','vote','location']
		}
		this.setMarker = this.setMarker.bind(this);
		this.nextStage = this.nextStage.bind(this);
	}

  nextStage(number) {
    this.setState({stage_id: number});
  }

	setMarker(marker) {
		this.setState(marker);
	}

	header(bar, button) {
		return (
			<header>
				<div className = "wrapper">
						<h1 className="Darkblue" onClick={()=>this.nextStage(0)}><a href="#">MayBe</a></h1>
						<nav>
							<ul className="menu">
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

	appointment_list(dday) {
		return (
				<Card className='app_list' bg="light" border="dark">
					<Card.Header><img src={timer} style={{width: "20px", marginRight: "10px"}} alt="Appointment" />
						<b> D-{dday} &nbsp; &nbsp;</b>
						Dinner Party
					</Card.Header>
					<Card.Body>
					<div className="row">
						<div className="content-left"><b>When</b><hr/>
							<a href="#">
								<img src={checkbox} style={{width: "50%", marginLeft: "12px", marginTop: "8px"}}
									onClick={()=>this.nextStage(4)} alt="When" />
							</a>
						</div>
						<div className="content-left"><b>Who</b><hr/>
							<li>Sangho Lim</li>
							<li>Changyeon Kim</li>
						</div>
						<div className="content-left"><b>Where</b><hr/>
							<a href="#">
								<img src={gps} style={{width: "65%"}}
									onClick={()=>this.nextStage(5)} alt="Where" />
							</a>
						</div>
						<div className="content-right"><b>What</b><hr/>
							<img src={align} style={{width: "45%", marginTop: "13px"}} alt="What"/>
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
    
    switch (main_stage) {
      case ('upcoming'):
				button = <img className="listbutton" src={listbutton} alt="Go to List"
							onClick={() => this.nextStage(1)} />;
				bar = <div className="Bar">Upcoming Schedules</div>;
				header = this.header(bar, button);
        body =
					<body className="Body"> 
						<li>{this.appointment_list(2)}</li>
						<li>{this.appointment_list(3)}</li>
						<li>{this.appointment_list(4)}</li>
						<li>{this.appointment_list(5)}</li>
						<li>{this.appointment_list(6)}</li>
					</body>
				content = <div>{header}{body}</div>;
        break;

      case ('make'):
        content = <Make nextStage = {this.nextStage} header = {this.header}/>;
        break;

      case ('schedule'):
      	content = <Schedule nextStage = {this.nextStage} header = {this.header}/>;
        break;

      case ('statistics'):
        content = <Statistics_Monthly nextStage = {this.nextStage} header = {this.header}/>;
        break;

			case ('vote'):
				content = <Vote nextStage = {this.nextStage} header = {this.header}/>;
				break;

			case ('location'):
				content =
					<Location
						nextStage = {this.nextStage}
						header = {this.header}
						marker = {this.state.marker}
						setMarker = {this.setMarker}
					/>;
				break;

      default:
        alert('YOU SHOULD NOT BE HERE IN MAIN PAGE.');
    }

    return (content);
  }
}

export default Main
