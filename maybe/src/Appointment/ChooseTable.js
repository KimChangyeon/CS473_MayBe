import React, {Component} from 'react';
/* Data */
import {fiveCandidates, sixCandidates, sevenCandidates, fourCandidates, threeCandidates,
    twelveCandidates,oneCandidates,twoCandidates} from './ChooseData';
import {fiveVoteCandidates, sixVoteCandidates, sevenVoteCandidates, fourVoteCandidates,
        threeVoteCandidates, twelveVoteCandidates, oneVoteCandidates, twoVoteCandidates} from './VoteData'
/* UI library */
import {InputGroup, FormControl} from 'react-bootstrap'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

/* other files */
import Cell from './Cell'
import FriendIcons from './FriendIcons'
import './ChooseTable.css'

let choiceDate = []


function handling_schedule (schedules) {
    var answer = [];
    for (var i = 0 ; i < schedules.length ; i ++) {
      var modified = {};
      var schedule = schedules[i];
      var StartTime = schedule['StartTimeslot'];
      var EndTime = schedule['EndTimeslot'];
      modified['id'] = i;
      modified['DateId'] = schedule['DateId']; //20191128
      modified['title'] = schedule['What']; //제목
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
            chooseCells : [
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
            voteCells : [
                {
                    row : 12,
                    cell : twelveVoteCandidates
                },
                {
                    row : 13,
                    cell : oneVoteCandidates
                },
                {
                    row : 14,
                    cell : twoVoteCandidates
                },
                {
                    row : 15,
                    cell : threeVoteCandidates
                },
        
                {
                    row : 16,
                    cell : fourVoteCandidates
                },
                {
                    row : 17, 
                    cell : fiveVoteCandidates
                }, 
                {
                    row : 18, 
                    cell : sixVoteCandidates
                }, 
                {
                    row: 19, 
                    cell : sevenVoteCandidates
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
            friends : [
                {
                    name : "jisu",
                    img : 0
                },
                {
                    name : "jiho",
                    img : 2
                }
            ],
            what: '',
            user_schedule: []
            };
        this.onChange = this.onChange.bind(this);
    }

    componentWillMount () {
        if (this.props.type === 'vote') {
            var url_vote = '/vote_result/'.concat(this.props.AppointmentId);
            fetch(url_vote)
                .then(res => res.json())
                .then(answer => this.setState({vote_result: answer.data}))        
            .catch((error)=>{
                console.log('Error fetching man',error);
            });
            console.log(this.state.vote_result);
        }
	}
  
    cellClick =(row, id, selected) => {
        let updatedCells=[]
        let updatedChoice = []
        if (this.props.type == "Choose"){
            updatedCells = this.state.chooseCells.map((Row) => 
                    Row.row === row
                    ? {...Row, cell : Row.cell.map((cell)=> cell.id === id
                        ?({...cell,selected : selected})
                        :cell)}
                    :Row)
        }
        if (this.props.type == "Vote") {
            updatedCells = this.state.voteCells.map((Row) => 
                Row.row === row
                ? {...Row, cell : Row.cell.map((cell)=> cell.id === id
                    ?({...cell,selected : selected})
                    :cell)}
                :Row)
        }
        if (selected){
            updatedChoice = this.state.choice.map((Day) =>
                Day.id === id
                ? ({...Day, time: Day.time.concat(row)})
                : Day)
        }
            
        else{
            updatedChoice = this.state.choice.map((Day) => 
                Day.id === id
                ? ({...Day, time: Day.time.filter((time) => time !== row ) })
                : Day)
        }
        console.log("updatedChoice : ", updatedChoice)
        this.updateDates(updatedChoice);
        //setState
        if(this.props.type == "Choose") this.setState({chooseCells : updatedCells, choice : updatedChoice})
        else this.setState({voteCells : updatedCells, choice : updatedChoice})
   }
   
    renderRow = () =>{
        console.log("renderRow",this.props.type)
        let renderCells = []
        if (this.props.type === "Choose") {
            renderCells = this.state.chooseCells.map((Row) => {
                return (
                    <tr>
                        <td scope = "row">{Row.row}</td>
                        {this.renderCell(Row.row,Row.cell)}
                    </tr>
                )
            })
        }
        else {
            renderCells = this.state.voteCells.map((Row) => {
                return (
                    <tr>
                        <td scope = "row">{Row.row}</td>
                        {this.renderCell(Row.row,Row.cell)}
                    </tr>
                )
            })
        }
        return renderCells
    }
        
    
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

    renderFriends = () => {
        if (this.state.friends.length != 0) {
            return (
                <Grid container item xs = {20} spacing = {1}>
                    <Grid item xs = {5}>
                        <Typography variant = "h6" ><span style = {{fontFamily : "ubuntu"}}>Completed Friends</span></Typography>
                    </Grid>
                    {this.state.friends.map((friend)=>
                        <Grid item xs = {1}>
                            <FriendIcons
                                img = {friend.img}
                                name = {friend.name}/>
                        </Grid>)}
                </Grid>
            )
        }
        return null
    }

    updateDates =(updatedChoice) => {
        const choice = updatedChoice.map((day)=> {
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
        if (this.props.type === "Choose")
            this.props.setTimeSlot(choiceDate);
    }

    onChange = (e)=> {
		const value = e.target.value === "" ? null : e.target.value;
		this.props.setAppointmentName(value);
	}

    renderInputBox = () => {
        if (this.props.type === "Choose")
            return (
                <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Enter the name of Appointment"
                            onChange={this.onChange}
                            // aria-label="Place"
                            // aria-describedby="basic-addon1"
                        />
                </InputGroup>
            )
        else return null
    }

    render(){
        // this.updateDates();
        console.log("type : ",this.props.type)
        return (
            <div>
                {this.renderInputBox()}
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
                {this.renderFriends()}
            </div>
        )
    }
    
}

export default ChooseTable;
