import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { string, bool } from 'prop-types'
import styles from './style.module.css'
import Heart from '../Icons/heart'
import Delete from '../Icons/delete'
import Phone from '../Icons/phone'
import { deleteSales as deleteSalesActions, changeField, getSales as getSalesAction } from '../../store/actions1/sales'

const ENDOPOINT = 'https://intense-journey-98977.herokuapp.com'

const IconsBtn = ({ id, status }) => {
  const { profile, admin } = useSelector(
    (state) => ({
      profile: state.auth.myProfile,
      admin: state.auth.myProfile.isAdmin,
    }))
  const dispatch = useDispatch()
  const deleteSales = () => dispatch(deleteSalesActions(id))
  const changeStatusGet = (fieldName, value) => dispatch(changeField('get', fieldName, value))
  const getSales = () => dispatch(getSalesAction())

  const handleDeleteSale = () => {
    deleteSales()
    changeStatusGet('success', false)
  }

  const handleAddFavoriteSales = () => {
    const idList = id
    fetch(`${ENDOPOINT}/favorites/${profile.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        idList,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        getSales()
        console.log(data)
      })
  }

  return (
    <div className={styles.icons}>
      <Phone />
      {/* eslint-disable-next-line */}
      {admin ? <div className={styles.delete} onClick={handleDeleteSale}><Delete /></div> : null}
      <div className={styles.heart}><Heart onClick={handleAddFavoriteSales} status={status} /></div>
    </div>

  )
}

IconsBtn.propTypes = {
  id: string,
  status: bool,
}

export default IconsBtn
