import React from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { string, bool } from 'prop-types'
import { showProfile, showLogin, changeField } from '../../store/actions'
import styles from './forms.module.css'
import Input from './input'

const Auth = () => {
  const [error, setError] = React.useState('')

  const { profile, token, username, password } = useSelector((state) => ({
    profile: state.profile,
    login: state.login,
    username: state.auth.username,
    password: state.auth.password,
    token: state.profiles.token,
  }))

  const dispatch = useDispatch()
  const changeLogin = (login) => dispatch(showLogin(login))
  const changeProfile = () => dispatch(showProfile(profile))
  const changeValue = (fieldName, value) => dispatch(changeField('auth', fieldName, value))

  const handleLogin = (e) => {
    e.preventDefault()
    fetch('http://localhost:1717/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (!response.ok) throw response.status
        return response.json()
      })
      .then(({ user }) => {
        window.localStorage.setItem('token', user.token)
        console.log(user)
        changeProfile(true)
        changeLogin(false)
      })
      .catch((errorStatus) => {
        if (errorStatus === 403) setError('Неверный логин/пароль')
        else setError('Неизвестная ошибка')
      })
  }

  return (
    <div>
      {
                token ? 'Вы уже авторизированы'
                  : (
                    <div>
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
                      <button
                        className={styles.auth}
                        type="button"
                        onClick={handleLogin}
                      >
                        Вход
                      </button>
                      {error}
                    </div>
                  )
            }
      {profile ? <Redirect to="/profile" /> : null}
    </div>
  )
}

changeField.propTypes = {
  token: string.isRequired,
  username: string.isRequired,
  password: string.isRequired,
  profile: bool,
}

showProfile.propTypes = {
  profile: bool,
}

export default Auth
