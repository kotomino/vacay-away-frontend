import React from 'react'
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
    backgroundColor: fade("#F0FFFF", 0.4),
    height: 265
  },
});

function Activity({ name, address, cost, notes, mondayOpen, mondayClose, tuesdayOpen, tuesdayClose, wednesdayOpen, wednesdayClose, thursdayOpen, thursdayClose, fridayOpen, fridayClose, saturdayOpen, saturdayClose, sundayOpen, sundayClose }) {

  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card container className={classes.activity} elevation={5}>
        <CardHeader 
        action={
          <IconButton onClick={() => console.log('delete', name)}>
            <DeleteOutlined color="primary"/>
          </IconButton>
        }
        title={
          <Typography color="textSecondary" variant="h5" align="center" ><strong>{ name }</strong></Typography>
        }
        subheader={
          <Typography variant="h6" color="textSecondary">
            <strong>$ { cost }</strong>
          </Typography>
        }
        />
        <CardContent>
          
          <Typography variant="body2" color="textSecondary">
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
