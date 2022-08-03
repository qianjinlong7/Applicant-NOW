import { Navigate } from 'react-router-dom'
import Login from '../containers/Login'
import Register from '../containers/Register'
import RouterCentral from '../containers/RouterCentral'
import Main from '../containers/Main'
import RecruiterInfo from '../containers/Main/RecruiterInfo'
import ApplicantInfo from '../containers/Main/ApplicantInfo'
import Recruiter from '../containers/Main/Recruiter'
import Applicant from '../containers/Main/Applicant'
import Message from '../containers/Main/Message'
import Personal from '../containers/Main/Personal'

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
    path: '/central',
    element: <RouterCentral />
  },
  {
    path: 'recruiterinfo',
    element: <RecruiterInfo />
  },
  {
    path: 'applicantinfo',
    element: <ApplicantInfo />
  },
  {
    path: '/main',
    element: <Main />,
    children: [
      {
        path: 'recruiter',
        element: <Recruiter />
      },
      {
        path: 'applicant',
        element: <Applicant />
      },
      {
        path: 'message',
        element: <Message />
      },
      {
        path: 'personal',
        element: <Personal />
      }
    ]
  },
  {
    path: '/',
    element: <Navigate to='/central' />
  }
]

export default routes