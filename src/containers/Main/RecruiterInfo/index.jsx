import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Form, Button, Input, TextArea } from 'antd-mobile'
import Header from '../../../components/Header'
import AvatarSelector from '../../../components/AvatarSelector'

function RecruiterInfo() {
  return (
    <Fragment>
      <Header title='完善信息' />
      <AvatarSelector />
      <Form layout='horizontal' footer={
        <Button block type='submit' color='primary' size='large'>
          保存
        </Button>
      }>
        <Form.Item label='招聘职位' name='job' rules={[{ required: true, message: '招聘职位必须指定' }]}>
          <Input onChange={console.log} placeholder='请输入招聘职位' clearable />
        </Form.Item>
        <Form.Item label='公司名称' name='compony' rules={[{ required: true, message: '公司名称必须指定' }]}>
          <Input onChange={console.log} placeholder='请输入公司名称' />
        </Form.Item>
        <Form.Item label='职位薪资' name='salary' rules={[{ required: true, message: '职位薪资必须指定' }]}>
          <Input onChange={console.log} placeholder='请输入职位薪资' />
        </Form.Item>
        <Form.Item name='address' label='职位要求'>
          <TextArea placeholder='请填写详细的职位要求' maxLength={100} rows={2} showCount />
        </Form.Item>
      </Form>
    </Fragment>
  )
}

export default connect()(RecruiterInfo)
