import io from 'socket.io-client' // 引入客户端io
import { receiveMsg } from '../redux/actions'

// 在用户登录或注册后，通过检查其是否具有post（招聘职位或求职岗位）来判断其是否需要完善信息，返回正确的路由路径
export const getNavigate = (userType, post) => {
  let path
  if (userType === 0) {
    path = !post ? '/applicantinfo' : '/main/applicant'
  } else {
    path = !post ? '/recruiterinfo' : '/main/recruiter'
  }
  return path
}

// 开启socketIO监听
export const initIO = (userid, dispatch) => {
  if (!io.socket) {
    // 连接服务器，得到代表连接的socket对象
    io.socket = io('ws://localhost:3000')
    // 绑定'receiveMessage'的监听，来接收服务器发送的消息
    io.socket.on('receiveMsg', function (data) {
      console.log('浏览器端收到消息：', data)
      const { from, to } = data
      if (userid === from || userid === to) {
        dispatch(receiveMsg(data))
        console.log('我执行')
      }
    })
  }
}
