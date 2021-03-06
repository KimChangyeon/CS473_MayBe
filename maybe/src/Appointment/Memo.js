import React, {Component} from 'react'
import { InputGroup, FormControl } from 'react-bootstrap';
import '../App.css';

/* Icons */
import complete from '../img/button_complete.png';
import cancel from '../img/button_cancel.png';

class Memo extends Component {
	constructor (props) {
		super(props);
		this.state = {
			memo: this.props.AppointmentMemo
		}
		this.onChange = this.onChange.bind(this);
	}

	onChange (e) {
		const value = e.target.value === '' ? null : e.target.value;
		this.setState({
			memo: value
		});
	}

	submission () {
		var url_final = '/modify_memo/'.concat(this.props.AppointmentId).concat('/').concat(this.state.memo);
		fetch(url_final, {method: "POST"})
			.then(res => res.json(), {method: "POST"})
			.then(answer => console.log(answer.data))        
		.catch((error)=>{
			console.log('Error fetching man',error);
		});
	}

	render () {
		const bar = <div className="Bar">Memo</div>;
		const button =
					<div style={{textAlign: "center", marginTop: "20px"}}>
						<img className="cancel" src={cancel} alt="Cancel"
							onClick={() => this.props.nextStageWithAppointment(0,0)}/>
						<img className="complete" src={complete} alt="Complete"
							onClick={() => {
								this.props.setMemo({memo: this.state.memo});
								this.submission();
								this.props.nextStageWithAppointment(0,0);
								this.props.update();
							}}/>
					</div>
		const header = this.props.header(bar, null);
		const	body =
			<body className="Body2">
				<InputGroup>
					<InputGroup.Prepend>
						<InputGroup.Text id="basic-addon2">Memo</InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl as="textarea" /* aria-label="With textarea" */
						placeholder="Enter a note"
						defaultValue = {this.props.AppointmentMemo}
						onChange={this.onChange}
						style = {{height: "300px"}}
					/>
				</InputGroup>
				{button}
			</body>
		const content = <div>{header}{body}</div>;
		return content;
	}
}

export default Memo;
