import React from 'react'
import { func, string } from 'prop-types'
import styles from './forms.module.css'

const Button = ({ onClick, value }) => (
  <button type="button" onClick={onClick} className={styles.btn}>{value}</button>
)

Button.propTypes = {
  onClick: func.isRequired,
  value: string.isRequired,
}

export default Button
