import { AUTH_SUCCESS, ERROR_MSG, SAVE_SUCCESS, SAVE_FAIL, CLEAR_REDIRECTTO } from '../constent'

// 注册/登录成功
export const authSuccess = user => ({ type: AUTH_SUCCESS, data: user })
// 错误信息
export const errorMsg = msg => ({ type: ERROR_MSG, data: msg })
// 清除redirectTO
export const clearRedirectTo = () => ({ type: CLEAR_REDIRECTTO })
// 用户信息保存成功
export const saveSuccess = user => ({ type: SAVE_SUCCESS, data: user })
// 用户信息保存失败
export const saveFail = msg => ({ type: SAVE_FAIL, data: msg })
