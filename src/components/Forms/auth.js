import React from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
// import { string, bool } from 'prop-types'
import { showLogin } from '../../store/actions'
import { getToken as getTokenAction } from '../../store/actions1'
import styles from './forms.module.css'
import Input from './input'

const Auth = () => {
  const [error, setError] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const { token } = useSelector((state) => ({
    login: state.reducer.login,
    token: state.auth.token,
  }))

  const dispatch = useDispatch()
  const changeLogin = (login) => dispatch(showLogin(login))
  const getToken = () => dispatch(getTokenAction(token))

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
        getToken(user.token)
        changeLogin(false)
      })
      .catch((errorStatus) => {
        if (errorStatus === 403) setError('Неверный логин/пароль')
        else setError('Неверный логин или пароль')
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
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        placeholder="Никнейм"
                      />
                      <Input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
      {token ? <Redirect to="/profile" /> : null}
    </div>
  )
}

// Auth.propTypes = {
//   token: string.isRequired,
//   username: string.isRequired,
//   password: string.isRequired,
//   profile: bool,
// }

export default Auth
