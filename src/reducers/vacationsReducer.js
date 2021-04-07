const initialState = {
  vacations: [],
  loading: true
}

const vacationsReducer = (state = initialState, action) => {
  switch(action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true
      }
    case "SET_VACATIONS":
      return {
        ...state,
        loading: false,
        vacations: action.vacations
      }
    case "ADD_VACATION":
      return {
        ...state,
        vacations: [...state.vacations, action.vacation]
      }
    case "DELETE_VACATION":
      const newVacations = state.vacations.filter(vacation => vacation.id !== action.id)
      return {
        ...state,
        vacations: newVacations
      }
    default:
      return state;
  }
}

export default vacationsReducer;