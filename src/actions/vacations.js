export const getVacations = () => {
  return dispatch => {
    dispatch({ type: 'LOADING' })
    fetch("http://localhost:3001/vacations")
      .then(resp => resp.json())
      .then(vacations => dispatch({ type: "SET_VACATIONS", vacations}))
  }
}

export const addVacation = (vacation, history) => {
  console.log('addVacation action', vacation, history)
  return dispatch => {
    console.log("mapDispatchToProps");
    fetch('http://localhost:3001/vacations', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ vacation })
    })
      .then(resp => resp.json())
      .then(vacation => {
        dispatch({ type: "ADD_VACATION", vacation })
        history.push("/vacations")
      })
  }
}

export const deleteVacation = (id) => {
  console.log("delete vacation action", id)
  return dispatch => {
    fetch('http://localhost:3001/vacations/' + id, {
      method: "DELETE",
    })
    dispatch({ type: "DELETE_VACATION", id})
  }
}