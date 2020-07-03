import React from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { showProfile, showLogin, changeField } from '../../store/actions.js'

let Auth = () => {
    const [error, setError] = React.useState('')

    const {profile, token, username, password} = useSelector(state => ({
        profile: state.profile,
        login: state.login,
        username: state.auth.username,
        password: state.auth.password,
        token: state.profiles.token,
    }))

    const dispatch = useDispatch()
    const changeLogin = (login) => dispatch(showLogin(login))
    const changeProfile = (profile) => dispatch(showProfile(profile))
    const changeValue = (fieldName, value) => dispatch(changeField('auth', fieldName, value))

    const handleLogin = (e) => {
        e.preventDefault()
        fetch('http://localhost:5432/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
        })
        .then((response) => {
            if (!response.ok) throw response.status
            return response.json()
        })
        .then(({user}) => {
            window.localStorage.setItem('token', user.token)
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
                token ? 'Вы уже авторизированы' : 
                <div>
                    <input
                    value={username}
                    onChange={(e) => changeValue('username', e.target.value)}
                    type="text"
                    placeholder='Никнейм'
                    />
                    <input
                    value={password}
                    onChange={(e) => changeValue('password', e.target.value)}
                    type="text"
                    placeholder='Пароль'
                    />
                    <button
                    type="button"
                    onClick={handleLogin}
                    >
                    Вход
                    </button>
                    {error}
                </div>
            }
            {profile ? <Redirect to ='/profile'/> : null}
        </div>
    )
    }

export default Auth