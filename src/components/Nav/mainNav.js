import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import styles from './nav.module.css'
import Search from '../Search'
import { showLogin } from '../../store/actions'
import NavMobile from '../NavMobile'
import UserIcon from '../Icons/user'

const MainNav = () => {
  const menuItem = [
    { id: 1, link: '/', text: 'Главное' },
    { id: 3, link: '/profile', text: 'Личный кабинет' },
  ]

  const dispatch = useDispatch()
  const changeLogin = (login) => dispatch(showLogin(login))

  const openModal = () => {
    document.body.classList.add('modal-open')
    changeLogin(true)
  }

  return (
    <div className={styles.header__menu}>
      <div className={styles.title}>Amangeldi</div>
      <div className={styles.mobileNav}><NavMobile /></div>
      <div className={styles.search}><Search /></div>
      <nav>
        <ul className={styles.menu}>
          <li>
            <NavLink
              to="./add"
              className={styles.add}
              activeClassName={styles.active}
              exact
            >Добавить
            </NavLink>
          </li>
          {
                        menuItem.map((menu) => (
                          <li key={menu.id}>
                            <NavLink
                              to={menu.link}
                              className={styles.items}
                              activeClassName={styles.active}
                              exact
                            >
                              {menu.text}
                            </NavLink>
                          </li>
                        ))
                    }
          {/* eslint-disable */}
          <li><div style={{ cursor: 'pointer' }} onClick={openModal}>Вход</div></li>
        </ul>
        <div style={{ cursor: 'pointer' }} onClick={openModal} className={styles.login}><UserIcon /></div>
      </nav>
    </div>
  )
}

export default MainNav
