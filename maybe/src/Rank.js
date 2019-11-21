import React, {Component} from 'react'
import {HorizontalBar} from 'react-chartjs-2'
import './App.css'

class Rank extends Component {
    state = {
        friends_rewards_rank: {
            labels: [
                'Juho Kim', 'Sangho Lim', 'Jisu Choi', 'Changyeon Kim', 'Jiho Jin'
            ],
            datasets: [
                {
                    label: "rewards",
                    data: [300, 200, 190, 150, 50]
                }
            ]
        }
    }

    body() {
        return (
            <div className="Body">
                <HorizontalBar data={this.state.friends_rewards_rank}
                    options= {{
                        scales: {xAxes: [{ticks: {
                            beginAtZero: true
                        }}]}
                    }}
                />
            </div>
        );
    }

    render() {
        const bar = <div className="Bar">Rank</div>;
		const header = this.props.header(bar, null);
		const body = this.body();
		const content = <div>{header}{body}</div>;
		return content;
    }
}

export default Rank;