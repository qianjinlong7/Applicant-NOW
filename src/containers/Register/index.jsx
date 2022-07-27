/**
 * 注册组件
 */
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { asyncRegister } from '../../redux/actions/register'
import { List, Form, Input, Radio, Button, Toast } from 'antd-mobile'
import Header from '../../components/Header'
import './index.less'

function Register(props) {
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
    confirmPWD: '',
    userType: 0
  })
  const { login_register, asyncRegister } = props
  const { username, password, confirmPWD, userType } = userInfo
  const handleInfo = (type, value) => {
    setUserInfo({ ...userInfo, [type]: value })
  }
  const register = () => {
    if (password !== confirmPWD) {
      Toast.show({ icon: 'fail', content: '密码输入不一致' })
    } else {
      asyncRegister({ username, password, userType: parseInt(userType) })
    }
  }
  const toLogin = () => {
    navigate('/login')
  }
  const { redirectTo } = login_register
  useEffect(() => {
    if (redirectTo) {
      navigate(redirectTo)
    }
  })
  return (
    <div>
      <Header />
      <List className='registerList'>
        <Form layout='horizontal'
          footer={
            <Button onClick={register} block type='submit' color='primary' size='large'>
              注册
            </Button>
          }>
          <Form.Item label='用户名' name='username' rules={[{ required: true, message: '用户名不能为空' }]}>
            <Input onChange={value => handleInfo('username', value)} placeholder='请输入用户名' clearable />
          </Form.Item>
          <Form.Item label='密码' name='password' rules={[{ required: true, message: '密码不能为空' }]}>
            <Input onChange={value => handleInfo('password', value)} placeholder='请输入密码' clearable type='password' />
          </Form.Item>
          <Form.Item label='确认密码' name='confirmPassword' rules={[{ required: true, message: '请确认密码' }]}>
            <Input onChange={value => handleInfo('confirmPWD', value)} placeholder='请再次输入密码' clearable type='password' />
          </Form.Item>
          <Form.Item>
            <span className='chooseId'>您的身份是</span>
            <Radio checked={userType === 0} onChange={() => handleInfo('userType', 0)} value='2' className='chooseIdRadio id1'>求职者</Radio> &nbsp;&nbsp;&nbsp;
            <Radio checked={userType === 1} onChange={() => handleInfo('userType', 1)} value='2' className='chooseIdRadio id2'>招聘者</Radio>
          </Form.Item>
        </Form>
        <Button onClick={toLogin} block size='large'>已有账户，去登陆</Button>
      </List>
    </div>
  )
}

export default connect(
  state => ({ login_register: state.login_register }),
  { asyncRegister }
)(Register)
