/**
 * 登陆组件
 */
import React, { Fragment, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { asyncLogin } from '../../redux/actions/login'
import { List, Form, Input, Button } from 'antd-mobile'
import Header from '../../components/Header'
import Logo from '../../components/Logo'
import './index.less'

function Login(props) {
  const navigate = useNavigate()
  const [userInfo, setuserInfo] = useState({
    username: '',
    password: '',
  })
  const { user, asyncLogin } = props
  const handleInfo = (type, value) => {
    setuserInfo({ ...userInfo, [type]: value })
  }
  // 登录，向后端发送保存在state中的用户对象
  const login = () => {
    asyncLogin(userInfo)
  }
  // 点击去注册
  const toRegister = () => {
    navigate('/register')
  }
  /**
   * 用于重定向
   * 页面挂载后，根据redux中是否存在【用户名】来判断【是否已登录】
   * 若已登录则跳转到路由中枢进一步判断应该跳转到哪个页面
   */
  useEffect(() => {
    if (user.username) {
      navigate('/central')
    }
  })
  return (
    <Fragment>
      <Header title='硅 谷 直 聘' />
      <Logo />
      <List className='loginList'>
        <Form layout='horizontal' footer={
          <Button onClick={login} block type='submit' color='primary' size='large'>
            登录
          </Button>
        }>
          <Form.Item label='用户名' name='username' rules={[{ required: true, message: '用户名不能为空' }]}>
            <Input onChange={value => handleInfo('username', value)} placeholder='请输入用户名' clearable />
          </Form.Item>
          <Form.Item label='密码' name='password' rules={[{ required: true, message: '密码不能为空' }]}>
            <Input onChange={value => handleInfo('password', value)} placeholder='请输入密码' clearable type='password' />
          </Form.Item>
        </Form>
        <Button onClick={toRegister} block size='large'>没有账户，去注册</Button>
      </List>
    </Fragment>
  )
}

export default connect(
  state => ({ user: state.user }),
  { asyncLogin }
)(Login)
