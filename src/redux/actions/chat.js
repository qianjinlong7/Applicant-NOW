import io from 'socket.io-client' // 引入客户端io
import { initIO } from '../../utils'
import { reqGetMsgs } from '../../api'
import { receiveMsgs, errorMsg } from '../actions'

// 发送消息的异步action
export const asyncSendMsg = (userid, { from, to, content }) => {
  return dispatch => {
    console.log('客户端向服务器发送消息', { from, to, content })
    initIO(userid, dispatch)
    io.socket.emit('sendMsg', { from, to, content })
  }
}

// 获取当前用户信息列表异步action
export const asyncGetMsgs = (userid) => {
  return async dispatch => {
    initIO(userid, dispatch)
    const response = await reqGetMsgs()
    const result = response.data
    if (result.code === 1) {
      dispatch(receiveMsgs(result.data))
    } else {
      dispatch(errorMsg(result.msg))
    }
  }
}
