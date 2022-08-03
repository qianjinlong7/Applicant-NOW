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
  const tabs = [
    {
      key: props.userType === 0 ? '/main/applicant' : '/main/recruiter',
      title: '我的待办',
      icon: <UnorderedListOutline />,
      badge: '5'
    },
    {
      key: '/main/message',
      title: '消息',
      icon: (active) => active ? <MessageFill /> : <MessageOutline />,
      badge: '99+'
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
  const setRouteActive = (value) => {
    navigate(value)
  }
  return (
    <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
      {tabs.map(item => (<TabBar.Item key={item.key} icon={item.icon} title={item.title} badge={item.badge} />))}
    </TabBar>
  )
}
