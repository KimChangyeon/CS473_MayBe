import React, {Component} from 'react'
import {Button, InputGroup, FormControl, Form} from 'react-bootstrap'
import './App.css'
import './Signup.css'

import calendar from "./img/login_calendar.png"

class Signup extends Component {
    constructor(props) {
        super(props);
        this.handleSignup = this.handleSignup.bind(this);
    }

    handleSignup() {
        this.props.setStage(0);
    }

    render() {
        return (
            <div>
            <img id="login_calendar" src={calendar} alt="logo calendar" />
            <div className="maybe">MayBe</div>
            <form>
                <div className="IDPW">
                    <InputGroup style={{marginBottom : "20px", width : "50%", marginLeft: "25%"}}>
                        <InputGroup.Prepend name='id'>
                            <InputGroup.Text>Name</InputGroup.Text> 
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Enter Your Name"
                        />
                    </InputGroup>
                    <InputGroup style={{marginBottom : "20px", width : "50%", marginLeft: "25%"}}>
                        <InputGroup.Prepend name='id'>
                            <InputGroup.Text style={{paddingLeft: "23px"}}>ID</InputGroup.Text> 
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Enter ID"
                        />
                    </InputGroup>
                    <InputGroup style={{width : "50%", marginLeft: "25%"}}>
                        <InputGroup.Prepend name='pw'>
                            <InputGroup.Text style={{paddingLeft: "19px"}}>PW</InputGroup.Text> 
                        </InputGroup.Prepend>
                        <FormControl
                            type="password"
                            placeholder="Enter Password"
                        />
                    </InputGroup>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="I consent to disclose my schedule and points to friends." />
                    </Form.Group>
                </div>
                <div className="IDPW">
                    <Button variant="outlineflat" onClick={this.handleSignup}>Sign-up</Button>
                </div>                    
            </form>
            </div>
        );
    }
}

export default Signup;
