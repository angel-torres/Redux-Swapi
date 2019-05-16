import { FETCHING, SUCCESS, FAILURE }/* we need our action types here*/from "../actions";
const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  fetching: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
    return {
      ...state, 
      fetching: true
    }
    case SUCCESS:
    return {
      ...state, 
      characters: action.payload,
      fetching: false,
    }
    case FAILURE:
    return {
      ...state, 
      error: action.payload
    }
    default:
      return state;
  }
};
