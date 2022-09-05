import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { List, Image } from 'antd-mobile'
import Header from '../../../components/Header'
import './index.less'

// 获取每个消息分组的最后一条消息
const getLastMsgs = chatMsgs => {
  const lastMsgObjs = {}
  chatMsgs.forEach(msg => {
    const chatId = msg.chat_id
    const lastMsg = lastMsgObjs[chatId]
    if (!lastMsg) {    // 如果此时 当前chatId分组中为空，则此时的msg可视为分组下最后一条消息
      lastMsgObjs[chatId] = msg
    } else {
      /**
       *  如果 当前消息创建时间 大于 当前分组“最后一条消息”的创建时间
       *  则代表当前消息才是更贴切的最后一条消息
       */
      if (msg.create_time > lastMsg.create_time) {
        lastMsgObjs[chatId] = msg
      }
    }
  })
  const lastMsgs = Object.values(lastMsgObjs) // 对lastMsgObjs的值进行提取
  // 对提取到的lastMsgs数组按照创建时间进行排序，使最新的对话出现在消息列表的最上方
  lastMsgs.sort((msg1, msg2) => msg2.create_time - msg1.create_time)
  return lastMsgs
}

function Message(props) {
  const navigate = useNavigate()
  const { user, chat: { users, chatMsgs } } = props
  const lastMsgs = getLastMsgs(chatMsgs)
  return (
    <Fragment>
      <Header title='消息列表' />
      <List style={{ "marginTop": "45px", "marginBottom": "49px" }}>
        {
          lastMsgs.map(msg => {
            const targetName = user._id === msg.from ? users[msg.to].username : users[msg.from].username
            const targetId = user._id === msg.from ? msg.to : msg.from
            const targetAvatar = user._id === msg.from ? users[msg.to].avatar : users[msg.from].avatar
            return (
              <List.Item
                key={msg._id} onClick={() => navigate(`/chat/${targetId}`, { state: { title: targetName, targetId } })}
                prefix={
                  <Image
                    src={targetAvatar}
                    style={{ borderRadius: 20 }}
                    fit='cover'
                    width={40}
                    height={40}
                  />
                }
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
  {}
)(Message)
