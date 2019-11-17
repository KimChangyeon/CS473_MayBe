import React, {Component} from 'react';
import {List, Grid} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns'
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers'

class Question extends Component {
    state = {
        isMaking : false,
        Date : '2019-11-18T21:11:54'
    }
    handleDataChange = data => {
        this.setState({
            Date : data
        })
    }

    render () {
       return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          {/* <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker inline"
            value={this.state.selectedDate}
            onChange={this.handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          /> */}
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Date picker dialog"
            format="MM/dd/yyyy"
            value={this.state.selectedDate}
            onChange={this.handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          {/* <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Time picker"
            value={this.state.selectedDate}
            onChange={this.handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          /> */}
        </Grid>
      </MuiPickersUtilsProvider>
       )

    }
    

}

export default Question;