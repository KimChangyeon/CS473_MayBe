import React, {Component} from 'react';
import './Login.css';
import {Button, InputGroup, FormControl} from 'react-bootstrap'

class Login extends Component {

    render() {
        return (
        <div>
            <div className="maybe Darkbrown">MayBe</div>
            <form>
                <div className="IDPW">
                    <InputGroup style={{marginBottom : "20px"}}>
                        <InputGroup.Prepend>
                            <InputGroup.Text>ID</InputGroup.Text> 
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Enter ID"
                        />
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>PW</InputGroup.Text> 
                        </InputGroup.Prepend>
                        <FormControl
                            type="password"
                            placeholder="Enter Password"
                        />
                    </InputGroup>
                </div>
                <div>
                    <Button variant="outline-info" style={{marginRight: "10px"}}>Sign in</Button>
                    <Button variant="info">Log in</Button>
                </div>
            </form>
        </div>
        );
    };
}

export default Login;