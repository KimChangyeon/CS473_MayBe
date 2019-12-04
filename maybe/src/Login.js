import React, {Component} from 'react'
import './Login.css'
import './App.css'
import {Button, InputGroup, FormControl} from 'react-bootstrap'
import Popup from 'reactjs-popup'

import calendar from "./img/login_calendar.png"
import help from "./img/help.png"

class Login extends Component {

    constructor(props) {
				super(props);
				this.state = {
            id: '',
            pw: '',
            result: {},
            l: 1,
        }
        this.id = React.createRef(); 
        this.pw = React.createRef(); 
        this.login_process= this.login_process.bind(this);
        this.signup = this.signup.bind(this);
    }
    
    signup () {
        this.props.setStage(2);
    }

    login_process ()  {
        
        var url_final = '/login/'.concat(this.state.id).concat('/').concat(this.state.pw);
            fetch(url_final)
                .then(res => res.json())
                .then(answer => this.setState({result: answer.data[0], l: 0}))
            .catch((error)=>{
                console.log('Error in LOGIN',error);
            });
        
    }

    handleId() {
        this.setState({id: this.id.current.value});
    }

    handlePw() {
        this.setState({pw: this.pw.current.value});
    }

    render() {
        const pw = this.state.pw
        if (this.state.l === 0){
            if (pw.length <= 0)
                alert('YOU SHOULD WRITE YOUR PASSWORD.');
            else
            {
                if (Object.keys(this.state.result).length > 0){
                    this.props.setUserId(this.state.result['UserId']);
                    this.props.setReward(this.state.result['Reward']);
                    this.props.setStage(1);
                }
                else
                    alert("THERE'S NO SUCH ID AND PASSWORD MATCHED.");
            }
				// this.props.setStage(1);
        }

        return (
        <div>
            <img id="login_calendar" src={calendar} alt="logo calendar" />
            <div className="maybe">MayBe</div>
            <form>
                <div className="IDPW">
                    <InputGroup style={{marginBottom : "20px", width : "50%", marginLeft: "25%"}}>
                        <InputGroup.Prepend onChange={this.handleId} value={this.state.id} name='id'>
                            <InputGroup.Text id="basic-addon4">ID</InputGroup.Text> 
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Enter ID"
                            ref = {this.id}
                            onChange={() => this.handleId()}
                            // inputRef = {(input) => this.setState({id: input})}
                        />
                    </InputGroup>
                    <InputGroup style={{width : "50%", marginLeft: "25%"}}>
                        <InputGroup.Prepend onChange={this.handlePw} value={this.state.pw} name='pw'>
                            <InputGroup.Text id="basic-addon4">PW</InputGroup.Text> 
                        </InputGroup.Prepend>
                        <FormControl
                            type="password"
                            placeholder="Enter Password"
                            ref = {this.pw}
                            onChange={() => this.handlePw()}
                        />
                    </InputGroup>
                </div>
                <div className="IDPW">
                    <Button variant="outlineflat" style={{marginRight: "10px"}} onClick={this.signup}>Sign-up</Button>
                    <Button variant="flat" onClick={this.login_process}>Log-in</Button>
                </div>                    
            </form>
            <Popup trigger={<img id="help_login" src={help} alt="help"/>} 
                position = "right center"
                contentStyle={{width: "350px",zindex :9999}}>
						{close => ( 
							<div style={{margin: "5px"}}>
								Login with the guest account to look around.<br/>
                                <b>ID: guest PW: 0000</b><br/>
                                Or sign up to make a private account.<br/>
                                <Button variant="outlineflat" style={{float: "right"}}
                                    onClick={()=>{close()}}>OK</Button>
							</div>
						)}
			</Popup>
        </div>
        );
    };
}

export default Login;
