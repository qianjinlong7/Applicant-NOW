import { Toast } from 'antd-mobile'
import { reqLogin } from '../../api'
import { authSuccess, errorMsg } from './index'

// 登录的异步action
export const asyncLogin = user => {
  return async dispatch => {
    const response = await reqLogin(user)
    const result = response.data
    if (result.code === 1) {
      dispatch(authSuccess(result.data))
      Toast.show({ icon: 'success', content: '登录成功' })
    } else {
      dispatch(errorMsg(result.msg))
      Toast.show({ icon: 'fail', content: result.msg })
    }
  }
}