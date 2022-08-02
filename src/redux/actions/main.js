import { Toast } from 'antd-mobile'
import { reqSaveInfo, reqGetInfo } from '../../api'
import { authSuccess, resetUser } from './index'

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
    }
  }
}
