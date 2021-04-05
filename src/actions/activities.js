export const getActivities = () => {
  return dispatch => {
    dispatch({ type: 'LOADING' })
    fetch("http://localhost:3001/activities")
      .then(resp => resp.json())
      .then(activities => dispatch({ type: "SET_ACTIVITIES", activities}))
  }
}