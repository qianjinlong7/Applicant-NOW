const initState = {
  avatar: '', // 头像
  info: '',   // 介绍（包括职位要求或个人简介）
  post: '',   // 职位
  salary: '', // 月薪
  company: '' // 公司名
}
export default function main(preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case 1:
      return preState + data
    default:
      return preState
  }
}