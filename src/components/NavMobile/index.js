import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './style.module.css'
import NavIcon from '../Icons/icon'

const NavMobile = () => {
  const [nav, setNav] = React.useState(false)
  const [category, setCategory] = React.useState(false)

  const toggleNav = () => {
    setNav(!nav)
    setCategory(false)
  }

  return (
    <div className={styles.wrapper}>
      <nav>
        <ul>
          <li className={styles.submenu}><div onClick={toggleNav}><NavIcon /></div>
            {nav
              ? (
                <ul className={styles.nav}>
                  <li><NavLink to="/">Главное</NavLink></li>
                  <li><NavLink to="/add">Добавить</NavLink></li>
                  <li><NavLink to="/profile">Личный кабинет</NavLink></li>
                  <li className={styles.submenu}><div onClick={() => setCategory(!category)}>Категории</div>
                    {category ? (
                      <ul className={styles.category}>
                        <li><NavLink to="/electronics">Электроника</NavLink></li>
                        <li><NavLink to="/household">Все для дома</NavLink></li>
                        <li><NavLink to="/clothes">Одежда</NavLink></li>
                        <li><NavLink to="/cars">Автомобиль</NavLink></li>
                        <li><NavLink to="/property">Недвижимость</NavLink></li>
                      </ul>
                    )
                      : null}
                  </li>
                  <li>Вход</li>
                </ul>
              )
              : null}
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavMobile
