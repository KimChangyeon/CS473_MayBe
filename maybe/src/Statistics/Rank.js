/* <div>아이콘 제작자 <a href="https://www.flaticon.com/kr/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/kr/" title="Flaticon">www.flaticon.com</a></div> */
import React, {Component} from 'react'
import {Row, Col, ListGroup} from 'react-bootstrap'
import '../App.css'

import crown from '../img/crown.png'

class Rank extends Component {
    constructor (props) {
        super(props);
        this.state = {
            friends_reward_rank: [
                {name: "Juho Kim", reward: 500},
                {name: "Sangho Lim", reward: 427},
                {name: "Jisu Choi", reward: 359},
                {name: "Seunghee Koh", reward: 120},
                {name: "Changyeon Kim", reward: 58},
                {name: "Jiho Jin", reward: 19},
                // {name: "(YOU)", reward: 0},
            ]
        }
    }

    reward_rank() {
        var reward_rank = this.state.friends_reward_rank;
        reward_rank.push({name: "(YOU)", reward: this.props.user_reward});
        reward_rank.sort(function(a,b) {
            return b.reward - a.reward;
        });
        return reward_rank;
    }

    body() {
        return (
            <div className="Body">
                <ListGroup style={{margin: "70px", position: "relative"}}>
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
        const bar = <div className="Bar">Rank</div>;
		const header = this.props.header(bar, null);
		const body = this.body();
		const content = <div>{header}{body}</div>;
		return content;
    }
}

export default Rank;