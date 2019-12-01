import React, {Component} from 'react';
import './App.css';

import Main from './Main'
import Login from './Login'
import Signup from './Signup'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      stage_id: 0,
      stages: ['login', 'Main', 'signup'],
      user_id: 0,
      user_reward: 0,
    }
    this.setStage = this.setStage.bind(this);
    this.nextStage = this.nextStage.bind(this);
    this.setUserId = this.setUserId.bind(this);
    this.setReward = this.setReward.bind(this);
  }

  setStage(i) {
    this.setState({stage_id: i});
  }

  nextStage() {
    this.setState({stage_id: this.state.stage_id + 1});
  }

  setUserId (id) {
		this.setState({user_id: id});
  }
  
  setReward (r) {
		this.setState({user_reward: r});
	}
  
  render () {
    var stage = this.state.stages[this.state.stage_id];
    let content;
    switch (stage) {
        case 'login':
          content = <Login nextStage = {this.nextStage} setUserId = {this.setUserId} setReward = {this.setReward} setStage = {this.setStage}/>;
          break;
        case 'Main':
          content = <Main nextStage = {this.nextStage} user_id = {this.state.user_id} user_reward = {this.state.user_reward} setReward = {this.setReward}/>;
          break;
        case 'signup':
          content = <Signup setStage = {this.setStage}/>;
          break;
        default:
          alert('YOU SHOULD NOT BE HERE.') 
    }
    return content;
  }
}

export default App;
