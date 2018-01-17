import { combineReducers } from 'redux'
import counts from '../reducers/countReducers'

const rootReducer = combineReducers({
    counts
})
export default rootReducer;