import React from 'react'
import styles from './style.module.css'
import Heart from '../Icons/heart'
import Message from '../Icons/message'
import User from '../Icons/user'

const IconsBtn = () => (
  <div className={styles.icons}>
    <div>
      <div className={styles.user}><User /></div>
      <div className={styles.message}><Message /></div>
    </div>
    <div className={styles.heart}><Heart /></div>
  </div>

)

export default IconsBtn
