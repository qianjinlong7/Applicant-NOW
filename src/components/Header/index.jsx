import React from 'react'
import { useNavigate } from 'react-router-dom'
import { NavBar } from 'antd-mobile'
import './index.less'

export default function Header(props) {
  const navigate = useNavigate()
  const { title, chat } = props
  const back = () => {
    navigate(-1)
  }
  return (
    <NavBar backArrow={chat ? true : false} onBack={back}>{title}</NavBar>
  )
}
