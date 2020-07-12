import React from 'react'
import Nav from '../../Nav'
import SideBar from '../../Sidebar'
import styles from './style.module.css'
import PageTemplate from '../pageTemplate'

const PageTemplateProfiles = ({ children }) => (
  <PageTemplate className={styles.container}>
    <div className={styles.page}>
      <Nav />
      <div className={styles.content}>
        <SideBar />
      </div>
    </div>
    <div className={styles.children}>{children}</div>
  </PageTemplate>
)

export default PageTemplateProfiles
