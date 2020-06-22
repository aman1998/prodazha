import React from 'react'
import PageTemplate from '../../components/pageTemplate'
import Login from '../../pages/Login'
import { connect } from 'react-redux'
import { showLogin } from '../../store/actions'
import { showProfile } from '../../store/actions'
import styles from './profile.module.css'
import { Redirect } from 'react-router-dom'

let Profile = ({login, profile, changeProfile}) => {
    const [redirect, setRedirect] = React.useState(false)
    
    React.useEffect(() => {
        
    }, [])
    
    const deleteUser = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('firstname')
        localStorage.removeItem('lastname')
        localStorage.removeItem('password')
        localStorage.removeItem('username')
        setRedirect(true)
        changeProfile(false)
    }
return(
    <PageTemplate>
        <div className={`container`}>
            {profile ? 
            <div>
                <div>Мой профиль</div>
                <div className={styles.profile}>
                    <div className={styles.avatar}></div>
                    <div className={styles.info}>
                        <div>Имя: {localStorage.getItem('firstname')}</div>
                        <div>Фамилия: {localStorage.getItem('lastname')}</div>
                        <div>Логин: {localStorage.getItem('username')}</div>
                    </div>
                </div>
                <button className={styles.signOut} onClick={deleteUser}>Выйти</button>
            </div>:
            'Вы не авторизированы'}
        </div>
        {login ? <Login /> : null}
        {redirect ? <Redirect to='/' /> : null}
    </PageTemplate>
)
}

const mapStateToProps = (state) => ({
    login: state.login,
    profile: state.profile
})

const mapDispatchToProps = (dispatch) => ({
    changeLogin: (login) => dispatch(showLogin(login)),
    changeProfile: (profile) => dispatch(showProfile(profile))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
