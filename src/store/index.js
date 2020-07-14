import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers1'

export default createStore(rootReducer, applyMiddleware(thunk))
