import React from 'react'
import { func, string } from 'prop-types'
// import { useForm } from 'react-hook-form'

const Input = ({ onChange, type, value, placeholder }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    name={value}
    noValidate
    required
  />
)

Input.propTypes = {
  onChange: func.isRequired,
  value: string.isRequired,
  placeholder: string,
  type: string,
}

export default Input
