import React, { Fragment, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { asyncSaveInfo } from '../../../redux/actions/main'
import { clearRedirectTo } from '../../../redux/actions'
import { Form, Button, Input, TextArea } from 'antd-mobile'
import Header from '../../../components/Header'
import AvatarSelector from '../../../components/AvatarSelector'

function ApplicantInfo(props) {
  const [applicantInfo, setApplicantInfo] = useState({
    avatar: '',   // 头像
    post: '',     // 求职岗位
    info: ''      // 个人介绍
  })
  // 保存求职者完善的信息
  const handleApplicantInfo = (type, value) => {
    setApplicantInfo({ ...applicantInfo, [type]: value })
  }
  // 向头像选择器组件传递的 用于保存头像URL的函数
  const saveAvatarURL = avatarURL => {
    handleApplicantInfo('avatar', avatarURL)
  }
  const { main, asyncSaveInfo, clearRedirectTo } = props
  // 点击保存按钮，向后端发送填好的信息
  const saveApplicantInfo = () => {
    asyncSaveInfo(applicantInfo)
  }
  const { redirectTo } = main
  const navigate = useNavigate()
  useEffect(() => {
    if (redirectTo) {
      navigate(redirectTo)
      clearRedirectTo()
    }
  })
  return (
    <Fragment>
      <Header title='完善信息' />
      <AvatarSelector saveAvatarURL={saveAvatarURL} avatar={applicantInfo.avatar} />
      <Form layout='horizontal' requiredMarkStyle='asterisk' footer={
        <Button onClick={saveApplicantInfo} block type='submit' color='primary' size='large'>
          保存
        </Button>
      }>
        <Form.Item label='求职岗位' name='post' rules={[{ required: true, message: '求职岗位必须指定' }]}>
          <Input onChange={value => handleApplicantInfo('post', value)} placeholder='请输入求职岗位' />
        </Form.Item>
        <Form.Item name='info' label='个人介绍'>
          <TextArea onChange={value => handleApplicantInfo('info', value)} placeholder='请填写详细的职位要求' maxLength={100} rows={2} showCount />
        </Form.Item>
      </Form>
    </Fragment>
  )
}

export default connect(
  state => ({ main: state.main }),
  { asyncSaveInfo, clearRedirectTo }
)(ApplicantInfo)
