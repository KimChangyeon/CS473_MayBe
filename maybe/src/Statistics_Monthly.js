// https://www.chartjs.org/docs/latest/axes/styling.html#tick-configuration
import React, {Component} from 'react';
import './App.css';
import { Radar, Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import rewards from "./img/reward.png";

class Statistics_Monthly extends Component {
    state = {
        stage_id: 3,
        dataRadar: {
            labels: ["Rewards", "Punctuality", "Avg. Satisfaction", "# of Friends You've Met", "# of Appointments"],
            datasets: [{
                // label: "Overall Score",
                backgroundColor: "rgba(155, 191, 215, 0.6)",
                borderColor: "rgb(155, 191, 215)",
                data: [75, 59, 80, 61, 40]
            }]
          },
          dataDoughnut: {
            labels: ["",""],
            datasets: [{
                backgroundColor: ["#cc9880","#ecdfcf"],
                data: [70,30]
            }]
          },
	}

	body () {
		return (
			<div className="Body">
                <h5 style={{marginLeft: "15px"}}>Rewards
                    <img id="rewards" src={rewards} alt="rewards img" style={{marginLeft: "10px", marginRight: "10px", width: "25px"}}/>
                    125pt
                </h5>
                <MDBContainer>
                    <h5 className="mt-5">Overall Score</h5>
                    <Radar data={this.state.dataRadar}
                           options={{ responsive: true, scale:
                            {ticks: {max:100, min:0, stepsize:20, display: false}}}}
                           legend={{ display: false }}/>
                </MDBContainer>
                <h5 style={{marginTop: "30px", marginLeft: "15px"}}>Top5 Frequently Met Friends</h5>
                <MDBContainer>
                    <Doughnut data={this.state.dataDoughnut}
                              options={{ responsive: true }}
                              legend={{ display: false}}
                              />
                </MDBContainer>
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
