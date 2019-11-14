import React, {Component} from 'react';
import './App.css';
import {Card} from 'react-bootstrap';
import calendar from './img/hamburger_calendar.png';
import statistics from './img/hamburger_statistics.png';
import timer from './img/appointment_list_timer.png';

class Upcoming extends Component {

  state = {
    header: <header>
              <div className = "wrapper">
                <h1 className="Darkblue"><a href="#">MayBe</a></h1>
                <nav>
                  <ul className="menu">
                    <li><a href="#"><img src={statistics}/></a></li>
                    <li><a href="#"><img src={calendar}/></a></li>
                  </ul>
                </nav>
              </div>
            </header>,
    page_id: 0,
    page : ['home','scenario','about','feedback'],
    stage_id: 0,
    stage : ['intro','discription'],
    language_list : ['English', 'Korean'],
    language: 0,
    stopper: 0,
    request: 0
  }

  render () {
    return (
    <div>
      <header>
        {this.state.header}
        <body>
					<div className = "Bar">Upcoming Schedules</div>
          <div className='wrap'>
          </div>
					<div style={{margin: '20px'}}>{appointment_list}</div>
        </body>  
      </header>
    </div>
    )
  }
}

const appointment_list = 
      <Card className='app_list'>
                <Card.Header><img src={timer} style={{width: '30px', height: '30px', marginRight: "10px"}}/><b>D-2</b></Card.Header>
                <Card.Body>
                  <Card.Text>
                    When? <br/>
                    Where? <br/>
                    Who? <br/>
                    What? <br/>
                  </Card.Text>
                </Card.Body>
      </Card>

export default Upcoming
