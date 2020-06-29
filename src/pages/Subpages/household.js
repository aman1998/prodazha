import React from 'react'
import PageTemplate from '../../components/pageTemplate'
import Login from '../../pages/Login'
import { connect } from 'react-redux'
import { showLogin, changeField } from '../../store/actions'
import Heart from '../../components/Icons/heart'
import Message from '../../components/Icons/message'
import User from '../../components/Icons/user'
import styles from '../Home/home.module.css'

let Household = ({login, addList, changeValue}) => {
    // const [error, setError] = React.useState('')

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
            { addList.map(list => (
                list.category === 'Недвижимость' ?
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
                </div> :
                null
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

export default connect(mapStateToProps, mapDispatchToProps)(Household)