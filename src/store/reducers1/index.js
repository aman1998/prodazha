import { combineReducers } from 'redux'
import sales from './sales'
import reducer from '../reducer'
import auth from './auth'
import users from './users'

export default combineReducers({
  sales, reducer, auth, users,
})
