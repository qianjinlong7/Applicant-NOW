import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Button } from 'antd-mobile'

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <div>
      <h2>抱歉，找不到该页面！</h2>
      <Button type='submit' color='primary' onClick={() => navigate('/')}>
        回到首页
      </Button>
    </div>
  )
}
