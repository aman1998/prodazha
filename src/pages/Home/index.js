import React from 'react'
import PageTemplate from '../../components/pageTemplate'
import style from './home.module.css'

const endpoint = 'http://localhost:5432'

let Home = () => {
const [hiddenText, setHiddenText] = React.useState('')
const [error, setError] = React.useState('')

React.useEffect(() => {
    fetch(`${endpoint}/data`, {
    method: 'GET',
    headers: {
        'X-Auth': localStorage.getItem('token'),
    },
    })
    .then((response) => {
        if (!response.ok) throw response.status
        return response.json()
    })
    .then(({ text }) => {
        setHiddenText(text)
    })
    .catch((errStatus) => {
        if (errStatus === 403) setError('ошибка доступа')
        else setError('неизвестная ошибка')
    })
}, [])

return (
    <PageTemplate>
        <div className={style.container}>
            Скрытая от неавторизованных информация:
            <div className={style.hidden}>
                {error}
                {hiddenText}
            </div>

            <button
                type="button"
                onClick={() => window.localStorage.removeItem('token')}
            >
                Выйти из аккаунта
            </button>
    </div>
    </PageTemplate>
)
}

export default Home