import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width: 100,
  },
  title: {
    fontSize: 5,
  },
  pos: {
    fontSize: 10,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
      <div>
          <div class="card" style={{marginRight:0, width: 100}}>
            <div class="card-body">
                <p class="card-text">Some </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      </div>
    
  );
}