// 在用户登录或注册后，通过检查其是否具有post（招聘职位或求职岗位）来判断其是否需要完善信息，返回正确的路由路径
export const getNavigate = (userType, post) => {
  let path
  if (userType === 0) {
    path = '/main/applicant'
  } else {
    path = '/main/recruiter'
  }
  if (!post) {
    path += 'Info'
  }
  return path
}