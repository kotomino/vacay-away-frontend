import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addActivity } from '../../actions/activities'
import { Button, Card, Container, fade, FormControl, Grid, InputLabel, makeStyles, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import Loading from '../Loading';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 15,
    padding: 10,
    height: 700,  
  },
  container: {
    backgroundColor: fade("#22293D", 0.7)
  },
  textField: {
    width: 270,
  },
  timeField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 130,
  },
  whiteColor: {
    color: '#e6e6e6'
  }
  
}));

function ActivityForm({ history, addActivity, vacations }) {

  const classes = useStyles();

  
  const [name, setName] = useState('')
  const [cost, setCost] = useState(0)
  const [address, setAddress] = useState('')
  const [notes, setNotes] = useState('')
  const [day, setDay] = useState('Undecided')
  const [monday_open, setMondayOpen] = useState('Closed')
  const [monday_close, setMondayClose] = useState('Closed')
  const [tuesday_open, setTuesdayOpen] = useState('Closed')
  const [tuesday_close, setTuesdayClose] = useState('Closed')
  const [wednesday_open, setWednesdayOpen] = useState('Closed')
  const [wednesday_close, setWednesdayClose] = useState('Closed')
  const [thursday_open, setThursdayOpen] = useState('Closed')
  const [thursday_close, setThursdayClose] = useState('Closed')
  const [friday_open, setFridayOpen] = useState('Closed')
  const [friday_close, setFridayClose] = useState('Closed')
  const [saturday_open, setSaturdayOpen] = useState('Closed')
  const [saturday_close, setSaturdayClose] = useState('Closed')
  const [sunday_open, setSundayOpen] = useState('Closed')
  const [sunday_close, setSundayClose] = useState('Closed')
  const [vacation_id] = useState(parseInt(history.location.pathname.split("/")[2]))
  
  const handleChange = e => {
    console.log(e.target.name, e.target.value)
    switch(e.target.name) {
      case "name":
        setName(e.target.value)
        break;
      case "cost":
        setCost(parseInt(e.target.value))
        break;
      case "address":
        setAddress(e.target.value)
        break;
      case "notes":
        setNotes(e.target.value)
        break;
      case "day":
        setDay(e.target.value)
        break;
      case "monday_open":
        setMondayOpen(e.target.value)
        break;
      case "monday_close":
        setMondayClose(e.target.value)
        break;

      case "tuesday_open":
        setTuesdayOpen(e.target.value)
        break;
      case "tuesday_close":
        setTuesdayClose(e.target.value)
        break;

      case "wednesday_open":
        setWednesdayOpen(e.target.value)
        break;
      case "wednesday_close":
        setWednesdayClose(e.target.value)
        break;

      case "thursday_open":
        setThursdayOpen(e.target.value)
        break;
      case "thursday_close":
        setThursdayClose(e.target.value)
          break;

      case "friday_open":
        setFridayOpen(e.target.value)
        break;
      case "friday_close":
        setFridayClose(e.target.value)
        break;

      case "saturday_open":
        setSaturdayOpen(e.target.value)
        break;
      case "saturday_close":
        setSaturdayClose(e.target.value)
        break;

      case "sunday_open":
        setSundayOpen(e.target.value)
        break;
      case "sunday_close":
        setSundayClose(e.target.value)
        break;
    }
  }

  const handleSubmit = e => {
    e.preventDefault();

    console.log('e', e)

    const state = {
      name,
      cost,
      address,
      notes,
      day,
      monday_open,
      monday_close,
      tuesday_open,
      tuesday_close,
      wednesday_open,
      wednesday_close,
      thursday_open,
      thursday_close,
      friday_open,
      friday_close,
      saturday_open,
      saturday_close,
      sunday_open,
      sunday_close,
      vacation_id
    }
    
    addActivity(state, history);
  }

    const vacation = vacations.find(vacation => vacation.id === vacation_id)

    if (!vacation) {
      return (
        <Loading/>
      )
    }

    const date1 = new Date(vacation.start_date);
    const date2 = new Date(vacation.end_date);
    const diffTime = Math.abs(date2 - date1);
    const numOfDays = Math.ceil( 1 + (diffTime / (1000 * 60 * 60 * 24))); 

    const daysArray = []

    for (let i = 0; i < numOfDays; i++) {
       daysArray.push(`Day ${i + 1}`);
    }
   
    const days = daysArray.map((day, i) => <MenuItem value={ day }>{ day }</MenuItem>)

    return (
      <Container>
        <Grid
          container
          spacing={3}
          direction="column"
          alignItems="center"
          justify="center"
          >
          <Grid item xs={12}>
            <Typography variant="h3" align="center" color="textSecondary" >
              Add Activity
            </Typography>
          </Grid>
          <Grid item xs={12} sm={10} md={7} lg={5} >
            <Card container className={classes.container} elevation={5} md={6} >
              <form className={classes.form} onSubmit={handleSubmit}>
              <Grid container spacing={1}>
                <Grid item xs={12} align="center">
                  <TextField 
                  required
                  label="Activity Name" 
                  id="name" 
                  name="name" 
                  value={name} 
                  className={classes.textField}
                  InputProps={{
                    className: classes.whiteColor
                  }}
                  onInput={handleChange} 
                  />
                </Grid>
                <Grid item xs={12} align="center">
                  <TextField 
                  type="number" 
                  id="cost" 
                  label="Cost Estimate" 
                  name="cost" 
                  value={cost} 
                  className={classes.textField}
                  InputProps={{
                    className: classes.whiteColor
                  }}
                  onInput={handleChange} />
                </Grid>
                <Grid item xs={12} align="center">
                  <FormControl className={classes.formControl}>
                    <InputLabel id="day">Day</InputLabel>
                    <Select
                      labelId="day"
                      name="day"
                      id="day"
                      value={day}
                      className={classes.textField}
                      classes={{
                        root: classes.whiteColor,
                        icon: classes.whiteColor
                      }}
                      onChange={handleChange}
                    >
                      <MenuItem value="Undecided">Undecided</MenuItem>
                      { days }
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} align="center">
                  <TextField 
                  label="Address" 
                  id="address" 
                  name="address" 
                  value={address} 
                  className={classes.textField}
                  InputProps={{
                    className: classes.whiteColor
                  }}
                  onInput={handleChange} 
                  />
                </Grid>
                <Grid item xs={12} align="center">
                  <Typography color="textSecondary">
                    Hours of Operation:
                  </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                  <FormControl className={classes.formControl}>
                    <InputLabel id="monday_open">Monday Open</InputLabel>
                    <Select
                      labelId="monday_open"
                      id="monday_open"
                      name="monday_open"
                      value={monday_open}
                      className={classes.timeField}
                      classes={{
                        root: classes.whiteColor,
                        icon: classes.whiteColor
                      }}
                      onChange={handleChange}
                    >
                      <MenuItem value="Closed">Closed</MenuItem>
                      <MenuItem value="0:00">0:00</MenuItem>
                      <MenuItem value="1:00">1:00</MenuItem>
                      <MenuItem value="2:00">2:00</MenuItem>
                      <MenuItem value="3:00">3:00</MenuItem>
                      <MenuItem value="4:00">4:00</MenuItem>
                      <MenuItem value="5:00">5:00</MenuItem>
                      <MenuItem value="6:00">6:00</MenuItem>
                      <MenuItem value="7:00">7:00</MenuItem>
                      <MenuItem value="8:00">8:00</MenuItem>
                      <MenuItem value="9:00">9:00</MenuItem>
                      <MenuItem value="10:00">10:00</MenuItem>
                      <MenuItem value="11:00">11:00</MenuItem>
                      <MenuItem value="12:00">12:00</MenuItem>
                      <MenuItem value="13:00">13:00</MenuItem>
                      <MenuItem value="14:00">14:00</MenuItem>
                      <MenuItem value="15:00">15:00</MenuItem>
                      <MenuItem value="16:00">16:00</MenuItem>
                      <MenuItem value="17:00">17:00</MenuItem>
                      <MenuItem value="18:00">18:00</MenuItem>
                      <MenuItem value="19:00">19:00</MenuItem>
                      <MenuItem value="20:00">20:00</MenuItem>
                      <MenuItem value="21:00">21:00</MenuItem>
                      <MenuItem value="22:00">22:00</MenuItem>
                      <MenuItem value="23:00">23:00</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="monday_close">Monday Close</InputLabel>
                    <Select
                      labelId="monday_close"
                      id="monday_close"
                      name="monday_close"
                      value={monday_close}
                      className={classes.timeField}
                      classes={{
                        root: classes.whiteColor,
                        icon: classes.whiteColor
                      }}
                      onChange={handleChange}
                    >
                      <MenuItem value="Closed">Closed</MenuItem>
                      <MenuItem value="0:00">0:00</MenuItem>
                      <MenuItem value="1:00">1:00</MenuItem>
                      <MenuItem value="2:00">2:00</MenuItem>
                      <MenuItem value="3:00">3:00</MenuItem>
                      <MenuItem value="4:00">4:00</MenuItem>
                      <MenuItem value="5:00">5:00</MenuItem>
                      <MenuItem value="6:00">6:00</MenuItem>
                      <MenuItem value="7:00">7:00</MenuItem>
                      <MenuItem value="8:00">8:00</MenuItem>
                      <MenuItem value="9:00">9:00</MenuItem>
                      <MenuItem value="10:00">10:00</MenuItem>
                      <MenuItem value="11:00">11:00</MenuItem>
                      <MenuItem value="12:00">12:00</MenuItem>
                      <MenuItem value="13:00">13:00</MenuItem>
                      <MenuItem value="14:00">14:00</MenuItem>
                      <MenuItem value="15:00">15:00</MenuItem>
                      <MenuItem value="16:00">16:00</MenuItem>
                      <MenuItem value="17:00">17:00</MenuItem>
                      <MenuItem value="18:00">18:00</MenuItem>
                      <MenuItem value="19:00">19:00</MenuItem>
                      <MenuItem value="20:00">20:00</MenuItem>
                      <MenuItem value="21:00">21:00</MenuItem>
                      <MenuItem value="22:00">22:00</MenuItem>
                      <MenuItem value="23:00">23:00</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} align="center">
                  <FormControl className={classes.formControl}>
                    <InputLabel id="tuesday_open">Tuesday Open</InputLabel>
                    <Select
                      labelId="tuesday_open"
                      id="tuesday_open"
                      name="tuesday_open"
                      value={tuesday_open}
                      className={classes.timeField}
                      classes={{
                        root: classes.whiteColor,
                        icon: classes.whiteColor
                      }}
                      onChange={handleChange}
                    >
                      <MenuItem value="Closed">Closed</MenuItem>
                      <MenuItem value="0:00">0:00</MenuItem>
                      <MenuItem value="1:00">1:00</MenuItem>
                      <MenuItem value="2:00">2:00</MenuItem>
                      <MenuItem value="3:00">3:00</MenuItem>
                      <MenuItem value="4:00">4:00</MenuItem>
                      <MenuItem value="5:00">5:00</MenuItem>
                      <MenuItem value="6:00">6:00</MenuItem>
                      <MenuItem value="7:00">7:00</MenuItem>
                      <MenuItem value="8:00">8:00</MenuItem>
                      <MenuItem value="9:00">9:00</MenuItem>
                      <MenuItem value="10:00">10:00</MenuItem>
                      <MenuItem value="11:00">11:00</MenuItem>
                      <MenuItem value="12:00">12:00</MenuItem>
                      <MenuItem value="13:00">13:00</MenuItem>
                      <MenuItem value="14:00">14:00</MenuItem>
                      <MenuItem value="15:00">15:00</MenuItem>
                      <MenuItem value="16:00">16:00</MenuItem>
                      <MenuItem value="17:00">17:00</MenuItem>
                      <MenuItem value="18:00">18:00</MenuItem>
                      <MenuItem value="19:00">19:00</MenuItem>
                      <MenuItem value="20:00">20:00</MenuItem>
                      <MenuItem value="21:00">21:00</MenuItem>
                      <MenuItem value="22:00">22:00</MenuItem>
                      <MenuItem value="23:00">23:00</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="tuesday_close">Tuesday Close</InputLabel>
                    <Select
                      labelId="tuesday_close"
                      id="tuesday_close"
                      name="tuesday_close"
                      value={tuesday_close}
                      className={classes.timeField}
                      classes={{
                        root: classes.whiteColor,
                        icon: classes.whiteColor
                      }}
                      onChange={handleChange}
                    >
                      <MenuItem value="Closed">Closed</MenuItem>
                      <MenuItem value="0:00">0:00</MenuItem>
                      <MenuItem value="1:00">1:00</MenuItem>
                      <MenuItem value="2:00">2:00</MenuItem>
                      <MenuItem value="3:00">3:00</MenuItem>
                      <MenuItem value="4:00">4:00</MenuItem>
                      <MenuItem value="5:00">5:00</MenuItem>
                      <MenuItem value="6:00">6:00</MenuItem>
                      <MenuItem value="7:00">7:00</MenuItem>
                      <MenuItem value="8:00">8:00</MenuItem>
                      <MenuItem value="9:00">9:00</MenuItem>
                      <MenuItem value="10:00">10:00</MenuItem>
                      <MenuItem value="11:00">11:00</MenuItem>
                      <MenuItem value="12:00">12:00</MenuItem>
                      <MenuItem value="13:00">13:00</MenuItem>
                      <MenuItem value="14:00">14:00</MenuItem>
                      <MenuItem value="15:00">15:00</MenuItem>
                      <MenuItem value="16:00">16:00</MenuItem>
                      <MenuItem value="17:00">17:00</MenuItem>
                      <MenuItem value="18:00">18:00</MenuItem>
                      <MenuItem value="19:00">19:00</MenuItem>
                      <MenuItem value="20:00">20:00</MenuItem>
                      <MenuItem value="21:00">21:00</MenuItem>
                      <MenuItem value="22:00">22:00</MenuItem>
                      <MenuItem value="23:00">23:00</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} align="center">
                  <FormControl className={classes.formControl}>
                    <InputLabel id="wednesday_open">Wednesday Open</InputLabel>
                    <Select
                      labelId="wednesday_open"
                      id="wednesday_open"
                      name="wednesday_open"
                      value={wednesday_open}
                      className={classes.timeField}
                      classes={{
                        root: classes.whiteColor,
                        icon: classes.whiteColor
                      }}
                      onChange={handleChange}
                    >
                      <MenuItem value="Closed">Closed</MenuItem>
                      <MenuItem value="0:00">0:00</MenuItem>
                      <MenuItem value="1:00">1:00</MenuItem>
                      <MenuItem value="2:00">2:00</MenuItem>
                      <MenuItem value="3:00">3:00</MenuItem>
                      <MenuItem value="4:00">4:00</MenuItem>
                      <MenuItem value="5:00">5:00</MenuItem>
                      <MenuItem value="6:00">6:00</MenuItem>
                      <MenuItem value="7:00">7:00</MenuItem>
                      <MenuItem value="8:00">8:00</MenuItem>
                      <MenuItem value="9:00">9:00</MenuItem>
                      <MenuItem value="10:00">10:00</MenuItem>
                      <MenuItem value="11:00">11:00</MenuItem>
                      <MenuItem value="12:00">12:00</MenuItem>
                      <MenuItem value="13:00">13:00</MenuItem>
                      <MenuItem value="14:00">14:00</MenuItem>
                      <MenuItem value="15:00">15:00</MenuItem>
                      <MenuItem value="16:00">16:00</MenuItem>
                      <MenuItem value="17:00">17:00</MenuItem>
                      <MenuItem value="18:00">18:00</MenuItem>
                      <MenuItem value="19:00">19:00</MenuItem>
                      <MenuItem value="20:00">20:00</MenuItem>
                      <MenuItem value="21:00">21:00</MenuItem>
                      <MenuItem value="22:00">22:00</MenuItem>
                      <MenuItem value="23:00">23:00</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="wednesday_close">Wednesday Close</InputLabel>
                    <Select
                      labelId="wednesday_close"
                      id="wednesday_close"
                      name="wednesday_close"
                      value={wednesday_close}
                      className={classes.timeField}
                      classes={{
                        root: classes.whiteColor,
                        icon: classes.whiteColor
                      }}
                      onChange={handleChange}
                    >
                      <MenuItem value="Closed">Closed</MenuItem>
                      <MenuItem value="0:00">0:00</MenuItem>
                      <MenuItem value="1:00">1:00</MenuItem>
                      <MenuItem value="2:00">2:00</MenuItem>
                      <MenuItem value="3:00">3:00</MenuItem>
                      <MenuItem value="4:00">4:00</MenuItem>
                      <MenuItem value="5:00">5:00</MenuItem>
                      <MenuItem value="6:00">6:00</MenuItem>
                      <MenuItem value="7:00">7:00</MenuItem>
                      <MenuItem value="8:00">8:00</MenuItem>
                      <MenuItem value="9:00">9:00</MenuItem>
                      <MenuItem value="10:00">10:00</MenuItem>
                      <MenuItem value="11:00">11:00</MenuItem>
                      <MenuItem value="12:00">12:00</MenuItem>
                      <MenuItem value="13:00">13:00</MenuItem>
                      <MenuItem value="14:00">14:00</MenuItem>
                      <MenuItem value="15:00">15:00</MenuItem>
                      <MenuItem value="16:00">16:00</MenuItem>
                      <MenuItem value="17:00">17:00</MenuItem>
                      <MenuItem value="18:00">18:00</MenuItem>
                      <MenuItem value="19:00">19:00</MenuItem>
                      <MenuItem value="20:00">20:00</MenuItem>
                      <MenuItem value="21:00">21:00</MenuItem>
                      <MenuItem value="22:00">22:00</MenuItem>
                      <MenuItem value="23:00">23:00</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} align="center">
                  <FormControl className={classes.formControl}>
                    <InputLabel id="thursday_open">Thursday Open</InputLabel>
                    <Select
                      labelId="thursday_open"
                      id="thursday_open"
                      name="thursday_open"
                      value={thursday_open}
                      className={classes.timeField}
                      classes={{
                        root: classes.whiteColor,
                        icon: classes.whiteColor
                      }}
                      onChange={handleChange}
                    >
                      <MenuItem value="Closed">Closed</MenuItem>
                      <MenuItem value="0:00">0:00</MenuItem>
                      <MenuItem value="1:00">1:00</MenuItem>
                      <MenuItem value="2:00">2:00</MenuItem>
                      <MenuItem value="3:00">3:00</MenuItem>
                      <MenuItem value="4:00">4:00</MenuItem>
                      <MenuItem value="5:00">5:00</MenuItem>
                      <MenuItem value="6:00">6:00</MenuItem>
                      <MenuItem value="7:00">7:00</MenuItem>
                      <MenuItem value="8:00">8:00</MenuItem>
                      <MenuItem value="9:00">9:00</MenuItem>
                      <MenuItem value="10:00">10:00</MenuItem>
                      <MenuItem value="11:00">11:00</MenuItem>
                      <MenuItem value="12:00">12:00</MenuItem>
                      <MenuItem value="13:00">13:00</MenuItem>
                      <MenuItem value="14:00">14:00</MenuItem>
                      <MenuItem value="15:00">15:00</MenuItem>
                      <MenuItem value="16:00">16:00</MenuItem>
                      <MenuItem value="17:00">17:00</MenuItem>
                      <MenuItem value="18:00">18:00</MenuItem>
                      <MenuItem value="19:00">19:00</MenuItem>
                      <MenuItem value="20:00">20:00</MenuItem>
                      <MenuItem value="21:00">21:00</MenuItem>
                      <MenuItem value="22:00">22:00</MenuItem>
                      <MenuItem value="23:00">23:00</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="thursday_close">Thursday Close</InputLabel>
                    <Select
                      labelId="thursday_close"
                      id="thursday_close"
                      name="thursday_close"
                      value={thursday_close}
                      className={classes.timeField}
                      classes={{
                        root: classes.whiteColor,
                        icon: classes.whiteColor
                      }}
                      onChange={handleChange}
                    >
                      <MenuItem value="Closed">Closed</MenuItem>
                      <MenuItem value="0:00">0:00</MenuItem>
                      <MenuItem value="1:00">1:00</MenuItem>
                      <MenuItem value="2:00">2:00</MenuItem>
                      <MenuItem value="3:00">3:00</MenuItem>
                      <MenuItem value="4:00">4:00</MenuItem>
                      <MenuItem value="5:00">5:00</MenuItem>
                      <MenuItem value="6:00">6:00</MenuItem>
                      <MenuItem value="7:00">7:00</MenuItem>
                      <MenuItem value="8:00">8:00</MenuItem>
                      <MenuItem value="9:00">9:00</MenuItem>
                      <MenuItem value="10:00">10:00</MenuItem>
                      <MenuItem value="11:00">11:00</MenuItem>
                      <MenuItem value="12:00">12:00</MenuItem>
                      <MenuItem value="13:00">13:00</MenuItem>
                      <MenuItem value="14:00">14:00</MenuItem>
                      <MenuItem value="15:00">15:00</MenuItem>
                      <MenuItem value="16:00">16:00</MenuItem>
                      <MenuItem value="17:00">17:00</MenuItem>
                      <MenuItem value="18:00">18:00</MenuItem>
                      <MenuItem value="19:00">19:00</MenuItem>
                      <MenuItem value="20:00">20:00</MenuItem>
                      <MenuItem value="21:00">21:00</MenuItem>
                      <MenuItem value="22:00">22:00</MenuItem>
                      <MenuItem value="23:00">23:00</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} align="center">
                  <FormControl className={classes.formControl}>
                    <InputLabel id="friday_open">Friday Open</InputLabel>
                    <Select
                      labelId="friday_open"
                      id="friday_open"
                      name="friday_open"
                      value={friday_open}
                      className={classes.timeField}
                      classes={{
                        root: classes.whiteColor,
                        icon: classes.whiteColor
                      }}
                      onChange={handleChange}
                    >
                      <MenuItem value="Closed">Closed</MenuItem>
                      <MenuItem value="0:00">0:00</MenuItem>
                      <MenuItem value="1:00">1:00</MenuItem>
                      <MenuItem value="2:00">2:00</MenuItem>
                      <MenuItem value="3:00">3:00</MenuItem>
                      <MenuItem value="4:00">4:00</MenuItem>
                      <MenuItem value="5:00">5:00</MenuItem>
                      <MenuItem value="6:00">6:00</MenuItem>
                      <MenuItem value="7:00">7:00</MenuItem>
                      <MenuItem value="8:00">8:00</MenuItem>
                      <MenuItem value="9:00">9:00</MenuItem>
                      <MenuItem value="10:00">10:00</MenuItem>
                      <MenuItem value="11:00">11:00</MenuItem>
                      <MenuItem value="12:00">12:00</MenuItem>
                      <MenuItem value="13:00">13:00</MenuItem>
                      <MenuItem value="14:00">14:00</MenuItem>
                      <MenuItem value="15:00">15:00</MenuItem>
                      <MenuItem value="16:00">16:00</MenuItem>
                      <MenuItem value="17:00">17:00</MenuItem>
                      <MenuItem value="18:00">18:00</MenuItem>
                      <MenuItem value="19:00">19:00</MenuItem>
                      <MenuItem value="20:00">20:00</MenuItem>
                      <MenuItem value="21:00">21:00</MenuItem>
                      <MenuItem value="22:00">22:00</MenuItem>
                      <MenuItem value="23:00">23:00</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="friday_close">Friday Close</InputLabel>
                    <Select
                      labelId="friday_close"
                      id="friday_close"
                      name="friday_close"
                      value={friday_close}
                      className={classes.timeField}
                      classes={{
                        root: classes.whiteColor,
                        icon: classes.whiteColor
                      }}
                      onChange={handleChange}
                    >
                      <MenuItem value="Closed">Closed</MenuItem>
                      <MenuItem value="0:00">0:00</MenuItem>
                      <MenuItem value="1:00">1:00</MenuItem>
                      <MenuItem value="2:00">2:00</MenuItem>
                      <MenuItem value="3:00">3:00</MenuItem>
                      <MenuItem value="4:00">4:00</MenuItem>
                      <MenuItem value="5:00">5:00</MenuItem>
                      <MenuItem value="6:00">6:00</MenuItem>
                      <MenuItem value="7:00">7:00</MenuItem>
                      <MenuItem value="8:00">8:00</MenuItem>
                      <MenuItem value="9:00">9:00</MenuItem>
                      <MenuItem value="10:00">10:00</MenuItem>
                      <MenuItem value="11:00">11:00</MenuItem>
                      <MenuItem value="12:00">12:00</MenuItem>
                      <MenuItem value="13:00">13:00</MenuItem>
                      <MenuItem value="14:00">14:00</MenuItem>
                      <MenuItem value="15:00">15:00</MenuItem>
                      <MenuItem value="16:00">16:00</MenuItem>
                      <MenuItem value="17:00">17:00</MenuItem>
                      <MenuItem value="18:00">18:00</MenuItem>
                      <MenuItem value="19:00">19:00</MenuItem>
                      <MenuItem value="20:00">20:00</MenuItem>
                      <MenuItem value="21:00">21:00</MenuItem>
                      <MenuItem value="22:00">22:00</MenuItem>
                      <MenuItem value="23:00">23:00</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} align="center">
                  <FormControl className={classes.formControl}>
                    <InputLabel id="saturday_open">Saturday Open</InputLabel>
                    <Select
                      labelId="saturday_open"
                      id="saturday_open"
                      name="saturday_open"
                      value={saturday_open}
                      className={classes.timeField}
                      classes={{
                        root: classes.whiteColor,
                        icon: classes.whiteColor
                      }}
                      onChange={handleChange}
                    >
                      <MenuItem value="Closed">Closed</MenuItem>
                      <MenuItem value="0:00">0:00</MenuItem>
                      <MenuItem value="1:00">1:00</MenuItem>
                      <MenuItem value="2:00">2:00</MenuItem>
                      <MenuItem value="3:00">3:00</MenuItem>
                      <MenuItem value="4:00">4:00</MenuItem>
                      <MenuItem value="5:00">5:00</MenuItem>
                      <MenuItem value="6:00">6:00</MenuItem>
                      <MenuItem value="7:00">7:00</MenuItem>
                      <MenuItem value="8:00">8:00</MenuItem>
                      <MenuItem value="9:00">9:00</MenuItem>
                      <MenuItem value="10:00">10:00</MenuItem>
                      <MenuItem value="11:00">11:00</MenuItem>
                      <MenuItem value="12:00">12:00</MenuItem>
                      <MenuItem value="13:00">13:00</MenuItem>
                      <MenuItem value="14:00">14:00</MenuItem>
                      <MenuItem value="15:00">15:00</MenuItem>
                      <MenuItem value="16:00">16:00</MenuItem>
                      <MenuItem value="17:00">17:00</MenuItem>
                      <MenuItem value="18:00">18:00</MenuItem>
                      <MenuItem value="19:00">19:00</MenuItem>
                      <MenuItem value="20:00">20:00</MenuItem>
                      <MenuItem value="21:00">21:00</MenuItem>
                      <MenuItem value="22:00">22:00</MenuItem>
                      <MenuItem value="23:00">23:00</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="saturday_close">Saturday Close</InputLabel>
                    <Select
                      labelId="saturday_close"
                      id="saturday_close"
                      name="saturday_close"
                      value={saturday_close}
                      className={classes.timeField}
                      classes={{
                        root: classes.whiteColor,
                        icon: classes.whiteColor
                      }}
                      onChange={handleChange}
                    >
                      <MenuItem value="Closed">Closed</MenuItem>
                      <MenuItem value="0:00">0:00</MenuItem>
                      <MenuItem value="1:00">1:00</MenuItem>
                      <MenuItem value="2:00">2:00</MenuItem>
                      <MenuItem value="3:00">3:00</MenuItem>
                      <MenuItem value="4:00">4:00</MenuItem>
                      <MenuItem value="5:00">5:00</MenuItem>
                      <MenuItem value="6:00">6:00</MenuItem>
                      <MenuItem value="7:00">7:00</MenuItem>
                      <MenuItem value="8:00">8:00</MenuItem>
                      <MenuItem value="9:00">9:00</MenuItem>
                      <MenuItem value="10:00">10:00</MenuItem>
                      <MenuItem value="11:00">11:00</MenuItem>
                      <MenuItem value="12:00">12:00</MenuItem>
                      <MenuItem value="13:00">13:00</MenuItem>
                      <MenuItem value="14:00">14:00</MenuItem>
                      <MenuItem value="15:00">15:00</MenuItem>
                      <MenuItem value="16:00">16:00</MenuItem>
                      <MenuItem value="17:00">17:00</MenuItem>
                      <MenuItem value="18:00">18:00</MenuItem>
                      <MenuItem value="19:00">19:00</MenuItem>
                      <MenuItem value="20:00">20:00</MenuItem>
                      <MenuItem value="21:00">21:00</MenuItem>
                      <MenuItem value="22:00">22:00</MenuItem>
                      <MenuItem value="23:00">23:00</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} align="center">
                  <FormControl className={classes.formControl}>
                    <InputLabel id="sunday_open">Sunday Open</InputLabel>
                    <Select
                      labelId="sunday_open"
                      id="sunday_open"
                      name="sunday_open"
                      value={sunday_open}
                      className={classes.timeField}
                      classes={{
                        root: classes.whiteColor,
                        icon: classes.whiteColor
                      }}
                      onChange={handleChange}
                    >
                      <MenuItem value="Closed">Closed</MenuItem>
                      <MenuItem value="0:00">0:00</MenuItem>
                      <MenuItem value="1:00">1:00</MenuItem>
                      <MenuItem value="2:00">2:00</MenuItem>
                      <MenuItem value="3:00">3:00</MenuItem>
                      <MenuItem value="4:00">4:00</MenuItem>
                      <MenuItem value="5:00">5:00</MenuItem>
                      <MenuItem value="6:00">6:00</MenuItem>
                      <MenuItem value="7:00">7:00</MenuItem>
                      <MenuItem value="8:00">8:00</MenuItem>
                      <MenuItem value="9:00">9:00</MenuItem>
                      <MenuItem value="10:00">10:00</MenuItem>
                      <MenuItem value="11:00">11:00</MenuItem>
                      <MenuItem value="12:00">12:00</MenuItem>
                      <MenuItem value="13:00">13:00</MenuItem>
                      <MenuItem value="14:00">14:00</MenuItem>
                      <MenuItem value="15:00">15:00</MenuItem>
                      <MenuItem value="16:00">16:00</MenuItem>
                      <MenuItem value="17:00">17:00</MenuItem>
                      <MenuItem value="18:00">18:00</MenuItem>
                      <MenuItem value="19:00">19:00</MenuItem>
                      <MenuItem value="20:00">20:00</MenuItem>
                      <MenuItem value="21:00">21:00</MenuItem>
                      <MenuItem value="22:00">22:00</MenuItem>
                      <MenuItem value="23:00">23:00</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="sunday_close">Sunday Close</InputLabel>
                    <Select
                      labelId="sunday_close"
                      id="sunday_close"
                      name="sunday_close"
                      value={sunday_close}
                      className={classes.timeField}
                      classes={{
                        root: classes.whiteColor,
                        icon: classes.whiteColor
                      }}
                      onChange={handleChange}
                    >
                      <MenuItem value="Closed">Closed</MenuItem>
                      <MenuItem value="0:00">0:00</MenuItem>
                      <MenuItem value="1:00">1:00</MenuItem>
                      <MenuItem value="2:00">2:00</MenuItem>
                      <MenuItem value="3:00">3:00</MenuItem>
                      <MenuItem value="4:00">4:00</MenuItem>
                      <MenuItem value="5:00">5:00</MenuItem>
                      <MenuItem value="6:00">6:00</MenuItem>
                      <MenuItem value="7:00">7:00</MenuItem>
                      <MenuItem value="8:00">8:00</MenuItem>
                      <MenuItem value="9:00">9:00</MenuItem>
                      <MenuItem value="10:00">10:00</MenuItem>
                      <MenuItem value="11:00">11:00</MenuItem>
                      <MenuItem value="12:00">12:00</MenuItem>
                      <MenuItem value="13:00">13:00</MenuItem>
                      <MenuItem value="14:00">14:00</MenuItem>
                      <MenuItem value="15:00">15:00</MenuItem>
                      <MenuItem value="16:00">16:00</MenuItem>
                      <MenuItem value="17:00">17:00</MenuItem>
                      <MenuItem value="18:00">18:00</MenuItem>
                      <MenuItem value="19:00">19:00</MenuItem>
                      <MenuItem value="20:00">20:00</MenuItem>
                      <MenuItem value="21:00">21:00</MenuItem>
                      <MenuItem value="22:00">22:00</MenuItem>
                      <MenuItem value="23:00">23:00</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} align="center">
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    type="submit" 
                    >Add Activity
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

const mapStateToProps = state => {
  return {
    vacations: state.vacations.vacations
  }
}

export default connect(mapStateToProps, { addActivity })(ActivityForm)
