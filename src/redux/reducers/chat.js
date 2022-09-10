import { RECEIVE_MSGS, RECEIVE_MSG, READ_MSG } from '../constent'

const initState = {
  users: null,    // 所有用户的用户名和头像
  chatMsgs: [], // 当前用户所有的相关消息
  unReadCount: 0  // 总的未读消息数量
}
export default function chat(preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case RECEIVE_MSGS:
      return {
        ...preState,
        users: data.chatData.users,
        chatMsgs: data.chatData.chatMsgs,
        unReadCount: data.chatData.chatMsgs.reduce((preValue, msg) => preValue + (!msg.read && msg.to === data.userid ? 1 : 0), 0)
      }
    case RECEIVE_MSG:
      return {
        users: preState.users,
        chatMsgs: [...preState.chatMsgs, data.chatData],
        unReadCount: preState.unReadCount + (!data.chatData.read && data.chatData.to === data.userid ? 1 : 0)
      }
    case READ_MSG:
      return {
        ...preState,
        unReadCount: preState.unReadCount - data
      }
    default:
      return preState
  }
}