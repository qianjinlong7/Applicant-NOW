import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Header from '../../../components/Header'

function Applicant() {
  return (
    <Fragment>
      <Header title='招聘列表' />
    </Fragment>
  )
}

export default connect(
  state => ({}),
  {}
)(Applicant)
