/**
 * 对应用户类型的 用户列表
 */
import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Avatar } from 'antd-mobile'
import './index.less'

export default function List(props) {
  const navigate = useNavigate()
  const { users } = props
  return (
    <div style={{ "marginTop": "45px", "marginBottom": "49px" }}>
      {
        users.map(item => {
          return (
            <div key={item._id} onClick={() => navigate(`/chat/${item._id}`, { state: { title: item.username, targetId: item._id } })}>
              <Card title={<Avatar className='avatar' src={item.avatar} />} extra={item.username}>
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
