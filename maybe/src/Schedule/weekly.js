import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  WeekView,
  MonthView,
  EditRecurrenceMenu,
  AllDayPanel,
  ConfirmationDialog,
  Toolbar,
  ViewSwitcher
} from '@devexpress/dx-react-scheduler-material-ui';
import { appointments } from './Data';
import './weekly.css'


function handling_appointments (schedules) {
  var answer = [];
  for (var i = 0 ; i < schedules.length ; i ++) {
    var modified = {};
    var schedule = schedules[i];
    var date = String(schedule['DateId']);
    var year = date.slice(0,4);
    var month = date.slice(4,6);
    var day = date.slice(6,8);
    var StartTime = schedule['StartTimeslot'];
    var EndTime = schedule['EndTimeslot'];
    modified['id'] = i;
    modified['title'] = schedule['Memo'];
    modified['startDate'] = new Date(year, month, day, StartTime, 0);
    modified['endDate'] = new Date(year, month, day, EndTime, 0);
    answer.push(modified);
  }

  return answer;
}

const currentDate = new Date(2019,11,26,10,33);

export default class Weekly extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.user_id,
      data: appointments,
      currentDate: currentDate,
      currentViewName : 'Week',

      addedAppointment: {},
      appointmentChanges: {},
      editingAppointmentId: undefined,
    };

    this.currentViewNameChange = (currentViewName) => {
      console.log(this.state.currentViewName)
      this.setState({currentViewName})
    }
    this.commitChanges = this.commitChanges.bind(this);
    this.changeAddedAppointment = this.changeAddedAppointment.bind(this);
    this.changeAppointmentChanges = this.changeAppointmentChanges.bind(this);
    this.changeEditingAppointmentId = this.changeEditingAppointmentId.bind(this);
  }

  componentDidMount () {
      var url_final = '/sch/'.concat(this.props.user_id);
      console.log(url_final);
      fetch(url_final)
          .then(res => res.json())
          .then(answer => this.setState({data: handling_appointments(answer.data)}))        
      .catch((error)=>{
          console.log('Error fetching man',error);
      });
  }

  changeAddedAppointment(addedAppointment) {
    this.setState({ addedAppointment });
  }

  changeAppointmentChanges(appointmentChanges) {
    this.setState({ appointmentChanges });
  }

  changeEditingAppointmentId(editingAppointmentId) {
    this.setState({ editingAppointmentId });
  }

  commitChanges({ added, changed, deleted }) {
    this.setState((state) => {
      let { data } = state;
      if (added) {
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map(appointment => (
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
          console.log(data)
        }
      if (deleted !== undefined) {
        data = data.filter(appointment => appointment.id !== deleted);
      }
      return { data };
    });
  }

  render() {
    const {
      currentDate, data, currentViewName, addedAppointment, appointmentChanges, editingAppointmentId,
    } = this.state;

    return (
      <Paper>
        <Scheduler
          data={data}
          height={600}
        >
          <ViewState
            currentDate={currentDate}
            currentViewName = {currentViewName}
            onCurrentViewNameChange = {this.currentViewNameChange}
          />
          <EditingState
            onCommitChanges={this.commitChanges}

            addedAppointment={addedAppointment}
            onAddedAppointmentChange={this.changeAddedAppointment}

            appointmentChanges={appointmentChanges}
            onAppointmentChangesChange={this.changeAppointmentChanges}

            editingAppointmentId={editingAppointmentId}
            onEditingAppointmentIdChange={this.changeEditingAppointmentId}
          />
          <WeekView
            startDayHour={9}
            endDayHour={22}
          />
          <MonthView />
          <Toolbar />
          <ViewSwitcher />
          <AllDayPanel />
          <EditRecurrenceMenu />
          <ConfirmationDialog />
          <Appointments />
          <AppointmentTooltip
            showOpenButton
            showDeleteButton
          />
          <AppointmentForm  style = {{width:500}}/>
        </Scheduler>
      </Paper>
    );
  }
}

