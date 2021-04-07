import React from 'react'
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { IconButton, Typography } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles({
  card: {
    backgroundColor: fade("#F0FFFF", 0.4),
  },
});


function Vacation({location, start_date, end_date, budget, vacation, handleDelete}) {

    const classes = useStyles();

    const tripDates = `${start_date.replace(/-/g, "/")} - ${end_date.replace(/-/g, "/")}`
    
    const date1 = new Date(start_date);
    const date2 = new Date(end_date);
    const diffTime = Math.abs(date2 - date1);
    const numOfDays = Math.ceil( 1 + (diffTime / (1000 * 60 * 60 * 24))); 

    return (
      <Grid item xs={12} md={4}>
        <Card container className={classes.card} elevation={5}>
          <CardHeader 
            action={
              <IconButton onClick={() => handleDelete(vacation.id)}>
                <DeleteOutlined />
              </IconButton>
            }
            title={
            <Link to={`/vacations/${vacation.id}`}><center><strong>{ location }</strong></center></Link>
            }
            subheader={
              <Typography>{ numOfDays } Days</Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary">
              $ { budget } <br/> <br/>
              { tripDates }
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    )
  }

export default Vacation
