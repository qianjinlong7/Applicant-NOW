/**
 * 主界面组件，作为整个系统的中枢，负责根据各种状态跳转到各个页面中
 */
import React, { Fragment, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import Cookies from 'js-cookie'
import { getNavigate } from '../../utils'
import { asyncGetInfo } from '../../redux/actions/main'
import { clearRedirectTo } from '../../redux/actions'

function Main(props) {
  const userid = Cookies.get('userid')  // 获取指定的cookie
  const navigate = useNavigate()
  const { main, asyncGetInfo, clearRedirectTo } = props
  useEffect(() => {
    if (userid) {   // 登陆过且cookie未超时
      if (main._id) {  // redux已保存了后端返回的数据，不必再发请求查询了
        // 通过工具函数获取路由路径进行跳转
        // clearRedirectTo()
        navigate(getNavigate(main.userType, main.post))
        
      } else {  // 需要向后端发送请求获得用户数据
        asyncGetInfo()
      }
    } else {  // 没有登陆过或cookie超时清除了
      navigate('/login')
      clearRedirectTo()
    }
  })
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  )
}

export default connect(
  state => ({ main: state.main }),
  { asyncGetInfo, clearRedirectTo }
)(Main)
