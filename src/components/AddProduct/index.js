import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import styles from './add.module.css'
import Category from '../Forms/category'
import AddList from '../Forms/addList'
import { addSale as addSaleAction, getSales as getSalesAction, changeField } from '../../store/actions1'

const AddProduct = () => {
  const { token, title, price, category, image, imagesList, success } = useSelector((state) => ({
    profile: state.profile,
    profiles: state.profiles,
    login: state.login,
    title: state.sales.description.title,
    price: state.sales.description.price,
    category: state.sales.description.category,
    image: state.sales.description.image,
    imagesList: state.sales.description.imagesList,
    success: state.sales.add.success,
    token: state.auth.token,
  }))

  const dispatch = useDispatch()
  // const changeProfile = (profile) => dispatch(showProfile(profile))
  const changeValue = (fieldName, value) => dispatch(changeField('description', fieldName, value))
  const changeToken = (fieldName, value) => dispatch(changeField('profiles', fieldName, value))
  const addSale = (data) => dispatch(addSaleAction(data))

  React.useEffect(() => {
    const getSales = () => dispatch(getSalesAction())
    if (success) getSales()
  }, [success, dispatch])

  const handleAdd = (e) => {
    e.preventDefault()
    const newAddList = { title, price, category, image, imagesList }
    changeValue('title', '')
    changeValue('price', '')
    changeToken('token', localStorage.getItem('token'))
    addSale(newAddList)
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
