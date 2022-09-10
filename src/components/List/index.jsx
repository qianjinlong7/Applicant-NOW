/**
 * 对应用户类型的 用户列表
 */
import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Avatar } from 'antd-mobile'
import QueueAnim from 'rc-queue-anim'
import './index.less'

export default function List(props) {
  const navigate = useNavigate()
  const { users } = props
  return (
    <div style={{ "marginTop": "45px", "marginBottom": "49px" }}>
      <QueueAnim delay={200} type='scale'>
        {
          users.map(item => {
            return (
              <div key={item._id} onClick={() => navigate(`/chat/${item._id}`, { state: { title: item.username, targetId: item._id } })}>
                <Card title={<div className='cardTitle'><Avatar className='cardAvatar' src={item.avatar} /> <span className='cardText'>{item.username}</span></div>}>
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
      </QueueAnim>
    </div>
  )
}
