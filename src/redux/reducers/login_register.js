import { AUTH_SUCCESS, ERROR_MSG, CLEAR_REDIRECTTO } from '../constent'
import { getNavigate } from '../../utils'

const initState = {
  username: '',
  userType: 0,
  msg: '',
  redirectTo: ''
}
export default function login_register(preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case AUTH_SUCCESS:
      const { userType, post } = data
      return { ...data, redirectTo: getNavigate(userType, post) }
    case ERROR_MSG:
      return { ...preState, msg: data }
    case CLEAR_REDIRECTTO:
      return { ...preState, redirectTo: '' }
    default:
      return preState
  }
}