/**
 * 用户聊天界面
 */
import React, { Fragment, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { asyncGetInfo } from '../../redux/actions/main'
import { asyncSendMsg, asyncGetMsgs } from '../../redux/actions/chat'
import { List, Image, Form, Input, Grid } from 'antd-mobile'
import Header from '../../components/Header'
import './index.less'

function Chat(props) {
  const [msg, setMsg] = useState('')
  const [isShow, setIsShow] = useState(false)
  const { state: { title, targetId } } = useLocation()
  const { user: { _id, avatar }, chat: { users, chatMsgs }, asyncGetInfo, asyncSendMsg, asyncGetMsgs } = props
  const emojis = ['😀', '😂', '😉', '😇', '😃', '😜', '🤭', '☹️',
    '😀', '😂', '😉', '😇', '😃', '😜', '🤭', '☹️',
    '😀', '😂', '😉', '😇', '😃', '😜', '🤭', '☹️',
    '😀', '😂', '😉', '😇', '😃', '😜', '🤭', '☹️',
    '😀', '😂', '😉', '😇', '😃', '😜', '🤭', '☹️',
    '😀', '😂', '😉', '😇', '😃', '😜', '🤭', '☹️',
    '😀', '😂', '😉', '😇', '😃', '😜', '🤭', '☹️',
    '😀', '😂', '😉', '😇', '😃', '😜', '🤭', '☹️',
    '😀', '😂', '😉', '😇', '😃', '😜', '🤭', '☹️',]
  useEffect(() => {
    if (!_id) {
      asyncGetInfo()
    } else {
      if (!users) {
        asyncGetMsgs(_id)
      }
    }
  })
  const saveMsg = val => {  // 受控组件，实时保存input框输入的内容
    setMsg(val)
  }
  const sendMsg = () => { // 发送消息
    if (msg !== '') {
      asyncSendMsg(_id, { from: _id, to: targetId, content: msg })
      setMsg('')
    }
  }
  const showEmoji = () => { // 显示emoji列表
    setIsShow(!isShow)
  }
  return (
    <Fragment>
      <Header title={title} chat={true} />
      <List style={{ "marginTop": "45px", "marginBottom": "49px" }}>
        {
          chatMsgs.map(item => {
            if (item.from === _id && item.to === targetId) {
              return (
                <List.Item key={item._id} className='myMsg'
                  extra={
                    <Image src={avatar} style={{ borderRadius: 20 }}
                      fit='cover' width={30} height={30}
                    />
                  }
                >
                  {item.content}
                </List.Item>
              )
            } else if (item.from === targetId && item.to === _id) {
              return (
                <List.Item key={item._id}
                  prefix={
                    <Image src={users[targetId].avatar} style={{ borderRadius: 20 }}
                      fit='cover' width={30} height={30}
                    />
                  }
                >
                  {item.content}
                </List.Item>
              )
            } else {
              return null
            }
          })
        }
      </List>
      <Form layout='horizontal' className='sendMsg'>
        <Form.Item
          extra={
            <span>
              <span onClick={showEmoji}>😊</span>
              <button onClick={sendMsg} className='send'>发送</button>
            </span>
          }
        >
          <Input onChange={val => saveMsg(val)} value={msg} />
        </Form.Item>
        {
          isShow ? (
            <Grid columns={3} gap={8} style={{ height: '150px', overflow: 'scroll' }}>
              {
                emojis.map((item, index) => {
                  return (
                    <Grid.Item key={index} onClick={() => { setMsg(msg + item) }}>
                      {item}
                    </Grid.Item>
                  )
                })
              }
            </Grid>
          ) : null
        }
      </Form>
    </Fragment>
  )
}

export default connect(
  state => ({
    user: state.user,
    chat: state.chat
  }),
  { asyncGetInfo, asyncSendMsg, asyncGetMsgs }
)(Chat)
