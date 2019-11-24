import React, {Component} from 'react';
import {fiveCandidates, sixCandidates, sevenCandidates, fourCandidates, eightCandidates, nineCandidates, threeCandidates,
    twelveCandidates,oneCandidates,twoCandidates} from './ChooseData';
import {InputGroup, FormControl} from 'react-bootstrap'
import Cell from './Cell'


let choiceDate = []
function handling_schedule (schedules) {
    var answer = [];
    for (var i = 0 ; i < schedules.length ; i ++) {
      var modified = {};
      var schedule = schedules[i];
      var StartTime = schedule['StartTimeslot'];
      var EndTime = schedule['EndTimeslot'];
      modified['id'] = i;
      modified['DateId'] = schedule['DateId'];
      modified['title'] = schedule['Memo'];
      modified['startDate'] = StartTime;
      modified['endDate'] = EndTime;
      answer.push(modified);
    }
  
    return answer;
  }

class ChooseTable extends Component {
    constructor (props) {
        super(props);
        this.state = {
            cells : [
                {
                    row : 12,
                    cell : twelveCandidates
                },
                {
                    row : 13,
                    cell : oneCandidates
                },
                {
                    row : 14,
                    cell : twoCandidates
                },
                {
                    row : 15,
                    cell : threeCandidates
                },
        
                {
                    row : 16,
                    cell : fourCandidates
                },
                {
                    row : 17, 
                    cell : fiveCandidates
                }, 
                {
                    row : 18, 
                    cell : sixCandidates
                }, 
                {
                    row: 19, 
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
            user_schedule: []
            };
        this.onChange = this.onChange.bind(this);
    }

    componentWillMount () {
        var url_final = '/sch/'.concat(this.props.user_id);
        console.log(url_final);
        fetch(url_final)
            .then(res => res.json())
            .then(answer => this.setState({user_schedule: handling_schedule(answer.data)}))        
        .catch((error)=>{
            console.log('Error fetching man',error);
        });
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
        this.updateDates();
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
                        type = {this.props.type}
                        selectNum = {cell.selectNum}
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
                if(startTime !== 0 && endTime === 0 && times[i] === startTime+1)
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
                    if (startTime!== 0 && endTime !== 0) result.push(startTime.toString()+" " + (endTime+1).toString())
                    else if (startTime !== 0 && endTime === 0) result.push(startTime.toString()+" "+ (startTime+1).toString())
                    startTime = times[i]
                    endTime = 0
                }
            }
            if(startTime !== 0 && endTime === 0)
                result.push(startTime.toString()+" " + (startTime+1).toString())
            else if(startTime !== 0 && endTime !== 0)
                result.push(startTime.toString()+ " "+ (endTime+1).toString())
            return ({id: day.id, time : result})
        })
        console.log("choiceDate : ",choiceDate)
        this.props.setTimeSlot(choiceDate);
    }

    onChange (e) {
		const value = e.target.value === "" ? null : e.target.value;
		this.props.setAppointmentName(value);
	}

    render(){
        // this.updateDates();
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

export default ChooseTable;