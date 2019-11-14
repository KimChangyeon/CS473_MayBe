import React, {Component} from 'react';
import './App.css';
import Upcoming from './Upcoming.js';

class App extends Component {
  state = {
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
			<Upcoming/>
    )
  }
}

export default App;
