import React from 'react'
import PageTemplate from '../../components/pageTemplate'
import Login from '../../pages/Login'
import { connect } from 'react-redux'
import { showLogin, changeField } from '../../store/actions'

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
        <div className='container'>
            { addList.map(list => (
                list.category === 'Недвижимость' ?
                <div key={list.id}>
                    <h2>{list.title}</h2>
                    <p>{list.price}</p>
                    <p>{list.category}</p>
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