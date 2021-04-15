import React from 'react'
import DaySelector from './DaySelector';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { IconButton, Typography } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles({
  activity: {
    backgroundColor: fade("#22293D", 0.7),
    height: 320,
    width: 360
  },
  flexChild: {
    width: 60,
    height: 60,
    margin: 5
  },
});

const Activity = ({ numOfDays, activity, handleDelete, name, address, cost, mondayOpen, mondayClose, tuesdayOpen, tuesdayClose, wednesdayOpen, wednesdayClose, thursdayOpen, thursdayClose, fridayOpen, fridayClose, saturdayOpen, saturdayClose, sundayOpen, sundayClose, handleUpdate }) => {

  const classes = useStyles();

  return (
    <Grid item >
      <Card className={classes.activity} elevation={5}>
        <CardHeader 
        action={
          <IconButton onClick={() => handleDelete(activity.id)}>
            <DeleteOutlined color="primary"/>
          </IconButton>
        }
        title={
          <Typography color="textSecondary" variant="h4" align="center" ><strong>{ name }</strong></Typography>
        }
        />
        <CardContent >
          <div className="flex-container">
          <div className={[classes.flexChild, "flex-child"].join(" ")} >
            <Typography variant="h4" color="textSecondary" >
              <strong>$ { cost }</strong>
            </Typography>
          </div>
          <div className={[classes.flexChild, "flex-child"].join(" ")}>
            <DaySelector numOfDays={numOfDays} activity={activity} handleUpdate={handleUpdate} />
          </div>
          </div>
          <Typography variant="body1" color="textSecondary">
            { address } <br/>
            <u>Hours of Operation:</u> <br/>
            Monday: { ( mondayOpen === "Closed" || mondayOpen === null ) ? "Closed" : `${ mondayOpen } - ${ mondayClose }` } &emsp;&emsp;&emsp;&emsp;&emsp;
            Friday: { ( fridayOpen === "Closed" || fridayOpen === null ) ? "Closed" : `${ fridayOpen } - ${ fridayClose }` } <br/>
            Tuesday: { ( tuesdayOpen === "Closed" || tuesdayOpen === null ) ? "Closed" : `${ tuesdayOpen } - ${ tuesdayClose }` } &emsp;&emsp;&emsp;&emsp;&emsp;
            Saturday: { ( saturdayOpen === "Closed" || saturdayOpen === null ) ? "Closed" : `${ saturdayOpen } - ${ saturdayClose }` }<br/>
            Wednesday: { ( wednesdayOpen === "Closed" || wednesdayOpen === null ) ? "Closed" : `${ wednesdayOpen } - ${ wednesdayClose }` } &emsp;&emsp;&emsp;&emsp;
            Sunday: { ( sundayOpen === "Closed" || sundayOpen === null ) ? "Closed" : `${ sundayOpen } - ${ sundayClose }` } <br/>
            Thursday: { ( thursdayOpen === "Closed" || thursdayOpen === null ) ? "Closed" : `${ thursdayOpen } - ${ thursdayClose }` } <br/>
            <br/>
             <br/>
            <br/>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
  }

export default Activity
