import Cookies from 'js-cookie'
import { Toast } from 'antd-mobile'
import { reqSaveInfo, reqGetInfo, reqGetUsers } from '../../api'
import { authSuccess, resetUser, receiveUsers, errorMsg } from './index'

// 保存用户完善信息的异步action
export const asyncSaveInfo = user => {
  return async dispatch => {
    const response = await reqSaveInfo(user)
    const result = response.data
    if (result.code === 1) {
      dispatch(authSuccess(result.data))
      Toast.show({ icon: 'success', content: '保存成功' })
    } else {
      dispatch(resetUser(result.msg))
      Toast.show({ icon: 'fail', content: result.msg })
    }
  }
}
// 获取用户信息的异步action
export const asyncGetInfo = () => {
  return async dispatch => {
    const response = await reqGetInfo()
    const result = response.data
    if (result.code === 1) {
      dispatch(authSuccess(result.data))
    } else {
      dispatch(resetUser(result.msg))
      Toast.show({ icon: 'fail', content: result.msg })
      Cookies.remove('userid')
    }
  }
}

// 获取对应类型的用户列表异步action
export const asyncGetUsers = userType => {
  return async dispatch => {
    const response = await reqGetUsers(userType)
    const result = response.data
    if (result.code === 1) {
      dispatch(receiveUsers(result.data))
    } else {
      dispatch(errorMsg(result.msg))
      Toast.show({ icon: 'fail', content: result.msg })
    }
  }
}
