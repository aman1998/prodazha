import React from 'react'
import styles from './add.module.css'
import PageTemplate from '../../components/pageTemplate'
import Login from '../../pages/Login'
import { connect } from 'react-redux'
import { showProfile, changeField} from '../../store/actions.js'

let Add = ({profile, login, title, price, changeValue}) => {
    const handleAdd = (e) => {
        e.preventDefault()
        const newAddList = {
            title,
            price
        }
        changeValue('title', '')
        changeValue('price', '')
        fetch('http://localhost:3030/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newAddList),
        })
        .then((response) => {
            return response.json()
        })
        .then((data) => console.log(data))
    }

    return(
        <PageTemplate>
            <div className='container'>
                {profile ?
                    <form>
                        <input 
                        type="text" 
                        placeholder="Название" 
                        value={title}
                        onChange={(e) => changeValue('title', e.target.value)}
                        />
                        <input
                        placeholder="Цена" 
                        value={price}
                        onChange={(e) => changeValue('price', e.target.value)}
                        />
                        <button onClick={handleAdd}>Добавить</button>
                    </form> :
                    'Чтобы добавить объявление надо авторизироваться'
                }
            </div>
            {login ? <Login /> : null}
        </PageTemplate>
    )
}

const mapStateToProps = (state) => ({
    profile: state.profile,
    profiles: state.profiles,
    login: state.login,
    title: state.list.title,
    price: state.list.price,
})

const mapDispatchToProps = (dispatch) => ({
    changeProfile: (profile) => dispatch(showProfile(profile)),
    changeValue: (fieldName, value) => dispatch(changeField('list', fieldName, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Add)
