import React, {Component} from 'react'
import {Button, InputGroup, FormControl} from 'react-bootstrap'
import './App.css'

class Signup extends Component {
    render() {
        return (
            <div>
            <form>
                <div className="IDPW">
                    <InputGroup style={{marginBottom : "20px", width : "50%", marginLeft: "25%"}}>
                        <InputGroup.Prepend onChange={this.handleId} value={this.state.id} name='id'>
                            <InputGroup.Text>ID</InputGroup.Text> 
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Enter ID"
                            // ref = {this.id}
                            // onChange={() => this.handleId()}
                        />
                    </InputGroup>
                    <InputGroup style={{width : "50%", marginLeft: "25%"}}>
                        <InputGroup.Prepend>
                            <InputGroup.Text onChange={this.handlePw} value={this.state.pw} name='pw'>PW</InputGroup.Text> 
                        </InputGroup.Prepend>
                        <FormControl
                            type="password"
                            placeholder="Enter Password"
                            // ref = {this.pw}
                            // onChange={() => this.handlePw()}
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