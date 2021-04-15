import { Button, Card, Container, fade, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addVacation } from '../../actions/vacations';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: fade("#22293D", 0.6), 
  },
  textField: {
    width: 270,
  },
  dateField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 130,
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 15,
    padding: 10,
    height: 350,  
  },
  input: {
    color: '#e6e6e6'
  }
}));

const VacationForm = ({ history, addVacation }) => {
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
      <Grid 
        container
        spacing={5}
        direction="column"
        alignItems="center"
        justify="center"
        >
        <Grid item xs={12} >
          <Typography variant="h3" align="center" color="textSecondary" >
            Plan Your Next Vacation
          </Typography>
        </Grid>
        <Grid item xs={12} sm={10} md={7} lg={5} >
          <Card container className={classes.container} elevation={5} md={6} >
            <form className={classes.form} onSubmit={handleSubmit} >
              <Grid container >
                <Grid item xs={12} align="center">
                  <TextField 
                  required
                  label="Location" 
                  id="location" 
                  name="location" 
                  value={location} 
                  className={classes.textField}
                  InputProps={{
                    className: classes.input
                  }}
                  onInput={handleChange} />
                </Grid>
                <Grid item xs={12} align="center">
                  <TextField
                    id="start_date"
                    label="Start Date"
                    type="date"
                    name="start_date"
                    defaultValue={start_date}
                    className={classes.dateField}
                    onChange={handleChange}
                    InputProps={{
                      className: classes.input
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                
                  <TextField
                    id="end_date"
                    label="End Date"
                    type="date"
                    name="end_date"
                    defaultValue={end_date}
                    className={classes.dateField}
                    onChange={handleChange}
                    InputProps={{
                      className: classes.input
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12} align="center">
                  <TextField 
                  type="number" 
                  id="budget" 
                  label="Budget" 
                  className={classes.textField}
                  InputProps={{
                    className: classes.input
                  }}
                  name="budget" 
                  value={budget} 
                  onInput={handleChange} />
                </Grid>
                <Grid item xs={12} align="center">
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    type="submit" 
                    >Create Trip
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}


export default connect(null, { addVacation })(VacationForm)
