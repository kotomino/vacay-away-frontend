import React from 'react'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { Grid, Typography } from '@material-ui/core';
import DaySelector from './DaySelector';

const useStyles = makeStyles({
  activity: {
    backgroundColor: fade("#22293D", 0.7),
    
  },
  flexchild: {
    width: 60,
    height: 70,
    margin: 10,
    
  },
});

const ActivityWithDay = ({ activity, numOfDays, handleUpdate, day, className, draggable }) => {
  console.log(activity)
  const classes = useStyles();

// drag and drop

const dragStart = e => {
  const target = e.target;

  e.dataTransfer.setData('activity_id', target.id);

  setTimeout(() => {
    target.style.display = "none";
  }, 0);
}

const dragOver = e => {
  e.stopPropagation();
}


  return (
    <Grid 
      item 
      xs={12}
      id={activity.id}
      draggable={draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
      className={className}
      >
      <Card container className={[classes.activity, "flex-container"].join(" ")} >
        
          <div className={[classes.flexchild, "flex-child"].join(" ")} >
          <Typography noWrap variant="h5" color="textSecondary">
            { activity.name }
          </Typography>
          <Typography variant="h6" color="textSecondary">
            ${ activity.cost }
          </Typography>
          </div>
          <div className={[classes.flexchild, "flex-child"].join(" ")}>
          <DaySelector numOfDays={numOfDays} activity={activity} handleUpdate={handleUpdate} day={day} />
          </div>
        
      </Card>
    </Grid>  
  )
}

export default ActivityWithDay
