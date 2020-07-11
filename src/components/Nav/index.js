import React from 'react'
import styles from './nav.module.css'
import MainNav from './mainNav'
import CategoryNav from './categoryNav'

const Nav = () => (
  <header>
    <div className={`container ${styles.header__container}`}>
      <MainNav />
      <CategoryNav />
    </div>
  </header>
)

export default Nav
