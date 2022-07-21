import { Navigate } from 'react-router-dom'
import Login from '../containers/Login'
import Register from '../containers/Register'
import Main from '../containers/Main'

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
    element: <Main />
  },
  {
    path: '/',
    element: <Navigate to='/login' />
  }
]

export default routes