import React, {Component} from 'react'
import { InputGroup, FormControl } from 'react-bootstrap';
import './App.css';

/* Icons */
import complete from './img/button_complete.png';
import cancel from './img/button_cancel.png';

class Memo extends Component {
	constructor (props) {
		super(props);
		this.state = {
			memo: null
		}
		this.onChange = this.onChange.bind(this);
	}

	onChange (e) {
		const value = e.target.value == "" ? null : e.target.value;
		this.setState({
			memo: value
		});
	}

	render () {
		const bar = <div className="Bar">Memo</div>;
		const button =
        <ul>
        	<li>
              <img className="complete" src={complete} alt="Complete"
                onClick={() => {
                  this.props.setMemo({memo: this.state.memo});
                  this.props.nextStage(0);
                }}/>
          </li>
          <li>
              <img className="cancel" src={cancel} alt="Cancel"
                onClick={() => this.props.nextStage(0)}/>
          </li>
        </ul>;
		const header = this.props.header(bar, button);
		const	body =
			<body className="Body">
				<InputGroup>
					<InputGroup.Prepend>
						<InputGroup.Text id="basic-addon2">Memo</InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl as="textarea" /* aria-label="With textarea" */
						placeholder="Enter a note"
						onChange={this.onChange}
					/>
				</InputGroup>
			</body>
		const content = <div>{header}{body}</div>;
		return content;
	}
}

export default Memo;