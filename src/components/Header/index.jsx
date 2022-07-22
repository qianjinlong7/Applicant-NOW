import React, { Fragment } from 'react'
// import { NavBar } from 'antd-mobile'
import './index.less'
import logo from './logo.png'

export default function Logo() {
  return (
    <Fragment>
      {/* <NavBar>硅&nbsp;谷&nbsp;直&nbsp;聘</NavBar> */}
      <div className='logo-container'>
        <img src={logo} alt="logo" className='logo-img' />
      </div>
    </Fragment>
  )
}
