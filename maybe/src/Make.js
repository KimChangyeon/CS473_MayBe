import React, {Component} from 'react';
import './App.css';
import calendar from './img/hamburger_calendar.png';
import statistics from './img/hamburger_statistics.png';

class Make extends Component {
	state = {
		stage_id: 0,
	}

	content () {
		return (
			<div>
				<body className="BodyContent">
					abc
				</body>
			</div>
		)
	}

	render () {
		return (
			this.content()
		);
	}
}

export default Make;
