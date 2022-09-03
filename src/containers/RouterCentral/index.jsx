/**
 * 路由中枢组件，负责根据各种状态跳转到各个页面中
 */
import React, { Fragment, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import Cookies from 'js-cookie'
import { getNavigate } from '../../utils'
import { asyncGetInfo, asyncGetUsers } from '../../redux/actions/main'
import { asyncGetMsgs } from '../../redux/actions/chat'

function RouterCentral(props) {
  const userid = Cookies.get('userid')  // 获取指定的cookie
  const navigate = useNavigate()
  const { user, asyncGetInfo, asyncGetUsers, asyncGetMsgs } = props
  useEffect(() => {
    if (userid) {   // 登陆过且cookie未超时
      if (user._id) {  // redux已保存了后端返回的数据，不必再发请求查询了
        asyncGetUsers(user.userType)  // 获取对应用户列表到reducer-user中
        asyncGetMsgs(user._id)  // 获取当前用户消息列表到reducer-chat中
        // 通过工具函数获取路由路径进行跳转
        navigate(getNavigate(user.userType, user.post))
      } else {  // 需要向后端发送请求获得用户数据
        asyncGetInfo()
      }
    } else {  // 没有登陆过或cookie超时清除了
      navigate('/login')
    }
  }, [userid, user._id]) // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <Fragment>
      Loading...
    </Fragment>
  )
}

export default connect(
  state => ({ user: state.user }),
  { asyncGetInfo, asyncGetUsers, asyncGetMsgs }
)(RouterCentral)
