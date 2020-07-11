import React from 'react'
import styles from './style.module.css'

/* eslint-disable */
const UserInfo = ({ image, onChange, onClick }) => (
  <label htmlFor="avatar" className={styles.label}>
    <div style={{ cursor: 'pointer' }}>
      <img
        className={styles.avatar}
        src={image}
        alt="avatar"
      />
    </div>
    <input
      id="avatar"
      onChange={onChange}
      type="file"
      accept=".png, .jpeg .jpg"
    />
    <button type="button" onClick={onClick}>поменять картинку</button>
  </label>
)

export default UserInfo
