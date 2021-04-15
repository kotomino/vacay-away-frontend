import React from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { CardActionArea, IconButton, Typography } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles({
  card: {
    backgroundColor: fade("#22293D", 0.6),
  },
});

const Vacation = ({location, start_date, end_date, budget, vacation, handleDelete, history}) => {

    const classes = useStyles();

    const tripDates = `${start_date.replace(/-/g, "/")} - ${end_date.replace(/-/g, "/")}`
    
    const date1 = new Date(start_date);
    const date2 = new Date(end_date);
    const diffTime = Math.abs(date2 - date1);
    const numOfDays = Math.ceil( 1 + (diffTime / (1000 * 60 * 60 * 24))); 

    const showPageRoute = () => {
      let path = `/vacations/${vacation.id}`
      history.push(path)
    }

    return (
      <Grid item xs={12} md={4}>
        <CardActionArea onClick={showPageRoute} >
          <Card container className={classes.card} elevation={5}>
            <CardHeader 
              action={
                <IconButton onClick={(e) => handleDelete(vacation.id, e)}>
                  <DeleteOutlined color="primary" />
                </IconButton>
              }
              title={
                <Typography variant="h4" color="primary" align="center">{ location }</Typography>
              }
            />
                <CardContent>
                  <Typography color="primary" align="center">
                    { numOfDays } Days &emsp;&emsp; { tripDates }
                  </Typography>
            
                </CardContent>      
          </Card>
          </CardActionArea>
           
        {/* </Link> */}
      </Grid>
    )
  }

export default Vacation
