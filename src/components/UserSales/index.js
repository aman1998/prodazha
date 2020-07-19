import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './style.module.css'
import IconsBtn from '../IconsBtn'
import { getSales as getSalesAction } from '../../store/actions1'

const UserList = () => {
  const { sales, profile, success } = useSelector((state) => ({
    sales: state.sales.data,
    profile: state.auth.myProfile,
    success: state.sales.get.success,
  }))
  const dispatch = useDispatch()

  React.useEffect(() => {
    const getSales = () => dispatch(getSalesAction())
    if (!success) getSales()
  }, [dispatch, sales, success])

  return (
    <div className={styles.wrapper}>
      {
        sales.map((list) => (
          profile.id === list.userId
            ? (
              <div key={list.id} className={styles.block}>
                <img className={styles.img} alt="#" src={list.image} />
                <p>{`${list.price} сом`}</p>
                <div>{list.title}</div>
                <IconsBtn id={list.id} />
              </div>
            )
            : null
        ))
      }
    </div>
  )
}

export default UserList
