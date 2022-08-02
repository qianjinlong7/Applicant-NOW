import {
  AUTH_SUCCESS,
  ERROR_MSG,
  RECEIVE_USER,
  RESET_USER,
  CLEAR_REDIRECTTO,
} from '../constent'

// 注册/登录成功
export const authSuccess = user => ({ type: AUTH_SUCCESS, data: user })
// 错误信息
export const errorMsg = msg => ({ type: ERROR_MSG, data: msg })

// 清除redirectTO
export const clearRedirectTo = () => ({ type: CLEAR_REDIRECTTO })

// 成功接收用户信息，同步到redux中的用户信息
export const receiveUser = user => ({ type: RECEIVE_USER, data: user })
// 接收用户信息失败，重置redux中的用户信息
export const resetUser = msg => ({ type: RESET_USER, data: msg })
