import React from 'react'
import Nav from '../Nav'
import SideBar from '../Sidebar'
import styles from './style.module.css'

let PageTemplate = ({ children }) => {
    return(
        <div className={styles.page}>
            <Nav />
            <div className={styles.content}>
                <SideBar />
                {children}
            </div>
        </div>
    )
}

export default PageTemplate