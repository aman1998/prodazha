import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './nav.module.css'
import Filter from '../Filter'
import Search from '../Icons/search'

const Nav = () => {
    const menuItem = [
        { id: 1, link: '/', text: 'Главное' },
        { id: 2, link: '/login', text: 'Вход' },
        { id: 3, link: '/profile', text: 'Личный кабинет' },
    ]

    const categoryItem = [
        { id: 1, link: '/electronics', text: 'Электроника' },
        { id: 2, link: '/household', text: 'Все для дома' },
        { id: 3, link: '/clothes', text: 'Одежда' },
        { id: 4, link: '/cars', text: 'Автомобиль' },
        { id: 5, link: '/property', text: 'Недвижимость' },
    ]

    return(
        <header>
            <div className='container'>
                <div className={styles['header__menu']}>
                    <div className={styles.title}>Amangeldi</div>
                    <Filter />
                    <nav>
                        <ul className={styles.menu}>
                            <li>
                                <NavLink
                                    to={'./add'}
                                    className={styles.add} 
                                    activeClassName={styles.active}
                                    exact
                                >Добавить</NavLink></li>
                            {
                                menuItem.map(menu => (
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
                        </ul>
                    </nav>
                </div>
                <div>
                    <nav>
                        <ul className={styles.category}>
                            {
                                categoryItem.map(category => (
                                    <li key={category.id}>
                                        <NavLink
                                            to={category.link}
                                            className={styles.items} 
                                            activeClassName={styles.active}
                                            exact
                                        >
                                            {category.text}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Nav