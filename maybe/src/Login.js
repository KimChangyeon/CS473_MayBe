import React, {Component} from 'react'
import './Login.css'
import {Button, InputGroup, FormControl} from 'react-bootstrap'
import calendar from "./img/login_calendar.png"

class Login extends Component {

    render() {
        return (
        <div>
            <img id="login_calendar" src={calendar} alt="logo calendar" />
            <div className="maybe">MayBe</div>
            <form>
                <div className="IDPW">
                    <InputGroup style={{marginBottom : "20px", width : "50%", marginLeft: "25%"}}>
                        <InputGroup.Prepend>
                            <InputGroup.Text>ID</InputGroup.Text> 
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Enter ID"
                        />
                    </InputGroup>
                    <InputGroup style={{width : "50%", marginLeft: "25%"}}>
                        <InputGroup.Prepend>
                            <InputGroup.Text>PW</InputGroup.Text> 
                        </InputGroup.Prepend>
                        <FormControl
                            type="password"
                            placeholder="Enter Password"
                        />
                    </InputGroup>
                </div>
                <div className="IDPW">
                    <Button variant="outlineflat" style={{marginRight: "10px"}}>Sign in</Button>
                    <Button variant="flat" onClick={()=>this.props.nextStage()}>Log in</Button>
                </div>
            </form>
        </div>
        );
    };
}

export default Login;