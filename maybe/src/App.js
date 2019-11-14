import React, {Component} from 'react';
import './App.css';
import {DropdownButton, Dropdown} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

class App extends Component {

  state = {
    header: <header>
              <div className = "wrapper">
                <h1 className="Darkblue"><a href="#">MayBe</a></h1>
                <nav>
                  <ul className="menu">
                    <li><a href="#"><Image src={require('./icon/Show_Menu.png')}/></a></li>
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
					<Bar title="bar"/>
          <div className='wrap'>
            main page sample.
          </div>
        </body>  
      </header>
    </div>
    )
  }
}

class Bar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: this.props.title,
		};
	}

	render () {
		return (
			<div className="square" color="red">{this.state.title}</div>
		)
	}
}

export default App;
