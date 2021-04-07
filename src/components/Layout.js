import { makeStyles } from '@material-ui/core';
import React from 'react'
import Navbar from '../components/Navbar';

const useStyles = makeStyles({
  page: {
    width: '100%'
  }
})

export default function Layout({ children }) {

  const classes = useStyles();
  
  return (
    <div>
      <Navbar />
      <div className={classes.page}>
        { children }
      </div>
    </div>
  )
}
