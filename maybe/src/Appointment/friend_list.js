import React from 'react';
import {ListGroup, Form} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import Typography from '@material-ui/core/Typography';

import './friend_list.css';
import statistics from '../img/statistics.png';
import calendar from '../img/friend_list_friend_calendar.png';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    gilad: false,
    jason: false,
    antoine: false,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter(v => v).length !== 2;

  const friends_list = this.props.friends.map((friend) =>
			<ListGroup.Item>
				<img src={statistics} alt="statistics" id="friendlist_statistics"
					onClick={()=>this.nextStage(3)} />
				<img src={calendar} alt="calendar" id ="friendlist_calendar"
					 onClick={()=>{
						this.props.nextStage(4)
            // this.setState({selected_friend_id: this.props.friends_id[friend]})
            this.props.chooseFrined(this.props.friends_id[friend])
					 }} />
				<Form.Check type='checkbox' label={friend} 
					defaultValue={this.props.friends_check[friend]}
					onChange={(e) => this.onCheck(friend, e)} />
			</ListGroup.Item>);
  return (
    
    <div className={classes.root}>
      {/* <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup >
          <FormControlLabel
            control={<Checkbox 
                        checked={gilad} 
                        onChange={handleChange('gilad')} 
                        value="gilad" 
                        icon={<CheckBoxOutlineBlankIcon style={{ fontSize: 20 }} />}
                        checkedIcon={<CheckBoxIcon style={{ fontSize: 20 }}/>}
                      />}  
            label={<Typography ><span className="name" >Juho Kim</span></Typography>}
          />
          <FormControlLabel
            control={<Checkbox 
              checked={jason} 
              onChange={handleChange('jason')} 
              value="jason" 
              icon={<CheckBoxOutlineBlankIcon style={{ fontSize: 20 }} />}
              checkedIcon={<CheckBoxIcon style={{ fontSize: 20 }}/>}
            />}
            label={<Typography ><span className="name">Alice Oh</span></Typography>}
          />
          <FormControlLabel
              control={<Checkbox 
                checked={antoine} 
                onChange={handleChange('antoine')} 
                value="antoine" 
                icon={<CheckBoxOutlineBlankIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckBoxIcon style={{ fontSize: 20 }}/>}
              />}
            label={<Typography><span className="name">Jisu Choi</span> </Typography>}
          />
        </FormGroup>
      </FormControl> */}
      {friends_list}

    </div>
  );
}

export default CheckboxesGroup;