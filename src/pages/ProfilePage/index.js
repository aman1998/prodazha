import React from 'react'
import { connect } from 'react-redux'
import { string, bool } from 'prop-types'
import PageTemplate from '../../components/pageTemplates'
import ProfileInfo from '../../components/ProfileInfo'
import styles from './profile.module.css'
import Edit from '../../components/EditProfile'

const Profile = ({ token, edit }) => (
  <PageTemplate>
    {token
      ? (
        <div className={styles.profiles__container}>
          <ProfileInfo />
          {edit && <Edit />}
        </div>
      )
      : 
      <div className="container">Вы не авторизованы</div>
      }
  </PageTemplate>
)

Profile.propTypes = {
  token: string.isRequired,
  edit: bool.isRequired,
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  edit: state.reducer.edit,
  profile: state.auth.myProfile,
})

export default connect(mapStateToProps)(Profile)
