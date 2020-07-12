import React from 'react'
import PageTemplateProfile from '../../components/pageTemplates/PageProfiles'
import styles from './profile.module.css'

const List = () => (
  <PageTemplateProfile>
    <div className={styles.profiles__container}>Объявления</div>
  </PageTemplateProfile>
)

export default List
