import React from 'react'
import styles from './add.module.css'
import PageTemplate from '../../components/pageTemplate'
import Login from '../../pages/Login'
import { useSelector, useDispatch } from 'react-redux'
import { showProfile, changeField} from '../../store/actions.js'
import Category from '../../components/Forms/category'
import AddList from '../../components/Forms/addList'

let Add = () => {
    const {profile, login, token, title, price, category} = useSelector(state => ({
        profile: state.profile,
        profiles: state.profiles,
        login: state.login,
        title: state.list.title,
        price: state.list.price,
        category: state.list.category,
        token: state.profiles.token,
    }))

    const dispatch = useDispatch()
    const changeProfile = (profile) => dispatch(showProfile(profile))
    const changeValue = (fieldName, value) => dispatch(changeField('list', fieldName, value))

    const handleAdd = (e) => {
        e.preventDefault()
        const newAddList = {
            title,
            price,
            category,
        }
        changeValue('title', '')
        changeValue('price', '')
        fetch('http://localhost:1717/add', {
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
                <h1>Upload file</h1>
                <form action="./upload" method="post" encType="multipart/form-data">
                    <label>Файл</label>
                    <input type="file" name="filedata" />
                    <input type="submit" value="Send" />
                </form>
                {token ?
                    <form>
                        <Category />
                        <AddList />
                        <button onClick={handleAdd} type='submit'>Добавить</button>
                    </form> :
                    'Чтобы добавить объявление надо авторизироваться'
                }
            </div>
            {login ? <Login /> : null}
        </PageTemplate>
    )
}

export default Add
