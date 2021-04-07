import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addVacation } from '../../actions/vacations';


class VacationForm extends Component {

  state = {
    location: "",
    start_date: "",
    end_date: "",
    budget: 0
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    
    this.props.addVacation(this.state, this.props.history);
  }

  render() {
    return (
      <div>
        <h3>Plan Your Next Vacation</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="location">Location </label>
            <input type="text" id="title" name="location" value={this.state.location} onChange={this.handleChange} />
          </div><br/>
          <div>
            <label htmlFor="startDate">Start Date </label>
            <input type="date" id="startDate" name="start_date" value={this.state.start_date} onChange={this.handleChange} />
          </div><br/>
          <div>
            <label htmlFor="endDate">End Date </label>
            <input type="date" id="endDate" name="end_date" value={this.state.end_date} onChange={this.handleChange} />
          </div><br/>
          <div>
            <label htmlFor="budget">Budget </label>
            <input type="number" id="budget" name="budget" value={this.state.budget} onChange={this.handleChange} />
          </div><br/>
          <input type="submit" value="Create Trip" />
        </form>
      </div>
    )
  }
}

export default connect(null, { addVacation })(VacationForm)
