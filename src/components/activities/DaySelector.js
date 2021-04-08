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
  }
}));

function DaySelector({ numOfDays, handleUpdate, activity }) {

  const classes = useStyles();

  const [day, setDay] = React.useState('');

  const daysArray = []

  for (let i = 0; i < numOfDays; i++) {
      daysArray.push(`Day ${i + 1}`);
  }
  
  const dayOptions = daysArray.map((day) => <MenuItem value={day}>{day}</MenuItem>)

  const handleChange = e => {
   
    // setDay(e.target.value);
    handleUpdate(e.target.value, activity);
  }

  // <FormControl className={classes.formControl}>
  //       <InputLabel id="demo-simple-select-label">Age</InputLabel>
  //       <Select
  //         labelId="demo-simple-select-label"
  //         id="demo-simple-select"
  //         value={age}
  //         onChange={handleChange}
  //       >
  //         <MenuItem value={10}>Ten</MenuItem>
  //         <MenuItem value={20}>Twenty</MenuItem>
  //         <MenuItem value={30}>Thirty</MenuItem>
  //       </Select>
  //     </FormControl>

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl} >
            <InputLabel id="demo-simple-select-label">Select Day</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={day}
              name="day"
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

