import React from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles({
  card: {
    backgroundColor: fade("#F0FFFF", 0.1),
  },
});


function VacationHeader({location, start_date, end_date, budget, vacation, handleDelete}) {

    const classes = useStyles();

    const tripDates = `${start_date.replace(/-/g, "/")} - ${end_date.replace(/-/g, "/")}`
    
    const date1 = new Date(start_date);
    const date2 = new Date(end_date);
    const diffTime = Math.abs(date2 - date1);
    const numOfDays = Math.ceil( 1 + (diffTime / (1000 * 60 * 60 * 24))); 

    return (
      <Grid item xs={12} >
        <Card container className={classes.card} elevation={5}>
          <CardHeader 
            title={
              <Typography variant="h4" color="textSecondary" align="center">❀ <strong>{ location }</strong> ❀〚{ numOfDays } Days〛</Typography>
            }
            subheader={
              <Typography variant="h5" color="textSecondary" align="center">
              <strong>Budget: </strong>${ budget } 
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 
              { tripDates }
              </Typography>
            }
          />
        </Card>
      </Grid>
    )
  }

  export default VacationHeader