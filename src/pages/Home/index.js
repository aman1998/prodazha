import React from 'react'
import PageTemplate from '../../components/pageTemplate'
import style from './home.module.css'
import Login from '../../pages/Login'
import { connect } from 'react-redux'
import { showLogin } from '../../store/actions'

const endpoint = 'http://localhost:5432'

let Home = ({login}) => {
const [hiddenText, setHiddenText] = React.useState('')
const [error, setError] = React.useState('')

// React.useEffect(() => {
//     fetch(`${endpoint}/login`, {
//     method: 'GET',
//     headers: {
//         'X-Auth': [localStorage.getItem('token'),
//                 localStorage.getItem('firstname'),
//                 localStorage.getItem('lastname'),
//                 localStorage.getItem('password'),
//                 localStorage.getItem('username'),]
//     },
//     })
//     .then((response) => {
//         if (!response.ok) throw response.status
//         return response.json()
//     })
//     .then((data) => {
//         // setHiddenText(data.user.token)
//         console.log(data)
//     })
//     .catch((errStatus) => {
//         if (errStatus === 403) setError('ошибка доступа')
//         else setError('неизвестная ошибка')
//     })
// }, [])

return (
    <PageTemplate>
        <div className='container'>
        Главная страница
        </div>
        {login ? <Login /> : null}
    </PageTemplate>
)
}

const mapStateToProps = (state) => ({
    login: state.login
})

const mapDispatchToProps = (dispatch) => ({
    changeLogin: (login) => dispatch(showLogin(login))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)