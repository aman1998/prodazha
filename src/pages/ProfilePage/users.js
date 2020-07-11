import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PageTemplateProfiles from '../../components/pageTemplates/PageProfiles'
import PageTemplate from '../../components/pageTemplates/pageTemplate'
import styles from './profile.module.css'
import { changeField } from '../../store/actions'

const Users = () => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    const changeValue = (fieldName, value) => dispatch(changeField('profiles', fieldName, value))
    fetch('http://localhost:1717/users-list', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        changeValue('profilesList', data)
      })
  }, [dispatch])

  const { profilesList } = useSelector((state) => ({
    profilesList: state.profiles.profilesList,
    profile: state.profiles.profile,
  }))

  return (
    <PageTemplate>
      <PageTemplateProfiles>
        <div className={styles.users__container}>
          {profilesList.map((user) => (
            <div key={user.token} className={styles.users}>
              <div className={styles.user__avatars}>
                <div className={styles.user__title}>Фото</div>
                <div className={styles.user__avatar}>
                  <img
                    className={styles.avatars}
                    src={user.data.image !== '' ? user.data.image : ''}
                    alt="avatar"
                  />
                </div>
              </div>
              <div className={styles.user__name}>
                <div className={styles.user__title}>Имя пользователя</div>
                <div>{`${user.data.lastname} ${user.data.firstname}`}</div>
              </div>
              <div className={styles.user__phone}>
                <div className={styles.user__title}>Телефон</div>
                <div>{user.data.phone}</div>
              </div>
              <div className={styles.user__mail}>
                <div className={styles.user__title}>Почта</div>
                <div>{user.data.mail}</div>
              </div>
              <div className={styles.user__operation}>
                <div className={styles.user__title}>Операция</div>
              </div>
            </div>
          ))}
        </div>
      </PageTemplateProfiles>
    </PageTemplate>
  )
}

export default Users
