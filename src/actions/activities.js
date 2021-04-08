export const getActivities = () => {
  return dispatch => {
    dispatch({ type: 'LOADING' })
    fetch("http://localhost:3001/activities")
      .then(resp => resp.json())
      .then(activities => dispatch({ type: "SET_ACTIVITIES", activities}))
  }
}

export const addActivity = (activity, history) => {
  console.log('addActivity pulls in', activity)
  return dispatch => {
    fetch('http://localhost:3001/activities', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ activity })
    })
    .then(resp => resp.json())
    .then(activity => {
      dispatch({ type: "ADD_ACTIVITY", activity })
      history.push(`/vacations/${activity.vacation.id}`)
    })
  }
}

export const deleteActivity = (id) => {
  return dispatch => {
    fetch('http://localhost:3001/activities/' + id, {
      method: "DELETE",
    })
    dispatch({ type: "DELETE_ACTIVITY", id})
  }
}

export const updateActivityDay = (activity, history) => {
  return dispatch => {
    fetch('http://localhost:3001/activities/' + activity.id, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ activity })
    })
    dispatch({ type: "UPDATE_ACTIVITY_DAY", activity})
    // history.go(0)
    history.push(`/vacations/${activity.vacation.id}`)
  }
}
