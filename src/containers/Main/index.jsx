/**
 * 主界面组件，容纳用户信息完善界面、用户主界面、个人中心
 */
import React, { Fragment, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import Cookies from 'js-cookie'

function Main(props) {
  const userid = Cookies.get('userid')  // 获取指定的cookie
  const navigate = useNavigate()
  // 当cookie中没有用户信息时，则跳转到路由中枢进行控制
  useEffect(() => {
    if(!userid || !props.user._id) {
      navigate('/central')
    }
  })
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  )
}

export default connect(
  state => ({ user: state.user }),
  {}
)(Main)
