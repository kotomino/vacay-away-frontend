import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { addVacation } from '.../actions/vacations';


class VacationForm extends Component {

  state = {
    location: "",
    startDate: "",
    endDate: "",
    budget: 0
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
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
            <input type="date" id="startDate" name="startDate" value={this.state.startDate} onChange={this.handleChange} />
          </div><br/>
          <div>
            <label htmlFor="endDate">End Date </label>
            <input type="date" id="endDate" name="endDate" value={this.state.endDate} onChange={this.handleChange} />
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

export default VacationForm
