import React from 'react'
import PageTemplate from '../../components/pageTemplate'
import Login from '../../pages/Login'
import { connect } from 'react-redux'
import { showProfile, showLogin, changeField } from '../../store/actions.js'
import styles from './profile.module.css'
import { Redirect } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


let Profile = ({login, token, profile, changeProfile, profilesList, changeValue}) => {
    const [redirect, setRedirect] = React.useState(false)

    React.useEffect(() => {
        const getToken = localStorage.getItem('token')
        changeValue('token', getToken)
        fetch('http://localhost:5432/data')
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            changeValue('profilesList', data)
        })
            // changeValue('firstname', localStorage.getItem('firstname'))
            // changeValue('lastname', localStorage.getItem('lastname'))
            // changeValue('username', localStorage.getItem('username'))
    }, [changeValue, changeProfile])

    const deleteUser = () => {
        localStorage.removeItem('token')
        setRedirect(true)
        changeProfile(false)
    }
    

return(
    <PageTemplate>
        <div className={`container`}>
            {token ? 
            <div>
                <div>Мой профиль</div>
                <div className={styles.profile}>
                    {profilesList.map((list) => (
                        token === list.token ?
                        <div key={list.token}>
                            <div className={styles.avatar}></div>
                            <div className={styles.info}>
                                <div>Имя: {list.data.firstname}</div>
                                <div>Фамилия: {list.data.lastname}</div>
                                <div>Логин: {list.data.username}</div>
                            </div>
                        </div> : null
                    ))}
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
    token: state.profiles.token,
    profilesList: state.profiles.profilesList,
})

const mapDispatchToProps = (dispatch) => ({
    changeLogin: (login) => dispatch(showLogin(login)),
    changeProfile: (profiles) => dispatch(showProfile(profiles)),
    changeValue: (fieldName, value) => dispatch(changeField('profiles', fieldName, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
