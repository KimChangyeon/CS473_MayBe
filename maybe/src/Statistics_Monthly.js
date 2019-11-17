// https://www.chartjs.org/docs/latest/axes/styling.html#tick-configuration
import React, {Component} from 'react';
import './App.css';
import './Statistics_Monthly.css';
import { Radar, Doughnut } from "react-chartjs-2";
import rewards from "./img/reward.png";

class Statistics_Monthly extends Component {
    state = {
        stage_id: 3,
        reward_pt: 125,
        dataRadar: {
            labels: ["Rewards",
                     "Punctuality",
                     "Avg. Satisfaction",
                     "# of Friends You've Met",
                     "# of Appointments"],
            datasets: [{
                backgroundColor: "rgba(155, 191, 215, 0.6)",
                borderColor: "rgb(155, 191, 215)",
                data: [75, 59, 80, 61, 40]
            }]
        },
        nameTop: ["Sangho Lim", "Jisu Choi", "Changyeon Kim"],
        timeTop: [20, 15, 10],
        dataTop: [
            { labels: ["Satisfaction",""],
              datasets: [{
                backgroundColor: ["#cc9880","#ecdfcf"],
                data: [85,15]
              }] },
            { labels: ["Satisfaction",""],
              datasets: [{
                backgroundColor: ["#cc9880","#ecdfcf"],
                data: [75,25]
              }] },
            { labels: ["Satisfaction",""],
              datasets: [{
                backgroundColor: ["#cc9880","#ecdfcf"],
                data: [66,34]
              }] },
        ],
        month: "Nov",
    }

    top(i) {
        return(
            <div className="w-25 d-inline-block freq_friend">
                <div className="freq_friend_name" >{this.state.nameTop[i-1]}</div>
                <Doughnut className="friend_doughnut"
                    data={this.state.dataTop[i-1]}
                    options={{ responsive: true, animation: false, maintainAspectRatio: false }}
                    legend={{ display: false }}
                    />
                <div className="freq_time"><b>{this.state.timeTop[i-1]}</b> Times</div>
            </div>
        );
    }

	body () {
		return (
			<div className="Body">
                <h5>Rewards
                    <img id="rewards" src={rewards} alt="rewards img"/>
                    {this.state.reward_pt}pt
                </h5>

                <h5>Overall Score of <b>{this.state.month}</b></h5>
                <div>
                    <Radar data={this.state.dataRadar}
                           options={{ responsive: true,
                                scale: {ticks: {max:100, min:0, stepsize:20, display: false}} }}
                           legend={{ display: false }} />
                </div>

                <h5>Top3 Frequently Met Friends</h5>
                <div className="frequent_friends">
                    {this.top(1)}
                    {this.top(2)}
                    {this.top(3)}
                </div>
			</div>
		);
	}

	render () {
		const bar = <div className="Bar">Statistics</div>;
		const header = this.props.header(bar, null);
		const body = this.body();
		const content = <div>{header}{body}</div>;
		return content;
	}
}

export default Statistics_Monthly;
