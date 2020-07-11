import React from 'react'
import { func, string } from 'prop-types'

const Input = ({ onChange, type, value, placeholder }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
)

Input.propTypes = {
  onChange: func.isRequired,
  value: string.isRequired,
  placeholder: string,
  type: string,
}

export default Input
