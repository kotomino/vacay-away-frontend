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
    case "ADD_ACTIVITY":
      console.log('ADD_ACTVIVITY reducer:', action)
    return {
      ...state,
      activities: [...state.activities, action.activity]
    }
    case "UPDATE_ACTIVITY_DAY":
      console.log('UPDATE_ACTVIVITY reducer:', action)
      const updatedActivities = state.activities.filter(activity => activity.id !== action.activity.id)
      return {
        ...state,
        activities: [...updatedActivities, action.activity]
      }
    case "DELETE_ACTIVITY":
      console.log('DELETE_ACTVIVITY reducer:', action)
      const newActivities = state.activities.filter(activity => activity.id !== action.id)
      return {
        ...state,
        activities: newActivities
      }
    case "DELETE_ACTIVITIES":
      console.log('DELETE_ACTIVITIES reducer', action)
      const remainingActivities = state.activities.filter(activity => activity.vacation.id !== action.id) // activity's vacation id (foregin key) does not equal the deleted vacation's id.
      return {
        ...state,
        activities: remainingActivities
      }
    default:
      return state;
  }
}

export default activitiesReducer;