import React, {Component} from 'react';
import './App.css';

class Schedule extends Component {
	render () {
		const bar = <div className="Bar">Schedules</div>;
		const header = this.props.header(bar, null);
		const body = <body className="Body">schedule</body>;
		const content = <div>{header}{body}</div>;

		return content;
	}
}

export default Schedule;
