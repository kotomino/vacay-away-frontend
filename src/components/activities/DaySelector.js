import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  whiteColor: {
    color: '#e6e6e6'
  }
}));

const DaySelector = ({ numOfDays, handleUpdate, activity, day }) => {

  const classes = useStyles();

  const daysArray = []

  for (let i = 0; i < numOfDays; i++) {
      daysArray.push(`Day ${i + 1}`);
  }
  
  const dayOptions = daysArray.map((day) => <MenuItem value={day}>{day}</MenuItem>)

  const handleChange = e => {
   
    handleUpdate(e.target.value, activity);
  }

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl} >
            <InputLabel id="demo-simple-select-label">Set Day</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={day}
              name="day"
              classes={{
                root: classes.whiteColor,
                icon: classes.whiteColor
              }}
              onChange={(e) => handleChange(e)}
              label="Day"
            >
              <MenuItem value="Undecided">
                <em>Undecided</em>
              </MenuItem>
              { dayOptions }
            </Select>
          </FormControl>
    </div>
  )
}

export default DaySelector;

