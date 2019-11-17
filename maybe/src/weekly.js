import React, {Component} from 'react';
import './weekly.css';
import { makeStyles } from '@material-ui/core/styles';
import {Box, Button, Drawer, List,ListItem, ListItemIcon, ListItemText,Divider  } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Card from './card'
import Question from './question'

class Weekly extends Component {
    classes = makeStyles({
        list: {
          width: 250,
        },
        fullList: {
          width: 'auto',
        },
      });
      state = {
          bottom: false,
          displayQuestions : false
      }
    handleClick = ()=> {
        this.setState({
            displayQuestions: !this.state.displayQuestions
        })
        console.log(this.state.displayQuestions)
    }

    times = ['9AM','11AM','1PM','3PM','5PM','7PM','9PM']
    toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
          }
      
        this.setState({ [side]: open });
    }
    fullList = side => (
    <div
      className={this.classes.fullList}
      role="presentation"
      onClick={this.toggleDrawer(side, false)}
      onKeyDown={this.toggleDrawer(side, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
    renderTimeslot = (time)=> {
        return (
            <tr>
                <th class="timeslot">{time}</th>
                <th class = "timeslot" onClick={this.handleClick}>
                    <Box m={0} width="70%" bgcolor="grey.300">p={1}
                        <Button size="small" onClick={this.toggleDrawer('bottom', true)}/>
                    </Box> 
                </th>
                <th class = "timeslot" onClick={this.handleClick}></th>
                <th class = "timeslot" onClick={this.handleClick}></th>
                <th class = "timeslot" onClick={this.handleClick}></th>
                <th class = "timeslot" onClick={this.handleClick}></th>
                <th class = "timeslot" onClick={this.handleClick}></th>
                <th class = "timeslot" onClick={this.handleClick}></th>
            </tr>
        )
    }
    renderQuestion = ()=>{
        const question = this.state.questions
        if (this.state.displayQuestions) {
            return(  
            <div>
                < Question key={question.id} title = {question.title}/>
            </div>
            )
        }
        return null;
    }
    render (){
        return (
            <div>
                <h4 className="month" onClick={this.toggleDrawer('bottom', true)}>November</h4>
                <Question show = {true} />
                <table>
                    <thead>
                        {/* <tr>
                        <th scope="col"></th> 
                        <th scope="col">SUN</th>
                        <th scope="col">MON</th>
                        <th scope="col">TUE</th>
                        <th scope="col">WED</th>
                        <th scope="col">THU</th>
                        <th scope="col">FRI</th>
                        <th scope="col">SAT</th>
                        </tr> */}
                    </thead>
                    <tbody>
                        {/* {this.times.map(time=>this.renderTimeslot(time))} */}
                    </tbody>
                </table>
                <Drawer anchor="bottom" open={this.state.bottom} onClose={this.toggleDrawer('bottom', false)}>
                    {this.fullList('bottom')}
                </Drawer>
            </div>
            
        )
    
    }
}

export default Weekly;