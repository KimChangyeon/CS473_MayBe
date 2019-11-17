import React, {Component} from 'react';
import '../App.css';
import Weekly from './weekly';

class Schedule extends Component {
	render () {
		const bar = <div className="Bar">Schedules</div>;
		const header = this.props.header(bar, null);
		const body = <body className="Body"><Weekly user_id = {this.props.user_id}/></body>;
		const content = <div>{header}{body}</div>;

		return content;
	}
}

export default Schedule;
