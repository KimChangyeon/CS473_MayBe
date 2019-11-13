import React, {Component} from 'react';
import './App.css';
import {DropdownButton, Dropdown} from 'react-bootstrap'

class App extends Component {

  state = {
    header: <header>
              <div className = "wrapper">
                <h1>MayBe</h1>
                <nav>
                  <ul className="menu">
                    <li><a href="#">Timetable</a></li>
                    <li><a href="#">Relationship</a></li>
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
          <div className='wrap'>
            main page sample.
          </div>
        </body>
        
      </header>
    </div>
    )
  };
}

export default App;
