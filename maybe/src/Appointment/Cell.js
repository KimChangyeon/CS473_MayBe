import React, {Component} from 'react';
import './Cell.css'
import heart from '../img/heart.png'

const bgColors = {
    1 : "#ffe6e6",
    2 : "#ffcccc",
    3 : "#ffb3b3",
    4 : "#ff9999",
    5 : "#ff8080"
}

class Cell extends Component {

    shouldComponentUpdate = nextProps =>
    this.props.selected !== nextProps.selected;

    handleClick =() => {
        const {id, row, cellClick, disabled, selected}= this.props
        if (!disabled) cellClick(row,id,!selected)
    }

    renderHeart = () => {
        {/* <img className = "hamburger" src = {hamburger}/> */}
        if (this.props.selected) return <img className = "heart" src = {heart} />
        return null
    }
    render(){
        let className = ""
        let {
            disabled,
            selected,
            type,
            selectNum
        } = this.props
        if (disabled){
            className = "cell-disabled"
        }else{
            className = "cell-enabled"
            if (selected){
                className = "cell-selected"
            }
        }
        switch (type) {
            case "Choose" :
                console.log("props type : choose")
                if (selected) {
                    return (
                        <td
                            onClick = {this.handleClick}
                            style = {{backgroundColor : bgColors[1]}}
                        ></td>
                    )
                }
                else {
                    return (
                        <td
                            onClick = {this.handleClick}
                        ></td>
                    )
                }
            case "Vote" :
                console.log ("props type : vote")
                if (selected) {
                    if (selectNum >= 5) selectNum = 5
                    else selectNum += 1
                }
                return(
                    <td
                        onClick = {this.handleClick}
                        style = {{backgroundColor : bgColors[selectNum]}}
                    >
                        {this.renderHeart()}
                    </td>
                )
             }
    }
}
export default Cell;