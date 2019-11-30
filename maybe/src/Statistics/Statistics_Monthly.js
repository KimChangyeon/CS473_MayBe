// https://www.chartjs.org/docs/latest/axes/styling.html#tick-configuration
// https://pngtree.com/so/병아리
import React, {Component} from 'react';
import '../App.css';
import './Statistics_Monthly.css';
import { Radar, HorizontalBar } from "react-chartjs-2";
import rewards from "../img/reward.png";
import b1 from "../img/badge1.png";
import b2 from "../img/badge2.png";
import b3 from "../img/badge3.png";
import b4 from "../img/badge4.png";
import b5 from "../img/badge5.png";

class Statistics_Monthly extends Component {
    constructor (props) {
        super(props);
        this.state = {
            stage_id: 3,
            // reward_pt: 125,
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
            month: "Nov",
            dataHorizontal: {
              labels: ["Sangho Lim", "Jisu Choi", "Changyeon Kim"],
              datasets: [
                  {
                      label: "# of Appointments",
                      backgroundColor: ["#cc9880", "#cc9880", "#cc9880"],
                      data: [20,15,10]
                  },
                  {
                      label: "Satisfaction",
                      backgroundColor: ["#ecdfcf", "#ecdfcf", "#ecdfcf"],
                      data: [85,75,66]
                  },
              ]
            },
        }
    }

	body () {
        // const reward = this.props.user_reward;
        const reward = 400;
        const badge = reward >= 1000 ? "Lv.5 Always" :
                      reward >= 700 ? "Lv.4 Usually": 
                      reward >= 400 ? "Lv.3 Often":
                      reward >= 100 ? "Lv.2 Sometimes":
                      "Lv.1 Never";
        const badge_img = reward >= 1000 ? b5 :
                      reward >= 700 ? b4: 
                      reward >= 400 ? b3:
                      reward >= 100 ? b2:
                      b1;
		return (
			<div className="Body">
                <img id="badge" src={badge_img} alt="badge img"/>
                <h5>Rewards
                    {/* <img id="rewards" src={rewards} alt="rewards img"/> */}
                    {/* <span className="reward_val">{this.state.reward_pt}pt</span> */}
                    <span className="right_val">{reward}pt</span>
                </h5><hr/>
                <h5>Badge
                    <span className="right_val">{badge}</span>
                </h5><hr/>
                <h5>Overall Score of <span className="month">{this.state.month}</span></h5>
                <div>
                    <Radar data={this.state.dataRadar}
                           options={{ responsive: true,
                                scale: {ticks: {max:100, min:0, stepsize:20, display: false},
                                        pointLabels: {fontSize: 13}}
                                 }}
                           legend={{ display: false }} />
                </div>
                <hr/>
                <h5>Top3 Frequently Met Friends</h5>
                <HorizontalBar data={this.state.dataHorizontal}
                  legend={{position: "bottom"}}
                  options= {{
                    scales: {xAxes: [{ticks: {
                          beginAtZero: true
                    }}]}
                  }}
                />
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
