import {
  AUTH_SUCCESS,
  ERROR_MSG,
  RESET_USER,
  RECEIVE_USERS,
  RECEIVE_MSGS,
  RECEIVE_MSG,
  READ_MSG
} from '../constent'

// 授权成功——登录、注册、获取用户 成功
export const authSuccess = user => ({ type: AUTH_SUCCESS, data: user })
// 错误信息
export const errorMsg = msg => ({ type: ERROR_MSG, data: msg })
// 接收用户信息失败，重置redux中的用户信息
export const resetUser = msg => ({ type: RESET_USER, data: msg })
// 接收对应类型用户数组
export const receiveUsers = users => ({ type: RECEIVE_USERS, data: users })

// 接收用户消息列表
export const receiveMsgs = (chatData, userid) => ({ type: RECEIVE_MSGS, data: { chatData, userid } })
// 接收新消息
export const receiveMsg = (chatData, userid) => ({ type: RECEIVE_MSG, data: { chatData, userid } })
// 修改指定用户消息为已读
export const readMsg = nModified => ({ type: READ_MSG, data: nModified })
