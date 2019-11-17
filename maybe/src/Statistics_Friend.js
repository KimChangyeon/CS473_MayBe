import React, {Component} from 'react';
import './App.css';
import './Statistics_Friend.css';
import { Bar } from "react-chartjs-2";
import { ListGroup } from 'react-bootstrap';

import satisfaction from './img/statistics_satisfaction.png';
import recent from './img/statistics_recent.png';
import last_date from './img/statistics_last_date.png';
import last_location from './img/statistics_last_location.png';

class Statistics_Friend extends Component {
    state = {
        name: "Sangho Lim",
        total_times: 300,
        satisfaction: 98,
        last_date: "Nov 17",
        last_place: "KAIST Library",

        data_bar: {
            labels: [
                "Sep 1st", "2nd", "3rd", "4th",
                "Oct 1st", "2nd", "3rd", "4th",
                "Nov 1st", "2nd", "3rd", "4th"],
            datasets: [{
                backgroundColor: "rgba(155, 191, 215, 0.6)",
                borderColor: "rgb(155, 191, 215)",
                data: [
                    5,6,7,3,4,1,6,0,5,2,6,5
                ]
            }]
        },
    }

    body() {

        return (
            <div className="Body">
                <div><b className="total_times">{this.state.total_times}</b> times you met</div>
                <Bar data={this.state.data_bar}
                    legend={{ display: false }}
                    />
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <img id="icon" src={satisfaction} alt="satisfaction" />
                        <span>Satisfaction</span>
                        <span className="value">{this.state.satisfaction}%</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <img id="icon" src={recent} alt="recent # of appointments" />
                        <span># of Recent Meetings Last Week</span>
                        <span className="value"></span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <img id="icon" src={last_date} alt="last date" />
                        <span>Last Meeting Date</span>
                        <span className="value"></span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <img id="icon" src={last_location} alt="last location" />
                        <span>Last Meeting Point</span>
                        <span className="value"></span>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        );
    }

    render() {
        return this.body();
    }

}

export default Statistics_Friend;