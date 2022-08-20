/**
 * 定义各个功能的接口
 */
import ajax from './ajax'

// 注册接口
export const reqRegister = user => ajax('/register', user, 'POST')

// 登录接口 
export const reqLogin = user => ajax('/login', user, 'POST')

// 用户信息完善接口
export const reqSaveInfo = user => ajax('/update', user, 'POST')

// 获取用户信息接口
export const reqGetInfo = () => ajax('/user')

// 获取指定类型用户的数据
export const reqGetUsers = userType => ajax('/userlist', { userType })

// 获取当前用户的消息列表
export const reqGetMsgs = () => ajax('/msglist')

// 修改消息为已读
export const reqReadMsg = from => ajax('/readmsg', { from }, 'POST')
