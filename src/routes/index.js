import { Navigate } from 'react-router-dom'
import Login from '../containers/Login'
import Register from '../containers/Register'
import Main from '../containers/Main'
import RecruiterInfo from '../containers/Main/RecruiterInfo'
import ApplicantInfo from '../containers/Main/ApplicantInfo'
import Recruiter from '../containers/Main/Recruiter'
import Applicant from '../containers/Main/Applicant'
import List from '../containers/Main/List'
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
      },
      {
        path: 'recruiter',
        element: <Recruiter />
      },
      {
        path: 'applicant',
        element: <Applicant />
      },
      {
        path: 'list',
        element: <List />
      },
      {
        path: 'personal',
        element: <Personal />
      }
    ]
  },
  {
    path: '/',
    element: <Navigate to='/main' />
  }
]

export default routes