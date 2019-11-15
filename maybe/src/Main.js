/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import './App.css';

/* Classes */
import Make from './Make.js';
import Schedule from './Schedule.js';
import Statistics from './Statistics.js';

/* Icons */
import calendar from './img/hamburger_calendar.png';
import statistics from './img/hamburger_statistics.png';
import timer from './img/appointment_list_timer.png';
import listbutton from './img/button_friend_list.png';
import gps from './img/appointment_list_gps_location.png';

class Main extends Component {
	constructor (props) {
		super(props);
		this.state = {
				stage_id: 0,
				stages : ['upcoming','make','schedule','statistics']
		}
		this.nextStage = this.nextStage.bind(this);
	}

  nextStage(number) {
    this.setState({stage_id: number});
  }

	header(bar, button) {
		return (
			<header>
				<div className = "wrapper">
						<h1 className="Darkblue" onClick={()=>this.nextStage(0)}><a href="#">MayBe</a></h1>
						<nav>
							<ul className="menu">
								<li><a href="#"><img src={statistics} onClick={()=>this.nextStage(3)}/></a></li>
								<li><a href="#"><img src={calendar} onClick={()=>this.nextStage(2)}/></a></li>
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
				<Card.Header><img src={timer} style={{width: '30px', height: '30px', marginRight: "10px"}}/><b>D-{dday}</b></Card.Header>
				<Card.Body>
					<img src={gps} style={{width: '90px', marginTop: '5px', float: 'right'}}/>
					<Card.Text>
						When? <br/>
						Where? <br/>
						Who? <br/>
						What? <br/>
					</Card.Text>
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
				button = <img className="listbutton" src={listbutton} onClick={() => this.nextStage(1)}/>;
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
        content = <Make nextStage = {this.nextStage} header = {this.header}/>
        break;

      case ('schedule'):
      	content = <Schedule nextStage = {this.nextStage} header = {this.header}/>
        break;

      case ('statistics'):
        content = <Statistics nextStage = {this.nextStage} header = {this.header}/>
        break;

      default:
        alert('YOU SHOULD NOT BE HERE IN MAIN PAGE.');
    }

    return (
				content
    )
  }
}

export default Main
