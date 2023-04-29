import { FETCH_CURRENT_USER } from '../actions/actionType';

const initialState = { user: {} }

function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}

export default userReducer;