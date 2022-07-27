import { Navigate } from 'react-router-dom'
import Login from '../containers/Login'
import Register from '../containers/Register'
import Main from '../containers/Main'
import RecruiterInfo from '../containers/Main/RecruiterInfo'
import ApplicantInfo from '../containers/Main/ApplicantInfo'

const routes = [
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/main',
    element: <Main />,
    children: [
      {
        path: 'recruiterinfo',
        element: <RecruiterInfo />
      },
      {
        path: 'applicantInfo',
        element: <ApplicantInfo />
      }
    ]
  },
  {
    path: '/',
    element: <Navigate to='/login' />
  }
]

export default routes