import { AUTH_SUCCESS } from '../constent'

const initState = {
  username: '',
  type: 0,
  msg: ''
}
export default function register(preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case AUTH_SUCCESS:
      return data
    default:
      return preState
  }
}