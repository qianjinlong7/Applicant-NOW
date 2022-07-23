/**
 * 注册组件
 */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  List,
  Form,
  Input,
  Radio,
  Button
} from 'antd-mobile'
import Header from '../../components/Header'
import './index.less'

export default function Register() {
  const navigate = useNavigate()
  const [userInfo, setuserInfo] = useState({
    username: '',
    password: '',
    confirmPWD: '',
    userType: 0
  })
  const { userType } = userInfo
  const handleInfo = (type, value) => {
    setuserInfo({ ...userInfo, [type]: value })
  }
  const register = () => {
    console.log(userInfo)
  }
  const toLogin = () => {
    navigate('/login')
  }
  return (
    <div>
      <Header />
      <div className='registerList'>
        <List >
          <Form layout='horizontal'>
            <Form.Item label='用户名' name='username'>
              <Input onChange={value => handleInfo('username', value)} placeholder='请输入用户名' clearable />
            </Form.Item>
            <Form.Item label='密码' name='password'>
              <Input onChange={value => handleInfo('password', value)} placeholder='请输入密码' clearable type='password' />
            </Form.Item>
            <Form.Item label='确认密码' name='confirmPassword'>
              <Input onChange={value => handleInfo('confirmPWD', value)} placeholder='请再次输入密码' clearable type='password' />
            </Form.Item>
          </Form>
          <List.Item>
            &nbsp;<span className='chooseId'>您的身份是</span>
            <Radio checked={userType === 0} onChange={() => handleInfo('userType', 0)} value='2' className='chooseIdRadio id1'>求职者</Radio> &nbsp;&nbsp;&nbsp;
            <Radio checked={userType === 1} onChange={() => handleInfo('userType', 1)} value='2' className='chooseIdRadio id2'>招聘者</Radio>
          </List.Item>
        </List>
        <br />
        <Button onClick={register} block color='primary' size='large'>注册</Button>
        <Button onClick={toLogin} block size='large'>已有账户，去登陆</Button>
      </div>
    </div>
  )
}
