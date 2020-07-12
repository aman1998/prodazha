import React from 'react'
import { connect } from 'react-redux'
import { string, func } from 'prop-types'
import { Redirect, NavLink } from 'react-router-dom'
import PageTemplateProfiles from '../../components/pageTemplates/PageProfiles'
import { showProfile, showLogin, changeField } from '../../store/actions'
import ProfileInfo from '../../components/ProfileInfo'
import styles from './profile.module.css'

const Profile = ({ token, changeProfile, changeValue }) => {
  const [redirect, setRedirect] = React.useState(false)

  const deleteUser = () => {
    localStorage.removeItem('token')
    changeValue('token', false)
    setRedirect(true)
    changeProfile(false)
  }

  return (
    <PageTemplateProfiles>
      {token
        ? (
          <div className={styles.profiles__container}>
            <ProfileInfo />
            <button type="button" className={styles.signOut} onClick={deleteUser}>Выйти</button>
            <button type="button">
              <NavLink to="/add" exact>Добавить объявление</NavLink>
            </button>
          </div>
        )
        : 'Вы не авторизированы'}
      {redirect ? <Redirect to="/" /> : null}
    </PageTemplateProfiles>
  )
}

Profile.propTypes = {
  token: string.isRequired,
  changeValue: func,
  changeProfile: func,
}

const mapStateToProps = (state) => ({
  token: state.profiles.token,
  profile: state.profiles.profile,
})

const mapDispatchToProps = (dispatch) => ({
  changeLogin: (login) => dispatch(showLogin(login)),
  changeProfile: (profiles) => dispatch(showProfile(profiles)),
  changeValue: (fieldName, value) => dispatch(changeField('profiles', fieldName, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
