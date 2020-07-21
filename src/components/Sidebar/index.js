import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './nav.module.css'
import Heart from '../Icons/heart'
import User from '../Icons/user'
// import PageTemplate from '../pageTemplates/pageTemplate'

const Sidebar = () => {
  const profilesPage = [
    { id: 1, link: '/profile', text: 'Мой профиль' },
    { id: 2, link: '/list', text: 'Мои объявления' },
    { id: 3, link: '/favorites', text: 'Избранное' },
    { id: 4, link: '/users', text: 'Пользователи' },
  ]

  const profilesPageMobile = [
    { id: 5, link: '/profile', icon: <User /> },
    { id: 6, link: '/list', icon: <User /> },
    { id: 7, link: '/favorites', icon: <Heart /> },
    { id: 8, link: '/users', icon: <User /> },
  ]

  return (
    <nav className={styles.sidebar}>
      <div className={styles.desktop}>
        {profilesPage.map((list) => (
          <div key={list.id}>
            <NavLink
              exact
              to={list.link}
              className={styles.navItem}
              activeClassName={styles.active}
            >
              {list.text}
            </NavLink>
          </div>
        ))}
      </div>
      <div className={styles.mobile}>
        {profilesPageMobile.map((list) => (
          <div key={list.id}>
            <NavLink
              exact
              to={list.link}
              className={styles.navItem}
              activeClassName={styles.active}
            >
              {list.icon}
            </NavLink>
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Sidebar
