import React, {Component} from 'react';
import './App.css';

import Main from './Main'
import Login from './Login'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      stage_id: 0,
      stages: ['login', 'Main'],
      user_id: 0
    }
    this.nextStage = this.nextStage.bind(this);
    this.setUserId = this.setUserId.bind(this);
  }

  nextStage() {
    this.setState({stage_id: this.state.stage_id + 1});
  }

  setUserId (id) {
		this.setState({user_id: id});
	}
  
  render () {
    var stage = this.state.stages[this.state.stage_id];
    let content;
    switch (stage) {
        case 'login':
          content = <Login nextStage = {this.nextStage} setUserId = {this.setUserId}/>;
          break;
        case 'Main':
          content = <Main nextStage = {this.nextStage} user_id = {this.state.user_id}/>;
          break;
        default:
          alert('YOU SHOULD NOT BE HERE.') 
    }
    return content;
  }
}

export default App;
