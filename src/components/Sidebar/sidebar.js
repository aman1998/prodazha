import React from 'react'
import styles from './styles.module.scss'
import { Redirect,  NavLink } from 'react-router-dom' 
import { useSelector, useDispatch } from 'react-redux'
import { getToken as getTokenAction } from '../../store/actions1'
import { showLogin } from '../../store/actions'

const Sidebar = () => {
  const [redirect, setRedirect] = React.useState(false)

  const  { token, sidebar } = useSelector(state => ({
    token: state.auth.token,
    // sidebar: state.sidebar,
  }))

  const dispatch = useDispatch()
  const getToken = (token) =>  dispatch(getTokenAction(token))
  const changeLogin = (login) => dispatch(showLogin(login))

  const deleteUser = () => {
    localStorage.removeItem('token')
    getToken('')
    setRedirect(true)
  }

  const openModal = () => {
    document.body.classList.add('modal-open')
    changeLogin(true)
  }

  const sidebarItem = [
    { id: 1, link: '/', text: 'Все товары' },
    { id: 2, link: '/electronics', text: 'Электроника' },
    { id: 3, link: '/household', text: 'Все для дома' },
    { id: 4, link: '/clothes', text: 'Одежда' },
    { id: 5, link: '/cars', text: 'Автомобиль' },
    { id: 6, link: '/property', text: 'Недвижимость' },
    { id: 7, link: '/profile', text: 'Мой профиль' },
    { id: 8, link: '/list', text: 'Мои объявления' },
    { id: 9, link: '/favorites', text: 'Избранное' },
  ]


  return (
    <nav className={styles.sidebar}>
      {sidebar ? <div className={styles.sidebarTitle}>Sales</div> : ''}
      <ul className={styles.sidebar['__items']}>
          {
                        sidebarItem.map((item) => (
                          <li key={item.id}>
                            <NavLink
                              to={item.link}
                              className={styles.sidebar['__item']}
                              activeClassName={styles.active}
                              exact
                            >
                              {item.text}
                            </NavLink>
                          </li>
                        ))
                    }
                    {token ? <li onClick={deleteUser}>Выйти</li> : <li onClick={openModal}>Вход</li>}
        </ul>
        {redirect ? <Redirect to="/" /> : null}
    </nav>
  )
}

export default Sidebar