import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Header from '../../../components/Header'

function Message() {
  return (
    <Fragment>
      <Header title='消息列表' />
    </Fragment>
  )
}

export default connect(
  state => ({}),
  {}
)(Message)
