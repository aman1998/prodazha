import React from 'react'
import { connect } from 'react-redux'
import { string, func, bool, object } from 'prop-types'
import { Redirect, NavLink } from 'react-router-dom'
import PageTemplateProfiles from '../../components/pageTemplates/PageProfiles'
import PageTemplate from '../../components/pageTemplates/pageTemplate'
import Login from '../Login'
import { showProfile, showLogin, changeField } from '../../store/actions'
import styles from './profile.module.css'
import UserInfo from '../../components/UserInfo'
import Avatar from '../../components/Avatar'

import logo from '../../components/Icons/upload.svg'

const Profile = ({ login, token, changeProfile, profile, changeValue }) => {
  const [redirect, setRedirect] = React.useState(false)
  const [image, setImage] = React.useState('')

  // const {login, token, profile, profiles, profilesList } = useSelector(state => ({
  //     login: state.login,
  //     profile: state.profile,
  //     profiles: state.profiles,
  //     token: state.profiles.token,
  //     profilesList: state.profiles.profilesList,
  // }))

  // const dispatch = useDispatch()
  // const changeLogin = (login) => dispatch(showLogin(login))
  // const changeProfile = (profiles) => dispatch(showProfile(profiles))
  // const changeValue = (fieldName, value) => dispatch(changeField('profiles', fieldName, value)

  React.useEffect(() => {
    if (token) {
      fetch('http://localhost:1717/profile', {
        method: 'GET',
        headers: { 'X-Auth': `${token}` },
      })
        .then((response) => response.json())
        .then(({ data }) => {
          changeValue('profile', data)
        })
    }
  }, [changeValue, changeProfile, login, token])

  const deleteUser = () => {
    localStorage.removeItem('token')
    changeValue('token', false)
    setRedirect(true)
    changeProfile(false)
  }

  const addHandleImage = () => {
    fetch(`http://localhost:1717/edit-profile/${profile.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        image,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        changeValue('profile', data)
        console.log(data)
      })
  }

  const handleImageUpload = (e) => {
    const reader = new FileReader()
    const file = e.target.files[0]
    if (file) reader.readAsDataURL(file)
    reader.onload = () => {
      setImage(reader.result)
    }
    reader.onerror = (error) => {
      console.log(error)
    }
  }

  return (
    <div>
      <PageTemplate>
        {token
          ? (
            <PageTemplateProfiles>
              <div className={styles.profiles__container}>
                <div className={styles.profile}>
                  <div>
                    <Avatar
                      image={profile.image !== '' ? profile.image : logo}
                      onChange={handleImageUpload}
                      onClick={addHandleImage}
                    />
                    <UserInfo
                      firstname={profile.firstname}
                      lastname={profile.lastname}
                      username={profile.username}
                    />
                  </div>
                </div>
                <button type="button" className={styles.signOut} onClick={deleteUser}>Выйти</button>
                <button type="button">
                  <NavLink to="/add" exact>Добавить объявление</NavLink>
                </button>
              </div>
            </PageTemplateProfiles>
          )
          : 'Вы не авторизированы'}
        {login ? <Login /> : null}
        {redirect ? <Redirect to="/" /> : null}
      </PageTemplate>
    </div>
  )
}

Profile.propTypes = {
  login: bool.isRequired,
  token: string.isRequired,
  changeValue: func,
  changeProfile: func,
  profile: object,
}

const mapStateToProps = (state) => ({
  login: state.login,
  token: state.profiles.token,
  profile: state.profiles.profile,
})

const mapDispatchToProps = (dispatch) => ({
  changeLogin: (login) => dispatch(showLogin(login)),
  changeProfile: (profiles) => dispatch(showProfile(profiles)),
  changeValue: (fieldName, value) => dispatch(changeField('profiles', fieldName, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
