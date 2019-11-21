import React, {Component} from 'react'
import {Container, Row, Col, ListGroup} from 'react-bootstrap'
import './App.css'

class Rank extends Component {
    state = {
        friends_reward_rank: {
            "Juho Kim": 500,
            "Sangho Lim": 427,
            "Jisu Choi": 359,
            "Changyeon Kim": 288,
            "(YOU)": 125,
            "Jiho Jin": 59
        }
    }

    body() {
        return (
            <div className="Body">
                <ListGroup style={{margin: "70px"}}>
                    {Object.entries(this.state.friends_reward_rank).map(([key, value], idx)=>
                    <ListGroup.Item>
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