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
  const { login_register, asyncLogin } = props
  const handleInfo = (type, value) => {
    setuserInfo({ ...userInfo, [type]: value })
  }
  const login = () => {
    asyncLogin(userInfo)
  }
  const toRegister = () => {
    navigate('/register')
  }
  const { redirectTo } = login_register
  useEffect(() => {
    if (redirectTo) {
      navigate(redirectTo)
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
  state => ({ login_register: state.login_register }),
  { asyncLogin }
)(Login)
