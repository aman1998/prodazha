import React from 'react'
import { func, string } from 'prop-types'

const Input = ({ onChange, type, value, placeholder }) => (
  <div>
    <label htmlFor={value}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={value}
        noValidate
        required
      />
    </label>
  </div>
)

Input.propTypes = {
  onChange: func.isRequired,
  value: string.isRequired,
  placeholder: string,
  type: string,
}

export default Input
