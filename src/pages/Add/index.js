import React from 'react'
import styles from './add.module.css'
import PageTemplate from '../../components/pageTemplate'
import Login from '../../pages/Login'
import { connect } from 'react-redux'
import { showProfile, changeField} from '../../store/actions.js'

let Add = ({profile, login, title, price, addList, changeValue}) => {
    // const [title, setTitle] = React.useState('')
    // const [price, setPrice] = React.useState('')
    // const [addList, setList] = React.useState([])

    const handleAdd = (e) => {
        e.preventDefault()
        const newAddList = {
            title,
            price
        }
        changeValue('title', '')
        changeValue('price', '')
        changeValue('addList', [ ...addList, newAddList ])
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
    addList: state.list.addList,
})

const mapDispatchToProps = (dispatch) => ({
    changeProfile: (profile) => dispatch(showProfile(profile)),
    changeValue: (fieldName, value) => dispatch(changeField('list', fieldName, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Add)
