import React from 'react'
import { useSelector } from 'react-redux'
import PageTemplate from '../../components/pageTemplates/PageProfiles'
import styles from './profile.module.css'

const Favorites = () => {
  const { favoritesList } = useSelector((state) => ({
    favoritesList: state.profiles.favoritesList,
  }))

  return (
    <PageTemplate>
      <div>
        <div className={styles.profiles__container}>Избранное</div>
        <div className={styles.profiles__container}>{favoritesList}</div>
        {/* {favoritesList.map(list => (
                    <div key={list.id} className={styles.block}>
                        <img className={styles.img} />
                        <p>{`${list.price} сом`}</p>
                        <div>{list.title}</div>
                    </div>
                ))} */}
      </div>
    </PageTemplate>
  )
}

export default Favorites
