import React from 'react'
import styles from './styles.module.scss'
import { NavLink } from 'react-router-dom' 
import SearchForm from '../Search/index'
import { useDispatch } from 'react-redux'
import { showLogin, showSidebar } from '../../store/actions'
import UserIcon from '../Icons/user'
import SearchIcon from '../Icons/search'
import AddIcon from '../Icons/add'
import HomeIcon from '../Icons/home'
import EnterIcon from '../Icons/enter'
import NavIcon from '../Icons/nav'

const Header = () => {
  const [showSearch, setShowSearch] = React.useState(false)
  // const [showSidebar, setShowSidebar] = React.useState(false)

  const dispatch = useDispatch()
  const changeLogin = (login) => dispatch(showLogin(login))
  // const changeSidebar = () => dispatch(showLogin())

  const openModal = () => {
    document.body.classList.add('modal-open')
    changeLogin(true)
  }
  const menuItem = [
    { id: 1, link: './add', text: 'Добавить' },
    { id: 2, link: '/', text: 'Главное' },
    { id: 3, link: '/profile', text: 'Личный кабинет' },
  ]

  const menuItemAdaptive = [
    { id: 1, link: './add', text: <AddIcon /> },
    { id: 2, link: '/', text: <HomeIcon /> },
    { id: 3, link: '/profile', text: <UserIcon /> },
  ]

  return (
    <header className={styles.header}>
      <nav className={styles.menu}>
        <div className={styles.menuAdaptive}>
          <div><NavIcon /></div>
          <NavLink to='/' exact>Sales</NavLink>
        </div>
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
        <ul className={`${styles.menuItems} ${styles.menuItemsSearch}`}>
          <SearchForm />
        </ul>
        <ul className={styles.menuItems}>
          <li className={`${styles.menuItemAdaptive} ${styles.menuItemAdaptiveSearch}`} onClick={() => setShowSearch(!showSearch)}><SearchIcon/></li>
          {
            menuItemAdaptive.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.link}
                  className={styles.menuItemAdaptive}
                  activeClassName={styles.activeAdaptive}
                  exact
                >
                  {item.text}
                </NavLink>
              </li>
            ))
          }
          <li><div onClick={openModal}><EnterIcon /></div></li>
        </ul>
      </nav>
      {
        showSearch ? <div className={styles.headerSearch}><SearchForm /></div> : ''
      }
    </header>
  )
}

export default Header