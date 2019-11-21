/* <div>아이콘 제작자 <a href="https://www.flaticon.com/kr/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/kr/" title="Flaticon">www.flaticon.com</a></div> */
import React, {Component} from 'react'
import {Row, Col, ListGroup} from 'react-bootstrap'
import './App.css'

import crown from './img/crown.png'

class Rank extends Component {
    state = {
        friends_reward_rank: {
            "Juho Kim": 500,
            "Sangho Lim": 427,
            "Jisu Choi": 359,
            "Seunghee Koh": 300,
            "Changyeon Kim": 288,
            "(YOU)": 125,
            "Jiho Jin": 59
        }
    }

    body() {
        return (
            <div className="Body">
                <ListGroup style={{margin: "70px", position: "relative"}}>
                    <img src={crown} id="crown" />
                    {Object.entries(this.state.friends_reward_rank).map(([key, value], idx)=>
                    <ListGroup.Item key={key}>
                        <Row>
                            <Col xs="auto">{idx+1}</Col>
                            <Col>{key}</Col>
                            <Col style={{textAlign: "right"}}>{value}pt</Col>
                        </Row>
                    </ListGroup.Item>)}
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