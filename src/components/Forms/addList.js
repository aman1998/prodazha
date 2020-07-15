import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { string, number } from 'prop-types'
import { changeField } from '../../store/actions1'
import Input from './input'

const Add = () => {
  const { title, price } = useSelector((state) => ({
    title: state.sales.description.title,
    price: state.sales.description.price,
  }))

  const dispatch = useDispatch()
  const changeValue = (fieldName, value) => dispatch(changeField('description', fieldName, value))

  return (
    <div>
      <Input
        type="text"
        placeholder="Название"
        value={title}
        onChange={(e) => changeValue('title', e.target.value)}
      />
      <Input
        placeholder="Цена"
        value={price}
        onChange={(e) => changeValue('price', e.target.value)}
      />
    </div>
  )
}

changeField.propTypes = {
  login: string.isRequired,
  title: string.isRequired,
  price: number.isRequired,
}

export default Add
