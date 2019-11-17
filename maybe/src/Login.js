import React, {Component} from 'react'
import './Login.css'
import {Button, InputGroup, FormControl} from 'react-bootstrap'
import calendar from "./img/login_calendar.png"

class Login extends Component {

    constructor(props) {
		super(props);
		this.state = {
            id: '',
            pw: '',
            result: [],
        }
        this.id = React.createRef(); 
        this.pw = React.createRef(); 
        this.login_process= this.login_process.bind(this);
	}

    login_process ()  {
        const pw = this.state.pw
        var result = [];
        if (pw.length <= 0)
            alert('YOU SHOULD WRITE YOUR PASSWORD.');
        else
        {
            var url_final = '/login/'.concat(this.state.id).concat('/').concat(this.state.pw);
            fetch(url_final)
                .then(res => res.json())
                .then(answer => this.setState({result: answer.data}))
            .catch((error)=>{
                console.log('Error fetching man',error);
            });
            if (this.state.answer.length > 0)
                this.props.nextStage()
            else
                alert("THERE'S NO SUCH ID AND PASSWORD MATCHED.");
        }
    }

    handleId() {
        this.setState({id: this.id.current.value});
    }

    handlePw() {
        this.setState({pw: this.pw.current.value});
    }

    render() {
        return (
        <div>
            <img id="login_calendar" src={calendar} alt="logo calendar" />
            <div className="maybe">MayBe</div>
            <form>
                <div className="IDPW">
                    <InputGroup style={{marginBottom : "20px", width : "50%", marginLeft: "25%"}}>
                        <InputGroup.Prepend onChange={this.handleId} value={this.state.id} name='id'>
                            <InputGroup.Text>ID</InputGroup.Text> 
                            {/* <InputGroup.Text >ID</InputGroup.Text>  */}
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Enter ID"
                            ref = {this.id}
                            onChange={() => this.handleId()}
                            // inputRef = {(input) => this.setState({id: input})}
                        />
                    </InputGroup>
                    <InputGroup style={{width : "50%", marginLeft: "25%"}}>
                        <InputGroup.Prepend>
                            <InputGroup.Text onChange={this.handlePw} value={this.state.pw} name='pw'>PW</InputGroup.Text> 
                            {/* <InputGroup.Text >PW</InputGroup.Text>  */}
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
                    <Button variant="outlineflat" style={{marginRight: "10px"}}>Sign in</Button>
                    <Button variant="flat" onClick={this.login_process}>Log in</Button>
                </div>                    
            </form>
        </div>
        );
    };
}

export default Login;