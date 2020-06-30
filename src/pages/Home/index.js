import React from 'react'
import PageTemplate from '../../components/pageTemplate'
import styles from './home.module.css'
import Login from '../../pages/Login'
import { connect, useSelector } from 'react-redux'
import { showLogin, changeField } from '../../store/actions'
import Heart from '../../components/Icons/heart'
import Message from '../../components/Icons/message'
import User from '../../components/Icons/user'

let Home = ({login, addList, changeValue}) => {
    // const [error, setError] = React.useState('')
    const search = useSelector(state => state.search)

React.useEffect(() => {
    fetch('http://localhost:3030/list')
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

const mapStateToProps = (state) => ({
    login: state.login,
    addList: state.list.addList
})

const mapDispatchToProps = (dispatch) => ({
    changeLogin: (login) => dispatch(showLogin(login)),
    changeValue: (fieldName, value) => dispatch(changeField('list', fieldName, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)