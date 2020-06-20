import React from 'react'
import styles from './login.module.css'
import PageTemplate from '../../components/pageTemplate'
import Auth from '../../components/Auth'
import Registr from '../../components/Registr'
import Cancel from '../../components/Icons/cancel'

let Login = ({ history }) => {
    const [auth, setAuth] = React.useState(true)
return (
    <PageTemplate>
        <div className="container">
            <form className={styles.login}>
                <div className={styles.title}>
                    <div 
                        className={styles['title__login']}
                        style={auth ? {color: '#305996d0'} : {color: '#000'}} 
                        onClick={() => setAuth(true)}
                        >Логин</div>
                    <div 
                        className={styles['title__registr']} 
                        style={auth === false ? {color: '#305996d0'} : {color: '#000'}} 
                        onClick={() => setAuth(false)}
                        >Регистрация</div>
                </div>
                <Cancel />
                {auth ? <Auth /> : <Registr />}
            </form>
            {/* <button
                type="button"
                onClick={() => history.goBack()}
            >
                Назад
            </button> */}
        </div>
    </PageTemplate>
)
}

export default Login