import React from 'react'
import { useSelector } from 'react-redux'
import PageTemplateProfile from '../../components/pageTemplates/PageProfiles'
import styles from './profile.module.css'

const Favorites = () => {
  const { favoritesList } = useSelector((state) => ({
    favoritesList: state.sales.favData,
  }))

  return (
    <PageTemplateProfile>
      <div>
        <div className={styles.profiles__container}>Избранное</div>
        <div className={styles.profiles__container}>{favoritesList}</div>
      </div>
    </PageTemplateProfile>
  )
}

export default Favorites
