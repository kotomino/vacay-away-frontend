const initialState = {
  activities: [],
  loading: true
}

const activitiesReducer = (state = initialState, action) => {
  switch(action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true
      }
    case "SET_ACTIVITIES":
      return {
        ...state,
        loading: false,
        activities: action.activities
      }
    default:
      return state;
  }
}

export default activitiesReducer;