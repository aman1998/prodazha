import React from 'react'
// import { string } from 'prop-types'
import styles from './style.module.css'

const UserInfo = ({ firstname, lastname, username }) => (
  <div>
    <div className={styles.info}>
      <div>Имя: {firstname}</div>
      <div>Фамилия: {lastname}</div>
      <div>Логин: {username}</div>
    </div>
  </div>
)

// UserInfo.propTypes = {
//   firstname: string.isRequired,
//   lastname: string.isRequired,
//   username: string.isRequired,
// }

export default UserInfo
