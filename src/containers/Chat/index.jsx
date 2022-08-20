/**
 * 用户聊天界面
 */
import React, { Fragment, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { asyncSendMsg, asyncGetMsgs } from '../../redux/actions/chat'
import { List, Image, Form, Input } from 'antd-mobile'
import Cookies from 'js-cookie'
import Header from '../../components/Header'
import './index.less'

function Chat(props) {
  const [msg, setMsg] = useState('')
  const navigate = useNavigate()
  const userid = Cookies.get('userid')
  const { state: { title, targetId } } = useLocation()
  const { user: { _id, avatar }, chat: { users, chatMsgs }, asyncSendMsg, asyncGetMsgs } = props
  useEffect(() => {
    if (!userid) {
      navigate('/login')
    }
    if (!users) {
      asyncGetMsgs()
    }
  }, [userid, users, navigate, asyncGetMsgs])
  const saveMsg = val => {  // 受控组件，实时保存input框输入的内容
    setMsg(val)
  }
  const sendMsg = () => { // 发送消息
    if (msg !== '') {
      asyncSendMsg({ from: _id, to: targetId, content: msg })
      setMsg('')
    }
  }
  return (
    <Fragment>
      <Header title={title} />
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
            <button onClick={sendMsg} className='send'>发送</button>
          }
        >
          <Input onChange={val => saveMsg(val)} value={msg} />
        </Form.Item>
      </Form>
    </Fragment>
  )
}

export default connect(
  state => ({
    user: state.user,
    chat: state.chat
  }),
  { asyncSendMsg, asyncGetMsgs }
)(Chat)
