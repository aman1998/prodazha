import React from 'react'
import Nav from '../../Nav'
import SideBar from '../../Sidebar'
import styles from './style.module.css'
import Login from '../../../pages/Login'
import { useSelector } from 'react-redux'

const PageTemplateProfiles = ({ children }) => {
  const {login} = useSelector((state) => ({
    login: state.reducer.login,
  }))
  return(
    <div>
      {login ? <div><Login /></div> : null}
      <div style={{position: 'relative'}}>
      <div className={styles.container} style={login ? {opacity: '0.5', pointerEvents: 'none'} : {opacity: '1'}}> 
        <div className={styles.page}>
          <Nav />
          <div className={styles.content}>
            <SideBar />
          </div>
        </div>
        <div className={styles.children}>{children}</div>
      </div>
    </div>
    </div>
)}

export default PageTemplateProfiles
