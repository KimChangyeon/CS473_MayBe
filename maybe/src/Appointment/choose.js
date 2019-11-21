import React, {Component} from 'react';
import './Choose.css';
import {fiveCandidates, sixCandidates, sevenCandidates} from './ChooseData';

class Choose extends Component {

    state = {
        cells : [
                    {
                        row : 5, 
                        cell : fiveCandidates
                    }, 
                    {
                        row : 6, 
                        cell : sixCandidates
                    }, 
                    {
                        row: 7, 
                        cell : sevenCandidates
                    }
                ]
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
                    <td>{Row.row}</td>
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
                <tbody>
                <tr>
                    <td style={{width : 30}}>#</td>
                    <td>MON</td>
                    <td>TUE</td>
                    <td>WED</td>
                    <td>THU</td>
                    <td>FRI</td>
                    <td>SAT</td>
                    <td>SUN</td>
                </tr>
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
            ></td>
        )
    }
}
export default Choose;