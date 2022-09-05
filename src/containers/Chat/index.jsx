/**
 * 用户聊天界面
 */
import React, { Fragment, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { asyncGetInfo } from '../../redux/actions/main'
import { asyncSendMsg, asyncGetMsgs } from '../../redux/actions/chat'
import { List, Image, Form, TextArea, Grid } from 'antd-mobile'
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
    if (!_id) {   // 没有当前用户id时，获取当前用户信息
      asyncGetInfo()
    } else {      // 存在当前用户id但对应用户列表不存在时，根据当前用户id获取消息列表
      if (!users) {
        asyncGetMsgs(_id)
      }
    }
    window.scrollTo(0, document.body.scrollHeight)  // 设置默认消息列表在最下一行
  })
  const saveMsg = val => {  // 受控组件，实时保存input框输入的内容
    setMsg(val)
  }
  const sendMsg = () => { // 发送消息
    if (msg !== '') {   // 当输入框不为空时，实现发送消息功能
      asyncSendMsg(_id, { from: _id, to: targetId, content: msg })
      setMsg('')  // 清空输入框
      setIsShow(false)  // 收起emoji列表
    }
  }
  const showEmoji = () => { // 展开/收起 emoji 列表
    setIsShow(!isShow)
  }
  const onFocus = () => { // 当输入框获取到焦点后，收起emoji列表
    setIsShow(false)
  }
  return (
    <Fragment>
      <Header title={title} chat={true} />
      <List style={{ "marginTop": "45px", "marginBottom": isShow ? "199px" : "49px" }}>
        {
          chatMsgs.map(item => {
            if (item.from === _id && item.to === targetId) {
              return (
                <List.Item key={item._id}
                  extra={
                    <Image src={avatar} style={{ borderRadius: 20 }}
                      fit='cover' width={30} height={30}
                    />
                  }
                >
                  {/* 为文本套上一层容器，使容器靠右，文本正常靠左 */}
                  <span className='myMsg'>{item.content}</span>
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
          {/* <Input onChange={val => saveMsg(val)} value={msg} onFocus={onFocus} /> */}
          <TextArea onChange={val => saveMsg(val)} value={msg} onFocus={onFocus} rows={1} autoSize />
        </Form.Item>
        {
          isShow ? (
            <Grid columns={5} gap={8} style={{ height: '150px', overflow: 'scroll' }}>
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
