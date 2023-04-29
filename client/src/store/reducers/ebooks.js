import { FETCH_EBOOKS } from '../actions/actionType';

const initialState = { ebooks: [] }

function ebookReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_EBOOKS:
      return {
        ...state,
        ebooks: action.payload
      }
    default:
      return state
  }
}

export default ebookReducer;