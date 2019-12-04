import React, {Component} from 'react';
/* Data */
import {fiveCandidates, sixCandidates, sevenCandidates, fourCandidates,
        threeCandidates, twelveCandidates, oneCandidates, twoCandidates} from './VoteData'
/* UI library */
import {InputGroup, FormControl} from 'react-bootstrap'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

/* other files */
import Cell from './Cell'
import FriendIcons from './FriendIcons'
import './ChooseTable.css'

let choiceDate = []
let friendSet= new Set()

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
                    id: 20191202,
                    time : []
                },
                {
                    id : 20191203,
                    time : []
                },
                {
                    id : 20191204,
                    time : []
                },
                {
                    id : 20191205,
                    time: []
                },
                {
                    id : 20191206,
                    time : []
                },
                {
                    id: 20191207,
                    time : []
                },
                {
                    id : 20191208,
                    time : []
                },
            ],
            what: '',
            user_schedule: [],
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

    updateVoteCells=(stateVoteCell)=> {
            let DateId
            let EndTime
            let StartTime
            let Username
            let updatedCell
            let updatedVoteCells = stateVoteCell
            let i = 0
            
            console.log('vote_result in choosetable.js : ',this.props.vote_result)
            this.props.vote_result.map((vote)=>{
                DateId = vote.DateId
                EndTime = vote.EndTime
                StartTime = vote.StartTime
                Username = vote.UserName
                
                //set user name first
                friendSet.add(Username)

                //update votedata using given vote results
                for (i=StartTime; i<EndTime; i++){
                    updatedVoteCells = updatedVoteCells.map((data)=>{
                        if (data.row === i){
                            updatedCell = data.cell.map((content)=>
                            content.id === DateId
                            ? {...content, 
                                selectNum : content.selectNum + 1}
                            :content)
                            return {...data, cell : updatedCell}
                        }
                        else{
                            return data
                        }
                    })
                }
            })
    
            return updatedVoteCells
    }

    updateFriendList = () => {
        const friendList = Array.from(friendSet)
            let friend
            let friendState =[]
            let index = 0
            for (friend of friendList) {
                friendState.push({
                    name : friend,
                    img : index
                })
                index ++
            }
        return friendState
    }
  
    cellClick =(row, id, selected) => {
        let updatedCells=[]
        let updatedChoice = []

        /*update cells */
        updatedCells = this.state.cells.map((Row) => 
                Row.row === row
                ? {...Row, cell : Row.cell.map((cell)=> cell.id === id
                    ?({...cell,selected : selected})
                    :cell)}
                :Row)

        /* update choice*/
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

        this.updateDates(updatedChoice);
        console.log("updatedChoice : ", updatedChoice)
        //setState
        this.setState({cells : updatedCells, choice : updatedChoice})
   }
   
    renderRow = () =>{
        let renderCells = []
        if (this.props.type === "Choose") {
            renderCells = this.state.cells.map((Row) => {
                return (
                    <tr>
                        <td scope = "row">{Row.row}</td>
                        {this.renderCell(Row.row,Row.cell)}
                    </tr>
                )
            })
        }
        else {
            const updatedVoteCells=this.updateVoteCells(this.state.cells)
            console.log("updatedvotecells :", updatedVoteCells)
            renderCells = updatedVoteCells.map((Row) => {
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
                        selected = {cell.selected}
                        cellClick = {this.cellClick}
                        type = {this.props.type}
                        selectNum = {cell.selectNum}
                    />
                )
        )
    }

    renderFriends = () => {        
        if ( this.props.type == "Vote") {
            const friend_list=this.updateFriendList()
            return (
                <Grid container item xs = {20} spacing = {1}>
                    <Grid item xs = {4.5}>
                        <Typography variant = "h6" ><span style = {{fontFamily : "ubuntu"}}>Completed Friends</span></Typography>
                    </Grid>
                    {friend_list.map((friend)=>
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
        else this.props.updateChoice(choiceDate)
    }

    onChange = (e)=> {
		const value = e.target.value === "" ? null : e.target.value;
		this.props.setAppointmentName(value);
	}

    render(){
        // console.log("vote_result :", this.props.vote_result)
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
