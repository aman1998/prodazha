import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AddList from '../Forms/addList'
import { addSale as addSaleAction, getSales as getSalesAction, changeField } from '../../store/actions1'

const AddProduct = () => {
  const { token, title, price, category, image, imagesList, success, profile } = useSelector(
    (state) => ({
      profiles: state.profiles,
      login: state.login,
      title: state.sales.description.title,
      price: state.sales.description.price,
      category: state.sales.description.category,
      image: state.sales.description.image,
      imagesList: state.sales.description.imagesList,
      success: state.sales.add.success,
      token: state.auth.token,
      profile: state.auth.myProfile,
    }))

  const dispatch = useDispatch()
  // const changeProfile = (profile) => dispatch(showProfile(profile))
  const changeValue = (fieldName, value) => dispatch(changeField('description', fieldName, value))
  const changeToken = (fieldName, value) => dispatch(changeField('profiles', fieldName, value))
  const addSale = (data) => dispatch(addSaleAction(data))

  React.useEffect(() => {
    const getSales = () => dispatch(getSalesAction())
    if (success) getSales()
  }, [success, dispatch, profile, token])

  const handleAdd = () => {
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
              <form>
                <AddList onClick={handleAdd} />
              </form>
            </div>
          )
          : 'Чтобы добавить объявление надо авторизироваться'}
      </div>
    </div>
  )
}

export default AddProduct
