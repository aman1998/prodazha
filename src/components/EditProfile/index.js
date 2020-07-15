import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './style.module.css'
import { getMyProfile as getMyProfileAction } from '../../store/actions1'
import Input from '../Forms/input'

const EditProfile = () => {
  const { profile, token } = useSelector((state) => ({
    profile: state.auth.myProfile,
    token: state.auth.token,
  }))

  const getMyProfile = React.useCallback(() => dispatch(getMyProfileAction(profile)))

  const dispatch= useDispatch()
  React.useEffect(() => {
    if (token) {
      fetch('http://localhost:1717/profile', {
        method: 'GET',
        headers: { 'X-Auth': `${token}` },
      })
        .then((response) => response.json())
        .then(({ data }) => {
          getMyProfile(data)
          // changeValue('profile', data)
        })
    }
  }, [dispatch, getMyProfile, profile, token])

  const [firstname, setFirstname] = React.useState('')
  const [lastname, setLastname] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [mail, setMail] = React.useState('')

  const changeProfile = () => {
    fetch(`http://localhost:1717/edit-profile-info/${profile.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        firstname, lastname, phone, mail,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        getMyProfile(data)
        setFirstname('')
        setLastname('')
        setPhone('')
        setMail('')
        console.log(data)
      })
  }

  return (
    <div className={styles.edit}>
      <Input
        value={profile.firstname}
        onChange={(e) => setFirstname(e.target.value)}
        placeholder="Имя"
        type="text"
      />
      <Input
        value={profile.lastname}
        onChange={(e) => setLastname(e.target.value)}
        type="text"
        placeholder="Фамилия"
      />
      <Input
        value={profile.phone}
        onChange={(e) => setPhone(e.target.value)}
        type="text"
        placeholder="Телефон"
      />
      <Input
        value={profile.mail}
        onChange={(e) => setMail(e.target.value)}
        type="text"
        placeholder="Почта"
      />
      <button type="button" onClick={changeProfile}>Сохранить</button>
    </div>
  )
}

export default EditProfile
