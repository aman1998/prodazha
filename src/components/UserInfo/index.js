import React from 'react'
import styles from './style.module.css'

const UserInfo = ({ firstname, lastname, username, phone }) => (
  <div>
    <div className={styles.info}>
      <div>Имя: {firstname}</div>
      <div>Фамилия: {lastname}</div>
      <div>Логин: {username}</div>
      <div>Телефон: {phone}</div>
    </div>
  </div>
)

export default UserInfo
