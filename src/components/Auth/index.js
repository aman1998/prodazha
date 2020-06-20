import React from 'react'

let Login = ({ history }) => {
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
    .then(({ user }) => {
        window.localStorage.setItem('token', user.token)
        history.push('/')
    })
    .catch((errorStatus) => {
        if (errorStatus === 403) setError('Неверный логин/пароль')
        else setError('Неизвестная ошибка')
    })
}

return (
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
        {/* <button
            type="button"
            onClick={() => history.goBack()}
        >
            Назад
        </button> */}
    </div>
)
}

export default Login