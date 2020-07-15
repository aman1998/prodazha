import React from 'react'
import { connect } from 'react-redux'
import { string, func, object } from 'prop-types'
import styles from './style.module.css'
import UserInfo from '../UserInfo'
import Avatar from '../Avatar'
import { showLogin } from '../../store/actions'
import { getMyProfile as getMyProfileAction } from '../../store/actions1'
import logo from '../Icons/upload.svg'

const ProfileInfo = ({ token, changeProfile, profile, changeValue, getMyProfile }) => {
  const [image, setImage] = React.useState('')
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
  }, [changeValue, changeProfile, token, getMyProfile])
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
        getMyProfile(data)
        console.log(data)
      })
  }

  console.log('profile', profile)

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
  )
}

ProfileInfo.propTypes = {
  token: string.isRequired,
  changeValue: func,
  changeProfile: func,
  profile: object,
  getMyProfile: func,
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  profile: state.auth.myProfile,
})

const mapDispatchToProps = (dispatch) => ({
  changeLogin: (login) => dispatch(showLogin(login)),
  getMyProfile: (profile) => dispatch(getMyProfileAction(profile)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfo)

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
