import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Header from '../../../components/Header'

function Recruiter() {
  return (
    <Fragment>
      <Header title='求职列表' />
    </Fragment>
  )
}

export default connect(
  state => ({}),
  {}
)(Recruiter)
