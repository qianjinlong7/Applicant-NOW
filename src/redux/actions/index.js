import { AUTH_SUCCESS, ERROR_MSG } from '../constent'

// 注册/登录成功
export const authSuccess = user => ({ type: AUTH_SUCCESS, data: user })
// 错误信息
export const errorMsg = msg => ({ type: ERROR_MSG, data: msg })