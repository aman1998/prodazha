import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './styles.module.css'
import { changeField } from '../../store/actions'
import IconsBtn from '../IconsBtn'

const GetProducts = () => {
  // const [error, setError] = React.useState('')
  const { search, addList, token } = useSelector((state) => ({
    search: state.search,
    addList: state.list.addList,
    favoritesList: state.profiles.favoritesList,
    profile: state.profiles.profile,
    token: state.profiles.token,
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
  }, [changeValue, token])

  return (
    <div>
      <div className={`container ${styles.wrapper}`}>
        { addList.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())).map(
          (list) => (
            <div key={list.id} className={styles.block}>
              <img className={styles.img} alt="#" />
              <p>{`${list.price} сом`}</p>
              <div>{list.title}</div>
              <IconsBtn />
            </div>
          ))}
      </div>
    </div>
  )
}

export default GetProducts
