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
    height: 320
  },
  flexChild: {
    width: 60,
    height: 60,
    margin: 5
  },
});

function Activity({ numOfDays, activity, handleDelete, name, address, cost, mondayOpen, mondayClose, tuesdayOpen, tuesdayClose, wednesdayOpen, wednesdayClose, thursdayOpen, thursdayClose, fridayOpen, fridayClose, saturdayOpen, saturdayClose, sundayOpen, sundayClose, handleUpdate }) {

  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
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
            Monday: { mondayOpen ? mondayOpen + ' -' : "Closed" } { mondayClose } &emsp;&emsp;&emsp;&emsp;&emsp;
            Friday: { fridayOpen ? fridayOpen + ' -' : "Closed" } { fridayClose } <br/>
            Tuesday: { tuesdayOpen ? tuesdayOpen + ' -' : "Closed" } { tuesdayClose } &emsp;&emsp;&emsp;&emsp;&emsp;
            Saturday: { saturdayOpen ? saturdayOpen + ' -' : "Closed" } { saturdayClose }<br/>
            Wednesday: { wednesdayOpen ? wednesdayOpen + ' -' : "Closed" } { wednesdayClose } &emsp;&emsp;&emsp;&emsp;
            Sunday: { sundayOpen ? sundayOpen + ' -' : "Closed" } { sundayClose } <br/>
            Thursday: { thursdayOpen ? thursdayOpen + ' -' : "Closed" } { thursdayClose } <br/>
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
