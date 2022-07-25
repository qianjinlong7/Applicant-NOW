import { AUTH_SUCCESS, ERROR_MSG } from '../constent'
import { reqRegister, reqLogin } from '../../api'

// 注册/登录成功
export const authSuccess = user => ({ type: AUTH_SUCCESS, data: user })
// 错误信息
export const errorMsg = msg => ({ type: ERROR_MSG, data: msg })

// 注册的异步action
export const register = user => {
  return async dispatch => {
    const response = await reqRegister(user)
    if (response.code === 1) {
      dispatch(authSuccess(response.data))
    } else {
      dispatch(errorMsg(response.msg))
    }
  }
}

// 登录的异步action
export const login = user => {
  return async dispatch => {
    const response = await reqLogin(user)
    if (response.code === 1) {
      dispatch(authSuccess(response.data))
    } else {
      dispatch(errorMsg(response.msg))
    }
  }
}
