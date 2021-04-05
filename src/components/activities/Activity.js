import React, { Component } from 'react'


class Activity extends Component {
  render() {
    const { name, address, cost, notes, mondayOpen, mondayClose, tuesdayOpen, tuesdayClose, wednesdayOpen, wednesdayClose, thursdayOpen, thursdayClose, fridayOpen, fridayClose, saturdayOpen, saturdayClose, sundayOpen, sundayClose } = this.props;

    return (
      <div>
        <h3>{ name }</h3>
        <p>
          { address } <br/> <br/>
          $ { cost } <br/><br/>
          <u>Notes:</u> <br/>
          { notes ? notes : "N/A" } <br/><br/>
          <u>Hours of Operation:</u> <br/>
          Monday: { mondayOpen } - { mondayClose } <br/>
          Tuesday: { tuesdayOpen } - { tuesdayClose } <br/>
          Wednesday: { wednesdayOpen } - { wednesdayClose } <br/>
          Thursday: { thursdayOpen } - { thursdayClose } <br/>
          Friday: { fridayOpen } - { fridayClose } <br/>
          Saturday: { saturdayOpen } - { saturdayClose } <br/>
          Sunday: { sundayOpen } - { sundayClose } <br/>
        </p>
      </div>
    )
  }
}



export default Activity
