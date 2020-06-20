import React from 'react'

let Registr = () => {
const [firstname, setFirstname] = React.useState('')
const [lastname, setLastname] = React.useState('')
const [username, setUsername] = React.useState('')
const [password, setPassword] = React.useState('')
const [error, setError] = React.useState('')

const handleSignin = (e) => {
    e.preventDefault()
    const body = { firstname, lastname, username, password }

    fetch('http://localhost:5432/signin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    })
    .then((response) => {
        if (!response.ok) throw response.status
        return response.json()
    })
    .then(({ user }) => {
        window.localStorage.setItem('token', user.token)
    })
    .catch(() => {
        setError('Неизвестная ошибка')
    })
}

return (
    <div className='container'>
        <input
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
        placeholder="Имя"
        type="text"
        />
        <input
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
        type="text"
        placeholder="Фамилия"
        />
        <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Никнейм"
        />
        <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        placeholder="Пароль"
        />
        <button
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
