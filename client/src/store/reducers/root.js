import { combineReducers } from 'redux';
import userReducer from './users';
import ebookReducer from './ebooks';

const rootReducer = combineReducers({
  users: userReducer,
  ebooks: ebookReducer
})

export default rootReducer;