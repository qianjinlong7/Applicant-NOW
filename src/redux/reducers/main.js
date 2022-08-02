import { RECEIVE_USER, RESET_USER, CLEAR_REDIRECTTO } from '../constent'
import { getNavigate } from '../../utils'

const initState = {
  avatar: '', // 头像
  info: '',   // 介绍（包括职位要求或个人简介）
  post: '',   // 职位
  salary: '', // 月薪
  company: '', // 公司名
  redirectTo: ''
}
export default function main(preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case RECEIVE_USER:  // 用户信息保存成功
      const { userType, post } = data
      return { ...data, redirectTo: getNavigate(userType, post) }
    case RESET_USER:     // 用户信息保存失败
      if (data === '请先登录')
        return { ...preState, msg: data, redirectTo: '/login' }
      else
        return { ...preState, msg: data, redirectTo: '/register' }
    case CLEAR_REDIRECTTO:  // 清除路由跳转信息
      return { ...preState, redirectTo: '' }
    default:
      return preState
  }
}