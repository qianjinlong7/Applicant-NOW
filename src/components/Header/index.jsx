import React from 'react'
import { NavBar } from 'antd-mobile'
import './index.less'

export default function Logo(props) {
  return (
    <NavBar className='navBar' backArrow=''>{props.title}</NavBar>
  )
}
