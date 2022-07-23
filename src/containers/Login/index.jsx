/**
 * 登陆组件
 */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  List,
  Form,
  Input,
  Button
} from 'antd-mobile'
import Header from '../../components/Header'
import './index.less'

export default function Register() {
  const navigate = useNavigate()
  const [userInfo, setuserInfo] = useState({
    username: '',
    password: '',
  })
  const handleInfo = (type, value) => {
    setuserInfo({ ...userInfo, [type]: value })
  }
  const login = () => {
    console.log(userInfo)
  }
  const toRegister = () => {
    navigate('/register')
  }
  return (
    <div>
      <Header />
      <div className='loginList'>
        <List >
          <Form layout='horizontal'>
            <Form.Item label='用户名' name='username'>
              <Input onChange={value => handleInfo('username', value)} placeholder='请输入用户名' clearable />
            </Form.Item>
            <Form.Item label='密码' name='password'>
              <Input onChange={value => handleInfo('password', value)} placeholder='请输入密码' clearable type='password' />
            </Form.Item>
          </Form>
        </List>
        <br />
        <Button onClick={login} block color='primary' size='large'>登录</Button>
        <Button onClick={toRegister} block size='large'>没有账户，去注册</Button>
      </div>
    </div>
  )
}
