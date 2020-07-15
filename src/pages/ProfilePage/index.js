import React from 'react'
import { connect } from 'react-redux'
import { string, func } from 'prop-types'
import { Redirect, NavLink } from 'react-router-dom'
import PageTemplateProfiles from '../../components/pageTemplates/PageProfiles'
import { showLogin } from '../../store/actions'
import { getToken as getTokenAction } from '../../store/actions1'
import ProfileInfo from '../../components/ProfileInfo'
import styles from './profile.module.css'

const Profile = ({ token, getToken }) => {
  const [redirect, setRedirect] = React.useState(false)

  const deleteUser = () => {
    localStorage.removeItem('token')
    getToken(false)
    setRedirect(true)
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
  getToken: func,
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  profile: state.auth.myProfile,
})

const mapDispatchToProps = (dispatch) => ({
  changeLogin: (login) => dispatch(showLogin(login)),
  getToken: (token) => dispatch(getTokenAction(token)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
