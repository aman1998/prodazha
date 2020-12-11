import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.scss'

const Sidebar = () => {
  const sidebarItem = [
    { id: 1, link: '/profile/', text: 'Личные Данные' },
    { id: 2,link: '/profile/settings/', text: 'Настройка аккаунта' },
    { id: 3, link: '/profile/cardIn/', text: 'Пополнить счет'},
    { id: 4, link: '/profile/cardOut/', text: 'Вывести со счета'},
  ]
  return (
    <aside>
      <nav className={`${styles.sidebar}`}>
        <div>
          <ul className={styles.sidebarItems}>
          {
            sidebarItem.map((item) => (
              <NavLink
                key={item.id}
                to={item.link}
                className={styles.sidebarItem}
                activeClassName={styles.active}
                exact
              >
                <div>
                  <div className={styles.sidebarItemIcon}>{item.icon}</div>
                  <div className={styles.sidebarItemText}>{item.text}</div>
                </div>
              </NavLink>
            ))
          }
          </ul> 
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar