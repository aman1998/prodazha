import React from 'react'
import { changeField } from '../../store/actions'
import { connect } from 'react-redux'

let Registr = ({firstname, lastname, username, password, changeValue}) => {
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
    .then((data) => {
        // window.localStorage.setItem('user', data.user)
    })
    .catch(() => {
        setError('Неизвестная ошибка')
    })
}

return (
    <div className='container'>
        <input
        value={firstname}
        onChange={(e) => changeValue("firstname", e.target.value)}
        placeholder="Имя"
        type="text"
        />
        <input
        value={lastname}
        onChange={(e) => changeValue("lastname", e.target.value)}
        type="text"
        placeholder="Фамилия"
        />
        <input
        value={username}
        onChange={(e) => changeValue("username", e.target.value)}
        type="text"
        placeholder="Никнейм"
        />
        <input
        value={password}
        onChange={(e) => changeValue("password", e.target.value)}
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

const mapStateToProps = (state) => ({
    firstname: state.registr.firstname,
    lastname: state.registr.lastname,
    username: state.registr.username,
    password: state.registr.password,
})

const mapDispatchToProps = (dispatch) => ({
    changeValue: (fieldName, value) => dispatch(changeField('registr', fieldName, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Registr)
