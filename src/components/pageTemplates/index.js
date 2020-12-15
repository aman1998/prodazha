import React from 'react'
import Sidebar from '../Sidebar/sidebar'
import Header from '../Header/header'
import Login from '../../pages/Login'
import { useSelector } from 'react-redux'
import styles from './style.module.css'

const PageTemplate = ({ children }) => {
  const {login} = useSelector((state) => ({
    login: state.reducer.login,
  }))
  
  return (
    <div>
    {login ? <Login /> : null}
        <div className={styles.wrapper}>
            <Sidebar />
            <div className={styles.content}>
              <Header />
              <main>{children}</main>
            </div>
        </div>
    </div>
  )
}

export default PageTemplate