import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { string } from 'prop-types'
import PageTemplate from '../../components/pageTemplates/pageTemplate'
import Login from '../Login'
import { changeField } from '../../store/actions'
import styles from './style.module.css'
import Heart from '../../components/Icons/heart'
import Message from '../../components/Icons/message'
import User from '../../components/Icons/user'

const SubPage = ({ category }) => {
  // const [error, setError] = React.useState('')
  const { login, addList } = useSelector((state) => ({
    login: state.login,
    addList: state.list.addList,
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
    <PageTemplate>
      <div className={`container ${styles.wrapper}`}>
        { addList.map((list) => (
          list.category === category
            ? (
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
            )
            : null
        ))}
      </div>
      {login ? <Login /> : null}
    </PageTemplate>
  )
}

SubPage.propTypes = {
  category: string.isRequired,
}

export default SubPage
