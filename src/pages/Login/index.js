import React from 'react'
import styles from './login.module.css'
import Auth from '../../components/Forms/auth'
import Registr from '../../components/Forms/registr'
import Cancel from '../../components/Icons/cancel'

const Login = () => {
  const [auth, setAuth] = React.useState(true)
  return (
    <div className="container">
      <form className={styles.login}>
        <div className={styles.title}>
          {/* eslint-disable  */}
          <div
            className={styles.title__login}
            style={auth ? { color: '#305996d0' } : { color: '#000' }}
            onClick={() => setAuth(true)}
          >Логин
          </div>
          <div
            role="button"
            className={styles.title__registr}
            style={auth === false ? { color: '#305996d0' } : { color: '#000' }}
            onClick={() => setAuth(false)}
          >Регистрация
          </div>
        </div>
        <Cancel />
        {auth ? <Auth /> : <Registr />}
      </form>
    </div>
  )
}

export default Login
