import React from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { changeField } from '../../store/actions1'
import ErrorMessage from '../Errors'

const Add = ({ name }) => {
  const dispatch = useDispatch()
  const changeValue = (fieldName, value) => dispatch(changeField('description', fieldName, value))
  const { register, errors } = useForm()

  return (
    <label htmlFor={name}>
      <div>Выбрать категорию</div>
      <select
        onChange={(e) => changeValue('category', e.target.value)}
        name={name}
        ref={register({ required: true })}
      >
        <option>Выберите категорию</option>
        <option defaultValue value="Электроника">Электроника</option>
        <option value="Все для дома">Все для дома</option>
        <option value="Одежда">Одежда</option>
        <option value="Автомобиль">Автомобиль</option>
        <option value="Недвижимость">Недвижимость</option>
      </select>
      <ErrorMessage error={errors.name} />
    </label>
  )
}

export default Add
