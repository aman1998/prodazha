import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { string, number } from 'prop-types'
import { useForm } from 'react-hook-form'
import { changeField } from '../../store/actions1'
import Category from './category'
import Input from './input'
import ErrorMessage from '../Errors'
import styles from './forms.module.css'

const Add = ({ onClick }) => {
  const { title, price } = useSelector((state) => ({
    title: state.sales.description.title,
    price: state.sales.description.price,
  }))

  const dispatch = useDispatch()
  const changeValue = (fieldName, value) => dispatch(changeField('description', fieldName, value))

  const {
    register,
    handleSubmit,
    errors,
    setError,
    clearError,
    formState: { isSubmitting },
  } = useForm()
  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit(onClick)}>
        <h1>Добавить объявление</h1>
        <label htmlFor="title">
          <div>Название товара:</div>
          <input
            name="title"
            ref={register({ required: true, minLength: 2, maxLength: 20 })}
            value={title}
            onChange={(e) => changeValue('title', e.target.value)}
          />
          <ErrorMessage error={errors.title} />
        </label>

        <label htmlFor="price">
          <div>Цена:</div>
          <input
            name="price"
            ref={register({ required: true, maxLength: 5 })}
            type="number"
            value={price}
            onChange={(e) => changeValue('price', e.target.value)}
          />
          <ErrorMessage error={errors.price} />
        </label>

        <Category name="category" />

        <label htmlFor="about">
          <div>О товаре:</div>
          <textarea name="about" ref={register({ required: true, maxLength: 20 })} />
        </label>

        <input disabled={isSubmitting} type="submit" />
      </form>
    </div>
  )
}

changeField.propTypes = {
  login: string.isRequired,
  title: string.isRequired,
  price: number.isRequired,
}

export default Add
