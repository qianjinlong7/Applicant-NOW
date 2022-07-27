import { Toast } from 'antd-mobile'
import { reqRegister } from '../../api'
import { authSuccess, errorMsg } from './index'

// 注册的异步action
export const asyncRegister = user => {
  return async dispatch => {
    const response = await reqRegister(user)
    const result = response.data
    if (result.code === 1) {
      dispatch(authSuccess(result.data))
      Toast.show({ icon: 'success', content: '注册成功' })
    } else {
      dispatch(errorMsg(result.msg))
      Toast.show({ icon: 'fail', content: result.msg })
    }
  }
}
