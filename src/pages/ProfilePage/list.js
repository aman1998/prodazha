import React from 'react'
import PageTemplate from '../../components/pageTemplates/PageProfiles'
import styles from './profile.module.css'

const List = () => (
  <PageTemplate>
    <div>
      <div className={styles.profiles__container}>Объявления</div>
    </div>
  </PageTemplate>
)

export default List
