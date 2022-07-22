/**
 * 注册组件
 */
import React from 'react'
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
  return (
    <div>
      <Header />
      <div className='registerList'>
        <List >
          <Form layout='horizontal'>
            <Form.Item label='用户名' name='username'>
              <Input placeholder='请输入用户名' clearable />
            </Form.Item>
            <Form.Item label='密码' name='password'>
              <Input placeholder='请输入密码' clearable type='password' />
            </Form.Item>
            <Form.Item label='确认密码' name='confirmPassword'>
              <Input placeholder='请再次输入密码' clearable type='password' />
            </Form.Item>
          </Form>
          <List.Item>
            &nbsp;<span className='chooseId'>您的身份是</span>
            <Radio value='2' className='chooseIdRadio id1'>求职者</Radio> &nbsp;&nbsp;&nbsp;
            <Radio value='2' className='chooseIdRadio id2'>招聘者</Radio>
          </List.Item>
        </List>
        <br />
        <Button block color='primary' size='large'>注册</Button>
        <Button block size='large'>已有账户</Button>
      </div>
    </div>
  )
}
