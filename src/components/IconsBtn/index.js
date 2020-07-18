import React from 'react'
import { useDispatch } from 'react-redux'
import { string } from 'prop-types'
import styles from './style.module.css'
import Heart from '../Icons/heart'
import Delete from '../Icons/delete'
// import User from '../Icons/user'
import { deleteSales as deleteSalesActions, changeField } from '../../store/actions1/sales'

const IconsBtn = ({ id }) => {
  const dispatch = useDispatch()
  const deleteSales = () => dispatch(deleteSalesActions(id))
  const changeStatusGet = (fieldName, value) => dispatch(changeField('get', fieldName, value))

  const handleDeleteSale = () => {
    deleteSales()
    changeStatusGet('success', false)
  }
  return (
    <div className={styles.icons}>
      {/* <div>
        <div className={styles.user}><User /></div>
      </div> */}
      {/* eslint-disable-next-line */}
      <div className={styles.delete} onClick={handleDeleteSale}><Delete /></div>
      <div className={styles.heart}><Heart /></div>
    </div>

  )
}

IconsBtn.propTypes = {
  id: string,
}

export default IconsBtn
