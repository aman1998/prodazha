import React from 'react'
import useForm from 'react-hook-form'
import styles from './forms.module.css'
import Input from './input'

const Registr = () => {
  const [error, setError] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [firstname, setFirstname] = React.useState('')
  const [lastname, setLastname] = React.useState('')
  const [mail, setMail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [image] = React.useState('')
  const [isAdmin] = React.useState(false)
  const [favorites] = React.useState([])
  const [formsErrors, setFormsErrors] = React.useState(
    { firstname: '', lastname: '', username: '', phone: '', mail: '', password: '' },
  )

  const handleSignin = (e) => {
    e.preventDefault()
    const body = {
      firstname, lastname, username, password, phone, mail, image, isAdmin, favorites,
    }
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
        onChange={(e) => setFirstname(e.target.value)}
        placeholder="Имя"
        type="text"
      />
      <Input
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
        type="text"
        placeholder="Фамилия"
      />
      <Input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Никнейм"
      />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Пароль"
      />
      <Input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        type="tel"
        placeholder="Телефон"
      />
      <Input
        value={mail}
        onChange={(e) => setMail(e.target.value)}
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
