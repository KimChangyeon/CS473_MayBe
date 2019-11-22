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
        ],
        choice : []
    }
  
    cellClick =(row, id, selected) => {
        this.setState({cells : this.state.cells.map((Row) => 
            Row.row === row
            ? {...Row, cell : Row.cell.map((cell)=> cell.id === id
                ?({...cell,selected : selected})
                :cell)}
            :Row)})
        if (selected) {
            this.setState({choice : this.state.choice.concat({row: row, id: id})})
        }
        else{
            this.setState({choice: this.state.choice.filter(cell=>cell.row !== row && cell.id !== id)})
        }
   }
   
    renderRow = () =>
        this.state.cells.map((Row) => {
            return (
                <tr>
                    <td scope = "row">{Row.row}</td>
                    {this.renderCell(Row.row,Row.cell)}
                </tr>
            )
        })
    
    renderCell = (row, cells) =>{
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
        console.log(this.state)
        return (
            <table class="table table-bordered" >
                <thead>
                    <tr>
                        <th scope = "col" >TIME</th>
                        <th scope="col">MON</th>
                        <th scope="col">TUE</th>
                        <th scope="col">WED</th>
                        <th scope="col">THU</th>
                        <th scope="col">FRI</th>
                        <th scope="col">SAT</th>
                        <th scope="col">SUN</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRow()}
                </tbody>
            </table>
        )
    }
    
}

class Cell extends Component {

    shouldComponentUpdate = nextProps =>
    this.props.selected !== nextProps.selected;

    handleClick =() => {
        const {id, row, cellClick, disabled, selected}= this.props
        if (!disabled) cellClick(row,id,!selected)
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