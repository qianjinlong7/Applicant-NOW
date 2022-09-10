import io from 'socket.io-client' // 引入客户端io
import { initIO } from '../../utils'
import { reqGetMsgs, reqReadMsg } from '../../api'
import { receiveMsgs, readMsg, errorMsg } from '../actions'

// 发送消息的异步action
export const asyncSendMsg = (userid, { from, to, content }) => {
  return dispatch => {
    initIO(userid, dispatch)
    io.socket.emit('sendMsg', { from, to, content })
  }
}

// 获取当前用户信息列表异步action
export const asyncGetMsgs = userid => {
  return async dispatch => {
    initIO(userid, dispatch)
    const response = await reqGetMsgs()
    const result = response.data
    if (result.code === 1) {
      dispatch(receiveMsgs(result.data, userid))
    } else {
      dispatch(errorMsg(result.msg))
    }
  }
}

// 将消息标为已读的异步action
export const asyncReadMsgs = targetId => {
  return async dispatch => {
    const response = await reqReadMsg(targetId)
    const result = response.data
    if (result.code === 1) {
      dispatch(readMsg(result.data))
    } else {
      dispatch(errorMsg(result.msg))
    }
  }
}
