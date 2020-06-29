import React from 'react'
import PageTemplate from '../../components/pageTemplate'
import Login from '../../pages/Login'
import { connect } from 'react-redux'
import { showProfile, showLogin, changeField } from '../../store/actions.js'
import styles from './profile.module.css'
import { Redirect } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


let Profile = ({login, profile, changeProfile, firstname, lastname, username, changeValue}) => {
    const [redirect, setRedirect] = React.useState(false)

    React.useEffect(() => {
            changeValue('firstname', localStorage.getItem('firstname'))
            changeValue('lastname', localStorage.getItem('lastname'))
            changeValue('username', localStorage.getItem('username'))
    }, [changeValue])

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
                        <div>Имя: {firstname}</div>
                        <div>Фамилия: {lastname}</div>
                        <div>Логин: {username}</div>
                    </div>
                </div>
                <button className={styles.signOut} onClick={deleteUser}>Выйти</button>
                <button>
                    <NavLink to='/add' exact>Добавить объявление</NavLink>
                </button>
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
    profile: state.profile,
    profiles: state.profiles,
    username: state.profiles.username,
    lastname: state.profiles.lastname,
    firstname: state.profiles.firstname,
})

const mapDispatchToProps = (dispatch) => ({
    changeLogin: (login) => dispatch(showLogin(login)),
    changeProfile: (profiles) => dispatch(showProfile(profiles)),
    changeValue: (fieldName, value) => dispatch(changeField('profiles', fieldName, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
