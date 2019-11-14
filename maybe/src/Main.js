/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import './App.css';
import {Card} from 'react-bootstrap';
import calendar from './img/hamburger_calendar.png';
import statistics from './img/hamburger_statistics.png';
import timer from './img/appointment_list_timer.png';

class Main extends Component {

  state = {
    header: <header>
              <div className = "wrapper">
                <h1 className="Darkblue"><a href="#" onClick={()=>this.nextStage(0)}>MayBe</a></h1>
                <nav>
                  <ul className="menu">
                    <li><a href="#" ><img src={statistics} onClick={()=>this.nextStage(3)}/></a></li>
                    <li><a href="#" ><img src={calendar} onClick={()=>this.nextStage(2)}/></a></li>
                  </ul>
                </nav>
              </div>
            </header>,
    stage_id: 0,
    stages : ['upcoming','make','schedule','statistics']
  }

  nextStage(number) {
    this.setState({stage_id: number});
  }

  render () {
    var main_stage = this.state.stages[this.state.stage_id];
    let content;

    
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

    switch (main_stage) {
      case ('upcoming'):
        content = 
          <div>
            <body>
              <div className = "Bar">Upcoming Schedules</div>
              <div className='wrap'>
              </div>
              <div style={{margin: '20px'}}>{appointment_list}</div>
            </body>
          </div>
        break;

      case ('make'):
        content = 'make page'
        // content = <Make nextStage = {this.nextStage} header = {this.state.header}/>
        break;

      case ('schedule'):
        content = 'schedule page'
        // content = <Schedule nextStage = {this.nextStage} header = {this.state.header}/>
        break;

      case ('statistics'):
        content = 'statistics page'
        // content = <Statistics nextStage = {this.nextStage} header = {this.state.header}/>
        break;

      default:
        alert('YOU SHOULD NOT BE HERE IN MAIN PAGE.');
    }

    return (
    <div>
      {this.state.header}
      {content}  
    </div>
    )
  }
}

export default Main
