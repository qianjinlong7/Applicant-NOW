import React from 'react'
import { NavBar } from 'antd-mobile'
import './index.less'

export default function Logo(props) {
  return (
    <NavBar backArrow=''>{props.title}</NavBar>
  )
}
