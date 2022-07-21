import React from 'react'
import { Link, useRoutes } from 'react-router-dom'
import routes from './routes'

export default function App() {
  const element = useRoutes(routes)
  return (
    <div>
      <Link to='/login'>点我去login</Link>
      <Link to='/register'>点我去register</Link>
      <Link to='/main'>点我去main</Link>
      {element}
    </div>
  )
}
