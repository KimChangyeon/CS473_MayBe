import React from 'react';
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
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter(v => v).length !== 2;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">
          <Typography variant = "h6" fontFamily = 'Arial'>Available Friends</Typography>
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox 
                        checked={gilad} 
                        onChange={handleChange('gilad')} 
                        value="gilad" 
                        icon={<CheckBoxOutlineBlankIcon style={{ fontSize: 15 }} />}
                        checkedIcon={<CheckBoxIcon style={{ fontSize: 15 }}/>}
                      />}  
            label={<Typography variant="body2">Gilad</Typography>}
          />
          <FormControlLabel
            control={<Checkbox 
              checked={jason} 
              onChange={handleChange('jason')} 
              value="jason" 
              icon={<CheckBoxOutlineBlankIcon style={{ fontSize: 15 }} />}
              checkedIcon={<CheckBoxIcon style={{ fontSize: 15 }}/>}
            />}
            label={<Typography variant="body2">Gilad</Typography>}
            style={{ width: 30, height: 30}}
          />
          <FormControlLabel
              control={<Checkbox 
                checked={antoine} 
                onChange={handleChange('antoine')} 
                value="antoine" 
                icon={<CheckBoxOutlineBlankIcon style={{ fontSize: 15 }} />}
                checkedIcon={<CheckBoxIcon style={{ fontSize: 15 }}/>}
              />}
            label={<Typography variant="body2">Gilad</Typography>}
            style={{ width: 30, height: 30}}
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}

export default CheckboxesGroup;