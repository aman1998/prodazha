import React from 'react'
import Nav from '../../Nav'
import Login from '../../../pages/Login'
import { useSelector } from 'react-redux'

const PageTemplate = ({ children }) => {
  const {login} = useSelector((state) => ({
    login: state.reducer.login,
  }))

  return (
    <div>
      {login ? <Login /> : null}
    <div style={{ position: 'relative'} }>
      <div style={login ? {opacity: '0.5', pointerEvents: 'none'} : {opacity: '1'}}>
        <Nav />
        {children}
      </div>
    </div>
    </div>
  )
}

export default PageTemplate
