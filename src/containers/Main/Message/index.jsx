import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { List, Image } from 'antd-mobile'
import Header from '../../../components/Header'

function Message(props) {
  const { user, chat: { users, chatMsgs } } = props
  return (
    <Fragment>
      <Header title='消息列表' />
      <List style={{ "marginTop": "45px", "marginBottom": "49px" }}>
        {
          chatMsgs.map(item => {
            return (
              <List.Item
                key={item._id}
                prefix={
                  <Image
                    src={user._id === item.from ? users[item.to].avatar : users[item.from].avatar}
                    style={{ borderRadius: 20 }}
                    fit='cover'
                    width={40}
                    height={40}
                  />
                }
                description={item.content}
              >
                {user._id === item.from ? users[item.to].username : users[item.from].username}
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
