import React from 'react'
import Nav from '../../Nav'
import SideBar from '../../Sidebar'
import styles from './style.module.css'

const PageTemplate = ({ children }) => (
  <div className={styles.container}>
    <div className={styles.page}>
      <Nav />
      <div className={styles.content}>
        <SideBar />
      </div>
    </div>
    <div className={styles.children}>{children}</div>
  </div>
)

export default PageTemplate
