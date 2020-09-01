import React from 'react'
import styles from './styles.module.scss'
import { NavLink } from 'react-router-dom' 
import SearchForm from '../Search/index'
import { useDispatch } from 'react-redux'
import { showLogin } from '../../store/actions'
import UserIcon from '../Icons/user'

const Header = () => {
  const dispatch = useDispatch()
  const changeLogin = (login) => dispatch(showLogin(login))

  const openModal = () => {
    document.body.classList.add('modal-open')
    changeLogin(true)
  }
  const menuItem = [
    { id: 1, link: './add', text: 'Добавить' },
    { id: 2, link: '/', text: 'Главное' },
    { id: 3, link: '/profile', text: 'Личный кабинет' },
  ]
  return (
    <header className={styles.header}>
      <nav className={styles.menu}>
        <ul className={styles.menuItems}>
          {
            menuItem.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.link}
                  className={styles.menuItem}
                  activeClassName={styles.active}
                  exact
                >
                  {item.text}
                </NavLink>
              </li>
            ))
          }
        </ul>
        <ul className={styles.menuItems}>
          <SearchForm />
        </ul>
        <ul className={styles.menuItems}>
          <li><div style={{ cursor: 'pointer' }} onClick={openModal}><UserIcon /></div></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header