import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import styles from './add.module.css'
import { changeField } from '../../store/actions'
import Category from '../Forms/category'
import AddList from '../Forms/addList'

const AddProduct = () => {
  const { token, title, price, category, image, imagesList } = useSelector((state) => ({
    profile: state.profile,
    profiles: state.profiles,
    login: state.login,
    title: state.list.title,
    price: state.list.price,
    category: state.list.category,
    image: state.list.image,
    imagesList: state.list.imagesList,
    token: state.profiles.token,
  }))

  const dispatch = useDispatch()
  // const changeProfile = (profile) => dispatch(showProfile(profile))
  const changeValue = (fieldName, value) => dispatch(changeField('list', fieldName, value))
  const changeToken = (fieldName, value) => dispatch(changeField('profiles', fieldName, value))

  const handleAdd = (e) => {
    e.preventDefault()
    const newAddList = { title, price, category, image, imagesList }
    changeValue('title', '')
    changeValue('price', '')
    changeToken('token', localStorage.getItem('token'))
    fetch('http://localhost:1717/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newAddList),
    })
      .then((response) => response.json())
      .then((data) => console.log('data', data))
  }

  return (
    <div>
      <div className="container">
        {token
          ? (
            <div>
              <h1>Upload file</h1>
              <form action="./upload" method="post" encType="multipart/form-data">
                Файл
                <input type="file" name="filedata" />
                <input type="submit" value="Send" />
              </form>
              <form>
                <Category />
                <AddList />
                <button onClick={handleAdd} type="submit">Добавить</button>
              </form>
            </div>
          )
          : 'Чтобы добавить объявление надо авторизироваться'}
      </div>
    </div>
  )
}

export default AddProduct
