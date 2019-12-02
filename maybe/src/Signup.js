import React, {Component} from 'react'
import {Button, InputGroup, FormControl, Form} from 'react-bootstrap'
import './App.css'
import './Signup.css'

import calendar from "./img/login_calendar.png"

class Signup extends Component {
    constructor(props) {
        super(props);
		this.state = {
			new_name: '',	// Name 입력
			new_id:	'', // ID 입력
			new_pw: '' // PW 입력
		}
        this.handleSignup = this.handleSignup.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.onChangeName = this.onChangeName.bind(this);
		this.onChangeId = this.onChangeId.bind(this);
		this.onChangePw = this.onChangePw.bind(this);
    }

    handleSignup() {
		if (this.state.new_name.length <= 0) alert('YOU SHOULD WRITE YOUR NAME.');
		else if (this.state.new_id.length <= 0) alert('YOU SHOULD WRITE YOUR ID.');
		else if (this.state.new_pw.length <= 0) alert('YOU SHOULD WRITE YOUR PASSWORD.');
		else this.props.setStage(0);
    }

	handleCancel() {
		this.props.setStage(0);
	}

	onChangeName (e) {
		this.setState({
			new_name: e.target.value
		})
	}

	onChangeId (e) {
		this.setState({
			new_id: e.target.value
		})
	}

	onChangePw (e) {
		this.setState({
			new_pw: e.target.value
		})
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
							onChange={this.onChangeName}
                        />
                    </InputGroup>
                    <InputGroup style={{marginBottom : "20px", width : "50%", marginLeft: "25%"}}>
                        <InputGroup.Prepend name='id'>
                            <InputGroup.Text style={{paddingLeft: "23px"}}>ID</InputGroup.Text> 
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Enter ID"
							onChange={this.onChangeId}
                        />
                    </InputGroup>
                    <InputGroup style={{width : "50%", marginLeft: "25%"}}>
                        <InputGroup.Prepend name='pw'>
                            <InputGroup.Text style={{paddingLeft: "19px"}}>PW</InputGroup.Text> 
                        </InputGroup.Prepend>
                        <FormControl
                            type="password"
							onChange={this.onChangePw}
                            placeholder="Enter Password"
                        />
                    </InputGroup>
										<br/>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="I consent to disclose my schedule and points to friends." />
                    </Form.Group>
                </div>
                <div className="IDPW">
                    <Button variant="outlineflat" style={{marginRight: "10px"}}onClick={this.handleCancel}>Cancel</Button>
                    <Button variant="flat" onClick={this.handleSignup}>Sign-up</Button>
                </div>                    
            </form>
            </div>
        );
    }
}

export default Signup;
