import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Cookie from 'js-cookie'
import { Result, Avatar, Button, Modal, Card } from 'antd-mobile'
import { resetUser } from '../../../redux/actions'
import Header from '../../../components/Header'
import './index.less'

function Personal(props) {
  const { user, resetUser } = props
  const { avatar, username, userType } = user
  const logout = () => {
    Modal.confirm({
      content: '确定退出登录吗',
      onConfirm: () => {
        Cookie.remove('userid')
        resetUser('退出成功')
      }
    })
  }
  return (
    <Fragment>
      <Header title='个人中心' />
      <Result
        className='personalInfo'
        icon={<Avatar src={avatar} />}
        status='success'
        title={username}
      />
      <br />
      <Card title='相关信息'>
        {
          userType === 0 ?
            <div style={{ "whiteSpace": "pre-wrap" }}>
              求职岗位：{user.post}
              <br />
              个人介绍：{user.info}
            </div> :
            <div style={{ "whiteSpace": "pre-wrap" }}>
              招聘职位：{user.post}
              <br />
              公司：{user.company}
              <br />
              薪资：{user.salary}
              <br />
              要求：{user.info}
            </div>
        }
      </Card>
      <Button onClick={logout} block color='danger'>退出登录</Button>
    </Fragment>
  )
}

export default connect(
  state => ({ user: state.user }),
  { resetUser }
)(Personal)
