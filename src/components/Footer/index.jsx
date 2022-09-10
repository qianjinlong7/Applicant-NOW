import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import {
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline
} from 'antd-mobile-icons'
import './index.less'

export default function Footer(props) {
  const { userType, unReadCount } = props
  const tabs = [
    {
      key: userType === 0 ? '/main/applicant' : '/main/recruiter',
      title: userType === 0 ? '职位' : '人员',
      icon: <UnorderedListOutline />,
    },
    {
      key: '/main/message',
      title: '消息',
      icon: (active) => active ? <MessageFill /> : <MessageOutline />,
      badge: `${unReadCount ? unReadCount : ''}`
    },
    {
      key: '/main/personal',
      title: '个人中心',
      icon: <UserOutline />
    }
  ]
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location
  const setRouteActive = value => navigate(value) // 根据点击图标进行路由跳转
  return (
    <TabBar activeKey={pathname} onChange={value => setRouteActive(value)} className='footer'>
      {tabs.map(item => (<TabBar.Item key={item.key} icon={item.icon} title={item.title} badge={item.badge} />))}
    </TabBar>
  )
}
