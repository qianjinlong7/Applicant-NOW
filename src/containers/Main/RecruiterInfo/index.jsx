import React, { Fragment, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { asyncSaveInfo } from '../../../redux/actions/main'
import { clearRedirectTo } from '../../../redux/actions'
import { Form, Button, Input, TextArea } from 'antd-mobile'
import Header from '../../../components/Header'
import AvatarSelector from '../../../components/AvatarSelector'

function RecruiterInfo(props) {
  const [recruitmentInfo, setRecruitmentInfo] = useState({
    avatar: '',   // 头像
    post: '',     // 招聘职位
    company: '',  // 公司名
    salary: '',   // 月薪
    info: ''      // 职位要求
  })
  // 保存招聘者完善的信息
  const handleRecruitmentInfo = (type, value) => {
    setRecruitmentInfo({ ...recruitmentInfo, [type]: value })
  }
  // 向头像选择器组件传递的 用于保存头像URL的函数
  const saveAvatarURL = avatarURL => {
    handleRecruitmentInfo('avatar', avatarURL)
  }
  const { main, asyncSaveInfo, clearRedirectTo } = props
  // 点击保存按钮，向后端发送填好的信息
  const saveRecruitmentInfo = () => {
    asyncSaveInfo(recruitmentInfo)
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
      <AvatarSelector saveAvatarURL={saveAvatarURL} avatar={recruitmentInfo.avatar} />
      <Form layout='horizontal' footer={
        <Button onClick={saveRecruitmentInfo} block type='submit' color='primary' size='large'>
          保存
        </Button>
      }>
        <Form.Item label='招聘职位' name='post' rules={[{ required: true, message: '招聘职位必须指定' }]}>
          <Input onChange={value => handleRecruitmentInfo('post', value)} placeholder='请输入招聘职位' clearable />
        </Form.Item>
        <Form.Item label='公司名称' name='compony' rules={[{ required: true, message: '公司名称必须指定' }]}>
          <Input onChange={value => handleRecruitmentInfo('company', value)} placeholder='请输入公司名称' clearable />
        </Form.Item>
        <Form.Item label='职位薪资' name='salary' rules={[{ required: true, message: '职位薪资必须指定' }]}>
          <Input onChange={value => handleRecruitmentInfo('salary', value)} placeholder='请输入职位薪资' clearable />
        </Form.Item>
        <Form.Item name='info' label='职位要求'>
          <TextArea onChange={value => handleRecruitmentInfo('info', value)} placeholder='请填写详细的职位要求' maxLength={100} rows={2} showCount />
        </Form.Item>
      </Form>
    </Fragment>
  )
}

export default connect(
  state => ({ main: state.main }),
  { asyncSaveInfo, clearRedirectTo }
)(RecruiterInfo)
