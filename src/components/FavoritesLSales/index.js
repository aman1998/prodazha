import React from 'react'
import { useSelector } from 'react-redux'
import styles from './style.module.css'
import Phone from '../Icons/phone'

const FavoritesSales = () => {
  const { sales, favoritesList } = useSelector((state) => ({
    profile: state.auth.myProfile,
    favoritesList: state.auth.myProfile.favoritesList,
    sales: state.sales.data,
    success: state.sales.get.success,
  }))

  return (
    <div className={`container ${styles.wrapper}`}>
      {favoritesList.length !== 0 ? sales.map((list) => (
        favoritesList.map((arr) => (
          list.id === arr
            ? (
              <div key={list.id} className={styles.block}>
                <img className={styles.img} alt="#" src={list.image} />
                <p>{`${list.price} сом`}</p>
                <div>{list.title}</div>
                <Phone />
              </div>
            )
            : null
        ))
      ))
        : 'У вас нету избранного'}
    </div>
  )
}

export default FavoritesSales
