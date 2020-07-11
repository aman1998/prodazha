import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './styles.module.css'
import Login from '../../pages/Login'
import { changeField } from '../../store/actions'
import Heart from '../Icons/heart'
import Message from '../Icons/message'
import User from '../Icons/user'

const GetProducts = () => {
  // const [error, setError] = React.useState('')
  const { search, login, addList } = useSelector((state) => ({
    search: state.search,
    login: state.login,
    addList: state.list.addList,
    favoritesList: state.profiles.favoritesList,
  }))

  const dispatch = useDispatch()
  const changeValue = React.useCallback((fieldName, value) => {
    dispatch(changeField('list', fieldName, value))
  }, [dispatch])

  React.useEffect(() => {
    fetch('http://localhost:1717/list')
      .then((response) => response.json())
      .then((data) => {
        changeValue('addList', data)
      })
  }, [changeValue])

  return (
    <div>
      <div className={`container ${styles.wrapper}`}>
        { addList.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())).map(
          (list) => (
            <div key={list.id} className={styles.block}>
              <img className={styles.img} alt="#" />
              <p>{`${list.price} сом`}</p>
              <div>{list.title}</div>
              <div className={styles.icons}>
                <div>
                  <div className={styles.user}><User /></div>
                  <div className={styles.message}><Message /></div>
                </div>
                <div className={styles.heart}><Heart /></div>
              </div>
            </div>
          ))}
      </div>
      {login ? <Login /> : null}
    </div>
  )
}

export default GetProducts
