import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PageTemplateProfiles from '../../components/pageTemplates/PageProfiles'
import styles from './profile.module.css'
import { getUsers as getUsersAction } from '../../store/actions1'

const Users = () => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    const getUsers = () => dispatch(getUsersAction())
    getUsers()
  }, [dispatch])

  const { users, loading, success, failed, error } = useSelector((state) => ({
    profile: state.auth.myProfile,
    users: state.users.data,
    loading: state.users.get.loading,
    success: state.users.get.success,
    failed: state.users.get.failed,
    error: state.users.get.error,
  }))

  return (
    <PageTemplateProfiles>
      <div className={styles.users__container}>
        { loading && <div>Загрузка...</div> }
        { failed && <div>Ошибка: {error}</div> }
        {success && users.map((user) => (
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
  )
}

export default Users
