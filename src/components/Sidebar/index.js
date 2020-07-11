import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './nav.module.css'
// import PageTemplate from '../pageTemplates/pageTemplate'

const Sidebar = () => {
  const profilesPage = [
    { id: 1, link: '/profile', text: 'Мой профиль' },
    { id: 2, link: '/profile/list', text: 'Мои объявления' },
    { id: 3, link: '/profile/favorites', text: 'Избранное' },
    { id: 4, link: '/profile/users', text: 'Пользователи' },
  ]

  return (
    <nav className={styles.sidebar}>
      <div>
        {profilesPage.map((list) => (
          <NavLink
            key={list.id}
            exact
            to={list.link}
            className={styles.navItem}
            activeClassName={styles.active}
          >
            {list.text}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export default Sidebar
