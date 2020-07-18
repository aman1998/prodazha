import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AddList from '../Forms/addList'
import { addSale as addSaleAction, changeField } from '../../store/actions1'

const AddProduct = () => {
  const { token, title, price, category, image, imagesList } = useSelector(
    (state) => ({
      profiles: state.profiles,
      login: state.login,
      title: state.sales.description.title,
      price: state.sales.description.price,
      category: state.sales.description.category,
      image: state.sales.description.image,
      imagesList: state.sales.description.imagesList,
      token: state.auth.token,
    }))

  const dispatch = useDispatch()
  // const changeProfile = (profile) => dispatch(showProfile(profile))
  const changeValue = (fieldName, value) => dispatch(changeField('description', fieldName, value))
  const changeToken = (fieldName, value) => dispatch(changeField('profiles', fieldName, value))
  const addSale = (data) => dispatch(addSaleAction(data))
  const changeStatusGet = (fieldName, value) => dispatch(changeField('get', fieldName, value))

  const handleAdd = () => {
    const newAddList = { title, price, category, image, imagesList }
    changeValue('title', '')
    changeValue('price', '')
    changeToken('token', localStorage.getItem('token'))
    addSale(newAddList)
    changeStatusGet('success', false)
  }

  return (
    <div>
      <div className="container">
        {token
          ? (
            <div>
              <AddList onClick={handleAdd} />
            </div>
          )
          : 'Чтобы добавить объявление надо авторизироваться'}
      </div>
    </div>
  )
}

export default AddProduct
