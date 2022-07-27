import { AUTH_SUCCESS, ERROR_MSG } from '../constent'

const initState = {
  username: '',
  type: 0,
  msg: '',
  redirectTo: ''
}
export default function login_register(preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case AUTH_SUCCESS:
      return { ...data, redirectTo: '/main' }
    case ERROR_MSG:
      return { ...preState, msg: data }
    default:
      return preState
  }
}