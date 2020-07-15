import React from 'react'
import { connect } from 'react-redux'
import { string } from 'prop-types'
import PageTemplateProfiles from '../../components/pageTemplates/PageProfiles'
import { showLogin } from '../../store/actions'
import { getToken as getTokenAction } from '../../store/actions1'
import ProfileInfo from '../../components/ProfileInfo'
import styles from './profile.module.css'
import Edit from '../../components/EditProfile'

const Profile = ({ token }) => (
  <PageTemplateProfiles>
    {token
      ? (
        <div className={styles.profiles__container}>
          <ProfileInfo />
          <Edit />
        </div>
      )
      : 'Вы не авторизованы'}
  </PageTemplateProfiles>
)

Profile.propTypes = {
  token: string.isRequired,
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
