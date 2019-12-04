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

    constructor (props) {
        super(props);
        this.state = {
            selected : props.selected,
            selectNum : props.selected,
            type : props.type
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.selected !== prevState.selected ||
            nextProps.selectNum !== prevState.selectNum)
            {
                return {
                    selectNum : nextProps.selectNum,
                    selected : nextProps.selected
                }
            }
        return null
    }
    shouldComponentUpdate = (nextProps, nextState) =>{
        if (this.state.selected !== nextState.selected ||
             this.state.selectNum !== nextState.selected)
             return true
        return false
    }

    

    handleClick =() => {
        const {id, row, cellClick, selected}= this.props
        cellClick(row,id,!selected)
    }

    renderHeart = () => {
        if (this.props.selected) return <img className = "heart" src = {heart} />
        return null
    }
    render(){
        let {
            selected,
            selectNum,
            type
        } = this.state
        switch (type) {
            case "Choose" :
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
                if (selected) selectNum +=1
                if (selectNum > 5) selectNum = 5
                if (selectNum >= 1) {
                    return(
                        <td
                            onClick = {this.handleClick}
                            style = {{backgroundColor : bgColors[selectNum]}}
                        >
                            {this.renderHeart()}
                        </td>
                    )
                }
                else {
                    return (
                        <td
                            onClick = {this.handleClick}
                        >
                        </td>
                    )
                }
             }
    }
}
export default Cell;