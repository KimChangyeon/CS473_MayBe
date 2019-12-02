import React, {Component} from 'react';
import '../App.css';
import Weekly from './weekly';
import Calendar from './Calendar';

import week from '../img/week.png';
import month from '../img/month.png';

class Schedule extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentViewName: "Week"
		}
	}

	render () {
		const bar =
			<div className="Bar">
				Schedules ({this.state.currentViewName})
				<a href="#"> <img src={week} style={{marginTop: "2px", marginLeft: "15px", width: "23px", position: "absolute", left: "400px"}} onClick={() => this.setState({currentViewName: "Week"})}/> </a>
				<a href="#"> <img src={month} style={{marginTop: "2px", marginLeft: "15px", width: "23px", position: "absolute", left: "440px"}} onClick={() => this.setState({currentViewName: "Month"})}/> </a>
			</div>;
		const header = this.props.header(bar, null);
		const body = <body className="Body"><Calendar user_id={this.props.user_id} currentViewName={this.state.currentViewName}/></body>;
		// const body = <body className="Body"><Weekly user_id={this.props.user_id} currentViewName={this.state.currentViewName}/></body>;
		const content = <div>{header}{body}</div>;

		return content;
	}
}

export default Schedule;
