import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/vacations">Vacations</Link></li>
        </ul>
      </div>
    )
  }
}

export default Navbar
