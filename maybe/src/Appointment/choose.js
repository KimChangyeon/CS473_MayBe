import React, {Component} from 'react';
import './Choose.css';
import {fiveCandidates, sixCandidates, sevenCandidates, fourCandidates, eightCandidates, nineCandidates, threeCandidates,
    twelveCandidates,oneCandidates,twoCandidates} from './ChooseData';
import {InputGroup, FormControl} from 'react-bootstrap'

let choiceDate = []   
class Choose extends Component {
    constructor (props) {
        super(props);
        this.state = {
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
            choice : [
                {
                    id: 20191125,
                    time : []
                },
                {
                    id : 20191126,
                    time : []
                },
                {
                    id : 20191127,
                    time : []
                },
                {
                    id : 20191128,
                    time: []
                },
                {
                    id : 20191129,
                    time : []
                },
                {
                    id: 20191130,
                    time : []
                },
                {
                    id : 20191201,
                    time : []
                },
            ],
            what: '',
            };
        this.onChange = this.onChange.bind(this);
        
    }
  
    cellClick =(row, id, selected) => {
        this.setState({cells : this.state.cells.map((Row) => 
            Row.row === row
            ? {...Row, cell : Row.cell.map((cell)=> cell.id === id
                ?({...cell,selected : selected})
                :cell)}
            :Row)})
        if (selected)
            this.setState({choice : this.state.choice.map((Day) =>
                Day.id === id
                ? ({...Day, time: Day.time.concat(row)})
                : Day)})
        else{
            this.setState({choice: this.state.choice.map((Day) => 
                Day.id === id
                ? ({...Day, time: Day.time.filter((time) => time !== row ) })
                : Day)})
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
    updateDates =() => {
        const choice = this.state.choice.map((day)=> {
            const time = day.time.sort((a,b)=>a>b)
            return {...day, time : time}
        })
        choiceDate = choice.map((day)=>{
            const times = day.time
            let result = []
            let startTime = 0
            let endTime= 0
            let i=0
            for (i=0; i<times.length;i++){
                if(startTime != 0 && endTime ==0 && times[i] === startTime+1)
                {
                    endTime = times[i]
                    continue;
                }
                else if (times[i] === endTime +1) 
                {   
                    endTime = times[i]
                    continue;
                }
                else
                {
                    if (startTime!= 0 && endTime != 0) result.push(startTime.toString()+" " + (endTime+1).toString())
                    else if (startTime != 0 && endTime == 0) result.push(startTime.toString()+" "+ (startTime+1).toString())
                    startTime = times[i]
                    endTime = 0
                }
            }
            if(startTime != 0 && endTime == 0)
                result.push(startTime.toString()+" " + (startTime+1).toString())
            else if(startTime != 0 && endTime != 0)
                result.push(startTime.toString()+ " "+ (endTime+1).toString())
            return ({id: day.id, time : result})
        })
        console.log("choiceDate : ",choiceDate)
    }

    onChange (e) {
		const value = e.target.value === "" ? null : e.target.value;
		this.props.setAppointmnentName(value);
	}

    render(){
        this.updateDates()
        console.log("state : ",this.state)
        return (
            <div>
                <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Place</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Enter the name of Appointment"
                            onChange={this.onChange}
                            // aria-label="Place"
                            // aria-describedby="basic-addon1"
                        />
                </InputGroup>
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
            </div>
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