export const getVacations = () => {
  return dispatch => {
    dispatch({ type: 'LOADING' })
    fetch("http://localhost:3001/vacations")
      .then(resp => resp.json())
      .then(vacations => dispatch({ type: "SET_VACATIONS", vacations}))
  }
}

export const addVacation = (vacation, history) => {
  return dispatch => {
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