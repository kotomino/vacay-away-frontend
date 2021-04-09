import React, { Component } from 'react'
import { connect } from 'react-redux';
import Vacation from './Vacation';
import Grid from '@material-ui/core/Grid';
import { Button, Container } from '@material-ui/core';
import { deleteVacation } from '../../actions/vacations';
import Typography from '@material-ui/core/Typography';


class VacationList extends Component {

  handleDelete = id => {
    this.props.deleteVacation(id);
  }

  render() {
    
    const vacations = this.props.vacations.map( (vacation, i) => <Vacation key={vacation.id} handleDelete={this.handleDelete} location={ vacation.location } start_date={ vacation.start_date } end_date={ vacation.end_date } budget={vacation.budget} vacation={vacation} />)

    return (
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} >
            <Typography variant="h3" gutterBottom color="primary" align="center">
              <strong>Upcoming Trips</strong>
            </Typography>
          </Grid>
          <Grid item xs={12} align="right">
            <Button variant="contained" color="secondary" size="large" href="/vacations/new" >
              Plan A New Trip
            </Button>
          </Grid>
          { vacations }
        </Grid><br/>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    vacations: state.vacations.vacations
  }
}

export default connect(mapStateToProps, { deleteVacation })(VacationList)
