import React from 'react'
import Nav from '../../Nav'
import Login from '../../../pages/Login'
import { useSelector } from 'react-redux'

const PageTemplate = ({ children }) => {
  const {login} = useSelector((state) => ({
    login: state.login,
  }))

  return (
    <div style={{ position: 'relative' }}>
      <Nav />
      {children}
      {login ? <Login /> : null}
    </div>
  )
}

export default PageTemplate
