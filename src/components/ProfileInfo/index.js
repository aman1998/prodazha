import React from 'react'
import { connect } from 'react-redux'
import { func, object } from 'prop-types'
import { Redirect, NavLink } from 'react-router-dom'
import styles from './style.module.css'
import UserInfo from '../UserInfo'
// import Avatar from '../Avatar'
import { showLogin, showEdit as showEditAction } from '../../store/actions'
import { getMyProfile as getMyProfileAction, getToken as getTokenAction } from '../../store/actions1'
// import logo from '../Icons/upload.svg'
import Button from '../Forms/button'

// const ENDOPOINT = 'https://intense-journey-98977.herokuapp.com'

const ProfileInfo = ({ profile, getToken, showEdit }) => {
  // const [image, setImage] = React.useState('')
  const [redirect, setRedirect] = React.useState(false)

  // const addHandleImage = () => {
  //   fetch(`${ENDOPOINT}/edit-profile/${profile.id}`, {
  //     method: 'PUT',
  //     body: JSON.stringify({
  //       image,
  //     }),
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       getMyProfile(data)
  //       console.log(data)
  //     })
  // }

  // const handleImageUpload = (e) => {
  //   const reader = new FileReader()
  //   const file = e.target.files[0]
  //   if (file) reader.readAsDataURL(file)
  //   reader.onload = () => {
  //     setImage(reader.result)
  //   }
  //   reader.onerror = (error) => {
  //     console.log(error)
  //   }
  // }
  const deleteUser = () => {
    localStorage.removeItem('token')
    getToken('')
    setRedirect(true)
  }

  const editUser = () => {
    showEdit(true)
  }

  return (
    <div className={styles.profile}>
      {redirect ? <Redirect to="/" /> : null}
      <h2>{`Добро пожаловать, ${profile.firstname}`}</h2>
      <div className={styles.profileInfo}>
        <div>
          <UserInfo
            firstname={profile.firstname}
            lastname={profile.lastname}
            username={profile.username}
            phone={profile.phone}
          />
        </div>
        {/* <Avatar
          image={profile.image !== '' ? profile.image : logo}
          onChange={handleImageUpload}
          onClick={addHandleImage}
        /> */}
      </div>
      <div className={styles.profileBtn}>
        <div><Button value="выйти" onClick={deleteUser} /></div>
        <div>
          <button type="button" className={styles.btn}>
            <NavLink to="/add" exact>Добавить объявление</NavLink>
          </button>
        </div>
        <div><Button value="Редактировать" onClick={editUser} /></div>
      </div>
    </div>
  )
}

ProfileInfo.propTypes = {
  profile: object,
  getToken: func,
  showEdit: func,

}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  profile: state.auth.myProfile,
  edit: state.reducer.edit,
})

const mapDispatchToProps = (dispatch) => ({
  changeLogin: (login) => dispatch(showLogin(login)),
  showEdit: (edit) => dispatch(showEditAction(edit)),
  getMyProfile: (profile) => dispatch(getMyProfileAction(profile)),
  getToken: (token) => dispatch(getTokenAction(token)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfo)
