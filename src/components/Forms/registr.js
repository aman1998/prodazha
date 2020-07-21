import React from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import styles from './forms.module.css'
import { signUp as signUpActions } from '../../store/actions1/auth'
import ErrorMessage from '../Errors'

const Registr = () => {
  // const [error, setError] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [firstname, setFirstname] = React.useState('')
  const [lastname, setLastname] = React.useState('')
  const [mail, setMail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [image] = React.useState('')
  const [isAdmin] = React.useState(false)
  const [favorites] = React.useState([])

  const dispatch = useDispatch()
  const signUp = (data) => dispatch(signUpActions(data))
  const { register, handleSubmit, errors } = useForm()

  const handleSignin = () => {
    const body = {
      firstname, lastname, username, password, phone, mail, image, isAdmin, favorites,
    }
    signUp(body)
    setUsername('')
    setPassword('')
    setFirstname('')
    setLastname('')
    setMail('')
    setPhone('')
  }

  return (
    <div>
      <form>
        <label htmlFor="title">
          <input
            name="firstname"
            ref={register({ minLength: 2, maxLength: 10 })}
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            placeholder="Имя"
          />
          <ErrorMessage error={errors.firstname} />
        </label>
        <label htmlFor="lastname">
          <input
            name="lastname"
            ref={register({ minLength: 2, maxLength: 10 })}
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            placeholder="Фамилия"
          />
          <ErrorMessage error={errors.lastname} />
        </label>
        <label htmlFor="username">
          <input
            name="username"
            ref={register({ required: true, minLength: 2, maxLength: 30 })}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Никнейм"
          />
          <ErrorMessage error={errors.username} />
        </label>
        <label htmlFor="password">
          <input
            name="password"
            ref={register({ required: true, minLength: 2, maxLength: 10 })}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="пароль"
          />
          <ErrorMessage error={errors.password} />
        </label>
        <label htmlFor="phone">
          <div>Введите в формате xxx-xx-xx-xx</div>
          <input
            name="phone"
            type="tel"
            ref={register({ required: true })}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Телефон"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}-[0-9]{2}"
            required
          />
          <ErrorMessage error={errors.phone} />
        </label>
        <label htmlFor="mail">
          <input
            name="mail"
            ref={register({ required: true, minLength: 2, maxLength: 30 })}
            value={mail}
            type="email"
            onChange={(e) => setMail(e.target.value)}
            placeholder="Почта"
          />
          <ErrorMessage error={errors.mail} />
        </label>

        <button
          className={styles.registr}
          type="button"
          onClick={handleSubmit(handleSignin)}
        >
          Регистрация
        </button>
      </form>
    </div>
  )
}

export default Registr
