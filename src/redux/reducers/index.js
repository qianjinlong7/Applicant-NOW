import { combineReducers } from 'redux'
import login from './login'
import register from './register'
import main from './main'

export default combineReducers({
  login,
  register,
  main
})