import React, {Component} from 'react';
import './ChooseTable.css';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';

import cat from '../img/cat.png';
import frog from '../img/frog.png';
import panda from '../img/panda.png';
import pig from '../img/pig.png';
import bear from '../img/bear.png';
import penguin from '../img/penguin.png';
import rabbit from '../img/rabbit.png';
import monkey from '../img/monkey.png';


const friend_img = [
    cat, frog, panda, pig, bear, penguin, rabbit, monkey
]

const useStyles = makeStyles(theme => ({
    root: {
      width: 50,
    },
    typography: {
      padding: theme.spacing(2),
    },
}));

export default function FriendIcons(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();
    const classes = useStyles();
  
    const handleClick = newPlacement => event => {
      setAnchorEl(event.currentTarget);
      setOpen(prev => placement !== newPlacement || !prev);
      setPlacement(newPlacement);
    };
    
    return (
        <div>
            <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
            {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
                <Paper>
                <Typography className={classes.typography}>{props.name}</Typography>
                </Paper>
            </Fade>
            )}
            </Popper>
            <img 
                className = "friend_icon" 
                src = {friend_img[props.img]}
                onClick = {handleClick('bottom')} />

        </div>
        
    )
}
