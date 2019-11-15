import React, {Component} from 'react';
import './App.css';
import Main from './Main'

class App extends Component {
  state = {
    stage_id: 1,
    stages: ['login', 'Main'],
  }

  nextStage() {
    this.setState({stage_id: this.state.stage_id + 1});
  }

  render () {
    var stage = this.state.stages[this.state.stage_id];
    let content;
    switch (stage) {
        case 'login':
          // content = <Login next_stage = {this.nextStage}/>;
          content = 'login page'
          break;
        case 'Main':
          content = <Main next_stage = {this.nextStage}/>;
          break;
        default:
          alert('YOU SHOULD NOT BE HERE.') 
    }
    return (
      <div>
			  {content}
      </div>
    )
  }
}

export default App;
