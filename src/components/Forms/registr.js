import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeField } from '../../store/actions'
import styles from './forms.module.css'
import Input from './input'

const Registr = () => {
  const [error, setError] = React.useState('')

  const { firstname, lastname, username, password, mail, phone, isAdmin, image } = useSelector(
    (state) => ({
      firstname: state.registr.firstname,
      lastname: state.registr.lastname,
      username: state.registr.username,
      password: state.registr.password,
      mail: state.registr.mail,
      phone: state.registr.phone,
      isAdmin: state.registr.isAdmin,
      image: state.registr.image,
    }))

  const dispatch = useDispatch()
  const changeValue = (fieldName, value) => dispatch(changeField('registr', fieldName, value))

  const handleSignin = (e) => {
    e.preventDefault()
    const body = { firstname, lastname, username, password, phone, mail, image, isAdmin }
    console.log(body)
    fetch('http://localhost:1717/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (!response.ok) throw response.status
        return response.json()
      })
      .then(() => {
        // window.localStorage.setItem('user', data.user)
      })
      .catch(() => {
        setError('Неизвестная ошибка')
      })
  }

  return (
    <div className="container">
      <Input
        value={firstname}
        onChange={(e) => changeValue('firstname', e.target.value)}
        placeholder="Имя"
        type="text"
      />
      <Input
        value={lastname}
        onChange={(e) => changeValue('lastname', e.target.value)}
        type="text"
        placeholder="Фамилия"
      />
      <Input
        value={username}
        onChange={(e) => changeValue('username', e.target.value)}
        type="text"
        placeholder="Никнейм"
      />
      <Input
        value={password}
        onChange={(e) => changeValue('password', e.target.value)}
        type="text"
        placeholder="Пароль"
      />
      <Input
        value={phone}
        onChange={(e) => changeValue('phone', e.target.value)}
        type="text"
        placeholder="Телефон"
      />
      <Input
        value={mail}
        onChange={(e) => changeValue('mail', e.target.value)}
        type="text"
        placeholder="Почта"
      />
      <button
        className={styles.registr}
        type="button"
        onClick={handleSignin}
      >
        Регистрация
      </button>
      {error}
    </div>
  )
}

export default Registr
