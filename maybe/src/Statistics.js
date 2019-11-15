import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import './App.css';

class Statistics extends Component {
	render () {
		const bar = <div className="Bar">Statistics</div>;
		const header = this.props.header(bar, null);
		const body = <body className="Body">statistics</body>;
		const content = <div>{header}{body}</div>;

		return content;
	}
}

export default Statistics;
