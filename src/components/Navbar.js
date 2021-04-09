import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import LoyaltyTwoToneIcon from '@material-ui/icons/LoyaltyTwoTone';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navbar: {
    backgroundColor: fade("#F0FFFF", 0),
  }
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar} elevation={0} >
        <Toolbar>
          <LoyaltyTwoToneIcon color="primary"/>
          <Typography variant="h5" color="primary" className={classes.title}>
            Vacay Away
          </Typography>
          <IconButton href="/" >
            <HomeRoundedIcon color="primary" />
          </IconButton>
          <IconButton href="/vacations" >
            <CardTravelIcon color="primary" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar




