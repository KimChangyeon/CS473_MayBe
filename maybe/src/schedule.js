import React, {Component} from "react";
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";

class Schedule extends Component {
    static defaultProps = {
        name : 'basic'
    }
    state = {
        number : 0
    }

    handleIncrease = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    handleDecrease = () => {
        this.setState({
            number: this.state.number -1
        })
    }
    render(){
        const style = {
            backgroundColor : 'black',
            padding : '16px',
            color : 'white',
            fontSize: '12px'
        }
        const name = 'react';
        return (
            <div style = {style}>
                {this.props.name}
                <div>
                    <button onClick={this.handleIncrease}>+</button>
                    <button onClick={this.handleDecrease}>-</button>
                </div>
                <div>
                    {this.state.number}
                </div>
            </div>
        )
    }
}

export default Schedule;