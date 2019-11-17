import React, {Component} from 'react';
import './App.css';

import Main from './Main'
import Login from './Login'
import Weekly from './weekly'
import DragSelect from './DragSelect';

import {DropdownButton, Dropdown} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      stage_id: 0,
      stages: ['login', 'Main'],
  
    }
    this.nextStage = this.nextStage.bind(this);
  }

  nextStage() {
    this.setState({stage_id: this.state.stage_id + 1});
  }
  
  render () {
    var stage = this.state.stages[this.state.stage_id];
    let content;
    switch (stage) {
        case 'login':
          content = <Login nextStage = {this.nextStage}/>;
          // content = 'login page'
          break;
        case 'Main':
          content = <Main nextStage = {this.nextStage}/>;
          break;
        default:
          alert('YOU SHOULD NOT BE HERE.') 
    }
    return content;
  }
}

export default App;
