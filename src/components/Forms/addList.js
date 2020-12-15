import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { string, number, func } from 'prop-types'
import { useForm } from 'react-hook-form'
import { changeField } from '../../store/actions1'
import Category from './category'
// import Input from './input'
import ErrorMessage from '../Errors'
import styles from './forms.module.css'

const Add = ({ onClick }) => {
  const { title, price } = useSelector((state) => ({
    title: state.sales.description.title,
    price: state.sales.description.price,
  }))

  const dispatch = useDispatch()
  const changeValue = (fieldName, value) => dispatch(changeField('description', fieldName, value))

  const { register, handleSubmit, errors, formState: { isSubmitting } } = useForm()

  const handleImageUpload = (e) => {
    const reader = new FileReader()
    const file = e.target.files[0]
    if (file) reader.readAsDataURL(file)
    reader.onload = () => {
      changeValue('image', reader.result)
    }
    reader.onerror = (error) => {
      console.log(error)
    }
  }
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
            ref={register({ required: true, max: 100000 })}
            type="number"
            value={price}
            onChange={(e) => changeValue('price', e.target.value)}
          />
          <ErrorMessage error={errors.price} />
        </label>
        <div className={styles.photoCategory}>
          <label htmlFor="avatar" className={styles.label}>
            <div>Фото:</div>
            <input
              style={{ border: 'none', padding: '0' }}
              id="avatar"
              name="image"
              onChange={handleImageUpload}
              type="file"
              accept=".png, .jpeg .jpg"
              ref={register({ required: true })}
            />
          </label>
          <Category name="category" />
        </div>
        <ErrorMessage error={errors.image} />

        <label htmlFor="about">
          <div>О товаре:</div>
          <textarea name="about" ref={register} />
        </label>

        <input disabled={isSubmitting} type="submit" style={{ margin: '10px 0' }} value="Добавить" />
      </form>
    </div>
  )
}

Add.propTypes = {
  onClick: func,
}

changeField.propTypes = {
  login: string.isRequired,
  title: string.isRequired,
  price: number.isRequired,
}

export default Add
