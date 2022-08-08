import React, { Fragment } from 'react'
import { Card, Avatar } from 'antd-mobile'
import './index.less'

export default function List(props) {
  const { users } = props
  return (
    <div style={{ "marginTop": "45px", "marginBottom": "49px" }}>
      {
        users.map(item => {
          return (
            <div>
              <Card key={item._id} title={<Avatar className='avatar' src={item.avatar} />} extra={item.username}>
                {
                  item.userType === 0 ?
                    <Fragment>
                      求职岗位：{item.post}
                      <br />
                      个人介绍：{item.info}
                    </Fragment> :
                    <Fragment>
                      招聘职位：{item.post}
                      <br />
                      公司：{item.company}
                      <br />
                      薪资：{item.salary}
                      <br />
                      要求：{item.info}
                    </Fragment>
                }
              </Card>
              <br />
            </div>
          )
        })
      }
    </div>
  )
}
