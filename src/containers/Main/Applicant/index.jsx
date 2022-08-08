import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Header from '../../../components/Header'
import List from '../../../components/List'

function Applicant(props) {
  const { users } = props.user
  return (
    <Fragment>
      <Header title='招聘列表' />
      <List users={users} />
    </Fragment>
  )
}

export default connect(
  state => ({ user: state.user }),
  {}
)(Applicant)
