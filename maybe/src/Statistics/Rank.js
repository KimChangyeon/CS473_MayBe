/* <div>아이콘 제작자 <a href="https://www.flaticon.com/kr/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/kr/" title="Flaticon">www.flaticon.com</a></div> */
import React, {Component} from 'react'
import {Row, Col, ListGroup, Button} from 'react-bootstrap'
import Popup from 'reactjs-popup'
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';

import '../App.css'
import './Rank.css'

import crown from '../img/crown.png'
// import rewards from "../img/reward.png";
import b1 from "../img/badge1.png"
import b2 from "../img/badge2.png"
import b3 from "../img/badge3.png"
import b4 from "../img/badge4.png"
import b5 from "../img/badge5.png"
import help from "../img/help.png"

class Rank extends Component {
    constructor (props) {
        super(props);
        this.state = {
            friends_reward_rank: [
                // {name: "Juho Kim", reward: 1000},
                // {name: "Sangho Lim", reward: 727},
                // {name: "Jisu Choi", reward: 459},
                // {name: "Seunghee Koh", reward: 120},
                // {name: "Changyeon Kim", reward: 58},
                // {name: "Jiho Jin", reward: 19},
                {name: "(YOU)", reward: this.props.user_reward},
            ]
        }
    }

    componentWillMount () {
        var url_reward_list = '/friend_reward/'.concat(this.props.user_id);
		console.log(url_reward_list);
		fetch(url_reward_list)
			.then(res => res.json())
			.then(answer => this.setState({friends_reward_rank: answer.data}))        
		.catch((error)=>{
			console.log('Error fetching man',error);
        });
        var k = this.state.friends_reward_rank
        k.push({name: "(YOU)", reward: this.props.user_reward});
        this.setState({friends_reward_rank: k});
    }

    reward_rank() {
        var reward_rank = this.state.friends_reward_rank;
        // reward_rank.push({name: "(YOU)", reward: this.props.user_reward});
        reward_rank.sort(function(a,b) {
            return b.reward - a.reward;
        });
        return reward_rank;
    }

    body() {
        const reward = this.props.user_reward;
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
                </h5>
                <h5>Badge
                    <span className="right_val">{badge}</span>
                </h5><hr/>
                <h5>Rank</h5>
                <ListGroup className="rank_chart">
                    <img src={crown} id="crown" alt="crown"/>
                    {this.reward_rank().map((friend, idx)=>
                    {
                            return <ListGroup.Item key={friend}>
                                <Row>
                                    <Col xs="auto">{idx + 1}</Col>
                                    <Col>{friend.name}</Col>
                                    <Col style={{ textAlign: "right" }}>{friend.reward}pt</Col>
                                </Row>
                            </ListGroup.Item>;
                        })}
                </ListGroup>
            </div>
        );
    }

    render() {
		const bar = <div className="Bar">
                        Punctuality Rewards
                        <Popup
                        trigger={<a href="#"><HelpRoundedIcon style={{width: "23px", position: "relative", left: "10px", top: "-1px"}}/></a>} 
                        position = "left top"
                        contentStyle={{width: "250px",zindex: 9999}}>
						{close => (
							<div className="instruction">
								<b className="title">Be Punctual!</b><hr/>
											You can get points as early as<br/>
											you arrived at the appointment.<br/>
											- <b>5pt per minute</b><br/>
											- Max 50pt per appointment<br/>
											If all participants arrive on time,<br/>
											you get <b>double</b> points!<br/>
											<br/>
											<b className="title">Badge</b><hr/>
											Lv.4 Always &nbsp; &nbsp; &nbsp; &nbsp; &ge; 1000pt<br/>
											Lv.3 Usually &nbsp; &nbsp; &nbsp; &nbsp; &ge; &nbsp; 700pt<br/>
											Lv.2 Often &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &ge; &nbsp; 400pt<br/>
											Lv.1 Sometimes &ge; &nbsp; 100pt<br/>
											Lv.0 Never<br/>
							</div>
						)}
			            </Popup>
                    </div>;
		const header = this.props.header(bar, null);
		const body = this.body();
		const content = <div>{header}{body}</div>;
		return content;
    }
}

export default Rank;
