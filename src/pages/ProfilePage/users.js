import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PageTemplate from '../../components/pageTemplates/'
import styles from './profile.module.css'
import { getUsers as getUsersAction } from '../../store/actions1'

const Users = () => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    const getUsers = () => dispatch(getUsersAction())
    getUsers()
  }, [dispatch])

  const { users, loading, success, failed, error, token } = useSelector((state) => ({
    profile: state.auth.myProfile,
    users: state.users.data,
    loading: state.users.get.loading,
    success: state.users.get.success,
    failed: state.users.get.failed,
    error: state.users.get.error,
    token: state.auth.token,
  }))

  return (
    <PageTemplate>
      <div className={styles.users__container}>
        { loading && <div>Загрузка...</div> }
        { failed && <div>Ошибка: {error}</div> }
        {success && token ? users.map((user) => (
          <div key={user.token} className={styles.users}>
            <div className={styles.user__name}>
              <i className={styles.user__title}>Имя пользователя</i>
              <div>{`${user.data.lastname} ${user.data.firstname}`}</div>
            </div>
            <div className={styles.user__phone}>
              <i className={styles.user__title}>Телефон</i>
              <div>{user.data.phone}</div>
            </div>
            <div className={styles.user__mail}>
              <i className={styles.user__title}>Почта</i>
              <div>{user.data.mail}</div>
            </div>
          </div>
        )) : 'Вы не авторизованы'}
      </div>
    </PageTemplate>
  )
}

export default Users
