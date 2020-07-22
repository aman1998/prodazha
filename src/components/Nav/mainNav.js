import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import styles from './nav.module.css'
import Search from '../Search'
import { showLogin } from '../../store/actions'
import NavMobile from '../NavMobile'
import UserIcon from '../Icons/user'

const MainNav = () => {
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
          <li>
            <NavLink
              to="./"
              className={styles.items}
              activeClassName={styles.active}
              exact
            >Главное
            </NavLink>
          </li>
          <li>
            <NavLink
              to="./profile"
              className={styles.items}
              activeClassName={styles.active}
              exact
            >Личный кабинет
            </NavLink>
            <ul>
              <li><NavLink to="/list">Объявления</NavLink></li>
              <li><NavLink to="/favorites">Избранное</NavLink></li>
              <li><NavLink to="/users">Пользователи</NavLink></li>
            </ul>
          </li>
          {/* eslint-disable */}
          <li><div style={{ cursor: 'pointer' }} onClick={openModal}>Вход</div></li>
        </ul>
        <div style={{ cursor: 'pointer' }} onClick={openModal} className={styles.login}><UserIcon /></div>
      </nav>
    </div>
  )
}

export default MainNav
