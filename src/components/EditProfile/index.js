import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './style.module.css'
import { getMyProfile as getMyProfileAction } from '../../store/actions1'
import { showEdit as showEditAction } from '../../store/actions'
import Input from '../Forms/input'

const EditProfile = () => {
  const { profile } = useSelector((state) => ({
    profile: state.auth.myProfile,
    token: state.auth.token,
  }))

  const dispatch = useDispatch()
  const showEdit = (edit) => dispatch(showEditAction(edit))

  const [firstname, setFirstname] = React.useState(profile.firstname)
  const [lastname, setLastname] = React.useState(profile.lastname)
  const [phone, setPhone] = React.useState(profile.phone)
  const [mail, setMail] = React.useState(profile.mail)

  const changeProfile = () => {
    const getMyProfile = () => dispatch(getMyProfileAction(profile))
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
        showEdit(false)
        console.log(data)
      })
  }

  const removeEdit = () => {
    showEdit(false)
  }

  return (
    <div className={styles.edit}>
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
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        type="text"
        placeholder="Телефон"
      />
      <Input
        value={mail}
        onChange={(e) => setMail(e.target.value)}
        type="text"
        placeholder="Почта"
      />
      <button type="button" onClick={changeProfile}>Сохранить</button>
      <button type="button" onClick={removeEdit}>Скрыть</button>
    </div>
  )
}

export default EditProfile
