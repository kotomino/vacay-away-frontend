import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Vacation extends Component {

  render() {
    const { location, startDate, endDate, budget, vacation } = this.props;
    
    return (
      <div>
        <h3><Link to={`/vacations/${vacation.id}`} >{ location }</Link></h3>
        <p>
          { startDate } - { endDate } <br/><br/>
          $ { budget }
        </p>
      </div>
    )
  }
}

export default Vacation
