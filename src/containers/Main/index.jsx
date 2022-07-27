/**
 * 主界面组件
 */
import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

export default function Main() {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  )
}
