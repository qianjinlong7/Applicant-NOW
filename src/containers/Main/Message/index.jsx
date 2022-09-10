import React, { Fragment, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { List, Image, Badge } from 'antd-mobile'
import { asyncGetMsgs, asyncReadMsgs } from '../../../redux/actions/chat'
import Header from '../../../components/Header'
import './index.less'

// 获取每个消息分组的最后一条消息
const getLastMsgs = (chatMsgs, userId) => {
  const lastMsgObjs = {}
  chatMsgs.forEach(msg => {
    if (msg.to === userId && !msg.read) {
      msg.unReadCount = 1
    } else {
      msg.unReadCount = 0
    }
    const chatId = msg.chat_id
    const lastMsg = lastMsgObjs[chatId]
    if (!lastMsg) {    // 如果此时 当前chatId分组中为空，则此时的msg可视为分组下最后一条消息
      lastMsgObjs[chatId] = msg
      lastMsgObjs[chatId].unReadCount = msg.unReadCount ? 1 : 0
    } else {
      const unReadCount = lastMsg.unReadCount + msg.unReadCount
      /**
       *  如果 当前消息创建时间 大于 当前分组“最后一条消息”的创建时间
       *  则代表当前消息才是更贴切的最后一条消息
       */
      if (msg.create_time > lastMsg.create_time) {
        lastMsgObjs[chatId] = msg
      }
      lastMsgObjs[chatId].unReadCount = unReadCount
    }
  })
  const lastMsgs = Object.values(lastMsgObjs) // 对lastMsgObjs的值进行提取
  // 对提取到的lastMsgs数组按照创建时间进行排序，使最新的对话出现在消息列表的最上方
  lastMsgs.sort((msg1, msg2) => msg2.create_time - msg1.create_time)
  return lastMsgs
}

function Message(props) {
  const navigate = useNavigate()
  const { user, chat: { users, chatMsgs }, asyncGetMsgs, asyncReadMsgs } = props
  useEffect(() => {
    asyncGetMsgs(user._id)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  const lastMsgs = getLastMsgs(chatMsgs, user._id)
  return (
    <Fragment>
      <Header title='消息列表' />
      <List style={{ "marginTop": "45px", "marginBottom": "49px" }}>
        {
          lastMsgs.map(msg => {
            const targetId = user._id === msg.from ? msg.to : msg.from
            const targetName = users[targetId].username
            const targetAvatar = users[targetId].avatar
            return (
              <List.Item
                key={msg._id}
                onClick={
                  () => {
                    navigate(`/chat/${targetId}`, { state: { title: targetName, targetId } })
                    asyncReadMsgs(targetId)
                  }
                }
                prefix={
                  <Image
                    src={targetAvatar}
                    style={{ borderRadius: 20 }}
                    fit='cover'
                    width={40}
                    height={40}
                  />
                }
                extra={<Badge content={msg.unReadCount ? msg.unReadCount : null} />}
                description={msg.content}
              >
                {targetName}
              </List.Item>
            )
          })
        }
      </List>
    </Fragment>
  )
}

export default connect(
  state => ({
    user: state.user,
    chat: state.chat
  }),
  { asyncGetMsgs, asyncReadMsgs }
)(Message)
