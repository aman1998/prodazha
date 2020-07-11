import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './nav.module.css'

const CategoryNav = () => {
  const categoryItem = [
    { id: 1, link: '/electronics', text: 'Электроника' },
    { id: 2, link: '/household', text: 'Все для дома' },
    { id: 3, link: '/clothes', text: 'Одежда' },
    { id: 4, link: '/cars', text: 'Автомобиль' },
    { id: 5, link: '/property', text: 'Недвижимость' },
  ]

  return (
    <div>
      <nav>
        <ul className={styles.category}>
          {
                        categoryItem.map((category) => (
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
  )
}

export default CategoryNav
