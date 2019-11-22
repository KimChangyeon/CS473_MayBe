import React, {Component} from 'react';
import './Choose.css';
import {fiveCandidates, sixCandidates, sevenCandidates, fourCandidates, eightCandidates, nineCandidates, threeCandidates,
    twelveCandidates,oneCandidates,twoCandidates} from './ChooseData';

class Choose extends Component {

    state = {
        cells : [
                    {
                        row : '12AM',
                        cell : twelveCandidates
                    },
                    {
                        row : '1PM',
                        cell : oneCandidates
                    },
                    {
                        row : '2PM',
                        cell : twoCandidates
                    },
                    {
                        row : '3PM',
                        cell : threeCandidates
                    },
            
                    {
                        row : '4PM',
                        cell : fourCandidates
                    },
                    {
                        row : '5PM', 
                        cell : fiveCandidates
                    }, 
                    {
                        row : '6PM', 
                        cell : sixCandidates
                    }, 
                    {
                        row: '7PM', 
                        cell : sevenCandidates
                    },
                    {
                        row : '8PM',
                        cell : eightCandidates,
                    },
                    {
                        row : '9PM',
                        cell : nineCandidates
                    }
                ],
        friends: this.props.friends
    }

    cellClick =(row, id) => {
        this.setState({
            cells : this.state.cells.map((Row) => 
                Row.row === row
                ? {...Row, cell : Row.cell.map((cell)=> cell.id === id
                    ?({...cell,selected : !cell.selected})
                    :cell)}
                :Row)
        })
    }

    renderRow = () => 
        this.state.cells.map((Row) => {
            return (
                <tr>
                    <td style = {{width : 50}}>{Row.row}</td>
                    {this.renderCell(Row.row,Row.cell)}
                </tr>
            )
        })

    renderCell = (row, cells)=>{
        return (
            cells.map((cell)=>
                    <Cell 
                        id = {cell.id}
                        row = {row}
                        disabled = {cell.disabled}
                        selected = {cell.selected}
                        cellClick = {this.cellClick}
                    />
            )
        )
    }
        

    render(){
        return (
            <table class="table table-bordered" >
                <tr>
                    <thead>
                        <td style = {{width : 75}}>TIME</td>
                        <td style = {{width : 60}}>MON</td>
                        <td style = {{width : 65}}>TUE</td>
                        <td style = {{width : 65}}>WED</td>
                        <td style = {{width : 65}}>THU</td>
                        <td style = {{width : 65}}>FRI</td>
                        <td style = {{width : 65}}>SAT</td>
                        <td style = {{width : 65}}>SUN</td>
                    </thead>
                </tr>
                <tbody>
                <tr>
                    {this.renderRow()}
                </tr>
                </tbody>
            </table>
        )
    }
    
}

class Cell extends Component {

    shouldComponentUpdate = nextProps =>
    this.props.selected !== nextProps.selected;

    handleClick =() => {
        const {id, row, cellClick}= this.props
        cellClick(row,id)
    }

    render(){
        let className = ""
        let {
            disabled,
            selected,
        } = this.props
        if (disabled){
            className = "cell-disabled"
        }else{
            className = "cell-enabled"
            if (selected){
                className = "cell-selected"
            }
        }
        return (
            <td
                className = {className}
                onClick = {this.handleClick}
                style = {{width : 70}}
            ></td>
        )
    }
}
export default Choose;