/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import './App.css';
import Make from './Make.js';
import {Card} from 'react-bootstrap';
import {ButtonGroup, Button} from 'react-bootstrap';
import calendar from './img/hamburger_calendar.png';
import statistics from './img/hamburger_statistics.png';
import timer from './img/appointment_list_timer.png';
import makeapp from './img/button_make_appointment.png';
import friendlist from './img/friend_list_tab_friend_light.png';
import timeslot from './img/friend_list_tab_calendar_dark.png';

class Main extends Component {
	state = {
			stage_id: 0,
			stages : ['upcoming','make','schedule','statistics']
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
		let header;
		let bar
		let button;
		let content;
    
    switch (main_stage) {
      case ('upcoming'):
				button = <img className="makeapp" src={makeapp} onClick={() => this.nextStage(1)}/>;
				bar = <div className="Bar">Upcoming Schedules</div>;
				header = this.header(bar, button);
        content = 
          <div>
            <body className="BodyContent"> 
							<li>{this.appointment_list(2)}</li>
							<li>{this.appointment_list(3)}</li>
							<li>{this.appointment_list(4)}</li>
							<li>{this.appointment_list(5)}</li>
							<li>{this.appointment_list(6)}</li>
            </body>
          </div>
        break;

      case ('make'):
				bar =
					<ButtonGroup id="Tap" size='lg' style={{top: "-12px", width: "100%", height: "50px"}}>
						<Button id="Button1"><img src={friendlist}/></Button>
						<Button id="Button2"><img src={timeslot}/></Button>
					</ButtonGroup>
				header = this.header(bar, null);
        content = <Make nextStage = {this.nextStage} header = {this.state.header}/>
        break;

      case ('schedule'):
				bar = <div className="Bar">Schedules</div>;
				header = this.header(bar, null);
        // content = <Schedule nextStage = {this.nextStage} header = {this.state.header}/>
        break;

      case ('statistics'):
				bar = <div className="Bar">Statistics</div>;
				header = this.header(bar, null);
        // content = <Statistics nextStage = {this.nextStage} header = {this.state.header}/>
        break;

      default:
        alert('YOU SHOULD NOT BE HERE IN MAIN PAGE.');
    }

    return (
    <div>
			{header}
      {content}  
    </div>
    )
  }
}

export default Main
