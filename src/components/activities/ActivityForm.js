import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addActivity } from '../../actions/activities'

class ActivityForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      cost: 0,
      address: '',
      notes: '',
      day: 'Undecided',
      monday_open: '0:00',
      monday_close: '0:00',
      tuesday_open: '0:00',
      tuesday_close: '0:00',
      wednesday_open: '0:00',
      wednesday_close: '0:00',
      thursday_open: '0:00',
      thursday_close: '0:00',
      friday_open: '0:00',
      friday_close: '0:00',
      saturday_open: '0:00',
      saturday_close: '0:00',
      sunday_open: '0:00',
      sunday_close: '0:00',
      vacation_id: parseInt(this.props.match.params.vacationId)
    }
  }

  
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('handleSubmit', this.state)
    console.log('handleSubmit', this.props.history)
    debugger
    this.props.addActivity(this.state, this.props.history);
  }

  render() {
    const vacation = this.props.vacations.find(vacation => vacation.id === this.state.vacation_id)

    if (!vacation) {
      return (
        <h3>Loading...</h3>
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
   
    const days = daysArray.map((day, i) => <option value={ day }>{ day }</option>)

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <h3>Record an Activity</h3>
          <div>
            <label htmlFor="name">Name </label>
            <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="cost">Estimated Cost </label>
            <input type="number" name="cost" id="cost" value={this.state.cost} onChange={this.handleChange}/>
          </div>
          <div>
            <label htmlFor="address">Address </label>
            <input type="text" name="address" id="address" value={this.state.address} onChange={this.handleChange}/>
          </div>
          <div>
          <label htmlFor="cars">Monday Open:</label>
          <select name="monday_open" id="monday_open" value={this.state.monday_open} onChange={this.handleChange} >
            <option value="0:00">0:00</option>
            <option value="1:00">1:00</option>
            <option value="2:00">2:00</option>
            <option value="3:00">3:00</option>
            <option value="4:00">4:00</option>
            <option value="5:00">5:00</option>
            <option value="6:00">6:00</option>
            <option value="7:00">7:00</option>
            <option value="8:00">8:00</option>
            <option value="9:00">9:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
            <option value="23:00">23:00</option>
          </select>
          <label htmlFor="cars"> Monday Close:</label>
          <select name="monday_close" id="monday_close" value={this.state.monday_close} onChange={this.handleChange}>
            <option value="0:00">0:00</option>
            <option value="1:00">1:00</option>
            <option value="2:00">2:00</option>
            <option value="3:00">3:00</option>
            <option value="4:00">4:00</option>
            <option value="5:00">5:00</option>
            <option value="6:00">6:00</option>
            <option value="7:00">7:00</option>
            <option value="8:00">8:00</option>
            <option value="9:00">9:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
            <option value="23:00">23:00</option>
          </select>
          </div>
          <div>
          <label htmlFor="cars">Tuesday Open:</label>
          <select name="tuesday_open" id="tuesday_open" value={this.state.tuesday_open} onChange={this.handleChange} >
            <option value="0:00">0:00</option>
            <option value="1:00">1:00</option>
            <option value="2:00">2:00</option>
            <option value="3:00">3:00</option>
            <option value="4:00">4:00</option>
            <option value="5:00">5:00</option>
            <option value="6:00">6:00</option>
            <option value="7:00">7:00</option>
            <option value="8:00">8:00</option>
            <option value="9:00">9:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
            <option value="23:00">23:00</option>
          </select>
          <label htmlFor="cars"> Tuesday Close:</label>
          <select name="tuesday_close" id="tuesday_close" value={this.state.tuesday_close} onChange={this.handleChange}>
            <option value="0:00">0:00</option>
            <option value="1:00">1:00</option>
            <option value="2:00">2:00</option>
            <option value="3:00">3:00</option>
            <option value="4:00">4:00</option>
            <option value="5:00">5:00</option>
            <option value="6:00">6:00</option>
            <option value="7:00">7:00</option>
            <option value="8:00">8:00</option>
            <option value="9:00">9:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
            <option value="23:00">23:00</option>
          </select>
          </div>
          <div>
          <label htmlFor="cars">Wednesday Open:</label>
          <select name="wednesday_open" id="wednesday_open" value={this.state.wednesday_open} onChange={this.handleChange} >
            <option value="0:00">0:00</option>
            <option value="1:00">1:00</option>
            <option value="2:00">2:00</option>
            <option value="3:00">3:00</option>
            <option value="4:00">4:00</option>
            <option value="5:00">5:00</option>
            <option value="6:00">6:00</option>
            <option value="7:00">7:00</option>
            <option value="8:00">8:00</option>
            <option value="9:00">9:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
            <option value="23:00">23:00</option>
          </select>
          <label htmlFor="cars"> Wednesday Close:</label>
          <select name="wednesday_close" id="wednesday_close" value={this.state.wednesday_close} onChange={this.handleChange}>
            <option value="0:00">0:00</option>
            <option value="1:00">1:00</option>
            <option value="2:00">2:00</option>
            <option value="3:00">3:00</option>
            <option value="4:00">4:00</option>
            <option value="5:00">5:00</option>
            <option value="6:00">6:00</option>
            <option value="7:00">7:00</option>
            <option value="8:00">8:00</option>
            <option value="9:00">9:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
            <option value="23:00">23:00</option>
          </select>
          </div>
          <div>
          <label htmlFor="cars">Thursday Open:</label>
          <select name="thursday_open" id="thursday_open" value={this.state.thursday_open} onChange={this.handleChange} >
            <option value="0:00">0:00</option>
            <option value="1:00">1:00</option>
            <option value="2:00">2:00</option>
            <option value="3:00">3:00</option>
            <option value="4:00">4:00</option>
            <option value="5:00">5:00</option>
            <option value="6:00">6:00</option>
            <option value="7:00">7:00</option>
            <option value="8:00">8:00</option>
            <option value="9:00">9:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
            <option value="23:00">23:00</option>
          </select>
          <label htmlFor="cars"> Thursday Close:</label>
          <select name="thursday_close" id="thursday_close" value={this.state.thursday_close} onChange={this.handleChange}>
            <option value="0:00">0:00</option>
            <option value="1:00">1:00</option>
            <option value="2:00">2:00</option>
            <option value="3:00">3:00</option>
            <option value="4:00">4:00</option>
            <option value="5:00">5:00</option>
            <option value="6:00">6:00</option>
            <option value="7:00">7:00</option>
            <option value="8:00">8:00</option>
            <option value="9:00">9:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
            <option value="23:00">23:00</option>
          </select>
          </div>
          <div>
          <label htmlFor="cars">Friday Open:</label>
          <select name="friday_open" id="friday_open" value={this.state.friday_open} onChange={this.handleChange} >
            <option value="0:00">0:00</option>
            <option value="1:00">1:00</option>
            <option value="2:00">2:00</option>
            <option value="3:00">3:00</option>
            <option value="4:00">4:00</option>
            <option value="5:00">5:00</option>
            <option value="6:00">6:00</option>
            <option value="7:00">7:00</option>
            <option value="8:00">8:00</option>
            <option value="9:00">9:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
            <option value="23:00">23:00</option>
          </select>
          <label htmlFor="cars"> Friday Close:</label>
          <select name="friday_close" id="friday_close" value={this.state.thursday_close} onChange={this.handleChange}>
            <option value="0:00">0:00</option>
            <option value="1:00">1:00</option>
            <option value="2:00">2:00</option>
            <option value="3:00">3:00</option>
            <option value="4:00">4:00</option>
            <option value="5:00">5:00</option>
            <option value="6:00">6:00</option>
            <option value="7:00">7:00</option>
            <option value="8:00">8:00</option>
            <option value="9:00">9:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
            <option value="23:00">23:00</option>
          </select>
          </div>
          <div>
          <label htmlFor="cars">Saturday Open:</label>
          <select name="saturday_open" id="saturday_open" value={this.state.saturday_open} onChange={this.handleChange} >
            <option value="0:00">0:00</option>
            <option value="1:00">1:00</option>
            <option value="2:00">2:00</option>
            <option value="3:00">3:00</option>
            <option value="4:00">4:00</option>
            <option value="5:00">5:00</option>
            <option value="6:00">6:00</option>
            <option value="7:00">7:00</option>
            <option value="8:00">8:00</option>
            <option value="9:00">9:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
            <option value="23:00">23:00</option>
          </select>
          <label htmlFor="cars"> Saturday Close:</label>
          <select name="saturday_close" id="saturday_close" value={this.state.saturday_close} onChange={this.handleChange}>
            <option value="0:00">0:00</option>
            <option value="1:00">1:00</option>
            <option value="2:00">2:00</option>
            <option value="3:00">3:00</option>
            <option value="4:00">4:00</option>
            <option value="5:00">5:00</option>
            <option value="6:00">6:00</option>
            <option value="7:00">7:00</option>
            <option value="8:00">8:00</option>
            <option value="9:00">9:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
            <option value="23:00">23:00</option>
          </select>
          </div>
          <div>
          <label htmlFor="cars">Sunday Open:</label>
          <select name="sunday_open" id="sunday_open" value={this.state.sunday_open} onChange={this.handleChange} >
            <option value="0:00">0:00</option>
            <option value="1:00">1:00</option>
            <option value="2:00">2:00</option>
            <option value="3:00">3:00</option>
            <option value="4:00">4:00</option>
            <option value="5:00">5:00</option>
            <option value="6:00">6:00</option>
            <option value="7:00">7:00</option>
            <option value="8:00">8:00</option>
            <option value="9:00">9:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
            <option value="23:00">23:00</option>
          </select>
          <label htmlFor="cars"> Sunday Close:</label>
          <select name="sunday_close" id="sunday_close" value={this.state.sunday_close} onChange={this.handleChange}>
            <option value="0:00">0:00</option>
            <option value="1:00">1:00</option>
            <option value="2:00">2:00</option>
            <option value="3:00">3:00</option>
            <option value="4:00">4:00</option>
            <option value="5:00">5:00</option>
            <option value="6:00">6:00</option>
            <option value="7:00">7:00</option>
            <option value="8:00">8:00</option>
            <option value="9:00">9:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
            <option value="23:00">23:00</option>
          </select>
          </div>
          <div>
            <label htmlFor="day">Schedule the activity for: </label>
            <select id="day" name="day" value={this.state.day} onChange={this.handleChange}>
              <option value="Undecided">Undecided</option>
              { days }
            </select>
          </div>
          <input type="submit" value="Submit Activity"/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    vacations: state.vacations.vacations
  }
}

export default connect(mapStateToProps, { addActivity })(ActivityForm)
