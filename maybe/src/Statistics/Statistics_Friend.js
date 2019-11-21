import React, {Component} from 'react';
import '../App.css';
import './Statistics_Friend.css';
import { Bar } from "react-chartjs-2";
import { ListGroup } from 'react-bootstrap';

import satisfaction_img from '../img/statistics_satisfaction.png';
import recent_img from '../img/statistics_recent.png';
import last_date_img from '../img/statistics_last_date.png';
import last_location_img from '../img/statistics_last_location.png';

class Statistics_Friend extends Component {
    state = {
        name: "Sangho Lim",
        total_times: 726,
        satisfaction: 98,
        recent: 5,
        last_date: "Nov 17",
        last_location: "KAIST Library",

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
                <div><b className="header_name">{this.state.name}</b>
                    <span className="header_times">
                        <b className="total_times">{this.state.total_times}</b>  times you met
                    </span>
                </div>
                <Bar data={this.state.data_bar}
                    legend={{ display: false }}
                    />
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <img id="icon" src={satisfaction_img} alt="satisfaction" />
                        <b>Satisfaction</b>
                        <span className="value">{this.state.satisfaction}%</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <img id="icon" src={recent_img} alt="recent # of appointments" />
                        <b>Number of Recent Meetings Last Week</b>
                        <span className="value">{this.state.recent} times</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <img id="icon" src={last_date_img} alt="last date" />
                        <b>Last Meeting Date</b>
                        <span className="value">{this.state.last_date}</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <img id="icon" src={last_location_img} alt="last location" />
                        <b>Last Meeting Point</b>
                        <span className="value">{this.state.last_location}</span>
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