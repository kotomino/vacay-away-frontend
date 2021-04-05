import React, { Component } from 'react'
import { connect } from 'react-redux';
import Vacation from './Vacation';
import ActivityList from '../activities/ActivityList';

class VacationList extends Component {
  render() {
    
    const vacations = this.props.vacations.vacations.map( (vacation, i) => <Vacation key={vacation.id} location={ vacation.location } startDate={ vacation.start_date } endDate={ vacation.end_date } budget={vacation.budget} vacation={vacation} />)
   
    return (
      <div>
        <h2>Vacation Spots:</h2>
        { vacations }
        <ActivityList />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    vacations: state.vacations,
    activities: state.activities
  }
}

export default connect(mapStateToProps)(VacationList)
