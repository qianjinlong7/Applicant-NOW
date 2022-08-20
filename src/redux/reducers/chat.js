import { RECEIVE_MSGS, RECEIVE_MSG } from '../constent'

const initState = {
  users: null,    // 所有用户的用户名和头像
  chatMsgs: [], // 当前用户所有的相关消息
  unReadCount: 0  // 
}
export default function chat(preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case RECEIVE_MSGS:
      return { ...preState, users: data.users, chatMsgs: data.chatMsgs }
    case RECEIVE_MSG:
      return {
        users: preState.users,
        chatMsgs: [...preState.chatMsgs, data],
        unReadCount: preState.unReadCount
      }
    default:
      return preState
  }
}