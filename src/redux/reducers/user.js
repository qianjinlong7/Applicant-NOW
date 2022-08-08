import { AUTH_SUCCESS, ERROR_MSG, RESET_USER, RECEIVE_USERS } from '../constent'

const initState = {
  username: '', // 用户名
  userType: '',  // 用户类型，0为求职者，1为招聘者
  msg: '',    // 后端返回的错误信息
  avatar: '', // 头像
  info: '',   // 介绍（包括职位要求或个人简介）
  post: '',   // 职位
  salary: '', // 月薪
  company: '', // 公司名
  users: [],  // 用户列表
}
export default function user(preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case AUTH_SUCCESS:  // 授权成功——(登录、注册、获取用户) 成功
      return { ...preState, ...data }
    case ERROR_MSG:
      return { ...preState, msg: data }
    case RESET_USER:     // 用户信息保存失败
      return { ...initState, msg: data }
    case RECEIVE_USERS:
      return { ...preState, users: data }
    default:
      return preState
  }
}