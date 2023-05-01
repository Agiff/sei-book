import { FETCH_EBOOKS, FETCH_EBOOK_DETAIL } from '../actions/actionType';

const initialState = { ebooks: [], ebookDetail: {} }

function ebookReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_EBOOKS:
      return {
        ...state,
        ebooks: action.payload
      }
    case FETCH_EBOOK_DETAIL:
      return {
        ...state,
        ebookDetail: action.payload
      }
    default:
      return state
  }
}

export default ebookReducer;