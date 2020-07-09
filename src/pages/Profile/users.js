import React from 'react'
import PageTemplate from '../../components/PageProfiles'
import styles from './profile.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { changeField } from '../../store/actions.js'

let Users = () => {
    React.useEffect(() => {
        fetch('http://localhost:1717/users-list', {
            method: 'GET'
        }) 
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            changeValue('profilesList', data)
        })
    }, [])

    const {profilesList } = useSelector(state => ({
        profilesList: state.profiles.profilesList,
    }))

    const dispatch = useDispatch()
    const changeValue = (fieldName, value) => dispatch(changeField('profiles', fieldName, value))

    return(
        <PageTemplate>
            <div className={styles['users__container']}>
            {profilesList.map((user) => (
                <div key={user.token} className={styles.users}>
                    <div className={styles['user__avatars']}>
                        <div className={styles['user__title']}>Фото</div>
                        <div className={styles['user__avatar']}></div>
                    </div>
                    <div className={styles['user__name']}>
                        <div className={styles['user__title']}>Имя пользователя</div>
                        <div>{`${user.data.lastname} ${user.data.firstname}`}</div>
                    </div>
                    <div className={styles['user__phone']}>
                        <div className={styles['user__title']}>Телефон</div>
                        <div>{user.data.phone}</div>
                    </div>
                    <div className={styles['user__mail']}>
                        <div className={styles['user__title']}>Почта</div>
                        <div>{user.data.mail}</div>
                    </div>
                    <div className={styles['user__operation']}>
                        <div className={styles['user__title']}>Операция</div>
                    </div>
                </div> 
            ))}
            </div>
        </PageTemplate>
    )
}

export default Users