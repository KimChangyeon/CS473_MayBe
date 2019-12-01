import React, {Component} from 'react'
import {Button, InputGroup, FormControl} from 'react-bootstrap'
import './App.css'

class Signup extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <form>
                <div className="IDPW">
                    <InputGroup style={{marginBottom : "20px", width : "50%", marginLeft: "25%"}}>
                        <InputGroup.Prepend name='id'>
                            <InputGroup.Text>Name</InputGroup.Text> 
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Enter your name"
                        />
                    </InputGroup>
                    <InputGroup style={{marginBottom : "20px", width : "50%", marginLeft: "25%"}}>
                        <InputGroup.Prepend name='id'>
                            <InputGroup.Text>ID</InputGroup.Text> 
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Enter ID"
                        />
                    </InputGroup>
                    <InputGroup style={{width : "50%", marginLeft: "25%"}}>
                        <InputGroup.Prepend>
                            <InputGroup.Text name='pw'>PW</InputGroup.Text> 
                        </InputGroup.Prepend>
                        <FormControl
                            type="password"
                            placeholder="Enter Password"
                        />
                    </InputGroup>
                </div>
                <div className="IDPW">
                    <Button variant="outlineflat">Sign-up</Button>
                </div>                    
            </form>
            </div>
        );
    }
}

export default Signup;