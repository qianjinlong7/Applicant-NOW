/**
 * 主界面组件，容纳用户信息完善界面、用户主界面、个人中心
 */
import React, { Fragment, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import Cookies from 'js-cookie'
import { asyncGetUsers } from '../../redux/actions/main'
import Footer from '../../components/Footer'

function Main(props) {
  const userid = Cookies.get('userid')  // 获取指定的cookie
  const navigate = useNavigate()
  const { user: { _id, userType, users }, asyncGetUsers } = props
  // 当cookie中没有用户信息时，则跳转到路由中枢进行控制
  useEffect(() => {
    if (!userid || !_id) {
      navigate('/central')
    }
    if (users.length === 0) {
      asyncGetUsers(userType)
    }
  })
  return (
    <Fragment>
      <Outlet />
      <Footer userType={props.user.userType} />
    </Fragment>
  )
}

export default connect(
  state => ({ user: state.user }),
  { asyncGetUsers }
)(Main)
