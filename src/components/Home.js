import React from 'react'
import "../stylesheets/main.css"; 
import Grid from '@material-ui/core/Grid';
import { Container, Typography } from '@material-ui/core';

const Home = () => {

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <Typography variant="h2" color="textSecondary" align="right" >
            Plan Your Next Getaway.
          </Typography>
        </Grid>
      </Grid>
    </Container>

  )
}


export default Home
