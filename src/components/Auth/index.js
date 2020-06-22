import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { showProfile } from '../../store/actions'
import { showLogin } from '../../store/actions'

let Auth = ({profile, login, changeProfile, changeLogin}) => {
const [username, setUsername] = React.useState('')
const [password, setPassword] = React.useState('')
const [error, setError] = React.useState('')

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
        window.localStorage.setItem('firstname', user.data.firstname)
        window.localStorage.setItem('lastname', user.data.lastname)
        window.localStorage.setItem('username', user.data.username)
        window.localStorage.setItem('password', user.data.password)
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
            profile ? 'Вы уже авторизированы' : 
            <div>
                <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder='Никнейм'
                />
                <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

const mapStateToProps = (state) => ({
    profile: state.profile,
    login: state.login,
})

const mapDispatchToProps = (dispatch) => ({
    changeLogin: (login) => dispatch(showLogin(login)),
    changeProfile: (profile) => dispatch(showProfile(profile)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Auth)