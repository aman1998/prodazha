import React from 'react'
import PageTemplateProfiles from '../../components/PageProfiles'
import PageTemplate from '../../components/pageTemplate'
import Login from '../../pages/Login'
import { connect, useSelector, useDispatch } from 'react-redux'
import { showProfile, showLogin, changeField } from '../../store/actions.js'
import styles from './profile.module.css'
import { Redirect } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import logo from '../../components/Icons/upload.svg'


let Profile = ({login, token, changeProfile, profile, changeValue}) => {
    const [redirect, setRedirect] = React.useState(false)
    const [image, setImage] = React.useState('avatars')
    const [id, setId] = React.useState('')

    // const {login, token, profile, profiles, profilesList } = useSelector(state => ({
    //     login: state.login,
    //     profile: state.profile,
    //     profiles: state.profiles,
    //     token: state.profiles.token,
    //     profilesList: state.profiles.profilesList,
    // }))

    // const dispatch = useDispatch()
    // const changeLogin = (login) => dispatch(showLogin(login))
    // const changeProfile = (profiles) => dispatch(showProfile(profiles))
    // const changeValue = (fieldName, value) => dispatch(changeField('profiles', fieldName, value))

    React.useEffect(() => {
        const getToken = localStorage.getItem('token')
        if(getToken !== '') {
            changeValue('token', getToken)
            fetch('http://localhost:1717/profile', {
                method: 'GET',
                headers: { 'X-Auth': `${getToken}` },
            }) 
            .then(function (response) {
                return response.json()
            })
            .then(function ({data}) {
                setId(data.id)
                changeValue('profile', data)
            })
        }
    }, [changeValue, changeProfile, login])

    const deleteUser = () => {
        localStorage.removeItem('token')
        changeValue('token', false)
        setRedirect(true)
        changeProfile(false)
    }

    const addHandleImage = () => {
        fetch(`http://localhost:1717/edit-profile/${profile.id}`, {
        method: "PUT",
        body: JSON.stringify({
            image
        }),
        headers: {
        "Content-type": "application/json"
        }
        })
        .then(response => response.json())
        .then(data => {
            changeValue('profile', data) 
            console.log(data)})
    }
    
    const handleImageUpload = (e) => {
        const reader = new FileReader()
        const file = e.target.files[0]
        if (file) reader.readAsDataURL(file)
        reader.onload = () => {
        setImage(reader.result)
        }
        reader.onerror = (error) => {
        console.log(error)
        }
    }
    
return(
    <div>
        {token ?
        <PageTemplateProfiles>
            <div>
                <div className={styles['profiles__container']}>
                    <div className={styles.profile}>
                        <div>
                                <label htmlFor='avatar' className={styles.label}>
                                    <div style={{cursor: 'pointer'}}><img className={styles.avatar} src={logo}/></div>
                                    <input 
                                        id='avatar' 
                                        onChange={handleImageUpload} 
                                        type='file' 
                                        accept='.png, .jpeg .jpg'
                                        />
                                </label>
                                <div className={styles.info}>
                                    <div>Имя: {profile.firstname}</div>
                                    <div>Фамилия: {profile.lastname}</div>
                                    <div>Логин: {profile.username}</div>
                                </div>
                        </div> 
                    </div>
                    <button className={styles.signOut} onClick={deleteUser}>Выйти</button>
                    <button>
                        <NavLink to='/add' exact>Добавить объявление</NavLink>
                    </button>
                    <button onClick={addHandleImage}>поменять картинку</button>
                </div>
            </div>
        </PageTemplateProfiles> :
        <PageTemplate>
            'Вы не авторизированы'
        </PageTemplate>}
        {login ? <Login /> : null}
        {redirect ? <Redirect to='/' /> : null}
    </div>
)
}

const mapStateToProps = (state) => ({
    login: state.login,
    token: state.profiles.token,
    profile: state.profiles.profile,
})

const mapDispatchToProps = (dispatch) => ({
    changeLogin: (login) => dispatch(showLogin(login)),
    changeProfile: (profiles) => dispatch(showProfile(profiles)),
    changeValue: (fieldName, value) => dispatch(changeField('profiles', fieldName, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
