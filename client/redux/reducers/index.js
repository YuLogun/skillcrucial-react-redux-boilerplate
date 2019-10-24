import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
/* import userReducer from './users'
 */
const createRootReducer = history => combineReducers({
  router: connectRouter(history)
})

export default createRootReducer
