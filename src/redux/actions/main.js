import { Toast } from 'antd-mobile'
import { reqInfo } from '../../api'
import { saveSuccess, saveFail } from './index'

// 注册的异步action
export const asyncSaveInfo = user => {
  return async dispatch => {
    const response = await reqInfo(user)
    const result = response.data
    if (result.code === 1) {
      dispatch(saveSuccess(result.data))
      Toast.show({ icon: 'success', content: '保存成功' })
    } else {
      dispatch(saveFail(result.msg))
      Toast.show({ icon: 'fail', content: result.msg })
    }
  }
}
