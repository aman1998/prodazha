import React from 'react'
import { connect } from 'react-redux'
import { string, bool } from 'prop-types'
import PageTemplateProfiles from '../../components/pageTemplates/PageProfiles'
import { showLogin } from '../../store/actions'
import { getToken as getTokenAction } from '../../store/actions1'
import ProfileInfo from '../../components/ProfileInfo'
import styles from './profile.module.css'
import Edit from '../../components/EditProfile'

const Profile = ({ token, edit }) => (
  <PageTemplateProfiles>
    {token
      ? (
        <div className={styles.profiles__container}>
          <ProfileInfo />
          {edit && <Edit />}
        </div>
      )
      : 'Вы не авторизованы'}
  </PageTemplateProfiles>
)

Profile.propTypes = {
  token: string.isRequired,
  edit: bool.isRequired,
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  profile: state.auth.myProfile,
  edit: state.reducer.edit,
})

const mapDispatchToProps = (dispatch) => ({
  changeLogin: (login) => dispatch(showLogin(login)),
  getToken: (token) => dispatch(getTokenAction(token)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
