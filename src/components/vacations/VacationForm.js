import { Button, Card, Container, fade, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addVacation } from '../../actions/vacations';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  form: {
    backgroundColor: fade("#F0FFFF", 0.4)
  }
}));

function VacationForm({ history, addVacation }) {
  const classes = useStyles();

  const [location, setLocation] = useState('')
  const [start_date, setStartDate] = useState("2021-04-09");
  const [end_date, setEndDate] = useState("2021-04-09");
  const [budget, setBudget] = useState(0)


  const handleChange = e => {
    console.log(e.target.name, e.target.value)
    switch(e.target.name) {
      case "location":
        setLocation(e.target.value)
        break;
      case "start_date":
        setStartDate(e.target.value)
        break;
      case "end_date":
        setEndDate(e.target.value)
        break;
      case "budget":
        setBudget(parseInt(e.target.value))
        break;
      default:
        return {
          location,
          start_date,
          end_date,
          budget,
        }
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log('event', e)

    const state = {
      location,
      start_date,
      end_date,
      budget,
    }
    console.log('state', state)
    addVacation(state, history);
  }

  return (
    <Container>
      <Grid container >
        <Grid item xs={12}>
          <Typography variant="h3" align="center" color="textSecondary" >Plan Your Next Vacation</Typography>
        </Grid>
        
        <Grid item xs={4} sm={4}>
          <Card container className={classes.form} elevation={5} md={6} >
            <Container>
             <Grid container >
            <form className={classes.container} onSubmit={handleSubmit} >
              <Grid item xs={12} align="center">
                <TextField label="Location" id="location" name="location" value={location} onInput={handleChange} />
              </Grid>
              <Grid item xs={12} align="center">
                <TextField
                  id="start_date"
                  label="Start Date"
                  type="date"
                  name="start_date"
                  defaultValue={start_date}
                  className={classes.textField}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} align="center">
                <TextField
                  id="end_date"
                  label="End Date"
                  type="date"
                  name="end_date"
                  defaultValue={end_date}
                  className={classes.textField}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} align="center">
                <TextField type="number" id="budget" label="Budget" name="budget" value={budget} onInput={handleChange} />
              </Grid>
              <Grid item xs={12} align="center">
                <Button variant="contained" color="secondary" type="submit" >Create Trip</Button>
              </Grid>
            </form>
            </Grid>
            </Container>
          </Card>
          </Grid>
          
      </Grid>
    </Container>
  )
}


export default connect(null, { addVacation })(VacationForm)
