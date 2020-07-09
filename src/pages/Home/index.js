import React from 'react'
import PageTemplate from '../../components/pageTemplate'
import styles from './home.module.css'
import Login from '../../pages/Login'
import { useSelector, useDispatch } from 'react-redux'
import { changeField } from '../../store/actions'
import Heart from '../../components/Icons/heart'
import Message from '../../components/Icons/message'
import User from '../../components/Icons/user'

let Home = () => {
    // const [error, setError] = React.useState('')
    const {search, login, addList, favoritesList} = useSelector(state => ({
        search: state.search,
        login: state.login,
        addList: state.list.addList,
        favoritesList: state.profiles.favoritesList,
    }))

    const dispatch = useDispatch()
    const changeValue = React.useCallback((fieldName, value) => {
        dispatch(changeField('list', fieldName, value))
    }, [dispatch])

React.useEffect(() => {
    fetch('http://localhost:1717/list')
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        changeValue('addList', data)
    })
}, [changeValue])

return (
    <PageTemplate>
        <div className={`container ${styles.wrapper}`}>
            { addList.filter((item) => {
                return item.title.toLowerCase().includes(search.toLowerCase())
            }).map(list => (
                <div key={list.id} className={styles.block}>
                    <img className={styles.img} />
                    <p>{`${list.price} сом`}</p>
                    <div>{list.title}</div>
                    <div className={styles.icons}>
                        <div>
                            <div className={styles.user}><User /></div>
                            <div className={styles.message}><Message /></div>
                        </div>
                        <div className={styles.heart}><Heart /></div>
                    </div>
                </div>
            ))}
        </div>
        {login ? <Login /> : null}
    </PageTemplate>
)
}

export default Home